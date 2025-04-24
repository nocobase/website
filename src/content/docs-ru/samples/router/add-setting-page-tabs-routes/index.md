# Добавление страницы конфигурации плагина (с несколькими вкладками)

## Описание сценария

Плагину требуется несколько страниц конфигурации, каждая из которых соответствует отдельной вкладке (Tab).

## Описание примера

Допустим, мы интегрируем сторонний почтовый сервис. Для этого нужно настроить токен почтового сервиса, а также создать отдельную страницу для настройки шаблонов почтовых сообщений. В этом случае нам понадобится страница конфигурации с двумя вкладками.

В этом документе не будет подробного описания разработки содержимого. Он предназначен только для демонстрации того, как добавить страницу конфигурации плагина с несколькими вкладками. Конкретное содержание и логика страницы конфигурации могут быть найдены в документации [Пример плагина Plugin Settings](/plugin-samples/plugin-settings).

Полный код примера из этого документа можно найти в репозитории [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-add-setting-page-tabs-routes).

<video width="100%" controls>
  <source src="https://static-docs.nocobase.com/7.mp4" type="video/mp4">
</video>

## Инициализация плагина

Мы следуем инструкциям из документа [Написание первого плагина](/development/your-fisrt-plugin). Если у вас еще нет проекта, вы можете сначала создать его. Если проект уже существует или вы клонировали исходный код, этот шаг можно пропустить.

```bash
yarn create nocobase-app my-nocobase-app -d sqlite
cd my-nocobase-app
yarn install
yarn nocobase install
```

Затем инициализируем плагин и добавим его в систему:

```bash
yarn pm create @nocobase-sample/plugin-add-setting-page-tabs-routes
yarn pm enable @nocobase-sample/plugin-add-setting-page-tabs-routes
```

然后启动项目即可：

```bash
yarn dev
```

После входа в систему перейдите по адресу [http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/), и вы увидите, что плагин уже установлен и активирован.

## Реализация функционала

Согласно руководству по разработке плагина [Расширение страницы настроек плагина](/development/client/router#расширение-страницы-настроек-плагина), нам нужно изменить файл плагина `packages/plugins/@nocobase-sample/plugin-add-setting-page-tabs-routes/src/client/`.index.tsx`：

```tsx | pure
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Plugin } from '@nocobase/client';

// @ts-ignore
import { name } from '../../package.json';

const TokenPage = () => <div>Token Page</div>

const TemplatePage = () => <div>Template Page</div>

export class PluginAddSettingPageTabsRoutesClient extends Plugin {
  async load() {
    this.app.pluginSettingsManager.add(name, {
      title: 'Tabs Routes',
      icon: 'ApiOutlined',
      Component: Outlet, // 可省略或者使用自定义组件
    });

    this.app.pluginSettingsManager.add(`${name}.token`, {
      title: 'Token Page',
      Component: TokenPage,
      sort: 1,
    });

    this.app.pluginSettingsManager.add(`${name}.template`, {
      title: 'Template Page',
      Component: TemplatePage,
      sort: 2,
    });

    this.app.pluginSettingsManager.add(`${name}.nestedRoute`, {
      title: 'Test',
      Component: Outlet, // 可省略或者使用自定义组件
      sort: 3,
    });

    this.app.pluginSettingsManager.add(`${name}.nestedRoute.a`, {
      title: 'Test A',
      Component: () => <div>Test A page</div>
    });

    this.app.pluginSettingsManager.add(`${name}.nestedRoute.b`, {
      title: 'Test B',
      Component: () => <div>Test B page</div>
    });
  }
}

export default PluginAddSettingPageTabsRoutesClient;
```

В случае с несколькими страницами конфигурации, для атрибута `name` в методе `pluginSettingsManager.add()` следует использовать разделение точкой, например, `pluginName.pageName`. Таким образом можно реализовать вкладки (Tab) для нескольких страниц конфигурации.

После этого мы можем перейти по адресу [http://localhost:13000/admin/settings/@nocobase-sample/plugin-add-setting-page-tabs-routes](http://localhost:13000/admin/settings/@nocobase-sample/plugin-add-setting-page-tabs-routes), чтобы просмотреть страницу конфигурации плагина.

<video width="100%" controls>
  <source src="https://static-docs.nocobase.com/7.mp4" type="video/mp4">
</video>

## Настройка прав доступа

По умолчанию страница конфигурации плагина не имеет ограничений по правам доступа, и любой человек может получить к ней доступ и изменить настройки. Необходимо настроить права доступа в конфигурации плагина.

Перейдя по адресу [http://localhost:13000/admin/settings/users-permissions/roles](http://localhost:13000/admin/settings/users-permissions/roles), мы увидим все роли. В конфигурации плагина можно настроить соответствующие права доступа.

![20240512201446](https://static-docs.nocobase.com/20240512201446.png)

## Сборка и загрузка в рабочую среду

Согласно инструкции в документации [Сборка и упаковка плагина](/development/your-fisrt-plugin#сборка-и-упаковка-плагина), мы можем собрать плагин и загрузить его в рабочую среду.

Если вы клонировали исходный код, необходимо выполнить полную сборку один раз, чтобы также собрать зависимости плагина.

```bash
yarn build
```

Если проект был создан с помощью `create-nocobase-app`, можно выполнить следующую команду:

```bash
yarn build @nocobase-sample/plugin-add-setting-page-tabs-routes --tar
```

После этого будет создан файл `storage/tar/@nocobase-sample/plugin-add-setting-page-tabs-routes.tar.gz`, который можно установить [путем загрузки](/welcome/getting-started/plugin).
