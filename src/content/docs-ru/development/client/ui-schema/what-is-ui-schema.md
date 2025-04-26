# UI Схема

Протокол описания фронтенд-компонентов, основанный на Formily Schema 2.0, в стиле JSON Schema.

```ts
interface ISchema {
  type: 'void' | 'string' | 'number' | 'object' | 'array';
  name?: string;
  title?: any;
  // Компонент-обертка
  ['x-decorator']?: string;
  // Свойства компонента-обертки
  ['x-decorator-props']?: any;
  // Динамические свойства компонента-обертки
  ['x-use-decorator-props']?: any;
  // Компонент
  ['x-component']?: string;
  // Свойства компонента
  ['x-component-props']?: any;
  // Динамические свойства компонента
  ['x-use-component-props']?: any;
  // Состояние отображения, по умолчанию 'visible'
  ['x-display']?: 'none' | 'hidden' | 'visible';
  // Дочерний узел компонента, простое использование
  ['x-content']?: any;
  // Схема дочерних узлов
  properties?: Record<string, ISchema>;

  // Ниже используются только для полевых компонентов

  // Связывание полей
  ['x-reactions']?: SchemaReactions;
  // Режим взаимодействия с UI поля, по умолчанию 'editable'
  ['x-pattern']?: 'editable' | 'disabled' | 'readPretty';
  // Валидация поля
  ['x-validator']?: Validator;
  // Данные по умолчанию
  default?: any;

  // Связано с дизайнером

  // Инициализатор, определяет, что можно вставить рядом с текущей схемой
  ['x-initializer']?: string;
  ['x-initializer-props']?: any;

  // Настройки блока, определяет, какие параметры можно настроить для текущей схемы
  ['x-settings']?: string;
  ['x-settings-props']?: any;

  // Компонент панели инструментов
  ['x-toolbar']?: string;
  ['x-toolbar-props']?: any;
}
```

## Примеры

### Самый простой компонент

Все стандартные HTML-теги могут быть преобразованы в схему. Например:

```ts
{
  type: 'void',
  'x-component': 'h1',
  'x-content': 'Hello, world!',
}
```

Пример JSX

```tsx | pure
<h1>Hello, world!</h1>
```

### Дочерние компоненты

Дочерние компоненты описываются внутри `properties`.

```tsx | pure
{
  type: 'void',
  'x-component': 'div',
  'x-component-props': { className: 'form-item' },
  properties: {
    title: {
      type: 'string',
      'x-component': 'input',
    },
  },
}
```

JSX эквивалентен

```tsx | pure
<div className={'form-item'}>
  <input name={'title'} />
</div>
```

## Описание параметров

### `type`

节点的类型

```ts
type SchemaTypes =
  | 'string'
  | 'object'
  | 'array'
  | 'number'
  | 'boolean'
  | 'void';
interface ISchema {
  type?: SchemaTypes;
}
```

### `name`

Имя схемы

```ts
type SchemaName = string;
interface ISchema {
  name?: SchemaName; // Корневой узел
  properties?: {
    [name: SchemaName]?: ISchema; // Дочерние узлы
  }
};
```

У всех схем есть `name`, а имя дочернего узла также является ключом для `properties`.

```ts
{
  name: 'root',
  properties: {
    child1: {
      // Здесь не нужно указывать `name`.
    },
  },
}
```

### `title`

Заголовок узла

```ts
type SchemaTitle = string;
interface ISchema {
  title?: SchemaTitle;
}
```

### `properties`

Дочерние компоненты могут быть записаны в `properties`.

```ts
{
  type: 'void',
  'x-component': 'div',
  'x-component-props': { className: 'form-item' },
  properties: {
    title: {
      type: 'string',
      'x-component': 'input',
    },
  },
}
```

JSX эквивалентен

```tsx | pure
<div className={'form-item'}>
  <input name={'title'} />
</div>
```

### `x-component`

Компонент

```ts
type Component = any;
interface ISchema {
  ['x-component']?: Component;
}
```

Все стандартные HTML-теги могут быть преобразованы в схему. Например:

```ts
{
  type: 'void',
  'x-component': 'h1',
  'x-content': 'Hello, world!',
}
```

Пример JSX

```tsx | pure
<h1>Hello, world!</h1>
```

### `x-component-props` и `x-use-component-props`

`x-component-props` — это свойства компонента.。

```ts
{
  type: 'void',
  'x-component': 'Table',
  'x-component-props': {
    loading: true,
  },
}
```

В некоторых случаях свойства компонента могут быть динамическими, и для этого можно использовать `x-use-component-props`.

```ts
{
  type: 'void',
  'x-component': 'MyTable',
  'x-use-component-props': 'useTableProps',
}
```

Здесь компонент MyTable должен быть обернут с помощью функции высшего порядка `withDynamicSchemaProps`, например:

```ts
const MyTable = withDynamicSchemaProps(Table, { displayName: 'MyTable' });
```

`useTableProps` — это пользовательский хук, который используется для динамической генерации свойств компонента.

```ts
const useTableProps = () => {
  const service = useRequest({xx});
  return {
    loading: service.loading,
  };
};
```

Нам также нужно зарегистрировать его в `scope`. Подробнее см. в документации [Рендеринг схемы](/development/client/ui-schema/rendering).

```tsx | pure
<SchemaComponent
  scope={{ useTableProps }}
  components={{ MyTable }}
  schema={{
    type: 'void',
    'x-component': 'MyTable',
    'x-use-component-props': 'useTableProps',
  }}
>
```

### `x-decorator`

Компонент-обертка

```ts
type Decorator = any;
interface ISchema {
  ['x-decorator']?: Decorator;
}
```

Комбинация `x-decorator` и `x-component` позволяет разместить два компонента в одном узле схемы, что снижает сложность структуры схемы и повышает уровень повторного использования компонентов.

Например, в контексте формы можно комбинировать компонент FormItem с любым компонентом поля. В этом случае FormItem выступает в роли Decorator.

```ts
{
  type: 'void',
  ['x-component']: 'div',
  properties: {
    title: {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    content: {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input.TextArea',
    },
  },
}
```

JSX эквивалентен

```tsx | pure
<div>
  <FormItem>
    <Input name={'title'} />
  </FormItem>
  <FormItem>
    <Input.TextArea name={'content'} />
  </FormItem>
</div>
```

Также можно предоставить компонент `CardItem`, который будет оборачивать все блоки, так что все блоки будут обернуты в `Card`.。

```ts
{
  type: 'void',
  ['x-component']: 'div',
  properties: {
    table: {
      type: 'array',
      'x-decorator': 'CardItem',
      'x-component': 'Table',
    },
    kanban: {
      type: 'array',
      'x-decorator': 'CardItem',
      'x-component': 'Kanban',
    },
  },
}
```

JSX эквивалентен

```tsx | pure
<div>
  <CardItem>
    <Table />
  </CardItem>
  <CardItem>
    <Kanban />
  </CardItem>
</div>
```

### `x-decorator-props` 和 `x-use-decorator-props`

Аналогично использованию `x-component-props` и `x-use-component-props`, высшая функция `withDynamicSchemaProps()` должна применяться для компонента-обертки.

### `x-display`

Состояние отображения компонента

- `'x-display': 'visible'`: отображать компонент;
- `'x-display': 'hidden'`: скрыть компонент, но данные остаются;
- `'x-display': 'none'`: скрыть компонент и данные.

#### `'x-display': 'visible'`

```ts
{
  type: 'void',
  'x-component': 'div',
  'x-component-props': { className: 'form-item' },
  properties: {
    title: {
      type: 'string',
      'x-component': 'input',
      'x-display': 'visible'
    },
  },
}
```

JSX эквивалентен

```tsx | pure
<div className={'form-item'}>
  <input name={'title'} />
</div>
```

#### `'x-display': 'hidden'`

```ts
{
  type: 'void',
  'x-component': 'div',
  'x-component-props': { className: 'form-item' },
  properties: {
    title: {
      type: 'string',
      'x-component': 'input',
      'x-display': 'hidden'
    },
  },
}
```

JSX эквивалентен

```tsx | pure
<div className={'form-item'}>
  {/* Здесь компонент input не рендерится, но полевая модель с name=title всё ещё существует */}
</div>
```

#### `'x-display': 'none'`

```ts
{
  type: 'void',
  'x-component': 'div',
  'x-component-props': { className: 'form-item' },
  properties: {
    title: {
      type: 'string',
      'x-component': 'input',
      'x-display': 'none'
    },
  },
}
```

JSX эквивалентен

```tsx | pure
<div className={'form-item'}>
  {/* Здесь не отображается компонент input, и соответствующая полевая модель с name=title также отсутствует */}
</div>
```

### `x-pattern`

Режим отображения компонента

Используется для полевых компонентов. Существует три режима отображения:

- `'x-pattern': 'editable'` — доступен для редактирования;
- `'x-pattern': 'disabled'` — недоступен для редактирования;
- `'x-pattern': 'readPretty'` — удобный для чтения.

Например, компонент однострочного текста `<SingleText />`: в режиме редактирования и недоступности используется `<input />`, а в режиме удобного для чтения — `<div />`.

#### `'x-pattern': 'editable'`

```ts
const schema = {
  name: 'test',
  type: 'void',
  'x-component': 'div',
  'x-component-props': { className: 'form-item' },
  properties: {
    title: {
      type: 'string',
      default: 'Hello',
      'x-component': 'SingleText',
      'x-pattern': 'editable',
    },
  },
};
```

JSX эквивалентен

```tsx | pure
<div className={'form-item'}>
  <input name={'title'} value={'Hello'} />
</div>
```

#### `'x-pattern': 'disabled'`

```ts
const schema = {
  name: 'test',
  type: 'void',
  'x-component': 'div',
  'x-component-props': { className: 'form-item' },
  properties: {
    title: {
      type: 'string',
      default: 'Hello',
      'x-component': 'SingleText',
      'x-pattern': 'disabled',
    },
  },
};
```

JSX эквивалентен

```tsx | pure
<div className={'form-item'}>
  <input name={'title'} value={'Hello'} disabled />
</div>
```

#### `'x-pattern': 'readPretty'`

```ts
const schema = {
  name: 'test',
  type: 'void',
  'x-component': 'div',
  'x-component-props': { className: 'form-item' },
  properties: {
    title: {
      type: 'string',
      default: 'Hello',
      'x-component': 'SingleText',
      'x-pattern': 'readPretty',
    },
  },
};
```

JSX эквивалентен

```tsx | pure
<div className={'form-item'}>
  <div>Hello</div>
</div>
```

### `x-initializer`

Не все компоненты поддерживают `x-initializer`. Среди существующих универсальных компонентов схемы только Grid, ActionBar и Tabs поддерживают параметр `x-initializer`.

```ts
{
  type: 'void',
  'x-component': 'Grid',
  'x-initializer': 'myInitializer',
}
```

В пользовательских компонентах также можно использовать `useSchemaInitializerRender()` для самостоятельной обработки рендеринга `x-initializer`. Подробное использование см. в разделе [SchemaInitializer Инициализатор](#).

### `x-settings`

Не все компоненты поддерживают `x-settings`. Обычно он должен использоваться вместе с такими компонентами-обертками, как BlockItem, FormItem или CardItem.

```ts
{
  type: 'void',
  'x-settings': 'mySettings',
  'x-decorator': 'CardItem',
  'x-component': 'Hello',
}
```

В пользовательских компонентах также можно использовать `useSchemaSettingsRender()` для самостоятельной обработки рендеринга `x-settings`. Подробное использование см. в разделе [SchemaSettings Настройки](#).

### `x-toolbar`

Не все компоненты поддерживают `x-toolbar`. Обычно он должен использоваться вместе с такими компонентами-обертками, как BlockItem, FormItem или CardItem.

```ts
{
  type: 'void',
  'x-toolbar': 'HelloToolbar',
  'x-decorator': 'CardItem',
  'x-component': 'Hello',
}
```

В пользовательских компонентах также можно использовать `useToolbarRender()` для самостоятельной обработки рендеринга `x-toolbar`. Подробное использование см. в разделе [SchemaToolbar Панель инструментов](#).
