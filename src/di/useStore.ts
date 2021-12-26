import {container} from '.';
import type {StoreKeys} from '.';

export const useStore = <TStore>(key: StoreKeys): TStore => container.get(key);
