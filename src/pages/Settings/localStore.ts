import {action, computed, makeObservable, observable} from 'mobx';

import {IUserStore, UserInfo} from '@/domain/user/types';
import {updateUser} from '@/services/user';
import {validateGroup} from '@/services/api/group';
import {container, storeKeys} from '@/di';

class SettingsStoreBase {
    constructor(private _userStore: IUserStore) {
        makeObservable(this);
    }

    @computed
    get currentUserGroup(): string {
        return this._userStore.userInfoSafe.group;
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

const userStore = container.get<IUserStore>(storeKeys.USER_KEY);

export const SettingsStore = SettingsStoreBase.bind(null, userStore);
