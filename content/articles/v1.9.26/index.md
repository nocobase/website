### 🚀 Improvements

- **[acl]** Support `acl.registerSnippet` API to merge snippet configuration ([#8155](https://github.com/nocobase/nocobase/pull/8155)) by @mytharcher

- **[Access control]** Disallow assigning the root role to users ([#8180](https://github.com/nocobase/nocobase/pull/8180)) by @2013xile

### 🐛 Bug Fixes

- **[License settings]**
  - fix plugin-license ts build exception ([#8183](https://github.com/nocobase/nocobase/pull/8183)) by @jiannx

  - license optimization and addition of prompt information ([#7993](https://github.com/nocobase/nocobase/pull/7993)) by @jiannx

- **[File manager]** Fix the issue where previewing `.txt` file on OSS got wrong charset ([#8161](https://github.com/nocobase/nocobase/pull/8161)) by @mytharcher

- **[Action: Import records]** Synchronously wait for the `afterCreate` events triggered by the import to finish. ([#8158](https://github.com/nocobase/nocobase/pull/8158)) by @2013xile

- **[Collection: Connect to foreign data (FDW)]** Fix issue where loading fails for tables with uppercase names by @2013xile

- **[Data source: External SQL Server]** Fix issues where the `encrypt` and `trustServerCertificate` options are not available by @2013xile

