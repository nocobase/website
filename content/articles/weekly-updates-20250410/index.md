Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase is currently updated with three branches: `main` , `next` and `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：The most stable version to date, recommended for installation;
* `next`：Beta version, contains upcoming new features and has been preliminarily tested. There might be some known or unknown issues. It's mainly for test users to collect feedback and optimize functions further. Ideal for test users who want to experience new features early and give feedback;
* `develop`：Alpha version, contains the latest feature code, may be incomplete or unstable, mainly for internal dev and rapid iteration. Suited for tech users interested in product's cutting-edge, but with potential issues and incomplete functions. Not for production use.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.16](https://www.nocobase.com/en/blog/v1.6.16)

*Release date: 2025-04-03*

#### 🐛 Bug Fixes

- **[client]**

  - x-disabled property not taking effect on form fields ([#6610](https://github.com/nocobase/nocobase/pull/6610)) by @katherinehhh
  - field label display issue to prevent truncation by colon ([#6599](https://github.com/nocobase/nocobase/pull/6599)) by @katherinehhh
- **[database]** When deleting one-to-many records, both `filter` and `filterByTk` are passed and `filter` includes an association field, the `filterByTk` is ignored ([#6606](https://github.com/nocobase/nocobase/pull/6606)) by @2013xile

### [v1.6.17](https://www.nocobase.com/en/blog/v1.6.17)

*Release date: 2025-04-09*

#### 🚀 Improvements

- **[utils]** Add duration extension for dayjs ([#6630](https://github.com/nocobase/nocobase/pull/6630)) by @mytharcher
- **[client]**

  - Support to search field in Filter component ([#6627](https://github.com/nocobase/nocobase/pull/6627)) by @mytharcher
  - Add `trim` API for `Input` and `Variable.TextArea` ([#6624](https://github.com/nocobase/nocobase/pull/6624)) by @mytharcher
- **[Error handler]** Support custom title in AppError component. ([#6409](https://github.com/nocobase/nocobase/pull/6409)) by @sheldon66
- **[IP restriction]** Update IP restriction message content. by @sheldon66
- **[File storage: S3(Pro)]** Support global variables in storage configuration by @mytharcher

#### 🐛 Bug Fixes

- **[client]**

  - rule with 'any' condition does not take effect when condition list is empty ([#6628](https://github.com/nocobase/nocobase/pull/6628)) by @katherinehhh
  - data issue with Gantt block in tree collection ([#6617](https://github.com/nocobase/nocobase/pull/6617)) by @katherinehhh
  - The relationship fields in the filter form report an error after the page is refreshed because x-data-source is not carried ([#6619](https://github.com/nocobase/nocobase/pull/6619)) by @zhangzhonghe
  - variable parse failure when URL parameters contain Chinese characters ([#6618](https://github.com/nocobase/nocobase/pull/6618)) by @katherinehhh
- **[Users]** Issue with parsing the user profile form schema ([#6635](https://github.com/nocobase/nocobase/pull/6635)) by @2013xile
- **[Mobile]** single-select field with 'contains' filter on mobile does not support multiple selection ([#6629](https://github.com/nocobase/nocobase/pull/6629)) by @katherinehhh
- **[Action: Export records]** missing filter params when exporting data after changing pagination ([#6633](https://github.com/nocobase/nocobase/pull/6633)) by @katherinehhh
- **[Email manager]** fix email management permission cannot view email list by @jiannx
- **[File storage: S3(Pro)]** Throw error to user when upload logo to S3 Pro storage (set to default) by @mytharcher
- **[Workflow: Approval]** Fix `updatedAt` changed after migration by @mytharcher
- **[Migration manager]** migration log creation time is displayed incorrectly in some environments by @gchust

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.14](https://www.nocobase.com/en/blog/v1.7.0-beta.14)

*Release date: 2025-04-09*

#### 🎉 New Features

- **[UI schema storage]** Added localization module for UISchema, enabling custom translations for schema title and description ([#6574](https://github.com/nocobase/nocobase/pull/6574)) by @chenos

#### 🚀 Improvements

- **[utils]** Add duration extension for dayjs ([#6630](https://github.com/nocobase/nocobase/pull/6630)) by @mytharcher
- **[client]**

  - Support to search field in Filter component ([#6627](https://github.com/nocobase/nocobase/pull/6627)) by @mytharcher
  - Add `trim` API for `Input` and `Variable.TextArea` ([#6624](https://github.com/nocobase/nocobase/pull/6624)) by @mytharcher
- **[Workflow]** Optimize save job logic ([#6613](https://github.com/nocobase/nocobase/pull/6613)) by @mytharcher
- **[Error handler]** Support custom title in AppError component. ([#6409](https://github.com/nocobase/nocobase/pull/6409)) by @sheldon66
- **[IP restriction]** Update IP restriction message content. by @sheldon66
- **[File storage: S3(Pro)]** Support global variables in storage configuration by @mytharcher

#### 🐛 Bug Fixes

- **[client]**

  - The relationship fields in the filter form report an error after the page is refreshed because x-data-source is not carried ([#6619](https://github.com/nocobase/nocobase/pull/6619)) by @zhangzhonghe
  - data issue with Gantt block in tree collection ([#6617](https://github.com/nocobase/nocobase/pull/6617)) by @katherinehhh
  - blank area between the block template configuration page title and the menu ([#6625](https://github.com/nocobase/nocobase/pull/6625)) by @gchust
  - rule with 'any' condition does not take effect when condition list is empty ([#6628](https://github.com/nocobase/nocobase/pull/6628)) by @katherinehhh
  - x-disabled property not taking effect on form fields ([#6610](https://github.com/nocobase/nocobase/pull/6610)) by @katherinehhh
  - variable parse failure when URL parameters contain Chinese characters ([#6618](https://github.com/nocobase/nocobase/pull/6618)) by @katherinehhh
  - field label display issue to prevent truncation by colon ([#6599](https://github.com/nocobase/nocobase/pull/6599)) by @katherinehhh
- **[Action: Export records]** missing filter params when exporting data after changing pagination ([#6633](https://github.com/nocobase/nocobase/pull/6633)) by @katherinehhh
- **[Users]** Issue with parsing the user profile form schema ([#6635](https://github.com/nocobase/nocobase/pull/6635)) by @2013xile
- **[Mobile]** single-select field with 'contains' filter on mobile does not support multiple selection ([#6629](https://github.com/nocobase/nocobase/pull/6629)) by @katherinehhh
- **[Access control]** Correct role union calculation logic ([#6605](https://github.com/nocobase/nocobase/pull/6605)) by @aaaaaajie
- **[Block: template]** Modify and delete same fields from template and block, after creating a block from template, can cause rendering errors ([#6626](https://github.com/nocobase/nocobase/pull/6626)) by @gchust
- **[Email manager]**

  - Fix missing await for next call. by @jiannx
  - fix email management permission cannot view email list by @jiannx
- **[File storage: S3(Pro)]**

  - Fix missing await for next call. by @jiannx
  - Throw error to user when upload logo to S3 Pro storage (set to default) by @mytharcher
- **[Workflow: Approval]** Fix `updatedAt` changed after migration by @mytharcher
- **[Migration manager]** migration log creation time is displayed incorrectly in some environments by @gchust


## About NocoBase

NocoBase is a private, open-source, no-code platform offering total control and infinite scalability. It empowers teams to adapt quickly to changes while significantly reducing costs. Avoid years of development and substantial investment by deploying NocoBase in minutes.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Discover NocoBase in 3 Minutes!

## 👇 Get NocoBase

[**Homepage**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Documentation**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
