import {createPage} from '@/utils/page';

import View from './View';
import {SettingsStore} from './localStore';

export const {usePageStore, PageComponent} = createPage({
    Store: SettingsStore,
    component: View,
});

export default PageComponent;
