# Логи

Логи NocoBase основаны на библиотеке <a href="https://github.com/winstonjs/winston" target="_blank">Winston</a>. По умолчанию NocoBase разделяет логи на журнал запросов API, системные логи и логи выполнения SQL-запросов, где журналы запросов API и логи SQL генерируются внутри приложения. Разработчикам плагинов обычно нужно только регистрировать логи, связанные с работой их плагинов.

В этом документе основное внимание уделяется тому, как создавать и выводить логи при разработке плагинов. Дополнительную информацию о логах можно найти здесь: [Плагин логирования](../../plugins/logger/index.md).

## Методы вывода логов по умолчанию

NocoBase предоставляет методы для записи системных логов, которые регистрируются в соответствии с определенными полями и одновременно выводятся в указанный файл. Подробнее: [Плагин логирования - Системные логи](../../plugins/logger/index.md#системные-логи).

```ts
// Метод вывода логов по умолчанию
app.log.info("message");

// Использование в middleware
async function (ctx, next) {
  ctx.log.info("message");
}

// Использование в плагине
class CustomPlugin extends Plugin {
  async load() {
    this.log.info("message");
  }
}
```

Все вышеперечисленные методы следуют следующему формату использования:

Первый параметр — это сообщение лога, второй параметр — необязательный объект `metadata`, который может содержать любые пары ключ-значение. При этом поля `module`, `submodule` и `method` будут извлечены как отдельные поля, а остальные поля попадут в поле `meta`.

```ts
app.log.info('message', {
  module: 'module',
  submodule: 'submodule',
  method: 'method',
  key1: 'value1',
  key2: 'value2',
});
// => level=info timestamp=2023-12-27 10:30:23 message=message module=module submodule=submodule method=method meta={"key1": "value1", "key2": "value2"}

app.log.debug();
app.log.warn();
app.log.error();
```

## Вывод в другие файлы

Если вы хотите использовать системный метод вывода логов по умолчанию, но не хотите записывать их в стандартный файл, можно создать собственный экземпляр системного логгера с помощью `createSystemLogger`.

```ts
import { createSystemLogger } from '@nocobase/logger';

const logger = createSystemLogger({
  dirname: '/pathto/',
  filename: 'xxx',
  seperateError: true, // Определяет, будут ли логи уровня error отдельно выводиться в файл 'xxx_error.log'
});
```

## Пользовательские логи

Если вы не хотите использовать методы вывода, предоставляемые системой, и предпочитаете использовать нативные методы Winston, можно создать логи следующим способом.

### `createLogger`

```ts
import { createLogger } from '@nocobase/logger';

const logger = createLogger({
  // параметры (options)
});
```

`options` расширяет базовые параметры `winston.LoggerOptions`.

- `transports` — можно использовать `'console' | 'file' | 'dailyRotateFile'` для применения предустановленных методов вывода.
- `format` — можно использовать `'logfmt' | 'json' | 'delimiter'` для применения предустановленных форматов вывода.

### `app.createLogger`

В сценариях с несколькими приложениями иногда требуется настроить пользовательские каталоги и файлы для вывода данных в папку с именем текущего приложения. Подробнее: [Плагин логирования - Каталог логов](../../plugins/logger/index.md#каталог-логов).

```ts
app.createLogger({
  dirname: '',
  filename: 'custom', // Вывод в /storage/logs/main/custom.log
});
```

### `plugin.createLogger`

Сценарии использования и способ применения аналогичны `app.createLogger`.

```ts
class CustomPlugin extends Plugin {
  async load() {
    const logger = this.createLogger({
      // Вывод в /storage/logs/main/custom-plugin/YYYY-MM-DD.log
      dirname: 'custom-plugin',
      filename: '%DATE%.log',
      transports: ['dailyRotateFile'],
    });
  }
}
```

## Связанные документы

- [Плагин логирования](../../plugins/logger/index.md)
- [Справочник API](../../api/logger.md)
