import React from 'react';
import {useValue} from 'react-cosmos/fixture';

import {MenuCard} from '.';

export default () => {
    const [name] = useValue('name', {defaultValue: 'name'});

    return <MenuCard name={name} href="/example" />;
};
