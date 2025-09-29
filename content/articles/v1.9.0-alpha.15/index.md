### 🚀 Improvements

- **[auth]** Support using `.` in usernames ([#7504](https://github.com/nocobase/nocobase/pull/7504)) by @2013xile
- **[server]** Use standard system logger for message queue ([#7480](https://github.com/nocobase/nocobase/pull/7480)) by @mytharcher
- **[snowflake-id]** Change the IDs of system tables with auto-increment primary keys but no unique identifiers to 53-bit Snowflake-like IDs ([#7465](https://github.com/nocobase/nocobase/pull/7465)) by @2013xile
- **[Calendar]** support locale mapping display for calendar headers ([#7508](https://github.com/nocobase/nocobase/pull/7508)) by @katherinehhh
- **[Workflow: Manual node]** Support to view and resume pending manual tasks within disabled workflows ([#7493](https://github.com/nocobase/nocobase/pull/7493)) by @mytharcher
- **[Theme editor]** Add support for side menu color customization ([#7483](https://github.com/nocobase/nocobase/pull/7483)) by @duannyuuu
- **[Redis queue adapter]** Use standard system logger for Redis message queue adapter by @mytharcher

### 🐛 Bug Fixes

- **[client]**

  - Fix the issue where button icon configuration popup is being covered/overlapped ([#7506](https://github.com/nocobase/nocobase/pull/7506)) by @zhangzhonghe
  - Fix the issue where Popover component is being overlapped/covered ([#7491](https://github.com/nocobase/nocobase/pull/7491)) by @zhangzhonghe
  - readonly select/multiselect/date/richtext still editable on public form ([#7484](https://github.com/nocobase/nocobase/pull/7484)) by @katherinehhh
- **[Workflow]**

  - Fix the issue where incorrect subscription logic on background task queue in the workflow caused execution message incorrectly handled ([#7507](https://github.com/nocobase/nocobase/pull/7507)) by @mytharcher
  - Fix a potential error related to workflow log caching ([#7490](https://github.com/nocobase/nocobase/pull/7490)) by @mytharcher
- **[Notification: In-app message]** Fix the issue of incorrect notification link parsing ([#7509](https://github.com/nocobase/nocobase/pull/7509)) by @mytharcher
- **[Data source: REST API]** fix rest api URL validation rules by @katherinehhh
- **[HTTP request encryption]** Fix the issue where request parameters do not support the native URLSearchParams type by @mytharcher
- **[Template print]** support chinaRegions field by @jiannx
- **[Email manager]** Fix the issue of garbage subject by @jiannx
