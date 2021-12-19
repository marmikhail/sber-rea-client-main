import React, {ComponentProps, useEffect} from 'react';

import {Redirect} from '@/mobx-router';
import {useShowToast} from '@/hooks/useToast';

export type RedirectWithReasonProps = ComponentProps<typeof Redirect> & {
    reason: string;
};

const RedirectWithReason = ({reason, ...props}: RedirectWithReasonProps) => {
    const showToast = useShowToast();

    useEffect(() => {
        showToast(reason);
    }, [showToast, reason]);

    return <Redirect {...props} />;
};

export default RedirectWithReason;
