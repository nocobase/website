# Карточки сетки

## Введение

Блок карточек сетки отображает сводную информацию о записях данных в виде карточек. Он поддерживает настройку количества столбцов в зависимости от размера экрана, чтобы обеспечить удобное отображение на устройствах с различными размерами.

### Добавление блока

<video width="100%" height="440" controls>
      <source src="https://static-docs.nocobase.com/20240418120045.mp4" type="video/mp4">
</video>

## Параметры конфигурации блока

![20240419220708](https://static-docs.nocobase.com/20240419220708.png)

### Диапазон данных

<video width="100%" height="440" controls>
      <source src="https://static-docs.nocobase.com/20240419173617.mp4" type="video/mp4">
</video>

Более подробная информация доступна в разделе [Настройка диапазона данных](/handbook/ui/blocks/block-settings/data-scope).

### Настройка количества столбцов в одной строке

![20240408160228](https://static-docs.nocobase.com/20240408160228.png)

Поддерживается настройка количества столбцов для разных размеров экрана.

![20240408160844](https://static-docs.nocobase.com/20240408160844.png)

### Настройка способа загрузки данных

Пример: подключение блока данных + настройка способа загрузки данных.

Между таблицей заказов и таблицей товаров существует отношение «многие-ко-многим». Блок таблицы заказов и блок карточек сетки товаров реализуют взаимодействие фильтрации данных. Одновременно настраивается способ загрузки данных для блока карточек сетки как «После фильтрации данных».

<video width="100%" height="440" controls>
<source src="https://static-docs.nocobase.com/20240419175643.mp4" type="video/mp4">
</video>

- [Настройка правил сортировки](/handbook/ui/blocks/block-settings/sorting-rule)
- [Сохранение как шаблон блока](/handbook/ui/blocks/block-settings/block-template)

## Настройка полей

### Поля текущей таблицы

![20240418123118](https://static-docs.nocobase.com/20240418123118.png)

### Поля связанных таблиц

![20240418123147](https://static-docs.nocobase.com/20240418123147.png)

Параметры настройки полей блока карточек сетки можно найти в разделе [Поля деталей](/handbook/ui/fields/generic/detail-form-item).

## Настройка операций

### Глобальные операции

![20240418122905](https://static-docs.nocobase.com/20240418122905.png)

- [Фильтрация](/handbook/ui/actions/types/filter)
- [Добавление](/handbook/ui/actions/types/add-new)
- [Удаление](/handbook/ui/actions/types/delete)
- [Обновление](/handbook/ui/actions/types/refresh)
- [Импорт](/handbook/action-import)
- [Экспорт](/handbook/action-export)

### Операции со строками

![20240419222251](https://static-docs.nocobase.com/20240419222251.png)

- [Редактирование](/handbook/ui/actions/types/edit)
- [Удаление](/handbook/ui/actions/types/delete)
- [Всплывающее окно](/handbook/ui/actions/types/pop-up)
- [Обновление записи](/handbook/ui/actions/types/update-record)
- [Пользовательский запрос](/handbook/action-custom-request)
- [Запуск рабочего процесса](/handbook/workflow/manual/triggers/custom-action)