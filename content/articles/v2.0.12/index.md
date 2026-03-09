### 🚀 Improvements

- **[Redis lock adapter]** Refactor due to API of LockManger changed in main repository by @mytharcher

- **[Backup manager]** Add lock for scheduled backing-up across cluster nodes by @mytharcher

### 🐛 Bug Fixes

- **[client]**
  - V2 blocks now only show actions supported by the current data source ([#8803](https://github.com/nocobase/nocobase/pull/8803)) by @zhangzhonghe

  - Fix styling issue of the back button on v2 sub-pages ([#8810](https://github.com/nocobase/nocobase/pull/8810)) by @zhangzhonghe

- **[lock-manager]** Fix racing condition issue of lock manager ([#8734](https://github.com/nocobase/nocobase/pull/8734)) by @mytharcher

- **[server]** Fixed the error issue in data queries of non-database data sources ([#8776](https://github.com/nocobase/nocobase/pull/8776)) by @cgyrock

- **[Access control]** Fixed Restful API data source data modification error. ([#8788](https://github.com/nocobase/nocobase/pull/8788)) by @cgyrock

- **[Action: Export records]** fixed issue that belongsToArray field is blank in exported excel ([#8787](https://github.com/nocobase/nocobase/pull/8787)) by @cgyrock

