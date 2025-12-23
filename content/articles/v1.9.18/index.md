### 🐛 Bug Fixes

- **[Action: Import records]** Imported fields do not match the fields set in ACLsettings ([#8075](https://github.com/nocobase/nocobase/pull/8075)) by @2013xile

- **[Workflow]** Fix the issue where execution page throw error when jobs on node is undefined ([#8066](https://github.com/nocobase/nocobase/pull/8066)) by @mytharcher

- **[Access control]** Add middleware for permission checks on association operations for external data source ([#8062](https://github.com/nocobase/nocobase/pull/8062)) by @2013xile

- **[Workflow: Approval]**
  - Fix the issue of permission error thrown when load record related approvals on detail drawer by @mytharcher

  - Fix the issue where approval records are not included in job result in return branch by @mytharcher

  - Fix the issue where process is incorrect when branching with order and countersign by @mytharcher

