### 🎉 New Features

- **[client]** add date range limit option for date fields in v2 forms ([#9400](https://github.com/nocobase/nocobase/pull/9400)) by @katherinehhh

- **[flow-engine]** Migrate `plugin-environment-variables` to client-v2 with a React-based settings page and a globally registered `$env` runtime variable; add a client-v2 entry to `plugin-file-manager` with a React-based storage configuration page and FlowModel-based upload field, upload action, and preview. ([#9413](https://github.com/nocobase/nocobase/pull/9413)) by @Molunerfinn

### 🚀 Improvements

- **[undefined]** support session-scoped current env in nb cli ([#9415](https://github.com/nocobase/nocobase/pull/9415)) by @chenos

### 🐛 Bug Fixes

- **[client]**
  - Fixed an issue where the default value popup for association fields in the create form would display incorrectly. ([#9408](https://github.com/nocobase/nocobase/pull/9408)) by @gchust

  - Fixed an issue where JS code could no longer be edited after a JS field was set to read-only. ([#9404](https://github.com/nocobase/nocobase/pull/9404)) by @gchust

  - Fix the issue where v2 page tabs do not sync immediately after saving settings ([#9396](https://github.com/nocobase/nocobase/pull/9396)) by @zhangzhonghe

  - Fixed an issue where sub-table field assignments would not take effect in field linkage rules. ([#9412](https://github.com/nocobase/nocobase/pull/9412)) by @gchust

- **[Collection field: Markdown(Vditor)]** fix markdown field tooltip being hidden in horizontal form layout ([#9420](https://github.com/nocobase/nocobase/pull/9420)) by @katherinehhh

- **[WEB client]** Fix route type filtering when using translated labels ([#9425](https://github.com/nocobase/nocobase/pull/9425)) by @zhangzhonghe

- **[Mobile (deprecated)]** Fix mobile message popups that could not be closed or scrolled ([#9424](https://github.com/nocobase/nocobase/pull/9424)) by @zhangzhonghe

- **[Workflow: Approval]** Fix the issue where JS field appears in approval process settings by @zhangzhonghe

