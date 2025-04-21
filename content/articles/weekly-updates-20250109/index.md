Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://www.nocobase.com/en/blog/tags/release-notes).

**NocoBase is currently updated with three branches: `main` , `next` and `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：The most stable version to date, recommended for installation;
* `next`：Beta version, contains upcoming new features and has been preliminarily tested. There might be some known or unknown issues. It's mainly for test users to collect feedback and optimize functions further. Ideal for test users who want to experience new features early and give feedback;
* `develop`：Alpha version, contains the latest feature code, may be incomplete or unstable, mainly for internal dev and rapid iteration. Suited for tech users interested in product's cutting-edge, but with potential issues and incomplete functions. Not for production use.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.4.18](https://www.nocobase.com/en/blog/v1.4.18)

*Release date: 2025-01-06*

#### 🚀 Improvements

- **[Workflow: test kit]** Fix date fields precision in test collection ([#5983](https://github.com/nocobase/nocobase/pull/5983)) by @mytharcher

#### 🐛 Bug Fixes

- **[client]**

  - Fix scrollbar issue when setting full height for data block in subpage ([#5989](https://github.com/nocobase/nocobase/pull/5989)) by @katherinehhh
  - Fix alignment issue when action column buttons are hidden ([#5987](https://github.com/nocobase/nocobase/pull/5987)) by @katherinehhh
  - Fix issue with batch deletion of system and general fields in collection manager ([#5988](https://github.com/nocobase/nocobase/pull/5988)) by @katherinehhh
  - Fix the issue where the 'URL search params' variable is not working on mobile page ([#5968](https://github.com/nocobase/nocobase/pull/5968)) by @Cyx649312038
- **[server]** Fixed a potential app crash during backup restoration ([#5981](https://github.com/nocobase/nocobase/pull/5981)) by @gchust
- **[Mobile]** Fix the issue of bottom buttons being obscured on mobile devices ([#5991](https://github.com/nocobase/nocobase/pull/5991)) by @zhangzhonghe
- **[Data visualization]** Fixed the issue where "current popup variables" used on charts in subpages became empty after refreshing the page ([#5984](https://github.com/nocobase/nocobase/pull/5984)) by @2013xile
- **[Block: Kanban]** Fix parent collection fields not loaded in the kanban ([#5985](https://github.com/nocobase/nocobase/pull/5985)) by @katherinehhh

### [v1.4.19](https://www.nocobase.com/en/blog/v1.4.19)

*Release date: 2025-01-06*

#### 🐛 Bug Fixes

- **[client]** Fix date range picker in filter form/action not showing time picker when showTime is set ([#5994](https://github.com/nocobase/nocobase/pull/5994)) by @katherinehhh

### [v1.4.20](https://www.nocobase.com/en/blog/v1.4.20)

*Release date: 2025-01-09*

#### 🎉 New Features

- **[client]** Add app.getHref() method ([#6019](https://github.com/nocobase/nocobase/pull/6019)) by @chenos

#### 🚀 Improvements

- **[client]**

  - Allow to sort workflows when binding to action button ([#6017](https://github.com/nocobase/nocobase/pull/6017)) by @mytharcher
  - Change reference links of evaluators to doc site ([#6021](https://github.com/nocobase/nocobase/pull/6021)) by @mytharcher
  - support maxTagCount: 'responsive' in multi-select dropdown component ([#6007](https://github.com/nocobase/nocobase/pull/6007)) by @katherinehhh
  - Set default end time for time scope component in filter block to 23:59:59" ([#6012](https://github.com/nocobase/nocobase/pull/6012)) by @katherinehhh
- **[Action: Batch edit]** Refactor bulk edit form submit button: remove field assignment and linkage rule ([#6008](https://github.com/nocobase/nocobase/pull/6008)) by @katherinehhh

#### 🐛 Bug Fixes

- **[client]**

  - Fix required validation not working after deleting data in rich text editor ([#6006](https://github.com/nocobase/nocobase/pull/6006)) by @katherinehhh
  - Fix misalignment issue when action column buttons are hidden ([#6014](https://github.com/nocobase/nocobase/pull/6014)) by @katherinehhh
  - Fix Create Collections button issue on clicking Collections tab in REST API page ([#5992](https://github.com/nocobase/nocobase/pull/5992)) by @katherinehhh
  - Fix  resolve issue where targetKey can't select NanoID field in one-to-many ([#5999](https://github.com/nocobase/nocobase/pull/5999)) by @katherinehhh
  - Fix style of setting button in compact theme ([#6001](https://github.com/nocobase/nocobase/pull/6001)) by @katherinehhh
  - Fix list component style ([#5998](https://github.com/nocobase/nocobase/pull/5998)) by @mytharcher
  - Fixed the issue where headers included in client requests were being overwritten ([#6009](https://github.com/nocobase/nocobase/pull/6009)) by @2013xile
  - Fix foreignKey, targetKey, and sourceKey  should support filtering by Chinese characters ([#5997](https://github.com/nocobase/nocobase/pull/5997)) by @katherinehhh
- **[Action: Import records]** fix import with belongs to many associations that use different target key ([#6024](https://github.com/nocobase/nocobase/pull/6024)) by @chareice
- **[Block: Map]** Fix map field in detail block should  render as map block ([#6010](https://github.com/nocobase/nocobase/pull/6010)) by @katherinehhh
- **[Embed NocoBase]** The token for embed conflicts with auth by @chenos

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### v1.5.0-beta.20

*Release date: 2024-12-31*

#### 🎉 New Features

- **[[Action: Import records(Pro)](https://docs.nocobase.com/handbook/action-import-pro)]**: Enhance data import capabilities with support for asynchronous imports, million-row record imports, duplicate data identification and processing, data updates, and workflow triggers.
- **[[Action: Export records(Pro)](https://docs.nocobase.com/handbook/action-export-pro)]**: Enhance data export capabilities with support for asynchronous exports, million-row record exports, and attachment exports.

### [v1.5.0-beta.22](https://www.nocobase.com/en/blog/v1.5.0-beta.22)

*Release date: 2025-01-04*

#### 🐛 Bug Fixes

- **[client]** Fix the issue where empty sub-tables display one row of empty data on iOS ([#5990](https://github.com/nocobase/nocobase/pull/5990)) by @zhangzhonghe

### [v1.5.0-beta.26](https://www.nocobase.com/en/blog/v1.5.0-beta.26)

*Release date: 2025-01-08*

#### 🐛 Bug Fixes

- **[client]** Fix the issue where table rows cannot be dragged and sorted ([#6013](https://github.com/nocobase/nocobase/pull/6013)) by @zhangzhonghe

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.8](https://www.nocobase.com/en/blog/v1.6.0-alpha.8)

*Release date: 2025-01-02*

#### 🎉 New Features

- **[Workflow: Manual node]** Add a fixed global entry for all type of workflow todos ([#5858](https://github.com/nocobase/nocobase/pull/5858)) by @mytharcher
- **[Password policy]** Add a new plugin: Password policy, used for setting the password rules and sign-in lockout policy for all users by @2013xile
  Reference: [Password policy and user lockout](https://docs.nocobase.com/handbook/password-policy)

#### 🚀 Improvements

- **[client]** Add a filter keyword "Security" for plugin manager ([#5977](https://github.com/nocobase/nocobase/pull/5977)) by @2013xile
- **[Workflow: Custom action event]** Change API of manually execute by @mytharcher

#### 🐛 Bug Fixes

- **[Workflow]** Fix `onChange` not works in `WorkflowVariableWrapper` component ([#5964](https://github.com/nocobase/nocobase/pull/5964)) by @mytharcher

### [v1.6.0-alpha.9](https://www.nocobase.com/en/blog/v1.6.0-alpha.9)

*Release date: 2025-01-06*

#### 🚀 Improvements

- **[Mobile]** Support display current  page number for  table in mobile ([#5946](https://github.com/nocobase/nocobase/pull/5946)) by @katherinehhh
- **[File manager]** support for other storage plugins ([#5930](https://github.com/nocobase/nocobase/pull/5930)) by @jiannx

### [v1.6.0-alpha.10](https://www.nocobase.com/en/blog/v1.6.0-alpha.10)

*Release date: 2025-01-08*

#### 🎉 New Features

- **[Environment variables]** Supports configuring dynamic environment variables and secrets ([#5966](https://github.com/nocobase/nocobase/pull/5966)) by @katherinehhh

#### 🚀 Improvements

- **[client]** add more icons to the IconPicker ([#5996](https://github.com/nocobase/nocobase/pull/5996)) by @katherinehhh
- **[Collection field: Attachment(URL)]** Filter out file collections associated with plugin-file-storage-s3-pro. by @jiannx

#### 🐛 Bug Fixes

- **[Collection field: Attachment(URL)]** Fix changed API in component hook by @mytharcher

## About NocoBase

NocoBase is a private, open-source, no-code platform offering total control and infinite scalability. It empowers teams to adapt quickly to changes while significantly reducing costs. Avoid years of development and substantial investment by deploying NocoBase in minutes.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Discover NocoBase in 3 Minutes!

## 👇 Get NocoBase

[**Homepage**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Documentation**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
