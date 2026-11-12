### 🚀 Improvements

- **[App supervisor]** The Environment and Proxy environment dropdowns in App Supervisor now sort names in ascending order, with numbered names such as cluster-2 listed before cluster-10.

### 🐛 Bug Fixes

- **[ai]** Fixed global MCP tool permission settings being lost after application restarts and becoming inconsistent across application instances. ([#11476](https://github.com/nocobase/nocobase/pull/11476))
- **[UI templates]** Fixed an issue where a duplicated popup could still show edits to the original page when its template was saved from an action that opened another popup. ([#11491](https://github.com/nocobase/nocobase/pull/11491))
- **[AI employees]** Prevented web/API callers from creating stdio MCP servers or editing/deleting deployment-managed connections, while preserving enabled switches and connection tests. MCP deployment definitions now load from `storage/ai/mcp/servers.json` instead of automatically imported TS/JS files. ([#11461](https://github.com/nocobase/nocobase/pull/11461))
- **[Template print]** Fixed a missing dependency that could prevent Template print from loading after an upgrade.
