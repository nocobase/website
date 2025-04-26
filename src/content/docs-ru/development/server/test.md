# Тестирование

Тестирование основано на тестовом фреймворке [Jest](https://jestjs.io/). Для удобства написания тестов предоставляются функции `mockDatabase()` и `mockServer()`, которые используются для тестирования базы данных и серверной части приложения.

:::warning
Переменные окружения для тестов настраиваются в файле `.env.test`. Рекомендуется использовать отдельную тестовую базу данных для проведения тестов.
:::

## `mockDatabase()`

По умолчанию предоставляется полностью изолированная тестовая среда для базы данных.

```ts
import { mockDatabase } from '@nocobase/test';

describe('my db suite', () => {
  let db;

  beforeEach(async () => {
    db = mockDatabase();
    db.collection({
      name: 'posts',
      fields: [
        {
          type: 'string',
          name: 'title',
        },
      ],
    });
    await db.sync();
  });

  afterEach(async () => {
    await db.close();
  });

  test('my case', async () => {
    const repository = db.getRepository('posts');
    const post = await repository.create({
      values: {
        title: 'hello',
      },
    });

    expect(post.get('title')).toEqual('hello');
  });
});
```

## `mockServer()`

Предоставляется смоделированный экземпляр серверного приложения, где соответствующий `app.db` является экземпляром `mockDatabase()`. Также предоставляется удобный метод `app.agent()` для тестирования HTTP API. Для Resource Action в NocoBase дополнительно реализован метод `app.agent().resource()`, который используется для тестирования действий (Action) над ресурсами.

```ts
import { MockServer, mockServer } from '@nocobase/test';

// Минимальный набор установленных плагинов для каждого приложения (app) различается, и каждый плагин должен самостоятельно добавлять необходимые плагины в зависимости от своих требований.
async function createApp(options: any = {}) {
  const app = mockServer({
    ...options,
    plugins: [
      'acl',
      'users',
      'collection-manager',
      'error-handler',
      ...options.plugins,
    ],
    // Также могут быть дополнительные параметры конфигурации
  });
  // Здесь можно добавить логику для специальной обработки, например, импортировать таблицы данных, необходимые для тестирования
  return app;
}

// Поскольку большинство тестов требуют запуска приложения, можно также предоставить общий метод для запуска приложения
async function startApp() {
  const app = createApp();
  await app.quickstart({
    // Перед запуском тестов очистить базу данных
    clean: true,
  });
  return app;
}

describe('test example', () => {
  let app: MockServer;

  beforeEach(async () => {
    app = await startApp();
  });

  afterEach(async () => {
    // После завершения тестов очистить базу данных
    await app.destroy();
    // Только остановить, не очищая базу данных
    await app.stop();
  });

  test('case1', async () => {
    // coding...
  });
});
```

## Обычные сценарии работы приложения

Если необходимо протестировать различные сценарии, можно выполнить соответствующие команды на основе следующих примеров.

### Сначала установка, затем запуск

Командная строка терминала:

```bash
yarn nocobase install
yarn start
```

Предварительный процесс тестирования

```ts
const app = mockServer();
await app.runCommand('install');
await app.runCommand('start');
```

### Сначала запуск, затем установка

Командная строка терминала:

```bash
yarn start # Постоянно в памяти
# Выполнить в другом терминале
yarn nocobase install
```

Предварительный процесс тестирования

```ts
const app = mockServer();
await app.runCommand('start');
await app.runCommand('install');
```

### Быстрый запуск (автоматическая установка или обновление)

Командная строка терминала:

```bash
yarn start --quickstart
```

Предварительный процесс тестирования

```ts
const app = mockServer();
await app.runCommand('start', '--quickstart');
```

### Переустановка уже установленного и запущенного приложения

Командная строка терминала:

```bash
yarn start --quickstart
# Выполнить в другом терминале
yarn nocobase install -f
```

Предварительный процесс тестирования

```ts
const app = mockServer();
await app.runCommand('start', '--quickstart');
await app.runCommand('install', '-f');
```

### Обновление приложения (до запуска)

Командная строка терминала:

```bash
yarn nocobase upgrade
yarn start
```

Предварительный процесс тестирования

```ts
const app = mockServer();
await app.runCommand('upgrade', '-f');
await app.runCommand('start', '--quickstart');
```

### Обновление приложения (после запуска)

```bash
yarn start # Постоянно в памяти
# Выполнить в другом терминале
yarn nocobase upgrade
```

Предварительный процесс тестирования

```ts
const app = mockServer();
await app.runCommand('start', '--quickstart');
await app.runCommand('upgrade', '-f');
```

### Активация плагина

Командная строка терминала:

```bash
yarn start --quickstart
yarn pm enable @my-project/plugin-hello
```

Предварительный процесс тестирования

```ts
const app = mockServer();
await app.runCommand('start', '--quickstart');
await app.runCommand('pm', 'enable', '@my-project/plugin-hello');
```

### Отключение плагина

Командная строка терминала:

```bash
yarn start --quickstart
yarn pm disable @my-project/plugin-hello
```

Предварительный процесс тестирования

```ts
const app = mockServer();
await app.runCommand('start', '--quickstart');
await app.runCommand('pm', 'disable', '@my-project/plugin-hello');
```
