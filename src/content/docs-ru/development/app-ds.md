# Структура каталогов проекта

Будь то приложение NocoBase, созданное с помощью [Git-исходного кода](/welcome/getting-started/installation/git-clone), или с использованием [create-nocobase-app](/welcome/getting-started/installation/create-nocobase-app), структура каталогов будет одинаковой. Она выглядит следующим образом:

```bash
├── my-nocobase-app
  ├── packages        # Пакеты в разработке
    ├── plugins       # Плагины в разработке
  ├── storage         # Используется для хранения файлов базы данных, вложений, кэша и т.д.
    ├── backups       # Директория резервных копий
    ├── plugins       # Готовые к использованию плагины (уже скомпилированы)
    ├── tar           # Место для сохранения через yarn build --tar
    ├── uploads       # Локальная директория хранения
  ├── .env            # Переменные окружения
  ├── .env.e2e        # Переменные окружения для e2e тестирования (yarn e2e test)
  ├── .env.test       # Переменные окружения для модульного тестирования (yarn test)
  ├── lerna.json
  ├── package.json
  ├── playwright.config.ts
  ├── tsconfig.json
  ├── tsconfig.server.json
  ├── vitest.config.mts
```

## Расположение плагинов

Плагины в разработке находятся в директории `packages/plugins` и организованы как npm пакеты. Пример структуры показан ниже:

```bash
|- /packages/
  |- /plugins/
    |- /@nocobase/
      |- /plugin-hello1/
      |- /plugin-hello2/
    |- /my-nocobase-plugin-hello1/
    |- /my-nocobase-plugin-hello2/
```

Плагины, добавленные через интерфейс, хранятся в директории `storage/plugins` и также организованы как npm пакеты. Пример структуры показан ниже:

```bash
|- /storage/
  |- /plugins/
    |- /@nocobase/
      |- /plugin-hello1/
      |- /plugin-hello2/
    |- /my-nocobase-plugin-hello1/
    |- /my-nocobase-plugin-hello2/
```

Встроенные плагины или те, которые объявлены в `dependencies` файла `package.json`, находятся в директории `node_modules`. Пример структуры показан ниже:

```bash
|- /node_modules/
  |- /@nocobase/
    |- /plugin-acl/
    |- /plugin-auth/
```

## Структура каталога плагина

Можно быстро создать пустой плагин с помощью команды `yarn pm create @my-project/plugin-hello`. Структура каталога выглядит следующим образом:

```bash
|- /packages/plugins/@my-project/plugin-hello
|- /dist             # Результат сборки
  |- /src              # Исходный код плагина
    |- /client
      |- plugin.ts     # Класс плагина
      |- index.ts      # Точка входа на стороне клиента
    |- /locale         # Условная директория, каталог файлов многоязычной поддержки для клиента и сервера
    |- /swagger        # Условная директория, документация Swagger
    |- /server
      |- collections   # Условная директория, конфигурации таблиц данных плагина
      |- commands      # Условная директория, пользовательские команды
      |- migrations    # Условная директория, файлы миграций
      |- plugin.ts     # Класс плагина
      |- index.ts      # Точка входа на стороне сервера
    |- index.ts
  |-.npmignore         # Файлы или директории, которые должны быть проигнорированы при публикации плагина
  |- client.d.ts
  |- client.js
  |- package.json
  |- server.d.ts
  |- server.js
```
