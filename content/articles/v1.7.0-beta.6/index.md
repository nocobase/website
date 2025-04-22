### 🎉 New Features

- **[client]** support long text fields as title fields for association field ([#6495](https://github.com/nocobase/nocobase/pull/6495)) by @katherinehhh

- **[Workflow: Aggregate node]** Support to configure precision for aggregation result ([#6491](https://github.com/nocobase/nocobase/pull/6491)) by @mytharcher

### 🐛 Bug Fixes

- **[evaluators]** Revert round decimal places to 9 ([#6492](https://github.com/nocobase/nocobase/pull/6492)) by @mytharcher

- **[Workflow]** Fix legacy tasks count after workflow deleted ([#6493](https://github.com/nocobase/nocobase/pull/6493)) by @mytharcher

- **[Data source: Main]** Unable to create a MySQL view. ([#6477](https://github.com/nocobase/nocobase/pull/6477)) by @aaaaaajie

- **[File manager]** encode url ([#6497](https://github.com/nocobase/nocobase/pull/6497)) by @chenos

- **[Backup manager]**
  - MySQL database restore failure caused by GTID set overlap by @gchust

  - Upload files have not been restored when creating sub-app from backup template by @gchust

- **[Workflow: Approval]**
  - Fix action button missed in process table by @mytharcher

  - Change returned approval as todo by @mytharcher

