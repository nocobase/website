### 🎉 New Features

- **[Text copy]** Support one-click copying of text field content ([#6954](https://github.com/nocobase/nocobase/pull/6954)) by @zhangzhonghe

- **[Email manager]** support delete email by @jiannx

### 🚀 Improvements

- **[client]**
  - add "empty" and "not empty" options to checkbox field linkage rules ([#7073](https://github.com/nocobase/nocobase/pull/7073)) by @katherinehhh

  - Logo container width adapts to content type (fixed 168px for images, auto width for text) ([#7075](https://github.com/nocobase/nocobase/pull/7075)) by @Cyx649312038

- **[Async task manager]** Improve performance of task creation during export ([#7078](https://github.com/nocobase/nocobase/pull/7078)) by @aaaaaajie

- **[Workflow: Approval]** Add extra field option for re-assignees list by @mytharcher

### 🐛 Bug Fixes

- **[client]**
  - decimal point lost after switching amount component from mask to inputNumer ([#7077](https://github.com/nocobase/nocobase/pull/7077)) by @katherinehhh

  - incorrect Markdown (Vditor) rendering in subtable ([#7074](https://github.com/nocobase/nocobase/pull/7074)) by @katherinehhh

  - After creating the reverse relation field, the option "Create reverse relation field in the target data table" in the association field settings was not checked. ([#6914](https://github.com/nocobase/nocobase/pull/6914)) by @aaaaaajie

  - association field selector does not clear selected data after submission ([#7067](https://github.com/nocobase/nocobase/pull/7067)) by @katherinehhh

- **[server]** Cannot read properties of undefined (reading 'setMaaintainingMessage') ([#7064](https://github.com/nocobase/nocobase/pull/7064)) by @chenos

- **[Access control]** Fixed an issue where the app blocked entry when no default role existed ([#7059](https://github.com/nocobase/nocobase/pull/7059)) by @aaaaaajie

- **[Data source manager]** Scope changes now take effect immediately for all related roles. ([#7065](https://github.com/nocobase/nocobase/pull/7065)) by @aaaaaajie

- **[Workflow: Loop node]** Fix loop branch runs when condition not satisfied ([#7063](https://github.com/nocobase/nocobase/pull/7063)) by @mytharcher

- **[Workflow: Custom action event]** Fix variable of redirect url not parsed by @mytharcher

- **[Workflow: Approval]** Fix todo stats not updated when execution canceled by @mytharcher

- **[Email manager]** email delete failed by @jiannx

- **[Backup manager]** unknow command error when restoring MySQL backups on windows platform by @gchust

