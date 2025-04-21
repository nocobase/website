Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://www.nocobase.com/en/blog/tags/release-notes).

**NocoBase is currently updated with three branches: `main` , `next` and `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：The most stable version to date, recommended for installation;
* `next`：Beta version, contains upcoming new features and has been preliminarily tested. There might be some known or unknown issues. It's mainly for test users to collect feedback and optimize functions further. Ideal for test users who want to experience new features early and give feedback;
* `develop`：Alpha version, contains the latest feature code, may be incomplete or unstable, mainly for internal dev and rapid iteration. Suited for tech users interested in product's cutting-edge, but with potential issues and incomplete functions. Not for production use.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.4.21](https://www.nocobase.com/en/blog/v1.4.21)

*Release date: 2025-01-10*

#### 🚀 Improvements

- **[client]** Support linkage rules in the details block to hide(reserved value) ([#6031](https://github.com/nocobase/nocobase/pull/6031)) by @katherinehhh

#### 🐛 Bug Fixes

- **[client]**

  - Resolve missing public path in icon file paths ([#6034](https://github.com/nocobase/nocobase/pull/6034)) by @chenos
  - Fix the issue where form linkage rules fail when they depend on field values from subtables ([#5876](https://github.com/nocobase/nocobase/pull/5876)) by @zhangzhonghe
  - Fix incorrect field of 'Current record' variable in sub-details ([#6030](https://github.com/nocobase/nocobase/pull/6030)) by @zhangzhonghe
- **[Backup manager]** Fixed backup download failure when env API_BASE_PATH is not /api by @gchust

### [v1.4.22](https://www.nocobase.com/en/blog/v1.4.22)

*Release date: 2025-01-11*

#### 🚀 Improvements

- **[evaluators]** Upgrade version of library formula.js to 4.4.9 ([#6037](https://github.com/nocobase/nocobase/pull/6037)) by @mytharcher
- **[Workflow]** Fix logger API of workflow plugin ([#6036](https://github.com/nocobase/nocobase/pull/6036)) by @mytharcher

#### 🐛 Bug Fixes

- **[Workflow]** Add defensive logic to avoid duplicate triggering ([#6022](https://github.com/nocobase/nocobase/pull/6022)) by @mytharcher

### [v1.4.23](https://www.nocobase.com/en/blog/v1.4.23)

*Release date: 2025-01-13*

#### 🐛 Bug Fixes

- **[client]** Fix the issue where fixed actions column are not working properly in tables ([#6048](https://github.com/nocobase/nocobase/pull/6048)) by @zhangzhonghe
- **[Users]** Disable browser autofill when setting passwords for users in user management ([#6041](https://github.com/nocobase/nocobase/pull/6041)) by @2013xile
- **[Workflow]** Fix date field based schedule event not triggers after app started ([#6042](https://github.com/nocobase/nocobase/pull/6042)) by @mytharcher

### [v1.4.24](https://www.nocobase.com/en/blog/v1.4.24)

*Release date: 2025-01-14*

#### 🚀 Improvements

- **[client]** datePicker component input read only ([#6061](https://github.com/nocobase/nocobase/pull/6061)) by @Cyx649312038

#### 🐛 Bug Fixes

- **[client]**

  - Fix incorrect loading of modal association  fields in table block ([#6060](https://github.com/nocobase/nocobase/pull/6060)) by @katherinehhh
  - Fix style issue in sub-table in detail block ([#6049](https://github.com/nocobase/nocobase/pull/6049)) by @katherinehhh
  - Fix number field format in readPretty mode affecting edit mode ([#6050](https://github.com/nocobase/nocobase/pull/6050)) by @katherinehhh
  - Fix table header cell style issue in ant-table ([#6052](https://github.com/nocobase/nocobase/pull/6052)) by @katherinehhh
- **[database]** fix an issue when init sort field with primary key ([#6059](https://github.com/nocobase/nocobase/pull/6059)) by @chareice
- **[Data visualization]** Remove the `LIMIT` clause when using aggregate functions without setting dimensions in chart queries ([#6062](https://github.com/nocobase/nocobase/pull/6062)) by @2013xile
- **[Backup manager]** Fixed backup download error for users only logged into sub-app by @gchust

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.5.0-beta.27](https://www.nocobase.com/en/blog/v1.5.0-beta.27)

*Release date: 2025-01-10*

#### 🚀 Improvements

- **[client]** remove linkage rules from Associate button ([#6016](https://github.com/nocobase/nocobase/pull/6016)) by @katherinehhh

#### 🐛 Bug Fixes

- **[client]**
  - Fix the issue where form linkage rules fail when they depend on field values from subtables ([#5876](https://github.com/nocobase/nocobase/pull/5876)) by @zhangzhonghe
  - Continue rendering the page after the authentication check request is completed ([#6020](https://github.com/nocobase/nocobase/pull/6020)) by @2013xile

### [v1.5.0-beta.28](https://www.nocobase.com/en/blog/v1.5.0-beta.28)

*Release date: 2025-01-14*

#### 🐛 Bug Fixes

- **[client]**
  - Fix the issue where field assignments for form buttons in workflow manual nodes are invalid ([#6054](https://github.com/nocobase/nocobase/pull/6054)) by @zhangzhonghe
  - Fix missing current popup variable in the field enable link modal ([#6045](https://github.com/nocobase/nocobase/pull/6045)) by @katherinehhh

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.11](https://www.nocobase.com/en/blog/v1.6.0-alpha.11)

*Release date: 2025-01-09*

#### 🎉 New Features

- **[client]** add schemaSetting to show file name for attachments ([#5995](https://github.com/nocobase/nocobase/pull/5995)) by @katherinehhh

### [v1.6.0-alpha.13](https://www.nocobase.com/en/blog/v1.6.0-alpha.13)

*Release date: 2025-01-14*

#### 🚀 Improvements

- **[Workflow: JSON calculation]** Change JSON query node name to JSON calculation by @mytharcher

#### 🐛 Bug Fixes

- **[Workflow]** Fix value type for DatePicker component ([#6039](https://github.com/nocobase/nocobase/pull/6039)) by @mytharcher

## About NocoBase

NocoBase is a private, open-source, no-code platform offering total control and infinite scalability. It empowers teams to adapt quickly to changes while significantly reducing costs. Avoid years of development and substantial investment by deploying NocoBase in minutes.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Discover NocoBase in 3 Minutes!

## 👇 Get NocoBase

[**Homepage**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Documentation**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
