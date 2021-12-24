import {UserInfo} from '@/domain/user/types';

import {request, Result} from '@/utils/request';
import {API_URL} from '@/settings';
import type {CreateUserDto} from './dto';

export const register = async (user: CreateUserDto): Promise<Result<UserInfo>> =>
    request(`${API_URL}/PostUser?login=${user.login}&group=${user.group}`, {method: 'POST'});

export const updateUser = register;

const isUserValid = (info: UserInfo): boolean => info.group !== null;

export const getUserInfo = async (login: string): Promise<UserInfo | null> => {
    const res = await request<UserInfo>(`${API_URL}/GetUser?login=${login}`, {method: 'GET'});

    return res.ok && isUserValid(res.data) ? res.data : null;
};

export const userRepository = {
    register,
    updateUser,
    getUserInfo,
};
