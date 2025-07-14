### 🎉 New Features

- **[Multi-app manager]** Support to configure independent auth secret for sub-apps ([#7197](https://github.com/nocobase/nocobase/pull/7197)) by @mytharcher

- **[Workflow: CC]** Add CC node to workflow ([#7201](https://github.com/nocobase/nocobase/pull/7201)) by @mytharcher

- **[Workflow: Approval]** Add initializer for trigger by @mytharcher

### 🚀 Improvements

- **[Notification: In-app message]** Optimize font size for mobile message page ([#7199](https://github.com/nocobase/nocobase/pull/7199)) by @zhangzhonghe

- **[Workflow]** Convert operands to string before string comparison in logic calculation ([#7190](https://github.com/nocobase/nocobase/pull/7190)) by @mytharcher

- **[Multi-app manager]**
  - Add database and authorization options for sub-app ([#7184](https://github.com/nocobase/nocobase/pull/7184)) by @mytharcher

  - Add database and authorization options for sub-app ([#7184](https://github.com/nocobase/nocobase/pull/7184)) by @mytharcher

- **[Collection field: Code]** Add indent setting by @mytharcher

- **[Auth: DingTalk]** Support configuring the callback URL’s protocol and port number by @2013xile

### 🐛 Bug Fixes

- **[client]**
  - issue where attachment fields could not be selected as variables in linkage rule ([#7213](https://github.com/nocobase/nocobase/pull/7213)) by @zhangzhonghe

  - error when assigning values in list block using kanban sort field ([#7208](https://github.com/nocobase/nocobase/pull/7208)) by @katherinehhh

  - Filter collapse: Filter is not triggered during page initialization after setting default values for fields ([#7206](https://github.com/nocobase/nocobase/pull/7206)) by @zhangzhonghe

  - value assignment fails in edit form when both value and options are set for select field ([#7209](https://github.com/nocobase/nocobase/pull/7209)) by @katherinehhh

  - Popup action: Page display does not meet expectations after switching tabs ([#7212](https://github.com/nocobase/nocobase/pull/7212)) by @zhangzhonghe

  - Browser tab title is not synchronized when switching between submenus ([#7207](https://github.com/nocobase/nocobase/pull/7207)) by @zhangzhonghe

  - Fix the issue where dropdown select components are blocked by the keyboard on iOS ([#7149](https://github.com/nocobase/nocobase/pull/7149)) by @zhangzhonghe

- **[acl]** Fix error when deleting a role under role union mode that includes the root role. ([#7198](https://github.com/nocobase/nocobase/pull/7198)) by @aaaaaajie

- **[Authentication]** Fix the issue where the login page cannot scroll ([#7159](https://github.com/nocobase/nocobase/pull/7159)) by @zhangzhonghe

- **[Multi-app manager]** Fix auth options in unexpected position ([#7210](https://github.com/nocobase/nocobase/pull/7210)) by @mytharcher

- **[Notification: In-app message]** Fix BigInt timestamp in string format causes dayjs issue ([#7196](https://github.com/nocobase/nocobase/pull/7196)) by @mytharcher

- **[Action: Custom request]** variable parsing issue in URL during route navigation after custom request success ([#7186](https://github.com/nocobase/nocobase/pull/7186)) by @katherinehhh

- **[Block: Kanban]** fix subtable UI issues in Kanban and add support for Kanban column width setting ([#7189](https://github.com/nocobase/nocobase/pull/7189)) by @katherinehhh

- **[Workflow: Approval]**
  - Add `try/catch` in migration when update UI schema by @mytharcher

  - Fix block and association bugs by @mytharcher

  - Reload association on record by @mytharcher

  - To avoid error when user not exists by @mytharcher

