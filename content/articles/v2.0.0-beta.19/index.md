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

