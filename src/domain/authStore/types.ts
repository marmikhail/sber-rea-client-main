export type IAuthStore = {
    isAuthFailed: boolean;

    reset: () => void;
    initUserAuth: () => void;
};
