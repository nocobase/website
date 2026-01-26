### 🎉 New Features

- **[server]** Refactor the app supervisor to support multi-app management across different scenarios ([#8043](https://github.com/nocobase/nocobase/pull/8043)) by @2013xile

- **[client]** add subtable (popup editing) field component ([#8280](https://github.com/nocobase/nocobase/pull/8280)) by @katherinehhh

- **[AI employees]** Support file paste in AI chat ([#8487](https://github.com/nocobase/nocobase/pull/8487)) by @heziqiang

### 🚀 Improvements

- **[client]**
  - Improve the upload and edit buttons for attachment fields in sub-table to better guide users to click upload. ([#8474](https://github.com/nocobase/nocobase/pull/8474)) by @katherinehhh

  - Improve to-many subform to initialize with a default item and avoid creating records when left empty ([#8473](https://github.com/nocobase/nocobase/pull/8473)) by @katherinehhh

  - Improve to-many subform to initialize with a default item and avoid creating records when left empty ([#8458](https://github.com/nocobase/nocobase/pull/8458)) by @katherinehhh

- **[flow-engine]** Improve ctx.libs in runjs to support on-demand loading, and add predefined libraries: lodash, math, and formula. ([#8468](https://github.com/nocobase/nocobase/pull/8468)) by @gchust

- **[server]** Support configuring a CORS origin whitelist ([#8454](https://github.com/nocobase/nocobase/pull/8454)) by @2013xile

- **[File manager]** Add extensible previewer for file manager ([#8501](https://github.com/nocobase/nocobase/pull/8501)) by @mytharcher

- **[Office File Previewer]** Add more file types for previewing on Microsoft ([#8500](https://github.com/nocobase/nocobase/pull/8500)) by @mytharcher

- **[Error handler]** Sanitize SQL reference errors ([#8464](https://github.com/nocobase/nocobase/pull/8464)) by @2013xile

- **[Action: Export records]** Improve export action data scope based on selected records or resource filters ([#8442](https://github.com/nocobase/nocobase/pull/8442)) by @katherinehhh

- **[Action: Export records Pro]** Improve export action data scope based on selected records or resource filters by @katherinehhh

- **[Workflow: Approval]** Implement access control for APIs to prevent unauthorized data operations by @mytharcher

### 🐛 Bug Fixes

- **[client]**
  - Fix duplicated time in filter DateTime value ([#8506](https://github.com/nocobase/nocobase/pull/8506)) by @zhangzhonghe

  - Fix duplicated time in filter DateTime value ([#8484](https://github.com/nocobase/nocobase/pull/8484)) by @zhangzhonghe

  - fix nanoid field not regenerated after form submit ([#8491](https://github.com/nocobase/nocobase/pull/8491)) by @katherinehhh

  - Fix the issue where the rich text editor's popovers are obscured ([#8443](https://github.com/nocobase/nocobase/pull/8443)) by @zhangzhonghe

  - filter list to remove duplicates ([#8431](https://github.com/nocobase/nocobase/pull/8431)) by @jiannx

  - Fix duplicate required validation message when clearing a cascade field ([#8476](https://github.com/nocobase/nocobase/pull/8476)) by @katherinehhh

  - Fix the issue where the configuration menu does not display in Chrome 144 ([#8470](https://github.com/nocobase/nocobase/pull/8470)) by @zhangzhonghe

  - fix issue where sub-detail data in read-only mode could not be displayed correctly in the edit form ([#8469](https://github.com/nocobase/nocobase/pull/8469)) by @katherinehhh

  - Fix the issue where the "Custom Variables" popup is obscured ([#8463](https://github.com/nocobase/nocobase/pull/8463)) by @zhangzhonghe

  - fix issue where collection field group sorting settings did not take effect. ([#8453](https://github.com/nocobase/nocobase/pull/8453)) by @katherinehhh

  - Fix the issue where the table "Column Settings" button is non-functional ([#8441](https://github.com/nocobase/nocobase/pull/8441)) by @zhangzhonghe

  - Fix an issue where the file association field's picker popup had an incorrect z-index, and the popup configuration could not be saved correctly. ([#8446](https://github.com/nocobase/nocobase/pull/8446)) by @gchust

  - fix issue when editing collection in the graphical interface ([#8451](https://github.com/nocobase/nocobase/pull/8451)) by @katherinehhh

- **[database]**
  - Fix errors when filtering with the `empty` operator after reloading a collection ([#8496](https://github.com/nocobase/nocobase/pull/8496)) by @2013xile

  - fix: deep update nested associations ([#8492](https://github.com/nocobase/nocobase/pull/8492)) by @chenos

  - fix: deep update nested associations ([#8492](https://github.com/nocobase/nocobase/pull/8492)) by @chenos

- **[server]** Fix version of `mathjs` in common dependencies ([#8475](https://github.com/nocobase/nocobase/pull/8475)) by @mytharcher

- **[flow-engine]**
  - Fix an issue where closing an embedded popup caused an error after consecutively opening the linkage rules configuration and event flow configuration popup. ([#8368](https://github.com/nocobase/nocobase/pull/8368)) by @gchust

  - Fix an issue where repeatedly clicking the configuration menu could open multiple configuration popups. ([#8448](https://github.com/nocobase/nocobase/pull/8448)) by @gchust

  - Fix an issue where variables in runjs code params were resolved before execution. ([#8445](https://github.com/nocobase/nocobase/pull/8445)) by @gchust

  - Fix an issue where popup variables could not be selected in the data selector’s quick-create popup. ([#8450](https://github.com/nocobase/nocobase/pull/8450)) by @gchust

- **[AI employees]** fix issues of inconsistent selectable field configuration between AI modeling and data source management ([#8488](https://github.com/nocobase/nocobase/pull/8488)) by @cgyrock

- **[Data source: Main]** Fixed an issue where deleting records from a many-to-many association table block did not respect the association field `onDelete: 'restrict'` constraint ([#8493](https://github.com/nocobase/nocobase/pull/8493)) by @2013xile

- **[Block: iframe]** Fix the error when adding aggregated variables to Iframe ([#8482](https://github.com/nocobase/nocobase/pull/8482)) by @zhangzhonghe

- **[Async task manager]** Fix the issue where workflow triggered by async import delayed to execute ([#8478](https://github.com/nocobase/nocobase/pull/8478)) by @mytharcher

- **[File manager]** Fix the issue where filename get from request body became unexpectedly decoded string ([#8481](https://github.com/nocobase/nocobase/pull/8481)) by @mytharcher

- **[UI templates]** Fix an issue where reference template blocks could not set data scopes via event flow settings. ([#8472](https://github.com/nocobase/nocobase/pull/8472)) by @gchust

- **[Mobile (deprecated)]** Deprecated mobile plugin (replaced by the ui-layout plugin from version 2.0). ([#8456](https://github.com/nocobase/nocobase/pull/8456)) by @chenos

- **[Action: Import records Pro]** Fix the issue where workflow triggered by async import delayed to execute by @mytharcher

- **[Workflow: Webhook]** Fix the issue where body data is missing when body parsing not configured by @mytharcher

- **[Template print]**
  - Fixed incorrect print button permission logic when roles were unioned. by @jiannx

  - remove footer buttons from print template configuration by @katherinehhh

- **[Workflow: Approval]**
  - Fix the issue where fields are not displayed on approval task cards by @zhangzhonghe

  - Fix the issue where return an approval to previous node but returned to start by @mytharcher

  - Fix the issue where concurrency makes execution repeatedly resumed by @mytharcher

  - Fix the issue where error thrown in 1.x approval record popup by @mytharcher

- **[Email manager]**
  - Fix the issue where the email configuration popup is obscured by @zhangzhonghe

  - Fixed the problem of emails in the same mailbox between multiple users and optimized performance by @jiannx

- **[Migration manager]** Fixed a potential process freeze caused by logging excessively large SQL statements included in migration error exceptions by @cgyrock

