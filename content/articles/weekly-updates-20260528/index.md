Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase is currently updated with three branches: `main` , `next` and `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：The most stable version to date, recommended for installation;
* `next`：Beta version, contains upcoming new features and has been preliminarily tested. There might be some known or unknown issues. It's mainly for test users to collect feedback and optimize functions further. Ideal for test users who want to experience new features early and give feedback;
* `develop`：Alpha version, contains the latest feature code, may be incomplete or unstable, mainly for internal dev and rapid iteration. Suited for tech users interested in product's cutting-edge, but with potential issues and incomplete functions. Not for production use.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.58](https://www.nocobase.com/en/blog/v2.0.58)

*Release date: 2026-05-28*

### 🎉 New Features

* **[Workflow]** Added an administrator API to rerun started workflow executions from the head node or a specified node. ([#9569](https://github.com/nocobase/nocobase/pull/9569)) by @mytharcher

### 🚀 Improvements

* **[client]** Removed the Hidden option from menu item settings. ([#9595](https://github.com/nocobase/nocobase/pull/9595)) by @zhangzhonghe

### 🐛 Bug Fixes

* **[client]**
  * Fixed the issue where the v2 mobile date picker popup used the current time instead of the form value. ([#9582](https://github.com/nocobase/nocobase/pull/9582)) by @katherinehhh
  * Fixed the issue where time field format settings did not take effect in v2. ([#9579](https://github.com/nocobase/nocobase/pull/9579)) by @katherinehhh
  * Increased the file upload limit for the v1 scan input component to 10 MB. ([#9580](https://github.com/nocobase/nocobase/pull/9580)) by @katherinehhh
  * Fixed the issue where the hidden state of subform linkage was not synchronized. ([#9594](https://github.com/nocobase/nocobase/pull/9594)) by @katherinehhh
  * Fixed the issue where a subtable in a subform could not add a second row. ([#9586](https://github.com/nocobase/nocobase/pull/9586)) by @katherinehhh
  * Fixed the issue where page tabs disappeared after switching menus. ([#9583](https://github.com/nocobase/nocobase/pull/9583)) by @zhangzhonghe
* **[flow-engine]** Fixed the issue where table action linkage rules executed incorrectly after a form was successfully submitted in a popup. ([#9445](https://github.com/nocobase/nocobase/pull/9445)) by @gchust
* **[Workflow: Custom action event]** Fixed the issue where custom action table buttons with multiple record contexts incorrectly allowed custom context workflows to be selected. ([#9608](https://github.com/nocobase/nocobase/pull/9608)) by @mytharcher
* **[File manager]**
  * Fixed Unicode filename normalization during file uploads to avoid generating object keys with control characters. ([#9584](https://github.com/nocobase/nocobase/pull/9584)) by @mytharcher
  * Improved PDF preview failure messages and documented CORS requirements for external storage. ([#9600](https://github.com/nocobase/nocobase/pull/9600)) by @mytharcher
    Reference: [File Preview](docs/docs/en/file-manager/file-preview/index.md)

### [v2.0.57](https://www.nocobase.com/en/blog/v2.0.57)

*Release date: 2026-05-26*

### 🐛 Bug Fixes

* **[build]** Fixed plugin server obfuscation output to avoid browser globals in Node.js runtime bundles. ([#9559](https://github.com/nocobase/nocobase/pull/9559)) by @Molunerfinn
* **[Workflow: Manual node]** Fixed the issue where temporary saves for manual workflow tasks did not persist submitted form values. ([#9554](https://github.com/nocobase/nocobase/pull/9554)) by @mytharcher
* **[AI employees]** Fixed the incorrect tool name description in the work context prompt. ([#9567](https://github.com/nocobase/nocobase/pull/9567)) by @cgyrock
* **[File manager]** Safely rendered PDF previews with PDF.js instead of iframe-based raw PDF rendering. ([#9566](https://github.com/nocobase/nocobase/pull/9566)) by @mytharcher
* **[Auth: OIDC]** Fixed token leakage when SSO login callbacks received an external redirect URL. by @2013xile
* **[Workflow: Approval]**
  * Fixed the issue where the `<span>jobs:resume</span>` API was not supported by approval nodes. by @mytharcher
  * Fixed approval withdrawal to update submitted business data while respecting source collection update permissions. by @mytharcher
  * Fixed stale approval todos when approval workflows were terminated by non-approval node failures. by @mytharcher

### [v2.0.56](https://www.nocobase.com/en/blog/v2.0.56)

*Release date: 2026-05-22*

### 🎉 New Features

* **[Backup manager]** Open-sourced the Backup manager plugin. ([#9550](https://github.com/nocobase/nocobase/pull/9550)) by @chenos

### 🚀 Improvements

* **[client]** Optimized action button display settings. ([#9510](https://github.com/nocobase/nocobase/pull/9510)) by @katherinehhh
* **[flow-engine]** Added search support to v2 field configuration menus. ([#9489](https://github.com/nocobase/nocobase/pull/9489)) by @zhangzhonghe
* **[Security]** Added dependency security review for pull requests. ([#9523](https://github.com/nocobase/nocobase/pull/9523)) by @zhangzhonghe
* **[Notification manager]** Changed the queue strategy to optimize sending performance. ([#9407](https://github.com/nocobase/nocobase/pull/9407)) by @mytharcher
* **[AI: Knowledge base]** Enabled vector storage modification for AI knowledge bases. by @cgyrock
* **[Workflow: Approval]** Improved related approvals with timeline cards. by @zhangzhonghe

### 🐛 Bug Fixes

* **[client]**
  * Fixed the issue where selected values were cleared when dependent association fields changed in data scope linkage. ([#9551](https://github.com/nocobase/nocobase/pull/9551)) by @katherinehhh
  * Fixed the issue where a menu badge still displayed a dot when its value was 0. ([#9491](https://github.com/nocobase/nocobase/pull/9491)) by @zhangzhonghe
  * Fixed the issue where filter forms could not use current form variables. ([#9474](https://github.com/nocobase/nocobase/pull/9474)) by @zhangzhonghe
  * Fixed the issue where narrowed v2 blocks became full width after leaving edit mode. ([#9529](https://github.com/nocobase/nocobase/pull/9529)) by @zhangzhonghe
  * Fixed incorrect JS Field menu state in subforms. ([#9507](https://github.com/nocobase/nocobase/pull/9507)) by @gchust
* **[flow-engine]** Fixed the multiple selection issue for external data source fields in v2 forms. ([#9542](https://github.com/nocobase/nocobase/pull/9542)) by @katherinehhh
* **[AI employees]** Fixed an error that occurred when AI employees accessed read-only knowledge bases. ([#9539](https://github.com/nocobase/nocobase/pull/9539)) by @cgyrock
* **[Calendar]** Fixed the issue where more items in the calendar could not be fully displayed. ([#9492](https://github.com/nocobase/nocobase/pull/9492)) by @zhangzhonghe
* **[Action: Batch update]** Fixed the issue where the bulk update action reset the loading state after an update failure. ([#9509](https://github.com/nocobase/nocobase/pull/9509)) by @katherinehhh
* **[API documentation]** Fixed collection API documentation so that query parameters no longer interfere with each other. ([#9442](https://github.com/nocobase/nocobase/pull/9442)) by @jiannx
* **[Workflow]** Added a loading state for manual workflow execution. ([#9533](https://github.com/nocobase/nocobase/pull/9533)) by @mytharcher
* **[Migration manager]** Fixed migration file creation failures when using OceanBase. by @2013xile
* **[File storage: S3(Pro)]** Fixed S3 Pro endpoint handling so server uploads and URL previews do not duplicate the bucket host. by @mytharcher
* **[Workflow: Approval]** Fixed duplicate approval record indexes when delegates occurred concurrently on the same approval job. by @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)


### [v2.1.0-beta.37](https://www.nocobase.com/en/blog/v2.1.0-beta.37)

*Release date: 2026-05-26*

### 🎉 New Features

* **[client-v2]** Added a Security menu and the Token policy settings page to the v2 admin. The user center now supports Change password. ([#9556](https://github.com/nocobase/nocobase/pull/9556)) by @Molunerfinn
* **[cli]** Added support for basic authentication. ([#9558](https://github.com/nocobase/nocobase/pull/9558)) by @chenos
* **[Password policy]** Migrated the Password policy plugin to the client-v2 admin shell, including the Password policy and Locked users settings pages, and added client-side rule enforcement on the user center Change password form. by @Molunerfinn

### 🚀 Improvements

* **[Data visualization]** Added client-v2 support for chart blocks. ([#9517](https://github.com/nocobase/nocobase/pull/9517)) by @jiannx
* **[Workflow]** Refactored workflow async-node availability checks. ([#9532](https://github.com/nocobase/nocobase/pull/9532)) by @mytharcher

### 🐛 Bug Fixes

* **[build]**
  * Text assets in server builds are now copied as files instead of being converted into JavaScript modules. ([#9565](https://github.com/nocobase/nocobase/pull/9565)) by @Molunerfinn
  * Fixed plugin server obfuscation output to avoid browser globals in Node.js runtime bundles. ([#9559](https://github.com/nocobase/nocobase/pull/9559)) by @Molunerfinn
* **[client-v2]** Fixed browser language metadata so the app page follows the selected application language instead of being marked as English. ([#9564](https://github.com/nocobase/nocobase/pull/9564)) by @Molunerfinn
* **[File manager]** Safely rendered PDF previews with PDF.js instead of iframe-based raw PDF rendering. ([#9566](https://github.com/nocobase/nocobase/pull/9566)) by @mytharcher
* **[AI employees]** Fixed the incorrect tool name description in the work context prompt. ([#9567](https://github.com/nocobase/nocobase/pull/9567)) by @cgyrock
* **[Workflow: Manual node]** Fixed the issue where temporary saves for manual workflow tasks did not persist submitted form values. ([#9554](https://github.com/nocobase/nocobase/pull/9554)) by @mytharcher
* **[Auth: OIDC]** Fixed token leakage when SSO login callbacks received an external redirect URL. by @2013xile
* **[Workflow: Approval]**
  * Fixed approval withdrawal to update submitted business data while respecting source collection update permissions. by @mytharcher
  * Fixed the issue where the `<span>jobs:resume</span>` API was not supported by approval nodes. by @mytharcher
  * Fixed duplicate approval record indexes when delegates occurred concurrently on the same approval job. by @mytharcher
  * Fixed stale approval todos when approval workflows were terminated by non-approval node failures. by @mytharcher

### [v2.1.0-beta.36](https://www.nocobase.com/en/blog/v2.1.0-beta.36)

*Release date: 2026-05-22*

### 🎉 New Features

* **[cli]** Added backup creation and restore commands. ([#9541](https://github.com/nocobase/nocobase/pull/9541)) by @chenos
* **[Backup manager]** Open-sourced the Backup manager plugin. ([#9550](https://github.com/nocobase/nocobase/pull/9550)) by @chenos
* **[Theme editor]** Added Theme editor support to the v2 interface. ([#9530](https://github.com/nocobase/nocobase/pull/9530)) by @zhangzhonghe
* **[Two-factor authentication (2FA)]** Added support for binding, verification, and configuration of TOTP and two-factor authentication from the v2 client. by @Molunerfinn

### 🚀 Improvements

* **[client]** Optimized action button display settings. ([#9510](https://github.com/nocobase/nocobase/pull/9510)) by @katherinehhh
* **[flow-engine]** Added search support to v2 field configuration menus. ([#9489](https://github.com/nocobase/nocobase/pull/9489)) by @zhangzhonghe
* **[cli]** Improved the environment authentication flow. ([#9546](https://github.com/nocobase/nocobase/pull/9546)) by @chenos
* **[Security]** Added dependency security review for pull requests. ([#9523](https://github.com/nocobase/nocobase/pull/9523)) by @zhangzhonghe
* **[Verification]** Added v2 client support to the Verification plugin, including the admin settings page, user center entry, and SMS OTP forms. ([#9515](https://github.com/nocobase/nocobase/pull/9515)) by @Molunerfinn
* **[Authentication]** Fixed custom brand settings in the v2 client. ([#9543](https://github.com/nocobase/nocobase/pull/9543)) by @zhangzhonghe
* **[Block: Map]** Added v2 client support for the map plugin. ([#9511](https://github.com/nocobase/nocobase/pull/9511)) by @jiannx
* **[Custom brand]** Added custom brand settings support to the v2 client. by @zhangzhonghe
* **[AI: Knowledge base]** Enabled vector storage modification for AI knowledge bases. by @cgyrock
* **[Workflow: Approval]** Added the `<span>async</span>` flag for approval instructions to support the new node creation API in the workflow canvas. by @mytharcher

### 🐛 Bug Fixes

* **[client]**
  * Fixed the issue where selected values were cleared when dependent association fields changed in data scope linkage. ([#9551](https://github.com/nocobase/nocobase/pull/9551)) by @katherinehhh
  * Fixed dev mode loading for built storage plugins that depend on named exports from local source plugins. ([#9548](https://github.com/nocobase/nocobase/pull/9548)) by @Molunerfinn
  * Fixed incorrect JS Field menu state in subforms. ([#9507](https://github.com/nocobase/nocobase/pull/9507)) by @gchust
  * Fixed the issue where narrowed v2 blocks became full width after leaving edit mode. ([#9529](https://github.com/nocobase/nocobase/pull/9529)) by @zhangzhonghe
* **[client-v2]** Fixed inconsistent dnd-kit dependency registration. ([#9544](https://github.com/nocobase/nocobase/pull/9544)) by @jiannx
* **[flow-engine]** Fixed the multiple selection issue for external data source fields in v2 forms. ([#9542](https://github.com/nocobase/nocobase/pull/9542)) by @katherinehhh
* **[Block: iframe]** Fixed the issue where iframe content did not fill the configured block height. ([#9540](https://github.com/nocobase/nocobase/pull/9540)) by @katherinehhh
* **[AI employees]**
  * Fixed an error that occurred when AI employees accessed read-only knowledge bases. ([#9539](https://github.com/nocobase/nocobase/pull/9539)) by @cgyrock
  * Fixed the issue where AI tool call cards did not appear immediately when streamed tool events were split. ([#9534](https://github.com/nocobase/nocobase/pull/9534)) by @2013xile
  * Fixed an error that occurred when AI employees accessed read-only knowledge bases. ([#9538](https://github.com/nocobase/nocobase/pull/9538)) by @cgyrock
* **[Action: Export records]** Improved field configuration performance when there are many association fields. ([#9524](https://github.com/nocobase/nocobase/pull/9524)) by @katherinehhh
* **[Action: Batch update]** Fixed the issue where the bulk update action reset the loading state after an update failure. ([#9509](https://github.com/nocobase/nocobase/pull/9509)) by @katherinehhh
* **[Workflow]** Added a loading state for manual workflow execution. ([#9533](https://github.com/nocobase/nocobase/pull/9533)) by @mytharcher
* **[Localization]** Fixed built-in localization reference translations for AI translation tasks. ([#9531](https://github.com/nocobase/nocobase/pull/9531)) by @2013xile
* **[Migration manager]** Fixed migration file creation failures when using OceanBase. by @2013xile
* **[File storage: S3(Pro)]** Fixed S3 Pro endpoint handling so server uploads and URL previews do not duplicate the bucket host. by @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.40](https://www.nocobase.com/en/blog/v2.1.0-alpha.40)

*Release date: 2026-05-22*

### 🎉 New Features

* **[cli]** Added backup creation and restore commands. ([#9541](https://github.com/nocobase/nocobase/pull/9541)) by @chenos
* **[Backup manager]** Open-sourced the Backup manager plugin. ([#9550](https://github.com/nocobase/nocobase/pull/9550)) by @chenos
* **[Theme editor]** Added Theme editor support to the v2 interface. ([#9530](https://github.com/nocobase/nocobase/pull/9530)) by @zhangzhonghe
* **[Two-factor authentication (2FA)]** Added support for binding, verification, and configuration of TOTP and two-factor authentication from the v2 client. by @Molunerfinn

### 🚀 Improvements

* **[cli]** Improved the environment authentication flow. ([#9546](https://github.com/nocobase/nocobase/pull/9546)) by @chenos
* **[flow-engine]** Added search support to v2 field configuration menus. ([#9489](https://github.com/nocobase/nocobase/pull/9489)) by @zhangzhonghe
* **[client]** Optimized action button display settings. ([#9510](https://github.com/nocobase/nocobase/pull/9510)) by @katherinehhh
* **[Security]** Added dependency security review for pull requests. ([#9523](https://github.com/nocobase/nocobase/pull/9523)) by @zhangzhonghe
* **[Verification]** Added v2 client support to the Verification plugin, including the admin settings page, user center entry, and SMS OTP forms. ([#9515](https://github.com/nocobase/nocobase/pull/9515)) by @Molunerfinn
* **[Authentication]** Fixed custom brand settings in the v2 client. ([#9543](https://github.com/nocobase/nocobase/pull/9543)) by @zhangzhonghe
* **[Block: Map]** Added v2 client support for the map plugin. ([#9511](https://github.com/nocobase/nocobase/pull/9511)) by @jiannx
* **[Custom brand]** Added custom brand settings support to the v2 client. by @zhangzhonghe
* **[AI: Knowledge base]** Enabled vector storage modification for AI knowledge bases. by @cgyrock
* **[Workflow: Approval]** Added the `<span>async</span>` flag for approval instructions to support the new node creation API in the workflow canvas. by @mytharcher

### 🐛 Bug Fixes

* **[client]**
  * Fixed dev mode loading for built storage plugins that depend on named exports from local source plugins. ([#9548](https://github.com/nocobase/nocobase/pull/9548)) by @Molunerfinn
  * Fixed the issue where narrowed v2 blocks became full width after leaving edit mode. ([#9529](https://github.com/nocobase/nocobase/pull/9529)) by @zhangzhonghe
  * Fixed the issue where selected values were cleared when dependent association fields changed in data scope linkage. ([#9551](https://github.com/nocobase/nocobase/pull/9551)) by @katherinehhh
  * Fixed incorrect JS Field menu state in subforms. ([#9507](https://github.com/nocobase/nocobase/pull/9507)) by @gchust
* **[client-v2]** Fixed inconsistent dnd-kit dependency registration. ([#9544](https://github.com/nocobase/nocobase/pull/9544)) by @jiannx
* **[flow-engine]** Fixed the multiple selection issue for external data source fields in v2 forms. ([#9542](https://github.com/nocobase/nocobase/pull/9542)) by @katherinehhh
* **[Block: iframe]** Fixed the issue where iframe content did not fill the configured block height. ([#9540](https://github.com/nocobase/nocobase/pull/9540)) by @katherinehhh
* **[Action: Export records]** Improved field configuration performance when there are many association fields. ([#9524](https://github.com/nocobase/nocobase/pull/9524)) by @katherinehhh
* **[AI employees]**
  * Fixed an error that occurred when AI employees accessed read-only knowledge bases. ([#9539](https://github.com/nocobase/nocobase/pull/9539)) by @cgyrock
  * Fixed an error that occurred when AI employees accessed read-only knowledge bases. ([#9538](https://github.com/nocobase/nocobase/pull/9538)) by @cgyrock
  * Fixed the issue where AI tool call cards did not appear immediately when streamed tool events were split. ([#9534](https://github.com/nocobase/nocobase/pull/9534)) by @2013xile
* **[Localization]** Fixed built-in localization reference translations for AI translation tasks. ([#9531](https://github.com/nocobase/nocobase/pull/9531)) by @2013xile
* **[Action: Batch update]** Fixed the issue where the bulk update action reset the loading state after an update failure. ([#9509](https://github.com/nocobase/nocobase/pull/9509)) by @katherinehhh
* **[Workflow]** Added a loading state for manual workflow execution. ([#9533](https://github.com/nocobase/nocobase/pull/9533)) by @mytharcher
* **[Migration manager]** Fixed migration file creation failures when using OceanBase. by @2013xile
* **[File storage: S3(Pro)]** Fixed S3 Pro endpoint handling so server uploads and URL previews do not duplicate the bucket host. by @mytharcher
* **[Workflow: Approval]** Fixed duplicate approval record indexes when delegates occurred concurrently on the same approval job. by @mytharcher
