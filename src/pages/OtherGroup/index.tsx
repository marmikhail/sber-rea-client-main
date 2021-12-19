import React, {useState, VFC} from 'react';
import {
    TextField,
    Container,
    HeaderBack,
    HeaderContent,
    HeaderRoot,
    TextBox,
    TextBoxTitle,
    Button,
} from '@sberdevices/plasma-ui';

import {useShowToast} from '@/hooks/useToast';
import {useRouter} from '@/mobx-router/hooks/useRouter';
import {Spacer} from '@/uikit';

import {buildWeekSchedulePath} from '../WeekSchedule/builders';
import css from './styles.css';

const OtherGroupPage: VFC = () => {
    const showToast = useShowToast();
    const router = useRouter();
    const [group, setGroup] = useState('');

    const handleBack = () => {
        router.push('/');
    };

    const handleSubmit = () => {
        if (!group) showToast('Укажите группу');
        else router.push(buildWeekSchedulePath(group, new Date()));
    };

    return (
        <Container>
            <Spacer size="s" />

            <HeaderRoot>
                <HeaderBack onClick={handleBack} />
                <HeaderContent>
                    <TextBox>
                        <TextBoxTitle>Выбор группы</TextBoxTitle>
                    </TextBox>
                </HeaderContent>
            </HeaderRoot>

            <form className={css.form} onSubmit={handleSubmit}>
                <TextField
                    className={css.groupField}
                    name="group"
                    label="Группа"
                    value={group}
                    onChange={e => setGroup(e.currentTarget.value)}
                />

                <Spacer size="s" />

                <Button view="primary" className={css.submitBtn} type="submit">
                    К расписанию
                </Button>
            </form>
        </Container>
    );
};

export default OtherGroupPage;
