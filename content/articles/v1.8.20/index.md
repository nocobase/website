### 🚀 Improvements

- **[Workflow]** Adjust the workflow variable API to support presetting an additional variable list ([#7439](https://github.com/nocobase/nocobase/pull/7439)) by @mytharcher

- **[Workflow: Approval]**
  - Support using approval-related variables in custom notifications by @mytharcher

  - Support updating the approval status after the end node terminates the execution by @mytharcher

### 🐛 Bug Fixes

- **[client]**
  - Fix an issue where, in certain scenarios, editing a record in the mobile record picker popup causes an error ([#7444](https://github.com/nocobase/nocobase/pull/7444)) by @zhangzhonghe

  - required validation not working for attachment fields in subtable ([#7431](https://github.com/nocobase/nocobase/pull/7431)) by @katherinehhh

  - Fix the issue where the icon was displayed incorrectly when the URL in the attachment URL field contained query parameters ([#7432](https://github.com/nocobase/nocobase/pull/7432)) by @mytharcher

- **[database]**
  - Fixed a MySQL syntax error that occurred when loading more in-app messages. ([#7438](https://github.com/nocobase/nocobase/pull/7438)) by @aaaaaajie

  - Fixed precision issue for exported Number fields ([#7421](https://github.com/nocobase/nocobase/pull/7421)) by @aaaaaajie

- **[undefined]** Fixed issue with filtering by date field only in MySQL external source ([#7422](https://github.com/nocobase/nocobase/pull/7422)) by @aaaaaajie

- **[Action: Import records]** Fixed an issue where import failed when the table primary key was a single-line text ([#7416](https://github.com/nocobase/nocobase/pull/7416)) by @aaaaaajie

- **[Workflow]**
  - Complete the options for automatically deleting workflow execution status ([#7436](https://github.com/nocobase/nocobase/pull/7436)) by @mytharcher

  - Fix issues related to the mobile menu in the workflow tasks ([#7419](https://github.com/nocobase/nocobase/pull/7419)) by @mytharcher

- **[Action: Import records Pro]** Fixed unexpected update result when using string primary key in xlsx import. by @aaaaaajie

