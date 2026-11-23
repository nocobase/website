### 🚀 Improvements

- **[client-v2]** Reduced the spacing between fields in horizontal mobile details blocks. ([#11644](https://github.com/nocobase/nocobase/pull/11644))

- **[AI employees]** Server logs now include nested stack frames to help diagnose range errors in AI employee conversations. ([#11640](https://github.com/nocobase/nocobase/pull/11640))

### 🐛 Bug Fixes

- **[Error handler]** Duplicate and not-null field messages now include the collection title when available, including when saving related records. ([#11638](https://github.com/nocobase/nocobase/pull/11638))

- **[Notification: In-app message]** Fixed an issue where opening a channel in the mobile inbox could show messages from another channel. ([#11662](https://github.com/nocobase/nocobase/pull/11662))

- **[Data source: REST API]**
  - Fixed a TypeScript error that blocked release builds of the REST API data source plugin.

  - Fixed an issue where REST API collection fields could fail to save after clearing and re-extracting them, or lose edits to their display names.

- **[Data source: External SQL Server]** The external SQL Server data source now lists only tables and views in the dbo schema.

- **[Migration manager]** PostgreSQL migrations now exclude unrelated sequences, so selected tables can be restored even when the target lacks schemas used only by other tables.

