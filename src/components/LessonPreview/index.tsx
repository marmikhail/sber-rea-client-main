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
import {formatUrlDate} from '@/utils/format';

export type LessonPreviewProps = {
    name: string;
    place: string;
    lesson: number;

    group: string;
    date: Date;
};

const LessonPreview = ({lesson, date, group, name, place}: LessonPreviewProps) => (
    <Card>
        <Link to={`/day-schedule?day=${formatUrlDate(date)}&group=${group}&lesson=${lesson}`}>
            <CardBody>
                <CardContent>
                    <TextBox>
                        <TextBoxTitle>Пара #{lesson + 1}</TextBoxTitle>
                        <TextBoxSubTitle>{name}</TextBoxSubTitle>

                        {place && <TextBoxCaption>{place}</TextBoxCaption>}
                    </TextBox>
                </CardContent>
            </CardBody>
        </Link>
    </Card>
);

export default LessonPreview;
