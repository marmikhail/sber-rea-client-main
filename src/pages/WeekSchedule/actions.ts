import {createActions} from 'rainbow-actions';

type WeekScheduleActions = {
    showForToday: never;
    showForTomorrow: never;
    goNextWeek: never;
    goPrevWeek: never;

    nextDay: never;
    prevDay: never;

    showDay: never;
};

export const weekSchedulePageActions = createActions<WeekScheduleActions>()('WeekSchedulePage');
