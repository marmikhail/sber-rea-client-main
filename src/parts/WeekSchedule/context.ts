import {WeekScheduleStore} from './localStore';
import {createContext, useContext} from 'react';

// TODO: разделить эти типы
type IWeekScheduleStore = InstanceType<typeof WeekScheduleStore>;

export const WeekScheduleStoreContext = createContext(null as unknown as IWeekScheduleStore);

export const useWeekScheduleStore = (): IWeekScheduleStore => useContext(WeekScheduleStoreContext);
