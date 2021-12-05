import type {ReactNode, ComponentType, AnchorHTMLAttributes} from 'react';
import {IHistory} from '@/mobx-router/core/interfaces/IHistory';

export type SwitchProps = {
    children: ReactNode[];
};

export type RouteProps = {
    path: string;
    exact?: boolean;
    component: ComponentType;
};

export type RouterProviderProps = {
    history: IHistory;
    children: ReactNode;
};

export type LinkProps = {to: string} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>;
