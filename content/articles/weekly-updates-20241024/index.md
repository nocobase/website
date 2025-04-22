Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://www.nocobase.com/en/blog/tags/release-notes).

NocoBase is currently updated with two branches: `main` and `next`.

* `main`：The most stable version to date, recommended for installation;
* `next`：Alpha version, including some unreleased new features. This version may not be completely stable and is suitable for developers or testers to experience new features in advance or conduct compatibility testing.

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

## [v1.3.32-beta](https://www.nocobase.com/en/blog/v1.3.32-beta)

*Release date: 2024-10-13*

### 🐛 Bug Fixes

- **[client]** required relational field still triggers validation error after selecting a value with a variable in data scope ([#5399](https://github.com/nocobase/nocobase/pull/5399)) by @katherinehhh

## [v1.3.33-beta](https://www.nocobase.com/en/blog/v1.3.33-beta)

*Release date: 2024-10-17*

### 🚀 Improvements

- **[Workflow]** add association field related hint to the batch mode of update node ([#5426](https://github.com/nocobase/nocobase/pull/5426)) by @mytharcher

### 🐛 Bug Fixes

- **[client]**

  - fix the issue of Edit profile drawer being covered by subpage ([#5409](https://github.com/nocobase/nocobase/pull/5409)) by @zhangzhonghe
  - Workflow node variables do not display inherited collection fields ([#5415](https://github.com/nocobase/nocobase/pull/5415)) by @chenos
  - pagination not resetting after clearing filter data in table filtering block ([#5411](https://github.com/nocobase/nocobase/pull/5411)) by @katherinehhh
- **[File manager]** remove the 20 items limit of loading storages in file template collection configuration ([#5430](https://github.com/nocobase/nocobase/pull/5430)) by @mytharcher
- **[Action: Duplicate record]** Fix the issue where the bulk edit popup does not display content ([#5412](https://github.com/nocobase/nocobase/pull/5412)) by @zhangzhonghe
- **[Data visualization]** Fix the issue of default values not displaying in the chart filter block ([#5405](https://github.com/nocobase/nocobase/pull/5405)) by @zhangzhonghe

## [v1.3.34-beta](https://www.nocobase.com/en/blog/v1.3.34-beta)

*Release date: 2024-10-21*

### 🎉 New Features

- **[test]** Association fields in filter forms support configuring whether multiple selection is allowed ([#5451](https://github.com/nocobase/nocobase/pull/5451)) by @zhangzhonghe
- **[client]** Add a variable named "Parent object" ([#5449](https://github.com/nocobase/nocobase/pull/5449)) by @zhangzhonghe
  Reference: [Parent object](https://docs.nocobase.com/handbook/ui/variables#parent-object)

### 🐛 Bug Fixes

- **[client]**

  - Fix URL search params variables not being parsed ([#5454](https://github.com/nocobase/nocobase/pull/5454)) by @zhangzhonghe
  - Fix data clearing bug when selecting association data with data scope in nested sub-tables ([#5441](https://github.com/nocobase/nocobase/pull/5441)) by @katherinehhh
  - fix selected background color of table row ([#5445](https://github.com/nocobase/nocobase/pull/5445)) by @mytharcher
- **[Block: Map]** remove zoom level configuration for map fields in table column ([#5457](https://github.com/nocobase/nocobase/pull/5457)) by @katherinehhh
- **[File manager]** fix calling storage rule hook on read-pretty fields ([#5447](https://github.com/nocobase/nocobase/pull/5447)) by @mytharcher
- **[Data source: Main]** fix e2e case failed due to component changed ([#5437](https://github.com/nocobase/nocobase/pull/5437)) by @mytharcher

## [v1.3.35-beta](https://www.nocobase.com/en/blog/v1.3.35-beta)

*Release date: 2024-10-21*

### 🚀 Improvements

- **[Workflow: mailer node]** add placeholder to mailer node ([#5470](https://github.com/nocobase/nocobase/pull/5470)) by @mytharcher

## [v1.3.36-beta](https://www.nocobase.com/en/blog/v1.3.36-beta)

*Release date: 2024-10-22*

### 🐛 Bug Fixes

- **[Collection: Tree]** Fix the issue where the path collection for the inheritance tree collection is not automatically created ([#5486](https://github.com/nocobase/nocobase/pull/5486)) by @2013xile
- **[Calendar]** show pagination bar with data in the table ([#5480](https://github.com/nocobase/nocobase/pull/5480)) by @katherinehhh
- **[File manager]** fix file can not be uploaded due to rule hook. ([#5460](https://github.com/nocobase/nocobase/pull/5460)) by @mytharcher
- **[Collection field: Formula]** Fix incorrect formula calculation in nested multi-level sub-table ([#5469](https://github.com/nocobase/nocobase/pull/5469)) by @gu-zhichao

## [v1.3.37-beta](https://www.nocobase.com/en/blog/v1.3.37-beta)

*Release date: 2024-10-23*

### 🚀 Improvements

- **[client]** Adjust hint in configuration panel of binding workflow to a button ([#5494](https://github.com/nocobase/nocobase/pull/5494)) by @mytharcher

### 🐛 Bug Fixes

- **[File manager]** fix upload and destroy file record within an association block ([#5493](https://github.com/nocobase/nocobase/pull/5493)) by @mytharcher

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

## [v1.4.0-alpha.20241016035453](https://www.nocobase.com/en/blog/v1.4.0-alpha.20241016035453)

*Release date: 2024-10-16*

### 🎉 New Features

- **[sdk]** Allows to store client information into sessionStorage by setting `API_CLIENT_STORAGE_TYPE` environment variable ([#5424](https://github.com/nocobase/nocobase/pull/5424)) by @2013xile
- **[Collection field：Attachment(URL)]** Add Attachment (URL) Field by @katherinehhh

### 🚀 Improvements

- **[client]**

  - optimize remote debugging ([#5394](https://github.com/nocobase/nocobase/pull/5394)) by @chenos
  - style optimization for  centering icon when action buttons use icon-only ([#5413](https://github.com/nocobase/nocobase/pull/5413)) by @katherinehhh
  - update record automatic close message popup ([#5408](https://github.com/nocobase/nocobase/pull/5408)) by @katherinehhh
- **[Workflow: HTTP request node]** Support for SSE(Server-Sent Events) ([#5418](https://github.com/nocobase/nocobase/pull/5418)) by @chenos

### 🐛 Bug Fixes

- **[Public forms]** Fix issue with clicking settings on public form ([#5392](https://github.com/nocobase/nocobase/pull/5392)) by @katherinehhh
- **[client]**

  - Fix the issue of not displaying the value in the default value input box ([#5400](https://github.com/nocobase/nocobase/pull/5400)) by @zhangzhonghe
  - Fix the error of not finding the association field when linkage rules are set for the subtable ([#5402](https://github.com/nocobase/nocobase/pull/5402)) by @zhangzhonghe
  - fix wrongly thumbnail previewing when file type is not supported by default ([#5401](https://github.com/nocobase/nocobase/pull/5401)) by @mytharcher
- **[Localization]** Fix the issue where translations in the localization plugin do not take effect after publishing ([#5416](https://github.com/nocobase/nocobase/pull/5416)) by @2013xile

## [v1.4.0-alpha.20241017164316](https://www.nocobase.com/en/blog/v1.4.0-alpha.20241017164316)

*Release date: 2024-10-18*

### 🎉 New Features

- **[Workflow: Loop node]** add more control options to loop node configuration ([#5342](https://github.com/nocobase/nocobase/pull/5342)) by @mytharcher
  Reference: [Loop node](https://docs.nocobase.com/handbook/workflow-loop)
- **[Workflow]** Add test run button for workflow nodes, and API to implement the test function ([#5407](https://github.com/nocobase/nocobase/pull/5407)) by @mytharcher
- **[Field component: mask]** Add field component `mask`, support show field data as masked string by @gchust
  Reference: [Mask](https://docs.nocobase.com/handbook/field-component-mask)

### 🚀 Improvements

- **[client]** allow table column title to be reset to default ([#5439](https://github.com/nocobase/nocobase/pull/5439)) by @katherinehhh

### 🐛 Bug Fixes

- **[client]** fixed field component options have not been translated correctly ([#5442](https://github.com/nocobase/nocobase/pull/5442)) by @gchust
- **[Workflow: HTTP request node]** fix legacy error message in request node ([#5443](https://github.com/nocobase/nocobase/pull/5443)) by @mytharcher

## [v1.4.0-alpha.20241023053303](https://www.nocobase.com/en/blog/v1.4.0-alpha.20241023053303)

*Release date: 2024-10-23*

### 🚀 Improvements

- **[client]** subTable support pagination ([#5450](https://github.com/nocobase/nocobase/pull/5450)) by @katherinehhh
- **[Block: Kanban]** Add support for enabling or disabling drag-and-drop sorting in Kanban block ([#5468](https://github.com/nocobase/nocobase/pull/5468)) by @katherinehhh
- **[Calendar]** show create popup when select calendar slot ([#5483](https://github.com/nocobase/nocobase/pull/5483)) by @gu-zhichao
- **[Multi-app manager]** support for the USE_DB_SCHEMA_IN_SUBAPP environment variable ([#5481](https://github.com/nocobase/nocobase/pull/5481)) by @chenos
- **[Workflow]** Add card like fields set component ([#5464](https://github.com/nocobase/nocobase/pull/5464)) by @mytharcher

### 🐛 Bug Fixes

- **[client]** variable value is lost after refreshing markdown block popup ([#5478](https://github.com/nocobase/nocobase/pull/5478)) by @katherinehhh
- **[Data visualization]** Fix issues where using external oracle data source for data visualization plugin, e.g. date formatting issues ([#5436](https://github.com/nocobase/nocobase/pull/5436)) by @2013xile
- **[File manager]** fix file can not be uploaded due to rule hook. ([#5460](https://github.com/nocobase/nocobase/pull/5460)) by @mytharcher

## About NocoBase

NocoBase is a private, open-source, no-code platform offering total control and infinite scalability. It empowers teams to adapt quickly to changes while significantly reducing costs. Avoid years of development and substantial investment by deploying NocoBase in minutes.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Discover NocoBase in 3 Minutes!

## 👇 Get NocoBase

[**Homepage**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Documentation**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
