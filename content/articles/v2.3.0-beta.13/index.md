### 🎉 New Features

- **[AI employees]**
  - AI employee chat responses expose the referenced knowledge base documents ([#10560](https://github.com/nocobase/nocobase/pull/10560)) by @cgyrock

  - Added support for OpenCode Zen / Go as an LLM service by sending the required session headers; DeepSeek Flash models now accept image attachments, and web search is limited to DeepSeek V4 Pro because Flash models silently ignore it ([#10551](https://github.com/nocobase/nocobase/pull/10551)) by @cgyrock

- **[AI: Knowledge base]** Resolve referenced knowledge base documents for AI employee chat responses by @cgyrock

### 🚀 Improvements

- **[client-v2]** Table column quick edit: support setting a data scope for association fields ([#10547](https://github.com/nocobase/nocobase/pull/10547)) by @katherinehhh

### 🐛 Bug Fixes

- **[client-v2]**
  - Fix the issue where the "Current popup parent record" variable is missing in quick create popups of association fields in approval forms ([#10554](https://github.com/nocobase/nocobase/pull/10554)) by @zhangzhonghe

  - Fix the issue where signing in with another account after signing out shows a 404 page ([#10549](https://github.com/nocobase/nocobase/pull/10549)) by @zhangzhonghe

  - Fixed saving attachment and file relation changes inside approval form sub-tables. ([#10544](https://github.com/nocobase/nocobase/pull/10544)) by @mytharcher

- **[create-nocobase-app]** Upgrade `js-yaml` and `uuid` ([#10555](https://github.com/nocobase/nocobase/pull/10555)) by @2013xile

- **[client]** Fixed workflow manual node form layouts failing when multiple fields are arranged in one row. ([#10545](https://github.com/nocobase/nocobase/pull/10545)) by @mytharcher

- **[Workflow]** Fix creation of the jobs status and ID index during database sync. ([#10552](https://github.com/nocobase/nocobase/pull/10552)) by @mytharcher

- **[Workflow: Aggregate node]** Fix aggregate field selection for collections selected through to-many associations. ([#10543](https://github.com/nocobase/nocobase/pull/10543)) by @mytharcher

- **[Block: GridCard]** Fixed Grid Card pagination switching and aligned simple-pagination page sizes with the configured column count ([#10541](https://github.com/nocobase/nocobase/pull/10541)) by @jiannx

- **[Action: Batch update]** Prevent bulk update actions from submitting option values that no longer exist in the configured collection field. ([#10540](https://github.com/nocobase/nocobase/pull/10540)) by @jiannx

- **[Migration manager]** Updated `decompress` to `@xhmikosr/decompress` 11.1.4 by @2013xile

