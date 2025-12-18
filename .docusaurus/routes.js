import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/pricing',
    component: ComponentCreator('/pricing', 'a00'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '27e'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '090'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'a47'),
            routes: [
              {
                path: '/docs/features/shortcodes',
                component: ComponentCreator('/docs/features/shortcodes', '4a7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', 'aed'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'af0'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
