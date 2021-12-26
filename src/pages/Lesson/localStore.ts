import {autorun, computed, IReactionDisposer, makeObservable} from 'mobx';

import {getLessonInfo} from '@/services/api/schedule';
import {Fetcher} from '@/utils/store/fetcher';
import {container, storeKeys} from '@/di';
import {assertNotNull} from '@/utils/types';
import {Disposable} from '@/utils/store/disposable';

import type {LessonFullInfo} from '@/domain/schedule/types';
import type {IHistory} from '@/mobx-router/core/interfaces/IHistory';
import type {IUserStore} from '@/domain/user/types';
import {parseUrlDate} from '@/utils/format';

class LessonPageStoreBase extends Disposable {
    lessonInfo = new Fetcher(getLessonInfo);
    disposeFetch: IReactionDisposer;

    @computed
    get lesson(): null | LessonFullInfo {
        return this.lessonInfo.data;
    }

    @computed
    get lessonSafe(): LessonFullInfo {
        assertNotNull(this.lesson);
        return this.lesson;
    }

    constructor(private _historyStore: IHistory, private _userStore: IUserStore) {
        super();

        makeObservable(this);

        this.disposeFetch = autorun(() => {
            this.lessonInfo.fetch(this.group, this.date, this.slot);
        });
    }

    @computed
    get group() {
        const historyGroup = this._historyStore.query.group;
        return historyGroup ? historyGroup : this._userStore.userInfoSafe.group;
    }

    @computed
    get date() {
        return parseUrlDate(this._historyStore.query.date);
    }

    @computed
    get slot() {
        return +this._historyStore.query.slot;
    }

    dispose = () => {
        this.disposeFetch();
    };
}

const historyStore = container.get<IHistory>(storeKeys.HISTORY_KEY);
const userStore = container.get<IUserStore>(storeKeys.USER_KEY);

export const LessonPageStore = LessonPageStoreBase.bind(null, historyStore, userStore);
