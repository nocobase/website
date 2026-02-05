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

