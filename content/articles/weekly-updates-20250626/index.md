Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase is currently updated with three branches: `main` , `next` and `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：The most stable version to date, recommended for installation;
* `next`：Beta version, contains upcoming new features and has been preliminarily tested. There might be some known or unknown issues. It's mainly for test users to collect feedback and optimize functions further. Ideal for test users who want to experience new features early and give feedback;
* `develop`：Alpha version, contains the latest feature code, may be incomplete or unstable, mainly for internal dev and rapid iteration. Suited for tech users interested in product's cutting-edge, but with potential issues and incomplete functions. Not for production use.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.7.17](https://www.nocobase.com/en/blog/v1.7.17)

*Release date: 2025-06-24*

#### 🐛 Bug Fixes

- **[client]**

  - incorrect range limitation on date fields with time ([#7107](https://github.com/nocobase/nocobase/pull/7107)) by @katherinehhh
  - When URL query parameter variables are empty, the data scope conditions are not removed ([#7104](https://github.com/nocobase/nocobase/pull/7104)) by @zhangzhonghe
- **[Mobile]** Fix mobile popup z-index issue ([#7110](https://github.com/nocobase/nocobase/pull/7110)) by @zhangzhonghe
- **[Calendar]** date field issue in quick create form of calendar block ([#7106](https://github.com/nocobase/nocobase/pull/7106)) by @katherinehhh

### [v1.7.16](https://www.nocobase.com/en/blog/v1.7.16)

*Release date: 2025-06-20*

#### 🐛 Bug Fixes

- **[Workflow]**

  - Fix incorrectly executed checking on big integer number ([#7099](https://github.com/nocobase/nocobase/pull/7099)) by @mytharcher
  - Fix stats cascade deleted by non-current workflow version ([#7103](https://github.com/nocobase/nocobase/pull/7103)) by @mytharcher
- **[Action: Import records]** Resolve login failure issue after batch import of usernames and passwords ([#7076](https://github.com/nocobase/nocobase/pull/7076)) by @aaaaaajie
- **[Workflow: Approval]** Only participants can view (get) detail of approval by @mytharcher

### [v1.7.15](https://www.nocobase.com/en/blog/v1.7.15)

*Release date: 2025-06-18*

#### 🐛 Bug Fixes

- **[client]**

  - Use independent variable scope for each field ([#7012](https://github.com/nocobase/nocobase/pull/7012)) by @mytharcher
  - Assign field values: Unable to clear data for relation fields ([#7086](https://github.com/nocobase/nocobase/pull/7086)) by @zhangzhonghe
  - Table column text alignment function is not working ([#7094](https://github.com/nocobase/nocobase/pull/7094)) by @zhangzhonghe
- **[Workflow]** Fix incorrectly executed checking on big integer number ([#7091](https://github.com/nocobase/nocobase/pull/7091)) by @mytharcher
- **[File manager]** Fix attachments field can not be updated in approval process ([#7093](https://github.com/nocobase/nocobase/pull/7093)) by @mytharcher
- **[Workflow: Approval]** Use comparison instead of implicit logic to avoid type issues by @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.8.0-beta.10](https://www.nocobase.com/en/blog/v1.8.0-beta.10)

*Release date: 2025-06-19*

#### 🎉 New Features

- **[Workflow: Approval]** Add approval records variable to node result by @mytharcher

#### 🐛 Bug Fixes

- **[client]**

  - Table column text alignment function is not working ([#7094](https://github.com/nocobase/nocobase/pull/7094)) by @zhangzhonghe
  - Assign field values: Unable to clear data for relation fields ([#7086](https://github.com/nocobase/nocobase/pull/7086)) by @zhangzhonghe
  - Use independent variable scope for each field ([#7012](https://github.com/nocobase/nocobase/pull/7012)) by @mytharcher
- **[File manager]** Fix attachments field can not be updated in approval process ([#7093](https://github.com/nocobase/nocobase/pull/7093)) by @mytharcher
- **[Workflow]** Fix incorrectly executed checking on big integer number ([#7091](https://github.com/nocobase/nocobase/pull/7091)) by @mytharcher
- **[Workflow: Approval]** Use comparison instead of implicit logic to avoid type issues by @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.8.0-alpha.10](https://www.nocobase.com/en/blog/v1.8.0-alpha.10)

*Release date: 2025-06-25*

#### 🎉 New Features

- **[Data source manager]** ✨ Support on-demand loading of collections from external data sources ([#6979](https://github.com/nocobase/nocobase/pull/6979)) by @aaaaaajie
- **[Workflow: HTTP request node]** Support `multipart/form-data` request ([#7087](https://github.com/nocobase/nocobase/pull/7087)) by @shushu992
- **[Data source: External SQL Server]** Support on-demand loading of collections from external data sources by @aaaaaajie

#### 🐛 Bug Fixes

- **[client]**

  - When URL query parameter variables are empty, the data scope conditions are not removed ([#7104](https://github.com/nocobase/nocobase/pull/7104)) by @zhangzhonghe
  - incorrect range limitation on date fields with time ([#7107](https://github.com/nocobase/nocobase/pull/7107)) by @katherinehhh
- **[Mobile]** Fix mobile popup z-index issue ([#7110](https://github.com/nocobase/nocobase/pull/7110)) by @zhangzhonghe
- **[Calendar]** date field issue in quick create form of calendar block ([#7106](https://github.com/nocobase/nocobase/pull/7106)) by @katherinehhh
- **[Workflow: Approval]**

  - Fix legacy variable API which throws error by @mytharcher
  - Fix mobile styles by @mytharcher
  - Fix error thrown when approval related collection deleted by @mytharcher
- **[Email manager]** attachment does not display by @jiannx

### [v1.8.0-alpha.9](https://www.nocobase.com/en/blog/v1.8.0-alpha.9)

*Release date: 2025-06-20*

#### 🎉 New Features

- **[client]** Support the BIT field in SQL Server for external data sources. ([#7058](https://github.com/nocobase/nocobase/pull/7058)) by @aaaaaajie
- **[Workflow: Approval]** Add approval records variable to node result by @mytharcher

#### 🚀 Improvements

- **[client]** Auto-hide grid card block action bar when empty ([#7069](https://github.com/nocobase/nocobase/pull/7069)) by @zhangzhonghe
- **[Verification]** Remove verifier options from the response of the `verifiers:listByUser` API ([#7090](https://github.com/nocobase/nocobase/pull/7090)) by @2013xile
- **[Workflow]** Adjust API of `getCollectionFieldOptions` ([#7095](https://github.com/nocobase/nocobase/pull/7095)) by @mytharcher
- **[Workflow: Pre-action event]** Adjust variable api by @mytharcher
- **[Workflow: Approval]** Adjust variable API by @mytharcher

#### 🐛 Bug Fixes

- **[client]**

  - Table column text alignment function is not working ([#7094](https://github.com/nocobase/nocobase/pull/7094)) by @zhangzhonghe
  - Assign field values: Unable to clear data for relation fields ([#7086](https://github.com/nocobase/nocobase/pull/7086)) by @zhangzhonghe
  - Use independent variable scope for each field ([#7012](https://github.com/nocobase/nocobase/pull/7012)) by @mytharcher
  - style condition on subtable column fields not applied correctly ([#7083](https://github.com/nocobase/nocobase/pull/7083)) by @katherinehhh
  - Filtering through relationship collection fields in filter forms is invalid ([#7070](https://github.com/nocobase/nocobase/pull/7070)) by @zhangzhonghe
  - URL query parameter variables not working in public form field default value ([#7084](https://github.com/nocobase/nocobase/pull/7084)) by @katherinehhh
  - required validation message in subtable persists when switching page ([#7080](https://github.com/nocobase/nocobase/pull/7080)) by @katherinehhh
  - Error when clicking filter button ([#7100](https://github.com/nocobase/nocobase/pull/7100)) by @zhangzhonghe
- **[database]** support association updates in updateOrCreate and firstOrCreate ([#7088](https://github.com/nocobase/nocobase/pull/7088)) by @chenos
- **[Workflow]**

  - Fix stats cascade deleted by non-current workflow version ([#7103](https://github.com/nocobase/nocobase/pull/7103)) by @mytharcher
  - Fix incorrectly executed checking on big integer number ([#7099](https://github.com/nocobase/nocobase/pull/7099)) by @mytharcher
  - Fix incorrectly executed checking on big integer number ([#7091](https://github.com/nocobase/nocobase/pull/7091)) by @mytharcher
- **[Action: Import records]** Resolve login failure issue after batch import of usernames and passwords ([#7076](https://github.com/nocobase/nocobase/pull/7076)) by @aaaaaajie
- **[Collection field: Many to many (array)]** Updating a many to many (array) field throws an error when the `updatedBy` field is present ([#7089](https://github.com/nocobase/nocobase/pull/7089)) by @2013xile
- **[File manager]** Fix attachments field can not be updated in approval process ([#7093](https://github.com/nocobase/nocobase/pull/7093)) by @mytharcher
- **[Public forms]** Public forms: Fix unauthorized access issue on form submission ([#7085](https://github.com/nocobase/nocobase/pull/7085)) by @zhangzhonghe
- **[Collection field: Sequence]** Fix string based bigint sequence calculation ([#7079](https://github.com/nocobase/nocobase/pull/7079)) by @mytharcher
- **[Workflow: Approval]**

  - Use comparison instead of implicit logic to avoid type issues by @mytharcher
  - Only participants can view (get) detail of approval by @mytharcher
- **[Email manager]** email deletion error by @jiannx
