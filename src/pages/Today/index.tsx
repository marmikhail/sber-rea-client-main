import React from 'react';

import {getWeekScheduleRawPath} from '@/pages/WeekSchedule/builders';
import {Redirect} from '@/mobx-router';

/**
 * Эта страница сделана для удобства, чтобы везде не писать логику перехода на текущий день
 */
const TodayPage: React.VFC = () => {
    const date = new Date();

    return <Redirect replace to={getWeekScheduleRawPath(date)} />;
};

export default TodayPage;
