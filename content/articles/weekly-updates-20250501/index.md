Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase is currently updated with three branches: `main` , `next` and `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：The most stable version to date, recommended for installation;
* `next`：Beta version, contains upcoming new features and has been preliminarily tested. There might be some known or unknown issues. It's mainly for test users to collect feedback and optimize functions further. Ideal for test users who want to experience new features early and give feedback;
* `develop`：Alpha version, contains the latest feature code, may be incomplete or unstable, mainly for internal dev and rapid iteration. Suited for tech users interested in product's cutting-edge, but with potential issues and incomplete functions. Not for production use.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.23](https://www.nocobase.com/en/blog/v1.6.23)

*Release date: 2025-04-23*

#### 🚀 Improvements

- **[cli]** Optimize internal logic of the `nocobase upgrade` command ([#6754](https://github.com/nocobase/nocobase/pull/6754)) by @chenos
- **[Template print]** Replaced datasource action control with client role-based access control. by @sheldon66

#### 🐛 Bug Fixes

- **[cli]** Auto-update package.json on upgrade ([#6747](https://github.com/nocobase/nocobase/pull/6747)) by @chenos
- **[client]**

  - missing filter for already associated data when adding association data ([#6750](https://github.com/nocobase/nocobase/pull/6750)) by @katherinehhh
  - tree table 'Add Child' button linkage rule missing 'current record' ([#6752](https://github.com/nocobase/nocobase/pull/6752)) by @katherinehhh
- **[Action: Import records]** Fix the import and export exceptions that occur when setting field permissions. ([#6677](https://github.com/nocobase/nocobase/pull/6677)) by @aaaaaajie
- **[Block: Gantt]** gantt chart block overlapping months in calendar header for month view ([#6753](https://github.com/nocobase/nocobase/pull/6753)) by @katherinehhh
- **[Action: Export records Pro]**

  - pro export button losing filter parameters after sorting table column by @katherinehhh
  - Fix the import and export exceptions that occur when setting field permissions. by @aaaaaajie
- **[File storage: S3(Pro)]** Fix response data of uploaded file by @mytharcher
- **[Workflow: Approval]** Fix preload association fields for records by @mytharcher

### [v1.6.24](https://www.nocobase.com/en/blog/v1.6.24)

*Release date: 2025-04-24*

#### 🚀 Improvements

- **[client]** Adjust upload message ([#6757](https://github.com/nocobase/nocobase/pull/6757)) by @mytharcher

#### 🐛 Bug Fixes

- **[client]**
  - only export action in view collection is support  when writableView is false ([#6763](https://github.com/nocobase/nocobase/pull/6763)) by @katherinehhh
  - unexpected  association data creation when displaying association field under sub-form/sub-table in create form ([#6727](https://github.com/nocobase/nocobase/pull/6727)) by @katherinehhh
  - Incorrect data retrieved for many-to-many array fields from related tables in forms ([#6744](https://github.com/nocobase/nocobase/pull/6744)) by @2013xile

### [v1.6.25](https://www.nocobase.com/en/blog/v1.6.25)

*Release date: 2025-04-29*

#### 🎉 New Features

- **[undefined]** add publish ci for license kit ([#6786](https://github.com/nocobase/nocobase/pull/6786)) by @jiannx
- **[Data visualization: ECharts]** Add "Y-Axis inverse" setting for bar charts by @2013xile

#### 🚀 Improvements

- **[utils]** Increase the height of the filter button field list and sort/categorize the fields ([#6779](https://github.com/nocobase/nocobase/pull/6779)) by @zhangzhonghe
- **[client]** optimize subtable add button style and align paginator on the  same row ([#6790](https://github.com/nocobase/nocobase/pull/6790)) by @katherinehhh
- **[File manager]** Add OSS timeout option default to 10min ([#6795](https://github.com/nocobase/nocobase/pull/6795)) by @mytharcher
- **[Password policy]** Change default password expiration to never expire by @2013xile
- **[WeCom]** Prioritize corporate email over personal email when updating the user's email by @2013xile

#### 🐛 Bug Fixes

- **[client]**

  - In the collapse block, clicking the clear button in the relationship field search box should not delete the data range ([#6782](https://github.com/nocobase/nocobase/pull/6782)) by @zhangzhonghe
  - association field not submitting data when displaying field from related collection ([#6798](https://github.com/nocobase/nocobase/pull/6798)) by @katherinehhh
  - Prohibit moving menus before or after page tabs ([#6777](https://github.com/nocobase/nocobase/pull/6777)) by @zhangzhonghe
  - Table block displays duplicate data when filtering ([#6792](https://github.com/nocobase/nocobase/pull/6792)) by @zhangzhonghe
  - In the filter form, switching the field operator and then refreshing the page causes an error ([#6781](https://github.com/nocobase/nocobase/pull/6781)) by @zhangzhonghe
- **[database]**

  - Avoid error thrown when data type is not string ([#6797](https://github.com/nocobase/nocobase/pull/6797)) by @mytharcher
  - add  unavailableActions to sql collection and view collection ([#6765](https://github.com/nocobase/nocobase/pull/6765)) by @katherinehhh
- **[create-nocobase-app]** Temporarily fix mariadb issue by downgrading to 2.5.6 ([#6762](https://github.com/nocobase/nocobase/pull/6762)) by @chenos
- **[Authentication]** Disallow changing authenticator name ([#6808](https://github.com/nocobase/nocobase/pull/6808)) by @2013xile
- **[Template print]** Fix: Correct permission validation logic to prevent unauthorized actions. by @sheldon66
- **[File storage: S3(Pro)]** access url expiration invalid by @jiannx
- **[Block: Tree]** After connecting through a foreign key, clicking to trigger filtering results in empty filter conditions by @zhangzhonghe

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.22](https://www.nocobase.com/en/blog/v1.7.0-beta.22)

*Release date: 2025-04-24*

#### 🚀 Improvements

- **[cli]** Optimize internal logic of the `nocobase upgrade` command ([#6754](https://github.com/nocobase/nocobase/pull/6754)) by @chenos

#### 🐛 Bug Fixes

- **[client]** display issue with linkage rules in multi-level association data ([#6755](https://github.com/nocobase/nocobase/pull/6755)) by @katherinehhh

### [v1.7.0-beta.23](https://www.nocobase.com/en/blog/v1.7.0-beta.23)

*Release date: 2025-04-24*

#### 🎉 New Features

- **[Action: Custom request]** support response variable  in success message of custom request action ([#6694](https://github.com/nocobase/nocobase/pull/6694)) by @katherinehhh

#### 🚀 Improvements

- **[client]** Adjust upload message ([#6757](https://github.com/nocobase/nocobase/pull/6757)) by @mytharcher

#### 🐛 Bug Fixes

- **[client]**
  - Incorrect data retrieved for many-to-many array fields from related tables in forms ([#6744](https://github.com/nocobase/nocobase/pull/6744)) by @2013xile
  - only export action in view collection is support  when writableView is false ([#6763](https://github.com/nocobase/nocobase/pull/6763)) by @katherinehhh
  - unexpected  association data creation when displaying association field under sub-form/sub-table in create form ([#6727](https://github.com/nocobase/nocobase/pull/6727)) by @katherinehhh

### [v1.7.0-beta.24](https://www.nocobase.com/en/blog/v1.7.0-beta.24)

*Release date: 2025-04-25*

#### 🎉 New Features

- **[client]** support configuring linkage rules in blocks for dynamic show/hide ([#6636](https://github.com/nocobase/nocobase/pull/6636)) by @katherinehhh

#### 🚀 Improvements

- **[client]** keep reference template funtionality ([#6743](https://github.com/nocobase/nocobase/pull/6743)) by @gchust
- **[Data visualization]** Add extended API for field interface configuration ([#6742](https://github.com/nocobase/nocobase/pull/6742)) by @2013xile

#### 🐛 Bug Fixes

- **[create-nocobase-app]** Temporarily fix mariadb issue by downgrading to 2.5.6 ([#6762](https://github.com/nocobase/nocobase/pull/6762)) by @chenos
- **[database]** add  unavailableActions to sql collection and view collection ([#6765](https://github.com/nocobase/nocobase/pull/6765)) by @katherinehhh
- **[client]** url query parameter operator issue ([#6770](https://github.com/nocobase/nocobase/pull/6770)) by @katherinehhh
- **[Block: Action panel]** action panel icon missing when icon-only is enabled ([#6773](https://github.com/nocobase/nocobase/pull/6773)) by @katherinehhh
- **[Workflow: date calculation node]** Fix error in legacy browser without `Intl` API by @mytharcher

### [v1.7.0-beta.25](https://www.nocobase.com/en/blog/v1.7.0-beta.25)

*Release date: 2025-04-28*

#### 🎉 New Features

- **[File manager]** Feature: Add `getFileStream` API for file streaming support. ([#6741](https://github.com/nocobase/nocobase/pull/6741)) by @sheldon66

#### 🚀 Improvements

- **[client]** show button title with tooltip on action icon hover ([#6761](https://github.com/nocobase/nocobase/pull/6761)) by @katherinehhh
- **[WeCom]** Prioritize corporate email over personal email when updating the user's email by @2013xile

#### 🐛 Bug Fixes

- **[File storage: S3(Pro)]** access url expiration invalid by @jiannx
- **[Template print]** Fix: Correct permission validation logic to prevent unauthorized actions. by @sheldon66
- **[Block: Tree]** After connecting through a foreign key, clicking to trigger filtering results in empty filter conditions by @zhangzhonghe

### [v1.7.0-beta.26](https://www.nocobase.com/en/blog/v1.7.0-beta.26)

*Release date: 2025-04-28*

#### 🎉 New Features

- **[undefined]** add publish ci for license kit ([#6786](https://github.com/nocobase/nocobase/pull/6786)) by @jiannx

#### 🚀 Improvements

- **[utils]** Increase the height of the filter button field list and sort/categorize the fields ([#6779](https://github.com/nocobase/nocobase/pull/6779)) by @zhangzhonghe

#### 🐛 Bug Fixes

- **[client]**
  - In the collapse block, clicking the clear button in the relationship field search box should not delete the data range ([#6782](https://github.com/nocobase/nocobase/pull/6782)) by @zhangzhonghe
  - In the filter form, switching the field operator and then refreshing the page causes an error ([#6781](https://github.com/nocobase/nocobase/pull/6781)) by @zhangzhonghe
  - Table block displays duplicate data when filtering ([#6792](https://github.com/nocobase/nocobase/pull/6792)) by @zhangzhonghe
  - alignment issue of the add child record button in the tree table ([#6791](https://github.com/nocobase/nocobase/pull/6791)) by @katherinehhh
  - Prohibit moving menus before or after page tabs ([#6777](https://github.com/nocobase/nocobase/pull/6777)) by @zhangzhonghe

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.7.0-alpha.12](https://www.nocobase.com/en/blog/v1.7.0-alpha.12)

*Release date: 2025-04-24*

#### 🚀 Improvements

- **[cli]** Optimize internal logic of the `nocobase upgrade` command ([#6754](https://github.com/nocobase/nocobase/pull/6754)) by @chenos
- **[create-nocobase-app]** Upgrade dependencies and remove SQLite support ([#6708](https://github.com/nocobase/nocobase/pull/6708)) by @chenos
- **[Mobile]** Optimize the opening speed of the mobile date picker popup ([#6735](https://github.com/nocobase/nocobase/pull/6735)) by @zhangzhonghe
- **[Block: template]** support convert template block to normal block ([#6662](https://github.com/nocobase/nocobase/pull/6662)) by @gchust
- **[File manager]** Expose utils API ([#6705](https://github.com/nocobase/nocobase/pull/6705)) by @mytharcher
- **[Theme editor]** Allow setting sidebar width in theme config ([#6720](https://github.com/nocobase/nocobase/pull/6720)) by @chenos
- **[Workflow]** Add date types to variable types set ([#6717](https://github.com/nocobase/nocobase/pull/6717)) by @mytharcher
- **[Template print]** Replaced datasource action control with client role-based access control. by @sheldon66

#### 🐛 Bug Fixes

- **[client]**

  - display issue with linkage rules in multi-level association data ([#6755](https://github.com/nocobase/nocobase/pull/6755)) by @katherinehhh
  - tree table 'Add Child' button linkage rule missing 'current record' ([#6752](https://github.com/nocobase/nocobase/pull/6752)) by @katherinehhh
  - Problem with refreshing data blocks after successful submission ([#6748](https://github.com/nocobase/nocobase/pull/6748)) by @zhangzhonghe
  - The issue of the collapse button in the left menu being obscured by the workflow pop-up window ([#6733](https://github.com/nocobase/nocobase/pull/6733)) by @zhangzhonghe
  - The problem of mobile top navigation bar icons being difficult to delete ([#6734](https://github.com/nocobase/nocobase/pull/6734)) by @zhangzhonghe
  - incorrect value display for "Enable index column" ([#6724](https://github.com/nocobase/nocobase/pull/6724)) by @katherinehhh
  - date time field condition not working in linkage rules ([#6728](https://github.com/nocobase/nocobase/pull/6728)) by @katherinehhh
  - missing action option constraints when reopening linkage rules ([#6723](https://github.com/nocobase/nocobase/pull/6723)) by @katherinehhh
  - Required fields hidden by linkage rules should not affect form submission ([#6709](https://github.com/nocobase/nocobase/pull/6709)) by @zhangzhonghe
  - missing filter for already associated data when adding association data ([#6750](https://github.com/nocobase/nocobase/pull/6750)) by @katherinehhh
- **[server]** appVersion incorrectly generated by create-migration ([#6740](https://github.com/nocobase/nocobase/pull/6740)) by @chenos
- **[cli]** Auto-update package.json on upgrade ([#6747](https://github.com/nocobase/nocobase/pull/6747)) by @chenos
- **[build]** Fix error thrown in tar command ([#6722](https://github.com/nocobase/nocobase/pull/6722)) by @mytharcher
- **[Block: Gantt]** gantt chart block overlapping months in calendar header for month view ([#6753](https://github.com/nocobase/nocobase/pull/6753)) by @katherinehhh
- **[Action: Import records]** Fix the import and export exceptions that occur when setting field permissions. ([#6677](https://github.com/nocobase/nocobase/pull/6677)) by @aaaaaajie
- **[Block: template]** block templates can't be used in mysql envrionment ([#6726](https://github.com/nocobase/nocobase/pull/6726)) by @gchust
- **[Workflow]** Fix error thrown when execute schedule event in subflow ([#6721](https://github.com/nocobase/nocobase/pull/6721)) by @mytharcher
- **[Workflow: Custom action event]** Support to execute in multiple records mode by @mytharcher
- **[Action: Export records Pro]**

  - Fix the import and export exceptions that occur when setting field permissions. by @aaaaaajie
  - pro export button losing filter parameters after sorting table column by @katherinehhh
- **[File storage: S3(Pro)]**

  - Fix response data of uploaded file by @mytharcher
  - Add multer make logic for server-side upload by @mytharcher
- **[Workflow: Approval]** Fix preload association fields for records by @mytharcher
