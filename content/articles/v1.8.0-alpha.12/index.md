### 🚀 Improvements

- **[database]** Support to add pool options from env ([#7133](https://github.com/nocobase/nocobase/pull/7133)) by @mytharcher

- **[Workflow]**
  - Improve executions list load performance by excepting JSON field ([#7138](https://github.com/nocobase/nocobase/pull/7138)) by @mytharcher

  - Add log API for node testing ([#7129](https://github.com/nocobase/nocobase/pull/7129)) by @mytharcher

- **[Workflow: Approval]** Change time to absolute in timeline by @mytharcher

### 🐛 Bug Fixes

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

