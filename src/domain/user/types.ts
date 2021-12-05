import {CreateUserDto} from '@/services/user/dto';

export type UserId = string & {__userId: never};
export type UserInfo = {
    uid: string;
    name: string;
    group: string;
};

export type IUserRepo = {
    register: (info: CreateUserDto) => Promise<void>;
    getUserInfo: (uid: string) => Promise<UserInfo | null>;
};
