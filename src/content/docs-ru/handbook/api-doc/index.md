# Документация API

<PluginInfo name="api-doc"></PluginInfo>

## Введение

Генерация документации HTTP API для NocoBase на основе Swagger.

## Установка

Встроенный плагин, не требует установки. Достаточно активировать для использования.

## Инструкция по использованию

### Доступ к странице документации API

http://localhost:13000/admin/settings/api-doc/documentation

![](https://static-docs.nocobase.com/8db51cf50e3c666aba5a850a0fb664a0.png)

### Обзор документации

![](https://static-docs.nocobase.com/5bb4d3e5bba6c6fdfcd830592e72385b.png)

- Общая документация API: `/api/swagger:get`
- Документация API ядра: `/api/swagger:get?ns=core`
- Документация API всех плагинов: `/api/swagger:get?ns=plugins`
- Документация для каждого плагина: `/api/swagger:get?ns=plugins/{name}`
- Документация API пользовательских коллекций: `/api/swagger:get?ns=collections`
- Указанные ресурсы `${collection}` и связанные `${collection}.${association}`: `/api/swagger:get?ns=collections/{name}`

## Руководство разработчика

### Как написать документацию Swagger для плагина

Добавьте файл `swagger/index.ts` в папку `src` вашего плагина со следующим содержанием:

```typescript
export default {
  info: {
    title: 'NocoBase API - Auth plugin',
  },
  tags: [],
  paths: {},
  components: {
    schemas: {},
  },
};
```

Подробные правила написания можно найти в [официальной документации Swagger](https://swagger.io/docs/specification/about/)