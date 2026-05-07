### 🎉 New Features

- **[client]** add associate and dissociate actions to association block ([#9366](https://github.com/nocobase/nocobase/pull/9366)) by @katherinehhh

- **[Data visualization]** Add client-v2 support for block plugins ([#9297](https://github.com/nocobase/nocobase/pull/9297)) by @zhangzhonghe

### 🚀 Improvements

- **[undefined]** - ([#9374](https://github.com/nocobase/nocobase/pull/9374)) by @Molunerfinn

### 🐛 Bug Fixes

- **[client-v2]**
  - Fix the issue where some v2 pages fail to load remote plugins ([#9369](https://github.com/nocobase/nocobase/pull/9369)) by @zhangzhonghe

  - Fix the v2 page block drag placeholder and drop position issues ([#9361](https://github.com/nocobase/nocobase/pull/9361)) by @zhangzhonghe

- **[client]**
  - Fixed linkage rules have not been rerun after form values change. ([#9357](https://github.com/nocobase/nocobase/pull/9357)) by @gchust

  - fix required option field in subtable not validated correctly on first selection in mobile ([#9352](https://github.com/nocobase/nocobase/pull/9352)) by @katherinehhh

  - fix hide quick create option for association select field in v2 subtable ([#9358](https://github.com/nocobase/nocobase/pull/9358)) by @katherinehhh

  - Fix the issue where URL query parameter variables become invalid after switching cached pages ([#9263](https://github.com/nocobase/nocobase/pull/9263)) by @zhangzhonghe

  - fix incorrect data rendering in grid card block after update and refresh ([#9351](https://github.com/nocobase/nocobase/pull/9351)) by @katherinehhh

- **[server]** validate plugin package names before filesystem operations ([#9367](https://github.com/nocobase/nocobase/pull/9367)) by @chenos

- **[undefined]** Fix dead links in translated documentation and enable dead-link detection by default in the docs build. ([#9371](https://github.com/nocobase/nocobase/pull/9371)) by @Molunerfinn

- **[AI employees]**
  - Fix AI employee node reading associations field attachment error in workflow ([#9377](https://github.com/nocobase/nocobase/pull/9377)) by @cgyrock

  - Fix workflow AI employee node not ending properly after tool assignment. ([#9381](https://github.com/nocobase/nocobase/pull/9381)) by @cgyrock

- **[Block: Kanban]**
  - Improved Kanban card compact styling and optimized quick-create popup template selection. ([#9370](https://github.com/nocobase/nocobase/pull/9370)) by @jiannx

  - fix prevent single-word wrapping in long text field of v1 kanban block ([#9356](https://github.com/nocobase/nocobase/pull/9356)) by @katherinehhh

  - Fixed kanban associated blocks using unresolved runtime resource params in popup or secondary-page contexts. ([#9350](https://github.com/nocobase/nocobase/pull/9350)) by @jiannx

- **[Action: Custom request]** upgrade koa to v3 ([#9368](https://github.com/nocobase/nocobase/pull/9368)) by @chenos

- **[Collection field: Formula]** fix formula field in v2 subtable not triggered to auto-calculate ([#9354](https://github.com/nocobase/nocobase/pull/9354)) by @katherinehhh

- **[Email manager]** Fixed the mail identities title display by @jiannx

