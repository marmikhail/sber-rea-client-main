import {format} from 'date-fns';
import {ru} from 'date-fns/locale';

export const WEEK_DAY_FORMAT = 'EEEE, dd MMM';
export const formatWeekDay = (date: Date): string => format(date, WEEK_DAY_FORMAT, {locale: ru});

export const URL_DAY_FORMAT = 'MM-dd-yyyy';
export const formatUrlDate = (date: Date): string => format(date, URL_DAY_FORMAT);
