import {action, computed, makeObservable, observable} from 'mobx';
import {assertExists} from '@/utils/types';

import {UserId, UserInfo} from './types';
import {getUserInfo} from '@/services/user';

export class UserStore {
    constructor() {
        makeObservable(this);
    }

    @observable
    userId: UserId | null = null;

    @observable
    isAuthenticated = false;

    @observable
    isReady = false;

    @observable
    private userInfo?: UserInfo;

    @computed
    get safeUserInfo(): UserInfo {
        assertExists(this.userInfo);
        return this.userInfo;
    }

    @action
    setUid(uid: UserId) {
        this.userId = uid;
    }

    @action
    async fetchUserInfo() {
        const res = await getUserInfo(this.userId as UserId);

        this.isReady = true;
    }
}

export const userStore = new UserStore();
