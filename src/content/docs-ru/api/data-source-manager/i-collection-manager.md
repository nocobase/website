# ICollectionManager

Интерфейс `ICollectionManager`, который используется для управления экземплярами `Collection` в источнике данных.

## API

### registerFieldTypes()

Регистрация типов полей в `Collection`.

#### Сигнатура

- `registerFieldTypes(types: Record<string, any>): void`

### registerFieldInterfaces()

Регистрация интерфейсов полей в `Collection`.

#### Сигнатура

- `registerFieldInterfaces(interfaces: Record<string, any>): void`

### registerCollectionTemplates()

Регистрация шаблонов коллекции (`Collection Template`).

#### Сигнатура

- `registerCollectionTemplates(templates: Record<string, any>): void`

### registerModels()

Регистрация `Model`.

#### Сигнатура

- `registerModels(models: Record<string, any>): void`

### registerRepositories()

Регистрация `Repository`.

#### Сигнатура

- `registerRepositories(repositories: Record<string, any>): void`

### getRegisteredRepository()

Получение зарегистрированного экземпляра репозитория.

#### Сигнатура

- `getRegisteredRepository(key: string): IRepository`

### defineCollection()

Определение `Collection`.

#### Сигнатура

- `defineCollection(options: CollectionOptions): ICollection`

### extendCollection()

Изменение свойств существующей `Collection`.

#### Сигнатура

- `extendCollection(collectionOptions: CollectionOptions, mergeOptions?: MergeOptions): ICollection`

### hasCollection()

Проверка существования `Collection`.

#### Сигнатура

- `hasCollection(name: string): boolean`

### getCollection()

Получение экземпляра `Collection`.

#### Сигнатура

- `getCollection(name: string): ICollection`

### getCollections()

Получение всех экземпляров `Collection`.

#### Сигнатура

- `getCollections(): Array<ICollection>`

### getRepository()

Получение экземпляра `Repository`.

#### Сигнатура

- `getRepository(name: string, sourceId?: string | number): IRepository`

### sync()

Синхронизация источника данных. Логика реализуется в подклассах.

#### Сигнатура

- `sync(): Promise<void>`