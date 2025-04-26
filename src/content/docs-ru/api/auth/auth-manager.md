# Менеджер аутентификации (AuthManager)

## Обзор

`AuthManager` — это модуль управления аутентификацией пользователей в NocoBase, который используется для регистрации различных типов аутентификации пользователей.

### Базовое использование

```ts
const authManager = new AuthManager({
  // Используется для получения идентификатора текущего аутентификатора из заголовков запроса.
  authKey: 'X-Authenticator',
});

// Настройка методов хранения и получения аутентификатора для AuthManager.
authManager.setStorer({
  get: async (name: string) => {
    return db.getRepository('authenticators').find({ filter: { name } });
  },
});

// Регистрация типа аутентификации
authManager.registerTypes('basic', {
  auth: BasicAuth,
  title: 'Password',
});

// Использование middleware авторизации
app.resourceManager.use(authManager.middleware());
```

### Пояснение концепций

- **Тип аутентификации (`AuthType`)**: Различные способы аутентификации пользователей, такие как пароль, SMS, OIDC, SAML и т. д.
- **Аутентификатор (`Authenticator`)**: Сущность метода аутентификации, которая фактически хранится в таблице данных. Это запись конфигурации, соответствующая определенному типу аутентификации (`AuthType`). Один метод аутентификации может иметь несколько аутентификаторов, каждый из которых предоставляет разные способы аутентификации пользователей.
- **Идентификатор аутентификатора (`Authenticator name`)**: Уникальный идентификатор аутентификатора, который используется для определения способа аутентификации, применяемого в текущем запросе.

## Методы класса

### `constructor()`

Конструктор, создающий экземпляр `AuthManager`.

#### Сигнатура

- `constructor(options: AuthManagerOptions)`

#### Типизация

```ts
export interface JwtOptions {
  secret: string;
  expiresIn?: string;
}

export type AuthManagerOptions = {
  authKey: string;
  default?: string;
  jwt?: JwtOptions;
};
```

#### Детали

##### AuthManagerOptions

| Свойство  | Тип                        | Описание                                      | Значение по умолчанию |
| --------- | --------------------------- | --------------------------------------------- | --------------------- |
| `authKey` | `string`                    | Необязательно, ключ в заголовке запроса для хранения идентификатора текущего аутентификатора | `X-Authenticator`     |
| `default` | `string`                    | Необязательно, идентификатор аутентификатора по умолчанию      | `basic`               |
| `jwt`     | [`JwtOptions`](#jwtoptions) | Необязательно, если используется JWT для авторизации, можно настроить | -                     |

##### JwtOptions

| Свойство    | Тип      | Описание             | Значение по умолчанию |
| ----------- | -------- | -------------------- | ---------------------- |
| `secret`    | `string` | Секретный ключ токена | `X-Authenticator`      |
| `expiresIn` | `string` | Необязательно, срок действия токена | `7d`                  |

### `setStorer()`

Установка методов хранения и получения данных аутентификатора.

#### Сигнатура

- `setStorer(storer: Storer)`

#### Типизация

```ts
export interface Authenticator = {
  authType: string;
  options: Record<string, any>;
  [key: string]: any;
};

export interface Storer {
  get: (name: string) => Promise<Authenticator>;
}
```

#### Детали

##### Authenticator

| Свойство   | Тип                  | Описание           |
| ---------- | --------------------- | ------------------ |
| `authType` | `string`              | Тип аутентификации |
| `options`  | `Record<string, any>` | Конфигурация аутентификатора |

##### Storer

`Storer` — это интерфейс для хранения аутентификаторов, который содержит один метод:

- `get(name: string): Promise<Authenticator>` — получение аутентификатора по его идентификатору. В NocoBase фактически возвращаемый тип — это [AuthModel](../../handbook/auth/dev/api#authmodel).

### `registerTypes()`

Регистрация типа аутентификации.

#### Сигнатура

- `registerTypes(authType: string, authConfig: AuthConfig)`

#### Типизация

```ts
export type AuthExtend<T extends Auth> = new (config: Config) => T;

type AuthConfig = {
  auth: AuthExtend<Auth>; // The authentication class.
  title?: string; // The display name of the authentication type.
};
```

#### Детали

| Свойство | Тип               | Описание                                                                 |
| ------- | ------------------ | ------------------------------------------------------------------------ |
| `auth`  | `AuthExtend<Auth>` | Реализация типа аутентификации, см. [Auth](./auth.md)                    |
| `title` | `string`           | Необязательно. Заголовок для отображения данного типа аутентификации на фронтенде |

### `listTypes()`

Получить список зарегистрированных типов аутентификации.

#### Сигнатура

- `listTypes(): { name: string; title: string }[]`

#### Детали

| Свойство | Тип      | Описание             |
| ------- | -------- | -------------------- |
| `name`  | `string` | Идентификатор типа аутентификации |
| `title` | `string` | Заголовок типа аутентификации     |

### `get()`

Получить аутентификатор.

#### Сигнатура

- `get(name: string, ctx: Context)`

#### Детали

| Свойство | Тип      | Описание         |
| -------- | -------- | ---------------- |
| `name`   | `string` | Идентификатор аутентификатора |
| `ctx`    | `Context`| Контекст запроса |

### `middleware()`

Middleware авторизации. Получает текущий аутентификатор и выполняет аутентификацию пользователя.
