### 🐛 Bug Fixes

- **[client]** Fix the issue where the linkage rule for the approval form is not working ([#7858](https://github.com/nocobase/nocobase/pull/7858)) by @zhangzhonghe

- **[server]** Fix an issue in service-splitting mode where unsubscribed queue messages could not be published ([#7875](https://github.com/nocobase/nocobase/pull/7875)) by @mytharcher

- **[Workflow]**
  - Fix the error caused by listening to non-existent external data source events ([#7855](https://github.com/nocobase/nocobase/pull/7855)) by @mytharcher

  - Use eventQueue instead of the shared backgroundJob to prevent the shared queue from being incorrectly consumed in service-splitting mode ([#7871](https://github.com/nocobase/nocobase/pull/7871)) by @mytharcher

- **[Workflow: Manual node]** Fix namespace of locale language should use, to show correct content of translation ([#7877](https://github.com/nocobase/nocobase/pull/7877)) by @mytharcher

- **[Access control]** Issue of association operation snippets are not taking effects ([#7876](https://github.com/nocobase/nocobase/pull/7876)) by @2013xile

- **[Workflow: Approval]**
  - Fix the issue where the page size of loading notification channel is not big enough, and cause the list is not completed loaded by @mytharcher

  - Fix the issue where the linkage rule for the approval form is not working by @zhangzhonghe

  - Fix the date format on the approval list cards in the to-do center to display the complete date and time by @mytharcher

  - Fix a performance issue that occurred when querying the list of approval records during approval submission by @mytharcher

