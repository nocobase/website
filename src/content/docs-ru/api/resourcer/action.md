# ctx.action

## Обзор

После того как запрос на операцию с ресурсом обработан через [`resourceManager.middleware()`](./resource-manager#middleware), важные параметры запроса сохраняются в `ctx.action` для использования последующими middleware.

## API

### resourceName

`ctx.action.resourceName`

Имя ресурса имеет две формы:

- `a` — операция с ресурсом `a`.
- `a.b` — операция с ассоциированным объектом `b` ресурса `a`.

### actionName

`ctx.action.actionName`

Название операции.

### sourceId

`ctx.action.sourceId`

Когда объект операции является связанным объектом ресурса, это значение представляет собой первичный ключ соответствующего ресурса. Например: когда `resourceName` равен `a.b`, `sourceId` представляет значение первичного ключа `a`.

### params

Параметры запроса.

- Параметры URL можно получить непосредственно из `ctx.action.params`.

```ts
const { filterByTk } = ctx.action.params;
```

- Тело запроса можно получить через `ctx.action.params.values`.

### mergeParams()

Предоставляет содержимое параметров и объединяет их с параметрами запроса.

```ts
ctx.action.mergeParams(
  {
    filter: {
      name: 'foo',
    },
    fields: ['id', 'name'],
    except: ['name'],
    sort: ['id'],
    page: 1,
    pageSize: 10,
    values: {
      name: 'foo',
    },
  },
  {
    filter: 'and',
    fields: 'union',
    except: 'union',
    sort: 'overwrite',
    page: 'overwrite',
    pageSize: 'overwrite',
    values: 'deepMerge',
  },
);

ctx.action.mergeParams(
  {
    filter: {},
  },
  {
    filter: (x, y) => {
      // ...
    },
  },
);
```

#### Сигнатура

- `mergeParams(params: ActionParams, strategies: MergeStrategies = {})`

#### Типы

```ts
export interface ActionParams {
  filterByTk?: any;
  fields?: string[];
  appends?: string[];
  except?: string[];
  whitelist?: string[];
  blacklist?: string[];
  filter?: FilterOptions;
  sort?: string[];
  page?: number;
  pageSize?: number;
  values?: any;
  [key: string]: any;
}

type MergeStrategyType =
  | 'merge'
  | 'deepMerge'
  | 'overwrite'
  | 'andMerge'
  | 'orMerge'
  | 'intersect'
  | 'union';
type MergeStrategyFunc = (x: any, y: any) => any;
export type MergeStrategy = MergeStrategyType | MergeStrategyFunc;
export interface MergeStrategies {
  [key: string]: MergeStrategy;
}
```

#### Подробное описание

| Имя параметра | Тип                                                     | Описание                           |
| ------------ | -------------------------------------------------------- | ---------------------------------- |
| `params`     | [`ActionParams`](#actionparams)                          | Параметры запроса операции          |
| `strategies` | [`{ [key: string]: MergeStrategies }`](#mergestrategies) | Стратегии слияния для полей запроса |

Значение `strategies` по умолчанию:

```ts
{
  filter: 'andMerge',
  fields: 'intersect',
  appends: 'union',
  except: 'union',
  whitelist: 'intersect',
  blacklist: 'intersect',
  sort: 'overwrite',
};
```

##### ActionParams

| Имя параметра    | Тип       | Описание                                                |
| ---------------- | ---------- | ------------------------------------------------------- |
| `filterByTk`     | `any`      | Значение первичного ключа ресурса                       |
| `filter`         | `Filter`   | Параметр фильтрации, см. [Filter Operators](./database/operators) |
| `fields`         | `string[]` | Поля для получения                                       |
| `except`         | `string[]` | Поля для исключения                                      |
| `appends`        | `string[]` | Дополнительные связанные поля                            |
| `whitelist`      | `string[]` | Белый список полей                                       |
| `blacklist`      | `string[]` | Черный список полей                                      |
| `sort`           | `string[]` | Параметры сортировки                                     |
| `page`           | `number`   | Текущая страница                                         |
| `pageSize`       | `number`   | Количество записей на странице                           |
| `values`         | `any`      | Тело запроса                                            |
| `[key: string]`  | `any`      | Другие дополнительные конфигурации                      |
##### MergeStrategies

Предустановленные стратегии слияния или пользовательские функции слияния.

Предустановленные стратегии слияния:

| Имя стратегии | Описание                           |
| -------------- | ----------------------------------- |
| `merge`        | `Object.assign`                    |
| `deepMerge`    | Глубокое рекурсивное слияние       |
| `overwrite`    | Перезапись                         |
| `andMerge`     | Объединение с использованием оператора `$and` для параметров фильтрации |
| `orMerge`      | Объединение с использованием оператора `$or` для параметров фильтрации  |
| `intersect`    | Пересечение                        |
| `union`        | Объединение                        |
