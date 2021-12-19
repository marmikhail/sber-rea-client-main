import {formatUrlDate} from '@/utils/format';

export const buildWeekSchedulePath = (group: string, date: Date): string =>
    `/schedule?day=${formatUrlDate(date)}&group=${group}`;

export const getWeekScheduleRawPath = (date: Date): string => `/schedule?day=${formatUrlDate(date)}`;
