import {useCallback} from 'react';

import {useRouter} from '@/mobx-router/hooks/useRouter';
import {buildWeekSchedulePath} from '@/pages/WeekSchedule/builders';

import {useWeekScheduleStore} from '../../context';
import {DaysCarouselProps} from '.';

export const useEnhance = (): DaysCarouselProps => {
    const store = useWeekScheduleStore();
    const history = useRouter();

    const handleDayChange = useCallback(
        (day: Date) => {
            history.push(buildWeekSchedulePath(store.group, day));
        },
        [history, store.group],
    );

    return {onDayChange: handleDayChange, currentDay: store.date};
};
