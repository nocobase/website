# Развертывание через Docker Compose

Остальные шаги аналогичны [установке Docker](/welcome/getting-started/installation/docker-compose).

<embed src="./env-note.md"></embed>

<br />

[>>> Подробнее см. полный список «переменных окружения» <<<](/welcome/getting-started/env)

## Привязка домена

На примере nginx, выполним проксирование через nginx на http://127.0.0.1:13000/

```bash
server {
    listen 80;
    server_name your_domain.com;  # 将 your_domain.com 替换为您的域名

    location / {
        proxy_pass http://127.0.0.1:13000/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "Upgrade";
        proxy_set_header Host $host;
    }
}
```

## Развертывание в подкаталоге

Для развертывания в подкаталоге необходимо настроить переменную окружения `APP_PUBLIC_PATH`.

```diff
services:
  app:
    image: nocobase/nocobase:latest
    environment:
+     - APP_PUBLIC_PATH=/nocobase/
```

URL приложения будет http://127.0.0.1:13000/nocobase/, а конфигурация Nginx выглядит следующим образом:

```bash
server {
    listen 80;
    server_name your_domain.com;  # 将 your_domain.com 替换为您的域名

    location /nocobase/ {
        proxy_pass http://127.0.0.1:13000/nocobase/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "Upgrade";
        proxy_set_header Host $host;
    }
}
```

Наконец, вы сможете получить доступ через http://your_domain.com/nocobase/
