import {formatUrlDate} from '@/utils/format';

export const buildWeekSchedulePath = (group: string, date: Date): string =>
    `/schedule?day=${formatUrlDate(date)}&group=${group}`;
