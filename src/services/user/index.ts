import {UserInfo} from '@/domain/user/types';
import {unsafeParse} from '@/utils/unsafeParse';

import type {CreateUserDto} from './dto';
import {USER_STORAGE_KEY} from './constants';
import {validateUserInfo} from './schema';

export const register = async (user: CreateUserDto): Promise<void> => {
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
};

export const updateUser = register;

export const getUserInfo = async (): Promise<UserInfo | null> => {
    const repoInfo = localStorage.getItem(USER_STORAGE_KEY);
    if (!repoInfo) return null;

    const potentialUserInfo = unsafeParse(repoInfo);
    const isUserInfo = validateUserInfo(potentialUserInfo);

    return isUserInfo ? potentialUserInfo : null;
};

export const userRepository = {
    register,
    updateUser,
    getUserInfo,
};
