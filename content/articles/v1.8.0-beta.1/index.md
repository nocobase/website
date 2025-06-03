### 🎉 New Features

- **[undefined]** Add new "Input Copy Button" plugin for single-line text fields ([#6894](https://github.com/nocobase/nocobase/pull/6894)) by @kerwin612

- **[Workflow]** Add workflow category management ([#6965](https://github.com/nocobase/nocobase/pull/6965)) by @mytharcher

### 🚀 Improvements

- **[client]** support configuring whether menu links open in a new window ([#6918](https://github.com/nocobase/nocobase/pull/6918)) by @katherinehhh

- **[Action: Import records Pro]** Optimize xlsx import performance by @aaaaaajie

- **[Auth: OIDC]** Ignore case when matching user by email by @2013xile

- **[Workflow: Approval]** Import workflow collections from workflow plugin to avoid duplication by @mytharcher

### 🐛 Bug Fixes

- **[client]**
  - Fields and actions only take effect after refreshing the page ([#6977](https://github.com/nocobase/nocobase/pull/6977)) by @zhangzhonghe

  - Fix fields not displaying in block templates caused by duplicate API requests ([#6957](https://github.com/nocobase/nocobase/pull/6957)) by @zhangzhonghe

  - Fix the issue where blocks created in popups have incorrect collection ([#6961](https://github.com/nocobase/nocobase/pull/6961)) by @zhangzhonghe

  - Cannot select variables when setting default values for association fields ([#6974](https://github.com/nocobase/nocobase/pull/6974)) by @zhangzhonghe

  - Fix the issue where single-line text field values are displayed as an array in esay-reading mode ([#6968](https://github.com/nocobase/nocobase/pull/6968)) by @zhangzhonghe

  - unable to expand association collection fields from external data sources in role data table scope ([#6958](https://github.com/nocobase/nocobase/pull/6958)) by @katherinehhh

  - Fix the issue where the 'Ellipsis overflow content' option is ineffective for relation fields ([#6967](https://github.com/nocobase/nocobase/pull/6967)) by @zhangzhonghe

  - Fix issue where filter form default values are invalid in sub-pages ([#6960](https://github.com/nocobase/nocobase/pull/6960)) by @zhangzhonghe

  - issue where select association field popup closes on first input when adding new data ([#6971](https://github.com/nocobase/nocobase/pull/6971)) by @katherinehhh

  - association field in subtable triggering request when iteration variable with empty value ([#6969](https://github.com/nocobase/nocobase/pull/6969)) by @katherinehhh

  - Fix the field order in filter button dropdown list ([#6962](https://github.com/nocobase/nocobase/pull/6962)) by @zhangzhonghe

  - form validation rules data lost when collapsing panel ([#6949](https://github.com/nocobase/nocobase/pull/6949)) by @katherinehhh

  - selected values are reset when updating multi-select dropdown options via linkage rules ([#6953](https://github.com/nocobase/nocobase/pull/6953)) by @katherinehhh

  - subtable linkage variable fetches association data on clear instead of using form value ([#6963](https://github.com/nocobase/nocobase/pull/6963)) by @katherinehhh

  - paginate association field dropdown data with page size of 200 ([#6950](https://github.com/nocobase/nocobase/pull/6950)) by @katherinehhh

  - date picker not refreshed after toggling from "is between" back to "is" ([#6956](https://github.com/nocobase/nocobase/pull/6956)) by @katherinehhh

  - Incorrect highlight position when dragging table rows ([#6952](https://github.com/nocobase/nocobase/pull/6952)) by @chenos

- **[Authentication]** Performance issue caused by expired token cleanup ([#6981](https://github.com/nocobase/nocobase/pull/6981)) by @2013xile

- **[Workflow]** Fix error thrown when filter workflows ([#6978](https://github.com/nocobase/nocobase/pull/6978)) by @mytharcher

- **[File manager]** Fix Ali-OSS timeout configuration ([#6970](https://github.com/nocobase/nocobase/pull/6970)) by @mytharcher

- **[Theme editor]** Hide theme switch option and fix popup style ([#6964](https://github.com/nocobase/nocobase/pull/6964)) by @zhangzhonghe

- **[Workflow: Custom action event]** Fix initializer for workbench missed by @mytharcher

- **[Auth: OIDC]** Sign-in button text not being localized by @2013xile

- **[Workflow: Approval]** Fix error when assignees scope querying with association condition by @mytharcher

