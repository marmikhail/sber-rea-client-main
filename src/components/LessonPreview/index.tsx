import React from 'react';
import {
    Card,
    CardBody,
    CardContent,
    TextBox,
    TextBoxTitle,
    TextBoxSubTitle,
    TextBoxCaption,
} from '@sberdevices/plasma-ui';

import {Link} from '@/mobx-router';
import {getLessonPageUrl} from '@/pages/Lesson/builders';
import {TIME_SLOTS} from '@/constants/date';

export type LessonPreviewProps = {
    name: string;
    place: string;
    lesson: number;

    group: string;
    date: Date;
};

const LessonPreview = ({lesson, date, group, name, place}: LessonPreviewProps) => (
    <Card>
        <Link to={getLessonPageUrl(group, date, lesson + 1)}>
            <CardBody>
                <CardContent>
                    <TextBox>
                        <TextBoxTitle>
                            Пара #{lesson + 1}, {TIME_SLOTS[lesson]}
                        </TextBoxTitle>
                        <TextBoxSubTitle>{name}</TextBoxSubTitle>

                        {place && <TextBoxCaption>{place}</TextBoxCaption>}
                    </TextBox>
                </CardContent>
            </CardBody>
        </Link>
    </Card>
);

export type EmptyLessonPreviewProps = {
    lesson: number;
};

export const EmptyLessonPreview = ({lesson}: EmptyLessonPreviewProps) => (
    <Card>
        <CardBody>
            <CardContent>
                <TextBox>
                    <TextBoxTitle>Пара #{lesson + 1}</TextBoxTitle>
                    <TextBoxSubTitle>Пары нет</TextBoxSubTitle>
                </TextBox>
            </CardContent>
        </CardBody>
    </Card>
);

export default LessonPreview;
