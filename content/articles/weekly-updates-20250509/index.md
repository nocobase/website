Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase is currently updated with three branches: `main` , `next` and `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：The most stable version to date, recommended for installation;
* `next`：Beta version, contains upcoming new features and has been preliminarily tested. There might be some known or unknown issues. It's mainly for test users to collect feedback and optimize functions further. Ideal for test users who want to experience new features early and give feedback;
* `develop`：Alpha version, contains the latest feature code, may be incomplete or unstable, mainly for internal dev and rapid iteration. Suited for tech users interested in product's cutting-edge, but with potential issues and incomplete functions. Not for production use.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.26](https://www.nocobase.com/en/blog/v1.6.26)

*Release date: 2025-05-07*

#### 🎉 New Features

- **[Block: iframe]** Iframe block supports configuring the allow attribute ([#6824](https://github.com/nocobase/nocobase/pull/6824)) by @zhangzhonghe
- **[Template print]** Feature: Support `{ label, value }` Select options in template printing. by @sheldon66

#### 🐛 Bug Fixes

- **[client]**

  - In nested subpages, the block list is not displayed when hovering the mouse over the "Add block" button ([#6832](https://github.com/nocobase/nocobase/pull/6832)) by @zhangzhonghe
  - When the relation field component of the filter form is changed to a data selector, there is no "Allow multiple selection" configuration item ([#6656](https://github.com/nocobase/nocobase/pull/6656)) by @zhangzhonghe
  - multiple error messages displayed when validation rule is violated in form fields ([#6805](https://github.com/nocobase/nocobase/pull/6805)) by @katherinehhh
  - issue with configuring linkage rules in subform (popup) within subtable ([#6803](https://github.com/nocobase/nocobase/pull/6803)) by @katherinehhh
  - Fix the issue where one-to-many field sub-fields cannot be selected as filtering options in filter forms ([#6809](https://github.com/nocobase/nocobase/pull/6809)) by @zhangzhonghe
  - subtable pagination bar style issue in read-only mode ([#6830](https://github.com/nocobase/nocobase/pull/6830)) by @katherinehhh
  - Table selector in the filter form, abnormal style ([#6827](https://github.com/nocobase/nocobase/pull/6827)) by @zhangzhonghe
- **[database]**

  - Fix belongs-to association not loaded in appends when foreign key is bigInt under MariaDB ([#6823](https://github.com/nocobase/nocobase/pull/6823)) by @mytharcher
  - Fix test cases ([#6811](https://github.com/nocobase/nocobase/pull/6811)) by @mytharcher
- **[Collection field: Attachment(URL)]** attachment (URL) fields should not allow value configuration in linkage rule ([#6831](https://github.com/nocobase/nocobase/pull/6831)) by @katherinehhh
- **[Workflow: Custom action event]** triggered workflow action linkage issue by @katherinehhh

### [v1.6.27](https://www.nocobase.com/en/blog/v1.6.27)

*Release date: 2025-05-08*

#### 🐛 Bug Fixes

- **[client]**
  - unable to drag other buttons onto the duplicate button ([#6822](https://github.com/nocobase/nocobase/pull/6822)) by @katherinehhh
  - multiple association field failed to submit when showing fields from association collection ([#6833](https://github.com/nocobase/nocobase/pull/6833)) by @katherinehhh

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.27](https://www.nocobase.com/en/blog/v1.7.0-beta.27)

*Release date: 2025-05-04*

#### 🎉 New Features

- **[client]** support variables in secondary confirmation title and content ([#6787](https://github.com/nocobase/nocobase/pull/6787)) by @katherinehhh
- **[Template print]**

  - Support for dynamic images and barcode rendering in document templates. by @sheldon66
  - Feature: Support `{ label, value }` Select options in template printing. by @sheldon66
- **[Block: Tree]** filter tree block support linkage rule by @katherinehhh
- **[Data visualization: ECharts]** Add "Y-Axis inverse" setting for bar charts by @2013xile

#### 🚀 Improvements

- **[client]** optimize subtable add button style and align paginator on the  same row ([#6790](https://github.com/nocobase/nocobase/pull/6790)) by @katherinehhh
- **[File manager]** Add OSS timeout option default to 10min ([#6795](https://github.com/nocobase/nocobase/pull/6795)) by @mytharcher
- **[Password policy]** Change default password expiration to never expire by @2013xile

#### 🐛 Bug Fixes

- **[database]**

  - Fix test cases ([#6811](https://github.com/nocobase/nocobase/pull/6811)) by @mytharcher
  - Avoid error thrown when data type is not string ([#6797](https://github.com/nocobase/nocobase/pull/6797)) by @mytharcher
- **[client]**

  - when variable selection requires async loading, the last selected menu is lost. ([#6802](https://github.com/nocobase/nocobase/pull/6802)) by @gchust
  - Fix the issue where one-to-many field sub-fields cannot be selected as filtering options in filter forms ([#6809](https://github.com/nocobase/nocobase/pull/6809)) by @zhangzhonghe
  - issue with configuring linkage rules in subform (popup) within subtable ([#6803](https://github.com/nocobase/nocobase/pull/6803)) by @katherinehhh
  - multiple error messages displayed when validation rule is violated in form fields ([#6805](https://github.com/nocobase/nocobase/pull/6805)) by @katherinehhh
  - association field not submitting data when displaying field from related collection ([#6798](https://github.com/nocobase/nocobase/pull/6798)) by @katherinehhh
  - 子表格中子表单（弹窗）联动规则缺少字段属性设置 ([#6800](https://github.com/nocobase/nocobase/pull/6800)) by @katherinehhh
- **[Authentication]** Disallow changing authenticator name ([#6808](https://github.com/nocobase/nocobase/pull/6808)) by @2013xile
- **[Action: Custom request]** custom request response set to variable not displaying correctly ([#6793](https://github.com/nocobase/nocobase/pull/6793)) by @katherinehhh

### [v1.7.0-beta.28](https://www.nocobase.com/en/blog/v1.7.0-beta.28)

*Release date: 2025-05-06*

#### 🚀 Improvements

- **[client]** RichText component support modules and formats props ([#6807](https://github.com/nocobase/nocobase/pull/6807)) by @jiannx

#### 🐛 Bug Fixes

- **[Verification]** Fix issues of migration script ([#6820](https://github.com/nocobase/nocobase/pull/6820)) by @2013xile
- **[Workflow: Custom action event]** triggered workflow action linkage issue by @katherinehhh

### [v1.7.0-beta.29](https://www.nocobase.com/en/blog/v1.7.0-beta.29)

*Release date: 2025-05-07*

#### 🎉 New Features

- **[Block: iframe]** Iframe block supports configuring the allow attribute ([#6824](https://github.com/nocobase/nocobase/pull/6824)) by @zhangzhonghe

### [v1.7.0-beta.30](https://www.nocobase.com/en/blog/v1.7.0-beta.30)

*Release date: 2025-05-08*

#### 🐛 Bug Fixes

- **[client]**

  - When the relation field component of the filter form is changed to a data selector, there is no "Allow multiple selection" configuration item ([#6656](https://github.com/nocobase/nocobase/pull/6656)) by @zhangzhonghe
  - Table selector in the filter form, abnormal style ([#6827](https://github.com/nocobase/nocobase/pull/6827)) by @zhangzhonghe
  - In nested subpages, the block list is not displayed when hovering the mouse over the "Add block" button ([#6832](https://github.com/nocobase/nocobase/pull/6832)) by @zhangzhonghe
  - multiple association field failed to submit when showing fields from association collection ([#6833](https://github.com/nocobase/nocobase/pull/6833)) by @katherinehhh
  - unable to drag other buttons onto the duplicate button ([#6822](https://github.com/nocobase/nocobase/pull/6822)) by @katherinehhh
  - subtable pagination bar style issue in read-only mode ([#6830](https://github.com/nocobase/nocobase/pull/6830)) by @katherinehhh
- **[database]** Fix belongs-to association not loaded in appends when foreign key is bigInt under MariaDB ([#6823](https://github.com/nocobase/nocobase/pull/6823)) by @mytharcher
- **[Collection field: Attachment(URL)]** attachment (URL) fields should not allow value configuration in linkage rule ([#6831](https://github.com/nocobase/nocobase/pull/6831)) by @katherinehhh

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.7.0-alpha.13](https://www.nocobase.com/en/blog/v1.7.0-alpha.13)

*Release date: 2025-05-08*

#### 🎉 New Features

- **[client]**

  - support variables in secondary confirmation title and content ([#6787](https://github.com/nocobase/nocobase/pull/6787)) by @katherinehhh
  - support configuring linkage rules in blocks for dynamic show/hide ([#6636](https://github.com/nocobase/nocobase/pull/6636)) by @katherinehhh
- **[undefined]** add publish ci for license kit ([#6786](https://github.com/nocobase/nocobase/pull/6786)) by @jiannx
- **[Block: iframe]** Iframe block supports configuring the allow attribute ([#6824](https://github.com/nocobase/nocobase/pull/6824)) by @zhangzhonghe
- **[Authentication]** Support the "Forgot Password" function ([#6616](https://github.com/nocobase/nocobase/pull/6616)) by @zhangzhonghe
  Reference: [Forgot password](https://docs.nocobase.com/handbook/auth/user#forgot-password)
- **[File manager]** Feature: Add `getFileStream` API for file streaming support. ([#6741](https://github.com/nocobase/nocobase/pull/6741)) by @sheldon66
- **[Action: Custom request]** support response variable  in success message of custom request action ([#6694](https://github.com/nocobase/nocobase/pull/6694)) by @katherinehhh
- **[Template print]** Feature: Support `{ label, value }` Select options in template printing. by @sheldon66
- **[Block: Tree]** filter tree block support linkage rule by @katherinehhh
- **[Data visualization: ECharts]** Add "Y-Axis inverse" setting for bar charts by @2013xile

#### 🚀 Improvements

- **[client]**

  - RichText component support modules and formats props ([#6807](https://github.com/nocobase/nocobase/pull/6807)) by @jiannx
  - optimize subtable add button style and align paginator on the  same row ([#6790](https://github.com/nocobase/nocobase/pull/6790)) by @katherinehhh
  - show button title with tooltip on action icon hover ([#6761](https://github.com/nocobase/nocobase/pull/6761)) by @katherinehhh
  - keep reference template funtionality ([#6743](https://github.com/nocobase/nocobase/pull/6743)) by @gchust
  - Adjust upload message ([#6757](https://github.com/nocobase/nocobase/pull/6757)) by @mytharcher
- **[utils]** Increase the height of the filter button field list and sort/categorize the fields ([#6779](https://github.com/nocobase/nocobase/pull/6779)) by @zhangzhonghe
- **[File manager]** Add OSS timeout option default to 10min ([#6795](https://github.com/nocobase/nocobase/pull/6795)) by @mytharcher
- **[Data visualization]** Add extended API for field interface configuration ([#6742](https://github.com/nocobase/nocobase/pull/6742)) by @2013xile
- **[Password policy]** Change default password expiration to never expire by @2013xile
- **[WeCom]** Prioritize corporate email over personal email when updating the user's email by @2013xile

#### 🐛 Bug Fixes

- **[database]**

  - Import failed due to text field values. ([#6699](https://github.com/nocobase/nocobase/pull/6699)) by @aaaaaajie
  - Fix belongs-to association not loaded in appends when foreign key is bigInt under MariaDB ([#6823](https://github.com/nocobase/nocobase/pull/6823)) by @mytharcher
  - Fix test cases ([#6811](https://github.com/nocobase/nocobase/pull/6811)) by @mytharcher
  - Avoid error thrown when data type is not string ([#6797](https://github.com/nocobase/nocobase/pull/6797)) by @mytharcher
  - add  unavailableActions to sql collection and view collection ([#6765](https://github.com/nocobase/nocobase/pull/6765)) by @katherinehhh
- **[client]**

  - multiple association field failed to submit when showing fields from association collection ([#6833](https://github.com/nocobase/nocobase/pull/6833)) by @katherinehhh
  - unable to drag other buttons onto the duplicate button ([#6822](https://github.com/nocobase/nocobase/pull/6822)) by @katherinehhh
  - Table selector in the filter form, abnormal style ([#6827](https://github.com/nocobase/nocobase/pull/6827)) by @zhangzhonghe
  - When the relation field component of the filter form is changed to a data selector, there is no "Allow multiple selection" configuration item ([#6656](https://github.com/nocobase/nocobase/pull/6656)) by @zhangzhonghe
  - In nested subpages, the block list is not displayed when hovering the mouse over the "Add block" button ([#6832](https://github.com/nocobase/nocobase/pull/6832)) by @zhangzhonghe
  - subtable pagination bar style issue in read-only mode ([#6830](https://github.com/nocobase/nocobase/pull/6830)) by @katherinehhh
  - issue with configuring linkage rules in subform (popup) within subtable ([#6803](https://github.com/nocobase/nocobase/pull/6803)) by @katherinehhh
  - when variable selection requires async loading, the last selected menu is lost. ([#6802](https://github.com/nocobase/nocobase/pull/6802)) by @gchust
  - multiple error messages displayed when validation rule is violated in form fields ([#6805](https://github.com/nocobase/nocobase/pull/6805)) by @katherinehhh
  - Fix the issue where one-to-many field sub-fields cannot be selected as filtering options in filter forms ([#6809](https://github.com/nocobase/nocobase/pull/6809)) by @zhangzhonghe
  - Pass other props to Variable.Input component. ([#6670](https://github.com/nocobase/nocobase/pull/6670)) by @sheldon66
  - association field not submitting data when displaying field from related collection ([#6798](https://github.com/nocobase/nocobase/pull/6798)) by @katherinehhh
  - In the filter form, switching the field operator and then refreshing the page causes an error ([#6781](https://github.com/nocobase/nocobase/pull/6781)) by @zhangzhonghe
  - In the collapse block, clicking the clear button in the relationship field search box should not delete the data range ([#6782](https://github.com/nocobase/nocobase/pull/6782)) by @zhangzhonghe
  - alignment issue of the add child record button in the tree table ([#6791](https://github.com/nocobase/nocobase/pull/6791)) by @katherinehhh
  - Prohibit moving menus before or after page tabs ([#6777](https://github.com/nocobase/nocobase/pull/6777)) by @zhangzhonghe
  - Table block displays duplicate data when filtering ([#6792](https://github.com/nocobase/nocobase/pull/6792)) by @zhangzhonghe
  - url query parameter operator issue ([#6770](https://github.com/nocobase/nocobase/pull/6770)) by @katherinehhh
  - only export action in view collection is support  when writableView is false ([#6763](https://github.com/nocobase/nocobase/pull/6763)) by @katherinehhh
  - Incorrect data retrieved for many-to-many array fields from related tables in forms ([#6744](https://github.com/nocobase/nocobase/pull/6744)) by @2013xile
  - unexpected  association data creation when displaying association field under sub-form/sub-table in create form ([#6727](https://github.com/nocobase/nocobase/pull/6727)) by @katherinehhh
- **[create-nocobase-app]** Temporarily fix mariadb issue by downgrading to 2.5.6 ([#6762](https://github.com/nocobase/nocobase/pull/6762)) by @chenos
- **[Action: Export records]** Fix the error of exporting long texts. ([#6713](https://github.com/nocobase/nocobase/pull/6713)) by @aaaaaajie
- **[Collection field: Attachment(URL)]** attachment (URL) fields should not allow value configuration in linkage rule ([#6831](https://github.com/nocobase/nocobase/pull/6831)) by @katherinehhh
- **[Verification]** Fix issues of migration script ([#6820](https://github.com/nocobase/nocobase/pull/6820)) by @2013xile
- **[Authentication]** Disallow changing authenticator name ([#6808](https://github.com/nocobase/nocobase/pull/6808)) by @2013xile
- **[Action: Custom request]** custom request response set to variable not displaying correctly ([#6793](https://github.com/nocobase/nocobase/pull/6793)) by @katherinehhh
- **[Block: Action panel]** action panel icon missing when icon-only is enabled ([#6773](https://github.com/nocobase/nocobase/pull/6773)) by @katherinehhh
- **[Workflow: Custom action event]** triggered workflow action linkage issue by @katherinehhh
- **[Workflow: date calculation node]** Fix error in legacy browser without `Intl` API by @mytharcher
- **[Template print]** Fix: Correct permission validation logic to prevent unauthorized actions. by @sheldon66
- **[File storage: S3(Pro)]** access url expiration invalid by @jiannx
- **[Block: Tree]** After connecting through a foreign key, clicking to trigger filtering results in empty filter conditions by @zhangzhonghe
