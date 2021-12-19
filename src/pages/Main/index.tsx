import React, {FC} from 'react';
import {Col, Row, Container, HeaderRoot, HeaderLogo, HeaderTitle} from '@sberdevices/plasma-ui';

import {MenuCard} from '@/components/MenuCard';
import {Spacer} from '@/uikit';
import logo from '@/images/logo.png';

import css from './styles.css';

const PageItem: FC = ({children}) => (
    <Col className={css.pagesItem} sizeM={3} size={2}>
        {children}
    </Col>
);

const MainPage: React.VFC = () => (
    <Container>
        <Spacer size="s" />

        <HeaderRoot>
            <HeaderLogo src={logo} />
            <HeaderTitle>Расписание РЭУ</HeaderTitle>
        </HeaderRoot>

        <Spacer size="s" />
        <Row className={css.pagesRow}>
            <PageItem>
                <MenuCard name="Ваше расписание" href="/today" />
            </PageItem>
            <PageItem>
                <MenuCard name="Настройки" description="Сменить имя или группу" href="/settings" />
            </PageItem>
            <PageItem>
                <MenuCard styling="coming_soon" name="Для другой группы" href="/contacts" />
            </PageItem>
            <PageItem>
                <MenuCard styling="coming_soon" name="Карта" href="/map" />
            </PageItem>
            <PageItem>
                <MenuCard styling="coming_soon" name="Контакты" href="/contacts" />
            </PageItem>
        </Row>
    </Container>
);

export default MainPage;
