# Добавление страницы конфигурации плагина (разные layout)

## Описание сценария

Плагину может потребоваться несколько страниц конфигурации, и некоторые из них не будут находиться под [AdminSettingsLayout](/development/client/router#имеющиеся-маршруты-страниц). Обычно это страницы с деталями, например, такие как в плагине `@nocobase/plugin-mobile-client` или `@nocobase/plugin-workflow`.

## Описание примера

В этом примере будет одна страница конфигурации, на которой будет ссылка на страницу с деталями. При нажатии на ссылку произойдет переход на новую страницу.

В этом документе не будет подробного описания разработки контента. Он предназначен только для демонстрации того, как добавить страницу конфигурации плагина. Конкретное содержание и логика страницы конфигурации могут быть найдены в документации [Пример плагина Plugin Settings](/plugin-samples/plugin-settings).

Полный код примера из этого документа можно найти в репозитории [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-add-setting-page-layout-routes).

<video width="100%" controls>
  <source src="https://static-docs.nocobase.com/10.mp4" type="video/mp4">
</video>

## Инициализация плагина

Следуя инструкциям из документа [Написание первого плагина](/development/your-fisrt-plugin), если у вас еще нет проекта, вы можете сначала создать его. Если у вас уже есть проект или вы клонировали исходный код, этот шаг можно пропустить.

```bash
yarn create nocobase-app my-nocobase-app -d sqlite
cd my-nocobase-app
yarn install
yarn nocobase install
```

Затем инициализируйте плагин и добавьте его в систему:

```bash
yarn pm create @nocobase-sample/plugin-add-setting-page-layout-routes
yarn pm enable @nocobase-sample/plugin-add-setting-page-layout-routes
```

Затем запустите проект:

```bash
yarn dev
```

После входа в систему перейдите по адресу [http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/), и вы увидите, что плагин уже установлен и активирован.

## Реализация функционала

### Шаг 1: Регистрация страницы конфигурации плагина

Согласно руководству по разработке плагина [Расширение страницы настроек плагина](/development/client/router#расширение-страницы-настроек-плагина), нам нужно изменить файл плагина `packages/plugins/@nocobase-sample/plugin-add-setting-page-layout-routes/src/`.client/index.tsx`：

```tsx | pure
import React from 'react';
import { Plugin } from '@nocobase/client';

// @ts-ignore
import { name } from '../../package.json';

const PluginSettingPage = () => <div>
  details
</div>

export class PluginAddSettingPageLayoutRoutesClient extends Plugin {
  async load() {
    this.app.pluginSettingsManager.add(name, {
      title: 'Different Layout',
      icon: 'ApiOutlined',
      Component: PluginSettingPage,
    });
  }
}

export default PluginAddSettingPageLayoutRoutesClient;
```

После этого мы можем перейти по адресу [http://localhost:13000/admin/settings/@nocobase-sample/plugin-add-setting-page-layout-routes](http://localhost:13000/admin/settings/@nocobase-sample/plugin-add-setting-page-layout-routes), чтобы просмотреть страницу конфигурации плагина.


### Шаг 2: Добавление страницы с деталями

Мы планируем добавить страницу с деталями под `AdminLayout`. Продолжим редактирование файла `packages/plugins/@nocobase-sample/plugin-add-setting-page-layout-routes/src/client/index.tsx`:

```diff
+ import { Link } from 'react-router-dom'

const PluginSettingPage = () => <div>
- details
+ <Link path={`/admin/${name}-detail`}>details</Link>
</div>

export class PluginAddSettingPageLayoutRoutesClient extends Plugin {
  async load() {
    // ...
+   this.app.router.add(`admin.${name}-details`, {
+     path: `/admin/${name}-detail`,
+     Component: () => <div>detail</div>,
+   });
  }
}
```

Когда мы нажимаем на ссылку `details`, происходит переход на страницу `/admin/@nocobase-sample/plugin-add-setting-page-layout-routes-detail`.

<video width="100%" controls>
  <source src="https://static-docs.nocobase.com/10.mp4" type="video/mp4">
</video>

## Настройка прав доступа

По умолчанию страница конфигурации плагина не имеет ограничений по правам доступа, и любой человек может получить к ней доступ и изменить настройки. Необходимо настроить права доступа в конфигурации плагина.

Перейдя по адресу [http://localhost:13000/admin/settings/users-permissions/roles](http://localhost:13000/admin/settings/users-permissions/roles), мы увидим все роли. В конфигурации плагина можно настроить соответствующие права доступа.

![20240512201624](https://static-docs.nocobase.com/20240512201624.png)

## Сборка и загрузка в рабочую среду

Согласно инструкции в документации [Сборка и упаковка плагина](/development/your-fisrt-plugin#сборка-и-упаковка-плагина), мы можем собрать плагин и загрузить его в рабочую среду.

Если вы клонировали исходный код, необходимо выполнить полную сборку один раз, чтобы также собрать зависимости плагина.

```bash
yarn build
```

Если проект был создан с помощью `create-nocobase-app`, можно выполнить следующую команду:

```bash
yarn build @nocobase-sample/plugin-add-setting-page-layout-routes --tar
```

После этого будет создан файл `storage/tar/@nocobase-sample/plugin-add-setting-page-layout-routes.tar.gz`, который можно установить [путем загрузки](/welcome/getting-started/plugin).
