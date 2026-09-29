### 🎉 New Features

- **[AI employees]** Added support for OpenCode Zen / Go as an LLM service by sending the required session headers; DeepSeek Flash models now accept image attachments, and web search is limited to DeepSeek V4 Pro because Flash models silently ignore it ([#10551](https://github.com/nocobase/nocobase/pull/10551)) by @cgyrock

### 🚀 Improvements

- **[client-v2]** Table column quick edit: support setting a data scope for association fields ([#10547](https://github.com/nocobase/nocobase/pull/10547)) by @katherinehhh

### 🐛 Bug Fixes

- **[client-v2]** Fix the issue where signing in with another account after signing out shows a 404 page ([#10549](https://github.com/nocobase/nocobase/pull/10549)) by @zhangzhonghe

- **[Action: Batch update]** Prevent bulk update actions from submitting option values that no longer exist in the configured collection field. ([#10540](https://github.com/nocobase/nocobase/pull/10540)) by @jiannx

- **[Workflow]** Fix creation of the jobs status and ID index during database sync. ([#10552](https://github.com/nocobase/nocobase/pull/10552)) by @mytharcher

