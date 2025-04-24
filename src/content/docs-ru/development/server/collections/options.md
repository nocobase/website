# Протокол Collection

Collection является центральным элементом NocoBase — это протокол, используемый для описания структуры данных (таблиц и полей). Он очень близок к концепциям реляционных баз данных, но не ограничивается только ими. Collection может работать с NoSQL базами данных, HTTP API и другими источниками данных.

<img src="./schema.svg" style="max-width: 800px;" >

На данный момент на основе протокола Collection реализована интеграция с реляционными базами данных (db.collections). В будущем планируется постепенная поддержка NoSQL баз данных, HTTP API и других источников данных.

Протокол Collection включает в себя две основные части: CollectionOptions и FieldOptions. Поскольку поля (Field) являются расширяемыми, параметры FieldOptions отличаются высокой гибкостью.

## CollectionOptions

```ts
interface CollectionOptions {
  name: string;
  title?: string;
  // Таблица древовидной структуры, TreeRepository
  tree?:
    | 'adjacency-list'
    | 'closure-table'
    | 'materialized-path'
    | 'nested-set';
  // Наследование родительско-дочерних отношений
  inherits?: string | string[];
  fields?: FieldOptions[];
  timestamps?: boolean;
  paranoid?: boolean;
  sortable?: CollectionSortable;
  model?: string;
  repository?: string;
  [key: string]: any;
}

type CollectionSortable =
  | string
  | boolean
  | { name?: string; scopeKey?: string };
```

## FieldOptions

Общие параметры полей

```ts
interface FieldOptions {
  name: string;
  type: string;
  hidden?: boolean;
  index?: boolean;
  interface?: string;
  uiSchema?: ISchema;
```

[Описание UI Schema смотрите здесь](/development/client/ui-schema-designer/what-is-ui-schema)

### Field Type

Field Type включает два типа: Attribute Type и Association Type:

**Attribute Type**

- 'boolean'
- 'integer'
- 'bigInt'
- 'double'
- 'real'
- 'decimal'
- 'string'
- 'text'
- 'password'
- 'date'
- 'time'
- 'array'
- 'json'
- 'jsonb'
- 'uuid'
- 'uid'
- 'formula'
- 'radio'
- 'sort'
- 'virtual'

**Association Type**

- 'belongsTo'
- 'hasOne'
- 'hasMany'
- 'belongsToMany'

### Field Interface

**Basic**

- input
- textarea
- phone
- email
- integer
- number
- percent
- password
- icon

**Choices**

- checkbox
- select
- multipleSelect
- radioGroup
- checkboxGroup
- chinaRegion

**Media**

- attachment
- markdown
- richText

**Date & Time**

- datetime
- time

**Relation**

- linkTo - `type: 'belongsToMany'`
- oho - `type: 'hasOne'`
- obo - `type: 'belongsTo'`
- o2m - `type: 'hasMany'`
- m2o - `type: 'belongsTo'`
- m2m - `type: 'belongsToMany'`

**Advanced**

- formula
- sequence

**System info**

- id
- createdAt
- createdBy
- updatedAt
- updatedBy
