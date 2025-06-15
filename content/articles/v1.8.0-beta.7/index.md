### 🎉 New Features

- **[Text copy]** Support one-click copying of text field content ([#6954](https://github.com/nocobase/nocobase/pull/6954)) by @zhangzhonghe

### 🐛 Bug Fixes

- **[server]** Cannot read properties of undefined (reading 'setMaaintainingMessage') ([#7064](https://github.com/nocobase/nocobase/pull/7064)) by @chenos

- **[client]**
  - association field selector does not clear selected data after submission ([#7067](https://github.com/nocobase/nocobase/pull/7067)) by @katherinehhh

  - After creating the reverse relation field, the option "Create reverse relation field in the target data table" in the association field settings was not checked. ([#6914](https://github.com/nocobase/nocobase/pull/6914)) by @aaaaaajie

- **[Access control]** Fixed an issue where the app blocked entry when no default role existed ([#7059](https://github.com/nocobase/nocobase/pull/7059)) by @aaaaaajie

- **[Workflow: Loop node]** Fix loop branch runs when condition not satisfied ([#7063](https://github.com/nocobase/nocobase/pull/7063)) by @mytharcher

- **[Data source manager]** Scope changes now take effect immediately for all related roles. ([#7065](https://github.com/nocobase/nocobase/pull/7065)) by @aaaaaajie

- **[Workflow: Custom action event]** Fix variable of redirect url not parsed by @mytharcher

- **[Workflow: Approval]**
  - Fix trigger variable when filter by type by @mytharcher

  - Fix todo stats not updated when execution canceled by @mytharcher

