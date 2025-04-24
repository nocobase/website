# Справочник API

## Серверная часть

### Auth

API ядра, см. [Auth](../../../api/auth/auth.md)

### BaseAuth

API ядра, см. [BaseAuth](../../../api/auth/base-auth.md)

### AuthModel

#### Обзор

`AuthModel` — это модель аутентификатора (`Authenticator`, см. [AuthManager - setStorer](../../../api/auth/auth-manager.md#setstorer) и [Auth - constructor](../../../api/auth/auth.md#constructor)), используемая в приложении NocoBase. Она предоставляет методы для взаимодействия с таблицей данных пользователей. Кроме того, можно использовать методы, предоставляемые Sequelize Model.

```ts
import { AuthModel } from '@nocobase/plugin-auth';

class CustomAuth extends BaseAuth {
  async validate() {
    // ...
    const authenticator = this.authenticator as AuthModel;
    this.authenticator.findUser();
    this.authenticator.newUser();
    this.authenticator.findOrCreateUser();
    // ...
  }
}
```

#### Методы класса

- `findUser(uuid: string): UserModel` — поиск пользователя по `uuid`.
  - `uuid` — уникальный идентификатор пользователя для текущего типа аутентификации.

- `newUser(uuid: string, userValues?: any): UserModel` — создание нового пользователя, связывание пользователя с текущим аутентификатором через `uuid`.
  - `uuid` — уникальный идентификатор пользователя для текущего типа аутентификации.
  - `userValues` — опционально. Дополнительная информация о пользователе. Если не указано, `uuid` будет использован как псевдоним пользователя.

- `findOrCreateUser(uuid: string, userValues?: any): UserModel` — поиск или создание нового пользователя (правила создания такие же, как выше).
  - `uuid` — уникальный идентификатор пользователя для текущего типа аутентификации.
  - `userValues` — опционально. Дополнительная информация о пользователе.

## Клиентская часть

### `plugin.registerType()`

Регистрация клиентской части типа аутентификации.

```ts
import AuthPlugin from '@nocobase/plugin-auth/client';

class CustomAuthPlugin extends Plugin {
  async load() {
    const auth = this.app.pm.get(AuthPlugin);
    auth.registerType('custom-auth-type', {
      components: {
        SignInForm,
        // SignInButton
        SignUpForm,
        AdminSettingsForm,
      },
    });
  }
}
```

#### Сигнатура

- `registerType(authType: string, options: AuthOptions)`

#### Типы

```ts
export type AuthOptions = {
  components: Partial<{
    SignInForm: ComponentType<{ authenticator: AuthenticatorType }>;
    SignInButton: ComponentType<{ authenticator: AuthenticatorType }>;
    SignUpForm: ComponentType<{ authenticatorName: string }>;
    AdminSettingsForm: ComponentType;
  }>;
};
```

#### Подробная информация

- `SignInForm` — форма входа в систему.
- `SignInButton` — кнопка входа (для сторонних сервисов), может быть выбрана вместо формы входа.
- `SignUpForm` — форма регистрации.
- `AdminSettingsForm` — форма настроек администрирования.

### Маршрут

Плагин auth регистрирует клиентские маршруты следующим образом:

- Макет Auth
  - name: `auth`
  - path: `-`
  - component: `AuthLayout`

- Страница входа
  - name: `auth.signin`
  - path: `/signin`
  - component: `SignInPage`

- Страница регистрации
  - name: `auth.signup`
  - path: `/signup`
  - component: `SignUpPage`
