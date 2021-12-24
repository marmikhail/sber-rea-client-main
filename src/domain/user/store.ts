import {action, computed, makeObservable, observable} from 'mobx';

import {userRepository} from '@/services/user';

import {IUserRepo, IUserStore, UserInfo} from './types';
import {assertNotNull} from '@/utils/types';

export class UserStore implements IUserStore {
    constructor(private _userInfoRepo: IUserRepo) {
        makeObservable(this);
    }

    @observable.ref
    isAuthenticated = false;

    @observable.ref
    isAuthChecked = false;

    @observable.ref
    isSaving = false;

    @observable.ref
    userInfo: UserInfo | null = null;

    @observable.ref
    userId: string | null = null;

    @computed
    get userIdSafe(): string {
        assertNotNull(this.userId);
        return this.userId;
    }

    @computed
    get userInfoSafe(): UserInfo {
        assertNotNull(this.userInfo);
        return this.userInfo;
    }

    @action
    setUser = async (userInfo: UserInfo): Promise<void> => {
        this.isAuthenticated = true;
        this.userInfo = userInfo;

        await this.saveUser(userInfo);
    };

    saveUser = async (userInfo: UserInfo): Promise<void> => {
        this.isSaving = true;

        await this._userInfoRepo.register(userInfo);

        this.isSaving = false;
    };
}

export const userStore = new UserStore(userRepository);
