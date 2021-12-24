import React, {useEffect} from 'react';
import {
    TextField,
    Container,
    Headline1,
    Button,
    HeaderRoot,
    HeaderBack,
    HeaderContent,
    TextBox,
    TextBoxTitle,
} from '@sberdevices/plasma-ui';
import {observer} from 'mobx-react-lite';
import {useForm} from 'react-hook-form';

import {useShowToast} from '@/hooks/useToast';
import {useRouter} from '@/mobx-router/hooks/useRouter';

import {usePageStore} from '.';
import css from './styles.css';
import {userStore} from '@/domain/user/store';
import {Spacer} from '@/uikit';

export type FormItems = {
    group: string;
};

const View = observer(() => {
    const store = usePageStore();
    const showToast = useShowToast();
    const router = useRouter();

    const {register, handleSubmit} = useForm();

    useEffect(() => {
        if (store.updateSucceed) {
            router.push('/');
            showToast('Настройки изменены');
        }
    }, [store.updateSucceed, router, showToast]);

    useEffect(() => {
        if (store.updateError && !store.updateInProgress) showToast(store.updateError);
    }, [store.updateError, store.updateInProgress, showToast]);

    const onSubmit = ({group}: FormItems) => {
        store.update(group);
    };

    const handleBack = () => router.push('/');

    return (
        <Container>
            <Spacer size="s" />

            <HeaderRoot>
                <HeaderBack onClick={handleBack} />
                <HeaderContent>
                    <TextBox>
                        <TextBoxTitle>Изменение настроек</TextBoxTitle>
                    </TextBox>
                </HeaderContent>
            </HeaderRoot>

            <div className={css.container}>
                <Headline1 mb={32}>Настройки</Headline1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        defaultValue={userStore.userInfoSafe.group}
                        className={css.textField}
                        label="Группа"
                        {...register('group')}
                        required
                    />

                    <Button disabled={store.updateInProgress} view="primary" size="m" className={css.submitBtn}>
                        Подтвердить
                    </Button>
                </form>
            </div>
        </Container>
    );
});

export default View;
