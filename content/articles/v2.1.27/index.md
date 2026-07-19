### 🚀 Improvements

- **[client-v2]** Added Myanmar (`my-MM`) to the languages selectable in System Settings. ([#10131](https://github.com/nocobase/nocobase/pull/10131)) by @hongboji

### 🐛 Bug Fixes

- **[resourcer]** Fixed pre-action workflows not triggering when used together with before-save approval workflows. ([#10119](https://github.com/nocobase/nocobase/pull/10119)) by @mytharcher

- **[flow-engine]** Fix mobile popups exceeding the screen and hiding the close button ([#10118](https://github.com/nocobase/nocobase/pull/10118)) by @zhangzhonghe

- **[client-v2]**
  - Fix inconsistent route state after renaming a newly enabled page tab ([#10117](https://github.com/nocobase/nocobase/pull/10117)) by @zhangzhonghe

  - Fix an error that could prevent approval pages from loading ([#10116](https://github.com/nocobase/nocobase/pull/10116)) by @zhangzhonghe

- **[utils]** Ensured server-side outbound request redirects also comply with `SERVER_REQUEST_WHITELIST` ([#10109](https://github.com/nocobase/nocobase/pull/10109)) by @mytharcher
Reference: [Environment variables](https://docs.nocobase.com/get-started/installation/env#server_request_whitelist)
- **[Workflow: Approval]** Fix messages overriding by @mytharcher

