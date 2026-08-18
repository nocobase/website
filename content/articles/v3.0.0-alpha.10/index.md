### 🎉 New Features

- **[undefined]** Added an online AI documentation assistant with verified official-document references and live progress updates ([#10328](https://github.com/nocobase/nocobase/pull/10328)) by @hongboji

- **[AI employees]** Added DeepSeek V4 Flash and V4 Pro Responses API support with reasoning continuity, native web search, citations, and model-aware web search controls ([#10337](https://github.com/nocobase/nocobase/pull/10337)) by @cgyrock

- **[Multi-space]** Added debounced display-name search to space switchers and space management in both v1 and v2 by @jiannx

- **[Auth: LDAP]** Add LDAP user synchronization configuration support for client v2. by @chenzhizdt

### 🚀 Improvements

- **[cli]** `nb api resource create` now accepts a JSON array for `--values` to create multiple records in a single request. ([#10325](https://github.com/nocobase/nocobase/pull/10325)) by @Molunerfinn
Reference: [nb api resource create](https://github.com/nocobase/nocobase/blob/fix/cli-resource-create-array-values/docs/docs/en/api/cli/api/resource/create.md)
- **[undefined]**
  - Improve LDAP and DingTalk user synchronization documentation and add all supported translations. ([#10382](https://github.com/nocobase/nocobase/pull/10382)) by @chenzhizdt
Reference: [DingTalk](docs/docs/en/users-permissions/sync/sources/dingtalk.md) / [LDAP](docs/docs/en/users-permissions/sync/sources/ldap.md)
  - Added LDAP and DingTalk user data synchronization guides, including permissions, event modes, synchronized fields, department owners, and troubleshooting. ([#10377](https://github.com/nocobase/nocobase/pull/10377)) by @chenzhizdt
Reference: [DingTalk synchronization](https://github.com/chenzhizdt/nocobase/blob/docs/ldap-dingtalk/docs/docs/en/users-permissions/sync/sources/dingtalk.md), [LDAP synchronization](https://github.com/chenzhizdt/nocobase/blob/docs/ldap-dingtalk/docs/docs/en/users-permissions/sync/sources/ldap.md)
- **[lock-manager]** Added renewable local lock leases and ensured try-acquired locks are released safely across reuse and errors ([#10368](https://github.com/nocobase/nocobase/pull/10368)) by @jiannx

- **[Workflow]** Grouped task-center items by workflow in the new client and kept workflow filters consistent across task types. ([#10374](https://github.com/nocobase/nocobase/pull/10374)) by @mytharcher

- **[Block: Tree]** Tree filter blocks now support configurable default sorting. ([#10339](https://github.com/nocobase/nocobase/pull/10339)) by @jiannx

- **[Redis lock adapter]** Added renewable Redis lock leases and made reusable lock handles release safely during contention and errors by @jiannx

- **[Workflow: Approval]** Updated approval task grouping and timelines in the new client to match the legacy experience. by @mytharcher

### 🐛 Bug Fixes

- **[cli-v1]** Preserved documentation AI service paths during CDN origin routing ([#10383](https://github.com/nocobase/nocobase/pull/10383)) by @hongboji

- **[client-v2]**
  - Fixed missing frontend response notifications on Client V2 pages, including errors returned by pre-action workflows ([#10376](https://github.com/nocobase/nocobase/pull/10376)) by @mytharcher

  - Fix Chinese text appearing when searching mobile select fields in English ([#10367](https://github.com/nocobase/nocobase/pull/10367)) by @zhangzhonghe

  - Fix filter forms refreshing automatically in UI edit mode ([#10356](https://github.com/nocobase/nocobase/pull/10356)) by @zhangzhonghe

  - Fix JS items incorrectly appearing in form field linkage rule actions ([#10363](https://github.com/nocobase/nocobase/pull/10363)) by @gchust

  - Use Cascader by default for tree-structured relation fields in v2 filter forms ([#10357](https://github.com/nocobase/nocobase/pull/10357)) by @zhangzhonghe

  - Fixed pages under `/v` remaining in UI editing mode after switching to a role without page configuration permission ([#10359](https://github.com/nocobase/nocobase/pull/10359)) by @jiannx

  - Fix mobile single-select relation fields not clearing when the selected record is tapped again ([#10346](https://github.com/nocobase/nocobase/pull/10346)) by @zhangzhonghe

  - Fix the issue where China region fields cannot be added directly to filter forms ([#10333](https://github.com/nocobase/nocobase/pull/10333)) by @zhangzhonghe

  - Show a retryable localized fallback in v2 blocks when an external data source is unavailable. ([#10336](https://github.com/nocobase/nocobase/pull/10336)) by @katherinehhh

- **[client]** Fix incomplete long sidebar menu titles and misaligned configuration toolbars ([#10380](https://github.com/nocobase/nocobase/pull/10380)) by @zhangzhonghe

- **[flow-engine]** Fix dropdown menus being cut off in short browser windows ([#10379](https://github.com/nocobase/nocobase/pull/10379)) by @zhangzhonghe

- **[undefined]**
  - Fix `nb plugin import` failing on plugin tarballs built by `yarn build --tar`, and correct example code and scaffold structure in the plugin development docs. ([#10351](https://github.com/nocobase/nocobase/pull/10351)) by @Molunerfinn

  - Fix `nb plugin import` failing on plugin tarballs built by `yarn build --tar`, and correct example code and scaffold structure in the plugin development docs. ([#10351](https://github.com/nocobase/nocobase/pull/10351)) by @Molunerfinn

- **[Workflow]**
  - Fixed workflow execution page titles and added a workflow-list link for missing workflows ([#10360](https://github.com/nocobase/nocobase/pull/10360)) by @mytharcher

  - Disable workflow execution mode selection until a trigger type is selected. ([#10296](https://github.com/nocobase/nocobase/pull/10296)) by @Molunerfinn

- **[Block: Map]** Fixed region selection not finishing on double-click when map point data is displayed, and fixed AMap remaining in a loading state ([#10373](https://github.com/nocobase/nocobase/pull/10373)) by @jiannx

- **[UI layout]**
  - Fix mobile pages appearing in the desktop navigation ([#10375](https://github.com/nocobase/nocobase/pull/10375)) by @zhangzhonghe

  - Hide the mobile UI Editor when the current role cannot configure the interface ([#10341](https://github.com/nocobase/nocobase/pull/10341)) by @zhangzhonghe

- **[File manager]**
  - Fix the extra submit step when selecting an existing file in a single-value field ([#10372](https://github.com/nocobase/nocobase/pull/10372)) by @zhangzhonghe

  - Fixed local storage files such as logos failing to load in sub-applications after stable URL redirects ([#10358](https://github.com/nocobase/nocobase/pull/10358)) by @mytharcher

  - Fixed video previews not updating when switching between files ([#10345](https://github.com/nocobase/nocobase/pull/10345)) by @mytharcher

- **[Workflow: JavaScript]** Fixed JavaScript workflow task recovery repeatedly enqueueing jobs whose executions have ended or expired. ([#10366](https://github.com/nocobase/nocobase/pull/10366)) by @mytharcher

- **[Notification: In-app message]** Fixed the in-app message template form showing workflow canvas variables instead of the variables provided by the page. ([#10180](https://github.com/nocobase/nocobase/pull/10180)) by @Molunerfinn

- **[Collection field: Markdown(Vditor)]** Fix Markdown HTML previews in v2 details blocks under dark themes. ([#10370](https://github.com/nocobase/nocobase/pull/10370)) by @katherinehhh

- **[Action: Import records]** Fixed an issue where files could not be imported by dragging them into the v2 Import dialog. ([#10350](https://github.com/nocobase/nocobase/pull/10350)) by @katherinehhh

- **[Users]**
  - Fixed required-field validation being skipped when submitting forms in UI editor mode ([#10371](https://github.com/nocobase/nocobase/pull/10371)) by @jiannx

  - Show backend errors when adding a user or changing a password in V2. ([#10364](https://github.com/nocobase/nocobase/pull/10364)) by @katherinehhh

- **[Workflow: JSON calculation]** Fixed JSON Query jobs losing structured parser errors and displaying `[object Object]` ([#10344](https://github.com/nocobase/nocobase/pull/10344)) by @mytharcher

- **[AI employees]** Fixed AI employee chat streaming long responses causing other idle browser tabs to balloon to multiple gigabytes of memory ([#10352](https://github.com/nocobase/nocobase/pull/10352)) by @cgyrock

- **[Block: Tree]** Fixed tree filter permissions and connected tree-table expansion state, and corrected details pagination totals after filtering. ([#10361](https://github.com/nocobase/nocobase/pull/10361)) by @jiannx

- **[Action: Print]** Fix the missing print action model registration on V1 pages. ([#10347](https://github.com/nocobase/nocobase/pull/10347)) by @katherinehhh

- **[Action: Export records]**
  - Fixed a page crash when sorting an edited relation field in Export V2. ([#10335](https://github.com/nocobase/nocobase/pull/10335)) by @katherinehhh

  - Fix table export errors after filtering by multiple relation fields ([#10342](https://github.com/nocobase/nocobase/pull/10342)) by @zhangzhonghe

- **[Backup manager]** Keep loading feedback visible while restoring backups ([#10343](https://github.com/nocobase/nocobase/pull/10343)) by @zhangzhonghe

- **[Verification]** Add a refresh button to the Verification list ([#10340](https://github.com/nocobase/nocobase/pull/10340)) by @zhangzhonghe

- **[Block: Kanban]** Fixed configured content disappearing after reopening a kanban card's detail drawer ([#10334](https://github.com/nocobase/nocobase/pull/10334)) by @jiannx

- **[Notification manager]** Fixed locale tester errors when no saved locale record exists, and allowed notification channel identifiers to be customized when creating channels ([#10311](https://github.com/nocobase/nocobase/pull/10311)) by @jiannx

- **[Collection field: Encryption]** Fixed bulk import failing with `model.changed is not a function` when the collection contains an encryption field by @cgyrock

- **[Action: Import records Pro]**
  - Fixed asynchronously imported records not being associated with the current space by @jiannx

  - Clarified import results by showing the number of newly created records separately from updated records by @mytharcher

- **[Workflow: Webhook]** Fixed a 400 error when manually executing a webhook workflow without request headers by @mytharcher

- **[Workflow: Approval]**
  - Fix inconsistent subtable column widths in approval details by @zhangzhonghe

  - Invalid approval workflows in the new to-do center are now disabled and display a configuration warning. by @mytharcher

  - Fix the empty return target list when returning an approval to any previous node by @zhangzhonghe

  - Fix Approval blocks not refreshing after withdrawal or return by @zhangzhonghe

  - Add data scope filtering to Client V2 related approval blocks by @zhangzhonghe

- **[Audit logs]** Fixed raw translation expressions appearing in the client V2 audit log Role column. by @katherinehhh

