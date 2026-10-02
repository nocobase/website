Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase is currently updated across three branches: `main`, `next`, and `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: The most stable version to date, recommended for installation.
* `next`: Beta version, contains upcoming new features and has been preliminarily tested. There might be some known or unknown issues. It is mainly used to collect feedback from test users and further optimize features. Ideal for test users who want to experience new features early and provide feedback.
* `develop`: Alpha version, contains the latest feature code, may be incomplete or unstable, and is mainly used for internal development and rapid iteration. Suited for technical users interested in cutting-edge product capabilities, but not recommended for production use.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### v2.2.20

*Release date: 2026-09-30*

### 🎉 New Features

- **[AI employees]** AI employee chat responses expose the referenced knowledge base documents ([#10560](https://github.com/nocobase/nocobase/pull/10560)) by @cgyrock
- **[AI: Knowledge base]** Resolve referenced knowledge base documents for AI employee chat responses by @cgyrock

### 🐛 Bug Fixes

- **[create-nocobase-app]** Upgrade `js-yaml` and `uuid` ([#10555](https://github.com/nocobase/nocobase/pull/10555)) by @2013xile
- **[sdk]** Upgraded axios to 1.20.0 ([#10566](https://github.com/nocobase/nocobase/pull/10566)) by @2013xile
- **[client-v2]** Fix the issue where the "Current popup parent record" variable is missing in quick create popups of association fields in approval forms ([#10554](https://github.com/nocobase/nocobase/pull/10554)) by @zhangzhonghe
- **[Block: Kanban]** Fixed Kanban layout flicker when adding an AI employee action. ([#10553](https://github.com/nocobase/nocobase/pull/10553)) by @jiannx
- **[Data source: External NocoBase]** Fixed the type build failure caused by the axios 1.20.0 upgrade by @2013xile
- **[Data source: External Oracle]** Fixed a type error surfaced by the axios 1.20.0 upgrade by @2013xile
- **[Workflow: Approval]** Fix the issue where hidden field labels reappear and field values are empty in submitted approval details by @zhangzhonghe

### v2.2.19

*Release date: 2026-09-29*

### 🎉 New Features

- **[AI employees]** Added support for OpenCode Zen / Go as an LLM service by sending the required session headers; DeepSeek Flash models now accept image attachments, and web search is limited to DeepSeek V4 Pro because Flash models silently ignore it ([#10551](https://github.com/nocobase/nocobase/pull/10551)) by @cgyrock

### 🚀 Improvements

- **[client-v2]** Table column quick edit: support setting a data scope for association fields ([#10547](https://github.com/nocobase/nocobase/pull/10547)) by @katherinehhh

### 🐛 Bug Fixes

- **[client-v2]** Fix the issue where signing in with another account after signing out shows a 404 page ([#10549](https://github.com/nocobase/nocobase/pull/10549)) by @zhangzhonghe
- **[Action: Batch update]** Prevent bulk update actions from submitting option values that no longer exist in the configured collection field. ([#10540](https://github.com/nocobase/nocobase/pull/10540)) by @jiannx
- **[Workflow]** Fix creation of the jobs status and ID index during database sync. ([#10552](https://github.com/nocobase/nocobase/pull/10552)) by @mytharcher

### v2.2.18

*Release date: 2026-09-25*

### 🐛 Bug Fixes

- **[client]** Fixed workflow manual node form layouts failing when multiple fields are arranged in one row. ([#10545](https://github.com/nocobase/nocobase/pull/10545)) by @mytharcher
- **[client-v2]** Fixed saving attachment and file relation changes inside approval form sub-tables. ([#10544](https://github.com/nocobase/nocobase/pull/10544)) by @mytharcher
- **[Block: GridCard]** Fixed Grid Card pagination switching and aligned simple-pagination page sizes with the configured column count ([#10541](https://github.com/nocobase/nocobase/pull/10541)) by @jiannx
- **[Workflow: Aggregate node]** Fix aggregate field selection for collections selected through to-many associations. ([#10543](https://github.com/nocobase/nocobase/pull/10543)) by @mytharcher
- **[Migration manager]** Updated `decompress` to `@xhmikosr/decompress` 11.1.4 by @2013xile

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### v2.3.0-beta.13

*Release date: 2026-09-30*

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

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### v2.4.0-alpha.9

*Release date: 2026-09-30*

### 🎉 New Features

- **[AI employees]**

  - AI employee chat responses expose the referenced knowledge base documents ([#10560](https://github.com/nocobase/nocobase/pull/10560)) by @cgyrock
  - Added support for OpenCode Zen / Go as an LLM service by sending the required session headers; DeepSeek Flash models now accept image attachments, and web search is limited to DeepSeek V4 Pro because Flash models silently ignore it ([#10551](https://github.com/nocobase/nocobase/pull/10551)) by @cgyrock
- **[AI: Knowledge base]** Resolve referenced knowledge base documents for AI employee chat responses by @cgyrock

### 🚀 Improvements

- **[client-v2]** Table column quick edit: support setting a data scope for association fields ([#10547](https://github.com/nocobase/nocobase/pull/10547)) by @katherinehhh

### 🐛 Bug Fixes

- **[sdk]** Upgraded axios to 1.20.0 ([#10566](https://github.com/nocobase/nocobase/pull/10566)) by @2013xile
- **[client-v2]**

  - Fix the issue where the "Current popup parent record" variable is missing in quick create popups of association fields in approval forms ([#10554](https://github.com/nocobase/nocobase/pull/10554)) by @zhangzhonghe
  - Fixed saving attachment and file relation changes inside approval form sub-tables. ([#10544](https://github.com/nocobase/nocobase/pull/10544)) by @mytharcher
  - Fix the issue where signing in with another account after signing out shows a 404 page ([#10549](https://github.com/nocobase/nocobase/pull/10549)) by @zhangzhonghe
- **[client]** Fixed workflow manual node form layouts failing when multiple fields are arranged in one row. ([#10545](https://github.com/nocobase/nocobase/pull/10545)) by @mytharcher
- **[create-nocobase-app]** Upgrade `js-yaml` and `uuid` ([#10555](https://github.com/nocobase/nocobase/pull/10555)) by @2013xile
- **[Workflow: Aggregate node]** Fix aggregate field selection for collections selected through to-many associations. ([#10543](https://github.com/nocobase/nocobase/pull/10543)) by @mytharcher
- **[Block: GridCard]** Fixed Grid Card pagination switching and aligned simple-pagination page sizes with the configured column count ([#10541](https://github.com/nocobase/nocobase/pull/10541)) by @jiannx
- **[Workflow]** Fix creation of the jobs status and ID index during database sync. ([#10552](https://github.com/nocobase/nocobase/pull/10552)) by @mytharcher
- **[Action: Batch update]** Prevent bulk update actions from submitting option values that no longer exist in the configured collection field. ([#10540](https://github.com/nocobase/nocobase/pull/10540)) by @jiannx
- **[Block: Kanban]** Fixed Kanban layout flicker when adding an AI employee action. ([#10553](https://github.com/nocobase/nocobase/pull/10553)) by @jiannx
- **[Data source: External NocoBase]** Fixed the type build failure caused by the axios 1.20.0 upgrade by @2013xile
- **[Migration manager]** Updated `decompress` to `@xhmikosr/decompress` 11.1.4 by @2013xile
- **[Data source: External Oracle]** Fixed a type error surfaced by the axios 1.20.0 upgrade by @2013xile
- **[Workflow: Approval]** Fix the issue where hidden field labels reappear and field values are empty in submitted approval details by @zhangzhonghe
