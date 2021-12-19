import React, {VFC} from 'react';

import {Spacer} from '@/uikit';
import {formatCommonDate} from '@/utils/format';
import {
    HeaderRoot,
    HeaderBack,
    HeaderContent,
    Headline3,
    Footnote1,
    Body2,
    TextBox,
    Spinner,
    TextBoxTitle,
    TextBoxSubTitle,
    Container,
    Badge,
} from '@sberdevices/plasma-ui';
import {usePageStore} from '.';
import {observer} from 'mobx-react-lite';
import {useRouter} from '@/mobx-router/hooks/useRouter';
import {buildWeekSchedulePath} from '../WeekSchedule/builders';

const LessonView = observer(() => {
    const store = usePageStore();

    if (store.lessonInfo.isLoading || !store.lessonInfo.isFinished) return <Spinner size={50} />;
    if (store.lessonInfo.error || !store.lessonInfo.data)
        return <TextBox>Произошла ошибка, попробуйте перезагрузить страницу</TextBox>;

    const {name, place, date, lessonType, teacher} = store.lessonSafe;

    return (
        <>
            <Headline3 as="h1">{name}</Headline3>

            <Spacer size="s" />

            <Badge text={lessonType} size="l" />

            <Spacer size="l" />

            <div>
                <Body2>{place}</Body2>
                <Body2>{date}</Body2>
            </div>

            <Spacer size="l" />

            <Footnote1>Преподаватель: {teacher}</Footnote1>
        </>
    );
});

export const LessonPage: VFC = () => {
    const store = usePageStore();
    const router = useRouter();

    const handleBack = () => {
        router.push(buildWeekSchedulePath(store.group, store.date));
    };

    return (
        <>
            <Container>
                <Spacer size="xxl" />

                <HeaderRoot>
                    <HeaderBack onClick={handleBack} />
                    <HeaderContent>
                        <TextBox>
                            <TextBoxTitle>Расписание для {store.group}</TextBoxTitle>
                            <TextBoxSubTitle>
                                {formatCommonDate(store.date)} Пара№{store.slot}
                            </TextBoxSubTitle>
                        </TextBox>
                    </HeaderContent>
                </HeaderRoot>

                <Spacer size="xl" />

                <LessonView />
            </Container>
        </>
    );
};
