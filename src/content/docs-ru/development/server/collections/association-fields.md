# Конфигурация полей отношений

В реляционных базах данных стандартный способ создания таблиц с отношениями заключается в добавлении внешнего ключа и затем наложения ограничения внешнего ключа. Например, пример создания таблицы с помощью Knex:

```ts
knex.schema.table('posts', function (table) {
  table.integer('userId').unsigned();
  table.foreign('userId').references('users.id');
});
```

Этот процесс создаст в таблице posts поле userId, и наложит внешний ключ с ограничением, где posts.userId ссылается на users.id. В NocoBase в коллекции (Collection) такая связь и ограничение создаются путем конфигурации поля отношений, например:

```ts
{
  name: 'posts',
  fields: [
    {
      type: 'belongsTo',
      name: 'user',
      target: 'users',
      foreignKey: 'userId',
    },
  ],
}
```

## Описание параметров отношений

### BelongsTo

```ts
interface BelongsTo {
  type: 'belongsTo';
  name: string;
  // Значение по умолчанию — множественное число от name
  target?: string;
  // Значение по умолчанию — первичный ключ целевой модели (target model), обычно 'id'
  targetKey?: any;
  // Значение по умолчанию — target + 'Id'
  foreignKey?: any;
}

// Первичный ключ id таблицы authors связан с внешним ключом authorId таблицы books
{
  name:  'books',
  fields: [
    {
      type: 'belongsTo',
      name: 'author',
      target: 'authors',
      targetKey: 'id',         // Первичный ключ таблицы authors
      foreignKey: 'authorId',  // Внешний ключ находится в таблице books
    }
  ],
}
```

### HasOne

```ts
interface HasOne {
  type: 'hasOne';
  name: string;
  // Значение по умолчанию — множественное число от name
  target?: string;
  // Значение по умолчанию — первичный ключ исходной модели (source model), обычно 'id'
  sourceKey?: string;
  // Значение по умолчанию — единственное число от имени source collection + 'Id'
  foreignKey?: string;
}

// Первичный ключ id таблицы users связан с внешним ключом userId таблицы profiles
{
  name:  'users',
  fields: [
    {
      type: 'hasOne',
      name: 'profile',
      target: 'profiles',
      sourceKey: 'id',      // Первичный ключ таблицы users
      foreignKey: 'userId', // Внешний ключ находится в таблице profiles
    }
  ],
}
```

### HasMany

```ts
interface HasMany {
  type: 'hasMany';
  name: string;
  // Значение по умолчанию — name
  target?: string;
  // Значение по умолчанию — первичный ключ исходной модели (source model), обычно 'id'
  sourceKey?: string;
  // Значение по умолчанию — единственное число от имени source collection + 'Id'
  foreignKey?: string;
}

// Первичный ключ id таблицы posts связан с полем postId таблицы comments
{
  name:  'posts',
  fields: [
    {
      type: 'hasMany',
      name: 'comments',
      target: 'comments',
      sourceKey: 'id',          // Первичный ключ таблицы posts
      foreignKey: 'postId',     // Внешний ключ в таблице comments
    }
  ],
}
```

### BelongsToMany

```ts
interface BelongsToMany {
  type: 'belongsToMany';
  name: string;
  // Значение по умолчанию - name
  target?: string;
  // Значение по умолчанию - строка, составленная из имён source collection name и target в естественном алфавитном порядке
  through?: string;
  // Значение по умолчанию - единственная форма source collection name + 'Id'
  foreignKey?: string;
  // Значение по умолчанию - первичный ключ source model, обычно id
  sourceKey?: string;
  // Значение по умолчанию - единственная форма target + 'Id'
  otherKey?: string;
  // Значение по умолчанию - первичный ключ target model, обычно id
  targetKey?: string;
}

// Первичный ключ таблицы tags, первичный ключ таблицы posts и два внешних ключа таблицы posts_tags связаны
{
  name: 'posts',
  fields: [
    {
      type: 'belongsToMany',
      name: 'tags',
      target: 'tags',
      through: 'posts_tags', // Промежуточная таблица
      foreignKey: 'tagId',   // Внешний ключ 1, в таблице posts_tags
      otherKey: 'postId',    // Внешний ключ 2, в таблице posts_tags
      targetKey: 'id',       // Первичный ключ таблицы tags
      sourceKey: 'id',       // Первичный ключ таблицы posts
    }
  ],
}
```
