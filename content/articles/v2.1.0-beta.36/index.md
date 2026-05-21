### 🎉 New Features

- **[cli]** add backup create and restore commands ([#9541](https://github.com/nocobase/nocobase/pull/9541)) by @chenos

- **[Backup manager]** open source backup manager plugin ([#9550](https://github.com/nocobase/nocobase/pull/9550)) by @chenos

- **[Theme editor]** Theme editor is now available in the v2 interface ([#9530](https://github.com/nocobase/nocobase/pull/9530)) by @zhangzhonghe

- **[Two-factor authentication (2FA)]** TOTP and two-factor authentication can now be bound, verified, and configured from the v2 client. by @Molunerfinn

### 🚀 Improvements

- **[client]** optimize action button display settings ([#9510](https://github.com/nocobase/nocobase/pull/9510)) by @katherinehhh

- **[flow-engine]** V2 field configuration menus now support searching fields ([#9489](https://github.com/nocobase/nocobase/pull/9489)) by @zhangzhonghe

- **[cli]** improve env auth flow ([#9546](https://github.com/nocobase/nocobase/pull/9546)) by @chenos

- **[undefined]**
  - Add dependency security review for pull requests ([#9523](https://github.com/nocobase/nocobase/pull/9523)) by @zhangzhonghe

  - Add dependency security review for pull requests by @zhangzhonghe

  - Add dependency security review for pull requests by @zhangzhonghe

- **[Verification]** Add v2 client to the Verification plugin (admin settings page, user center entry, SMS OTP forms). ([#9515](https://github.com/nocobase/nocobase/pull/9515)) by @Molunerfinn

- **[Authentication]** Custom brand settings now work correctly in the v2 client ([#9543](https://github.com/nocobase/nocobase/pull/9543)) by @zhangzhonghe

- **[Block: Map]** Added v2 client support for the map plugin. ([#9511](https://github.com/nocobase/nocobase/pull/9511)) by @jiannx

- **[Custom brand]** Custom brand settings are now available in the v2 client by @zhangzhonghe

- **[AI: Knowledge base]** Enabled vector storage modification for AI knowledge bases by @cgyrock

- **[Workflow: Approval]** Add `async` flag for approval instruction, to adapt new creating node API in workflow canvas by @mytharcher

### 🐛 Bug Fixes

- **[client]**
  - fix clear selected values when dependent association fields change in data scope linkage ([#9551](https://github.com/nocobase/nocobase/pull/9551)) by @katherinehhh

  - Fixed dev mode loading for built storage plugins that depend on named exports from local source plugins. ([#9548](https://github.com/nocobase/nocobase/pull/9548)) by @Molunerfinn

  - Fixed incorrect JS Field menu state in subforms. ([#9507](https://github.com/nocobase/nocobase/pull/9507)) by @gchust

  - Fix the issue where narrowed v2 blocks become full width after leaving edit mode ([#9529](https://github.com/nocobase/nocobase/pull/9529)) by @zhangzhonghe

- **[client-v2]** Fixed inconsistent dnd-kit dependency registration. ([#9544](https://github.com/nocobase/nocobase/pull/9544)) by @jiannx

- **[flow-engine]** fix multiple selection issue for external data source fields in v2 form ([#9542](https://github.com/nocobase/nocobase/pull/9542)) by @katherinehhh

- **[Block: iframe]** fix  iframe content not filling configured block height ([#9540](https://github.com/nocobase/nocobase/pull/9540)) by @katherinehhh

- **[AI employees]**
  - Fix error when AI employee access read-only knowledge base ([#9539](https://github.com/nocobase/nocobase/pull/9539)) by @cgyrock

  - Fixed AI tool call cards not appearing immediately when streamed tool events are split ([#9534](https://github.com/nocobase/nocobase/pull/9534)) by @2013xile

  - Fix error when AI employee access read-only knowledge base ([#9538](https://github.com/nocobase/nocobase/pull/9538)) by @cgyrock

- **[Action: Export records]** improve field configuration performance with many association fields ([#9524](https://github.com/nocobase/nocobase/pull/9524)) by @katherinehhh

- **[Action: Batch update]** fix bulk-update action reset loading state after update failure ([#9509](https://github.com/nocobase/nocobase/pull/9509)) by @katherinehhh

- **[Workflow]** Add loading state for manual workflow execution. ([#9533](https://github.com/nocobase/nocobase/pull/9533)) by @mytharcher

- **[Localization]** Fixed built-in localization reference translations for AI translation tasks ([#9531](https://github.com/nocobase/nocobase/pull/9531)) by @2013xile

- **[Migration manager]** Fixed migration file creation failures when using OceanBase by @2013xile

- **[File storage: S3(Pro)]** Fix S3 Pro endpoint handling so server uploads and URL previews do not duplicate the bucket host. by @mytharcher

