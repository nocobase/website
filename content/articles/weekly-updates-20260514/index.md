Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase is currently updated with three branches: `main` , `next` and `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：The most stable version to date, recommended for installation;
* `next`：Beta version, contains upcoming new features and has been preliminarily tested. There might be some known or unknown issues. It's mainly for test users to collect feedback and optimize functions further. Ideal for test users who want to experience new features early and give feedback;
* `develop`：Alpha version, contains the latest feature code, may be incomplete or unstable, mainly for internal dev and rapid iteration. Suited for tech users interested in product's cutting-edge, but with potential issues and incomplete functions. Not for production use.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.52](https://www.nocobase.com/en/blog/v2.0.52)

*Release date: 2026-05-13*

### 🎉 New Features

- **[client]**
  - add current user language variable in v2 ([#9405](https://github.com/nocobase/nocobase/pull/9405)) by @katherinehhh
  - add date range limit option for date fields in v2 forms ([#9400](https://github.com/nocobase/nocobase/pull/9400)) by @katherinehhh

### 🚀 Improvements

- **[client]** exclude already associated records in association selection dialog of one-to-many table block ([#9448](https://github.com/nocobase/nocobase/pull/9448)) by @katherinehhh
- **[Departments]** optimize department list style by adding icons and adjusting spacing ([#9435](https://github.com/nocobase/nocobase/pull/9435)) by @katherinehhh
- **[AI: Knowledge base]** The unique identifier for a knowledge base is configurable at the time of creation by @cgyrock

### 🐛 Bug Fixes

- **[client]**

  - Fixed the issue where legacy default value settings can't be removed. ([#9470](https://github.com/nocobase/nocobase/pull/9470)) by @gchust
  - Fixed the issue where can't select options for association's select field. ([#9088](https://github.com/nocobase/nocobase/pull/9088)) by @gchust
  - Fixed an issue where the target block data scope was set incorrectly when deselecting row data in a table block event flow. ([#9443](https://github.com/nocobase/nocobase/pull/9443)) by @gchust
  - Fix duplicate table requests when filter forms have default values ([#9423](https://github.com/nocobase/nocobase/pull/9423)) by @zhangzhonghe
  - Fixed V2 linkage rules to support setting selectable options for fields ([#9399](https://github.com/nocobase/nocobase/pull/9399)) by @jiannx
  - fix error when changing title field of association field in v2 table block ([#9451](https://github.com/nocobase/nocobase/pull/9451)) by @katherinehhh
  - Fixed an intermittent issue where action button linkage rules would fail to take effect. ([#9430](https://github.com/nocobase/nocobase/pull/9430)) by @gchust
  - hide subtable component for to-many association fields in v2 subtable ([#9438](https://github.com/nocobase/nocobase/pull/9438)) by @katherinehhh
- **[server]** fix(file-manager): force download active content files in local/public storage ([#9437](https://github.com/nocobase/nocobase/pull/9437)) by @mytharcher
- **[AI employees]** Fixed Ollama test flight requiring key input ([#9450](https://github.com/nocobase/nocobase/pull/9450)) by @cgyrock
- **[Graph collection manager]** fix graphical interface auto layout throws update action filter error ([#9421](https://github.com/nocobase/nocobase/pull/9421)) by @katherinehhh
- **[Workflow]** fix: restore helper text in FlowModel workflow binding dialogs for operation and custom action events ([#9447](https://github.com/nocobase/nocobase/pull/9447)) by @mytharcher
- **[Departments]** fix translation conflict between add user and add department buttons in Users & Permissions settings ([#9456](https://github.com/nocobase/nocobase/pull/9456)) by @katherinehhh
- **[Collection field: Markdown(Vditor)]** fix markdown field tooltip being hidden in horizontal form layout ([#9420](https://github.com/nocobase/nocobase/pull/9420)) by @katherinehhh
- **[WEB client]** Fix route type filtering when using translated labels ([#9425](https://github.com/nocobase/nocobase/pull/9425)) by @zhangzhonghe
- **[Workflow: Approval]**

  - Fix the issue where JS field appears in approval process settings by @zhangzhonghe
  - Fix approval form layout on mobile devices by @zhangzhonghe
  - Fix duplicate approval record index when delegating approval tasks. by @mytharcher
- **[Backup manager]** Fixed an issue where backups would fail with an error when files could not be found. by @gchust

### [v2.0.51](https://www.nocobase.com/en/blog/v2.0.51)

*Release date: 2026-05-10*

### 🚀 Improvements

- **[Workflow: Approval]** Fix required validation behavior for approval forms by @zhangzhonghe

### 🐛 Bug Fixes

- **[client]**

  - Fixed an issue where JS code could no longer be edited after a JS field was set to read-only. ([#9404](https://github.com/nocobase/nocobase/pull/9404)) by @gchust
  - Fixed an issue where sub-table field assignments would not take effect in field linkage rules. ([#9412](https://github.com/nocobase/nocobase/pull/9412)) by @gchust
  - Fix the issue where v2 page tabs do not sync immediately after saving settings ([#9396](https://github.com/nocobase/nocobase/pull/9396)) by @zhangzhonghe
  - Fixed an issue where the default value popup for association fields in the create form would display incorrectly. ([#9408](https://github.com/nocobase/nocobase/pull/9408)) by @gchust
- **[Password policy]** Fixed an issue where permanently locked users could sign in after a service restart by @2013xile
- **[Action: Import records Pro]** Fix the issue where duplicated check on date field always fails by @mytharcher
- **[Workflow: Approval]** Fix the issue where the select record drawer is obscured in approval workflow configuration by @zhangzhonghe

### [v2.0.50](https://www.nocobase.com/en/blog/v2.0.50)

*Release date: 2026-05-09*

### 🎉 New Features

- **[client]** add associate and dissociate actions to association block ([#9366](https://github.com/nocobase/nocobase/pull/9366)) by @katherinehhh
- **[Text copy]** support "Display copy button" option for read-only text field ([#9394](https://github.com/nocobase/nocobase/pull/9394)) by @katherinehhh

### 🚀 Improvements

- **[undefined]** skip already-published versions in pk ([#9374](https://github.com/nocobase/nocobase/pull/9374)) by @Molunerfinn
- **[client]** Allow to assign field value for sequence field ([#9397](https://github.com/nocobase/nocobase/pull/9397)) by @mytharcher

### 🐛 Bug Fixes

- **[flow-engine]** Fixed untranslated data table field validation messages in v2 flow forms ([#9393](https://github.com/nocobase/nocobase/pull/9393)) by @jiannx
- **[client]**

  - Fixed `Hidden (reserved value)` fields in form blocks so they remain visible in UI Editor mode, and restored value input support for assigning them in Field assignment ([#9373](https://github.com/nocobase/nocobase/pull/9373)) by @jiannx
  - Fix incorrect download filenames for AttachmentURL fields when file metadata is missing. ([#9382](https://github.com/nocobase/nocobase/pull/9382)) by @mytharcher
  - Fixed the v2 table bulk workflow trigger so row selection stays consistent after redirecting between tabs and rows can be selected again after returning ([#9388](https://github.com/nocobase/nocobase/pull/9388)) by @jiannx
  - Fix filter forms that could not collapse ([#9386](https://github.com/nocobase/nocobase/pull/9386)) by @zhangzhonghe
  - Fix the issue where v1 subtable linkage rules incorrectly change required field styles ([#9364](https://github.com/nocobase/nocobase/pull/9364)) by @zhangzhonghe
  - fix incorrect data rendering in grid card block after update and refresh ([#9351](https://github.com/nocobase/nocobase/pull/9351)) by @katherinehhh
  - fix required option field in subtable not validated correctly on first selection in mobile ([#9352](https://github.com/nocobase/nocobase/pull/9352)) by @katherinehhh
  - Fix the issue where URL query parameter variables become invalid after switching cached pages ([#9263](https://github.com/nocobase/nocobase/pull/9263)) by @zhangzhonghe
  - fix adapt DividerItem to theme in v2 ([#9372](https://github.com/nocobase/nocobase/pull/9372)) by @katherinehhh
  - fix hide quick create option for association select field in v2 subtable ([#9358](https://github.com/nocobase/nocobase/pull/9358)) by @katherinehhh
  - Fixed linkage rules have not been rerun after form values change. ([#9357](https://github.com/nocobase/nocobase/pull/9357)) by @gchust
  - Fix the error when filtering scalar fields with custom multi-select filters ([#9387](https://github.com/nocobase/nocobase/pull/9387)) by @zhangzhonghe
- **[server]** validate plugin package names before filesystem operations ([#9367](https://github.com/nocobase/nocobase/pull/9367)) by @chenos
- **[Data source manager]** prevent editing and deletion of all records in custom scope permissions for external data sources ([#9395](https://github.com/nocobase/nocobase/pull/9395)) by @katherinehhh
- **[Data source: Main]** Fixed imported database tables using the wrong prefixed table name when a table prefix is enabled ([#9403](https://github.com/nocobase/nocobase/pull/9403)) by @2013xile
- **[Notification: In-app message]** Fixed an issue where the in-app message list did not refresh after receiving realtime notifications ([#9409](https://github.com/nocobase/nocobase/pull/9409)) by @mytharcher
- **[Block: Kanban]** fix prevent single-word wrapping in long text field of v1 kanban block ([#9356](https://github.com/nocobase/nocobase/pull/9356)) by @katherinehhh
- **[Collection field: Formula]** fix formula field in v2 subtable not triggered to auto-calculate ([#9354](https://github.com/nocobase/nocobase/pull/9354)) by @katherinehhh

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.32](https://www.nocobase.com/en/blog/v2.1.0-beta.32)

*Release date: 2026-05-13*

### 🎉 New Features

- **[undefined]** Add a new AI employee, Localization Engineer Lina, to assist with localization translation tasks ([#9434](https://github.com/nocobase/nocobase/pull/9434)) by @2013xile
  Reference: [Localization Management](https://docs.nocobase.com/system-management/localization)<br>[Lina: Localization Engineer](https://docs.nocobase.com/ai-employees/built-in/lina)<br>[Use Lina and local HY-MT1.5-1.8B to translate localization entries](https://docs.nocobase.com/ai-employees/scenarios/localization-hy-mt)
- **[File storage: S3(Pro)]** Support uploading files via S3 Pro storage in the v2 file manager. by @Molunerfinn

### 🚀 Improvements

- **[build]** Added regression coverage to keep `deleteServerFiles` from removing `client` and `client-v2` build artifacts across Windows and POSIX paths. ([#9318](https://github.com/nocobase/nocobase/pull/9318)) by @Molunerfinn
- **[client]** exclude already associated records in association selection dialog of one-to-many table block ([#9448](https://github.com/nocobase/nocobase/pull/9448)) by @katherinehhh
- **[File manager]** Third-party storage plugins can now register their own storage type form on the v2 file manager settings page. ([#9439](https://github.com/nocobase/nocobase/pull/9439)) by @Molunerfinn
- **[AI: Knowledge base]** The unique identifier for a knowledge base is configurable at the time of creation by @cgyrock

### 🐛 Bug Fixes

- **[client]**

  - Fixed the issue where can't select options for association's select field. ([#9088](https://github.com/nocobase/nocobase/pull/9088)) by @gchust
  - Fix the issue where system settings appear empty after submitting ([#9458](https://github.com/nocobase/nocobase/pull/9458)) by @zhangzhonghe
  - Fix duplicate table requests when filter forms have default values ([#9423](https://github.com/nocobase/nocobase/pull/9423)) by @zhangzhonghe
  - Fixed an issue where the target block data scope was set incorrectly when deselecting row data in a table block event flow. ([#9443](https://github.com/nocobase/nocobase/pull/9443)) by @gchust
  - Fixed V2 linkage rules to support setting selectable options for fields ([#9399](https://github.com/nocobase/nocobase/pull/9399)) by @jiannx
  - fix error when changing title field of association field in v2 table block ([#9451](https://github.com/nocobase/nocobase/pull/9451)) by @katherinehhh
- **[client-v2]**

  - Fix the issue where the page turns blank behind the plugin enabling dialog ([#9455](https://github.com/nocobase/nocobase/pull/9455)) by @zhangzhonghe
  - Fix v1 admin pages crashing when they reference v2 plugin modules in production builds. ([#9460](https://github.com/nocobase/nocobase/pull/9460)) by @Molunerfinn
- **[cli-v1]** Fixed development startup failures in apps created with create-nocobase-app caused by app-dev client path resolution. ([#9465](https://github.com/nocobase/nocobase/pull/9465)) by @Molunerfinn
- **[server]** fix(file-manager): force download active content files in local/public storage ([#9437](https://github.com/nocobase/nocobase/pull/9437)) by @mytharcher
- **[Departments]** fix translation conflict between add user and add department buttons in Users & Permissions settings ([#9456](https://github.com/nocobase/nocobase/pull/9456)) by @katherinehhh
- **[Block: Markdown]** Fix the issue of v2 Markdown block reporting errors ([#9440](https://github.com/nocobase/nocobase/pull/9440)) by @zhangzhonghe
- **[Workflow]** fix: restore helper text in FlowModel workflow binding dialogs for operation and custom action events ([#9447](https://github.com/nocobase/nocobase/pull/9447)) by @mytharcher
- **[AI employees]** Fixed Ollama test flight requiring key input ([#9450](https://github.com/nocobase/nocobase/pull/9450)) by @cgyrock
- **[Workflow: Approval]**

  - Fix duplicate approval record index when delegating approval tasks. by @mytharcher
  - Fix approval form layout on mobile devices by @zhangzhonghe
- **[Backup manager]** Fixed an issue where backups would fail with an error when files could not be found. by @gchust

### [v2.1.0-beta.30](https://www.nocobase.com/en/blog/v2.1.0-beta.30)

*Release date: 2026-05-12*

### 🎉 New Features

- **[client]**
  - Add linkage rules support for page menu items ([#9304](https://github.com/nocobase/nocobase/pull/9304)) by @zhangzhonghe
  - add current user language variable in v2 ([#9405](https://github.com/nocobase/nocobase/pull/9405)) by @katherinehhh

### 🚀 Improvements

- **[client-v2]** Filter out v1 menus in the v2 layout and only show v2 menus ([#9427](https://github.com/nocobase/nocobase/pull/9427)) by @zhangzhonghe
- **[undefined]** support session-scoped current env in nb cli ([#9415](https://github.com/nocobase/nocobase/pull/9415)) by @chenos
- **[AI employees]** AI employee support parallel processing of multiple conversation ([#9344](https://github.com/nocobase/nocobase/pull/9344)) by @cgyrock
- **[Departments]** optimize department list style by adding icons and adjusting spacing ([#9435](https://github.com/nocobase/nocobase/pull/9435)) by @katherinehhh

### 🐛 Bug Fixes

- **[build]** Fix plugin build failure when v1 client code imports another plugin's `/client-v2` entry. ([#9436](https://github.com/nocobase/nocobase/pull/9436)) by @Molunerfinn
- **[client]**

  - hide subtable component for to-many association fields in v2 subtable ([#9438](https://github.com/nocobase/nocobase/pull/9438)) by @katherinehhh
  - Fixed an intermittent issue where action button linkage rules would fail to take effect. ([#9430](https://github.com/nocobase/nocobase/pull/9430)) by @gchust
- **[Graph collection manager]** fix graphical interface auto layout throws update action filter error ([#9421](https://github.com/nocobase/nocobase/pull/9421)) by @katherinehhh
- **[Block: Tree]** Improved tree filter block settings and fixed unsupported association, title-field fallback, and search reset behavior. ([#9426](https://github.com/nocobase/nocobase/pull/9426)) by @jiannx

### [v2.1.0-beta.29](https://www.nocobase.com/en/blog/v2.1.0-beta.29)

*Release date: 2026-05-10*

### 🎉 New Features

- **[client]** add date range limit option for date fields in v2 forms ([#9400](https://github.com/nocobase/nocobase/pull/9400)) by @katherinehhh
- **[flow-engine]** Migrate `plugin-environment-variables` to client-v2 with a React-based settings page and a globally registered `$env` runtime variable; add a client-v2 entry to `plugin-file-manager` with a React-based storage configuration page and FlowModel-based upload field, upload action, and preview. ([#9413](https://github.com/nocobase/nocobase/pull/9413)) by @Molunerfinn

### 🐛 Bug Fixes

- **[client]**

  - Fixed an issue where JS code could no longer be edited after a JS field was set to read-only. ([#9404](https://github.com/nocobase/nocobase/pull/9404)) by @gchust
  - Fix the issue where v2 page tabs do not sync immediately after saving settings ([#9396](https://github.com/nocobase/nocobase/pull/9396)) by @zhangzhonghe
  - Fixed an issue where sub-table field assignments would not take effect in field linkage rules. ([#9412](https://github.com/nocobase/nocobase/pull/9412)) by @gchust
  - Fixed an issue where the default value popup for association fields in the create form would display incorrectly. ([#9408](https://github.com/nocobase/nocobase/pull/9408)) by @gchust
- **[Collection field: Markdown(Vditor)]** fix markdown field tooltip being hidden in horizontal form layout ([#9420](https://github.com/nocobase/nocobase/pull/9420)) by @katherinehhh
- **[Mobile (deprecated)]** Fix mobile message popups that could not be closed or scrolled ([#9424](https://github.com/nocobase/nocobase/pull/9424)) by @zhangzhonghe
- **[WEB client]** Fix route type filtering when using translated labels ([#9425](https://github.com/nocobase/nocobase/pull/9425)) by @zhangzhonghe
- **[Workflow: Approval]** Fix the issue where JS field appears in approval process settings by @zhangzhonghe

### [v2.1.0-beta.27](https://www.nocobase.com/en/blog/v2.1.0-beta.27)

*Release date: 2026-05-09*

### 🎉 New Features

- **[server]** AI employees can search bundled documentation with Bash commands ([#9269](https://github.com/nocobase/nocobase/pull/9269)) by @2013xile
- **[AI employees]** Workflow AI employee node supports loading files from attachment fields. ([#9402](https://github.com/nocobase/nocobase/pull/9402)) by @cgyrock
- **[Text copy]** support "Display copy button" option for read-only text field ([#9394](https://github.com/nocobase/nocobase/pull/9394)) by @katherinehhh

### 🚀 Improvements

- **[client]** Allow to assign field value for sequence field ([#9397](https://github.com/nocobase/nocobase/pull/9397)) by @mytharcher
- **[Block: Kanban]** Improved v2 detail field spacing consistency and made kanban card and column spacing better adapt to theme settings. ([#9390](https://github.com/nocobase/nocobase/pull/9390)) by @jiannx
- **[AI employees]** Improved Nathan's RunJS editing tools and reduced lag during long AI chat conversations ([#9311](https://github.com/nocobase/nocobase/pull/9311)) by @2013xile
- **[Workflow: Approval]** Fix required validation behavior for approval forms by @zhangzhonghe

### 🐛 Bug Fixes

- **[flow-engine]** Fixed untranslated data table field validation messages in v2 flow forms ([#9393](https://github.com/nocobase/nocobase/pull/9393)) by @jiannx
- **[client]**

  - Fix filter forms that could not collapse ([#9386](https://github.com/nocobase/nocobase/pull/9386)) by @zhangzhonghe
  - Fix the error when filtering scalar fields with custom multi-select filters ([#9387](https://github.com/nocobase/nocobase/pull/9387)) by @zhangzhonghe
  - Fix incorrect download filenames for AttachmentURL fields when file metadata is missing. ([#9382](https://github.com/nocobase/nocobase/pull/9382)) by @mytharcher
  - fix adapt DividerItem to theme in v2 ([#9372](https://github.com/nocobase/nocobase/pull/9372)) by @katherinehhh
  - Fix the issue where v1 subtable linkage rules incorrectly change required field styles ([#9364](https://github.com/nocobase/nocobase/pull/9364)) by @zhangzhonghe
  - Fixed `Hidden (reserved value)` fields in form blocks so they remain visible in UI Editor mode, and restored value input support for assigning them in Field assignment ([#9373](https://github.com/nocobase/nocobase/pull/9373)) by @jiannx
  - Fixed the v2 table bulk workflow trigger so row selection stays consistent after redirecting between tabs and rows can be selected again after returning ([#9388](https://github.com/nocobase/nocobase/pull/9388)) by @jiannx
- **[client-v2]**

  - Fixed error when selecting association fields in field settings. ([#9379](https://github.com/nocobase/nocobase/pull/9379)) by @gchust
  - Fix the issue where a 404 page flashes after the app starts ([#9365](https://github.com/nocobase/nocobase/pull/9365)) by @zhangzhonghe
- **[server]** Fixed sub-application OAuth discovery requests being routed as main-app requests ([#9383](https://github.com/nocobase/nocobase/pull/9383)) by @2013xile
- **[Data source: Main]** Fixed imported database tables using the wrong prefixed table name when a table prefix is enabled ([#9403](https://github.com/nocobase/nocobase/pull/9403)) by @2013xile
- **[Notification: In-app message]** Fixed an issue where the in-app message list did not refresh after receiving realtime notifications ([#9409](https://github.com/nocobase/nocobase/pull/9409)) by @mytharcher
- **[Data source manager]** prevent editing and deletion of all records in custom scope permissions for external data sources ([#9395](https://github.com/nocobase/nocobase/pull/9395)) by @katherinehhh
- **[AI: MCP server]** Fixed MCP server packaging so runtime dependencies are included ([#9401](https://github.com/nocobase/nocobase/pull/9401)) by @2013xile
- **[Flow engine]** Fixed an issue where blocks generated by AI could not be converted from reference templates back to duplicate templates. ([#9392](https://github.com/nocobase/nocobase/pull/9392)) by @gchust
- **[Action: Import records Pro]** Fix the issue where duplicated check on date field always fails by @mytharcher
- **[Password policy]** Fixed an issue where permanently locked users could sign in after a service restart by @2013xile
- **[Workflow: Approval]** Fix the issue where the select record drawer is obscured in approval workflow configuration by @zhangzhonghe
- **[Backup manager]** fix pg schema adaption by @Andrew1989Y

### [v2.1.0-beta.26](https://www.nocobase.com/en/blog/v2.1.0-beta.26)

*Release date: 2026-05-08*

### 🎉 New Features

- **[client]** add associate and dissociate actions to association block ([#9366](https://github.com/nocobase/nocobase/pull/9366)) by @katherinehhh
- **[Data visualization]** Add client-v2 support for block plugins ([#9297](https://github.com/nocobase/nocobase/pull/9297)) by @zhangzhonghe

### 🚀 Improvements

- **[undefined]** skip already-published versions in pk ([#9374](https://github.com/nocobase/nocobase/pull/9374)) by @Molunerfinn

### 🐛 Bug Fixes

- **[client-v2]**

  - Fix the issue where some v2 pages fail to load remote plugins ([#9369](https://github.com/nocobase/nocobase/pull/9369)) by @zhangzhonghe
  - Fix the v2 page block drag placeholder and drop position issues ([#9361](https://github.com/nocobase/nocobase/pull/9361)) by @zhangzhonghe
- **[client]**

  - Fixed linkage rules have not been rerun after form values change. ([#9357](https://github.com/nocobase/nocobase/pull/9357)) by @gchust
  - fix required option field in subtable not validated correctly on first selection in mobile ([#9352](https://github.com/nocobase/nocobase/pull/9352)) by @katherinehhh
  - fix hide quick create option for association select field in v2 subtable ([#9358](https://github.com/nocobase/nocobase/pull/9358)) by @katherinehhh
  - Fix the issue where URL query parameter variables become invalid after switching cached pages ([#9263](https://github.com/nocobase/nocobase/pull/9263)) by @zhangzhonghe
  - fix incorrect data rendering in grid card block after update and refresh ([#9351](https://github.com/nocobase/nocobase/pull/9351)) by @katherinehhh
- **[server]** validate plugin package names before filesystem operations ([#9367](https://github.com/nocobase/nocobase/pull/9367)) by @chenos
- **[undefined]** Fix dead links in translated documentation and enable dead-link detection by default in the docs build. ([#9371](https://github.com/nocobase/nocobase/pull/9371)) by @Molunerfinn
- **[AI employees]**

  - Fix AI employee node reading associations field attachment error in workflow ([#9377](https://github.com/nocobase/nocobase/pull/9377)) by @cgyrock
  - Fix workflow AI employee node not ending properly after tool assignment. ([#9381](https://github.com/nocobase/nocobase/pull/9381)) by @cgyrock
- **[Block: Kanban]**

  - Improved Kanban card compact styling and optimized quick-create popup template selection. ([#9370](https://github.com/nocobase/nocobase/pull/9370)) by @jiannx
  - fix prevent single-word wrapping in long text field of v1 kanban block ([#9356](https://github.com/nocobase/nocobase/pull/9356)) by @katherinehhh
  - Fixed kanban associated blocks using unresolved runtime resource params in popup or secondary-page contexts. ([#9350](https://github.com/nocobase/nocobase/pull/9350)) by @jiannx
- **[Action: Custom request]** upgrade koa to v3 ([#9368](https://github.com/nocobase/nocobase/pull/9368)) by @chenos
- **[Collection field: Formula]** fix formula field in v2 subtable not triggered to auto-calculate ([#9354](https://github.com/nocobase/nocobase/pull/9354)) by @katherinehhh
- **[Email manager]** Fixed the mail identities title display by @jiannx

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.34](https://www.nocobase.com/en/blog/v2.1.0-alpha.34)

*Release date: 2026-05-12*

### 🚀 Improvements

- **[AI employees]** AI employee support parallel processing of multiple conversation ([#9344](https://github.com/nocobase/nocobase/pull/9344)) by @cgyrock

### [v2.1.0-alpha.33](https://www.nocobase.com/en/blog/v2.1.0-alpha.33)

*Release date: 2026-05-11*

### 🎉 New Features

- **[client]**
  - add current user language variable in v2 ([#9405](https://github.com/nocobase/nocobase/pull/9405)) by @katherinehhh
  - Add linkage rules support for page menu items ([#9304](https://github.com/nocobase/nocobase/pull/9304)) by @zhangzhonghe

### 🚀 Improvements

- **[client-v2]** Filter out v1 menus in the v2 layout and only show v2 menus ([#9427](https://github.com/nocobase/nocobase/pull/9427)) by @zhangzhonghe
- **[Departments]** optimize department list style by adding icons and adjusting spacing ([#9435](https://github.com/nocobase/nocobase/pull/9435)) by @katherinehhh

### 🐛 Bug Fixes

- **[build]** Fix plugin build failure when v1 client code imports another plugin's `/client-v2` entry. ([#9436](https://github.com/nocobase/nocobase/pull/9436)) by @Molunerfinn
- **[client]**

  - Fixed an intermittent issue where action button linkage rules would fail to take effect. ([#9430](https://github.com/nocobase/nocobase/pull/9430)) by @gchust
  - hide subtable component for to-many association fields in v2 subtable ([#9438](https://github.com/nocobase/nocobase/pull/9438)) by @katherinehhh
- **[Graph collection manager]** fix graphical interface auto layout throws update action filter error ([#9421](https://github.com/nocobase/nocobase/pull/9421)) by @katherinehhh
- **[Block: Tree]** Improved tree filter block settings and fixed unsupported association, title-field fallback, and search reset behavior. ([#9426](https://github.com/nocobase/nocobase/pull/9426)) by @jiannx

### [v2.1.0-alpha.32](https://www.nocobase.com/en/blog/v2.1.0-alpha.32)

*Release date: 2026-05-10*

### 🎉 New Features

- **[client]** add date range limit option for date fields in v2 forms ([#9400](https://github.com/nocobase/nocobase/pull/9400)) by @katherinehhh
- **[flow-engine]** Migrate `plugin-environment-variables` to client-v2 with a React-based settings page and a globally registered `$env` runtime variable; add a client-v2 entry to `plugin-file-manager` with a React-based storage configuration page and FlowModel-based upload field, upload action, and preview. ([#9413](https://github.com/nocobase/nocobase/pull/9413)) by @Molunerfinn

### 🚀 Improvements

- **[undefined]** support session-scoped current env in nb cli ([#9415](https://github.com/nocobase/nocobase/pull/9415)) by @chenos

### 🐛 Bug Fixes

- **[client]**

  - Fixed an issue where the default value popup for association fields in the create form would display incorrectly. ([#9408](https://github.com/nocobase/nocobase/pull/9408)) by @gchust
  - Fixed an issue where JS code could no longer be edited after a JS field was set to read-only. ([#9404](https://github.com/nocobase/nocobase/pull/9404)) by @gchust
  - Fix the issue where v2 page tabs do not sync immediately after saving settings ([#9396](https://github.com/nocobase/nocobase/pull/9396)) by @zhangzhonghe
  - Fixed an issue where sub-table field assignments would not take effect in field linkage rules. ([#9412](https://github.com/nocobase/nocobase/pull/9412)) by @gchust
- **[Collection field: Markdown(Vditor)]** fix markdown field tooltip being hidden in horizontal form layout ([#9420](https://github.com/nocobase/nocobase/pull/9420)) by @katherinehhh
- **[WEB client]** Fix route type filtering when using translated labels ([#9425](https://github.com/nocobase/nocobase/pull/9425)) by @zhangzhonghe
- **[Mobile (deprecated)]** Fix mobile message popups that could not be closed or scrolled ([#9424](https://github.com/nocobase/nocobase/pull/9424)) by @zhangzhonghe
- **[Workflow: Approval]** Fix the issue where JS field appears in approval process settings by @zhangzhonghe

### [v2.1.0-alpha.31](https://www.nocobase.com/en/blog/v2.1.0-alpha.30)

*Release date: 2026-05-09*

### 🎉 New Features

- **[client]** add associate and dissociate actions to association block ([#9366](https://github.com/nocobase/nocobase/pull/9366)) by @katherinehhh
- **[Text copy]** support "Display copy button" option for read-only text field ([#9394](https://github.com/nocobase/nocobase/pull/9394)) by @katherinehhh
- **[AI employees]** Workflow AI employee node supports loading files from attachment fields. ([#9402](https://github.com/nocobase/nocobase/pull/9402)) by @cgyrock
- **[Data visualization]** Add client-v2 support for block plugins ([#9297](https://github.com/nocobase/nocobase/pull/9297)) by @zhangzhonghe

### 🚀 Improvements

- **[client]** Allow to assign field value for sequence field ([#9397](https://github.com/nocobase/nocobase/pull/9397)) by @mytharcher
- **[undefined]** skip already-published versions in pk ([#9374](https://github.com/nocobase/nocobase/pull/9374)) by @Molunerfinn
- **[Block: Kanban]** Improved v2 detail field spacing consistency and made kanban card and column spacing better adapt to theme settings. ([#9390](https://github.com/nocobase/nocobase/pull/9390)) by @jiannx
- **[Workflow: Approval]** Fix required validation behavior for approval forms by @zhangzhonghe

### 🐛 Bug Fixes

- **[client]**

  - Fix filter forms that could not collapse ([#9386](https://github.com/nocobase/nocobase/pull/9386)) by @zhangzhonghe
  - Fixed the v2 table bulk workflow trigger so row selection stays consistent after redirecting between tabs and rows can be selected again after returning ([#9388](https://github.com/nocobase/nocobase/pull/9388)) by @jiannx
  - Fixed `Hidden (reserved value)` fields in form blocks so they remain visible in UI Editor mode, and restored value input support for assigning them in Field assignment ([#9373](https://github.com/nocobase/nocobase/pull/9373)) by @jiannx
  - fix adapt DividerItem to theme in v2 ([#9372](https://github.com/nocobase/nocobase/pull/9372)) by @katherinehhh
  - Fix incorrect download filenames for AttachmentURL fields when file metadata is missing. ([#9382](https://github.com/nocobase/nocobase/pull/9382)) by @mytharcher
  - Fix the error when filtering scalar fields with custom multi-select filters ([#9387](https://github.com/nocobase/nocobase/pull/9387)) by @zhangzhonghe
  - Fixed linkage rules have not been rerun after form values change. ([#9357](https://github.com/nocobase/nocobase/pull/9357)) by @gchust
  - Fix the issue where v1 subtable linkage rules incorrectly change required field styles ([#9364](https://github.com/nocobase/nocobase/pull/9364)) by @zhangzhonghe
  - fix incorrect data rendering in grid card block after update and refresh ([#9351](https://github.com/nocobase/nocobase/pull/9351)) by @katherinehhh
  - fix required option field in subtable not validated correctly on first selection in mobile ([#9352](https://github.com/nocobase/nocobase/pull/9352)) by @katherinehhh
  - fix hide quick create option for association select field in v2 subtable ([#9358](https://github.com/nocobase/nocobase/pull/9358)) by @katherinehhh
  - Fix the issue where URL query parameter variables become invalid after switching cached pages ([#9263](https://github.com/nocobase/nocobase/pull/9263)) by @zhangzhonghe
- **[flow-engine]** Fixed untranslated data table field validation messages in v2 flow forms ([#9393](https://github.com/nocobase/nocobase/pull/9393)) by @jiannx
- **[server]**

  - Fixed sub-application OAuth discovery requests being routed as main-app requests ([#9383](https://github.com/nocobase/nocobase/pull/9383)) by @2013xile
  - validate plugin package names before filesystem operations ([#9367](https://github.com/nocobase/nocobase/pull/9367)) by @chenos
- **[client-v2]**

  - Fixed error when selecting association fields in field settings. ([#9379](https://github.com/nocobase/nocobase/pull/9379)) by @gchust
  - Fix the issue where a 404 page flashes after the app starts ([#9365](https://github.com/nocobase/nocobase/pull/9365)) by @zhangzhonghe
  - Fix the v2 page block drag placeholder and drop position issues ([#9361](https://github.com/nocobase/nocobase/pull/9361)) by @zhangzhonghe
  - Fix the issue where some v2 pages fail to load remote plugins ([#9369](https://github.com/nocobase/nocobase/pull/9369)) by @zhangzhonghe
- **[undefined]** Fix dead links in translated documentation and enable dead-link detection by default in the docs build. ([#9371](https://github.com/nocobase/nocobase/pull/9371)) by @Molunerfinn
- **[Notification: In-app message]** Fixed an issue where the in-app message list did not refresh after receiving realtime notifications ([#9409](https://github.com/nocobase/nocobase/pull/9409)) by @mytharcher
- **[Data source manager]** prevent editing and deletion of all records in custom scope permissions for external data sources ([#9395](https://github.com/nocobase/nocobase/pull/9395)) by @katherinehhh
- **[AI: MCP server]** Fixed MCP server packaging so runtime dependencies are included ([#9401](https://github.com/nocobase/nocobase/pull/9401)) by @2013xile
- **[Data source: Main]** Fixed imported database tables using the wrong prefixed table name when a table prefix is enabled ([#9403](https://github.com/nocobase/nocobase/pull/9403)) by @2013xile
- **[Flow engine]** Fixed an issue where blocks generated by AI could not be converted from reference templates back to duplicate templates. ([#9392](https://github.com/nocobase/nocobase/pull/9392)) by @gchust
- **[AI employees]**

  - Fix AI employee node reading associations field attachment error in workflow ([#9377](https://github.com/nocobase/nocobase/pull/9377)) by @cgyrock
  - Fix workflow AI employee node not ending properly after tool assignment. ([#9381](https://github.com/nocobase/nocobase/pull/9381)) by @cgyrock
- **[Action: Custom request]** upgrade koa to v3 ([#9368](https://github.com/nocobase/nocobase/pull/9368)) by @chenos
- **[Block: Kanban]**

  - Improved Kanban card compact styling and optimized quick-create popup template selection. ([#9370](https://github.com/nocobase/nocobase/pull/9370)) by @jiannx
  - fix prevent single-word wrapping in long text field of v1 kanban block ([#9356](https://github.com/nocobase/nocobase/pull/9356)) by @katherinehhh
- **[Collection field: Formula]** fix formula field in v2 subtable not triggered to auto-calculate ([#9354](https://github.com/nocobase/nocobase/pull/9354)) by @katherinehhh
- **[Action: Import records Pro]** Fix the issue where duplicated check on date field always fails by @mytharcher
- **[Password policy]** Fixed an issue where permanently locked users could sign in after a service restart by @2013xile
- **[Workflow: Approval]** Fix the issue where the select record drawer is obscured in approval workflow configuration by @zhangzhonghe
- **[Email manager]** Fixed the mail identities title display by @jiannx
- **[Backup manager]** fix pg schema adaption by @Andrew1989Y
