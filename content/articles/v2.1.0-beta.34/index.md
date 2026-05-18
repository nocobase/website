### 🎉 New Features

- **[Block: Kanban]** Added client-v2 support for the Kanban plugin ([#9475](https://github.com/nocobase/nocobase/pull/9475)) by @jiannx

### 🚀 Improvements

- **[cli]** Improved the NocoBase CLI prompt experience by migrating setup and management workflows to Inquirer, and fixed related install, skills, and Docker runtime issues. ([#9452](https://github.com/nocobase/nocobase/pull/9452)) by @chenos

- **[AI employees]** Prompt on duplicate table name when saving to vector database ([#9497](https://github.com/nocobase/nocobase/pull/9497)) by @cgyrock

- **[Notification manager]** Change queue strategy to optimize sending performance ([#9407](https://github.com/nocobase/nocobase/pull/9407)) by @mytharcher

- **[Workflow: Custom action event]** Migrated the block-workbench and workflow-custom-action-trigger plugins to client v2, including their action models and QR scanner flow. ([#9494](https://github.com/nocobase/nocobase/pull/9494)) by @jiannx

- **[Authentication]** Implement the Authenticators settings page in client-v2 and ship reusable client-v2 table, variable input, and form primitives. ([#9457](https://github.com/nocobase/nocobase/pull/9457)) by @Molunerfinn

- **[AI: Knowledge base]** Prompt on duplicate table name when saving to vector database by @cgyrock

- **[Auth: SAML 2.0]** Add client-v2 entries for the CAS and SAML authentication plugins so they work with the v2 sign-in page and Authenticators settings. by @Molunerfinn

### 🐛 Bug Fixes

- **[client-v2]**
  - Fixed the Kanban plugin v2 route failing to load because dnd-kit dependencies were not provided by the client. ([#9516](https://github.com/nocobase/nocobase/pull/9516)) by @jiannx

  - The shared v2 Table component now shows the page-size selector by default, matching v1 behavior. ([#9512](https://github.com/nocobase/nocobase/pull/9512)) by @Molunerfinn

- **[client]**
  - Fixed an issue where JS field values in subforms were not correctly set during form submission. ([#9496](https://github.com/nocobase/nocobase/pull/9496)) by @gchust

  - Fixed an issue where current popup record variables could not be resolved in action button event flows. ([#9495](https://github.com/nocobase/nocobase/pull/9495)) by @gchust

- **[flow-engine]** Fixed incorrect error message in browser's console. ([#9502](https://github.com/nocobase/nocobase/pull/9502)) by @gchust

- **[AI employees]**
  - Fix issue where operator role permissions are not taking effect in AI employee nodes ([#9513](https://github.com/nocobase/nocobase/pull/9513)) by @cgyrock

  - Fix AI employee OSS file read errors ([#9493](https://github.com/nocobase/nocobase/pull/9493)) by @cgyrock

- **[API documentation]** Fixed collection API documentation so query parameters no longer interfere with each other ([#9442](https://github.com/nocobase/nocobase/pull/9442)) by @jiannx

- **[Data source: Main]** Fix the issue where field options are written into the schema after syncing fields ([#9505](https://github.com/nocobase/nocobase/pull/9505)) by @2013xile

- **[Workflow: JavaScript]** Fixed workflow JavaScript QuickJS runtime package loading in production builds. ([#9503](https://github.com/nocobase/nocobase/pull/9503)) by @mytharcher

- **[WEB client]** Clean blocks data after remove menus. ([#9459](https://github.com/nocobase/nocobase/pull/9459)) by @gchust

- **[Action: Import records]** Fix the issue where imported record on date-like fields shows wrong date ([#9463](https://github.com/nocobase/nocobase/pull/9463)) by @mytharcher

- **[Action: Import records Pro]** fix timezone handling for pro xlsx imports by @mytharcher

- **[Auth: SAML 2.0]** Fix SAML auto-redirect interceptor flickering the app shell and double-opening drawers on every navigation. by @Molunerfinn

- **[Action: Export records Pro]** Fix the issue where error thrown when export attachment from attachment url field by @mytharcher

