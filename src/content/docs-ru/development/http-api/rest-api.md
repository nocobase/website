# REST API

HTTP API NocoBase является надмножеством REST API, стандартный CRUD API также поддерживает стиль RESTful.

## Ресурс Collection

---

### Создание collection

HTTP API

```bash
POST  /api/<collection>:create

{} # JSON body
```

REST API

```bash
POST  /api/<collection>

{} # JSON body
```

### Просмотр списка collection

HTTP API

```bash
GET   /api/<collection>:list
```

REST API

```bash
GET   /api/<collection>
```

### Просмотр деталей collection

HTTP API

```bash
GET   /api/<collection>:get?filterByTk=<collectionIndex>
GET   /api/<collection>:get/<collectionIndex>
```

REST API

```bash
GET   /api/<collection>/<collectionIndex>
```

### 更新 collection

HTTP API

```bash
POST   /api/<collection>:update?filterByTk=<collectionIndex>

{} # JSON body

# Или
POST   /api/<collection>:update/<collectionIndex>

{} # JSON body
```

REST API

```bash
PUT    /api/<collection>/<collectionIndex>

{} # JSON body
```

### Удаление collection

HTTP API

```bash
POST      /api/<collection>:destroy?filterByTk=<collectionIndex>
# Или
POST      /api/<collection>:destroy/<collectionIndex>
```

REST API

```bash
DELETE    /api/<collection>/<collectionIndex>
```

## Ресурс Association

---

### Создание Association

HTTP API

```bash
POST    /api/<collection>/<collectionIndex>/<association>:create

{} # JSON body
```

REST API

```bash
POST    /api/<collection>/<collectionIndex>/<association>

{} # JSON body
```

### Просмотр списка Association

HTTP API

```bash
GET   /api/<collection>/<collectionIndex>/<association>:list
```

REST API

```bash
GET   /api/<collection>/<collectionIndex>/<association>
```

### Просмотр деталей Association

HTTP API

```bash
GET   /api/<collection>/<collectionIndex>/<association>:get?filterByTk=<associationIndex>
# Или
GET   /api/<collection>/<collectionIndex>/<association>:get/<associationIndex>
```

REST API

```bash
GET   /api/<collection>/<collectionIndex>/<association>:get/<associationIndex>
```

### Обновление Association

HTTP API

```bash
POST   /api/<collection>/<collectionIndex>/<association>:update?filterByTk=<associationIndex>

{} # JSON body

# Или
POST   /api/<collection>/<collectionIndex>/<association>:update/<associationIndex>

{} # JSON body
```

REST API

```bash
PUT    /api/<collection>/<collectionIndex>/<association>:update/<associationIndex>

{} # JSON 数据
```

### Удаление Association

HTTP API

```bash
POST    /api/<collection>/<collectionIndex>/<association>:destroy?filterByTk=<associationIndex>
# Или
POST    /api/<collection>/<collectionIndex>/<association>:destroy/<associationIndex>
```

REST API

```bash
DELETE  /api/<collection>/<collectionIndex>/<association>/<associationIndex>
```
