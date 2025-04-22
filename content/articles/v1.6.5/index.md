### 🚀 Improvements

- **[File manager]** Simplify file URL generating logic and API ([#6472](https://github.com/nocobase/nocobase/pull/6472)) by @mytharcher

- **[File storage: S3(Pro)]** Change to a simple way to generate file URL by @mytharcher

- **[Backup manager]** Allow restore backup between pre release and release version of the same version by @gchust

### 🐛 Bug Fixes

- **[client]**
  - rich text field not clearing data on submission ([#6486](https://github.com/nocobase/nocobase/pull/6486)) by @katherinehhh

  - The color of the icons in the upper right corner of the page does not change with the theme ([#6482](https://github.com/nocobase/nocobase/pull/6482)) by @zhangzhonghe

  - Clicking the reset button on the filter form cannot clear the filtering conditions of the grid card block ([#6475](https://github.com/nocobase/nocobase/pull/6475)) by @zhangzhonghe

- **[Workflow: Manual node]**
  - Fix migration ([#6484](https://github.com/nocobase/nocobase/pull/6484)) by @mytharcher

  - Change migration name to ensure rerun ([#6487](https://github.com/nocobase/nocobase/pull/6487)) by @mytharcher

  - Fix workflow title field in filter ([#6480](https://github.com/nocobase/nocobase/pull/6480)) by @mytharcher

  - Fix migration error when id column is not exists ([#6470](https://github.com/nocobase/nocobase/pull/6470)) by @chenos

  - Avoid collection synchronized from fields ([#6478](https://github.com/nocobase/nocobase/pull/6478)) by @mytharcher

- **[Workflow: Aggregate node]** Fix round on null result ([#6473](https://github.com/nocobase/nocobase/pull/6473)) by @mytharcher

- **[Workflow]** Don't count tasks when workflow deleted ([#6474](https://github.com/nocobase/nocobase/pull/6474)) by @mytharcher

- **[Backup manager]** Not able to start server when missing default backup settings by @gchust

- **[Workflow: Approval]**
  - Fix file association field error in process form by @mytharcher

  - Fix tasks count based on hooks by @mytharcher

