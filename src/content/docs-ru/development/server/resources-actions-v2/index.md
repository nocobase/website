# Основные концепции

## Ресурс (Resource)

В NocoBase ресурс (resource) может быть выражен двумя способами:

- `<collection>`
- `<collection>.<association>`

<Alert>

- collection — это набор всех видов абстрактных данных
- association — это связанные данные collection

</Alert>

Примеры:

- `posts` — статьи
- `posts.user` — пользователь статьи
- `posts.tags` — теги статьи

Настройка:

```js
// Статьи
{
  name: 'posts',
}
// Пользователь статьи
{
  name: 'posts.user',
}
// Теги статьи
{
  name: 'posts.tags',
}
```

## Операция (Action)

Операции над ресурсами обозначаются в формате `:<action>`:

- `<collection>:<action>`
- `<collection>.<association>:<action>`

**Примеры**

- `posts:create` — создание статьи
- `posts.user:get` — просмотр пользователя статьи
- `posts.tags:add` — добавление тегов к статье (связывание существующих тегов со статьей)

Настройка:

```js
// Конфигурация операций CRUD для ресурса "статьи"
{
  name: 'posts',
  actions: {
    create: async (ctx, next) => {},
    get: async (ctx, next) => {},
    list: async (ctx, next) => {},
    update: async (ctx, next) => {},
    destroy: async (ctx, next) => {},
  },
}

// Ресурс "теги статьи"
{
  name: 'posts.tags',
  actions: {
    create: async (ctx, next) => {},
    get: async (ctx, next) => {},
    list: async (ctx, next) => {},
    update: async (ctx, next) => {},
    destroy: async (ctx, next) => {},
    add: async (ctx, next) => {},
    remove: async (ctx, next) => {},
  },
}
```

## Как запрашивать ресурсы

```bash
<GET|POST>   /api/<collection>:<action>
<GET|POST>   /api/<collection>:<action>/<filterByTk>
<GET|POST>   /api/<collection>/<sourceId>/<association>:<action>
<GET|POST>   /api/<collection>/<sourceId>/<association>:<action>/<filterByTk>
```

**Пример**

Ресурс posts

```bash
POST  /api/posts:create
GET   /api/posts:list
GET   /api/posts:get/1
POST  /api/posts:update/1
POST  /api/posts:destroy/1
```

Ресурс posts.comments

```bash
POST  /api/posts/1/comments:create
GET   /api/posts/1/comments:list
GET   /api/posts/1/comments:get/1
POST  /api/posts/1/comments:update/1
POST  /api/posts/1/comments:destroy/1
```

Ресурс posts.tags

```bash
POST  /api/posts/1/tags:create
GET   /api/posts/1/tags:get
GET   /api/posts/1/tags:list
POST  /api/posts/1/tags:update
POST  /api/posts/1/tags:destroy
POST  /api/posts/1/tags:add
GET   /api/posts/1/tags:remove
```

## Позиционирование ресурсов

Все ресурсы позиционируются через `filterByTk`:

- Для ресурсов collection, `filterByTk` должен быть уникальным.
- Для ресурсов association, `filterByTk` может не быть уникальным, поэтому для точного позиционирования также требуется указать `sourceId`.

Например, `tables.fields` обозначает поля таблицы данных:

```bash
GET   /api/tables/table1/fields/title
GET   /api/tables/table2/fields/title
```

У table1 и table2 есть поле title. Поле title уникально в контексте table1, но другие таблицы также могут содержать поле с таким же именем (title).
