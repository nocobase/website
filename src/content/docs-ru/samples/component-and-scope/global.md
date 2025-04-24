# Глобальная регистрация Component и Scope

## Описание примера

Создайте новую страницу, на которой с помощью [SchemaComponent](https://client.docs.nocobase.com/core/ui-schema/schema-component#schemacomponent-1) отображается некоторое содержимое. Компоненты маршрутизации и компоненты внутри `SchemaComponent` регистрируются глобально.

Полный код примера из этого документа можно посмотреть в [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-component-and-scope-global).

## Инициализация плагина

Мы следуем инструкциям из документа [Написание первого плагина](/development/your-fisrt-plugin). Если у вас нет проекта, вы можете сначала создать его. Если проект уже существует или вы клонировали исходный код, этот шаг можно пропустить.

```bash
yarn create nocobase-app my-nocobase-app -d sqlite
cd my-nocobase-app
yarn install
yarn nocobase install
```

Затем инициализируйте плагин и добавьте его в систему:

```bash
yarn pm create @nocobase-sample/plugin-component-and-scope-global
yarn pm enable @nocobase-sample/plugin-component-and-scope-global
```

Затем запустите проект:

```bash
yarn dev
```

После входа в систему перейдите по адресу [http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/), и вы увидите, что плагин уже установлен и включен.

## Реализация функционала

### 1. Создание пользовательской страницы

Создадим файл `packages/plugins/@nocobase-sample/plugin-component-and-scope-global/src/client/CustomPage.tsx` со следующим содержимым:

```tsx | pure
import React from "react"

export const SamplesCustomPage = () => {
  return <div>TODO</div>
}
```

### 2. Глобальная регистрация компонентов и регистрация маршрутов

Подробное описание создания пользовательской страницы можно найти в документации [Добавление страницы](/plugin-samples/router/add-page).

Мы изменим файл `packages/plugins/@nocobase-sample/plugin-component-and-scope-global/src/index.ts`, содержимое которого будет следующим:

```tsx | pure
import { Plugin } from '@nocobase/client';
import { SamplesCustomPage } from './CustomPage'

export class PluginComponentAndScopeGlobalClient extends Plugin {
  async load() {
    this.app.router.add('admin.custom-page1', {
      path: '/admin/custom-page1',
      Component: 'SamplesCustomPage',
    })

    this.app.addComponents({ SamplesCustomPage })
  }
}

export default PluginComponentAndScopeGlobalClient;
```

Мы используем метод `app.addComponents()`, чтобы зарегистрировать компонент `SamplesCustomPage` глобально, а затем метод `app.router.add()` для регистрации маршрута, где поле `Component` имеет **строковый тип** и автоматически найдет соответствующий глобально зарегистрированный компонент.

После этого мы можем перейти по адресу [http://localhost:13000/admin/custom-page1](http://localhost:13000/admin/custom-page1) и увидеть содержимое компонента `SamplesCustomPage`.

![img_v3_02av_55c3115b-f4b6-4c24-8ea2-914869d498bg](https://static-docs.nocobase.com/img_v3_02av_55c3115b-f4b6-4c24-8ea2-914869d498bg.jpg)

### 3. Использование `SchemaComponent` для рендеринга Schema

Для начала необходимо ознакомиться со следующими материалами:

- [Протокол Schema](/development/client/ui-schema/what-is-ui-schema)
- [SchemaComponent](https://client.docs.nocobase.com/core/ui-schema/schema-component#schemacomponent-1)
- [withDynamicSchemaProps](/development/client/ui-schema/what-is-ui-schema#x-component-props-и-x-use-component-props)
- [useFieldSchema()](https://client.docs.nocobase.com/core/ui-schema/designable#usefieldschema)

Затем мы изменим файл `packages/plugins/@nocobase-sample/plugin-component-and-scope-global/src/client/CustomPage.tsx`, содержимое которого будет следующим:

```tsx | pure
import { ISchema, SchemaComponent, withDynamicSchemaProps } from "@nocobase/client"
import { uid } from '@formily/shared'
import { useFieldSchema } from '@formily/react'
import React, { FC } from "react"

export const SamplesHello: FC<{ name: string }> = withDynamicSchemaProps(({ name }) => {
  return <div>hello {name}</div>
})

export const useSamplesHelloProps = () => {
  const schema = useFieldSchema();
  return { name: schema.name }
}

const schema: ISchema = {
  type: 'void',
  name: uid(),
  properties: {
    demo1: {
      type: 'void',
      'x-component': 'SamplesHello',
      'x-component-props': {
        name: 'demo1',
      },
    },
    demo2: {
      type: 'void',
      'x-component': 'SamplesHello',
      'x-use-component-props': 'useSamplesHelloProps',
    },
  }
}

export const SamplesCustomPage = () => {
  return <SchemaComponent schema={schema}></SchemaComponent>
}
```

- Мы определили и экспортировали компоненты `SamplesHello` и `useSamplesHelloProps`.
- Затем мы определили объект `schema`, который содержит `'x-component': 'SamplesHello'` и `'x-use-component-props': 'useSamplesHelloProps'`, где значения обоих свойств имеют строковый тип.
- Используем компонент [SchemaComponent](https://client.docs.nocobase.com/core/ui-schema/schema-component#schemacomponent-1) для рендеринга объекта `schema`.

Теперь нам нужно зарегистрировать `SamplesHello` и `useSamplesHelloProps` глобально. Для этого мы изменим файл `packages/plugins/@nocobase-sample/plugin-component-and-scope-global/src/index.ts`, содержимое которого будет следующим:

```diff
import { Plugin } from '@nocobase/client';
- import { SamplesCustomPage } from './CustomPage'
+ import { SamplesCustomPage, SamplesHello, useSamplesHelloProps } from './CustomPage'

export class PluginComponentAndScopeGlobalClient extends Plugin {
  async load() {
    this.app.router.add('admin.custom-page1', {
      path: '/admin/custom-page1',
      Component: 'SamplesCustomPage',
    })

-   this.app.addComponents({ SamplesCustomPage })
+   this.app.addComponents({ SamplesCustomPage, SamplesHello })
+   this.app.addScopes({ useSamplesHelloProps })
  }
}

export default PluginComponentAndScopeGlobalClient;
```

Затем, перейдя по адресу [http://localhost:13000/admin/custom-page1](http://localhost:13000/admin/custom-page1), мы увидим содержимое компонента `CustomPage`.

![img_v3_02av_79e76ad8-d697-4e3b-aaa9-46ed90e2bb9g](https://static-docs.nocobase.com/img_v3_02av_79e76ad8-d697-4e3b-aaa9-46ed90e2bb9g.jpg)

## Сборка и загрузка в производственную среду

Согласно инструкциям из документации [Сборка и упаковка плагина](/development/your-fisrt-plugin#构建并打包插件), мы можем собрать плагин и загрузить его в производственную среду.

Если вы клонировали исходный код, необходимо сначала выполнить полную сборку, чтобы также подготовить зависимости плагина.

```bash
yarn build
```

Если проект был создан с помощью `create-nocobase-app`, можно выполнить следующую команду:

```bash
yarn build @nocobase-sample/plugin-component-and-scope-global --tar
```

Таким образом, файл `storage/tar/@nocobase-sample/plugin-component-and-scope-global.tar.gz` будет создан. После этого его можно установить [путем загрузки](/welcome/getting-started/plugin).
