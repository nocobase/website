# Google Workspace

## Настройка Google в качестве IdP

[Google Admin Console](https://admin.google.com/) — Приложения — Веб-приложения и мобильные приложения

![](https://static-docs.nocobase.com/0812780b990a97a63c14ea8991959827.png)

После настройки приложения скопируйте URL SSO, ID сущности и сертификат.

![](https://static-docs.nocobase.com/aafd20a794730e85411c0c8f368637e0.png)

## Добавление нового аутентификатора в NocoBase

Настройки плагина — Аутентификация пользователей — Добавить — SAML

![](https://static-docs.nocobase.com/5bc18c7952b8f15828e26bb07251a335.png)

Вставьте скопированную ранее информацию:

- SSO URL: URL SSO.
- Public Certificate: Сертификат.
- idP Issuer: ID сущности (Entity ID).
- http: Если вы тестируете локально через HTTP, установите флажок.

Затем скопируйте SP Issuer/EntityID и ACS URL из раздела Usage.

## Ввод информации SP в Google

Вернитесь в консоль Google. На странице Детали поставщика услуг введите скопированные ранее Acs URL и Entity ID и установите флажок Подписанные ответы.

![](https://static-docs.nocobase.com/1536268bf8df4a5ebc72384317172191.png)

![](https://static-docs.nocobase.com/c7de1f8b84c1335de110e5a7c96255c4.png)

В разделе Сопоставление атрибутов добавьте необходимые сопоставления для соответствующих атрибутов.

![](https://static-docs.nocobase.com/27180f2f46480c3fee3016df86d6fdb8.png)