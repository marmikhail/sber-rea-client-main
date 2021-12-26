import {Button, Headline2, ParagraphText1} from '@sberdevices/plasma-ui';
import {IconWarning} from '@sberdevices/plasma-icons';
import React from 'react';

import css from './styles.css';
import {Spacer} from '@/uikit';

export const AuthError = () => {
    const handleReload = () => window.location.reload();

    return (
        <div className={css.container}>
            {/* @ts-expect-error: чтобы width иконки был 100% */}
            <IconWarning size={100} />

            <Headline2 as="h1">Произошла ошибка входа</Headline2>
            <ParagraphText1 as="p">Перезагрузите страницу или поробуйте позже</ParagraphText1>

            <Spacer size="xl" />

            <Button onClick={handleReload}>Перезагрузить</Button>
        </div>
    );
};
