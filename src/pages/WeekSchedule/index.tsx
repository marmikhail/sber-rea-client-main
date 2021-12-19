import {createPage} from '@/utils/page';
import {View} from './components/View';
import {WeekSchedulePageStore} from './localStore';

const WeekSchedule = View;

export type WeekScheduleQuery = {
    group: string;
    day: string;
};

export const {PageComponent, usePageParams, usePageQuery, usePageStore} = createPage<
    InstanceType<typeof WeekSchedulePageStore>,
    Record<string, unknown>,
    WeekScheduleQuery
>({
    Store: WeekSchedulePageStore,
    component: WeekSchedule,
});

export default PageComponent;
