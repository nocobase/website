Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase is currently updated with three branches: `main` , `next` and `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：The most stable version to date, recommended for installation;
* `next`：Beta version, contains upcoming new features and has been preliminarily tested. There might be some known or unknown issues. It's mainly for test users to collect feedback and optimize functions further. Ideal for test users who want to experience new features early and give feedback;
* `develop`：Alpha version, contains the latest feature code, may be incomplete or unstable, mainly for internal dev and rapid iteration. Suited for tech users interested in product's cutting-edge, but with potential issues and incomplete functions. Not for production use.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.7.18](https://www.nocobase.com/en/blog/v1.7.18)

*Release date: 2025-06-26*

#### 🚀 Improvements

- **[Workflow]** Optimize mobile style ([#7040](https://github.com/nocobase/nocobase/pull/7040)) by @mytharcher
- **[Public forms]** Optimize the performance of date components in public forms ([#7117](https://github.com/nocobase/nocobase/pull/7117)) by @zhangzhonghe

#### 🐛 Bug Fixes

- **[Workflow]** Fix params of loading record in tasks ([#7123](https://github.com/nocobase/nocobase/pull/7123)) by @mytharcher
- **[WEB client]** Fix issue where blocks under pages were not displayed after setting role menu permissions ([#7112](https://github.com/nocobase/nocobase/pull/7112)) by @aaaaaajie
- **[Workflow: Approval]**

  - Fix applicant variable name in trigger by @mytharcher
  - Fix mobile styles by @mytharcher
  - Fix error thrown when approval related collection deleted by @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.8.0-beta.11](https://www.nocobase.com/en/blog/v1.8.0-beta.11)

*Release date: 2025-06-27*

#### 🎉 New Features

- **[Workflow: HTTP request node]** Support `multipart/form-data` request ([#7087](https://github.com/nocobase/nocobase/pull/7087)) by @shushu992

#### 🚀 Improvements

- **[Workflow]**

  - Optimize mobile style ([#7040](https://github.com/nocobase/nocobase/pull/7040)) by @mytharcher
  - Adjust API of `getCollectionFieldOptions` ([#7095](https://github.com/nocobase/nocobase/pull/7095)) by @mytharcher
- **[Public forms]** Optimize the performance of date components in public forms ([#7117](https://github.com/nocobase/nocobase/pull/7117)) by @zhangzhonghe
- **[Workflow: Pre-action event]** Adjust variable api by @mytharcher
- **[Workflow: Approval]** Adjust variable API by @mytharcher

#### 🐛 Bug Fixes

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

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.8.0-alpha.12](https://www.nocobase.com/en/blog/v1.8.0-alpha.12)

*Release date: 2025-07-02*

#### 🚀 Improvements

- **[database]** Support to add pool options from env ([#7133](https://github.com/nocobase/nocobase/pull/7133)) by @mytharcher
- **[Workflow]**

  - Improve executions list load performance by excepting JSON field ([#7138](https://github.com/nocobase/nocobase/pull/7138)) by @mytharcher
  - Add log API for node testing ([#7129](https://github.com/nocobase/nocobase/pull/7129)) by @mytharcher
- **[Workflow: Approval]** Change time to absolute in timeline by @mytharcher

#### 🐛 Bug Fixes

- **[utils]** filtering issue on DateOnly or Datetime (without time zone) using Exact day variable ([#7113](https://github.com/nocobase/nocobase/pull/7113)) by @katherinehhh
- **[cli]**

  - undefined error in download plugins ([#7143](https://github.com/nocobase/nocobase/pull/7143)) by @jiannx
  - Adjust the license copy when installing the plugin ([#7135](https://github.com/nocobase/nocobase/pull/7135)) by @jiannx
- **[client]**

  - Fault tolerance for settings based on 'x-acl-action' ([#7128](https://github.com/nocobase/nocobase/pull/7128)) by @mytharcher
  - Setting field displayName in connected view had no effect ([#7130](https://github.com/nocobase/nocobase/pull/7130)) by @aaaaaajie
  - Workflow manual node UI configuration: linkage rules cannot select Current form variables ([#7125](https://github.com/nocobase/nocobase/pull/7125)) by @zhangzhonghe
- **[Workflow]** Fix error thrown by cycling import ([#7134](https://github.com/nocobase/nocobase/pull/7134)) by @mytharcher
- **[plugin-commercial]**

  - develop mode not show license popup by @jiannx
  - temporarily close the license verification pop-up by @jiannx
  - adjust the license verification logic and support pan-domain name matching by @jiannx
- **[Password policy]** Support permanently locking user accounts by @2013xile
- **[Workflow: Subflow]** Fix issue in cluster mode by @mytharcher
- **[Workflow: Approval]**

  - Add form layout settings by @mytharcher
  - Remove non-filterable fields from filter by @mytharcher

### [v1.8.0-alpha.11](https://www.nocobase.com/en/blog/v1.8.0-alpha.11)

*Release date: 2025-06-27*

#### 🎉 New Features

- **[License settings]** add license setting and validate license before downloading plugins ([#7026](https://github.com/nocobase/nocobase/pull/7026)) by @jiannx

#### 🚀 Improvements

- **[Multi-app manager]** add filter support to multi-app management ([#7124](https://github.com/nocobase/nocobase/pull/7124)) by @katherinehhh
- **[Workflow]** Optimize mobile style ([#7040](https://github.com/nocobase/nocobase/pull/7040)) by @mytharcher
- **[Public forms]** Optimize the performance of date components in public forms ([#7117](https://github.com/nocobase/nocobase/pull/7117)) by @zhangzhonghe
- **[plugin-commercial]** encrypt log send and improving license Information display by @jiannx

#### 🐛 Bug Fixes

- **[client]** association field default value overrides existing data in sub-table ([#7120](https://github.com/nocobase/nocobase/pull/7120)) by @katherinehhh
- **[Workflow]** Fix params of loading record in tasks ([#7123](https://github.com/nocobase/nocobase/pull/7123)) by @mytharcher
- **[WEB client]** Fix issue where blocks under pages were not displayed after setting role menu permissions ([#7112](https://github.com/nocobase/nocobase/pull/7112)) by @aaaaaajie
- **[Workflow: Approval]** Fix applicant variable name in trigger by @mytharcher
