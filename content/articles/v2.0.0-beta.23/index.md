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

