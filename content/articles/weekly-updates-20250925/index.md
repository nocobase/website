Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase is currently updated with three branches: `main` , `next` and `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：The most stable version to date, recommended for installation;
* `next`：Beta version, contains upcoming new features and has been preliminarily tested. There might be some known or unknown issues. It's mainly for test users to collect feedback and optimize functions further. Ideal for test users who want to experience new features early and give feedback;
* `develop`：Alpha version, contains the latest feature code, may be incomplete or unstable, mainly for internal dev and rapid iteration. Suited for tech users interested in product's cutting-edge, but with potential issues and incomplete functions. Not for production use.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.26](https://www.nocobase.com/en/blog/v1.8.26)

*Release date: 2025-09-20*

#### 🚀 Improvements

- **[client]** add localization support for tooltip & group item title ([#7485](https://github.com/nocobase/nocobase/pull/7485)) by @katherinehhh
- **[Calendar]** support locale mapping display for calendar headers ([#7508](https://github.com/nocobase/nocobase/pull/7508)) by @katherinehhh

#### 🐛 Bug Fixes

- **[client]** Fix the issue where the menu icon configuration popover is being obscured ([#7515](https://github.com/nocobase/nocobase/pull/7515)) by @zhangzhonghe
- **[Notification: In-app message]**

  - Fix the issue of incorrect notification link parsing ([#7509](https://github.com/nocobase/nocobase/pull/7509)) by @mytharcher
  - Fix the issue where recent messages are not displayed when opening the notification popup ([#7514](https://github.com/nocobase/nocobase/pull/7514)) by @mytharcher
- **[Workflow]** Fix the issue where incorrect subscription logic on background task queue in the workflow caused execution message incorrectly handled ([#7507](https://github.com/nocobase/nocobase/pull/7507)) by @mytharcher
- **[Workflow: Approval]**

  - Fix the issue where an error occurred when deleting data from an external data source by @mytharcher
  - Fix the issue where formula fields in the approval form do not update automatically by @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.8](https://www.nocobase.com/en/blog/v1.9.0-beta.8)

*Release date: 2025-09-20*

#### 🚀 Improvements

- **[auth]** Support using `.` in usernames ([#7504](https://github.com/nocobase/nocobase/pull/7504)) by @2013xile
- **[client]** add localization support for tooltip & group item title ([#7485](https://github.com/nocobase/nocobase/pull/7485)) by @katherinehhh
- **[Workflow: Manual node]** Support to view and resume pending manual tasks within disabled workflows ([#7493](https://github.com/nocobase/nocobase/pull/7493)) by @mytharcher
- **[Calendar]** support locale mapping display for calendar headers ([#7508](https://github.com/nocobase/nocobase/pull/7508)) by @katherinehhh
- **[Theme editor]** Add support for side menu color customization ([#7483](https://github.com/nocobase/nocobase/pull/7483)) by @duannyuuu
- **[Redis queue adapter]** Use standard system logger for Redis message queue adapter by @mytharcher

#### 🐛 Bug Fixes

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

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.16](https://www.nocobase.com/en/blog/v1.9.0-alpha.16)

*Release date: 2025-09-24*

#### 🚀 Improvements

- **[client]**

  - Support to rotate image when previewing ([#7523](https://github.com/nocobase/nocobase/pull/7523)) by @mytharcher
  - add localization support for tooltip & group item title ([#7485](https://github.com/nocobase/nocobase/pull/7485)) by @katherinehhh
- **[RabbitMQ queue adapter]** improve RabbitMQ connection handling and message processing logic by @sdp-ncd

#### 🐛 Bug Fixes

- **[client]**

  - Fix the issue where sidebar submenus cannot highlight correctly ([#7520](https://github.com/nocobase/nocobase/pull/7520)) by @duannyuuu
  - Fix the issue where the menu icon configuration popover is being obscured ([#7515](https://github.com/nocobase/nocobase/pull/7515)) by @zhangzhonghe
- **[Notification: In-app message]** Fix the issue where recent messages are not displayed when opening the notification popup ([#7514](https://github.com/nocobase/nocobase/pull/7514)) by @mytharcher
- **[Workflow]** Fix the issue where the workflow list condition is incorrect when loading associated field context in the bound workflow configuration ([#7516](https://github.com/nocobase/nocobase/pull/7516)) by @mytharcher
- **[Workflow: Loop node]** Fixed the issue where the process incorrectly advanced to the next item even when loop node conditions were not satisfied ([#7521](https://github.com/nocobase/nocobase/pull/7521)) by @mytharcher
- **[Workflow: Approval]**

  - Fix the issue where an error occurred when deleting data from an external data source by @mytharcher
  - Fix the issue where formula fields in the approval form do not update automatically by @mytharcher
