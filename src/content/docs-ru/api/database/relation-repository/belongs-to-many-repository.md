# BelongsToManyRepository

`BelongsToManyRepository` — это "Relation Repository" для работы с отношением типа `BelongsToMany`.

В отличие от других типов отношений, отношения типа `BelongsToMany` требуют промежуточной таблицы для хранения данных. В NocoBase при определении связи можно автоматически создать промежуточную таблицу или явно указать ее.

## Методы класса

### `find()`

Поиск связанных объектов.

**Сигнатура**

- `async find(options?: FindOptions): Promise<M[]>`

**Детали**

Параметры запроса совпадают с [`Repository.find()`](../repository.md#find).

### `findOne()`

Поиск связанного объекта, возвращает только одну запись.

**Сигнатура**

- `async findOne(options?: FindOneOptions): Promise<M>`

<embed src="../shared/find-one.md"></embed>

### `count()`

Возвращает количество записей, соответствующих условиям запроса.

**Сигнатура**

- `async count(options?: CountOptions)`

**Типизация**

```typescript
interface CountOptions
  extends Omit<SequelizeCountOptions, 'distinct' | 'where' | 'include'>,
    Transactionable {
  filter?: Filter;
}
```

### `findAndCount()`

Запрос набора данных и количества результатов из базы данных согласно заданным условиям.

**Сигнатура**

- `async findAndCount(options?: FindAndCountOptions): Promise<[any[], number]>`

**Типизация**

```typescript
type FindAndCountOptions = CommonFindOptions;
```

### `create()`

Создание связанного объекта.

**Сигнатура**

- `async create(options?: CreateOptions): Promise<M>`

<embed src="../shared/create-options.md"></embed>

### `update()`

Обновление связанных объектов, соответствующих условиям.

**Сигнатура**

- `async update(options?: UpdateOptions): Promise<M>`

<embed src="../shared/update-options.md"></embed>

### `destroy()`

Удаление связанных объектов, соответствующих условиям.

**Сигнатура**

- `async destroy(options?: TargetKey | TargetKey[] | DestroyOptions): Promise<Boolean>`

<embed src="../shared/destroy-options.md"></embed>

### `add()`

Добавление новых связанных объектов.

**Сигнатура**

- `async add(
options: TargetKey | TargetKey[] | PrimaryKeyWithThroughValues | PrimaryKeyWithThroughValues[] | AssociatedOptions
): Promise<void>`

**Типизация**

```typescript
type PrimaryKeyWithThroughValues = [TargetKey, Values];

interface AssociatedOptions extends Transactionable {
  tk?:
    | TargetKey
    | TargetKey[]
    | PrimaryKeyWithThroughValues
    | PrimaryKeyWithThroughValues[];
}
```

**Детали**

Можно передать только `targetKey` связанного объекта, либо вместе с ним передать значения полей промежуточной таблицы.

**Пример**

```typescript
const t1 = await Tag.repository.create({
  values: { name: 't1' },
});

const t2 = await Tag.repository.create({
  values: { name: 't2' },
});

const p1 = await Post.repository.create({
  values: { title: 'p1' },
});

const PostTagRepository = new BelongsToManyRepository(Post, 'tags', p1.id);

// Передача targetKey
PostTagRepository.add([t1.id, t2.id]);

// Передача полей промежуточной таблицы
PostTagRepository.add([
  [t1.id, { tagged_at: '123' }],
  [t2.id, { tagged_at: '456' }],
]);
```

### `set()`

Установка связанных объектов.

**Сигнатура**

- async set(
  options: TargetKey | TargetKey[] | PrimaryKeyWithThroughValues | PrimaryKeyWithThroughValues[] | AssociatedOptions,
  ): Promise<void>

**Детали**

Параметры аналогичны [add()](#add).

### `remove()`

Удаление связи с указанными объектами.

**Сигнатура**

- `async remove(options: TargetKey | TargetKey[] | AssociatedOptions)`

**Типизация**

```typescript
interface AssociatedOptions extends Transactionable {
  tk?: TargetKey | TargetKey[];
}
```

### `toggle()`

Переключение связанного объекта.

В некоторых бизнес-сценариях часто требуется переключать связанные объекты, например, пользователь может добавить товар в избранное, удалить его из избранного или снова добавить. Метод `toggle` позволяет быстро реализовать подобный функционал.

**Сигнатура**

- `async toggle(options: TargetKey | { tk?: TargetKey; transaction?: Transaction }): Promise<void>`

**Детали**

Метод `toggle` автоматически определяет, существует ли связанный объект. Если объект существует, он удаляется; если не существует — добавляется.