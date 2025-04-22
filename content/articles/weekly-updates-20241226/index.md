Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://www.nocobase.com/en/blog/tags/release-notes).

**NocoBase is currently updated with three branches: `main` , `next` and `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：The most stable version to date, recommended for installation;
* `next`：Beta version, contains upcoming new features and has been preliminarily tested. There might be some known or unknown issues. It's mainly for test users to collect feedback and optimize functions further. Ideal for test users who want to experience new features early and give feedback;
* `develop`：Alpha version, contains the latest feature code, may be incomplete or unstable, mainly for internal dev and rapid iteration. Suited for tech users interested in product's cutting-edge, but with potential issues and incomplete functions. Not for production use.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.4.11](https://www.nocobase.com/en/blog/v1.4.11)

*Release date: 2024-12-18*

#### 🚀 Improvements

- **[client]** Make more components support the 'Ellipsis overflow content' configuration item ([#5888](https://github.com/nocobase/nocobase/pull/5888)) by @zhangzhonghe
- **[database]** add firstOrCreate & updateOrCreate  to relation repository ([#5894](https://github.com/nocobase/nocobase/pull/5894)) by @chareice

#### 🐛 Bug Fixes

- **[client]**

  - Fix missing x-data-source parameter in duplicate request template for external data source block ([#5882](https://github.com/nocobase/nocobase/pull/5882)) by @katherinehhh
  - Fix horizontal scrollbar issue in table within plugin ([#5899](https://github.com/nocobase/nocobase/pull/5899)) by @katherinehhh
  - Fix the issue where extra 'N/A' options sometimes appear in association field dropdowns ([#5878](https://github.com/nocobase/nocobase/pull/5878)) by @zhangzhonghe
  - Fix PG view creation issue, resolve error when selecting views across schemas ([#5881](https://github.com/nocobase/nocobase/pull/5881)) by @katherinehhh
  - Fix issue with group styles in form blocks when layout is set to horizontal ([#5884](https://github.com/nocobase/nocobase/pull/5884)) by @katherinehhh
- **[Users]**

  - Fix the issue where the form is not reset after adding or editing a user in user management. ([#5875](https://github.com/nocobase/nocobase/pull/5875)) by @2013xile
  - Fix the issues where pagination settings are reset after editing and submitting user profiles on the user management  following a page switch or a change of page size. ([#5893](https://github.com/nocobase/nocobase/pull/5893)) by @2013xile
- **[Data source manager]** Fix the filtering issues with the external data source Collection ([#5890](https://github.com/nocobase/nocobase/pull/5890)) by @chareice
- **[Public forms]** Fix issue where global theme switch affects public form preview page theme ([#5883](https://github.com/nocobase/nocobase/pull/5883)) by @katherinehhh

### [v1.4.13](https://www.nocobase.com/en/blog/v1.4.13)

*Release date: 2024-12-19*

#### 🚀 Improvements

- **[Collection: SQL]** Prohibit the use of dangerous keywords and functions in SQL. ([#5913](https://github.com/nocobase/nocobase/pull/5913)) by @2013xile
- **[Theme editor]** Optimize API validation for user profile editing and password updates ([#5912](https://github.com/nocobase/nocobase/pull/5912)) by @2013xile

#### 🐛 Bug Fixes

- **[Data source: Main]** Fixed foreign key loading issues ([#5903](https://github.com/nocobase/nocobase/pull/5903)) by @chareice
- **[Collection: SQL]** Fix the issue where fields disappear after updating an SQL Collection. ([#5909](https://github.com/nocobase/nocobase/pull/5909)) by @chareice
- **[Backup manager]** Fixed restore backup is not working on Windows by @gchust

### [v1.4.14](https://www.nocobase.com/en/blog/v1.4.14)

*Release date: 2024-12-21*

#### 🐛 Bug Fixes

- **[Data visualization]** Fix the error when filtering with nested many to many associations in chart query. ([#5917](https://github.com/nocobase/nocobase/pull/5917)) by @2013xile
- **[Workflow: Aggregate node]** Fix incorrect aggregation result caused by transaction ([#5916](https://github.com/nocobase/nocobase/pull/5916)) by @mytharcher

### [v1.4.15](https://www.nocobase.com/en/blog/v1.4.15)

*Release date: 2024-12-25*

#### 🐛 Bug Fixes

- **[server]** Collections were not automatically created when enabling the plugin ([#5939](https://github.com/nocobase/nocobase/pull/5939)) by @chenos
- **[client]** Fix property field search in linkage rules not matching correct data ([#5925](https://github.com/nocobase/nocobase/pull/5925)) by @katherinehhh
- **[Workflow]**

  - Fix schedule trigger on date field without timezone ([#5938](https://github.com/nocobase/nocobase/pull/5938)) by @mytharcher
  - Fix date scope variable translation ([#5919](https://github.com/nocobase/nocobase/pull/5919)) by @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.5.0-beta.13](https://www.nocobase.com/en/blog/v1.5.0-beta.13)

*Release date: 2024-12-21*

#### 🚀 Improvements

- **[Data visualization]** Add offset param to charts-query ([#5911](https://github.com/nocobase/nocobase/pull/5911)) by @Albert-mah

### [v1.5.0-beta.14](https://www.nocobase.com/en/blog/v1.5.0-beta.14)

*Release date: 2024-12-21*

#### 🐛 Bug Fixes

- **[Data visualization]** Fix the error when filtering with nested many to many associations in chart query. ([#5917](https://github.com/nocobase/nocobase/pull/5917)) by @2013xile
- **[Workflow: Aggregate node]** Fix incorrect aggregation result caused by transaction ([#5916](https://github.com/nocobase/nocobase/pull/5916)) by @mytharcher

### [v1.5.0-beta.15](https://www.nocobase.com/en/blog/v1.5.0-beta.15)

*Release date: 2024-12-23*

#### 🎉 New Features

- **[client]** Add date limited range to the date field component ([#5852](https://github.com/nocobase/nocobase/pull/5852)) by @Cyx649312038

### [v1.5.0-beta.16](https://www.nocobase.com/en/blog/v1.5.0-beta.16)

*Release date: 2024-12-24*

#### 🐛 Bug Fixes

- **[build]** Fixed issue with loading after setting the `APP_PUBLIC_PATH` environment variable ([#5924](https://github.com/nocobase/nocobase/pull/5924)) by @gchust

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.6](https://www.nocobase.com/en/blog/v1.6.0-alpha.6)

*Release date: 2024-12-19*

#### 🎉 New Features

- **[client]** Support selecting existing data in subform for to-many association field ([#5849](https://github.com/nocobase/nocobase/pull/5849)) by @katherinehhh

### [v1.6.0-alpha.7](https://www.nocobase.com/en/blog/v1.6.0-alpha.7)

*Release date: 2024-12-25*

#### 🎉 New Features

- **[Users]** Support configuring user profile forms as well as create and edit forms in user management. ([#5698](https://github.com/nocobase/nocobase/pull/5698)) by @2013xile

## About NocoBase

NocoBase is a private, open-source, no-code platform offering total control and infinite scalability. It empowers teams to adapt quickly to changes while significantly reducing costs. Avoid years of development and substantial investment by deploying NocoBase in minutes.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Discover NocoBase in 3 Minutes!

## 👇 Get NocoBase

[**Homepage**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Documentation**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
