# Переменные окружения

## Глобальные переменные окружения

Сохраняются в файле `.env`.

### APP_ENV

Среда выполнения приложения. Значение по умолчанию: `development`. Возможные варианты:

- `production` — рабочая среда
- `development` — среда разработки

```bash
APP_ENV=production
```

### APP_KEY

Секретный ключ приложения, который используется для генерации токенов пользователей и других целей. Измените его на собственный ключ приложения и убедитесь, что он не раскрывается.

:::warning
Если значение APP_KEY изменено, старые токены станут недействительными.
:::

```bash
APP_KEY=app-key-test
```

### APP_PORT

Порт приложения. Значение по умолчанию: `13000`.

```bash
APP_PORT=13000
```

### API_BASE_PATH

Префикс адреса API NocoBase. Значение по умолчанию: `/api/`.

```bash
API_BASE_PATH=/api/
```

### API_BASE_URL

### DB_DIALECT

Тип базы данных. Значение по умолчанию: `sqlite`. Возможные варианты:

- `sqlite`
- `mariadb`
- `mysql`
- `postgres`

```bash
DB_DIALECT=mysql
```

### DB_STORAGE

Путь к файлу базы данных (используется при настройке SQLite).

```bash
# Относительный путь
DB_STORAGE=storage/db/nocobase.db
# Абсолютный путь
DB_STORAGE=/your/path/nocobase.db
```

### DB_HOST

Хост базы данных (необходимо настроить при использовании MySQL или PostgreSQL).

Значение по умолчанию: `localhost`.

```bash
DB_HOST=localhost
```

### DB_PORT

Порт базы данных (необходимо настроить при использовании MySQL или PostgreSQL).

- Порт по умолчанию для MySQL и MariaDB: `3306`
- Порт по умолчанию для PostgreSQL: `5432`

```bash
DB_PORT=3306
```

### DB_DATABASE

Имя базы данных (необходимо настроить при использовании MySQL или PostgreSQL).

```bash
DB_DATABASE=nocobase
```

### DB_USER

Пользователь базы данных (необходимо настроить при использовании MySQL или PostgreSQL).

```bash
DB_USER=nocobase
```

### DB_PASSWORD

Пароль базы данных (необходимо настроить при использовании MySQL или PostgreSQL).

```bash
DB_PASSWORD=nocobase
```

### DB_TABLE_PREFIX

Префикс таблиц базы данных.

```bash
DB_TABLE_PREFIX=nocobase_
```

### DB_UNDERSCORED

Определяет, следует ли преобразовывать имена таблиц и полей в стиль snake_case. Значение по умолчанию: `false`. Если используется база данных MySQL (MariaDB) и установлено значение `lower_case_table_names=1`, то параметр `DB_UNDERSCORED` должен быть установлен в `true`.

:::warning
При `DB_UNDERSCORED=true` реальные имена таблиц и полей в базе данных не будут соответствовать тем, что видны в интерфейсе. Например, поле `orderDetails` в базе данных будет представлено как `order_details`.
:::

### DB_TIMEZONE

Действительно только для MySQL (или MariaDB). Поля типа `timestamp` в MySQL поддерживают часовые пояса, но только в диапазоне 1970–2038 годов. Поэтому поля дат были изменены на тип `datetime` для лучшей совместимости. Однако сам тип `datetime` не поддерживает часовые пояса, поэтому требуется преобразование через переменную окружения `DB_TIMEZONE`.

:::warning
Если значение `DB_TIMEZONE` изменено, ранее созданные данные с датами не будут автоматически корректироваться под новый часовой пояс.
:::

### DB_LOGGING

Включение или отключение логирования базы данных. Значение по умолчанию: `off`. Возможные варианты:

- `on` — включить
- `off` — выключить

```bash
DB_LOGGING=on
```

### LOGGER_TRANSPORT

Способ вывода логов. Несколько значений разделяются запятыми. Значение по умолчанию в среде разработки: `console`, в рабочей среде: `console,dailyRotateFile`. Доступные варианты:

- `console` — вывод через `console.log`
- `file` — запись в файл
- `dailyRotateFile` — ротация файлов по дням

```bash
LOGGER_TRANSPORT=console,dailyRotateFile
```

### LOGGER_BASE_PATH

Путь для хранения логов на основе файлов. Значение по умолчанию: `storage/logs`.

```bash
LOGGER_BASE_PATH=storage/logs
```

### LOGGER_LEVEL

Уровень вывода логов. Значение по умолчанию в среде разработки: `debug`, в рабочей среде: `info`. Доступные варианты:

- `error`
- `warn`
- `info`
- `debug`
- `trace`

```bash
LOGGER_LEVEL=info
```

Уровень логирования базы данных — `debug`, который контролируется параметром `DB_LOGGING` и не зависит от `LOGGER_LEVEL`.

### LOGGER_MAX_FILES

Максимальное количество хранимых файлов логов.

- Если `LOGGER_TRANSPORT` установлен как `file`, значение по умолчанию: `10`.
- Если `LOGGER_TRANSPORT` установлен как `dailyRotateFile`, используется формат `[n]d` для обозначения дней. Значение по умолчанию: `14d`.

```bash
LOGGER_MAX_FILES=14d
```

### LOGGER_MAX_SIZE

Ротация логов по размеру.

- Если `LOGGER_TRANSPORT` установлен как `file`, единица измерения — байты (`byte`). Значение по умолчанию: `20971520 (20 * 1024 * 1024)`.
- Если `LOGGER_TRANSPORT` установлен как `dailyRotateFile`, можно использовать `[n]k`, `[n]m`, `[n]g`. По умолчанию не настроено.

```bash
LOGGER_MAX_SIZE=20971520
```

### LOGGER_FORMAT

Формат вывода логов. Значение по умолчанию в среде разработки: `console`, в рабочей среде: `json`. Доступные варианты:

- `console`
- `json`
- `logfmt`
- `delimiter`

```bash
LOGGER_FORMAT=json
```

Ссылка: [Форматы логов](../plugins/logger/index.md#форматы-логов)

### CACHE_DEFAULT_STORE

Уникальный идентификатор способа кэширования, указывает метод кэширования по умолчанию на стороне сервера. Значение по умолчанию: `memory`. Встроенные варианты:

- `memory`
- `redis`

```bash
CACHE_DEFAULT_STORE=memory
```

### CACHE_MEMORY_MAX

Максимальное количество элементов в памяти для кэширования. Значение по умолчанию: `2000`.

```bash
CACHE_MEMORY_MAX=2000
```

### CACHE_REDIS_URL

URL-адрес подключения к Redis (необязательно). Пример: `redis://localhost:6379`.

```bash
CACHE_REDIS_URL=redis://localhost:6379
```

### TELEMETRY_ENABLED

Включение сбора телеметрических данных. Значение по умолчанию: `off`.

```bash
TELEMETRY_ENABLED=on
```

### TELEMETRY_METRIC_READER

Сборщик метрик мониторинга, используемый по умолчанию: `console`. Другие значения должны соответствовать именам, зарегистрированным в плагинах сборщиков, например, `prometheus`. Несколько значений разделяются запятыми.

```bash
TELEMETRY_METRIC_READER=console,prometheus
```

### TELEMETRY_TRACE_PROCESSOR

Процессор данных трассировки по умолчанию: `console`. Другие значения должны соответствовать именам, зарегистрированным в плагинах процессоров. Несколько значений разделяются запятыми.

```bash
TELEMETRY_TRACE_PROCESSOR=console
```

## Экспериментальные переменные окружения

### APPEND_PRESET_LOCAL_PLUGINS

Используется для добавления предустановленных неактивированных плагинов. Значение — это имя пакета плагина (параметр `name` в `package.json`). Несколько плагинов разделяются запятыми.

:::info

1. Убедитесь, что плагины уже загружены локально и доступны в каталоге `node_modules`. Подробнее см. в разделе [Организация плагинов](/development/plugin).
2. После добавления переменной окружения необходимо выполнить инициализацию установки (`nocobase install`) или обновление (`nocobase upgrade`), чтобы плагины появились на странице менеджера плагинов.
   :::

```bash
APPEND_PRESET_LOCAL_PLUGINS=@my-project/plugin-foo,@my-project/plugin-bar
```

### APPEND_PRESET_BUILT_IN_PLUGINS

Используется для добавления встроенных плагинов, которые устанавливаются по умолчанию. Значение — это имя пакета плагина (параметр `name` в `package.json`). Несколько плагинов разделяются запятыми.

:::info

1. Убедитесь, что плагины уже загружены локально и доступны в каталоге `node_modules`. Подробнее см. в разделе [Организация плагинов](/development/plugin).
2. После добавления переменной окружения плагины будут автоматически установлены или обновлены во время инициализации (`nocobase install`) или обновления (`nocobase upgrade`).
   :::

```bash
APPEND_PRESET_BUILT_IN_PLUGINS=@my-project/plugin-foo,@my-project/plugin-bar
```

## Временные переменные окружения

При установке NocoBase можно использовать временные переменные окружения для помощи в процессе установки, например:

```bash
yarn cross-env \
  INIT_APP_LANG=zh-CN \
  INIT_ROOT_EMAIL=demo@nocobase.com \
  INIT_ROOT_PASSWORD=admin123 \
  INIT_ROOT_NICKNAME="Super Admin" \
  nocobase install

# Эквивалентно
yarn nocobase install \
  --lang=zh-CN  \
  --root-email=demo@nocobase.com \
  --root-password=admin123 \
  --root-nickname="Super Admin"

# Эквивалентно
yarn nocobase install -l zh-CN -e demo@nocobase.com -p admin123 -n "Super Admin"
```

### INIT_APP_LANG

Язык при установке. Значение по умолчанию: `en-US`. Возможные варианты:

- `en-US`
- `zh-CN`

```bash
yarn cross-env \
  INIT_APP_LANG=zh-CN \
  nocobase install
```

### INIT_ROOT_EMAIL

Электронная почта пользователя Root.

```bash
yarn cross-env \
  INIT_APP_LANG=zh-CN \
  INIT_ROOT_EMAIL=demo@nocobase.com \
  nocobase install
```

### INIT_ROOT_PASSWORD

Пароль пользователя Root.

```bash
yarn cross-env \
  INIT_APP_LANG=zh-CN \
  INIT_ROOT_EMAIL=demo@nocobase.com \
  INIT_ROOT_PASSWORD=admin123 \
  nocobase install
```

### INIT_ROOT_NICKNAME

Псевдоним (никнейм) пользователя Root.

```bash
yarn cross-env \
  INIT_APP_LANG=zh-CN \
  INIT_ROOT_EMAIL=demo@nocobase.com \
  INIT_ROOT_PASSWORD=admin123 \
  INIT_ROOT_NICKNAME="Super Admin" \
  nocobase install
```