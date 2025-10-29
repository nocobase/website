Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase is currently updated with three branches: `main` , `next` and `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：The most stable version to date, recommended for installation;
* `next`：Beta version, contains upcoming new features and has been preliminarily tested. There might be some known or unknown issues. It's mainly for test users to collect feedback and optimize functions further. Ideal for test users who want to experience new features early and give feedback;
* `develop`：Alpha version, contains the latest feature code, may be incomplete or unstable, mainly for internal dev and rapid iteration. Suited for tech users interested in product's cutting-edge, but with potential issues and incomplete functions. Not for production use.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.33](https://www.nocobase.com/en/blog/v1.8.33)

*Release date: 2025-10-29*

### 🚀 Improvements

- **[server]** Add gateway log ([#7683](https://github.com/nocobase/nocobase/pull/7683)) by @2013xile

### 🐛 Bug Fixes

- **[database]** Skip default value synchronization for MySQL JSON columns ([#7696](https://github.com/nocobase/nocobase/pull/7696)) by @2013xile
- **[client]**

  - Fix iframe block linkage rule failure within modal ([#7694](https://github.com/nocobase/nocobase/pull/7694)) by @katherinehhh
  - Fix QR code scanning linkage rule configuration in action panel ([#7693](https://github.com/nocobase/nocobase/pull/7693)) by @katherinehhh
- **[Workflow]** Fix the issue where, in service-splitting mode, improper handling of the in-memory pending queue caused some workflows to not execute ([#7692](https://github.com/nocobase/nocobase/pull/7692)) by @mytharcher

### [v1.8.32](https://www.nocobase.com/en/blog/v1.8.32)

*Release date: 2025-10-27*

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

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.15](https://www.nocobase.com/en/blog/v1.9.0-beta.15)

*Release date: 2025-10-25*

### 🐛 Bug Fixes

- **[Redis queue adapter]** Fix the issue where the Redis queue adapter did not correctly listen to subscribed channels after startup by @mytharcher

### [v1.9.0-beta.14](https://www.nocobase.com/en/blog/v1.9.0-beta.14)

*Release date: 2025-10-25*

### 🎉 New Features

- **[Workflow: Approval]** Expose the `approvalId` variable for use from approval triggers by @mytharcher

### 🚀 Improvements

- **[server]** Optimize the method for loading l10n resources to prevent blocking event loop ([#7653](https://github.com/nocobase/nocobase/pull/7653)) by @2013xile
- **[cache]** Avoid performance overhead caused by cloning Bloom filters ([#7652](https://github.com/nocobase/nocobase/pull/7652)) by @2013xile
- **[Action: Import records]** Improved error messaging when table headers are missing ([#7656](https://github.com/nocobase/nocobase/pull/7656)) by @mytharcher

### 🐛 Bug Fixes

- **[client]** prevent label word breaking in formItem label ([#7647](https://github.com/nocobase/nocobase/pull/7647)) by @katherinehhh
- **[Workflow]** Fix logger error thrown when application stop ([#7639](https://github.com/nocobase/nocobase/pull/7639)) by @mytharcher
- **[Workflow: Approval]**

  - Fix the transaction timeout issue caused by transactions not rolling back properly when database errors occur after approval submission by @mytharcher
  - Fix the issue where task count not updated after added assignee by @mytharcher
  - Fix the issue where variables are not parsed in approval submit form by @mytharcher
- **[Email manager]** catch sync error by @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.25](https://www.nocobase.com/en/blog/v2.0.0-alpha.25)

*Release date: 2025-10-29*

### 🚀 Improvements

- **[server]** Add gateway log ([#7683](https://github.com/nocobase/nocobase/pull/7683)) by @2013xile
- **[flow-engine]** Support define variable context in flow step definition ([#7674](https://github.com/nocobase/nocobase/pull/7674)) by @gchust
- **[Data visualization]**

  - add tip to run query before configuring chart options ([#7685](https://github.com/nocobase/nocobase/pull/7685)) by @heziqiang
  - refresh chart data on global preview button click ([#7678](https://github.com/nocobase/nocobase/pull/7678)) by @heziqiang
- **[AI employees]** Optimized AI coding experience, including using AI employee to review, diagnose, and fix code. ([#7679](https://github.com/nocobase/nocobase/pull/7679)) by @cgyrock
- **[Data source manager]** Adjust the column order of field type and interface, and add a confirmation step when making modifications. ([#7680](https://github.com/nocobase/nocobase/pull/7680)) by @2013xile
- **[Workflow]** Complete the bound workflow configuration for the update record action button ([#7668](https://github.com/nocobase/nocobase/pull/7668)) by @mytharcher
- **[Multi-app manager (deprecated)]** improve app supervisor ([#7661](https://github.com/nocobase/nocobase/pull/7661)) by @chenos

### 🐛 Bug Fixes

- **[client]**

  - Resolved an issue where users could not set default values for fields displayed in read-only mode. This ensures smoother field configuration when fields are not editable. ([#7689](https://github.com/nocobase/nocobase/pull/7689)) by @gchust
  - Fix known issues with subform linkage rules ([#7698](https://github.com/nocobase/nocobase/pull/7698)) by @zhangzhonghe
  - js block fields menu can't be loaded in filter form block ([#7690](https://github.com/nocobase/nocobase/pull/7690)) by @gchust
- **[flow-engine]** incorrect context selection of the current popup record when editing the data scope of an associated field inside an edit form ([#7675](https://github.com/nocobase/nocobase/pull/7675)) by @gchust
- **[Workflow: Manual node]** Fix the issue where manual tasks disappear after workflow disabled ([#7687](https://github.com/nocobase/nocobase/pull/7687)) by @mytharcher
- **[AI employees]** Fixed an issue where blocks with associated API resources did not fetch corresponding data when selected. ([#7688](https://github.com/nocobase/nocobase/pull/7688)) by @cgyrock
- **[Workflow]** Fix the issue where, after deleting a node that starts branching, the key of the first node retained within the branch was incorrectly changed to a new value ([#7665](https://github.com/nocobase/nocobase/pull/7665)) by @mytharcher
- **[Collection field: administrative divisions of China]** Data import fails when the city and area have the same name ([#7673](https://github.com/nocobase/nocobase/pull/7673)) by @2013xile
- **[File manager]** Fix the issue of `.msg` file can not be uploaded properly ([#7662](https://github.com/nocobase/nocobase/pull/7662)) by @mytharcher
- **[Flow engine]** not be able to resolve variables in linkage set fields action ([#7684](https://github.com/nocobase/nocobase/pull/7684)) by @gchust
- **[Data visualization]** use sql:runById API to fetch query data on initialization ([#7677](https://github.com/nocobase/nocobase/pull/7677)) by @heziqiang
- **[Workflow: Approval]** Fix the translation issue of the status text in approval completion notifications, using the system’s default language for translation when the user has not set a language preference by @mytharcher

### [v2.0.0-alpha.24](https://www.nocobase.com/en/blog/v2.0.0-alpha.24)

*Release date: 2025-10-27*

### 🎉 New Features

- **[Flow engine]** Supports using LiquidJS template strings in SQL statements ([#7667](https://github.com/nocobase/nocobase/pull/7667)) by @2013xile

### [v2.0.0-alpha.22](https://www.nocobase.com/en/blog/v2.0.0-alpha.22)

*Release date: 2025-10-25*

### 🎉 New Features

- **[client]** Add 2.0 markdown block ([#7613](https://github.com/nocobase/nocobase/pull/7613)) by @katherinehhh
- **[Data source manager]**

  - The main data source now supports reading database tables directly from the main database and allows modifying field interfaces ([#7118](https://github.com/nocobase/nocobase/pull/7118)) by @aaaaaajie
  - The main data source now supports reading database tables directly from the main database and allows modifying field interfaces ([#7118](https://github.com/nocobase/nocobase/pull/7118)) by @aaaaaajie
- **[Record history]** Add record history block by @2013xile

### 🐛 Bug Fixes

- **[flow-engine]** Resolved an issue where flow actions defined by a flow model could not be configured, ensuring users can now customize flow actions as intended. ([#7666](https://github.com/nocobase/nocobase/pull/7666)) by @gchust
- **[Redis queue adapter]** Fix the issue where the Redis queue adapter did not correctly listen to subscribed channels after startup by @mytharcher

### [v2.0.0-alpha.21](https://www.nocobase.com/en/blog/v2.0.0-alpha.21)

*Release date: 2025-10-25*

### 🚀 Improvements

- **[cache]** Avoid performance overhead caused by cloning Bloom filters ([#7652](https://github.com/nocobase/nocobase/pull/7652)) by @2013xile
- **[server]** Optimize the method for loading l10n resources to prevent blocking event loop ([#7653](https://github.com/nocobase/nocobase/pull/7653)) by @2013xile
- **[Action: Import records]** Improved error messaging when table headers are missing ([#7656](https://github.com/nocobase/nocobase/pull/7656)) by @mytharcher

### 🐛 Bug Fixes

- **[client]** prevent label word breaking in formItem label ([#7647](https://github.com/nocobase/nocobase/pull/7647)) by @katherinehhh
- **[Data visualization]** fix SQL query issue when parsing variables ([#7642](https://github.com/nocobase/nocobase/pull/7642)) by @heziqiang
- **[Workflow]** Fix logger error thrown when application stop ([#7639](https://github.com/nocobase/nocobase/pull/7639)) by @mytharcher

### [v2.0.0-alpha.20](https://www.nocobase.com/en/blog/v2.0.0-alpha.20)

*Release date: 2025-10-23*

### 🎉 New Features

- **[client]** Support for setting linkage rules for sub-forms ([#7640](https://github.com/nocobase/nocobase/pull/7640)) by @zhangzhonghe
- **[Block: List]** Add 2.0 list block ([#7574](https://github.com/nocobase/nocobase/pull/7574)) by @katherinehhh
- **[Data visualization]** add chart type "Doughnut chart" ([#7629](https://github.com/nocobase/nocobase/pull/7629)) by @heziqiang
- **[Block: Action panel]** Add 2.0 action panel block ([#7594](https://github.com/nocobase/nocobase/pull/7594)) by @katherinehhh
- **[Block: GridCard]** Add 2.0 grid card block ([#7579](https://github.com/nocobase/nocobase/pull/7579)) by @katherinehhh

### 🚀 Improvements

- **[flow-engine]** Support skipping the runjs flow step by adding skipRunJs=true to the URL query string. ([#7638](https://github.com/nocobase/nocobase/pull/7638)) by @gchust

### 🐛 Bug Fixes

- **[flow-engine]** Fixed an error when copying or pasting code snippets in the JS code editor. ([#7641](https://github.com/nocobase/nocobase/pull/7641)) by @gchust
- **[Flow engine]** Fixed incorrect resolving of the parent popup’s record variable. ([#7637](https://github.com/nocobase/nocobase/pull/7637)) by @gchust
- **[Data visualization]** fix missing orders param in chart data query ([#7636](https://github.com/nocobase/nocobase/pull/7636)) by @heziqiang
- **[Email manager]** catch sync error by @jiannx
