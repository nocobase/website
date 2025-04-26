# Аутентификация: CAS

## Введение

Плагин "Аутентификация: CAS" соответствует стандарту протокола CAS (Central Authentication Service) и позволяет пользователям входить в NocoBase с использованием учетных данных, предоставленных сторонним поставщиком услуг аутентификации (IdP).

## Установка

## Руководство пользователя

### Активация плагина

![](https://static-docs.nocobase.com/469c48d9f2e8d41a088092c34ddb41f5.png)

### Добавление аутентификации CAS

Перейдите на страницу управления аутентификацией пользователей:

http://localhost:13000/admin/settings/auth/authenticators

Добавьте метод аутентификации CAS:

![](https://static-docs.nocobase.com/a268500c5008d3b90e57ff1e2ea41aca.png)

Настройте CAS и активируйте его:

![](https://static-docs.nocobase.com/2518b3fcc80d8a41391f3b629a510a02.png)

### Переход на страницу входа

http://localhost:13000/signin

![](https://static-docs.nocobase.com/49116aafbb2ed7218306f929ac8af967.png)