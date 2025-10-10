Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase is currently updated with three branches: `main` , `next` and `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：The most stable version to date, recommended for installation;
* `next`：Beta version, contains upcoming new features and has been preliminarily tested. There might be some known or unknown issues. It's mainly for test users to collect feedback and optimize functions further. Ideal for test users who want to experience new features early and give feedback;
* `develop`：Alpha version, contains the latest feature code, may be incomplete or unstable, mainly for internal dev and rapid iteration. Suited for tech users interested in product's cutting-edge, but with potential issues and incomplete functions. Not for production use.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.27](https://www.nocobase.com/en/blog/v1.8.27)

*Release date: 2025-10-02*

### 🚀 Improvements

- **[client]** Support to rotate image when previewing ([#7523](https://github.com/nocobase/nocobase/pull/7523)) by @mytharcher
- **[Workflow]** Split the dispatching-related logic into a standalone dispatcher ([#7535](https://github.com/nocobase/nocobase/pull/7535)) by @mytharcher

### 🐛 Bug Fixes

- **[client]** Fix the issue where sidebar submenus cannot highlight correctly ([#7520](https://github.com/nocobase/nocobase/pull/7520)) by @duannyuuu
- **[Workflow: Loop node]** Fixed the issue where the process incorrectly advanced to the next item even when loop node conditions were not satisfied ([#7521](https://github.com/nocobase/nocobase/pull/7521)) by @mytharcher
- **[Workflow]**
  - Fix the issue of duplicated executing due to improper queue handling ([#7533](https://github.com/nocobase/nocobase/pull/7533)) by @mytharcher
  - Fix the issue where the workflow list condition is incorrect when loading associated field context in the bound workflow configuration ([#7516](https://github.com/nocobase/nocobase/pull/7516)) by @mytharcher
  - Fix the issue where scheduled tasks based on date fields do not trigger after start ([#7524](https://github.com/nocobase/nocobase/pull/7524)) by @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.11](https://www.nocobase.com/en/blog/v1.9.0-beta.11)

*Release date: 2025-10-09*

### 🚀 Improvements

* **[server]** Add graceful shutdown lifecycle handling for the application ([#7536](https://github.com/nocobase/nocobase/pull/7536)) by @mytharcher
* **[Workflow: Loop node]** Support to limit the maximum number of cycles for loop nodes through environment variables ([#7543](https://github.com/nocobase/nocobase/pull/7543)) by @mytharcher
* **[Workflow]** Support to limit the maximum number of nodes in a workflow through environment variables ([#7542](https://github.com/nocobase/nocobase/pull/7542)) by @mytharcher
* **[Workflow: Approval]** Add print button to detail popup in custom approval blocks by @mytharcher

### 🐛 Bug Fixes

* **[Email manager]** reauthorization exception by @jiannx

### [v1.9.0-beta.10](https://www.nocobase.com/en/blog/v1.9.0-beta.10)

*Release date: 2025-10-09*

### 🐛 Bug Fixes

* **[client]** Fix the issue where missing dynamic properties in the `AssignedField` component caused file upload errors in “Create record” or “Update record” nodes ([#7556](https://github.com/nocobase/nocobase/pull/7556)) by @mytharcher
* **[Public forms]** Fix the issue where the upload rules for file fields in public forms were incorrect ([#7553](https://github.com/nocobase/nocobase/pull/7553)) by @mytharcher

### [v1.9.0-beta.9](https://www.nocobase.com/en/blog/v1.9.0-beta.9)

*Release date: 2025-09-30*

### 🎉 New Features

* **[client]**
  * Table blocks support adding a ‘Column settings’ button to configure column order and visibility ([#7204](https://github.com/nocobase/nocobase/pull/7204)) by @kerwin612
  * Support field validation rule ([#7297](https://github.com/nocobase/nocobase/pull/7297)) by @aaaaaajie
* **[Data source: Main]**
  * Support reading tables from main data source ([#7238](https://github.com/nocobase/nocobase/pull/7238)) by @aaaaaajie
  * Support displaying plugin-defined tables in the main data source. ([#7187](https://github.com/nocobase/nocobase/pull/7187)) by @aaaaaajie

### 🚀 Improvements

* **[client]** Support to rotate image when previewing ([#7523](https://github.com/nocobase/nocobase/pull/7523)) by @mytharcher
* **[snowflake-id]** Change the IDs of system tables with auto-increment primary keys but no unique identifiers to 53-bit Snowflake-like IDs ([#7465](https://github.com/nocobase/nocobase/pull/7465)) by @2013xile
* **[Workflow]** Split the dispatching-related logic into a standalone dispatcher ([#7535](https://github.com/nocobase/nocobase/pull/7535)) by @mytharcher
* **[RabbitMQ queue adapter]** improve RabbitMQ connection handling and message processing logic by @sdp-ncd
* **[Email manager]**
  * supports batch synchronization by @jiannx
  * rich editor supports image resizing by @jiannx

### 🐛 Bug Fixes

* **[client]**
  * Fix an issue where the “Column settings” button loads columns from the table inside the modal dialog ([#7385](https://github.com/nocobase/nocobase/pull/7385)) by @kerwin612
  * Fix the issue where sidebar submenus cannot highlight correctly ([#7520](https://github.com/nocobase/nocobase/pull/7520)) by @duannyuuu
* **[Workflow]**
  * Fix the issue of duplicated executing due to improper queue handling ([#7533](https://github.com/nocobase/nocobase/pull/7533)) by @mytharcher
  * Fix the issue where the workflow list condition is incorrect when loading associated field context in the bound workflow configuration ([#7516](https://github.com/nocobase/nocobase/pull/7516)) by @mytharcher
  * Fix the issue where scheduled tasks based on date fields do not trigger after start ([#7524](https://github.com/nocobase/nocobase/pull/7524)) by @mytharcher
* **[Workflow: Loop node]** Fixed the issue where the process incorrectly advanced to the next item even when loop node conditions were not satisfied ([#7521](https://github.com/nocobase/nocobase/pull/7521)) by @mytharcher
* **[Email manager]**
  * Garbage email subject by @jiannx
  * garbage subject by @jiannx
  * rich editor support soft line breaks by @jiannx
  * Supports the same email for multiple people by @jiannx
  * email message list optimal performance by @jiannx
  * after selecting rows, set “Read” and “unread” by @jiannx
  * add rawId field for performance optimization by @jiannx
  * ref attribute in html causes rendering exception by @jiannx
  * submail content cannot be filtered by @jiannx
  * support resync by @jiannx
  * Manually distinguish between forwarding and replying by @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.4](https://www.nocobase.com/en/blog/v2.0.0-alpha.4)

*Release date: 2025-10-05*

### 🚀 Improvements

* **[flow-engine]** Optimize drag and drop functionality ([#7526](https://github.com/nocobase/nocobase/pull/7526)) by @zhangzhonghe
* **[Workflow: Loop node]** Support to limit the maximum number of cycles for loop nodes through environment variables ([#7543](https://github.com/nocobase/nocobase/pull/7543)) by @mytharcher
* **[Workflow]** Support to limit the maximum number of nodes in a workflow through environment variables ([#7542](https://github.com/nocobase/nocobase/pull/7542)) by @mytharcher
* **[Workflow: Approval]** Add print button to detail popup in custom approval blocks by @mytharcher

### 🐛 Bug Fixes

* **[client]** Fixed an issue where the “Run” action in the code editor was not functioning, ensuring users can now execute code correctly. ([#7547](https://github.com/nocobase/nocobase/pull/7547)) by @gchust
* **[AI employees]** Fix the error on the ai employee permissions configuration page ([#7548](https://github.com/nocobase/nocobase/pull/7548)) by @2013xile
* **[Workflow]** Fix the issue where adding a workflow in the bound workflow button configuration caused the application to freeze after clicking ([#7541](https://github.com/nocobase/nocobase/pull/7541)) by @mytharcher
* **[Email manager]** reauthorization exception by @jiannx

### [v1.9.0-alpha.17](https://www.nocobase.com/en/blog/v1.9.0-alpha.17)

*Release date: 2025-09-30*

### 🚀 Improvements

* **[Workflow]** Split the dispatching-related logic into a standalone dispatcher ([#7535](https://github.com/nocobase/nocobase/pull/7535)) by @mytharcher

### 🐛 Bug Fixes

* **[Workflow]**
  * Fix the issue of duplicated executing due to improper queue handling ([#7533](https://github.com/nocobase/nocobase/pull/7533)) by @mytharcher
  * Fix the issue where scheduled tasks based on date fields do not trigger after start ([#7524](https://github.com/nocobase/nocobase/pull/7524)) by @mytharcher

### [v2.0.0-alpha.1](https://www.nocobase.com/en/blog/v2.0.0-alpha.1)

*Release date: 2025-09-30

### 🚀 Improvements

- **[server]** Add graceful shutdown lifecycle handling for the application ([#7536](https://github.com/nocobase/nocobase/pull/7536)) by @mytharcher
