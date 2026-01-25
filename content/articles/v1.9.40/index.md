### 🚀 Improvements

- **[Office File Previewer]** Add more file types for previewing on Microsoft ([#8500](https://github.com/nocobase/nocobase/pull/8500)) by @mytharcher

### 🐛 Bug Fixes

- **[client]**
  - fix nanoid field not regenerated after form submit ([#8491](https://github.com/nocobase/nocobase/pull/8491)) by @katherinehhh

  - Fix duplicate required validation message when clearing a cascade field ([#8476](https://github.com/nocobase/nocobase/pull/8476)) by @katherinehhh

- **[database]**
  - Fix errors when filtering with the `empty` operator after reloading a collection ([#8496](https://github.com/nocobase/nocobase/pull/8496)) by @2013xile

  - fix: deep update nested associations ([#8492](https://github.com/nocobase/nocobase/pull/8492)) by @chenos

- **[File manager]** Fix the issue where filename get from request body became unexpectedly decoded string ([#8481](https://github.com/nocobase/nocobase/pull/8481)) by @mytharcher

- **[Data source: Main]** Fixed an issue where deleting records from a many-to-many association table block did not respect the association field `onDelete: 'restrict'` constraint ([#8493](https://github.com/nocobase/nocobase/pull/8493)) by @2013xile

- **[Block: iframe]** Fix the error when adding aggregated variables to Iframe ([#8482](https://github.com/nocobase/nocobase/pull/8482)) by @zhangzhonghe

- **[Workflow: Webhook]** Fix the issue where body data is missing when body parsing not configured by @mytharcher

- **[Template print]** Fixed incorrect print button permission logic when roles were unioned. by @jiannx

- **[Workflow: Approval]**
  - Fix the issue where concurrency makes execution repeatedly resumed by @mytharcher

  - Fix the issue where return an approval to previous node but returned to start by @mytharcher

- **[Migration manager]** Fixed a potential process freeze caused by logging excessively large SQL statements included in migration error exceptions by @cgyrock

