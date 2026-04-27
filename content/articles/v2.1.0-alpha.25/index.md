### 🎉 New Features

- **[Workflow: Approval]** Support to delete draft approval by @mytharcher

### 🚀 Improvements

- **[undefined]** Update AI docs to require NocoBase >= 2.1.0-beta.20 and recommend latest beta version. ([#9252](https://github.com/nocobase/nocobase/pull/9252)) by @Molunerfinn

- **[AI employees]** Update AI employee shortcut task configuration to use the same skills settings component as workflow AI employee node configuration ([#9246](https://github.com/nocobase/nocobase/pull/9246)) by @cgyrock

### 🐛 Bug Fixes

- **[client]**
  - Fixed an issue where default values would not apply when re-adding a record after it had been removed from a sub-table. ([#9192](https://github.com/nocobase/nocobase/pull/9192)) by @gchust

  - filter non-essential optional blocks in the selection pop-up box of related fields ([#9224](https://github.com/nocobase/nocobase/pull/9224)) by @jiannx

- **[Action: Import records]** Fix the issue where import xlsx failed and throw no header matched error ([#9253](https://github.com/nocobase/nocobase/pull/9253)) by @mytharcher

- **[License settings]** update license save success message ([#9251](https://github.com/nocobase/nocobase/pull/9251)) by @jiannx

- **[AI employees]** Fixed the issue where variables in the system prompt of AI employees did not take effect ([#9256](https://github.com/nocobase/nocobase/pull/9256)) by @cgyrock

- **[IdP: OAuth]** Fixed OAuth CLI sign-in failures and restricted dynamic registration to local callback URLs ([#9248](https://github.com/nocobase/nocobase/pull/9248)) by @2013xile

- **[AI: Knowledge base]** Fix issue where deleting knowledge base documents did not delete associated vector data by @cgyrock

- **[Action: Import records Pro]** Fix the issue where import xlsx failed and throw no header matched error by @mytharcher

