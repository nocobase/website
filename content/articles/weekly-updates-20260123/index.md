Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase is currently updated with three branches: `main` , `next` and `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：The most stable version to date, recommended for installation;
* `next`：Beta version, contains upcoming new features and has been preliminarily tested. There might be some known or unknown issues. It's mainly for test users to collect feedback and optimize functions further. Ideal for test users who want to experience new features early and give feedback;
* `develop`：Alpha version, contains the latest feature code, may be incomplete or unstable, mainly for internal dev and rapid iteration. Suited for tech users interested in product's cutting-edge, but with potential issues and incomplete functions. Not for production use.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.39](https://www.nocobase.com/en/blog/v1.9.39)

*Release date: 2026-01-21*

### 🐛 Bug Fixes

- **[server]** Fix version of `mathjs` in common dependencies ([#8475](https://github.com/nocobase/nocobase/pull/8475)) by @mytharcher
- **[client]** Fix the issue where the configuration menu does not display in Chrome 144 ([#8470](https://github.com/nocobase/nocobase/pull/8470)) by @zhangzhonghe
- **[Async task manager]** Fix the issue where workflow triggered by async import delayed to execute ([#8478](https://github.com/nocobase/nocobase/pull/8478)) by @mytharcher
- **[Action: Import records Pro]** Fix the issue where workflow triggered by async import delayed to execute by @mytharcher

### [v1.9.38](https://www.nocobase.com/en/blog/v1.9.38)

*Release date: 2026-01-20*

### 🚀 Improvements

- **[server]** Support configuring a CORS origin whitelist ([#8454](https://github.com/nocobase/nocobase/pull/8454)) by @2013xile
- **[Error handler]** Sanitize SQL reference errors ([#8464](https://github.com/nocobase/nocobase/pull/8464)) by @2013xile

### 🐛 Bug Fixes

- **[client]**

  - fix issue where collection field group sorting settings did not take effect. ([#8453](https://github.com/nocobase/nocobase/pull/8453)) by @katherinehhh
  - fix issue when editing collection in the graphical interface ([#8451](https://github.com/nocobase/nocobase/pull/8451)) by @katherinehhh
  - Fix the issue where the table "Column Settings" button is non-functional ([#8441](https://github.com/nocobase/nocobase/pull/8441)) by @zhangzhonghe
  - Fix the issue where table row button linkage rules affect the state of buttons within popup forms ([#8434](https://github.com/nocobase/nocobase/pull/8434)) by @zhangzhonghe
- **[Mobile (deprecated)]** Deprecated mobile plugin (replaced by the ui-layout plugin from version 2.0). ([#8456](https://github.com/nocobase/nocobase/pull/8456)) by @chenos

### [v1.9.37](https://www.nocobase.com/en/blog/v1.9.37)

*Release date: 2026-01-15*

### 🚀 Improvements

- **[evaluators]** Update version of math.js to support more functions ([#8411](https://github.com/nocobase/nocobase/pull/8411)) by @mytharcher
- **[Notification: In-app message]** Fix performance issue when sending in-app messages to large number of users ([#8402](https://github.com/nocobase/nocobase/pull/8402)) by @mytharcher

### 🐛 Bug Fixes

- **[client]**

  - fix cascading select data not cleared after successful submission in create form ([#8403](https://github.com/nocobase/nocobase/pull/8403)) by @katherinehhh
  - Add fault tolerant for action schema, to avoid page crash when click action button ([#8420](https://github.com/nocobase/nocobase/pull/8420)) by @mytharcher
  - fix issue with submit button where skip required validation does not work when confirmation is enabled ([#8400](https://github.com/nocobase/nocobase/pull/8400)) by @katherinehhh
- **[Collection field: Many to many (array)]** Fix error when appending second-level many-to-many(array) relations in association queries ([#8406](https://github.com/nocobase/nocobase/pull/8406)) by @cgyrock
- **[Workflow]** Fix the issue where schema ID is not updated in duplicated node ([#8396](https://github.com/nocobase/nocobase/pull/8396)) by @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.0.0-beta.13](https://www.nocobase.com/en/blog/v2.0.0-beta.13)

*Release date: 2026-01-19*

### 🚀 Improvements

- **[server]** Support configuring a CORS origin whitelist ([#8454](https://github.com/nocobase/nocobase/pull/8454)) by @2013xile
- **[Action: Export records]** Improve export action data scope based on selected records or resource filters ([#8442](https://github.com/nocobase/nocobase/pull/8442)) by @katherinehhh
- **[Action: Export records Pro]** Improve export action data scope based on selected records or resource filters by @katherinehhh

### 🐛 Bug Fixes

- **[client]**

  - Fix the issue where the "Custom Variables" popup is obscured ([#8463](https://github.com/nocobase/nocobase/pull/8463)) by @zhangzhonghe
  - fix issue when editing collection in the graphical interface ([#8451](https://github.com/nocobase/nocobase/pull/8451)) by @katherinehhh
  - fix issue where collection field group sorting settings did not take effect. ([#8453](https://github.com/nocobase/nocobase/pull/8453)) by @katherinehhh
  - Fix the issue where the shortcut modal height exceeds the viewport height ([#8437](https://github.com/nocobase/nocobase/pull/8437)) by @zhangzhonghe
  - Fix the issue where table row button linkage rules affect the state of buttons within popup forms ([#8434](https://github.com/nocobase/nocobase/pull/8434)) by @zhangzhonghe
  - Fix an issue where the table action column state was polluted when switching pages. ([#8438](https://github.com/nocobase/nocobase/pull/8438)) by @gchust
  - Fix the issue where the table "Column Settings" button is non-functional ([#8441](https://github.com/nocobase/nocobase/pull/8441)) by @zhangzhonghe
  - Fix an issue where the file association field's picker popup had an incorrect z-index, and the popup configuration could not be saved correctly. ([#8446](https://github.com/nocobase/nocobase/pull/8446)) by @gchust
- **[flow-engine]**

  - Fix an issue where variables in runjs code params were resolved before execution. ([#8445](https://github.com/nocobase/nocobase/pull/8445)) by @gchust
  - Fix an issue where popup variables could not be selected in the data selector’s quick-create popup. ([#8450](https://github.com/nocobase/nocobase/pull/8450)) by @gchust
  - Fix an issue where repeatedly clicking the configuration menu could open multiple configuration popups. ([#8448](https://github.com/nocobase/nocobase/pull/8448)) by @gchust
- **[Mobile (deprecated)]** Deprecated mobile plugin (replaced by the ui-layout plugin from version 2.0). ([#8456](https://github.com/nocobase/nocobase/pull/8456)) by @chenos
- **[Flow engine]** Fix an issue where variables containing hyphens could not be parsed correctly. ([#8432](https://github.com/nocobase/nocobase/pull/8432)) by @gchust
- **[Email manager]** Fix the issue where the email configuration popup is obscured by @zhangzhonghe

### [v2.0.0-beta.12](https://www.nocobase.com/en/blog/v2.0.0-beta.12)

*Release date: 2026-01-16*

### 🚀 Improvements

- **[Flow engine]** Support resolving values of fields in the current form record even if they are not added to the edit form. ([#8436](https://github.com/nocobase/nocobase/pull/8436)) by @gchust

### 🐛 Bug Fixes

- **[flow-engine]** Fix dynamic event flow's steps running twice when opening a popup via a button click. ([#8435](https://github.com/nocobase/nocobase/pull/8435)) by @gchust
- **[Template print]** display space fields in version 2.0 by @jiannx

### [v2.0.0-beta.11](https://www.nocobase.com/en/blog/v2.0.0-beta.11)

*Release date: 2026-01-15*

### 🚀 Improvements

- **[evaluators]** Update version of math.js to support more functions ([#8411](https://github.com/nocobase/nocobase/pull/8411)) by @mytharcher
- **[client]** Rich text editor supports font size adjustment, image size adjustment, and soft line breaks ([#8401](https://github.com/nocobase/nocobase/pull/8401)) by @jiannx
- **[AI employees]** Change result of workflow caller to `execution.output`, by explicitly using output node the result could be stable ([#8423](https://github.com/nocobase/nocobase/pull/8423)) by @mytharcher

### 🐛 Bug Fixes

- **[client]**

  - Add fault tolerant for action schema, to avoid page crash when click action button ([#8420](https://github.com/nocobase/nocobase/pull/8420)) by @mytharcher
  - fix title field setting disappearing after setting attachment URL and then changing to another field in form item ([#8418](https://github.com/nocobase/nocobase/pull/8418)) by @katherinehhh
  - fix i title field doesn't update when the association field is set to read-only mode in the create form ([#8413](https://github.com/nocobase/nocobase/pull/8413)) by @katherinehhh
- **[Flow engine]** Fix an issue where variable resolution was incorrect when filterByTk was an array. ([#8412](https://github.com/nocobase/nocobase/pull/8412)) by @gchust
- **[Template print]** support space field by @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.66](https://www.nocobase.com/en/blog/v2.0.0-alpha.66)

*Release date: 2026-01-16*

### 🐛 Bug Fixes

- **[Flow engine]** Fix an issue where variables containing hyphens could not be parsed correctly. ([#8432](https://github.com/nocobase/nocobase/pull/8432)) by @gchust

### [v2.0.0-alpha.65](https://www.nocobase.com/en/blog/v2.0.0-alpha.65)

*Release date: 2026-01-16*

### 🎉 New Features

- **[test]** add process level concurrency control for base task manager ([#8343](https://github.com/nocobase/nocobase/pull/8343)) by @cgyrock

### 🚀 Improvements

- **[client]**

  - Rich text editor supports font size adjustment, image size adjustment, and soft line breaks ([#8401](https://github.com/nocobase/nocobase/pull/8401)) by @jiannx
  - Support specify when to run event flow. ([#8340](https://github.com/nocobase/nocobase/pull/8340)) by @gchust
  - Improve plugin manager list render performance by changing to native webkit css for text ellipsis ([#8391](https://github.com/nocobase/nocobase/pull/8391)) by @mytharcher
- **[evaluators]** Update version of math.js to support more functions ([#8411](https://github.com/nocobase/nocobase/pull/8411)) by @mytharcher
- **[cli]** support CDN base URL configuration via env ([#8384](https://github.com/nocobase/nocobase/pull/8384)) by @chenos
- **[flow-engine]** Add `rowOrder` to GridModel to ensure consistent row ordering ([#8371](https://github.com/nocobase/nocobase/pull/8371)) by @zhangzhonghe
- **[Flow engine]** Support resolving values of fields in the current form record even if they are not added to the edit form. ([#8436](https://github.com/nocobase/nocobase/pull/8436)) by @gchust
- **[AI employees]**

  - Optimize AI entry button ([#8414](https://github.com/nocobase/nocobase/pull/8414)) by @heziqiang
  - Change result of workflow caller to `execution.output`, by explicitly using output node the result could be stable ([#8423](https://github.com/nocobase/nocobase/pull/8423)) by @mytharcher
  - Hide builder ai in entry list.<br/> Optimize LLM integration flow.<br/> Update docs about ai model gemini-3. ([#8409](https://github.com/nocobase/nocobase/pull/8409)) by @heziqiang
  - Support Anthropic and Claude-4.5 ([#8389](https://github.com/nocobase/nocobase/pull/8389)) by @heziqiang
- **[Notification: In-app message]** Fix performance issue when sending in-app messages to large number of users ([#8402](https://github.com/nocobase/nocobase/pull/8402)) by @mytharcher

### 🐛 Bug Fixes

- **[client]**

  - Fix the issue where the shortcut modal height exceeds the viewport height ([#8437](https://github.com/nocobase/nocobase/pull/8437)) by @zhangzhonghe
  - Fix the issue where table row button linkage rules affect the state of buttons within popup forms ([#8434](https://github.com/nocobase/nocobase/pull/8434)) by @zhangzhonghe
  - Fix an issue where the table action column state was polluted when switching pages. ([#8438](https://github.com/nocobase/nocobase/pull/8438)) by @gchust
  - Add fault tolerant for action schema, to avoid page crash when click action button ([#8420](https://github.com/nocobase/nocobase/pull/8420)) by @mytharcher
  - fix i title field doesn't update when the association field is set to read-only mode in the create form ([#8413](https://github.com/nocobase/nocobase/pull/8413)) by @katherinehhh
  - 数字组件不显示值 ([#8410](https://github.com/nocobase/nocobase/pull/8410)) by @chenos
  - fix title field setting disappearing after setting attachment URL and then changing to another field in form item ([#8418](https://github.com/nocobase/nocobase/pull/8418)) by @katherinehhh
  - fix issue with submit button where skip required validation does not work when confirmation is enabled ([#8400](https://github.com/nocobase/nocobase/pull/8400)) by @katherinehhh
  - fix resolve issue where layout setting in grid card block does not take effect ([#8399](https://github.com/nocobase/nocobase/pull/8399)) by @katherinehhh
  - fix cascading select data not cleared after successful submission in create form ([#8403](https://github.com/nocobase/nocobase/pull/8403)) by @katherinehhh
  - fix prevent assignment when Chinese characters are entered in number field ([#8397](https://github.com/nocobase/nocobase/pull/8397)) by @katherinehhh
  - resolve issue with submit button appearing in the file selection popup of one-to-one association field ([#8398](https://github.com/nocobase/nocobase/pull/8398)) by @katherinehhh
  - fix refine logic for optional targetKey ([#8333](https://github.com/nocobase/nocobase/pull/8333)) by @katherinehhh
- **[flow-engine]** Fix dynamic event flow's steps running twice when opening a popup via a button click. ([#8435](https://github.com/nocobase/nocobase/pull/8435)) by @gchust
- **[Flow engine]** Fix an issue where variable resolution was incorrect when filterByTk was an array. ([#8412](https://github.com/nocobase/nocobase/pull/8412)) by @gchust
- **[File manager]** Fix the issue where file URL generated incorrectly for files uploaded to S3 storage ([#8392](https://github.com/nocobase/nocobase/pull/8392)) by @mytharcher
- **[Collection field: Many to many (array)]** Fix error when appending second-level many-to-many(array) relations in association queries ([#8406](https://github.com/nocobase/nocobase/pull/8406)) by @cgyrock
- **[Workflow]**

  - Fix the issue where schema ID is not updated in duplicated node ([#8396](https://github.com/nocobase/nocobase/pull/8396)) by @mytharcher
  - Add instance ID to the Snowflake ID of jobs, to avoid ID conflict issue under cluster mode ([#8382](https://github.com/nocobase/nocobase/pull/8382)) by @mytharcher
- **[Block: template (deprecated)]** Fixed an issue where the edit page for inherited templates (v1) could not be accessed. ([#8376](https://github.com/nocobase/nocobase/pull/8376)) by @gchust
- **[Data source: REST API]** Add fault-tolerant for request context, to avoid error thrown when method is not in context by @mytharcher
- **[Multi-space]**

  - Related space when adding associated data by @jiannx
  - Space selector color follows theme by @jiannx
- **[Template print]**

  - Fix obscured configuration template pop-up issue by @zhangzhonghe
  - support space field by @jiannx
  - display space fields in version 2.0 by @jiannx
- **[File storage: S3(Pro)]** Fix the issue where file renaming mode not works by @mytharcher
- **[Workflow: Approval]**

  - Fix the issue where incorrect record was loaded caused by wrong parameters by @mytharcher
  - Fix value block not displays caused by missing `ValueBlock.Result` component by @mytharcher
- **[Email manager]**

  - fix conversation chain by @jiannx
  - 管理页面添加筛选 by @jiannx
