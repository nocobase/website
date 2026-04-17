### 🎉 New Features

- **[client]** Support trigger workflow button to configure after success flow ([#8726](https://github.com/nocobase/nocobase/pull/8726)) by @mytharcher

- **[Collection field: Code]** field-code supports 2.0 ([#8804](https://github.com/nocobase/nocobase/pull/8804)) by @jiannx

- **[Workflow: Custom action event]** Support custom context data for passing variables to custom action trigger in sub-flow ([#8758](https://github.com/nocobase/nocobase/pull/8758)) by @mytharcher

- **[AI employees]** Update AI chatbox user prompt ([#8725](https://github.com/nocobase/nocobase/pull/8725)) by @heziqiang

### 🚀 Improvements

- **[client]**
  - Show a prompt message when no data is available for the Edit Form block or the Details block. ([#8790](https://github.com/nocobase/nocobase/pull/8790)) by @gchust

  - Refactor admin layout settings and application to model host architecture with v1 v2 compatibility safeguards ([#8710](https://github.com/nocobase/nocobase/pull/8710)) by @zhangzhonghe

  - support summary configuration for table ([#8721](https://github.com/nocobase/nocobase/pull/8721)) by @chenos

- **[flow-engine]** Fixed an issue where new runjs code would parse variable expressions before execution. ([#8762](https://github.com/nocobase/nocobase/pull/8762)) by @gchust

- **[Workflow]** Show all node types in adding menu even not available ([#8828](https://github.com/nocobase/nocobase/pull/8828)) by @mytharcher

- **[Action: Custom request]** Event streaming supports custom requests ([#8749](https://github.com/nocobase/nocobase/pull/8749)) by @jiannx

- **[AI employees]** Update AI chatbox user prompt ([#8717](https://github.com/nocobase/nocobase/pull/8717)) by @heziqiang

- **[Embed NocoBase]** Provide sanitize API to filter association values in action ([#8688](https://github.com/nocobase/nocobase/pull/8688)) by @mytharcher

- **[AI: Knowledge base]** Refactored knowledge base document loading logic. by @cgyrock

- **[Redis lock adapter]** Refactor due to API of LockManger changed in main repository by @mytharcher

- **[Backup manager]** Add lock for scheduled backing-up across cluster nodes by @mytharcher

- **[Migration manager]** Improved migration checks, SQL download support, log formatting, and execution process visibility by @cgyrock

### 🐛 Bug Fixes

- **[undefined]** Fixed an issue where, after upgrading, the system prompted that plugin-block-reference could not be found. ([#8757](https://github.com/nocobase/nocobase/pull/8757)) by @gchust

- **[client]**
  - sub form & sub table data not displayed due to permission check ([#8846](https://github.com/nocobase/nocobase/pull/8846)) by @chenos

  - Fix the issue where the v2 filter form collapse button stops working after sorting fields ([#8843](https://github.com/nocobase/nocobase/pull/8843)) by @zhangzhonghe

  - Fix the issue where custom fields in Filter form Field values cannot render the correct value input type ([#8823](https://github.com/nocobase/nocobase/pull/8823)) by @zhangzhonghe

  - Fixed the issue where the reference template (v1) management page was missing filter and refresh action. ([#8833](https://github.com/nocobase/nocobase/pull/8833)) by @gchust

  - Fixed the issue where the details block of an SQL collection encountered an error when loading data. ([#8817](https://github.com/nocobase/nocobase/pull/8817)) by @gchust

  - Fixed the issue where the field linkage rules in the details block did not take effect during the initial render. ([#8813](https://github.com/nocobase/nocobase/pull/8813)) by @gchust

  - V2 blocks now only show actions supported by the current data source ([#8803](https://github.com/nocobase/nocobase/pull/8803)) by @zhangzhonghe

  - Fix styling issue of the back button on v2 sub-pages ([#8810](https://github.com/nocobase/nocobase/pull/8810)) by @zhangzhonghe

  - Fix popup link navigation being reverted after view close ([#8752](https://github.com/nocobase/nocobase/pull/8752)) by @zhangzhonghe

  - Fix validation for linkage-hidden required fields in config mode ([#8773](https://github.com/nocobase/nocobase/pull/8773)) by @zhangzhonghe

  - Fix tab clipping and ensure minimum tab width in design mode ([#8771](https://github.com/nocobase/nocobase/pull/8771)) by @zhangzhonghe

  - Fix delayed UI updates for subtable column hide toggle and consecutive column deletion ([#8755](https://github.com/nocobase/nocobase/pull/8755)) by @zhangzhonghe

  - Fixed an issue where the original data block did not refresh after editing data in the association field popup. ([#8782](https://github.com/nocobase/nocobase/pull/8782)) by @gchust

  - Disabled adding blocks for many-to-many (array) associatied records to prevent errors. ([#8779](https://github.com/nocobase/nocobase/pull/8779)) by @gchust

  - Fixed an issue where the data block did not refresh when switching menus. ([#8735](https://github.com/nocobase/nocobase/pull/8735)) by @gchust

  - Fix the issue where CollectionField component not render in DefaultValue component ([#8744](https://github.com/nocobase/nocobase/pull/8744)) by @mytharcher

  - fix two required verifications appear in the update record form ([#8761](https://github.com/nocobase/nocobase/pull/8761)) by @jiannx

- **[server]**
  - Fixed the error issue in data queries of non-database data sources ([#8776](https://github.com/nocobase/nocobase/pull/8776)) by @cgyrock

  - Resolve cache issue by appending hash to assets ([#8730](https://github.com/nocobase/nocobase/pull/8730)) by @chenos

- **[lock-manager]** Fix racing condition issue of lock manager ([#8734](https://github.com/nocobase/nocobase/pull/8734)) by @mytharcher

- **[database]**
  - Fixed missing 'Simple Pagination' option in collection`s view template. ([#8778](https://github.com/nocobase/nocobase/pull/8778)) by @cgyrock

  - The precision validation rule for numeric fields is not taking effect ([#8768](https://github.com/nocobase/nocobase/pull/8768)) by @2013xile

  - Fix field custom regular check failure in v2 ([#8729](https://github.com/nocobase/nocobase/pull/8729)) by @jiannx

- **[flow-engine]** Fixed an issue where ctx.exit could not terminate the execution of user-defined event flows. ([#8737](https://github.com/nocobase/nocobase/pull/8737)) by @gchust

- **[Access control]**
  - use collection.filterTargetKey instead of Model.primaryKeyField ([#8853](https://github.com/nocobase/nocobase/pull/8853)) by @chenos

  - Fixed Restful API data source data modification error. ([#8788](https://github.com/nocobase/nocobase/pull/8788)) by @cgyrock

  - Database instance used when setting ACL metadata is incorrect ([#8747](https://github.com/nocobase/nocobase/pull/8747)) by @2013xile

- **[UI templates]**
  - Fixed the issue where association records could not be loaded correctly after saving the details block as template. ([#8827](https://github.com/nocobase/nocobase/pull/8827)) by @gchust

  - Fixed the render error for action panel reference block. ([#8818](https://github.com/nocobase/nocobase/pull/8818)) by @gchust

  - Fixed the issue where the reference block event flow in the table block could not be configured with a row click event flow. ([#8814](https://github.com/nocobase/nocobase/pull/8814)) by @gchust

  - Fixed an issue where reusing the current record block template for details block and edit form block could cause data to fail to load correctly. ([#8775](https://github.com/nocobase/nocobase/pull/8775)) by @gchust

  - Fixed an issue where changes to props made in a template block’s event flow did not take effect. ([#8765](https://github.com/nocobase/nocobase/pull/8765)) by @gchust

- **[Office File Previewer]** Change modal height to a proper value to show more content of file ([#8835](https://github.com/nocobase/nocobase/pull/8835)) by @mytharcher

- **[Action: Export records]**
  - fixed issue that belongsToArray field is blank in exported excel ([#8787](https://github.com/nocobase/nocobase/pull/8787)) by @cgyrock

  - Fixed the issue where numeric type fields in excel files displayed as strings ([#8774](https://github.com/nocobase/nocobase/pull/8774)) by @cgyrock

- **[Workflow]** Fix the issue where node drag placeholder incorrectly showing when dragging blocks in approval node ([#8763](https://github.com/nocobase/nocobase/pull/8763)) by @mytharcher

- **[Block: List]** Fixed an issue where list block fields could not use the current record variable. ([#8784](https://github.com/nocobase/nocobase/pull/8784)) by @gchust

- **[Data source: Main]**
  - Updating the default value of a JSON field does not take effect ([#8767](https://github.com/nocobase/nocobase/pull/8767)) by @2013xile

  - Fields synchronization error ([#8766](https://github.com/nocobase/nocobase/pull/8766)) by @2013xile

- **[AI employees]**
  - Fixed issues that dashscope/deepseek/kimi can not read uploaded document files. ([#8732](https://github.com/nocobase/nocobase/pull/8732)) by @cgyrock

  - Fixed tool call error when using deepseek reasoning model. ([#8741](https://github.com/nocobase/nocobase/pull/8741)) by @cgyrock

  - Fixed ai employee chat error while knowledge base enabled ([#8746](https://github.com/nocobase/nocobase/pull/8746)) by @cgyrock

  - Fixed AI data source configuration rendering issue. ([#8731](https://github.com/nocobase/nocobase/pull/8731)) by @cgyrock

  - Resolve issue where AI message renders with length 0 ([#8723](https://github.com/nocobase/nocobase/pull/8723)) by @heziqiang

- **[Flow engine]** fix sql destroy error ([#8745](https://github.com/nocobase/nocobase/pull/8745)) by @chenos

- **[Workflow: Custom action event]** Fix the issue where custom action workflow hangs when execute as sub-flow ([#8738](https://github.com/nocobase/nocobase/pull/8738)) by @mytharcher

- **[Workflow: JavaScript]** Fix test cases can not pass on windows ([#8722](https://github.com/nocobase/nocobase/pull/8722)) by @mytharcher

- **[Data visualization]** fix i18n for plugin chart entry text ([#8716](https://github.com/nocobase/nocobase/pull/8716)) by @heziqiang

- **[Multi-space]** Fix the space permission error when creating data with the primary key by @jiannx

- **[Template print]** Fix the issue where ACL API changed but is not adapted to plugin by @mytharcher

- **[Workflow: Approval]**
  - Fix the issue where assignees not follow the order configured in the node by @mytharcher

  - Fix the issue where query result not showing caused by nodes filtered by type by @mytharcher

  - Fix the issue where appends parameter filtering by ACL by @mytharcher

  - Fix ACL issue where association value should not be create or update when user has no permission by @mytharcher

  - Add missed parameter to avoid associations not updated when submit new approval by @mytharcher

  - Fix untranslated labels in approval processing details by @zhangzhonghe

  - Fix error thrown caused by value of `dataAfter` missing when added or delegated by @mytharcher

  - Sanitize association values in approval actions, to avoid any data manipulation beyond permission by @mytharcher

  - Fix the issue where error throw when execute approval workflow manually by @mytharcher

  - Sanitize association values in approval actions, to avoid any data manipulation beyond permission by @mytharcher

- **[Email manager]** Fix image content ID format parsing by @jiannx

- **[Migration manager]**
  - Fix missing migration description and set the current time as the default by @cgyrock

  - Fix build error by @mytharcher

  - Adjust temporary directory into storage, to support usage under cluster mode by @mytharcher

  - Fixed a potential process freeze caused by logging excessively large SQL statements included in migration error exceptions by @cgyrock

