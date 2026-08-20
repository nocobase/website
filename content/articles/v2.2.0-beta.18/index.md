### 🎉 New Features

- **[AI employees]** Added DeepSeek V4 Flash and V4 Pro Responses API support with reasoning continuity, native web search, citations, and model-aware web search controls ([#10337](https://github.com/nocobase/nocobase/pull/10337)) by @cgyrock

- **[Multi-space]**
  - Added search to space switchers and space management in both v1 and v2 by @jiannx

  - Added debounced display-name search to space switchers and space management in both v1 and v2 by @jiannx

- **[Email manager]** Email synchronization now uses recoverable background jobs with status history and safer full-resync cleanup, including Gmail Spam and Trash. by @jiannx

- **[Auth: LDAP]** Add LDAP user synchronization configuration support for client v2. by @chenzhizdt

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

- **[Workflow: Approval]** Updated approval task grouping and timelines in the new client to match the legacy experience. by @mytharcher

- **[DingTalk]** Complete DingTalk client v2 support, including Stream synchronization, notification configuration, and automatic login improvements. by @chenzhizdt

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

- **[Data source: External PostgreSQL]** Automatically load collections when editing an external relational data source in client v2. by @katherinehhh

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

  - Invalid approval workflows in the new to-do center are now disabled and display a configuration warning. by @mytharcher

  - Fix inconsistent subtable column widths in approval details by @zhangzhonghe

  - Fixed related approval blocks failing to load on Client V2 record detail pages by @mytharcher

- **[Audit logs]** Fixed raw translation expressions appearing in the client V2 audit log Role column. by @katherinehhh

- **[App supervisor]** Fixed Kingbase connections when creating supervised applications by @2013xile

