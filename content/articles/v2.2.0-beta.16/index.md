### 🎉 New Features

- **[AI employees]**
  - Added an embeddable AI chat box block that supports scoped conversations, AI employee tasks, and shared chat runtime behavior. ([#10125](https://github.com/nocobase/nocobase/pull/10125)) by @cgyrock

  - Added frontend AI tools for JS blocks ([#10121](https://github.com/nocobase/nocobase/pull/10121)) by @2013xile

- **[WEB client]** Reduced application language responses to requested resource namespaces ([#10175](https://github.com/nocobase/nocobase/pull/10175)) by @2013xile

- **[Workflow: Approval]**
  - Added usage instructions and card-style workflow selection to the approval initiation list in client v2 by @mytharcher

  - Added usage instructions and card-style workflow selection to the approval initiation list by @mytharcher

### 🚀 Improvements

- **[undefined]** Improved documentation site search: results are now grouped by section with visible headings and paths, more relevant pages rank first, and plugin metadata pages are sorted last. ([#10185](https://github.com/nocobase/nocobase/pull/10185)) by @Molunerfinn

- **[client-v2]**
  - Improved v2 QR code and barcode scan recognition, camera lifecycle safety, and responsive preview behavior. ([#10145](https://github.com/nocobase/nocobase/pull/10145)) by @katherinehhh

  - Added Myanmar (`my-MM`) to the languages selectable in System Settings. ([#10131](https://github.com/nocobase/nocobase/pull/10131)) by @hongboji

- **[client]** Added Myanmar (`my-MM`) to the legacy System Settings language selector. ([#10153](https://github.com/nocobase/nocobase/pull/10153)) by @hongboji

- **[AI employees]**
  - Simplified AI knowledge base vector configuration ([#10178](https://github.com/nocobase/nocobase/pull/10178)) by @cgyrock

  - Improved AI employee reliability across validation, data permissions, record context, attachments, workflow tasks, conversation recovery, and coding editor lifecycle handling. ([#10162](https://github.com/nocobase/nocobase/pull/10162)) by @cgyrock

  - Fixed AI employee model settings persistence, disabled employee conversation creation, and mobile chatbox layout behavior. ([#10120](https://github.com/nocobase/nocobase/pull/10120)) by @cgyrock

- **[Workflow]**
  - Workflow tasks can now be filtered and navigated by workflow, with per-workflow pending counts ([#10173](https://github.com/nocobase/nocobase/pull/10173)) by @mytharcher

  - Improved workflow pending task handling by persisting start, resume, and rerun tasks in the event queue. ([#9846](https://github.com/nocobase/nocobase/pull/9846)) by @mytharcher

  - Improved workflow pending task handling by persisting start, resume, and rerun tasks in the event queue. ([#9846](https://github.com/nocobase/nocobase/pull/9846)) by @mytharcher

- **[File manager]** Added independent storage settings for returning original file URLs and allowing public access to file URLs ([#10160](https://github.com/nocobase/nocobase/pull/10160)) by @mytharcher

- **[AI: Knowledge base]** Vector database and embedding settings can now be configured directly for each AI knowledge base by @cgyrock

- **[Workflow: Subflow]** Change pending queue strategy based on workflow engine refactored by @mytharcher

- **[File storage: S3(Pro)]** Added independent S3 Pro settings for original URLs, public file URL access, and unsigned URLs by @mytharcher

- **[Workflow: Approval]**
  - Approval application and todo tasks can now be filtered by workflow with per-workflow pending counts by @mytharcher

  - Improved the approval timeline with clearer status badges, timing details, user avatars, responsive layout, and connected submission rounds by @mytharcher

  - Added usage instructions and card-style workflow selection to the approval initiation list by @mytharcher

  - Approval notification channels can now be searched remotely by title by @mytharcher

### 🐛 Bug Fixes

- **[client-v2]**
  - Fix JSON field save validation errors after reloading v2 forms. ([#10206](https://github.com/nocobase/nocobase/pull/10206)) by @katherinehhh

  - Fixed table action buttons remaining disabled after their linkage rule is disabled or removed. ([#10186](https://github.com/nocobase/nocobase/pull/10186)) by @hongboji

  - Improve error messages for unsupported and missing pages in the `/v/` branch ([#10159](https://github.com/nocobase/nocobase/pull/10159)) by @zhangzhonghe

  - Fix RunJS values not taking effect in client v2 date range limits. ([#10157](https://github.com/nocobase/nocobase/pull/10157)) by @katherinehhh

  - Fix record picker lists not refreshing after creating a record in client v2. ([#10142](https://github.com/nocobase/nocobase/pull/10142)) by @katherinehhh

  - Fix inconsistent route state after renaming a newly enabled page tab ([#10117](https://github.com/nocobase/nocobase/pull/10117)) by @zhangzhonghe

  - Fixed required association values being cleared after selection in popup sub-table forms with parent-item data scopes. ([#10146](https://github.com/nocobase/nocobase/pull/10146)) by @katherinehhh

  - Fix mobile menus hidden incorrectly by device type rules ([#10123](https://github.com/nocobase/nocobase/pull/10123)) by @zhangzhonghe

  - Fixed full and specified height settings not working for JS Blocks displayed with a card ([#10126](https://github.com/nocobase/nocobase/pull/10126)) by @gchust

  - Fix v2 table action titles being reverted after linkage refresh. ([#10140](https://github.com/nocobase/nocobase/pull/10140)) by @katherinehhh

  - Fix the issue where date filter defaults become a single date ([#9854](https://github.com/nocobase/nocobase/pull/9854)) by @zhangzhonghe

  - Reset unwanted border and shadow styles on Markdown h2 headings. ([#10107](https://github.com/nocobase/nocobase/pull/10107)) by @katherinehhh

  - Fix an error that could prevent approval pages from loading ([#10116](https://github.com/nocobase/nocobase/pull/10116)) by @zhangzhonghe

- **[flow-engine]**
  - Fix v2 table quick edit visibility for record-scoped and field-scoped update permissions. ([#10182](https://github.com/nocobase/nocobase/pull/10182)) by @katherinehhh

  - Fix v2 block configuration dropdowns closing when clicking their active trigger. ([#10143](https://github.com/nocobase/nocobase/pull/10143)) by @katherinehhh

  - Fixed untranslated default text in secondary confirmation settings when using Simplified Chinese ([#10149](https://github.com/nocobase/nocobase/pull/10149)) by @mytharcher

  - Fixed an issue where the Add Block menu could unexpectedly disappear while searching. ([#10097](https://github.com/nocobase/nocobase/pull/10097)) by @gchust

  - Fix mobile popups exceeding the screen and hiding the close button ([#10118](https://github.com/nocobase/nocobase/pull/10118)) by @zhangzhonghe

- **[ai]** Improved document loading reliability with clearer password-protected PDF errors and timeout handling. ([#10172](https://github.com/nocobase/nocobase/pull/10172)) by @cgyrock

- **[utils]** Ensured server-side outbound request redirects also comply with `SERVER_REQUEST_WHITELIST` ([#10109](https://github.com/nocobase/nocobase/pull/10109)) by @mytharcher
Reference: [Environment variables](https://docs.nocobase.com/get-started/installation/env#server_request_whitelist)
- **[database]** Fixed an SQL injection risk when reading database view metadata ([#10115](https://github.com/nocobase/nocobase/pull/10115)) by @2013xile

- **[resourcer]** Fixed pre-action workflows not triggering when used together with before-save approval workflows. ([#10119](https://github.com/nocobase/nocobase/pull/10119)) by @mytharcher

- **[server]** Prevented uploaded XML and other active content files from executing scripts in the application origin ([#10104](https://github.com/nocobase/nocobase/pull/10104)) by @mytharcher

- **[UI layout]** Fix desktop pages using mobile styles on narrow screens ([#10229](https://github.com/nocobase/nocobase/pull/10229)) by @zhangzhonghe

- **[Workflow]**
  - Fixed workflow executions becoming blocked while saving a large number of jobs in one database operation ([#10204](https://github.com/nocobase/nocobase/pull/10204)) by @mytharcher

  - Fixed workflow canvas version dropdown not showing versions beyond the first 20. ([#10190](https://github.com/nocobase/nocobase/pull/10190)) by @mytharcher

  - Improved regression coverage for permanent file URLs, attachment thumbnails, preview downloads, and local storage security headers ([#10148](https://github.com/nocobase/nocobase/pull/10148)) by @mytharcher

- **[Backup manager]**
  - Validate the maximum backup retention count and display save errors. ([#10189](https://github.com/nocobase/nocobase/pull/10189)) by @katherinehhh

  - Improved the stability and accuracy of backup plugin frontend tests. ([#10184](https://github.com/nocobase/nocobase/pull/10184)) by @cgyrock

  - Fix missing visible error notifications when Backup Manager restore requests fail in the v2 client. ([#10158](https://github.com/nocobase/nocobase/pull/10158)) by @katherinehhh

- **[AI employees]**
  - AI employee chat now validates attachment count and combined size before upload ([#10195](https://github.com/nocobase/nocobase/pull/10195)) by @cgyrock

  - Fixed the Operator variable selector in AI employee workflow nodes so nested variables can be expanded, and removed the Null option from the required field. ([#10167](https://github.com/nocobase/nocobase/pull/10167)) by @cgyrock

  - Fixed AI employee shortcuts losing block context when starting a new conversation from an existing conversation ([#10169](https://github.com/nocobase/nocobase/pull/10169)) by @cgyrock

  - Fixed AI form context not using customized form item labels ([#10168](https://github.com/nocobase/nocobase/pull/10168)) by @cgyrock

  - Prevented Nathan from reporting malformed or unchanged code patches as successfully applied ([#10174](https://github.com/nocobase/nocobase/pull/10174)) by @2013xile

  - Fixed frontend Tools asking for confirmation in chat instead of using runtime approval ([#10166](https://github.com/nocobase/nocobase/pull/10166)) by @2013xile

- **[Data source manager]** Enable searching relation target collections and target keys in the v2 data source manager. ([#10194](https://github.com/nocobase/nocobase/pull/10194)) by @katherinehhh

- **[Variables and secrets]**
  - Fixed missing error feedback when submitting duplicate variables in the v2 Variables and secrets settings page. ([#10181](https://github.com/nocobase/nocobase/pull/10181)) by @katherinehhh

  - Fix validation feedback for v2 environment variable bulk imports and fix Type filtering failures. ([#10154](https://github.com/nocobase/nocobase/pull/10154)) by @katherinehhh

- **[Authentication]**
  - Fixed incorrect SSO redirects for sub-applications using custom domains ([#10170](https://github.com/nocobase/nocobase/pull/10170)) by @2013xile

  - Fixed an intermittent database connection error during application shutdown when Redis cache is enabled ([#10151](https://github.com/nocobase/nocobase/pull/10151)) by @mytharcher

- **[Collection field: Sequence]** Fixed v2 sequence rule options not saving entered values and fixed-text rules incorrectly reporting a required-field error. ([#10156](https://github.com/nocobase/nocobase/pull/10156)) by @katherinehhh

- **[Calendar]** Add scrolling to the v2 calendar event overlay when many events are shown. ([#10138](https://github.com/nocobase/nocobase/pull/10138)) by @katherinehhh

- **[Block: Kanban]** Fixed Calendar and Kanban popup templates not taking effect or being cleared incorrectly when using copied popup templates ([#9856](https://github.com/nocobase/nocobase/pull/9856)) by @jiannx

- **[AI: Knowledge base]** Improved AI knowledge-base document processing with clearer PDF errors, upload size validation, timeout protection, and correct segment-list pagination. by @cgyrock

- **[Multi-space]** Fixed account switching failures caused by stale space headers during authentication recovery by @jiannx

- **[Version control]** Fixed version-control shortcuts becoming inactive after opening settings and improved shortcut preview, save, reset, and navigation behavior by @cgyrock

- **[App SSO]** Fixed App SSO failures when the public issuer is unreachable from sub-application servers by @2013xile

- **[Migration manager]**
  - Fixed duplicate migration creation on repeated submission and improved v2 migration log and process drawer display. by @katherinehhh

  - Improve v2 migration error feedback, prevent duplicate migration rule names, and fix environment check modal overflow. by @katherinehhh

- **[Auth: OIDC]** Fixed incorrect redirects after OIDC login through a sub-application custom domain by @2013xile

- **[Workflow: Approval]**
  - Hide approval configuration controls when UI Editor is off by @zhangzhonghe

  - Fix occasional errors when opening approval task details directly by @zhangzhonghe

  - Fix messages overriding by @mytharcher

  - Fix missing field templates in approval configuration when UI Editor is off by @zhangzhonghe

