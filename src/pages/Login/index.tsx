import {createPage} from '@/utils/page';
import {LoginStore} from './store';
import {View} from './components';

const {PageComponent, ...rest} = createPage({
    component: View,
    Store: LoginStore,
});

export const {usePageParams, usePageStore, usePageQuery} = rest;

export default PageComponent;
