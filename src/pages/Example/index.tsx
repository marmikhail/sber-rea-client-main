import React from 'react';
import {observer} from 'mobx-react-lite';
import {useEffect} from 'react';

import {createPage} from '@/utils/page';
import {PageContextContent} from '@/utils/page/types';

import {ExampleStore} from './store';
import {useParams} from '@/mobx-router/hooks/useParams';
import {Link} from '@/mobx-router/components';
import {useRouter} from '@/mobx-router/hooks/useRouter';

const QueryConsumer = observer(() => {
    const router = useRouter();

    return <div>{JSON.stringify(router.query, null, 2)}</div>;
});

const ExamplePage = observer(({store, update}: PageContextContent<ExampleStore>) => {
    const params = useParams();

    useEffect(() => {
        if (store.count > 5) update();
    }, [store.count, update]);

    return (
        <div>
            <Link to={`/example/${Number(params.id)}?kek=lol${params.id + 1}`}>change query</Link>
            <Link to={`/example/${Number(params.id) + 1}`}>xxxxx</Link>
            <QueryConsumer />
            <button style={{background: 'white', padding: '20px'}} onClick={store.inc}>
                {store.count} {params.id}
            </button>
        </div>
    );
});

const {PageComponent, usePageStore, usePageParams, usePageQuery} = createPage({
    component: ExamplePage,
    Store: ExampleStore,
});

export {usePageStore, usePageParams, usePageQuery};

export default PageComponent;
