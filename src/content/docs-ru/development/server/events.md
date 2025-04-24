# События

NocoBase предоставляет множество событий для прослушивания на протяжении жизненного цикла приложения, плагинов и базы данных. Эти методы выполняются только после того, как соответствующее событие было вызвано.

## Как добавить прослушивание событий?

Регистрация событий обычно размещается в методах `afterAdd` или `beforeLoad`.

```ts
export class MyPlugin extends Plugin {
  // После добавления плагина, метод afterAdd() выполняется независимо от того, был ли плагин активирован.
  afterAdd() {
    this.app.on();
    this.db.on();
  }

  // Метод beforeLoad() выполняется только после активации плагина.
  beforeLoad() {
    this.app.on();
    this.db.on();
  }
}
```

### `db.on`

События, связанные с базой данных, относятся к конфигурации Collection и CRUD-операциям Repository. Они включают в себя:

- 'beforeSync' / 'afterSync'
- 'beforeValidate' / 'afterValidate'
- 'beforeCreate' / 'afterCreate'
- 'beforeUpdate' / 'afterUpdate'
- 'beforeSave' / 'afterSave'
- 'beforeDestroy' / 'afterDestroy'
- 'afterCreateWithAssociations'
- 'afterUpdateWithAssociations'
- 'afterSaveWithAssociations'
- 'beforeDefineCollection'
- 'afterDefineCollection'
- 'beforeRemoveCollection' / 'afterRemoveCollection'

Больше информации можно найти в [Database API](/api/database#内置事件).

### `app.on()`

События приложения связаны с жизненным циклом приложения. К ним относятся следующие события:

- 'beforeLoad' / 'afterLoad'
- 'beforeInstall' / 'afterInstall'
- 'beforeUpgrade' / 'afterUpgrade'
- 'beforeStart' / 'afterStart'
- 'beforeStop' / 'afterStop'
- 'beforeDestroy' / 'afterDestroy'

Больше информации можно найти в [Application API](/api/server/application#события).

## Пример

Продолжим пример простого интернет-магазина. Моделирование таблиц данных можно просмотреть в разделе [Таблицы и поля](/development/).

### Уменьшение запасов товаров после создания заказа

Обычно товары и заказы находятся в разных таблицах данных. После того как клиент оформил заказ, мы можем уменьшить количество товара на складе, чтобы избежать перепродажи. Для этого мы можем определить событие, которое будет срабатывать при создании заказа, и в этот момент обновить остатки товаров:

```ts
class ShopPlugin extends Plugin {
  beforeLoad() {
    this.db.on('orders.afterCreate', async (order, options) => {
      const product = await order.getProduct({
        transaction: options.transaction,
      });

      await product.update(
        {
          inventory: product.inventory - order.quantity,
        },
        {
          transaction: options.transaction,
        },
      );
    });
  }
}
```

Поскольку события Sequelize по умолчанию содержат информацию о транзакции, мы можем напрямую использовать `transaction`, чтобы гарантировать выполнение двух операций с данными в рамках одной транзакции.

Аналогично, можно изменить статус заказа на "отправлено" после создания записи о доставке:

```ts
class ShopPlugin extends Plugin {
  load() {
    this.db.on('deliveries.afterCreate', async (delivery, options) => {
      const orderRepo = this.db.getRepository('orders');
      await orderRepo.update({
        filterByTk: delivery.orderId,
        value: {
          status: 2
        }
        transaction: options.transaction
      });
    });
  }
}
```

### Простые фоновые задачи, работающие вместе с приложением

Если не рассматривать использование таких сложных решений, как плагин для работы с рабочими процессами, мы можем реализовать простой механизм фоновых задач через событийную модель на уровне приложения. Эти задачи могут быть привязаны к жизненному циклу приложения и остановлены после его завершения. Например, мы можем периодически сканировать все заказы и автоматически помечать их как полученные, если прошло время, отведенное на подтверждение получения:

```ts
class ShopPlugin extends Plugin {
  timer = null;
  orderReceiveExpires = 86400 * 7;

  checkOrder = async () => {
    const expiredDate = new Date(Date.now() - this.orderReceiveExpires);
    const deliveryRepo = this.db.getRepository('deliveries');
    const expiredDeliveries = await deliveryRepo.find({
      fields: ['id', 'orderId'],
      filter: {
        status: 0,
        createdAt: {
          $lt: expiredDate,
        },
      },
    });
    await deliveryRepo.update({
      filter: {
        id: expiredDeliveries.map((item) => item.get('id')),
      },
      values: {
        status: 1,
      },
    });
    const orderRepo = this.db.getRepository('orders');
    const [updated] = await orderRepo.update({
      filter: {
        status: 2,
        id: expiredDeliveries.map((item) => item.get('orderId')),
      },
      values: {
        status: 3,
      },
    });

    console.log('%d orders expired', updated);
  };

  load() {
    this.app.on('beforeStart', () => {
      // 每分钟执行一次
      this.timer = setInterval(this.checkOrder, 1000 * 60);
    });

    this.app.on('beforeStop', () => {
      clearInterval(this.timer);
      this.timer = null;
    });
  }
}
```

## Заключение

На основе приведенных выше примеров мы в общих чертах разобрались с назначением событий и способами их использования для расширения функционала:

- События, связанные с базой данных
- События, связанные с приложением

Примеры кода из этой главы собраны в соответствующем пакете [packages/samples/shop-events](https://github.com/nocobase/nocobase/tree/main/packages/samples/shop-events), который можно запустить локально для просмотра результатов.
