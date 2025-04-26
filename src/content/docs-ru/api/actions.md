# @nocobase/actions

## Обзор

`@nocobase/actions` инкапсулирует общие методы, связанные с CRUD, и простой регистрацией через [ResourceManager](./resourcer/resource-manager), что позволяет глобально добавить CRUD-операции для системных ресурсов.

### Базовое использование

```ts
import * as actions from `@nocobase/actions`;

const resourceManager = new ResourceManager({
  // ...options
});

resourceManager.registerActionHandlers(actions);
```

## Методы операций

### create

Создание ресурса. `POST /api/<resource>:create`.

```shell
curl "http://localhost:13000/api/users:create" \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"username": "admin"}'
```

#### Тело запроса

| Параметр      | Тип     | Описание                |
| ------------- | ------- | ----------------------- |
| `[key: string]` | `any`  | Поля ресурса в виде пар ключ-значение |

### list

Получить список ресурсов. `GET /api/<resource>:list`.

```shell
curl -X GET http://localhost:13000/api/users:list
```

#### Параметры

| Параметр    | Тип        | Описание                                                  | Значение по умолчанию |
| ----------- | ---------- | --------------------------------------------------------- | --------------------- |
| `filter`    | `Filter`   | Параметры фильтрации, см. [Filter Operators](./database/operators) | -                     |
| `fields`    | `string[]` | Поля для получения                                        | -                     |
| `except`    | `string[]` | Поля для исключения                                        | -                     |
| `appends`   | `string[]` | Связанные поля для добавления                             | -                     |
| `sort`      | `string[]` | Параметры сортировки                                      | -                     |
| `pagniate`  | `boolean`  | Включить пагинацию                                        | `true`                |
| `page`      | `number`   | Текущая страница                                          | `1`                   |
| `pageSize`  | `number`   | Количество записей на страницу                            | `20`                  |

### get

Получить определенный ресурс. `GET /api/<resource>:get`.

```shell
curl -X GET http://localhost:13000/api/users:get?filterByTk=1
```

#### Параметры

| Параметр     | Тип                | Описание                                                  | Значение по умолчанию |
| ------------ | ------------------ | --------------------------------------------------------- | --------------------- |
| `filterByTk` | `number \| string` | Значение первичного ключа для фильтрации                  | -                     |
| `filter`     | `Filter`           | Параметры фильтрации, см. [Filter Operators](./database/operators) | -                     |
| `fields`     | `string[]`         | Поля для получения                                        | -                     |
| `except`     | `string[]`         | Поля для исключения                                        | -                     |
| `appends`    | `string[]`         | Связанные поля для добавления                             | -                     |

### update

Обновить один или несколько ресурсов. `PUT /api/<resource>:update`.

```shell
curl "http://localhost:13000/api/users:update?filterByTk=1" \
  -X PUT \
  -H "Content-Type: application/json" \
  -d '{"username": "admin"}'
```

#### Параметры

| Параметр     | Тип                | Описание                                                  |
| ------------ | ------------------ | --------------------------------------------------------- |
| `filter`     | `Filter`           | Параметры фильтрации, см. [Filter Operators](./database/operators) |                      |
| `filterByTk` | `number \| string` | Значение первичного ключа для фильтрации                  |                      |

Примечание: среди параметров необходимо указать хотя бы один из `filter` или `filterByTk`.

#### Тело запроса

| Параметр      | Тип     | Описание                |
| ------------- | ------- | ----------------------- |
| `[key: string]` | `any`  | Поля ресурса в виде пар ключ-значение |

### destroy

Удалить один или несколько ресурсов. `DELETE /api/<resource>:destroy`

```shell
curl -X DELETE http://localhost:13000/api/users:destory?filterByTk=1
```

#### Параметры

| Параметр     | Тип                | Описание                                                  |
| ------------ | ------------------ | --------------------------------------------------------- |
| `filter`     | `Filter`           | Параметры фильтрации, см. [Filter Operators](./database/operators) |                      |
| `filterByTk` | `number \| string` | Значение первичного ключа для фильтрации                  |                      |

Примечание: среди параметров необходимо указать хотя бы один из `filter` или `filterByTk`.

### firstOrCreate

Получить или создать ресурс. `POST /api/<resource>:firstOrCreate`.

```shell
curl "http://localhost:13000/api/users:firstOrCreate?filterKeys[]=username" \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"username": "admin", "nickname": "Admin"}'
```

#### Параметры

| Параметр     | Тип       | Описание                           |
| ------------ | ---------- | ---------------------------------- |
| `filterKeys` | `string[]` | Поля в теле запроса для поиска существующего ресурса |

#### Тело запроса

| Параметр      | Тип     | Описание                |
| ------------- | ------- | ----------------------- |
| `[key: string]` | `any`  | Поля ресурса в виде пар ключ-значение |

### updateOrCreate

Обновить или создать ресурс. `POST /api/<resource>:updateOrCreate`.

```shell
curl "http://localhost:13000/api/users:updateOrCreate?filterKeys[]=username" \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"username": "admin", "nickname": "Admin"}'
```

#### Параметры

| Параметр     | Тип       | Описание                           |
| ------------ | ---------- | ---------------------------------- |
| `filterKeys` | `string[]` | Поля в теле запроса для поиска существующего ресурса |

#### Тело запроса

| Параметр      | Тип     | Описание                |
| ------------- | ------- | ----------------------- |
| `[key: string]` | `any`  | Поля ресурса в виде пар ключ-значение |

### move

Переместить ресурс, изменить порядок сортировки. Обычно используется для реализации перетаскивания в интерфейсе. `POST /api/<resource>:move`.

```shell
curl -X POST "http://localhost:13000/api/users:move?sourceId=1&targetId=2"
```

#### Параметры

| Параметр      | Тип                       | Описание                                                 | Значение по умолчанию |
| ------------- | -------------------------- | -------------------------------------------------------- | --------------------- |
| `sourceId`    | `targetKey`                | ID перемещаемого элемента                                | -                     |
| `targetId`    | `targetKey`                | ID элемента, с которым меняется позиция                  | -                     |
| `sortField`   | `string`                   | Имя поля для хранения порядка сортировки                 | `sort`                |
| `targetScope` | `string`                   | Область сортировки, один resource может иметь разные scope | -                     |
| `sticky`      | `boolean`                  | Должен ли элемент быть закреплен сверху                  | -                     |
| `method`      | `insertAfter` \| `prepend` | Тип вставки: до или после целевого элемента              | -                     |

### set

Установить связанные объекты ресурса. `POST /api/<resource.association>:set`.

```shell
curl "http://localhost:13000/api/users.roles:set" \
  -X POST \
  -H "Content-Type: application/json" \
  -d '["admin", "member"]'
```

#### Тело запроса

- `TargetKey | TargetKey[]` - Массив значений первичных ключей связанных объектов.

### add

Добавить связанные объекты ресурса. `POST /api/<resource.association>:add`.

```shell
curl "http://localhost:13000/api/users.roles:add" \
  -X POST \
  -H "Content-Type: application/json" \
  -d '["admin"]'
```

#### Тело запроса

- `TargetKey | TargetKey[]` - Массив значений первичных ключей связанных объектов.

### remove

Удалить связанные объекты ресурса. `POST /api/<resource.association>:remove`.

```shell
curl "http://localhost:13000/api/users.roles:remove" \
  -X POST \
  -H "Content-Type: application/json" \
  -d '["admin"]'
```

#### Тело запроса

- `TargetKey | TargetKey[]` - Массив значений первичных ключей связанных объектов.

### toggle

Переключить связанные объекты ресурса: существующие удаляются, отсутствующие добавляются. `POST /api/<resource.association>:toggle`.

```shell
curl "http://localhost:13000/api/users.roles:toggle" \
  -X POST \
  -H "Content-Type: application/json" \
  -d '["admin", "member"]'
```

#### Тело запроса

- `TargetKey | TargetKey[]` - Массив значений первичных ключей связанных объектов.