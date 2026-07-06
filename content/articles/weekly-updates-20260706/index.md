Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase is currently updated across three branches: `main`, `next`, and `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: The most stable version to date, recommended for installation.
* `next`: Beta version, contains upcoming new features and has been preliminarily tested. There might be some known or unknown issues. It is mainly used to collect feedback from test users and further optimize features. Ideal for test users who want to experience new features early and provide feedback.
* `develop`: Alpha version, contains the latest feature code, may be incomplete or unstable, and is mainly used for internal development and rapid iteration. Suited for technical users interested in cutting-edge product capabilities, but not recommended for production use.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### v2.1.19

*Release date: 2026-07-03*

### 🐛 Bug Fixes

- **[cli]** Fixed revision creation events failing on RabbitMQ brokers that reject `:` and `@` in queue names. ([#9989](https://github.com/nocobase/nocobase/pull/9989)) by @cgyrock
- **[client-v2]**

  - Fixed iframe sanitization for v2 Markdown rendering and editing. ([#9986](https://github.com/nocobase/nocobase/pull/9986)) by @katherinehhh
  - Fixed routed popup creation forms losing prefilled field values such as Calendar V2 start and end dates. ([#9874](https://github.com/nocobase/nocobase/pull/9874)) by @jiannx
  - Fixed V2 table data scope filters so missing URL query parameters no longer block table data queries. ([#9869](https://github.com/nocobase/nocobase/pull/9869)) by @jiannx
  - Fixed an issue where multiline text field values could not be set via ctx.setFormValues. ([#9959](https://github.com/nocobase/nocobase/pull/9959)) by @gchust
- **[AI employees]**

  - Fixed AI checkpoint cleanup failures in underscored database environments. ([#9982](https://github.com/nocobase/nocobase/pull/9982)) by @cgyrock
  - Fixed AI employee workflow nodes failing to resume correctly in loops after a previous AI employee tool call. ([#9980](https://github.com/nocobase/nocobase/pull/9980)) by @cgyrock
- **[File manager]** Hidden the file manager attachments list API and return 404 when it is requested. ([#9978](https://github.com/nocobase/nocobase/pull/9978)) by @mytharcher
- **[Workflow]** Fixed an issue where workflow execution node results could remain stuck in a loading state. ([#9991](https://github.com/nocobase/nocobase/pull/9991)) by @mytharcher
- **[Backup manager]**

  - Fixed PostgreSQL and Kingbase backup restore command execution when paths or arguments contain spaces or special characters. ([#9946](https://github.com/nocobase/nocobase/pull/9946)) by @cgyrock
  - Fixed an issue where newly created backup files could not be uploaded to cloud storage. ([#9981](https://github.com/nocobase/nocobase/pull/9981)) by @gchust
- **[Data visualization]** Fixed an issue where chart blocks would trigger unnecessary refreshes when closing a popup. ([#9970](https://github.com/nocobase/nocobase/pull/9970)) by @gchust
- **[UI templates]** Fixed an issue where the field template menu was incorrectly displayed in subforms. ([#9960](https://github.com/nocobase/nocobase/pull/9960)) by @gchust
- **[Mobile (deprecated)]** Fix responsive v1 admin pages so view actions open as subpages and select fields use mobile popups ([#9974](https://github.com/nocobase/nocobase/pull/9974)) by @zhangzhonghe
- **[Version control]** Fixed version-control revision creation on RabbitMQ brokers that reject `:` and `@` in queue names. by @cgyrock
- **[Workflow: Approval]** Fix the error that may occur when opening approval details without configuration permissions by @zhangzhonghe

### v2.1.18

*Release date: 2026-07-02*

### 🚀 Improvements

- **[cli]** Support manual Nginx/Caddy proxy config generation, allow Docker deployments without bundled Nginx, and align proxy and CDN-related runtime configuration. ([#9943](https://github.com/nocobase/nocobase/pull/9943)) by @chenos
- **[undefined]** Clarified the security guidance for PDF previews using external storage. ([#9901](https://github.com/nocobase/nocobase/pull/9901)) by @mytharcher
  Reference: [File Preview](https://github.com/nocobase/nocobase/blob/docs/file-preview-security/docs/docs/en/file-manager/file-preview/index.md)
- **[utils]** Added warnings for server-side outbound requests that target potential SSRF-risk addresses when `SERVER_REQUEST_WHITELIST` is not configured. ([#9966](https://github.com/nocobase/nocobase/pull/9966)) by @mytharcher
  Reference: [Environment Variables](https://docs.nocobase.com/get-started/installation/env), [Global Environment Variables](https://docs.nocobase.com/api/app/env)
- **[AI: Knowledge base]** Added ZIP filename encoding options for knowledge base document uploads to avoid garbled filenames in ZIP archives created with non-UTF-8 encodings. by @cgyrock

### 🐛 Bug Fixes

- **[client-v2]** Fix the issue where route subpages are blank or use incorrect spacing after refresh ([#9961](https://github.com/nocobase/nocobase/pull/9961)) by @zhangzhonghe
- **[Workflow]** Reduced unnecessary workflow dispatcher DB fetch retries under concurrent queue processing. ([#9953](https://github.com/nocobase/nocobase/pull/9953)) by @mytharcher
- **[Action: Export records]** Fixed XLSX exports so text-like field values that start with formula characters are escaped before being opened in Excel. ([#9973](https://github.com/nocobase/nocobase/pull/9973)) by @mytharcher
- **[AI employees]** Fixed LLM providers falling back to their default Base URL when the custom Base URL field is cleared. ([#9958](https://github.com/nocobase/nocobase/pull/9958)) by @cgyrock
- **[Data source: External NocoBase]** Fixed external NocoBase attachment uploads and updates in attachment fields by @2013xile

### v2.1.17

*Release date: 2026-07-01*

### 🐛 Bug Fixes

- **[flow-engine]** Fixed an issue where ctx.auth.user would not update after switching users. ([#9964](https://github.com/nocobase/nocobase/pull/9964)) by @gchust
- **[Mobile (deprecated)]** Fix the issue where mobile pages and public forms cannot be scrolled on mobile devices ([#9898](https://github.com/nocobase/nocobase/pull/9898)) by @zhangzhonghe

### v2.1.15

*Release date: 2026-06-30*

### 🐛 Bug Fixes

- **[undefined]** Fixed the Version control documentation in non-Chinese languages so the Professional Edition label is displayed. ([#9944](https://github.com/nocobase/nocobase/pull/9944)) by @cgyrock
- **[AI employees]** Fixed workflow AI employee tasks failing after repeated tool calls reached the graph recursion limit. ([#9945](https://github.com/nocobase/nocobase/pull/9945)) by @cgyrock
- **[Action: Custom request]** Fixed custom requests allowing runtime options to override the saved request target. ([#9904](https://github.com/nocobase/nocobase/pull/9904)) by @mytharcher
- **[Data source manager]** Fixed v2 collection field management so template-protected fields cannot be deleted and inherited fields support view / override behavior consistent with v1. ([#9940](https://github.com/nocobase/nocobase/pull/9940)) by @katherinehhh
- **[Migration manager]** Fixed garbled text that could occur when migrating MySQL data with non-ASCII content by @2013xile
- **[Workflow: Approval]** Fix the error when adding Original application content to approval nodes by @zhangzhonghe

### v2.1.14

*Release date: 2026-06-29*

### 🎉 New Features

- **[AI employees]** Added Mistral AI as an LLM provider for AI services. ([#9925](https://github.com/nocobase/nocobase/pull/9925)) by @cgyrock

### 🚀 Improvements

- **[cli]** support OAuth device authorization flow ([#9922](https://github.com/nocobase/nocobase/pull/9922)) by @chenos

### 🐛 Bug Fixes

- **[client-v2]**

  - Fixed long selected labels in record select fields so they truncate cleanly without squeezing the select control. ([#9939](https://github.com/nocobase/nocobase/pull/9939)) by @katherinehhh
  - Fixed table datetime columns losing their configured time display after pagination or refresh. ([#9935](https://github.com/nocobase/nocobase/pull/9935)) by @katherinehhh
- **[Users]** Removed the default password from the add-user form in Users & Permissions. ([#9915](https://github.com/nocobase/nocobase/pull/9915)) by @jiannx
- **[Data source: External NocoBase]** Fixed NocoBase external data sources failing to load when connection options include runtime objects by @2013xile
- **[Record history]** Fixed external NocoBase data source loading failure when record history is enabled by @2013xile
- **[App supervisor]** Fixed the app supervisor Applications tab registration in Client V2 by @2013xile

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### v2.2.0-beta.8

*Release date: 2026-06-29*

### 🚀 Improvements

- **[cli]** Support OAuth device authorization flow ([#9922](https://github.com/nocobase/nocobase/pull/9922)) by @chenos
- **[client-v2]** Support configure js block should be wrapped by block card. ([#9897](https://github.com/nocobase/nocobase/pull/9897)) by @gchust
- **[flow-engine]** Automatically refreshed related data blocks when RunJS closes a popup after updating data through resource APIs ([#9873](https://github.com/nocobase/nocobase/pull/9873)) by @gchust
- **[Form drafts]** Migrate plugin form drafts to client v2. ([#9910](https://github.com/nocobase/nocobase/pull/9910)) by @gchust

### 🐛 Bug Fixes

- **[client-v2]**

  - Fixed link actions becoming invisible on mobile embedded pages when icon-only mode is enabled but no icon is configured. ([#9921](https://github.com/nocobase/nocobase/pull/9921)) by @katherinehhh
  - Fixed a brief no-pages prompt flash when refreshing in UI Editor mode. ([#9918](https://github.com/nocobase/nocobase/pull/9918)) by @katherinehhh
  - Fixed v2 form submit success redirects so they can reference the saved response record. ([#9907](https://github.com/nocobase/nocobase/pull/9907)) by @katherinehhh
  - Fixed link actions becoming invisible on mobile embedded pages when icon-only mode is enabled but no icon is configured. ([#9919](https://github.com/nocobase/nocobase/pull/9919)) by @katherinehhh
  - Fixed v2 table row action buttons changing row height. ([#9866](https://github.com/nocobase/nocobase/pull/9866)) by @jiannx
  - Fixed table blocks failing when a configured drag sorting field has been deleted, and allowed clearing the drag sorting field setting. ([#9867](https://github.com/nocobase/nocobase/pull/9867)) by @jiannx
- **[flow-engine]**

  - Fix the issue where mobile popups with long content cannot scroll ([#9871](https://github.com/nocobase/nocobase/pull/9871)) by @zhangzhonghe
  - Fixed an issue where some parameters of ctx.openView in RunJS would not take effect. ([#9883](https://github.com/nocobase/nocobase/pull/9883)) by @gchust
- **[cli]** support pnpm and yarn global self update ([#9912](https://github.com/nocobase/nocobase/pull/9912)) by @chenos
- **[client]** Corrected several copy and typo issues across locales, related UI text, and documentation. ([#9905](https://github.com/nocobase/nocobase/pull/9905)) by @Molunerfinn
- **[Flow engine]** Fixed the issue where mobile page can't be created by flow surface api. ([#9911](https://github.com/nocobase/nocobase/pull/9911)) by @gchust
- **[AI employees]**

  - Fixed the AI datasource card list so it adapts responsively to different viewport widths. ([#9924](https://github.com/nocobase/nocobase/pull/9924)) by @cgyrock
  - Fixed AI employee chat failures caused by replaying malformed tool calls. ([#9900](https://github.com/nocobase/nocobase/pull/9900)) by @cgyrock
- **[Backup manager]** Fixed inconsistent bold labels on the v2 Backup manager settings page. ([#9908](https://github.com/nocobase/nocobase/pull/9908)) by @katherinehhh
- **[Block: iframe]** Fixed 403 errors for normal users when viewing v2 iframe blocks in HTML mode. ([#9889](https://github.com/nocobase/nocobase/pull/9889)) by @jiannx
- **[Data source: External NocoBase]** Fixed NocoBase external data sources failing to load when connection options include runtime objects by @2013xile
- **[AI: Knowledge base]** Fixed layout overflow in version control and knowledge base document lists when content or viewport size is constrained. by @cgyrock
- **[Migration manager]** Fixed migration rules for database-synced collections by @2013xile
- **[Record history]**

  - Fixed an issue where record history could fail to save changes for some collections by @2013xile
  - Fixed external NocoBase data source loading failure when record history is enabled by @2013xile
- **[App supervisor]** Fixed the app supervisor Applications tab registration in Client V2 by @2013xile
- **[WeCom]** Fixed a blank flash when switching route menu items with the WeCom plugin enabled in Client V2 by @2013xile

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### v2.2.0-alpha.6

*Release date: 2026-07-05*

### 🚀 Improvements

- **[cli]** Refactor CLI setup startup to reuse `nb app start`, normalize API base path redirects, persist shared env proxy defaults, and rebuild Docker proxy containers when published ports change. ([#9997](https://github.com/nocobase/nocobase/pull/9997)) by @chenos

### v2.2.0-alpha.5

*Release date: 2026-07-04*

### 🎉 New Features

- **[client-v2]** Added configurable App and Portal entry support for V2 action panels and the left-top app switcher. ([#9893](https://github.com/nocobase/nocobase/pull/9893)) by @katherinehhh
- **[Portal manager]** Added configurable App and Portal entries for the V2 action panel and app switcher. by @katherinehhh

### 🚀 Improvements

- **[cli]** Improved the Docker CLI setup by supporting configurable default NocoBase image registry/variant, fixing proxy and `no-nginx` image port compatibility, and adding Docker Nginx/Caddy installation guides. ([#9972](https://github.com/nocobase/nocobase/pull/9972)) by @chenos
- **[undefined]**

  - Clarified the security guidance for PDF previews using external storage. ([#9901](https://github.com/nocobase/nocobase/pull/9901)) by @mytharcher
    Reference: [File Preview](https://github.com/nocobase/nocobase/blob/docs/file-preview-security/docs/docs/en/file-manager/file-preview/index.md)
  - Refined Russian documentation translation for improved wording, readability, and terminology consistency. ([#9942](https://github.com/nocobase/nocobase/pull/9942)) by @sembaev-a-a
- **[utils]** Added warnings for server-side outbound requests that target potential SSRF-risk addresses when `SERVER_REQUEST_WHITELIST` is not configured. ([#9966](https://github.com/nocobase/nocobase/pull/9966)) by @mytharcher
  Reference: [Environment Variables](https://docs.nocobase.com/get-started/installation/env), [Global Environment Variables](https://docs.nocobase.com/api/app/env)
- **[AI employees]**

  - Removed the deprecated Datasource entry from AI employee settings and context selection in the v2 UI. ([#9988](https://github.com/nocobase/nocobase/pull/9988)) by @cgyrock
  - Migrated the AI employee plugin to client-v2. ([#9794](https://github.com/nocobase/nocobase/pull/9794)) by @cgyrock
- **[Data source manager]** Display unsupported external data source fields in V2 Configure fields, and align backup restore form label styles. ([#9983](https://github.com/nocobase/nocobase/pull/9983)) by @katherinehhh
- **[Users]** Improve client-v2 test coverage for the users plugin. ([#9975](https://github.com/nocobase/nocobase/pull/9975)) by @jiannx
- **[AI: Knowledge base]**

  - Added ZIP filename encoding options for knowledge base document uploads to avoid garbled filenames in ZIP archives created with non-UTF-8 encodings. by @cgyrock
  - Migrated the AI knowledge base settings pages to the v2 client and fixed layout and loading issues in knowledge base and vector store pages. by @cgyrock
- **[Email manager]** Moved the department-based mail viewing option to the general mail settings page. by @jiannx
- **[App supervisor]** Hid the standalone V2 Applications block while keeping its settings page available internally. by @katherinehhh

### 🐛 Bug Fixes

- **[cli]** Fixed revision creation events failing on RabbitMQ brokers that reject `:` and `@` in queue names. ([#9989](https://github.com/nocobase/nocobase/pull/9989)) by @cgyrock
- **[client-v2]**

  - Fixed iframe sanitization for v2 Markdown rendering and editing. ([#9986](https://github.com/nocobase/nocobase/pull/9986)) by @katherinehhh
  - Fixed V2 table data scope filters so missing URL query parameters no longer block table data queries. ([#9869](https://github.com/nocobase/nocobase/pull/9869)) by @jiannx
  - Fix the issue where opening an empty V2 Group menu item shows 404 ([#9896](https://github.com/nocobase/nocobase/pull/9896)) by @zhangzhonghe
  - Fixed an issue where multiline text field values could not be set via ctx.setFormValues. ([#9959](https://github.com/nocobase/nocobase/pull/9959)) by @gchust
  - Fixed routed popup creation forms losing prefilled field values such as Calendar V2 start and end dates. ([#9874](https://github.com/nocobase/nocobase/pull/9874)) by @jiannx
  - Fix the issue where route subpages are blank or use incorrect spacing after refresh ([#9961](https://github.com/nocobase/nocobase/pull/9961)) by @zhangzhonghe
- **[Action: Export records]**

  - Fixed a crash when dragging v2 exportable fields after selecting relation fields. ([#9995](https://github.com/nocobase/nocobase/pull/9995)) by @katherinehhh
  - Fixed XLSX exports so text-like field values that start with formula characters are escaped before being opened in Excel. ([#9973](https://github.com/nocobase/nocobase/pull/9973)) by @mytharcher
- **[Workflow]**

  - Fixed an issue where workflow execution node results could remain stuck in a loading state. ([#9991](https://github.com/nocobase/nocobase/pull/9991)) by @mytharcher
  - Reduced unnecessary workflow dispatcher DB fetch retries under concurrent queue processing. ([#9953](https://github.com/nocobase/nocobase/pull/9953)) by @mytharcher
- **[Backup manager]**

  - Fixed an issue where newly created backup files could not be uploaded to cloud storage. ([#9981](https://github.com/nocobase/nocobase/pull/9981)) by @gchust
  - Fixed PostgreSQL and Kingbase backup restore command execution when paths or arguments contain spaces or special characters. ([#9946](https://github.com/nocobase/nocobase/pull/9946)) by @cgyrock
- **[AI employees]**

  - Fixed AI employee workflow nodes failing to resume correctly in loops after a previous AI employee tool call. ([#9980](https://github.com/nocobase/nocobase/pull/9980)) by @cgyrock
  - Fixed AI checkpoint cleanup failures in underscored database environments. ([#9982](https://github.com/nocobase/nocobase/pull/9982)) by @cgyrock
- **[UI templates]** Fixed an issue where the field template menu was incorrectly displayed in subforms. ([#9960](https://github.com/nocobase/nocobase/pull/9960)) by @gchust
- **[File manager]** Hidden the file manager attachments list API and return 404 when it is requested. ([#9978](https://github.com/nocobase/nocobase/pull/9978)) by @mytharcher
- **[Block: Comment]** Adjusted the default action order for new Comment blocks. ([#9976](https://github.com/nocobase/nocobase/pull/9976)) by @jiannx
- **[Data visualization]** Fixed an issue where chart blocks would trigger unnecessary refreshes when closing a popup. ([#9970](https://github.com/nocobase/nocobase/pull/9970)) by @gchust
- **[Mobile (deprecated)]** Fix responsive v1 admin pages so view actions open as subpages and select fields use mobile popups ([#9974](https://github.com/nocobase/nocobase/pull/9974)) by @zhangzhonghe
- **[Version control]** Fixed version-control revision creation on RabbitMQ brokers that reject `:` and `@` in queue names. by @cgyrock
- **[Data source: External NocoBase]** Fixed external NocoBase attachment uploads and updates in attachment fields by @2013xile
- **[Workflow: Approval]** Fix the error that may occur when opening approval details without configuration permissions by @zhangzhonghe

### v2.2.0-alpha.4

*Release date: 2026-07-01*

### 🎉 New Features

- **[Block: Comment]**

  - Improved comment block settings with data scope, default sorting, selectable page size, optional last-page jumping, and scalar owner field mapping. ([#9954](https://github.com/nocobase/nocobase/pull/9954)) by @jiannx
  - Added a comments block. ([#9916](https://github.com/nocobase/nocobase/pull/9916)) by @jiannx
- **[AI employees]** Added Mistral AI as an LLM provider for AI services. ([#9925](https://github.com/nocobase/nocobase/pull/9925)) by @cgyrock
- **[Record history]** Added client v2 support for the record history plugin. by @jiannx

### 🚀 Improvements

- **[cli]** Support manual Nginx/Caddy proxy config generation, allow Docker deployments without bundled Nginx, and align proxy and CDN-related runtime configuration. ([#9943](https://github.com/nocobase/nocobase/pull/9943)) by @chenos
- **[Workflow: JavaScript]** Aligned v2 workflow request and mailer node configuration fields with legacy layout and attachment variable behavior. ([#9952](https://github.com/nocobase/nocobase/pull/9952)) by @jiannx
- **[UI layout]** Improved the v2 mobile tab bar so crowded tabs scroll horizontally instead of overlapping. ([#9949](https://github.com/nocobase/nocobase/pull/9949)) by @katherinehhh
- **[Workflow: Aggregate node]** Improved v2 workflow field selection for update and aggregate query nodes, including safer associated collection selection in aggregate query nodes. ([#9938](https://github.com/nocobase/nocobase/pull/9938)) by @katherinehhh
- **[Block: Comment]** Added the new comment block plugin to the NocoBase preset and marked the legacy comments plugin as deprecated. ([#9936](https://github.com/nocobase/nocobase/pull/9936)) by @jiannx
- **[Logger]** Added the Logger settings page to the client v2 runtime. ([#9933](https://github.com/nocobase/nocobase/pull/9933)) by @jiannx
- **[HTTP request encryption]** Added v2 client support for HTTP request encryption so query parameters continue to be encrypted in the v2 client. by @jiannx
- **[Workflow: Database transaction node]** Improved the v2 workflow database transaction node layout so branch labels and the commit marker have better spacing. by @katherinehhh

### 🐛 Bug Fixes

- **[flow-engine]** Fixed an issue where ctx.auth.user would not update after switching users. ([#9964](https://github.com/nocobase/nocobase/pull/9964)) by @gchust
- **[client-v2]**

  - Fix workflow execution revision navigation so creating a new version after manual execution opens the correct workflow page in both legacy and modern shells. ([#9955](https://github.com/nocobase/nocobase/pull/9955)) by @Molunerfinn
  - Fixed table datetime columns losing their configured time display after pagination or refresh. ([#9935](https://github.com/nocobase/nocobase/pull/9935)) by @katherinehhh
  - Fixed long selected labels in record select fields so they truncate cleanly without squeezing the select control. ([#9939](https://github.com/nocobase/nocobase/pull/9939)) by @katherinehhh
  - Fixed V2 admin group routes showing 404 when the group has no available child menu page. ([#9932](https://github.com/nocobase/nocobase/pull/9932)) by @katherinehhh
- **[undefined]** Fixed the Version control documentation in non-Chinese languages so the Professional Edition label is displayed. ([#9944](https://github.com/nocobase/nocobase/pull/9944)) by @cgyrock
- **[AI employees]**

  - Fixed LLM providers falling back to their default Base URL when the custom Base URL field is cleared. ([#9958](https://github.com/nocobase/nocobase/pull/9958)) by @cgyrock
  - Fixed workflow AI employee tasks failing after repeated tool calls reached the graph recursion limit. ([#9945](https://github.com/nocobase/nocobase/pull/9945)) by @cgyrock
- **[Action: Custom request]** Fixed custom requests allowing runtime options to override the saved request target. ([#9904](https://github.com/nocobase/nocobase/pull/9904)) by @mytharcher
- **[Mobile (deprecated)]** Fix the issue where mobile pages and public forms cannot be scrolled on mobile devices ([#9898](https://github.com/nocobase/nocobase/pull/9898)) by @zhangzhonghe
- **[Notification manager]** Fix incorrect workflow variables shown in CC configuration ([#9937](https://github.com/nocobase/nocobase/pull/9937)) by @zhangzhonghe
- **[Workflow]**

  - Fix workflow context mismatches across bundles so branches and some variable pickers work correctly in legacy workflow pages. ([#9951](https://github.com/nocobase/nocobase/pull/9951)) by @Molunerfinn
  - Fix issues after migrated client to v2 ([#9929](https://github.com/nocobase/nocobase/pull/9929)) by @mytharcher
  - Fix the issue where in-app message content cannot be configured in v2 workflows ([#9885](https://github.com/nocobase/nocobase/pull/9885)) by @zhangzhonghe
- **[Data source manager]** Fixed v2 collection field management so template-protected fields cannot be deleted and inherited fields support view / override behavior consistent with v1. ([#9940](https://github.com/nocobase/nocobase/pull/9940)) by @katherinehhh
- **[Authentication]** Fixed incorrect redirects after SSO login in v2 sub applications ([#9927](https://github.com/nocobase/nocobase/pull/9927)) by @2013xile
- **[Users]** Removed the default password from the add-user form in Users & Permissions. ([#9915](https://github.com/nocobase/nocobase/pull/9915)) by @jiannx
- **[Flow engine]** Fixed the issue where mobile page can't be created by flow surface api. ([#9911](https://github.com/nocobase/nocobase/pull/9911)) by @gchust
- **[App SSO]** Fixed incorrect App SSO redirects in v2 sub applications by @2013xile
- **[AI: Knowledge base]** Fixed layout overflow in version control and knowledge base document lists when content or viewport size is constrained. by @cgyrock
- **[Data source: External NocoBase]** Fixed NocoBase external data sources failing to load when connection options include runtime objects by @2013xile
- **[Migration manager]** Fixed garbled text that could occur when migrating MySQL data with non-ASCII content by @2013xile
- **[Record history]** Fixed external NocoBase data source loading failure when record history is enabled by @2013xile
- **[Workflow: Approval]**

  - Fix the error when opening CC node settings by @zhangzhonghe
  - Fix the error when adding Original application content to approval nodes by @zhangzhonghe
  - Fix the issue where approval tables appear in the block data source list by @zhangzhonghe
  - Fix issues involved by migrating to client v2 by @mytharcher
- **[App supervisor]**

  - Fixed app visit links losing the v2 path in sub applications by @2013xile
  - Fixed the app supervisor Applications tab registration in Client V2 by @2013xile
