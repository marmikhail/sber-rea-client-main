import {useWeekScheduleStore} from '../../context';
import {DaysCarouselBaseProps, DaysCarouselProps} from '.';

export const useEnhance = ({onDayChange}: DaysCarouselProps): DaysCarouselBaseProps => {
    const store = useWeekScheduleStore();

    return {onDayChange, currentDay: store.date};
};
