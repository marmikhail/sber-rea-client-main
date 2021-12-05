import React from 'react';
import {useValue} from 'react-cosmos/fixture';

import {mockedComponent} from '@/mocks/mocked';

import LessonPreview from '.';

export default mockedComponent(() => {
    const [lesson] = useValue('Индекс пары', {defaultValue: 0});
    const [name] = useValue('Название', {defaultValue: 'Интернет - программирование'});
    const [place] = useValue('Местоположение', {defaultValue: '6 корпус - 300'});

    return <LessonPreview lesson={lesson} name={name} place={place} group="" date={new Date()} />;
});
