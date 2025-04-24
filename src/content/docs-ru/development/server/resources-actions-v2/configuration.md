# Настройка ресурсов и операций

Самые простые действия с ресурсами (resource actions):
- Действия с параметрами по умолчанию
- Использование глобальных действий
- Слияние параметров действий из разных источников
- Использование встроенных действий

В NocoBase resource служит для работы с collection. Настроенные collections (включая связи, associations) автоматически преобразуются в соответствующие resources.

## Автоматическое преобразование

```ts
export class PluginSampleToResourcesServer extends Plugin {
  async load() {
    this.db.collection({
      name: 'posts',
      fields: [
        {
          type: 'hasMany',
          name: 'comments',
          target: 'comments',
        },
      ],
    });
    this.db.collection({
      name: 'comments',
    });
  }
}
```

Интерфейсы для `posts` и `posts.comments` в вышеуказанном примере выглядят следующим образом:

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

HTTP API в NocoBase является надмножеством REST API, и стандартные CRUD API также поддерживают стиль RESTful.

## Встроенные операции

После преобразования collection в resource становится возможным выполнение операций CRUD, так как некоторые часто используемые операции уже встроены.

Встроенные глобальные операции, которые могут использоваться для collection или association:

- create (создать)
- get (получить)
- list (список)
- update (обновить)
- destroy (удалить)
- move (переместить)

Встроенные операции ассоциации, применимые только к association:

- set (установить)
- add (добавить)
- remove (удалить)
- toggle (переключить)

Использование встроенных Actions можно найти в документации API.

## Пользовательские операции

### Глобальные операции

```ts
export class PluginSampleResourcerServer extends Plugin {
  async load() {
    this.resourcer.registerActions({
      import: async (ctx, next) => {},
      export: async (ctx, next) => {},
    });
  }
}
```

### Операции для определенного ресурса

```ts
export class PluginSampleResourcerServer extends Plugin {
  async load() {
    this.resourcer.registerActions({
      'posts:listPublished': async (ctx, next) => {},
    });
  }
}
```

## Пользовательские ресурсы

Если есть особые требования, ресурсы и связанные с ними операции также могут быть явно определены.

```ts
app.resourcer.define({
  name: 'posts',
  actions: {
    create: {},
    get: {},
    list: {},
    update: {},
    destroy: {},
  },
});
```
