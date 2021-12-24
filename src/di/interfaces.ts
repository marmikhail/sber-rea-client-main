import {AssistantAction} from '@/domain/assistant/types';

export type IAssistant = {
    sendCommand: (action: AssistantAction) => Promise<void>;
    subscribe: <T extends AssistantAction>(actionType: string, f: (action: T) => void) => void;
    unsubscribe: <T extends AssistantAction>(actionType: string, f: (action: T) => void) => void;
};
