# Страница настройки таблицы

## Описание сценария

Конфигурационный интерфейс состоит из одной таблицы, в которой можно добавлять, редактировать и удалять данные.

## Описание примера

Предположим, что нам нужно создать плагин для уведомлений по электронной почте. У нас может быть несколько шаблонов для уведомлений, каждый из которых содержит такие данные, как тема письма и его содержание. Нам нужен конфигурационный интерфейс для управления этими шаблонами.

Полный код примера из этого документа можно найти в [plugin-samples](https://github.com/nocobase/plugin-samples/tree/main/packages/plugins/%40nocobase-sample/plugin-settings-table).

## Инициализация плагина

Мы будем следовать инструкциям из документации [Создание первого плагина](/development/your-fisrt-plugin). Если у вас еще нет проекта, вы можете сначала создать его. Если проект уже существует или вы клонировали исходный код, этот шаг можно пропустить.

```bash
yarn create nocobase-app my-nocobase-app -d sqlite
cd my-nocobase-app
yarn install
yarn nocobase install
```

Затем инициализируем плагин и добавим его в систему:

```bash
yarn pm create @nocobase-sample/plugin-settings-table
yarn pm enable @nocobase-sample/plugin-settings-table
```

Затем запустите проект:

```bash
yarn dev
```

После этого можно войти в систему и перейти по ссылке [http://localhost:13000/admin/pm/list/local/](http://localhost:13000/admin/pm/list/local/), чтобы увидеть, что плагин установлен и активирован.

## Реализация функционала на стороне сервера

### 1. Создание таблицы данных

Основная задача серверной части — создать таблицу данных для хранения конфигурационной информации. Для создания таблицы данных нужно ознакомиться со следующими материалами:

- [Таблицы данных и поля](/development/server/collections)
- [Создание таблицы данных](/development/server/collections/configure#在插件代码里定义)
- [Field Type](/development/server/collections/options#field-type)
- [API defineCollection()](/api/database#definecollection)
- [Collection API](/api/database/collection)

В случае данного примера мы создаем файл `packages/plugins/@nocobase-sample/plugin-settings-table/src/server/collections/email-templates.ts` со следующим содержанием:


```ts
import { defineCollection } from '@nocobase/database';

export default defineCollection({
  name: 'samplesEmailTemplates',
  fields: [
    {
      type: 'string',
      name: 'subject',
    },
    {
      type: 'text',
      name: 'content',
    },
  ],
});
```

Исходя из требований, мы создали таблицу данных `samplesEmailTemplates`, которая содержит два поля: `subject` и `content`. Для хранения значений этих полей мы использовали типы данных "однострочный текст" и "форматированный текст":

- Поле `subject` имеет тип однострочного текста, поэтому значение типа (`type`) равно `string`.
- Поле `content` имеет тип многострочного текста, поэтому значение типа (`type`) равно `text`.

### 2. Выполнение обновления

Теперь нам нужно применить определение таблицы данных к базе данных. Для этого можно выполнить обновление с помощью следующей команды:

```bash
yarn nocobase upgrade
```

![img_v3_02av_eb156d0e-9f25-4702-a5de-2bfa5cde84bg](https://static-docs.nocobase.com/img_v3_02av_eb156d0e-9f25-4702-a5de-2bfa5cde84bg.jpg)

## Реализация функционала на стороне клиента

### 1. Создание страницы конфигурации плагина

Ранее в разделе [Добавление страницы конфигурации плагина (один маршрут)](/plugin-samples/router/add-setting-page-single-route) уже было подробно описано, как это сделать, поэтому здесь мы не будем повторяться.

Мы изменим файл `packages/plugins/@nocobase-sample/plugin-settings-table/src/client/index.tsx`, и его содержимое будет следующим:
```tsx | pure
import { Plugin } from '@nocobase/client';
// @ts-ignore
import { name } from '../../package.json';

export class PluginSettingsTableClient extends Plugin {
  async load() {
    this.app.pluginSettingsManager.add(name, {
      title: 'Plugin Settings Table',
      icon: 'TableOutlined',
      Component: () => 'TODO',
    });
  }
}

export default PluginSettingsTableClient;
```

Затем перейдите по адресу [http://localhost:13000/admin/settings/@nocobase-sample/plugin-settings-table](http://localhost:13000/admin/settings/@nocobase-sample/plugin-settings-table), чтобы увидеть страницу конфигурации.

![img_v3_02av_c610403d-95d8-466a-a3d1-cfcab232057g](https://static-docs.nocobase.com/img_v3_02av_c610403d-95d8-466a-a3d1-cfcab232057g.jpg)

### 2. Определение структуры таблицы данных

При использовании подхода, основанного на Schema, нам нужно сначала определить структуру таблицы данных. Для определения структуры таблицы данных на стороне клиента необходимо ознакомиться со следующими материалами:

- [Таблицы данных и поля](/development/server/collections#field-component)
- [Field Type](/development/server/collections/options#field-type)
- [Field Interface](/development/server/collections/options#field-interface)
- [Протокол UI Schema](/development/client/ui-schema/what-is-ui-schema)
- [Компоненты полей](https://client.docs.nocobase.com/components)

Далее создадим файл `packages/plugins/@nocobase-sample/plugin-settings-table/src/client/PluginSettingsTable.tsx` со следующим содержимым:

```ts
const emailTemplatesCollection = {
  name: 'samplesEmailTemplates',
  filterTargetKey: 'id',
  fields: [
    {
      type: 'string',
      name: 'subject',
      interface: 'input',
      uiSchema: {
        title: 'Subject',
        required: true,
        'x-component': 'Input',
      },
    },
    {
      type: 'text',
      name: 'content',
      interface: 'richText',
      uiSchema: {
        title: 'Content',
        required: true,
        'x-component': 'RichText',
      },
    },
  ],
};
```

Мы определили таблицу данных `samplesEmailTemplates`, которая содержит два поля: `subject` и `content`. Ниже приведено описание поля `fields`:

- `type`: так как это строковое значение, оно должно соответствовать типу поля в таблице данных на стороне сервера.
- `name`: имя поля, которое должно совпадать с именем поля в таблице данных на стороне сервера.
- `interface`:
  - Поле `subject`: однострочный текст, что соответствует интерфейсу со значением `input`.
  - Поле `content`: форматированный текст, что соответствует интерфейсу со значением `richText`.
- `uiSchema`: отвечает за рендеринг компонентов полей формы на стороне клиента:
  - `type`: как для однострочного, так и для многострочного текста значение будет строковым, поэтому оно равно `string`.
  - `title`: заголовок элемента формы.
  - `required`: так как это обязательное поле, значение равно `true`.
  - `x-component`:
    - Поле `subject`: используется компонент [Input](https://client.docs.nocobase.com/components/input).
    - Поле `content`: используется компонент [RichText](https://client.docs.nocobase.com/components/rich-text).

### 3. Создание Table Schema

Чтобы правильно составить схему формы, необходимо ознакомиться со следующими материалами:

- [Компонент Table](https://client.docs.nocobase.com/components/table-v2)
- [Компонент CollectionField](https://client.docs.nocobase.com/core/data-source/collection-field)
- [Компонент CardItem](https://client.docs.nocobase.com/components/card-item)
- [Протокол Schema](/development/client/ui-schema/what-is-ui-schema)
- [Компонент DataBlockProvider](https://client.docs.nocobase.com/core/data-block/data-block-provider)

Мы используем пример Table [Extends Collection](https://client.docs.nocobase.com/components/table-v2#extends-collection) и продолжаем изменять файл `packages/plugins/@nocobase-sample/plugin-settings-table/src/client/PluginSettingsTable.tsx`:

```tsx | pure
import { ISchema } from '@nocobase/client';
import { uid } from '@formily/shared'

const schema: ISchema = {
  type: 'void',
  name: uid(),
  'x-component': 'CardItem',
  'x-decorator': 'TableBlockProvider',
  'x-decorator-props': {
    collection: emailTemplatesCollection.name,
    action: 'list',
    showIndex: true,
    dragSort: false,
  },
  properties: {
    table: {
      type: 'array',
      'x-component': 'TableV2',
      'x-use-component-props': 'useTableBlockProps',
      'x-component-props': {
        rowKey: 'id',
        rowSelection: {
          type: 'checkbox',
        },
      },
      properties: {
        subject: {
          type: 'void',
          title: 'Subject',
          'x-component': 'TableV2.Column',
          properties: {
            subject: {
              type: 'string',
              'x-component': 'CollectionField',
              'x-pattern': 'readPretty',
            },
          },
        },
        content: {
          type: 'void',
          title: 'Content',
          'x-component': 'TableV2.Column',
          properties: {
            content: {
              type: 'string',
              'x-component': 'CollectionField',
              'x-pattern': 'readPretty',
            },
          },
        },
      },
    },
  },
}
```

- [CardItem](https://client.docs.nocobase.com/components/card-item): компонент карточки, который предоставляет стилизацию в виде карточки.
- [DataBlockProvider](https://client.docs.nocobase.com/core/data-block/data-block-provider): компонент блока данных, который используется для передачи данных дочерним узлам. Поскольку форма получает одну строку данных, мы указали два свойства: `collection` и `action`.
- [TableV2](https://client.docs.nocobase.com/components/table-v2): компонент таблицы, который используется для отображения формы.
- `useTableBlockProps`: используется для получения свойств блока данных и передачи их в компонент TableV2. Обычно это не требует изменений.
- `TableV2.Column`: компонент столбца таблицы, который используется для отображения столбцов формы.
- [CollectionField](https://client.docs.nocobase.com/core/data-source/collection-field): компонент поля таблицы данных, который считывает `UI Schema` из коллекции и выполняет рендеринг.

### 4. Создание компонента Table

Чтобы преобразовать Schema в компонент, необходимо ознакомиться со следующими материалами:

- Компонент [ExtendCollectionsProvider](https://client.docs.nocobase.com/core/data-source/extend-collections-provider) для расширения таблицы данных.
- Компонент [SchemaComponent](https://client.docs.nocobase.com/core/ui-schema/schema-component) для рендеринга формы.

Продолжим работу в файле `packages/plugins/@nocobase-sample/plugin-settings-table/src/client/PluginSettingsTable.tsx`:

```tsx | pure
import React from 'react';
import { ExtendCollectionsProvider, SchemaComponent } from '@nocobase/client';
export const PluginSettingsTable = () => {
  return (
    <ExtendCollectionsProvider collections={[emailTemplatesCollection]}>
      <SchemaComponent schema={schema} scope={{ useFormBlockProps, useSubmitActionProps }} />
    </ExtendCollectionsProvider>
  );
};
```

### 5. Регистрация страницы конфигурации плагина

Мы изменим файл `packages/plugins/@nocobase-sample/plugin-settings-table/src/client/index.tsx`, и его содержимое будет следующим:

```diff
import { Plugin } from '@nocobase/client';
// @ts-ignore
import { name } from '../../package.json';
+ import { PluginSettingsTable } from './PluginSettingsTable'

export class PluginSettingFormClient extends Plugin {
  async load() {
    this.app.pluginSettingsManager.add(name, {
      title: 'Plugin Settings Form',
      icon: 'FormOutlined',
-     Component: () => 'TODO',
+     Component: PluginSettingsTable,
    });
  }
}

export default PluginSettingFormClient;
```

Затем переходим по адресу [http://localhost:13000/admin/settings/@nocobase-sample/plugin-settings-table](http://localhost:13000/admin/settings/@nocobase-sample/plugin-settings-table), чтобы увидеть страницу конфигурации.

![img_v3_02av_97fd272d-1333-4faf-9ce1-6363c6a049dg](https://static-docs.nocobase.com/img_v3_02av_97fd272d-1333-4faf-9ce1-6363c6a049dg.jpg)

### 6. Реализация функции добавления

В текущей таблице отсутствуют данные, поэтому нам нужно добавить функционал для создания новых записей. Для реализации этой функции следует ознакомиться со следующими документами:

- Компонент Table [Пример With ActionToolbar](https://client.docs.nocobase.com/components/table-v2)
- [Компонент Form](https://client.docs.nocobase.com/components/form-v2)
- [Компонент Action](https://client.docs.nocobase.com/components/action)

Продолжим работу в файле `packages/plugins/@nocobase-sample/plugin-settings-table/src/client/PluginSettingsTable.tsx`:

```tsx | pure
import React from 'react';
import { ISchema, useActionContext, useDataBlockRequest, useDataBlockResource } from '@nocobase/client';
import { App as AntdApp } from 'antd';
import { useForm } from '@formily/react';

const schema: ISchema = {
  // ...
  properties: {
    actions: {
      type: 'void',
      'x-component': 'ActionBar',
      'x-component-props': {
        style: {
          marginBottom: 20,
        },
      },
      properties: {
        add: {
          type: 'void',
          'x-component': 'Action',
          title: 'Add New',
          'x-align': 'right',
          'x-component-props': {
            type: 'primary',
          },
          properties: {
            drawer: {
              type: 'void',
              'x-component': 'Action.Drawer',
              title: 'Add new',
              properties: {
                form: {
                  type: 'void',
                  'x-component': 'FormV2',
                  properties: {
                    subject: {
                      'x-decorator': 'FormItem',
                      'x-component': 'CollectionField',
                    },
                    content: {
                      'x-decorator': 'FormItem',
                      'x-component': 'CollectionField',
                    },
                    footer: {
                      type: 'void',
                      'x-component': 'Action.Drawer.Footer',
                      properties: {
                        submit: {
                          title: 'Submit',
                          'x-component': 'Action',
                          'x-use-component-props': 'useSubmitActionProps',
                        },
                      }
                    }
                  },
                },
              },
            },
          },
        },
      }
    },

    table: {
      // ...
    }
  }
}


const useSubmitActionProps = () => {
  const { setVisible } = useActionContext();
  const { message } = AntdApp.useApp();
  const form = useForm();
  const resource = useDataBlockResource();
  const { runAsync } = useDataBlockRequest();

  return {
    type: 'primary',
    async onClick() {
      await form.submit();
      const values = form.values;
      await resource.create({ values })
      await runAsync()
      message.success('Saved successfully');
      setVisible(false);
    },
  };
};
```

Вот описание компонентов и их функций:

- [ActionBar](https://client.docs.nocobase.com/components/action#actionbar): предоставляет разметку для кнопок действий.
- [Action](https://client.docs.nocobase.com/components/action): кнопка добавления.
- [Action.Drawer](https://client.docs.nocobase.com/components/action#actiondrawer): при нажатии открывается всплывающее окно.
- [FormV2](https://client.docs.nocobase.com/components/form-v2): компонент формы.
- [FormItem](https://client.docs.nocobase.com/components/form-v2#formitem): компонент элемента формы.
- [Action.Drawer.Footer](https://client.docs.nocobase.com/components/action#actiondrawerfooter): нижняя часть всплывающего окна.
- [useSubmitActionProps](https://client.docs.nocobase.com/core/data-block/use-data-block-request#use-submit-action-props): используется для отправки формы.
  - `useActionContext()`: получает контекст действия (Action Context).
  - [useDataBlockResource()](https://client.docs.nocobase.com/core/data-block/data-block-resource-provider): получает `resource`, предоставляемый `TableBlockProvider`, который используется для выполнения операций создания, удаления, изменения и запроса данных.
  - [useDataBlockRequest()](https://client.docs.nocobase.com/core/data-block/data-block-request-provider): объект запроса блока данных таблицы. При вызове `runAsync` выполняется повторный запрос для обновления данных таблицы.

Затем необходимо добавить `useSubmitActionProps` в контекст:

```diff
export const PluginSettingsTable = () => {
  return (
    <ExtendCollectionsProvider collections={[emailTemplatesCollection]}>
-     <SchemaComponent schema={schema} />
+     <SchemaComponent schema={schema} scope={{ useSubmitActionProps }} />
    </ExtendCollectionsProvider>
  );
};
```

<video width="100%" controls>
  <source src="https://static-docs.nocobase.com/20240517-190400.mp4" type="video/mp4">
</video>

### 7. Реализация функции редактирования

Функция редактирования аналогична функции добавления, но требует добавления кнопки редактирования в таблицу (Table), а затем изменения данных во всплывающем окне. Для реализации функции редактирования необходимо ознакомиться со следующими документами:

- Компонент Table [Просмотр или редактирование записи](https://client.docs.nocobase.com/components/table-v2#view-or-edit-record)
- Компонент Form [Значения по умолчанию](https://client.docs.nocobase.com/components/form-v2#default-values)
- [useCollectionRecord()](https://client.docs.nocobase.com/core/data-block/collection-record-provider): используется для получения данных текущей строки.

Продолжим работу в файле `packages/plugins/@nocobase-sample/plugin-settings-table/src/client/PluginSettingsTable.tsx`:

```tsx | pure
import { useCollectionRecordData } from '@nocobase/client';
import { useMemo } from 'react';

const useEditFormProps = () => {
  const recordData = useCollectionRecordData();
  const form = useMemo(
    () =>
      createForm({
        values: recordData,
      }),
    [],
  );

  return {
    form,
  };
}

const schema: ISchema = {
  // ...
  properties: {
    // ...
    table: {
      // ...
      properties: {
        // ...
        actions: {
          type: 'void',
          title: 'Actions',
          'x-component': 'TableV2.Column',
          properties: {
            actions: {
              type: 'void',
              'x-component': 'Space',
              'x-component-props': {
                split: '|',
              },
              properties: {
                edit: {
                  type: 'void',
                  title: 'Edit',
                  'x-component': 'Action.Link',
                  'x-component-props': {
                    openMode: 'drawer',
                    icon: 'EditOutlined',
                  },
                  properties: {
                    drawer: {
                      type: 'void',
                      title: 'Edit',
                      'x-component': 'Action.Drawer',
                      properties: {
                        form: {
                          type: 'void',
                          'x-component': 'FormV2',
                          'x-use-component-props': 'useEditFormProps',
                          properties: {
                            subject: {
                              'x-decorator': 'FormItem',
                              'x-component': 'CollectionField',
                            },
                            content: {
                              'x-decorator': 'FormItem',
                              'x-component': 'CollectionField',
                            },
                            footer: {
                              type: 'void',
                              'x-component': 'Action.Drawer.Footer',
                              properties: {
                                submit: {
                                  title: 'Submit',
                                  'x-component': 'Action',
                                  'x-use-component-props': 'useSubmitActionProps',
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            }
          },
        }
      }
    }
  }
}
```

`Table` передает данные каждой строки через [CollectionRecordProvider](https://client.docs.nocobase.com/core/data-block/collection-record-provider) дочерним элементам.

В нашем `useEditFormProps` мы используем `useCollectionRecordData()`, чтобы получить данные текущей строки, а затем создаем форму с помощью `createForm`, передавая данные текущей строки как значения по умолчанию в форму.

После этого мы модифицируем логику в `useSubmitActionProps()`, чтобы она поддерживала как добавление, так и редактирование:

```diff
const useSubmitActionProps = () => {
  // ...
+ const collection = useCollection();
  return {
    type: 'primary',
    async onClick() {
      await form.submit();
      const values = form.values;
-     await resource.create({ values })
+     if (values[collection.filterTargetKey]) {
+       await resource.update({
+         values,
+         filterByTk: values[collection.filterTargetKey],
+       });
+     } else {
+       await resource.create({
+         values,
+       });
+     }
      // ...
    },
  };
};
```

- [useCollection](https://client.docs.nocobase.com/core/data-source/collection-provider#usecollection): объект таблицы данных, предоставляемый DataBlockProvider.

Наконец, зарегистрируем `useEditFormProps` в контексте:

```diff
export const PluginSettingsTable = () => {
  return (
    <ExtendCollectionsProvider collections={[emailTemplatesCollection]}>
-     <SchemaComponent schema={schema} scope={{ useSubmitActionProps }} />
+     <SchemaComponent schema={schema} scope={{ useSubmitActionProps, useEditFormProps }} />
    </ExtendCollectionsProvider>
  );
};
```

<video width="100%" controls>
  <source src="https://static-docs.nocobase.com/20240517-190849.mp4" type="video/mp4">
</video>

### 8. Реализация функции удаления

Функция удаления довольно проста. Нам нужно только добавить кнопку `Delete` в столбец Action, а затем вызвать метод `resource.destroy()` и обновить данные таблицы.

- Action [Confirm](https://client.docs.nocobase.com/components/action#confirm)

Продолжим работу в файле `packages/plugins/@nocobase-sample/plugin-settings-table/src/client/PluginSettingsTable.tsx`:

```ts
import { ActionProps } from '@nocobase/client';

function useDeleteActionProps(): ActionProps {
  const { message } = AntdApp.useApp();
  const record = useCollectionRecordData();
  const resource = useDataBlockResource();
  const collection = useCollection();
  const { runAsync } = useDataBlockRequest();
  return {
    confirm: {
      title: 'Delete',
      content: 'Are you sure you want to delete it?',
    },
    async onClick() {
      await resource.destroy({
        filterByTk: record[collection.filterTargetKey]
      });
      await runAsync();
      message.success('Deleted!');
    },
  };
}

const schema: ISchema = {
  // ...
  properties: {
    // ...
    table: {
      // ...
      properties: {
        // ...
        actions: {
          // ...
          properties: {
            // ...
            delete: {
              type: 'void',
              title: 'Delete',
              'x-component': 'Action.Link',
              'x-use-component-props': 'useDeleteActionProps',
            }
          }
        }
      }
    }
  }
}
```

Затем мы регистрируем `useDeleteActionProps` в контексте.


```diff
export const PluginSettingsTable = () => {
  return (
    <ExtendCollectionsProvider collections={[emailTemplatesCollection]}>
-     <SchemaComponent schema={schema} scope={{ useSubmitActionProps, useEditFormProps }} />
+     <SchemaComponent schema={schema} scope={{ useSubmitActionProps, useEditFormProps, useDeleteActionProps }} />
    </ExtendCollectionsProvider>
  );
};
```

<video width="100%" controls>
  <source src="https://static-docs.nocobase.com/20240517-191110.mp4" type="video/mp4">
</video>

### 9. Использование данных конфигурации внутри страницы

При использовании данных формы существует два сценария: использование внутри страницы и использование в глобальном контексте. Различия между ними заключаются в следующем:

- **Глобальное использование**: после обновления данных формы их необходимо синхронизировать с глобальным состоянием для обеспечения эффекта мгновенного обновления.
- **Использование внутри страницы**: поскольку переключение страниц автоматически уничтожает и создает компоненты, синхронизация данных не требуется.

На этом этапе мы рассмотрим использование данных формы **внутри страницы**.

Создадим файл `packages/plugins/@nocobase-sample/plugin-settings-table/src/client/PluginSettingsTablePage.tsx` со следующим содержимым:

```tsx | pure
import { useRequest } from '@nocobase/client';
import React from 'react';

export const PluginSettingsTablePage = () => {
  const { data, loading } = useRequest<{ data?: any[] }>({
    url: 'samplesEmailTemplates:list',
  });

  if (loading) return null;

  return <pre>{JSON.stringify(data?.data, null, 2)}</pre>
}
```

Затем мы импортируем компонент `PluginSettingsTablePage` в компонент `PluginSettingsTable`:

```tsx | pure
import { PluginSettingsTablePage } from './PluginSettingsTablePage'
// ...

export class PluginSettingFormClient extends Plugin {
  async load() {
    // ...

    this.app.router.add(`admin.${name}-page`, {
      path: '/admin/plugin-settings-table-page',
      Component: PluginSettingsTablePage,
    })
  }
}
```

Затем переходим по адресу [http://localhost:13000/admin/plugin-settings-table-page](http://localhost:13000/admin/plugin-settings-table-page), чтобы увидеть данные нашей формы.

![img_v3_02av_753dd9f1-9e8c-43c5-a1c6-1fb217844cag](https://static-docs.nocobase.com/img_v3_02av_753dd9f1-9e8c-43c5-a1c6-1fb217844cag.jpg)

### 10. Глобальное использование данных конфигурации

Для глобального использования с необходимостью обновления в реальном времени потребуется использование `Context` и возможностей NocoBase [Provider](/development/client/providers).

我们创建 `packages/plugins/@nocobase-sample/plugin-settings-table/src/client/PluginSettingsTableProvider.tsx` 文件，其内容如下：

```tsx | pure
import React, { createContext, FC } from 'react';
import { useRequest, UseRequestResult } from '@nocobase/client';

const PluginSettingsTableContext = createContext<UseRequestResult<{ data?: any[] }>>(null as any);

export const PluginSettingsTableProvider: FC<{ children: React.ReactNode }> = ({children}) => {
  const request = useRequest<{ data?: any[] }>({
    url: 'samplesEmailTemplates:list',
  });

  console.log('PluginSettingsTableProvider', request.data?.data);

  return <PluginSettingsTableContext.Provider value={request}>{children}</PluginSettingsTableContext.Provider>;
}

export const usePluginSettingsTableRequest = () => {
  return React.useContext(PluginSettingsTableContext);
};
```

Затем изменяем файл `packages/plugins/@nocobase-sample/plugin-settings-table/src/client/index.tsx`, чтобы зарегистрировать его глобально:

```ts
import { PluginSettingsTableProvider } from './PluginSettingsTableProvider'
// ...

export class PluginSettingFormClient extends Plugin {
  async load() {
    // ...
    this.app.addProvider(PluginSettingsTableProvider)
  }
}
```

Затем, после обновления формы, нам нужно заново получить глобальные данные. Мы модифицируем файл `packages/plugins/@nocobase-sample/plugin-settings-table/src/client/PluginSettingsTable.tsx`:

```diff
import { usePluginSettingsTableRequest } from './PluginSettingsTableProvider';

// ...

const useSubmitActionProps = (): ActionProps => {
  // ...
+ const globalSettingsTableRequest = usePluginSettingsTableRequest();
  return {
    type: 'primary',
    htmlType: 'submit',
    async onClick() {
      // ...
+     await globalSettingsTableRequest.runAsync();
      message.success('Saved successfully!');
    },
  };
};

function useDeleteActionProps(): ActionProps {
+ const globalSettingsTableRequest = usePluginSettingsTableRequest();

  return {
    // ...
    async onClick() {
      // ...
+     await globalSettingsTableRequest.runAsync();
      message.success('Deleted!');
    }
  }
}
```

<video width="100%" controls>
  <source src="https://static-docs.nocobase.com/20240517-191452.mp4" type="video/mp4">
</video>

## Упаковка и загрузка в производственную среду

Согласно документации [Сборка и упаковка плагина](/development/your-fisrt-plugin#构建并打包插件), мы можем упаковать плагин и загрузить его в производственную среду.

Если вы клонировали исходный код, сначала необходимо выполнить полную сборку один раз, чтобы также собрать зависимости плагина.

```bash
yarn build
```

Если вы используете проект, созданный с помощью `create-nocobase-app`, вы можете выполнить следующую команду напрямую:

```bash
yarn build @nocobase-sample/plugin-settings-table --tar
```

После этого вы найдете файл `storage/tar/@nocobase-sample/plugin-settings-table.tar.gz`. Затем вы можете установить его, [загрузив этот файл](/welcome/getting-started/plugin).
