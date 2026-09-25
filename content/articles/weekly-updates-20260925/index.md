Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase is currently updated across three branches: `main`, `next`, and `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: The most stable version to date, recommended for installation.
* `next`: Beta version, contains upcoming new features and has been preliminarily tested. There might be some known or unknown issues. It is mainly used to collect feedback from test users and further optimize features. Ideal for test users who want to experience new features early and provide feedback.
* `develop`: Alpha version, contains the latest feature code, may be incomplete or unstable, and is mainly used for internal development and rapid iteration. Suited for technical users interested in cutting-edge product capabilities, but not recommended for production use.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### v2.2.17

*Release date: 2026-09-24*

### 🐛 Bug Fixes

- **[client-v2]**

  - Fix: sub-table fields were still editable after the field was set to disabled ([#10532](https://github.com/nocobase/nocobase/pull/10532)) by @katherinehhh
  - Fixed quick edit popover closing when collapsing a multi-select dropdown, and dropdown options covering the Submit button. ([#10536](https://github.com/nocobase/nocobase/pull/10536)) by @katherinehhh
- **[Departments]** Restricted department user directory access to authorized roles ([#10539](https://github.com/nocobase/nocobase/pull/10539)) by @2013xile
- **[Workflow]** Fixed workflow user selection search to query the API instead of filtering only loaded users. ([#10537](https://github.com/nocobase/nocobase/pull/10537)) by @mytharcher
- **[Block: Kanban]** Fixed modern kanban blocks not refreshing after adding records through the toolbar when no filters were active. ([#10525](https://github.com/nocobase/nocobase/pull/10525)) by @jiannx
- **[Email manager]** Prevent circular email reply relationships from blocking mail synchronization by @jiannx

### v2.2.16

*Release date: 2026-09-21*

### 🐛 Bug Fixes

- **[Access control]** Fixed unintended permission changes when clicking the blank space beside system permission checkboxes in the modern client's role settings. ([#10518](https://github.com/nocobase/nocobase/pull/10518)) by @jiannx
- **[Block: Comment]** Fixed comment-specific Edit, Delete, and Quote reply actions incorrectly appearing in the table row action configuration menu. ([#10519](https://github.com/nocobase/nocobase/pull/10519)) by @jiannx
- **[Workflow: Approval]** Fixed data not being saved correctly after a before-save approval is returned, resubmitted, and approved. by @mytharcher

### v2.2.15

*Release date: 2026-09-19*

### 🚀 Improvements

- **[Data source manager]** In the v2 data source manager, the relation field's foreign key can be selected from the existing columns of the owning collection, like v1. ([#10526](https://github.com/nocobase/nocobase/pull/10526)) by @katherinehhh

### 🐛 Bug Fixes

- **[flow-engine]** Fixed number precision validation in V2 forms accepting values with too many decimal places. ([#10512](https://github.com/nocobase/nocobase/pull/10512)) by @katherinehhh
- **[client-v2]** Fixed inconsistent v2 subtable row heights before and after adding fields. ([#10520](https://github.com/nocobase/nocobase/pull/10520)) by @katherinehhh
- **[File manager]** Enabled knowledge-base document downloads to use the same file download handling as file-manager. ([#10513](https://github.com/nocobase/nocobase/pull/10513)) by @cgyrock
- **[Data source manager]**

  - Fixed submission errors when editing relation fields with existing inverse fields in the v2 data source manager. ([#10521](https://github.com/nocobase/nocobase/pull/10521)) by @katherinehhh
  - Fixed empty inverse relationship types when adding an inverse field to an existing relationship in the v2 data source editor. ([#10511](https://github.com/nocobase/nocobase/pull/10511)) by @katherinehhh
  - Fixed incorrect duplicate-name validation when recreating deleted fields in v2 data source settings. ([#10509](https://github.com/nocobase/nocobase/pull/10509)) by @katherinehhh
- **[AI employees]**

  - Improved AI conversation prompt-cache reuse after frontend tools finish by keeping the conversation time context stable. ([#10517](https://github.com/nocobase/nocobase/pull/10517)) by @cgyrock
  - Fixed AI employee settings not being saveable when the knowledge base was turned off but its retrieval fields were empty ([#10507](https://github.com/nocobase/nocobase/pull/10507)) by @cgyrock
- **[Workflow]** Fixed disappearing to-many field assignments when reopening workflow update nodes in v2, and changed association selections to store keys and load record labels by key. ([#10523](https://github.com/nocobase/nocobase/pull/10523)) by @mytharcher
- **[AI: Knowledge base]** Improved knowledge-base document deletion with a modal confirmation showing the filename and localized buttons, and unified document download handling with file-manager. by @cgyrock
- **[Workflow: Approval]** Fixed approval tasks not opening from the Related approvals block on native V2 pages. by @mytharcher
- **[WeCom]** Fix duplicate slashes in WeCom authorization and callback URLs when Origin has a trailing slash. by @chenzhizdt

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### v2.3.0-beta.12

*Release date: 2026-09-24*

### 🐛 Bug Fixes

- **[client-v2]**

  - Fixed quick edit popover closing when collapsing a multi-select dropdown, and dropdown options covering the Submit button. ([#10536](https://github.com/nocobase/nocobase/pull/10536)) by @katherinehhh
  - Fix: sub-table fields were still editable after the field was set to disabled ([#10532](https://github.com/nocobase/nocobase/pull/10532)) by @katherinehhh
- **[Block: Kanban]** Fixed modern kanban blocks not refreshing after adding records through the toolbar when no filters were active. ([#10525](https://github.com/nocobase/nocobase/pull/10525)) by @jiannx
- **[Workflow]** Fixed workflow user selection search to query the API instead of filtering only loaded users. ([#10537](https://github.com/nocobase/nocobase/pull/10537)) by @mytharcher
- **[Departments]** Restricted department user directory access to authorized roles ([#10539](https://github.com/nocobase/nocobase/pull/10539)) by @2013xile
- **[Email manager]** Prevent circular email reply relationships from blocking mail synchronization by @jiannx

### v2.3.0-beta.11

*Release date: 2026-09-20*

### 🚀 Improvements

- **[Data source manager]** In the v2 data source manager, the relation field's foreign key can be selected from the existing columns of the owning collection, like v1. ([#10526](https://github.com/nocobase/nocobase/pull/10526)) by @katherinehhh
- **[WeCom]** Support configurable WeCom sync email types and consistent email mapping for full and incremental synchronization. by @chenzhizdt

### 🐛 Bug Fixes

- **[client-v2]** Fixed inconsistent v2 subtable row heights before and after adding fields. ([#10520](https://github.com/nocobase/nocobase/pull/10520)) by @katherinehhh
- **[flow-engine]** Fixed number precision validation in V2 forms accepting values with too many decimal places. ([#10512](https://github.com/nocobase/nocobase/pull/10512)) by @katherinehhh
- **[server]** Prevent secret environment variable exposure in custom request URLs ([#10503](https://github.com/nocobase/nocobase/pull/10503)) by @2013xile
- **[File manager]**

  - Enabled knowledge-base document downloads to use the same file download handling as file-manager. ([#10513](https://github.com/nocobase/nocobase/pull/10513)) by @cgyrock
  - Move the delete button on v2 attachment and Attachment (URL) cards to the top-right corner to reduce accidental deletion during preview. ([#10508](https://github.com/nocobase/nocobase/pull/10508)) by @katherinehhh
- **[Workflow]** Fixed disappearing to-many field assignments when reopening workflow update nodes in v2, and changed association selections to store keys and load record labels by key. ([#10523](https://github.com/nocobase/nocobase/pull/10523)) by @mytharcher
- **[Block: Comment]** Fixed comment-specific Edit, Delete, and Quote reply actions incorrectly appearing in the table row action configuration menu. ([#10519](https://github.com/nocobase/nocobase/pull/10519)) by @jiannx
- **[Data source manager]**

  - Fixed submission errors when editing relation fields with existing inverse fields in the v2 data source manager. ([#10521](https://github.com/nocobase/nocobase/pull/10521)) by @katherinehhh
  - Fixed empty inverse relationship types when adding an inverse field to an existing relationship in the v2 data source editor. ([#10511](https://github.com/nocobase/nocobase/pull/10511)) by @katherinehhh
  - Fixed incorrect duplicate-name validation when recreating deleted fields in v2 data source settings. ([#10509](https://github.com/nocobase/nocobase/pull/10509)) by @katherinehhh
- **[AI employees]**

  - Fixed AI employee settings not being saveable when the knowledge base was turned off but its retrieval fields were empty ([#10507](https://github.com/nocobase/nocobase/pull/10507)) by @cgyrock
  - Improved AI conversation prompt-cache reuse after frontend tools finish by keeping the conversation time context stable. ([#10517](https://github.com/nocobase/nocobase/pull/10517)) by @cgyrock
  - Fixed AI employee data query tools returning no records when the collection's role permission uses a data scope based on the current user ([#10501](https://github.com/nocobase/nocobase/pull/10501)) by @cgyrock
- **[Collection field: Sequence]** Fix sequence field validation for random character patterns configured with multiple character sets. ([#10504](https://github.com/nocobase/nocobase/pull/10504)) by @mytharcher
- **[Access control]** Fixed unintended permission changes when clicking the blank space beside system permission checkboxes in the modern client's role settings. ([#10518](https://github.com/nocobase/nocobase/pull/10518)) by @jiannx
- **[AI: Knowledge base]** Improved knowledge-base document deletion with a modal confirmation showing the filename and localized buttons, and unified document download handling with file-manager. by @cgyrock
- **[Workflow: Approval]**

  - Fixed data not being saved correctly after a before-save approval is returned, resubmitted, and approved. by @mytharcher
  - Hide approval action buttons for queued sequential approvers and show a waiting hint. by @mytharcher
  - Fixed approval tasks not opening from the Related approvals block on native V2 pages. by @mytharcher
- **[WeCom]** Fix duplicate slashes in WeCom authorization and callback URLs when Origin has a trailing slash. by @chenzhizdt

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### v2.4.0-alpha.8

*Release date: 2026-09-24*

### 🐛 Bug Fixes

- **[client-v2]**

  - Fix: sub-table fields were still editable after the field was set to disabled ([#10532](https://github.com/nocobase/nocobase/pull/10532)) by @katherinehhh
  - Fixed quick edit popover closing when collapsing a multi-select dropdown, and dropdown options covering the Submit button. ([#10536](https://github.com/nocobase/nocobase/pull/10536)) by @katherinehhh
- **[Workflow]** Fixed workflow user selection search to query the API instead of filtering only loaded users. ([#10537](https://github.com/nocobase/nocobase/pull/10537)) by @mytharcher
- **[Portal manager]** Fix the issue where the workflow task center page is missing the top navigation bar ([#10535](https://github.com/nocobase/nocobase/pull/10535)) by @zhangzhonghe
- **[Departments]** Restricted department user directory access to authorized roles ([#10539](https://github.com/nocobase/nocobase/pull/10539)) by @2013xile
- **[Block: Kanban]** Fixed modern kanban blocks not refreshing after adding records through the toolbar when no filters were active. ([#10525](https://github.com/nocobase/nocobase/pull/10525)) by @jiannx
- **[Email manager]** Prevent circular email reply relationships from blocking mail synchronization by @jiannx

### v2.4.0-alpha.7

*Release date: 2026-09-20*

### 🚀 Improvements

- **[Data source manager]** In the v2 data source manager, the relation field's foreign key can be selected from the existing columns of the owning collection, like v1. ([#10526](https://github.com/nocobase/nocobase/pull/10526)) by @katherinehhh
- **[WeCom]** Support configurable WeCom sync email types and consistent email mapping for full and incremental synchronization. by @chenzhizdt

### 🐛 Bug Fixes

- **[client-v2]** Fixed inconsistent v2 subtable row heights before and after adding fields. ([#10520](https://github.com/nocobase/nocobase/pull/10520)) by @katherinehhh
- **[flow-engine]** Fixed number precision validation in V2 forms accepting values with too many decimal places. ([#10512](https://github.com/nocobase/nocobase/pull/10512)) by @katherinehhh
- **[Block: Comment]** Fixed comment-specific Edit, Delete, and Quote reply actions incorrectly appearing in the table row action configuration menu. ([#10519](https://github.com/nocobase/nocobase/pull/10519)) by @jiannx
- **[Access control]** Fixed unintended permission changes when clicking the blank space beside system permission checkboxes in the modern client's role settings. ([#10518](https://github.com/nocobase/nocobase/pull/10518)) by @jiannx
- **[Workflow]** Fixed disappearing to-many field assignments when reopening workflow update nodes in v2, and changed association selections to store keys and load record labels by key. ([#10523](https://github.com/nocobase/nocobase/pull/10523)) by @mytharcher
- **[AI employees]**

  - Improved AI conversation prompt-cache reuse after frontend tools finish by keeping the conversation time context stable. ([#10517](https://github.com/nocobase/nocobase/pull/10517)) by @cgyrock
  - Fixed AI employee settings not being saveable when the knowledge base was turned off but its retrieval fields were empty ([#10507](https://github.com/nocobase/nocobase/pull/10507)) by @cgyrock
- **[File manager]**

  - Enabled knowledge-base document downloads to use the same file download handling as file-manager. ([#10513](https://github.com/nocobase/nocobase/pull/10513)) by @cgyrock
  - Move the delete button on v2 attachment and Attachment (URL) cards to the top-right corner to reduce accidental deletion during preview. ([#10508](https://github.com/nocobase/nocobase/pull/10508)) by @katherinehhh
- **[Data source manager]**

  - Fixed empty inverse relationship types when adding an inverse field to an existing relationship in the v2 data source editor. ([#10511](https://github.com/nocobase/nocobase/pull/10511)) by @katherinehhh
  - Fixed submission errors when editing relation fields with existing inverse fields in the v2 data source manager. ([#10521](https://github.com/nocobase/nocobase/pull/10521)) by @katherinehhh
  - Fixed incorrect duplicate-name validation when recreating deleted fields in v2 data source settings. ([#10509](https://github.com/nocobase/nocobase/pull/10509)) by @katherinehhh
- **[Collection field: Sequence]** Fix sequence field validation for random character patterns configured with multiple character sets. ([#10504](https://github.com/nocobase/nocobase/pull/10504)) by @mytharcher
- **[AI: Knowledge base]** Improved knowledge-base document deletion with a modal confirmation showing the filename and localized buttons, and unified document download handling with file-manager. by @cgyrock
- **[Workflow: Approval]**

  - Hide approval action buttons for queued sequential approvers and show a waiting hint. by @mytharcher
  - Fixed approval tasks not opening from the Related approvals block on native V2 pages. by @mytharcher
  - Fixed data not being saved correctly after a before-save approval is returned, resubmitted, and approved. by @mytharcher
- **[WeCom]**

  - Resolve the merge conflict between `develop` and `next` while preserving both URL handling changes. by @chenzhizdt
  - Fix duplicate slashes in WeCom authorization and callback URLs when Origin has a trailing slash. by @chenzhizdt
