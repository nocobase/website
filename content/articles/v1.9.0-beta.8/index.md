### 🚀 Improvements

- **[auth]** Support using `.` in usernames ([#7504](https://github.com/nocobase/nocobase/pull/7504)) by @2013xile

- **[client]** add localization support for tooltip & group item title ([#7485](https://github.com/nocobase/nocobase/pull/7485)) by @katherinehhh

- **[Workflow: Manual node]** Support to view and resume pending manual tasks within disabled workflows ([#7493](https://github.com/nocobase/nocobase/pull/7493)) by @mytharcher

- **[Calendar]** support locale mapping display for calendar headers ([#7508](https://github.com/nocobase/nocobase/pull/7508)) by @katherinehhh

- **[Theme editor]** Add support for side menu color customization ([#7483](https://github.com/nocobase/nocobase/pull/7483)) by @duannyuuu

- **[Redis queue adapter]** Use standard system logger for Redis message queue adapter by @mytharcher

### 🐛 Bug Fixes

- **[client]**
  - Fix the issue where button icon configuration popup is being covered/overlapped ([#7506](https://github.com/nocobase/nocobase/pull/7506)) by @zhangzhonghe

  - Fix the issue where the menu icon configuration popover is being obscured ([#7515](https://github.com/nocobase/nocobase/pull/7515)) by @zhangzhonghe

  - Fix the issue where Popover component is being overlapped/covered ([#7491](https://github.com/nocobase/nocobase/pull/7491)) by @zhangzhonghe

- **[Notification: In-app message]**
  - Fix the issue of incorrect notification link parsing ([#7509](https://github.com/nocobase/nocobase/pull/7509)) by @mytharcher

  - Fix the issue where recent messages are not displayed when opening the notification popup ([#7514](https://github.com/nocobase/nocobase/pull/7514)) by @mytharcher

- **[Workflow]**
  - Fix a potential error related to workflow log caching ([#7490](https://github.com/nocobase/nocobase/pull/7490)) by @mytharcher

  - Fix the issue where incorrect subscription logic on background task queue in the workflow caused execution message incorrectly handled ([#7507](https://github.com/nocobase/nocobase/pull/7507)) by @mytharcher

- **[Data source: REST API]** fix rest api URL validation rules by @katherinehhh

- **[HTTP request encryption]** Fix the issue where request parameters do not support the native URLSearchParams type by @mytharcher

- **[Template print]** support chinaRegions field by @jiannx

- **[Workflow: Approval]**
  - Fix the issue where formula fields in the approval form do not update automatically by @mytharcher

  - Fix the issue where an error occurred when deleting data from an external data source by @mytharcher

