### 🎉 New Features

- **[client-v2]** Tabs on pages, subpages and pop-ups support the configuration of linkage rules ([#10099](https://github.com/nocobase/nocobase/pull/10099)) by @zhangzhonghe

- **[AI employees]** Added RunJS APIs for triggering AI employee tasks from JS blocks. ([#10061](https://github.com/nocobase/nocobase/pull/10061)) by @cgyrock

- **[DingTalk]** Added DingTalk Stream mode support for organization event synchronization. by @chenzhizdt

- **[Auth: LDAP]** Added LDAP user data sync source support, including optional AD department synchronization. by @chenzhizdt

### 🚀 Improvements

- **[undefined]**
  - File URLs now use stable NocoBase access URLs so permissions can be checked before redirecting to storage. ([#10047](https://github.com/nocobase/nocobase/pull/10047)) by @mytharcher

  - File URLs now use stable NocoBase access URLs so permissions can be checked before redirecting to storage. ([#10103](https://github.com/nocobase/nocobase/pull/10103)) by @mytharcher

  - File URLs now use stable NocoBase access URLs so permissions can be checked before redirecting to storage. ([#10047](https://github.com/nocobase/nocobase/pull/10047)) by @mytharcher

  - Updated the data source documentation structure, links, and localized pages. ([#10108](https://github.com/nocobase/nocobase/pull/10108)) by @hongboji
Reference: [Data sources](docs/docs/en/data-sources/index.md)
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

