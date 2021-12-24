import {createActions} from 'rainbow-actions';

const commonPrefix = 'common/';

export const commonAssistantActions = createActions<{
    showSchedule: never;
    showScheduleResponse: never;

    showSettings: never;
    showSettingsResponse: never;

    showMenu: never;
    showMenuResponse: never;

    showForOtherGroup: never;
    showForOtherGroupResponse: never;

    showToday: never;
    showTodayResponse: never;

    showTomorrow: never;
    showTomorrowResponse: never;

    showThisWeek: never;
    showThisWeekResponse: never;

    showNextWeek: never;
    showNextWeekResponse: never;
}>()(commonPrefix);
