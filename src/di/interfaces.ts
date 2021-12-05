import {AssistantAction} from '@sberdevices/assistant-client';

export type IAssistant = {
    sendCommand: (action: AssistantAction) => Promise<void>;
    subscribe: <T extends AssistantAction>(f: (action: T) => void) => void;
    unsubscribe: (f: () => void) => void;
};
