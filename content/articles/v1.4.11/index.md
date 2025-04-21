### 🚀 Improvements

- **[client]** Make more components support the 'Ellipsis overflow content' configuration item ([#5888](https://github.com/nocobase/nocobase/pull/5888)) by @zhangzhonghe

- **[database]** add firstOrCreate & updateOrCreate  to relation repository ([#5894](https://github.com/nocobase/nocobase/pull/5894)) by @chareice

### 🐛 Bug Fixes

- **[client]**
  - Fix missing x-data-source parameter in duplicate request template for external data source block ([#5882](https://github.com/nocobase/nocobase/pull/5882)) by @katherinehhh

  - Fix horizontal scrollbar issue in table within plugin ([#5899](https://github.com/nocobase/nocobase/pull/5899)) by @katherinehhh

  - Fix the issue where extra 'N/A' options sometimes appear in association field dropdowns ([#5878](https://github.com/nocobase/nocobase/pull/5878)) by @zhangzhonghe

  - Fix PG view creation issue, resolve error when selecting views across schemas ([#5881](https://github.com/nocobase/nocobase/pull/5881)) by @katherinehhh

  - Fix issue with group styles in form blocks when layout is set to horizontal ([#5884](https://github.com/nocobase/nocobase/pull/5884)) by @katherinehhh

- **[Users]**
  - Fix the issue where the form is not reset after adding or editing a user in user management. ([#5875](https://github.com/nocobase/nocobase/pull/5875)) by @2013xile

  - Fix the issues where pagination settings are reset after editing and submitting user profiles on the user management  following a page switch or a change of page size. ([#5893](https://github.com/nocobase/nocobase/pull/5893)) by @2013xile

- **[Data source manager]** Fix the filtering issues with the external data source Collection ([#5890](https://github.com/nocobase/nocobase/pull/5890)) by @chareice

- **[Public forms]** Fix issue where global theme switch affects public form preview page theme ([#5883](https://github.com/nocobase/nocobase/pull/5883)) by @katherinehhh

