export default [
  {
    title: 'Guide',
    'title.zh-CN': '指南',
    slug: '/handbook',
  },
  {
    title: 'Data modeling',
    'title.zh-CN': '数据建模',
    type: 'group',
    children: [
      {
        title: 'Overview',
        'title.zh-CN': '概述',
        slug: '/handbook/data-modeling',
      },
      {
        title: 'Data sources',
        'title.zh-CN': '数据源',
        children: [
          {
            title: 'Data source manager',
            'title.zh-CN': '数据源管理',
            slug: '/handbook/data-source-manager',
          },
          {
            title: 'Main database',
            'title.zh-CN': '主数据库',
            // subTitle: '@nocobase/plugin-collection-manager',
            slug: '/handbook/data-source-main',
          },
          {
            title: 'External database',
            'title.zh-CN': '外部数据库',
            children: [
              {
                title: 'Overview',
                'title.zh-CN': '介绍',
                slug: '/handbook/data-source-manager/external-database',
              },
              {
                title: 'External MySQL',
                'title.zh-CN': '外部 MySQL',
                // subTitle: '@nocobase/plugin-data-source-external-mysql',
                slug: '/handbook/data-source-external-mysql',
              },
              {
                title: 'External MariaDB',
                'title.zh-CN': '外部 MariaDB',
                // subTitle: '@nocobase/plugin-data-source-external-mariadb',
                slug: '/handbook/data-source-external-mariadb',
              },
              {
                title: 'External PostgreSQL',
                'title.zh-CN': '外部 PostgreSQL',
                // subTitle: '@nocobase/plugin-data-source-external-postgres',
                slug: '/handbook/data-source-external-postgres',
              },
            ],
          },
          {
            title: 'HTTP API Data source',
            'title.zh-CN': 'HTTP API 数据源',
            // subTitle: '@nocobase/plugin-data-source-external-postgres',
            slug: '/handbook/data-source-http-api',
          },
          {
            title: 'ER diagram-like tool',
            'title.zh-CN': '类 ER 工具',
            // subTitle: '@nocobase/plugin-graph-collection-manager',
            slug: '/handbook/graph-collection-manager',
          },
        ],
      },
    ],
  },
];
