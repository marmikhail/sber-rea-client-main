import React from 'react';
import {RouterContext} from '../contexts/RouterContext';
import type {RouterProviderProps} from './types';

export const RouterProvider = ({children, history}: RouterProviderProps) => (
    <RouterContext.Provider value={history}>{children}</RouterContext.Provider>
);

export default RouterProvider;
