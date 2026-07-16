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

