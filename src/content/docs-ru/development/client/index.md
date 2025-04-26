# Обзор

## Структура каталогов

Инициализированная структура пустого плагина, относящаяся к клиентской части, выглядит следующим образом:

```bash
|- /plugin-sample-hello
  |- /src
    |- /client      # Клиентский код плагина
      |- index.tsx   # Входной файл клиента
  |- client.d.ts
  |- client.js
```

## Класс Plugin

Класс плагина предоставляет различные методы жизненного цикла плагина.

```ts
import { Plugin } from '@nocobase/client';

export class PluginSampleHelloClient extends Plugin {
  async afterAdd() {}

  async beforeLoad() {}

  async load() {}
}

export default PluginSampleHelloClient;
```

## Жизненный цикл плагина

<img alt="Жизненный цикл плагина" src="./image.png" style="width: 600px;" />

- После инициализации плагина срабатывает `afterAdd`. Важно отметить, что добавление плагинов происходит в произвольном порядке, поэтому не рекомендуется получать экземпляры других плагинов в `afterAdd`. Если вам нужно получить экземпляр другого плагина, это можно сделать в методах `beforeLoad` или `load`.
- В методе `beforeLoad` все активированные плагины уже инстанцированы, и вы можете получить их экземпляры через [app.pluginManager.get()](https://client.docs.nocobase.com/core/application/plugin-settings-manager).
- В методе `load` уже выполнены все методы `beforeLoad` всех плагинов.

## Часто используемые свойства и методы в классе плагина

| API                          | Руководство                                                                           |
| ---------------------------- | ------------------------------------------------------------------------------------- |
| app.i18n                     | [Интернационализация](/development/client/i18n)                                       |
| app.apiClient                | [API клиент](/development/client/api-client)                                          |
| app.pluginManager            | [Менеджер плагинов](https://client.docs.nocobase.com/core/application/plugin-manager) |
| app.router                   | [Управление маршрутами](/development/client/router)                                   |
| app.pluginSettingsManager    | [Страница настроек плагина](/development/client/router#расширение-страницы-настроек)  |
| app.schemaInitializerManager | [Настройка Schema Initializer](/development/client/ui-schema/initializer)             |
| app.schemaSettingsManager    | [Настройка Schema Settings](/development/client/ui-schema/settings)                   |
| app.addProviders             | [Компоненты Provider](/development/client/providers)                                  |
| app.addComponents            | [Рендеринг Schema](/development/client/ui-schema/rendering)                           |
| app.addScopes                | [Рендеринг Schema](/development/client/ui-schema/rendering)                           |

## Часто используемые React **hooks** в компонентах

| API            | Руководство                                                                                         |
| -------------- | --------------------------------------------------------------------------------------------------- |
| useApp()       | [useApp() API](https://client.docs.nocobase.com/core/application/application#useapp)               |
| usePlugin()    | [usePlugin() API](https://client.docs.nocobase.com/core/application/plugin-manager#useplugin)       |
| useAPIClient() | [API клиент](/development/client/api-client)                                                       |
| useRequest()   | [API клиент](/development/client/api-client)                                                       |