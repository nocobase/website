### 🎉 New Features

- **[Block: Tree]** Add tree filter block ([#9016](https://github.com/nocobase/nocobase/pull/9016)) by @jiannx

- **[Auth: API keys]** add `pm list` and `generate-api-key` commands ([#9076](https://github.com/nocobase/nocobase/pull/9076)) by @chenos

- **[AI employees]**
  - Added a data query tool and business analysis report tool for AI employees ([#9040](https://github.com/nocobase/nocobase/pull/9040)) by @2013xile

  - Add an LLIM-based web search tool for AI employees ([#9032](https://github.com/nocobase/nocobase/pull/9032)) by @cgyrock

- **[Migration manager]** support migration command by @chenos

- **[Email manager]** gmail supports sending emails with aliases by @jiannx

### 🐛 Bug Fixes

- **[flow-engine]** Fixed the problem that many-to-one fields from external data sources cannot be added in the table block ([#9068](https://github.com/nocobase/nocobase/pull/9068)) by @jiannx

- **[client]**
  - fix subtable adds many-to-many field error ([#9070](https://github.com/nocobase/nocobase/pull/9070)) by @jiannx

  - Fixed an issue where the record pickup popup from a sub-table’s selection button could not correctly resolve parent item variable values. ([#8996](https://github.com/nocobase/nocobase/pull/8996)) by @gchust

  - Fixed an issue where an incorrect unsaved changes confirmation message would appear for bulk edit action ([#9054](https://github.com/nocobase/nocobase/pull/9054)) by @gchust

  - Fixed an issue where an incorrect secondary confirmation popup would appear when submitting the form after creating a record via a popup subtable. ([#9035](https://github.com/nocobase/nocobase/pull/9035)) by @gchust

  - Fixed the issue where ctx.request could not override the Authorization header. ([#8850](https://github.com/nocobase/nocobase/pull/8850)) by @gchust

- **[data-source-manager]** Fixed an issue where some field types were not updated correctly after syncing fields from the database ([#9046](https://github.com/nocobase/nocobase/pull/9046)) by @2013xile

- **[Notification manager]** Optimize in-app notification sending performance in workflow scenarios ([#9066](https://github.com/nocobase/nocobase/pull/9066)) by @mytharcher

- **[Collection field: Code]** Correct the UI interface of the code fields ([#9061](https://github.com/nocobase/nocobase/pull/9061)) by @2013xile

- **[Workflow: HTTP request node]** Sanitized workflow request node results to avoid exposing request config, defaulted new nodes to return response data only, and added debug logging for failed requests. ([#9024](https://github.com/nocobase/nocobase/pull/9024)) by @mytharcher

- **[AI employees]**
  - Fixed the issue where abort AI employees reasonning would cause the service to crash ([#9031](https://github.com/nocobase/nocobase/pull/9031)) by @cgyrock

  - Fix AI employee document upload failure under subpath access with APP_PUBLIC_PATH configured. ([#9034](https://github.com/nocobase/nocobase/pull/9034)) by @cgyrock

  - Fixed the issue when using deepseek or minmax models on dashscope ([#9033](https://github.com/nocobase/nocobase/pull/9033)) by @cgyrock

