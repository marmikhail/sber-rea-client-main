export type AssistantAction = {type: string; payload?: Record<string, any>};

export type AssistantData = {action: AssistantAction};
