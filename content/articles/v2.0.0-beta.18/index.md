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

