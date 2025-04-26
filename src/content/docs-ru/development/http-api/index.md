# Обзор

HTTP API NocoBase основан на дизайне Resource & Action и является надмножеством REST API. Операции не ограничиваются только CRUD. В NocoBase Resource Action можно свободно расширять.

## Ресурс (Resource)

В NocoBase ресурс (resource) может быть выражен двумя способами:

- `<collection>`
- `<collection>.<association>`

<Alert>

- collection — это набор всех абстрактных данных
- association — это связанные данные collection
- resource включает два типа: collection и collection.association

</Alert>

### Примеры

- `posts` — статьи
- `posts.user` — пользователи статей
- `posts.tags` — теги статей

## Действия (Action)

Действия над ресурсами обозначаются как `:<action>`:

- `<collection>:<action>`
- `<collection>.<association>:<action>`

Встроенные глобальные действия, которые могут использоваться для collection или association

- `create`
- `get`
- `list`
- `update`
- `destroy`
- `move`

Встроенные операции для связей (association), которые применяются только к association:

- `set` — установить
- `add` — добавить
- `remove` — удалить
- `toggle` — переключить

### Примеры

- `posts:create` — создание статьи
- `posts.user:get` — просмотр пользователя статьи
- `posts.tags:add` — добавление тегов к статье (связывание существующих тегов со статьей)

## URL запроса

```bash
<GET|POST>   /api/<collection>:<action>
<GET|POST>   /api/<collection>:<action>/<collectionIndex>
<GET|POST>   /api/<collection>/<collectionIndex>/<association>:<action>
<GET|POST>   /api/<collection>/<collectionIndex>/<association>:<action>/<associationIndex>
```

### Пример

ресурс posts

```bash
POST  /api/posts:create
GET   /api/posts:list
GET   /api/posts:get/1
POST  /api/posts:update/1
POST  /api/posts:destroy/1
```

ресурс posts.comments

```bash
POST  /api/posts/1/comments:create
GET   /api/posts/1/comments:list
GET   /api/posts/1/comments:get/1
POST  /api/posts/1/comments:update/1
POST  /api/posts/1/comments:destroy/1
```

ресурс posts.tags

```bash
POST  /api/posts/1/tags:create
GET   /api/posts/1/tags:get
GET   /api/posts/1/tags:list
POST  /api/posts/1/tags:update
POST  /api/posts/1/tags:destroy
POST  /api/posts/1/tags:add
GET   /api/posts/1/tags:remove
```

## Определение ресурсов

- Ресурс collection определяется через `collectionIndex`, который указывает на обрабатываемые данные. `collectionIndex` должен быть уникальным.
- Ресурс association определяется через комбинированный индекс `collectionIndex` и `associationIndex`. `associationIndex` может быть неуникальным, но комбинация `collectionIndex` и `associationIndex` должна быть уникальной.

При просмотре деталей ресурса association запрашиваемый URL должен содержать как `<collectionIndex>`, так и `<associationIndex>`. `<collectionIndex>` не является избыточным, поскольку `<associationIndex>` может быть неуникальным.

Например, `tables.fields` представляет поля таблицы данных.

```bash
GET   /api/tables/table1/fields/title
GET   /api/tables/table2/fields/title
```

У table1 и table2 есть поле title, где title уникален в table1, но такое же поле может существовать и в других таблицах.

## Параметры запроса

Параметры запроса могут быть помещены в headers, parameters (строка запроса) или body (у GET-запросов body отсутствует).

Несколько специальных параметров запроса Parameters:

- `filter` — фильтрация данных, используется в операциях, связанных с запросами;
- `filterByTk` — фильтрация по полю tk, используется для операций с указанием детальной информации;
- `sort` — сортировка, используется в операциях, связанных с запросами;
- `fields` — какие данные выводить, используется в операциях, связанных с запросами;
- `appends` — добавление связанных полей, используется в операциях, связанных с запросами;
- `except` — исключение определённых полей (не выводить их), используется в операциях, связанных с запросами;
- `whitelist` — белый список полей, используется в операциях создания и обновления данных;
- `blacklist` — чёрный список полей, используется в операциях создания и обновления данных;

### filter

Фильтрация данных

```bash
# simple
GET /api/posts?filter[status]=publish
# Рекомендуется использовать формат JSON-строки, который требует кодирования с помощью encodeURIComponent
GET /api/posts?filter={"status":"published"}

# Операторы фильтрации
GET /api/posts?filter[status.$eq]=publish
GET /api/posts?filter={"status.$eq":"published"}

# $and
GET /api/posts?filter={"$and": [{"status.$eq":"published"}, {"title.$includes":"a"}]}
# $or
GET /api/posts?filter={"$or": [{"status.$eq":"pending"}, {"status.$eq":"draft"}]}

# Поле связи (association)
GET /api/posts?filter[user.email.$includes]=gmail
GET /api/posts?filter={"user.email.$includes":"gmail"}
```

[Нажмите здесь, чтобы узнать больше о содержимом операторов фильтрации (filter operators)](http-api/filter-operators)

### filterByTk

Фильтрация по полю tk. По умолчанию:

- для ресурса collection: tk является первичным ключом таблицы данных;
- для ресурса association: tk является полем targetKey связи (association).

```bash
GET   /api/posts:get?filterByTk=1&fields=name,title&appends=tags
```

### sort

Сортировка. Для убывающего порядка перед полем добавляется знак минус `-`.

```bash
# Поле createAt по возрастанию
GET   /api/posts:get?sort=createdAt
# Поле createAt по убыванию
GET   /api/posts:get?sort=-createdAt
# Сортировка по нескольким полям: createAt по убыванию, title по возрастанию (A-Z)
GET   /api/posts:get?sort=-createdAt,title
```

### fields

Какие данные выводить

```bash
GET   /api/posts:list?fields=name,title

Response 200 (application/json)
{
  "data": [
    {
      "name": "",
      "title": ""
    }
  ],
  "meta": {}
}
```

### appends

Добавление связанных полей

### except

Исключение определённых полей (не выводить их), используется в операциях, связанных с запросами.

### whitelist

Белый список

```bash
POST  /api/posts:create?whitelist=title

{
  "title": "My first post",
  "date": "2022-05-19"      # Поле **date** будет отфильтровано и не будет записано в базу данных.  
}
```

### blacklist

Черный список

```bash
POST  /api/posts:create?blacklist=date

{
  "title": "My first post",
  "date": "2022-05-19"      # Поле **date** будет отфильтровано и не будет записано в базу данных.
}
```

## Формат ответа

Формат ответа на запросы

```ts
type ResponseResult = {
  data?: any; // Основные данные
  meta?: any; // Дополнительные данные
  errors?: ResponseError[]; // Ошибка
};

type ResponseError = {
  code?: string;
  message: string;
};
```

### Пример

Просмотр списка

```bash
GET /api/posts:list

Response 200 (application/json)

{
  data: [
    {
      id: 1
    }
  ],
  meta: {
    count: 1
    page: 1,
    pageSize: 1,
    totalPage: 1
  },
}
```

Просмотреть детали

```bash
GET /api/posts:get/1

Response 200 (application/json)

{
  data: {
    id: 1
  },
}
```

Ошибка

```bash
POST /api/posts:create

Response 400 (application/json)

{
  errors: [
    {
      message: 'name must be required',
    },
  ],
}
```
