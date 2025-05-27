### 🎉 New Features

- **[client]** action linkage rule support 'current form' variables ([#6810](https://github.com/nocobase/nocobase/pull/6810)) by @katherinehhh

- **[undefined]** Add the log of the import plugin by @aaaaaajie

- **[Action: Import records]** Add the log of the import plugin ([#6841](https://github.com/nocobase/nocobase/pull/6841)) by @aaaaaajie

### 🚀 Improvements

- **[client]** add more built-in size settings for read status image ([#6868](https://github.com/nocobase/nocobase/pull/6868)) by @katherinehhh

- **[Collection field: Attachment(URL)]** add more built-in sizes to the attachment URL field for read status ([#6871](https://github.com/nocobase/nocobase/pull/6871)) by @katherinehhh

- **[Workflow]** Allow to revision more than one draft ([#6851](https://github.com/nocobase/nocobase/pull/6851)) by @mytharcher

### 🐛 Bug Fixes

- **[client]**
  - button linkage issue  in detail block ([#6867](https://github.com/nocobase/nocobase/pull/6867)) by @katherinehhh

  - clear right-hand value when operator changes in linkage rule ([#6862](https://github.com/nocobase/nocobase/pull/6862)) by @katherinehhh

  - incorrect evaluation of operators for date variables in linkage conditions ([#6825](https://github.com/nocobase/nocobase/pull/6825)) by @katherinehhh

  - operator missing when switching in linkage rules ([#6857](https://github.com/nocobase/nocobase/pull/6857)) by @katherinehhh

  - variable parsing incompatibility with {{title}} data in secondary confirm ([#6838](https://github.com/nocobase/nocobase/pull/6838)) by @katherinehhh

  - linkage rule value component style improve ([#6836](https://github.com/nocobase/nocobase/pull/6836)) by @katherinehhh

  - variable parsing incompatibility with {{title}} data in secondary confirm ([#6838](https://github.com/nocobase/nocobase/pull/6838)) by @katherinehhh

  - The hidden fields are still displayed ([#6844](https://github.com/nocobase/nocobase/pull/6844)) by @zhangzhonghe

- **[database]** Import failed due to text field values. ([#6699](https://github.com/nocobase/nocobase/pull/6699)) by @aaaaaajie

- **[Data visualization]**
  - Chart blocks do not display when added to popups triggered from block-level actions ([#6864](https://github.com/nocobase/nocobase/pull/6864)) by @2013xile

  - Fix error when filtering nested m2m fields ([#6855](https://github.com/nocobase/nocobase/pull/6855)) by @2013xile

- **[Action: Export records]**
  - improve performance when deleting fields in import/export field settings ([#6861](https://github.com/nocobase/nocobase/pull/6861)) by @katherinehhh

  - Fixed   exporting empty values in nested associations and attachment url ([#6845](https://github.com/nocobase/nocobase/pull/6845)) by @aaaaaajie

  - Fix the error of exporting long texts. ([#6713](https://github.com/nocobase/nocobase/pull/6713)) by @aaaaaajie

- **[File manager]** Fix create file record without foreign key permission ([#6863](https://github.com/nocobase/nocobase/pull/6863)) by @mytharcher

- **[Workflow]** Fix navigating back not works when directly open popup link in tasks center ([#6853](https://github.com/nocobase/nocobase/pull/6853)) by @mytharcher

- **[Action: Duplicate record]** modal closes on first input click when editing duplicated data ([#6848](https://github.com/nocobase/nocobase/pull/6848)) by @katherinehhh

- **[Block: template]** After saving as an inherited template, error when opening the popup ([#6840](https://github.com/nocobase/nocobase/pull/6840)) by @gchust

- **[Workflow: test kit]** Fix failed test cases due to required preset plugin ([#6839](https://github.com/nocobase/nocobase/pull/6839)) by @mytharcher

- **[Workflow: Post-action event]** Fix user acted variable not accessible in Hanldebars template ([#6837](https://github.com/nocobase/nocobase/pull/6837)) by @mytharcher

- **[Workflow: Manual node]** Fix stats number count wrong on tasks ([#6783](https://github.com/nocobase/nocobase/pull/6783)) by @mytharcher

- **[Block: Action panel]** The color of the Action panel is incorrect in dark mode ([#6842](https://github.com/nocobase/nocobase/pull/6842)) by @zhangzhonghe

- **[Action: Export records Pro]**
  - improve performance when deleting fields in import/export pro field settings by @katherinehhh

  - Fix the error of exporting long texts. by @aaaaaajie

- **[Workflow: Subflow]** Fix undefined trigger caused page crash by @mytharcher

- **[Template print]**
  - Fix formatters not found issue. by @sheldon66

  - Fix formatter not found by @sheldon66

- **[File storage: S3(Pro)]**
  - Change to use collection field to locate storage by @mytharcher

  - access url expiration invalid by @jiannx

- **[Workflow: Approval]** Fix stats number count wrong on tasks by @mytharcher

