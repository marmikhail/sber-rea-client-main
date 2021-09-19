import {observable, action, makeObservable, computed} from 'mobx';

import {DayInfo} from '@/domain/schedule/types';
import {getCurrentWeekSchedule} from '@/services/schedule';
import {assertNotNull} from '@/utils/types';

const GROUP_MOCK = '291Д-10МО/18';

// TODO: add cancellation token
export class SchedulePageStore {
    constructor() {
        makeObservable(this);
    }

    @observable
    loading = false;
    @observable
    ready = false;
    @observable
    error: string | null = null;

    @observable.ref
    schedule: DayInfo[] | null = null;

    @computed
    get safeSchedule(): DayInfo[] {
        assertNotNull(this.schedule);
        return this.schedule;
    }

    @action
    private getScheduleSuccess(schedule: DayInfo[]): void {
        this.loading = false;
        this.ready = true;
        this.schedule = schedule;
    }

    @action
    private getScheduleFail(): void {
        this.loading = false;
        this.error = 'Не удалось загрузить расписание';
    }

    @action
    async getSchedule(): Promise<void> {
        this.loading = true;
        this.ready = false;
        this.error = null;

        const res = await getCurrentWeekSchedule(GROUP_MOCK);

        if (res.ok) {
            this.getScheduleSuccess(res.data.lessons);
        } else {
            this.getScheduleFail();
        }
    }
}
