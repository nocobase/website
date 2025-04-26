# Designable Designer

NocoBase предоставляет возможность проектирования схем (Schema) через метод `createDesignable()`.

```ts
import React from 'react';
import { Schema } from '@formily/json-schema';
import { createDesignable } from '@nocobase/client';

// Создать пример схемы (schema).
const current = new Schema({
  name: 'root',
  type: 'void',
  'x-component': 'Page',
});

// Создать **designable** для текущей схемы (schema).
const dn = createDesignable({
  current,
});

// Добавить узел **hello** внутрь узла схемы (schema).
dn.insertAfterBegin({
  name: 'hello',
  type: 'void',
  'x-component': 'Hello',
});

console.log(current.toJSON());
{
  "name": "root",
  "type": "void",
  "x-component": "Page",
  "properties": {
    "hello": {
      "type": "void",
      "name": "hello",
      "x-component": "Hello",
      "x-index": 0
    }
  }
}
```

В компоненте Schema можно напрямую использовать `useDesignable()` для обработки текущего узла схемы (Schema).

```tsx
import React from 'react';
import { Button } from 'antd';
import {
  SchemaComponent,
  SchemaComponentProvider,
  useDesignable,
} from '@nocobase/client';

const Hello = () => <h1>Привет, мир!</h1>;

const Page = (props) => {
  const dn = useDesignable();
  return (
    <div>
      <Button
        onClick={() => {
          dn.insertAfterBegin({
            type: 'void',
            'x-component': 'Hello',
          });
        }}
      >
        Нажмите здесь, чтобы добавить дочерний узел
      </Button>
      {props.children}
    </div>
  );
};

const schema = {
  type: 'void',
  name: 'page',
  'x-component': 'Page',
};

export default () => {
  return (
    <SchemaComponentProvider components={{ Page, Hello }}>
      <SchemaComponent schema={schema} />
    </SchemaComponentProvider>
  );
};
```

## createDesignable vs useDesignable

- `createDesignable` требует передачи параметра `current`, а `useDesignable` используется напрямую для текущего узла и не требует передачи `current`.
- `createDesignable` может быть использован в событиях, тогда как `useDesignable` является React hook методом и должен быть выполнен заранее.
- `current` в `createDesignable` может быть любой схемой (schema), тогда как `useDesignable` работает только с текущей схемой.

### Сценарии использования

- Если операция явно связана с текущим узлом, удобнее использовать `useDesignable`.
- Если операция выполняется не над текущим узлом, то `createDesignable` подходит лучше.
- Если действие вызвано событием, например, перетаскиванием, то `createDesignable` является более подходящим выбором.

## Возможности дизайна в designable

Возможности дизайна, которые `designable` предоставляет для схемы (schema), включают:

- **Добавление**: Вставка в соседней позиции текущего узла.
- **Поиск**: Поиск дочерних узлов.
- **Изменение**: Изменение параметров схемы через `patch`.
- **Удаление**: Удаление текущего узла или определенного дочернего узла.
- **Перемещение**: Перемещение между узлами.

### Добавление: Вставка в соседней позиции текущего узла

Аналогично концепции [insertAdjacent](https://dom.spec.whatwg.org/#insert-adjacent) в DOM, Schema также предоставляет метод `insertAdjacent()` для решения задачи вставки в соседние позиции.

Четыре соседние позиции:

```html
<!-- root -->
<div>
  <!-- beforeBegin — вставка перед текущим узлом -->
  <p>
    <!-- afterBegin — вставка перед первым дочерним элементом текущего узла -->
    ...
    <!-- beforeEnd — вставка после последнего дочернего элемента текущего узла -->
  </p>
  <!-- afterEnd — вставка после текущего узла -->
</div>
```

Запись для Schema выглядит следующим образом:

```ts
{
  type: 'void',
  'x-component': 'div',
  properties: {
    // beforeBegin — вставка перед текущим узлом
    node1: {
      type: 'void',
      'x-component': 'p',
      properties: {
        // afterBegin — вставка перед первым дочерним элементом текущего узла
        // ...
        // beforeEnd — вставка после последнего дочернего элемента текущего узла
      },
    },
    // afterEnd — вставка после текущего узла
  },
}
```

Используйте `useDesignable()` для вставки в соседнюю позицию текущей схемы (schema).

```tsx
import React from 'react';
import {
  SchemaComponentProvider,
  SchemaComponent,
  useDesignable,
} from '@nocobase/client';
import { observer, Schema, useFieldSchema } from '@formily/react';
import { Button, Space } from 'antd';
import { uid } from '@formily/shared';

const Hello = (props) => {
  const { insertAdjacent } = useDesignable();
  const fieldSchema = useFieldSchema();
  return (
    <div>
      <h1>
        {fieldSchema.title} - {fieldSchema.name}
      </h1>
      <Space>
        <Button
          onClick={() => {
            insertAdjacent('beforeBegin', {
              title: 'beforeBegin',
              'x-component': 'Hello',
            });
          }}
        >
          перед началом
        </Button>
        <Button
          onClick={() => {
            insertAdjacent('afterBegin', {
              title: 'afterBegin',
              'x-component': 'Hello',
            });
          }}
        >
          перед началом
        </Button>
        <Button
          onClick={() => {
            insertAdjacent('beforeEnd', {
              title: 'beforeEnd',
              'x-component': 'Hello',
            });
          }}
        >
          перед концом
        </Button>
        <Button
          onClick={() => {
            insertAdjacent('afterEnd', {
              title: 'afterEnd',
              'x-component': 'Hello',
            });
          }}
        >
          после конца
        </Button>
      </Space>
      <div style={{ margin: 50 }}>{props.children}</div>
    </div>
  );
};

const Page = (props) => {
  return <div>{props.children}</div>;
};

export default () => {
  return (
    <SchemaComponentProvider components={{ Page, Hello }}>
      <SchemaComponent
        schema={{
          type: 'void',
          name: 'page',
          'x-component': 'Page',
          properties: {
            hello1: {
              type: 'void',
              title: 'Main',
              'x-component': 'Hello',
            },
          },
        }}
      />
    </SchemaComponentProvider>
  );
};
```

Использовать `createDesignable()` для вставки в соседнюю позицию указанной схемы.

```tsx
import React from 'react';
import {
  SchemaComponentProvider,
  SchemaComponent,
  createDesignable,
  useSchemaComponentContext,
} from '@nocobase/client';
import { observer, Schema, useFieldSchema } from '@formily/react';
import { Button } from 'antd';
import { uid } from '@formily/shared';

const Hello = (props) => {
  const fieldSchema = useFieldSchema();
  return (
    <h1>
      {fieldSchema.title} - {fieldSchema.name}
    </h1>
  );
};

const Page = (props) => {
  const fieldSchema = useFieldSchema();
  const { refresh } = useSchemaComponentContext();

  return (
    <div>
      <Button
        onClick={() => {
          const dn = createDesignable({
            refresh,
            current: fieldSchema.properties.hello2,
          });
          dn.on('insertAdjacent', refresh);
          dn.insertAdjacent('afterEnd', {
            title: 'afterEnd',
            'x-component': 'Hello',
          });
        }}
      >
        Добавить после Title2.
      </Button>
      {props.children}
    </div>
  );
};

export default () => {
  return (
    <SchemaComponentProvider components={{ Page, Hello }}>
      <SchemaComponent
        schema={{
          type: 'void',
          name: 'page',
          'x-component': 'Page',
          properties: {
            hello1: {
              type: 'void',
              title: 'Title1',
              'x-component': 'Hello',
            },
            hello2: {
              type: 'void',
              title: 'Title2',
              'x-component': 'Hello',
            },
            hello3: {
              type: 'void',
              title: 'Title3',
              'x-component': 'Hello',
            },
          },
        }}
      />
    </SchemaComponentProvider>
  );
};
```

### Поиск: Поиск дочерних узлов

JSON-схема Formily предоставляет метод `reduceProperties` для обхода и поиска узлов, но он слишком сложен в использовании. Для этого Designable предлагает более удобные методы `findProperties` и `findProperty` для поиска дочерних узлов.

#### `findProperties`

Находит все дочерние узлы, соответствующие условию, и возвращает массив.

```ts
interface FindOptions {
  // 过滤条件
  filter: any;
  // 跳过查找的元素
  skipOn?: (s: Schema) => boolean;
  // 当查到什么元素时退出
  breakOn?: (s: Schema) => boolean;
  // 递归查找
  recursive?: boolean;
}

class Designable {
  findProperties(options: FindOptions): Schema[];
}
```

Пример поиска всех узлов, соответствующих условию.

```ts
const items = dn.findProperties({
  filter: {
    'x-component': 'Hello',
  },
});
// [current.properties.hello1, current.properties.hello2]
console.log(items.map((s) => schema.toJSON()));
[
  {
    name: 'hello1',
    type: 'void',
    'x-component': 'Hello',
  },
  {
    name: 'hello2',
    type: 'void',
    'x-component': 'Hello',
  },
];
```

#### `findProperty`

Найти первый дочерний узел, соответствующий условию.

```ts
interface FindOptions {
  // 过滤条件
  filter: any;
  // 跳过查找的元素
  skipOn?: (s: Schema) => boolean;
  // 当查到什么元素时退出
  breakOn?: (s: Schema) => boolean;
  // 递归查找
  recursive?: boolean;
}

class Designable {
  findProperty(options: FindOptions): Schema | null;
}
```

Пример

```ts
const current = new Schema({
  name: 'root',
  type: 'void',
  'x-component': 'Page',
  properties: {
    hello1: {
      type: 'void',
      'x-component': 'Hello',
    },
    hello2: {
      type: 'void',
      'x-component': 'Hello',
    }
  }
});

const dn = createDesignable({ current });

const schema = dn.findProperty({
  filter: {
    'x-component': 'Hello',
  },
});
// current.properties.hello1
console.log(schema.toJSON());
{
  name: 'hello1',
  type: 'void',
  'x-component': 'Hello',
}
```

### 改：修改 schema 参数

```ts
const current = new Schema({
  name: 'root',
  type: 'void',
  'x-component': 'Page',
});

const dn = createDesignable({
  current,
});

dn.deepMerge({
  'x-component-props': {},
});

dn.shallowMerge({
  'x-component-props': {},
});
```

### Удаление: Удаление текущего узла или определенного дочернего узла

```ts
const current = new Schema({
  name: 'root',
  type: 'void',
  'x-component': 'Page',
});

const dn = createDesignable({
  current,
});

dn.remove();

dn.remove({
  filter: (s) => boolean,
  skipOn: (s) => boolean,
  breakOn: (s) => boolean,
  recursive: true,
  removeParentsIfNoChildren: true,
});
```

### Перемещение: Перемещение между узлами

Методы, такие как `insertAdjacent`, также могут быть использованы для перетаскивания и перемещения узлов.

```tsx
import React from 'react';
import { uid } from '@formily/shared';
import { observer, useField, useFieldSchema } from '@formily/react';
import {
  DndContext,
  DragEndEvent,
  useDraggable,
  useDroppable,
} from '@dnd-kit/core';
import {
  SchemaComponent,
  SchemaComponentProvider,
  createDesignable,
  useSchemaComponentContext,
} from '@nocobase/client';

const useDragEnd = () => {
  const { refresh } = useSchemaComponentContext();

  return ({ active, over }: DragEndEvent) => {
    const activeSchema = active?.data?.current?.schema;
    const overSchema = over?.data?.current?.schema;

    if (!activeSchema || !overSchema) {
      return;
    }

    if (activeSchema === overSchema) {
      return;
    }

    const dn = createDesignable({
      current: overSchema,
    });

    dn.on('insertAdjacent', refresh);
    dn.insertBeforeBeginOrAfterEnd(activeSchema);
  };
};

const Page = observer((props) => {
  return <DndContext onDragEnd={useDragEnd()}>{props.children}</DndContext>;
});

function Draggable(props) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.id,
    data: props.data,
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {props.children}
    </button>
  );
}

function Droppable(props) {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
    data: props.data,
  });
  const style = {
    color: isOver ? 'green' : undefined,
  };

  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
}

const Block = observer((props) => {
  const field = useField();
  const fieldSchema = useFieldSchema();
  return (
    <Droppable id={field.address.toString()} data={{ schema: fieldSchema }}>
      <div style={{ marginBottom: 20, padding: '20px', background: '#f1f1f1' }}>
        Block {fieldSchema.name}{' '}
        <Draggable id={field.address.toString()} data={{ schema: fieldSchema }}>
          Drag
        </Draggable>
      </div>
    </Droppable>
  );
});

export default function App() {
  return (
    <SchemaComponentProvider components={{ Page, Block }}>
      <SchemaComponent
        schema={{
          type: 'void',
          name: 'page',
          'x-component': 'Page',
          properties: {
            block1: {
              'x-component': 'Block',
            },
            block2: {
              'x-component': 'Block',
            },
            block3: {
              'x-component': 'Block',
            },
          },
        }}
      />
    </SchemaComponentProvider>
  );
}
```
