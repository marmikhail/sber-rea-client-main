import {CreateUserDto} from '@/services/user/dto';

export type UserInfo = {
    uid: string;
    group: string;
    name: string;
};

export type IUserRepo = {
    register: (info: CreateUserDto) => Promise<void>;
    updateUser: (info: CreateUserDto) => Promise<void>;
    getUserInfo: () => Promise<UserInfo | null>;
};

export type IUserStore = {
    isAuthenticated: boolean;
    isAuthChecked: boolean;
    isSaving: boolean;
    userInfo: UserInfo | null;
    userInfoSafe: UserInfo;

    fetchUserInfo: () => Promise<void>;
    setUser: (userInfo: UserInfo) => Promise<void>;
    saveUser: (userInfo: UserInfo) => Promise<void>;
};
