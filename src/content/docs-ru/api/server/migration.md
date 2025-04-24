# Migration

`Migration` — это класс скриптов обновления NocoBase, который обычно используется для синхронизации изменений, связанных с базой данных.

## Свойства экземпляра

### `appVersion`

Номер версии текущего приложения. Скрипт будет выполнен только в случае соответствия версии.

```ts
export default class extends Migration {
  appVersion = '<=1.0.0-alpha.1';
  // ...
}
```

### `on`

Момент выполнения скрипта обновления. Значение — это событие жизненного цикла `Application`, по умолчанию `afterLoad`. См. [Application - события](./application.md#события).

```ts
export default class extends Migration {
  on = 'afterLoad';
  // ...
}
```

### `app`

Экземпляр `Application` текущего приложения. См. [Application](./application.md).

### `pm`

Экземпляр `PluginManager` текущего приложения. См. [PluginManager](./plugin-manager.md).

### `plugin`

Экземпляр `Plugin` текущего плагина. См. [Plugin](./plugin.md).

### `db`

Экземпляр `DataBase` текущего приложения. См. [DataBase](../database/index.md).

### `sequelize`

Экземпляр `Sequelize`. См. <a href="https://sequelize.org/" target="_blank">Sequelize</a>.

### `queryInterface`

См. <a href="https://sequelize.org/docs/v6/other-topics/query-interface/" target="_blank">Sequelize - Query Interface</a>.

### Методы экземпляра

### `up()`

Метод выполнения обновления.

### `down()`

Метод выполнения отката изменений.