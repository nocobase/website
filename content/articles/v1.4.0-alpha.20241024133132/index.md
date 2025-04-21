### 🎉 New Features

- **[client]** Support adding groups on forms and detail blocks ([#5498](https://github.com/nocobase/nocobase/pull/5498)) by @katherinehhh

- **[Calendar]** plugin-calendar add default view settings and internationalization configurations ([#5487](https://github.com/nocobase/nocobase/pull/5487)) by @Cyx649312038

- **[Data source: KingbaseES]** Support for using Kingbase database as main or external data source (pg mode) by @chareice
Reference: [Data source - KingbaseES](https://docs.nocobase.com/handbook/data-source-kingbase)
### 🚀 Improvements

- **[database]** Support for static loading logic of plugins ([#5466](https://github.com/nocobase/nocobase/pull/5466)) by @chareice

- **[client]** Improve rendering performance of table blocks (first rendering time reduced by about 50%) ([#5438](https://github.com/nocobase/nocobase/pull/5438)) by @zhangzhonghe

- **[Mobile]** mobile client support filter form block ([#5482](https://github.com/nocobase/nocobase/pull/5482)) by @katherinehhh

- **[Backup manager]**
  - change `Backup local storage files` default setting to true by @gchust

  - Revert the database data if restoring action failed by @gchust

### 🐛 Bug Fixes

- **[server]** App's afterLoad event wasn't triggered after installation ([#5506](https://github.com/nocobase/nocobase/pull/5506)) by @chenos

- **[Public forms]** registration ACL snippet for public form ([#5505](https://github.com/nocobase/nocobase/pull/5505)) by @katherinehhh

- **[Backup manager]** fixed after restoring sub app, the main app will crash if sub app was using different schema by @gchust

