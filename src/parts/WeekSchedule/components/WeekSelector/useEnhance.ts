import {getWeek, addWeeks} from 'date-fns';

import {useRouter} from '@/mobx-router/hooks/useRouter';
import {buildWeekSchedulePath} from '@/pages/WeekSchedule/builders';

import {useWeekScheduleStore} from '../../context';
import type {WeekSelectorBaseProps} from '.';

export const useEnhance = (): WeekSelectorBaseProps => {
    const router = useRouter();
    const store = useWeekScheduleStore();

    const weekNumber = getWeek(store.date);

    const handleChooseNextWeek = () => {
        const date = addWeeks(store.date, 1);
        router.push(buildWeekSchedulePath(store.group, date));
    };

    const handleChoosePrevWeek = () => {
        const date = addWeeks(store.date, -1);
        router.push(buildWeekSchedulePath(store.group, date));
    };

    return {weekNumber, onChooseNextWeek: handleChooseNextWeek, onChoosePrevWeek: handleChoosePrevWeek};
};
