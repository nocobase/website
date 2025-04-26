# Repository

## Обзор

Для данного объекта `Collection` можно получить объект `Repository`, чтобы выполнять операции чтения и записи в таблицу данных.

```javascript
const { UserCollection } = require('./collections');

const UserRepository = UserCollection.repository;

const user = await UserRepository.findOne({
  filter: {
    id: 1,
  },
});

user.name = 'new name';
await user.save();
```

### Запросы

#### Базовый запрос

Вызов методов, связанных с `find*`, на объекте `Repository` позволяет выполнять операции запроса. Все методы запроса поддерживают передачу параметра `filter` для фильтрации данных.

```javascript
// SELECT * FROM users WHERE id = 1
userRepository.find({
  filter: {
    id: 1,
  },
});
```

#### Операторы

Параметр `filter` в `Repository` также предоставляет множество операторов для выполнения более разнообразных операций запроса.

```javascript
// SELECT * FROM users WHERE age > 18
userRepository.find({
  filter: {
    age: {
      $gt: 18,
    },
  },
});

// SELECT * FROM users WHERE age > 18 OR name LIKE '%张%'
userRepository.find({
  filter: {
    $or: [{ age: { $gt: 18 } }, { name: { $like: '%张%' } }],
  },
});
```

Более подробную информацию об операторах можно найти в разделе [Filter Operators](/api/database/operators).

#### Управление полями

При выполнении операций запроса можно управлять выводимыми полями с помощью параметров `fields`, `except` и `appends`.

- `fields`: указывает поля для вывода  
- `except`: исключает поля из вывода  
- `appends`: добавляет связанные поля к выводу

```javascript
// Результат будет содержать только поля id и name
userRepository.find({
  fields: ['id', 'name'],
});

// Результат не будет содержать поле password
userRepository.find({
  except: ['password'],
});

// Результат будет включать данные связанного объекта posts.
userRepository.find({
  appends: ['posts'],
});
```

#### Запрос по связанным полям

Параметр `filter` поддерживает фильтрацию по связанным полям, например:

```javascript
// Запрос объекта user, где связанный с ним posts содержит объект с title равным 'post title'
userRepository.find({
  filter: {
    'posts.title': 'post title',
  },
});
```

Связанные поля также могут быть вложены.

```javascript
// Запрос объекта user, где результаты удовлетворяют условию, что comments в posts содержат keywords.
await userRepository.find({
  filter: {
    'posts.comments.content': {
      $like: '%keywords%',
    },
  },
});
```

#### Сортировка

С помощью параметра `sort` можно сортировать результаты запроса.

```javascript
// SELECT * FROM users ORDER BY age
await userRepository.find({
  sort: 'age',
});

// SELECT * FROM users ORDER BY age DESC
await userRepository.find({
  sort: '-age',
});

// SELECT * FROM users ORDER BY age DESC, name ASC
await userRepository.find({
  sort: ['-age', 'name'],
});
```

Также можно сортировать по полям связанного объекта.

```javascript
await userRepository.find({
  sort: 'profile.createdAt',
});
```

### Создание

#### Базовое создание

Создание нового объекта данных через `Repository`.

```javascript
await userRepository.create({
  name: 'Михаил',
  age: 18,
});
// INSERT INTO users (name, age) VALUES ('Михаил', 18)

// Поддерживается пакетное создание
await userRepository.create([
  {
    name: 'Михаил',
    age: 18,
  },
  {
    name: 'Андрей',
    age: 20,
  },
]);
```

#### Создание связей

При создании можно одновременно создавать связанные объекты. Как и при запросах, также поддерживается вложенное использование связанных объектов, например:

```javascript
await userRepository.create({
  name: 'Михаил',
  age: 18,
  posts: [
    {
      title: 'post title',
      content: 'post content',
      tags: [
        {
          name: 'tag1',
        },
        {
          name: 'tag2',
        },
      ],
    },
  ],
});
// При создании пользователя одновременно создается post, связанный с пользователем, и tags, связанные с post.
```

Если связанный объект уже существует в базе данных, можно передать его ID, и при создании будет установлено отношение с этим связанным объектом.

```javascript
const tag1 = await tagRepository.findOne({
  filter: {
    name: 'tag1',
  },
});

await userRepository.create({
  name: 'Михаил',
  age: 18,
  posts: [
    {
      title: 'post title',
      content: 'post content',
      tags: [
        {
          id: tag1.id, // Установление связи с уже существующим связанным объектом
        },
        {
          name: 'tag2',
        },
      ],
    },
  ],
});
```

### Обновление

#### Базовое обновление

После получения объекта данных можно напрямую изменять атрибуты в объекте данных (`Model`), а затем вызвать метод `save` для сохранения изменений.

```javascript
const user = await userRepository.findOne({
  filter: {
    name: 'Андрей',
  },
});

user.age = 20;
await user.save();
```

Объект данных `Model` наследуется от Sequelize Model, и действия с `Model` можно посмотреть в документации [Sequelize Model](https://sequelize.org/master/manual/model-basics.html).

Также можно обновлять данные через `Repository`:

```javascript
// Изменение записей данных, соответствующих условиям фильтрации
await userRepository.update({
  filter: {
    name: 'Андрей',
  },
  values: {
    age: 20,
  },
});
```

При обновлении можно контролировать поля для обновления с помощью параметров `whitelist` и `blacklist`. Например:

```javascript
await userRepository.update({
  filter: {
    name: 'Андрей',
  },
  values: {
    age: 20,
    name: 'Андрей',
  },
  whitelist: ['age'], // Обновить только поле age
});
```

#### Обновление полей связи

При обновлении можно устанавливать связанные объекты. Например:

```javascript
const tag1 = tagRepository.findOne({
  filter: {
    id: 1,
  },
});

await postRepository.update({
  filter: {
    id: 1,
  },
  values: {
    title: 'new post title',
    tags: [
      {
        id: tag1.id, // Установить связь с tag1
      },
      {
        name: 'tag2', // Создать новый tag и установить связь
      },
    ],
  },
});

await postRepository.update({
  filter: {
    id: 1,
  },
  values: {
    tags: null, // Разорвать связь между post и tags
  },
});
```

### Удаление

Для выполнения операции удаления можно вызвать метод `destroy()` в `Repository`. При удалении необходимо указать условия фильтрации:

```javascript
await userRepository.destroy({
  filter: {
    status: 'blocked',
  },
});
```

## Конструктор

Обычно разработчик не вызывает его напрямую. В первую очередь тип регистрируется через `db.registerRepositories()`, затем в параметрах `db.collection()` указывается соответствующий зарегистрированный тип хранилища, и происходит его инициализация.

**Сигнатура**

- `constructor(collection: Collection)`

**Пример**

```ts
import { Repository } from '@nocobase/database';

class MyRepository extends Repository {
  async myQuery(sql) {
    return this.database.sequelize.query(sql);
  }
}

db.registerRepositories({
  books: MyRepository,
});

db.collection({
  name: 'books',
  // здесь ссылка на зарегистрированное хранилище (repository)
  repository: 'books',
});

await db.sync();

const books = db.getRepository('books') as MyRepository;
await books.myQuery('SELECT * FROM books;');
```

## Экземпляры класса

### `database`

Экземпляр менеджера базы данных, в контексте которого выполняется работа.

### `collection`

Экземпляр управления соответствующей таблицей данных.

### `model`

Класс модели данных, связанной с этим экземпляром.

## Методы экземпляра

### `find()`

Выполняет запрос набора данных из базы данных. Можно указать условия фильтрации, сортировку и другие параметры.

**Сигнатура**

- `async find(options?: FindOptions): Promise<Model[]>`

**Тип**

```typescript
type Filter = FilterWithOperator | FilterWithValue | FilterAnd | FilterOr;
type Appends = string[];
type Except = string[];
type Fields = string[];
type Sort = string[] | string;

interface SequelizeFindOptions {
  limit?: number;
  offset?: number;
}

interface FilterByTk {
  filterByTk?: TargetKey;
}

interface CommonFindOptions extends Transactionable {
  filter?: Filter;
  fields?: Fields;
  appends?: Appends;
  except?: Except;
  sort?: Sort;
}

type FindOptions = SequelizeFindOptions & CommonFindOptions & FilterByTk;
```

**Подробное описание**

#### `filter: Filter`

Условия запроса, используемые для фильтрации результатов данных. В передаваемых параметрах запроса `key` — это имя поля для запроса, а `value` может быть значением для поиска или использоваться в сочетании с операторами для выполнения других условий фильтрации данных.

```typescript
// Запросить записи, где name равно 'foo', а age больше 18
repository.find({
  filter: {
    name: 'foo',
    age: {
      $gt: 18,
    },
  },
});
```

Больше операторов можно найти в разделе [Операторы запросов](./operators.md).

#### `filterByTk: TargetKey`

Запрос данных по `TargetKey`, это удобный метод для параметра `filter`. Конкретное поле `TargetKey` можно настроить в `Collection` ([настройка](./collection.md#filtertargetkey)). По умолчанию используется `primaryKey`.

```typescript
// По умолчанию ищет запись с id равным 1
repository.find({
  filterByTk: 1,
});
```

#### `fields: string[]`

Список запрашиваемых полей, используется для контроля результатов данных. После передачи этого параметра будут возвращены только указанные поля.

#### `except: string[]`

Исключённые поля, используются для контроля результатов данных. После передачи этого параметра указанные поля не будут выведены.

#### `appends: string[]`

Дополнительные поля, используются для загрузки связанных данных. После передачи этого параметра указанные связанные поля также будут выведены.

#### `sort: string[] | string`

Определяет способ сортировки результатов запроса. Передаваемые параметры — это имена полей. По умолчанию используется сортировка по возрастанию (`asc`). Если требуется сортировка по убыванию (`desc`), можно добавить символ `-` перед именем поля. Например: `['-id', 'name']` означает сортировку по `id desc, name asc`.

#### `limit: number`

Ограничение количества результатов, аналогично `limit` в SQL.

#### `offset: number`

Смещение запроса, аналогично `offset` в SQL.

**Пример**

```ts
const posts = db.getRepository('posts');

const results = await posts.find({
  filter: {
    createdAt: {
      $gt: '2022-01-01T00:00:00.000Z',
    },
  },
  fields: ['title'],
  appends: ['user'],
});
```

### `findOne()`

Запрашивает из базы данных одну запись, соответствующую определённым условиям. Эквивалентно `Model.findOne()` в Sequelize.

**Сигнатура**

- `async findOne(options?: FindOneOptions): Promise<Model | null>`

<embed src="./shared/find-one.md"></embed>

**Пример**

```ts
const posts = db.getRepository('posts');

const result = await posts.findOne({
  filterByTk: 1,
});
```

### `count()`

Запрашивает общее количество данных, соответствующих определённым условиям, из базы данных. Эквивалентно `Model.count()` в Sequelize.

**Сигнатура**

- `count(options?: CountOptions): Promise<number>`

**Тип**

```typescript
interface CountOptions
  extends Omit<SequelizeCountOptions, 'distinct' | 'where' | 'include'>,
    Transactionable {
  filter?: Filter;
}
```

**Пример**

```ts
const books = db.getRepository('books');

const count = await books.count({
  filter: {
    title: '三字经',
  },
});
```

### `findAndCount()`

Запрашивает из базы данных набор данных и количество результатов, соответствующих определённым условиям. Эквивалентно `Model.findAndCountAll()` в Sequelize.

**Сигнатура**

- `async findAndCount(options?: FindAndCountOptions): Promise<[Model[], number]>`

**Тип**

```typescript
type FindAndCountOptions = Omit<
  SequelizeAndCountOptions,
  'where' | 'include' | 'order'
> &
  CommonFindOptions;
```

**Подробное описание**

Параметры запроса такие же, как у `find()`. Возвращаемое значение — это массив, где первый элемент содержит результаты запроса, а второй элемент — общее количество результатов.

### `create()`

Добавляет новую запись в таблицу данных. Эквивалентно `Model.create()` в Sequelize. Если создаваемый объект данных содержит информацию о связанных полях, соответствующие связанные записи данных также будут созданы или обновлены.

**Сигнатура**

- `async create<M extends Model>(options: CreateOptions): Promise<M>`

<embed src="./shared/create-options.md"></embed>

**Пример**

```ts
const posts = db.getRepository('posts');

const result = await posts.create({
  values: {
    title: 'Журнал выпуска NocoBase 1.0',
    tags: [
      // Если значение первичного ключа связанной таблицы присутствует, то данные этой записи обновляются
      { id: 1 },
      // Если первичный ключ отсутствует, то создаются новые данные
      { name: 'NocoBase' },
    ],
  },
});
```

### `createMany()`

Добавляет несколько новых записей в таблицу данных. Эквивалентно нескольким вызовам метода `create()`.

**Сигнатура**

- `createMany(options: CreateManyOptions): Promise<Model[]>`

**Тип**

```typescript
interface CreateManyOptions extends BulkCreateOptions {
  records: Values[];
}
```

**Подробное описание**

- `records`: массив объектов данных, представляющих записи для создания.
- `transaction`: объект транзакции. Если параметр транзакции не передан, метод автоматически создаст внутреннюю транзакцию.

**Пример**

```ts
const posts = db.getRepository('posts');

const results = await posts.createMany({
  records: [
    {
      title: 'Журнал выпуска NocoBase 1.0',
      tags: [
        // Если значение первичного ключа связанной таблицы присутствует, то данные этой записи обновляются
        { id: 1 },
        // Если первичный ключ отсутствует, то создаются новые данные
        { name: 'NocoBase' },
      ],
    },
    {
      title: 'Журнал выпуска NocoBase 1.1',
      tags: [{ id: 1 }],
    },
  ],
});
```

### `update()`

Обновляет данные в таблице. Эквивалентно `Model.update()` в Sequelize. Если объект данных, который нужно обновить, содержит информацию о связанных полях, соответствующие связанные записи также будут созданы или обновлены.

**Сигнатура**

- `async update<M extends Model>(options: UpdateOptions): Promise<M>`

<embed src="./shared/update-options.md"></embed>

**示例**

```ts
const posts = db.getRepository('posts');

const result = await posts.update({
  filterByTk: 1,
  values: {
    title: 'Журнал выпуска NocoBase 1.0',
    tags: [
      // Если значение первичного ключа связанной таблицы присутствует, то данные этой записи обновляются
      { id: 1 },
      // Если первичный ключ отсутствует, то создаются новые данные
      { name: 'NocoBase' },
    ],
  },
});
```

### `destroy()`

Удаляет данные из таблицы. Эквивалентно Model.destroy() в Sequelize.

**Сигнатура**

- `async destroy(options?: TargetKey | TargetKey[] | DestroyOptions): Promise<number>`

**Тип**

```typescript
interface DestroyOptions extends SequelizeDestroyOptions {
  filter?: Filter;
  filterByTk?: TargetKey | TargetKey[];
  truncate?: boolean;
  context?: any;
}
```

**Подробное описание**

- `filter`: определяет условия фильтрации для записей, которые нужно удалить. Подробное использование `Filter` можно найти в описании метода [`find()`](#find).
- `filterByTk`: определяет условие фильтрации для записей, которые нужно удалить, по TargetKey.
- `truncate`: если параметры `filter` или `filterByTk` не переданы, указывает, следует ли очистить все данные таблицы.
- `transaction`: объект транзакции. Если параметр транзакции не передан, метод автоматически создаст внутреннюю транзакцию.
