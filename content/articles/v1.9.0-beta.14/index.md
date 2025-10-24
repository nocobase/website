### 🎉 New Features

- **[Workflow: Approval]** Expose the `approvalId` variable for use from approval triggers by @mytharcher

### 🚀 Improvements

- **[server]** Optimize the method for loading l10n resources to prevent blocking event loop ([#7653](https://github.com/nocobase/nocobase/pull/7653)) by @2013xile

- **[cache]** Avoid performance overhead caused by cloning Bloom filters ([#7652](https://github.com/nocobase/nocobase/pull/7652)) by @2013xile

- **[Action: Import records]** Improved error messaging when table headers are missing ([#7656](https://github.com/nocobase/nocobase/pull/7656)) by @mytharcher

### 🐛 Bug Fixes

- **[client]** prevent label word breaking in formItem label ([#7647](https://github.com/nocobase/nocobase/pull/7647)) by @katherinehhh

- **[Workflow]** Fix logger error thrown when application stop ([#7639](https://github.com/nocobase/nocobase/pull/7639)) by @mytharcher

- **[Workflow: Approval]**
  - Fix the transaction timeout issue caused by transactions not rolling back properly when database errors occur after approval submission by @mytharcher

  - Fix the issue where task count not updated after added assignee by @mytharcher

  - Fix the issue where variables are not parsed in approval submit form by @mytharcher

- **[Email manager]** catch sync error by @jiannx

