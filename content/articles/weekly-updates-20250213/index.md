Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://www.nocobase.com/en/blog/tags/release-notes).

**Last week we released [NocoBase 1.5.0 version](https://www.nocobase.com/en/blog/nocobase-1-5-0), which brings core optimizations, large-scale data import/export, email management, template printing, and many other new features.**

**NocoBase is currently updated with three branches: `main` , `next` and `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：The most stable version to date, recommended for installation;
* `next`：Beta version, contains upcoming new features and has been preliminarily tested. There might be some known or unknown issues. It's mainly for test users to collect feedback and optimize functions further. Ideal for test users who want to experience new features early and give feedback;
* `develop`：Alpha version, contains the latest feature code, may be incomplete or unstable, mainly for internal dev and rapid iteration. Suited for tech users interested in product's cutting-edge, but with potential issues and incomplete functions. Not for production use.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.5.1](https://www.nocobase.com/en/blog/v1.5.1)

*Release date: 2025-02-06*

#### 🐛 Bug Fixes

- **[client]**
  - Incorrect translation for title of `Sub-form(Popover)` ([#6159](https://github.com/nocobase/nocobase/pull/6159)) by @gchust
  - When the subform field is set to 'Hidden (reserved value)', its default value variables fail to function properly ([#6165](https://github.com/nocobase/nocobase/pull/6165)) by @zhangzhonghe

### [v1.5.2](https://www.nocobase.com/en/blog/v1.5.2)

*Release date: 2025-02-06*

#### 🚀 Improvements

- **[Mobile]** Hide mobile config page header when no config permission ([#6171](https://github.com/nocobase/nocobase/pull/6171)) by @zhangzhonghe

#### 🐛 Bug Fixes

- **[Workflow: notification node]** Ensured notifications are sent correctly when user input contains Handlebars-like syntax. ([#6164](https://github.com/nocobase/nocobase/pull/6164)) by @sheldon66
- **[Workflow: Manual node]** Fix form values not parsed in terminal button submitting ([#6160](https://github.com/nocobase/nocobase/pull/6160)) by @mytharcher

### [v1.5.3](https://www.nocobase.com/en/blog/v1.5.3)

*Release date: 2025-02-07*

#### 🐛 Bug Fixes

- **[client]**
  - The popup opened by clicking the belongsToArray field is fetching incorrect data ([#6173](https://github.com/nocobase/nocobase/pull/6173)) by @zhangzhonghe
  - time field operator set to "between" in filter form, but component didn't change to time range picker ([#6170](https://github.com/nocobase/nocobase/pull/6170)) by @katherinehhh
  - Kanban and calendar block popup edit form didn't show "Unsaved changes" ([#6172](https://github.com/nocobase/nocobase/pull/6172)) by @katherinehhh

### [v1.5.4](https://www.nocobase.com/en/blog/v1.5.4)

*Release date: 2025-02-10*

#### 🚀 Improvements

- **[Workflow]** Add loading to duplicate action ([#6179](https://github.com/nocobase/nocobase/pull/6179)) by @mytharcher

#### 🐛 Bug Fixes

- **[client]**

  - Fix error thrown in create node field settings ([#6187](https://github.com/nocobase/nocobase/pull/6187)) by @mytharcher
  - The 'Allow Multiple Selection' configuration option for association fields is not displayed in Filter Forms ([#6174](https://github.com/nocobase/nocobase/pull/6174)) by @zhangzhonghe
  - Field remains hidden after being hidden by linkage rules ([#6182](https://github.com/nocobase/nocobase/pull/6182)) by @zhangzhonghe
- **[utils]** optimize the storage/plugins reading logic ([#6186](https://github.com/nocobase/nocobase/pull/6186)) by @chenos
- **[Notification: In-app message]** Fix: Add user filter to message timestamp and title subqueries in channel list API to ensure data isolation. ([#6185](https://github.com/nocobase/nocobase/pull/6185)) by @deepure
- **[Backup manager]** Files were not copied from the backup to the uploads folder during tolerant mode restore by @gchust

### [v1.5.5](https://www.nocobase.com/en/blog/v1.5.5)

*Release date: 2025-02-11*

#### 🚀 Improvements

- **[Notification: In-app message]** Add test for retrieving latest message title and timestamp in in-app channels. ([#6189](https://github.com/nocobase/nocobase/pull/6189)) by @sheldon66

### [v1.5.6](https://www.nocobase.com/en/blog/v1.5.6)

*Release date: 2025-02-12*

#### 🐛 Bug Fixes

- **[client]**

  - Block does not refresh after page navigation ([#6200](https://github.com/nocobase/nocobase/pull/6200)) by @zhangzhonghe
  - Form block not displayed when adding a create form via a popup action in a table row ([#6190](https://github.com/nocobase/nocobase/pull/6190)) by @katherinehhh
  - table block height setting not applied when there is no data ([#6192](https://github.com/nocobase/nocobase/pull/6192)) by @katherinehhh
- **[Action: Custom request]**

  - Incorrect 'Current record' variable value in custom request button ([#6196](https://github.com/nocobase/nocobase/pull/6196)) by @zhangzhonghe
  - Custom request button compatibility with legacy variables ([#6194](https://github.com/nocobase/nocobase/pull/6194)) by @zhangzhonghe
- **[Data visualization]** Chart blocks do not display when added to the popups of action panel ([#6198](https://github.com/nocobase/nocobase/pull/6198)) by @2013xile

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.6.0-beta.4](https://www.nocobase.com/en/blog/v1.6.0-beta.4)

*Release date: 2025-02-11*

#### 🚀 Improvements

- **[Backup manager]** Remove tolerent mode from UI by @gchust

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.21](https://www.nocobase.com/en/blog/v1.6.0-alpha.21)

*Release date: 2025-02-07*

#### 🎉 New Features

- **[IP restriction]** Fix app error  when IP restriction config not exists. by @sheldon66

#### 🐛 Bug Fixes

- **[auth]** Update client auth middleware logic to prevent token update failure due to concurrency. ([#6135](https://github.com/nocobase/nocobase/pull/6135)) by @sheldon66

### [v1.6.0-alpha.23](https://www.nocobase.com/en/blog/v1.6.0-alpha.23)

*Release date: 2025-02-07*

#### 🐛 Bug Fixes

- **[client]** Fix "Select from existing data" option still showing when disabling “Allow multiple ” in to-many relation subform ([#6167](https://github.com/nocobase/nocobase/pull/6167)) by @katherinehhh
- **[Data source manager]** Use loginWithJti to update authentication-related test cases and prevent errors. ([#6175](https://github.com/nocobase/nocobase/pull/6175)) by @sheldon66
- **[WEB client]** Routing permissions abnormal after upgrade ([#6177](https://github.com/nocobase/nocobase/pull/6177)) by @zhangzhonghe

### [v1.6.0-alpha.24](https://www.nocobase.com/en/blog/v1.6.0-alpha.24)

*Release date: 2025-02-11*

#### 🎉 New Features

- **[Localization]** Localization for desktop and mobile routes ([#6180](https://github.com/nocobase/nocobase/pull/6180)) by @2013xile

#### 🚀 Improvements

- **[client]** Page title defaults to using the route's title ([#6188](https://github.com/nocobase/nocobase/pull/6188)) by @zhangzhonghe
- **[Data source manager]** Modify the test function login to be asynchronous and update the relevant test cases. ([#6181](https://github.com/nocobase/nocobase/pull/6181)) by @sheldon66
- **[Workflow: Custom action event]** Update the relevant test cases to use async login. by @sheldon66
- **[Workflow: Approval]** Update the relevant test cases to use async login. by @sheldon66

#### 🐛 Bug Fixes

- **[WEB client]** Remove default page tab title ([#6178](https://github.com/nocobase/nocobase/pull/6178)) by @zhangzhonghe

## About NocoBase

NocoBase is a private, open-source, no-code platform offering total control and infinite scalability. It empowers teams to adapt quickly to changes while significantly reducing costs. Avoid years of development and substantial investment by deploying NocoBase in minutes.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Discover NocoBase in 3 Minutes!

## 👇 Get NocoBase

[**Homepage**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Documentation**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
