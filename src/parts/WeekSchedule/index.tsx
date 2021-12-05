import React, {useEffect} from 'react';
import {Container} from '@sberdevices/plasma-ui';

import {useConstant} from '@/hooks/useConstant';
import {Spacer} from '@/uikit';

import {DaysCarousel} from './components/DaysCarousel';
import {WeekSelector} from './components/WeekSelector';
import {WeekScheduleStoreContext} from './context';
import {WeekScheduleStore} from './localStore';
import {Lessons} from './components/Lessons';

export type WeekScheduleProps = {
    currentDay: Date | string;
    group: string;
};

const WeekScheduleBase = () => (
    <>
        <Container>
            <Spacer size="m" />
            <WeekSelector />
            <Spacer size="m" />
        </Container>

        <DaysCarousel />

        <Container>
            <Spacer size="xxl" />
            <Lessons />
        </Container>
    </>
);

const WeekSchedule = ({currentDay, group}: WeekScheduleProps) => {
    const store = useConstant(() => new WeekScheduleStore(group, currentDay), []);

    useEffect(() => {
        store.setDate(currentDay);
        store.setGroup(group);
        store.fetchWeekInfo();
    }, [store, currentDay, group]);

    return (
        <WeekScheduleStoreContext.Provider value={store}>
            <WeekScheduleBase />
        </WeekScheduleStoreContext.Provider>
    );
};
export default WeekSchedule;
