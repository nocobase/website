# Обновление установки через Docker

<Alert>

В этой документации рассматривается установка Docker на основе конфигурационного файла `docker-compose.yml`, который также доступен в [репозитории NocoBase на GitHub](https://github.com/nocobase/nocobase/tree/main/docker).

</Alert>

## 1. Перейдите в каталог, где было выполнено предыдущее развертывание

В зависимости от ситуации можно перейти в каталог, где находится файл `docker-compose.yml`.

```bash
# SQLite
cd nocobase/docker/app-sqlite
# MySQL
cd nocobase/docker/app-mysql
# MariaDB
cd nocobase/docker/app-mariaDB
# PostgreSQL
cd nocobase/docker/app-postgres
```

## 2. Обновите номер версии image

Замените значение `image` для контейнера `app` в файле `docker-compose.yml` на последнюю версию.

```yml
services:
  app:
    image: nocobase/nocobase:latest # main — тестовая версия, latest — последняя стабильная версия
```

## 3. Перезапустите контейнеры

```bash
# Скачайте последний образ
docker-compose pull
# Запустите контейнеры
docker-compose up -d app
# Проверьте состояние процессов контейнера app
docker-compose logs app
```