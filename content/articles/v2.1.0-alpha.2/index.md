### 🎉 New Features

- **[Workflow: Approval]** Add ACL control for approval APIs by @mytharcher

- **[Auth: DingTalk]** Allows to bind user with `unionId` by @2013xile

### 🚀 Improvements

- **[AI: Knowledge base]** Optimized the build output to reduce the package size of plugin-ai-knowledge-base. by @cgyrock

- **[Multi-space]** multi-space permission control access acl by @jiannx

- **[Action: Export records Pro]** Improve export action data scope based on selected records or resource filters by @katherinehhh

- **[Workflow: Approval]**
  - Remove support for JS fields by @zhangzhonghe

  - Simplify parameters in query, and improve performance by @mytharcher

  - Implement access control for APIs to prevent unauthorized data operations by @mytharcher

  - Add repair logic for sync audiences after migration by @mytharcher

- **[Auth: DingTalk]** Use `userid` as the default key for user association, while preserving compatibility with existing authenticators that rely on mobile by @2013xile

### 🐛 Bug Fixes

- **[Multi-space]**
  - add migration script to remove x-ready-pretty in space field by @jiannx

  - Related space when adding associated data by @jiannx

  - Space selector color follows theme by @jiannx

  - remove the read-pretty attribute for space field by @jiannx

- **[Field component: mask]** Fix an issue where the mask field settings popup could not load all user roles correctly. by @gchust

- **[Action: Import records Pro]**
  - Fix the issue where workflow triggered by async import delayed to execute by @mytharcher

  - Fix count numbers in import result and message translation by @mytharcher

- **[AI: Knowledge base]** Fix the issue where the system cannot start after building by @cgyrock

- **[Data source: REST API]** Add fault-tolerant for request context, to avoid error thrown when method is not in context by @mytharcher

- **[Workflow: Custom action event]** Fix the issue where parameters and payload are incorrect when trigger custom workflow by @mytharcher

- **[Action: Export records Pro]** Fix error when sub-applications execute async import/export tasks while the main application does not enable the import/export pro plugin by @cgyrock

- **[Workflow: Webhook]**
  - Fix the issue where 404 error thrown when post to webhook URL in sub-app by @mytharcher

  - Fix the issue where body data is missing when body parsing not configured by @mytharcher

- **[Workflow: Subflow]** Fix route path of workflow link by @mytharcher

- **[Template print]**
  - fix field list display issue in  template print action configuration by @katherinehhh

  - fix fields with the same key lead to rendering errors by @jiannx

  - Fix obscured configuration template pop-up issue by @zhangzhonghe

  - remove footer buttons from print template configuration by @katherinehhh

  - Fixed incorrect print button permission logic when roles were unioned. by @jiannx

  - support space field by @jiannx

  - display space fields in version 2.0 by @jiannx

- **[File storage: S3(Pro)]** Fix the issue where file renaming mode not works by @mytharcher

- **[Data visualization: ECharts]** Fix ECharts spelling error by @heziqiang

- **[Workflow: Approval]**
  - Fix the issue where error thrown when approving record deleted by @mytharcher

  - Fix error thrown when execute on before save mode by @mytharcher

  - Fix the issue where approval data not showing in record detail popup if workflow mode is set to "Before save" by @mytharcher

  - Add fault-tolerant on workflow deleted, to avoid load error in tasks list by @mytharcher

  - Fix the issue where values missing from detail popup of "My application" by @mytharcher

  - Fix the issue where error thrown in 1.x approval record popup by @mytharcher

  - Fix performance issue caused by JSON field in list loading (MySQL) by @mytharcher

  - Fix incorrect id to load detail record by @mytharcher

  - Fix the issue where concurrency makes execution repeatedly resumed by @mytharcher

  - Fix build error caused by missed dependencies by @mytharcher

  - Fix the issue where incorrect record was loaded caused by wrong parameters by @mytharcher

  - Fix the issue where return an approval to previous node but returned to start by @mytharcher

  - Fix error thrown when add role to user if workflow of audiences is disabled by @mytharcher

  - Fix value block not displays caused by missing `ValueBlock.Result` component by @mytharcher

  - Fix the issue where fields are not displayed on approval task cards by @zhangzhonghe

  - Fix the issue where filter fields not work correctly in tasks center by @mytharcher

- **[Email manager]**
  - fix conversation chain by @jiannx

  - Fix Outlook reply link occasionally disconnected by @jiannx

  - body does not collapse when text is selected.  fix download attachment failed by @jiannx

  - Fixed the problem of emails in the same mailbox between multiple users and optimized performance by @jiannx

  - 管理页面添加筛选 by @jiannx

  - show reply all button and data scope supports filtering child messages. by @jiannx

  - Fix the issue where the email configuration popup is obscured by @zhangzhonghe

- **[WeCom]** Fix an issue where users cannot be auto-registered when mobile is missing by @2013xile

- **[Migration manager]** Fixed a potential process freeze caused by logging excessively large SQL statements included in migration error exceptions by @cgyrock

