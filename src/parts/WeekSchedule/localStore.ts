import {action, makeObservable, observable} from 'mobx';

import {Fetcher} from '@/utils/store/fetcher';
import {getCurrentWeekSchedule} from '@/services/api/schedule';
import {calculateWeekIndex} from '@/utils/dates/calculateWeekIndex';

export class WeekScheduleStore {
    lessonsInfo = new Fetcher(getCurrentWeekSchedule);

    @observable.ref
    group: string;

    @observable
    date: Date = new Date();

    @action
    setGroup(group: string): void {
        this.group = group;
    }
    @action
    setDate(date: Date | string): void {
        this.date = typeof date === 'string' ? new Date(date) : date;
    }

    constructor(initialGroup: string, initialDate: Date | string) {
        makeObservable(this);

        this.group = initialGroup;
        this.setDate(initialDate);
    }

    fetchWeekInfo = (): void => {
        this.lessonsInfo.fetch(this.group, calculateWeekIndex(this.date));
    };
}
