Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase is currently updated with three branches: `main` , `next` and `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：The most stable version to date, recommended for installation;
* `next`：Beta version, contains upcoming new features and has been preliminarily tested. There might be some known or unknown issues. It's mainly for test users to collect feedback and optimize functions further. Ideal for test users who want to experience new features early and give feedback;
* `develop`：Alpha version, contains the latest feature code, may be incomplete or unstable, mainly for internal dev and rapid iteration. Suited for tech users interested in product's cutting-edge, but with potential issues and incomplete functions. Not for production use.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.55](https://www.nocobase.com/en/blog/v2.0.55)

*Release date: 2026-05-18*

### 🚀 Improvements

- **[AI employees]** Prompt on duplicate table name when saving to vector database ([#9497](https://github.com/nocobase/nocobase/pull/9497)) by @cgyrock
- **[AI: Knowledge base]** Prompt on duplicate table name when saving to vector database by @cgyrock

### 🐛 Bug Fixes

- **[client]**

  - Fixed an issue where current popup record variables could not be resolved in action button event flows. ([#9495](https://github.com/nocobase/nocobase/pull/9495)) by @gchust
  - Fixed an issue where JS field values in subforms were not correctly set during form submission. ([#9496](https://github.com/nocobase/nocobase/pull/9496)) by @gchust
- **[File manager]** Fix file manager `tx-cos` uploads missing file size metadata. ([#9499](https://github.com/nocobase/nocobase/pull/9499)) by @mytharcher
- **[Data source: Main]** Fix the issue where field options are written into the schema after syncing fields ([#9505](https://github.com/nocobase/nocobase/pull/9505)) by @2013xile
- **[WEB client]** Clean blocks data after remove menus. ([#9459](https://github.com/nocobase/nocobase/pull/9459)) by @gchust
- **[AI employees]** Fix AI employee OSS file read errors ([#9493](https://github.com/nocobase/nocobase/pull/9493)) by @cgyrock
- **[Action: Import records]** Fix the issue where imported record on date-like fields shows wrong date ([#9463](https://github.com/nocobase/nocobase/pull/9463)) by @mytharcher
- **[Action: Export records Pro]** Fix the issue where error thrown when export attachment from attachment url field by @mytharcher
- **[Action: Import records Pro]** fix timezone handling for pro xlsx imports by @mytharcher

### [v2.0.53](https://www.nocobase.com/en/blog/v2.0.53)

*Release date: 2026-05-14*

### 🚀 Improvements

- **[flow-engine]** Added an unsaved changes confirm message when closing the event flow configuration page with unsaved data present. ([#9449](https://github.com/nocobase/nocobase/pull/9449)) by @gchust

### 🐛 Bug Fixes

- **[client]**

  - fix prevent opening quick edit for association fields in table ([#9469](https://github.com/nocobase/nocobase/pull/9469)) by @katherinehhh
  - Fixed display-only relation fields in sub-tables not showing or not clickable after refresh. ([#9453](https://github.com/nocobase/nocobase/pull/9453)) by @jiannx
  - fix multiple select fields in v2 data blocks should display option labels instead of values ([#9472](https://github.com/nocobase/nocobase/pull/9472)) by @katherinehhh
- **[Block: Multi-step form]** fix  scrollbar issue when enabling full-height in v1 step form block ([#9468](https://github.com/nocobase/nocobase/pull/9468)) by @katherinehhh

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.35](https://www.nocobase.com/en/blog/v2.1.0-beta.35)

*Release date: 2026-05-20*

### 🚀 Improvements

- **[client]** Share condition evaluation between v1 and v2 apps ([#9522](https://github.com/nocobase/nocobase/pull/9522)) by @zhangzhonghe
- **[Localization]** Improved Lina localization translation tasks with translation scope, reference language settings, and quick editing ([#9521](https://github.com/nocobase/nocobase/pull/9521)) by @2013xile
- **[Workflow: Approval]** Improve related approvals with timeline cards by @zhangzhonghe

### 🐛 Bug Fixes

- **[undefined]** align nginx config paths ([#9528](https://github.com/nocobase/nocobase/pull/9528)) by @chenos
- **[cli-v1]** Fixed create-nocobase-app development startup by reusing packaged app shells while enabling local plugin development. ([#9471](https://github.com/nocobase/nocobase/pull/9471)) by @Molunerfinn
- **[client]**

  - Fix the issue where a menu badge still shows a dot when its value is 0 ([#9491](https://github.com/nocobase/nocobase/pull/9491)) by @zhangzhonghe
  - Fix the issue where filter forms cannot use current form variables ([#9474](https://github.com/nocobase/nocobase/pull/9474)) by @zhangzhonghe
- **[Authentication]** Prevent the server from crashing when a WebSocket auth token references an authenticator whose auth type plugin is unloaded or missing. ([#9514](https://github.com/nocobase/nocobase/pull/9514)) by @Molunerfinn
- **[Calendar]**

  - Fix the issue where calendar more items cannot be fully displayed ([#9492](https://github.com/nocobase/nocobase/pull/9492)) by @zhangzhonghe
  - Fixed the cursor style for event items in the calendar more-events overlay ([#9519](https://github.com/nocobase/nocobase/pull/9519)) by @jiannx
- **[License settings]** resolve symlinked bundled deps ([#9518](https://github.com/nocobase/nocobase/pull/9518)) by @chenos

### [v2.1.0-beta.34](https://www.nocobase.com/en/blog/v2.1.0-beta.34)

*Release date: 2026-05-19*

### 🎉 New Features

- **[Block: Kanban]** Added client-v2 support for the Kanban plugin ([#9475](https://github.com/nocobase/nocobase/pull/9475)) by @jiannx

### 🚀 Improvements

- **[cli]** Improved the NocoBase CLI prompt experience by migrating setup and management workflows to Inquirer, and fixed related install, skills, and Docker runtime issues. ([#9452](https://github.com/nocobase/nocobase/pull/9452)) by @chenos
- **[AI employees]** Prompt on duplicate table name when saving to vector database ([#9497](https://github.com/nocobase/nocobase/pull/9497)) by @cgyrock
- **[Notification manager]** Change queue strategy to optimize sending performance ([#9407](https://github.com/nocobase/nocobase/pull/9407)) by @mytharcher
- **[Workflow: Custom action event]** Migrated the block-workbench and workflow-custom-action-trigger plugins to client v2, including their action models and QR scanner flow. ([#9494](https://github.com/nocobase/nocobase/pull/9494)) by @jiannx
- **[Authentication]** Implement the Authenticators settings page in client-v2 and ship reusable client-v2 table, variable input, and form primitives. ([#9457](https://github.com/nocobase/nocobase/pull/9457)) by @Molunerfinn
- **[AI: Knowledge base]** Prompt on duplicate table name when saving to vector database by @cgyrock
- **[Auth: SAML 2.0]** Add client-v2 entries for the CAS and SAML authentication plugins so they work with the v2 sign-in page and Authenticators settings. by @Molunerfinn

### 🐛 Bug Fixes

- **[client-v2]**

  - Fixed the Kanban plugin v2 route failing to load because dnd-kit dependencies were not provided by the client. ([#9516](https://github.com/nocobase/nocobase/pull/9516)) by @jiannx
  - The shared v2 Table component now shows the page-size selector by default, matching v1 behavior. ([#9512](https://github.com/nocobase/nocobase/pull/9512)) by @Molunerfinn
- **[client]**

  - Fixed an issue where JS field values in subforms were not correctly set during form submission. ([#9496](https://github.com/nocobase/nocobase/pull/9496)) by @gchust
  - Fixed an issue where current popup record variables could not be resolved in action button event flows. ([#9495](https://github.com/nocobase/nocobase/pull/9495)) by @gchust
- **[flow-engine]** Fixed incorrect error message in browser's console. ([#9502](https://github.com/nocobase/nocobase/pull/9502)) by @gchust
- **[AI employees]**

  - Fix issue where operator role permissions are not taking effect in AI employee nodes ([#9513](https://github.com/nocobase/nocobase/pull/9513)) by @cgyrock
  - Fix AI employee OSS file read errors ([#9493](https://github.com/nocobase/nocobase/pull/9493)) by @cgyrock
- **[API documentation]** Fixed collection API documentation so query parameters no longer interfere with each other ([#9442](https://github.com/nocobase/nocobase/pull/9442)) by @jiannx
- **[Data source: Main]** Fix the issue where field options are written into the schema after syncing fields ([#9505](https://github.com/nocobase/nocobase/pull/9505)) by @2013xile
- **[Workflow: JavaScript]** Fixed workflow JavaScript QuickJS runtime package loading in production builds. ([#9503](https://github.com/nocobase/nocobase/pull/9503)) by @mytharcher
- **[WEB client]** Clean blocks data after remove menus. ([#9459](https://github.com/nocobase/nocobase/pull/9459)) by @gchust
- **[Action: Import records]** Fix the issue where imported record on date-like fields shows wrong date ([#9463](https://github.com/nocobase/nocobase/pull/9463)) by @mytharcher
- **[Action: Import records Pro]** fix timezone handling for pro xlsx imports by @mytharcher
- **[Auth: SAML 2.0]** Fix SAML auto-redirect interceptor flickering the app shell and double-opening drawers on every navigation. by @Molunerfinn
- **[Action: Export records Pro]** Fix the issue where error thrown when export attachment from attachment url field by @mytharcher

### [v2.1.0-beta.33](https://www.nocobase.com/en/blog/v2.1.0-beta.33)

*Release date: 2026-05-15*

### 🎉 New Features

- **[Block: Markdown]** Added client v2 support for Markdown blocks ([#9487](https://github.com/nocobase/nocobase/pull/9487)) by @jiannx
- **[Block: List]** List blocks support client-v2 ([#9486](https://github.com/nocobase/nocobase/pull/9486)) by @jiannx
- **[Calendar]** Added client v2 support for the Calendar plugin. ([#9464](https://github.com/nocobase/nocobase/pull/9464)) by @jiannx
- **[Block: Tree]** Added client-v2 support for the tree filter block. ([#9466](https://github.com/nocobase/nocobase/pull/9466)) by @jiannx

### 🚀 Improvements

- **[flow-engine]** Added an unsaved changes confirm message when closing the event flow configuration page with unsaved data present. ([#9449](https://github.com/nocobase/nocobase/pull/9449)) by @gchust
- **[Data source manager]** Optimize the data modeling API to support creating comment collections with AI, configuring relationship fields for external data sources, and setting field validation rules ([#9480](https://github.com/nocobase/nocobase/pull/9480)) by @2013xile
- **[Block: GridCard]** Updated grid card plugin to support client v2 ([#9484](https://github.com/nocobase/nocobase/pull/9484)) by @jiannx
- **[Block: iframe]** Added v2 support for the iframe block. ([#9485](https://github.com/nocobase/nocobase/pull/9485)) by @jiannx
- **[AI employees]** AI employee parallel conversation Interaction and performance optimization ([#9462](https://github.com/nocobase/nocobase/pull/9462)) by @cgyrock

### 🐛 Bug Fixes

- **[client]**

  - Added the "After successful submission" setting for form submit actions. ([#9414](https://github.com/nocobase/nocobase/pull/9414)) by @jiannx
  - fix prevent opening quick edit for association fields in table ([#9469](https://github.com/nocobase/nocobase/pull/9469)) by @katherinehhh
  - Fixed display-only relation fields in sub-tables not showing or not clickable after refresh. ([#9453](https://github.com/nocobase/nocobase/pull/9453)) by @jiannx
  - Fixed the issue where legacy default value settings can't be removed. ([#9470](https://github.com/nocobase/nocobase/pull/9470)) by @gchust
  - fix multiple select fields in v2 data blocks should display option labels instead of values ([#9472](https://github.com/nocobase/nocobase/pull/9472)) by @katherinehhh
- **[client-v2]**

  - Fix issue where the title field option list is empty for relation fields in table blocks ([#9490](https://github.com/nocobase/nocobase/pull/9490)) by @katherinehhh
  - Keep empty groups after filtering v1 menus in the v2 layout ([#9478](https://github.com/nocobase/nocobase/pull/9478)) by @zhangzhonghe
- **[flow-engine]** Fixed unstable relation-field submenus in submodel menus ([#9417](https://github.com/nocobase/nocobase/pull/9417)) by @jiannx
- **[File manager]** Fix file manager `tx-cos` uploads missing file size metadata. ([#9499](https://github.com/nocobase/nocobase/pull/9499)) by @mytharcher
- **[AI employees]** Fixed plugin-ai load error ([#9483](https://github.com/nocobase/nocobase/pull/9483)) by @cgyrock
- **[Block: Multi-step form]** fix  scrollbar issue when enabling full-height in v1 step form block ([#9468](https://github.com/nocobase/nocobase/pull/9468)) by @katherinehhh
- **[Workflow: Webhook]** Fix the issue where creating response node intercepted by validation of `statusCode` configuration by @mytharcher
- **[Collection field: Signature]** Resolve signature box display issue on mobile by @chenzhizdt

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.39](https://www.nocobase.com/en/blog/v2.1.0-alpha.39)

*Release date: 2026-05-20*

### 🎉 New Features

- **[Block: Kanban]** Added client-v2 support for the Kanban plugin ([#9475](https://github.com/nocobase/nocobase/pull/9475)) by @jiannx

### 🚀 Improvements

- **[client]** Share condition evaluation between v1 and v2 apps ([#9522](https://github.com/nocobase/nocobase/pull/9522)) by @zhangzhonghe
- **[Localization]** Improved Lina localization translation tasks with translation scope, reference language settings, and quick editing ([#9521](https://github.com/nocobase/nocobase/pull/9521)) by @2013xile
- **[AI employees]** Prompt on duplicate table name when saving to vector database ([#9497](https://github.com/nocobase/nocobase/pull/9497)) by @cgyrock
- **[Notification manager]** Change queue strategy to optimize sending performance ([#9407](https://github.com/nocobase/nocobase/pull/9407)) by @mytharcher
- **[Workflow: Custom action event]** Migrated the block-workbench and workflow-custom-action-trigger plugins to client v2, including their action models and QR scanner flow. ([#9494](https://github.com/nocobase/nocobase/pull/9494)) by @jiannx
- **[Authentication]** Implement the Authenticators settings page in client-v2 and ship reusable client-v2 table, variable input, and form primitives. ([#9457](https://github.com/nocobase/nocobase/pull/9457)) by @Molunerfinn
- **[AI: Knowledge base]** Prompt on duplicate table name when saving to vector database by @cgyrock
- **[Auth: SAML 2.0]** Add client-v2 entries for the CAS and SAML authentication plugins so they work with the v2 sign-in page and Authenticators settings. by @Molunerfinn
- **[Workflow: Approval]** Improve related approvals with timeline cards by @zhangzhonghe

### 🐛 Bug Fixes

- **[undefined]** align nginx config paths ([#9528](https://github.com/nocobase/nocobase/pull/9528)) by @chenos
- **[cli-v1]** Fixed create-nocobase-app development startup by reusing packaged app shells while enabling local plugin development. ([#9471](https://github.com/nocobase/nocobase/pull/9471)) by @Molunerfinn
- **[client]**

  - Fix the issue where filter forms cannot use current form variables ([#9474](https://github.com/nocobase/nocobase/pull/9474)) by @zhangzhonghe
  - Fix the issue where a menu badge still shows a dot when its value is 0 ([#9491](https://github.com/nocobase/nocobase/pull/9491)) by @zhangzhonghe
- **[client-v2]**

  - The shared v2 Table component now shows the page-size selector by default, matching v1 behavior. ([#9512](https://github.com/nocobase/nocobase/pull/9512)) by @Molunerfinn
  - Fixed the Kanban plugin v2 route failing to load because dnd-kit dependencies were not provided by the client. ([#9516](https://github.com/nocobase/nocobase/pull/9516)) by @jiannx
- **[Calendar]**

  - Fixed the cursor style for event items in the calendar more-events overlay ([#9519](https://github.com/nocobase/nocobase/pull/9519)) by @jiannx
  - Fix the issue where calendar more items cannot be fully displayed ([#9492](https://github.com/nocobase/nocobase/pull/9492)) by @zhangzhonghe
- **[License settings]** resolve symlinked bundled deps ([#9518](https://github.com/nocobase/nocobase/pull/9518)) by @chenos
- **[AI employees]**

  - Fix issue where operator role permissions are not taking effect in AI employee nodes ([#9513](https://github.com/nocobase/nocobase/pull/9513)) by @cgyrock
  - Fix AI employee OSS file read errors ([#9493](https://github.com/nocobase/nocobase/pull/9493)) by @cgyrock
- **[Authentication]** Prevent the server from crashing when a WebSocket auth token references an authenticator whose auth type plugin is unloaded or missing. ([#9514](https://github.com/nocobase/nocobase/pull/9514)) by @Molunerfinn
- **[API documentation]** Fixed collection API documentation so query parameters no longer interfere with each other ([#9442](https://github.com/nocobase/nocobase/pull/9442)) by @jiannx
- **[Data source: Main]** Fix the issue where field options are written into the schema after syncing fields ([#9505](https://github.com/nocobase/nocobase/pull/9505)) by @2013xile
- **[Auth: SAML 2.0]** Fix SAML auto-redirect interceptor flickering the app shell and double-opening drawers on every navigation. by @Molunerfinn

### [v2.1.0-alpha.38](https://www.nocobase.com/en/blog/v2.1.0-alpha.38)

*Release date: 2026-05-18*

### 🐛 Bug Fixes

- **[client]**

  - Fixed an issue where current popup record variables could not be resolved in action button event flows. ([#9495](https://github.com/nocobase/nocobase/pull/9495)) by @gchust
  - Fixed an issue where JS field values in subforms were not correctly set during form submission. ([#9496](https://github.com/nocobase/nocobase/pull/9496)) by @gchust
- **[flow-engine]** Fixed incorrect error message in browser's console. ([#9502](https://github.com/nocobase/nocobase/pull/9502)) by @gchust
- **[Workflow: JavaScript]** Fixed workflow JavaScript QuickJS runtime package loading in production builds. ([#9503](https://github.com/nocobase/nocobase/pull/9503)) by @mytharcher
- **[Action: Import records]** Fix the issue where imported record on date-like fields shows wrong date ([#9463](https://github.com/nocobase/nocobase/pull/9463)) by @mytharcher
- **[Action: Import records Pro]** fix timezone handling for pro xlsx imports by @mytharcher
- **[Action: Export records Pro]** Fix the issue where error thrown when export attachment from attachment url field by @mytharcher

### [v2.1.0-alpha.37](https://www.nocobase.com/en/blog/v2.1.0-alpha.37)

*Release date: 2026-05-17*

### 🐛 Bug Fixes

- **[WEB client]** Clean blocks data after remove menus. ([#9459](https://github.com/nocobase/nocobase/pull/9459)) by @gchust

### [v2.1.0-alpha.36](https://www.nocobase.com/en/blog/v2.1.0-alpha.36)

*Release date: 2026-05-16*

### 🎉 New Features

- **[Block: Markdown]** Added client v2 support for Markdown blocks ([#9487](https://github.com/nocobase/nocobase/pull/9487)) by @jiannx
- **[Block: List]** List blocks support client-v2 ([#9486](https://github.com/nocobase/nocobase/pull/9486)) by @jiannx

### 🚀 Improvements

- **[flow-engine]** Added an unsaved changes confirm message when closing the event flow configuration page with unsaved data present. ([#9449](https://github.com/nocobase/nocobase/pull/9449)) by @gchust
- **[cli]** Improved the NocoBase CLI prompt experience by migrating setup and management workflows to Inquirer, and fixed related install, skills, and Docker runtime issues. ([#9452](https://github.com/nocobase/nocobase/pull/9452)) by @chenos
- **[Data source manager]** Optimize the data modeling API to support creating comment collections with AI, configuring relationship fields for external data sources, and setting field validation rules ([#9480](https://github.com/nocobase/nocobase/pull/9480)) by @2013xile
- **[Block: GridCard]** Updated grid card plugin to support client v2 ([#9484](https://github.com/nocobase/nocobase/pull/9484)) by @jiannx
- **[Block: iframe]** Added v2 support for the iframe block. ([#9485](https://github.com/nocobase/nocobase/pull/9485)) by @jiannx

### 🐛 Bug Fixes

- **[client]**

  - Fixed display-only relation fields in sub-tables not showing or not clickable after refresh. ([#9453](https://github.com/nocobase/nocobase/pull/9453)) by @jiannx
  - Added the "After successful submission" setting for form submit actions. ([#9414](https://github.com/nocobase/nocobase/pull/9414)) by @jiannx
- **[client-v2]** Fix issue where the title field option list is empty for relation fields in table blocks ([#9490](https://github.com/nocobase/nocobase/pull/9490)) by @katherinehhh
- **[flow-engine]** Fixed unstable relation-field submenus in submodel menus ([#9417](https://github.com/nocobase/nocobase/pull/9417)) by @jiannx
- **[File manager]** Fix file manager `tx-cos` uploads missing file size metadata. ([#9499](https://github.com/nocobase/nocobase/pull/9499)) by @mytharcher
- **[Collection field: Signature]** Resolve signature box display issue on mobile by @chenzhizdt

### [v2.1.0-alpha.35](https://www.nocobase.com/en/blog/v2.1.0-alpha.35)

*Release date: 2026-05-14*

### 🎉 New Features

- **[undefined]** Add a new AI employee, Localization Engineer Lina, to assist with localization translation tasks ([#9434](https://github.com/nocobase/nocobase/pull/9434)) by @2013xile
  Reference: [Localization Management](https://docs.nocobase.com/system-management/localization)<br>[Lina: Localization Engineer](https://docs.nocobase.com/ai-employees/built-in/lina)<br>[Use Lina and local HY-MT1.5-1.8B to translate localization entries](https://docs.nocobase.com/ai-employees/scenarios/localization-hy-mt)
- **[Calendar]** Added client v2 support for the Calendar plugin. ([#9464](https://github.com/nocobase/nocobase/pull/9464)) by @jiannx
- **[Block: Tree]** Added client-v2 support for the tree filter block. ([#9466](https://github.com/nocobase/nocobase/pull/9466)) by @jiannx
- **[File storage: S3(Pro)]** Support uploading files via S3 Pro storage in the v2 file manager. by @Molunerfinn

### 🚀 Improvements

- **[build]** Added regression coverage to keep `deleteServerFiles` from removing `client` and `client-v2` build artifacts across Windows and POSIX paths. ([#9318](https://github.com/nocobase/nocobase/pull/9318)) by @Molunerfinn
- **[client]** exclude already associated records in association selection dialog of one-to-many table block ([#9448](https://github.com/nocobase/nocobase/pull/9448)) by @katherinehhh
- **[AI employees]** AI employee parallel conversation Interaction and performance optimization ([#9462](https://github.com/nocobase/nocobase/pull/9462)) by @cgyrock
- **[File manager]** Third-party storage plugins can now register their own storage type form on the v2 file manager settings page. ([#9439](https://github.com/nocobase/nocobase/pull/9439)) by @Molunerfinn
- **[AI: Knowledge base]** The unique identifier for a knowledge base is configurable at the time of creation by @cgyrock

### 🐛 Bug Fixes

- **[client]**

  - fix prevent opening quick edit for association fields in table ([#9469](https://github.com/nocobase/nocobase/pull/9469)) by @katherinehhh
  - fix multiple select fields in v2 data blocks should display option labels instead of values ([#9472](https://github.com/nocobase/nocobase/pull/9472)) by @katherinehhh
  - Fix duplicate table requests when filter forms have default values ([#9423](https://github.com/nocobase/nocobase/pull/9423)) by @zhangzhonghe
  - Fixed the issue where legacy default value settings can't be removed. ([#9470](https://github.com/nocobase/nocobase/pull/9470)) by @gchust
  - Fixed the issue where can't select options for association's select field. ([#9088](https://github.com/nocobase/nocobase/pull/9088)) by @gchust
  - Fix the issue where system settings appear empty after submitting ([#9458](https://github.com/nocobase/nocobase/pull/9458)) by @zhangzhonghe
  - Fixed an issue where the target block data scope was set incorrectly when deselecting row data in a table block event flow. ([#9443](https://github.com/nocobase/nocobase/pull/9443)) by @gchust
  - fix error when changing title field of association field in v2 table block ([#9451](https://github.com/nocobase/nocobase/pull/9451)) by @katherinehhh
  - Fixed V2 linkage rules to support setting selectable options for fields ([#9399](https://github.com/nocobase/nocobase/pull/9399)) by @jiannx
- **[client-v2]**

  - Keep empty groups after filtering v1 menus in the v2 layout ([#9478](https://github.com/nocobase/nocobase/pull/9478)) by @zhangzhonghe
  - Fix the issue where the page turns blank behind the plugin enabling dialog ([#9455](https://github.com/nocobase/nocobase/pull/9455)) by @zhangzhonghe
  - Fix v1 admin pages crashing when they reference v2 plugin modules in production builds. ([#9460](https://github.com/nocobase/nocobase/pull/9460)) by @Molunerfinn
- **[cli-v1]** Fixed development startup failures in apps created with create-nocobase-app caused by app-dev client path resolution. ([#9465](https://github.com/nocobase/nocobase/pull/9465)) by @Molunerfinn
- **[server]** fix(file-manager): force download active content files in local/public storage ([#9437](https://github.com/nocobase/nocobase/pull/9437)) by @mytharcher
- **[AI employees]**

  - Fixed plugin-ai load error ([#9483](https://github.com/nocobase/nocobase/pull/9483)) by @cgyrock
  - Fixed Ollama test flight requiring key input ([#9450](https://github.com/nocobase/nocobase/pull/9450)) by @cgyrock
- **[Block: Multi-step form]** fix  scrollbar issue when enabling full-height in v1 step form block ([#9468](https://github.com/nocobase/nocobase/pull/9468)) by @katherinehhh
- **[Departments]** fix translation conflict between add user and add department buttons in Users & Permissions settings ([#9456](https://github.com/nocobase/nocobase/pull/9456)) by @katherinehhh
- **[Workflow]** fix: restore helper text in FlowModel workflow binding dialogs for operation and custom action events ([#9447](https://github.com/nocobase/nocobase/pull/9447)) by @mytharcher
- **[Block: Markdown]** Fix the issue of v2 Markdown block reporting errors ([#9440](https://github.com/nocobase/nocobase/pull/9440)) by @zhangzhonghe
- **[Workflow: Webhook]** Fix the issue where creating response node intercepted by validation of `statusCode` configuration by @mytharcher
- **[Workflow: Approval]**

  - Fix approval form layout on mobile devices by @zhangzhonghe
  - Fix duplicate approval record index when delegating approval tasks. by @mytharcher
- **[Backup manager]** Fixed an issue where backups would fail with an error when files could not be found. by @gchust
