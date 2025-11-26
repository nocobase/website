### 🚀 Improvements

- **[client]**
  - Support initializing selected filter fields in chart query ([#7933](https://github.com/nocobase/nocobase/pull/7933)) by @heziqiang

  - Use triple brackets (`{{{` and `}}}`) for variables in message content, to avoid variables been escaped by Handlebars ([#7972](https://github.com/nocobase/nocobase/pull/7972)) by @mytharcher

  - Add loading state for update record and destroy record action button, avoid duplicated requests ([#7964](https://github.com/nocobase/nocobase/pull/7964)) by @mytharcher

- **[Collection field: Markdown(Vditor)]** adjust vditor fullscreen content width ([#7974](https://github.com/nocobase/nocobase/pull/7974)) by @katherinehhh

### 🐛 Bug Fixes

- **[client]**
  - Fixed an issue where opening the detail block in the popup for non-ID relationship fields caused an error. ([#7973](https://github.com/nocobase/nocobase/pull/7973)) by @gchust

  - Fixed an issue where association data failed to load correctly in the popup for non-ID relationship fields. ([#7970](https://github.com/nocobase/nocobase/pull/7970)) by @gchust

  - Fix routing issues when using an Iframe ([#7957](https://github.com/nocobase/nocobase/pull/7957)) by @zhangzhonghe

  - fix issue with invalid precision setting for numeric field format ([#7967](https://github.com/nocobase/nocobase/pull/7967)) by @katherinehhh

  - Fix the incorrect typing in the new 2.0 page ([#7945](https://github.com/nocobase/nocobase/pull/7945)) by @zhangzhonghe

  - fix the issue where the filter value is not cleared when clicking the Reset button ([#7966](https://github.com/nocobase/nocobase/pull/7966)) by @zhangzhonghe

- **[Workflow]** Fix tasks count not showing caused by provider misused ([#7968](https://github.com/nocobase/nocobase/pull/7968)) by @mytharcher

- **[Data visualization]** Resolve issue where chart query did not support ACL data scope ([#7915](https://github.com/nocobase/nocobase/pull/7915)) by @2013xile

- **[Block: Reference]** Fixed an issue where quoting a block would remove the quoted block from the original page. ([#7969](https://github.com/nocobase/nocobase/pull/7969)) by @gchust

- **[AI employees]** Fix issue when ai generating SQL output ([#7956](https://github.com/nocobase/nocobase/pull/7956)) by @heziqiang

- **[Template print]** fix fail to add template in record template print operation by @katherinehhh

