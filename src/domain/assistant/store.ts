import {createSmartappDebugger, createAssistant} from '@sberdevices/assistant-client';

import {SBER_TOKEN} from '@/settings';

import {AssistantAction, AssistantData} from './types';

const getState = () => ({});
const initAssistant = () => {
    if (process.env.NODE_ENV !== 'production') {
        return createSmartappDebugger({
            token: SBER_TOKEN,
            initPhrase: 'Запусти mir_rea',
            getState,
            settings: {
                dubbing: false,
            },
        });
    }

    return createAssistant({getState});
};

type ActionHandler = (action: AssistantAction) => void;

export class AssistantStore {
    private assistant: ReturnType<typeof createAssistant>;
    private commandHandlersRepo = new Map<string, Set<ActionHandler>>();

    constructor() {
        this.assistant = initAssistant();

        this.assistant.on('data', res => {
            if (res.type !== 'smart_app_data') return;

            const {action} = res as unknown as AssistantData;
            const handlers = this.commandHandlersRepo.get(action.type);

            if (handlers) {
                handlers.forEach(f => f(action));
            }
        });
    }

    sendCommand = (action: AssistantAction): Promise<void> => {
        return new Promise((resolve, reject) =>
            this.assistant.sendData({action}, res => {
                if (res.type === 'smart_app_error') reject();
                else resolve();
            }),
        );
    };

    subscribe = <T extends AssistantAction>(actionType: string, func: (action: T) => void): void => {
        const handlersPool = this.commandHandlersRepo.get(actionType);

        if (!handlersPool) {
            const newHandlersSet = new Set<ActionHandler>();
            newHandlersSet.add(func as ActionHandler);

            this.commandHandlersRepo.set(actionType, newHandlersSet);
        } else {
            handlersPool.add(func as ActionHandler);
        }
    };

    unsubscribe = <T extends AssistantAction>(actionType: string, func: (action: T) => void): void => {
        const handlersPool = this.commandHandlersRepo.get(actionType);

        if (handlersPool) handlersPool.delete(func as ActionHandler);
    };
}
