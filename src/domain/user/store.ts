import {action, makeObservable, observable} from 'mobx';

import {userRepository} from '@/services/user';

import {IUserRepo, UserId} from './types';

export class UserStore {
    constructor(private _userInfoRepo: IUserRepo) {
        makeObservable(this);
    }

    @observable
    userId: UserId | null = null;

    @observable.ref
    isAuthenticated = false;

    @observable.ref
    isReady = false;

    @observable.ref
    group: string | null = null;

    @observable.ref
    name: string | null = null;

    @action
    async fetchUserInfo(uid: string): Promise<void> {
        const res = await this._userInfoRepo.getUserInfo(uid);

        if (!res) {
            this.isAuthenticated = false;
        } else {
            const {group, name, uid} = res;
            this.group = group;
            this.name = name;
            this.userId = uid as UserId;
        }

        this.isReady = true;
    }
}

export const userStore = new UserStore(userRepository);
