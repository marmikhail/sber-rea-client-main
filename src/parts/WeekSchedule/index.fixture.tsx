import React from 'react';
import {useValue} from 'react-cosmos/fixture';

import {formatUrlDate} from '@/utils/format';
import {mockedComponent} from '@/mocks/mocked';

import WeekSchedule from '.';

export default mockedComponent(() => {
    const [group] = useValue('Группа', {defaultValue: '291д-10мо/18'});
    const [date, setDate] = useValue('Дата', {defaultValue: formatUrlDate(new Date())});

    const handleDayChange = (date: Date) => setDate(formatUrlDate(date));

    return <WeekSchedule group={group} date={date} handleDayChange={handleDayChange} />;
});
