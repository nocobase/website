### 🚀 Improvements

- **[Notification: In-app message]** Remove console error logging for SSE connection retries. ([#6205](https://github.com/nocobase/nocobase/pull/6205)) by @sheldon66

### 🐛 Bug Fixes

- **[client]**
  - missing drag setting in relation data quick-create operation modal ([#6201](https://github.com/nocobase/nocobase/pull/6201)) by @katherinehhh

  - issue with high precision number formatting not applying ([#6202](https://github.com/nocobase/nocobase/pull/6202)) by @katherinehhh

  - Fix an issue where clearing a association field in a form doesn't actually clear the field value when submitting the form ([#5540](https://github.com/nocobase/nocobase/pull/5540)) by @zhangzhonghe

  - Block does not refresh after form submission ([#6206](https://github.com/nocobase/nocobase/pull/6206)) by @zhangzhonghe

  - linked field value persisting on submission after relation field reset ([#6207](https://github.com/nocobase/nocobase/pull/6207)) by @katherinehhh

  - update action displaying for rows without update permissions in table ([#6204](https://github.com/nocobase/nocobase/pull/6204)) by @katherinehhh

- **[Collection field: Sort]** Fix sort field type not registered in external data source ([#6212](https://github.com/nocobase/nocobase/pull/6212)) by @mytharcher

- **[Authentication]** WebSocket authentication issue ([#6209](https://github.com/nocobase/nocobase/pull/6209)) by @2013xile

- **[Collection field: Attachment(URL)]** Fix deprecated request URL in hook by @mytharcher

