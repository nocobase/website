# Как настроить таблицы данных?

В NocoBase есть три способа настройки таблиц данных:

<img src="./cm.svg" style="max-width: 800px;" />

## Настройка таблиц данных через интерфейс

Для бизнес-данных рекомендуется использовать конфигурацию через интерфейс. Платформа NocoBase предоставляет два варианта настройки таблиц данных через интерфейс.

### Стандартный табличный интерфейс

<img src="./table.jpg" style="max-width: 800px;" />

### Графический интерфейс настройки

<img src="./graph.jpg" style="max-width: 800px;" />

## Определение в коде плагина

В плагине пользовательские таблицы данных должны находиться в директории `src/server/collections/*.ts` плагина со следующим содержанием:

```ts
import { defineCollection } from '@nocobase/database';

export default defineCollection({
  name: 'examples',
});
```

Для расширения конфигурации существующего collection используется `extendCollection()`

```ts
import { extendCollection } from '@nocobase/database';

export default extendCollection({
  name: 'examples',
});
```

Ссылки на соответствующие API:

- [defineCollection()](/api/database#definecollection)
- [extendCollection()](/api/database#extendcollection)

:::info{title="Примечание"}
Collections, настроенные в плагине, автоматически синхронизируются с базой данных при активации плагина, создавая соответствующие таблицы и поля. Если плагин уже активирован, для синхронизации таблиц необходимо использовать команду обновления `yarn nocobase upgrade`.
:::

## Управление таблицами данных через REST API

Третьи стороны также могут управлять таблицами данных через HTTP-интерфейс (требуется открытие прав доступа).

### Коллекции (Collections)

```bash
GET     /api/collections
POST    /api/collections
GET     /api/collections/<collectionName>
PUT     /api/collections/<collectionName>
DELETE  /api/collections/<collectionName>
```

### Поля коллекции (Collection fields)

```bash
GET     /api/collections/<collectionName>/fields
POST    /api/collections/<collectionName>/fields
GET     /api/collections/<collectionName>/fields/<fieldName>
PUT     /api/collections/<collectionName>/fields/<fieldName>
DELETE  /api/collections/<collectionName>/fields/<fieldName>
```
