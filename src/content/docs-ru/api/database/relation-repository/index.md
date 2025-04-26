# RelationRepository

`RelationRepository` — это объект "Repository" для типов отношений. `RelationRepository` позволяет выполнять операции с связанными данными без необходимости загрузки самой связи. На основе `RelationRepository` каждое отношение имеет соответствующую реализацию:

- [`HasOneRepository`](#has-one-repository)
- `HasManyRepository`
- `BelongsToRepository`
- `BelongsToManyRepository`

## Конструктор

**Сигнатура**

- `constructor(sourceCollection: Collection, association: string, sourceKeyValue: string | number)`

**Параметры**

| Параметр           | Тип               | Значение по умолчанию | Описание                                                                 |
| ------------------ | ------------------ | --------------------- | ------------------------------------------------------------------------ |
| `sourceCollection` | `Collection`       | -                     | Коллекция, соответствующая ссылочной связи (referencing relation)        |
| `association`      | `string`           | -                     | Название связи                                                           |
| `sourceKeyValue`   | `string \| number` | -                     | Значение ключа в ссылочной связи                                         |

## Свойства базового класса

### `db: Database`

Объект базы данных.

### `sourceCollection`

Коллекция, соответствующая ссылочной связи (referencing relation).

### `targetCollection`

Коллекция, соответствующая связанной связи (referenced relation).

### `association`

Объект `association` из Sequelize, соответствующий текущей связи.

### `associationField`

Поле в коллекции, соответствующее текущей связи.

### `sourceKeyValue`

Значение ключа в ссылочной связи.