import React, {FC} from 'react';

import {MenuCard} from '@/components/MenuCard';
import {Col, Row, Container} from '@sberdevices/plasma-ui';
import css from './styles.css';

const PageItem: FC = ({children}) => (
    <Col className={css.pagesItem} sizeM={3} size={2}>
        {children}
    </Col>
);

const MainPage = () => (
    <Container>
        <Row className={css.pagesRow}>
            <PageItem>
                <MenuCard name="Расписание на сегодня" href="/today" />
            </PageItem>
            <PageItem>
                <MenuCard name="Расписание на неделю" href="/today" description="Актуальное расписание" />
            </PageItem>
            <PageItem>
                <MenuCard name="Карта" href="/map" />
            </PageItem>
        </Row>
    </Container>
);

export default MainPage;
