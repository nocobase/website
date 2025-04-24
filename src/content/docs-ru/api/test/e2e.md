# End-to-End

## Обзор

NocoBase использует [Playwright](https://playwright.dev/) для E2E-тестирования и предоставляет несколько методов Mock, которые упрощают написание тестов.

### mockPage

Создает страницу NocoBase на основе конфигурации.

**Сигнатура**

- `mockPage(pageConfig?: PageConfig): NocoPage`

**Параметры**

| Имя параметра            | Тип                          | Значение по умолчанию | Описание                            |
| ------------------------ | ---------------------------- | --------------------- | ----------------------------------- |
| `pageConfig.type`        | `'group' \| 'page' \| 'link'` | `'page'`              | Тип страницы                       |
| `pageConfig.name`        | `string`                     | -                     | Название страницы, видимое для пользователя |
| `pageConfig.url`         | `string`                     | -                     | Ссылка для перехода (если тип — `link`) |
| `pageConfig.basePath`    | `string`                     | `'/admin/'`           | Базовый путь страницы               |
| `pageConfig.collections` | `CollectionSetting[]`        | -                     | Конфигурация коллекций данных страницы |
| `pageConfig.pageSchema`  | -                            | -                     | Общая схема страницы                |

**Пример**

Создание пустой страницы, которая автоматически удаляется после завершения текущего тестового случая.

```ts
import { test } from '@nocobase/test/e2e';

test('learn how to use mockPage', async ({ mockPage }) => {
  const nocoPage = await mockPage();
  await nocoPage.goto();
});
```

### mockManualDestroyPage

Создает страницу, которую нужно удалить вручную.

**Сигнатура**

- `mockManualDestroyPage(pageConfig?: PageConfig): NocoPage`

**Параметры**

Аналогично `mockPage`.

**Пример**

Создание пустой страницы, требующей ручного удаления. Полезно при использовании одной страницы в нескольких тестовых случаях.

```ts
import { test } from '@nocobase/test/e2e';

let nocoPage;

test.beforeAll(async ({ mockManualDestroyPage }) => {
  nocoPage = await mockManualDestroyPage();
});

test.afterAll(async () => {
  await nocoPage.destroy();
});

test('learn how to use mockManualDestroyPage', async ({ page }) => {
  // Используйте метод page.goto для перехода
  await page.goto(nocoPage.getUrl());
});
```

### mockCollections

Создает несколько коллекций на основе конфигурации.

**Сигнатура**

- `mockCollections(collectionSettings: CollectionSetting[]): Promise<void>`

**Параметры**

Определение типа [CollectionSetting](https://github.com/nocobase/nocobase/blob/323b527aeb46aee2bc23387fddc54f39a9504739/packages/core/test/src/e2e/e2eUtils.ts#L11-L90).

**Пример**

Создание таблицы данных с именем `posts`.

```ts
import { test } from '@nocobase/test/e2e';

test('learn how to use mockCollections', async ({ mockCollections }) => {
  await mockCollections([
    {
      name: 'posts',
    },
  ]);
});
```

### mockCollection

Создает одну коллекцию на основе конфигурации.

**Сигнатура**

- `mockCollection(collectionSetting: CollectionSetting): Promise<void>`

**Параметры**

Определение типа [CollectionSetting](https://github.com/nocobase/nocobase/blob/323b527aeb46aee2bc23387fddc54f39a9504739/packages/core/test/src/e2e/e2eUtils.ts#L11-L90).

**Пример**

Создание таблицы данных с именем `posts`.

```ts
import { test } from '@nocobase/test/e2e';

test('learn how to use mockCollection', async ({ mockCollection }) => {
  await mockCollection({
    name: 'posts',
  });
});
```

### mockRecords

Генерирует несколько записей для указанной коллекции.

**Сигнатура**

- `mockRecords<T>(collectionName: string, count?: number): Promise<T>`
- `mockRecords<T>(collectionName: string, records?: T[]): Promise<T[]>`

**Параметры**

Определение типа можно найти [здесь](https://github.com/nocobase/nocobase/blob/323b527aeb46aee2bc23387fddc54f39a9504739/packages/core/test/src/e2e/e2eUtils.ts#L166-L177).

**Пример**

Создание 10 записей в таблице данных `posts`.

```ts
import { test } from '@nocobase/test/e2e';

test('learn how to use mockRecords', async ({ mockRecords }) => {
  await mockRecords('posts', 10);
});
```

Настройка значения определенного поля.

```ts
import { test } from '@nocobase/test/e2e';

test('learn how to use mockRecords', async ({ mockRecords }) => {
  // Создание записи с title "hello world"
  await mockRecords('posts', [
    {
      title: 'hello world',
    },
  ]);
});
```

### mockRecord

Генерирует одну запись для указанной коллекции.

**Сигнатура**

- `mockRecord<T>(collectionName: string, data?: T): Promise<T>`

**Параметры**

Определение типа можно найти [здесь](https://github.com/nocobase/nocobase/blob/323b527aeb46aee2bc23387fddc54f39a9504739/packages/core/test/src/e2e/e2eUtils.ts#L156-L162).

**Пример**

Создание одной записи в таблице данных `posts`.

```ts
import { test } from '@nocobase/test/e2e';

test('learn how to use mockRecord', async ({ mockRecord }) => {
  await mockRecord('posts');
});
```

Настройка значения определенного поля.

```ts
import { test } from '@nocobase/test/e2e';

test('learn how to use mockRecord', async ({ mockRecord }) => {
  // Создание записи с title "hello world"
  await mockRecord('posts', {
    title: 'hello world',
  });
});
```

### deletePage

Метод для удобного удаления страницы по её заголовку.

**Сигнатура**

- `deletePage(title: string): Promise<void>`

**Пример**

Удаление страницы с именем `posts`.

```ts
import { test } from '@nocobase/test/e2e';

test('learn how to use deletePage', async ({ deletePage }) => {
  await deletePage('posts');
});
```