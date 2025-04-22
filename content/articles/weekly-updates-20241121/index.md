Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://www.nocobase.com/en/blog/tags/release-notes).

**This week we made adjustments to the version release. Subsequent version updates will include three branches: `main` , `next` and `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：The most stable version to date, recommended for installation;
* `next`：Beta version, contains upcoming new features and has been preliminarily tested. There might be some known or unknown issues. It's mainly for test users to collect feedback and optimize functions further. Ideal for test users who want to experience new features early and give feedback;
* `develop`：Alpha version, contains the latest feature code, may be incomplete or unstable, mainly for internal dev and rapid iteration. Suited for tech users interested in product's cutting-edge, but with potential issues and incomplete functions. Not for production use.

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

## [v1.3.50-beta](https://www.nocobase.com/en/blog/v1.3.50-beta)

*Release date: 2024-11-14*

### 🐛 Bug Fixes

- **[client]** Fix issue preventing linkage rule title from being cleared during editing ([#5644](https://github.com/nocobase/nocobase/pull/5644)) by @katherinehhh
- **[Comments]** Fix data scope setting not working in comment block by @katherinehhh

## [v1.3.51](https://www.nocobase.com/en/blog/v1.3.51)

*Release date: 2024-11-19*

### 🐛 Bug Fixes

- **[client]**

  - Fix  field permission check not affected by association field context ([#5672](https://github.com/nocobase/nocobase/pull/5672)) by @katherinehhh
  - Fix linkage rule saving empty value changes to static empty value ([#5667](https://github.com/nocobase/nocobase/pull/5667)) by @katherinehhh
- **[Collection field: Many to many (array)]** Fix the issue where retrieving records in an association collection with many to many (array) fields causes an error ([#5661](https://github.com/nocobase/nocobase/pull/5661)) by @2013xile
- **[Block: Gantt]** Fix gantt block template incorrectly calls the calendar block when adding ([#5673](https://github.com/nocobase/nocobase/pull/5673)) by @katherinehhh
- **[Data visualization]** Fix the issue where data transformations do not work on tooltip in dual-axes charts ([#5649](https://github.com/nocobase/nocobase/pull/5649)) by @2013xile

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

## [v1.4.0-alpha.9](https://www.nocobase.com/en/blog/v1.4.0-alpha.9)

*Release date: 2024-11-14*

### 🎉 New Features

- **[Authentication]** Allows to configure username and email fields of sign up form ([#5639](https://github.com/nocobase/nocobase/pull/5639)) by @2013xile
- **[Workflow]** support union key in collection event ([#5627](https://github.com/nocobase/nocobase/pull/5627)) by @mytharcher

### 🚀 Improvements

- **[client]** adjust default column width to 100 in table   block ([#5625](https://github.com/nocobase/nocobase/pull/5625)) by @katherinehhh
- **[Notification manager]** update in-app-message icon to bell icon ([#5638](https://github.com/nocobase/nocobase/pull/5638)) by @sheldon66
- **[Block: Action panel]** add support for block height setting in action  panel ([#5628](https://github.com/nocobase/nocobase/pull/5628)) by @katherinehhh
- **[Mobile]** Style: optimize mobile styling: reduce field spacing,and enhance compactness of field display ([#5605](https://github.com/nocobase/nocobase/pull/5605)) by @katherinehhh

### 🐛 Bug Fixes

- **[build]** Fixed the issue failing to build the plugin if containing .less file ([#5646](https://github.com/nocobase/nocobase/pull/5646)) by @gchust
- **[client]** Fix align right-fixed column in table ([#5636](https://github.com/nocobase/nocobase/pull/5636)) by @katherinehhh
- **[Workflow: Loop node]** fix wrongly condition checking in loop node ([#5634](https://github.com/nocobase/nocobase/pull/5634)) by @mytharcher
- **[Notification manager]** fix template not compiled in notification api ([#5630](https://github.com/nocobase/nocobase/pull/5630)) by @mytharcher

## [v1.4.0-alpha.10](https://www.nocobase.com/en/blog/v1.4.0-alpha.10)

*Release date: 2024-11-14*

### 🚀 Improvements

- **[client]** adjust some api of client core, and fix warning ([#5651](https://github.com/nocobase/nocobase/pull/5651)) by @mytharcher
- **[Mobile]** replace certain components with mobile component ([#5590](https://github.com/nocobase/nocobase/pull/5590)) by @katherinehhh

## [v1.4.0-alpha.11](https://www.nocobase.com/en/blog/v1.4.0-alpha.11)

*Release date: 2024-11-15*

### 🐛 Bug Fixes

- **[client]** revert modification of `openSize` props in action button ([#5656](https://github.com/nocobase/nocobase/pull/5656)) by @mytharcher

## [v1.4.0-alpha.12](https://www.nocobase.com/en/blog/v1.4.0-alpha.12)

*Release date: 2024-11-16*

### 🐛 Bug Fixes

- **[client]**

  - fix file type matching when file or property is null ([#5659](https://github.com/nocobase/nocobase/pull/5659)) by @mytharcher
  - Fix pagination count not updating after deleting data in subtable ([#5648](https://github.com/nocobase/nocobase/pull/5648)) by @katherinehhh
- **[Workflow]** fix node disappears after added condition without branch before it ([#5658](https://github.com/nocobase/nocobase/pull/5658)) by @mytharcher
- **[Mobile]** style issue when using long text as the title field in association field ([#5655](https://github.com/nocobase/nocobase/pull/5655)) by @katherinehhh
- **[Workflow: Custom action event]** Fix error when using attachment URL field with external data source by @katherinehhh

## [v1.4.0-alpha.13](https://www.nocobase.com/en/blog/v1.4.0-alpha.13)

*Release date: 2024-11-16*

### 🐛 Bug Fixes

- **[Mobile]** fix: use desktop components for select in mobile configuration mode & fix error when using variables as default values in datePicker ([#5662](https://github.com/nocobase/nocobase/pull/5662)) by @katherinehhh

## [v1.4.0-alpha.14](https://www.nocobase.com/en/blog/v1.4.0-alpha.14)

*Release date: 2024-11-17*

### 🐛 Bug Fixes

- **[Mobile]** Fix field assignment to support variable value as 0 ([#5663](https://github.com/nocobase/nocobase/pull/5663)) by @katherinehhh

## [v1.4.0-alpha.16](https://www.nocobase.com/en/blog/v1.4.0-alpha.16)

*Release date: 2024-11-18*

### 🐛 Bug Fixes

- **[build]** Fix the issue where yarn dev reports an error when there are already built plugins in the system ([#5671](https://github.com/nocobase/nocobase/pull/5671)) by @gchust
- **[Mobile]** fix: style issue on mobile when subtable is configured to allow select data only ([#5670](https://github.com/nocobase/nocobase/pull/5670)) by @katherinehhh

## [v1.4.0-alpha.17](https://www.nocobase.com/en/blog/v1.4.0-alpha.17)

*Release date: 2024-11-19*

### 🚀 Improvements

- **[Workflow]** support to register system variables in client ([#5676](https://github.com/nocobase/nocobase/pull/5676)) by @mytharcher

### 🐛 Bug Fixes

- **[client]** Fix  field permission check not affected by association field context ([#5672](https://github.com/nocobase/nocobase/pull/5672)) by @katherinehhh
- **[Block: Gantt]** Fix gantt block template incorrectly calls the calendar block when adding ([#5673](https://github.com/nocobase/nocobase/pull/5673)) by @katherinehhh
- **[Calendar]** Fix missing date field options with and without timezone in calendar block ([#5674](https://github.com/nocobase/nocobase/pull/5674)) by @katherinehhh

## [v1.4.0-beta.1](https://www.nocobase.com/en/blog/v1.4.0-beta.1)

*Release date: 2024-11-19*

### 🚀 Improvements

- **[Mobile]** Support dynamic property `hidden` for component `Tabs.TabPan` to control rendering ([#5687](https://github.com/nocobase/nocobase/pull/5687)) by @zhangzhonghe

### 🐛 Bug Fixes

- **[client]**
  - Fix clearing of date input value when switching operators in filter button and submitting date field ([#5684](https://github.com/nocobase/nocobase/pull/5684)) by @katherinehhh
  - Fix  linkage rule condition with date variable not working ([#5675](https://github.com/nocobase/nocobase/pull/5675)) by @katherinehhh

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

## [v1.5.0-alpha.1](https://www.nocobase.com/en/blog/v1.5.0-alpha.1)

*Release date: 2024-11-19*

### 🎉 New Features

- **[Redis pub sub adapter]** Add Redis sync adapter plugin by @mytharcher

## About NocoBase

NocoBase is a private, open-source, no-code platform offering total control and infinite scalability. It empowers teams to adapt quickly to changes while significantly reducing costs. Avoid years of development and substantial investment by deploying NocoBase in minutes.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Discover NocoBase in 3 Minutes!

## 👇 Get NocoBase

[**Homepage**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Documentation**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
