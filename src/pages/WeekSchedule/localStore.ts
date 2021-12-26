import {container, storeKeys} from '@/di';
import {IUserStore} from '@/domain/user/types';
import {IHistory} from '@/types/router';
import {parseUrlDate, validateUrlDate} from '@/utils/format';
import {assertNotNull} from '@/utils/types';
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
    get date(): Date | null {
        const {day: dayFromHistory} = this.history.query;

        if (!dayFromHistory || !validateUrlDate(dayFromHistory)) return new Date();

        return dayFromHistory ? parseUrlDate(dayFromHistory) : new Date();
    }

    @computed
    get dateSafe(): Date {
        assertNotNull(this.date);
        return this.date;
    }
}

const historyStore = container.get<IHistory>(storeKeys.HISTORY_KEY);
const userStore = container.get<IUserStore>(storeKeys.USER_KEY);

export const WeekSchedulePageStore = WeekSchedulePageStoreBase.bind(null, historyStore, userStore);
