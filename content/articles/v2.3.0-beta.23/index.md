### 🚀 Improvements

- **[Access control]** Document and test default-role fallback for the reserved union header. ([#11452](https://github.com/nocobase/nocobase/pull/11452)) by @hongboji
Reference: [OpenAPI: roles:check](https://github.com/nocobase/nocobase/blob/fix/main-issue-10399/packages/plugins/@nocobase/plugin-acl/src/swagger/index.ts)
### 🐛 Bug Fixes

- **[client]** Configure popup mode and size for linked association tags. ([#11449](https://github.com/nocobase/nocobase/pull/11449)) by @hongboji

- **[resourcer]** Resource API requests with malformed JSON in the filter query parameter now return HTTP 400 instead of an empty success response. ([#11465](https://github.com/nocobase/nocobase/pull/11465)) by @hongboji

- **[client-v2]** Restore the default table sort when column sorting is cleared. ([#11443](https://github.com/nocobase/nocobase/pull/11443)) by @hongboji

- **[AI employees]**
  - Fixed Nathan reporting an interrupted tool call after the JavaScript editor returned the block content. ([#11454](https://github.com/nocobase/nocobase/pull/11454)) by @hongboji

  - Prevented web/API callers from creating stdio MCP servers or editing/deleting deployment-managed connections, while preserving enabled switches and connection tests. MCP deployment definitions now load from `storage/ai/mcp/servers.json` instead of automatically imported TS/JS files. ([#11461](https://github.com/nocobase/nocobase/pull/11461)) by @cgyrock

- **[Calendar]** Display calendar headings in the selected Spanish locale. ([#11446](https://github.com/nocobase/nocobase/pull/11446)) by @hongboji

- **[File manager]** Fixed plugin CLI commands, including tree path rebuilding, failing to load when File Manager is enabled. ([#11354](https://github.com/nocobase/nocobase/pull/11354)) by @zhouyanliang

