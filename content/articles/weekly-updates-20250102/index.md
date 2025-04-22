Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://www.nocobase.com/en/blog/tags/release-notes).

**NocoBase is currently updated with three branches: `main` , `next` and `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：The most stable version to date, recommended for installation;
* `next`：Beta version, contains upcoming new features and has been preliminarily tested. There might be some known or unknown issues. It's mainly for test users to collect feedback and optimize functions further. Ideal for test users who want to experience new features early and give feedback;
* `develop`：Alpha version, contains the latest feature code, may be incomplete or unstable, mainly for internal dev and rapid iteration. Suited for tech users interested in product's cutting-edge, but with potential issues and incomplete functions. Not for production use.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.4.16](https://www.nocobase.com/en/blog/v1.4.16)

*Release date: 2024-12-26*

#### 🐛 Bug Fixes

- **[client]** Fix UnixTimestamp field precision conversion issue ([#5931](https://github.com/nocobase/nocobase/pull/5931)) by @chenos
- **[Action: Duplicate record]** Fix o2o association field not  displaying configured target collection field in detail and form blocks ([#5921](https://github.com/nocobase/nocobase/pull/5921)) by @katherinehhh
- **[Backup manager]** Fixed backup error when the mysqldump version is below 8 by @gchust

### [v1.4.17](https://www.nocobase.com/en/blog/v1.4.17)

*Release date: 2024-12-31*

#### 🎉 New Features

- **[client]** Supports using "Table selected records" variable in m2m array fields ([#5974](https://github.com/nocobase/nocobase/pull/5974)) by @2013xile

#### 🚀 Improvements

- **[undefined]** Enable theme plugin by default ([#5957](https://github.com/nocobase/nocobase/pull/5957)) by @zhangzhonghe
- **[Data source: Main]** Added name conflict validation to prevent users from creating Collections with the same name as system Collections ([#5962](https://github.com/nocobase/nocobase/pull/5962)) by @chareice
- **[Workflow]** Avoid to misuse date range variables in most place unless filter component ([#5954](https://github.com/nocobase/nocobase/pull/5954)) by @mytharcher

#### 🐛 Bug Fixes

- **[database]**

  - Fixed an issue in destory action where filterByTk with filter parameter could not delete data ([#5976](https://github.com/nocobase/nocobase/pull/5976)) by @chareice
  - the firstOrCreate and updateOrCreate methods of the repository lose context ([#5973](https://github.com/nocobase/nocobase/pull/5973)) by @chenos
- **[client]**

  - Fix  issue  when adding a one-to-one relationship field in the form ([#5975](https://github.com/nocobase/nocobase/pull/5975)) by @katherinehhh
  - Fix issue with field assignment in subtable when re-select data after deleting data ([#5958](https://github.com/nocobase/nocobase/pull/5958)) by @katherinehhh
  - Fix the table block error caused by data containing fields named 'children' ([#5951](https://github.com/nocobase/nocobase/pull/5951)) by @zhangzhonghe
- **[Data source: Main]** Fix legacy support issues with the unixTimestamp field. ([#5967](https://github.com/nocobase/nocobase/pull/5967)) by @chareice
- **[Workflow]** Fix sub-details block throwing error in manual node UI configuration ([#5953](https://github.com/nocobase/nocobase/pull/5953)) by @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.5.0-beta.18](https://www.nocobase.com/en/blog/v1.5.0-beta.18)

*Release date: 2024-12-27*

#### 🐛 Bug Fixes

- **[client]**

  - Fix the issue of unexpected table cell display in third-party plugins ([#5934](https://github.com/nocobase/nocobase/pull/5934)) by @zhangzhonghe
  - Fix the issue where the delete button is disabled in the block template management page ([#5922](https://github.com/nocobase/nocobase/pull/5922)) by @zhangzhonghe
- **[Verification]** Fix empty form fields when opening the edit drawer in the Verification settings page ([#5949](https://github.com/nocobase/nocobase/pull/5949)) by @chenos
- **[Workflow: Custom action event]**

  - Fix test case failed on SQLite by @mytharcher
  - Fix test cases of custom action trigger by @mytharcher
- **[Workflow: Pre-action event]** Fix test cases of request interceptor by @mytharcher

### [v1.5.0-beta.19](https://www.nocobase.com/en/blog/v1.5.0-beta.19)

*Release date: 2024-12-31*

#### 🐛 Bug Fixes

- **[client]**

  - Fix date range picker in filter form/action not showing time picker when showTime is set ([#5956](https://github.com/nocobase/nocobase/pull/5956)) by @katherinehhh
  - Fix the issue where clicking on association fields does not open the popup dialog ([#5972](https://github.com/nocobase/nocobase/pull/5972)) by @zhangzhonghe
- **[Workflow: Response message]** Fix wrong parameter name used by @mytharcher

### v1.5.0-beta.20

*Release date: 2024-12-31*

#### 🎉 New Features

- **[[Action: Import records(Pro)](https://docs.nocobase.com/handbook/action-import-pro)]**: Enhance data import capabilities with support for asynchronous imports, million-row record imports, duplicate data identification and processing, data updates, and workflow triggers.
- **[[Action: Export records(Pro)](https://docs.nocobase.com/handbook/action-export-pro)]**: Enhance data export capabilities with support for asynchronous exports, million-row record exports, and attachment exports.

## About NocoBase

NocoBase is a private, open-source, no-code platform offering total control and infinite scalability. It empowers teams to adapt quickly to changes while significantly reducing costs. Avoid years of development and substantial investment by deploying NocoBase in minutes.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Discover NocoBase in 3 Minutes!

## 👇 Get NocoBase

[**Homepage**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Documentation**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
