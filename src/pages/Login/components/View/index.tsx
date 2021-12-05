import React from 'react';
import {TextField, Container, Headline1, Button} from '@sberdevices/plasma-ui';
import {observer} from 'mobx-react-lite';
import {useForm} from 'react-hook-form';

import {usePageStore} from '../..';

import css from './styles.css';

export type FormItems = {
    name: string;
    group: string;
};

const View = observer(() => {
    const {register, handleSubmit} = useForm();

    const store = usePageStore();
    const onSubmit = ({name, group}: FormItems) => {
        store.register(123, name, group);
    };

    return (
        <Container>
            <div className={css.container}>
                <Headline1 mb={32}>Регистрация</Headline1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField className={css.textField} label="Имя" {...register('name')} required />
                    <TextField className={css.textField} label="Группа" {...register('group')} required />

                    <Button className={css.submitBtn}>Подтвердить</Button>
                </form>
            </div>
        </Container>
    );
});

export default View;
