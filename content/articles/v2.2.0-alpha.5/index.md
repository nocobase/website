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

