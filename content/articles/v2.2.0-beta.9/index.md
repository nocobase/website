### 🎉 New Features

- **[client-v2]** Added configurable App and Portal entry support for V2 action panels and the left-top app switcher. ([#9893](https://github.com/nocobase/nocobase/pull/9893)) by @katherinehhh

- **[AI employees]** Added Mistral AI as an LLM provider for AI services. ([#9925](https://github.com/nocobase/nocobase/pull/9925)) by @cgyrock

- **[Portal manager]** Added configurable App and Portal entries for the V2 action panel and app switcher. by @katherinehhh

### 🚀 Improvements

- **[cli]**
  - Refactor CLI setup startup to reuse `nb app start`, normalize API base path redirects, persist shared env proxy defaults, and rebuild Docker proxy containers when published ports change. ([#9997](https://github.com/nocobase/nocobase/pull/9997)) by @chenos

  - Improved the Docker CLI setup by supporting configurable default NocoBase image registry/variant, fixing proxy and `no-nginx` image port compatibility, and adding Docker Nginx/Caddy installation guides. ([#9972](https://github.com/nocobase/nocobase/pull/9972)) by @chenos

  - Support manual Nginx/Caddy proxy config generation, allow Docker deployments without bundled Nginx, and align proxy and CDN-related runtime configuration. ([#9943](https://github.com/nocobase/nocobase/pull/9943)) by @chenos

- **[undefined]** Clarified the security guidance for PDF previews using external storage. ([#9901](https://github.com/nocobase/nocobase/pull/9901)) by @mytharcher
Reference: [File Preview](https://github.com/nocobase/nocobase/blob/docs/file-preview-security/docs/docs/en/file-manager/file-preview/index.md)
- **[utils]** Added warnings for server-side outbound requests that target potential SSRF-risk addresses when `SERVER_REQUEST_WHITELIST` is not configured. ([#9966](https://github.com/nocobase/nocobase/pull/9966)) by @mytharcher
Reference: [Environment Variables](https://docs.nocobase.com/get-started/installation/env), [Global Environment Variables](https://docs.nocobase.com/api/app/env)
- **[Data source manager]** Display unsupported external data source fields in V2 Configure fields, and align backup restore form label styles. ([#9983](https://github.com/nocobase/nocobase/pull/9983)) by @katherinehhh

- **[UI layout]** Improved the v2 mobile tab bar so crowded tabs scroll horizontally instead of overlapping. ([#9949](https://github.com/nocobase/nocobase/pull/9949)) by @katherinehhh

- **[AI: Knowledge base]** Added ZIP filename encoding options for knowledge base document uploads to avoid garbled filenames in ZIP archives created with non-UTF-8 encodings. by @cgyrock

- **[Email manager]** Moved the department-based mail viewing option to the general mail settings page. by @jiannx

- **[App supervisor]** Hid the standalone V2 Applications block while keeping its settings page available internally. by @katherinehhh

### 🐛 Bug Fixes

- **[cli]** Fixed revision creation events failing on RabbitMQ brokers that reject `:` and `@` in queue names. ([#9989](https://github.com/nocobase/nocobase/pull/9989)) by @cgyrock

- **[client-v2]**
  - Fixed an issue where multiline text field values could not be set via ctx.setFormValues. ([#9959](https://github.com/nocobase/nocobase/pull/9959)) by @gchust

  - Fixed iframe sanitization for v2 Markdown rendering and editing. ([#9986](https://github.com/nocobase/nocobase/pull/9986)) by @katherinehhh

  - Fixed routed popup creation forms losing prefilled field values such as Calendar V2 start and end dates. ([#9874](https://github.com/nocobase/nocobase/pull/9874)) by @jiannx

  - Fix the issue where opening an empty V2 Group menu item shows 404 ([#9896](https://github.com/nocobase/nocobase/pull/9896)) by @zhangzhonghe

  - Fixed V2 table data scope filters so missing URL query parameters no longer block table data queries. ([#9869](https://github.com/nocobase/nocobase/pull/9869)) by @jiannx

  - Fix the issue where route subpages are blank or use incorrect spacing after refresh ([#9961](https://github.com/nocobase/nocobase/pull/9961)) by @zhangzhonghe

  - Fixed long selected labels in record select fields so they truncate cleanly without squeezing the select control. ([#9939](https://github.com/nocobase/nocobase/pull/9939)) by @katherinehhh

  - Fixed V2 admin group routes showing 404 when the group has no available child menu page. ([#9932](https://github.com/nocobase/nocobase/pull/9932)) by @katherinehhh

  - Fixed table datetime columns losing their configured time display after pagination or refresh. ([#9935](https://github.com/nocobase/nocobase/pull/9935)) by @katherinehhh

- **[flow-engine]** Fixed an issue where ctx.auth.user would not update after switching users. ([#9964](https://github.com/nocobase/nocobase/pull/9964)) by @gchust

- **[undefined]** Fixed the Version control documentation in non-Chinese languages so the Professional Edition label is displayed. ([#9944](https://github.com/nocobase/nocobase/pull/9944)) by @cgyrock

- **[File manager]**
  - Reject active-content filenames during file upload unless the configured storage MIME type rule explicitly allows them. ([#9994](https://github.com/nocobase/nocobase/pull/9994)) by @mytharcher
Reference: [Local storage](docs/docs/en/file-manager/storage/local.md), [Security guide](docs/docs/en/security/guide.md)
  - Hidden the file manager attachments list API and return 404 when it is requested. ([#9978](https://github.com/nocobase/nocobase/pull/9978)) by @mytharcher

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
  - Fixed AI checkpoint cleanup failures in underscored database environments. ([#9982](https://github.com/nocobase/nocobase/pull/9982)) by @cgyrock

  - Fixed AI employee workflow nodes failing to resume correctly in loops after a previous AI employee tool call. ([#9980](https://github.com/nocobase/nocobase/pull/9980)) by @cgyrock

  - Fixed LLM providers falling back to their default Base URL when the custom Base URL field is cleared. ([#9958](https://github.com/nocobase/nocobase/pull/9958)) by @cgyrock

  - Fixed workflow AI employee tasks failing after repeated tool calls reached the graph recursion limit. ([#9945](https://github.com/nocobase/nocobase/pull/9945)) by @cgyrock

- **[Mobile (deprecated)]**
  - Fix responsive v1 admin pages so view actions open as subpages and select fields use mobile popups ([#9974](https://github.com/nocobase/nocobase/pull/9974)) by @zhangzhonghe

  - Fix the issue where mobile pages and public forms cannot be scrolled on mobile devices ([#9898](https://github.com/nocobase/nocobase/pull/9898)) by @zhangzhonghe

- **[UI templates]** Fixed an issue where the field template menu was incorrectly displayed in subforms. ([#9960](https://github.com/nocobase/nocobase/pull/9960)) by @gchust

- **[Data visualization]** Fixed an issue where chart blocks would trigger unnecessary refreshes when closing a popup. ([#9970](https://github.com/nocobase/nocobase/pull/9970)) by @gchust

- **[Data source manager]** Fixed v2 collection field management so template-protected fields cannot be deleted and inherited fields support view / override behavior consistent with v1. ([#9940](https://github.com/nocobase/nocobase/pull/9940)) by @katherinehhh

- **[Action: Custom request]** Fixed custom requests allowing runtime options to override the saved request target. ([#9904](https://github.com/nocobase/nocobase/pull/9904)) by @mytharcher

- **[Authentication]** Fixed incorrect redirects after SSO login in v2 sub applications ([#9927](https://github.com/nocobase/nocobase/pull/9927)) by @2013xile

- **[Users]** Removed the default password from the add-user form in Users & Permissions. ([#9915](https://github.com/nocobase/nocobase/pull/9915)) by @jiannx

- **[Version control]** Fixed version-control revision creation on RabbitMQ brokers that reject `:` and `@` in queue names. by @cgyrock

- **[Data source: External NocoBase]** Fixed external NocoBase attachment uploads and updates in attachment fields by @2013xile

- **[App SSO]** Fixed incorrect App SSO redirects in v2 sub applications by @2013xile

- **[Migration manager]** Fixed garbled text that could occur when migrating MySQL data with non-ASCII content by @2013xile

- **[Workflow: Approval]**
  - Fix the error when adding Original application content to approval nodes by @zhangzhonghe

  - Fix the error that may occur when opening approval details without configuration permissions by @zhangzhonghe

- **[App supervisor]** Fixed app visit links losing the v2 path in sub applications by @2013xile

