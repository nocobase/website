### 🐛 Bug Fixes

- **[Workflow: CC]** Marking a workflow CC task as read or unread now preserves its recipient and linked workflow records. ([#11516](https://github.com/nocobase/nocobase/pull/11516))

- **[Custom variables]** Creating, editing and deleting custom variables now requires the “Allows to configure interface” permission. ([#11528](https://github.com/nocobase/nocobase/pull/11528))

- **[Authentication]**
  - Password reset emails open the sub-application’s registered domain. For the main application or a sub-application without its own domain, set `APP_PUBLIC_ORIGIN` before upgrading if email recovery is enabled. ([#11496](https://github.com/nocobase/nocobase/pull/11496))
Reference: [Email recovery domains and upgrade steps](https://github.com/nocobase/nocobase/blob/f26e6b7705/docs/docs/en/get-started/installation/env.md#app_public_origin)
  - Email password recovery now shows the same confirmation for registered and unregistered addresses. ([#11501](https://github.com/nocobase/nocobase/pull/11501))

- **[Mobile (deprecated)]** V1 mobile forms now submit UnixTimestamp values in the same format as desktop forms. ([#11427](https://github.com/nocobase/nocobase/pull/11427))

- **[Auth: API keys]** Deleting an API key now invalidates only keys the current user is allowed to delete. ([#11513](https://github.com/nocobase/nocobase/pull/11513))

