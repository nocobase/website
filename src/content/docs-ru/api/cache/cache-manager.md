# CacheManager

## Обзор

CacheManager основан на <a href="https://github.com/node-cache-manager/node-cache-manager" target="_blank">node-cache-manager</a> и предоставляет функционал управления кэшем для NocoBase. Встроенные типы кэша включают:

- memory — lru-cache, предоставляемый по умолчанию node-cache-manager  
- redis — функционал поддерживается через node-cache-manager-redis-yet

更多类型可通过 API 进行扩展注册。

### Пояснение концепций

- **Store**: Определяет способ кэширования, включая фабричный метод для создания кэша и другие связанные настройки. Каждый способ кэширования имеет уникальный идентификатор, который предоставляется при регистрации.  
  Уникальные идентификаторы для двух встроенных способов кэширования — это `memory` и `redis`.

- **Фабричный метод Store**: Предоставляется пакетами `node-cache-manager` и соответствующими расширениями для создания кэша. Например, `'memory'`, предоставляемый по умолчанию `node-cache-manager`, и `redisStore` из `node-cache-manager-redis-yet`. Это первый параметр метода `caching` из `node-cache-manager`.

- **Cache**: Класс, инкапсулированный в NocoBase, предоставляющий методы для работы с кэшем. При реальном использовании кэша операции выполняются с экземпляром класса `Cache`. У каждого экземпляра `Cache` есть уникальный идентификатор, который может использоваться как пространство имен для различения модулей.

## Методы класса

### `constructor()`

#### Сигнатура

- `constructor(options?: CacheManagerOptions)`

#### Типизация

```ts
export type CacheManagerOptions = Partial<{
  defaultStore: string;
  stores: {
    [storeType: string]: StoreOptions;
  };
}>;

type StoreOptions = {
  store?: 'memory' | FactoryStore<Store, any>;
  close?: (store: Store) => Promise<void>;
  // global config
  [key: string]: any;
};
```

#### Детали

##### CacheManagerOptions

| Свойство       | Тип                           | Описание                                                                                                                                                                                                                             |
| -------------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `defaultStore` | `string`                       | Уникальный идентификатор типа кэша по умолчанию.                                                                                                                                                                                     |
| `stores`       | `Record<string, StoreOptions>` | Регистрация типов кэша, где ключ — уникальный идентификатор типа кэша, а значение — объект, содержащий метод регистрации типа кэша и глобальные настройки.<br />В `node-cache-manager` для создания кэша используется `await caching(store, config)`. Здесь требуется объект типа [`StoreOptions`](#storeoptions). |

##### StoreOptions

| Свойство        | Тип                                   | Описание                                                                                                 |
| --------------- | -------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `store`         | `memory` \| `FactoryStore<Store, any>` | Фабричный метод store, соответствует первому параметру метода `caching`                                   |
| `close`         | `(store: Store) => Promise<void>`      | Необязательно. Если используется Redis или другое промежуточное ПО, требующее установления соединения, необходимо предоставить метод для закрытия соединения. Параметр — объект, возвращаемый фабричным методом store |
| `[key: string]` | `any`                                  | Другие глобальные настройки store, соответствуют второму параметру метода `caching`                       |

#### Значения `options` по умолчанию

```ts
import { redisStore, RedisStore } from 'cache-manager-redis-yet';

const defaultOptions: CacheManagerOptions = {
  defaultStore: 'memory',
  stores: {
    memory: {
      store: 'memory',
      // 全局配置
      max: 2000,
    },
    redis: {
      store: redisStore,
      close: async (redis: RedisStore) => {
        await redis.client.quit();
      },
    },
  },
};
```

Параметр `options` будет объединён с параметрами по умолчанию, и те значения, которые уже содержатся в параметрах по умолчанию, могут быть опущены. Например:

```ts
const cacheManager = new CacheManager({
  stores: {
    defaultStore: 'redis',
    redis: {
      // redisStore уже предоставлен в параметрах по умолчанию, нужно только предоставить конфигурацию для redisStore.
      url: 'redis://localhost:6379',
    },
  },
});
```

### `registerStore()`

Регистрация нового способа кэширования, см.

```ts
import { redisStore } from 'cache-manager-redis-yet';

cacheManager.registerStore({
  // Уникальный идентификатор store
  name: 'redis',
  // Фабричный метод для создания store
  store: redisStore,
  // Закрытие соединения store
  close: async (redis: RedisStore) => {
    await redis.client.quit();
  },
  // Глобальная конфигурация
  url: 'xxx',
});
```

#### Сигнатура

- `registerStore(options: { name: string } & StoreOptions)`

### `createCache()`

Создание кэша, см.

```ts
await cacheManager.createCache({
  name: 'default', // Уникальный идентификатор кэша (cache)
  store: 'memory', // Уникальный идентификатор store
  prefix: 'mycache', // Автоматически добавляет префикс 'mycache:' к ключу кэша, необязательно
  // Другие настройки store, пользовательские конфигурации, которые будут объединены с глобальными настройками store.
  max: 2000,
});
```

#### Сигнатура

- `createCache(options: { name: string; prefix?: string; store?: string; [key: string]: any }): Promise<Cache>`

#### Детали

##### options

| Свойство        | Тип      | Описание                          |
| --------------- | -------- | --------------------------------- |
| `name`          | `string` | Уникальный идентификатор кэша     |
| `store`         | `string` | Уникальный идентификатор store    |
| `prefix`        | `string` | Необязательно, префикс ключа кэша |
| `[key: string]` | `any`    | Другие пользовательские настройки store |

Если `store` опущен, будет использован `defaultStore`, при этом способ кэширования будет меняться вместе с изменением способа кэширования по умолчанию в системе.

Если пользовательских настроек нет, будет возвращён общий кэш, созданный с использованием глобальных настроек. Рекомендуется добавлять префикс (prefix), чтобы избежать конфликтов ключей.

```ts
// Использование кэша по умолчанию с глобальной конфигурацией
await cacheManager.createCache({ name: 'default', prefix: 'mycache' });
```

##### Cache

См. [Cache](./cache.md)

### `getCache()`

Получить соответствующий кэш

```ts
cacheManager.getCache('default');
```

#### Сигнатура

- `getCache(name: string): Cache`

### `flushAll()`

Сбросить весь кэш

```ts
await cacheManager.flushAll();
```

### `close()`

Закрыть все соединения middleware кэша

```ts
await cacheManager.close();
```
