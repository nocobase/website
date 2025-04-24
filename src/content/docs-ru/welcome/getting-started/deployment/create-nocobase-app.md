# Развертывание create-nocobase-app

Остальные шаги аналогичны [установке create-nocobase-app](/welcome/getting-started/installation/create-nocobase-app).

<embed src="./env-note.md"></embed>
- При развертывании в рабочей среде для уменьшения объема можно установить только необходимые зависимости с помощью команды `yarn install --production`.

<br />

[>>> Подробнее см. полный список «переменных окружения» <<<](/welcome/getting-started/env)

## Управление процессами приложения

NocoBase уже включает в себя [PM2](https://pm2.keymetrics.io/) для управления процессами приложения. В рабочей среде достаточно выполнить команду `yarn start`. Если требуется запуск в фоновом режиме, добавьте параметр `-d`, например:

```bash
# 后台运行
yarn start -d
```

Перезапуск

```bash
yarn nocobase pm2-restart
```

Остановка

```bash
yarn nocobase pm2-stop
```

Дополнительные команды PM2

```bash
yarn nocobase pm2 -h
```

## Настройка Nginx

В рабочей среде можно передать обслуживание статических файлов Nginx. NocoBase предоставляет команду `create-nginx-conf` для генерации конфигурационного файла Nginx.

```bash
yarn nocobase create-nginx-conf
```

Путь к файлу: `./storage/nocobase.conf`. При необходимости скорректируйте его, а затем добавьте в `/etc/nginx/sites-enabled`, например:

```bash
ln -s /app/nocobase/storage/nocobase.conf /etc/nginx/sites-enabled/nocobase.conf
```

**Примечания**

- При развертывании в подкаталоге необходимо настроить переменную окружения `APP_PUBLIC_PATH`. После настройки выполните команду `create-nginx-conf` повторно.
- Внесите изменения в сгенерированный файл `nocobase.conf` в зависимости от ситуации (например, укажите доменное имя).
- `/app/nocobase/` — это пример директории приложения. Замените его на реальный путь.
- `/etc/nginx/sites-enabled` является стандартным путем конфигурации Nginx. Реальный путь может отличаться. Проверьте его с помощью команды `nginx -V`.
- Если вы используете не Nginx, адаптируйте конфигурацию на основе примеров для Nginx.