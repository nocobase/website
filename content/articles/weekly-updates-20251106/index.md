Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase is currently updated with three branches: `main` , `next` and `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：The most stable version to date, recommended for installation;
* `next`：Beta version, contains upcoming new features and has been preliminarily tested. There might be some known or unknown issues. It's mainly for test users to collect feedback and optimize functions further. Ideal for test users who want to experience new features early and give feedback;
* `develop`：Alpha version, contains the latest feature code, may be incomplete or unstable, mainly for internal dev and rapid iteration. Suited for tech users interested in product's cutting-edge, but with potential issues and incomplete functions. Not for production use.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.3](https://www.nocobase.com/en/blog/v1.9.3)

*Release date: 2025-11-05*

### 🚀 Improvements

- **[database]** Add the `multipleStatements` option to the MariaDB connection instance to support invoking multiple statements in a single query ([#7781](https://github.com/nocobase/nocobase/pull/7781)) by @mytharcher
- **[Workflow]** Support data block in workflow to use consolidate detail settings menu ([#7771](https://github.com/nocobase/nocobase/pull/7771)) by @mytharcher

### 🐛 Bug Fixes

- **[server]** Isolate Pub-Sub channel by app name ([#7762](https://github.com/nocobase/nocobase/pull/7762)) by @mytharcher
- **[client]** Fix "Maximum call stack size exceeded" ([#7780](https://github.com/nocobase/nocobase/pull/7780)) by @zhangzhonghe
- **[database]** Incorrect index field detection when field names use snake_case style ([#7776](https://github.com/nocobase/nocobase/pull/7776)) by @2013xile
- **[Workflow]** Resolved an issue where the workflow dispatcher in cluster mode failed to correctly identify idle states, which could lead to unnecessary queue event consuming before plugin is ready ([#7768](https://github.com/nocobase/nocobase/pull/7768)) by @mytharcher
- **[Mobile (deprecated)]** Fix the issue where the date field default value popup on mobile cannot select a date ([#7783](https://github.com/nocobase/nocobase/pull/7783)) by @zhangzhonghe
- **[Workflow: Approval]** Fix error thrown when duplicate approval workflow by @mytharcher
- **[Email manager]** collection mailMessages add indexes by @jiannx

### [v1.9.2](https://www.nocobase.com/en/blog/v1.9.2)

*Release date: 2025-11-04*

### 🚀 Improvements

- **[Workflow: Approval]** Add notification for delegated and added assignee by @mytharcher

### 🐛 Bug Fixes

- **[Workflow]** Fix an issue where, in service-splitting mode, manually executing a workflow containing an interrupt node would remain stuck in a pending status ([#7767](https://github.com/nocobase/nocobase/pull/7767)) by @mytharcher
- **[Email manager]** add migration for indexex by @jiannx

### [v1.9.1](https://www.nocobase.com/en/blog/v1.9.1)

*Release date: 2025-11-04*

### 🐛 Bug Fixes

- **[Workflow: Approval]** Creating approval nodes in parallel branches is no longer supported to avoid issues caused by process status by @mytharcher
- **[Email manager]** add sync logs by @jiannx

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.16](https://www.nocobase.com/en/blog/v1.9.0-beta.16)

*Release date: 2025-11-03*

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

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.34](https://www.nocobase.com/en/blog/v2.0.0-alpha.34)

*Release date: 2025-11-05*

### 🚀 Improvements

- **[database]** Add the `multipleStatements` option to the MariaDB connection instance to support invoking multiple statements in a single query ([#7781](https://github.com/nocobase/nocobase/pull/7781)) by @mytharcher

### 🐛 Bug Fixes

- **[flow-engine]** Fixed an issue where the action buttons in the table block did not update correctly after switching pages, ensuring their functionality matches the current page's data. ([#7779](https://github.com/nocobase/nocobase/pull/7779)) by @gchust
- **[client]**

  - Fix "Maximum call stack size exceeded" ([#7780](https://github.com/nocobase/nocobase/pull/7780)) by @zhangzhonghe
  - fix association field title field ellipsis not applied ([#7778](https://github.com/nocobase/nocobase/pull/7778)) by @katherinehhh
  - update record action's linkage rule is not working ([#7774](https://github.com/nocobase/nocobase/pull/7774)) by @gchust
- **[database]** Incorrect index field detection when field names use snake_case style ([#7776](https://github.com/nocobase/nocobase/pull/7776)) by @2013xile
- **[Mobile (deprecated)]** Fix the issue where the date field default value popup on mobile cannot select a date ([#7783](https://github.com/nocobase/nocobase/pull/7783)) by @zhangzhonghe

### [v2.0.0-alpha.33](https://www.nocobase.com/en/blog/v2.0.0-alpha.33)

*Release date: 2025-11-05*

### 🎉 New Features

- **[client]** add pagination support to sub table ([#7754](https://github.com/nocobase/nocobase/pull/7754)) by @katherinehhh

### 🚀 Improvements

- **[undefined]** update the English documentation of the chart plugin ([#7748](https://github.com/nocobase/nocobase/pull/7748)) by @heziqiang
- **[telemetry]** Add telemetry metrics for number of online sub-applications, etc ([#7743](https://github.com/nocobase/nocobase/pull/7743)) by @2013xile
- **[Workflow]** Support data block in workflow to use consolidate detail settings menu ([#7771](https://github.com/nocobase/nocobase/pull/7771)) by @mytharcher
- **[Multi-app manager (deprecated)]** Enabled asynchronous startup for sub-applications using a queue ([#7749](https://github.com/nocobase/nocobase/pull/7749)) by @2013xile
- **[Data visualization]** add chart data time format options ([#7763](https://github.com/nocobase/nocobase/pull/7763)) by @heziqiang
- **[Workflow: Approval]** Add notification for delegated and added assignee by @mytharcher

### 🐛 Bug Fixes

- **[client]**

  - Fixed an issue where the labels of enum types in variable-related components were not displayed in the correct language. ([#7765](https://github.com/nocobase/nocobase/pull/7765)) by @gchust
  - Fix missing required field indicator after setting frontend validation ([#7760](https://github.com/nocobase/nocobase/pull/7760)) by @katherinehhh
  - fix issue with clearing non-timezone date in edit form ([#7759](https://github.com/nocobase/nocobase/pull/7759)) by @katherinehhh
  - Fix required field validation for linkage rules ([#7756](https://github.com/nocobase/nocobase/pull/7756)) by @zhangzhonghe
  - resolve Invalid Date issue when deleting Specified Date in filte… ([#7746](https://github.com/nocobase/nocobase/pull/7746)) by @katherinehhh
  - Fix required validation failure for Markdown Vditor field ([#7764](https://github.com/nocobase/nocobase/pull/7764)) by @katherinehhh
  - Add data scope configuration for relationship fields in filter forms ([#7761](https://github.com/nocobase/nocobase/pull/7761)) by @zhangzhonghe
  - fix time format issue in subtable fields ([#7750](https://github.com/nocobase/nocobase/pull/7750)) by @katherinehhh
- **[flow-engine]**

  - when the field filter value is set to false, the request with data scope is incorrect ([#7766](https://github.com/nocobase/nocobase/pull/7766)) by @gchust
  - can't resolve subform current object variable's association field value ([#7751](https://github.com/nocobase/nocobase/pull/7751)) by @gchust
  - fix: resolve page request parameter issue after deleting data on last page ([#7755](https://github.com/nocobase/nocobase/pull/7755)) by @katherinehhh
- **[server]** Isolate Pub-Sub channel by app name ([#7762](https://github.com/nocobase/nocobase/pull/7762)) by @mytharcher
- **[Block: GridCard]** fix data duplication issue between list and grid card block ([#7773](https://github.com/nocobase/nocobase/pull/7773)) by @katherinehhh
- **[Multi-app manager (deprecated)]** Incorrect collection for sub-application status metric ([#7772](https://github.com/nocobase/nocobase/pull/7772)) by @2013xile
- **[Workflow]**

  - Resolved an issue where the workflow dispatcher in cluster mode failed to correctly identify idle states, which could lead to unnecessary queue event consuming before plugin is ready ([#7768](https://github.com/nocobase/nocobase/pull/7768)) by @mytharcher
  - Fix an issue where, in service-splitting mode, manually executing a workflow containing an interrupt node would remain stuck in a pending status ([#7767](https://github.com/nocobase/nocobase/pull/7767)) by @mytharcher
- **[Workflow: Approval]**

  - Fix error thrown when duplicate approval workflow by @mytharcher
  - Creating approval nodes in parallel branches is no longer supported to avoid issues caused by process status by @mytharcher
- **[Email manager]**

  - add sync logs by @jiannx
  - add migration for indexex by @jiannx

### [v2.0.0-alpha.31](https://www.nocobase.com/en/blog/v2.0.0-alpha.31)

*Release date: 2025-11-03*

### 🎉 New Features

- **[Workflow: Approval]** Support trigger mode of "Before data saved" by @mytharcher

### 🐛 Bug Fixes

- **[client]** can't load current form variable's fields ([#7745](https://github.com/nocobase/nocobase/pull/7745)) by @gchust
- **[Workflow: Approval]** Fix locales by @mytharcher

### [v2.0.0-alpha.30](https://www.nocobase.com/en/blog/v2.0.0-alpha.30)

*Release date: 2025-11-02*

### 🚀 Improvements

- **[Workflow: notification node]** Add `ignoreFail` option for notification node, which allow to continue workflow when notification sending failed ([#7736](https://github.com/nocobase/nocobase/pull/7736)) by @mytharcher

### [v2.0.0-alpha.29](https://www.nocobase.com/en/blog/v2.0.0-alpha.29)

*Release date: 2025-11-02*

### 🐛 Bug Fixes

- **[client]**

  - Resolved an issue where the association field variable in the current form could not be properly identified, ensuring accurate data processing in forms. ([#7726](https://github.com/nocobase/nocobase/pull/7726)) by @gchust
  - Resolved an issue where assigning an array as the value or default value to a "toOne" field resulted in an error. This ensures proper handling of variable resolution results, improving system stability and accuracy. ([#7735](https://github.com/nocobase/nocobase/pull/7735)) by @gchust
- **[Access control]** Fix middlewares order of `resourceManager` ([#7728](https://github.com/nocobase/nocobase/pull/7728)) by @2013xile

### [v2.0.0-alpha.28](https://www.nocobase.com/en/blog/v2.0.0-alpha.28)

*Release date: 2025-11-01*

### 🚀 Improvements

- **[flow-engine]** Improved the error message displayed when copying UID fails, providing clearer instructions for resolving the issue. ([#7718](https://github.com/nocobase/nocobase/pull/7718)) by @gchust

### 🐛 Bug Fixes

- **[flow-engine]** event flow's steps should not be displayed in configuration menus ([#7723](https://github.com/nocobase/nocobase/pull/7723)) by @gchust
- **[client]** Fixed an issue where non-filterable fields were incorrectly listed in the filter options, ensuring only applicable fields appear for selection. ([#7700](https://github.com/nocobase/nocobase/pull/7700)) by @gchust
- **[Workflow]** Fix value of execution status when create with deferred ([#7721](https://github.com/nocobase/nocobase/pull/7721)) by @mytharcher
- **[AI employees]** Optimized web search behavior and user hints for Gemini ([#7720](https://github.com/nocobase/nocobase/pull/7720)) by @cgyrock
- **[Action: Export records]** resolve issue with exportable field list display in export action ([#7714](https://github.com/nocobase/nocobase/pull/7714)) by @katherinehhh
- **[Action: Import records]** resolve issue with field list display in Importable fields ([#7710](https://github.com/nocobase/nocobase/pull/7710)) by @katherinehhh
- **[Action: Import records Pro]** resolve issue with field list display in Importable fields by @katherinehhh

### [v2.0.0-alpha.27](https://www.nocobase.com/en/blog/v2.0.0-alpha.27)

*Release date: 2025-10-31*

### 🎉 New Features

- **[client]** Event Flow: Introduced new predefined actions to enhance customization options for event handling, allowing users to streamline workflows and improve efficiency ([#7672](https://github.com/nocobase/nocobase/pull/7672)) by @zhangzhonghe

### 🚀 Improvements

- **[AI employees]** Improve AI employee interaction logic and optimize task configuration flow ([#7707](https://github.com/nocobase/nocobase/pull/7707)) by @cgyrock

### 🐛 Bug Fixes

- **[client]** resolve UI issue when deleting association  field in collection ([#7706](https://github.com/nocobase/nocobase/pull/7706)) by @katherinehhh

### [v2.0.0-alpha.26](https://www.nocobase.com/en/blog/v2.0.0-alpha.26)

*Release date: 2025-10-30*

### 🚀 Improvements

- **[undefined]** update chart overview document ([#7702](https://github.com/nocobase/nocobase/pull/7702)) by @heziqiang
- **[client]** support jsx in JS code editor ([#7699](https://github.com/nocobase/nocobase/pull/7699)) by @gchust
- **[AI employees]** AI employee can autonomously query data based on table block metadata ([#7703](https://github.com/nocobase/nocobase/pull/7703)) by @cgyrock

### 🐛 Bug Fixes

- **[client]**

  - Fix iframe block linkage rule failure within modal ([#7694](https://github.com/nocobase/nocobase/pull/7694)) by @katherinehhh
  - Fix QR code scanning linkage rule configuration in action panel ([#7693](https://github.com/nocobase/nocobase/pull/7693)) by @katherinehhh
- **[database]** Skip default value synchronization for MySQL JSON columns ([#7696](https://github.com/nocobase/nocobase/pull/7696)) by @2013xile
- **[Workflow]** Fix the issue where, in service-splitting mode, improper handling of the in-memory pending queue caused some workflows to not execute ([#7692](https://github.com/nocobase/nocobase/pull/7692)) by @mytharcher
