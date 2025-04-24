# Обзор

HTTP API NocoBase основан на дизайне Resource & Action и является надмножеством REST API. Операции не ограничиваются только CRUD. В NocoBase Resource Action можно свободно расширять.

## Ресурсы (Resource)

В NocoBase ресурсы (resource) могут быть представлены двумя способами:

- `<collection>`
- `<collection>.<association>`

<Alert>

- collection — это набор всех абстрактных данных
- association — это связанные данные collection
- resource включает два типа: collection и collection.association

</Alert>

</Alert>
### Примеры

- `posts` — статьи
- `posts.user` — пользователи статей
- `posts.tags` — теги статей

## Действия (Action)

Действия над ресурсами обозначаются как `:<action>`:

- `<collection>:<action>`
- `<collection>.<association>:<action>`

Встроенные глобальные действия, которые могут быть использованы для коллекции (collection) или ассоциации (association).

- `create` (создать)
- `get` (получить)
- `list` (список)
- `update` (обновить)
- `destroy` (удалить)
- `move` (переместить)

Встроенные действия для связей, которые используются только с ассоциациями (association):

- `set` (установить)
- `add` (добавить)
- `remove` (удалить)
- `toggle` (переключить)

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

### Примеры

Ресурс `posts`

```bash
POST  /api/posts:create    # Создание статьи
GET   /api/posts:list      # Получение списка статей
GET   /api/posts:get/1     # Получение статьи с ID = 1
POST  /api/posts:update/1  # Обновление статьи с ID = 1
POST  /api/posts:destroy/1 # Удаление статьи с ID = 1
```

Ресурс `posts.comments`

```bash
POST  /api/posts/1/comments:create
GET   /api/posts/1/comments:list
GET   /api/posts/1/comments:get/1
POST  /api/posts/1/comments:update/1
POST  /api/posts/1/comments:destroy/1
```

Ресурс `posts.tags`

```bash
POST  /api/posts/1/tags:create    # Создание тега для статьи с ID = 1
GET   /api/posts/1/tags:get       # Получение тега статьи с ID = 1
GET   /api/posts/1/tags:list      # Получение списка тегов статьи с ID = 1
POST  /api/posts/1/tags:update    # Обновление тега статьи с ID = 1
POST  /api/posts/1/tags:destroy   # Удаление тега статьи с ID = 1
POST  /api/posts/1/tags:add       # Добавление тега к статье с ID = 1
GET   /api/posts/1/tags:remove    # Удаление тега из статьи с ID = 1
```

## Идентификация ресурсов

- Ресурс `collection` идентифицируется через `collectionIndex`, который должен быть уникальным.
- Ресурс `association` идентифицируется через комбинацию `collectionIndex` и `associationIndex`. При этом `associationIndex` может быть не уникальным, но комбинированный индекс (`collectionIndex` + `associationIndex`) должен быть уникальным.

При просмотре деталей ресурса `association` в URL запроса необходимо указывать как `<collectionIndex>`, так и `<associationIndex>`. Наличие `<collectionIndex>` не является избыточным, поскольку `<associationIndex>` может быть не уникальным.

Например, `tables.fields` обозначает поля таблицы данных.
```bash
GET   /api/tables/table1/fields/title
GET   /api/tables/table2/fields/title
```

`table1` и `table2` имеют поле `title`. Поле `title` уникально в `table1`, но другие таблицы также могут содержать поле `title`.

## Параметры запроса

Параметры запроса могут быть переданы в headers, параметрах URL (query string) или в теле запроса (body). Однако у метода GET тела запроса нет.

Несколько специальных параметров запроса:

- `filter` — фильтр данных, используется в операциях, связанных с запросами;
- `filterByTk` — фильтрация по ключу записи (target key), используется для операций с конкретными записями;
- `sort` — сортировка, используется в операциях, связанных с запросами;
- `fields` — указывает, какие поля возвращать, используется в операциях, связанных с запросами;
- `appends` — добавляет связанные поля, используется в операциях, связанных с запросами;
- `except` — исключает определенные поля из вывода, используется в операциях, связанных с запросами;
- `whitelist` — белый список полей, используется при создании и обновлении данных;
- `blacklist` — черный список полей, используется при создании и обновлении данных;

### Фильтры

Фильтрация данных

```bash
# простой фильтр
GET /api/posts?filter[status]=publish
# Рекомендуется использовать формат JSON строки, требует кодирования через encodeURIComponent
GET /api/posts?filter={"status":"published"}

# операторы фильтрации
GET /api/posts?filter[status.$eq]=publish
GET /api/posts?filter={"status.$eq":"published"}

# $and
GET /api/posts?filter={"$and": [{"status.$eq":"published"}, {"title.$includes":"a"}]}
# $or
GET /api/posts?filter={"$or": [{"status.$eq":"pending"}, {"status.$eq":"draft"}]}

# поле ассоциации
GET /api/posts?filter[user.email.$includes]=gmail
GET /api/posts?filter={"user.email.$includes":"gmail"}
```

[Нажмите здесь, чтобы узнать больше о filter operators](http-api/filter-operators)

### filterByTk

Фильтрация по полю `tk` (target key). По умолчанию:

- Для ресурса **collection**, `tk` — это первичный ключ таблицы данных;
- Для ресурса **association**, `tk` — это поле `targetKey` ассоциации.

```bash
GET   /api/posts:get?filterByTk=1&fields=name,title&appends=tags
```

### Сортировка

Сортировка. Для сортировки по убыванию перед именем поля добавляется знак минус `-`.

```bash
# Поле createAt по возрастанию
GET   /api/posts:get?sort=createdAt
# Поле createAt по убыванию
GET   /api/posts:get?sort=-createdAt
# Сортировка по нескольким полям: createAt по убыванию, title по возрастанию (A-Z)
GET   /api/posts:get?sort=-createdAt,title
```

### Поля

Указывает, какие данные следует выводить.

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

Дополнительные поля связей

### except

Исключает поля (не выводит их) в операциях, связанных с запросами.

### whitelist

Белый список полей

```bash
POST  /api/posts:create?whitelist=title

{
  "title": "Мой первый пост",
  "date": "2022-05-19"      # Поле date будет отфильтровано и не будет записано в базу данных
}
```

### blacklist

Черный список

```bash
POST  /api/posts:create?blacklist=date

# Поле date будет отфильтровано и не будет записано в базу данных
{
  "title": "Мой первый пост"
}
```

## Ответ на запрос

Формат ответа

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

Просмотр подробной информации

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
      message: 'Имя должно быть обязательным',
    },
  ],
}
```
