# Диаграмма Ганта

<PluginInfo name="block-gantt"></PluginInfo>

## Введение

Блок диаграммы Ганта отображает данные в виде временной шкалы и подходит для управления проектами, планирования событий, инженерного планирования и распределения задач.

## Установка

Встроенный плагин, не требует установки.

## Добавление блока

![](https://static-docs.nocobase.com/f064f8fadf52947c990f5dad97736f98.png)

![](https://static-docs.nocobase.com/858112f44bc543973b6e5b03856a6360.png)

- Поле заголовка: Используется для идентификации полосы задач;
- Уровень масштабирования времени: Уровень масштабирования времени, по умолчанию — дни;
- Поле даты начала: Дата начала каждой задачи (обязательно);
- Поле даты окончания: Дата окончания каждой задачи (обязательно);
- Поле прогресса: Поле, указывающее прогресс (в процентах), необязательно;

## Инструкция по использованию

![](https://static-docs.nocobase.com/fff6fe1e1fe0a88d20f80b3bb7233608.gif)

- При наведении курсора мыши появляется всплывающая карточка с информацией о продолжительности задачи и её прогрессе;
- Перетаскивание для изменения даты начала и даты окончания задачи;
- Перетаскивание полосы прогресса для изменения прогресса задачи;

## Параметры конфигурации блока

![20240419211301](https://static-docs.nocobase.com/20240419211301.png)

### Настройка диапазона данных

![20240419211033](https://static-docs.nocobase.com/20240419211033.png)

Для получения дополнительной информации см. [Настройка диапазона данных](/handbook/ui/blocks/block-settings/data-scope).

- [Сохранить как шаблон блока](/handbook/ui/blocks/block-settings/block-template)
- [Настройка способа загрузки данных](/handbook/ui/blocks/block-settings/loading-mode)

## Настройка действий

### Глобальные действия

![20240419213653](https://static-docs.nocobase.com/20240419213653.png)

- [Фильтр](/handbook/ui/actions/types/filter)
- [Добавить](/handbook/ui/actions/types/add-new)
- [Удалить](/handbook/ui/actions/types/delete)
- [Обновить](/handbook/ui/actions/types/refresh)
- [Импорт](/handbook/action-import)
- [Экспорт](/handbook/action-export)
- [Добавить данные](/handbook/action-add-record)
- [Массовое обновление](/handbook/action-bulk-update)
- [Массовое редактирование](/handbook/action-bulk-edit)

### Действия со строками

![20240419213823](https://static-docs.nocobase.com/20240419213823.png)

- [Просмотр](/handbook/ui/actions/types/view)
- [Редактировать](/handbook/ui/actions/types/edit)
- [Копировать](/handbook/action-duplicate)
- [Удалить](/handbook/ui/actions/types/delete)
- [Всплывающее окно](/handbook/ui/actions/types/pop-up)
- [Обновить запись](/handbook/ui/actions/types/update-record)
- [Пользовательский запрос](/handbook/action-custom-request)
- [Запуск рабочего процесса](/handbook/workflow/manual/triggers/custom-action)