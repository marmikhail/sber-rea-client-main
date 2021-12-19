import {computed, makeObservable, action, observable} from 'mobx';
import {parse} from 'qs';
import {createBrowserHistory} from 'history';
import type {Update as HistoryUpdate, Location, BrowserHistory} from 'history';

export class History {
    private browserHistory = createBrowserHistory();
    private unsubscribeHistory: () => void;

    @observable.ref
    location: Location = this.browserHistory.location;

    @computed
    get query(): Record<string, unknown> {
        return parse(this.location.search.slice(1));
    }
    @computed
    get pathname(): string {
        return this.location.pathname;
    }
    @computed
    get hash(): string {
        return this.location.hash;
    }

    constructor() {
        this.unsubscribeHistory = this.browserHistory.listen(this.handleHistoryChange);

        makeObservable(this);
    }

    @action
    private handleHistoryChange = ({location}: HistoryUpdate) => {
        this.location = location;
    };

    push: BrowserHistory['push'] = this.browserHistory.push;
    replace: BrowserHistory['push'] = this.browserHistory.replace;
    pop: BrowserHistory['back'] = () => this.browserHistory.back;
    go: BrowserHistory['go'] = () => this.browserHistory.go;

    @action
    dispose(): void {
        this.unsubscribeHistory();
    }
}
