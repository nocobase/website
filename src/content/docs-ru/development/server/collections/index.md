# Основные концепции

## Collection

Collection — это набор всех видов данных, который на китайский переводится как «таблица данных». Примеры: заказы, товары, пользователи, комментарии — всё это является Collection. Различные Collection различаются по имени (name), например:

```ts
// Заказы
{
  name: 'orders',
}
// Товары
{
  name: 'products',
}
// Пользователи
{
  name: 'users',
}
// Комментарии
{
  name: 'comments',
}
```

## Collection Field

У каждой Collection имеется несколько Fields (полей).

```ts
// Конфигурация Collection
{
  name: 'users',
  fields: [
    { type: 'string', name: 'name' },
    { type: 'integer', name: 'age' },
    // другие поля
  ],
}
// Пример данных
[
  {
    name: 'Андрей',
    age: 20,
  },
  {
    name: 'Михаил',
    age: 18,
  }
];
```

В NocoBase состав Collection Field включает в себя:

<img src="./collection-field.svg" />

### Field Type

Различные поля различаются по имени (name), а type указывает тип данных поля. Типы делятся на Attribute Type и Association Type, например:

**Атрибуты - Attribute Type**

- string
- text
- date
- boolean
- time
- float
- json
- location
- password
- virtual
- ...

**Связи - Association Type**

- hasOne
- hasMany
- belongsTo
- belongsToMany
- ...

### Field Component

У поля есть тип данных, и ввод/вывод значений поля работает корректно, но этого недостаточно. Если необходимо отобразить поле на интерфейсе, требуется дополнительная конфигурация другого уровня — `uiSchema`, например:

```tsx | pure
// Поле для email, отображается компонентом Input, использует правило валидации email
{
  type: 'string',
  name: 'email',
  uiSchema: {
    'x-component': 'Input',
    'x-component-props': { size: 'large' },
    'x-validator': 'email',
    'x-pattern': 'editable', // Редактируемое состояние, также есть состояние readonly (только для чтения) и read-pretty (красивое представление для чтения)
  },
}

// Пример данных
{
  email: 'admin@nocobase.com',
}

// Пример компонента
<Input name={'email'} size={'large'} value={'admin@nocobase.com'} />
```

uiSchema используется для настройки компонента, отображающего поле на интерфейсе. Каждый компонент поля соответствует определенному значению (value) и включает несколько конфигураций:

- Компонент поля
- Параметры компонента
- Правила валидации поля
- Режим поля (editable, readonly, read-pretty)
- Значение по умолчанию для поля
- Другие параметры

[Подробнее о UI Schema смотрите в соответствующем разделе](/development/client/ui-schema-designer/what-is-ui-schema).

В NocoBase встроены следующие компоненты полей:

- Input
- InputNumber
- Select
- Radio
- Checkbox
- ...

### Field Interface

Имея Field Type и Field Component, можно создавать различные комбинации полей. Такую комбинированную конфигурацию мы называем Field Interface, например:

```ts
// Поле для email: string + input, правило валидации email
{
  type: 'string',
  name: 'email',
  uiSchema: {
    'x-component': 'Input',
    'x-component-props': {},
    'x-validator': 'email',
  },
}

// Поле для телефона: string + input, правило валидации phone
{
  type: 'string',
  name: 'phone',
  uiSchema: {
    'x-component': 'Input',
    'x-component-props': {},
    'x-validator': 'phone',
  },
}
```

Приведённые выше примеры с email и phone требуют каждый раз настраивать полную uiSchema, что довольно утомительно. Чтобы упростить процесс конфигурации, появляется ещё одно понятие — Field interface, которое позволяет шаблонизировать некоторые параметры. Например:

```ts
// Шаблон для поля email
interface email {
  type: 'string';
  uiSchema: {
    'x-component': 'Input',
    'x-component-props': {},
    'x-validator': 'email',
  };
}

// Шаблон для поля phone
interface phone {
  type: 'string';
  uiSchema: {
    'x-component': 'Input',
    'x-component-props': {},
    'x-validator': 'phone',
  };
}

// Упрощённая конфигурация поля
// email
{
  interface: 'email',
  name: 'email',
}

// phone
{
  interface: 'phone',
  name: 'phone',
}
```

[Подробнее о Field Interface смотрите здесь](https://github.com/nocobase/nocobase/tree/main/packages/core/client/src/collection-manager/interfaces)
