Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase is currently updated with three branches: `main` , `next` and `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：The most stable version to date, recommended for installation;
* `next`：Beta version, contains upcoming new features and has been preliminarily tested. There might be some known or unknown issues. It's mainly for test users to collect feedback and optimize functions further. Ideal for test users who want to experience new features early and give feedback;
* `develop`：Alpha version, contains the latest feature code, may be incomplete or unstable, mainly for internal dev and rapid iteration. Suited for tech users interested in product's cutting-edge, but with potential issues and incomplete functions. Not for production use.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.33](https://www.nocobase.com/en/blog/v1.6.33)

*Release date: 2025-05-23*

#### 🚀 Improvements

- **[undefined]** Build the full docker image ([#6898](https://github.com/nocobase/nocobase/pull/6898)) by @chenos
- **[client]** Optimize the issue of pages becoming increasingly slow with use ([#6888](https://github.com/nocobase/nocobase/pull/6888)) by @zhangzhonghe
- **[Calendar]** support configurable refresh button in calendar block ([#6920](https://github.com/nocobase/nocobase/pull/6920)) by @katherinehhh
- **[Workflow: Custom action event]** Fix en-US locales based on zh-CN keys by @mytharcher
- **[Workflow: Approval]** Support to do all todos in workflow tasks center by @mytharcher

#### 🐛 Bug Fixes

- **[client]**

  - rendering error caused by invalid style format when adding association field ([#6903](https://github.com/nocobase/nocobase/pull/6903)) by @katherinehhh
  - incorrect empty value check for toMany association field in linkage rule ([#6905](https://github.com/nocobase/nocobase/pull/6905)) by @katherinehhh
- **[Collection field: Markdown(Vditor)]** markdown (Vditor) field not adapting to theme ([#6919](https://github.com/nocobase/nocobase/pull/6919)) by @katherinehhh
- **[Collection: Tree]** Avoid incorrect updates to similar path prefixes during path updates ([#6913](https://github.com/nocobase/nocobase/pull/6913)) by @2013xile
- **[File manager]**

  - Fix preview match rule ([#6902](https://github.com/nocobase/nocobase/pull/6902)) by @mytharcher
  - Fix client collection injection and upload parameter ([#6909](https://github.com/nocobase/nocobase/pull/6909)) by @mytharcher
  - Fix preview URL on non-image files ([#6889](https://github.com/nocobase/nocobase/pull/6889)) by @mytharcher
- **[Workflow: mailer node]** Handle undefined 'to' field and improve email recipient processing. ([#6915](https://github.com/nocobase/nocobase/pull/6915)) by @sheldon66
- **[Workflow: Custom action event]**

  - Fix button perform incorrectly after a few clicks by @mytharcher
  - Fix error handler can not be matched by class by @mytharcher
- **[Workflow: Approval]** Fix association appends calculation by @mytharcher

### [v1.6.34](https://www.nocobase.com/en/blog/v1.6.34)

*Release date: 2025-05-27*

#### 🎉 New Features

- **[Action: Import records Pro]**
  - Support defining unique records by multiple fields when importing settings by @aaaaaajie
  - Supports settings for overwriting blank cells and ignore them when importing settings by @aaaaaajie

#### 🚀 Improvements

- **[undefined]** Upgrade Node version to 20 for CI ([#6927](https://github.com/nocobase/nocobase/pull/6927)) by @mytharcher

#### 🐛 Bug Fixes

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


## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.7.0-alpha.15](https://www.nocobase.com/en/blog/v1.7.0-alpha.15)

*Release date: 2025-05-28*

#### 🎉 New Features

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

#### 🚀 Improvements

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

#### 🐛 Bug Fixes

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

## About NocoBase

NocoBase is a private, open-source, no-code platform offering total control and infinite scalability. It empowers teams to adapt quickly to changes while significantly reducing costs. Avoid years of development and substantial investment by deploying NocoBase in minutes.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Discover NocoBase in 3 Minutes!

## 👇 Get NocoBase

[**Homepage**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Documentation**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
