# @nocobase/logger

## Создание логов

### `createLogger()`

Создание пользовательских логов.

#### Сигнатура

- `createLogger(options: LoggerOptions)`

#### Типы

```ts
interface LoggerOptions
  extends Omit<winston.LoggerOptions, 'transports' | 'format'> {
  dirname?: string;
  filename?: string;
  format?: 'logfmt' | 'json' | 'delimiter' | 'console' | winston.Logform.Format;
  transports?: ('console' | 'file' | 'dailyRotateFile' | winston.transport)[];
}
```

#### Подробная информация

| Свойство     | Описание           |
| ------------ | ------------------ |
| `dirname`    | Директория вывода логов |
| `filename`   | Имя файла логов    |
| `format`     | Формат логов       |
| `transports` | Способы вывода логов |

### `createSystemLogger()`

Создание системных логов, которые печатаются определенным образом. См. [Логи - Системные логи](../handbook/logger/index.md#системные-логи)

#### Сигнатура

- `createSystemLogger(options: SystemLoggerOptions)`

#### Типы

```ts
export interface SystemLoggerOptions extends LoggerOptions {
  seperateError?: boolean; // отдельный вывод ошибок, по умолчанию true
}
```

#### Подробная информация

| Свойство        | Описание                              |
| --------------- | ------------------------------------- |
| `seperateError` | Отдельный вывод логов уровня `error`  |

### `requestLogger()`

Промежуточное ПО для логирования запросов и ответов API.

```ts
app.use(requestLogger(app.name));
```

#### Сигнатура

- `requestLogger(appName: string, options?: RequestLoggerOptions): MiddewareType`

#### Типы

```ts
export interface RequestLoggerOptions extends LoggerOptions {
  skip?: (ctx?: any) => Promise<boolean>;
  requestWhitelist?: string[];
  responseWhitelist?: string[];
}
```

#### Подробная информация

| Свойство            | Тип                              | Описание                                | Значение по умолчанию                                                                                                                                                  |
| ------------------- | --------------------------------- | --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `skip`              | `(ctx?: any) => Promise<boolean>` | Пропуск определенных запросов на основе контекста | -                                                                                                                                                                     |
| `requestWhitelist`  | `string[]`                        | Белый список информации запроса для логирования | `[ 'action', 'header.x-role', 'header.x-hostname', 'header.x-timezone', 'header.x-locale','header.x-authenticator', 'header.x-data-source', 'referer']`               |
| `responseWhitelist` | `string[]`                        | Белый список информации ответа для логирования   | `['status']`                                                                                                                                                          |

### app.createLogger()

#### Определение

```ts
class Application {
  createLogger(options: LoggerOptions) {
    const { dirname } = options;
    return createLogger({
      ...options,
      dirname: getLoggerFilePath(this.name || 'main', dirname || ''),
    });
  }
}
```

Если `dirname` является относительным путем, файлы логов будут выведены в каталог с именем текущего приложения.

### plugin.createLogger()

Использование аналогично `app.createLogger()`

#### Определение

```ts
class Plugin {
  createLogger(options: LoggerOptions) {
    return this.app.createLogger(options);
  }
}
```

## Конфигурация логов

### getLoggerLevel()

`getLoggerLevel(): 'debug' | 'info' | 'warn' | 'error'`

Получение текущего уровня логов, установленного в системе.

### getLoggerFilePath()

`getLoggerFilePath(...paths: string[]): string`

На основе каталога логов, установленного в текущей системе, создает путь к файлу логов.

### getLoggerTransports()

`getLoggerTransports(): ('console' | 'file' | 'dailyRotateFile')[]`

Получение способов вывода логов, установленных в текущей системе.

### getLoggerFormat()

`getLoggerFormat(): 'logfmt' | 'json' | 'delimiter' | 'console'`

Получение формата логов, установленного в текущей системе.

## Вывод логов

### Transports

Предустановленные способы вывода.

- `Transports.console`
- `Transports.file`
- `Transports.dailyRotateFile`

```ts
import { Transports } from '@nocobase/logger';

const transport = Transports.console({
  //...
});
```

## Связанные документы

- [Руководство разработчика - Логи](../development/server/logger.md)
- [Логи](../handbook/logger/index.md)