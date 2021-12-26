import {History} from '@/mobx-router/core/History';
import {AssistantStore} from '@/domain/assistant/store';
import {Container} from 'inversify';
import {IAssistant} from './interfaces';
import {IUserStore} from '@/domain/user/types';
import {UserStore} from '@/domain/user/store';
import type {Values} from '@/types/utils';
import {IAuthStore} from '@/domain/authStore/types';
import {AuthStore} from '@/domain/authStore';

export const container = new Container();

export const storeKeys = {
    HISTORY_KEY: 'HISTORY_KEY',
    ASSISTANT_KEY: 'ASSISTANT_KEY',
    USER_KEY: 'USER_KEY',
    USER_AUTH_KEY: 'USER_AUTH_KEY',
} as const;

export type StoreKeys = Values<typeof storeKeys>;

const historyStore = new History();
const userStore = new UserStore();
const assistantStore = new AssistantStore();
const authStore = new AuthStore(userStore, assistantStore);

container.bind(storeKeys.HISTORY_KEY).toConstantValue(historyStore);
container.bind<IUserStore>(storeKeys.USER_KEY).toConstantValue(userStore);
container.bind<IAssistant>(storeKeys.ASSISTANT_KEY).toConstantValue(assistantStore);
container.bind<IAuthStore>(storeKeys.USER_AUTH_KEY).toConstantValue(authStore);
