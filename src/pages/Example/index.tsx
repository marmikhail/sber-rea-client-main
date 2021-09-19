import {observer} from 'mobx-react-lite';
import {useEffect} from 'react';

import {createPage} from '@/utils/page';
import {PageContextContent} from '@/utils/page/types';

import {ExampleStore} from './store';

const ExamplePage = observer(({store, update}: PageContextContent<ExampleStore>) => {
    useEffect(() => {
        if (store.count > 5) update();
    }, [store.count, update]);

    return <button onClick={store.inc}>{store.count}</button>;
});

const {PageComponent, usePageStore, usePageParams, usePageQuery} = createPage({
    component: ExamplePage,
    Store: ExampleStore,
});

export {usePageStore, usePageParams, usePageQuery};

export default PageComponent;
