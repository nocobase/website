Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase is currently updated with three branches: `main` , `next` and `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：The most stable version to date, recommended for installation;
* `next`：Beta version, contains upcoming new features and has been preliminarily tested. There might be some known or unknown issues. It's mainly for test users to collect feedback and optimize functions further. Ideal for test users who want to experience new features early and give feedback;
* `develop`：Alpha version, contains the latest feature code, may be incomplete or unstable, mainly for internal dev and rapid iteration. Suited for tech users interested in product's cutting-edge, but with potential issues and incomplete functions. Not for production use.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.11](https://www.nocobase.com/en/blog/v1.6.11)

*Release date: 2025-03-27*

#### 🚀 Improvements

- **[client]**

  - Optimize 502 error message ([#6547](https://github.com/nocobase/nocobase/pull/6547)) by @chenos
  - Only support plain text file to preview ([#6563](https://github.com/nocobase/nocobase/pull/6563)) by @mytharcher
- **[Collection field: Sequence]** support setting sequence as the title field for calendar block ([#6562](https://github.com/nocobase/nocobase/pull/6562)) by @katherinehhh
- **[Workflow: Approval]** Support to skip validator in settings by @mytharcher

#### 🐛 Bug Fixes

- **[client]**

  - issue with date field display in data scope filtering ([#6564](https://github.com/nocobase/nocobase/pull/6564)) by @katherinehhh
  - The 'Ellipsis overflow content' option requires a page refresh for the toggle state to take effect ([#6520](https://github.com/nocobase/nocobase/pull/6520)) by @zhangzhonghe
  - Unable to open another modal within a modal ([#6535](https://github.com/nocobase/nocobase/pull/6535)) by @zhangzhonghe
- **[API documentation]** API document page cannot scroll ([#6566](https://github.com/nocobase/nocobase/pull/6566)) by @zhangzhonghe
- **[Workflow]** Make sure workflow key is generated before save ([#6567](https://github.com/nocobase/nocobase/pull/6567)) by @mytharcher
- **[Workflow: Post-action event]** Multiple records in bulk action should trigger multiple times ([#6559](https://github.com/nocobase/nocobase/pull/6559)) by @mytharcher
- **[Authentication]** Localization issue for fields of sign up page ([#6556](https://github.com/nocobase/nocobase/pull/6556)) by @2013xile
- **[Public forms]** issue with public form page title displaying 'Loading...' ([#6569](https://github.com/nocobase/nocobase/pull/6569)) by @katherinehhh

### [v1.6.12](https://www.nocobase.com/en/blog/v1.6.12)

*Release date: 2025-03-27*

#### 🐛 Bug Fixes

- **[Block: Multi-step form]**

  - the submit button has the same color in its default and highlighted by @jiannx
  - fixed the bug that form reset is invalid when the field is associated with other field by @jiannx
- **[Workflow: Approval]** Fix approval form values to submit by @mytharcher

### [v1.6.13](https://www.nocobase.com/en/blog/v1.6.13)

*Release date: 2025-03-28*

#### 🚀 Improvements

- **[Async task manager]** optimize import/export buttons in Pro ([#6531](https://github.com/nocobase/nocobase/pull/6531)) by @chenos
- **[Action: Export records Pro]** optimize import/export buttons in Pro by @katherinehhh
- **[Migration manager]** allow skip automatic backup and restore for migration by @gchust

#### 🐛 Bug Fixes

- **[client]** linkage conflict between same-named association fields in different sub-tables within the same form ([#6577](https://github.com/nocobase/nocobase/pull/6577)) by @katherinehhh
- **[Action: Batch edit]** Click the batch edit button, configure the pop-up window, and then open it again, the pop-up window is blank ([#6578](https://github.com/nocobase/nocobase/pull/6578)) by @zhangzhonghe

### [v1.6.14](https://www.nocobase.com/en/blog/v1.6.14)

*Release date: 2025-03-29*

#### 🐛 Bug Fixes

- **[Calendar]** missing data on boundary dates in weekly calendar view ([#6587](https://github.com/nocobase/nocobase/pull/6587)) by @katherinehhh
- **[Auth: OIDC]** Incorrect redirection occurs when the callback path is the string 'null' by @2013xile
- **[Workflow: Approval]** Fix approval node configuration is incorrect after schema changed by @mytharcher

### [v1.6.15](https://www.nocobase.com/en/blog/v1.6.15)

*Release date: 2025-04-01*

#### 🚀 Improvements

- **[database]**

  - Add trim option for text field ([#6603](https://github.com/nocobase/nocobase/pull/6603)) by @mytharcher
  - Add trim option for string field ([#6565](https://github.com/nocobase/nocobase/pull/6565)) by @mytharcher
- **[File manager]** Add trim option for text fields of storages collection ([#6604](https://github.com/nocobase/nocobase/pull/6604)) by @mytharcher
- **[Workflow]** Improve code ([#6589](https://github.com/nocobase/nocobase/pull/6589)) by @mytharcher
- **[Workflow: Approval]** Support to use block template for approval process form by @mytharcher

#### 🐛 Bug Fixes

- **[database]** Avoid "datetimeNoTz" field changes when value not changed in updating record ([#6588](https://github.com/nocobase/nocobase/pull/6588)) by @mytharcher
- **[client]**

  - association field (select) displaying N/A when exposing related collection fields ([#6582](https://github.com/nocobase/nocobase/pull/6582)) by @katherinehhh
  - Fix `disabled` property not works when `SchemaInitializerItem` has `items` ([#6597](https://github.com/nocobase/nocobase/pull/6597)) by @mytharcher
  - cascade  issue: 'The value of xxx cannot be in array format' when deleting and re-selecting ([#6585](https://github.com/nocobase/nocobase/pull/6585)) by @katherinehhh
- **[Collection field: Many to many (array)]** Issue of filtering by fields in an association collection with a many to many (array) field ([#6596](https://github.com/nocobase/nocobase/pull/6596)) by @2013xile
- **[Public forms]** View permissions include list and get ([#6607](https://github.com/nocobase/nocobase/pull/6607)) by @chenos
- **[Authentication]** token assignment in `AuthProvider` ([#6593](https://github.com/nocobase/nocobase/pull/6593)) by @2013xile
- **[Workflow]** Fix sync option display incorrectly ([#6595](https://github.com/nocobase/nocobase/pull/6595)) by @mytharcher
- **[Block: Map]** map management validation should not pass with space input ([#6575](https://github.com/nocobase/nocobase/pull/6575)) by @katherinehhh
- **[Workflow: Approval]**

  - Fix client variables to use in approval form by @mytharcher
  - Fix branch mode when `endOnReject` configured as `true` by @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.10](https://www.nocobase.com/en/blog/v1.7.0-beta.10)

*Release date: 2025-03-27*

#### 🎉 New Features

- **[client]** Support variable configuration after submission, enabling redirection with current data ID ([#6465](https://github.com/nocobase/nocobase/pull/6465)) by @katherinehhh
- **[Collection field: Markdown(Vditor)]** Vditor supports S3 Pro ([#6441](https://github.com/nocobase/nocobase/pull/6441)) by @zhangzhonghe

#### 🚀 Improvements

- **[client]**

  - Only support plain text file to preview ([#6563](https://github.com/nocobase/nocobase/pull/6563)) by @mytharcher
  - Optimize 502 error message ([#6547](https://github.com/nocobase/nocobase/pull/6547)) by @chenos
  - Restrict available actions for different field properties in linkage rules ([#6548](https://github.com/nocobase/nocobase/pull/6548)) by @katherinehhh
- **[File manager]** Adjust `getFileData` API of storage ([#6553](https://github.com/nocobase/nocobase/pull/6553)) by @mytharcher
- **[Access control]** Optimize the order and style of role switching ([#6555](https://github.com/nocobase/nocobase/pull/6555)) by @aaaaaajie
- **[Collection field: Sequence]** support setting sequence as the title field for calendar block ([#6562](https://github.com/nocobase/nocobase/pull/6562)) by @katherinehhh
- **[Workflow]** Split executed columns to stats tables ([#6534](https://github.com/nocobase/nocobase/pull/6534)) by @mytharcher
- **[Workflow: Custom action event]** Split executed columns to stats tables by @mytharcher
- **[Workflow: Approval]**

  - Split executed columns to stats tables by @mytharcher
  - Support to skip validator in settings by @mytharcher

#### 🐛 Bug Fixes

- **[client]**

  - Older versions of browsers will display a blank page ([#6571](https://github.com/nocobase/nocobase/pull/6571)) by @zhangzhonghe
  - The 'Ellipsis overflow content' option requires a page refresh for the toggle state to take effect ([#6520](https://github.com/nocobase/nocobase/pull/6520)) by @zhangzhonghe
  - issue with date field display in data scope filtering ([#6564](https://github.com/nocobase/nocobase/pull/6564)) by @katherinehhh
  - Unable to open another modal within a modal ([#6535](https://github.com/nocobase/nocobase/pull/6535)) by @zhangzhonghe
  - Save as template action will be failed if containing association field ([#6543](https://github.com/nocobase/nocobase/pull/6543)) by @gchust
  - The top menu of the page is displaying blank ([#6551](https://github.com/nocobase/nocobase/pull/6551)) by @zhangzhonghe
  - field assignment with null value is ineffective ([#6549](https://github.com/nocobase/nocobase/pull/6549)) by @katherinehhh
- **[Workflow]**

  - Make sure workflow key is generated before save ([#6567](https://github.com/nocobase/nocobase/pull/6567)) by @mytharcher
  - Fix error thrown when configure auto delete options ([#6560](https://github.com/nocobase/nocobase/pull/6560)) by @mytharcher
- **[Public forms]** issue with public form page title displaying 'Loading...' ([#6569](https://github.com/nocobase/nocobase/pull/6569)) by @katherinehhh
- **[Mobile]** Adjust the font size displayed on the phone to 14px ([#6570](https://github.com/nocobase/nocobase/pull/6570)) by @zhangzhonghe
- **[Variables and secrets]** missing icon filter button, filter count not displaying, and data not refreshing after filtering when switching pages ([#6568](https://github.com/nocobase/nocobase/pull/6568)) by @katherinehhh
- **[Authentication]** Localization issue for fields of sign up page ([#6556](https://github.com/nocobase/nocobase/pull/6556)) by @2013xile
- **[API documentation]** API document page cannot scroll ([#6566](https://github.com/nocobase/nocobase/pull/6566)) by @zhangzhonghe
- **[Workflow: Post-action event]** Multiple records in bulk action should trigger multiple times ([#6559](https://github.com/nocobase/nocobase/pull/6559)) by @mytharcher
- **[Block: template]**

  - linkage rules of the form block have not been synced from template correctly ([#6550](https://github.com/nocobase/nocobase/pull/6550)) by @gchust
  - duplicate save as template menu in the details block ([#6558](https://github.com/nocobase/nocobase/pull/6558)) by @gchust
- **[Workflow: Approval]** Fix approval form values to submit by @mytharcher

### [v1.7.0-beta.11](https://www.nocobase.com/en/blog/v1.7.0-beta.11)

*Release date: 2025-03-27*

#### 🐛 Bug Fixes

- **[Block: Multi-step form]** the submit button has the same color in its default and highlighted by @jiannx

### [v1.7.0-beta.12](https://www.nocobase.com/en/blog/v1.7.0-beta.12)

*Release date: 2025-03-28*

#### 🎉 New Features

- **[Block: Action panel]** add an onScanSuccess callback to handle successful scans and exit the camera UI. ([#6580](https://github.com/nocobase/nocobase/pull/6580)) by @sheldon66

#### 🚀 Improvements

- **[Async task manager]** optimize import/export buttons in Pro ([#6531](https://github.com/nocobase/nocobase/pull/6531)) by @chenos
- **[Action: Export records Pro]** optimize import/export buttons in Pro by @katherinehhh
- **[Migration manager]** allow skip automatic backup and restore for migration by @gchust

#### 🐛 Bug Fixes

- **[client]** linkage conflict between same-named association fields in different sub-tables within the same form ([#6577](https://github.com/nocobase/nocobase/pull/6577)) by @katherinehhh
- **[Calendar]** missing data on boundary dates in weekly calendar view ([#6587](https://github.com/nocobase/nocobase/pull/6587)) by @katherinehhh
- **[Access control]** Incorrect current role assignment during login ([#6581](https://github.com/nocobase/nocobase/pull/6581)) by @aaaaaajie
- **[Action: Batch edit]** Click the batch edit button, configure the pop-up window, and then open it again, the pop-up window is blank ([#6578](https://github.com/nocobase/nocobase/pull/6578)) by @zhangzhonghe
- **[Block: Multi-step form]** fixed the bug that form reset is invalid when the field is associated with other field by @jiannx
- **[Workflow: Approval]** Fix approval node configuration is incorrect after schema changed by @mytharcher

### [v1.7.0-beta.13](https://www.nocobase.com/en/blog/v1.7.0-beta.13)

*Release date: 2025-04-01*

#### 🚀 Improvements

- **[database]**

  - Add trim option for text field ([#6603](https://github.com/nocobase/nocobase/pull/6603)) by @mytharcher
  - Add trim option for string field ([#6565](https://github.com/nocobase/nocobase/pull/6565)) by @mytharcher
- **[client]** support configuring colon visibility in form field labels based on layout ([#6561](https://github.com/nocobase/nocobase/pull/6561)) by @katherinehhh
- **[File manager]** Add trim option for text fields of storages collection ([#6604](https://github.com/nocobase/nocobase/pull/6604)) by @mytharcher
- **[Workflow]** Improve code ([#6589](https://github.com/nocobase/nocobase/pull/6589)) by @mytharcher
- **[Workflow: Approval]** Support to use block template for approval process form by @mytharcher

#### 🐛 Bug Fixes

- **[database]**

  - Avoid "datetimeNoTz" field changes when value not changed in updating record ([#6588](https://github.com/nocobase/nocobase/pull/6588)) by @mytharcher
  - When deleting one-to-many records, both `filter` and `filterByTk` are passed and `filter` includes an association field, the `filterByTk` is ignored ([#6606](https://github.com/nocobase/nocobase/pull/6606)) by @2013xile
- **[client]**

  - Fix `disabled` property not works when `SchemaInitializerItem` has `items` ([#6597](https://github.com/nocobase/nocobase/pull/6597)) by @mytharcher
  - cascade  issue: 'The value of xxx cannot be in array format' when deleting and re-selecting ([#6585](https://github.com/nocobase/nocobase/pull/6585)) by @katherinehhh
  - association field (select) displaying N/A when exposing related collection fields ([#6582](https://github.com/nocobase/nocobase/pull/6582)) by @katherinehhh
  - submit and refresh buttons not displaying icon-only mode correctly ([#6592](https://github.com/nocobase/nocobase/pull/6592)) by @katherinehhh
- **[Public forms]** View permissions include list and get ([#6607](https://github.com/nocobase/nocobase/pull/6607)) by @chenos
- **[Authentication]** token assignment in `AuthProvider` ([#6593](https://github.com/nocobase/nocobase/pull/6593)) by @2013xile
- **[Collection field: Many to many (array)]** Issue of filtering by fields in an association collection with a many to many (array) field ([#6596](https://github.com/nocobase/nocobase/pull/6596)) by @2013xile
- **[Workflow]** Fix sync option display incorrectly ([#6595](https://github.com/nocobase/nocobase/pull/6595)) by @mytharcher
- **[Block: Map]** map management validation should not pass with space input ([#6575](https://github.com/nocobase/nocobase/pull/6575)) by @katherinehhh
- **[Auth: OIDC]** Incorrect redirection occurs when the callback path is the string 'null' by @2013xile
- **[Workflow: Approval]**

  - Fix client variables to use in approval form by @mytharcher
  - Fix branch mode when `endOnReject` configured as `true` by @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.7.0-alpha.10](https://www.nocobase.com/en/blog/v1.7.0-alpha.10)

*Release date: 2025-03-25*

#### 🎉 New Features

- **[client]** Support variable configuration after submission, enabling redirection with current data ID ([#6465](https://github.com/nocobase/nocobase/pull/6465)) by @katherinehhh
- **[Collection field: Markdown(Vditor)]** Vditor supports S3 Pro ([#6441](https://github.com/nocobase/nocobase/pull/6441)) by @zhangzhonghe

#### 🚀 Improvements

- **[client]**

  - Only support plain text file to preview ([#6563](https://github.com/nocobase/nocobase/pull/6563)) by @mytharcher
  - Optimize 502 error message ([#6547](https://github.com/nocobase/nocobase/pull/6547)) by @chenos
  - Restrict available actions for different field properties in linkage rules ([#6548](https://github.com/nocobase/nocobase/pull/6548)) by @katherinehhh
- **[Workflow]** Split executed columns to stats tables ([#6534](https://github.com/nocobase/nocobase/pull/6534)) by @mytharcher
- **[Mobile]** Adapt the style of the notification pop-up for mobile devices ([#6557](https://github.com/nocobase/nocobase/pull/6557)) by @zhangzhonghe
- **[Collection field: Sequence]** support setting sequence as the title field for calendar block ([#6562](https://github.com/nocobase/nocobase/pull/6562)) by @katherinehhh
- **[File manager]** Adjust `getFileData` API of storage ([#6553](https://github.com/nocobase/nocobase/pull/6553)) by @mytharcher
- **[Access control]** Optimize the order and style of role switching ([#6555](https://github.com/nocobase/nocobase/pull/6555)) by @aaaaaajie
- **[Public forms]** set public form page title to the configured title upon creation ([#6538](https://github.com/nocobase/nocobase/pull/6538)) by @katherinehhh
- **[Workflow: Custom action event]** Split executed columns to stats tables by @mytharcher
- **[Workflow: Approval]**

  - Support to skip validator in settings by @mytharcher
  - Split executed columns to stats tables by @mytharcher

#### 🐛 Bug Fixes

- **[client]**

  - Older versions of browsers will display a blank page ([#6571](https://github.com/nocobase/nocobase/pull/6571)) by @zhangzhonghe
  - Unable to open another modal within a modal ([#6535](https://github.com/nocobase/nocobase/pull/6535)) by @zhangzhonghe
  - The 'Ellipsis overflow content' option requires a page refresh for the toggle state to take effect ([#6520](https://github.com/nocobase/nocobase/pull/6520)) by @zhangzhonghe
  - issue with date field display in data scope filtering ([#6564](https://github.com/nocobase/nocobase/pull/6564)) by @katherinehhh
  - The top menu of the page is displaying blank ([#6551](https://github.com/nocobase/nocobase/pull/6551)) by @zhangzhonghe
  - Save as template action will be failed if containing association field ([#6543](https://github.com/nocobase/nocobase/pull/6543)) by @gchust
  - Unable to use 'Current User' variable when adding a link page ([#6536](https://github.com/nocobase/nocobase/pull/6536)) by @zhangzhonghe
  - field assignment with null value is ineffective ([#6549](https://github.com/nocobase/nocobase/pull/6549)) by @katherinehhh
  - Save as template action will be failed if containing association field ([#6543](https://github.com/nocobase/nocobase/pull/6543)) by @gchust
  - Remove the 'Allow multiple selection' option from dropdown single-select fields in filter forms ([#6515](https://github.com/nocobase/nocobase/pull/6515)) by @zhangzhonghe
  - Relational field's data range linkage is not effective ([#6530](https://github.com/nocobase/nocobase/pull/6530)) by @zhangzhonghe
  - `yarn doc` command error ([#6540](https://github.com/nocobase/nocobase/pull/6540)) by @gchust
  - table row button drag-and-drop issue ([#6544](https://github.com/nocobase/nocobase/pull/6544)) by @katherinehhh
- **[Mobile]** Adjust the font size displayed on the phone to 14px ([#6570](https://github.com/nocobase/nocobase/pull/6570)) by @zhangzhonghe
- **[Workflow]**

  - Fix error thrown when configure auto delete options ([#6560](https://github.com/nocobase/nocobase/pull/6560)) by @mytharcher
  - Make sure workflow key is generated before save ([#6567](https://github.com/nocobase/nocobase/pull/6567)) by @mytharcher
- **[Variables and secrets]** missing icon filter button, filter count not displaying, and data not refreshing after filtering when switching pages ([#6568](https://github.com/nocobase/nocobase/pull/6568)) by @katherinehhh
- **[Public forms]** issue with public form page title displaying 'Loading...' ([#6569](https://github.com/nocobase/nocobase/pull/6569)) by @katherinehhh
- **[API documentation]** API document page cannot scroll ([#6566](https://github.com/nocobase/nocobase/pull/6566)) by @zhangzhonghe
- **[Workflow: Post-action event]** Multiple records in bulk action should trigger multiple times ([#6559](https://github.com/nocobase/nocobase/pull/6559)) by @mytharcher
- **[Block: template]**

  - duplicate save as template menu in the details block ([#6558](https://github.com/nocobase/nocobase/pull/6558)) by @gchust
  - linkage rules of the form block have not been synced from template correctly ([#6550](https://github.com/nocobase/nocobase/pull/6550)) by @gchust
- **[Authentication]** Localization issue for fields of sign up page ([#6556](https://github.com/nocobase/nocobase/pull/6556)) by @2013xile
- **[Action: Custom request]** Unable to download UTF-8 encoded files ([#6541](https://github.com/nocobase/nocobase/pull/6541)) by @2013xile
- **[Collection: Tree]** Migration issue for plugin-collection-tree ([#6537](https://github.com/nocobase/nocobase/pull/6537)) by @2013xile
- **[Block: Multi-step form]** the submit button has the same color in its default and highlighted by @jiannx
- **[Workflow: Approval]** Fix approval form values to submit by @mytharcher
