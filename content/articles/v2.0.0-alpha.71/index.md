### 🎉 New Features

- **[client]**
  - Support configuring browser tab titles for pages, page tabs, popups, and popup tabs ([#8590](https://github.com/nocobase/nocobase/pull/8590)) by @zhangzhonghe

  - support configuring fields of the association collection field in form block ([#8578](https://github.com/nocobase/nocobase/pull/8578)) by @katherinehhh

- **[Block: GridCard]** support configurable block height ([#8583](https://github.com/nocobase/nocobase/pull/8583)) by @katherinehhh

- **[Action: Duplicate record]** add 2.0 duplicate action ([#8580](https://github.com/nocobase/nocobase/pull/8580)) by @katherinehhh

- **[Workflow: Approval]** Add ACL control for approval APIs by @mytharcher

### 🚀 Improvements

- **[client]** Use independent field models for association fields in filter forms ([#8511](https://github.com/nocobase/nocobase/pull/8511)) by @zhangzhonghe

- **[Workflow: CC]** Refactor workflow CC plugin to support FlowModel architecture with v1/v2 compatibility ([#8405](https://github.com/nocobase/nocobase/pull/8405)) by @zhangzhonghe

### 🐛 Bug Fixes

- **[flow-engine]**
  - Fix incorrect execution context for "ctx.sql" in JS Models. ([#8602](https://github.com/nocobase/nocobase/pull/8602)) by @gchust

  - Fix an issue where Blob objects could not be created in JS block. ([#8603](https://github.com/nocobase/nocobase/pull/8603)) by @gchust

- **[client]**
  - Fix an issue where table columns did not re-render after clicking Run in the JS column editor. ([#8608](https://github.com/nocobase/nocobase/pull/8608)) by @gchust

  - Fix a potential "read hidden" render error in non-config mode. ([#8591](https://github.com/nocobase/nocobase/pull/8591)) by @gchust

  - fix sub-table(inline edit) still shows edit-mode columns after switching to read-only view in edit form ([#8589](https://github.com/nocobase/nocobase/pull/8589)) by @katherinehhh

- **[Flow engine]** Fix an issue where using a block template in “Duplicate” mode caused the empty popup if clicking some action button from the block. ([#8581](https://github.com/nocobase/nocobase/pull/8581)) by @gchust

- **[Field component: mask]** Fix an issue where the mask field settings popup could not load all user roles correctly. by @gchust

- **[Workflow: Approval]** Fix incorrect id to load detail record by @mytharcher

