### 🚀 Improvements

- **[App supervisor]** The Environment and Proxy environment dropdowns in App Supervisor now sort names in ascending order, with numbered names such as cluster-2 listed before cluster-10.

### 🐛 Bug Fixes

- **[ai]** Fixed global MCP tool permission settings being lost after application restarts and becoming inconsistent across application instances. ([#11476](https://github.com/nocobase/nocobase/pull/11476))

- **[Mobile (deprecated)]** V1 mobile forms now submit UnixTimestamp values in the same format as desktop forms. ([#11427](https://github.com/nocobase/nocobase/pull/11427))

- **[Authentication]**
  - Email password recovery now shows the same confirmation for registered and unregistered addresses. ([#11501](https://github.com/nocobase/nocobase/pull/11501))

  - Password reset emails open the sub-application’s registered domain. For the main application or a sub-application without its own domain, set `APP_PUBLIC_ORIGIN` before upgrading if email recovery is enabled. ([#11496](https://github.com/nocobase/nocobase/pull/11496))
Reference: [Email recovery domains and upgrade steps](https://github.com/nocobase/nocobase/blob/f26e6b7705/docs/docs/en/get-started/installation/env.md#app_public_origin)
- **[Custom variables]** Creating, editing and deleting custom variables now requires the “Allows to configure interface” permission. ([#11528](https://github.com/nocobase/nocobase/pull/11528))

- **[UI templates]** Fixed an issue where a duplicated popup could still show edits to the original page when its template was saved from an action that opened another popup. ([#11491](https://github.com/nocobase/nocobase/pull/11491))

- **[Workflow: CC]** Marking a workflow CC task as read or unread now preserves its recipient and linked workflow records. ([#11516](https://github.com/nocobase/nocobase/pull/11516))

- **[Auth: API keys]** Deleting an API key now invalidates only keys the current user is allowed to delete. ([#11513](https://github.com/nocobase/nocobase/pull/11513))

- **[Template print]** Fixed a missing dependency that could prevent Template print from loading after an upgrade.

