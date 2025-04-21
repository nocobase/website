### 🎉 New Features

- **[client]** Support field Style settings for font-size, font-weight, and font-style ([#6489](https://github.com/nocobase/nocobase/pull/6489)) by @katherinehhh

- **[Variables and secrets]** support environment variables in link button URL ([#6494](https://github.com/nocobase/nocobase/pull/6494)) by @katherinehhh

### 🚀 Improvements

- **[client]** support fuzzy matching for fields selected in filter button ([#6496](https://github.com/nocobase/nocobase/pull/6496)) by @katherinehhh

- **[Workflow: mailer node]** Add secure field config description. ([#6510](https://github.com/nocobase/nocobase/pull/6510)) by @sheldon66

- **[WEB client]** add secondary confirmation prompt for Clear Cache ([#6505](https://github.com/nocobase/nocobase/pull/6505)) by @katherinehhh

- **[Notification: Email]** Add secure field config description. ([#6501](https://github.com/nocobase/nocobase/pull/6501)) by @sheldon66

- **[Email manager]** support reauthorize & auto select the account when sending an email by @jiannx

### 🐛 Bug Fixes

- **[server]** The upgrade command may cause workflow errors ([#6524](https://github.com/nocobase/nocobase/pull/6524)) by @gchust

- **[client]**
  - the height of the subtable in the form is set along with the form height ([#6518](https://github.com/nocobase/nocobase/pull/6518)) by @katherinehhh

  - time field submission error in Chinese locale (invalid input syntax for type time) ([#6511](https://github.com/nocobase/nocobase/pull/6511)) by @katherinehhh

  - action button transparency causing setting display issue on hover ([#6529](https://github.com/nocobase/nocobase/pull/6529)) by @katherinehhh

- **[Authentication]**
  - Trim authenticator options ([#6527](https://github.com/nocobase/nocobase/pull/6527)) by @2013xile

  - X-Authenticator missing ([#6526](https://github.com/nocobase/nocobase/pull/6526)) by @chenos

- **[Block: Map]**
  - map block key management issue causing request failures due to invisible characters ([#6521](https://github.com/nocobase/nocobase/pull/6521)) by @katherinehhh

  - secret key fields not triggering validation in map management ([#6509](https://github.com/nocobase/nocobase/pull/6509)) by @katherinehhh

- **[File manager]** Unable to access files stored in COS ([#6512](https://github.com/nocobase/nocobase/pull/6512)) by @chenos

- **[Action: Export records Pro]** Unable to export attachments by @chenos

- **[Backup manager]** Restoration may cause workflow execution errors by @gchust

- **[WeCom]** Resolve environment variables and secrets when retrieving notification configuration. by @2013xile

- **[Workflow: Approval]**
  - Fix process table error when job deleted by @mytharcher

  - Fix error thrown when add query node result by @mytharcher

  - Fix null user caused crash by @mytharcher

