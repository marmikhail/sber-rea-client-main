import {useState} from 'react';
import {Container} from '@sberdevices/plasma-ui';
import {observer} from 'mobx-react-lite';

import {DaysTabs, DayView} from '..';
import css from './styles.css';

const View = observer(() => {
    const [currentTab, setCurrentTab] = useState(0);

    return (
        <Container>
            <div className={css.view}>
                <DaysTabs currentTab={currentTab} setCurrentTab={setCurrentTab} className={css.daysTabs} />
                <DayView dayInd={currentTab} />
            </div>
        </Container>
    );
});

export default View;
