# Добавление страницы конфигурации плагина (один маршрут)

## Описание сценария

Плагину требуется простая страница конфигурации, содержащая только один маршрут.

## Описание примера

Допустим, мы интегрируем сторонний почтовый сервис и необходимо настроить токен для этого сервиса. В этом случае нам понадобится страница конфигурации.

В этом документе не будет подробного описания разработки содержимого. Он предназначен только для демонстрации того, как добавить страницу конфигурации плагина. Конкретное содержание и логика страницы конфигурации могут быть найдены в документации [Пример плагина Plugin Settings](/plugin-samples/plugin-settings).

Полный код примера из этого документа можно найти в репозитории [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-add-setting-page-single-route).

![20240512201126](https://static-docs.nocobase.com/20240512201126.png)

## Инициализация плагина

Следуя инструкциям из документа [Написание первого плагина](/development/your-fisrt-plugin), если у вас еще нет проекта, вы можете сначала создать его. Если у вас уже есть проект или вы клонировали исходный код, этот шаг можно пропустить.

```bash
yarn create nocobase-app my-nocobase-app -d sqlite
cd my-nocobase-app
yarn install
yarn nocobase install
```

Затем инициализируем плагин и добавим его в систему:

```bash
yarn pm create @nocobase-sample/plugin-add-setting-page-single-route
yarn pm enable @nocobase-sample/plugin-add-setting-page-single-route
```

После этого запустите проект:

```bash
yarn dev
```

После входа в систему перейдите по адресу [http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/), и вы увидите, что плагин уже установлен и активирован.

## Реализация функционала

Согласно руководству по разработке плагина [Расширение страницы настроек плагина](/development/client/router#расширение-страницы-настроек-плагина), нам нужно изменить файл плагина `packages/plugins/@nocobase-sample/plugin-add-setting-page-single-route/src/client/`.index.tsx`：

```ts
import React from 'react';
import { Plugin } from '@nocobase/client';

// @ts-ignore
import { name } from '../../package.json';

const MySettingPage = () => <div>Hello Setting page</div>;

export class PluginAddSettingPageSingleRouteClient extends Plugin {
  async load() {
    this.app.pluginSettingsManager.add(name, {
      title: 'Single Route',
      icon: 'ApiOutlined',
      Component: MySettingPage,
    });
  }
}

export default PluginAddSettingPageSingleRouteClient;
```

- `name`: имя плагина, которое служит для его уникальной идентификации.  
- `title`: заголовок меню страницы управления конфигурацией плагина.  
- `icon`: иконка меню страницы управления конфигурацией плагина. Больше иконок можно найти в [Ant Design Icons](https://ant.design/components/icon/).  
- `Component`: содержимое страницы настроек.  

После этого мы можем перейти по адресу [http://localhost:13000/admin/settings/@nocobase-sample/plugin-add-setting-page-single-route](http://localhost:13000/admin/settings/@nocobase-sample/plugin-add-setting-page-single-route), чтобы просмотреть страницу конфигурации плагина.

![20240512201126](https://static-docs.nocobase.com/20240512201126.png)

## Настройка прав доступа

По умолчанию страница конфигурации плагина не имеет ограничений по правам доступа, и любой человек может получить к ней доступ и изменить настройки. Необходимо настроить права доступа в конфигурации плагина.

Перейдя по адресу [http://localhost:13000/admin/settings/users-permissions/roles](http://localhost:13000/admin/settings/users-permissions/roles), мы увидим все роли. В конфигурации плагина можно настроить соответствующие права доступа.

![20240512201234](https://static-docs.nocobase.com/20240512201234.png)

## Сборка и загрузка в рабочую среду

Согласно инструкции в документации [Сборка и упаковка плагина](/development/your-fisrt-plugin#сборка-и-упаковка-плагина), мы можем собрать плагин и загрузить его в рабочую среду.

Если вы клонировали исходный код, необходимо выполнить полную сборку один раз, чтобы также собрать зависимости плагина.

```bash
yarn build
```

Если проект был создан с помощью `create-nocobase-app`, можно выполнить следующую команду:

```bash
yarn build @nocobase-sample/plugin-add-setting-page-single-route --tar
```

После этого будет создан файл `storage/tar/@nocobase-sample/plugin-add-setting-page-single-route.tar.gz`, который можно установить [путем загрузки](/welcome/getting-started/plugin).。
