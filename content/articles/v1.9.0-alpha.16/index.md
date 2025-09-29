### 🚀 Improvements

- **[client]**
  - Support to rotate image when previewing ([#7523](https://github.com/nocobase/nocobase/pull/7523)) by @mytharcher

  - add localization support for tooltip & group item title ([#7485](https://github.com/nocobase/nocobase/pull/7485)) by @katherinehhh

- **[RabbitMQ queue adapter]** improve RabbitMQ connection handling and message processing logic by @sdp-ncd

### 🐛 Bug Fixes

- **[client]**
  - Fix the issue where sidebar submenus cannot highlight correctly ([#7520](https://github.com/nocobase/nocobase/pull/7520)) by @duannyuuu

  - Fix the issue where the menu icon configuration popover is being obscured ([#7515](https://github.com/nocobase/nocobase/pull/7515)) by @zhangzhonghe

- **[Notification: In-app message]** Fix the issue where recent messages are not displayed when opening the notification popup ([#7514](https://github.com/nocobase/nocobase/pull/7514)) by @mytharcher

- **[Workflow]** Fix the issue where the workflow list condition is incorrect when loading associated field context in the bound workflow configuration ([#7516](https://github.com/nocobase/nocobase/pull/7516)) by @mytharcher

- **[Workflow: Loop node]** Fixed the issue where the process incorrectly advanced to the next item even when loop node conditions were not satisfied ([#7521](https://github.com/nocobase/nocobase/pull/7521)) by @mytharcher

- **[Workflow: Approval]**
  - Fix the issue where an error occurred when deleting data from an external data source by @mytharcher

  - Fix the issue where formula fields in the approval form do not update automatically by @mytharcher

