import {ASSISTANT_KEY, container, USER_KEY} from '@/di';
import {IAssistant} from '@/di/interfaces';
import {userRepository} from '@/services/user';

import {action, makeObservable} from 'mobx';
import {UserInitAction, USER_INIT_ACTION} from './actions';
import {IUserRepo, IUserStore} from './types';

class AuthStoreBase {
    constructor(private userStore: IUserStore, private userRepo: IUserRepo, private assistant: IAssistant) {
        makeObservable(this);

        this.assistant.subscribe<UserInitAction>(USER_INIT_ACTION, this.handleInitInfo);
    }

    @action
    handleInitInfo = (action: UserInitAction) => {
        const {sub} = action.payload;

        this.userStore.userId = sub;
        this.fetchUserInfo(sub);
    };

    @action
    async fetchUserInfo(userId: string): Promise<void> {
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

const userStore = container.get<IUserStore>(USER_KEY);
const assistant = container.get<IAssistant>(ASSISTANT_KEY);

export const AuthStore = AuthStoreBase.bind(null, userStore, userRepository, assistant);
