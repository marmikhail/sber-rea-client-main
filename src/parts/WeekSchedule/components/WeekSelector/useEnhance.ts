import {getWeek, addWeeks} from 'date-fns';

import {useWeekScheduleStore} from '../../context';
import type {WeekSelectorBaseProps, WeekSelectorProps} from '.';
import {getWeekStartDate} from '@/utils/dates/getWeekStartDate';

export const useEnhance = ({onDayChange}: WeekSelectorProps): WeekSelectorBaseProps => {
    const store = useWeekScheduleStore();

    const weekNumber = getWeek(store.date);

    const handleChooseNextWeek = () => {
        const date = getWeekStartDate(addWeeks(store.date, 1));
        onDayChange(date);
    };

    const handleChoosePrevWeek = () => {
        const date = getWeekStartDate(addWeeks(store.date, -1));
        onDayChange(date);
    };

    return {weekNumber, onChooseNextWeek: handleChooseNextWeek, onChoosePrevWeek: handleChoosePrevWeek};
};
