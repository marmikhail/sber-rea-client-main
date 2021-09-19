import {Card, TextBox, TextBoxSubTitle, TextBoxTitle} from '@sberdevices/plasma-ui';
import {observer} from 'mobx-react-lite';

import {usePageStore} from '../..';
import css from './styles.css';

export type DayViewProps = {
    dayInd: number;
};

const EmptyDay = () => (
    <Card className={css.lessonCard}>
        <TextBox>
            <TextBoxTitle>Сегодня пар нет</TextBoxTitle>
        </TextBox>
    </Card>
);

const DayView: React.VFC<DayViewProps> = observer(({dayInd}) => {
    const {safeSchedule} = usePageStore();
    const day = safeSchedule[dayInd];

    if (!day.lessons.length) return <EmptyDay />;

    return (
        <div>
            {day.lessons.map(({name, place}, ind) => (
                <Card className={css.lessonCard} key={ind}>
                    <TextBox>
                        <TextBoxTitle>{name}</TextBoxTitle>
                        <TextBoxSubTitle>Аудитория: {place}</TextBoxSubTitle>
                    </TextBox>
                </Card>
            ))}
        </div>
    );
});

export default DayView;
