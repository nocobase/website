Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase is currently updated across three branches: `main`, `next`, and `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: The most stable version to date, recommended for installation.
* `next`: Beta version, contains upcoming new features and has been preliminarily tested. There might be some known or unknown issues. It is mainly used to collect feedback from test users and further optimize features. Ideal for test users who want to experience new features early and provide feedback.
* `develop`: Alpha version, contains the latest feature code, may be incomplete or unstable, and is mainly used for internal development and rapid iteration. Suited for technical users interested in cutting-edge product capabilities, but not recommended for production use.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### v2.2.3

*Release date: 2026-08-26*

### 🐛 Bug Fixes

- **[client-v2]** Fix a render error when switching a v2 association field to popup record selection. ([#10419](https://github.com/nocobase/nocobase/pull/10419)) by @katherinehhh
- **[Public forms]** Fix duplicate Submit actions in V2 regular form configuration when Public Forms is enabled. ([#10417](https://github.com/nocobase/nocobase/pull/10417)) by @katherinehhh
- **[AI LLM: GigaChat]** Fixed an application startup error on iOS 15.6 and earlier when the GigaChat AI provider is enabled ([#10418](https://github.com/nocobase/nocobase/pull/10418)) by @cgyrock
- **[WeCom]** Fixed WeCom automatic login lifecycle and notification form compatibility in client-v2. by @chenzhizdt

### v2.2.2

*Release date: 2026-08-25*

### 🚀 Improvements

- **[undefined]** Clarified how to use public NocoBase file URLs in Markdown, external pages, and third-party services ([#10406](https://github.com/nocobase/nocobase/pull/10406)) by @mytharcher
  Reference: [Storage engine overview](https://docs.nocobase.com/file-manager/storage/)

### 🐛 Bug Fixes

- **[Access control]** Fixed an ACL bypass that allowed `firstOrCreate` or `updateOrCreate` to read or modify existing records without the required view or update permission. ([#10403](https://github.com/nocobase/nocobase/pull/10403)) by @mytharcher
- **[Workflow]**

  - Fix option fields being unable to select configured values in v2 workflow Create record and Update record nodes. ([#10414](https://github.com/nocobase/nocobase/pull/10414)) by @katherinehhh
  - Fix the extra trigger at `startsOn` for schedule workflows repeating on a cron expression ([#10410](https://github.com/nocobase/nocobase/pull/10410)) by @Tespera
  - Fixed workflow task center menus so the active menu can be collapsed by clicking it again while retaining its selected highlight ([#10404](https://github.com/nocobase/nocobase/pull/10404)) by @mytharcher
  - Fixed collection event as sub-workflows failing when called with a record ID and no preload associations configured ([#10407](https://github.com/nocobase/nocobase/pull/10407)) by @mytharcher
- **[UI templates]** Fix the error when closing an approval task containing a referenced block ([#10415](https://github.com/nocobase/nocobase/pull/10415)) by @zhangzhonghe

### v2.2.1

*Release date: 2026-08-24*

### 🐛 Bug Fixes

- **[UI layout]** Fix the issue where desktop routes may be empty after upgrading ([#10405](https://github.com/nocobase/nocobase/pull/10405)) by @zhangzhonghe
- **[Action: Export records Pro]** Fix a crash when changing and drag-sorting Pro export fields. By @katherinehhh

### v2.2.0

*Release date: 2026-08-22*

### 🎉 New Features

- **[client-v2]**

  - Tabs on pages, subpages and pop-ups support the configuration of linkage rules ([#10099](https://github.com/nocobase/nocobase/pull/10099)) by @zhangzhonghe
  - Added configurable App and Portal entry support for V2 action panels and the left-top app switcher. ([#9893](https://github.com/nocobase/nocobase/pull/9893)) by @katherinehhh
  - Add an environment variable to configure legacy and modern route entry modes. ([#9891](https://github.com/nocobase/nocobase/pull/9891)) by @Molunerfinn
- **[undefined]**

  - Added configurable App and Portal entries for the V2 action panel and app switcher. By @katherinehhh
  - Add Multi-Portal plugin by @zhangzhonghe
- **[AI employees]**

  - Added configurable automatic or on-demand knowledge-base retrieval for AI employees, with role-based knowledge-base access filtering. ([#10362](https://github.com/nocobase/nocobase/pull/10362)) by @cgyrock
  - Added DeepSeek V4 Flash and V4 Pro Responses API support with reasoning continuity, native web search, citations, and model-aware web search controls ([#10337](https://github.com/nocobase/nocobase/pull/10337)) by @cgyrock
  - AI employees can now be assigned skills from the employee settings page. Skills are built from plugins. ([#10237](https://github.com/nocobase/nocobase/pull/10237)) by @cgyrock
  - Added UI navigation for supported LLM service CLI commands, including provider preselection when creating a service. ([#10210](https://github.com/nocobase/nocobase/pull/10210)) by @cgyrock
  - Added an embeddable AI chat box block that supports scoped conversations, AI employee tasks, and shared chat runtime behavior. ([#10125](https://github.com/nocobase/nocobase/pull/10125)) by @cgyrock
  - Added frontend AI tools for JS blocks ([#10121](https://github.com/nocobase/nocobase/pull/10121)) by @2013xile
  - Added RunJS APIs for triggering AI employee tasks from JS blocks. ([#10061](https://github.com/nocobase/nocobase/pull/10061)) by @cgyrock
  - Added structured AI usage records for usage statistics ([#10004](https://github.com/nocobase/nocobase/pull/10004)) by @2013xile
  - Added an external vector store configuration form for AI knowledge bases. ([#9723](https://github.com/nocobase/nocobase/pull/9723)) by @cgyrock
- **[WEB client]** Reduced application language responses to requested resource namespaces ([#10175](https://github.com/nocobase/nocobase/pull/10175)) by @2013xile
- **[Public forms]** In the v1 public form, support creating v2 forms and prohibit creating v1 forms ([#10045](https://github.com/nocobase/nocobase/pull/10045)) by @zhangzhonghe
- **[Block: Comment]**

  - Improved comment block settings with data scope, default sorting, selectable page size, optional last-page jumping, and scalar owner field mapping. ([#9954](https://github.com/nocobase/nocobase/pull/9954)) by @jiannx
  - Added a comments block. ([#9916](https://github.com/nocobase/nocobase/pull/9916)) by @jiannx
- **[Notification: Email]** Migrated the workflow notification node client to v2, restored channel-specific notification forms, and kept legacy workflow route compatibility for migrated notification configuration. ([#9817](https://github.com/nocobase/nocobase/pull/9817)) by @jiannx
- **[Workflow: mailer node]** Added v2 client support for configuring the workflow mailer node. ([#9825](https://github.com/nocobase/nocobase/pull/9825)) by @jiannx
- **[UI layout]** Add support for mobile layout ([#9641](https://github.com/nocobase/nocobase/pull/9641)) by @zhangzhonghe
- **[Workflow]**

  - Added workflow database transaction scope support. ([#9742](https://github.com/nocobase/nocobase/pull/9742)) by @mytharcher
    Reference: [Database Transaction](docs/docs/en/workflow/nodes/transaction.md)
  - Migrate the Workflow settings page to the v2 client and share a reusable draggable category-tabs component via `@NocoBase/client-v2`. ([#9645](https://github.com/nocobase/nocobase/pull/9645)) by @Molunerfinn
- **[Multi-space]**

  - Added default-space configuration so newly created users automatically join the selected default space. By @jiannx
  - Added debounced display-name search to space switchers and space management in both v1 and v2 by @jiannx
- **[AI: Knowledge base]**

  - Added UI navigation for creating and editing vector databases from CLI commands, with provider preselection for new databases. By @cgyrock
  - Added role-based read-only and read/write permissions for knowledge-base management, including creator ownership and read-only management views. By @cgyrock
- **[Workflow: Database transaction node]**

  - Added the database transaction workflow node plugin. By @mytharcher
  - Added a client-v2 implementation for the workflow database transaction node while preserving the legacy client entry. By @katherinehhh
- **[Record history]** Added client v2 support for the record history plugin. By @jiannx
- **[Workflow: Approval]**

  - Added usage instructions and card-style workflow selection to the approval initiation list in client v2 by @mytharcher
  - Added usage instructions and card-style workflow selection to the approval initiation list by @mytharcher
  - Add approval initiation and todo blocks for v2 pages by @zhangzhonghe
- **[Email manager]**

  - Email synchronization now uses recoverable background jobs with status history and safer full-resync cleanup, including Gmail Spam and Trash. By @jiannx
  - Migrated the email manager client to v2. By @jiannx
- **[Auth: LDAP]** Add LDAP user synchronization configuration support for client v2. By @chenzhizdt

### 🚀 Improvements

- **[undefined]**

  - File URLs now use stable NocoBase access URLs so permissions can be checked before redirecting to storage. ([#10103](https://github.com/nocobase/nocobase/pull/10103)) by @mytharcher
  - Refined Russian documentation translation for improved wording, readability, and terminology consistency. ([#9942](https://github.com/nocobase/nocobase/pull/9942)) by @sembaev-a-a
  - Refined Russian documentation translation for improved wording, readability, and terminology consistency. ([#9816](https://github.com/nocobase/nocobase/pull/9816)) by @sembaev-a-a
  - Improved AI knowledge base retrieval and documentation. ([#9765](https://github.com/nocobase/nocobase/pull/9765)) by @cgyrock
  - Refined Russian documentation translation for improved wording, readability, and terminology consistency. ([#9754](https://github.com/nocobase/nocobase/pull/9754)) by @sembaev-a-a
- **[cli]** `nb api resource create` now accepts a JSON array for `--values` to create multiple records in a single request. ([#10325](https://github.com/nocobase/nocobase/pull/10325)) by @Molunerfinn
  Reference: [nb api resource create](https://github.com/nocobase/nocobase/blob/fix/cli-resource-create-array-values/docs/docs/en/api/cli/api/resource/create.md)
- **[client-v2]**

  - Refactor Markdown Vditor into a unified plugin-backed Markdown engine with compatibility bridges for existing Markdown block and Vditor field plugins. ([#9998](https://github.com/nocobase/nocobase/pull/9998)) by @katherinehhh
  - Refactor Markdown Vditor into a unified plugin-backed Markdown engine with compatibility bridges for existing Markdown block and Vditor field plugins. ([#9998](https://github.com/nocobase/nocobase/pull/9998)) by @katherinehhh
  - Adjusted the v2 System settings menu order and page panel height to match the standard settings layout. ([#9849](https://github.com/nocobase/nocobase/pull/9849)) by @katherinehhh
  - Fixed missing Settings entries for Client V2 plugin manager cards when a plugin uses a shared or legacy settings path. ([#9852](https://github.com/nocobase/nocobase/pull/9852)) by @katherinehhh
- **[Workflow]**

  - Grouped task-center items by workflow in the new client and kept workflow filters consistent across task types. ([#10374](https://github.com/nocobase/nocobase/pull/10374)) by @mytharcher
  - Workflow create and update nodes now support combining text with variables when assigning string and text fields ([#10238](https://github.com/nocobase/nocobase/pull/10238)) by @mytharcher
  - Workflow tasks can now be filtered and navigated by workflow, with per-workflow pending counts ([#10173](https://github.com/nocobase/nocobase/pull/10173)) by @mytharcher
  - Improved workflow pending task handling by persisting start, resume, and rerun tasks in the event queue. ([#9846](https://github.com/nocobase/nocobase/pull/9846)) by @mytharcher
  - Unsupported workflow v2 canvas nodes now keep the normal node card actions while showing the node type as unsupported. ([#10054](https://github.com/nocobase/nocobase/pull/10054)) by @mytharcher
  - Simplified workflow v2 create/update field assignment, improved selected variable display, and avoided generating unused assign-form model data. ([#9887](https://github.com/nocobase/nocobase/pull/9887)) by @katherinehhh
  - Exported workflow v2 canvas extension APIs for downstream workflow node plugins. ([#9834](https://github.com/nocobase/nocobase/pull/9834)) by @katherinehhh
  - Migrate the workflow output node configuration to v2 and align v2 workflow result viewers with the legacy display behavior for string results. ([#9813](https://github.com/nocobase/nocobase/pull/9813)) by @Molunerfinn
  - Migrate the workflow end node to the v2 implementation. ([#9795](https://github.com/nocobase/nocobase/pull/9795)) by @Molunerfinn
- **[AI employees]**

  - Simplified AI knowledge base vector configuration ([#10178](https://github.com/nocobase/nocobase/pull/10178)) by @cgyrock
  - Improved AI employee reliability across validation, data permissions, record context, attachments, workflow tasks, conversation recovery, and coding editor lifecycle handling. ([#10162](https://github.com/nocobase/nocobase/pull/10162)) by @cgyrock
  - Fixed AI employee model settings persistence, disabled employee conversation creation, and mobile chatbox layout behavior. ([#10120](https://github.com/nocobase/nocobase/pull/10120)) by @cgyrock
  - Improved AI employee tool settings, data-query guardrails, relation field querying, and malformed tool call diagnostics. ([#10042](https://github.com/nocobase/nocobase/pull/10042)) by @cgyrock
  - Improved AI employee web search to reduce unnecessary model reasoning and better use provider-specific thinking controls. ([#9996](https://github.com/nocobase/nocobase/pull/9996)) by @cgyrock
  - Removed the deprecated Datasource entry from AI employee settings and context selection in the v2 UI. ([#9988](https://github.com/nocobase/nocobase/pull/9988)) by @cgyrock
  - Migrated the AI employee plugin to client-v2. ([#9794](https://github.com/nocobase/nocobase/pull/9794)) by @cgyrock
- **[File manager]** Added independent storage settings for returning original file URLs and allowing public access to file URLs ([#10160](https://github.com/nocobase/nocobase/pull/10160)) by @mytharcher
- **[Workflow: Manual node]** Show manual workflow tasks in the V2 task center and guide users to the legacy page for processing ([#10085](https://github.com/nocobase/nocobase/pull/10085)) by @zhangzhonghe
- **[Flow engine]**

  - Support multi portals for ui build apis. ([#10072](https://github.com/nocobase/nocobase/pull/10072)) by @gchust
  - Open runjs browser globals. ([#9841](https://github.com/nocobase/nocobase/pull/9841)) by @gchust
- **[Collection: SQL]** Not user-facing; added client-v2 unit test coverage for migrated plugins. ([#9967](https://github.com/nocobase/nocobase/pull/9967)) by @katherinehhh
- **[Data visualization]** Improved chart event scripts so custom event handlers can clean up safely ([#10034](https://github.com/nocobase/nocobase/pull/10034)) by @2013xile
- **[Data source manager]**

  - Hide deprecated v2 main data source collection templates from the create collection menu. ([#10009](https://github.com/nocobase/nocobase/pull/10009)) by @katherinehhh
  - Display unsupported external data source fields in V2 Configure fields, and align backup restore form label styles. ([#9983](https://github.com/nocobase/nocobase/pull/9983)) by @katherinehhh
- **[Block: Comment]**

  - Improved comment submit actions and fixed related comment/user form submission issues. ([#10002](https://github.com/nocobase/nocobase/pull/10002)) by @jiannx
  - Added the new comment block plugin to the NocoBase preset and marked the legacy comments plugin as deprecated. ([#9936](https://github.com/nocobase/nocobase/pull/9936)) by @jiannx
- **[Users]**

  - Improve client-v2 test coverage for the users plugin. ([#9975](https://github.com/nocobase/nocobase/pull/9975)) by @jiannx
  - Improved the Users & Permissions v2 page layout and department tree behavior. ([#9780](https://github.com/nocobase/nocobase/pull/9780)) by @jiannx
- **[Workflow: JavaScript]**

  - Aligned v2 workflow request and mailer node configuration fields with legacy layout and attachment variable behavior. ([#9952](https://github.com/nocobase/nocobase/pull/9952)) by @jiannx
  - Migrated the JavaScript workflow node to client-v2 ([#9805](https://github.com/nocobase/nocobase/pull/9805)) by @jiannx
- **[UI layout]** Improved the v2 mobile tab bar so crowded tabs scroll horizontally instead of overlapping. ([#9949](https://github.com/nocobase/nocobase/pull/9949)) by @katherinehhh
- **[Workflow: Aggregate node]** Improved v2 workflow field selection for update and aggregate query nodes, including safer associated collection selection in aggregate query nodes. ([#9938](https://github.com/nocobase/nocobase/pull/9938)) by @katherinehhh
- **[Logger]** Added the Logger settings page to the client v2 runtime. ([#9933](https://github.com/nocobase/nocobase/pull/9933)) by @jiannx
- **[Form drafts]** Migrate plugin form drafts to client v2. ([#9910](https://github.com/nocobase/nocobase/pull/9910)) by @gchust
- **[Workflow: JSON calculation]** Migrated the workflow JSON calculation node configuration UI to the v2 workflow canvas while preserving v1 canvas compatibility. ([#9902](https://github.com/nocobase/nocobase/pull/9902)) by @mytharcher
- **[User data synchronization]** Added modern UI support for user data synchronization settings ([#9837](https://github.com/nocobase/nocobase/pull/9837)) by @2013xile
- **[Public forms]** Separated v1 and v2 public form lists and fixed the v2 Configure page to open a configurable form detail page. ([#9851](https://github.com/nocobase/nocobase/pull/9851)) by @katherinehhh
- **[Backup manager]**

  - Improved backup manager table styling and long file name display. ([#9864](https://github.com/nocobase/nocobase/pull/9864)) by @katherinehhh
  - Tables whose collection `dataCategory` is marked as `'runtime'` are now excluded from backups automatically. ([#9804](https://github.com/nocobase/nocobase/pull/9804)) by @cgyrock
- **[Workflow: Custom action event]** Migrated workflow triggers and bind-workflow settings to client-v2, including action trigger, custom action trigger, request interception trigger, and submit/update action workflow binding settings. ([#9845](https://github.com/nocobase/nocobase/pull/9845)) by @mytharcher
- **[Workflow: HTTP request node]** Migrated the workflow HTTP request node to client-v2. ([#9806](https://github.com/nocobase/nocobase/pull/9806)) by @jiannx
- **[Locale tester]** Added a client v2 settings page for the locale tester. ([#9744](https://github.com/nocobase/nocobase/pull/9744)) by @jiannx
- **[Access control]** Aligned the v2 Users & Permissions settings pages with v1 behavior, including pagination totals, department tree behavior, selected styles, and internal permissions-panel scrolling. ([#9810](https://github.com/nocobase/nocobase/pull/9810)) by @jiannx
- **[AI: Knowledge base]**

  - Aligned the vector database list styling with other settings tables by @cgyrock
  - Vector database and embedding settings can now be configured directly for each AI knowledge base by @cgyrock
  - Migrated the AI knowledge base settings pages to the v2 client and fixed layout and loading issues in knowledge base and vector store pages. By @cgyrock
- **[HTTP request encryption]** Added v2 client support for HTTP request encryption so query parameters continue to be encrypted in the v2 client. By @jiannx
- **[Workflow: Database transaction node]** Improved the v2 workflow database transaction node layout so branch labels and the commit marker have better spacing. By @katherinehhh
- **[Workflow: Subflow]** Change pending queue strategy based on workflow engine refactored by @mytharcher
- **[File storage: S3(Pro)]**

  - S3 Pro uploads now return the created file record with permanent file URLs. By @mytharcher
  - Added independent S3 Pro settings for original URLs, public file URL access, and unsigned URLs by @mytharcher
- **[Workflow: Approval]**

  - Updated approval task grouping and timelines in the new client to match the legacy experience. By @mytharcher
  - Approval application and todo tasks can now be filtered by workflow with per-workflow pending counts by @mytharcher
- **[Email manager]**

  - Moved the department-based mail viewing option to the V1 general mail settings page, prevented service credential saves from overwriting it, and placed V2 General settings before Service provider settings. By @jiannx
  - Moved the department-based mail viewing option to the general mail settings page. By @jiannx
- **[App supervisor]** Hid the standalone V2 Applications block while keeping its settings page available internally. By @katherinehhh
- **[WeCom]** Added modern UI support for WeCom authentication, sync, and notification settings by @2013xile
- **[DingTalk]**

  - Complete DingTalk client v2 support, including Stream synchronization, notification configuration, and automatic login improvements. By @chenzhizdt
  - Added modern UI support for DingTalk authentication, sync, and notification settings by @2013xile

### 🐛 Bug Fixes

- **[undefined]** Fix `nb plugin import` failing on plugin tarballs built by `yarn build --tar`, and correct example code and scaffold structure in the plugin development docs. ([#10351](https://github.com/nocobase/nocobase/pull/10351)) by @Molunerfinn
- **[client-v2]**

  - Fixed relationship picker labels when association form values contain only a related record ID. ([#10386](https://github.com/nocobase/nocobase/pull/10386)) by @cgyrock
  - Fixed a false DatePicker missing-component error in v2 table filters. ([#10392](https://github.com/nocobase/nocobase/pull/10392)) by @katherinehhh
  - Fixed false missing-component console errors when opening v2 table filters. ([#10389](https://github.com/nocobase/nocobase/pull/10389)) by @katherinehhh
  - Fixed an error that prevented filter conditions from being cleared in workflow settings. ([#10388](https://github.com/nocobase/nocobase/pull/10388)) by @Molunerfinn
  - Fixed missing frontend response notifications on Client V2 pages, including errors returned by pre-action workflows ([#10376](https://github.com/nocobase/nocobase/pull/10376)) by @mytharcher
  - Fix Chinese text appearing when searching mobile select fields in English ([#10367](https://github.com/nocobase/nocobase/pull/10367)) by @zhangzhonghe
  - Fixed pages under `/v` remaining in UI editing mode after switching to a role without page configuration permission ([#10359](https://github.com/nocobase/nocobase/pull/10359)) by @jiannx
  - Show a retryable localized fallback in v2 blocks when an external data source is unavailable. ([#10336](https://github.com/nocobase/nocobase/pull/10336)) by @katherinehhh
  - Redirect users without Settings access to the first available page ([#10331](https://github.com/nocobase/nocobase/pull/10331)) by @zhangzhonghe
  - Automatically redirect to an accessible Settings tab when the current tab is unavailable ([#10332](https://github.com/nocobase/nocobase/pull/10332)) by @zhangzhonghe
  - Fix incorrect editing and display of large decimal values in V2 fields. ([#10330](https://github.com/nocobase/nocobase/pull/10330)) by @katherinehhh
  - Fixed Kanban column quick create records not inheriting the selected group value ([#10321](https://github.com/nocobase/nocobase/pull/10321)) by @jiannx
  - Fixed automatic SSO redirect providers failing to preserve authentication order in production builds ([#10100](https://github.com/nocobase/nocobase/pull/10100)) by @jiannx
  - Workflow filters now preserve workflow variable expressions and show a clear parsing error when variable metadata cannot be resolved. ([#10088](https://github.com/nocobase/nocobase/pull/10088)) by @Molunerfinn
  - Fix an error in v2 workflow value editors when a collection field is named nodeName. ([#10067](https://github.com/nocobase/nocobase/pull/10067)) by @katherinehhh
  - Fixed workflow v2 variable editors to preserve saved variable pills, disabled states, and operator labels consistently across trigger, filter, and field assignment forms. ([#10041](https://github.com/nocobase/nocobase/pull/10041)) by @Molunerfinn
  - Fixed an issue where v2 workflow assigned fields could still be edited in read-only executed workflow versions. ([#10014](https://github.com/nocobase/nocobase/pull/10014)) by @katherinehhh
  - Fix the issue where opening an empty V2 Group menu item shows 404 ([#9896](https://github.com/nocobase/nocobase/pull/9896)) by @zhangzhonghe
  - Fix workflow execution revision navigation so creating a new version after manual execution opens the correct workflow page in both legacy and modern shells. ([#9955](https://github.com/nocobase/nocobase/pull/9955)) by @Molunerfinn
  - Fixed V2 admin group routes showing 404 when the group has no available child menu page. ([#9932](https://github.com/nocobase/nocobase/pull/9932)) by @katherinehhh
  - Fixed link actions becoming invisible on mobile embedded pages when icon-only mode is enabled but no icon is configured. ([#9919](https://github.com/nocobase/nocobase/pull/9919)) by @katherinehhh
  - Fixed a brief no-pages prompt flash when refreshing in UI Editor mode. ([#9918](https://github.com/nocobase/nocobase/pull/9918)) by @katherinehhh
- **[flow-engine]**

  - Fix issue where RunJS resource create actions could not create associated sub-table records ([#10355](https://github.com/nocobase/nocobase/pull/10355)) by @gchust
  - Fix dropdown menus being cut off in short browser windows ([#10379](https://github.com/nocobase/nocobase/pull/10379)) by @zhangzhonghe
  - Fixed an issue where users could type extra text after selecting a variable in single-value variable inputs. ([#10050](https://github.com/nocobase/nocobase/pull/10050)) by @katherinehhh
  - Fix the issue where mobile popups with long content cannot scroll ([#9871](https://github.com/nocobase/nocobase/pull/9871)) by @zhangzhonghe
- **[client]** Fix incomplete long sidebar menu titles and misaligned configuration toolbars ([#10380](https://github.com/nocobase/nocobase/pull/10380)) by @zhangzhonghe
- **[auth]** Fixed occasional `Invalid CSRF token` errors on API requests in cross-origin deployments ([#10245](https://github.com/nocobase/nocobase/pull/10245)) by @mytharcher
- **[server]** Fixed custom portals missing when multi-application plugins are disabled ([#10055](https://github.com/nocobase/nocobase/pull/10055)) by @2013xile
- **[AI employees]**

  - Fix V2 Import drag-and-drop being blocked by the AI attachment overlay. ([#10384](https://github.com/nocobase/nocobase/pull/10384)) by @katherinehhh
  - Fixed AI employee chat streaming long responses causing other idle browser tabs to balloon to multiple gigabytes of memory ([#10352](https://github.com/nocobase/nocobase/pull/10352)) by @cgyrock
  - Fixed the untranslated Settings tab in the AI plugin's client-v2 settings pages ([#10234](https://github.com/nocobase/nocobase/pull/10234)) by @cgyrock
  - Fixed frontend Tools asking for confirmation in chat instead of using runtime approval ([#10166](https://github.com/nocobase/nocobase/pull/10166)) by @2013xile
  - Fix unnecessary login-required requests on V2 public form pages ([#10013](https://github.com/nocobase/nocobase/pull/10013)) by @zhangzhonghe
- **[Workflow]**

  - Disable workflow execution mode selection until a trigger type is selected. ([#10296](https://github.com/nocobase/nocobase/pull/10296)) by @Molunerfinn
  - Fixed workflow execution page titles and added a workflow-list link for missing workflows ([#10360](https://github.com/nocobase/nocobase/pull/10360)) by @mytharcher
  - Improved regression coverage for permanent file URLs, attachment thumbnails, preview downloads, and local storage security headers ([#10148](https://github.com/nocobase/nocobase/pull/10148)) by @mytharcher
  - Workflow form controls now correctly inherit the disabled state when viewing executed workflows. ([#10079](https://github.com/nocobase/nocobase/pull/10079)) by @Molunerfinn
  - Refresh the workflow canvas after updating trigger configuration ([#10068](https://github.com/nocobase/nocobase/pull/10068)) by @zhangzhonghe
  - Fixed workflow v2 condition operands to stay on one row by default and wrap correctly when selected variable paths are too long. ([#10033](https://github.com/nocobase/nocobase/pull/10033)) by @Molunerfinn
  - Fix display and detail loading issues in the workflow v2 task center ([#10001](https://github.com/nocobase/nocobase/pull/10001)) by @zhangzhonghe
  - Fix untranslated workflow result labels and oversized CC configuration dialogs ([#9977](https://github.com/nocobase/nocobase/pull/9977)) by @zhangzhonghe
  - Fix workflow context mismatches across bundles so branches and some variable pickers work correctly in legacy workflow pages. ([#9951](https://github.com/nocobase/nocobase/pull/9951)) by @Molunerfinn
  - Fix issues after migrated client to v2 ([#9929](https://github.com/nocobase/nocobase/pull/9929)) by @mytharcher
  - Fix the issue where in-app message content cannot be configured in v2 workflows ([#9885](https://github.com/nocobase/nocobase/pull/9885)) by @zhangzhonghe
  - Restored debounced remote search for workflow collection trigger manual execution and aligned the selector with the v1 200-record fetch behavior. ([#9870](https://github.com/nocobase/nocobase/pull/9870)) by @Molunerfinn
  - Fixed the workflow v2 add-node menu so unavailable node types are disabled according to workflow and branch rules ([#9855](https://github.com/nocobase/nocobase/pull/9855)) by @mytharcher
- **[Notification: In-app message]** Fixed the in-app message template form showing workflow canvas variables instead of the variables provided by the page. ([#10180](https://github.com/nocobase/nocobase/pull/10180)) by @Molunerfinn
- **[Block: Map]** Fixed region selection not finishing on double-click when map point data is displayed, and fixed AMap remaining in a loading state ([#10373](https://github.com/nocobase/nocobase/pull/10373)) by @jiannx
- **[UI layout]**

  - Fix mobile pages appearing in the desktop navigation ([#10375](https://github.com/nocobase/nocobase/pull/10375)) by @zhangzhonghe
  - Hide the mobile UI Editor when the current role cannot configure the interface ([#10341](https://github.com/nocobase/nocobase/pull/10341)) by @zhangzhonghe
  - Fix desktop pages using mobile styles on narrow screens ([#10229](https://github.com/nocobase/nocobase/pull/10229)) by @zhangzhonghe
  - Fix the Mobile settings link losing the current sub-application path ([#10078](https://github.com/nocobase/nocobase/pull/10078)) by @zhangzhonghe
  - Fixed the Mobile settings link opening the main application from a sub-application. ([#10075](https://github.com/nocobase/nocobase/pull/10075)) by @katherinehhh
- **[File manager]**

  - Fixed local storage files such as logos failing to load in sub-applications after stable URL redirects ([#10358](https://github.com/nocobase/nocobase/pull/10358)) by @mytharcher
  - Fixed shared attachments such as the system logo not loading for authenticated member users ([#10268](https://github.com/nocobase/nocobase/pull/10268)) by @mytharcher
  - Fixed 404 errors when uploading files to attachment URL fields in external data sources ([#9809](https://github.com/nocobase/nocobase/pull/9809)) by @2013xile
- **[Users]**

  - Fixed required-field validation being skipped when submitting forms in UI editor mode ([#10371](https://github.com/nocobase/nocobase/pull/10371)) by @jiannx
  - Show backend errors when adding a user or changing a password in V2. ([#10364](https://github.com/nocobase/nocobase/pull/10364)) by @katherinehhh
- **[Block: Tree]**

  - Fixed tree filter permissions and connected tree-table expansion state, and corrected details pagination totals after filtering. ([#10361](https://github.com/nocobase/nocobase/pull/10361)) by @jiannx
  - Fixed Tree block searches showing placeholder nodes when no business-field records matched ([#10323](https://github.com/nocobase/nocobase/pull/10323)) by @jiannx
- **[Action: Import records]** Fixed an issue where files could not be imported by dragging them into the v2 Import dialog. ([#10350](https://github.com/nocobase/nocobase/pull/10350)) by @katherinehhh
- **[Action: Print]**

  - Fix the missing print action model registration on V1 pages. ([#10347](https://github.com/nocobase/nocobase/pull/10347)) by @katherinehhh
  - Fixed v2 detail block printing so empty detail blocks no longer print the whole page. ([#9832](https://github.com/nocobase/nocobase/pull/9832)) by @katherinehhh
- **[Verification]** Add a refresh button to the Verification list ([#10340](https://github.com/nocobase/nocobase/pull/10340)) by @zhangzhonghe
- **[Notification manager]**

  - Fixed locale tester errors when no saved locale record exists, and allowed notification channel identifiers to be customized when creating channels ([#10311](https://github.com/nocobase/nocobase/pull/10311)) by @jiannx
  - Fix receiver selection saving user IDs as text ([#10093](https://github.com/nocobase/nocobase/pull/10093)) by @zhangzhonghe
  - Fix incorrect workflow variables shown in CC configuration ([#9937](https://github.com/nocobase/nocobase/pull/9937)) by @zhangzhonghe
- **[Block: Gantt]** Fixed custom record colors not being applied to short Gantt task bars ([#10322](https://github.com/nocobase/nocobase/pull/10322)) by @jiannx
- **[Localization]** Fixed a crash when opening Localization settings with the Lina AI assistant entry. ([#10293](https://github.com/nocobase/nocobase/pull/10293)) by @cgyrock
- **[Backup manager]**

  - Prevent repeated V2 backup restore submissions while a restore request is in progress. ([#10262](https://github.com/nocobase/nocobase/pull/10262)) by @katherinehhh
  - Improved the stability and accuracy of backup plugin frontend tests. ([#10184](https://github.com/nocobase/nocobase/pull/10184)) by @cgyrock
  - Fixed inconsistent bold labels on the v2 Backup manager settings page. ([#9908](https://github.com/nocobase/nocobase/pull/9908)) by @katherinehhh
- **[Variables and secrets]** Fix validation feedback for v2 environment variable bulk imports and fix Type filtering failures. ([#10154](https://github.com/nocobase/nocobase/pull/10154)) by @katherinehhh
- **[Authentication]**

  - Fixed declaration generation errors in the v2 authenticator management page ([#10095](https://github.com/nocobase/nocobase/pull/10095)) by @jiannx
  - Fixed missing saved Authenticator settings when editing authenticators in the v2 authentication manager. ([#10091](https://github.com/nocobase/nocobase/pull/10091)) by @jiannx
  - Fixed incorrect redirects after SSO login in v2 sub applications ([#9927](https://github.com/nocobase/nocobase/pull/9927)) by @2013xile
- **[Workflow: JSON variable mapping]** Fix an error when selecting loop scope variables in the JSON variable mapping workflow node. ([#10094](https://github.com/nocobase/nocobase/pull/10094)) by @Molunerfinn
- **[Workflow: Delay node]** Fix delay node duration input and prevent values below the minimum from being saved. ([#10056](https://github.com/nocobase/nocobase/pull/10056)) by @Molunerfinn
- **[Workflow: Aggregate node]** Fix validation rule to allow null filter ([#10053](https://github.com/nocobase/nocobase/pull/10053)) by @mytharcher
- **[Public forms]** Fix the issue where public forms can still be configured when UI Editor is off ([#10036](https://github.com/nocobase/nocobase/pull/10036)) by @zhangzhonghe
- **[Embed NocoBase]**

  - Fixed an issue where tokens could be polluted when embedding NocoBase pages. ([#9948](https://github.com/nocobase/nocobase/pull/9948)) by @gchust
  - Fixed v2 embed pages losing token-based access after the URL token is removed and the page is refreshed. ([#9857](https://github.com/nocobase/nocobase/pull/9857)) by @katherinehhh
- **[Action: Export records]** Fixed a crash when dragging v2 exportable fields after selecting relation fields. ([#9995](https://github.com/nocobase/nocobase/pull/9995)) by @katherinehhh
- **[Block: Comment]** Adjusted the default action order for new Comment blocks. ([#9976](https://github.com/nocobase/nocobase/pull/9976)) by @jiannx
- **[Flow engine]** Fixed the issue where mobile page can't be created by flow surface api. ([#9911](https://github.com/nocobase/nocobase/pull/9911)) by @gchust
- **[Workflow: mailer node]** Fixed workflow v2 test failures caused by missing mocks for trigger workflow action registration. ([#9863](https://github.com/nocobase/nocobase/pull/9863)) by @jiannx
- **[Data source manager]** Added a warning and quick setup for v2 data source collections without a primary key or record unique key. ([#9872](https://github.com/nocobase/nocobase/pull/9872)) by @katherinehhh
- **[Workflow: JavaScript]** Fixed JavaScript workflow node registration failure in the legacy workflow client. ([#9826](https://github.com/nocobase/nocobase/pull/9826)) by @jiannx
- **[Workflow: Response message]** Migrated the workflow response message node to the v2 canvas and fixed unsupported workflow types being able to add it. ([#9830](https://github.com/nocobase/nocobase/pull/9830)) by @jiannx
- **[API documentation]** Fixed the API documentation package declaration build failure. ([#9752](https://github.com/nocobase/nocobase/pull/9752)) by @katherinehhh
- **[AI: Knowledge base]** Added an overwrite option for AI knowledge base workflow document creation, allowing workflows to replace existing documents with the same key. By @cgyrock
- **[Data source: External PostgreSQL]** Automatically load collections when editing an external relational data source in client v2. By @katherinehhh
- **[plugin-service-platform]**

  - Restored licensed plugin downloads from the service platform. By @jiannx
  - Disabled the service platform plugin download endpoint. By @jiannx
- **[Verification: TOTP authenticator]** Fixed TOTP authenticator bindings so temporary setup secrets are removed and previously verified codes cannot be reused. By @jiannx
- **[Data source: External NocoBase]** Fixed file preview, permanent URL handling, and upload routing for external NocoBase file collections, including S3 Pro uploads by @mytharcher
- **[Multi-space]** Fixed authentication recovery requests being blocked by stale multi-space headers. By @jiannx
- **[Auth: SAML 2.0]** Fixed SAML automatic sign-in redirects for unauthenticated users in the modern client while preserving the original destination path by @jiannx
- **[App SSO]** Fixed incorrect App SSO redirects in v2 sub applications by @2013xile
- **[Workflow: Subflow]** Fixed workflow title search in the subflow node configuration selector. By @mytharcher
- **[Migration manager]**

  - Fixed duplicate migration creation on repeated submission and improved v2 migration log and process drawer display. By @katherinehhh
  - Improve v2 migration error feedback, prevent duplicate migration rule names, and fix environment check modal overflow. By @katherinehhh
- **[Auth: OIDC]** Fixed OIDC automatic login redirects in production builds and retained the original modern-client path after login by @jiannx
- **[Workflow: Approval]**

  - Invalid approval workflows in the new to-do center are now disabled and display a configuration warning. By @mytharcher
  - Fixed related approval blocks failing to load on Client V2 record detail pages by @mytharcher
  - Fix workflow form action buttons responding in configuration dialogs by @zhangzhonghe
  - Fix Approval blocks not refreshing after withdrawal or return by @zhangzhonghe
  - Guide users to V1 pages when approval interfaces cannot be used in V2 by @zhangzhonghe
  - Fix blank approval forms and missing or incorrect action buttons by @zhangzhonghe
  - Allow users to view approval interfaces and cards after a workflow has been executed by @zhangzhonghe
  - Fixed premature applicant validation and untranslated role labels in the approval workflow manual execution dialog. By @Molunerfinn
  - Fix the error when configuring approval workflow conditions by @zhangzhonghe
  - Fix the approval workflow task title remaining editable in executed workflow configurations after production builds. By @Molunerfinn
  - Close the Apply new drawer when opening an approval form by @zhangzhonghe
  - Fix empty approval interfaces and fixed assignee IDs by @zhangzhonghe
  - Fix the error when opening CC node settings by @zhangzhonghe
  - Fix v2 approval subtables not displaying correctly in details by @zhangzhonghe
  - Fix approval assignee sorting and hide unsupported legacy configuration entries by @zhangzhonghe
  - Fix missing approval data on approval task cards by @zhangzhonghe
  - Fix missing processed approval details in v2 task detail popups by @zhangzhonghe
  - Fix approval task form and action issues in the workflow v2 task center by @zhangzhonghe
  - Fix issues involved by migrating to client v2 by @mytharcher
  - Fix display and action issues in approval initiator interfaces by @zhangzhonghe
  - Fix the issue where approval tables appear in the block data source list by @zhangzhonghe
  - Fix an error that could prevent V2 pages from opening when approval and notification plugins are enabled by @zhangzhonghe
- **[Collection field: Signature]** Fix client-v2 signature field file collection selector localization and option filtering. By @katherinehhh
- **[Audit logs]** Fixed raw translation expressions appearing in the client V2 audit log Role column. By @katherinehhh
- **[App supervisor]** Fixed app visit links losing the v2 path in sub applications by @2013xile
- **[WeCom]**

  - Fixed WeCom notification channels not saving the selected authenticator. By @jiannx
  - Fixed a blank flash when switching route menu items with the WeCom plugin enabled in Client V2 by @2013xile
- **[DingTalk]** Fixed DingTalk notification channels losing the selected authenticator when saved from the v2 channel form by @jiannx

### v2.1.44

*Release date: 2026-08-21*

### 🎉 New Features

- **[Multi-space]** Added search to space switchers and space management in both v1 and v2 by @jiannx

### 🐛 Bug Fixes

- **[DingTalk]** Fixed DingTalk internal auto-login retaining the previous user's session after switching accounts. By @chenzhizdt

### v2.1.43

*Release date: 2026-08-19*

### 🐛 Bug Fixes

- **[app]** Added runtime polyfills for modern JavaScript APIs in supported older browsers ([#10385](https://github.com/nocobase/nocobase/pull/10385)) by @mytharcher
- **[undefined]** Fixed customized external database field display names being reset when selected tables are reloaded by @cgyrock
- **[Data source manager]** Fixed customized external database field display names being reset when a data source is submitted or its selected tables are changed ([#10387](https://github.com/nocobase/nocobase/pull/10387)) by @cgyrock
- **[Workflow: Approval]** Fixed approval workflows configured to return to any previous approval node only allowing the nearest upstream node by @mytharcher

### v2.1.42

*Release date: 2026-08-18*

### 🚀 Improvements

- **[undefined]**
  - Added LDAP and DingTalk user data synchronization guides, including permissions, event modes, synchronized fields, department owners, and troubleshooting. ([#10377](https://github.com/nocobase/nocobase/pull/10377)) by @chenzhizdt
    Reference: [DingTalk synchronization](https://github.com/chenzhizdt/nocobase/blob/docs/ldap-dingtalk/docs/docs/en/users-permissions/sync/sources/dingtalk.md), [LDAP synchronization](https://github.com/chenzhizdt/nocobase/blob/docs/ldap-dingtalk/docs/docs/en/users-permissions/sync/sources/ldap.md)
  - Improve LDAP and DingTalk user synchronization documentation and add all supported translations. ([#10382](https://github.com/nocobase/nocobase/pull/10382)) by @chenzhizdt
    Reference: [DingTalk](docs/docs/en/users-permissions/sync/sources/dingtalk.md) / [LDAP](docs/docs/en/users-permissions/sync/sources/ldap.md)

### 🐛 Bug Fixes

- **[Workflow: JavaScript]** Fixed JavaScript workflow task recovery repeatedly enqueueing jobs whose executions have ended or expired. ([#10366](https://github.com/nocobase/nocobase/pull/10366)) by @mytharcher
- **[Action: Export records Pro]** Fix export errors when using complex filters with the Export Pro plugin by @zhangzhonghe
- **[Action: Import records Pro]** Fixed asynchronous imports not respecting field-level import permissions by @mytharcher
- **[App supervisor]** Fixed Kingbase connections when creating supervised applications by @2013xile

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### v2.3.0-beta.4

*Release date: 2026-08-25*

### 🚀 Improvements

- **[undefined]** Clarified how to use public NocoBase file URLs in Markdown, external pages, and third-party services ([#10406](https://github.com/nocobase/nocobase/pull/10406)) by @mytharcher
  Reference: [Storage engine overview](https://docs.nocobase.com/file-manager/storage/)

### 🐛 Bug Fixes

- **[UI layout]** Fix the issue where desktop routes may be empty after upgrading ([#10405](https://github.com/nocobase/nocobase/pull/10405)) by @zhangzhonghe
- **[Workflow]** Fixed workflow task center menus so the active menu can be collapsed by clicking it again while retaining its selected highlight ([#10404](https://github.com/nocobase/nocobase/pull/10404)) by @mytharcher
- **[Action: Export records Pro]** Fix a crash when changing and drag-sorting Pro export fields. By @katherinehhh

### v2.2.0-beta.18

*Release date: 2026-08-20*

### 🎉 New Features

- **[AI employees]** Added DeepSeek V4 Flash and V4 Pro Responses API support with reasoning continuity, native web search, citations, and model-aware web search controls ([#10337](https://github.com/nocobase/nocobase/pull/10337)) by @cgyrock
- **[Multi-space]**

  - Added search to space switchers and space management in both v1 and v2 by @jiannx
  - Added debounced display-name search to space switchers and space management in both v1 and v2 by @jiannx
- **[Email manager]** Email synchronization now uses recoverable background jobs with status history and safer full-resync cleanup, including Gmail Spam and Trash. By @jiannx
- **[Auth: LDAP]** Add LDAP user synchronization configuration support for client v2. By @chenzhizdt

### 🚀 Improvements

- **[undefined]**

  - Improve LDAP and DingTalk user synchronization documentation and add all supported translations. ([#10382](https://github.com/nocobase/nocobase/pull/10382)) by @chenzhizdt
    Reference: [DingTalk](docs/docs/en/users-permissions/sync/sources/dingtalk.md) / [LDAP](docs/docs/en/users-permissions/sync/sources/ldap.md)
  - Added LDAP and DingTalk user data synchronization guides, including permissions, event modes, synchronized fields, department owners, and troubleshooting. ([#10377](https://github.com/nocobase/nocobase/pull/10377)) by @chenzhizdt
    Reference: [DingTalk synchronization](https://github.com/chenzhizdt/nocobase/blob/docs/ldap-dingtalk/docs/docs/en/users-permissions/sync/sources/dingtalk.md), [LDAP synchronization](https://github.com/chenzhizdt/nocobase/blob/docs/ldap-dingtalk/docs/docs/en/users-permissions/sync/sources/ldap.md)
- **[lock-manager]** Added renewable local lock leases and ensured try-acquired locks are released safely across reuse and errors ([#10368](https://github.com/nocobase/nocobase/pull/10368)) by @jiannx
- **[cli]** `nb api resource create` now accepts a JSON array for `--values` to create multiple records in a single request. ([#10325](https://github.com/nocobase/nocobase/pull/10325)) by @Molunerfinn
  Reference: [nb api resource create](https://github.com/nocobase/nocobase/blob/fix/cli-resource-create-array-values/docs/docs/en/api/cli/api/resource/create.md)
- **[Workflow]** Grouped task-center items by workflow in the new client and kept workflow filters consistent across task types. ([#10374](https://github.com/nocobase/nocobase/pull/10374)) by @mytharcher
- **[Block: Tree]** Tree filter blocks now support configurable default sorting. ([#10339](https://github.com/nocobase/nocobase/pull/10339)) by @jiannx
- **[Redis lock adapter]** Added renewable Redis lock leases and made reusable lock handles release safely during contention and errors by @jiannx
- **[Workflow: Approval]** Updated approval task grouping and timelines in the new client to match the legacy experience. By @mytharcher
- **[DingTalk]** Complete DingTalk client v2 support, including Stream synchronization, notification configuration, and automatic login improvements. By @chenzhizdt

### 🐛 Bug Fixes

- **[client-v2]**

  - Fixed relationship picker labels when association form values contain only a related record ID. ([#10386](https://github.com/nocobase/nocobase/pull/10386)) by @cgyrock
  - Fixed a false DatePicker missing-component error in v2 table filters. ([#10392](https://github.com/nocobase/nocobase/pull/10392)) by @katherinehhh
  - Fixed false missing-component console errors when opening v2 table filters. ([#10389](https://github.com/nocobase/nocobase/pull/10389)) by @katherinehhh
  - Fixed an error that prevented filter conditions from being cleared in workflow settings. ([#10388](https://github.com/nocobase/nocobase/pull/10388)) by @Molunerfinn
  - Fixed missing frontend response notifications on Client V2 pages, including errors returned by pre-action workflows ([#10376](https://github.com/nocobase/nocobase/pull/10376)) by @mytharcher
  - Fix Chinese text appearing when searching mobile select fields in English ([#10367](https://github.com/nocobase/nocobase/pull/10367)) by @zhangzhonghe
  - Fix filter forms refreshing automatically in UI edit mode ([#10356](https://github.com/nocobase/nocobase/pull/10356)) by @zhangzhonghe
  - Use Cascader by default for tree-structured relation fields in v2 filter forms ([#10357](https://github.com/nocobase/nocobase/pull/10357)) by @zhangzhonghe
  - Fix JS items incorrectly appearing in form field linkage rule actions ([#10363](https://github.com/nocobase/nocobase/pull/10363)) by @gchust
  - Fixed pages under `/v` remaining in UI editing mode after switching to a role without page configuration permission ([#10359](https://github.com/nocobase/nocobase/pull/10359)) by @jiannx
  - Automatically redirect to an accessible Settings tab when the current tab is unavailable ([#10332](https://github.com/nocobase/nocobase/pull/10332)) by @zhangzhonghe
  - Fix mobile single-select relation fields not clearing when the selected record is tapped again ([#10346](https://github.com/nocobase/nocobase/pull/10346)) by @zhangzhonghe
  - Fix the issue where China region fields cannot be added directly to filter forms ([#10333](https://github.com/nocobase/nocobase/pull/10333)) by @zhangzhonghe
  - Fixed an issue where ctx.form.submit could not correctly submit form data. ([#10063](https://github.com/nocobase/nocobase/pull/10063)) by @gchust
  - Redirect users without Settings access to the first available page ([#10331](https://github.com/nocobase/nocobase/pull/10331)) by @zhangzhonghe
  - Fix incorrect editing and display of large decimal values in V2 fields. ([#10330](https://github.com/nocobase/nocobase/pull/10330)) by @katherinehhh
  - Show a retryable localized fallback in v2 blocks when an external data source is unavailable. ([#10336](https://github.com/nocobase/nocobase/pull/10336)) by @katherinehhh
- **[app]** Added runtime polyfills for modern JavaScript APIs in supported older browsers ([#10385](https://github.com/nocobase/nocobase/pull/10385)) by @mytharcher
- **[flow-engine]** Fix dropdown menus being cut off in short browser windows ([#10379](https://github.com/nocobase/nocobase/pull/10379)) by @zhangzhonghe
- **[client]** Fix incomplete long sidebar menu titles and misaligned configuration toolbars ([#10380](https://github.com/nocobase/nocobase/pull/10380)) by @zhangzhonghe
- **[undefined]**

  - Fix `nb plugin import` failing on plugin tarballs built by `yarn build --tar`, and correct example code and scaffold structure in the plugin development docs. ([#10351](https://github.com/nocobase/nocobase/pull/10351)) by @Molunerfinn
  - Fixed customized external database field display names being reset when selected tables are reloaded by @cgyrock
- **[database]** Fixed prefix indexes on camel-case fields when underscored database naming is enabled ([#10329](https://github.com/nocobase/nocobase/pull/10329)) by @2013xile
- **[Data source manager]** Fixed customized external database field display names being reset when a data source is submitted or its selected tables are changed ([#10387](https://github.com/nocobase/nocobase/pull/10387)) by @cgyrock
- **[Workflow: JavaScript]** Fixed JavaScript workflow task recovery repeatedly enqueueing jobs whose executions have ended or expired. ([#10366](https://github.com/nocobase/nocobase/pull/10366)) by @mytharcher
- **[Workflow]**

  - Fixed workflow execution page titles and added a workflow-list link for missing workflows ([#10360](https://github.com/nocobase/nocobase/pull/10360)) by @mytharcher
  - Disable workflow execution mode selection until a trigger type is selected. ([#10296](https://github.com/nocobase/nocobase/pull/10296)) by @Molunerfinn
- **[Notification: In-app message]** Fixed the in-app message template form showing workflow canvas variables instead of the variables provided by the page. ([#10180](https://github.com/nocobase/nocobase/pull/10180)) by @Molunerfinn
- **[Block: Map]** Fixed region selection not finishing on double-click when map point data is displayed, and fixed AMap remaining in a loading state ([#10373](https://github.com/nocobase/nocobase/pull/10373)) by @jiannx
- **[Collection field: Markdown(Vditor)]** Fix Markdown HTML previews in v2 details blocks under dark themes. ([#10370](https://github.com/nocobase/nocobase/pull/10370)) by @katherinehhh
- **[UI layout]**

  - Fix mobile pages appearing in the desktop navigation ([#10375](https://github.com/nocobase/nocobase/pull/10375)) by @zhangzhonghe
  - Hide the mobile UI Editor when the current role cannot configure the interface ([#10341](https://github.com/nocobase/nocobase/pull/10341)) by @zhangzhonghe
- **[AI employees]**

  - Fix V2 Import drag-and-drop being blocked by the AI attachment overlay. ([#10384](https://github.com/nocobase/nocobase/pull/10384)) by @katherinehhh
  - Fixed AI employee chat streaming long responses causing other idle browser tabs to balloon to multiple gigabytes of memory ([#10352](https://github.com/nocobase/nocobase/pull/10352)) by @cgyrock
- **[Workflow: JSON calculation]** Fixed JSON Query jobs losing structured parser errors and displaying `[object Object]` ([#10344](https://github.com/nocobase/nocobase/pull/10344)) by @mytharcher
- **[Users]**

  - Show backend errors when adding a user or changing a password in V2. ([#10364](https://github.com/nocobase/nocobase/pull/10364)) by @katherinehhh
  - Fixed required-field validation being skipped when submitting forms in UI editor mode ([#10371](https://github.com/nocobase/nocobase/pull/10371)) by @jiannx
- **[File manager]**

  - Fix the extra submit step when selecting an existing file in a single-value field ([#10372](https://github.com/nocobase/nocobase/pull/10372)) by @zhangzhonghe
  - Fixed local storage files such as logos failing to load in sub-applications after stable URL redirects ([#10358](https://github.com/nocobase/nocobase/pull/10358)) by @mytharcher
  - Fixed video previews not updating when switching between files ([#10345](https://github.com/nocobase/nocobase/pull/10345)) by @mytharcher
- **[Action: Import records]** Fixed an issue where files could not be imported by dragging them into the v2 Import dialog. ([#10350](https://github.com/nocobase/nocobase/pull/10350)) by @katherinehhh
- **[Action: Print]** Fix the missing print action model registration on V1 pages. ([#10347](https://github.com/nocobase/nocobase/pull/10347)) by @katherinehhh
- **[Block: Tree]** Fixed tree filter permissions and connected tree-table expansion state, and corrected details pagination totals after filtering. ([#10361](https://github.com/nocobase/nocobase/pull/10361)) by @jiannx
- **[Verification]** Add a refresh button to the Verification list ([#10340](https://github.com/nocobase/nocobase/pull/10340)) by @zhangzhonghe
- **[Block: Kanban]** Fixed configured content disappearing after reopening a kanban card's detail drawer ([#10334](https://github.com/nocobase/nocobase/pull/10334)) by @jiannx
- **[Action: Export records]**

  - Fix table export errors after filtering by multiple relation fields ([#10342](https://github.com/nocobase/nocobase/pull/10342)) by @zhangzhonghe
  - Fixed a page crash when sorting an edited relation field in Export V2. ([#10335](https://github.com/nocobase/nocobase/pull/10335)) by @katherinehhh
- **[Notification manager]** Fixed locale tester errors when no saved locale record exists, and allowed notification channel identifiers to be customized when creating channels ([#10311](https://github.com/nocobase/nocobase/pull/10311)) by @jiannx
- **[Action: Duplicate record]** Improve direct duplication failure feedback in v2 without duplicate API error messages. ([#10327](https://github.com/nocobase/nocobase/pull/10327)) by @katherinehhh
- **[Data source: External PostgreSQL]** Automatically load collections when editing an external relational data source in client v2. By @katherinehhh
- **[Collection field: Encryption]** Fixed bulk import failing with `model.changed is not a function` when the collection contains an encryption field by @cgyrock
- **[Action: Export records Pro]** Fix export errors when using complex filters with the Export Pro plugin by @zhangzhonghe
- **[Action: Import records Pro]**

  - Fixed asynchronous imports not respecting field-level import permissions by @mytharcher
  - Fixed asynchronously imported records not being associated with the current space by @jiannx
  - Clarified import results by showing the number of newly created records separately from updated records by @mytharcher
- **[Workflow: Webhook]** Fixed a 400 error when manually executing a webhook workflow without request headers by @mytharcher
- **[Record history]** Improved record history write performance for collections with large snapshot tables by @2013xile
- **[Workflow: Approval]**

  - Fixed approval workflows configured to return to any previous approval node only allowing the nearest upstream node by @mytharcher
  - Add data scope filtering to Client V2 related approval blocks by @zhangzhonghe
  - Fix Approval blocks not refreshing after withdrawal or return by @zhangzhonghe
  - Invalid approval workflows in the new to-do center are now disabled and display a configuration warning. By @mytharcher
  - Fix inconsistent subtable column widths in approval details by @zhangzhonghe
  - Fixed related approval blocks failing to load on Client V2 record detail pages by @mytharcher
- **[Audit logs]** Fixed raw translation expressions appearing in the client V2 audit log Role column. By @katherinehhh
- **[App supervisor]** Fixed Kingbase connections when creating supervised applications by @2013xile
