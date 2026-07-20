Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase is currently updated across three branches: `main`, `next`, and `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: The most stable version to date, recommended for installation.
* `next`: Beta version, contains upcoming new features and has been preliminarily tested. There might be some known or unknown issues. It is mainly used to collect feedback from test users and further optimize features. Ideal for test users who want to experience new features early and provide feedback.
* `develop`: Alpha version, contains the latest feature code, may be incomplete or unstable, and is mainly used for internal development and rapid iteration. Suited for technical users interested in cutting-edge product capabilities, but not recommended for production use.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### v2.1.28

*Release date: 2026-07-19*

### 🐛 Bug Fixes

- **[client-v2]** Fix mobile menus hidden incorrectly by device type rules ([#10123](https://github.com/nocobase/nocobase/pull/10123)) by @zhangzhonghe
- **[Workflow: Approval]** Fix occasional errors when opening approval task details directly by @zhangzhonghe

### v2.1.27

*Release date: 2026-07-19*

### 🚀 機能改善

* **[undefined]**
  * データソースドキュメントの構成、リンク、多言語ページを更新しました。([#10108](https://github.com/nocobase/nocobase/pull/10108)) by @hongboji
    参考：[データソース](docs/docs/ja/data-sources/index.md)

### 🐛 不具合修正

* **[server]** アップロードされた XML などのアクティブコンテンツファイルが、アプリケーションと同一オリジンの環境でスクリプトを実行しないようにしました。([#10104](https://github.com/nocobase/nocobase/pull/10104)) by @mytharcher
* **[database]** データベースビューのメタデータ読み取り時における SQL インジェクションのリスクを修正しました。([#10115](https://github.com/nocobase/nocobase/pull/10115)) by @2013xile
* **[client-v2]**
  * Markdown の第2レベル見出しに適用されていた不要なボーダーとシャドウのスタイルをリセットしました。([#10107](https://github.com/nocobase/nocobase/pull/10107)) by @katherinehhh
  * Urdu のラベルを修正し、システム設定の言語一覧にウズベク語を独立した選択肢として追加しました。([#10090](https://github.com/nocobase/nocobase/pull/10090)) by @hongboji
* **[AI employees]** AI employee のチャット入力欄にファイルを貼り付けて送信した際にエラーが発生する問題を修正しました。([#10106](https://github.com/nocobase/nocobase/pull/10106)) by @cgyrock
* **[ファイルストレージ：S3 (Pro)]** S3 互換ストレージのファイル URL で設定済みパスが欠落し、アップロード済みの Logo や添付ファイルが 404 を返す問題を修正しました。 by @mytharcher

### v2.1.26

*Release date: 2026-07-17*

### 🚀 Improvements

- **[undefined]**
  - Updated the data source documentation structure, links, and localized pages. ([#10108](https://github.com/nocobase/nocobase/pull/10108)) by @hongboji
    Reference: [Data sources](docs/docs/en/data-sources/index.md)

### 🐛 Bug Fixes

- **[server]** Prevented uploaded XML and other active content files from executing scripts in the application origin ([#10104](https://github.com/nocobase/nocobase/pull/10104)) by @mytharcher
- **[database]** Fixed an SQL injection risk when reading database view metadata ([#10115](https://github.com/nocobase/nocobase/pull/10115)) by @2013xile
- **[client-v2]**

  - Reset unwanted border and shadow styles on Markdown h2 headings. ([#10107](https://github.com/nocobase/nocobase/pull/10107)) by @katherinehhh
  - Corrected the Urdu label and added a separate Uzbek option to the System Settings language list. ([#10090](https://github.com/nocobase/nocobase/pull/10090)) by @hongboji
- **[AI employees]** Fixed an error when sending files pasted into the AI employee chat input ([#10106](https://github.com/nocobase/nocobase/pull/10106)) by @cgyrock
- **[File storage: S3(Pro)]** Fixed S3-compatible file URLs omitting the configured storage path, which caused uploaded logos and attachments to return 404 errors by @mytharcher

### v2.1.25

*Release date: 2026-07-15*

### 🎉 New Features

- **[DingTalk]** Added DingTalk Stream mode support for organization event synchronization. by @chenzhizdt
- **[Auth: LDAP]** Added LDAP user data sync source support, including optional AD department synchronization. by @chenzhizdt

### 🚀 Improvements

- **[ai]** Reduced main-process memory usage when parsing uploaded knowledge base documents. ([#10083](https://github.com/nocobase/nocobase/pull/10083)) by @cgyrock
- **[undefined]**

  - File URLs now use stable NocoBase access URLs so permissions can be checked before redirecting to storage. ([#10047](https://github.com/nocobase/nocobase/pull/10047)) by @mytharcher
- **[File storage: S3(Pro)]** S3 Pro uploads now return the created file record with permanent file URLs. by @mytharcher
- **[RabbitMQ queue adapter]** Enhance the channel management and error recovery capabilities of the RabbitMQ adapter by @sdp-ncd

### 🐛 Bug Fixes

- **[User data synchronization]** Fixed external department sync order so child departments can be reparented correctly when their parent is synced later. ([#10028](https://github.com/nocobase/nocobase/pull/10028)) by @chenzhizdt
- **[Collection field: Markdown(Vditor)]** Fixed iframe sanitization for v1 Markdown rendering and editing. ([#10096](https://github.com/nocobase/nocobase/pull/10096)) by @katherinehhh
- **[Workflow]** Fixed hidden fields being included when workflow serializes appended association data ([#10086](https://github.com/nocobase/nocobase/pull/10086)) by @mytharcher
- **[AI employees]** Fixed AI tool-call approvals to authorize against the message's owning conversation before updating decisions. ([#10077](https://github.com/nocobase/nocobase/pull/10077)) by @cgyrock
- **[Data source: External NocoBase]**

  - Fixed file preview, permanent URL handling, and upload routing for external NocoBase file collections, including S3 Pro uploads by @mytharcher
  - Fixed workflow AI employees being unable to read attachments from External NocoBase data sources by @2013xile

### v2.1.24

*Release date: 2026-07-13*

### 🐛 Bug Fixes

- **[client-v2]**

  - Fixed other column content showing through fixed v2 table columns when quick edit is enabled. ([#10076](https://github.com/nocobase/nocobase/pull/10076)) by @katherinehhh
  - Fixed v2 scan input camera preview layout issues on iOS Chrome. ([#10081](https://github.com/nocobase/nocobase/pull/10081)) by @katherinehhh
- **[app]** Fixed Redis cache configuration ignoring the dedicated cache URL ([#10065](https://github.com/nocobase/nocobase/pull/10065)) by @2013xile
- **[Action: Batch edit]** Fixed Markdown editor initialization failure when a V2 form includes a `process` field. ([#10080](https://github.com/nocobase/nocobase/pull/10080)) by @katherinehhh
- **[AI employees]** Fixed AI attachment handling to avoid trusting client-provided file paths or URLs. ([#10037](https://github.com/nocobase/nocobase/pull/10037)) by @cgyrock
- **[Workflow]** Fixed manual workflow execution returning an error when a valid request does not start an execution. ([#10049](https://github.com/nocobase/nocobase/pull/10049)) by @mytharcher
- **[Redis worker ID allocator]**

  - Improved Redis worker ID isolation and failure diagnostics by @2013xile
  - Restored standalone startup without Redis worker ID configuration by @2013xile
- **[Workflow: Approval]** Filter approval file associations by current user ownership when the temporary switch is enabled. by @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### v2.2.0-beta.15

*Release date: 2026-07-16*

### 🎉 New Features

- **[client-v2]**

  - Tabs on pages, subpages and pop-ups support the configuration of linkage rules ([#10099](https://github.com/nocobase/nocobase/pull/10099)) by @zhangzhonghe
  - Add an environment variable to configure legacy and modern route entry modes. ([#9891](https://github.com/nocobase/nocobase/pull/9891)) by @Molunerfinn
- **[AI employees]** Added RunJS APIs for triggering AI employee tasks from JS blocks. ([#10061](https://github.com/nocobase/nocobase/pull/10061)) by @cgyrock
- **[Public forms]** In the v1 public form, support creating v2 forms and prohibit creating v1 forms ([#10045](https://github.com/nocobase/nocobase/pull/10045)) by @zhangzhonghe
- **[Block: Comment]**

  - Improved comment block settings with data scope, default sorting, selectable page size, optional last-page jumping, and scalar owner field mapping. ([#9954](https://github.com/nocobase/nocobase/pull/9954)) by @jiannx
  - Added a comments block. ([#9916](https://github.com/nocobase/nocobase/pull/9916)) by @jiannx
- **[Notification: Email]** Migrated the workflow notification node client to v2, restored channel-specific notification forms, and kept legacy workflow route compatibility for migrated notification configuration. ([#9817](https://github.com/nocobase/nocobase/pull/9817)) by @jiannx
- **[Workflow: mailer node]** Added v2 client support for configuring the workflow mailer node. ([#9825](https://github.com/nocobase/nocobase/pull/9825)) by @jiannx
- **[Workflow]** Migrate the Workflow settings page to the v2 client and share a reusable draggable category-tabs component via `@nocobase/client-v2`. ([#9645](https://github.com/nocobase/nocobase/pull/9645)) by @Molunerfinn
- **[Workflow: Database transaction node]** Added a client-v2 implementation for the workflow database transaction node while preserving the legacy client entry. by @katherinehhh
- **[Record history]** Added client v2 support for the record history plugin. by @jiannx
- **[Workflow: Approval]** Add approval initiation and todo blocks for v2 pages by @zhangzhonghe
- **[DingTalk]** Added DingTalk Stream mode support for organization event synchronization. by @chenzhizdt

### 🚀 Improvements

- **[undefined]**

  - Updated the data source documentation structure, links, and localized pages. ([#10108](https://github.com/nocobase/nocobase/pull/10108)) by @hongboji
    Reference: [Data sources](docs/docs/en/data-sources/index.md)
  - Updated the data source documentation structure, links, and localized pages. ([#10108](https://github.com/nocobase/nocobase/pull/10108)) by @hongboji
    Reference: [Data sources](docs/docs/en/data-sources/index.md)
  - File URLs now use stable NocoBase access URLs so permissions can be checked before redirecting to storage. ([#10103](https://github.com/nocobase/nocobase/pull/10103)) by @mytharcher
  - File URLs now use stable NocoBase access URLs so permissions can be checked before redirecting to storage. ([#10047](https://github.com/nocobase/nocobase/pull/10047)) by @mytharcher
  - Refined Russian documentation translation for improved wording, readability, and terminology consistency. ([#9942](https://github.com/nocobase/nocobase/pull/9942)) by @sembaev-a-a
  - Refined Russian documentation translation for improved wording, readability, and terminology consistency. ([#9816](https://github.com/nocobase/nocobase/pull/9816)) by @sembaev-a-a
  - Improved AI knowledge base retrieval and documentation. ([#9765](https://github.com/nocobase/nocobase/pull/9765)) by @cgyrock
  - Refined Russian documentation translation for improved wording, readability, and terminology consistency. ([#9754](https://github.com/nocobase/nocobase/pull/9754)) by @sembaev-a-a
- **[client-v2]**

  - Refactor Markdown Vditor into a unified plugin-backed Markdown engine with compatibility bridges for existing Markdown block and Vditor field plugins. ([#9998](https://github.com/nocobase/nocobase/pull/9998)) by @katherinehhh
  - Refactor Markdown Vditor into a unified plugin-backed Markdown engine with compatibility bridges for existing Markdown block and Vditor field plugins. ([#9998](https://github.com/nocobase/nocobase/pull/9998)) by @katherinehhh
- **[Workflow: Manual node]** Show manual workflow tasks in the V2 task center and guide users to the legacy page for processing ([#10085](https://github.com/nocobase/nocobase/pull/10085)) by @zhangzhonghe
- **[Workflow]**

  - Unsupported workflow v2 canvas nodes now keep the normal node card actions while showing the node type as unsupported. ([#10054](https://github.com/nocobase/nocobase/pull/10054)) by @mytharcher
  - Simplified workflow v2 create/update field assignment, improved selected variable display, and avoided generating unused assign-form model data. ([#9887](https://github.com/nocobase/nocobase/pull/9887)) by @katherinehhh
  - Exported workflow v2 canvas extension APIs for downstream workflow node plugins. ([#9834](https://github.com/nocobase/nocobase/pull/9834)) by @katherinehhh
  - Migrate the workflow output node configuration to v2 and align v2 workflow result viewers with the legacy display behavior for string results. ([#9813](https://github.com/nocobase/nocobase/pull/9813)) by @Molunerfinn
  - Migrate the workflow end node to the v2 implementation. ([#9795](https://github.com/nocobase/nocobase/pull/9795)) by @Molunerfinn
- **[AI employees]**

  - Improved AI employee tool settings, data-query guardrails, relation field querying, and malformed tool call diagnostics. ([#10042](https://github.com/nocobase/nocobase/pull/10042)) by @cgyrock
  - Improved AI employee web search to reduce unnecessary model reasoning and better use provider-specific thinking controls. ([#9996](https://github.com/nocobase/nocobase/pull/9996)) by @cgyrock
  - Removed the deprecated Datasource entry from AI employee settings and context selection in the v2 UI. ([#9988](https://github.com/nocobase/nocobase/pull/9988)) by @cgyrock
  - Migrated the AI employee plugin to client-v2. ([#9794](https://github.com/nocobase/nocobase/pull/9794)) by @cgyrock
- **[Collection: SQL]** Not user-facing; added client-v2 unit test coverage for migrated plugins. ([#9967](https://github.com/nocobase/nocobase/pull/9967)) by @katherinehhh
- **[Block: Comment]**

  - Improved comment submit actions and fixed related comment/user form submission issues. ([#10002](https://github.com/nocobase/nocobase/pull/10002)) by @jiannx
  - Added the new comment block plugin to the NocoBase preset and marked the legacy comments plugin as deprecated. ([#9936](https://github.com/nocobase/nocobase/pull/9936)) by @jiannx
- **[Users]** Improve client-v2 test coverage for the users plugin. ([#9975](https://github.com/nocobase/nocobase/pull/9975)) by @jiannx
- **[Logger]** Added the Logger settings page to the client v2 runtime. ([#9933](https://github.com/nocobase/nocobase/pull/9933)) by @jiannx
- **[Workflow: Aggregate node]** Improved v2 workflow field selection for update and aggregate query nodes, including safer associated collection selection in aggregate query nodes. ([#9938](https://github.com/nocobase/nocobase/pull/9938)) by @katherinehhh
- **[Workflow: JavaScript]**

  - Aligned v2 workflow request and mailer node configuration fields with legacy layout and attachment variable behavior. ([#9952](https://github.com/nocobase/nocobase/pull/9952)) by @jiannx
  - Migrated the JavaScript workflow node to client-v2 ([#9805](https://github.com/nocobase/nocobase/pull/9805)) by @jiannx
- **[Workflow: JSON calculation]** Migrated the workflow JSON calculation node configuration UI to the v2 workflow canvas while preserving v1 canvas compatibility. ([#9902](https://github.com/nocobase/nocobase/pull/9902)) by @mytharcher
- **[Backup manager]** Tables whose collection `dataCategory` is marked as `'runtime'` are now excluded from backups automatically. ([#9804](https://github.com/nocobase/nocobase/pull/9804)) by @cgyrock
- **[Workflow: Custom action event]** Migrated workflow triggers and bind-workflow settings to client-v2, including action trigger, custom action trigger, request interception trigger, and submit/update action workflow binding settings. ([#9845](https://github.com/nocobase/nocobase/pull/9845)) by @mytharcher
- **[Workflow: HTTP request node]** Migrated the workflow HTTP request node to client-v2. ([#9806](https://github.com/nocobase/nocobase/pull/9806)) by @jiannx
- **[HTTP request encryption]** Added v2 client support for HTTP request encryption so query parameters continue to be encrypted in the v2 client. by @jiannx
- **[Workflow: Database transaction node]** Improved the v2 workflow database transaction node layout so branch labels and the commit marker have better spacing. by @katherinehhh
- **[AI: Knowledge base]** Migrated the AI knowledge base settings pages to the v2 client and fixed layout and loading issues in knowledge base and vector store pages. by @cgyrock
- **[File storage: S3(Pro)]** S3 Pro uploads now return the created file record with permanent file URLs. by @mytharcher
- **[Email manager]** Moved the department-based mail viewing option to the V1 general mail settings page, prevented service credential saves from overwriting it, and placed V2 General settings before Service provider settings. by @jiannx

### 🐛 Bug Fixes

- **[client-v2]**

  - Corrected the Urdu label and added a separate Uzbek option to the System Settings language list. ([#10090](https://github.com/nocobase/nocobase/pull/10090)) by @hongboji
  - Fixed automatic SSO redirect providers failing to preserve authentication order in production builds ([#10100](https://github.com/nocobase/nocobase/pull/10100)) by @jiannx
  - Workflow filters now preserve workflow variable expressions and show a clear parsing error when variable metadata cannot be resolved. ([#10088](https://github.com/nocobase/nocobase/pull/10088)) by @Molunerfinn
  - Fix an error in v2 workflow value editors when a collection field is named nodeName. ([#10067](https://github.com/nocobase/nocobase/pull/10067)) by @katherinehhh
  - Fixed workflow v2 variable editors to preserve saved variable pills, disabled states, and operator labels consistently across trigger, filter, and field assignment forms. ([#10041](https://github.com/nocobase/nocobase/pull/10041)) by @Molunerfinn
  - Fixed an issue where v2 workflow assigned fields could still be edited in read-only executed workflow versions. ([#10014](https://github.com/nocobase/nocobase/pull/10014)) by @katherinehhh
  - Fix workflow execution revision navigation so creating a new version after manual execution opens the correct workflow page in both legacy and modern shells. ([#9955](https://github.com/nocobase/nocobase/pull/9955)) by @Molunerfinn
- **[flow-engine]** Fixed an issue where users could type extra text after selecting a variable in single-value variable inputs. ([#10050](https://github.com/nocobase/nocobase/pull/10050)) by @katherinehhh
- **[AI employees]** Fixed an error when sending files pasted into the AI employee chat input ([#10106](https://github.com/nocobase/nocobase/pull/10106)) by @cgyrock
- **[Authentication]**

  - Fixed declaration generation errors in the v2 authenticator management page ([#10095](https://github.com/nocobase/nocobase/pull/10095)) by @jiannx
  - Fixed missing saved Authenticator settings when editing authenticators in the v2 authentication manager. ([#10091](https://github.com/nocobase/nocobase/pull/10091)) by @jiannx
- **[Notification manager]**

  - Fix receiver selection saving user IDs as text ([#10093](https://github.com/nocobase/nocobase/pull/10093)) by @zhangzhonghe
  - Fix incorrect workflow variables shown in CC configuration ([#9937](https://github.com/nocobase/nocobase/pull/9937)) by @zhangzhonghe
- **[Workflow: JSON variable mapping]** Fix an error when selecting loop scope variables in the JSON variable mapping workflow node. ([#10094](https://github.com/nocobase/nocobase/pull/10094)) by @Molunerfinn
- **[UI layout]** Fix the Mobile settings link losing the current sub-application path ([#10078](https://github.com/nocobase/nocobase/pull/10078)) by @zhangzhonghe
- **[Workflow]**

  - Workflow form controls now correctly inherit the disabled state when viewing executed workflows. ([#10079](https://github.com/nocobase/nocobase/pull/10079)) by @Molunerfinn
  - Refresh the workflow canvas after updating trigger configuration ([#10068](https://github.com/nocobase/nocobase/pull/10068)) by @zhangzhonghe
  - Fixed workflow v2 condition operands to stay on one row by default and wrap correctly when selected variable paths are too long. ([#10033](https://github.com/nocobase/nocobase/pull/10033)) by @Molunerfinn
  - Fix display and detail loading issues in the workflow v2 task center ([#10001](https://github.com/nocobase/nocobase/pull/10001)) by @zhangzhonghe
  - Fix untranslated workflow result labels and oversized CC configuration dialogs ([#9977](https://github.com/nocobase/nocobase/pull/9977)) by @zhangzhonghe
  - Fix workflow context mismatches across bundles so branches and some variable pickers work correctly in legacy workflow pages. ([#9951](https://github.com/nocobase/nocobase/pull/9951)) by @Molunerfinn
  - Fix the issue where in-app message content cannot be configured in v2 workflows ([#9885](https://github.com/nocobase/nocobase/pull/9885)) by @zhangzhonghe
  - Fix issues after migrated client to v2 ([#9929](https://github.com/nocobase/nocobase/pull/9929)) by @mytharcher
  - Restored debounced remote search for workflow collection trigger manual execution and aligned the selector with the v1 200-record fetch behavior. ([#9870](https://github.com/nocobase/nocobase/pull/9870)) by @Molunerfinn
  - Fixed the workflow v2 add-node menu so unavailable node types are disabled according to workflow and branch rules ([#9855](https://github.com/nocobase/nocobase/pull/9855)) by @mytharcher
- **[Workflow: Delay node]** Fix delay node duration input and prevent values below the minimum from being saved. ([#10056](https://github.com/nocobase/nocobase/pull/10056)) by @Molunerfinn
- **[Workflow: Aggregate node]** Fix validation rule to allow null filter ([#10053](https://github.com/nocobase/nocobase/pull/10053)) by @mytharcher
- **[Public forms]** Fix the issue where public forms can still be configured when UI Editor is off ([#10036](https://github.com/nocobase/nocobase/pull/10036)) by @zhangzhonghe
- **[Block: Comment]** Adjusted the default action order for new Comment blocks. ([#9976](https://github.com/nocobase/nocobase/pull/9976)) by @jiannx
- **[Workflow: mailer node]** Fixed workflow v2 test failures caused by missing mocks for trigger workflow action registration. ([#9863](https://github.com/nocobase/nocobase/pull/9863)) by @jiannx
- **[Workflow: JavaScript]** Fixed JavaScript workflow node registration failure in the legacy workflow client. ([#9826](https://github.com/nocobase/nocobase/pull/9826)) by @jiannx
- **[Workflow: Response message]** Migrated the workflow response message node to the v2 canvas and fixed unsupported workflow types being able to add it. ([#9830](https://github.com/nocobase/nocobase/pull/9830)) by @jiannx
- **[File manager]** Fixed 404 errors when uploading files to attachment URL fields in external data sources ([#9809](https://github.com/nocobase/nocobase/pull/9809)) by @2013xile
- **[Verification: TOTP authenticator]** Fixed TOTP authenticator bindings so temporary setup secrets are removed and previously verified codes cannot be reused. by @jiannx
- **[Auth: SAML 2.0]** Fixed SAML automatic sign-in redirects for unauthenticated users in the modern client while preserving the original destination path by @jiannx
- **[AI: Knowledge base]** Added an overwrite option for AI knowledge base workflow document creation, allowing workflows to replace existing documents with the same key. by @cgyrock
- **[Data source: External NocoBase]** Fixed file preview, permanent URL handling, and upload routing for external NocoBase file collections, including S3 Pro uploads by @mytharcher
- **[plugin-service-platform]**

  - Restored licensed plugin downloads from the service platform. by @jiannx
  - Disabled the service platform plugin download endpoint. by @jiannx
- **[Workflow: Subflow]** Fixed workflow title search in the subflow node configuration selector. by @mytharcher
- **[File storage: S3(Pro)]** Fixed S3-compatible file URLs omitting the configured storage path, which caused uploaded logos and attachments to return 404 errors by @mytharcher
- **[Auth: OIDC]** Fixed OIDC automatic login redirects in production builds and retained the original modern-client path after login by @jiannx
- **[Workflow: Approval]**

  - Fix blank approval forms and missing or incorrect action buttons by @zhangzhonghe
  - Fixed premature applicant validation and untranslated role labels in the approval workflow manual execution dialog. by @Molunerfinn
  - Fix the approval workflow task title remaining editable in executed workflow configurations after production builds. by @Molunerfinn
  - Allow users to view approval interfaces and cards after a workflow has been executed by @zhangzhonghe
  - Fix workflow form action buttons responding in configuration dialogs by @zhangzhonghe
  - Fix display and action issues in approval initiator interfaces by @zhangzhonghe
  - Close the Apply new drawer when opening an approval form by @zhangzhonghe
  - Fix an error that could prevent V2 pages from opening when approval and notification plugins are enabled by @zhangzhonghe
  - Fix approval task form and action issues in the workflow v2 task center by @zhangzhonghe
  - Fix v2 approval subtables not displaying correctly in details by @zhangzhonghe
  - Fix missing processed approval details in v2 task detail popups by @zhangzhonghe
  - Fix empty approval interfaces and fixed assignee IDs by @zhangzhonghe
  - Fix the issue where approval tables appear in the block data source list by @zhangzhonghe
  - Fix issues involved by migrating to client v2 by @mytharcher
  - Fix the error when configuring approval workflow conditions by @zhangzhonghe
  - Guide users to V1 pages when approval interfaces cannot be used in V2 by @zhangzhonghe
  - Fix approval assignee sorting and hide unsupported legacy configuration entries by @zhangzhonghe
  - Fix the error when opening CC node settings by @zhangzhonghe
  - Fix missing approval data on approval task cards by @zhangzhonghe
- **[Collection field: Signature]** Fix client-v2 signature field file collection selector localization and option filtering. by @katherinehhh
- **[WeCom]** Fixed WeCom notification channels not saving the selected authenticator. by @jiannx

### v2.2.0-beta.14

*Release date: 2026-07-15*

### 🎉 New Features

- **[Auth: LDAP]** Added LDAP user data sync source support, including optional AD department synchronization. by @chenzhizdt

### 🚀 Improvements

- **[ai]** Reduced main-process memory usage when parsing uploaded knowledge base documents. ([#10083](https://github.com/nocobase/nocobase/pull/10083)) by @cgyrock
- **[undefined]** File URLs now use stable NocoBase access URLs so permissions can be checked before redirecting to storage. ([#10047](https://github.com/nocobase/nocobase/pull/10047)) by @mytharcher
- **[Flow engine]** Support multi portals for ui build apis. ([#10072](https://github.com/nocobase/nocobase/pull/10072)) by @gchust
- **[File storage: S3(Pro)]** S3 Pro uploads now return the created file record with permanent file URLs. by @mytharcher
- **[RabbitMQ queue adapter]** Enhance the channel management and error recovery capabilities of the RabbitMQ adapter by @sdp-ncd

### 🐛 Bug Fixes

- **[client-v2]**

  - Fixed other column content showing through fixed v2 table columns when quick edit is enabled. ([#10076](https://github.com/nocobase/nocobase/pull/10076)) by @katherinehhh
  - Fixed v2 scan input camera preview layout issues on iOS Chrome. ([#10081](https://github.com/nocobase/nocobase/pull/10081)) by @katherinehhh
- **[Workflow]**

  - Fixed hidden fields being included when workflow serializes appended association data ([#10086](https://github.com/nocobase/nocobase/pull/10086)) by @mytharcher
  - Fixed manual workflow execution returning an error when a valid request does not start an execution. ([#10049](https://github.com/nocobase/nocobase/pull/10049)) by @mytharcher
- **[Collection field: Markdown(Vditor)]** Fixed iframe sanitization for v1 Markdown rendering and editing. ([#10096](https://github.com/nocobase/nocobase/pull/10096)) by @katherinehhh
- **[Action: Batch edit]** Fixed Markdown editor initialization failure when a V2 form includes a `process` field. ([#10080](https://github.com/nocobase/nocobase/pull/10080)) by @katherinehhh
- **[UI layout]** Fixed the Mobile settings link opening the main application from a sub-application. ([#10075](https://github.com/nocobase/nocobase/pull/10075)) by @katherinehhh
- **[AI employees]**

  - Fixed AI tool-call approvals to authorize against the message's owning conversation before updating decisions. ([#10077](https://github.com/nocobase/nocobase/pull/10077)) by @cgyrock
  - Fixed AI attachment handling to avoid trusting client-provided file paths or URLs. ([#10037](https://github.com/nocobase/nocobase/pull/10037)) by @cgyrock
- **[User data synchronization]** Fixed external department sync order so child departments can be reparented correctly when their parent is synced later. ([#10028](https://github.com/nocobase/nocobase/pull/10028)) by @chenzhizdt
- **[Data source: External NocoBase]**

  - Fixed workflow AI employees being unable to read attachments from External NocoBase data sources by @2013xile
  - Fixed file preview, permanent URL handling, and upload routing for external NocoBase file collections, including S3 Pro uploads by @mytharcher
- **[Workflow: Approval]** Filter approval file associations by current user ownership when the temporary switch is enabled. by @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### v2.2.0-alpha.9

*Release date: 2026-07-16*

### 🎉 New Features

- **[client-v2]** Tabs on pages, subpages and pop-ups support the configuration of linkage rules ([#10099](https://github.com/nocobase/nocobase/pull/10099)) by @zhangzhonghe
- **[AI employees]** Added RunJS APIs for triggering AI employee tasks from JS blocks. ([#10061](https://github.com/nocobase/nocobase/pull/10061)) by @cgyrock
- **[DingTalk]** Added DingTalk Stream mode support for organization event synchronization. by @chenzhizdt
- **[Auth: LDAP]** Added LDAP user data sync source support, including optional AD department synchronization. by @chenzhizdt

### 🚀 Improvements

- **[undefined]**

  - File URLs now use stable NocoBase access URLs so permissions can be checked before redirecting to storage. ([#10047](https://github.com/nocobase/nocobase/pull/10047)) by @mytharcher
  - File URLs now use stable NocoBase access URLs so permissions can be checked before redirecting to storage. ([#10103](https://github.com/nocobase/nocobase/pull/10103)) by @mytharcher
  - Updated the data source documentation structure, links, and localized pages. ([#10108](https://github.com/nocobase/nocobase/pull/10108)) by @hongboji
    Reference: [Data sources](docs/docs/en/data-sources/index.md)
- **[ai]** Reduced main-process memory usage when parsing uploaded knowledge base documents. ([#10083](https://github.com/nocobase/nocobase/pull/10083)) by @cgyrock
- **[Workflow: Manual node]** Show manual workflow tasks in the V2 task center and guide users to the legacy page for processing ([#10085](https://github.com/nocobase/nocobase/pull/10085)) by @zhangzhonghe
- **[File storage: S3(Pro)]**

  - S3 Pro uploads now return the created file record with permanent file URLs. by @mytharcher
  - S3 Pro uploads now return the created file record with permanent file URLs. by @mytharcher
- **[RabbitMQ queue adapter]** Enhance the channel management and error recovery capabilities of the RabbitMQ adapter by @sdp-ncd
- **[Email manager]** Moved the department-based mail viewing option to the V1 general mail settings page, prevented service credential saves from overwriting it, and placed V2 General settings before Service provider settings. by @jiannx

### 🐛 Bug Fixes

- **[client-v2]**

  - Fixed automatic SSO redirect providers failing to preserve authentication order in production builds ([#10100](https://github.com/nocobase/nocobase/pull/10100)) by @jiannx
  - Corrected the Urdu label and added a separate Uzbek option to the System Settings language list. ([#10090](https://github.com/nocobase/nocobase/pull/10090)) by @hongboji
  - Workflow filters now preserve workflow variable expressions and show a clear parsing error when variable metadata cannot be resolved. ([#10088](https://github.com/nocobase/nocobase/pull/10088)) by @Molunerfinn
  - Fixed v2 scan input camera preview layout issues on iOS Chrome. ([#10081](https://github.com/nocobase/nocobase/pull/10081)) by @katherinehhh
  - Fixed other column content showing through fixed v2 table columns when quick edit is enabled. ([#10076](https://github.com/nocobase/nocobase/pull/10076)) by @katherinehhh
- **[Authentication]**

  - Fixed declaration generation errors in the v2 authenticator management page ([#10095](https://github.com/nocobase/nocobase/pull/10095)) by @jiannx
  - Fixed missing saved Authenticator settings when editing authenticators in the v2 authentication manager. ([#10091](https://github.com/nocobase/nocobase/pull/10091)) by @jiannx
- **[AI employees]**

  - Fixed an error when sending files pasted into the AI employee chat input ([#10106](https://github.com/nocobase/nocobase/pull/10106)) by @cgyrock
  - Fixed AI tool-call approvals to authorize against the message's owning conversation before updating decisions. ([#10077](https://github.com/nocobase/nocobase/pull/10077)) by @cgyrock
  - Fixed AI attachment handling to avoid trusting client-provided file paths or URLs. ([#10037](https://github.com/nocobase/nocobase/pull/10037)) by @cgyrock
- **[Collection field: Markdown(Vditor)]** Fixed iframe sanitization for v1 Markdown rendering and editing. ([#10096](https://github.com/nocobase/nocobase/pull/10096)) by @katherinehhh
- **[Workflow]**

  - Fixed hidden fields being included when workflow serializes appended association data ([#10086](https://github.com/nocobase/nocobase/pull/10086)) by @mytharcher
  - Workflow form controls now correctly inherit the disabled state when viewing executed workflows. ([#10079](https://github.com/nocobase/nocobase/pull/10079)) by @Molunerfinn
  - Refresh the workflow canvas after updating trigger configuration ([#10068](https://github.com/nocobase/nocobase/pull/10068)) by @zhangzhonghe
- **[Notification manager]** Fix receiver selection saving user IDs as text ([#10093](https://github.com/nocobase/nocobase/pull/10093)) by @zhangzhonghe
- **[UI layout]**

  - Fix the Mobile settings link losing the current sub-application path ([#10078](https://github.com/nocobase/nocobase/pull/10078)) by @zhangzhonghe
  - Fixed the Mobile settings link opening the main application from a sub-application. ([#10075](https://github.com/nocobase/nocobase/pull/10075)) by @katherinehhh
- **[Workflow: JSON variable mapping]** Fix an error when selecting loop scope variables in the JSON variable mapping workflow node. ([#10094](https://github.com/nocobase/nocobase/pull/10094)) by @Molunerfinn
- **[User data synchronization]** Fixed external department sync order so child departments can be reparented correctly when their parent is synced later. ([#10028](https://github.com/nocobase/nocobase/pull/10028)) by @chenzhizdt
- **[Action: Batch edit]** Fixed Markdown editor initialization failure when a V2 form includes a `process` field. ([#10080](https://github.com/nocobase/nocobase/pull/10080)) by @katherinehhh
- **[Verification: TOTP authenticator]** Fixed TOTP authenticator bindings so temporary setup secrets are removed and previously verified codes cannot be reused. by @jiannx
- **[Data source: External NocoBase]**

  - Fixed workflow AI employees being unable to read attachments from External NocoBase data sources by @2013xile
  - Fixed file preview, permanent URL handling, and upload routing for external NocoBase file collections, including S3 Pro uploads by @mytharcher
  - Fixed file preview, permanent URL handling, and upload routing for external NocoBase file collections, including S3 Pro uploads by @mytharcher
- **[Auth: SAML 2.0]** Fixed SAML automatic sign-in redirects for unauthenticated users in the modern client while preserving the original destination path by @jiannx
- **[File storage: S3(Pro)]** Fixed S3-compatible file URLs omitting the configured storage path, which caused uploaded logos and attachments to return 404 errors by @mytharcher
- **[Auth: OIDC]** Fixed OIDC automatic login redirects in production builds and retained the original modern-client path after login by @jiannx
- **[Workflow: Approval]**

  - Fix the approval workflow task title remaining editable in executed workflow configurations after production builds. by @Molunerfinn
  - Fixed premature applicant validation and untranslated role labels in the approval workflow manual execution dialog. by @Molunerfinn
  - Fix workflow form action buttons responding in configuration dialogs by @zhangzhonghe
  - Allow users to view approval interfaces and cards after a workflow has been executed by @zhangzhonghe
  - Filter approval file associations by current user ownership when the temporary switch is enabled. by @mytharcher
  - Fix display and action issues in approval initiator interfaces by @zhangzhonghe
  - Fix blank approval forms and missing or incorrect action buttons by @zhangzhonghe
  - Fix an error that could prevent V2 pages from opening when approval and notification plugins are enabled by @zhangzhonghe
  - Guide users to V1 pages when approval interfaces cannot be used in V2 by @zhangzhonghe
- **[WeCom]** Fixed WeCom notification channels not saving the selected authenticator. by @jiannx
