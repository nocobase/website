# SchemaInitializer

Используется для инициализации различных схем (schema). Новые схемы могут быть вставлены в любое место узла существующей схемы, включая:

```ts
{
  properties: {
    // beforeBegin — вставка перед текущим узлом
    node1: {
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

Ядро **SchemaInitializer** включает два компонента: `<SchemaInitializer.Button />` и `<SchemaInitializer.Item />`. Компонент `<SchemaInitializer.Button />` используется для создания кнопки выпадающего меню схемы, а элементы выпадающего меню представляют собой `<SchemaInitializer.Item />`.

### `<SchemaInitializerProvider />`

### `<SchemaInitializer.Button />`

### `<SchemaInitializer.Item />`