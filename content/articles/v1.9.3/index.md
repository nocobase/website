### 🚀 Improvements

- **[database]** Add the `multipleStatements` option to the MariaDB connection instance to support invoking multiple statements in a single query ([#7781](https://github.com/nocobase/nocobase/pull/7781)) by @mytharcher

- **[Workflow]** Support data block in workflow to use consolidate detail settings menu ([#7771](https://github.com/nocobase/nocobase/pull/7771)) by @mytharcher

### 🐛 Bug Fixes

- **[server]** Isolate Pub-Sub channel by app name ([#7762](https://github.com/nocobase/nocobase/pull/7762)) by @mytharcher

- **[client]** Fix "Maximum call stack size exceeded" ([#7780](https://github.com/nocobase/nocobase/pull/7780)) by @zhangzhonghe

- **[database]** Incorrect index field detection when field names use snake_case style ([#7776](https://github.com/nocobase/nocobase/pull/7776)) by @2013xile

- **[Workflow]** Resolved an issue where the workflow dispatcher in cluster mode failed to correctly identify idle states, which could lead to unnecessary queue event consuming before plugin is ready ([#7768](https://github.com/nocobase/nocobase/pull/7768)) by @mytharcher

- **[Mobile (deprecated)]** Fix the issue where the date field default value popup on mobile cannot select a date ([#7783](https://github.com/nocobase/nocobase/pull/7783)) by @zhangzhonghe

- **[Workflow: Approval]** Fix error thrown when duplicate approval workflow by @mytharcher

- **[Email manager]** collection mailMessages add indexes by @jiannx

