# Локальная регистрация Component и Scope

## Описание примера

Необходимо реализовать те же функции, что и в примере [Глобальная регистрация Component и Scope](/plugin-samples/component-and-scope/global), но на этот раз мы будем регистрировать компоненты и scope внутри плагина, а не глобально.

Полный код примера из этого документа можно посмотреть в [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-component-and-scope-local).

## Инициализация плагина

Мы следуем инструкциям из документа [Написание первого плагина](/development/your-fisrt-plugin). Если у вас нет проекта, вы можете сначала создать его. Если проект уже существует или вы клонировали исходный код, этот шаг можно пропустить.

```bash
yarn create nocobase-app my-nocobase-app -d sqlite
cd my-nocobase-app
yarn install
yarn nocobase install
```

Затем инициализируем плагин и добавим его в систему:

```bash
yarn pm create @nocobase-sample/plugin-component-and-scope-local
yarn pm enable @nocobase-sample/plugin-component-and-scope-local
```

Затем запустите проект:

```bash
yarn dev
```

После входа в систему перейдите по адресу [http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/), и вы увидите, что плагин уже установлен и включен.

## Реализация функционала

### 1. Создание пользовательской страницы

Создадим файл `packages/plugins/@nocobase-sample/plugin-component-and-scope-local/src/client/CustomPage.tsx` со следующим содержимым:

```tsx | pure
import React from "react"

export const SamplesCustomPage = () => {
  return <div>TODO</div>
}
```

### 2. Непосредственное использование `Component` для рендеринга контента

Подробное описание создания пользовательской страницы можно найти в документации [Добавление страницы](/plugin-samples/router/add-page).

Изменим файл `packages/plugins/@nocobase-sample/plugin-component-and-scope-local/src/index.ts`, содержимое которого будет следующим:

```tsx | pure
import { Plugin } from '@nocobase/client';
import { SamplesCustomPage } from './CustomPage'

export class PluginComponentAndScopeLocalClient extends Plugin {
  async load() {
    this.app.router.add('admin.custom-page2', {
      path: '/admin/custom-page2',
      Component: SamplesCustomPage,
    })
  }
}

export default PluginComponentAndScopeLocalClient;
```

В отличие от глобальной регистрации, здесь используется компонент `Component: SamplesCustomPage` напрямую, а не в виде строки.

Затем мы переходим по адресу [http://localhost:13000/admin/custom-page2](http://localhost:13000/admin/custom-page2), и мы увидим содержимое компонента `SamplesCustomPage`.

![img_v3_02av_46e020ae-41d2-4bc3-a047-e28d97c20bdg](https://static-docs.nocobase.com/img_v3_02av_46e020ae-41d2-4bc3-a047-e28d97c20bdg.jpg)

### 3. Использование `SchemaComponent` для рендеринга контента

Для начала необходимо ознакомиться со следующими материалами:

- [Протокол Schema](/development/client/ui-schema/what-is-ui-schema)
- [SchemaComponent](https://client.docs.nocobase.com/core/ui-schema/schema-component#schemacomponent-1)
- [withDynamicSchemaProps](/development/client/ui-schema/what-is-ui-schema#x-component-props-и-x-use-component-props)
- [useFieldSchema()](https://client.docs.nocobase.com/core/ui-schema/designable#usefieldschema)

Изменим файл `packages/plugins/@nocobase-sample/plugin-component-and-scope-local/src/client/CustomPage.tsx`, содержимое которого будет следующим:

```tsx | pure
import { ISchema, SchemaComponent, withDynamicSchemaProps } from "@nocobase/client"
import { uid } from '@formily/shared'
import { useFieldSchema } from '@formily/react'
import React, { FC } from "react"

const SamplesHello: FC<{ name: string }> = withDynamicSchemaProps(({ name }) => {
  return <div>hello {name}</div>
})

const useSamplesHelloProps = () => {
  const schema = useFieldSchema();
  return { name: schema.name }
}

const schema: ISchema = {
  type: 'void',
  name: uid(),
  properties: {
    demo1: {
      type: 'void',
      'x-component': SamplesHello,
      'x-component-props': {
        name: 'demo1',
      },
    },
    demo2: {
      type: 'void',
      'x-component': SamplesHello,
      'x-use-component-props': useSamplesHelloProps,
    },
    demo3: {
      type: 'void',
      'x-component': 'SamplesHello',
      'x-component-props': {
        name: 'demo3',
      },
    },
    demo4: {
      type: 'void',
      'x-component': 'SamplesHello',
      'x-use-component-props': 'useSamplesHelloProps',
    },
  }
}

export const SamplesCustomPage = () => {
  return <SchemaComponent schema={schema} components={{ SamplesHello }} scope={{ useSamplesHelloProps }}></SchemaComponent>
}
```

- Мы определили компоненты `SamplesHello` и `useSamplesHelloProps`.
- Затем мы создали объект `schema`, где поля `demo1` и `demo2` используют соответствующие компоненты и scope, а поля `demo3` и `demo4` используют компоненты и scope в виде строк.
- Наконец, мы локально зарегистрировали `SamplesHello` и `useSamplesHelloProps` с помощью атрибутов `components` и `scope` компонента `SchemaComponent`.

После этого мы переходим по адресу [http://localhost:13000/admin/custom-page2](http://localhost:13000/admin/custom-page2), чтобы увидеть содержимое компонента `CustomPage`.

![img_v3_02av_e8d4d0c7-7a59-4f9e-a120-a2551e719ebg](https://static-docs.nocobase.com/img_v3_02av_e8d4d0c7-7a59-4f9e-a120-a2551e719ebg.jpg)

## Сборка и загрузка в производственную среду

Согласно инструкциям из документации [Сборка и упаковка плагина](/development/your-fisrt-plugin#构建并打包插件), мы можем собрать плагин и загрузить его в производственную среду.

Если вы клонировали исходный код, сначала выполните полную сборку, чтобы подготовить зависимости плагина:

```bash
yarn build
```

Если проект был создан с помощью `create-nocobase-app`, можно выполнить следующую команду:

```bash
yarn build @nocobase-sample/plugin-component-and-scope-local --tar
```

Таким образом, файл `storage/tar/@nocobase-sample/plugin-component-and-scope-local.tar.gz` будет создан. После этого его можно установить [путем загрузки](/welcome/getting-started/plugin).
