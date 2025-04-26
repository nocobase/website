# Application

`Application` — это основной модуль приложения на стороне сервера в NocoBase, расширяющий функциональность <a href="https://koajs.com" target="_blank">Koa</a>. Он отвечает за основную логику инициализации приложения и управляет жизненным циклом приложения.

## Конструктор

`constructor()`

#### Сигнатура

- `constructor(public options: ApplicationOptions)`

#### Типы

```ts
export type PluginType = string | typeof Plugin;
export type PluginConfiguration = PluginType | [PluginType, any];

export interface ResourceManagerOptions {
  prefix?: string;
}

export interface AppLoggerOptions {
  request: RequestLoggerOptions;
  system: SystemLoggerOptions;
}

export interface AppTelemetryOptions extends TelemetryOptions {
  enabled?: boolean;
}

export interface ApplicationOptions {
  database?: IDatabaseOptions | Database;
  cacheManager?: CacheManagerOptions;
  resourceManager?: ResourceManagerOptions;
  bodyParser?: any;
  cors?: any;
  dataWrapping?: boolean;
  registerActions?: boolean;
  i18n?: i18n | InitOptions;
  plugins?: PluginConfiguration[];
  acl?: boolean;
  logger?: AppLoggerOptions;
  name?: string;
  authManager?: AuthManagerOptions;
  telemetry?: AppTelemetryOptions;
}
```

#### Подробная информация

##### ApplicationOptions

| Свойство           | Тип                                    | Описание                                                                                               |
| ------------------ | --------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| `name`             | `string`                                | Идентификатор приложения                                                                               |
| `database`         | `IDatabaseOptions` \| `DataBase`        | Конфигурация или экземпляр `DataBase`, см. [DataBase](../database/index.md)                            |
| `cacheManager`     | `CacheManagerOptions`                   | Конфигурация экземпляра `CacheManager`, см. [CacheManager](../cache/cache-manager.md)                  |
| `resourceManager`  | [`ResourcerOptions`](#resourceroptions) | Конфигурация менеджера ресурсов                                                                        |
| `authManager`      | `AuthManagerOptions`                    | Конфигурация управления аутентификацией пользователей, см. [AuthManager](../auth/auth-manager.md)       |
| `bodyParser`       | `bodyParser.Options`                    | Параметры, передаваемые в middleware <a href="https://github.com/koajs/bodyparser" target="_blank">@koa/bodyparser</a> |
| `bodyParser`       | `any`                                   | Параметры, передаваемые в middleware <a href="https://github.com/koajs/cors" target="_blank">@koa/cors</a> |
| `dataWrapping`     | `boolean`                               | Форматировать ли данные ответа                                                                         |
| `registerActions`  | `boolean`                               | Регистрировать ли интерфейсы CRUD-операций по умолчанию для таблиц данных                              |
| `i18n`             | `i18n` \| `InitOptions`                 | Реализация `i18n` или конфигурация инициализации                                                       |
| `plugins`          | `PluginConfiguration[]`                 | Массив имен или экземпляров встроенных плагинов                                                        |
| `acl`              | `boolean`                               | Включить ли управление доступом                                                                        |
| `logger`           | [`AppLoggerOptions`](#apploggeroptions) | Конфигурация логирования приложения                                                                    |
| `telemetry`        | `AppTelemetryOptions`                   | Конфигурация телеметрии, см. [Telemetry](../telemetry/telemetry.md) <br />`telemetry.enabled` - включена ли телеметрия |

##### ResourcerOptions

| Свойство | Тип      | Описание                  |
| -------- | -------- | ------------------------- |
| `prefix` | `string` | Префикс интерфейса ресурсов |

##### AppLoggerOptions

| Свойство  | Тип                   | Описание                                                                 |
| --------- | --------------------- | ------------------------------------------------------------------------ |
| `request` | `RequestLoggerOptions`| См. [Logger - requestLogger()](../logger.md#requestlogger)              |
| `system`  | `SystemLoggerOptions` | См. [Logger - createSystemLogger()](../logger.md#createsystemlogger)    |

## Свойства экземпляра

### `name`

Идентификатор приложения. По умолчанию `main`.

### `version`

Управление номером версии приложения. Номер версии можно получить с помощью `version.get()`.

### `mainDataSource`

Основной источник данных.

### `db`

Экземпляр `DataBase` основного источника данных. См. [DataBase](../database/index.md).

### `acl`

Экземпляр `ACL`. См. [ACL](../acl/acl.md).

### `log`

Системный журнал. См. [Logger](../logger.md).

### `logger`

Эквивалентно `log`.

### `cache`

Кэш приложения, экземпляр `Cache`. См. [Cache](../cache/cache.md).

### `cli`

Методы командной строки приложения.

### `i18n`

Интернационализация. Экземпляр `i18n`.

### `telemetry`

Экземпляр `Telemetry`. См. [Telemetry](../telemetry/telemetry.md).

### `pm`

Управление плагинами. См. [PluginManager](./plugin-manager).

### `dataSourceManager`

Управление источниками данных. См. [DataSourceManager](../data-source-manager/).

### `resourceManager`

Управление ресурсами. См. [ResourceManager](../resourcer/resource-manager.md).

### `cacheManager`

Управление кэшем. См. [CacheManager](../cache/cache-manager.md).

### `authManager`

Управление аутентификацией пользователей. См. [AuthManager](../auth/auth-manager.md).

### `cronJobManager`

Управление задачами по расписанию приложения.

### `localeManager`

Управление локализованными ресурсами приложения.

## Методы процесса

### `load()`

Загрузка приложения и его инициализация.

#### Сигнатура

- `load(options?: LoadOptions): Promise<void>`

#### Типы

```ts
interface LoadOptions {
  reload?: boolean;
  hooks?: boolean;
  sync?: boolean;
  [key: string]: any;
}
```

#### Подробная информация

| Свойство        | Тип      | Описание                                      | Значение по умолчанию |
| --------------- | --------- | --------------------------------------------- | --------------------- |
| `reload`        | `boolean` | Флаг, указывающий на перезагрузку              | `false`               |
| `hooks`         | `boolean` | Вызывать ли хуки `beforeLoad` / `afterLoad`   | `true`                |
| `sync`          | `boolean` | Синхронизировать ли изменения конфигурации таблиц | `false`               |
| `[key: string]` | `any`     | Дополнительные настройки, передаваемые в хуки  | -                     |

### `reload()`

Перезагрузка приложения и повторная инициализация.

#### Сигнатура

- `reload(options?: LoadOptions): Promise<void>`

### `start()`

Запуск приложения для приема запросов.

#### Сигнатура

- `start(options: StartOptions = {}): Promise<void>`

#### Типы

```ts
interface StartOptions {
  checkInstall?: boolean;
}
```

#### Подробная информация

| Свойство       | Тип      | Описание             | Значение по умолчанию |
| -------------- | --------- | -------------------- | --------------------- |
| `checkInstall` | `boolean` | Проверка установки приложения | `false`               |

### `restart()`

Перезапуск приложения, выполняет `reload()` и `start()`.

#### Сигнатура

- `restart(options: StartOptions = {}): Promise<void>`

### `install()`

Установка приложения. Весь процесс включает инициализацию приложения, синхронизацию изменений конфигурации таблиц, установку плагинов, а также перезапуск приложения, если оно уже запущено.

#### Сигнатура

- `install(options: InstallOptions = {}): Promise<void>`

#### Типы

```ts
export interface InstallOptions {
  force?: boolean;
}
```

| Свойство | Тип      | Описание                          | Значение по умолчанию |
| -------- | --------- | --------------------------------- | --------------------- |
| `force`  | `boolean` | Принудительная переустановка приложения, если оно уже установлено | `false`               |

### `upgrade()`

Обновление приложения, выполнение скриптов `migration` для всех плагинов и перезапуск приложения.

#### Сигнатура

- `upgrade(): Promise<void>`

### `stop()`

Остановка приложения, закрытие базы данных, промежуточного программного обеспечения кэша и соединений телеметрии.

#### Сигнатура

- `stop(): Promise<void>`

### `destroy()`

Уничтожение приложения, выполняет `stop()`.

#### Сигнатура

- `destroy(): Promise<void>`

### `isInstalled()`

Проверка, установлено ли приложение.

#### Сигнатура

- `isInstalled(): Promise<boolean>`

### `isStarted()`

Проверка, запущено ли приложение.

- `isStarted(): Promise<boolean>`

## Другие методы

### `on()`

Прослушивание событий приложения. См. <a href="https://nodejs.org/api/events.html#emitteroneventname-listener" target="_blank">emitter.on(eventName, listener)</a>.

#### Сигнатура

- `on(eventName: string | symbol, listener: (...args: any[]) => void): this`

### `off()`

Отмена прослушивания событий. См. <a href="https://nodejs.org/api/events.html#emitteroffeventname-listener" target="_blank">emitter.off(eventName, listener)</a>.

#### Сигнатура

- `off(eventName: string | symbol, listener: (...args: any[]) => void): this`

### `use()`

Добавление промежуточного программного обеспечения (middleware) приложения. См. <a href="https://koajs.com/#application" target="_blank">Koa - Application</a>.

### `command()`

Добавление командной строки приложения.

#### Сигнатура

- `command(name: string, desc?: string, opts?: CommandOptions): AppCommand`

#### Подробная информация

| Имя параметра | Тип              | Описание                                                                                         |
| -------------- | ----------------- | ------------------------------------------------------------------------------------------------ |
| `name`         | `string`          | Команда                                                                                          |
| `desc`         | `string`          | Описание команды                                                                                 |
| `opts`         | `CommandOptions`  | Конфигурация команды, см. <a href="https://github.com/tj/commander.js" target="_blank">Commander.js</a> |

### `runCommand()`

Запуск команды приложения.

#### Сигнатура

- `runCommand(command: string, ...args: any[])`

### `authenticate()`

Проверка подключения к базе данных и версии.

#### Сигнатура

- `authenticate(): Promise<void>`

## События

### `'beforeLoad'` / `'afterLoad'`

Срабатывают до и после выполнения [`load()`](#load), [`reload()`](#reload).

### `'beforeReload'` / `'afterReload'`

Срабатывают до и после выполнения [`reload()`](#reload).

### `'beforeInstall'` / `'afterInstall'`

Срабатывают до и после выполнения [`install()`](#install).

### `'beforeUpgrade'` / `'afterUpgrade'`

Срабатывают до и после выполнения [`upgrade()`](#upgrade).

### `'beforeStart'` / `'afterStart'`

Срабатывают до и после выполнения [`start()`](#start).

### `'beforeStop'` / `'afterStop'`

- Срабатывают до и после выполнения [`stop()`](#stop), [`destroy()`](#destroy).
- `'beforeStop'` также срабатывает перед [`restart()`](#restart).

### `'beforeDestroy'` / `'afterDestroy'`

Срабатывают до и после выполнения [`destroy()`](#destroy).
