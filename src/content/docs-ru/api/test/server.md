# Server

## Обзор

NocoBase использует <a href="https://vitest.dev/" target="_blank">Vitest</a> для тестирования серверной части. Пакет `@nocobase/test` предоставляет удобные методы для мокирования сервисов и базы данных в серверных тестах.

### Базовое использование

```ts
describe('actions', () => {
  let app: MockServer;
  let db: Database;
  let agent: any;

  beforeAll(async () => {
    app = await createMockServer({
      plugins: ['acl', 'users', 'data-source-manager'],
    });
    db = app.db;
    agent = app.agent();
  });

  afterAll(async () => {
    await app.destroy();
  });
});
```

## API

### `defineConfig()`

Получение конфигурации Vitest.

```ts
import { defineConfig } from '@nocobase/test/vitest.mjs';

const config = defineConfig();
```

### `mockDatabase()`

Создание экземпляра `MockDataBase` для тестирования.

#### Сигнатура

- `mockDatabase(options: IDatabaseOptions = {}): MockDatabase`

#### Подробная информация

| Имя параметра | Тип               | Описание                                  |
| -------------- | ------------------ | ----------------------------------------- |
| `options`      | `IDatabaseOptions` | См. [DataBase](../database/index.md) |

### `mockServer()`

Создание экземпляра `MockServer`.

#### Сигнатура

- `mockServer(options?: ApplicationOptions): MockServer`

#### Подробная информация

| Имя параметра | Тип                 | Описание                                         |
| ------------- | -------------------- | ------------------------------------------------ |
| `options`     | `ApplicationOptions` | См. [Application](../server/application.md) |

### `createMockServer()`

Создание экземпляра `MockServer`, выполнение принудительной установки и запуск.

#### Сигнатура

```ts
createMockServer(options?: ApplicationOptions & {
    version?: string;
    beforeInstall?: BeforeInstallFn;
    skipInstall?: boolean;
    skipStart?: boolean;
}): Promise<MockServer>
```

#### Подробная информация

| Имя параметра          | Тип                 | Описание                                         |
| ---------------------- | -------------------- | ------------------------------------------------ |
| `options`              | `ApplicationOptions` | См. [Application](../server/application.md) |
| `options.version`      | `string`             | Номер версии приложения                          |
| `options.beforeInstall`| `BeforeInstallFn`    | Функция, выполняемая перед установкой            |
| `options.skipInstall`  | `boolean`            | Пропустить ли принудительную установку           |
| `options.skipStart`    | `boolean`            | Пропустить ли запуск приложения                  |

### `MockServer`

`MockServer` наследуется от `Application` и представляет собой класс серверного приложения для тестирования.

#### Методы класса

##### `loadAndInstall()`

Загрузка и установка приложения.

##### `cleanDb()`

Очистка базы данных.

##### `quickstart()`

Выполнение команды `nocobase start --quickstart`.

##### `destroy()`

Уничтожение приложения.

##### `agent()`

Используется для отправки запросов к интерфейсу в тестовых случаях.

**Сигнатура**

- `agent(): ExtendedAgent`

**Типы**

```ts
interface ExtendedAgent extends SuperAgentTest {
  login: (user: any) => ExtendedAgent;
  loginUsingId: (userId: number) => ExtendedAgent;
  resource: (name: string, resourceOf?: any) => Resource;
}
```

**Подробная информация**

- `SuperAgentTest`

См. <a href="https://github.com/ladjs/superagent" target="_blank">superagent</a>.

- `login()`

Вход с использованием модели пользователя.

- `loginUsingId()`

Вход с использованием ID пользователя.

- `resource()`

Получение ресурса.

| Имя параметра | Тип      | Описание                                                                                   |
| ------------- | -------- | ------------------------------------------------------------------------------------------ |
| `name`        | `string` | 1. Название ресурса, например, `a` <br /> 2. Название связанного объекта ресурса, например, `a.b` |
| `resourceOf`  | `any`    | Когда `resource` является именем связанного объекта ресурса, это значение представляет собой первичный ключ ресурса. Например, для `a.b` это будет первичный ключ `a`. |

### sleep