### 🚀 Improvements

- **[Workflow: Approval]** Adjust validation rules for approval trigger config and node config, to make sure UI field is existed by @mytharcher

### 🐛 Bug Fixes

- **[client]** Fix the issue where selected relation field data is not displayed on mobile ([#9665](https://github.com/nocobase/nocobase/pull/9665)) by @zhangzhonghe

- **[client-v2]**
  - Fix menu linkage rule save errors ([#9666](https://github.com/nocobase/nocobase/pull/9666)) by @zhangzhonghe

  - Fix the excessive spacing above blocks on v2 pages ([#9647](https://github.com/nocobase/nocobase/pull/9647)) by @zhangzhonghe

- **[flow-engine]** Fixed the issue page gets stuck when setting field values for a subform ([#9598](https://github.com/nocobase/nocobase/pull/9598)) by @gchust

- **[AI employees]**
  - Fixed AI provider base URL validation. ([#9667](https://github.com/nocobase/nocobase/pull/9667)) by @cgyrock

  - Fixed `ctx.get` errors in AI employee workflow nodes ([#9661](https://github.com/nocobase/nocobase/pull/9661)) by @cgyrock

- **[Notification: In-app message]** Fixed SQL injection risk in the in-app notification channel timestamp filter. ([#9630](https://github.com/nocobase/nocobase/pull/9630)) by @mytharcher

- **[Action: Duplicate record]** fix(duplicate): reset button state on submission failure ([#9676](https://github.com/nocobase/nocobase/pull/9676)) by @katherinehhh

- **[Calendar]** Fixed calendar event colors not rendering from the configured color field in v2 pages. ([#9677](https://github.com/nocobase/nocobase/pull/9677)) by @jiannx

- **[Flow engine]**
  - Fixed an issue where modifying a block after duplicating its template could inadvertently affect the original block’s content. ([#9664](https://github.com/nocobase/nocobase/pull/9664)) by @gchust

  - Fixed an issue where dragging popup tabs to reorder them did not work. ([#9602](https://github.com/nocobase/nocobase/pull/9602)) by @gchust

