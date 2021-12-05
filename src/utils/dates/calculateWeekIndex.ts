import {differenceInCalendarWeeks} from 'date-fns';

import {EDU_YEAR_START_DATE} from '@/constants/date';

export const calculateWeekIndex = (date: Date): number => {
    return differenceInCalendarWeeks(date, EDU_YEAR_START_DATE) + 1;
};
