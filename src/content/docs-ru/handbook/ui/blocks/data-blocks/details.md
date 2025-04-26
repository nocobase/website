# Блок деталей

## Введение

Блок деталей используется для подробного отображения значений каждого поля каждой записи данных. Он поддерживает гибкую раскладку полей и включает встроенные операции с данными.

## Добавление блока

<video width="100%" height="440" controls>
      <source src="https://static-docs.nocobase.com/20240417122622.mp4" type="video/mp4">
</video>

## Параметры конфигурации блока

![20240511114328](https://static-docs.nocobase.com/20240511114328.png)

### Настройка диапазона данных

Пример: отображать только отправленные заказы.

![20240417122910](https://static-docs.nocobase.com/20240417122910.png)

Более подробная информация доступна в разделе [Настройка диапазона данных](/handbook/ui/blocks/block-settings/data-scope).

### Настройка правил сортировки

![20240417123300](https://static-docs.nocobase.com/20240417123300.png)

Более подробная информация доступна в разделе [Правила сортировки](/handbook/ui/blocks/block-settings/sorting-rule).

- [Настройка способа загрузки данных](/handbook/ui/blocks/block-settings/loading-mode)
- [Сохранение как шаблон блока](/handbook/ui/blocks/block-settings/block-template)

### Правила взаимодействия

Правила взаимодействия в блоке деталей поддерживают динамическую настройку отображения/скрытия полей.

Пример: скрыть дату отправки, если дата получения раньше даты отправки.

![20240511115156](https://static-docs.nocobase.com/20240511115156.png)

Более подробная информация доступна в разделе [Правила взаимодействия](/handbook/ui/blocks/block-settings/linkage-rule).

## Настройка полей

### Поля текущей таблицы

![20240417213735](https://static-docs.nocobase.com/20240417213735.png)

### Поля связанных таблиц

![20240417214006](https://static-docs.nocobase.com/20240417214006.png)

Параметры настройки полей деталей можно найти в разделе [Поля деталей](/handbook/ui/fields/generic/detail-form-item).

## Настройка операций

![20240417214433](https://static-docs.nocobase.com/20240417214433.png)

- [Редактирование](/handbook/ui/actions/types/edit)
- [Удаление](/handbook/ui/actions/types/delete)
- [Всплывающее окно](/handbook/ui/actions/types/pop-up)
- [Обновление записи](/handbook/ui/actions/types/update-record)
- [Пользовательский запрос](/handbook/action-custom-request)
- [Запуск рабочего процесса](/handbook/workflow/manual/triggers/custom-action)