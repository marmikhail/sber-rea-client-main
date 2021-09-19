import {observable, action, makeObservable} from 'mobx';

export class ExampleStore {
    constructor() {
        makeObservable(this);
    }

    @observable
    count = 0;

    @action
    inc = (): void => {
        this.count++;
    };
}
