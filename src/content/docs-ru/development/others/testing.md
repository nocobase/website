# Модульное тестирование

## Введение

Тестирование в NocoBase основано на тестовом фреймворке [Jest](https://jestjs.io/). Кроме того, для удобства написания тестов мы предоставили два вспомогательных класса, которые имитируют серверные службы нормальной базы данных и приложения в тестовой среде.

### MockDatabase

Класс имитации базы данных наследуется от класса [`Database`](/api/database), и большинство функций остаются неизменными. Основное отличие заключается в том, что конструктор по умолчанию содержит случайный префикс таблицы, который изолирует связанные таблицы данных с помощью префикса имени от других тестовых случаев при инициализации базы данных для каждого тестового случая. Это гарантирует, что тестовые случаи не влияют друг на друга во время выполнения.

```ts
import { MockDatabase } from '@nocobase/test';

describe('my suite', () => {
  let db;

  beforeEach(async () => {
    db = new MockDatabase();

    db.collection({
      name: 'posts',
      fields: [
        {
          type: 'string',
          name: 'title',
        },
      ],
    });

    await db.sync();
  });

  test('my case', async () => {
    const postRepository = db.getRepository('posts');
    const p1 = await postRepository.create({
      values: {
        title: 'hello',
      },
    });

    expect(p1.get('title')).toEqual('hello');
  });
});
```

### MockServer

Симулированный сервер также наследуется от класса [Application](/api/server/application). За исключением того, что встроенная база данных создается с помощью класса MockDatabase, он предоставляет удобный функционал для генерации запросов на основе библиотеки [superagent](https://www.npmjs.com/package/superagent). Подход к написанию запросов — от отправки запроса до получения ответа — был упрощен за счет интеграции методов, таких как `.resource('posts').create()`.

```ts
import { mockServer } from '@nocobase/test';

describe('my suite', () => {
  let app;
  let agent;
  let db;

  beforeEach(async () => {
    app = mockServer();
    agent = app.agent();

    db.collection({
      name: 'posts',
      fields: [
        {
          type: 'string',
          name: 'title',
        },
      ],
    });

    await db.sync();
    await app.load();
  });

  test('my case', async () => {
    const { body } = await agent.resource('posts').create({
      values: {
        title: 'hello',
      },
    });

    expect(body.data.title).toEqual('hello');
  });
});
```

## Пример

В качестве примера возьмем функционал, описанный ранее в главе [Ресурсы и действия](development/guide/resources-actions), и напишем тест для плагина:

```ts
import { mockServer } from '@nocobase/test';
import Plugin from '../../src/server';

describe('shop actions', () => {
  let app;
  let agent;
  let db;

  beforeEach(async () => {
    app = mockServer();
    app.plugin(Plugin);
    agent = app.agent();
    db = app.db;

    await app.load();
    await db.sync();
  });

  afterEach(async () => {
    await app.destroy();
  });

  test('product order case', async () => {
    const { body: product } = await agent.resource('products').create({
      values: {
        title: 'iPhone 14 Pro',
        price: 7999,
        enabled: true,
        inventory: 1,
      },
    });
    expect(product.data.price).toEqual(7999);

    const { body: order } = await agent.resource('orders').create({
      values: {
        productId: product.data.id,
      },
    });
    expect(order.data.totalPrice).toEqual(7999);
    expect(order.data.status).toEqual(0);

    const { body: deliveredOrder } = await agent.resource('orders').deliver({
      filterByTk: order.data.id,
      values: {
        provider: 'SF',
        trackingNumber: '123456789',
      },
    });
    expect(deliveredOrder.data.status).toBe(2);
    expect(deliveredOrder.data.delivery.trackingNumber).toBe('123456789');
  });
});
```

После завершения написания, выполните команду тестирования в командной строке:

```bash
yarn test packages/samples/shop-actions
```

Данный тест проверит следующие моменты:

1. Товар может быть успешно создан;
2. Заказ может быть успешно создан;
3. Заказ может быть успешно отправлен.

Конечно, это лишь базовый пример, который не охватывает всех бизнес-аспектов, но для демонстрации процесса тестирования он уже достаточно информативен.

## Итог

Пример кода, рассмотренный в этой главе, собран в соответствующем пакете [packages/samples/shop-actions](https://github.com/nocobase/nocobase/tree/main/packages/samples/shop-actions), который можно запустить локально для просмотра результатов.
