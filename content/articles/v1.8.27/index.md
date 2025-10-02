### 🚀 Improvements

- **[client]** Support to rotate image when previewing ([#7523](https://github.com/nocobase/nocobase/pull/7523)) by @mytharcher

- **[Workflow]** Split the dispatching-related logic into a standalone dispatcher ([#7535](https://github.com/nocobase/nocobase/pull/7535)) by @mytharcher

### 🐛 Bug Fixes

- **[client]** Fix the issue where sidebar submenus cannot highlight correctly ([#7520](https://github.com/nocobase/nocobase/pull/7520)) by @duannyuuu

- **[Workflow: Loop node]** Fixed the issue where the process incorrectly advanced to the next item even when loop node conditions were not satisfied ([#7521](https://github.com/nocobase/nocobase/pull/7521)) by @mytharcher

- **[Workflow]**
  - Fix the issue of duplicated executing due to improper queue handling ([#7533](https://github.com/nocobase/nocobase/pull/7533)) by @mytharcher

  - Fix the issue where the workflow list condition is incorrect when loading associated field context in the bound workflow configuration ([#7516](https://github.com/nocobase/nocobase/pull/7516)) by @mytharcher

  - Fix the issue where scheduled tasks based on date fields do not trigger after start ([#7524](https://github.com/nocobase/nocobase/pull/7524)) by @mytharcher

