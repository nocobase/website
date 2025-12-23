### 🚀 Improvements

- **[server]** Add fault tolerance when missing app instances cause errors while fetching app maintaining messages ([#8196](https://github.com/nocobase/nocobase/pull/8196)) by @2013xile

- **[Error handler]** Do not expose raw database error messages on SQL syntax errors, to avoid revealing the database type ([#8195](https://github.com/nocobase/nocobase/pull/8195)) by @2013xile

- **[Workflow]** Support to use legacy config to create new in duplicated workflow ([#8165](https://github.com/nocobase/nocobase/pull/8165)) by @mytharcher

### 🐛 Bug Fixes

- **[Workflow]** Fix the issue where the only one record show in record list to be manually execute ([#8187](https://github.com/nocobase/nocobase/pull/8187)) by @mytharcher

- **[Collection: Connect to foreign data (FDW)]** Fix trigger errors when connecting to tables with uppercase names by @2013xile

- **[Workflow: Approval]** Fix the issue where status of unrelated approval records are incorrectly changed to `UNPROCESSED` by approve action by @mytharcher

