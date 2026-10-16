### 🐛 Bug Fixes

- **[server]**
  - Fix duplicate snowflake primary keys after an application reload ([#10911](https://github.com/nocobase/nocobase/pull/10911)) by @2013xile

  - Fix validation and scoping of the application name resolved from a request in the gateway. ([#10548](https://github.com/nocobase/nocobase/pull/10548)) by @2013xile

- **[client-v2]** Fixed attachment previews and editor popover visibility in v2 approval form subtables. ([#10586](https://github.com/nocobase/nocobase/pull/10586)) by @mytharcher

- **[Data source manager]** Fixed v2 relation field configuration to allow entering a new foreign key name or selecting an existing field. ([#10915](https://github.com/nocobase/nocobase/pull/10915)) by @katherinehhh

- **[Workflow]** Fixed incorrect workflow enabled and executed status checks when KingBase returns boolean and execution count fields as strings. ([#10888](https://github.com/nocobase/nocobase/pull/10888)) by @mytharcher

- **[AI employees]** AI conversations now send a stable conversation-specific prompt cache key in both OpenAI API modes, allowing compatible gateways to maintain channel affinity. ([#10788](https://github.com/nocobase/nocobase/pull/10788)) by @cgyrock

