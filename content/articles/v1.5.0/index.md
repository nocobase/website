### 🎉 New Features

- **[client]**
  - Add date limited range to the date field component ([#5852](https://github.com/nocobase/nocobase/pull/5852)) by @Cyx649312038

  - Support configuring text, icon, and type for add and select buttons in sub-table ([#5778](https://github.com/nocobase/nocobase/pull/5778)) by @katherinehhh

  - Support enabling link opening pop ups on readPretty field ([#5747](https://github.com/nocobase/nocobase/pull/5747)) by @katherinehhh

  - Support associate and disassociate action in association block ([#5695](https://github.com/nocobase/nocobase/pull/5695)) by @katherinehhh

- **[server]** Add audit manager ([#5601](https://github.com/nocobase/nocobase/pull/5601)) by @chenzhizdt

- **[Workflow]**
  - add random character patterns ([#5959](https://github.com/nocobase/nocobase/pull/5959)) by @kennnnnnnnnn

  - Add stack limit configuration for workflows ([#6077](https://github.com/nocobase/nocobase/pull/6077)) by @citlalinda

  - support manually triggering workflow ([#5664](https://github.com/nocobase/nocobase/pull/5664)) by @mytharcher

- **[Mobile]** add global switch to control all back buttons in mobile (default enabled) ([#5868](https://github.com/nocobase/nocobase/pull/5868)) by @katherinehhh

- **[Calendar]** Calendar plugin add event opening mode ([#5808](https://github.com/nocobase/nocobase/pull/5808)) by @Cyx649312038

- **[Collection: Tree]** Allows to filter child nodes in tree table blocks ([#4770](https://github.com/nocobase/nocobase/pull/4770)) by @jimmy201602

- **[Workflow: Pre-action event]** support manually triggering workflow by @mytharcher

- **[Redis pub sub adapter]** Add Redis sync adapter plugin by @mytharcher

### 🚀 Improvements

- **[client]**
  - remove linkage rules from Associate button ([#6016](https://github.com/nocobase/nocobase/pull/6016)) by @katherinehhh

  - Remove table row skeleton component ([#5751](https://github.com/nocobase/nocobase/pull/5751)) by @zhangzhonghe

  - Optimize recursive logic in useMenuSearch for better performance ([#5784](https://github.com/nocobase/nocobase/pull/5784)) by @katherinehhh

  - Remove Formily components from the table to improve performance when switching table pagination ([#5738](https://github.com/nocobase/nocobase/pull/5738)) by @zhangzhonghe

  - Improve page rendering performance and support page keep-alive functionality ([#5515](https://github.com/nocobase/nocobase/pull/5515)) by @zhangzhonghe

  - implement on-demand loading for front-end components ([#5647](https://github.com/nocobase/nocobase/pull/5647)) by @gchust

- **[Notification: Email]** Add homepage links to notification plugins in package.json. ([#6150](https://github.com/nocobase/nocobase/pull/6150)) by @sheldon66

- **[Workflow: Loop node]** Fix styles ([#6095](https://github.com/nocobase/nocobase/pull/6095)) by @mytharcher

- **[File manager]** support for other storage plugins ([#6096](https://github.com/nocobase/nocobase/pull/6096)) by @jiannx
Reference: [File Storage: S3 (Pro)](https://docs.nocobase.com/handbook/file-manager/storage/s3-pro)
- **[Workflow: test kit]** adjust style of workflow canvas, to make content compacted ([#6088](https://github.com/nocobase/nocobase/pull/6088)) by @mytharcher

- **[Workflow]** Change API name to reasonable ones ([#6082](https://github.com/nocobase/nocobase/pull/6082)) by @mytharcher

- **[Data visualization]** Add offset param to charts-query ([#5911](https://github.com/nocobase/nocobase/pull/5911)) by @Albert-mah

- **[Mobile]** Adapt time & date range picker component for mobile ([#5863](https://github.com/nocobase/nocobase/pull/5863)) by @katherinehhh

- **[Authentication]** Optimize the logic of getting metadata of audit actions. ([#5814](https://github.com/nocobase/nocobase/pull/5814)) by @chenzhizdt

- **[Public forms]** Optimize action panel and public form components for mobile adaptation ([#5788](https://github.com/nocobase/nocobase/pull/5788)) by @katherinehhh

- **[Collection field: Sort]** add plugin description ([#5720](https://github.com/nocobase/nocobase/pull/5720)) by @mytharcher

- **[Workflow: Custom action event]** Change API of manually execute by @mytharcher

- **[Workflow: JSON calculation]**
  - Change JSON-query node name and group by @mytharcher

  - Add icon to nodes by @mytharcher

- **[Embed NocoBase]** Improve page rendering performance by @zhangzhonghe

- **[Backup manager]** Improved error messages for restore failures by @gchust

### 🐛 Bug Fixes

- **[client]**
  - The linkage rules of the button are not functioning properly due to an issue with the sequence ([#6147](https://github.com/nocobase/nocobase/pull/6147)) by @zhangzhonghe

  - Layout anomaly after deleting blocks or fields ([#6139](https://github.com/nocobase/nocobase/pull/6139)) by @zhangzhonghe

  - Fix filter button nonfilterable field settings affecting other table with the same collection ([#6121](https://github.com/nocobase/nocobase/pull/6121)) by @katherinehhh

  - data not displayed for the association field in the sub-details ([#6117](https://github.com/nocobase/nocobase/pull/6117)) by @zhangzhonghe

  - Fix the issue where 'data loading mode' becomes invalid after switching pages ([#6115](https://github.com/nocobase/nocobase/pull/6115)) by @zhangzhonghe

  - Fix the issue where association field default values are not refreshed after switching pages ([#6114](https://github.com/nocobase/nocobase/pull/6114)) by @zhangzhonghe

  - Fix the issue where default values for association fields are not taking effect in Easy-reading mode ([#6066](https://github.com/nocobase/nocobase/pull/6066)) by @zhangzhonghe

  - Fix the issue where field assignments for form buttons in workflow manual nodes are invalid ([#6054](https://github.com/nocobase/nocobase/pull/6054)) by @zhangzhonghe

  - Fix missing current popup variable in the field enable link modal ([#6045](https://github.com/nocobase/nocobase/pull/6045)) by @katherinehhh

  - Continue rendering the page after the authentication check request is completed ([#6020](https://github.com/nocobase/nocobase/pull/6020)) by @2013xile

  - Fix the issue where table rows cannot be dragged and sorted ([#6013](https://github.com/nocobase/nocobase/pull/6013)) by @zhangzhonghe

  - Fix the issue where empty sub-tables display one row of empty data on iOS ([#5990](https://github.com/nocobase/nocobase/pull/5990)) by @zhangzhonghe

  - Fix the issue where clicking on association fields does not open the popup dialog ([#5972](https://github.com/nocobase/nocobase/pull/5972)) by @zhangzhonghe

  - Fix date range picker in filter form/action not showing time picker when showTime is set ([#5956](https://github.com/nocobase/nocobase/pull/5956)) by @katherinehhh

  - Fix the issue of unexpected table cell display in third-party plugins ([#5934](https://github.com/nocobase/nocobase/pull/5934)) by @zhangzhonghe

  - Fix the issue where the delete button is disabled in the block template management page ([#5922](https://github.com/nocobase/nocobase/pull/5922)) by @zhangzhonghe

  - Fix the issue where form linkage rules fail when they depend on field values from subtables ([#5876](https://github.com/nocobase/nocobase/pull/5876)) by @zhangzhonghe

  - Fix the issue of data not changing after pagination in sub-table ([#5856](https://github.com/nocobase/nocobase/pull/5856)) by @zhangzhonghe

  - Fix the issue where the browser tab title doesn't update after switching pages ([#5857](https://github.com/nocobase/nocobase/pull/5857)) by @zhangzhonghe

  - Fix the issue where refreshing the page in the data source management page redirects to the homepage ([#5855](https://github.com/nocobase/nocobase/pull/5855)) by @zhangzhonghe

  - Fix the issue where association fields in reference templates sometimes do not display data ([#5848](https://github.com/nocobase/nocobase/pull/5848)) by @zhangzhonghe

  - Fix the issue where role data is not displayed in the user management table ([#5846](https://github.com/nocobase/nocobase/pull/5846)) by @zhangzhonghe

  - Fix the issue where the 'Custom Request' button is not immediately visible after being added ([#5845](https://github.com/nocobase/nocobase/pull/5845)) by @zhangzhonghe

  - Fix the issue where blocks added in a popup window are not displayed when reopening the popup ([#5838](https://github.com/nocobase/nocobase/pull/5838)) by @zhangzhonghe

  - Prevent hidden pages from affecting interactions with other pages ([#5836](https://github.com/nocobase/nocobase/pull/5836)) by @zhangzhonghe

  - Fix the issue where changing the value of a association field in the details block does not refresh immediately ([#5826](https://github.com/nocobase/nocobase/pull/5826)) by @zhangzhonghe

  - Fix the issue where fields are not displayed after adding them in a subform ([#5827](https://github.com/nocobase/nocobase/pull/5827)) by @zhangzhonghe

  - Fix the issue where clicking links doesn't open a popup when 'Enable link' is turned on for the first time ([#5812](https://github.com/nocobase/nocobase/pull/5812)) by @zhangzhonghe

  - Fix the issue where mobile login redirects to desktop page ([#5805](https://github.com/nocobase/nocobase/pull/5805)) by @zhangzhonghe

  - Fix configure action button should be left-aligned ([#5798](https://github.com/nocobase/nocobase/pull/5798)) by @katherinehhh

  - Prevent multiple API calls when closing the popup ([#5804](https://github.com/nocobase/nocobase/pull/5804)) by @zhangzhonghe

  - Fix issues where variables cannot be properly used in third-party data source blocks ([#5782](https://github.com/nocobase/nocobase/pull/5782)) by @zhangzhonghe

  - Fix the issue where association field values are empty in block templates. Fix the problem where block data scope using variables don't work properly in third-party data sources ([#5777](https://github.com/nocobase/nocobase/pull/5777)) by @zhangzhonghe

  - Fix the issue where component's dynamic props do not work with lazy loading ([#5776](https://github.com/nocobase/nocobase/pull/5776)) by @gchust

  - fixed the warning message in React when dynamically loading hooks in the development environment ([#5758](https://github.com/nocobase/nocobase/pull/5758)) by @gchust

- **[build]**
  - Fixed issue with loading after setting the `APP_PUBLIC_PATH` environment variable ([#5924](https://github.com/nocobase/nocobase/pull/5924)) by @gchust

  - Fixed incorrect caching of frontend js files after plugin build ([#5801](https://github.com/nocobase/nocobase/pull/5801)) by @gchust

  - Fix the issue executing `yarn dev` after create-nocobase-app results in an error ([#5708](https://github.com/nocobase/nocobase/pull/5708)) by @gchust

- **[server]** Set the default available actions for the ACL ([#5847](https://github.com/nocobase/nocobase/pull/5847)) by @chenos

- **[Public forms]** Unable to add fields in the `Sub-form(Popover)` of public forms ([#6157](https://github.com/nocobase/nocobase/pull/6157)) by @gchust

- **[Collection: SQL]** Fix the issue where filtering SQL Collection throws an error when `DB_TABLE_PREFIX` is set ([#6156](https://github.com/nocobase/nocobase/pull/6156)) by @2013xile

- **[Workflow]**
  - Add test case for "move" action to trigger workflow ([#6145](https://github.com/nocobase/nocobase/pull/6145)) by @mytharcher

  - Fix error thrown when async node resuming in manually executing workflow ([#5877](https://github.com/nocobase/nocobase/pull/5877)) by @mytharcher

- **[User data synchronization]**
  - Fix the issue where the "retry" button is not displayed in the task list ([#6079](https://github.com/nocobase/nocobase/pull/6079)) by @2013xile

  - Fix display issues of sync and tasks buttons. ([#5896](https://github.com/nocobase/nocobase/pull/5896)) by @2013xile

- **[Verification]** Fix empty form fields when opening the edit drawer in the Verification settings page ([#5949](https://github.com/nocobase/nocobase/pull/5949)) by @chenos

- **[Data source: Main]** Fix the issue where system fields in the filter form block cannot be edited ([#5885](https://github.com/nocobase/nocobase/pull/5885)) by @zhangzhonghe

- **[Data visualization]**
  - Fix the initial height of chart block ([#5879](https://github.com/nocobase/nocobase/pull/5879)) by @2013xile

  - Fix the issue where filter field components of chart blocks not rendering ([#5769](https://github.com/nocobase/nocobase/pull/5769)) by @2013xile

- **[Mobile]**
  - Fix mobile adaptation of date component on sub-page ([#5859](https://github.com/nocobase/nocobase/pull/5859)) by @katherinehhh

  - Fix missing date input field in filter operation on mobile ([#5779](https://github.com/nocobase/nocobase/pull/5779)) by @katherinehhh

- **[Workflow: Custom action event]**
  - Fix test cases of custom action trigger by @mytharcher

  - Fix test case failed on SQLite by @mytharcher

- **[Workflow: Pre-action event]** Fix test cases of request interceptor by @mytharcher

- **[Workflow: Response message]** Fix wrong parameter name used by @mytharcher

