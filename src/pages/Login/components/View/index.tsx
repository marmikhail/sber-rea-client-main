import React, {useEffect} from 'react';
import {TextField, Container, Headline1, Button} from '@sberdevices/plasma-ui';
import {observer} from 'mobx-react-lite';
import {useForm} from 'react-hook-form';

import {userStore} from '@/domain/user/store';
import {Redirect} from '@/mobx-router';
import {useShowToast} from '@/hooks/useToast';

import {usePageStore} from '../..';
import css from './styles.css';
import {useRouter} from '@/mobx-router/hooks/useRouter';

export type FormItems = {
    group: string;
};

const ViewBase = observer(() => {
    const store = usePageStore();
    const showToast = useShowToast();
    const router = useRouter();

    const {register, handleSubmit} = useForm();

    useEffect(() => {
        if (store.registerSucceed) {
            router.push('/');
            showToast('Добро пожаловать!');
        }
    }, [store.registerSucceed, router, showToast]);

    useEffect(() => {
        if (store.registerError && !store.registerInProgress) showToast(store.registerError);
    }, [store.registerError, store.registerInProgress, showToast]);

    const onSubmit = ({group}: FormItems) => {
        store.register(group);
    };

    return (
        <Container>
            <div className={css.container}>
                <Headline1 mb={32}>Регистрация</Headline1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField className={css.textField} label="Группа" {...register('group')} required />

                    <Button disabled={store.registerInProgress} view="primary" size="m" className={css.submitBtn}>
                        Подтвердить
                    </Button>
                </form>
            </div>
        </Container>
    );
});

const View = observer(() => {
    const showToast = useShowToast();

    if (userStore.isAuthenticated) {
        showToast('Вы уже вошли в систему');
        return <Redirect to="/" />;
    }

    return <ViewBase />;
});

export default View;
