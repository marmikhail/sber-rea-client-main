import {createSmartappDebugger, createAssistant} from '@sberdevices/assistant-client';

import {SBER_TOKEN} from '@/settings';

import {AssistantAction} from './types';

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

export class AssistantStore {
    private assistant: ReturnType<typeof createAssistant>;
    private commandHandlersRepo = new Set<(action: AssistantAction) => void>();

    constructor() {
        this.assistant = initAssistant();

        this.assistant.on('command', res => {
            this.commandHandlersRepo.forEach(f => f(res));
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

    subscribe = <TAction extends AssistantAction>(func: (res: TAction) => void): void => {
        this.commandHandlersRepo.add(func as (action: AssistantAction) => void);
    };

    unsubscribe = (func: () => void): void => {
        this.commandHandlersRepo.delete(func);
    };
}
