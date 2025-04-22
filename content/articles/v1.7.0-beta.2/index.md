### 🎉 New Features

- **[client]**
  - table block support hiding the index column (default visible) ([#6416](https://github.com/nocobase/nocobase/pull/6416)) by @katherinehhh

  - support configuring selectable field options in linkage rules ([#6338](https://github.com/nocobase/nocobase/pull/6338)) by @katherinehhh

  - support date scope (min/max) configuration for time fields in linkage rules ([#6356](https://github.com/nocobase/nocobase/pull/6356)) by @katherinehhh

- **[Block: Action panel]** support line break for action title in action panel ([#6433](https://github.com/nocobase/nocobase/pull/6433)) by @katherinehhh

### 🐛 Bug Fixes

- **[client]**
  - incorrect page number when adding data after subtable page size change ([#6437](https://github.com/nocobase/nocobase/pull/6437)) by @katherinehhh

  - The logo style is inconsistent with the previous one ([#6444](https://github.com/nocobase/nocobase/pull/6444)) by @zhangzhonghe

  - multi-select field value changes and option loss when deleting subtable records ([#6405](https://github.com/nocobase/nocobase/pull/6405)) by @katherinehhh

  - date field range selection excludes the max date ([#6418](https://github.com/nocobase/nocobase/pull/6418)) by @katherinehhh

  - When using the '$anyOf' operator, the linkage rule is invalid ([#6415](https://github.com/nocobase/nocobase/pull/6415)) by @zhangzhonghe

  - Data not updating in popup windows opened via Link buttons ([#6411](https://github.com/nocobase/nocobase/pull/6411)) by @zhangzhonghe

- **[Action: Batch edit]** Fix workflow can not be triggered in bulk edit submission ([#6440](https://github.com/nocobase/nocobase/pull/6440)) by @mytharcher

- **[Data visualization]** Removed fields appear when adding custom filter fields ([#6450](https://github.com/nocobase/nocobase/pull/6450)) by @2013xile

- **[Data source manager]** switching data source in role management does not load corresponding collections ([#6431](https://github.com/nocobase/nocobase/pull/6431)) by @katherinehhh

- **[Action: Custom request]** custom request server-side permission validation error ([#6438](https://github.com/nocobase/nocobase/pull/6438)) by @katherinehhh

- **[File manager]** Fix a few issues of file manager ([#6436](https://github.com/nocobase/nocobase/pull/6436)) by @mytharcher

- **[Notification: In-app message]**
  - Avoid wrong receivers configuration query all users ([#6424](https://github.com/nocobase/nocobase/pull/6424)) by @sheldon66

  - Differentiate the in-app message list background color from the message cards to enhance visual hierarchy and readability. ([#6417](https://github.com/nocobase/nocobase/pull/6417)) by @sheldon66

- **[Workflow: Manual node]**
  - Change version limit of migration to `<1.7.0` ([#6430](https://github.com/nocobase/nocobase/pull/6430)) by @mytharcher

  - Fix migration which missed table prefix and schema logic ([#6425](https://github.com/nocobase/nocobase/pull/6425)) by @mytharcher

