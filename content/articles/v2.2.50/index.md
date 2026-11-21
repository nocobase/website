### 🚀 Improvements

- **[AI employees]** Server logs now include nested stack frames to help diagnose range errors in AI employee conversations. ([#11640](https://github.com/nocobase/nocobase/pull/11640))

### 🐛 Bug Fixes

- **[Data source: REST API]**
  - Fixed a TypeScript error that blocked release builds of the REST API data source plugin.

  - Fixed an issue where REST API collection fields could fail to save after clearing and re-extracting them, or lose edits to their display names.

- **[Data source: External SQL Server]** The external SQL Server data source now lists only tables and views in the dbo schema.

