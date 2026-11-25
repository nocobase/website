### 🐛 Bug Fixes

- **[server]** Fixed a stop notification from another replica closing the database connection during a sub-app migration. ([#11699](https://github.com/nocobase/nocobase/pull/11699))

- **[Authentication]** Sign-in audit records now omit the session token and retain user information. ([#11705](https://github.com/nocobase/nocobase/pull/11705))

- **[UI layout]** Fixed mobile pages appearing blank when UI configuration was enabled. ([#11709](https://github.com/nocobase/nocobase/pull/11709))

- **[Variables and secrets]** Audit logs now omit the values of variables and secrets when they are created or updated, including in batches. ([#11708](https://github.com/nocobase/nocobase/pull/11708))

- **[Template print]** Printing selected records or all records matching a V2 table’s filter now follows the table’s current sort order.

