### 🚀 Improvements

- **[server]** Optimize the method for loading l10n resources to prevent blocking event loop ([#7653](https://github.com/nocobase/nocobase/pull/7653)) by @2013xile

- **[cache]** Avoid performance overhead caused by cloning Bloom filters ([#7652](https://github.com/nocobase/nocobase/pull/7652)) by @2013xile

- **[Action: Import records]** Improved error messaging when table headers are missing ([#7656](https://github.com/nocobase/nocobase/pull/7656)) by @mytharcher

### 🐛 Bug Fixes

- **[client]**
  - fix error when clearing date field in filter block ([#7632](https://github.com/nocobase/nocobase/pull/7632)) by @katherinehhh

  - prevent label word breaking in formItem label ([#7647](https://github.com/nocobase/nocobase/pull/7647)) by @katherinehhh

  - fix subtable default value not working in edit form drawer ([#7631](https://github.com/nocobase/nocobase/pull/7631)) by @katherinehhh

- **[Collection field: administrative divisions of China]** Data import fails when the city and area have the same name ([#7673](https://github.com/nocobase/nocobase/pull/7673)) by @2013xile

- **[Workflow]**
  - Fix the issue where, after deleting a node that starts branching, the key of the first node retained within the branch was incorrectly changed to a new value ([#7665](https://github.com/nocobase/nocobase/pull/7665)) by @mytharcher

  - Fix logger error thrown when application stop ([#7639](https://github.com/nocobase/nocobase/pull/7639)) by @mytharcher

- **[File manager]** Fix the issue of `.msg` file can not be uploaded properly ([#7662](https://github.com/nocobase/nocobase/pull/7662)) by @mytharcher

- **[Data source: Main]** Fix the issue where metadata was not synchronized across multiple nodes after creating a reverse association field ([#7628](https://github.com/nocobase/nocobase/pull/7628)) by @mytharcher

- **[Workflow: Approval]**
  - Fix the translation issue of the status text in approval completion notifications, using the system’s default language for translation when the user has not set a language preference by @mytharcher

  - Fix the issue where task count not updated after added assignee by @mytharcher

