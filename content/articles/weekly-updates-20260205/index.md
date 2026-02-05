Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase is currently updated with three branches: `main` , `next` and `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：The most stable version to date, recommended for installation;
* `next`：Beta version, contains upcoming new features and has been preliminarily tested. There might be some known or unknown issues. It's mainly for test users to collect feedback and optimize functions further. Ideal for test users who want to experience new features early and give feedback;
* `develop`：Alpha version, contains the latest feature code, may be incomplete or unstable, mainly for internal dev and rapid iteration. Suited for tech users interested in product's cutting-edge, but with potential issues and incomplete functions. Not for production use.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.42](https://www.nocobase.com/en/blog/v1.9.42)

*Release date: 2026-02-02*

### 🚀 Improvements

- **[Auth: DingTalk]** Use `userid` as the default key for user association, while preserving compatibility with existing authenticators that rely on mobile by @2013xile

### 🐛 Bug Fixes

- **[Workflow: Approval]** Fix performance issue caused by JSON field in list loading (MySQL) by @mytharcher
- **[WeCom]** Fix an issue where users cannot be auto-registered when mobile is missing by @2013xile

### [v1.9.41](https://www.nocobase.com/en/blog/v1.9.41)

*Release date: 2026-02-02*

### 🚀 Improvements

- **[client]** Support disabling redundant default appends params for `ResourceActionProvider` ([#8527](https://github.com/nocobase/nocobase/pull/8527)) by @2013xile

### 🐛 Bug Fixes

- **[Workflow]** Add fault-tolerant for collection record select component, to avoid error thrown when collection deleted ([#8528](https://github.com/nocobase/nocobase/pull/8528)) by @mytharcher
- **[File manager]** Secure file path for local storage, to avoid access path out of document root ([#8539](https://github.com/nocobase/nocobase/pull/8539)) by @mytharcher
- **[Workflow: Subflow]** Fix route path of workflow link by @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.0.0-beta.19](https://www.nocobase.com/en/blog/v2.0.0-beta.19)

*Release date: 2026-02-05*

### 🎉 New Features

- **[Auth: DingTalk]** Allows to bind user with `unionId` by @2013xile

### 🚀 Improvements

- **[client]** adjust column width setting to dropdown selection in inline editable sub-table ([#8561](https://github.com/nocobase/nocobase/pull/8561)) by @katherinehhh
- **[Collection field: Markdown(Vditor)]** Added a configuration option to set the default edit mode in the component settings. ([#8408](https://github.com/nocobase/nocobase/pull/8408)) by @Cyx649312038
- **[Multi-space]** multi-space permission control access acl by @jiannx
- **[AI: Knowledge base]** Optimized the build output to reduce the package size of plugin-ai-knowledge-base. by @cgyrock

### 🐛 Bug Fixes

- **[client]**

  - Fix an issue where using the association record picker’s “Quick Create” in the edit form overwrote existing form data. ([#8567](https://github.com/nocobase/nocobase/pull/8567)) by @gchust
  - Fix empty space issues in Grid layout ([#8535](https://github.com/nocobase/nocobase/pull/8535)) by @zhangzhonghe
  - Fix page refresh required to add child record after enabling tree table ([#8574](https://github.com/nocobase/nocobase/pull/8574)) by @katherinehhh
  - Fix column width not updating in subtable( inline edit); multiline text input not resizing with column width ([#8573](https://github.com/nocobase/nocobase/pull/8573)) by @katherinehhh
  - Fix an issue where the “Form (Add new)” menu was incorrectly shown in the "Create new" action popup. ([#8562](https://github.com/nocobase/nocobase/pull/8562)) by @gchust
- **[flow-engine]**

  - Fix an issue where some third-party libraries could not be imported correctly in JS blocks. ([#8545](https://github.com/nocobase/nocobase/pull/8545)) by @gchust
  - Fix an issue where submitting the form after switching pages does not refresh the page. ([#8554](https://github.com/nocobase/nocobase/pull/8554)) by @gchust
- **[UI templates]** Fix error when reopening and submitting a saved popup template for the association field “Add new” form. ([#8564](https://github.com/nocobase/nocobase/pull/8564)) by @gchust
- **[Collection field: Attachment(URL)]** Fix attachment URL field filename display config not working in edit form ([#8571](https://github.com/nocobase/nocobase/pull/8571)) by @katherinehhh
- **[AI employees]** Fix an issue where the LLM node fails to send messages ([#8569](https://github.com/nocobase/nocobase/pull/8569)) by @2013xile
- **[Action: Import records]** Fix the vulnerability of import action ([#8544](https://github.com/nocobase/nocobase/pull/8544)) by @mytharcher
- **[Workflow: Custom action event]** Fix the issue where parameters and payload are incorrect when trigger custom workflow by @mytharcher
- **[Multi-space]**

  - add migration script to remove x-ready-pretty in space field by @jiannx
  - remove the read-pretty attribute for space field by @jiannx
- **[Workflow: Approval]** Fix performance issue caused by JSON field in list loading (MySQL) by @mytharcher

### [v2.0.0-beta.18](https://www.nocobase.com/en/blog/v2.0.0-beta.18)

*Release date: 2026-02-02*

### 🎉 New Features

- **[flow-engine]** support env.ESM_CDN_BASE_URL ([#8529](https://github.com/nocobase/nocobase/pull/8529)) by @chenos

### 🚀 Improvements

- **[acl]** acl add generalFixedParams method ([#8363](https://github.com/nocobase/nocobase/pull/8363)) by @jiannx
- **[client]** Support disabling redundant default appends params for `ResourceActionProvider` ([#8527](https://github.com/nocobase/nocobase/pull/8527)) by @2013xile
- **[Auth: DingTalk]** Use `userid` as the default key for user association, while preserving compatibility with existing authenticators that rely on mobile by @2013xile

### 🐛 Bug Fixes

- **[client]**

  - Fixed an issue where event flow failed to apply when refreshing target blocks across popup. ([#8541](https://github.com/nocobase/nocobase/pull/8541)) by @gchust
  - Fix issue where page data is incorrectly refreshed after opening and closing the popup for the first time. ([#8548](https://github.com/nocobase/nocobase/pull/8548)) by @gchust
  - Fixed an issue that caused the data block to refresh repeatedly after submitting a form. ([#8531](https://github.com/nocobase/nocobase/pull/8531)) by @gchust
  - fix nanoid field not regenerating default value after create submission ([#8538](https://github.com/nocobase/nocobase/pull/8538)) by @katherinehhh
  - fix incorrect display when setting default values for cascader field model ([#8537](https://github.com/nocobase/nocobase/pull/8537)) by @katherinehhh
- **[flow-engine]** Fixed incorrect loading of some ESM libraries in runjs due to misclassification as AMD modules. ([#8536](https://github.com/nocobase/nocobase/pull/8536)) by @gchust
- **[File manager]** Secure file path for local storage, to avoid access path out of document root ([#8539](https://github.com/nocobase/nocobase/pull/8539)) by @mytharcher
- **[Workflow]** Add fault-tolerant for collection record select component, to avoid error thrown when collection deleted ([#8528](https://github.com/nocobase/nocobase/pull/8528)) by @mytharcher
- **[AI employees]** Fix the exception that occurs when tools are auto called during ai data modeling ([#8532](https://github.com/nocobase/nocobase/pull/8532)) by @cgyrock
- **[Action: Import records Pro]** Fix count numbers in import result and message translation by @mytharcher
- **[Workflow: Subflow]** Fix route path of workflow link by @mytharcher
- **[Template print]** fix field list display issue in  template print action configuration by @katherinehhh
- **[Workflow: Approval]**

  - Fix error thrown when add role to user if workflow of audiences is disabled by @mytharcher
  - Add fault-tolerant on workflow deleted, to avoid load error in tasks list by @mytharcher
- **[WeCom]** Fix an issue where users cannot be auto-registered when mobile is missing by @2013xile
