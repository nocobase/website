# Страница настройки формы

## Описание сценария

Страница настроек состоит из формы.

## Описание примера

Предположим, что нам нужно интегрировать сторонний сервис карт и настроить для него `key` и `secret`. Мы можем добавить страницу настроек через плагин, чтобы пользователи могли вводить эти данные.

Полный код примера из этого документа можно посмотреть в [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-settings-form).

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
yarn pm create @nocobase-sample/plugin-settings-form
yarn pm enable @nocobase-sample/plugin-settings-form
```

После этого запустите проект:

```bash
yarn dev
```

После входа в систему перейдите по адресу [http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/), чтобы увидеть, что плагин установлен и включен.

## Реализация функционала на стороне сервера

### 1. Создание таблицы данных

Основная задача серверной части — создать таблицу данных для хранения конфигурационной информации. Для создания таблицы данных необходимо ознакомиться со следующими материалами:

- [Таблицы данных и поля](/development/server/collections)
- [Создание таблицы данных](/development/server/collections/configure#в-коде-плагина)
- [Field Type](/development/server/collections/options#field-type)
- [API defineCollection()](/api/database#definecollection)
- [API Collection](/api/database/collection)

Для данного примера создадим файл `packages/plugins/@nocobase-sample/plugin-settings-form/src/server/collections/map-configuration.ts` со следующим содержимым:

```ts
import { defineCollection } from '@nocobase/database';

export default defineCollection({
  name: 'SamplesMapConfiguration',
  fields: [
    {
      type: 'string',
      name: 'key',
    },
    {
      type: 'string',
      name: 'secret',
    },
  ],
});
```

Исходя из требований, мы создали таблицу данных `SamplesMapConfiguration`, которая содержит два поля: `key` и `secret`, оба типа строка.

### 2. Выполнение обновления

Также необходимо применить определение таблицы данных к базе данных. Это можно сделать с помощью следующей команды:

```bash
yarn nocobase upgrade
```

![img_v3_02av_db5e9985-eb20-4420-a0b2-8a809ff05a5g](https://static-docs.nocobase.com/img_v3_02av_db5e9985-eb20-4420-a0b2-8a809ff05a5g.jpg)

## Реализация функционала на стороне клиента

### 1. Создание страницы настроек плагина

Ранее в разделе [Добавление страницы настроек плагина (один маршрут)](/plugin-samples/router/add-setting-page-single-route) уже было подробное описание. Здесь мы не будем углубляться.

Изменим файл `packages/plugins/@nocobase-sample/plugin-settings-form/src/client/index.tsx`. Его содержимое будет следующим:

```tsx | pure
import { Plugin } from '@nocobase/client';
// @ts-ignore
import { name } from '../../package.json';

export class PluginSettingsFormClient extends Plugin {
  async load() {
    this.app.pluginSettingsManager.add(name, {
      title: 'Plugin Settings Form',
      icon: 'FormOutlined',
      Component: () => 'TODO',
    });
  }
}

export default PluginSettingsFormClient;
```

Затем перейдите по адресу [http://localhost:13000/admin/settings/@nocobase-sample/plugin-settings-form](http://localhost:13000/admin/settings/@nocobase-sample/plugin-settings-form), чтобы увидеть нашу страницу настроек.

![img_v3_02av_c90b5767-97dd-4fef-8dd0-c7ff9a136a9g](https://static-docs.nocobase.com/img_v3_02av_c90b5767-97dd-4fef-8dd0-c7ff9a136a9g.jpg)

### 2. Определение структуры таблицы данных

Используя подход, основанный на Schema, нам нужно сначала определить структуру таблицы данных. Для определения структуры таблицы данных на стороне клиента необходимо ознакомиться со следующими материалами:

- [Таблицы данных и поля](/development/server/collections#field-component)
- [Field Type](/development/server/collections/options#field-type)
- [Field Interface](/development/server/collections/options#field-interface)
- [Протокол UI Schema](/development/client/ui-schema/what-is-ui-schema)
- [Компоненты полей](https://client.docs.nocobase.com/components)

Затем создадим файл `packages/plugins/@nocobase-sample/plugin-settings-form/src/client/PluginSettingsForm.tsx` со следующим содержимым:

```ts
const mapConfigurationCollection = {
  name: 'SamplesMapConfiguration',
  filterTargetKey: 'id',
  fields: [
    {
      type: 'string',
      name: 'key',
      interface: 'input',
      uiSchema: {
        title: 'Title',
        required: true,
        'x-component': 'Input',
      },
    },
    {
      type: 'string',
      name: 'secret',
      interface: 'input',
      uiSchema: {
        title: 'Secret',
        required: true,
        'x-component': 'Input',
      },
    },
  ],
};
```

Мы определили таблицу данных `SamplesMapConfiguration`, которая содержит два поля: `key` и `secret`. Ниже приведено описание поля `fields`:

- `type`: так как значение является строкой, его тип равен `string`, и он должен соответствовать типу поля в базе данных на стороне сервера.
- `name`: имя поля, которое должно совпадать с именем поля в базе данных на стороне сервера.
- `interface`: поскольку это строковое значение, оно соответствует интерфейсу `input`.
- `uiSchema`: отвечает за рендеринг компонента формы на стороне клиента:
  - `title`: заголовок элемента формы.
  - `required`: так как поле является обязательным, его значение равно `true`.
  - `x-component`: здесь используется компонент [Input](https://client.docs.nocobase.com/components/input) для однострочного текста.

### 3. Создание схемы формы

Чтобы создать схему формы, необходимо ознакомиться со следующими материалами:

- [Компонент Form](https://client.docs.nocobase.com/components/form-v2)
- [Компонент CollectionField](https://client.docs.nocobase.com/core/data-source/collection-field)
- [Компонент CardItem](https://client.docs.nocobase.com/components/card-item)
- [Протокол Schema](/development/client/ui-schema/what-is-ui-schema)
- [Компонент DataBlockProvider](https://client.docs.nocobase.com/core/data-block/data-block-provider)
- [Компонент Action](https://client.docs.nocobase.com/components/action)

Продолжим работу в файле `packages/plugins/@nocobase-sample/plugin-settings-form/src/client/PluginSettingsForm.tsx`:

```ts
import { useMemo } from 'react';
import { App as AntdApp } from 'antd';
import { createForm } from '@formily/core';
import { useForm } from '@formily/react';
import { uid } from '@formily/shared';
import { ActionProps, ISchema, useCollection, useCollectionRecordData, useDataBlockResource } from '@nocobase/client';

const schema: ISchema = {
  type: 'void',
  name: uid(),
  'x-component': 'CardItem',
  'x-decorator': 'DataBlockProvider',
  'x-decorator-props': {
    collection: mapConfigurationCollection.name,
    action: 'get',
  },
  properties: {
    form: {
      type: 'void',
      'x-component': 'FormV2',
      'x-use-component-props': 'useFormBlockProps',
      properties: {
        key: {
          title: 'Key',
          'x-decorator': 'FormItem',
          'x-component': 'CollectionField',
        },
        secret: {
          title: 'Secret',
          'x-decorator': 'FormItem',
          'x-component': 'CollectionField',
        },
        footer: {
          type: 'void',
          'x-component': 'Action',
          title: 'Submit',
          'x-use-component-props': 'useSubmitActionProps',
        },
      },
    },
  },
};

const useFormBlockProps = () => {
  const recordData = useCollectionRecordData();
  const form = useMemo(
    () => createForm({
      initialValues: recordData,
    }),
    [recordData],
  );
  return {
    form,
  };
};

const useSubmitActionProps = (): ActionProps => {
  const form = useForm();
  const { message } = AntdApp.useApp();
  const collection = useCollection();
  const resource = useDataBlockResource();
  return {
    type: 'primary',
    htmlType: 'submit',
    async onClick() {
      await form.submit();
      const values = form.values;
      await resource.updateOrCreate({
        values,
        filterKeys: [collection.filterTargetKey],
      });
      message.success('Saved successfully!');
    },
  };
};
```

- [CardItem](https://client.docs.nocobase.com/components/card-item)：卡片组件，主要是提供卡片样式
- [DataBlockProvider](https://client.docs.nocobase.com/core/data-block/data-block-provider)：数据块组件，用于向子节点提供数据，因为是表单获取单行数据，我们提供了 `collection` 和 `action` 两个属性
- [FormV2](https://client.docs.nocobase.com/components/form-v2)：表单组件，用于渲染表单
- `useFormBlockProps`：用于获取数据块的属性，并传递给 FormV2 组件，具体示例参考 FormV2 [Default values](https://client.docs.nocobase.com/components/form-v2#default-values)
- [CollectionField](https://client.docs.nocobase.com/core/data-source/collection-field)：数据表字段组件，用于读取 Collection 中的 UI Schema 并渲染
- [Action](https://client.docs.nocobase.com/components/action)：操作按钮组件，用于提交表单
- `useSubmitActionProps`: 用于获取提交按钮的属性
  - [useCollection](/core/data-source/collection-provider)：用于获取数据表的信息
  - [useDataBlockResource](/core/data-block/data-block-resource-provider)：是 DataBlockProvider 提供的一个 hook，用于获取数据块的资源，方便增删改查

### 4. 创建表单组件

将 Schema 渲染成组件，我们需要了解以下知识：

- [ExtendCollectionsProvider](https://client.docs.nocobase.com/core/data-source/extend-collections-provider) 组件来扩展数据表
- [SchemaComponent](https://client.docs.nocobase.com/core/ui-schema/schema-component) 组件来渲染表单

我们继续在 `packages/plugins/@nocobase-sample/plugin-settings-form/src/client/PluginSettingsForm.tsx` 文件中继续编写：

```tsx | pure
import React from 'react';
import { ExtendCollectionsProvider, SchemaComponent } from '@nocobase/client';
export const PluginSettingsForm = () => {
  return (
    <ExtendCollectionsProvider collections={[mapConfigurationCollection]}>
      <SchemaComponent schema={schema} scope={{ useFormBlockProps, useSubmitActionProps }} />
    </ExtendCollectionsProvider>
  );
};
```

### 5. 注册插件配置页面

我们修改 `packages/plugins/@nocobase-sample/plugin-settings-form/src/client/index.tsx` 文件，其内容如下：

```diff
import { Plugin } from '@nocobase/client';
// @ts-ignore
import { name } from '../../package.json';
+ import { PluginSettingsForm } from './PluginSettingsForm'

export class PluginSettingFormClient extends Plugin {
  async load() {
    this.app.pluginSettingsManager.add(name, {
      title: 'Plugin Settings Form',
      icon: 'FormOutlined',
-     Component: () => 'TODO',
+     Component: PluginSettingsForm,
    });
  }
}

export default PluginSettingFormClient;
```

然后我们访问 [http://localhost:13000/admin/settings/@nocobase-sample/plugin-settings-form](http://localhost:13000/admin/settings/@nocobase-sample/plugin-settings-form) 就可以看到我们的配置页面了。

<video width="100%" controls>
  <source src="https://static-docs.nocobase.com/20240517-182716.mp4" type="video/mp4">
</video>

### 6. 在页面内部使用配置数据

关于使用表单数据，有 2 种场景，一种是在页面内部使用，一种是在全局使用。两者的区别是：

- 全局使用：需要在表单数据更新后，将数据同步到全局状态中，达到实时更新的效果
- 页面内部使用：因为页面的切换会自动销毁和创建，所以不需要同步数据

本步骤我们主要讲解在页面内部使用表单数据。

我们创建 `packages/plugins/@nocobase-sample/plugin-settings-form/src/client/PluginSettingsFormPage.tsx` 文件，其内容如下：

```tsx | pure
import { useRequest } from '@nocobase/client';
import React from 'react';

export const PluginSettingsFormPage = () => {
  const { data, loading } = useRequest<{ data?: { key: string; secret: string } }>({
    url: 'SamplesMapConfiguration:get',
  });

  if (loading) return null;

  return <pre>{JSON.stringify(data?.data, null, 2)}</pre>
}
```

然后我们在 `PluginSettingsForm` 组件中引入 `PluginSettingsFormPage` 组件：

```tsx | pure
import { PluginSettingsFormPage } from './PluginSettingsFormPage'
// ...

export class PluginSettingFormClient extends Plugin {
  async load() {
    // ...

    this.app.router.add(`admin.${name}-page`, {
      path: '/admin/plugin-settings-form-page',
      Component: PluginSettingsFormPage,
    })
  }
}
```

然后我们访问 [http://localhost:13000/admin/plugin-settings-form-page](http://localhost:13000/admin/plugin-settings-form-page) 就可以看到我们的表单数据了。

![img_v3_02av_70ade722-7069-4fc7-a2c3-c080f85ff30g](https://static-docs.nocobase.com/img_v3_02av_70ade722-7069-4fc7-a2c3-c080f85ff30g.jpg)

### 7. 全局使用配置数据

全局使用且需要实时刷新，需要使用到 `Context` 和 NocoBase [Provider](/development/client/providers) 能力。

我们创建 `packages/plugins/@nocobase-sample/plugin-settings-form/src/client/PluginSettingsFormProvider.tsx` 文件，其内容如下：

```tsx | pure
import React, { createContext, FC } from 'react';
import { useRequest, UseRequestResult } from '@nocobase/client';

const PluginSettingsFormContext = createContext<UseRequestResult<{ data?: { key: string; secret: string } }>>(null as any);

export const PluginSettingsFormProvider: FC<{ children: React.ReactNode }> = ({children}) => {
  const request = useRequest<{ data?: { key: string; secret: string } }>({
    url: 'SamplesMapConfiguration:get',
  });

  console.log('PluginSettingsFormProvider', request.data?.data);

  return <PluginSettingsFormContext.Provider value={request}>{children}</PluginSettingsFormContext.Provider>;
}

export const usePluginSettingsFormRequest = () => {
  return React.useContext(PluginSettingsFormContext);
};
```

然后修改 `packages/plugins/@nocobase-sample/plugin-settings-form/src/client/index.tsx` 文件，将其注册到全局中：

```ts
import { PluginSettingsFormProvider } from './PluginSettingsFormProvider'
// ...

export class PluginSettingFormClient extends Plugin {
  async load() {
    // ...
    this.app.addProvider(PluginSettingsFormProvider)
  }
}
```

然后在表单更新后，我们需要重新获取全局的数据。我们修改 `packages/plugins/@nocobase-sample/plugin-settings-form/src/client/PluginSettingsForm.tsx`：

```diff
+ import { usePluginSettingsFormRequest } from './PluginSettingsFormProvider';

const useSubmitActionProps = (): ActionProps => {
  const form = useForm();
  const { message } = AntdApp.useApp();
  const collection = useCollection();
  const resource = useDataBlockResource();
+ const globalSettingsFormRequest = usePluginSettingsFormRequest();
  return {
    type: 'primary',
    htmlType: 'submit',
    async onClick() {
      await form.submit();
      const values = form.values;
      await resource.updateOrCreate({
        values,
        filterKeys: [collection.filterTargetKey],
      });
+     await globalSettingsFormRequest.runAsync();
      message.success('Saved successfully!');
    },
  };
};
```

<video width="100%" controls>
  <source src="https://static-docs.nocobase.com/20240517-182717.mp4" type="video/mp4">
</video>

## 打包和上传到生产环境

按照 [构建并打包插件](/development/your-fisrt-plugin#构建并打包插件) 文档说明，我们可以打包插件并上传到生产环境。

如果是 clone 的源码，需要先执行一次全量 build，将插件的依赖也构建好。

```bash
yarn build
```

如果是使用的 `create-nocobase-app` 创建的项目，可以直接执行：

```bash
yarn build @nocobase-sample/plugin-settings-form --tar
```

这样就可以看到 `storage/tar/@nocobase-sample/plugin-settings-form.tar.gz` 文件了，然后通过[上传的方式](/welcome/getting-started/plugin)进行安装。
