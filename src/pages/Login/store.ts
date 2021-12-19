import {action, makeObservable, observable} from 'mobx';

import {userStore} from '@/domain/user/store';
import {register} from '@/services/user';
import type {IUserStore, UserInfo} from '@/domain/user/types';

class LoginStoreBase {
    constructor(private _userStore: IUserStore) {
        makeObservable(this);
    }

    @observable
    registerSucceed = false;
    @observable
    registerInProgress = false;
    @observable
    registerError: string | null = null;

    @action
    register = async (uid: string, name: string, group: string) => {
        this.registerInProgress = true;
        this.registerSucceed = false;
        this.registerError = null;

        const userInfo: UserInfo = {uid, name, group};

        try {
            await register(userInfo);

            this.registerSucceed = true;
            this._userStore.setUser(userInfo);
        } catch {
            this.registerError = 'Произошла неизвестная ошибка';
        }

        this.registerInProgress = false;
    };
}

export const LoginStore = LoginStoreBase.bind(null, userStore);
