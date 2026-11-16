Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://nocode.nocobase.com/en/blog/timeline).

**NocoBase is currently updated across three branches: `main`, `next`, and `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: The most stable version to date, recommended for installation.
* `next`: Beta version, contains upcoming new features and has been preliminarily tested. There might be some known or unknown issues. It is mainly used to collect feedback from test users and further optimize features. Ideal for test users who want to experience new features early and provide feedback.
* `develop`: Alpha version, contains the latest feature code, may be incomplete or unstable, and is mainly used for internal development and rapid iteration. Suited for technical users interested in cutting-edge product capabilities, but not recommended for production use.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### v2.2.46

*Release date: 2026-11-12*

### 🐛 Bug Fixes

- **[Workflow: CC]** Marking a workflow CC task as read or unread now preserves its recipient and linked workflow records. ([#11516](https://github.com/nocobase/nocobase/pull/11516))
- **[Custom variables]** Creating, editing and deleting custom variables now requires the “Allows to configure interface” permission. ([#11528](https://github.com/nocobase/nocobase/pull/11528))
- **[Authentication]**
  - Password reset emails open the sub-application’s registered domain. For the main application or a sub-application without its own domain, set `APP_PUBLIC_ORIGIN` before upgrading if email recovery is enabled. ([#11496](https://github.com/nocobase/nocobase/pull/11496)) Reference: Email recovery domains and upgrade steps
  - Email password recovery now shows the same confirmation for registered and unregistered addresses. ([#11501](https://github.com/nocobase/nocobase/pull/11501))
- **[Mobile (deprecated)]** V1 mobile forms now submit UnixTimestamp values in the same format as desktop forms. ([#11427](https://github.com/nocobase/nocobase/pull/11427))
- **[Auth: API keys]** Deleting an API key now invalidates only keys the current user is allowed to delete. ([#11513](https://github.com/nocobase/nocobase/pull/11513))

### v2.2.45

*Release date: 2026-11-11*

### 🚀 Improvements

- **[App supervisor]** The Environment and Proxy environment dropdowns in App Supervisor now sort names in ascending order, with numbered names such as cluster-2 listed before cluster-10.

### 🐛 Bug Fixes

- **[ai]** Fixed global MCP tool permission settings being lost after application restarts and becoming inconsistent across application instances. ([#11476](https://github.com/nocobase/nocobase/pull/11476))
- **[UI templates]** Fixed an issue where a duplicated popup could still show edits to the original page when its template was saved from an action that opened another popup. ([#11491](https://github.com/nocobase/nocobase/pull/11491))
- **[AI employees]** Prevented web/API callers from creating stdio MCP servers or editing/deleting deployment-managed connections, while preserving enabled switches and connection tests. MCP deployment definitions now load from `storage/ai/mcp/servers.json` instead of automatically imported TS/JS files. ([#11461](https://github.com/nocobase/nocobase/pull/11461))
- **[Template print]** Fixed a missing dependency that could prevent Template print from loading after an upgrade.

### v2.2.44

*Release date: 2026-11-10*

### 🚀 Improvements

- **[Access control]** Document and test default-role fallback for the reserved union header. ([#11452](https://github.com/nocobase/nocobase/pull/11452)) by @hongboji Reference: OpenAPI: roles

### 🐛 Bug Fixes

- **[resourcer]** Resource API requests with malformed JSON in the filter query parameter now return HTTP 400 instead of an empty success response. ([#11465](https://github.com/nocobase/nocobase/pull/11465)) by @hongboji
- **[client]** Configure popup mode and size for linked association tags. ([#11449](https://github.com/nocobase/nocobase/pull/11449)) by @hongboji
- **[client-v2]** Restore the default table sort when column sorting is cleared. ([#11443](https://github.com/nocobase/nocobase/pull/11443)) by @hongboji
- **[AI employees]** Fixed Nathan reporting an interrupted tool call after the JavaScript editor returned the block content. ([#11454](https://github.com/nocobase/nocobase/pull/11454)) by @hongboji
- **[Calendar]** Display calendar headings in the selected Spanish locale. ([#11446](https://github.com/nocobase/nocobase/pull/11446)) by @hongboji

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### v2.3.0-beta.24

*Release date: 2026-11-13*

### 🚀 Improvements

- **[App supervisor]** The Environment and Proxy environment dropdowns in App Supervisor now sort names in ascending order, with numbered names such as cluster-2 listed before cluster-10.

### 🐛 Bug Fixes

- **[ai]** Fixed global MCP tool permission settings being lost after application restarts and becoming inconsistent across application instances. ([#11476](https://github.com/nocobase/nocobase/pull/11476))
- **[Mobile (deprecated)]** V1 mobile forms now submit UnixTimestamp values in the same format as desktop forms. ([#11427](https://github.com/nocobase/nocobase/pull/11427))
- **[Authentication]**
  - Email password recovery now shows the same confirmation for registered and unregistered addresses. ([#11501](https://github.com/nocobase/nocobase/pull/11501))
  - Password reset emails open the sub-application’s registered domain. For the main application or a sub-application without its own domain, set `APP_PUBLIC_ORIGIN` before upgrading if email recovery is enabled. ([#11496](https://github.com/nocobase/nocobase/pull/11496)) Reference: Email recovery domains and upgrade steps
- **[Custom variables]** Creating, editing and deleting custom variables now requires the “Allows to configure interface” permission. ([#11528](https://github.com/nocobase/nocobase/pull/11528))
- **[UI templates]** Fixed an issue where a duplicated popup could still show edits to the original page when its template was saved from an action that opened another popup. ([#11491](https://github.com/nocobase/nocobase/pull/11491))
- **[Workflow: CC]** Marking a workflow CC task as read or unread now preserves its recipient and linked workflow records. ([#11516](https://github.com/nocobase/nocobase/pull/11516))
- **[Auth: API keys]** Deleting an API key now invalidates only keys the current user is allowed to delete. ([#11513](https://github.com/nocobase/nocobase/pull/11513))
- **[Template print]** Fixed a missing dependency that could prevent Template print from loading after an upgrade.

### v2.3.0-beta.23

*Release date: 2026-11-11*

### 🚀 Improvements

- **[Access control]** Document and test default-role fallback for the reserved union header. ([#11452](https://github.com/nocobase/nocobase/pull/11452)) by @hongboji Reference: OpenAPI: roles

### 🐛 Bug Fixes

- **[client]** Configure popup mode and size for linked association tags. ([#11449](https://github.com/nocobase/nocobase/pull/11449)) by @hongboji
- **[resourcer]** Resource API requests with malformed JSON in the filter query parameter now return HTTP 400 instead of an empty success response. ([#11465](https://github.com/nocobase/nocobase/pull/11465)) by @hongboji
- **[client-v2]** Restore the default table sort when column sorting is cleared. ([#11443](https://github.com/nocobase/nocobase/pull/11443)) by @hongboji
- **[AI employees]**
  - Fixed Nathan reporting an interrupted tool call after the JavaScript editor returned the block content. ([#11454](https://github.com/nocobase/nocobase/pull/11454)) by @hongboji
  - Prevented web/API callers from creating stdio MCP servers or editing/deleting deployment-managed connections, while preserving enabled switches and connection tests. MCP deployment definitions now load from `storage/ai/mcp/servers.json` instead of automatically imported TS/JS files. ([#11461](https://github.com/nocobase/nocobase/pull/11461)) by @cgyrock
- **[Calendar]** Display calendar headings in the selected Spanish locale. ([#11446](https://github.com/nocobase/nocobase/pull/11446)) by @hongboji
- **[File manager]** Fixed plugin CLI commands, including tree path rebuilding, failing to load when File Manager is enabled. ([#11354](https://github.com/nocobase/nocobase/pull/11354)) by @zhouyanliang

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### v2.4.0-alpha.18

*Release date: 2026-11-14*

### 🚀 Improvements

- **[undefined]** Clarify how exit and exitAll affect serial flows. ([#11451](https://github.com/nocobase/nocobase/pull/11451))
  Reference: [RunJS documentation (all supported translations)](https://github.com/nocobase/nocobase/blob/fix/main-issue-8946/docs/docs/en/runjs/context/exit.md)
- **[Access control]** Document and test default-role fallback for the reserved union header. ([#11452](https://github.com/nocobase/nocobase/pull/11452))
  Reference: [OpenAPI: roles:check](https://github.com/nocobase/nocobase/blob/fix/main-issue-10399/packages/plugins/@nocobase/plugin-acl/src/swagger/index.ts)
- **[App supervisor]** The Environment and Proxy environment dropdowns in App Supervisor now sort names in ascending order, with numbered names such as cluster-2 listed before cluster-10.

### 🐛 Bug Fixes

- **[resourcer]** Resource API requests with malformed JSON in the filter query parameter now return HTTP 400 instead of an empty success response. ([#11465](https://github.com/nocobase/nocobase/pull/11465))
- **[ai]** Fixed global MCP tool permission settings being lost after application restarts and becoming inconsistent across application instances. ([#11476](https://github.com/nocobase/nocobase/pull/11476))
- **[client-v2]** Restore the default table sort when column sorting is cleared. ([#11443](https://github.com/nocobase/nocobase/pull/11443))
- **[client]** Configure popup mode and size for linked association tags. ([#11449](https://github.com/nocobase/nocobase/pull/11449))
- **[Workflow: CC]** Marking a workflow CC task as read or unread now preserves its recipient and linked workflow records. ([#11516](https://github.com/nocobase/nocobase/pull/11516))
- **[Auth: API keys]** Deleting an API key now invalidates only keys the current user is allowed to delete. ([#11513](https://github.com/nocobase/nocobase/pull/11513))
- **[Authentication]**

  - Email password recovery now shows the same confirmation for registered and unregistered addresses. ([#11501](https://github.com/nocobase/nocobase/pull/11501))
  - Password reset emails open the sub-application’s registered domain. For the main application or a sub-application without its own domain, set `APP_PUBLIC_ORIGIN` before upgrading if email recovery is enabled. ([#11496](https://github.com/nocobase/nocobase/pull/11496))
    Reference: [Email recovery domains and upgrade steps](https://github.com/nocobase/nocobase/blob/f26e6b7705/docs/docs/en/get-started/installation/env.md#app_public_origin)
- **[Custom variables]** Creating, editing and deleting custom variables now requires the “Allows to configure interface” permission. ([#11528](https://github.com/nocobase/nocobase/pull/11528))
- **[Calendar]** Display calendar headings in the selected Spanish locale. ([#11446](https://github.com/nocobase/nocobase/pull/11446))
- **[Mobile (deprecated)]** V1 mobile forms now submit UnixTimestamp values in the same format as desktop forms. ([#11427](https://github.com/nocobase/nocobase/pull/11427))
- **[File manager]** Fixed plugin CLI commands, including tree path rebuilding, failing to load when File Manager is enabled. ([#11354](https://github.com/nocobase/nocobase/pull/11354))
- **[AI employees]**

  - Prevented web/API callers from creating stdio MCP servers or editing/deleting deployment-managed connections, while preserving enabled switches and connection tests. MCP deployment definitions now load from `storage/ai/mcp/servers.json` instead of automatically imported TS/JS files. ([#11461](https://github.com/nocobase/nocobase/pull/11461))
  - Fixed Nathan reporting an interrupted tool call after the JavaScript editor returned the block content. ([#11454](https://github.com/nocobase/nocobase/pull/11454))
- **[UI templates]** Fixed an issue where a duplicated popup could still show edits to the original page when its template was saved from an action that opened another popup. ([#11491](https://github.com/nocobase/nocobase/pull/11491))
- **[Template print]** Fixed a missing dependency that could prevent Template print from loading after an upgrade.
