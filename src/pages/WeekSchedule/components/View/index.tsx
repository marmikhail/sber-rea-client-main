import React, {useCallback, useEffect} from 'react';

import {observer} from 'mobx-react-lite';
import {
    HeaderRoot,
    HeaderContent,
    TextBox,
    TextBoxTitle,
    TextBoxSubTitle,
    HeaderBack,
    Container,
} from '@sberdevices/plasma-ui';

import {useRouter} from '@/mobx-router/hooks/useRouter';
import {useConstant} from '@/hooks/useConstant';
import {formatCommonDate} from '@/utils/format';
import {Redirect} from '@/mobx-router';
import {Spacer} from '@/uikit';
import {WeekSchedule} from '@/parts';

import {buildWeekSchedulePath} from '../../builders';
import {WeekScheduleAssistant} from '../../assistant';
import {WeekSchedulePageStore} from '../../localStore';
import {usePageStore} from '../..';

export const ViewBase = observer(() => {
    const router = useRouter();

    const localStore = useConstant(() => new WeekSchedulePageStore(), []);
    const assistant = useConstant(() => new WeekScheduleAssistant(localStore), [localStore]);
    useEffect(() => () => assistant.cleanup(), [assistant]);

    const handleDayChange = useCallback(
        (date: Date) => router.push(buildWeekSchedulePath(localStore.group, date)),
        [localStore.group, router],
    );
    const handleBack = () => router.push('/');

    return (
        <>
            <Container>
                <Spacer size="s" />

                <HeaderRoot>
                    <HeaderBack onClick={handleBack} />
                    <HeaderContent>
                        <TextBox>
                            <TextBoxTitle>Расписание для {localStore.group}</TextBoxTitle>
                            <TextBoxSubTitle>{formatCommonDate(localStore.dateSafe)}</TextBoxSubTitle>
                        </TextBox>
                    </HeaderContent>
                </HeaderRoot>
            </Container>

            <WeekSchedule date={localStore.dateSafe} group={localStore.group} handleDayChange={handleDayChange} />
        </>
    );
});

export const View = observer(() => {
    const store = usePageStore();

    // Проверяем здесь наличие параметров, чтобы дальше полагаться на это без проверок
    if (!store.group || !store.date) {
        return <Redirect to="/" />;
    }

    return <ViewBase />;
});
