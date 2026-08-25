### 🚀 Improvements

- **[undefined]** Clarified how to use public NocoBase file URLs in Markdown, external pages, and third-party services ([#10406](https://github.com/nocobase/nocobase/pull/10406)) by @mytharcher
Reference: [Storage engine overview](https://docs.nocobase.com/file-manager/storage/)
### 🐛 Bug Fixes

- **[Access control]** Fixed an ACL bypass that allowed `firstOrCreate` or `updateOrCreate` to read or modify existing records without the required view or update permission. ([#10403](https://github.com/nocobase/nocobase/pull/10403)) by @mytharcher

- **[Workflow]**
  - Fix option fields being unable to select configured values in v2 workflow Create record and Update record nodes. ([#10414](https://github.com/nocobase/nocobase/pull/10414)) by @katherinehhh

  - Fix the extra trigger at `startsOn` for schedule workflows repeating on a cron expression ([#10410](https://github.com/nocobase/nocobase/pull/10410)) by @Tespera

  - Fixed workflow task center menus so the active menu can be collapsed by clicking it again while retaining its selected highlight ([#10404](https://github.com/nocobase/nocobase/pull/10404)) by @mytharcher

  - Fixed collection event as sub-workflows failing when called with a record ID and no preload associations configured ([#10407](https://github.com/nocobase/nocobase/pull/10407)) by @mytharcher

- **[UI templates]** Fix the error when closing an approval task containing a referenced block ([#10415](https://github.com/nocobase/nocobase/pull/10415)) by @zhangzhonghe

