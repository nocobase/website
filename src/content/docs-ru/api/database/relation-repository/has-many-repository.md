# HasManyRepository

`HasManyRepository` — это "Relation Repository" для работы с отношением типа `HasMany`.

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

- `async destroy(options?: TK | DestroyOptions): Promise<M>`

<embed src="../shared/destroy-options.md"></embed>

### `add()`

Добавление связи между объектами.

**Сигнатура**

- `async add(options: TargetKey | TargetKey[] | AssociatedOptions)`

**Типизация**

```typescript
interface AssociatedOptions extends Transactionable {
  tk?: TargetKey | TargetKey[];
}
```

**Детали**

- `tk` — значение `targetKey` связанного объекта, может быть как одиночным значением, так и массивом.
  <embed src="../shared/transaction.md"></embed>

### `remove()`

Удаление связи с указанными объектами.

**Сигнатура**

- `async remove(options: TargetKey | TargetKey[] | AssociatedOptions)`

**Детали**

Параметры аналогичны методу [`add()`](#add).

### `set()`

Установка связанных объектов для текущего отношения.

**Сигнатура**

- `async set(options: TargetKey | TargetKey[] | AssociatedOptions)`

**Детали**

Параметры аналогичны методу [`add()`](#add).