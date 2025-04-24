# Middleware

Аналогично middleware в Koa, но с расширенным набором функций, что позволяет удобно выполнять дополнительные расширения.

После определения middleware его можно встраивать для использования в различных местах, таких как менеджер ресурсов и т.д., при этом разработчик самостоятельно контролирует момент вызова.

## Конструктор

**Сигнатура**

- `constructor(options: Function)`
- `constructor(options: MiddlewareOptions)`

**Параметры**

| Имя параметра    | Тип                 | Значение по умолчанию | Описание              |
|-----------------|---------------------|-----------------------|-----------------------|
| `options`       | `Function`          | -                     | Функция обработки middleware |
| `options`       | `MiddlewareOptions` | -                     | Параметры middleware  |
| `options.only`  | `string[]`          | -                     | Разрешить только указанные действия |
| `options.except`| `string[]`          | -                     | Исключить указанные действия |
| `options.handler`| `Function`         | -                     | Функция обработки     |

**Пример**

Простое определение:

```ts
const middleware = new Middleware((ctx, next) => {
  await next();
});
```

Использование связанных параметров:

```ts
const middleware = new Middleware({
  only: ['create', 'update'],
  async handler(ctx, next) {
    await next();
  },
});
```

## Методы экземпляра

### `getHandler()`

Возвращает уже организованную функцию обработки.

**Пример**

Следующий middleware при запросе сначала выведет `1`, затем `2`.

```ts
const middleware = new Middleware((ctx, next) => {
  console.log(1);
  await next();
});

middleware.use(async (ctx, next) => {
  console.log(2);
  await next();
});

app.resourcer.use(middleware.getHandler());
```

### `use()`

Добавляет функцию middleware к текущему middleware. Используется для предоставления точки расширения middleware. Пример смотрите в разделе `getHandler()`.

**Сигнатура**

- `use(middleware: Function)`

**Параметры**

| Имя параметра | Тип       | Значение по умолчанию | Описание               |
| -------------- | ---------- | ---------------------- | ----------------------- |
| `middleware`   | `Function` | -                      | Функция обработки middleware |

### `disuse()`

Удаляет ранее добавленную функцию middleware из текущего middleware.

**Сигнатура**

- `disuse(middleware: Function)`

**Параметры**

| Имя параметра | Тип       | Значение по умолчанию | Описание               |
| -------------- | ---------- | ---------------------- | ----------------------- |
| `middleware`   | `Function` | -                      | Функция обработки middleware |

**Пример**

В следующем примере при обработке запроса выводится только `1`, а вывод `2` из функции fn1 не выполняется.

```ts
const middleware = new Middleware((ctx, next) => {
  console.log(1);
  await next();
});

async function fn1(ctx, next) {
  console.log(2);
  await next();
}

middleware.use(fn1);

app.resourcer.use(middleware.getHandler());

middleware.disuse(fn1);
```

### `canAccess()`

Определяет, должен ли текущий middleware вызываться для конкретной операции. Обычно обрабатывается внутри менеджера ресурсов.

**Сигнатура**

- `canAccess(name: string): boolean`

**Параметры**

| Имя параметра | Тип     | Значение по умолчанию | Описание       |
| -------------- | -------- | ---------------------- | ---------------- |
| `name`         | `string` | -                      | Название операции |

## Другие экспорты

### `branch()`

Создает middleware с ветвлением, который используется для обработки ветвей внутри middleware.

**Сигнатура**

- `branch(map: { [key: string]: Function }, reducer: Function, options): Function`

**Параметры**

| Имя параметра            | Тип                          | Значение по умолчанию | Описание                                                                 |
|-------------------------|-------------------------------|------------------------|--------------------------------------------------------------------------|
| `map`                   | `{ [key: string]: Function }` | -                      | Таблица отображения функций обработки ветвей, ключи определяются вычислением |
| `reducer`               | `(ctx) => string`             | -                      | Вычисляющая функция, которая на основе контекста определяет ключ ветви      |
| `options?`              | `Object`                      | -                      | Параметры ветвления                                                      |
| `options.keyNotFound?`  | `Function`                    | `ctx.throw(404)`       | Функция обработки случая, если ключ не найден                             |
| `options.handlerNotSet?`| `Function`                    | `ctx.throw(404)`       | Функция обработки случая, если обработчик не определён                     |

**Пример**

При проверке пользователя, на основании значения параметра `authenticator` в части query URL запроса определяется, как нужно обрабатывать дальнейшие действия:

```ts
app.resourcer.use(
  branch(
    {
      password: async (ctx, next) => {
        // ...
      },
      sms: async (ctx, next) => {
        // ...
      },
    },
    (ctx) => {
      return ctx.action.params.authenticator ?? 'password';
    },
  ),
);
```
