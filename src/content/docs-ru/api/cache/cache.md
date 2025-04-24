# Cache

## Основные методы

Можно обратиться к документации <a href="https://github.com/node-cache-manager/node-cache-manager" target="_blank">node-cache-manager</a>.

- `get()`
- `set()`
- `del()`
- `reset()`
- `wrap()`
- `mset()`
- `mget()`
- `mdel()`
- `keys()`
- `ttl()`

## Другие методы

### `wrapWithCondition()`

Функционал аналогичен `wrap()`, но с возможностью выбора, использовать ли кэш на основе условия.

```ts
async wrapWithCondition<T>(
  key: string,
  fn: () => T | Promise<T>,
  options?: {
    // Внешний параметр управляет, использовать ли кэшированный результат
    useCache?: boolean;
    // Определять, кэшировать ли данные, на основе результата данных
    isCacheable?: (val: unknown) => boolean | Promise<boolean>;
    ttl?: Milliseconds;
  },
): Promise<T> {
```

### `setValueInObject()`

При изменении значения определённого ключа, когда содержимое кэша является объектом.

```ts
async setValueInObject(key: string, objectKey: string, value: unknown)
```

### `getValueInObject()`

При получении значения определённого ключа, когда содержимое кэша является объектом.

```ts
async getValueInObject(key: string, objectKey: string)
```

### `delValueInObject()`

При удалении определённого ключа, когда содержимое кэша является объектом.

```ts
async delValueInObject(key: string, objectKey: string)
```
