import {ASSISTANT_KEY, container, HISTORY_KEY} from '@/di';
import {IAssistant} from '@/di/interfaces';
import {getWeekScheduleRawPath} from '@/pages/WeekSchedule/builders';
import {IHistory} from '@/types/router';
import {getWeekStartDate} from '@/utils/dates/getWeekStartDate';
import {addDays, addWeeks} from 'date-fns';
import {commonAssistantActions} from '../actions';

class CommonHandlerBase {
    constructor(private assistant: IAssistant, private history: IHistory) {}

    init = () => {
        this.assistant.subscribe(commonAssistantActions.showSchedule.type, this.handleShowSchedule);
        this.assistant.subscribe(commonAssistantActions.showSettings.type, this.handleShowSettings);
        this.assistant.subscribe(commonAssistantActions.showMenu.type, this.handleShowMenu);
        this.assistant.subscribe(commonAssistantActions.showForOtherGroup.type, this.handleShowForAnotherGroup);
        this.assistant.subscribe(commonAssistantActions.showToday.type, this.handleShowToday);
        this.assistant.subscribe(commonAssistantActions.showTomorrow.type, this.handleShowTomorrow);
        this.assistant.subscribe(commonAssistantActions.showThisWeek.type, this.handleShowThisWeek);
        this.assistant.subscribe(commonAssistantActions.showNextWeek.type, this.handleShowNextWeek);
    };

    private handleShowSchedule = () => {
        this.history.push('/today');
        this.assistant.sendCommand(commonAssistantActions.showThisWeekResponse());
    };
    private handleShowSettings = () => {
        this.history.push('/settings');
        this.assistant.sendCommand(commonAssistantActions.showSettingsResponse());
    };
    private handleShowMenu = () => {
        this.history.push('/');
        this.assistant.sendCommand(commonAssistantActions.showMenuResponse());
    };
    private handleShowForAnotherGroup = () => {
        this.history.push('/other-group');
        this.assistant.sendCommand(commonAssistantActions.showForOtherGroupResponse());
    };

    private handleShowToday = () => {
        this.history.push('/today');

        this.assistant.sendCommand(commonAssistantActions.showTodayResponse());
    };

    private handleShowTomorrow = () => {
        const tomorrow = addDays(new Date(), 1);

        this.history.push(getWeekScheduleRawPath(tomorrow));
        this.assistant.sendCommand(commonAssistantActions.showTomorrowResponse());
    };

    private handleShowNextWeek = () => {
        const nextWeekStart = getWeekStartDate(addWeeks(new Date(), 1));

        this.history.push(getWeekScheduleRawPath(nextWeekStart));
        this.assistant.sendCommand(commonAssistantActions.showNextWeekResponse());
    };

    private handleShowThisWeek = () => {
        const currentWeekStart = getWeekStartDate(new Date());

        this.history.push(getWeekScheduleRawPath(currentWeekStart));

        this.assistant.sendCommand(commonAssistantActions.showThisWeekResponse());
    };
}

const historyStore = container.get<IHistory>(HISTORY_KEY);
const assistantStore = container.get<IAssistant>(ASSISTANT_KEY);

export const CommonHandler = CommonHandlerBase.bind(null, assistantStore, historyStore);
