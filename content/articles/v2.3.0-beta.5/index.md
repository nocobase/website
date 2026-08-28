### 🐛 Bug Fixes

- **[client-v2]** Fix a render error when switching a v2 association field to popup record selection. ([#10419](https://github.com/nocobase/nocobase/pull/10419)) by @katherinehhh

- **[AI LLM: GigaChat]** Fixed an application startup error on iOS 15.6 and earlier when the GigaChat AI provider is enabled ([#10418](https://github.com/nocobase/nocobase/pull/10418)) by @cgyrock

- **[Public forms]** Fix duplicate Submit actions in V2 regular form configuration when Public Forms is enabled. ([#10417](https://github.com/nocobase/nocobase/pull/10417)) by @katherinehhh

- **[Access control]** Fixed an ACL bypass that allowed `firstOrCreate` or `updateOrCreate` to read or modify existing records without the required view or update permission. ([#10403](https://github.com/nocobase/nocobase/pull/10403)) by @mytharcher

- **[Workflow]**
  - Fix option fields being unable to select configured values in v2 workflow Create record and Update record nodes. ([#10414](https://github.com/nocobase/nocobase/pull/10414)) by @katherinehhh

  - Fix the extra trigger at `startsOn` for schedule workflows repeating on a cron expression ([#10410](https://github.com/nocobase/nocobase/pull/10410)) by @Tespera

  - Fixed collection event as sub-workflows failing when called with a record ID and no preload associations configured ([#10407](https://github.com/nocobase/nocobase/pull/10407)) by @mytharcher

- **[UI templates]** Fix the error when closing an approval task containing a referenced block ([#10415](https://github.com/nocobase/nocobase/pull/10415)) by @zhangzhonghe

- **[Multi-space]** File and preview links from space-scoped file collections now retain the active space context, preventing incorrect 404 responses when users open them. by @jiannx

- **[AI: Knowledge base]** Fixed AI employees incorrectly reporting no knowledge-base access for root users by @hongboji

- **[Workflow: Approval]** Fixed the approval trigger-variable form not rendering for subflow nodes on v1 workflow pages. by @mytharcher

- **[WeCom]** Fixed WeCom automatic login lifecycle and notification form compatibility in client-v2. by @chenzhizdt

