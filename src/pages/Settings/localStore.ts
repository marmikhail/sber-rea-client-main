import {action, makeObservable, observable} from 'mobx';

import {userStore} from '@/domain/user/store';
import {IUserStore, UserInfo} from '@/domain/user/types';
import {updateUser} from '@/services/user';

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
    update = async (uid: string, name: string, group: string) => {
        this.updateInProgress = true;
        this.updateSucceed = false;
        this.updateError = null;

        const userInfo: UserInfo = {uid, name, group};

        try {
            await updateUser(userInfo);

            this.updateSucceed = true;
            this._userStore.setUser(userInfo);
        } catch {
            this.updateError = 'Произошла неизвестная ошибка';
        }

        this.updateInProgress = false;
    };
}

export const SettingsStore = SettingsStoreBase.bind(null, userStore);
