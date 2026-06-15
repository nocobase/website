### 🚀 Improvements

- **[Workflow]** Improved the workflow metadata editing experience by supporting description editing in the details popup and automatically filling source workflow metadata when duplicating workflows. ([#9766](https://github.com/nocobase/nocobase/pull/9766)) by @mytharcher

### 🐛 Bug Fixes

- **[Action: Import records]** Changed uploaded import files to disk storage to reduce memory pressure during large data imports. ([#9739](https://github.com/nocobase/nocobase/pull/9739)) by @mytharcher
- **[Backup manager]** Fixed a security issue where unsafe PostgreSQL schema names could be accepted during backup restoration. ([#9758](https://github.com/nocobase/nocobase/pull/9758)) by @2013xile
- **[Workflow]**

  - Fixed workflow timeout handling so aborted executions and their pending tasks can be updated atomically. ([#9768](https://github.com/nocobase/nocobase/pull/9768)) by @mytharcher
  - Fixed the issue where the workflow’s last updated by field was not updated after workflow node changes. ([#9769](https://github.com/nocobase/nocobase/pull/9769)) by @mytharcher
- **[Action: Import records Pro]** Avoided parsing large files in the request node before Pro import creates an async task. by @mytharcher
- **[Version control]** Adjusted the position of the version control top shortcut entry so it appears next to the UI editor in both legacy and v2 admin layouts. by @cgyrock
