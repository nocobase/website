Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase is currently updated with three branches: `main` , `next` and `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：The most stable version to date, recommended for installation;
* `next`：Beta version, contains upcoming new features and has been preliminarily tested. There might be some known or unknown issues. It's mainly for test users to collect feedback and optimize functions further. Ideal for test users who want to experience new features early and give feedback;
* `develop`：Alpha version, contains the latest feature code, may be incomplete or unstable, mainly for internal dev and rapid iteration. Suited for tech users interested in product's cutting-edge, but with potential issues and incomplete functions. Not for production use.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.25](https://www.nocobase.com/en/blog/v1.8.25)

*Release date: 2025-09-17*

#### 🚀 Improvements

- **[auth]** Support using `.` in usernames ([#7504](https://github.com/nocobase/nocobase/pull/7504)) by @2013xile

#### 🐛 Bug Fixes

- **[client]** Fix the issue where button icon configuration popup is being covered/overlapped ([#7506](https://github.com/nocobase/nocobase/pull/7506)) by @zhangzhonghe
- **[Template print]** support chinaRegions field by @jiannx

### [v1.8.24](https://www.nocobase.com/en/blog/v1.8.24)

*Release date: 2025-09-13*

#### 🎉 New Features

- **[Workflow: Approval]** Support to return to any nodes in approval process by @mytharcher

#### 🚀 Improvements

- **[server]** Use standard system logger for message queue ([#7480](https://github.com/nocobase/nocobase/pull/7480)) by @mytharcher
- **[client]** Remove the ellipsis popover from file list ([#7479](https://github.com/nocobase/nocobase/pull/7479)) by @mytharcher
- **[Workflow]** Optimize the workflow preparation process to support using preloaded node data ([#7476](https://github.com/nocobase/nocobase/pull/7476)) by @mytharcher
- **[Theme editor]** Add support for side menu color customization ([#7483](https://github.com/nocobase/nocobase/pull/7483)) by @duannyuuu
- **[Redis queue adapter]** Use standard system logger for Redis message queue adapter by @mytharcher

#### 🐛 Bug Fixes

- **[client]**

  - Fix the issue where Popover component is being overlapped/covered ([#7491](https://github.com/nocobase/nocobase/pull/7491)) by @zhangzhonghe
  - incorrect 'not empty' check for numeric fields in linkage rule ([#7477](https://github.com/nocobase/nocobase/pull/7477)) by @katherinehhh
  - readonly select/multiselect/date/richtext still editable on public form ([#7484](https://github.com/nocobase/nocobase/pull/7484)) by @katherinehhh
- **[Workflow]** Fix a potential error related to workflow log caching ([#7490](https://github.com/nocobase/nocobase/pull/7490)) by @mytharcher
- **[HTTP request encryption]** Fix the issue where request parameters do not support the native URLSearchParams type by @mytharcher
- **[Data source: REST API]** fix rest api URL validation rules by @katherinehhh
- **[Workflow: Approval]** Fix the issue where the status text in the approval completion notification was not translated by @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.15](https://www.nocobase.com/en/blog/v1.9.0-alpha.15)

*Release date: 2025-09-17*

#### 🚀 Improvements

- **[auth]** Support using `.` in usernames ([#7504](https://github.com/nocobase/nocobase/pull/7504)) by @2013xile
- **[server]** Use standard system logger for message queue ([#7480](https://github.com/nocobase/nocobase/pull/7480)) by @mytharcher
- **[snowflake-id]** Change the IDs of system tables with auto-increment primary keys but no unique identifiers to 53-bit Snowflake-like IDs ([#7465](https://github.com/nocobase/nocobase/pull/7465)) by @2013xile
- **[Calendar]** support locale mapping display for calendar headers ([#7508](https://github.com/nocobase/nocobase/pull/7508)) by @katherinehhh
- **[Workflow: Manual node]** Support to view and resume pending manual tasks within disabled workflows ([#7493](https://github.com/nocobase/nocobase/pull/7493)) by @mytharcher
- **[Theme editor]** Add support for side menu color customization ([#7483](https://github.com/nocobase/nocobase/pull/7483)) by @duannyuuu
- **[Redis queue adapter]** Use standard system logger for Redis message queue adapter by @mytharcher

#### 🐛 Bug Fixes

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
