import {addDays} from 'date-fns';
import {container, storeKeys} from '@/di';
import {IAssistant} from '@/di/interfaces';
import {IHistory} from '@/types/router';

import {buildWeekSchedulePath} from './builders';
import {IWeekScheduleStore} from './types';

class WeekScheduleAssistantBase {
    handleShowToday = () => {
        this.history.push(buildWeekSchedulePath(this.localStore.group, new Date()));
    };

    handleShowTomorrow = () => {
        this.history.push(buildWeekSchedulePath(this.localStore.group, addDays(new Date(), 1)));
    };

    constructor(private assistant: IAssistant, private history: IHistory, private localStore: IWeekScheduleStore) {}

    cleanup = () => {};
}

export const WeekScheduleAssistant = WeekScheduleAssistantBase.bind(
    null,
    container.get(storeKeys.ASSISTANT_KEY),
    container.get(storeKeys.HISTORY_KEY),
);
