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

