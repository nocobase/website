# Логи

## Введение

Логи являются важным инструментом для выявления проблем в системе. Логи на стороне сервера NocoBase включают журналы запросов к API и логи работы системы. Поддерживаются такие настройки, как уровень логирования, стратегия ротации, размер файлов и формат вывода. В этом документе описываются основные аспекты логирования на стороне сервера NocoBase, а также функции, предоставляемые плагином логов, такие как упаковка и скачивание серверных логов.

## Настройка логов

Параметры, связанные с логами, такие как уровень логирования, способ вывода и формат, можно настроить через [переменные окружения](../../welcome/getting-started/env.md#logger_transport).

## Форматы логов

NocoBase поддерживает 4 различных формата логов.

### `console`

Формат по умолчанию для среды разработки, сообщения отображаются с цветовым выделением.

```
2023-12-30 22:40:06 [info ] response                                     method=GET path=/api/uiSchemas:getJsonSchema/nocobase-admin-menu res={"status":200} action={"actionName":"getJsonSchema","resourceName":"uiSchemas","params":{"filterByTk":"nocobase-admin-menu","resourceName":"uiSchemas","resourceIndex":"nocobase-admin-menu","actionName":"getJsonSchema"}} userId=1 status=200 cost=5 app=main reqId=ccf4e3bd-beb0-4350-af6e-b1fc1d9b6c3f
2023-12-30 22:43:12 [debug] Database dialect: mysql                      module=application method=install app=main reqId=31ffa8b5-f377-456b-a295-0c8a28938228
2023-12-30 22:43:12 [warn ] app is installed                             module=application method=install app=main reqId=31ffa8b5-f377-456b-a295-0c8a28938228
```

### `json`

Формат по умолчанию для производственной среды.

```json
{
  "level": "info",
  "timestamp": "2023-12-26 22:04:56",
  "reqId": "7612ef42-58e8-4c35-bac2-2e6c9d8ec96e",
  "message": "response",
  "method": "POST",
  "path": "/api/authenticators:publicList",
  "res": { "status": 200 },
  "action": {
    "actionName": "publicList",
    "resourceName": "authenticators",
    "params": { "resourceName": "authenticators", "actionName": "publicList" }
  },
  "status": 200,
  "cost": 16
}
```

### `logfmt`

> https://brandur.org/logfmt.

```
level=info timestamp=2023-12-21 14:18:02 reqId=8b59a40d-68ee-4c97-8001-71a47a92805a
message=response method=POST path=/api/authenticators:publicList res={"status":200}
action={"actionName":"publicList","resourceName":"authenticators","params":{"resourceName":"authenticators","actionName":"publicList"}}
userId=undefined status=200 cost=14
```

### `delimiter`

Разделитель `|` используется для разделения.

```
info|2023-12-26 22:07:09|13cd16f0-1568-418d-ac37-6771ee650e14|response|POST|/api/authenticators:publicList|{"status":200}|{"actionName":"publicList","resourceName":"authenticators","params":{"resourceName":"authenticators","actionName":"publicList"}}||200|25
```

## Каталог логов

Основная структура каталогов файлов логов NocoBase:

- `storage/logs` - Директория вывода логов
  - `main` - Имя основного приложения
    - `request_YYYY-MM-DD.log` - Логи запросов
    - `system_YYYY-MM-DD.log` - Системные логи
    - `system_error_YYYY-MM-DD.log` - Логи системных ошибок
    - `sql_YYYY-MM-DD.log` - Логи выполнения SQL
    - ...
  - `sub-app` - Имя подприложения
    - `request_YYYY-MM-DD.log`
    - ...

## Файлы логов

### Логи запросов

`request_YYYY-MM-DD.log`, логи запросов и ответов API.

| Поле          | Описание                               |
| ------------- | -------------------------------------- |
| `level`       | Уровень логирования                    |
| `timestamp`   | Время записи лога `YYYY-MM-DD hh:mm:ss` |
| `message`     | `request` или `response`               |
| `userId`      | Присутствует только в `response`        |
| `method`      | Метод запроса                          |
| `path`        | Путь запроса                           |
| `req` / `res` | Содержимое запроса/ответа               |
| `action`      | Запрашиваемый ресурс и параметры        |
| `status`      | Код состояния ответа                    |
| `cost`        | Время выполнения запроса                |
| `app`         | Имя текущего приложения                 |
| `reqId`       | ID запроса                             |

:::info{title=Примечание}
`reqId` передается на фронтэнд через заголовок ответа `X-Request-Id`.
:::

### Системные логи

`system_YYYY-MM-DD.log`, логи работы системы, включая приложение, middleware и плагины. Логи уровня `error` дополнительно выводятся в файл `system_error_YYYY-MM-DD.log`.

| Поле        | Описание                               |
| ----------- | -------------------------------------- |
| `level`     | Уровень логирования                    |
| `timestamp` | Время записи лога `YYYY-MM-DD hh:mm:ss` |
| `message`   | Сообщение лога                         |
| `module`    | Модуль                                 |
| `submodule` | Подмодуль                              |
| `method`    | Вызываемый метод                       |
| `meta`      | Дополнительная информация (в формате JSON) |
| `app`       | Имя текущего приложения                 |
| `reqId`     | ID запроса                             |

### Логи выполнения SQL

`sql_YYYY-MM-DD.log`, логи выполнения SQL-запросов к базе данных. Для операторов `INSERT INTO` сохраняются только первые 2000 символов.

| Поле        | Описание                               |
| ----------- | -------------------------------------- |
| `level`     | Уровень логирования                    |
| `timestamp` | Время записи лога `YYYY-MM-DD hh:mm:ss` |
| `sql`       | SQL-запрос                             |
| `app`       | Имя текущего приложения                 |
| `reqId`     | ID запроса                             |

## Скачивание архива логов

<PluginInfo name="logger"></PluginInfo>

1. Перейдите на страницу управления логами.
2. Выберите файлы логов, которые хотите скачать.
3. Нажмите кнопку "Скачать" (Download).

![2024-04-10_10-50-50](https://static-docs.nocobase.com/2024-04-10_10-50-50.png)

## Связанные документы

- [Разработка плагинов - Серверная часть - Логи](../../development/server/logger)
- [Справочник API - @nocobase/logger](../../api/logger)
