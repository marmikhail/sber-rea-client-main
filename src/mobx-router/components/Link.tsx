import React, {MouseEvent} from 'react';

import {useRouter} from '../hooks/useRouter';
import type {LinkProps} from './types';

const Link = ({to, ...props}: LinkProps) => {
    const router = useRouter();

    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        router.push(to);
    };

    return <a href={to} onClick={handleClick} {...props} />;
};

export default Link;
