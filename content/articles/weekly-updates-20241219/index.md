Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://www.nocobase.com/en/blog/tags/release-notes).

**NocoBase is currently updated with three branches: `main` , `next` and `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：The most stable version to date, recommended for installation;
* `next`：Beta version, contains upcoming new features and has been preliminarily tested. There might be some known or unknown issues. It's mainly for test users to collect feedback and optimize functions further. Ideal for test users who want to experience new features early and give feedback;
* `develop`：Alpha version, contains the latest feature code, may be incomplete or unstable, mainly for internal dev and rapid iteration. Suited for tech users interested in product's cutting-edge, but with potential issues and incomplete functions. Not for production use.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.4.9](https://www.nocobase.com/en/blog/v1.4.9)

*Release date: 2024-12-12*

#### 🐛 Bug Fixes

- **[sdk]** Remove the default locale ([#5867](https://github.com/nocobase/nocobase/pull/5867)) by @chenos
- **[client]**

  - Fix the issue where nested association field variables in data scope have empty values ([#5866](https://github.com/nocobase/nocobase/pull/5866)) by @zhangzhonghe
  - Fix  scroll bar appearing when there are fewer columns with a right fixed column ([#5864](https://github.com/nocobase/nocobase/pull/5864)) by @katherinehhh
  - Fix wrong position style of `FilterItem` component ([#5851](https://github.com/nocobase/nocobase/pull/5851)) by @mytharcher
- **[Backup manager]** Fixed backup download failure for sub-apps with custom domain by @gchust

### [v1.4.10](https://www.nocobase.com/en/blog/v1.4.10)

*Release date: 2024-12-12*

#### 🎉 New Features

- **[Action: Custom request]** Support using 'Current form' variable in custom request buttons ([#5871](https://github.com/nocobase/nocobase/pull/5871)) by @zhangzhonghe

#### 🚀 Improvements

- **[Data visualization]** Allows to use foreign keys in query configuration of charts ([#5869](https://github.com/nocobase/nocobase/pull/5869)) by @2013xile

#### 🐛 Bug Fixes

- **[client]** Fix issue where file table selector is not display in non-configuration mode when using file select ([#5874](https://github.com/nocobase/nocobase/pull/5874)) by @katherinehhh
- **[Access control]** Fixed issues related to replication records after configuring permissions ([#5839](https://github.com/nocobase/nocobase/pull/5839)) by @chareice
- **[Workflow]** Fix transaction timeout when deleting execution automatically ([#5870](https://github.com/nocobase/nocobase/pull/5870)) by @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.5.0-beta.7](https://www.nocobase.com/en/blog/v1.5.0-beta.7)

*Release date: 2024-12-13*

#### 🚀 Improvements

- **[Authentication]** Optimize the logic of getting metadata of audit actions. ([#5814](https://github.com/nocobase/nocobase/pull/5814)) by @chenzhizdt

#### 🐛 Bug Fixes

- **[Data visualization]** Fix the initial height of chart block ([#5879](https://github.com/nocobase/nocobase/pull/5879)) by @2013xile
- **[Workflow]** Fix error thrown when async node resuming in manually executing workflow ([#5877](https://github.com/nocobase/nocobase/pull/5877)) by @mytharcher

### [v1.5.0-beta.9](https://www.nocobase.com/en/blog/v1.5.0-beta.9)

*Release date: 2024-12-15*

#### 🎉 New Features

- **[Mobile]** add global switch to control all back buttons in mobile (default enabled) ([#5868](https://github.com/nocobase/nocobase/pull/5868)) by @katherinehhh

#### 🐛 Bug Fixes

- **[User data synchronization]** Fix display issues of sync and tasks buttons. ([#5896](https://github.com/nocobase/nocobase/pull/5896)) by @2013xile

### [v1.5.0-beta.10](https://www.nocobase.com/en/blog/v1.5.0-beta.10)

*Release date: 2024-12-18*

#### 🚀 Improvements

- **[Mobile]** Adapt time & date range picker component for mobile ([#5863](https://github.com/nocobase/nocobase/pull/5863)) by @katherinehhh

#### 🐛 Bug Fixes

- **[Data source: Main]** Fix the issue where system fields in the filter form block cannot be edited ([#5885](https://github.com/nocobase/nocobase/pull/5885)) by @zhangzhonghe

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.5](https://www.nocobase.com/en/blog/v1.6.0-alpha.5)

*Release date: 2024-12-11*

#### 🐛 Bug Fixes

- **[client]**

  - Fix the issue where the browser tab title doesn't update after switching pages ([#5857](https://github.com/nocobase/nocobase/pull/5857)) by @zhangzhonghe
  - Fix the issue where refreshing the page in the data source management page redirects to the homepage ([#5855](https://github.com/nocobase/nocobase/pull/5855)) by @zhangzhonghe
  - Fix the issue of data not changing after pagination in sub-table ([#5856](https://github.com/nocobase/nocobase/pull/5856)) by @zhangzhonghe
  - Fix the issue where role data is not displayed in the user management table ([#5846](https://github.com/nocobase/nocobase/pull/5846)) by @zhangzhonghe
  - Fix the issue where association fields in reference templates sometimes do not display data ([#5848](https://github.com/nocobase/nocobase/pull/5848)) by @zhangzhonghe
  - Fix the issue where the 'Custom Request' button is not immediately visible after being added ([#5845](https://github.com/nocobase/nocobase/pull/5845)) by @zhangzhonghe
  - Prevent hidden pages from affecting interactions with other pages ([#5836](https://github.com/nocobase/nocobase/pull/5836)) by @zhangzhonghe
  - Fix the issue where blocks added in a popup window are not displayed when reopening the popup ([#5838](https://github.com/nocobase/nocobase/pull/5838)) by @zhangzhonghe
- **[server]** Set the default available actions for the ACL ([#5847](https://github.com/nocobase/nocobase/pull/5847)) by @chenos

## About NocoBase

NocoBase is a private, open-source, no-code platform offering total control and infinite scalability. It empowers teams to adapt quickly to changes while significantly reducing costs. Avoid years of development and substantial investment by deploying NocoBase in minutes.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Discover NocoBase in 3 Minutes!

## 👇 Get NocoBase

[**Homepage**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Documentation**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
