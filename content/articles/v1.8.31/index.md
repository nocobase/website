### 🐛 Bug Fixes

- **[database]** Fix error thrown when operator `$in` meets `null` value ([#7610](https://github.com/nocobase/nocobase/pull/7610)) by @mytharcher

- **[Workflow: Approval]**
  - Fix the transaction timeout issue caused by transactions not rolling back properly when database errors occur after approval submission by @mytharcher

  - Fix the issue where variables are not parsed in approval submit form by @mytharcher

