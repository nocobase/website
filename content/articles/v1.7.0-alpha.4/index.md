### 🎉 New Features

- **[client]**
  - support long text fields as title fields for association field ([#6495](https://github.com/nocobase/nocobase/pull/6495)) by @katherinehhh

  - Support field Style settings for font-size, font-weight, and font-style ([#6489](https://github.com/nocobase/nocobase/pull/6489)) by @katherinehhh

- **[Variables and secrets]** support environment variables in link button URL ([#6494](https://github.com/nocobase/nocobase/pull/6494)) by @katherinehhh

- **[Workflow: Aggregate node]** Support to configure precision for aggregation result ([#6491](https://github.com/nocobase/nocobase/pull/6491)) by @mytharcher

### 🚀 Improvements

- **[client]** support fuzzy matching for fields selected in filter button ([#6496](https://github.com/nocobase/nocobase/pull/6496)) by @katherinehhh

- **[Notification: Email]** Add secure field config description. ([#6501](https://github.com/nocobase/nocobase/pull/6501)) by @sheldon66

- **[Workflow: mailer node]** Add secure field config description. ([#6510](https://github.com/nocobase/nocobase/pull/6510)) by @sheldon66

- **[Calendar]** Calendar plugin with optional settings to enable or disable quick event creation ([#6391](https://github.com/nocobase/nocobase/pull/6391)) by @Cyx649312038

- **[WEB client]** add secondary confirmation prompt for Clear Cache ([#6505](https://github.com/nocobase/nocobase/pull/6505)) by @katherinehhh

- **[Email manager]** support reauthorize & auto select the account when sending an email by @jiannx

### 🐛 Bug Fixes

- **[client]**
  - action button transparency causing setting display issue on hover ([#6529](https://github.com/nocobase/nocobase/pull/6529)) by @katherinehhh

  - time field submission error in Chinese locale (invalid input syntax for type time) ([#6511](https://github.com/nocobase/nocobase/pull/6511)) by @katherinehhh

  - the height of the subtable in the form is set along with the form height ([#6518](https://github.com/nocobase/nocobase/pull/6518)) by @katherinehhh

  - linkage rule field default hidden with retained value not working ([#6503](https://github.com/nocobase/nocobase/pull/6503)) by @katherinehhh

  - add chi ld button not displaying icon-only mode ([#6504](https://github.com/nocobase/nocobase/pull/6504)) by @katherinehhh

- **[server]** The upgrade command may cause workflow errors ([#6524](https://github.com/nocobase/nocobase/pull/6524)) by @gchust

- **[utils]** Known 'desktop responsive' bug ([#6476](https://github.com/nocobase/nocobase/pull/6476)) by @zhangzhonghe

- **[evaluators]** Revert round decimal places to 9 ([#6492](https://github.com/nocobase/nocobase/pull/6492)) by @mytharcher

- **[Authentication]**
  - Trim authenticator options ([#6527](https://github.com/nocobase/nocobase/pull/6527)) by @2013xile

  - X-Authenticator missing ([#6526](https://github.com/nocobase/nocobase/pull/6526)) by @chenos

- **[Block: Map]**
  - map block key management issue causing request failures due to invisible characters ([#6521](https://github.com/nocobase/nocobase/pull/6521)) by @katherinehhh

  - secret key fields not triggering validation in map management ([#6509](https://github.com/nocobase/nocobase/pull/6509)) by @katherinehhh

- **[File manager]**
  - Unable to access files stored in COS ([#6512](https://github.com/nocobase/nocobase/pull/6512)) by @chenos

  - encode url ([#6497](https://github.com/nocobase/nocobase/pull/6497)) by @chenos

- **[WEB client]** The path in the route management table is different from the actual path ([#6483](https://github.com/nocobase/nocobase/pull/6483)) by @zhangzhonghe

- **[Block: Action panel]** layout issue in mobile action panel after hiding buttons due to permission control ([#6502](https://github.com/nocobase/nocobase/pull/6502)) by @katherinehhh

- **[Data source: Main]** Unable to create a MySQL view. ([#6477](https://github.com/nocobase/nocobase/pull/6477)) by @aaaaaajie

- **[Workflow]** Fix legacy tasks count after workflow deleted ([#6493](https://github.com/nocobase/nocobase/pull/6493)) by @mytharcher

- **[Action: Export records Pro]** Unable to export attachments by @chenos

- **[Backup manager]**
  - Upload files have not been restored when creating sub-app from backup template by @gchust

  - Restoration may cause workflow execution errors by @gchust

  - MySQL database restore failure caused by GTID set overlap by @gchust

- **[WeCom]** Resolve environment variables and secrets when retrieving notification configuration. by @2013xile

- **[Workflow: Approval]**
  - Fix process table error when job deleted by @mytharcher

  - Change returned approval as todo by @mytharcher

  - Fix error thrown when add query node result by @mytharcher

  - Fix action button missed in process table by @mytharcher

  - Style issue with the 'Apply new' popup dialog by @zhangzhonghe

