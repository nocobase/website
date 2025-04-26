# Блок списка

## Введение

Блок списка отображает данные в виде списка и подходит для сценариев демонстрации данных, таких как списки задач, новостные ленты или информация о продуктах.

## Добавление блока

<video width="100%" height="440" controls>
      <source src="https://static-docs.nocobase.com/20240417224417.mp4" type="video/mp4">
</video>

## Параметры конфигурации блока

![20240417224539](https://static-docs.nocobase.com/20240417224539.png)

### Настройка диапазона данных

Как показано на рисунке: по умолчанию фильтруются заказы со статусом "Возврат".

![20240417224701](https://static-docs.nocobase.com/20240417224701.png)

Более подробная информация доступна в разделе [Настройка диапазона данных](/handbook/ui/blocks/block-settings/data-scope).

### Настройка правил сортировки

Как показано на рисунке: сортировка по размеру суммы заказа в обратном порядке.

![20240417225302](https://static-docs.nocobase.com/20240417225302.png)

Более подробная информация доступна в разделе [Настройка правил сортировки](/handbook/ui/blocks/block-settings/sorting-rule).

### Настройка способа загрузки данных

Обычно используется вместе с блоком фильтрации для загрузки данных только после применения фильтрации.

<video width="100%" height="440" controls>
      <source src="https://static-docs.nocobase.com/20240417225539.mp4" type="video/mp4">
</video>

Более подробная информация доступна в разделе [Настройка способа загрузки данных](/handbook/ui/blocks/block-settings/loading-mode).

- [Редактирование заголовка блока](/handbook/ui/blocks/block-settings/block-title)
- [Сохранение как шаблон блока](/handbook/ui/blocks/block-settings/block-template)

## Настройка полей

### Поля текущей таблицы

![20240417230027](https://static-docs.nocobase.com/20240417230027.png)

### Поля связанных таблиц

![20240417230115](https://static-docs.nocobase.com/20240417230115.png)

Параметры настройки полей списка можно найти в разделе [Поля деталей](/handbook/ui/fields/generic/detail-form-item).

## Настройка операций

### Глобальные операции

![20240421115811](https://static-docs.nocobase.com/20240421115811.png)

- [Фильтрация](/handbook/ui/actions/types/filter)
- [Добавление](/handbook/ui/actions/types/add-new)
- [Обновление](/handbook/ui/actions/types/refresh)
- [Импорт](/handbook/action-import)
- [Экспорт](/handbook/action-export)

### Операции со строками

![20240418114424](https://static-docs.nocobase.com/20240418114424.png)

- [Просмотр](/handbook/ui/actions/types/view)
- [Редактирование](/handbook/ui/actions/types/edit)
- [Удаление](/handbook/ui/actions/types/delete)
- [Всплывающее окно](/handbook/ui/actions/types/pop-up)
- [Обновление записи](/handbook/ui/actions/types/update-record)
- [Пользовательский запрос](/handbook/action-custom-request)