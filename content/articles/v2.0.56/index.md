### 🎉 New Features

- **[Backup manager]** open source backup manager plugin ([#9550](https://github.com/nocobase/nocobase/pull/9550)) by @chenos

### 🚀 Improvements

- **[client]** optimize action button display settings ([#9510](https://github.com/nocobase/nocobase/pull/9510)) by @katherinehhh
- **[flow-engine]** V2 field configuration menus now support searching fields ([#9489](https://github.com/nocobase/nocobase/pull/9489)) by @zhangzhonghe
- **[undefined]**

  - Add dependency security review for pull requests ([#9523](https://github.com/nocobase/nocobase/pull/9523)) by @zhangzhonghe
  - **[Notification manager]** Change queue strategy to optimize sending performance ([#9407](https://github.com/nocobase/nocobase/pull/9407)) by @mytharcher
- **[AI: Knowledge base]** Enabled vector storage modification for AI knowledge bases by @cgyrock
- **[Workflow: Approval]** Improve related approvals with timeline cards by @zhangzhonghe

### 🐛 Bug Fixes

- **[client]**

  - fix clear selected values when dependent association fields change in data scope linkage ([#9551](https://github.com/nocobase/nocobase/pull/9551)) by @katherinehhh
  - Fix the issue where a menu badge still shows a dot when its value is 0 ([#9491](https://github.com/nocobase/nocobase/pull/9491)) by @zhangzhonghe
  - Fix the issue where filter forms cannot use current form variables ([#9474](https://github.com/nocobase/nocobase/pull/9474)) by @zhangzhonghe
  - Fix the issue where narrowed v2 blocks become full width after leaving edit mode ([#9529](https://github.com/nocobase/nocobase/pull/9529)) by @zhangzhonghe
  - Fixed incorrect JS Field menu state in subforms. ([#9507](https://github.com/nocobase/nocobase/pull/9507)) by @gchust
- **[flow-engine]** fix multiple selection issue for external data source fields in v2 form ([#9542](https://github.com/nocobase/nocobase/pull/9542)) by @katherinehhh
- **[AI employees]** Fix error when AI employee access read-only knowledge base ([#9539](https://github.com/nocobase/nocobase/pull/9539)) by @cgyrock
- **[Calendar]** Fix the issue where calendar more items cannot be fully displayed ([#9492](https://github.com/nocobase/nocobase/pull/9492)) by @zhangzhonghe
- **[Action: Batch update]** fix bulk-update action reset loading state after update failure ([#9509](https://github.com/nocobase/nocobase/pull/9509)) by @katherinehhh
- **[API documentation]** Fixed collection API documentation so query parameters no longer interfere with each other ([#9442](https://github.com/nocobase/nocobase/pull/9442)) by @jiannx
- **[Workflow]** Add loading state for manual workflow execution. ([#9533](https://github.com/nocobase/nocobase/pull/9533)) by @mytharcher
- **[Migration manager]** Fixed migration file creation failures when using OceanBase by @2013xile
- **[File storage: S3(Pro)]** Fix S3 Pro endpoint handling so server uploads and URL previews do not duplicate the bucket host. by @mytharcher
- **[Workflow: Approval]** Fix duplicate approval record indexes when delegates happen concurrently on the same approval job. by @mytharcher
