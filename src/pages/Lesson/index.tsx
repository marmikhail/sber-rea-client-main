import {createPage} from '@/utils/page';
import {LessonPageStore} from './localStore';
import {LessonPage} from './View';

export const {PageComponent, usePageStore} = createPage({
    Store: LessonPageStore,
    component: LessonPage,
});

export default PageComponent;
