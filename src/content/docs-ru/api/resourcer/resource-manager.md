# ResourceManager

## Обзор

`ResourceManager` — это модуль управления ресурсами NocoBase, который используется для определения ресурсов и регистрации методов операций с этими ресурсами.

## Методы класса

### `define()`

Определение ресурса.

```ts
app.resourceManager.define({
  name: 'auth',
  actions: {
    check: async (ctx, next) => {
      // ...
      await next();
    },
  },
});
```

#### Сигнатура

- `define(options: ResourceOptions): Resource`

#### Типы

```ts
export interface ResourceOptions {
  name: string;
  type?: ResourceType;
  actions?: {
    [key: string]: ActionType;
  };
  only?: Array<ActionName>;
  except?: Array<ActionName>;
  middleware?: MiddlewareType;
  middlewares?: MiddlewareType;
}

export type ResourceType =
  | 'single'
  | 'hasOne'
  | 'hasMany'
  | 'belongsTo'
  | 'belongsToMany';

export type ActionType = HandlerType | ActionOptions;
export type HandlerType = (
  ctx: ResourcerContext,
  next: () => Promise<any>,
) => any;
export interface ActionOptions {
  values?: any;
  fields?: string[];
  appends?: string[];
  except?: string[];
  whitelist?: string[];
  blacklist?: string[];
  filter?: FilterOptions;
  sort?: string[];
  page?: number;
  pageSize?: number;
  maxPageSize?: number;
  middleware?: MiddlewareType;
  middlewares?: MiddlewareType;
  handler?: HandlerType;
  [key: string]: any;
}
```

#### Подробная информация

##### ResourceOptions

| Свойство      | Тип                                           | Описание         | Значение по умолчанию |
| ------------- | --------------------------------------------- | ---------------- | --------------------- |
| `name`        | `string`                                      | Название ресурса | -                     |
| `type`        | `ResourceType`                                | Тип ресурса      | `single`              |
| `actions`     | [`{ [key: string]: ActionType }`](#actiontype)| Действия         | -                     |
| `only`        | `ActionName[]`                                | Белый список `actions` | -             |
| `except`      | `ActionName[]`                                | Черный список `actions` | -             |
| `middleware`  | `MiddlewareType`                              | Промежуточное ПО | -                     |
| `middlewares` | `MiddlewareType`                              | Промежуточное ПО | -                     |

##### ActionType

Для методов операций существует два типа:

- `HandlerType`

Этот тип определяет методы операций напрямую с помощью промежуточного программного обеспечения (middleware). Пример:

```ts
app.resourceManager.define({
  name: 'users',
  actions: {
    updateProfile: async (ctx, next) => {
      // ...
      await next();
    },
  },
});
```

- `ActionOptions`

В качестве примера можно привести следующие слова:

```ts
app.resourceManager.define({
  name: 'users',
  actions: {
    list: {
      fields: [],
      filter: {},
      // ...
    },
  },
});
```

| Имя параметра   | Тип              | Описание                                                  |
| --------------- | ---------------- | --------------------------------------------------------- |
| `values`        | `any`            | Значения по умолчанию для запроса операции                |
| `filter`        | `Filter`         | Параметр фильтрации, см. [Filter Operators](../database/operators) |
| `fields`        | `string[]`       | Поля для получения                                         |
| `except`        | `string[]`       | Поля для исключения                                        |
| `appends`       | `string[]`       | Поля связей для добавления                                 |
| `whitelist`     | `string[]`       | Белый список полей                                         |
| `blacklist`     | `string[]`       | Черный список полей                                        |
| `sort`          | `string[]`       | Параметры сортировки                                       |
| `page`          | `number`         | Текущая страница                                           |
| `pageSize`      | `number`         | Количество записей на страницу                             |
| `maxPageSize`   | `number`         | Максимальное количество записей                            |
| `middleware`    | `MiddlewareType` | Промежуточное программное обеспечение                      |
| `middlewares`   | `MiddlewareType` | Промежуточное программное обеспечение                      |
| `handler`       | `HandlerType`    | Метод выполнения текущей операции                          |
| `[key: string]` | `any`            | Другие расширенные конфигурации                            |

### `registerActionHandlers()`

Регистрация методов операций.

#### 签名

- `registerActionHandler(name: ActionName, handler: HandlerType)`

#### 类型

```ts
export type DefaultActionType =
  | 'list'
  | 'create'
  | 'get'
  | 'update'
  | 'destroy'
  | 'set'
  | 'add'
  | 'remove';
export type ActionName = DefaultActionType | Omit<string, DefaultActionType>;

export type HandlerType = (
  ctx: ResourcerContext,
  next: () => Promise<any>,
) => any;
```

#### Подробная информация

| Имя параметра | Тип           | Описание                                                                                                                             |
| -------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `name`         | `ActionName`   | Название операции.<br />1. В виде обычной строки для регистрации операции для всех ресурсов.<br />2. В форме `<resource>:<action>` для регистрации операции для определенного ресурса. |
| `handler`      | `HandlerType`  | Промежуточное программное обеспечение (middleware) операции                                                                           |

### `isDefined()`

Проверить, был ли ресурс определен ранее.

#### Сигнатура

- `isDefined(name: string)`

#### Подробная информация

| Имя параметра | Тип      | Описание    |
| -------------- | --------- | ------------ |
| `name`         | `string`  | Название ресурса |

### `import()`

Загрузка конфигурации ресурсов из указанного каталога.

```ts
// ./resources/demo.ts
export default {
  name: 'demo',
  actions: {
    async list(ctx, next) {
      // ...
      await next();
    },
  },
};

const resourceMangaer = new ResourceManager();
await resourceManager.import({
  directory: path.resolve(__dirname, 'resources'),
});
```

#### Сигнатура

- `import(options: ImportOptions): Promise<Map<string, Resource>>`

#### Типы

```ts
export interface ImportOptions {
  directory: string;
  extensions?: string[];
}
```

#### Подробная информация

| Свойство      | Тип        | Описание           | Значение по умолчанию       |
| ------------- | ---------- | ------------------ | --------------------------- |
| `directory`   | `string`   | Путь к каталогу конфигурации | -                           |
| `extensions`  | `string[]` | Необязательно, расширения файлов | `['js', 'ts', 'json']` |

### `use()`

Добавить middleware в `ResourceMangaer`.

```ts
resourceManager.use(async () => {
  return async function (ctx, next) {
    // ...
    await next();
  };
});
```

#### Сигнатура

- `use(middlewares: HandlerType | HandlerType[], options: ToposortOptions = {})`

#### Подробная информация

См. [Middleware](../../development/server/middleware)

### `middleware()`

Middleware для `ResourceManager`, который разбирает параметры запроса (см. [ctx.action](./action.md)) и выполняет методы операций.
