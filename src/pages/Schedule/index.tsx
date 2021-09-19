import {useEffect} from 'react';
import {observer} from 'mobx-react-lite';
import {Spinner} from '@sberdevices/plasma-ui';

import {createPage} from '@/utils/page';
import {useShowToast} from '@/hooks/useToast';
import type {PageContextContent} from '@/utils/page/types';

import {SchedulePageStore} from './store';
import {View} from './components';

const PageRoot = observer(({store}: PageContextContent<SchedulePageStore>) => {
    const showToast = useShowToast();

    useEffect(() => {
        store.getSchedule();
    }, [store]);

    const {error, loading, ready} = store;

    useEffect(() => {
        error && showToast(error);
    }, [error, showToast]);

    if (loading) return <Spinner />;
    if (error || !ready) return null;

    return <View />;
});

const {PageComponent, ...rest} = createPage({
    component: PageRoot,
    Store: SchedulePageStore,
});

export const {usePageParams, usePageStore, usePageQuery} = rest;

export default PageComponent;
