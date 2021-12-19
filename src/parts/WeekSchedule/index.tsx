import React, {useEffect} from 'react';
import {Container} from '@sberdevices/plasma-ui';

import {useConstant} from '@/hooks/useConstant';
import {Spacer} from '@/uikit';

import {DaysCarousel} from './components/DaysCarousel';
import {WeekSelector} from './components/WeekSelector';
import {WeekScheduleStoreContext} from './context';
import {WeekScheduleStore} from './localStore';
import {Lessons} from './components/Lessons';
import {TodayButton} from './components/TodayButton';
import css from './styles.css';

export type WeekScheduleBaseProps = {
    handleDayChange: (day: Date) => void;
    // TODO: начать прокидывать для дней
    // handleDaySelect: (day: Date, pair: number) => void;
};

export type WeekScheduleProps = WeekScheduleBaseProps & {
    date: Date | string;
    group: string;
};

const WeekScheduleBase = ({handleDayChange}: WeekScheduleBaseProps) => (
    <div className={css.weekSchedule}>
        <Container className={css.autoHeightContainer}>
            <Spacer size="m" />
            <WeekSelector onDayChange={handleDayChange} />
            <Spacer size="m" />
            <TodayButton />
            <Spacer size="m" />
        </Container>

        <div className={css.autoHeightContainer}>
            <DaysCarousel onDayChange={handleDayChange} />
        </div>

        <Container className={css.lessonsContainer}>
            <Spacer size="xxl" />
            <Lessons />
        </Container>
    </div>
);

const WeekSchedule = ({date, group, handleDayChange}: WeekScheduleProps) => {
    const store = useConstant(() => new WeekScheduleStore(group, date), []);

    useEffect(() => {
        store.setDate(date);
        store.setGroup(group);
        store.fetchWeekInfo();
    }, [store, date, group]);

    return (
        <WeekScheduleStoreContext.Provider value={store}>
            <WeekScheduleBase handleDayChange={handleDayChange} />
        </WeekScheduleStoreContext.Provider>
    );
};
export default WeekSchedule;
