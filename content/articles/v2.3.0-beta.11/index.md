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

