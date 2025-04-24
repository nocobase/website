# Аутентификация: LDAP

## Введение

Плагин "Аутентификация: LDAP" соответствует стандарту протокола LDAP (Lightweight Directory Access Protocol) и позволяет пользователям входить в NocoBase с использованием учетных данных аккаунта с сервера LDAP.

## Активация плагина

<img src="https://nocobase-docs.oss-cn-beijing.aliyuncs.com/202405101600789.png"/>

## Добавление аутентификации LDAP

Перейдите на страницу управления плагином аутентификации пользователей.

<img src="https://nocobase-docs.oss-cn-beijing.aliyuncs.com/202405101601510.png"/>

Добавьте - LDAP

<img src="https://nocobase-docs.oss-cn-beijing.aliyuncs.com/202405101602104.png"/>

## Настройка

### Базовая конфигурация

<img src="https://nocobase-docs.oss-cn-beijing.aliyuncs.com/202405101605728.png"/>

- Sign up automatically when the user does not exist - Автоматическое создание нового пользователя, если не удается найти существующего пользователя для привязки.
- LDAP URL - Адрес сервера LDAP.
- Bind DN - DN, используемый для тестирования подключения к серверу и поиска пользователей.
- Bind password - Пароль для Bind DN.
- Test connection - Нажмите кнопку для тестирования подключения к серверу и проверки работоспособности Bind DN.

### Настройки поиска

<img src="https://nocobase-docs.oss-cn-beijing.aliyuncs.com/202405101609984.png"/>

- Search DN - DN, используемый для поиска пользователей.
- Search filter - Условие фильтрации для поиска пользователей, где `{{account}}` обозначает учетную запись пользователя, используемую при входе.
- Scope - Область поиска: `Base`, `One level`, `Subtree`. По умолчанию `Subtree`.
- Size limit - Размер страницы для результатов поиска.

### Сопоставление атрибутов

<img src="https://nocobase-docs.oss-cn-beijing.aliyuncs.com/202405101612814.png"/>

- Use this field to bind the user - Поле, используемое для привязки существующих пользователей. Если для входа используется имя пользователя, выберите имя пользователя; если используется электронная почта, выберите электронную почту. По умолчанию используется имя пользователя.
- Attribute map - Сопоставление атрибутов пользователя с полями таблицы пользователей NocoBase.

## Вход в систему

Перейдите на страницу входа и введите имя пользователя и пароль LDAP в форме входа для авторизации.

<img src="https://nocobase-docs.oss-cn-beijing.aliyuncs.com/202405101614300.png"/>