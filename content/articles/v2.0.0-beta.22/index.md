### 🎉 New Features

- **[client]** Support configuring browser tab titles for pages, page tabs, popups, and popup tabs ([#8590](https://github.com/nocobase/nocobase/pull/8590)) by @zhangzhonghe

- **[Workflow: Approval]** Add ACL control for approval APIs by @mytharcher

### 🚀 Improvements

- **[client]** Use independent field models for association fields in filter forms ([#8511](https://github.com/nocobase/nocobase/pull/8511)) by @zhangzhonghe

- **[Workflow: CC]** Refactor workflow CC plugin to support FlowModel architecture with v1/v2 compatibility ([#8405](https://github.com/nocobase/nocobase/pull/8405)) by @zhangzhonghe

### 🐛 Bug Fixes

- **[flow-engine]**
  - Fix an issue where Blob objects could not be created in JS block. ([#8603](https://github.com/nocobase/nocobase/pull/8603)) by @gchust

  - Fix incorrect execution context for "ctx.sql" in JS Models. ([#8602](https://github.com/nocobase/nocobase/pull/8602)) by @gchust

- **[Field component: mask]** Fix an issue where the mask field settings popup could not load all user roles correctly. by @gchust

- **[Workflow: Approval]** Fix incorrect id to load detail record by @mytharcher

