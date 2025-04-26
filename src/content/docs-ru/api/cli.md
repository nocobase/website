# @nocobase/cli

NocoBase CLI призван помочь вам разрабатывать, собирать и развертывать приложения NocoBase.

<Alert>

NocoBase CLI поддерживает два режима работы: ts-node и node.

- Режим ts-node (по умолчанию): используется для среды разработки, поддерживает компиляцию в реальном времени, но имеет более медленный отклик.
- Режим node: используется для рабочей среды, обеспечивает быстрый отклик, но перед этим необходимо выполнить команду `yarn nocobase build`, чтобы скомпилировать весь исходный код.

</Alert>

## Инструкция по использованию

```bash
$ yarn nocobase -h

Использование: nocobase [команда] [опции]

Опции:
  -h, --help

Команды:
  console
  db:auth               Проверка успешности подключения к базе данных
  db:sync               Генерация связанных таблиц и полей на основе конфигурации collections
  install               Установка
  start                 Запуск приложения в рабочей среде
  build                 Компиляция и сборка
  clean                 Удаление скомпилированных файлов
  dev                   Запуск приложения в среде разработки с поддержкой компиляции в реальном времени
  doc                   Разработка документации
  test                  Тестирование
  umi
  upgrade               Обновление
  migrator              Миграция данных
  pm                    Менеджер плагинов
  help
```

## Применение в шаблоне проекта

В разделе `scripts` файла `package.json` шаблона проекта содержится следующее:

```json
{
  "scripts": {
    "dev": "nocobase dev",
    "start": "nocobase start",
    "clean": "nocobase clean",
    "build": "nocobase build",
    "test": "nocobase test",
    "pm": "nocobase pm",
    "postinstall": "nocobase postinstall"
  }
}
```

## Расширение командной строки

NocoBase CLI построен на базе [commander](https://github.com/tj/commander.js), и вы можете свободно расширять команды. Расширяемые команды могут быть добавлены в файл `app/server/index.ts`:

```ts
const app = new Application(config);

app.command('hello').action(() => {});
```

Или добавить в плагине:

```ts
class MyPlugin extends Plugin {
  beforeLoad() {
    this.app.command('hello').action(() => {});
  }
}
```

Запуск в терминале

```bash
$ yarn nocobase hello
```

## Встроенные команды

Упорядочены по частоте использования.

### `dev`

В среде разработки запускает приложение с возможностью компиляции кода в реальном времени.

<Alert>
Если NocoBase не установлен, он будет установлен автоматически (см. команду install).
</Alert>

```bash
Использование: nocobase dev [опции]

Опции:
  -p, --port [port]       Порт для запуска приложения
  --client                Запустить только клиентскую часть
  --server                Запустить только серверную часть
  -h, --help              Справка по команде
```

Пример

```bash
# Запуск приложения в среде разработки с компиляцией в реальном времени
yarn nocobase dev
# Запуск только серверной части
yarn nocobase dev --server
# Запуск только клиентской части
yarn nocobase dev --client
```

### `start`

В рабочей среде запускает приложение, код должен быть предварительно собран с помощью `yarn build`.

<Alert>

- Если NocoBase не установлен, он будет установлен автоматически (см. команду install).
- При изменении исходного кода требуется повторная сборка (см. команду build).

</Alert>

```bash
$ yarn nocobase start -h

Использование: nocobase start [опции]

Опции:
  -p, --port
  -s, --silent
  -h, --help
```

Пример

```bash
# Запуск приложения в рабочей среде
yarn nocobase start
```

### `install`

Установка

```bash
$ yarn nocobase install -h

Использование: nocobase install [опции]

Опции:
  -f, --force
  -c, --clean
  -s, --silent
  -l, --lang [lang]
  -e, --root-email <rootEmail>
  -p, --root-password <rootPassword>
  -n, --root-nickname [rootNickname]
  -h, --help
```

Пример

```bash
# Первоначальная установка
yarn nocobase install -l zh-CN -e admin@nocobase.com -p admin123
# Удалить все таблицы данных NocoBase и переустановить
yarn nocobase install -f -l zh-CN -e admin@nocobase.com -p admin123
# Очистить базу данных и переустановить
yarn nocobase install -c -l zh-CN -e admin@nocobase.com -p admin123
```

<Alert>

Разница между `-f/--force` и `-c/--clean`

- `-f/--force` удаляет таблицы данных NocoBase.
- `-c/--clean` очищает всю базу данных, при этом удаляются все таблицы.

</Alert>

### `upgrade`

Обновление

```bash
yarn nocobase upgrade
```

### `test`

Тестирование, использование аналогично vitest. Отличия от запуска vitest напрямую:

- При указании пути автоматически определяется клиентская или серверная часть; для клиентской части путь должен содержать `/client/`.
- Тесты серверной части по умолчанию выполняются в режиме `--single-thread`. Чтобы отключить этот режим, добавьте `--single-thread=false`.
- По умолчанию используется флаг `--run`, тесты завершают выполнение после завершения процесса. Если требуется следить за изменениями, добавьте `--watch`.

```bash
$ nocobase test -h
vitest/1.0.4

Использование:
  $ vitest [...filters]
```

Примеры

```bash
# Запуск всех тестов, клиентская и серверная части выполняются параллельно в двух процессах vitest
yarn test

# Запуск тестов, связанных с клиентской частью
yarn test --client
# Эквивалентно
yarn cross-env TEST_ENV=client-side vitest

# Запуск тестов, связанных с серверной частью
yarn test --server
# Эквивалентно
yarn cross-env TEST_ENV=server-side vitest

# Указание директории или файла
yarn test your/path/src/__tests__/test-file.test.ts
# Для клиентских файлов путь должен содержать /client/
yarn test your/path/client/src/__tests__/test-file.test.ts
```

### `build`

Перед развертыванием кода в рабочей среде необходимо скомпилировать и собрать исходный код. Если код был изменен, требуется повторная сборка.

```bash
# Все пакеты
yarn nocobase build
# Указанные пакеты
yarn nocobase build app/server app/client
```

### `clean`

Удаление скомпилированных файлов

```bash
yarn clean
# Эквивалентно
yarn rimraf -rf packages/*/*/{lib,esm,es,dist}
```

### `doc`

Разработка документации

```bash
# Запуск документации
yarn doc --lang=zh-CN # Эквивалентно yarn doc dev
# Сборка документации, результат по умолчанию выводится в каталог ./docs/dist/
yarn doc build
# Просмотр итогового результата документации из директории dist
yarn doc serve --lang=zh-CN
```

### `db:auth`

Проверка успешности подключения к базе данных

```bash
$ yarn nocobase db:auth -h

Использование: nocobase db:auth [опции]

Опции:
  -r, --retry [retry]   Количество попыток повтора
  -h, --help            Показать справку по команде
```

### `db:sync`

Генерация таблиц и полей на основе конфигурации collections

```bash
$ yarn nocobase db:sync -h

Использование: nocobase db:sync [опции]

Опции:
  -f, --force           Принудительное выполнение
  -h, --help            Показать справку по команде
```

### `migrator`

Миграция данных

```bash
$ yarn nocobase migrator

Позиционные аргументы:
  <command>
    up        Применить ожидающие миграции
    down      Откатить миграции
    pending   Список ожидающих миграций
    executed  Список выполненных миграций
    create    Создать файл миграции
```

### `pm`

Менеджер плагинов

```bash
# Создание плагина
yarn pm create hello
# Регистрация плагина
yarn pm add hello
# Активация плагина
yarn pm enable hello
# Отключение плагина
yarn pm disable hello
# Удаление плагина
yarn pm remove hello
```

Не реализовано

```bash
# Обновление плагина
yarn pm upgrade hello
# Публикация плагина
yarn pm publish hello
```

### `umi`

`app/client` построен на основе [umi](https://umijs.org/), и вы можете использовать `nocobase umi` для выполнения других связанных команд.

```bash
# Генерация кэша .umi, необходимого для разработки
yarn nocobase umi generate tmp
```

### `help`

Команда справки, также доступна через параметры `-h` и `--help`

```bash
# Просмотр всех CLI
yarn nocobase help
# Можно использовать -h
yarn nocobase -h
# Или --help
yarn nocobase --help
# Просмотр опций команды db:sync
yarn nocobase db:sync -h
```
```
