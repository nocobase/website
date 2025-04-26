# Auth

## Обзор

`Auth` — это абстрактный класс для типов аутентификации пользователей, который определяет необходимые интерфейсы для выполнения аутентификации. Для создания нового типа аутентификации необходимо унаследовать класс `Auth` и реализовать его методы. Базовую реализацию можно изучить здесь: [BaseAuth](./base-auth.md).

```ts
interface IAuth {
  user: Model;
  // Проверка статуса аутентификации и возврат текущего пользователя.
  check(): Promise<Model>;
  signIn(): Promise<any>;
  signUp(): Promise<any>;
  signOut(): Promise<any>;
}

export abstract class Auth implements IAuth {
  abstract user: Model;
  abstract check(): Promise<Model>;
  // ...
}

class CustomAuth extends Auth {
  // check: Авторизация
  async check() {
    // ...
  }
}
```

## Свойства экземпляра

### `user`

Информация о пользователе после аутентификации.

#### Сигнатура

- `abstract user: Model`

## Методы класса

### `constructor()`

Конструктор, создающий экземпляр `Auth`.

#### Сигнатура

- `constructor(config: AuthConfig)`

#### Типизация

```ts
export type AuthConfig = {
  authenticator: Authenticator;
  options: {
    [key: string]: any;
  };
  ctx: Context;
};
```

#### Детали

##### AuthConfig

| Свойство        | Тип                                            | Описание                                                                                                 |
| --------------- | ----------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `authenticator` | [`Authenticator`](./auth-manager#authenticator) | Модель данных аутентификатора. В приложении NocoBase фактический тип: [AuthModel](../../handbook/auth/dev/api.md#authmodel) |
| `options`       | `Record<string, any>`                           | Конфигурация аутентификатора                                                                             |
| `ctx`           | `Context`                                       | Контекст запроса                                                                                         |

### `check()`

Проверка авторизации пользователя с возвратом информации о пользователе. Абстрактный метод, который должен быть реализован во всех типах аутентификации.

#### Сигнатура

- `abstract check(): Promise<Model>`

### `signIn()`

Вход пользователя.

#### Сигнатура

- `signIn(): Promise<any>`

### `signUp()`

Регистрация пользователя.

#### Сигнатура

- `signUp(): Promise<any>`

### `signOut()`

Выход пользователя из системы.

#### Сигнатура

- `signOut(): Promise<any>`
