import {action, makeObservable, observable} from 'mobx';

import {userStore} from '@/domain/user/store';
import {register} from '@/services/user';
import type {IUserStore, UserInfo} from '@/domain/user/types';
import {validateGroup} from '@/services/api/group';

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
    validatedRegister = async (userInfo: UserInfo) => {
        try {
            await register(userInfo);

            this.registerSucceed = true;
            this._userStore.setUser(userInfo);
        } catch {
            this.registerError = 'Произошла неизвестная ошибка';
        }
    };

    @action
    register = async (group: string) => {
        this.registerInProgress = true;
        this.registerSucceed = false;
        this.registerError = null;

        const validationRes = await validateGroup(group);

        if (validationRes.ok && validationRes.data) {
            const userInfo: UserInfo = {login: this._userStore.userIdSafe, group};
            this.validatedRegister(userInfo);
        } else {
            this.registerError = 'Невалидная группа';
        }

        this.registerInProgress = false;
    };
}

export const LoginStore = LoginStoreBase.bind(null, userStore);
