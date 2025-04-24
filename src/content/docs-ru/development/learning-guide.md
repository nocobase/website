# Руководство по учебному плану

## 1. Начните с установки и запуска NocoBase

**Связанная документация: <a href="/welcome/getting-started/installation" target="_blank">Быстрый старт</a>**

Основные команды включают:

Скачивание

```bash
yarn create/git clone
yarn install
```

Установка

```bash
yarn nocobase install
```

Запуск

```bash
# для разработки
yarn dev

# для продакшена
yarn build
yarn start
```

## 2. Ознакомьтесь с основными функциями, предоставляемыми платформой NocoBase

**Связанная документация: <a href="/manual" target="_blank">Руководство пользователя</a>**

Основные три части включают:

- UI-дизайнер: включает блоки, поля и операции
- Менеджер плагинов: расширение функциональных потребностей
- Центр конфигурации: предоставляет функции настройки активированных плагинов

## 3. Глубже изучите использование менеджера плагинов

**Связанная документация: <a href="/development" target="_blank">Разработка плагинов</a>**

NocoBase предоставляет простой интерфейс для менеджера плагинов, но через интерфейс можно только управлять локальными плагинами (включать, отключать и удалять). Полный набор операций доступен через CLI.

```bash
# Создать плагин
yarn pm create hello
# Зарегистрировать плагин
yarn pm add hello
# Активировать плагин
yarn pm enable hello
# Отключить плагин
yarn pm disable hello
# Удалить плагин
yarn pm remove hello
```

Больше примеров плагинов можно найти в packages/samples. Изучив плагин samples, вы сможете понять базовое использование плагинов и сможете переходить к их разработке.

## 4. Разработка нового плагина, изучение распределения модулей

**Связанная документация: <a href="/development/guide" target="_blank">Руководство по расширению</a>**

В главе [Написание первого плагина](/development/your-fisrt-plugin) кратко описывается основной процесс разработки плагина, но для более быстрого погружения в детали плагина вам может потребоваться изучить распределение модулей в фреймворке NocoBase:

- Server
  - Collections & Fields: в основном используется для настройки системных таблиц; рекомендуется настраивать бизнес-таблицы в «Центре конфигурации - Настройка таблиц».
  - Resources & Actions: в основном используется для расширения Action API.
  - Middleware: промежуточное ПО.
  - Events: события.
  - I18n: интернационализация на стороне сервера.
- Client
  - UI Schema Designer: дизайнер страниц.
  - UI Router: при необходимости создания пользовательских страниц.
  - Plugin Settings Manager: предоставляет страницу настроек для плагинов.
  - I18n: интернационализация на стороне клиента.
- Devtools
  - Commands: пользовательские команды CLI.
  - Migrations: скрипты миграции.

## 5. Ознакомьтесь с основными API каждого модуля

**Связанная документация: <a href="/api" target="_blank">Справочник API</a>**

Просмотрите packages/samples для каждого модуля, чтобы лучше понять использование основных API модулей.

- Server
  - Collections & Fields
    - db.collection
    - db.import
  - Resources & Actions
    - app.resourcer.define
    - app.resourcer.registerActions
  - Middleware
    - app.use
    - app.acl.use
    - app.resourcer.use
  - Events
    - app.on
    - app.db.on
  - I18n
    - app.i18n
    - ctx.i18n
- Client
  - UI Schema Designer
    - SchemaComponent
    - SchemaInitializer
    - SchemaSettings
  - UI Router
    - RouteSwitchProvider
    - RouteSwitch
  - I18n
    - app.i18n
    - useTranslation
- Devtools
  - Commands
    - app.command
    - app.findCommand
  - Migrations
    - app.db.addMigration
    - app.db.addMigrations
