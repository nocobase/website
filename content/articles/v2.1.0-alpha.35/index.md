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

