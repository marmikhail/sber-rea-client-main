import {Container} from 'inversify';

import {History} from '@/mobx-router/core/History';
import {AssistantStore} from '@/domain/assistant/store';
import {IAssistant} from './interfaces';
import {IUserStore} from '@/domain/user/types';
import {userStore} from '@/domain/user/store';

export const HISTORY_KEY = 'HISTORY_KEY';
export const ASSISTANT_KEY = 'ASSISTANT_KEY';
export const USER_KEY = 'USER_KEY';

export const container = new Container();

container.bind(HISTORY_KEY).toConstantValue(new History());
container.bind<IAssistant>(ASSISTANT_KEY).toConstantValue(new AssistantStore());
container.bind<IUserStore>(USER_KEY).toConstantValue(userStore);
