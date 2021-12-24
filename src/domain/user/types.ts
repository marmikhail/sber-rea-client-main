import {CreateUserDto} from '@/services/user/dto';
import {Result} from '@/utils/request';

export type UserInfo = {
    group: string;
    login: string;
};

export type IUserRepo = {
    register: (info: CreateUserDto) => Promise<Result<UserInfo>>;
    updateUser: (info: CreateUserDto) => Promise<Result<UserInfo>>;
    getUserInfo: (userId: string) => Promise<UserInfo | null>;
};

export type IUserStore = {
    isAuthenticated: boolean;
    isAuthChecked: boolean;
    isSaving: boolean;
    userInfo: UserInfo | null;
    userInfoSafe: UserInfo;

    userId: string | null;
    userIdSafe: string;

    setUser: (userInfo: UserInfo) => Promise<void>;
    saveUser: (userInfo: UserInfo) => Promise<void>;
};
