import {IAssistant} from '@/di/interfaces';
import {userRepository} from '@/services/user';
import {withTimeout} from '@/utils/promise/withTimeout';

import {action, makeObservable, observable} from 'mobx';
import {UserInitAction, USER_INIT_ACTION} from '../user/actions';
import {IUserRepo, IUserStore} from '../user/types';

class AuthStoreBase {
    @observable
    isAuthFailed = false;

    constructor(private userRepo: IUserRepo, private userStore: IUserStore, private assistant: IAssistant) {
        makeObservable(this);
    }

    @action
    reset(): void {
        this.isAuthFailed = false;
    }

    @action
    initUserAuth = async (): Promise<void> => {
        let handler: ((value: UserInitAction) => void) | null = null;

        const potentialRes = new Promise<UserInitAction>(resolve => {
            handler = resolve;
            this.assistant.subscribe<UserInitAction>(USER_INIT_ACTION, handler);
        });

        try {
            const res = await withTimeout(potentialRes, 10000);
            this.handleInitInfo(res);
        } catch (e) {
            this.isAuthFailed = true;
        }

        if (handler) this.assistant.unsubscribe(USER_INIT_ACTION, handler);
    };

    @action
    private handleInitInfo = (action: UserInitAction) => {
        const {sub} = action.payload;

        this.userStore.userId = sub;
        this.fetchUserInfo(sub);
    };

    @action
    private async fetchUserInfo(userId: string): Promise<void> {
        this.userStore.isAuthChecked = false;
        this.userStore.isAuthenticated = false;
        this.userStore.userInfo = null;

        const res = await this.userRepo.getUserInfo(userId);

        if (!res) {
            this.userStore.isAuthenticated = false;
            this.userStore.userInfo = null;
        } else {
            this.userStore.isAuthenticated = true;
            this.userStore.userInfo = res;
        }

        this.userStore.isAuthChecked = true;
    }
}

export const AuthStore = AuthStoreBase.bind(null, userRepository);
