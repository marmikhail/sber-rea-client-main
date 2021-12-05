import React, {useEffect} from 'react';

import {WeekSchedule} from '@/parts';

import {usePageQuery, usePageStore} from '../..';
import {addDays} from 'date-fns';
import {observer} from 'mobx-react-lite';

export const View = observer(() => {
    const store = usePageStore();

    const {day, group} = usePageQuery();

    return <WeekSchedule currentDay={day ? new Date(day) : new Date()} group="291д-11мо/18" />;
});
