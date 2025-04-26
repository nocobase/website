# CollectionManager

## Компоненты

### CollectionManagerProvider

```jsx | pure
<CollectionManagerProvider
  interfaces={{}}
  collections={[]}
></CollectionManagerProvider>
```

### CollectionProvider

```jsx | pure
const collection = {
  name: 'tests',
  fields: [
    {
      type: 'string',
      name: 'title',
      interface: 'input',
      uiSchema: {
        type: 'string',
        'x-component': 'Input',
      },
    },
  ],
};
<CollectionProvider collection={collection}></CollectionProvider>;
```

Если параметр collection не передан, берётся collection с соответствующим именем из CollectionManagerProvider.

```jsx | pure
const collections = [
  {
    name: 'tests',
    fields: [
      {
        type: 'string',
        name: 'title',
        interface: 'input',
        uiSchema: {
          type: 'string',
          'x-component': 'Input',
        },
      },
    ],
  },
];
<CollectionManagerProvider collections={collections}>
  <CollectionProvider name={'tests'}></CollectionProvider>
</CollectionManagerProvider>;
```

### CollectionFieldProvider

```jsx | pure
const field = {
  type: 'string',
  name: 'title',
  interface: 'input',
  uiSchema: {
    type: 'string',
    'x-component': 'Input',
  },
};
<CollectionFieldProvider field={field}></CollectionFieldProvider>;
```

Если параметр field не передан, берётся field с соответствующим именем из CollectionProvider.

```jsx | pure
const collection = {
  name: 'tests',
  fields: [
    {
      type: 'string',
      name: 'title',
      interface: 'input',
      uiSchema: {
        type: 'string',
        'x-component': 'Input',
      },
    },
  ],
};
<CollectionProvider collection={collection}>
  <CollectionFieldProvider name={'title'}></CollectionFieldProvider>
</CollectionProvider>;
```

### Поле коллекции (CollectionField)

Универсальный компонент поля, который должен использоваться совместно с `<CollectionProvider/>` и только в сценариях Schema. Извлекает схему поля с соответствующим именем из CollectionProvider. Может быть расширен и настроен через schema, в которой находится CollectionField.

```ts
{
  name: 'title',
  'x-decorator': 'FormItem',
  'x-decorator-props': {},
  'x-component': 'CollectionField',
  'x-component-props': {},
  properties: {},
}
```

## Хуки

### useCollectionManager()

Используется совместно с `<CollectionManagerProvider/>`.

```jsx | pure
const { collections, get } = useCollectionManager();
```

### useCollection()

Используется совместно с `<CollectionProvider/>`.

```jsx | pure
const { name, fields, getField, findField, resource } = useCollection();
```

### useCollectionField()

Используется совместно с `<CollectionFieldProvider/>`.

```jsx | pure
const { name, uiSchema, resource } = useCollectionField();
```

Ресурс `resource` должен использоваться совместно с `<RecordProvider/>` для предоставления контекста текущей записи строки таблицы данных. Например:

# CollectionManager

## Components

### CollectionManagerProvider

```jsx | pure
<CollectionManagerProvider
  interfaces={{}}
  collections={[]}
></CollectionManagerProvider>
```

### CollectionProvider

```jsx | pure
const collection = {
  name: 'tests',
  fields: [
    {
      type: 'string',
      name: 'title',
      interface: 'input',
      uiSchema: {
        type: 'string',
        'x-component': 'Input',
      },
    },
  ],
};
<CollectionProvider collection={collection}></CollectionProvider>;
```

Если параметр `collection` не передан, будет взята коллекция с соответствующим именем из `CollectionManagerProvider`.

```jsx | pure
const collections = [
  {
    name: 'tests',
    fields: [
      {
        type: 'string',
        name: 'title',
        interface: 'input',
        uiSchema: {
          type: 'string',
          'x-component': 'Input',
        },
      },
    ],
  },
];
<CollectionManagerProvider collections={collections}>
  <CollectionProvider name={'tests'}></CollectionProvider>
</CollectionManagerProvider>;
```

### CollectionFieldProvider

```jsx | pure
const field = {
  type: 'string',
  name: 'title',
  interface: 'input',
  uiSchema: {
    type: 'string',
    'x-component': 'Input',
  },
};
<CollectionFieldProvider field={field}></CollectionFieldProvider>;
```

Если параметр `field` не передан, будет взято поле с соответствующим именем из `CollectionProvider`.

```jsx | pure
const collection = {
  name: 'tests',
  fields: [
    {
      type: 'string',
      name: 'title',
      interface: 'input',
      uiSchema: {
        type: 'string',
        'x-component': 'Input',
      },
    },
  ],
};
<CollectionProvider collection={collection}>
  <CollectionFieldProvider name={'title'}></CollectionFieldProvider>
</CollectionProvider>;
```

### CollectionField

Универсальный компонент поля, который необходимо использовать совместно с `<CollectionProvider/>` и только в сценариях Schema. Извлекает схему поля с соответствующим именем из `CollectionProvider`. Может быть расширен или настроен через schema, в которой находится `CollectionField`.

```ts
{
  name: 'title',
  'x-decorator': 'FormItem',
  'x-decorator-props': {},
  'x-component': 'CollectionField',
  'x-component-props': {},
  properties: {},
}
```

## Hooks

### useCollectionManager()

Используется совместно с `<CollectionManagerProvider/>`.

```jsx | pure
const { collections, get } = useCollectionManager();
```

### useCollection()

Используется совместно с `<CollectionProvider/>`.

```jsx | pure
const { name, fields, getField, findField, resource } = useCollection();
```

### useCollectionField()

Используется совместно с `<CollectionFieldProvider/>`.

```jsx | pure
const { name, uiSchema, resource } = useCollectionField();
```

`resource` должен использоваться совместно с `<RecordProvider/>` для предоставления контекста текущей записи строки таблицы данных.
