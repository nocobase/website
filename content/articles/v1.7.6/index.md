### 🚀 Improvements

- **[client]** Prohibit moving a group menu into itself ([#7005](https://github.com/nocobase/nocobase/pull/7005)) by @zhangzhonghe

### 🐛 Bug Fixes

- **[client]**
  - Resolved an issue where block failed to read view data from external data sources. ([#7017](https://github.com/nocobase/nocobase/pull/7017)) by @aaaaaajie

  - Fix the filter block parameter error issue ([#6966](https://github.com/nocobase/nocobase/pull/6966)) by @zhangzhonghe

  - Current object variable is invalid in linkage rules ([#7008](https://github.com/nocobase/nocobase/pull/7008)) by @zhangzhonghe

  - Unable to clear the required field indicator of sub-table using linkage rules ([#7022](https://github.com/nocobase/nocobase/pull/7022)) by @zhangzhonghe

- **[undefined]** Remove database dependency for possibleTypes, enforce API-driven configuration by @aaaaaajie

- **[Mobile]** Optimize mobile popup lag issues ([#7029](https://github.com/nocobase/nocobase/pull/7029)) by @zhangzhonghe

- **[Data source manager]** Remove database dependency for possibleTypes, enforce API-driven configuration ([#7019](https://github.com/nocobase/nocobase/pull/7019)) by @aaaaaajie

- **[Action: Import records]** Fixed errors occurring during batch editing when importing XLSX tree table data ([#7013](https://github.com/nocobase/nocobase/pull/7013)) by @aaaaaajie

- **[Workflow]** Fix UI error when workflow not exists ([#7023](https://github.com/nocobase/nocobase/pull/7023)) by @mytharcher

- **[Workflow: JavaScript]** Fix require for relative path by @mytharcher

- **[Workflow: Approval]**
  - Fix error thrown when workflow deleted by @mytharcher

  - Reload file association from snapshot to avoid URL expires by @mytharcher

  - Fix trigger variables by @mytharcher

