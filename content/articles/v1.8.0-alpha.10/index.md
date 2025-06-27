### 🎉 New Features

- **[Data source manager]** ✨ Support on-demand loading of collections from external data sources ([#6979](https://github.com/nocobase/nocobase/pull/6979)) by @aaaaaajie

- **[Workflow: HTTP request node]** Support `multipart/form-data` request ([#7087](https://github.com/nocobase/nocobase/pull/7087)) by @shushu992

- **[Data source: External SQL Server]** Support on-demand loading of collections from external data sources by @aaaaaajie

### 🐛 Bug Fixes

- **[client]**
  - When URL query parameter variables are empty, the data scope conditions are not removed ([#7104](https://github.com/nocobase/nocobase/pull/7104)) by @zhangzhonghe

  - incorrect range limitation on date fields with time ([#7107](https://github.com/nocobase/nocobase/pull/7107)) by @katherinehhh

- **[Mobile]** Fix mobile popup z-index issue ([#7110](https://github.com/nocobase/nocobase/pull/7110)) by @zhangzhonghe

- **[Calendar]** date field issue in quick create form of calendar block ([#7106](https://github.com/nocobase/nocobase/pull/7106)) by @katherinehhh

- **[Workflow: Approval]**
  - Fix legacy variable API which throws error by @mytharcher

  - Fix mobile styles by @mytharcher

  - Fix error thrown when approval related collection deleted by @mytharcher

- **[Email manager]** attachment does not display by @jiannx

