# Вход через Google

> https://developers.google.com/identity/openid-connect/openid-connect

## Получение учетных данных Google OAuth 2.0

[Консоль Google Cloud](https://console.cloud.google.com/apis/credentials) — Создать учетные данные — Идентификатор клиента OAuth

![](https://static-docs.nocobase.com/0f2946c8643565ecc4ac13249882638c.png)

Перейдите в интерфейс настройки и укажите URL перенаправления авторизации. URL перенаправления можно получить в NocoBase при добавлении нового аутентификатора. Обычно он имеет вид `http(s)://host:port/api/oidc:redirect`. См. раздел [Руководство пользователя - Настройка](../index.md#配置).

![](https://static-docs.nocobase.com/24078bf52ec966a16334894cb3d9d126.png)

## Добавление нового аутентификатора в NocoBase

Настройки плагина — Аутентификация пользователей — Добавить — OIDC

![](https://static-docs.nocobase.com/0e4b1acdef6335aaee2139ae6629977b.png)

Следуйте параметрам, описанным в разделе [Руководство пользователя - Настройка](../index.md#配置), чтобы завершить конфигурацию аутентификатора.