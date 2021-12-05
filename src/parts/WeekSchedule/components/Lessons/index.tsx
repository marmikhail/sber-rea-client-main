import React from 'react';
import {observer} from 'mobx-react-lite';
import {Spinner} from '@sberdevices/plasma-ui';

import {LessonPreview} from '@/components';

import {useWeekScheduleStore} from '../../context';
import css from './style.css';

export const Lessons = observer(() => {
    const store = useWeekScheduleStore();
    const day = store.date.getDay() ? store.date.getDay() - 1 : 0;

    if (store.lessonsInfo.isLoading) return <Spinner />;

    return (
        <div className={css.lessons}>
            {store.lessonsInfo.data?.[day]?.lessons
                .filter(lesson => lesson.name !== null)
                .map(({name, building, room}, i) => (
                    <LessonPreview
                        key={i}
                        lesson={i}
                        group={store.group}
                        name={name}
                        place={`${building} ${room}`}
                        date={store.date}
                    />
                )) ?? 'Сегодня пар нет :0'}
        </div>
    );
});
