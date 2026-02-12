Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase is currently updated with three branches: `main` , `next` and `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：The most stable version to date, recommended for installation;
* `next`：Beta version, contains upcoming new features and has been preliminarily tested. There might be some known or unknown issues. It's mainly for test users to collect feedback and optimize functions further. Ideal for test users who want to experience new features early and give feedback;
* `develop`：Alpha version, contains the latest feature code, may be incomplete or unstable, mainly for internal dev and rapid iteration. Suited for tech users interested in product's cutting-edge, but with potential issues and incomplete functions. Not for production use.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.46](https://www.nocobase.com/en/blog/v1.9.46)

*Release date: 2026-02-11*

### 🐛 Bug Fixes

- **[client]** Fix field component options not refreshed in real time when association field switches pattern ([#8611](https://github.com/nocobase/nocobase/pull/8611)) by @katherinehhh
- **[Data visualization: ECharts]** Fix ECharts spelling error by @heziqiang
- **[Workflow: Approval]**

  - Fix the issue where values missing from detail popup of "My application" by @mytharcher
  - Fix error thrown when execute on before save mode by @mytharcher

### [v1.9.45](https://www.nocobase.com/en/blog/v1.9.45)

*Release date: 2026-02-09*

### 🐛 Bug Fixes

- **[Field component: mask]** Fix an issue where the mask field settings popup could not load all user roles correctly. by @gchust
- **[Workflow: Approval]** Fix incorrect id to load detail record by @mytharcher

### [v1.9.44](https://www.nocobase.com/en/blog/v1.9.44)

*Release date: 2026-02-08*

### 🎉 New Features

- **[Workflow: Approval]** Add ACL control for approval APIs by @mytharcher

### [v1.9.43](https://www.nocobase.com/en/blog/v1.9.43)

*Release date: 2026-02-06*

### 🎉 New Features

- **[Auth: DingTalk]** Allows to bind user with `unionId` by @2013xile

### 🚀 Improvements

- **[Collection field: Markdown(Vditor)]** Added a configuration option to set the default edit mode in the component settings. ([#8408](https://github.com/nocobase/nocobase/pull/8408)) by @Cyx649312038

### 🐛 Bug Fixes

- **[Action: Import records]** Fix the vulnerability of import action ([#8544](https://github.com/nocobase/nocobase/pull/8544)) by @mytharcher

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.0.0-beta.23](https://www.nocobase.com/en/blog/v2.0.0-beta.23)

*Release date: 2026-02-12*

### 🎉 New Features

- **[Block: GridCard]** support configurable block height ([#8583](https://github.com/nocobase/nocobase/pull/8583)) by @katherinehhh
- **[Action: Batch edit]** bulk edit 2.0 ([#8526](https://github.com/nocobase/nocobase/pull/8526)) by @jiannx

### 🚀 Improvements

- **[client]**

  - Table 2.0 supports drag and drop sorting ([#8540](https://github.com/nocobase/nocobase/pull/8540)) by @jiannx
  - Move field assignment and default value settings to form-level configuration. ([#8596](https://github.com/nocobase/nocobase/pull/8596)) by @chenos
- **[Localization]** automatically create missing i18n keys ([#8588](https://github.com/nocobase/nocobase/pull/8588)) by @jiannx

### 🐛 Bug Fixes

- **[client]**

  - fix incorrect filtered data in association dropdown when title field is a foreign key ([#8619](https://github.com/nocobase/nocobase/pull/8619)) by @katherinehhh
  - Fix issue where cleared association attachment field is not saved after submit in edit form ([#8616](https://github.com/nocobase/nocobase/pull/8616)) by @katherinehhh
  - Fix field component options not refreshed in real time when association field switches pattern ([#8611](https://github.com/nocobase/nocobase/pull/8611)) by @katherinehhh
  - Fix an issue where table columns did not re-render after clicking Run in the JS column editor. ([#8608](https://github.com/nocobase/nocobase/pull/8608)) by @gchust
  - fix unable to restore selected data in record picker field component after editing ([#8610](https://github.com/nocobase/nocobase/pull/8610)) by @katherinehhh
- **[File manager]** fix issue where file field component can still open selector dialog when disabled ([#8617](https://github.com/nocobase/nocobase/pull/8617)) by @katherinehhh
- **[Data visualization: ECharts]** Fix ECharts spelling error by @heziqiang
- **[Workflow: Approval]**

  - Fix the issue where values missing from detail popup of "My application" by @mytharcher
  - Fix error thrown when execute on before save mode by @mytharcher

### [v2.0.0-beta.22](https://www.nocobase.com/en/blog/v2.0.0-beta.22)

*Release date: 2026-02-10*

### 🎉 New Features

- **[client]** Support configuring browser tab titles for pages, page tabs, popups, and popup tabs ([#8590](https://github.com/nocobase/nocobase/pull/8590)) by @zhangzhonghe
- **[Workflow: Approval]** Add ACL control for approval APIs by @mytharcher

### 🚀 Improvements

- **[client]** Use independent field models for association fields in filter forms ([#8511](https://github.com/nocobase/nocobase/pull/8511)) by @zhangzhonghe
- **[Workflow: CC]** Refactor workflow CC plugin to support FlowModel architecture with v1/v2 compatibility ([#8405](https://github.com/nocobase/nocobase/pull/8405)) by @zhangzhonghe

### 🐛 Bug Fixes

- **[flow-engine]**

  - Fix an issue where Blob objects could not be created in JS block. ([#8603](https://github.com/nocobase/nocobase/pull/8603)) by @gchust
  - Fix incorrect execution context for "ctx.sql" in JS Models. ([#8602](https://github.com/nocobase/nocobase/pull/8602)) by @gchust
- **[Field component: mask]** Fix an issue where the mask field settings popup could not load all user roles correctly. by @gchust
- **[Workflow: Approval]** Fix incorrect id to load detail record by @mytharcher

### [v2.0.0-beta.21](https://www.nocobase.com/en/blog/v2.0.0-beta.21)

*Release date: 2026-02-07*

### 🎉 New Features

- **[client]** support configuring fields of the association collection field in form block ([#8578](https://github.com/nocobase/nocobase/pull/8578)) by @katherinehhh
- **[Action: Duplicate record]** add 2.0 duplicate action ([#8580](https://github.com/nocobase/nocobase/pull/8580)) by @katherinehhh
- **[Workflow]** Support to copy, paste and move node by drag and drop on workflow canvas ([#8559](https://github.com/nocobase/nocobase/pull/8559)) by @mytharcher

### 🚀 Improvements

- **[flow-engine]** Improve autocomplete and code hints in the JS model code editor. ([#8575](https://github.com/nocobase/nocobase/pull/8575)) by @gchust
- **[Workflow: Approval]** Remove support for JS fields by @zhangzhonghe

### 🐛 Bug Fixes

- **[client]**

  - Fix a potential "read hidden" render error in non-config mode. ([#8591](https://github.com/nocobase/nocobase/pull/8591)) by @gchust
  - fix sub-table(inline edit) still shows edit-mode columns after switching to read-only view in edit form ([#8589](https://github.com/nocobase/nocobase/pull/8589)) by @katherinehhh
- **[Flow engine]** Fix an issue where using a block template in “Duplicate” mode caused the empty popup if clicking some action button from the block. ([#8581](https://github.com/nocobase/nocobase/pull/8581)) by @gchust
- **[Block: Map]** Fix  duplicate 'Save as template' configuration options in map block ([#8584](https://github.com/nocobase/nocobase/pull/8584)) by @katherinehhh

### [v2.0.0-beta.20](https://www.nocobase.com/en/blog/v2.0.0-beta.20)

*Release date: 2026-02-05*

### 🎉 New Features

- **[client]** Support configuring data loading mode ([#8551](https://github.com/nocobase/nocobase/pull/8551)) by @zhangzhonghe

### 🐛 Bug Fixes

- **[flow-engine]** fix column delete action not working in popup sub-table edit when createModelOptions is configured ([#8576](https://github.com/nocobase/nocobase/pull/8576)) by @katherinehhh
- **[Email manager]**

  - add filters to the management by @jiannx
  - Fixed the problem of emails in the same mailbox between multiple users and optimized performance by @jiannx
  - fix conversation chain by @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.71](https://www.nocobase.com/en/blog/v2.0.0-alpha.71)

*Release date: 2026-02-10*

### 🎉 New Features

- **[client]**

  - Support configuring browser tab titles for pages, page tabs, popups, and popup tabs ([#8590](https://github.com/nocobase/nocobase/pull/8590)) by @zhangzhonghe
  - support configuring fields of the association collection field in form block ([#8578](https://github.com/nocobase/nocobase/pull/8578)) by @katherinehhh
- **[Block: GridCard]** support configurable block height ([#8583](https://github.com/nocobase/nocobase/pull/8583)) by @katherinehhh
- **[Action: Duplicate record]** add 2.0 duplicate action ([#8580](https://github.com/nocobase/nocobase/pull/8580)) by @katherinehhh
- **[Workflow: Approval]** Add ACL control for approval APIs by @mytharcher

### 🚀 Improvements

- **[client]** Use independent field models for association fields in filter forms ([#8511](https://github.com/nocobase/nocobase/pull/8511)) by @zhangzhonghe
- **[Workflow: CC]** Refactor workflow CC plugin to support FlowModel architecture with v1/v2 compatibility ([#8405](https://github.com/nocobase/nocobase/pull/8405)) by @zhangzhonghe

### 🐛 Bug Fixes

- **[flow-engine]**

  - Fix incorrect execution context for "ctx.sql" in JS Models. ([#8602](https://github.com/nocobase/nocobase/pull/8602)) by @gchust
  - Fix an issue where Blob objects could not be created in JS block. ([#8603](https://github.com/nocobase/nocobase/pull/8603)) by @gchust
- **[client]**

  - Fix an issue where table columns did not re-render after clicking Run in the JS column editor. ([#8608](https://github.com/nocobase/nocobase/pull/8608)) by @gchust
  - Fix a potential "read hidden" render error in non-config mode. ([#8591](https://github.com/nocobase/nocobase/pull/8591)) by @gchust
  - fix sub-table(inline edit) still shows edit-mode columns after switching to read-only view in edit form ([#8589](https://github.com/nocobase/nocobase/pull/8589)) by @katherinehhh
- **[Flow engine]** Fix an issue where using a block template in “Duplicate” mode caused the empty popup if clicking some action button from the block. ([#8581](https://github.com/nocobase/nocobase/pull/8581)) by @gchust
- **[Field component: mask]** Fix an issue where the mask field settings popup could not load all user roles correctly. by @gchust
- **[Workflow: Approval]** Fix incorrect id to load detail record by @mytharcher

### [v2.0.0-alpha.70](https://www.nocobase.com/en/blog/v2.0.0-alpha.70)

*Release date: 2026-02-06*

### 🎉 New Features

- **[Workflow]** Support to copy, paste and move node by drag and drop on workflow canvas ([#8559](https://github.com/nocobase/nocobase/pull/8559)) by @mytharcher

### 🚀 Improvements

- **[Workflow: Approval]** Remove support for JS fields by @zhangzhonghe

### 🐛 Bug Fixes

- **[Block: Map]** Fix  duplicate 'Save as template' configuration options in map block ([#8584](https://github.com/nocobase/nocobase/pull/8584)) by @katherinehhh

### [v2.0.0-alpha.69](https://www.nocobase.com/en/blog/v2.0.0-alpha.69)

*Release date: 2026-02-05*

### 🎉 New Features

- **[client]** Support configuring data loading mode ([#8551](https://github.com/nocobase/nocobase/pull/8551)) by @zhangzhonghe
- **[flow-engine]** support env.ESM_CDN_BASE_URL ([#8529](https://github.com/nocobase/nocobase/pull/8529)) by @chenos
- **[Auth: DingTalk]** Allows to bind user with `unionId` by @2013xile

### 🚀 Improvements

- **[flow-engine]** Improve autocomplete and code hints in the JS model code editor. ([#8575](https://github.com/nocobase/nocobase/pull/8575)) by @gchust
- **[client]**

  - adjust column width setting to dropdown selection in inline editable sub-table ([#8561](https://github.com/nocobase/nocobase/pull/8561)) by @katherinehhh
  - Support disabling redundant default appends params for `ResourceActionProvider` ([#8527](https://github.com/nocobase/nocobase/pull/8527)) by @2013xile
- **[acl]** acl add generalFixedParams method ([#8363](https://github.com/nocobase/nocobase/pull/8363)) by @jiannx
- **[Collection field: Markdown(Vditor)]** Added a configuration option to set the default edit mode in the component settings. ([#8408](https://github.com/nocobase/nocobase/pull/8408)) by @Cyx649312038
- **[Workflow]** Change the route path of workflow sub pages, to make all workflow pages under `/admin/settings/workflow` prefix ([#8519](https://github.com/nocobase/nocobase/pull/8519)) by @mytharcher
- **[AI: Knowledge base]** Optimized the build output to reduce the package size of plugin-ai-knowledge-base. by @cgyrock
- **[Multi-space]** multi-space permission control access acl by @jiannx
- **[Auth: DingTalk]** Use `userid` as the default key for user association, while preserving compatibility with existing authenticators that rely on mobile by @2013xile

### 🐛 Bug Fixes

- **[client]**

  - Fix page refresh required to add child record after enabling tree table ([#8574](https://github.com/nocobase/nocobase/pull/8574)) by @katherinehhh
  - Fix empty space issues in Grid layout ([#8535](https://github.com/nocobase/nocobase/pull/8535)) by @zhangzhonghe
  - Fix column width not updating in subtable( inline edit); multiline text input not resizing with column width ([#8573](https://github.com/nocobase/nocobase/pull/8573)) by @katherinehhh
  - Fix an issue where using the association record picker’s “Quick Create” in the edit form overwrote existing form data. ([#8567](https://github.com/nocobase/nocobase/pull/8567)) by @gchust
  - fix: hide "Enable tree table" and "Expand all rows by default" for non-tree collections ([#8566](https://github.com/nocobase/nocobase/pull/8566)) by @katherinehhh
  - Fix an issue where the “Form (Add new)” menu was incorrectly shown in the "Create new" action popup. ([#8562](https://github.com/nocobase/nocobase/pull/8562)) by @gchust
  - fix nanoid field not regenerating default value after create submission ([#8538](https://github.com/nocobase/nocobase/pull/8538)) by @katherinehhh
  - Fixed an issue where event flow failed to apply when refreshing target blocks across popup. ([#8541](https://github.com/nocobase/nocobase/pull/8541)) by @gchust
  - Fix known issues related to filtering ([#8514](https://github.com/nocobase/nocobase/pull/8514)) by @zhangzhonghe
  - Fixed an issue that caused the data block to refresh repeatedly after submitting a form. ([#8531](https://github.com/nocobase/nocobase/pull/8531)) by @gchust
  - Fix issue where page data is incorrectly refreshed after opening and closing the popup for the first time. ([#8548](https://github.com/nocobase/nocobase/pull/8548)) by @gchust
  - Fixed an issue that prevented using form variables to assign values in linkage rules for multi-level to-many subform fields. ([#8518](https://github.com/nocobase/nocobase/pull/8518)) by @gchust
  - fix incorrect display when setting default values for cascader field model ([#8537](https://github.com/nocobase/nocobase/pull/8537)) by @katherinehhh
  - Fix an issue where data did not refresh after changes across multiple-level popups and across blocks. ([#8471](https://github.com/nocobase/nocobase/pull/8471)) by @gchust
- **[flow-engine]**

  - fix column delete action not working in popup sub-table edit when createModelOptions is configured ([#8576](https://github.com/nocobase/nocobase/pull/8576)) by @katherinehhh
  - Fix an issue where submitting the form after switching pages does not refresh the page. ([#8554](https://github.com/nocobase/nocobase/pull/8554)) by @gchust
  - Fix an issue where some third-party libraries could not be imported correctly in JS blocks. ([#8545](https://github.com/nocobase/nocobase/pull/8545)) by @gchust
  - Fixed incorrect loading of some ESM libraries in runjs due to misclassification as AMD modules. ([#8536](https://github.com/nocobase/nocobase/pull/8536)) by @gchust
  - fix FilterByTK issue when filterTargetKey is a single-element array in external data source ([#8522](https://github.com/nocobase/nocobase/pull/8522)) by @katherinehhh
  - fix column delete action not working in popup sub-table edit when createModelOptions is configured ([#8560](https://github.com/nocobase/nocobase/pull/8560)) by @katherinehhh
- **[Collection field: Attachment(URL)]** Fix attachment URL field filename display config not working in edit form ([#8571](https://github.com/nocobase/nocobase/pull/8571)) by @katherinehhh
- **[AI employees]**

  - Fix an issue where the LLM node fails to send messages ([#8569](https://github.com/nocobase/nocobase/pull/8569)) by @2013xile
  - Fix the issue where the system cannot start after building ([#8523](https://github.com/nocobase/nocobase/pull/8523)) by @cgyrock
  - Fix the exception that occurs when tools are auto called during ai data modeling ([#8532](https://github.com/nocobase/nocobase/pull/8532)) by @cgyrock
- **[UI templates]** Fix error when reopening and submitting a saved popup template for the association field “Add new” form. ([#8564](https://github.com/nocobase/nocobase/pull/8564)) by @gchust
- **[Action: Import records]** Fix the vulnerability of import action ([#8544](https://github.com/nocobase/nocobase/pull/8544)) by @mytharcher
- **[File manager]** Secure file path for local storage, to avoid access path out of document root ([#8539](https://github.com/nocobase/nocobase/pull/8539)) by @mytharcher
- **[Workflow]** Add fault-tolerant for collection record select component, to avoid error thrown when collection deleted ([#8528](https://github.com/nocobase/nocobase/pull/8528)) by @mytharcher
- **[Workflow: Custom action event]** Fix the issue where parameters and payload are incorrect when trigger custom workflow by @mytharcher
- **[Multi-space]**

  - remove the read-pretty attribute for space field by @jiannx
  - add migration script to remove x-ready-pretty in space field by @jiannx
- **[AI: Knowledge base]** Fix the issue where the system cannot start after building by @cgyrock
- **[Action: Import records Pro]** Fix count numbers in import result and message translation by @mytharcher
- **[Workflow: Subflow]** Fix route path of workflow link by @mytharcher
- **[Template print]** fix field list display issue in  template print action configuration by @katherinehhh
- **[Workflow: Approval]**

  - Fix performance issue caused by JSON field in list loading (MySQL) by @mytharcher
  - Add fault-tolerant on workflow deleted, to avoid load error in tasks list by @mytharcher
  - Fix error thrown when add role to user if workflow of audiences is disabled by @mytharcher
- **[Email manager]** body does not collapse when text is selected.  fix download attachment failed by @jiannx
- **[WeCom]** Fix an issue where users cannot be auto-registered when mobile is missing by @2013xile
