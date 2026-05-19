### 🎉 New Features

- **[Block: Kanban]** Added client-v2 support for the Kanban plugin ([#9475](https://github.com/nocobase/nocobase/pull/9475)) by @jiannx

### 🚀 Improvements

- **[client]** Share condition evaluation between v1 and v2 apps ([#9522](https://github.com/nocobase/nocobase/pull/9522)) by @zhangzhonghe

- **[Localization]** Improved Lina localization translation tasks with translation scope, reference language settings, and quick editing ([#9521](https://github.com/nocobase/nocobase/pull/9521)) by @2013xile

- **[AI employees]** Prompt on duplicate table name when saving to vector database ([#9497](https://github.com/nocobase/nocobase/pull/9497)) by @cgyrock

- **[Notification manager]** Change queue strategy to optimize sending performance ([#9407](https://github.com/nocobase/nocobase/pull/9407)) by @mytharcher

- **[Workflow: Custom action event]** Migrated the block-workbench and workflow-custom-action-trigger plugins to client v2, including their action models and QR scanner flow. ([#9494](https://github.com/nocobase/nocobase/pull/9494)) by @jiannx

- **[Authentication]** Implement the Authenticators settings page in client-v2 and ship reusable client-v2 table, variable input, and form primitives. ([#9457](https://github.com/nocobase/nocobase/pull/9457)) by @Molunerfinn

- **[AI: Knowledge base]** Prompt on duplicate table name when saving to vector database by @cgyrock

- **[Auth: SAML 2.0]** Add client-v2 entries for the CAS and SAML authentication plugins so they work with the v2 sign-in page and Authenticators settings. by @Molunerfinn

- **[Workflow: Approval]** Improve related approvals with timeline cards by @zhangzhonghe

### 🐛 Bug Fixes

- **[undefined]** align nginx config paths ([#9528](https://github.com/nocobase/nocobase/pull/9528)) by @chenos

- **[cli-v1]** Fixed create-nocobase-app development startup by reusing packaged app shells while enabling local plugin development. ([#9471](https://github.com/nocobase/nocobase/pull/9471)) by @Molunerfinn

- **[client]**
  - Fix the issue where filter forms cannot use current form variables ([#9474](https://github.com/nocobase/nocobase/pull/9474)) by @zhangzhonghe

  - Fix the issue where a menu badge still shows a dot when its value is 0 ([#9491](https://github.com/nocobase/nocobase/pull/9491)) by @zhangzhonghe

- **[client-v2]**
  - The shared v2 Table component now shows the page-size selector by default, matching v1 behavior. ([#9512](https://github.com/nocobase/nocobase/pull/9512)) by @Molunerfinn

  - Fixed the Kanban plugin v2 route failing to load because dnd-kit dependencies were not provided by the client. ([#9516](https://github.com/nocobase/nocobase/pull/9516)) by @jiannx

- **[Calendar]**
  - Fixed the cursor style for event items in the calendar more-events overlay ([#9519](https://github.com/nocobase/nocobase/pull/9519)) by @jiannx

  - Fix the issue where calendar more items cannot be fully displayed ([#9492](https://github.com/nocobase/nocobase/pull/9492)) by @zhangzhonghe

- **[License settings]** resolve symlinked bundled deps ([#9518](https://github.com/nocobase/nocobase/pull/9518)) by @chenos

- **[AI employees]**
  - Fix issue where operator role permissions are not taking effect in AI employee nodes ([#9513](https://github.com/nocobase/nocobase/pull/9513)) by @cgyrock

  - Fix AI employee OSS file read errors ([#9493](https://github.com/nocobase/nocobase/pull/9493)) by @cgyrock

- **[Authentication]** Prevent the server from crashing when a WebSocket auth token references an authenticator whose auth type plugin is unloaded or missing. ([#9514](https://github.com/nocobase/nocobase/pull/9514)) by @Molunerfinn

- **[API documentation]** Fixed collection API documentation so query parameters no longer interfere with each other ([#9442](https://github.com/nocobase/nocobase/pull/9442)) by @jiannx

- **[Data source: Main]** Fix the issue where field options are written into the schema after syncing fields ([#9505](https://github.com/nocobase/nocobase/pull/9505)) by @2013xile

- **[Auth: SAML 2.0]** Fix SAML auto-redirect interceptor flickering the app shell and double-opening drawers on every navigation. by @Molunerfinn

