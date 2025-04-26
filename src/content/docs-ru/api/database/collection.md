# Collection

## Обзор

`Collection` используется для определения моделей данных в системе, таких как имя модели, поля, индексы, связи и другая информация.  
Обычно вызывается через метод `collection` экземпляра `Database`, который выступает в качестве прокси-входа.

```javascript
const { Database } = require('@nocobase/database')

// Создание экземпляра базы данных
const db = new Database({...});

// Определение модели данных
db.collection({
  name: 'users',
  // Определение полей модели
  fields: [
    // Скалярные поля
    {
      name: 'name',
      type: 'string',
    },

    // Поля связи
    {
      name: 'profile',
      type: 'hasOne' // 'hasMany', 'belongsTo', 'belongsToMany'
    }
  ],
});
```

Более подробную информацию о типах полей можно найти в разделе [Fields](/api/database/field.md).

## Конструктор

**Сигнатура**

- `constructor(options: CollectionOptions, context: CollectionContext)`

**Параметры**

| Параметр              | Тип                                                        | Значение по умолчанию | Описание                                                                                   |
| --------------------- | ----------------------------------------------------------- | ---------------------- | ------------------------------------------------------------------------------------------ |
| `options.name`        | `string`                                                    | -                      | Идентификатор коллекции                                                                    |
| `options.tableName?`  | `string`                                                    | -                      | Имя таблицы в базе данных. Если не указано, используется значение `options.name`            |
| `options.fields?`     | `FieldOptions[]`                                            | -                      | Определение полей, см. [Field](./field)                                                     |
| `options.model?`      | `string \| ModelStatic<Model>`                              | -                      | Тип модели Sequelize. Если используется `string`, то необходимо заранее зарегистрировать модель в db |
| `options.repository?` | `string \| RepositoryType`                                  | -                      | Тип репозитория данных. Если используется `string`, то необходимо заранее зарегистрировать тип репозитория в db |
| `options.sortable?`   | `string \| boolean \| { name?: string; scopeKey?: string }` | -                      | Настройки сортируемого поля. По умолчанию сортировка отключена                             |
| `options.autoGenId?`  | `boolean`                                                   | `true`                 | Автоматическая генерация уникального первичного ключа. По умолчанию `true`                  |
| `context.database`    | `Database`                                                  | -                      | База данных в контексте окружения                                                          |

**Пример**

Создание таблицы статей:

```ts
const posts = new Collection(
  {
    name: 'posts',
    fields: [
      {
        type: 'string',
        name: 'title',
      },
      {
        type: 'double',
        name: 'price',
      },
    ],
  },
  {
    // Существующий экземпляр базы данных
    database: db,
  },
);
```

## Члены экземпляра

### `options`

Начальные параметры конфигурации таблицы данных. Соответствует параметру `options` конструктора.

### `context`

Контекстная среда, к которой относится текущая таблица данных. В настоящее время это в основном экземпляр базы данных.

### `name`

Имя таблицы данных.

### `db`

Экземпляр базы данных, к которому относится таблица.

### `filterTargetKey`

Имя поля, которое используется как первичный ключ.

### `isThrough`

Является ли таблица промежуточной (для связей многие-ко-многим).

### `model`

Соответствует типу модели Sequelize (`Model`).

### `repository`

Экземпляр репозитория данных.

## Методы конфигурации полей

### `getField()`

Получение объекта поля по заданному имени, если оно уже определено в таблице данных.

**Сигнатура**

- `getField(name: string): Field`

**Параметры**

| Параметр | Тип      | Значение по умолчанию | Описание       |
| -------- | -------- | --------------------- | -------------- |
| `name`   | `string` | -                     | Имя поля       |

**Пример**

```ts
const posts = db.collection({
  name: 'posts',
  fields: [
    {
      type: 'string',
      name: 'title',
    },
  ],
});

const field = posts.getField('title');
```

### `setField()`

Установка полей для таблицы данных.

**Сигнатура**

- `setField(name: string, options: FieldOptions): Field`

**Параметры**

| Параметр  | Тип            | Значение по умолчанию | Описание                            |
| --------- | -------------- | --------------------- | ----------------------------------- |
| `name`    | `string`       | -                     | Имя поля                            |
| `options` | `FieldOptions` | -                     | Конфигурация поля, см. [Field](./field) |

**Пример**

```ts
const posts = db.collection({ name: 'posts' });

posts.setField('title', { type: 'string' });
```

### `setFields()`

Установка нескольких полей для таблицы данных в批量.

**Сигнатура**

- `setFields(fields: FieldOptions[], resetFields = true): Field[]`

**Параметры**

| Параметр      | Тип              | Значение по умолчанию | Описание                            |
| ------------- | ---------------- | --------------------- | ----------------------------------- |
| `fields`      | `FieldOptions[]` | -                     | Конфигурация полей, см. [Field](./field) |
| `resetFields` | `boolean`        | `true`                | Следует ли сбросить существующие поля |

**Пример**

```ts
const posts = db.collection({ name: 'posts' });

posts.setFields([
  { type: 'string', name: 'title' },
  { type: 'double', name: 'price' },
]);
```

### `removeField()`

Удаление объекта поля с указанным именем, уже определенного в таблице данных.

**Сигнатура**

- `removeField(name: string): void | Field`

**Параметры**

| Параметр | Тип      | Значение по умолчанию | Описание   |
| -------- | -------- | --------------------- | ---------- |
| `name`   | `string` | -                     | Имя поля   |

**Пример**

```ts
const posts = db.collection({
  name: 'posts',
  fields: [
    {
      type: 'string',
      name: 'title',
    },
  ],
});

posts.removeField('title');
```

### `resetFields()`

Сброс (очистка) полей таблицы данных.

**Сигнатура**

- `resetFields(): void`

**Пример**

```ts
const posts = db.collection({
  name: 'posts',
  fields: [
    {
      type: 'string',
      name: 'title',
    },
  ],
});

posts.resetFields();
```

### `hasField()`

Проверка, определен ли в таблице данных объект поля с указанным именем.

**Сигнатура**

- `hasField(name: string): boolean`

**Параметры**

| Параметр | Тип      | Значение по умолчанию | Описание   |
| -------- | -------- | --------------------- | ---------- |
| `name`   | `string` | -                     | Имя поля   |

**Пример**

```ts
const posts = db.collection({
  name: 'posts',
  fields: [
    {
      type: 'string',
      name: 'title',
    },
  ],
});

posts.hasField('title'); // true
```

### `findField()`

Поиск объекта поля в таблице данных, соответствующего заданному условию.

**Сигнатура**

- `findField(predicate: (field: Field) => boolean): Field | undefined`

**Параметры**

| Параметр    | Тип                        | Значение по умолчанию | Описание       |
| ----------- | --------------------------- | --------------------- | -------------- |
| `predicate` | `(field: Field) => boolean` | -                     | Условие поиска |

**Пример**

```ts
const posts = db.collection({
  name: 'posts',
  fields: [
    {
      type: 'string',
      name: 'title',
    },
  ],
});

posts.findField((field) => field.name === 'title');
```

### `forEachField()`

Перебор объектов полей в таблице данных.

**Сигнатура**

- `forEachField(callback: (field: Field) => void): void`

**Параметры**

| Параметр  | Тип                     | Значение по умолчанию | Описание     |
| --------- | ------------------------ | --------------------- | ------------ |
| `callback`| `(field: Field) => void` | -                     | Функция обратного вызова |

**Пример**

```ts
const posts = db.collection({
  name: 'posts',
  fields: [
    {
      type: 'string',
      name: 'title',
    },
  ],
});

posts.forEachField((field) => console.log(field.name));
```

## Методы конфигурации индексов

### `addIndex()`

Добавление индекса для таблицы данных.

**Сигнатура**

- `addIndex(index: string | string[] | { fields: string[], unique?: boolean,[key: string]: any })`

**Параметры**

| Параметр | Тип                                                         | Значение по умолчанию | Описание                          |
| -------- | ------------------------------------------------------------ | --------------------- | --------------------------------- |
| `index`  | `string \| string[]`                                         | -                     | Имя поля или список полей для индексации |
| `index`  | `{ fields: string[], unique?: boolean, [key: string]: any }` | -                     | Полная конфигурация индекса       |

**Пример**

```ts
const posts = db.collection({
  name: 'posts',
  fields: [
    {
      type: 'string',
      name: 'title',
    },
  ],
});

posts.addIndex({
  fields: ['title'],
  unique: true,
});
```

### `removeIndex()`

Удаление индекса таблицы данных.

**Сигнатура**

- `removeIndex(fields: string[])`

**Параметры**

| Параметр | Тип       | Значение по умолчанию | Описание                          |
| -------- | ---------- | --------------------- | --------------------------------- |
| `fields` | `string[]` | -                     | Список имен полей для удаления индекса |

**Пример**

```ts
const posts = db.collection({
  name: 'posts',
  fields: [
    {
      type: 'string',
      name: 'title',
    },
  ],
  indexes: [
    {
      fields: ['title'],
      unique: true,
    },
  ],
});

posts.removeIndex(['title']);
```

## Методы конфигурации таблиц

### `remove()`

Удаление таблицы данных.

**Сигнатура**

- `remove(): void`

**Пример**

```ts
const posts = db.collection({
  name: 'posts',
  fields: [
    {
      type: 'string',
      name: 'title',
    },
  ],
});

posts.remove();
```

## Методы операций с базой данных

### `sync()`

Синхронизация определения таблицы данных с базой данных. Помимо стандартной логики `Model.sync` из Sequelize, также обрабатываются таблицы данных, соответствующие полям отношений.

**Сигнатура**

- `sync(): Promise<void>`

**Пример**

```ts
const posts = db.collection({
  name: 'posts',
  fields: [
    {
      type: 'string',
      name: 'title',
    },
  ],
});

await posts.sync();
```

### `existsInDb()`

Проверяет, существует ли таблица данных в базе данных.

**Сигнатура**

- `existsInDb(options?: Transactionable): Promise<boolean>`

**Параметры**

| Параметр               | Тип           | Значение по умолчанию | Описание      |
| ---------------------- | ------------- | --------------------- | ------------- |
| `options?.transaction` | `Transaction` | -                     | Экземпляр транзакции |

**Пример**

```ts
const posts = db.collection({
  name: 'posts',
  fields: [
    {
      type: 'string',
      name: 'title',
    },
  ],
});

const existed = await posts.existsInDb();

console.log(existed); // false
```

### `removeFromDb()`

**Сигнатура**

- `removeFromDb(): Promise<void>`

**Пример**

```ts
const books = db.collection({
  name: 'books',
});

// 同步书籍表到数据库
await db.sync();

// 删除数据库中的书籍表
await books.removeFromDb();
```
