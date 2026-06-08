### 🎉 New Features

- **[undefined]** Improved managed app and plugin management in the CLI, including appPath-aware environment handling, plugin import, licensed plugin sync, and related documentation updates. ([#9655](https://github.com/nocobase/nocobase/pull/9655)) by @chenos
Reference: [CLI docs](https://github.com/nocobase/nocobase/tree/feat/cli-app-path/docs/docs/en/api/cli), [Quickstart](https://github.com/nocobase/nocobase/tree/feat/cli-app-path/docs/docs/en/quickstart)
- **[Block: Gantt]** Added an option for Gantt blocks to focus on today by default when opened ([#9692](https://github.com/nocobase/nocobase/pull/9692)) by @jiannx

- **[Multi-space]** Added client v2 support for the multi-space plugin, including space switching and space management. by @jiannx

### 🚀 Improvements

- **[Workflow]** Removed workflow history transaction coupling from workflow execution. ([#9668](https://github.com/nocobase/nocobase/pull/9668)) by @mytharcher

- **[UI templates]** Migrate UI templates to client v2. ([#9591](https://github.com/nocobase/nocobase/pull/9591)) by @gchust

- **[Multi-keyword filter]** Migrate multi keyword filter into client v2. ([#9691](https://github.com/nocobase/nocobase/pull/9691)) by @gchust

- **[Workflow: Subflow]** Removed workflow history transaction coupling from subflow workflow instructions. by @mytharcher

- **[Workflow: Approval]** Removed workflow history transaction coupling from approval workflow instructions. by @mytharcher

### 🐛 Bug Fixes

- **[client]** Fix the issue where hidden linked fields still kept old values ([#9687](https://github.com/nocobase/nocobase/pull/9687)) by @zhangzhonghe

- **[Action: Import records]** Fixed imported records receiving duplicate sort values ([#9684](https://github.com/nocobase/nocobase/pull/9684)) by @2013xile

- **[Flow engine]** Fixed an issue where converting a reference template block to copy would result in an error. ([#9693](https://github.com/nocobase/nocobase/pull/9693)) by @gchust

- **[Block: Map]** Fixed detail views so map fields keep their original values when switching between text and map display modes ([#9653](https://github.com/nocobase/nocobase/pull/9653)) by @hongboji

- **[Workflow]** Fixed duplicate workflow execution dispatch under concurrent workers. ([#9673](https://github.com/nocobase/nocobase/pull/9673)) by @mytharcher

- **[Workflow: Approval]** Fix the issue where custom field titles are not shown in approval form details by @zhangzhonghe

