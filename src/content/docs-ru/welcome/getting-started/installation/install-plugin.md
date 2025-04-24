# Как установить сторонние плагины

NocoBase предоставляет набор предустановленных плагинов для использования, а также поддерживает установку сторонних плагинов. Вы можете установить их следующими способами:

- Установка через интерфейс;
- Установка через командную строку;
- Установка предустановленных плагинов.

## Установка через интерфейс

:::warning
- Плагины, добавленные через интерфейс, хранятся в каталоге `storages/plugins` и должны быть предварительно скомпилированными, без необходимости установки дополнительных зависимостей.
:::

![20240424135049](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240424135049.png)

После добавления плагина его необходимо активировать, чтобы использовать.

![20240424175655](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240424175655.png)

## Установка через командную строку

Добавьте локально доступный плагин в приложение.

```bash
yarn pm add <packageName> # Этот метод часто используется для добавления плагинов, находящихся в локальной разработке
```

Если вам нужно сначала скачать, распаковать и затем добавить плагин в приложение (плагины хранятся в каталоге `storages/plugins`), вы можете использовать следующие способы:

```bash
# Скачивание с удаленного npm registry и добавление в приложение
yarn pm add <packageName> --registry=<registry>
# Скачивание с удаленного URL и добавление в приложение
yarn pm add <url>
# Распаковка локального архива и добавление в приложение
yarn pm add <filePath>
```

:::warning
- При использовании Docker-версии необходимо сначала войти в контейнер Docker, а затем выполнить команду `pm add`.
:::

Пример:

```bash
# Добавление локального плагина в приложение
yarn pm add @nocobase/plugin-data-source-external-mariadb
# Скачивание с удаленного npm registry и добавление в приложение
yarn pm add @nocobase/plugin-data-source-external-mariadb --registry=https://pkg.nocobase.com/
# Скачивание с удаленного URL и добавление в приложение
yarn pm add https://registry.npmmirror.com/@nocobase/plugin-sample-hello/-/plugin-sample-hello-0.21.0-alpha.15.tgz
# Распаковка локального архива и добавление в приложение
yarn pm add /downloads/plugin-custom-brand-0.21.0-alpha.15.tgz
```

Команда `pm add` используется только для добавления плагинов. Чтобы использовать плагин, его необходимо активировать с помощью команды `pm enable`.

```bash
yarn pm enable <packageName>
```

Пример:

```bash
yarn pm enable @nocobase/plugin-data-source-external-mariadb @nocobase/plugin-custom-brand
```

## Установка предустановленных плагинов

Для удобства установки плагинов предусмотрены две переменные окружения, которые используются для настройки предустановленных плагинов. Эти плагины автоматически добавляются, устанавливаются или обновляются при установке или обновлении приложения.

- [APPEND_PRESET_LOCAL_PLUGINS](/welcome/getting-started/env#append_preset_local_plugins): используется для добавления предустановленных неактивных плагинов.
- [APPEND_PRESET_BUILT_IN_PLUGINS](/welcome/getting-started/env#append_preset_built_in_plugins): используется для добавления встроенных плагинов, которые устанавливаются по умолчанию.

:::warning
- После настройки переменных окружения для предустановленных плагинов необходимо выполнить команду `nocobase install` или `nocobase upgrade`, чтобы плагины автоматически добавились или установились.
- Убедитесь, что при выполнении команд `nocobase install` или `nocobase upgrade` плагины уже загружены локально и доступны в каталоге `node_modules`. Вы можете ознакомиться с [организацией плагинов](/development/plugin), чтобы узнать больше о плагинах.
:::

**Пример**

#### 1. Добавьте следующие плагины в список предустановленных плагинов, по умолчанию они не будут активированы.

```bash
APPEND_PRESET_LOCAL_PLUGINS=@nocobase/plugin-data-source-external-postgres,@nocobase/plugin-data-source-external-mysql,@nocobase/plugin-data-source-external-mariadb
```

#### 2. Рекомендуется объявлять предустановленные плагины через зависимости (dependencies) в файле `package.json` вашего проекта.

Вы можете добавить объявление плагинов и загрузить их с помощью команды `yarn add`:

```bash
yarn add @nocobase/plugin-data-source-external-postgres @nocobase/plugin-data-source-external-mysql @nocobase/plugin-data-source-external-mariadb -W
```

Или вручную добавьте их в файл `package.json`, а затем загрузите плагины с помощью команды `yarn install`:

```ts
{
  "dependencies": {
    "@nocobase/plugin-data-source-external-postgres": "0.21.0-alpha.15",
    "@nocobase/plugin-data-source-external-mysql": "0.21.0-alpha.15",
    "@nocobase/plugin-data-source-external-mariadb": "0.21.0-alpha.15",
  }
}
```

#### 3. Наконец, не забудьте выполнить команду `nocobase install` или `nocobase upgrade`.

Установка или переустановка:

```bash
# Установка
yarn nocobase install
# Переустановка
yarn nocobase install -f
```

Если приложение уже установлено, выполните команду обновления:

```bash
yarn nocobase upgrade
```