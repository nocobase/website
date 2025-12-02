### 🚀 Improvements

- **[client]**

  - support allow Multiple setting in attachment upload component ([#8052](https://github.com/nocobase/nocobase/pull/8052)) by @katherinehhh
  - show collapsed options on hover in Select component ([#8029](https://github.com/nocobase/nocobase/pull/8029)) by @katherinehhh
  - show collapsed options on hover in  Select component ([#8030](https://github.com/nocobase/nocobase/pull/8030)) by @katherinehhh
- **[AI employees]** add missing provider field to the Add LLM form ([#8049](https://github.com/nocobase/nocobase/pull/8049)) by @heziqiang
- **[Workflow]** Add "main" data source context for UserSelect, in order to provide a more common component which could be used in other place ([#8010](https://github.com/nocobase/nocobase/pull/8010)) by @mytharcher

### 🐛 Bug Fixes

- **[client]**

  - Fix issue where N/A is displayed after disabling allowMultiple in many-to-many association record select ([#8050](https://github.com/nocobase/nocobase/pull/8050)) by @katherinehhh
  - Fix the flickering issue of the linkage rule dropdown select box ([#8018](https://github.com/nocobase/nocobase/pull/8018)) by @zhangzhonghe
  - Fixed an issue where switching a date field to a time field in filter action caused a rendering error. ([#8036](https://github.com/nocobase/nocobase/pull/8036)) by @gchust
  - Fixed an issue where the current record menu appeared when adding a comment block. ([#8039](https://github.com/nocobase/nocobase/pull/8039)) by @gchust
  - Fix failed to delete record in record picker block ([#8023](https://github.com/nocobase/nocobase/pull/8023)) by @katherinehhh
  - Fixed an issue where the default style of the JS field in the detail block was incorrect. ([#8031](https://github.com/nocobase/nocobase/pull/8031)) by @gchust
  - fix  tree table block cannot expand child nodes ([#8011](https://github.com/nocobase/nocobase/pull/8011)) by @katherinehhh
  - fix subtable column drag not working ([#8026](https://github.com/nocobase/nocobase/pull/8026)) by @katherinehhh
  - fix subtable column width not applied ([#8027](https://github.com/nocobase/nocobase/pull/8027)) by @katherinehhh
  - Resolved an issue causing errors when loading data for association fields in popup windows, ensuring smoother data display and functionality. ([#7985](https://github.com/nocobase/nocobase/pull/7985)) by @gchust
  - fix markdown display field popover style issue ([#8012](https://github.com/nocobase/nocobase/pull/8012)) by @katherinehhh
  - Fixed an issue where the default titles of the edit and create new action popups were incorrect. ([#8033](https://github.com/nocobase/nocobase/pull/8033)) by @gchust
  - Fix lazy load bug in Variable.Input, which will cause variable options menu re-render incorrectly ([#8009](https://github.com/nocobase/nocobase/pull/8009)) by @mytharcher
  - Fixed an issue where the current popup record variable could not be correctly resolved in popup opened by association field. ([#8019](https://github.com/nocobase/nocobase/pull/8019)) by @gchust
- **[acl]** Fix an issue where ACL meta info is incorrect when external data-source permission scopes use current-user related variables ([#8013](https://github.com/nocobase/nocobase/pull/8013)) by @2013xile
- **[flow-engine]**

  - fix comment record fails to save after editing ([#8035](https://github.com/nocobase/nocobase/pull/8035)) by @katherinehhh
  - Fixed an issue where data blocks did not refresh when closing a popup by clicking the form submit button inside the popup. ([#8021](https://github.com/nocobase/nocobase/pull/8021)) by @gchust
- **[Theme editor]** Enable theme switcher on mobile devices ([#8046](https://github.com/nocobase/nocobase/pull/8046)) by @zhangzhonghe
- **[Multi-app manager (deprecated)]** Log level settings not applied to sub applications ([#8045](https://github.com/nocobase/nocobase/pull/8045)) by @2013xile
- **[Data source manager]** Fix errors when updating passwords for external data sources ([#8024](https://github.com/nocobase/nocobase/pull/8024)) by @cgyrock
- **[Action: Import records]** Fix the issue where error thrown when field in importing xlsx has `null` value ([#8037](https://github.com/nocobase/nocobase/pull/8037)) by @mytharcher
- **[Workflow]** Fix the issue where queue closed before messages publishing ([#8003](https://github.com/nocobase/nocobase/pull/8003)) by @mytharcher
- **[Comments]**

  - Fix failed to delete record in comment block by @katherinehhh
  - Fix show warning when comment block is used on non-comment collection by @katherinehhh
- **[Multi-space]** Mobile devices support space switching by @jiannx
- **[Workflow: Subflow]** Fix the issue workflow selected displaying "N/A" when workflow count is larger than 200 by @mytharcher
- **[Workflow: Approval]**

  - Fix error thrown when create approval information block by @mytharcher
  - Add migration to avoid duplicated record error when add index by @mytharcher
  - Fix the issue where print action not works when refresh page with modal opened by @mytharcher
