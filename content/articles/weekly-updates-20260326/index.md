Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase is currently updated with three branches: `main` , `next` and `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：The most stable version to date, recommended for installation;
* `next`：Beta version, contains upcoming new features and has been preliminarily tested. There might be some known or unknown issues. It's mainly for test users to collect feedback and optimize functions further. Ideal for test users who want to experience new features early and give feedback;
* `develop`：Alpha version, contains the latest feature code, may be incomplete or unstable, mainly for internal dev and rapid iteration. Suited for tech users interested in product's cutting-edge, but with potential issues and incomplete functions. Not for production use.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.26](https://www.nocobase.com/en/blog/v2.0.26)

*Release date: 2026-03-25*

### 🚀 Improvements

- **[client]** Optimize the horizontal layout of form actions ([#8869](https://github.com/nocobase/nocobase/pull/8869)) by @jiannx

### 🐛 Bug Fixes

- **[flow-engine]** Synchronize status to field configuration when form field is deleted ([#8857](https://github.com/nocobase/nocobase/pull/8857)) by @jiannx
- **[Custom variables]** skip auth notify ([#8942](https://github.com/nocobase/nocobase/pull/8942)) by @chenos

### [v2.0.25](https://www.nocobase.com/en/blog/v2.0.25)

*Release date: 2026-03-24*

### 🚀 Improvements

- **[Workflow: Approval]** Fix JSON field caused performance issue when loading approval records list by @mytharcher

### 🐛 Bug Fixes

- **[server]** Change close timing of Pub-Sub to `beforeStop`, to avoid message sent or handled after database closed ([#8934](https://github.com/nocobase/nocobase/pull/8934)) by @mytharcher
- **[Localization]** prevent localizationTexts:missing request on permission denial ([#8903](https://github.com/nocobase/nocobase/pull/8903)) by @chenos
- **[Data source: External Oracle]** Fix an error that occurs when loading the Oracle external data source by @2013xile

### [v2.0.24](https://www.nocobase.com/en/blog/v2.0.24)

*Release date: 2026-03-22*

### 🐛 Bug Fixes

- **[resourcer]** Fix an issue where external data sources fail to load correctly. ([#8929](https://github.com/nocobase/nocobase/pull/8929)) by @2013xile
- **[Action: Import records Pro]** Fix the issue where option of "Trigger workflow" not works when not checked by @mytharcher

### [v2.0.23](https://www.nocobase.com/en/blog/v2.0.23)

*Release date: 2026-03-21*

### 🐛 Bug Fixes

- **[database]** Use warning instead of error when any of appends parameters invalid ([#8923](https://github.com/nocobase/nocobase/pull/8923)) by @mytharcher
- **[Workflow: Approval]** Fix translation, node selection, and return target issues in the v2 approval form return button by @zhangzhonghe

### [v2.0.22](https://www.nocobase.com/en/blog/v2.0.22)

*Release date: 2026-03-20*

### 🐛 Bug Fixes

- **[Migration manager]** Fixed the issue where the migration is interrupted due to an error caused by the target environment not having the new table created during the upload migration process. by @Andrew1989Y

### [v2.0.21](https://www.nocobase.com/en/blog/v2.0.21)

*Release date: 2026-03-20*

### 🚀 Improvements

- **[Workflow]** Add filter executions list ([#8914](https://github.com/nocobase/nocobase/pull/8914)) by @mytharcher
- **[Workflow: Approval]** Avoid to configure approvers' UI when no collection configured in trigger by @mytharcher

### 🐛 Bug Fixes

- **[resourcer]** Prevent the `filterByTk` parameter array from being automatically converted into an object when it exceeds 100 items ([#8908](https://github.com/nocobase/nocobase/pull/8908)) by @2013xile
- **[client]** fix the issue where non-administrators cannot clear associated field values ([#8904](https://github.com/nocobase/nocobase/pull/8904)) by @jiannx
- **[Action: Import records Pro]**

  - Fix the issue where error thrown when import in sync mode by @mytharcher
  - Fix the issue where columns more than ~30 cause importing error, due to stream has been read duplicately by @mytharcher
- **[Workflow: Approval]** Fix concurrency issue when add assignee by @mytharcher

### [v2.0.20](https://www.nocobase.com/en/blog/v2.0.20)

*Release date: 2026-03-19*

### 🐛 Bug Fixes

- **[server]** Fix the issue where lifecycle events sent by worker cause serving app stops ([#8906](https://github.com/nocobase/nocobase/pull/8906)) by @mytharcher
- **[Data source manager]** Fixed issue that collection created by AI employee always missing `createBy` and `updateBy` fields ([#8895](https://github.com/nocobase/nocobase/pull/8895)) by @cgyrock
- **[Action: Import records Pro]** Fix lazy import caused SES error by @mytharcher
- **[Template print]** Fix sql collection printing error by @jiannx
- **[Email manager]** Fixed page error when the email does not exist by @jiannx

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.11](https://www.nocobase.com/en/blog/v2.1.0-beta.11)

*Release date: 2026-03-20*

### 🚀 Improvements

- **[Workflow]** Add filter executions list ([#8914](https://github.com/nocobase/nocobase/pull/8914)) by @mytharcher
- **[Workflow: Approval]** Avoid to configure approvers' UI when no collection configured in trigger by @mytharcher

### 🐛 Bug Fixes

- **[server]** Fix the issue where lifecycle events sent by worker cause serving app stops ([#8906](https://github.com/nocobase/nocobase/pull/8906)) by @mytharcher
- **[client]** fix the issue where non-administrators cannot clear associated field values ([#8904](https://github.com/nocobase/nocobase/pull/8904)) by @jiannx
- **[resourcer]** Prevent the `filterByTk` parameter array from being automatically converted into an object when it exceeds 100 items ([#8908](https://github.com/nocobase/nocobase/pull/8908)) by @2013xile
- **[Action: Import records Pro]**

  - Fix the issue where error thrown when import in sync mode by @mytharcher
  - Fix the issue where columns more than ~30 cause importing error, due to stream has been read duplicately by @mytharcher
- **[Workflow: Approval]** Fix concurrency issue when add assignee by @mytharcher
- **[Migration manager]** Fixed the issue where the migration is interrupted due to an error caused by the target environment not having the new table created during the upload migration process. by @Andrew1989Y

### [v2.1.0-beta.10](https://www.nocobase.com/en/blog/v2.1.0-beta.10)

*Release date: 2026-03-19*

### 🎉 New Features

- **[AI employees]**

  - Allows to add AI employees in popup of sub tables ([#8873](https://github.com/nocobase/nocobase/pull/8873)) by @2013xile
  - Scheduled cleanup of AI conversation checkpoint data. ([#8855](https://github.com/nocobase/nocobase/pull/8855)) by @cgyrock
- **[App supervisor]** Support filtering in the application list<br />Add confirmation dialogs for start and stop actions<br />Sort application status entries by environment name by @2013xile

### 🚀 Improvements

- **[server]** improve pm add logic ([#8875](https://github.com/nocobase/nocobase/pull/8875)) by @chenos
- **[undefined]** README ([#8866](https://github.com/nocobase/nocobase/pull/8866)) by @gaston98765
- **[client]** Support showing confirm message before closing popup. ([#8839](https://github.com/nocobase/nocobase/pull/8839)) by @gchust
- **[Workflow]** Fix the issue where gracefully shutdown not drain all events ([#8894](https://github.com/nocobase/nocobase/pull/8894)) by @mytharcher
- **[Async task manager]** async tasks are added to support workers in post error messages ([#8849](https://github.com/nocobase/nocobase/pull/8849)) by @cgyrock

### 🐛 Bug Fixes

- **[client]**

  - Fixed the issue where the “Select record” popup in the subtable failed to load correctly when opened the second time. ([#8865](https://github.com/nocobase/nocobase/pull/8865)) by @gchust
  - Fixed the issue where the default values of some fields did not take effect after refreshing the page. ([#8834](https://github.com/nocobase/nocobase/pull/8834)) by @gchust
- **[database]** Fix the server-side validation issue for date fields ([#8867](https://github.com/nocobase/nocobase/pull/8867)) by @2013xile
- **[Data source manager]** Fixed issue that collection created by AI employee always missing `createBy` and `updateBy` fields ([#8895](https://github.com/nocobase/nocobase/pull/8895)) by @cgyrock
- **[AI employees]**

  - Fix issue with specified URL for LLM service not taking effect in text embedding model calls. ([#8892](https://github.com/nocobase/nocobase/pull/8892)) by @cgyrock
  - Fixed potential undefined variable errors in AI plugin upgrade migration scripts. ([#8883](https://github.com/nocobase/nocobase/pull/8883)) by @cgyrock
- **[Localization]** localizationTexts:missing interface permission exception ([#8861](https://github.com/nocobase/nocobase/pull/8861)) by @jiannx
- **[Action: Import records Pro]**

  - Fix `beforeStop` event on sub app not fired by @mytharcher
  - Fix lazy import caused SES error by @mytharcher
  - Fix the issue where async tasks do not end after an error occurs in async import by @cgyrock
- **[AI: Knowledge base]** Prevent the vector database and vector storage in use from being deleted. by @cgyrock
- **[Template print]** Fix sql collection printing error by @jiannx
- **[Email manager]** Fixed page error when the email does not exist by @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.11](https://www.nocobase.com/en/blog/v2.1.0-alpha.11)

*Release date: 2026-03-25*

### 🎉 New Features

- **[client]** add JS item action ([#8911](https://github.com/nocobase/nocobase/pull/8911)) by @jiannx
- **[AI employees]** Added SKILLS capability to AI employees. ([#8797](https://github.com/nocobase/nocobase/pull/8797)) by @cgyrock
- **[Data source manager]** Support on-demand loading of MCP tools ([#8936](https://github.com/nocobase/nocobase/pull/8936)) by @2013xile

### 🚀 Improvements

- **[flow-engine]** Improve schema validation for ui building api. ([#8881](https://github.com/nocobase/nocobase/pull/8881)) by @gchust
- **[client]** Optimize the horizontal layout of form actions ([#8869](https://github.com/nocobase/nocobase/pull/8869)) by @jiannx
- **[app]** Add an Rsbuild-based dev workflow for client-v1 while keeping local plugin development and the current `/v2/` topology compatible ([#8902](https://github.com/nocobase/nocobase/pull/8902)) by @Molunerfinn
- **[Collection field: administrative divisions of China]** field-china-region 2.0 ([#8831](https://github.com/nocobase/nocobase/pull/8831)) by @jiannx
- **[Workflow]** Add validation for all triggers and nodes ([#8930](https://github.com/nocobase/nocobase/pull/8930)) by @mytharcher
- **[Workflow: Approval]** Fix JSON field caused performance issue when loading approval records list by @mytharcher

### 🐛 Bug Fixes

- **[flow-engine]** Synchronize status to field configuration when form field is deleted ([#8857](https://github.com/nocobase/nocobase/pull/8857)) by @jiannx
- **[resourcer]** Fix an issue where external data sources fail to load correctly. ([#8929](https://github.com/nocobase/nocobase/pull/8929)) by @2013xile
- **[database]** Use warning instead of error when any of appends parameters invalid ([#8923](https://github.com/nocobase/nocobase/pull/8923)) by @mytharcher
- **[server]** Change close timing of Pub-Sub to `beforeStop`, to avoid message sent or handled after database closed ([#8934](https://github.com/nocobase/nocobase/pull/8934)) by @mytharcher
- **[Custom variables]** skip auth notify ([#8942](https://github.com/nocobase/nocobase/pull/8942)) by @chenos
- **[AI employees]** Fix failing test cases in the ai module of the core package. ([#8941](https://github.com/nocobase/nocobase/pull/8941)) by @cgyrock
- **[Localization]** prevent localizationTexts:missing request on permission denial ([#8903](https://github.com/nocobase/nocobase/pull/8903)) by @chenos
- **[Action: Import records Pro]** Fix the issue where option of "Trigger workflow" not works when not checked by @mytharcher
- **[Data source: External Oracle]** Fix an error that occurs when loading the Oracle external data source by @2013xile
- **[Workflow: Approval]** Fix translation, node selection, and return target issues in the v2 approval form return button by @zhangzhonghe

### [v2.1.0-alpha.10](https://www.nocobase.com/en/blog/v2.1.0-alpha.10)

*Release date: 2026-03-20*

### 🎉 New Features

- **[IdP: OAuth]** Add a new IdP: OAuth plugin to enable MCP services to authenticate via OAuth ([#8896](https://github.com/nocobase/nocobase/pull/8896)) by @2013xile
- **[AI employees]** Scheduled cleanup of AI conversation checkpoint data. ([#8855](https://github.com/nocobase/nocobase/pull/8855)) by @cgyrock
- **[App supervisor]** Support filtering in the application list<br />Add confirmation dialogs for start and stop actions<br />Sort application status entries by environment name by @2013xile

### 🚀 Improvements

- **[server]** improve pm add logic ([#8875](https://github.com/nocobase/nocobase/pull/8875)) by @chenos
- **[client]** Support showing confirm message before closing popup. ([#8839](https://github.com/nocobase/nocobase/pull/8839)) by @gchust
- **[undefined]** Add a dedicated client-v2 entry and build it independently with rsbuild while keeping v1 unchanged. ([#8743](https://github.com/nocobase/nocobase/pull/8743)) by @Molunerfinn
- **[Workflow]**

  - Fix the issue where gracefully shutdown not drain all events ([#8894](https://github.com/nocobase/nocobase/pull/8894)) by @mytharcher
  - Add filter executions list ([#8914](https://github.com/nocobase/nocobase/pull/8914)) by @mytharcher
- **[Async task manager]** async tasks are added to support workers in post error messages ([#8849](https://github.com/nocobase/nocobase/pull/8849)) by @cgyrock
- **[Workflow: Approval]** Avoid to configure approvers' UI when no collection configured in trigger by @mytharcher

### 🐛 Bug Fixes

- **[client]**

  - fix the issue where non-administrators cannot clear associated field values ([#8904](https://github.com/nocobase/nocobase/pull/8904)) by @jiannx
  - Fixed the issue where the “Select record” popup in the subtable failed to load correctly when opened the second time. ([#8865](https://github.com/nocobase/nocobase/pull/8865)) by @gchust
- **[resourcer]** Prevent the `filterByTk` parameter array from being automatically converted into an object when it exceeds 100 items ([#8908](https://github.com/nocobase/nocobase/pull/8908)) by @2013xile
- **[server]** Fix the issue where lifecycle events sent by worker cause serving app stops ([#8906](https://github.com/nocobase/nocobase/pull/8906)) by @mytharcher
- **[Data source manager]** Fixed issue that collection created by AI employee always missing `createBy` and `updateBy` fields ([#8895](https://github.com/nocobase/nocobase/pull/8895)) by @cgyrock
- **[AI employees]**

  - Fix issue with specified URL for LLM service not taking effect in text embedding model calls. ([#8892](https://github.com/nocobase/nocobase/pull/8892)) by @cgyrock
  - Fixed potential undefined variable errors in AI plugin upgrade migration scripts. ([#8883](https://github.com/nocobase/nocobase/pull/8883)) by @cgyrock
- **[Action: Import records Pro]**

  - Fix the issue where columns more than ~30 cause importing error, due to stream has been read duplicately by @mytharcher
  - Fix the issue where error thrown when import in sync mode by @mytharcher
  - Fix `beforeStop` event on sub app not fired by @mytharcher
  - Fix the issue where async tasks do not end after an error occurs in async import by @cgyrock
  - Fix lazy import caused SES error by @mytharcher
- **[Template print]** Fix sql collection printing error by @jiannx
- **[Workflow: Approval]** Fix concurrency issue when add assignee by @mytharcher
- **[Email manager]** Fixed page error when the email does not exist by @jiannx
- **[Migration manager]** Fixed the issue where the migration is interrupted due to an error caused by the target environment not having the new table created during the upload migration process. by @Andrew1989Y
