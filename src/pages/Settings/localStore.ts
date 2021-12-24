import {action, makeObservable, observable} from 'mobx';

import {userStore} from '@/domain/user/store';
import {IUserStore, UserInfo} from '@/domain/user/types';
import {updateUser} from '@/services/user';
import {validateGroup} from '@/services/api/group';

class SettingsStoreBase {
    constructor(private _userStore: IUserStore) {
        makeObservable(this);
    }

    @observable
    updateSucceed = false;
    @observable
    updateInProgress = false;
    @observable
    updateError: string | null = null;

    @action
    validatedUpdate = async (userInfo: UserInfo) => {
        const res = await updateUser(userInfo);

        if (res.ok) {
            this.updateSucceed = true;
            this._userStore.setUser(userInfo);
        } else {
            this.updateError = 'Произошла неизвестная ошибка';
        }
    };

    @action
    update = async (group: string) => {
        this.updateInProgress = true;
        this.updateSucceed = false;
        this.updateError = null;

        const validationRes = await validateGroup(group);

        if (validationRes.ok && validationRes.data) {
            const userInfo: UserInfo = {login: this._userStore.userIdSafe, group};
            this.validatedUpdate(userInfo);
        } else {
            this.updateError = 'Невалидная группа';
        }

        this.updateInProgress = false;
    };
}

export const SettingsStore = SettingsStoreBase.bind(null, userStore);
