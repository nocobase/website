### 🎉 New Features

- **[WeCom]** Add WeCom notification channel by @chenzhizdt

### 🚀 Improvements

- **[client]** restore default value when field title is cleared ([#5549](https://github.com/nocobase/nocobase/pull/5549)) by @katherinehhh

- **[Notification manager]**
  - Add UserSelect and UserAddition components to streamline the development of notification channels ([#5553](https://github.com/nocobase/nocobase/pull/5553)) by @2013xile

  - add API for getting channel types registry of notification plugin ([#5531](https://github.com/nocobase/nocobase/pull/5531)) by @mytharcher

  - adjust channel types registry name of notification plugin ([#5532](https://github.com/nocobase/nocobase/pull/5532)) by @mytharcher

  - add API of notification manager plugin for getting all registered types ([#5529](https://github.com/nocobase/nocobase/pull/5529)) by @mytharcher

- **[Notification: In-app message]** Improve in-app message UI and add some logs. ([#5550](https://github.com/nocobase/nocobase/pull/5550)) by @sheldon66

### 🐛 Bug Fixes

- **[database]**
  - fix  update collection options with filter target key ([#5558](https://github.com/nocobase/nocobase/pull/5558)) by @chareice

  - fix wrong primaryKeyField value in sequelize when works with multi filter target keys ([#5556](https://github.com/nocobase/nocobase/pull/5556)) by @chareice

- **[client]**
  - Fix the issue where skeleton components in table blocks do not disappear ([#5548](https://github.com/nocobase/nocobase/pull/5548)) by @zhangzhonghe

  - Fix  issues with deletion action , text ellipsis, and new data display in sub-table ([#5523](https://github.com/nocobase/nocobase/pull/5523)) by @katherinehhh

- **[Data source manager]** Fix remove data source in failed status ([#5554](https://github.com/nocobase/nocobase/pull/5554)) by @chareice

- **[Notification: Email]**
  - fix the query for users by ids in email notification ([#5533](https://github.com/nocobase/nocobase/pull/5533)) by @mytharcher

  - fix missed subject in email notification based on user ids ([#5534](https://github.com/nocobase/nocobase/pull/5534)) by @mytharcher

  - fix reaction field path in dynamic form of email notification ([#5527](https://github.com/nocobase/nocobase/pull/5527)) by @mytharcher

- **[Collection field: Many to many (array)]** Fix the issue where select component for a many to many (array) field has only one option ([#5544](https://github.com/nocobase/nocobase/pull/5544)) by @2013xile

- **[Notification manager]** fix page crash due to wrong channel type ([#5528](https://github.com/nocobase/nocobase/pull/5528)) by @mytharcher

- **[Workflow: SQL node]** Fix sse causing “waitForLoadState(‘networkidle’)” to timeout ([#5524](https://github.com/nocobase/nocobase/pull/5524)) by @hongboji

- **[Field component: mask]** Fixed original data cannot be shown by clicking if the component is in readonly state by @gchust

- **[Workflow: Custom action event]** Fix sse causing “waitForLoadState(‘networkidle’)” to timeout by @hongboji

- **[WeCom]** Fix the issue of 404 not found response when entering the application from WeCom workbench by @chenzhizdt

