### 🎉 New Features

- **[undefined]**
  - New support for Gitpod allows you to start the development environment with one click and quickly begin development. ([#6922](https://github.com/nocobase/nocobase/pull/6922)) by @kerwin612

  - Add new "Input Copy Button" plugin for single-line text fields ([#6894](https://github.com/nocobase/nocobase/pull/6894)) by @kerwin612

  - Add new "Input Copy Button" plugin for single-line text fields ([#6894](https://github.com/nocobase/nocobase/pull/6894)) by @kerwin612

- **[Data visualization]** Support multiplication and division in chart transformation configuration ([#6788](https://github.com/nocobase/nocobase/pull/6788)) by @bugstark

- **[Workflow]** Add workflow category management ([#6965](https://github.com/nocobase/nocobase/pull/6965)) by @mytharcher

- **[Email manager]** support mass sending by @jiannx

### 🚀 Improvements

- **[client]**
  - improve styles for date range filter component ([#6939](https://github.com/nocobase/nocobase/pull/6939)) by @katherinehhh

  - support configuring whether menu links open in a new window ([#6918](https://github.com/nocobase/nocobase/pull/6918)) by @katherinehhh

  - Fix issue where hidden form controls captured tab key, significantly improving form operation efficiency ([#6942](https://github.com/nocobase/nocobase/pull/6942)) by @kerwin612

  - validate required fields before showing confirmation dialog ([#6931](https://github.com/nocobase/nocobase/pull/6931)) by @katherinehhh

- **[Public forms]** Support to use url parameter as variable ([#6973](https://github.com/nocobase/nocobase/pull/6973)) by @mytharcher

- **[Action: Import records Pro]** Optimize xlsx import performance by @aaaaaajie

- **[Template print]** Add more logs. by @sheldon66

- **[Auth: OIDC]** Ignore case when matching user by email by @2013xile

- **[Workflow: Approval]** Import workflow collections from workflow plugin to avoid duplication by @mytharcher

- **[Email manager]** complete mass sending function by @jiannx

### 🐛 Bug Fixes

- **[client]**
  - Fix fields not displaying in block templates caused by duplicate API requests ([#6957](https://github.com/nocobase/nocobase/pull/6957)) by @zhangzhonghe

  - Fix the issue where blocks created in popups have incorrect collection ([#6961](https://github.com/nocobase/nocobase/pull/6961)) by @zhangzhonghe

  - Fix the issue where single-line text field values are displayed as an array in esay-reading mode ([#6968](https://github.com/nocobase/nocobase/pull/6968)) by @zhangzhonghe

  - Fix the field order in filter button dropdown list ([#6962](https://github.com/nocobase/nocobase/pull/6962)) by @zhangzhonghe

  - Fields and actions only take effect after refreshing the page ([#6977](https://github.com/nocobase/nocobase/pull/6977)) by @zhangzhonghe

  - Fix the issue where the 'Ellipsis overflow content' option is ineffective for relation fields ([#6967](https://github.com/nocobase/nocobase/pull/6967)) by @zhangzhonghe

  - issue where select association field popup closes on first input when adding new data ([#6971](https://github.com/nocobase/nocobase/pull/6971)) by @katherinehhh

  - association field in subtable triggering request when iteration variable with empty value ([#6969](https://github.com/nocobase/nocobase/pull/6969)) by @katherinehhh

  - form validation rules data lost when collapsing panel ([#6949](https://github.com/nocobase/nocobase/pull/6949)) by @katherinehhh

  - Fix issue where filter form default values are invalid in sub-pages ([#6960](https://github.com/nocobase/nocobase/pull/6960)) by @zhangzhonghe

  - field assignment component i18n not working ([#6945](https://github.com/nocobase/nocobase/pull/6945)) by @katherinehhh

  - unable to expand association collection fields from external data sources in role data table scope ([#6958](https://github.com/nocobase/nocobase/pull/6958)) by @katherinehhh

  - date picker not refreshed after toggling from "is between" back to "is" ([#6956](https://github.com/nocobase/nocobase/pull/6956)) by @katherinehhh

  - subtable linkage variable fetches association data on clear instead of using form value ([#6963](https://github.com/nocobase/nocobase/pull/6963)) by @katherinehhh

  - selected values are reset when updating multi-select dropdown options via linkage rules ([#6953](https://github.com/nocobase/nocobase/pull/6953)) by @katherinehhh

  - Incorrect highlight position when dragging table rows ([#6952](https://github.com/nocobase/nocobase/pull/6952)) by @chenos

  - form label colon visibility setting not working ([#6947](https://github.com/nocobase/nocobase/pull/6947)) by @katherinehhh

  - paginate association field dropdown data with page size of 200 ([#6950](https://github.com/nocobase/nocobase/pull/6950)) by @katherinehhh

  - Fix the issue with the copy button in the error pop-up copying out as [object Object]. ([#6908](https://github.com/nocobase/nocobase/pull/6908)) by @kerwin612

  - Cannot select variables when setting default values for association fields ([#6974](https://github.com/nocobase/nocobase/pull/6974)) by @zhangzhonghe

  - Block resize by dragging not working ([#6944](https://github.com/nocobase/nocobase/pull/6944)) by @chenos

- **[Workflow: Manual node]** Fix initializer throws error when using external datasource ([#6983](https://github.com/nocobase/nocobase/pull/6983)) by @mytharcher

- **[Authentication]** Performance issue caused by expired token cleanup ([#6981](https://github.com/nocobase/nocobase/pull/6981)) by @2013xile

- **[File manager]** Fix Ali-OSS timeout configuration ([#6970](https://github.com/nocobase/nocobase/pull/6970)) by @mytharcher

- **[Workflow]** Fix error thrown when filter workflows ([#6978](https://github.com/nocobase/nocobase/pull/6978)) by @mytharcher

- **[Theme editor]** Hide theme switch option and fix popup style ([#6964](https://github.com/nocobase/nocobase/pull/6964)) by @zhangzhonghe

- **[Collection field: Markdown(Vditor)]** markdown-vditor field  component width issue after zoom in and out ([#6946](https://github.com/nocobase/nocobase/pull/6946)) by @katherinehhh

- **[Workflow: Custom action event]** Fix initializer for workbench missed by @mytharcher

- **[Auth: OIDC]** Sign-in button text not being localized by @2013xile

- **[Workflow: Approval]** Fix error when assignees scope querying with association condition by @mytharcher

