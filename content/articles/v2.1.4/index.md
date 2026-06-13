### 🚀 Improvements

- **[Workflow]** Improved workflow metadata editing by allowing descriptions to be edited from the details modal and pre-filling duplicate workflow metadata. ([#9766](https://github.com/nocobase/nocobase/pull/9766)) by @mytharcher

### 🐛 Bug Fixes

- **[Action: Import records]** Store import uploads on disk to reduce memory pressure during large imports. ([#9739](https://github.com/nocobase/nocobase/pull/9739)) by @mytharcher

- **[Backup manager]** Fixed a security issue where unsafe PostgreSQL schema names could be accepted during backup restore ([#9758](https://github.com/nocobase/nocobase/pull/9758)) by @2013xile

- **[Workflow]**
  - Fixed workflow timeout handling so aborted executions and their pending jobs are updated atomically. ([#9768](https://github.com/nocobase/nocobase/pull/9768)) by @mytharcher

  - Fixed workflow last modifier tracking after workflow nodes are changed. ([#9769](https://github.com/nocobase/nocobase/pull/9769)) by @mytharcher

- **[Action: Import records Pro]** Avoid parsing large pro import files on the request node before async task creation. by @mytharcher

- **[Version control]** Adjusted the Version control topbar shortcut to appear next to the UI editor in both legacy and v2 admin layouts. by @cgyrock

