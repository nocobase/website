### 🚀 Improvements

- **[client]** Share condition evaluation between v1 and v2 apps ([#9522](https://github.com/nocobase/nocobase/pull/9522)) by @zhangzhonghe

- **[Localization]** Improved Lina localization translation tasks with translation scope, reference language settings, and quick editing ([#9521](https://github.com/nocobase/nocobase/pull/9521)) by @2013xile

- **[Workflow: Approval]** Improve related approvals with timeline cards by @zhangzhonghe

### 🐛 Bug Fixes

- **[undefined]** align nginx config paths ([#9528](https://github.com/nocobase/nocobase/pull/9528)) by @chenos

- **[cli-v1]** Fixed create-nocobase-app development startup by reusing packaged app shells while enabling local plugin development. ([#9471](https://github.com/nocobase/nocobase/pull/9471)) by @Molunerfinn

- **[client]**
  - Fix the issue where a menu badge still shows a dot when its value is 0 ([#9491](https://github.com/nocobase/nocobase/pull/9491)) by @zhangzhonghe

  - Fix the issue where filter forms cannot use current form variables ([#9474](https://github.com/nocobase/nocobase/pull/9474)) by @zhangzhonghe

- **[Authentication]** Prevent the server from crashing when a WebSocket auth token references an authenticator whose auth type plugin is unloaded or missing. ([#9514](https://github.com/nocobase/nocobase/pull/9514)) by @Molunerfinn

- **[Calendar]**
  - Fix the issue where calendar more items cannot be fully displayed ([#9492](https://github.com/nocobase/nocobase/pull/9492)) by @zhangzhonghe

  - Fixed the cursor style for event items in the calendar more-events overlay ([#9519](https://github.com/nocobase/nocobase/pull/9519)) by @jiannx

- **[License settings]** resolve symlinked bundled deps ([#9518](https://github.com/nocobase/nocobase/pull/9518)) by @chenos

