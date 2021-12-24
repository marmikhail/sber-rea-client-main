import React from 'react';
import {IconArrowLeft, IconArrowRight} from '@sberdevices/plasma-icons';
import {Button, TextBox} from '@sberdevices/plasma-ui';

import {useEnhance} from './useEnhance';
import css from './style.css';
import {observer} from 'mobx-react-lite';

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

export type WeekSelectorProps = {
    onDayChange: (day: Date) => void;
};

export const WeekSelector = observer((props: WeekSelectorProps) => {
    const enhanced = useEnhance(props);

    return <WeekSelectorBase {...enhanced} />;
});
