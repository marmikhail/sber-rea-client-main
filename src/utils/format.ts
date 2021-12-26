import {format, parse} from 'date-fns';
import {ru} from 'date-fns/locale';

// Используется для отображения дня недели в развернутом формате
export const WEEK_DAY_FORMAT = 'EEEE, dd MMM';
export const formatWeekDay = (date: Date): string => format(date, WEEK_DAY_FORMAT, {locale: ru});

// используется для хранения в URL(встроенный Date умеет его парсить)
export const URL_DAY_FORMAT = 'yyyy/MM/dd';
export const formatUrlDate = (date: Date): string => format(date, URL_DAY_FORMAT);
export const validateUrlDate = (date: string): boolean => /\d{4}\/\d{2}\/\d{2}/.test(date);
export const parseUrlDate = (date: string): Date => parse(date, URL_DAY_FORMAT, new Date());

// Используется для обычного отображения даты
export const COMMON_DATE_FORMAT = 'dd.MM.yyyy';
export const formatCommonDate = (date: Date): string => format(date, COMMON_DATE_FORMAT);
