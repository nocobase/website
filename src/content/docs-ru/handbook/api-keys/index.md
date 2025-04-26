# API-ключи

## Введение

## Установка

## Инструкция по использованию

http://localhost:13000/admin/settings/api-keys/configuration

![](https://static-docs.nocobase.com/d64ccbdc8a512a0224e9f81dfe14a0a8.png)

### Добавление API-ключа

![](https://static-docs.nocobase.com/46141872fc0ad9a96fa5b14e97fcba12.png)

**Важные замечания**

- Добавленный API-ключ принадлежит текущему пользователю, а роль соответствует роли текущего пользователя.
- Убедитесь, что переменная окружения `APP_KEY` настроена и не была скомпрометирована. Если значение `APP_KEY` изменится, все ранее добавленные API-ключи станут недействительными.

### Как настроить APP_KEY

Для версии Docker отредактируйте файл `docker-compose.yml`:

```diff
services:
  app:
    image: nocobase/nocobase:main
    environment:
+     - APP_KEY=4jAokvLKTJgM0v_JseUkJ
```

Для установки из исходного кода или через `create-nocobase-app`, просто измените значение `APP_KEY` в файле `.env`:

```bash
APP_KEY=4jAokvLKTJgM0v_JseUkJ
```