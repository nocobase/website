### 🚀 Improvements

- **[Workflow]** Support to filter more fields of workflow ([#6995](https://github.com/nocobase/nocobase/pull/6995)) by @mytharcher

- **[Email manager]** supports the default sending value in pop-up, supports fuzzy search for recipients, and fixes problems by @jiannx

### 🐛 Bug Fixes

- **[database]** fix: add missing creator and updater fields in import xlsx ([#7011](https://github.com/nocobase/nocobase/pull/7011)) by @aaaaaajie

- **[client]**
  - missing field title when setting a variable in the assignment component ([#7001](https://github.com/nocobase/nocobase/pull/7001)) by @katherinehhh

  - Association fields shows sub-table and sub-form on hover in read-pretty mode ([#7002](https://github.com/nocobase/nocobase/pull/7002)) by @zhangzhonghe

  - markdown block linkage rules not working when triggered by popup action ([#7007](https://github.com/nocobase/nocobase/pull/7007)) by @katherinehhh

  - switching page in subtable of detail block within modal triggers unsaved changes warning ([#7004](https://github.com/nocobase/nocobase/pull/7004)) by @katherinehhh

  - field style linkage rules not working ([#7003](https://github.com/nocobase/nocobase/pull/7003)) by @katherinehhh

- **[Async task manager]** Fixed multiple execution issue during async import ([#7006](https://github.com/nocobase/nocobase/pull/7006)) by @aaaaaajie

- **[Localization]** Resolve error caused by empty texts ([#7010](https://github.com/nocobase/nocobase/pull/7010)) by @2013xile

- **[Action: Export records Pro]** Fixed multiple execution issue during async import by @aaaaaajie

- **[Workflow: Approval]** Fix delegated approval can not continue when approved by others by @mytharcher

- **[Email manager]**
  - multiple primary keys for table "mailmessagelabels_mailmessages" by @jiannx

  - setting pop-up not to display by @jiannx

  - mail fuzzy search to make unique filters by @jiannx

  - recipient fuzzy search supports associated fields by @jiannx

  - add the "id" field to the mailmessagelabelsMailmessages by @jiannx

