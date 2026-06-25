### 🎉 New Features

- **[ai]** Added support for using current user variables in remote MCP client URLs and headers. ([#9828](https://github.com/nocobase/nocobase/pull/9828)) by @cgyrock

### 🚀 Improvements

- **[client-v2]**
  - Fixed missing Settings entries for Client V2 plugin manager cards when a plugin uses a shared or legacy settings path. ([#9852](https://github.com/nocobase/nocobase/pull/9852)) by @katherinehhh

  - Adjusted the v2 System settings menu order and page panel height to match the standard settings layout. ([#9849](https://github.com/nocobase/nocobase/pull/9849)) by @katherinehhh

- **[Backup manager]**
  - Fixed version-control restore failures when selected-collection backups contain database views or related database objects. ([#9827](https://github.com/nocobase/nocobase/pull/9827)) by @cgyrock

  - Improved backup manager table styling and long file name display. ([#9864](https://github.com/nocobase/nocobase/pull/9864)) by @katherinehhh

- **[Public forms]** Separated v1 and v2 public form lists and fixed the v2 Configure page to open a configurable form detail page. ([#9851](https://github.com/nocobase/nocobase/pull/9851)) by @katherinehhh

- **[User data synchronization]** Added modern UI support for user data synchronization settings ([#9837](https://github.com/nocobase/nocobase/pull/9837)) by @2013xile

- **[WeCom]** Added modern UI support for WeCom authentication, sync, and notification settings by @2013xile

- **[DingTalk]** Added modern UI support for DingTalk authentication, sync, and notification settings by @2013xile

### 🐛 Bug Fixes

- **[flow-engine]**
  - Fix the issue where resizing fields closes the detail popup ([#9850](https://github.com/nocobase/nocobase/pull/9850)) by @zhangzhonghe

  - Fix the issue where the block toolbar may not reappear after dragging a field ([#9848](https://github.com/nocobase/nocobase/pull/9848)) by @zhangzhonghe

- **[client-v2]**
  - Fixed an issue where union roles could not be correctly resolved by variables in v2. ([#9611](https://github.com/nocobase/nocobase/pull/9611)) by @gchust

  - Fix assigning values to display association fields in filter forms ([#9875](https://github.com/nocobase/nocobase/pull/9875)) by @zhangzhonghe

- **[cli]** prepare npm source dev dependencies ([#9882](https://github.com/nocobase/nocobase/pull/9882)) by @chenos

- **[ai]** Added support for using NocoBase request variables in user-bound MCP configurations and prevented user-bound MCP connection failures from interrupting AI employee conversations. ([#9888](https://github.com/nocobase/nocobase/pull/9888)) by @cgyrock

- **[UI templates]** Fixed an issue where association field block templates could not be used. ([#9406](https://github.com/nocobase/nocobase/pull/9406)) by @gchust

- **[Data source manager]** Added a warning and quick setup for v2 data source collections without a primary key or record unique key. ([#9872](https://github.com/nocobase/nocobase/pull/9872)) by @katherinehhh

- **[Embed NocoBase]** Fixed v2 embed pages losing token-based access after the URL token is removed and the page is refreshed. ([#9857](https://github.com/nocobase/nocobase/pull/9857)) by @katherinehhh

- **[Workflow: Custom action event]**
  - Fixed the v2 custom action workflow binding selector so enabled workflows are filtered with boolean values and can be listed correctly. ([#9865](https://github.com/nocobase/nocobase/pull/9865)) by @mytharcher

  - Fixed custom-context trigger workflow actions so frontend variables in request payloads are resolved before submission in v2 action buttons ([#9853](https://github.com/nocobase/nocobase/pull/9853)) by @mytharcher

- **[Multi-space]** Fixed the spaces settings page so it can load spaces beyond the first 20 records. by @jiannx

- **[Version control]** Fixed version-control restore failures when selected-collection backups contain database views or related database objects. by @cgyrock

- **[AI: Knowledge base]** Fixed AI knowledge base document table and hit-test result cards overflowing on narrow screens or with long filenames. by @cgyrock

- **[Workflow: Approval]** Fixed approval action node validation to allow `null` for `applyDetail` or `approvalUid` and skip processing unless a string reference is provided by @mytharcher

