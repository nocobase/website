# Middleware (Промежуточное ПО)

## Как зарегистрировать middleware?

Метод регистрации middleware обычно находится в методе `load`.

```ts
export class MyPlugin extends Plugin {
  load() {
    this.app.acl.use();
    this.app.resourcer.use();
    this.app.use();
  }
}
```

Пояснение:

1. `app.acl.use()` — добавляет middleware уровня разрешений ресурсов, которое выполняется до проверки прав.
2. `app.resourcer.use()` — добавляет middleware уровня ресурсов, которое выполняется только при запросе определённых resource.
3. `app.use()` — добавляет middleware уровня приложения, которое выполняется при каждом запросе.

## Модель "луковичных слоёв" (Onion Model)

```ts
app.use(async (ctx, next) => {
  ctx.body = ctx.body || [];
  ctx.body.push(1);
  await next();
  ctx.body.push(2);
});

app.use(async (ctx, next) => {
  ctx.body = ctx.body || [];
  ctx.body.push(3);
  await next();
  ctx.body.push(4);
});
```

Откройте в браузере http://localhost:13000/api/hello, чтобы просмотреть данные ответа:

```js
{"data": [1,3,4,2]}
```

## Встроенные middleware и порядок выполнения

1. `cors`
2. `bodyParser`
3. `i18n`
4. `dataWrapping`
5. `db2resource`
6. `restApi`
   1. `parseToken`
   2. `checkRole`
   3. `acl`
      1. Дополнительные middleware, добавленные через `acl.use()`
   4. Дополнительные middleware, добавленные через `resourcer.use()`
   5. `action handler`
7. Дополнительные middleware, добавленные через `app.use()`

Также можно использовать `before` или `after`, чтобы вставить middleware в определённую позицию по метке `tag`. Например:

```ts
app.use(m1, { tag: 'restApi' });
app.resourcer.use(m2, { tag: 'parseToken' });
app.resourcer.use(m3, { tag: 'checkRole' });
// m4 будет размещен перед m1
app.use(m4, { before: 'restApi' });
// m5 будет вставлен между m2 и m3
app.resourcer.use(m5, { after: 'parseToken', before: 'checkRole' });
```

Если положение явно не указано, порядок выполнения добавленных middleware следующий:

1. Сначала выполняются middleware, добавленные через `acl.use`.
2. Затем выполняются middleware, добавленные через `resourcer.use`, включая обработчики middleware и action handler.
3. В конце выполняются middleware, добавленные через `app.use`.

```ts
app.use(async (ctx, next) => {
  ctx.body = ctx.body || [];
  ctx.body.push(1);
  await next();
  ctx.body.push(2);
});

app.resourcer.use(async (ctx, next) => {
  ctx.body = ctx.body || [];
  ctx.body.push(3);
  await next();
  ctx.body.push(4);
});

app.acl.use(async (ctx, next) => {
  ctx.body = ctx.body || [];
  ctx.body.push(5);
  await next();
  ctx.body.push(6);
});

app.resourcer.define({
  name: 'test',
  actions: {
    async list(ctx, next) {
      ctx.body = ctx.body || [];
      ctx.body.push(7);
      await next();
      ctx.body.push(8);
    },
  },
});
```

Откройте в браузере http://localhost:13000/api/hello, чтобы просмотреть данные ответа:

```js
{"data": [1,2]}
```

Откройте в браузере http://localhost:13000/api/test:list, чтобы просмотреть данные ответа:

```js
{"data": [5,3,7,1,2,8,4,6]}
```

### Ресурс не определён, middleware, добавленные через `resourcer.use()`, не выполняются.

```ts
app.use(async (ctx, next) => {
  ctx.body = ctx.body || [];
  ctx.body.push(1);
  await next();
  ctx.body.push(2);
});

app.resourcer.use(async (ctx, next) => {
  ctx.body = ctx.body || [];
  ctx.body.push(3);
  await next();
  ctx.body.push(4);
});
```

Откройте в браузере http://localhost:13000/api/hello, чтобы просмотреть данные ответа:

```js
{"data": [1,2]}
```

В приведённом выше примере ресурс `hello` не определён, поэтому выполнение не войдёт в `resourcer`, и middleware внутри `resourcer` выполняться не будет.

## Назначение middleware

Будет дополнено.

## Пример

- [samples/ratelimit](https://github.com/nocobase/nocobase/blob/main/packages/samples/ratelimit/) IP rate-limiting
