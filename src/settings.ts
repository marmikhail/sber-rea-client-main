// Но они быстро просрачиваются, так что пусть будет пока

import {tryValue} from './utils/types';

export const SBER_TOKEN = tryValue(REACT_APP_TOKEN, 'Нужно задать REACT_APP_TOKEN в dotenv');
export const SBER_APP = 'mir_rea';

export const API_URL = 'https://rasp-rea.herokuapp.com';
