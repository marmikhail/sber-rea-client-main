import React from 'react';
import {observer} from 'mobx-react-lite';
import {Spinner, Body1} from '@sberdevices/plasma-ui';

import {LessonPreview} from '@/components';
import {fixWeekDay} from '@/utils/dates/fixDate';
import {WEEK_DAY} from '@/constants/date';
import {LessonInfo} from '@/domain/schedule/types';

import {useWeekScheduleStore} from '../../context';
import css from './style.css';
import {EmptyLessonPreview} from '@/components/LessonPreview';

const SundayView = () => <Body1>Это воскресенье, пар нет:)</Body1>;
const FreeDayView = () => <Body1>В выбранный день пар нет :0</Body1>;

type LessonsBaseProps = {
    date: Date;
    group: string;
    lessons: LessonInfo[];
};
const LessonsBase = ({date, group, lessons}: LessonsBaseProps) => {
    const content = lessons.map(({name, building, room}, i) => {
        if (name === null) {
            return <EmptyLessonPreview key={i} lesson={i} />;
        }

        return <LessonPreview key={i} lesson={i} group={group} name={name} place={`${building} ${room}`} date={date} />;
    });
    return <div className={css.lessons}>{content}</div>;
};

export const Lessons = observer(() => {
    const store = useWeekScheduleStore();
    const day = fixWeekDay(store.date.getDay());

    if (day === WEEK_DAY.SUN) return <SundayView />;
    if (store.lessonsInfo.isLoading) return <Spinner />;

    const dayInfo = store.lessonsInfo.data?.[day];
    const lessons = dayInfo?.lessons;

    if (!lessons || !lessons.length || dayInfo.isFree) return <FreeDayView />;

    return <LessonsBase group={store.group} date={store.date} lessons={lessons} />;
});
