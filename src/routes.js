import { lazy } from 'react';

export const appRoutes = [
  {
    path: '/',
    element: lazy(() => import('./containers/Home')),
  },
  {
    path: '/about',
    element: lazy(() => import('./containers/About')),
  },
  {
    path: '/contact',
    element: lazy(() => import('./containers/Contact')),
  },
];
