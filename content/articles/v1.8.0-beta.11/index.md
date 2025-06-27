### 🎉 New Features

- **[Workflow: HTTP request node]** Support `multipart/form-data` request ([#7087](https://github.com/nocobase/nocobase/pull/7087)) by @shushu992

### 🚀 Improvements

- **[Workflow]**
  - Optimize mobile style ([#7040](https://github.com/nocobase/nocobase/pull/7040)) by @mytharcher

  - Adjust API of `getCollectionFieldOptions` ([#7095](https://github.com/nocobase/nocobase/pull/7095)) by @mytharcher

- **[Public forms]** Optimize the performance of date components in public forms ([#7117](https://github.com/nocobase/nocobase/pull/7117)) by @zhangzhonghe

- **[Workflow: Pre-action event]** Adjust variable api by @mytharcher

- **[Workflow: Approval]** Adjust variable API by @mytharcher

### 🐛 Bug Fixes

- **[client]**
  - incorrect range limitation on date fields with time ([#7107](https://github.com/nocobase/nocobase/pull/7107)) by @katherinehhh

  - When URL query parameter variables are empty, the data scope conditions are not removed ([#7104](https://github.com/nocobase/nocobase/pull/7104)) by @zhangzhonghe

- **[Workflow]**
  - Fix params of loading record in tasks ([#7123](https://github.com/nocobase/nocobase/pull/7123)) by @mytharcher

  - Fix incorrectly executed checking on big integer number ([#7099](https://github.com/nocobase/nocobase/pull/7099)) by @mytharcher

  - Fix stats cascade deleted by non-current workflow version ([#7103](https://github.com/nocobase/nocobase/pull/7103)) by @mytharcher

- **[Mobile]** Fix mobile popup z-index issue ([#7110](https://github.com/nocobase/nocobase/pull/7110)) by @zhangzhonghe

- **[WEB client]** Fix issue where blocks under pages were not displayed after setting role menu permissions ([#7112](https://github.com/nocobase/nocobase/pull/7112)) by @aaaaaajie

- **[Calendar]** date field issue in quick create form of calendar block ([#7106](https://github.com/nocobase/nocobase/pull/7106)) by @katherinehhh

- **[Action: Import records]** Resolve login failure issue after batch import of usernames and passwords ([#7076](https://github.com/nocobase/nocobase/pull/7076)) by @aaaaaajie

- **[Workflow: Approval]**
  - Fix error thrown when approval related collection deleted by @mytharcher

  - Fix mobile styles by @mytharcher

  - Fix applicant variable name in trigger by @mytharcher

  - Only participants can view (get) detail of approval by @mytharcher

  - Fix legacy variable API which throws error by @mytharcher

