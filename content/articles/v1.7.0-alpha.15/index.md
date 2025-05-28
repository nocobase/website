### 🎉 New Features

- **[client]** Support custom aggregation variables ([#6916](https://github.com/nocobase/nocobase/pull/6916)) by @zhangzhonghe
Reference: [Custom variables](https://pr-383.docs-cn.nocobase.com/handbook/custom-variables)
- **[utils]** support custom offset in date field filters ([#6854](https://github.com/nocobase/nocobase/pull/6854)) by @katherinehhh

- **[Collection field: Code]** Add height settings for code editor field by @mytharcher

- **[Action: Import records Pro]**
  - Support defining unique records by multiple fields when importing settings by @aaaaaajie

  - Supports settings for overwriting blank cells and ignore them when importing settings by @aaaaaajie

- **[Custom variables]** Support custom aggregation variables by @zhangzhonghe
Reference: [Custom variables](https://pr-383.docs-cn.nocobase.com/handbook/custom-variables)
- **[Email manager]**
  - support email mark as todo and add note by @jiannx

  - support labels and combine settings by @jiannx

### 🚀 Improvements

- **[client]** adjust date filter option content display ([#6928](https://github.com/nocobase/nocobase/pull/6928)) by @katherinehhh

- **[undefined]** Upgrade Node version to 20 for CI ([#6927](https://github.com/nocobase/nocobase/pull/6927)) by @mytharcher

- **[Calendar]** support configurable refresh button in calendar block ([#6920](https://github.com/nocobase/nocobase/pull/6920)) by @katherinehhh

- **[Action: Import records]**
  - Optimize xlsx import performance ([#6850](https://github.com/nocobase/nocobase/pull/6850)) by @aaaaaajie

  - Optimize xlsx import performance ([#6850](https://github.com/nocobase/nocobase/pull/6850)) by @aaaaaajie

- **[Action: Export records]** Performance optimization for exporting to XLSX ([#6729](https://github.com/nocobase/nocobase/pull/6729)) by @aaaaaajie

- **[Block: iframe]** improve date variable assignment logic ([#6828](https://github.com/nocobase/nocobase/pull/6828)) by @katherinehhh

- **[Workflow: Custom action event]** Fix en-US locales based on zh-CN keys by @mytharcher

- **[Action: Export records Pro]** Performance optimization for exporting to XLSX by @aaaaaajie

- **[Workflow: Approval]** Support to do all todos in workflow tasks center by @mytharcher

- **[Email manager]** schema implement then email send and support ai by @jiannx

### 🐛 Bug Fixes

- **[database]** Fixed uuid or nanoid auto-generation not working in many-to-many association ([#6912](https://github.com/nocobase/nocobase/pull/6912)) by @aaaaaajie

- **[client]**
  - noneOf condition check failed in linkage rules ([#6934](https://github.com/nocobase/nocobase/pull/6934)) by @katherinehhh

  - block height setting not applied in real time ([#6904](https://github.com/nocobase/nocobase/pull/6904)) by @katherinehhh

  - nested condition variables in linkage rules not rendering correctly ([#6929](https://github.com/nocobase/nocobase/pull/6929)) by @katherinehhh

  - incorrect date variable parsing in Date range limit ([#6930](https://github.com/nocobase/nocobase/pull/6930)) by @katherinehhh

  - incorrect empty value check for toMany association field in linkage rule ([#6905](https://github.com/nocobase/nocobase/pull/6905)) by @katherinehhh

  - rendering error caused by invalid style format when adding association field ([#6903](https://github.com/nocobase/nocobase/pull/6903)) by @katherinehhh

  - missing current object variable in linkage rule inside subtable ([#6907](https://github.com/nocobase/nocobase/pull/6907)) by @katherinehhh

- **[undefined]** Use Node 20 due to commander package requires ([#6924](https://github.com/nocobase/nocobase/pull/6924)) by @mytharcher

- **[Data source manager]** Resolve issue with drag-and-drop sorting not working ([#6937](https://github.com/nocobase/nocobase/pull/6937)) by @chenos

- **[API documentation]** Add missing sub-app info to req.headers ([#6933](https://github.com/nocobase/nocobase/pull/6933)) by @chenos

- **[Notification: In-app message]** Resolved an issue where the "mark all as read" action in in-app messages could affect other users' data. ([#6926](https://github.com/nocobase/nocobase/pull/6926)) by @sheldon66

- **[Action: Export records]** Fixed an issue where nested relationships failed to export correctly. ([#6917](https://github.com/nocobase/nocobase/pull/6917)) by @aaaaaajie

- **[Collection field: Markdown(Vditor)]** markdown (Vditor) field not adapting to theme ([#6919](https://github.com/nocobase/nocobase/pull/6919)) by @katherinehhh

- **[Collection: Tree]** Avoid incorrect updates to similar path prefixes during path updates ([#6913](https://github.com/nocobase/nocobase/pull/6913)) by @2013xile

- **[Workflow: mailer node]** Handle undefined 'to' field and improve email recipient processing. ([#6915](https://github.com/nocobase/nocobase/pull/6915)) by @sheldon66

- **[Verification]** Fix incorrect English naming: “verificators” → “verifiers” ([#6834](https://github.com/nocobase/nocobase/pull/6834)) by @2013xile

- **[File manager]**
  - Fix client collection injection and upload parameter ([#6909](https://github.com/nocobase/nocobase/pull/6909)) by @mytharcher

  - Fix preview match rule ([#6902](https://github.com/nocobase/nocobase/pull/6902)) by @mytharcher

- **[Workflow: Custom action event]**
  - Avoid plugin load order caused error by @mytharcher

  - Fix error handler can not be matched by class by @mytharcher

  - Fix button perform incorrectly after a few clicks by @mytharcher

- **[Multi-keyword filter]** Remove whitespace from both sides of each keyword by @zhangzhonghe

- **[Two-factor authentication (2FA)]** Require a verifier to be configured when enabling 2FA by @2013xile

- **[File storage: S3(Pro)]**
  - Fix duplicated upload parameters by @mytharcher

  - Fix preview url and upload parameter by @mytharcher

- **[Template print]** Enhance hasChildren logic in useFieldsTree to include uiSchema enum check. by @sheldon66

- **[Block: Multi-step form]** Fix types by @mytharcher

- **[Workflow: Approval]**
  - Fix locale by @mytharcher

  - Fix appends and data calculation before submit approval process by @mytharcher

  - Fix association appends calculation by @mytharcher

  - Fix incorrect record id for ViewAction by @mytharcher

- **[Email manager]**
  - fix mailMessageNotes 和 mailMessageLabels collections api permission by @jiannx

  - fix add note modal error by @jiannx

  - fix: remove action coloum by @jiannx

