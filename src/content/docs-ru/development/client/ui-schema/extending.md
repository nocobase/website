# Расширение компонентов Schema

Помимо нативных HTML-тегов, разработчики могут адаптировать больше пользовательских компонентов для обогащения библиотеки компонентов Schema.

При расширении компонентов часто используются следующие методы:

- [connect](https://react.formilyjs.org/api/shared/connect) — ненавязчивая интеграция сторонних компонентов, обычно используется для адаптации компонентов полей в сочетании с [mapProps](https://react.formilyjs.org/api/shared/map-props) и [mapReadPretty](https://react.formilyjs.org/api/shared/map-read-pretty);
- [observer](https://react.formilyjs.org/api/shared/observer) — используется, когда внутри компонента используются observable-объекты, и вы хотите, чтобы компонент реагировал на изменения observable-объектов;
- [withDynamicSchemaProps](#) — используется для реализации динамических props без вторжения.

## Самое простое расширение

Просто зарегистрируйте готовый React-компонент.

```tsx
/**
 * defaultShowCode: true
 */
import React from 'react';
import { SchemaComponent, SchemaComponentProvider } from '@nocobase/client';

const Hello = () => <h1>Hello, world!</h1>;

const schema = {
  type: 'void',
  name: 'hello',
  'x-component': 'Hello',
};

export default () => {
  return (
    <SchemaComponentProvider components={{ Hello }}>
      <SchemaComponent schema={schema} />
    </SchemaComponentProvider>
  );
};
```

## Подключение сторонних компонентов через `connect`

```tsx
/**
 * defaultShowCode: true
 */
import React from 'react';
import { Input } from 'antd';
import { connect, mapProps, mapReadPretty } from '@formily/react';
import { SchemaComponent, SchemaComponentProvider } from '@nocobase/client';

const ReadPretty = (props) => {
  return <div>{props.value}</div>;
};

const SingleText = connect(
  Input,
  mapProps((props, field) => {
    return {
      ...props,
      suffix: '后缀',
    };
  }),
  mapReadPretty(ReadPretty),
);

const schema = {
  type: 'object',
  properties: {
    t1: {
      type: 'string',
      default: 'hello t1',
      'x-component': 'SingleText',
    },
    t2: {
      type: 'string',
      default: 'hello t2',
      'x-component': 'SingleText',
      'x-pattern': 'readPretty',
    },
  },
};

export default () => {
  return (
    <SchemaComponentProvider components={{ SingleText }}>
      <SchemaComponent schema={schema} />
    </SchemaComponentProvider>
  );
};
```

## Использование `observer` для реакции на изменения данных

```tsx
/**
 * defaultShowCode: true
 */
import React from 'react';
import { Input } from 'antd';
import { connect, observer, useForm } from '@formily/react';
import { SchemaComponent, SchemaComponentProvider } from '@nocobase/client';

const SingleText = connect(Input);

const UsedObserver = observer(
  (props) => {
    const form = useForm();
    return <div>UsedObserver: {form.values.t1}</div>;
  },
  { displayName: 'UsedObserver' },
);

const NotUsedObserver = (props) => {
  const form = useForm();
  return <div>NotUsedObserver: {form.values.t1}</div>;
};

const schema = {
  type: 'object',
  properties: {
    t1: {
      type: 'string',
      'x-component': 'SingleText',
    },
    t2: {
      type: 'string',
      'x-component': 'UsedObserver',
    },
    t3: {
      type: 'string',
      'x-component': 'NotUsedObserver',
    },
  },
};

const components = {
  SingleText,
  UsedObserver,
  NotUsedObserver,
};

export default () => {
  return (
    <SchemaComponentProvider components={components}>
      <SchemaComponent schema={schema} />
    </SchemaComponentProvider>
  );
};
```

## Использование `withDynamicSchemaProps` для реализации динамических props

## Вложенные Schema

- Вложение через `props.children`, применимо для типов `void` и `object`. Примеры см. в разделе [Вложение для схем типа void и object](#вложение-для-схем-типа-void-и-object).
- `<RecursionField />` — пользовательское вложение, применимо для всех типов. Примеры см. в разделе [Вложение для схем типа array](#вложение-для-схем-типа-array).

Важно:

- Для схем, тип которых отличен от `void` и `object`, свойство `properties` не может быть отрендерено напрямую через `props.children`, но проблему вложенности можно решить с помощью `<RecursionField />`.
- Только схемы типов `void` и `object` могут использоваться с `onlyRenderProperties`.

```tsx | pure
<RecursionField schema={schema} onlyRenderProperties />
```

### Вложение схем типа void и object

Свойство `properties` можно адаптировать напрямую через `props.children`.

```tsx
/**
 * defaultShowCode: true
 */
import React from 'react';
import { SchemaComponent, SchemaComponentProvider } from '@nocobase/client';

// Компонент Hello адаптирован для `children`, теперь можно вкладывать `properties`.
const Hello = (props) => <h1>Hello, {props.children}!</h1>;
const World = () => <span>world</span>;

const schema = {
  type: 'object',
  name: 'hello',
  'x-component': 'Hello',
  properties: {
    world: {
      type: 'string',
      'x-component': 'World',
    },
  },
};

export default () => {
  return (
    <SchemaComponentProvider components={{ Hello, World }}>
      <SchemaComponent schema={schema} />
    </SchemaComponentProvider>
  );
};
```

Сравнение результатов рендеринга для свойств различных типов

```tsx
import React from 'react';
import { SchemaComponent, SchemaComponentProvider } from '@nocobase/client';

const Hello = (props) => <h1>Привет, {props.children}!</h1>;
const World = () => <span>мир</span>;

const schema = {
  type: 'object',
  properties: {
    title1: {
      type: 'void',
      'x-content': 'Схема типа **Void**, рендеринг свойств (**properties**).',
    },
    void: {
      type: 'void',
      name: 'hello',
      'x-component': 'Hello',
      properties: {
        world: {
          type: 'void',
          'x-component': 'World',
        },
      },
    },
    title2: {
      type: 'void',
      'x-content': 'Схема типа **Object**, рендеринг свойств (**properties**).',
    },
    object: {
      type: 'object',
      name: 'hello',
      'x-component': 'Hello',
      properties: {
        world: {
          type: 'string',
          'x-component': 'World',
        },
      },
    },
    title3: {
      type: 'void',
      'x-content': 'Схема типа **Array**, свойства (**properties**) не рендерятся.',
    },
    array: {
      type: 'array',
      name: 'hello',
      'x-component': 'Hello',
      properties: {
        world: {
          type: 'string',
          'x-component': 'World',
        },
      },
    },
    title4: {
      type: 'void',
      'x-content': 'Схема типа **String**, свойства (**properties**) не рендерятся.',
    },
    string: {
      type: 'string',
      name: 'hello',
      'x-component': 'Hello',
      properties: {
        world: {
          type: 'string',
          'x-component': 'World',
        },
      },
    },
  },
};

export default () => {
  return (
    <SchemaComponentProvider components={{ Hello, World }}>
      <SchemaComponent schema={schema} />
    </SchemaComponentProvider>
  );
};
```

### Вложение схем типа array

Проблему пользовательского вложения можно решить с помощью `<RecursionField />`.

#### Когда элементы Array являются строками (string) или числами (number)

```tsx
import React from 'react';
import {
  useFieldSchema,
  Schema,
  RecursionField,
  useField,
  observer,
  connect,
} from '@formily/react';
import { SchemaComponent, SchemaComponentProvider } from '@nocobase/client';

const useValueSchema = () => {
  const schema = useFieldSchema();
  return schema.reduceProperties((buf, s) => {
    if (s['x-component'] === 'Value') {
      return s;
    }
    return buf;
  });
};

const ArrayList = observer(
  (props) => {
    const field = useField();
    const schema = useValueSchema();
    return (
      <>
        Массив строк
        <ul>
          {field.value?.map((item, index) => {
            // 只有一个元素
            return <RecursionField name={index} schema={schema} />;
          })}
        </ul>
      </>
    );
  },
  { displayName: 'ArrayList' },
);

const Value = connect((props) => {
  return <li>value: {props.value}</li>;
});

const schema = {
  type: 'object',
  properties: {
    strArr: {
      type: 'array',
      default: [1, 2, 3],
      'x-component': 'ArrayList',
      properties: {
        value: {
          type: 'number',
          'x-component': 'Value',
        },
      },
    },
  },
};

export default () => {
  return (
    <SchemaComponentProvider components={{ ArrayList, Value }}>
      <SchemaComponent schema={schema} />
    </SchemaComponentProvider>
  );
};
```

#### Когда элементы Array являются объектами (Object)

```tsx
import React from 'react';
import {
  useFieldSchema,
  Schema,
  RecursionField,
  useField,
  observer,
  connect,
} from '@formily/react';
import { SchemaComponent, SchemaComponentProvider } from '@nocobase/client';

const ArrayList = observer(
  (props) => {
    const field = useField();
    const schema = useFieldSchema();
    // Схемы типа **array** не могут использовать **onlyRenderProperties**, их нужно преобразовать в тип **object**.
    const objSchema = new Schema({
      type: 'object',
      properties: schema.properties,
    });
    return (
      <ul>
        {field.value?.map((item, index) => {
          // Элементы массива являются объектами.
          return (
            <RecursionField
              name={index}
              schema={objSchema}
              onlyRenderProperties
            />
          );
        })}
      </ul>
    );
  },
  { displayName: 'ArrayList' },
);

const Value = connect((props) => {
  return <li>value: {props.value}</li>;
});

const schema = {
  type: 'object',
  properties: {
    objArr: {
      type: 'array',
      default: [{ value: 't1' }, { value: 't2' }, { value: 't3' }],
      'x-component': 'ArrayList',
      properties: {
        value: {
          type: 'number',
          'x-component': 'Value',
        },
      },
    },
  },
};

export default () => {
  return (
    <SchemaComponentProvider components={{ ArrayList, Value }}>
      <SchemaComponent schema={schema} />
    </SchemaComponentProvider>
  );
};
```

#### Tree 结构数据

```tsx
import { ArrayField } from '@formily/core';
import {
  connect,
  ISchema,
  observer,
  RecursionField,
  useField,
  useFieldSchema,
} from '@formily/react';
import { SchemaComponent, SchemaComponentProvider } from '@nocobase/client';
import { Table, TableColumnType } from 'antd';
import React from 'react';

const ArrayTable = observer(
  (props: any) => {
    const { rowKey } = props;
    const field = useField<ArrayField>();
    const schema = useFieldSchema();
    const columnSchemas = schema.reduceProperties((buf, s) => {
      if (s['x-component'] === 'ArrayTable.Column') {
        buf.push(s);
      }
      return buf;
    }, []);

    const columns = columnSchemas.map((s) => {
      return {
        render: (value, record) => {
          return (
            <RecursionField
              name={record.__path}
              schema={s}
              onlyRenderProperties
            />
          );
        },
      } as TableColumnType<any>;
    });

    return <Table rowKey={rowKey} columns={columns} dataSource={field.value} />;
  },
  { displayName: 'ArrayTable' },
);

const Value = connect((props) => {
  return <li>value: {props.value}</li>;
});

const schema: ISchema = {
  type: 'object',
  properties: {
    objArr: {
      type: 'array',
      default: [
        { __path: '0', id: 1, value: 't1' },
        {
          __path: '1',
          id: 2,
          value: 't2',
          children: [
            {
              __path: '1.children.0',
              id: 5,
              value: 't5',
              parentId: 2,
            },
          ],
        },
        {
          __path: '2',
          id: 3,
          value: 't3',
          children: [
            {
              __path: '2.children.0',
              id: 4,
              value: 't4',
              parentId: 3,
              children: [
                {
                  __path: '2.children.0.children.0',
                  id: 6,
                  value: 't6',
                  parentId: 4,
                },
                {
                  __path: '2.children.0.children.1',
                  id: 7,
                  value: 't7',
                  parentId: 4,
                },
              ],
            },
          ],
        },
      ],
      'x-component': 'ArrayTable',
      'x-component-props': {
        rowKey: 'id',
      },
      properties: {
        c1: {
          type: 'void',
          'x-component': 'ArrayTable.Column',
          properties: {
            value: {
              type: 'string',
              'x-component': 'Value',
            },
          },
        },
      },
    },
  },
};

export default () => {
  return (
    <SchemaComponentProvider components={{ ArrayTable, Value }}>
      <SchemaComponent schema={schema} />
    </SchemaComponentProvider>
  );
};
```
