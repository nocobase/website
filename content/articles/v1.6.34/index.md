### 🎉 New Features

- **[Action: Import records Pro]**
  - Support defining unique records by multiple fields when importing settings by @aaaaaajie

  - Supports settings for overwriting blank cells and ignore them when importing settings by @aaaaaajie

### 🚀 Improvements

- **[undefined]** Upgrade Node version to 20 for CI ([#6927](https://github.com/nocobase/nocobase/pull/6927)) by @mytharcher

### 🐛 Bug Fixes

- **[client]**
  - noneOf condition check failed in linkage rules ([#6934](https://github.com/nocobase/nocobase/pull/6934)) by @katherinehhh

  - block height setting not applied in real time ([#6904](https://github.com/nocobase/nocobase/pull/6904)) by @katherinehhh

- **[undefined]** Use Node 20 due to commander package requires ([#6924](https://github.com/nocobase/nocobase/pull/6924)) by @mytharcher

- **[database]** Fixed uuid or nanoid auto-generation not working in many-to-many association ([#6912](https://github.com/nocobase/nocobase/pull/6912)) by @aaaaaajie

- **[Action: Export records]** Fixed an issue where nested relationships failed to export correctly. ([#6917](https://github.com/nocobase/nocobase/pull/6917)) by @aaaaaajie

- **[Data source manager]** Resolve issue with drag-and-drop sorting not working ([#6937](https://github.com/nocobase/nocobase/pull/6937)) by @chenos

- **[API documentation]** Add missing sub-app info to req.headers ([#6933](https://github.com/nocobase/nocobase/pull/6933)) by @chenos

- **[Notification: In-app message]** Resolved an issue where the "mark all as read" action in in-app messages could affect other users' data. ([#6926](https://github.com/nocobase/nocobase/pull/6926)) by @sheldon66

- **[Workflow: Custom action event]** Avoid plugin load order caused error by @mytharcher

- **[File storage: S3(Pro)]**
  - Fix preview url and upload parameter by @mytharcher

  - Fix duplicated upload parameters by @mytharcher

- **[Block: Multi-step form]** Fix types by @mytharcher

- **[Workflow: Approval]**
  - Fix incorrect record id for ViewAction by @mytharcher

  - Fix appends and data calculation before submit approval process by @mytharcher

