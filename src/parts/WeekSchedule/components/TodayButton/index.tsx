import React from 'react';

import {Button} from '@sberdevices/plasma-ui';
import {useRouter} from '@/mobx-router/hooks/useRouter';

export const TodayButton = () => {
    const router = useRouter();
    const handleClick = () => router.push('/today');

    return (
        <Button view="secondary" size="s" onClick={handleClick}>
            Покажи на сегодня
        </Button>
    );
};
