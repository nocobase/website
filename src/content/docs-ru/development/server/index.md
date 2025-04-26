# Обзор

При инициализации пустого плагина структура каталогов на стороне сервера выглядит следующим образом:

```bash
|- /plugin-sample-hello
  |- /src              # Исходный код плагина
    |- /server
      |- collections   # Директория по соглашению, конфигурации таблиц данных плагина
      |- commands      # Директория по соглашению, пользовательские команды
      |- migrations    # Директория по соглашению, файлы миграций
      |- plugin.ts     # Класс плагина
      |- index.ts      # Точка входа на стороне сервера
  |- package.json
  |- server.d.ts
  |- server.js
```

## Plugin

`plugin.ts` предоставляет вызов различных методов жизненного цикла плагина.

```ts
import { Plugin } from '@nocobase/server';

export class PluginDemoServer extends Plugin {
  async afterAdd() {
    // После регистрации плагина через pm.add. В основном используется для размещения обработчиков события beforeLoad приложения.
    this.app.on('beforeLoad');
  }
  async beforeLoad() {
    // Пользовательские классы или методы
    this.db.registerFieldTypes();
    this.db.registerModels();
    this.db.registerRepositories();
    this.db.registerOperators();
    // Прослушивание событий
    this.app.on();
    this.db.on();
  }
  async load() {
    // Определение resource
    this.resourcer.define();
    // действие ресурса (resource action)
    this.resourcer.registerActions();
    // Регистрация middleware
    this.resourcer.use();
    this.acl.use();
    this.app.use();

    this.app.i18n;
  }
  async install() {
    // Логика установки
  }
  async afterEnable() {
    // После активации
  }
  async afterDisable() {
    // После отключения
  }
  async remove() {
    // Логика удаления
  }
}

export default MyPlugin;
```

## Жизненный цикл плагина

<img alt="Жизненный цикл плагина" src="./image.png" style="width: 320px;" />

- После инициализации плагина срабатывает событие `afterAdd`, однако в этот момент другие плагины могут быть ещё не проинициализированы.
- В методе `beforeLoad` все активированные плагины уже проинициализированы, и можно получить их экземпляры через `app.pluginManager.get()`.
- В методе `load` выполнены все методы `beforeLoad` у всех плагинов.

## Часто используемые свойства и методы в классе плагина

| API                              | Описание           |
| -------------------------------- | ------------------ |
| this.name                        | Имя плагина        |
| this.enabled                     | Активирован        |
| this.installed                   | Установлен         |
| this.app                         | Экземпляр приложения |
| this.pm                          | Экземпляр менеджера плагинов |
| this.db                          | Экземпляр базы данных |
| this.resourcer                   | Менеджер ресурсов  |
| this.acl                         | Контроль доступа   |
| this.log                         | Логирование        |
| this.app.i18n                    | Интернационализация |
| this.db.registerFieldTypes()     | Регистрация типов полей |
| this.db.registerModels()         | Регистрация моделей (Model) |
| this.db.registerRepositories()   | Регистрация репозиториев (Repository) |
| this.db.registerOperators()      | Регистрация пользовательских операторов |
| this.app.on()                    | События приложения |
| this.db.on()                     | События базы данных |
| this.db.collection()             | Настройка таблицы данных |
| this.db.import()                 | Импорт конфигурации таблицы |
| this.db.addMigrations()          | Миграции           |
| this.resourcer.registerActions() | Регистрация действий над ресурсами |
| this.resourcer.use()             | Middleware         |
| this.acl.use()                   | Middleware         |
| this.app.use()                   | Middleware         |
| this.app.command()               | Командная строка   |
