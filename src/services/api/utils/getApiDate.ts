import {format} from 'date-fns';

const API_DATE_FORMAT = 'dd.MM.yyyy';
export const getApiDate = (date: Date): string => format(date, API_DATE_FORMAT);
