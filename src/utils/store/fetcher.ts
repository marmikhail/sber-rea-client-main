import {action, makeObservable, observable} from 'mobx';

import {Result} from '../request';

export type BaseFetcher<TParams extends unknown[], TRes extends unknown> = (
    ...params: TParams
) => Promise<Result<TRes>>;

/** Создаёт класс, который позволяет не дублировать базовую логику запросов */
export class Fetcher<TParams extends unknown[], TRes extends unknown> {
    @observable.ref
    isLoading = false;
    @observable.ref
    isFinished = false;
    @observable.ref
    error: null | string = null;
    @observable.ref
    data: null | TRes = null;

    private _fetcher: BaseFetcher<TParams, TRes>;

    constructor(fetcher: BaseFetcher<TParams, TRes>) {
        this._fetcher = fetcher;
        makeObservable(this);
    }

    @action
    private async handleRes(res: Result<TRes>) {
        if (res.ok) {
            this.data = res.data;
        } else {
            this.error = res.error ?? null;
        }

        this.isLoading = false;
        this.isFinished = true;
    }

    @action
    async fetch(...args: TParams): Promise<Result<TRes>> {
        this.isLoading = true;

        const res = await this._fetcher(...args);
        this.handleRes(res);

        return res;
    }
}
