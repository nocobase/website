### 🚀 Improvements

- **[Workflow: Approval]** Fix required validation behavior for approval forms by @zhangzhonghe

### 🐛 Bug Fixes

- **[client]**
  - Fixed an issue where JS code could no longer be edited after a JS field was set to read-only. ([#9404](https://github.com/nocobase/nocobase/pull/9404)) by @gchust

  - Fixed an issue where sub-table field assignments would not take effect in field linkage rules. ([#9412](https://github.com/nocobase/nocobase/pull/9412)) by @gchust

  - Fix the issue where v2 page tabs do not sync immediately after saving settings ([#9396](https://github.com/nocobase/nocobase/pull/9396)) by @zhangzhonghe

  - Fixed an issue where the default value popup for association fields in the create form would display incorrectly. ([#9408](https://github.com/nocobase/nocobase/pull/9408)) by @gchust

- **[Password policy]** Fixed an issue where permanently locked users could sign in after a service restart by @2013xile

- **[Action: Import records Pro]** Fix the issue where duplicated check on date field always fails by @mytharcher

- **[Workflow: Approval]** Fix the issue where the select record drawer is obscured in approval workflow configuration by @zhangzhonghe

