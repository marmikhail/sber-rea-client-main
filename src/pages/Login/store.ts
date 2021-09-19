import {action, makeObservable, observable} from 'mobx';

import {UserStore, userStore} from '@/domain/user/store';
import {register} from '@/services/user';

class LoginStoreBase {
    constructor(private _userStore: UserStore) {
        makeObservable(this);
    }

    @observable
    registerSucceed = false;
    @observable
    registerInProgress = false;

    @action
    register = (uid: number, name: string, group: string) => register({uid, name, group});
}

export const LoginStore = LoginStoreBase.bind(null, userStore);
