# Управление зависимостями

Зависимости плагина делятся на собственные зависимости и глобальные. Глобальные зависимости предоставляются `@nocobase/server` и `@nocobase/client` и не включаются в сборку плагина, а собственные зависимости добавляются в конечный результат сборки.

Поскольку собственные зависимости включаются в сборку (включая npm-пакеты, необходимые для работы серверной части, которые также будут помещены в `dist/node_modules`), при разработке плагина все зависимости можно размещать в `devDependencies`.

<Alert type="warning">
При установке следующих зависимостей в плагине следует учитывать, что их **версии** должны соответствовать версиям `@nocobase/server` и `@nocobase/client`.
</Alert>

### Глобальные зависимости

```js
// nocobase
'@nocobase/acl',
  '@nocobase/actions',
  '@nocobase/auth',
  '@nocobase/cache',
  '@nocobase/client',
  '@nocobase/database',
  '@nocobase/evaluators',
  '@nocobase/logger',
  '@nocobase/resourcer',
  '@nocobase/sdk',
  '@nocobase/server',
  '@nocobase/test',
  '@nocobase/utils',
  // @nocobase/auth
  'jsonwebtoken',
  // @nocobase/cache
  'cache-manager',
  'cache-manager-fs-hash',
  // @nocobase/database
  'sequelize',
  'umzug',
  'async-mutex',
  // @nocobase/evaluators
  '@formulajs/formulajs',
  'mathjs',
  // @nocobase/logger
  'winston',
  'winston-daily-rotate-file',
  // koa
  'koa',
  '@koa/cors',
  '@koa/router',
  'multer',
  '@koa/multer',
  'koa-bodyparser',
  'koa-static',
  'koa-send',
  // react
  'react',
  'react-dom',
  'react/jsx-runtime',
  // react-router
  'react-router',
  'react-router-dom',
  // antd
  'antd',
  'antd-style',
  '@ant-design/icons',
  '@ant-design/cssinjs',
  // i18next
  'i18next',
  'react-i18next',
  // dnd-kit
  '@dnd-kit/accessibility',
  '@dnd-kit/core',
  '@dnd-kit/modifiers',
  '@dnd-kit/sortable',
  '@dnd-kit/utilities',
  // formily
  '@formily/antd-v5',
  '@formily/core',
  '@formily/react',
  '@formily/json-schema',
  '@formily/path',
  '@formily/validator',
  '@formily/shared',
  '@formily/reactive',
  '@formily/reactive-react',
  // utils
  'dayjs',
  'mysql2',
  'pg',
  'pg-hstore',
  'sqlite3',
  'supertest',
  'axios',
  '@emotion/css',
  'ahooks',
  'lodash';
```
