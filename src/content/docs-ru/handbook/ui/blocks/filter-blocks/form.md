# Блок фильтрации формы

## Введение

Блок фильтрации формы используется совместно с блоком данных и предоставляет возможность фильтрации для блока данных.

## Добавление блока

<video width="100%" height="440" controls>
      <source src="https://static-docs.nocobase.com/20240426172722.mp4" type="video/mp4">
</video>

## Параметры конфигурации блока

![20240421172115](https://static-docs.nocobase.com/20240421172115.png)

### Подключение блока данных

Блок фильтрации формы подключается к блоку деталей данных для реализации взаимодействия.

<video width="100%" height="440" controls>
      <source src="https://static-docs.nocobase.com/20240421170947.mp4" type="video/mp4">
</video>

Более подробная информация доступна в разделе [Подключение блока данных](/handbook/ui/blocks/block-settings/connect-block).

- [Редактирование заголовка блока](/handbook/ui/blocks/block-settings/block-title)
- [Правила взаимодействия](/handbook/ui/blocks/block-settings/linkage-rule)
- [Сохранение как шаблон блока](/handbook/ui/blocks/block-settings/block-template)

## Настройка полей

### Поля текущей таблицы

![20240421171135](https://static-docs.nocobase.com/20240421171135.png)

### Поля связанных таблиц

Поддерживается использование полей связанных таблиц в качестве условий фильтрации.

Пример: в таблице заказов есть поле отношения «многие-к-одному» для «клиентов». Фильтрация заказов выполняется по имени клиента и номеру телефона.

<video width="100%" height="440" controls>
<source src="https://static-docs.nocobase.com/20240421171437.mp4" type="video/mp4">
</video>

## Настройка операций

![Операция фильтрации](https://static-docs.nocobase.com/20240421171839.png)