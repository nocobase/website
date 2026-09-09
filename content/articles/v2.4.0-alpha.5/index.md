### 🚀 Improvements

- **[WeCom]** Improved type safety and unified the notification recipient selector in the WeCom plugin. by @chenzhizdt

### 🐛 Bug Fixes

- **[client-v2]**
  - Support displaying to-many association fields as read-only subtables in client v2 forms. ([#10478](https://github.com/nocobase/nocobase/pull/10478)) by @katherinehhh

  - Fixed the inverse relationship type being editable in v2 field configuration. ([#10476](https://github.com/nocobase/nocobase/pull/10476)) by @katherinehhh

  - Fix nested association fields rendering blank in V2 forms when the parent relation uses dropdown selection. ([#10477](https://github.com/nocobase/nocobase/pull/10477)) by @katherinehhh

- **[cli]** Restrict legacy local upload URLs to signed-in users by default, with an opt-in compatibility switch for public access. ([#10471](https://github.com/nocobase/nocobase/pull/10471)) by @mytharcher

- **[Workflow: JavaScript]** Fixed an issue where a timed-out JavaScript workflow node could incorrectly abort the workflow instead of respecting "Continue when exception thrown". ([#10461](https://github.com/nocobase/nocobase/pull/10461)) by @mytharcher

- **[File manager]** Prevent file redirects from reusing expired signed storage URLs. ([#10475](https://github.com/nocobase/nocobase/pull/10475)) by @mytharcher

- **[Notification: In-app message]** Allow all workflow variable types in in-app notification titles and detail links. ([#10470](https://github.com/nocobase/nocobase/pull/10470)) by @mytharcher

- **[Data source manager]** Added current user and current role variable selection to v2 permission data scopes ([#10472](https://github.com/nocobase/nocobase/pull/10472)) by @jiannx

- **[Block: Kanban]** Fixed an issue where newly created records were not immediately visible in the Kanban block. ([#10463](https://github.com/nocobase/nocobase/pull/10463)) by @gaurangagar

- **[DingTalk]** Unified the DingTalk notification recipient selector. by @chenzhizdt

