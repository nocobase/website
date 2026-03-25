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

