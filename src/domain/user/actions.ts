export type UserInitAction = {type: 'user_init'; payload: {sub: string}};
export const USER_INIT_ACTION = 'user_init' as const;
