# Пользовательский запрос
<PluginInfo name="action-custom-request"></PluginInfo>

## Введение

## Установка

Встроенный плагин, не требует отдельной установки.

## Инструкция по использованию

![20240426120014](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240426120014.png)

### Настройка прав доступа

При включении опции "Разрешить настройку интерфейса" можно настраивать пользовательские запросы.

![20240426114957](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240426114957.png)

Таблица `customRequests` является системной и настраивается через `acl.registerSnippet`.

```typescript
this.app.acl.registerSnippet({
  name: 'ui.customRequests', // ui.* соответствует разрешению для конфигурации интерфейса
  actions: ['customRequests:*'],
});
```

### Переменные

Поддерживаются переменные в URL и теле запроса:

- Текущая запись
- Текущий пользователь
- Текущее время

![20240426120953](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240426120953.png)

![20240426121051](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240426121051.png)

## Параметры настройки операции

### Настройки запроса

![20240426120131](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240426120131.png)

### Управление правами доступа

Каждое действие пользовательского запроса поддерживает настройку прав доступа для ролей. По умолчанию права предоставляются.

![20240426120451](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240426120451.png)