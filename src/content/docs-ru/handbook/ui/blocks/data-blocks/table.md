# Блок таблицы

## Введение

Блок таблицы является одним из ключевых встроенных блоков данных NocoBase и используется для отображения и управления структурированными данными в табличной форме. Он обладает гибкими настройками, такими как настройка столбцов таблицы, их ширины, правил сортировки, диапазона данных и других параметров. Также он имеет встроенный набор операций, таких как фильтрация, создание, копирование, редактирование и удаление.

## Добавление блока

<video width="100%" height="440" controls>
      <source src="https://static-docs.nocobase.com/20240415215027.mp4" type="video/mp4">
</video>

## Параметры конфигурации блока

![20240415215319](https://static-docs.nocobase.com/20240415215319.png)

### Настройка диапазона данных

Пример: по умолчанию фильтруются документы со статусом «Отправлено».

![20240415215404](https://static-docs.nocobase.com/20240415215404.png)

Более подробная информация доступна в разделе [Настройка диапазона данных](/handbook/ui/blocks/block-settings/data-scope).

### Настройка правил сортировки

Пример: отобразить документы в обратном порядке по дате отправки.

![20240415215509](https://static-docs.nocobase.com/20240415215509.png)

Более подробная информация доступна в разделе [Настройка правил сортировки](/handbook/ui/blocks/block-settings/sorting-rule).

### Подключение блоков данных

Пример: подключение блока таблицы заказов и блока деталей заказа для реализации взаимодействия фильтрации.

<video width="100%" height="440" controls>
      <source src="https://static-docs.nocobase.com/20240415221426.mp4" type="video/mp4">
</video>

Более подробная информация доступна в разделе [Подключение блоков данных](/handbook/ui/blocks/block-settings/connect-block).

- [Редактирование заголовка блока](/handbook/ui/blocks/block-settings/block-title)
- [Настройка способа загрузки данных](/handbook/ui/blocks/block-settings/loading-mode)
- [Сохранение как шаблон блока](/handbook/ui/blocks/block-settings/block-template)

## Настройка полей

### Поля текущей таблицы

![20240415223714](https://static-docs.nocobase.com/20240415223714.png)

### Поля связанных таблиц

![20240415223746](https://static-docs.nocobase.com/20240415223746.png)

### Отображение полей родительской таблицы (поля наследуемой таблицы)

Пример: таблица аренды заказов наследует таблицу заказов.

![20240415224242](https://static-docs.nocobase.com/20240415224242.png)

Параметры настройки полей столбцов таблицы можно найти в разделе [Поля столбцов таблицы](/handbook/ui/fields/generic/table-column).

## Настройка операций

### Глобальные операции

![20240415225525](https://static-docs.nocobase.com/20240415225525.png)

- [Фильтрация](/handbook/ui/actions/types/filter)
- [Добавление](/handbook/ui/actions/types/add-new)
- [Удаление](/handbook/ui/actions/types/delete)
- [Обновление](/handbook/ui/actions/types/refresh)
- [Импорт](/handbook/action-import)
- [Экспорт](/handbook/action-export)
- [Добавление данных](/handbook/action-add-record)
- [Массовое обновление](/handbook/action-bulk-update)
- [Массовое редактирование](/handbook/action-bulk-edit)

### Операции со строками

![20240415225657](https://static-docs.nocobase.com/20240415225657.png)

- [Просмотр](/handbook/ui/actions/types/view)
- [Редактирование](/handbook/ui/actions/types/edit)
- [Копирование](/handbook/action-duplicate)
- [Удаление](/handbook/ui/actions/types/delete)
- [Всплывающее окно](/handbook/ui/actions/types/pop-up)
- [Обновление записи](/handbook/ui/actions/types/update-record)
- [Пользовательский запрос](/handbook/action-custom-request)
