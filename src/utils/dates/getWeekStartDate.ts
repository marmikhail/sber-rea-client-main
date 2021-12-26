import {getDate, getDay} from 'date-fns';
import {fixWeekDay} from './fixDate';

/** Возвращает дату со всеми параметрами переданной, но с днём установленным в начало недели */
export const getWeekStartDate = (date: Date): Date => {
    const firstDay = new Date(date);

    firstDay.setDate(getDate(date) - fixWeekDay(getDay(date)));

    return firstDay;
};
