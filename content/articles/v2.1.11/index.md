### 🚀 Improvements

- **[Backup manager]** Fixed version-control restore failures when selected-collection backups contain database views or related database objects. ([#9827](https://github.com/nocobase/nocobase/pull/9827)) by @cgyrock

### 🐛 Bug Fixes

- **[flow-engine]**
  - Fix the issue where the block toolbar may not reappear after dragging a field ([#9848](https://github.com/nocobase/nocobase/pull/9848)) by @zhangzhonghe

  - Fix the issue where resizing fields closes the detail popup ([#9850](https://github.com/nocobase/nocobase/pull/9850)) by @zhangzhonghe

- **[client-v2]**
  - Fix assigning values to display association fields in filter forms ([#9875](https://github.com/nocobase/nocobase/pull/9875)) by @zhangzhonghe

  - Fixed an issue where union roles could not be correctly resolved by variables in v2. ([#9611](https://github.com/nocobase/nocobase/pull/9611)) by @gchust

- **[ai]** Added support for using NocoBase request variables in user-bound MCP configurations and prevented user-bound MCP connection failures from interrupting AI employee conversations. ([#9888](https://github.com/nocobase/nocobase/pull/9888)) by @cgyrock

- **[cli]** prepare npm source dev dependencies ([#9882](https://github.com/nocobase/nocobase/pull/9882)) by @chenos

- **[UI templates]** Fixed an issue where association field block templates could not be used. ([#9406](https://github.com/nocobase/nocobase/pull/9406)) by @gchust

- **[AI: Knowledge base]** Fixed AI knowledge base document table and hit-test result cards overflowing on narrow screens or with long filenames. by @cgyrock

- **[Version control]** Fixed version-control restore failures when selected-collection backups contain database views or related database objects. by @cgyrock

- **[Multi-space]** Fixed the spaces settings page so it can load spaces beyond the first 20 records. by @jiannx

