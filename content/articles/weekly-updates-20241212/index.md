Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://www.nocobase.com/en/blog/tags/release-notes).

**NocoBase is currently updated with three branches: `main` , `next` and `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：The most stable version to date, recommended for installation;
* `next`：Beta version, contains upcoming new features and has been preliminarily tested. There might be some known or unknown issues. It's mainly for test users to collect feedback and optimize functions further. Ideal for test users who want to experience new features early and give feedback;
* `develop`：Alpha version, contains the latest feature code, may be incomplete or unstable, mainly for internal dev and rapid iteration. Suited for tech users interested in product's cutting-edge, but with potential issues and incomplete functions. Not for production use.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.4.3](https://www.nocobase.com/en/blog/v1.4.3)

*Release date: 2024-12-05*

#### 🚀 Improvements

- **[test]** Allow login with role name in test cases ([#5794](https://github.com/nocobase/nocobase/pull/5794)) by @mytharcher
- **[Notification: In-app message]** update titles for detail URLs in in-app-message forms and localization files ([#5742](https://github.com/nocobase/nocobase/pull/5742)) by @sheldon66

#### 🐛 Bug Fixes

- **[client]**
  - Fix the issue where the token is not cleared after a user without a role encounters a sign in error and clicks the “Sign in with another account” button ([#5790](https://github.com/nocobase/nocobase/pull/5790)) by @2013xile
  - Loss of request headers on silent requests ([#5795](https://github.com/nocobase/nocobase/pull/5795)) by @chenos
  - Blank page when user has no role ([#5797](https://github.com/nocobase/nocobase/pull/5797)) by @chenos
  - Fix scrollbar issue in sub-table with size small under compact theme ([#5796](https://github.com/nocobase/nocobase/pull/5796)) by @katherinehhh

### [v1.4.4](https://www.nocobase.com/en/blog/v1.4.4)

*Release date: 2024-12-08*

#### 🐛 Bug Fixes

- **[client]**

  - Fix  issue with external data source fields not display in table block ([#5825](https://github.com/nocobase/nocobase/pull/5825)) by @katherinehhh
  - Fix display issue for inherited fields in form configuration ([#5822](https://github.com/nocobase/nocobase/pull/5822)) by @katherinehhh
  - Fix inherited fields not appear in field list and cannot override ([#5800](https://github.com/nocobase/nocobase/pull/5800)) by @katherinehhh
- **[Data visualization]** Fix the issue when formatting timezone-aware date fields in MySQL ([#5829](https://github.com/nocobase/nocobase/pull/5829)) by @2013xile
- **[Workflow]**

  - Fix transaction across data sources which cause collection event error ([#5818](https://github.com/nocobase/nocobase/pull/5818)) by @mytharcher
  - Fix date type missed in date field based schedule configuration ([#5816](https://github.com/nocobase/nocobase/pull/5816)) by @mytharcher
- **[Collection field: Many to many (array)]** Fix the issue where updating m2m array fields in single relation collection does not take effect ([#5820](https://github.com/nocobase/nocobase/pull/5820)) by @2013xile
- **[Calendar]**

  - Fix  error when clicking on a blank date in the calendar ([#5803](https://github.com/nocobase/nocobase/pull/5803)) by @katherinehhh
  - Fix the issue where closing a popup opened through the 'Calendar Block' causes all popups to close ([#5793](https://github.com/nocobase/nocobase/pull/5793)) by @zhangzhonghe
- **[Public forms]** Fix incorrect QC code scan path in sub-application public form ([#5799](https://github.com/nocobase/nocobase/pull/5799)) by @katherinehhh

### [v1.4.5](https://www.nocobase.com/en/blog/v1.4.5)

*Release date: 2024-12-08*

#### 🐛 Bug Fixes

- **[Access control]** Refresh the page when the user's role is incorrect ([#5821](https://github.com/nocobase/nocobase/pull/5821)) by @chenos

### [v1.4.6](https://www.nocobase.com/en/blog/v1.4.6)

*Release date: 2024-12-08*

#### 🐛 Bug Fixes

- **[Action: Import records]** fix import data with table in associations ([#5833](https://github.com/nocobase/nocobase/pull/5833)) by @chareice
- **[Access control]** Fix the problem of using fields to query the relationship in the ACL ([#5832](https://github.com/nocobase/nocobase/pull/5832)) by @chareice

### [v1.4.7](https://www.nocobase.com/en/blog/v1.4.7)

*Release date: 2024-12-09*

#### 🐛 Bug Fixes

- **[Mobile]** Fix mobile background color display issue ([#5809](https://github.com/nocobase/nocobase/pull/5809)) by @katherinehhh

### [v1.4.8](https://www.nocobase.com/en/blog/v1.4.8)

*Release date: 2024-12-10*

#### 🐛 Bug Fixes

- **[client]**

  - Fix data template issue in filter form configured in association field record picker ([#5837](https://github.com/nocobase/nocobase/pull/5837)) by @katherinehhh
  - Fix issue with Markdown string templates not loading data of association data  （External dataSource） ([#5791](https://github.com/nocobase/nocobase/pull/5791)) by @katherinehhh
- **[User data synchronization]** Skip unsupported data types during synchronization instead of throwing an error. ([#5835](https://github.com/nocobase/nocobase/pull/5835)) by @chenzhizdt
- **[Backup manager]**

  - Fixed slow popup of download window for large backup files by @gchust
  - Fixed the issue where restoring a backup sub-application causes all applications to restart by @gchust

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.5.0-beta.2](https://www.nocobase.com/en/blog/v1.5.0-beta.2)

*Release date: 2024-12-06*

#### 🚀 Improvements

- **[client]** Optimize recursive logic in useMenuSearch for better performance ([#5784](https://github.com/nocobase/nocobase/pull/5784)) by @katherinehhh
- **[Public forms]** Optimize action panel and public form components for mobile adaptation ([#5788](https://github.com/nocobase/nocobase/pull/5788)) by @katherinehhh

### [v1.5.0-beta.3](https://www.nocobase.com/en/blog/v1.5.0-beta.3)

*Release date: 2024-12-10*

#### 🎉 New Features

- **[client]** Support configuring text, icon, and type for add and select buttons in sub-table ([#5778](https://github.com/nocobase/nocobase/pull/5778)) by @katherinehhh
- **[Calendar]** Calendar plugin add event opening mode ([#5808](https://github.com/nocobase/nocobase/pull/5808)) by @Cyx649312038

### [v1.5.0-beta.4](https://www.nocobase.com/en/blog/v1.5.0-beta.4)

*Release date: 2024-12-11*

#### 🐛 Bug Fixes

- **[Mobile]** Fix mobile adaptation of date component on sub-page ([#5859](https://github.com/nocobase/nocobase/pull/5859)) by @katherinehhh

### [v1.5.0-beta.6](https://www.nocobase.com/en/blog/v1.5.0-beta.6)

*Release date: 2024-12-11*

#### 🚀 Improvements

- **[client]** Remove table row skeleton component ([#5751](https://github.com/nocobase/nocobase/pull/5751)) by @zhangzhonghe

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.3](https://www.nocobase.com/en/blog/v1.6.0-alpha.3)

*Release date: 2024-12-09*

#### 🚀 Improvements

- **[client]** Remove Formily components from the table to improve performance when switching table pagination ([#5738](https://github.com/nocobase/nocobase/pull/5738)) by @zhangzhonghe

#### 🐛 Bug Fixes

- **[client]**

  - Fix the issue where fields are not displayed after adding them in a subform ([#5827](https://github.com/nocobase/nocobase/pull/5827)) by @zhangzhonghe
  - Fix the issue where changing the value of a association field in the details block does not refresh immediately ([#5826](https://github.com/nocobase/nocobase/pull/5826)) by @zhangzhonghe
  - Fix the issue where clicking links doesn't open a popup when 'Enable link' is turned on for the first time ([#5812](https://github.com/nocobase/nocobase/pull/5812)) by @zhangzhonghe
  - Prevent multiple API calls when closing the popup ([#5804](https://github.com/nocobase/nocobase/pull/5804)) by @zhangzhonghe
  - Fix the issue where mobile login redirects to desktop page ([#5805](https://github.com/nocobase/nocobase/pull/5805)) by @zhangzhonghe
  - Fix configure action button should be left-aligned ([#5798](https://github.com/nocobase/nocobase/pull/5798)) by @katherinehhh
- **[build]** Fixed incorrect caching of frontend js files after plugin build ([#5801](https://github.com/nocobase/nocobase/pull/5801)) by @gchust

## About NocoBase

NocoBase is a private, open-source, no-code platform offering total control and infinite scalability. It empowers teams to adapt quickly to changes while significantly reducing costs. Avoid years of development and substantial investment by deploying NocoBase in minutes.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Discover NocoBase in 3 Minutes!

## 👇 Get NocoBase

[**Homepage**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Documentation**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
