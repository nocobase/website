### 🎉 New Features

- **[client]**
  - Support the BIT field in SQL Server for external data sources. ([#7058](https://github.com/nocobase/nocobase/pull/7058)) by @aaaaaajie

  - Support custom aggregation variables ([#6916](https://github.com/nocobase/nocobase/pull/6916)) by @zhangzhonghe
Reference: [Custom variables](https://pr-383.docs-cn.nocobase.com/handbook/custom-variables)
- **[build]** support commercial authorization ([#6554](https://github.com/nocobase/nocobase/pull/6554)) by @jiannx

- **[Data source manager]** ✨ Support on-demand loading of collections from external data sources ([#6979](https://github.com/nocobase/nocobase/pull/6979)) by @aaaaaajie

- **[License settings]** add license setting and validate license before downloading plugins ([#7026](https://github.com/nocobase/nocobase/pull/7026)) by @jiannx

- **[Authentication]** Support the "Forgot Password" function ([#6616](https://github.com/nocobase/nocobase/pull/6616)) by @zhangzhonghe
Reference: [Forgot password](https://docs.nocobase.com/handbook/auth/user#forgot-password)
- **[Action: Batch update]** Support refreshing data in other data blocks after updating data in a block ([#6591](https://github.com/nocobase/nocobase/pull/6591)) by @zhangzhonghe

- **[Data source: External SQL Server]**
  - 支持外部数据源中的 SQL Server BIT 字段 by @aaaaaajie

  - Support on-demand loading of collections from external data sources by @aaaaaajie

- **[Custom variables]** Support custom aggregation variables by @zhangzhonghe
Reference: [Custom variables](https://pr-383.docs-cn.nocobase.com/handbook/custom-variables)
- **[plugin-commercial]** support commercial by @jiannx

- **[Email manager]**
  - support delete email by @jiannx

  - support email sync interval setting by @jiannx

  - support mass sending by @jiannx

### 🚀 Improvements

- **[client]**
  - Support filling input fields via QR code scanning ([#6943](https://github.com/nocobase/nocobase/pull/6943)) by @katherinehhh

  - Determine whether to display the mobile components based on device type rather than page width ([#6611](https://github.com/nocobase/nocobase/pull/6611)) by @zhangzhonghe

  - support localization for Markdown block content ([#6941](https://github.com/nocobase/nocobase/pull/6941)) by @katherinehhh

  - Determine whether to display the mobile layout based on device type rather than page width ([#6600](https://github.com/nocobase/nocobase/pull/6600)) by @zhangzhonghe

- **[Async task manager]** Improve performance of task creation during export ([#7078](https://github.com/nocobase/nocobase/pull/7078)) by @aaaaaajie

- **[Mobile]** Adapt the style of the notification pop-up for mobile devices ([#6557](https://github.com/nocobase/nocobase/pull/6557)) by @zhangzhonghe

- **[plugin-commercial]** encrypt log send and improving license Information display by @jiannx

- **[Email manager]**
  - support separate reply and forwarding of emails within the same subject by @jiannx

  - schema implement then email send and support ai by @jiannx

  - supports the default sending value in pop-up, supports fuzzy search for recipients, and fixes problems by @jiannx

  - complete mass sending function by @jiannx

  - functional improvement and problem fix by @jiannx

### 🐛 Bug Fixes

- **[cli]**
  - Adjust the license copy when installing the plugin ([#7135](https://github.com/nocobase/nocobase/pull/7135)) by @jiannx

  - undefined error in download plugins ([#7143](https://github.com/nocobase/nocobase/pull/7143)) by @jiannx

- **[client]**
  - After clearing the badge value, the UI is not updated ([#7055](https://github.com/nocobase/nocobase/pull/7055)) by @zhangzhonghe

  - Error when clicking filter button ([#7100](https://github.com/nocobase/nocobase/pull/7100)) by @zhangzhonghe

  - Fix the issue where current user data is empty ([#7016](https://github.com/nocobase/nocobase/pull/7016)) by @zhangzhonghe

  - The content displayed incorrectly on pages opened through popup links ([#6990](https://github.com/nocobase/nocobase/pull/6990)) by @zhangzhonghe

  - Pass other props to Variable.Input component. ([#6670](https://github.com/nocobase/nocobase/pull/6670)) by @sheldon66

  - Save as template action will be failed if containing association field ([#6543](https://github.com/nocobase/nocobase/pull/6543)) by @gchust

- **[database]** make eq operator for string fields compatible with number type ([#7062](https://github.com/nocobase/nocobase/pull/7062)) by @chenos

- **[build]** fix the client runtime error in plugin-workflow-javascript, process undefine error ([#6859](https://github.com/nocobase/nocobase/pull/6859)) by @jiannx

- **[Data visualization]** Table pagination issue ([#7151](https://github.com/nocobase/nocobase/pull/7151)) by @2013xile

- **[Data source manager]** Fixed an issue where the combination of on-demand data source loading and table prefix configuration caused a “ConnectionManager.getConnection was called after the connection manager was closed” error. ([#7150](https://github.com/nocobase/nocobase/pull/7150)) by @aaaaaajie

- **[plugin-service-platform]** adjust license text by @jiannx

- **[Custom variables]** After clearing the badge value, the UI is not updated by @zhangzhonghe

- **[plugin-commercial]**
  - adjust the license verification logic and support pan-domain name matching by @jiannx

  - develop mode not show license popup by @jiannx

  - fix commerical log send to crm and text translation by @jiannx

  - licensed plugins not display in license info by @jiannx

  - temporarily close the license verification pop-up by @jiannx

  - 使用原型链实现 withCommercial 函数 by @jiannx

- **[Email manager]**
  - attachment does not display by @jiannx

  - email deletion error by @jiannx

  - email delete failed by @jiannx

  - setting pop-up not to display by @jiannx

  - the reply drawer is not visible by @jiannx

  - recipient fuzzy search supports associated fields by @jiannx

  - add the "id" field to the mailmessagelabelsMailmessages by @jiannx

  - mail fuzzy search to make unique filters by @jiannx

  - multiple primary keys for table "mailmessagelabels_mailmessages" by @jiannx

