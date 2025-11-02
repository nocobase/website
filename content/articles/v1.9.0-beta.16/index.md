### 🎉 New Features

- **[Workflow: Approval]** Support trigger mode of "Before data saved" by @mytharcher

### 🚀 Improvements

- **[server]** Add gateway log ([#7683](https://github.com/nocobase/nocobase/pull/7683)) by @2013xile

- **[Workflow: notification node]** Add `ignoreFail` option for notification node, which allow to continue workflow when notification sending failed ([#7736](https://github.com/nocobase/nocobase/pull/7736)) by @mytharcher

### 🐛 Bug Fixes

- **[client]**
  - Fix QR code scanning linkage rule configuration in action panel ([#7693](https://github.com/nocobase/nocobase/pull/7693)) by @katherinehhh

  - Fix iframe block linkage rule failure within modal ([#7694](https://github.com/nocobase/nocobase/pull/7694)) by @katherinehhh

- **[database]** Skip default value synchronization for MySQL JSON columns ([#7696](https://github.com/nocobase/nocobase/pull/7696)) by @2013xile

- **[Workflow]**
  - Fix the issue where, in service-splitting mode, improper handling of the in-memory pending queue caused some workflows to not execute ([#7692](https://github.com/nocobase/nocobase/pull/7692)) by @mytharcher

  - Fix value of execution status when create with deferred ([#7721](https://github.com/nocobase/nocobase/pull/7721)) by @mytharcher

  - Fix the issue where, after deleting a node that starts branching, the key of the first node retained within the branch was incorrectly changed to a new value ([#7665](https://github.com/nocobase/nocobase/pull/7665)) by @mytharcher

- **[Access control]** Fix middlewares order of `resourceManager` ([#7728](https://github.com/nocobase/nocobase/pull/7728)) by @2013xile

- **[File manager]** Fix the issue of `.msg` file can not be uploaded properly ([#7662](https://github.com/nocobase/nocobase/pull/7662)) by @mytharcher

- **[Workflow: Manual node]** Fix the issue where manual tasks disappear after workflow disabled ([#7687](https://github.com/nocobase/nocobase/pull/7687)) by @mytharcher

- **[Collection field: administrative divisions of China]** Data import fails when the city and area have the same name ([#7673](https://github.com/nocobase/nocobase/pull/7673)) by @2013xile

- **[Workflow: Approval]**
  - Fix the translation issue of the status text in approval completion notifications, using the system’s default language for translation when the user has not set a language preference by @mytharcher

  - Fix locales by @mytharcher

