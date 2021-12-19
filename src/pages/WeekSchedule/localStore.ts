import {container, HISTORY_KEY, USER_KEY} from '@/di';
import {IUserStore} from '@/domain/user/types';
import {IHistory} from '@/types/router';
import {computed, makeObservable} from 'mobx';

class WeekSchedulePageStoreBase {
    constructor(private history: IHistory, private userStore: IUserStore) {
        makeObservable(this);
    }

    @computed
    get group(): string {
        return this.history.query.group ?? this.userStore.userInfoSafe.group;
    }

    @computed
    get date(): Date {
        const {day: dayFromHistory} = this.history.query;

        return dayFromHistory ? new Date(dayFromHistory) : new Date();
    }
}

const historyStore = container.get<IHistory>(HISTORY_KEY);
const userStore = container.get<IUserStore>(USER_KEY);

export const WeekSchedulePageStore = WeekSchedulePageStoreBase.bind(null, historyStore, userStore);
