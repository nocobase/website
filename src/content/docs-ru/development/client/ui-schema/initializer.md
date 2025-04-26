# Инициализатор схемы (SchemaInitializer)

После активации конфигурации пользовательского интерфейса (UI), различные видимые оранжевые кнопки на экране представляют собой инициализаторы схемы (Schema Initializer). Они используются для добавления различных блоков, полей, операций и других элементов в интерфейс.

<img src="./image-5.png" style="width: 960px;">

## 内置的初始化器

<img src="./image-3.png" style="width: 960px;"/>

## Добавление элементов в существующий инициализатор

Рекомендуется использовать метод [`schemaInitializerManager.addItem()`](#) для добавления элементов. Подробную конфигурацию элемента можно найти в [SchemaInitializer Item API](#).

```ts
class PluginDemoAddSchemaInitializerItem extends Plugin {
  async load() {
    this.schemaInitializerManager.addItem(
      'myInitializer', // Пример существующего инициализатора схемы (schema initializer):
      'otherBlocks.custom', // Добавить **custom** в группу **otherBlocks**.
      {
        type: 'item',
        useComponentProps() {},
      },
    );
  }
}
```

<code src="./demos/schema-initializer-manager-add-item/index.tsx"></code>

## Добавление нового инициализатора

Подробные параметры SchemaInitializer можно найти в [SchemaInitializerOptions API](https://client.docs-cn.nocobase.com/core/ui-schema/schema-initializer#new-schemainitializeroptions).

```ts
const myInitializer = new SchemaInitializer({
  // Идентификатор инициализатора, уникальный в глобальном масштабе.
  name: 'myInitializer',
  title: 'Add Block',
  // Обертка, например, при вставке в Grid, необходимо обработать с помощью **Grid.wrap** (добавить теги строк и столбцов).
  wrap: Grid.wrap,
  // Позиция вставки, по умолчанию **beforeEnd**, поддерживаются значения: `'beforeBegin' | 'afterBegin' | 'beforeEnd' | 'afterEnd'`.
  insertPosition: 'beforeEnd',
  // Пункт выпадающего меню
  items: [
    {
      name: 'a',
      type: 'item',
      useComponentProps() {},
    },
  ],
});
```

### Регистрация в методе `load` плагина

Рекомендуется использовать `schemaInitializerManager.add()`, чтобы добавить новый инициализатор в приложение.

```ts
class PluginDemoAddSchemaInitializer extends Plugin {
  async load() {
    const myInitializer = new SchemaInitializer({
      name: 'myInitializer',
      title: 'Add block',
      wrap: Grid.wrap,
      items: [
        {
          name: 'helloBlock',
          type: 'item',
          useComponentProps() {
            const { insert } = useSchemaInitializer();
            return {
              title: 'Hello',
              onClick: () => {
                insert({
                  type: 'void',
                  'x-decorator': 'CardItem',
                  'x-component': 'h1',
                  'x-content': 'Hello, world!',
                });
              },
            };
          },
        },
      ],
    });
    this.schemaInitializerManager.add(myInitializer);
  }
}
```

### Как использовать недавно добавленный инициализатор

SchemaInitializer используется в параметре `x-initializer` схемы (Schema).

#### Общие компоненты Schema, поддерживающие `x-initializer`

Компоненты Schema, которые поддерживают `x-initializer`: **Grid**, **ActionBar**, **Tabs**. Например:

```ts
{
  type: 'void',
  'x-component': 'Grid',
  'x-initializer': 'myInitializer',
}
```

<code src="./demos/schema-initializer-manager-add/index.tsx"></code>

#### Как добавить поддержку параметра `x-initializer` в пользовательский компонент

Если такие компоненты, как **Grid**, **ActionBar**, **Tabs**, не удовлетворяют требованиям, в пользовательских компонентах также можно использовать [useSchemaInitializerRender()](https://client.docs-cn.nocobase.com/core/ui-schema/schema-initializer#useschemainitializerrender) для обработки рендеринга параметра `x-initializer`.

<code src="./demos/use-schema-initializer-render/index.tsx"></code>

## API Ссылки:

- [SchemaInitializerManager](https://client.docs-cn.nocobase.com/core/ui-schema/schema-initializer-manager)  
- [SchemaInitializer](https://client.docs-cn.nocobase.com/core/ui-schema/schema-initializer)
