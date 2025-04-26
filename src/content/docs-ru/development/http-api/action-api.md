# Action API

## Общие

---

Общие для ресурсов Collection и Association.

### `create`

```bash
POST  /api/users:create?whitelist=a,b&blacklist=c,d

{} # Тело запроса (Request Body)
```

- Параметры:
  - whitelist: Белый список
  - blacklist: Черный список
- Тело запроса: JSON-данные для вставки
- Тело ответа (data): Созданные данные в формате JSON

#### Создание пользователя

```bash
POST  /api/users:create

Request Body
{
  "email": "demo@nocobase.com",
  "name": "Admin"
}

Response 200 (application/json)
{
  "data": {},
}
```

#### Создание статьи пользователя

```bash
POST  /api/users/1/posts:create

Request Body
{
  "title": "My first post"
}

Response 200 (application/json)
{
  "data": {}
}
```

#### Поле association в теле запроса (Request Body)

```bash
POST  /api/posts:create

Request Body
{
  "title": "My first post",
  "user": 1
}

Response 200 (application/json)
{
  "data": {
    "id": 1,
    "title": "My first post",
    "userId": 1,
    "user": {
      "id": 1
    }
  }
}
```

### `update`

```bash
POST  /api/users:create?filterByTk=1&whitelist=a,b&blacklist=c,d

{} # Тело запроса (Request Body)
```

- Параметры:
  - whitelist: Белый список
  - blacklist: Черный список
  - filterByTk: Фильтрация по полю tk, по умолчанию tk является первичным ключом таблицы данных
  - filter: Фильтр, поддерживающий JSON-строку
- Тело запроса: JSON-данные для обновления

#### Поле association в теле запроса (Request Body)

```bash
POST  /api/posts:update/1

Request Body
{
  "title": "My first post 2",
  "user": 2
}

Response 200 (application/json)
{
  "data": [
    {
      "id": 1,
      "title": "My first post 2",
      "userId": 2,
      "user": {
        "id": 2
      }
    }
  ]
}
```

### `list`

### `get`

### `destroy`

### `move`

## Association

---

### `add`

### `set`

### `remove`

### `toggle`
