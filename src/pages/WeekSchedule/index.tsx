import {createPage} from '@/utils/page';
import {View} from './components/View';

const WeekSchedule = View;

export type WeekScheduleQuery = {
    group: string;
    day: string;
};

export const {PageComponent, usePageParams, usePageQuery, usePageStore} = createPage<
    any,
    Record<string, unknown>,
    WeekScheduleQuery
>({
    component: WeekSchedule,
});

export default PageComponent;
