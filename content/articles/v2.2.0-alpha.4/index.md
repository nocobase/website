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

