import {request} from '@/utils/request';
import type {CreateUserDto} from './dto';

export const register = (body: CreateUserDto) => request('', {method: 'POST', body: JSON.stringify(body)});

export const getUserInfo = (uid: number) => request(`/user/info?uid=${uid}`, {method: 'GET'});
