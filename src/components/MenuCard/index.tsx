import React from 'react';
import cn from 'classnames';
import {Card, CardBody, TextBox, TextBoxTitle, CardContent, TextBoxCaption} from '@sberdevices/plasma-ui';
import type {MouseEvent} from 'react';

import {Link} from '@/mobx-router';
import {useRouter} from '@/mobx-router/hooks/useRouter';

import css from './styles.css';

const ComingSoonBadge = () => <div className={css.comingSoonBadge}>COMING SOON</div>;

export type MenuCardType = 'normal' | 'coming_soon';

export type MenuCardProps = {
    name: string;
    href: string;

    description?: string;
    styling?: MenuCardType;
};

export const MenuCard = ({name, href, description, styling}: MenuCardProps) => {
    const router = useRouter();

    const handleClick = (e: MouseEvent<HTMLDivElement>) => {
        if (styling === 'coming_soon') e.preventDefault();
        router.push(href);
    };

    return (
        <Card onClick={handleClick} className={cn(css.menuCard, {[css.comingSoon]: styling === 'coming_soon'})}>
            <Link to={href} className={css.cardContent}>
                <CardBody>
                    <CardContent className={css.cardContent}>
                        <TextBox>
                            <TextBoxTitle>{name}</TextBoxTitle>
                            <TextBoxCaption>{description}</TextBoxCaption>
                        </TextBox>
                    </CardContent>
                </CardBody>
            </Link>

            {styling === 'coming_soon' && <ComingSoonBadge />}
        </Card>
    );
};
