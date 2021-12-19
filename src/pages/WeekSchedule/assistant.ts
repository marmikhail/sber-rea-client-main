import {addDays} from 'date-fns';
import {ASSISTANT_KEY, container, HISTORY_KEY} from '@/di';
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

    constructor(private assistant: IAssistant, private history: IHistory, private localStore: IWeekScheduleStore) {
        this.assistant.subscribe('for_today', this.handleShowToday);
        this.assistant.subscribe('for_tomorrow', this.handleShowTomorrow);
    }

    cleanup = () => {
        this.assistant.unsubscribe('for_today', this.handleShowToday);
        this.assistant.unsubscribe('for_tomorrow', this.handleShowTomorrow);
    };
}

export const WeekScheduleAssistant = WeekScheduleAssistantBase.bind(
    null,
    container.get(ASSISTANT_KEY),
    container.get(HISTORY_KEY),
);
