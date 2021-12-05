import React from 'react';
import {IconArrowLeft, IconArrowRight} from '@sberdevices/plasma-icons';
import {Button, TextBox} from '@sberdevices/plasma-ui';

import {useEnhance} from './useEnhance';
import css from './style.css';

export type WeekSelectorBaseProps = {
    weekNumber: number;

    onChooseNextWeek: () => void;
    onChoosePrevWeek: () => void;
};

const WeekSelectorBase = ({weekNumber, onChooseNextWeek, onChoosePrevWeek}: WeekSelectorBaseProps) => (
    <div className={css.row}>
        <Button onClick={onChoosePrevWeek} size="s" aria-label="Предыдущая неделя">
            <IconArrowLeft />
        </Button>

        <TextBox title={`Неделя #${weekNumber}`} />

        <Button onClick={onChooseNextWeek} size="s" aria-label="Следующая неделя">
            <IconArrowRight />
        </Button>
    </div>
);

export const WeekSelector = () => {
    const enhanced = useEnhance();

    return <WeekSelectorBase {...enhanced} />;
};
