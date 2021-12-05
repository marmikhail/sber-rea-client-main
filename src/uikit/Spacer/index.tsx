import React from 'react';

import css from './styles.css';

export type SpacerSize = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
export type SpacerProps = {
    size: SpacerSize;
};

const Spacer = ({size}: SpacerProps) => <div className={css[`spacer_${size}`]} />;

export default Spacer;
