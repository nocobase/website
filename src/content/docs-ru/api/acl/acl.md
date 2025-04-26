# ACL

## Обзор

`ACL` — это модуль управления правами доступа, используемый в NocoBase. Он отвечает за управление ролями пользователей, регистрацию и предоставление разрешений, определение политик прав доступа и контроль доступа.

### Пояснения к концепциям

- **Ресурс** (`Resource`): Таблица данных, также можно регистрировать собственные ресурсы. См. [`@nocobase/resourcer`](../resourcer/resource-manager.md).
- **Действие** (`Action`): Интерфейс операций с ресурсом, например, создание, просмотр, обновление, удаление или другие пользовательские операции. См. [`@nocobase/actions`](../actions).
- **Стратегия** (`Strategy`): Глобальные права доступа для роли, такие как создание, просмотр, обновление, удаление, импорт и экспорт ресурсов, а также настройка пользовательского интерфейса и других системных разрешений.
- **Фрагмент** (`Snippet`): Определяет набор операций для унифицированного управления группой разрешений. Идентификаторы фрагментов могут соответствовать правилам нечеткого сопоставления <a href="https://github.com/isaacs/minimatch" target="_blank">minimatch</a>.。

## Методы класса

### `define()`

Определяет роль.

#### Сигнатура

- `define(options: DefineOptions): ACLRole`

#### Типизация

```ts
export interface DefineOptions {
  role: string;
  strategy?: string | AvailableStrategyOptions;
  actions?: ResourceActionsOptions;
  snippets?: string[];
}

export interface AvailableStrategyOptions {
  displayName?: string;
  actions?: false | string | string[];
  allowConfigure?: boolean;
  resource?: '*';
}

export interface ResourceActionsOptions {
  [actionName: string]: RoleActionParams;
}

export interface RoleActionParams {
  fields?: string[];
  filter?: any;
  own?: boolean;
  whitelist?: string[];
  blacklist?: string[];
}
```

#### Детали

##### Опции определения роли.

| Свойство   | Тип                                                                | Описание                                                   |
| ---------- | ------------------------------------------------------------------- | ---------------------------------------------------------- |
| `role`     | `string`                                                            | Уникальный идентификатор роли                               |
| `strategy` | `string` \| [`AvailableStrategyOptions`](#availablestrategyoptions) | Необязательно, глобальная стратегия доступа роли, может быть идентификатором стратегии или её конфигурацией. |
| `actions`  | [`{ [actionName: string]: RoleActionParams; }`](#roleactionparams)  | Необязательно, конфигурация прав доступа для действий       |
| `snippets` | `string[]`                                                          | Необязательно, определяет фрагменты, к которым у роли есть доступ |

##### Доступные варианты стратегии.

| Свойство         | Тип                              | Описание                       |
| ---------------- | --------------------------------- | ------------------------------ |
| `displayName`    | `string`                          | Необязательно, название стратегии для отображения |
| `action`         | `false` \| `string` \| `string[]` | Необязательно, интерфейс операций |
| `allowConfigure` | `boolean`                         | Необязательно, разрешена ли настройка пользовательского интерфейса |
| `resource`       | `*`                               | Указывает, что стратегия применяется ко всем ресурсам |

##### Параметры действия роли

| Свойство    | Тип       | Описание                                                   |
| ----------- | ---------- | ---------------------------------------------------------- |
| `fields`    | `string[]` | Необязательно, поля таблицы данных, с которыми нужно работать |
| `filter`    | `any`      | Необязательно, параметры фильтрации; операции могут выполняться только над записями, соответствующими условиям |
| `own`       | `boolean`  | Необязательно, можно ли работать только с записями, созданными самим пользователем |
| `whitelist` | `string[]` | Необязательно, белый список полей; доступ возможен только к полям из списка |
| `blacklist` | `string[]` | Необязательно, черный список полей; доступ к полям из списка запрещен |

### `can()`

Определяет права на выполнение операции и возвращает окончательные параметры операции. Возвращает `null`, если прав нет.

#### Сигнатура

- `can(options: CanArgs): CanResult | null`

#### Типизация

```ts
interface CanArgs {
  role: string;
  resource: string;
  action: string;
  ctx?: any;
}

interface CanResult {
  role: string;
  resource: string;
  action: string;
  params?: any;
}
```

#### Детали

##### Аргументы для проверки прав доступа.

| Свойство   | Тип      | Описание           |
| ---------- | -------- | ------------------ |
| `role`     | `string` | Идентификатор роли |
| `resource` | `string` | Идентификатор ресурса |
| `action`   | `string` | Идентификатор действия |
| `ctx`      | `any`    | Необязательно, контекст запроса |

##### Результат проверки прав доступа.

| Свойство   | Тип      | Описание           |
| ---------- | -------- | ------------------ |
| `role`     | `string` | Идентификатор роли |
| `resource` | `string` | Идентификатор ресурса |
| `action`   | `string` | Идентификатор действия |
| `params`   | `any`    | Необязательно, параметры операции |

### `registerSnippet()`

Регистрация фрагмента.

#### Сигнатура

- `registerSnippet(snippet: SnippetOptions)`

#### Типизация

```ts
export type SnippetOptions = {
  name: string;
  actions: string[];
};
```

#### Детали

| Свойство  | Тип       | Описание                                                                                                                                                   |
| --------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`    | `string`   | Идентификатор фрагмента, который может соответствовать правилам <a href="https://github.com/isaacs/minimatch" target="_blank">minimatch</a>. Например, `auth.auth` соответствует `auth.*`. |
| `actions` | `string[]` | Операции с ресурсами, включенные в фрагмент, в формате `ресурс:действие`. Например, `users:list`.                                                           |

### `setAvailableAction()`

设定允许的操作。

#### Сигнатура

- `setAvailableAction(name: string, options: AvailableActionOptions = {})`

```ts
export interface AvailableActionOptions {
  displayName?: string;
  aliases?: string[] | string;
  resource?: string;
  // Операции с новыми данными
  onNewRecord?: boolean;
  // Разрешить настройку полей
  allowConfigureFields?: boolean;
}
```

#### Детали

| Свойство               | Тип                   | Описание                                              |
| ---------------------- | ---------------------- | ----------------------------------------------------- |
| `displayName`          | `string`               | Необязательно, отображаемое название операции         |
| `aliases`              | `string` \| `string[]` | Необязательно, псевдонимы операции. Например, `get`, `list` имеют псевдоним `view`. |
| `resource`             | `string`               | Необязательно, ресурс                                |
| `onNewRecord`          | `boolean`              | Необязательно, применяется ли операция к новым данным. Например, операция создания. |
| `allowConfigureFields` | `boolean`              | Необязательно, разрешена ли настройка полей           |

### `setAvailableStrategy()`

Установка разрешённой стратегии операций.

#### Сигнатура

- `setAvailableStrategy(name: string, options: AvailableStrategyOptions)`

См. [AvailableStrategyOptions](#availablestrategyoptions)

### `allow()`

Установка условий, при которых операция разрешена.

```ts
acl.allow('plugins', '*', 'public');
```

#### Сигнатура

- `allow(resourceName: string, actionNames: string[] | string, condition?: string | ConditionFunc)`

#### Типизация

```ts
export type ConditionFunc = (ctx: any) => Promise<boolean> | boolean;
```

#### Детали

| Параметр       | Тип                        | Описание                               | Значение по умолчанию |
| -------------- | --------------------------- | -------------------------------------- | ---------------------- |
| `resourceName` | `string`                    | Ресурс                                 | -                      |
| `actionNames`  | `string` \| `string[]`      | Операция                               | -                      |
| `condition`    | `string` \| `ConditionFunc` | Необязательно, предустановленный идентификатор условия или функция проверки условия | `public`               |

Предустановленный идентификатор условия:

- `public`: Публичный интерфейс.  
- `loggedIn`: Разрешено, если пользователь авторизован.  
- `allowConfigure`: Разрешено, если у роли текущего пользователя есть права на настройку пользовательского интерфейса.

### `addFixedParams()`

Добавить фиксированные параметры для операции, которые будут объединены с параметрами текущего запроса.

```ts
acl.addFixedParams('users', 'list', () => {
  return {
    filter: {
      id: {
        $eq: 1,
      },
    },
  };
});
```

#### Сигнатура

- `addFixedParams(resource: string, action: string, merger: Merger)`

#### Типизация

```ts
export type Merger = () => object;
```

#### Детали

| Параметр   | Тип      | Описание                           |
| ---------- | -------- | ---------------------------------- |
| `resource` | `string` | Ресурс                             |
| `action`   | `string` | Операция                           |
| `merger`   | `Merger` | Функция, возвращающая объект с фиксированными параметрами для добавления |

### `use()`

Добавить middleware для `ACL`.

```ts
acl.use(async () => {
  return async function (ctx, next) {
    // ...
    await next();
  };
});
```

#### Сигнатура

- `use(fn: any, options?: ToposortOptions)`

#### Детали

参考[Middleware](../../development/server/middleware)。

### `middleware()`

Middleware контроля доступа NocoBase。
