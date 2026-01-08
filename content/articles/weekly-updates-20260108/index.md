Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase is currently updated with three branches: `main` , `next` and `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：The most stable version to date, recommended for installation;
* `next`：Beta version, contains upcoming new features and has been preliminarily tested. There might be some known or unknown issues. It's mainly for test users to collect feedback and optimize functions further. Ideal for test users who want to experience new features early and give feedback;
* `develop`：Alpha version, contains the latest feature code, may be incomplete or unstable, mainly for internal dev and rapid iteration. Suited for tech users interested in product's cutting-edge, but with potential issues and incomplete functions. Not for production use.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.33](https://www.nocobase.com/en/blog/v1.9.33)

*Release date: 2026-01-04*

### 🎉 New Features

- **[client]** Support plugin-defined maintenance components when the app enters maintenance status ([#8252](https://github.com/nocobase/nocobase/pull/8252)) by @cgyrock
- **[File manager]** Support file renaming method configuration ([#8231](https://github.com/nocobase/nocobase/pull/8231)) by @JAVA-LW
- **[File storage: S3(Pro)]** Add rename mode option for S3 Pro storage by @mytharcher

### 🚀 Improvements

- **[Migration manager]** Improved migration checks, SQL download support, log formatting, and execution process visibility by @cgyrock

### 🐛 Bug Fixes

- **[database]**

  - Include through scope when querying m2m relationships ([#8277](https://github.com/nocobase/nocobase/pull/8277)) by @2013xile
  - Fix object `appends` in `OptionsParser`, and increase `arrayLimit` for parameters ([#8328](https://github.com/nocobase/nocobase/pull/8328)) by @mytharcher
- **[client]** Fix the issue where error thrown in in filter form block settings of m2m field ([#8282](https://github.com/nocobase/nocobase/pull/8282)) by @mytharcher
- **[Async task manager]** Fix language of canceling background task ([#8245](https://github.com/nocobase/nocobase/pull/8245)) by @mytharcher
- **[File manager]** Fix the issue where error thrown when upload file larger than 5MB to AWS S3 ([#8275](https://github.com/nocobase/nocobase/pull/8275)) by @mytharcher
- **[Workflow]** Fixed database events becoming invalid after refreshing the external data source ([#8207](https://github.com/nocobase/nocobase/pull/8207)) by @cgyrock
- **[Collection: Tree]** Update paths after bulk creating tree collection nodes ([#8267](https://github.com/nocobase/nocobase/pull/8267)) by @2013xile
- **[Data source: External PostgreSQL]** Fixed database events becoming invalid after refreshing the external data source by @cgyrock
- **[Data source: External Oracle]** Fixed database events becoming invalid after refreshing the external data source by @cgyrock

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.0.0-beta.6](https://www.nocobase.com/en/blog/v2.0.0-beta.6)

*Release date: 2026-01-07*

### 🚀 Improvements

- **[Workflow: Approval]** Simplify parameters in query, and improve performance by @mytharcher

### 🐛 Bug Fixes

- **[sdk]** Improve token sharing implementation ([#8357](https://github.com/nocobase/nocobase/pull/8357)) by @chenos
- **[client]** fix association fields from external data sources not loading association data in form blocks ([#8356](https://github.com/nocobase/nocobase/pull/8356)) by @katherinehhh
- **[Workflow: Loop node]** Fix the issue where failed node in condition branch cannot pass status to upper branching node ([#8360](https://github.com/nocobase/nocobase/pull/8360)) by @mytharcher
- **[Access control]** Allow association fields to associate using the target keys ([#8352](https://github.com/nocobase/nocobase/pull/8352)) by @2013xile
- **[Workflow: Webhook]** Fix the issue where 404 error thrown when post to webhook URL in sub-app by @mytharcher
- **[Email manager]** Fix Outlook reply link occasionally disconnected by @jiannx

### [v2.0.0-beta.5](https://www.nocobase.com/en/blog/v2.0.0-beta.5)

*Release date: 2026-01-06*

### 🚀 Improvements

- **[client]** Auto-resize textarea in AI edit task form. ([#8350](https://github.com/nocobase/nocobase/pull/8350)) by @heziqiang
- **[Workflow: Approval]** Add repair logic for sync audiences after migration by @mytharcher

### 🐛 Bug Fixes

- **[client]** Fixed an issue where field and action permissions were not recalculated after pagination in details, list, and form blocks. ([#8336](https://github.com/nocobase/nocobase/pull/8336)) by @gchust
- **[Workflow: Approval]** Fix build error caused by missed dependencies by @mytharcher

### [v2.0.0-beta.4](https://www.nocobase.com/en/blog/v2.0.0-beta.4)

*Release date: 2026-01-05*

### 🐛 Bug Fixes

- **[Action: Import records]** Fix incorrect error message when a  unique constraint error is triggered during async XLSX import ([#8342](https://github.com/nocobase/nocobase/pull/8342)) by @cgyrock
- **[Action: Export records Pro]** Fix error when sub-applications execute async import/export tasks while the main application does not enable the import/export pro plugin by @cgyrock
- **[Email manager]** show reply all button and data scope supports filtering child messages. by @jiannx

### [v2.0.0-beta.3](https://www.nocobase.com/en/blog/v2.0.0-beta.3)

*Release date: 2026-01-05*

### 🚀 Improvements

- **[Access control]** Improve permission checks when modifying nested association fields ([#7856](https://github.com/nocobase/nocobase/pull/7856)) by @2013xile

### 🐛 Bug Fixes

- **[client]** Fix the issue where association fields are not correct in `FilterAction` component ([#8295](https://github.com/nocobase/nocobase/pull/8295)) by @mytharcher
- **[Data source: Main]** View collection metadata should include source field options ([#8337](https://github.com/nocobase/nocobase/pull/8337)) by @2013xile
- **[Workflow: Approval]** Fix the issue where filter fields not work correctly in tasks center by @mytharcher

### [v2.0.0-beta.2](https://www.nocobase.com/en/blog/v2.0.0-beta.2)

*Release date: 2026-01-04*

### 🐛 Bug Fixes

- **[flow-engine]** Fix an issue where state pollution could occur when opening popups multiple times. ([#8327](https://github.com/nocobase/nocobase/pull/8327)) by @gchust
- **[database]** Fix object `appends` in `OptionsParser`, and increase `arrayLimit` for parameters ([#8328](https://github.com/nocobase/nocobase/pull/8328)) by @mytharcher

### [v2.0.0-beta.1](https://www.nocobase.com/en/blog/v2.0.0-beta.1)

*Release date: 2026-01-01*

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.63](https://www.nocobase.com/en/blog/v2.0.0-alpha.63)

*Release date: 2026-01-07*

### 🚀 Improvements

- **[client]**

  - prevent full table re-render when updating a cell ([#8349](https://github.com/nocobase/nocobase/pull/8349)) by @katherinehhh
  - Auto-resize textarea in AI edit task form. ([#8350](https://github.com/nocobase/nocobase/pull/8350)) by @heziqiang
- **[Workflow: Approval]**

  - Add repair logic for sync audiences after migration by @mytharcher
  - Simplify parameters in query, and improve performance by @mytharcher

### 🐛 Bug Fixes

- **[client]**

  - Fixed an issue where field and action permissions were not recalculated after pagination in details, list, and form blocks. ([#8336](https://github.com/nocobase/nocobase/pull/8336)) by @gchust
  - fix association fields from external data sources not loading association data in form blocks ([#8356](https://github.com/nocobase/nocobase/pull/8356)) by @katherinehhh
- **[sdk]** Improve token sharing implementation ([#8357](https://github.com/nocobase/nocobase/pull/8357)) by @chenos
- **[Access control]** Allow association fields to associate using the target keys ([#8352](https://github.com/nocobase/nocobase/pull/8352)) by @2013xile
- **[Workflow: Loop node]** Fix the issue where failed node in condition branch cannot pass status to upper branching node ([#8360](https://github.com/nocobase/nocobase/pull/8360)) by @mytharcher
- **[Workflow: Webhook]** Fix the issue where 404 error thrown when post to webhook URL in sub-app by @mytharcher
- **[Workflow: Approval]** Fix build error caused by missed dependencies by @mytharcher
- **[Email manager]** Fix Outlook reply link occasionally disconnected by @jiannx

### [v2.0.0-alpha.62](https://www.nocobase.com/en/blog/v2.0.0-alpha.62)

*Release date: 2026-01-05*

### 🚀 Improvements

- **[Access control]** Improve permission checks when modifying nested association fields ([#7856](https://github.com/nocobase/nocobase/pull/7856)) by @2013xile

### 🐛 Bug Fixes

- **[client]**

  - fix refine logic for optional targetKey ([#8333](https://github.com/nocobase/nocobase/pull/8333)) by @katherinehhh
  - Fix the issue where association fields are not correct in `FilterAction` component ([#8295](https://github.com/nocobase/nocobase/pull/8295)) by @mytharcher
  - fix incorrect filter params for relation field Select in editable subtable ([#8335](https://github.com/nocobase/nocobase/pull/8335)) by @katherinehhh
- **[flow-engine]** Fix an issue where state pollution could occur when opening popups multiple times. ([#8327](https://github.com/nocobase/nocobase/pull/8327)) by @gchust
- **[database]** Fix object `appends` in `OptionsParser`, and increase `arrayLimit` for parameters ([#8328](https://github.com/nocobase/nocobase/pull/8328)) by @mytharcher
- **[Action: Import records]** Fix incorrect error message when a  unique constraint error is triggered during async XLSX import ([#8342](https://github.com/nocobase/nocobase/pull/8342)) by @cgyrock
- **[Data source: Main]** View collection metadata should include source field options ([#8337](https://github.com/nocobase/nocobase/pull/8337)) by @2013xile
- **[Action: Export records Pro]** Fix error when sub-applications execute async import/export tasks while the main application does not enable the import/export pro plugin by @cgyrock
- **[Workflow: Approval]** Fix the issue where filter fields not work correctly in tasks center by @mytharcher
- **[Email manager]** show reply all button and data scope supports filtering child messages. by @jiannx

### [v2.0.0-alpha.59](https://www.nocobase.com/en/blog/v2.0.0-alpha.59)

*Release date: 2025-12-25*

### 🚀 Improvements

- **[flow-engine]**
  - Optimize performance issues when switching configuration modes ([#8241](https://github.com/nocobase/nocobase/pull/8241)) by @zhangzhonghe
  - Support the FormData object in the runjs environment. ([#8263](https://github.com/nocobase/nocobase/pull/8263)) by @gchust

### 🐛 Bug Fixes

- **[client]** Fix stack overflow caused by infinite loop in display association fields lazy loading ([#8262](https://github.com/nocobase/nocobase/pull/8262)) by @zhangzhonghe
