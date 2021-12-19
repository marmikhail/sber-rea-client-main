import * as Joi from 'joi';
import {UserInfo} from '@/domain/user/types';

const userInfoScheme = Joi.object({
    uid: Joi.number().required(),
    name: Joi.string().required(),
    group: Joi.string().required(),
});

export const validateUserInfo = (userInfo: unknown): userInfo is UserInfo => {
    const {error} = userInfoScheme.validate(userInfo);

    return !error;
};
