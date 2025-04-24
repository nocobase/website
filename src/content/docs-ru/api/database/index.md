# База данных

## Обзор

Database — это инструмент взаимодействия с базой данных, предоставляемый Nocobase, который обеспечивает очень удобные функции для взаимодействия с базой данных в безкодовых и низкокодовых приложениях. В настоящее время поддерживаются следующие базы данных:

- SQLite 3.8.8+
- MySQL 8.0.17+
- PostgreSQL 10.0+

### Подключение к базе данных

В конструкторе `Database` можно настроить подключение к базе данных, передав параметр `options`.

```javascript
const { Database } = require('@nocobase/database');

// SQLite Параметры настройки базы данных
const database = new Database({
  dialect: 'sqlite',
  storage: 'path/to/database.sqlite'
})

// MySQL \ PostgreSQL Параметры конфигурации базы данных
const database = new Database({
  dialect: /* 'postgres' или 'mysql' */,
  database: 'database',
  username: 'username',
  password: 'password',
  host: 'localhost',
  port: 'port'
})

```

Подробные параметры конфигурации см. в [конструкторе](#конструктор).

### Определение модели данных

`Database` определяет структуру базы данных через `Collection`, где объект `Collection` представляет таблицу в базе данных.。

```javascript
// Определение Collection
const UserCollection = database.collection({
  name: 'users',
  fields: [
    {
      name: 'name',
      type: 'string',
    },
    {
      name: 'age',
      type: 'integer',
    },
  ],
});
```

После завершения определения структуры базы данных можно использовать метод `sync()`, чтобы синхронизировать структуру базы данных.

```javascript
await database.sync();
```

Более подробную информацию об использовании `Collection` можно найти в [Collection](/api/database/collection.md).

### Чтение и запись данных

`Database` выполняет операции с данными через `Repository`.。

```javascript
const UserRepository = UserCollection.repository();

// Создание
await UserRepository.create({
  name: 'Андрей',
  age: 18,
});

// Запрос
const user = await UserRepository.findOne({
  filter: {
    name: 'Андрей',
  },
});

// Изменение
await UserRepository.update({
  values: {
    age: 20,
  },
});

// Удаление
await UserRepository.destroy(user.id);
```

Более подробную информацию о методах CRUD для работы с данными можно найти в [Repository](/api/database/repository.md).

## Конструктор

**Сигнатура**

- `constructor(options: DatabaseOptions)`

Создает экземпляр базы данных.

**Параметры**

| Имя параметра          | Тип            | Значение по умолчанию | Описание                                                                                                            |
| ---------------------- | -------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `options.host`         | `string`       | `'localhost'`         | Хост базы данных                                                                                                    |
| `options.port`         | `number`       | -                     | Порт сервера базы данных, в зависимости от используемой базы данных есть значение по умолчанию                       |
| `options.username`     | `string`       | -                     | Имя пользователя базы данных                                                                                         |
| `options.password`     | `string`       | -                     | Пароль базы данных                                                                                                  |
| `options.database`     | `string`       | -                     | Имя базы данных                                                                                                     |
| `options.dialect`      | `string`       | `'mysql'`             | Тип базы данных                                                                                                     |
| `options.storage?`     | `string`       | `':memory:'`          | Режим хранения SQLite                                                                                               |
| `options.logging?`     | `boolean`      | `false`               | Включить логирование или нет                                                                                         |
| `options.define?`      | `Object`       | `{}`                  | Параметры определения таблицы по умолчанию                                                                          |
| `options.tablePrefix?` | `string`       | `''`                  | Расширение NocoBase, префикс имени таблицы                                                                          |
| `options.migrator?`    | `UmzugOptions` | `{}`                  | Расширение NocoBase, параметры менеджера миграций, см. реализацию [Umzug](https://github.com/sequelize/umzug/blob/main/src/types.ts#L15) |

## Методы, связанные с миграцией

### `addMigration()`

Добавление одного файла миграции.

**Сигнатура**

- `addMigration(options: MigrationItem)`

**Параметры**

| Имя параметра        | Тип               | Значение по умолчанию | Описание                   |
| -------------------- | ------------------ | --------------------- | -------------------------- |
| `options.name`       | `string`           | -                     | Имя файла миграции         |
| `options.context?`   | `string`           | -                     | Контекст файла миграции    |
| `options.migration?` | `typeof Migration` | -                     | Пользовательский класс миграции |
| `options.up`         | `Function`         | -                     | Метод `up` для миграции    |
| `options.down`       | `Function`         | -                     | Метод `down` для миграции  |

**Пример**

```ts
db.addMigration({
  name: '20220916120411-test-1',
  async up() {
    const queryInterface = this.context.db.sequelize.getQueryInterface();
    await queryInterface.query(/* your migration sqls */);
  },
});
```

### `addMigrations()`

Добавление файлов миграции из указанного каталога.

**Сигнатура**

- `addMigrations(options: AddMigrationsOptions): void`

**Параметры**

| Имя параметра        | Тип        | Значение по умолчанию | Описание                   |
| -------------------- | ---------- | --------------------- | -------------------------- |
| `options.directory`  | `string`   | `''`                  | Каталог с файлами миграции |
| `options.extensions` | `string[]` | `['js', 'ts']`        | Расширения файлов          |
| `options.namespace?` | `string`   | `''`                  | Пространство имен          |
| `options.context?`   | `Object`   | `{ db }`              | Контекст файлов миграции   |

**Пример**

```ts
db.addMigrations({
  directory: path.resolve(__dirname, './migrations'),
  namespace: 'test',
});
```

## Вспомогательные методы

### `inDialect()`

Определяет, соответствует ли тип текущей базы данных указанному типу.

**Сигнатура**

- `inDialect(dialect: string[]): boolean`

**Параметры**

| Имя параметра | Тип       | Значение по умолчанию | Описание                                             |
| ------------ | ---------- | --------------------- | ---------------------------------------------------- |
| `dialect`    | `string[]` | -                     | Тип базы данных, возможные значения: `mysql`/`postgres`/`sqlite` |

### `getTablePrefix()`

Получает префикс имени таблицы из конфигурации.

**Сигнатура**

- `getTablePrefix(): string`

## Конфигурация таблицы данных

### `collection()`

Определяет таблицу данных. Этот вызов аналогичен методу `define` в Sequelize, который создает структуру таблицы только в памяти. Для сохранения в базу данных необходимо вызвать метод `sync`.

**Сигнатура**

- `collection(options: CollectionOptions): Collection`

**Параметры**

Все параметры конфигурации `options` совпадают с конструктором класса `Collection`, см. [Collection](/api/server/database/collection#конструктор).

**События**

- `'beforeDefineCollection'`: Срабатывает перед определением таблицы.
- `'afterDefineCollection'`: Срабатывает после определения таблицы.

**Пример**

```ts
db.collection({
  name: 'books',
  fields: [
    {
      type: 'string',
      name: 'title',
    },
    {
      type: 'float',
      name: 'price',
    },
  ],
});

// синхронизировать коллекцию как таблицу в базу данных
await db.sync();
```

### `getCollection()`

Получить определенную таблицу данных.

**Сигнатура**

- `getCollection(name: string): Collection`

**Параметры**

| Имя параметра | Тип      | Значение по умолчанию | Описание   |
| -------------- | ---------- | ----------------------- | ---------- |
| `name`         | `string`   | -                       | Имя таблицы |

**Пример**

```ts
const collection = db.getCollection('books');
```

### `hasCollection()`

Проверяет, определена ли указанная таблица данных.

**Сигнатура**

- `hasCollection(name: string): boolean`

**Параметры**

| Имя параметра | Тип      | Значение по умолчанию | Описание   |
| -------------- | ---------- | ----------------------- | ---------- |
| `name`         | `string`   | -                       | Имя таблицы |

**Пример**

```ts
db.collection({ name: 'books' });

db.hasCollection('books'); // true

db.hasCollection('authors'); // false
```

### `removeCollection()`

Удаляет определенную таблицу данных. Удаление происходит только в памяти, для сохранения изменений требуется вызвать метод `sync`.

**Сигнатура**

- `removeCollection(name: string): void`

**Параметры**

| Имя параметра | Тип      | Значение по умолчанию | Описание    |
| -------------- | ---------- | ----------------------- | ----------- |
| `name`         | `string`   | -                       | Имя таблицы |

**События**

- `'beforeRemoveCollection'`: Срабатывает перед удалением таблицы.
- `'afterRemoveCollection'`: Срабатывает после удаления таблицы.

**Пример**

```ts
db.collection({ name: 'books' });

db.removeCollection('books');
```

### `import()`

Импортирует все файлы из указанного каталога в качестве конфигурации collection и загружает их в память.

**Сигнатура**

- `async import(options: { directory: string; extensions?: ImportFileExtension[] }): Promise<Map<string, Collection>>`

**Параметры**

| Имя параметра        | Тип       | Значение по умолчанию | Описание                  |
| -------------------- | ---------- | ---------------------- | ------------------------- |
| `options.directory`  | `string`   | -                      | Путь к импортируемому каталогу |
| `options.extensions` | `string[]` | `['ts', 'js']`         | Сканировать файлы с указанными расширениями |

**Пример**

`./collections/books.ts` Определение коллекции в файле выглядит следующим образом:

```ts
export default {
  name: 'books',
  fields: [
    {
      type: 'string',
      name: 'title',
    },
  ],
};
```

При загрузке плагина импортируются соответствующие настройки:

```ts
class Plugin {
  async load() {
    await this.app.db.import({
      directory: path.resolve(__dirname, './collections'),
    });
  }
}
```

## Регистрация и получение расширений

### `registerFieldTypes()`

Регистрирует пользовательские типы полей.

**Сигнатура**

- `registerFieldTypes(fieldTypes: MapOf<typeof Field>): void`

**Параметры**

`fieldTypes` представляет собой пару ключ-значение, где ключ — это название типа поля, а значение — класс типа поля.

**Пример**

```ts
import { Field } from '@nocobase/database';

class MyField extends Field {
  // ...
}

db.registerFieldTypes({
  myField: MyField,
});
```

### `registerModels()`

Регистрация пользовательского класса модели данных.

**Сигнатура**

- `registerModels(models: MapOf<ModelStatic<any>>): void`

**Параметры**

`models` представляет собой пару ключ-значение, где ключ — это название модели данных, а значение — класс модели данных.

**Пример**


```ts
import { Model } from '@nocobase/database';

class MyModel extends Model {
  // ...
}

db.registerModels({
  myModel: MyModel,
});

db.collection({
  name: 'myCollection',
  model: 'myModel',
});
```

### `registerRepositories()`

Регистрация пользовательского класса репозитория данных.

**Сигнатура**

- `registerRepositories(repositories: MapOf<RepositoryType>): void`

**Параметры**

`repositories` представляет собой пару ключ-значение, где ключ — это название репозитория данных, а значение — класс репозитория данных.

**Пример**

```ts
import { Repository } from '@nocobase/database';

class MyRepository extends Repository {
  // ...
}

db.registerRepositories({
  myRepository: MyRepository,
});

db.collection({
  name: 'myCollection',
  repository: 'myRepository',
});
```

### `registerOperators()`

Регистрация пользовательских операторов запросов данных.

**Сигнатура**

- `registerOperators(operators: MapOf<OperatorFunc>)`

**Параметры**

`operators` представляет собой пару ключ-значение, где ключ — это название оператора, а значение — функция для генерации сравнительного выражения оператора.

**Пример**

```ts
db.registerOperators({
  $dateOn(value) {
    return {
      [Op.and]: [
        { [Op.gte]: stringToDate(value) },
        { [Op.lt]: getNextDay(value) },
      ],
    };
  },
});

db.getRepository('books').count({
  filter: {
    createdAt: {
      // registered operator
      $dateOn: '2020-01-01',
    },
  },
});
```

### `getModel()`

Получение определенного класса модели данных. Если пользовательский класс модели не был зарегистрирован ранее, будет возвращен класс модели по умолчанию от Sequelize. Имя по умолчанию совпадает с именем, определенным для collection.

**Сигнатура**

- `getModel(name: string): Model`

**Параметры**

| Имя параметра | Тип      | Значение по умолчанию | Описание             |
| -------------- | ---------- | ----------------------- | -------------------- |
| `name`         | `string`   | -                       | Имя зарегистрированной модели |

**Пример**

```ts
db.registerModels({
  books: class MyModel extends Model {},
});

const ModelClass = db.getModel('books');

console.log(ModelClass.prototype instanceof MyModel); // true
```

Примечание: класс модели, полученный из collection, не строго равен классу модели, зарегистрированному ранее, а является наследником этого класса. Поскольку атрибуты класса модели Sequelize изменяются в процессе инициализации, NocoBase автоматически обрабатывает это отношение наследования. За исключением того, что классы не равны, все остальные определения могут использоваться нормально.

### `getRepository()`

Получение пользовательского класса репозитория данных. Если пользовательский класс репозитория данных не был зарегистрирован ранее, будет возвращен класс репозитория по умолчанию от NocoBase. Имя по умолчанию совпадает с именем, определенным для collection.

Класс репозитория данных в основном используется для операций добавления, удаления, изменения и запроса на основе модели данных; см. [репозиторий данных](/api/server/database/repository).

**Сигнатура**

- `getRepository(name: string): Repository`
- `getRepository(name: string, relationId?: string | number): Repository`

**Параметры**

| Имя параметра | Тип                  | Значение по умолчанию | Описание               |
| -------------- | --------------------- | ----------------------- | ------------------------ |
| `name`         | `string`              | -                       | Имя зарегистрированного репозитория |
| `relationId`   | `string` \| `number`  | -                       | Значение внешнего ключа связанных данных |

Если имя имеет вид `'tables.relactions'` (с указанием связи), будет возвращен класс репозитория, связанный с этой связью. Если передан второй параметр, то при использовании репозитория (запросы, изменения и т.д.) будут учитываться значения внешнего ключа связанных данных.

**Пример**

Предположим, что есть две таблицы: *статьи* и *авторы*, и в таблице статей есть внешний ключ, указывающий на таблицу авторов:


```ts
const AuthorsRepo = db.getRepository('authors');
const author1 = AuthorsRepo.create({ name: 'author1' });

const PostsRepo = db.getRepository('authors.posts', author1.id);
const post1 = AuthorsRepo.create({ title: 'post1' });
asset(post1.authorId === author1.id); // true
```

## События базы данных

### `on()`

Прослушивание событий базы данных.

**Сигнатура**

- `on(event: string, listener: (...args: any[]) => void | Promise<void>): void`

**Параметры**

| Имя параметра | Тип      | Значение по умолчанию | Описание         |
| -------------- | --------- | ----------------------- | ---------------- |
| `event`        | `string`  | -                       | Название события |
| `listener`     | `Function`| -                       | Обработчик события |

Названия событий по умолчанию поддерживают события Model из Sequelize. Для глобальных событий прослушивание осуществляется по имени вида `<sequelize_model_global_event>`, а для событий отдельной модели — по имени вида `<model_name>.<sequelize_model_event>`.

Описание параметров всех встроенных типов событий и подробные примеры см. в разделе [встроенные события](#встроенные-события).。

### `off()`

Удаляет функцию прослушивания события.

**Сигнатура**

- `off(name: string, listener: Function)`

**Параметры**

| Имя параметра | Тип      | Значение по умолчанию | Описание         |
| -------------- | --------- | ----------------------- | ---------------- |
| `name`         | `string`  | -                       | Название события |
| `listener`     | `Function`| -                       | Обработчик события |

**Пример**

```ts
const listener = async (model, options) => {
  console.log(model);
};

db.on('afterCreate', listener);

db.off('afterCreate', listener);
```

## Операции с базой данных

### `auth()`

Проверка подключения к базе данных. Может использоваться для обеспечения установленного соединения между приложением и базой данных.

**Сигнатура**

- `auth(options: QueryOptions & { retry?: number } = {}): Promise<boolean>`

**Параметры**

| Имя параметра          | Тип                   | Значение по умолчанию | Описание                  |
| ---------------------- | --------------------- | ---------------------- | ------------------------- |
| `options?`             | `Object`              | -                      | Параметры проверки        |
| `options.retry?`       | `number`              | `10`                   | Количество повторов при неудаче |
| `options.transaction?` | `Transaction`         | -                      | Объект транзакции         |
| `options.logging?`     | `boolean \| Function` | `false`                | Выводить ли логи          |

**Пример**

```ts
await db.auth();
```

### `reconnect()`

Переподключение к базе данных.

**Пример**

```ts
await db.reconnect();
```

### `closed()`

Проверяет, закрыто ли соединение с базой данных.

**Сигнатура**

- `closed(): boolean`

### `close()`

Закрывает соединение с базой данных. Эквивалентно `sequelize.close()`.

### `sync()`

Синхронизирует структуру таблиц в базе данных. Эквивалентно `sequelize.sync()`, параметры см. в [документации Sequelize](https://sequelize.org/api/v6/class/src/sequelize.js~sequelize#instance-method-sync).

### `clean()`

Очищает базу данных, удаляя все таблицы.

**Сигнатура**

- `clean(options: CleanOptions): Promise<void>`

**Параметры**

| Имя параметра         | Тип            | Значение по умолчанию | Описание                  |
| --------------------- | -------------- | ---------------------- | ------------------------- |
| `options.drop`        | `boolean`      | `false`                | Удалять ли все таблицы    |
| `options.skip`        | `string[]`     | -                      | Список таблиц для пропуска |
| `options.transaction` | `Transaction`  | -                      | Объект транзакции         |

**Пример**

Удалить все таблицы, кроме таблицы `users`.

```ts
await db.clean({
  drop: true,
  skip: ['users'],
});
```

## Экспорт на уровне пакета

### `defineCollection()`

Создает конфигурацию для таблицы данных.

**Сигнатура**

- `defineCollection(name: string, config: CollectionOptions): CollectionOptions`

**Параметры**

| Имя параметра       | Тип                 | Значение по умолчанию | Описание                                |
| -------------------- | -------------------- | ----------------------- | ---------------------------------------- |
| `collectionOptions`  | `CollectionOptions`  | -                       | Те же параметры, что и у `db.collection()` |

**Пример**

Для файлов конфигурации таблиц, которые должны быть импортированы через `db.import()`:

```ts
import { defineCollection } from '@nocobase/database';

export default defineCollection({
  name: 'users',
  fields: [
    {
      type: 'string',
      name: 'name',
    },
  ],
});
```

### `extendCollection()`

Расширяет конфигурацию структуры таблицы, уже находящейся в памяти, главным образом для содержимого файлов, импортируемых методом `import()`. Этот метод экспортируется как верхнеуровневый из пакета `@nocobase/database` и не вызывается через экземпляр `db`. Также можно использовать псевдоним `extend`.

**Сигнатура**

- `extendCollection(collectionOptions: CollectionOptions, mergeOptions?: MergeOptions): ExtendedCollectionOptions`

**Параметры**

| Имя параметра       | Тип                 | Значение по умолчанию | Описание                                                                 |
| ------------------- | ------------------- | ----------------------- | -------------------------------------------------------------------------|
| `collectionOptions` | `CollectionOptions` | -                       | Те же параметры, что и у `db.collection()`                               |
| `mergeOptions?`     | `MergeOptions`      | -                       | Параметры npm-пакета [deepmerge](https://npmjs.com/package/deepmerge)    |

**Пример**

Исходное определение таблицы `books` (books.ts):

```ts
export default {
  name: 'books',
  fields: [{ name: 'title', type: 'string' }],
};
```

Расширение определения таблицы `books` (books.extend.ts):

```ts
import { extend } from '@nocobase/database';

// Расширение ещё раз
export default extend({
  name: 'books',
  fields: [{ name: 'price', type: 'number' }],
});
```

Если оба файла импортируются при вызове `import()`, то после повторного расширения через `extend()`, таблица `books` будет содержать два поля: `title` и `price`.

Этот метод очень полезен при расширении структуры таблицы, уже определенной существующим плагином.

## Встроенные события

База данных запускает следующие соответствующие события на определённых этапах жизненного цикла. После подписки через метод `on()` можно выполнять специфическую обработку для удовлетворения бизнес-потребностей.

### `'beforeSync'` / `'afterSync'`

Срабатывают до и после синхронизации новой конфигурации структуры таблицы (поля, индексы и т.д.) с базой данных. Обычно это происходит при выполнении `collection.sync()` (вызов внутри), что может использоваться для обработки логики расширения определённых полей.

**Сигнатура**

```ts
on(eventName: `${string}.beforeSync` | 'beforeSync' | `${string}.afterSync` | 'afterSync', listener: SyncListener): this
```

**Тип**

```ts
import type { SyncOptions, HookReturn } from 'sequelize/types';

type SyncListener = (options?: SyncOptions) => HookReturn;
```

**Пример**

```ts
const users = db.collection({
  name: 'users',
  fields: [{ type: 'string', name: 'username' }],
});

db.on('beforeSync', async (options) => {
  // выполнить какое-либо действие
});

db.on('users.afterSync', async (options) => {
  // выполнить какое-либо действие
});

await users.sync();
```

### `'beforeValidate'` / `'afterValidate'`

Перед созданием или обновлением данных происходит процесс проверки данных на основе правил, определенных в collection. Соответствующие события срабатывают до и после этой проверки. Эти события вызываются при выполнении `repository.create()` или `repository.update()`.

**Сигнатура**

```ts
on(eventName: `${string}.beforeValidate` | 'beforeValidate' | `${string}.afterValidate` | 'afterValidate', listener: ValidateListener): this
```

**类型**

```ts
import type { ValidationOptions } from 'sequelize/types/lib/instance-validator';
import type { HookReturn } from 'sequelize/types';
import type { Model } from '@nocobase/database';

type ValidateListener = (
  model: Model,
  options?: ValidationOptions,
) => HookReturn;
```

**示例**

```ts
db.collection({
  name: 'tests',
  fields: [
    {
      type: 'string',
      name: 'email',
      validate: {
        isEmail: true,
      },
    },
  ],
});

// все модели
db.on('beforeValidate', async (model, options) => {
  // выполнить какое-либо действие
});
// модель тестов
db.on('tests.beforeValidate', async (model, options) => {
  // выполнить какое-либо действие
});

// все модели
db.on('afterValidate', async (model, options) => {
  // выполнить какое-либо действие
});
// модель тестов
db.on('tests.afterValidate', async (model, options) => {
  // выполнить какое-либо действие
});

const repository = db.getRepository('tests');
await repository.create({
  values: {
    email: 'abc', // проверяет формат электронной почты
  },
});
// or
await repository.update({
  filterByTk: 1,
  values: {
    email: 'abc', // проверяет формат электронной почты
  },
});
```

### `'beforeCreate'` / `'afterCreate'`

События срабатывают до и после создания записи при вызове `repository.create()`.

**Сигнатура**

```ts
on(eventName: `${string}.beforeCreate` | 'beforeCreate' | `${string}.afterCreate` | 'afterCreate', listener: CreateListener): this
```

**Тип**

```ts
import type { CreateOptions, HookReturn } from 'sequelize/types';
import type { Model } from '@nocobase/database';

export type CreateListener = (
  model: Model,
  options?: CreateOptions,
) => HookReturn;
```

**示例**

```ts
db.on('beforeCreate', async (model, options) => {
  // выполнить какое-либо действие
});

db.on('books.afterCreate', async (model, options) => {
  const { transaction } = options;
  const result = await model.constructor.findByPk(model.id, {
    transaction,
  });
  console.log(result);
});
```

### `'beforeUpdate'` / `'afterUpdate'`

События срабатывают до и после обновления записи при вызове `repository.update()`.

**Сигнатура**

```ts
on(eventName: `${string}.beforeUpdate` | 'beforeUpdate' | `${string}.afterUpdate` | 'afterUpdate', listener: UpdateListener): this
```

**Тип**

```ts
import type { UpdateOptions, HookReturn } from 'sequelize/types';
import type { Model } from '@nocobase/database';

export type UpdateListener = (
  model: Model,
  options?: UpdateOptions,
) => HookReturn;
```

**示例**

```ts
db.on('beforeUpdate', async (model, options) => {
  // выполнить какое-либо действие
});

db.on('books.afterUpdate', async (model, options) => {
  // выполнить какое-либо действие
});
```

### `'beforeSave'` / `'afterSave'`

События срабатывают до и после создания или обновления записи при вызове `repository.create()` или `repository.update()`.

**Сигнатура**

```ts
on(eventName: `${string}.beforeSave` | 'beforeSave' | `${string}.afterSave` | 'afterSave', listener: SaveListener): this
```

**Тип**

```ts
import type { SaveOptions, HookReturn } from 'sequelize/types';
import type { Model } from '@nocobase/database';

export type SaveListener = (model: Model, options?: SaveOptions) => HookReturn;
```

**示例**

```ts
db.on('beforeSave', async (model, options) => {
  // выполнить какое-либо действие
});

db.on('books.afterSave', async (model, options) => {
  // выполнить какое-либо действие
});
```

### `'beforeDestroy'` / `'afterDestroy'`

События срабатывают до и после удаления записи при вызове `repository.destroy()`.

**Сигнатура**

```ts
on(eventName: `${string}.beforeDestroy` | 'beforeDestroy' | `${string}.afterDestroy` | 'afterDestroy', listener: DestroyListener): this
```

**Тип**

```ts
import type { DestroyOptions, HookReturn } from 'sequelize/types';
import type { Model } from '@nocobase/database';

export type DestroyListener = (
  model: Model,
  options?: DestroyOptions,
) => HookReturn;
```

**示例**

```ts
db.on('beforeDestroy', async (model, options) => {
  // выполнить какое-либо действие
});

db.on('books.afterDestroy', async (model, options) => {
  // выполнить какое-либо действие
});
```

### `'afterCreateWithAssociations'`

Событие срабатывает после создания записи с данными, содержащими иерархические связи, при вызове `repository.create()`.

**Сигнатура**

```ts
on(eventName: `${string}.afterCreateWithAssociations` | 'afterCreateWithAssociations', listener: CreateWithAssociationsListener): this
```

**Тип**

```ts
import type { CreateOptions, HookReturn } from 'sequelize/types';
import type { Model } from '@nocobase/database';

export type CreateWithAssociationsListener = (
  model: Model,
  options?: CreateOptions,
) => HookReturn;
```

  **Типы**

  ```ts
  db.on('afterCreateWithAssociations', async (model, options) => {
    // выполнить какое-либо действие
  });

  db.on('books.afterCreateWithAssociations', async (model, options) => {
    // выполнить какое-либо действие
  });
  ```

  ### `'afterUpdateWithAssociations'`

  Событие срабатывает после обновления записи с данными, содержащими иерархические связи, при вызове `repository.update()`.

  **Сигнатура**

```ts
on(eventName: `${string}.afterUpdateWithAssociations` | 'afterUpdateWithAssociations', listener: CreateWithAssociationsListener): this
```

**Тип**

```ts
import type { UpdateOptions, HookReturn } from 'sequelize/types';
import type { Model } from '@nocobase/database';

export type UpdateWithAssociationsListener = (
  model: Model,
  options?: UpdateOptions,
) => HookReturn;
```

**Пример**

```ts
db.on('afterUpdateWithAssociations', async (model, options) => {
  // выполнить какое-либо действие
});

db.on('books.afterUpdateWithAssociations', async (model, options) => {
  // выполнить какое-либо действие
});
```

### `'afterSaveWithAssociations'`

Событие срабатывает после создания или обновления записи с данными, содержащими иерархические связи, при вызове `repository.create()` или `repository.update()`.

**Сигнатура**

```ts
on(eventName: `${string}.afterSaveWithAssociations` | 'afterSaveWithAssociations', listener: SaveWithAssociationsListener): this
```

**Тип**

```ts
import type { SaveOptions, HookReturn } from 'sequelize/types';
import type { Model } from '@nocobase/database';

export type SaveWithAssociationsListener = (
  model: Model,
  options?: SaveOptions,
) => HookReturn;
```

**Пример**

```ts
db.on('afterSaveWithAssociations', async (model, options) => {
  // выполнить какое-либо действие
});

db.on('books.afterSaveWithAssociations', async (model, options) => {
  // выполнить какое-либо действие
});
```

### `'beforeDefineCollection'`

Событие срабатывает перед определением таблицы данных, например, при вызове `db.collection()`.

Примечание: это синхронное событие.

**Сигнатура**

```ts
on(eventName: 'beforeDefineCollection', listener: BeforeDefineCollectionListener): this
```

**Тип**

```ts
import type { CollectionOptions } from '@nocobase/database';

export type BeforeDefineCollectionListener = (
  options: CollectionOptions,
) => void;
```

**Пример**

```ts
db.on('beforeDefineCollection', (options) => {
  // выполнить какое-либо действие
});
```

### `'afterDefineCollection'`

Событие срабатывает после определения таблицы данных, например, при вызове `db.collection()`.

Примечание: это синхронное событие.

**Сигнатура**

```ts
on(eventName: 'afterDefineCollection', listener: AfterDefineCollectionListener): this
```

**Тип**

```ts
import type { Collection } from '@nocobase/database';

export type AfterDefineCollectionListener = (options: Collection) => void;
```

**Пример**

```ts
db.on('afterDefineCollection', (collection) => {
  // выполнить какое-либо действие
});
```

### `'beforeRemoveCollection'` / `'afterRemoveCollection'`

События срабатывают до и после удаления таблицы данных из памяти, например, при вызове `db.removeCollection()`.

Примечание: эти события являются синхронными.

**Сигнатура**

```ts
on(eventName: 'beforeRemoveCollection' | 'afterRemoveCollection', listener: RemoveCollectionListener): this
```

**Тип**

```ts
import type { Collection } from '@nocobase/database';

export type RemoveCollectionListener = (options: Collection) => void;
```

**Пример**

```ts
db.on('beforeRemoveCollection', (collection) => {
  // выполнить какое-либо действие
});

db.on('afterRemoveCollection', (collection) => {
  // выполнить какое-либо действие
});
```
```
