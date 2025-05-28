### 🎉 New Features

- **[undefined]** New support for Gitpod allows you to start the development environment with one click and quickly begin development. ([#6922](https://github.com/nocobase/nocobase/pull/6922)) by @kerwin612

- **[Input Copy Button]** Add new "Input Copy Button" plugin for single-line text fields ([#6894](https://github.com/nocobase/nocobase/pull/6894)) by @kerwin612

- **[Action: Import records Pro]**
  - Support defining unique records by multiple fields when importing settings by @aaaaaajie

  - Supports settings for overwriting blank cells and ignore them when importing settings by @aaaaaajie

- **[Collection field: Code]** Add height settings for code editor field by @mytharcher

- **[Email manager]**
  - support email mark as todo and add note by @jiannx

  - support labels and combine settings by @jiannx

### 🚀 Improvements

- **[client]**
  - improve styles for date range filter component ([#6939](https://github.com/nocobase/nocobase/pull/6939)) by @katherinehhh

  - Fix issue where hidden form controls captured tab key, significantly improving form operation efficiency ([#6942](https://github.com/nocobase/nocobase/pull/6942)) by @kerwin612

  - validate required fields before showing confirmation dialog ([#6931](https://github.com/nocobase/nocobase/pull/6931)) by @katherinehhh

  - adjust date filter option content display ([#6928](https://github.com/nocobase/nocobase/pull/6928)) by @katherinehhh

- **[undefined]** Upgrade Node version to 20 for CI ([#6927](https://github.com/nocobase/nocobase/pull/6927)) by @mytharcher

### 🐛 Bug Fixes

- **[client]**
  - form label colon visibility setting not working ([#6947](https://github.com/nocobase/nocobase/pull/6947)) by @katherinehhh

  - Block resize by dragging not working ([#6944](https://github.com/nocobase/nocobase/pull/6944)) by @chenos

  - field assignment component i18n not working ([#6945](https://github.com/nocobase/nocobase/pull/6945)) by @katherinehhh

  - noneOf condition check failed in linkage rules ([#6934](https://github.com/nocobase/nocobase/pull/6934)) by @katherinehhh

  - nested condition variables in linkage rules not rendering correctly ([#6929](https://github.com/nocobase/nocobase/pull/6929)) by @katherinehhh

  - block height setting not applied in real time ([#6904](https://github.com/nocobase/nocobase/pull/6904)) by @katherinehhh

  - Fix the issue with the copy button in the error pop-up copying out as [object Object]. ([#6908](https://github.com/nocobase/nocobase/pull/6908)) by @kerwin612

  - incorrect date variable parsing in Date range limit ([#6930](https://github.com/nocobase/nocobase/pull/6930)) by @katherinehhh

- **[database]** Fixed uuid or nanoid auto-generation not working in many-to-many association ([#6912](https://github.com/nocobase/nocobase/pull/6912)) by @aaaaaajie

- **[undefined]** Use Node 20 due to commander package requires ([#6924](https://github.com/nocobase/nocobase/pull/6924)) by @mytharcher

- **[Collection field: Markdown(Vditor)]** markdown-vditor field  component width issue after zoom in and out ([#6946](https://github.com/nocobase/nocobase/pull/6946)) by @katherinehhh

- **[API documentation]** Add missing sub-app info to req.headers ([#6933](https://github.com/nocobase/nocobase/pull/6933)) by @chenos

- **[Notification: In-app message]** Resolved an issue where the "mark all as read" action in in-app messages could affect other users' data. ([#6926](https://github.com/nocobase/nocobase/pull/6926)) by @sheldon66

- **[Data source manager]** Resolve issue with drag-and-drop sorting not working ([#6937](https://github.com/nocobase/nocobase/pull/6937)) by @chenos

- **[Action: Export records]** Fixed an issue where nested relationships failed to export correctly. ([#6917](https://github.com/nocobase/nocobase/pull/6917)) by @aaaaaajie

- **[Workflow: Custom action event]** Avoid plugin load order caused error by @mytharcher

- **[File storage: S3(Pro)]**
  - Fix duplicated upload parameters by @mytharcher

  - Fix preview url and upload parameter by @mytharcher

- **[Block: Multi-step form]** Fix types by @mytharcher

- **[Workflow: Approval]**
  - Fix incorrect record id for ViewAction by @mytharcher

  - Fix locale by @mytharcher

  - Fix appends and data calculation before submit approval process by @mytharcher

- **[Email manager]**
  - fix: remove action coloum by @jiannx

  - fix add note modal error by @jiannx

  - fix mailMessageNotes 和 mailMessageLabels collections api permission by @jiannx

