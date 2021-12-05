import {Link} from '@/mobx-router';
import {useRouter} from '@/mobx-router/hooks/useRouter';
import {
    Card,
    TextBoxSubTitle,
    CardBody,
    TextBox,
    TextBoxTitle,
    CardContent,
    TextBoxCaption,
} from '@sberdevices/plasma-ui';
import React from 'react';

import css from './styles.css';

export type MenuCardProps = {
    name: string;
    description?: string;
    href: string;
};

export const MenuCard = ({name, href, description}: MenuCardProps) => {
    const router = useRouter();

    const handleClick = () => router.push(href);

    return (
        <Card onClick={handleClick} className={css.menuCard}>
            <Link to={href}>
                <CardBody>
                    <CardContent>
                        <TextBox>
                            <TextBoxTitle>{name}</TextBoxTitle>
                            <TextBoxCaption>{description}</TextBoxCaption>
                        </TextBox>
                    </CardContent>
                </CardBody>
            </Link>
        </Card>
    );
};
