### 🎉 New Features

- **[Workflow: Approval]** Support to return to any nodes in approval process by @mytharcher

### 🚀 Improvements

- **[server]** Use standard system logger for message queue ([#7480](https://github.com/nocobase/nocobase/pull/7480)) by @mytharcher

- **[client]** Remove the ellipsis popover from file list ([#7479](https://github.com/nocobase/nocobase/pull/7479)) by @mytharcher

- **[Workflow]** Optimize the workflow preparation process to support using preloaded node data ([#7476](https://github.com/nocobase/nocobase/pull/7476)) by @mytharcher

- **[Theme editor]** Add support for side menu color customization ([#7483](https://github.com/nocobase/nocobase/pull/7483)) by @duannyuuu

- **[Redis queue adapter]** Use standard system logger for Redis message queue adapter by @mytharcher

### 🐛 Bug Fixes

- **[client]**
  - Fix the issue where Popover component is being overlapped/covered ([#7491](https://github.com/nocobase/nocobase/pull/7491)) by @zhangzhonghe

  - incorrect 'not empty' check for numeric fields in linkage rule ([#7477](https://github.com/nocobase/nocobase/pull/7477)) by @katherinehhh

  - readonly select/multiselect/date/richtext still editable on public form ([#7484](https://github.com/nocobase/nocobase/pull/7484)) by @katherinehhh

- **[Workflow]** Fix a potential error related to workflow log caching ([#7490](https://github.com/nocobase/nocobase/pull/7490)) by @mytharcher

- **[HTTP request encryption]** Fix the issue where request parameters do not support the native URLSearchParams type by @mytharcher

- **[Data source: REST API]** fix rest api URL validation rules by @katherinehhh

- **[Workflow: Approval]** Fix the issue where the status text in the approval completion notification was not translated by @mytharcher

