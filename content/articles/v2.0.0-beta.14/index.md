### 🎉 New Features

- **[AI employees]** Support file paste in AI chat ([#8487](https://github.com/nocobase/nocobase/pull/8487)) by @heziqiang

### 🚀 Improvements

- **[client]**
  - Improve to-many subform to initialize with a default item and avoid creating records when left empty ([#8473](https://github.com/nocobase/nocobase/pull/8473)) by @katherinehhh

  - Improve the upload and edit buttons for attachment fields in sub-table to better guide users to click upload. ([#8474](https://github.com/nocobase/nocobase/pull/8474)) by @katherinehhh

- **[flow-engine]** Improve ctx.libs in runjs to support on-demand loading, and add predefined libraries: lodash, math, and formula. ([#8468](https://github.com/nocobase/nocobase/pull/8468)) by @gchust

- **[Error handler]** Sanitize SQL reference errors ([#8464](https://github.com/nocobase/nocobase/pull/8464)) by @2013xile

- **[Workflow: Approval]** Implement access control for APIs to prevent unauthorized data operations by @mytharcher

### 🐛 Bug Fixes

- **[client]**
  - Fix the issue where the rich text editor's popovers are obscured ([#8443](https://github.com/nocobase/nocobase/pull/8443)) by @zhangzhonghe

  - Fix duplicated time in filter DateTime value ([#8484](https://github.com/nocobase/nocobase/pull/8484)) by @zhangzhonghe

  - fix nanoid field not regenerated after form submit ([#8491](https://github.com/nocobase/nocobase/pull/8491)) by @katherinehhh

  - Fix duplicate required validation message when clearing a cascade field ([#8476](https://github.com/nocobase/nocobase/pull/8476)) by @katherinehhh

  - filter list to remove duplicates ([#8431](https://github.com/nocobase/nocobase/pull/8431)) by @jiannx

  - Fix the issue where the configuration menu does not display in Chrome 144 ([#8470](https://github.com/nocobase/nocobase/pull/8470)) by @zhangzhonghe

- **[database]**
  - fix: deep update nested associations ([#8492](https://github.com/nocobase/nocobase/pull/8492)) by @chenos

  - fix: deep update nested associations ([#8492](https://github.com/nocobase/nocobase/pull/8492)) by @chenos

- **[server]** Fix version of `mathjs` in common dependencies ([#8475](https://github.com/nocobase/nocobase/pull/8475)) by @mytharcher

- **[flow-engine]** Fix an issue where closing an embedded popup caused an error after consecutively opening the linkage rules configuration and event flow configuration popup. ([#8368](https://github.com/nocobase/nocobase/pull/8368)) by @gchust

- **[Data source: Main]** Fixed an issue where deleting records from a many-to-many association table block did not respect the association field `onDelete: 'restrict'` constraint ([#8493](https://github.com/nocobase/nocobase/pull/8493)) by @2013xile

- **[Async task manager]** Fix the issue where workflow triggered by async import delayed to execute ([#8478](https://github.com/nocobase/nocobase/pull/8478)) by @mytharcher

- **[Block: iframe]** Fix the error when adding aggregated variables to Iframe ([#8482](https://github.com/nocobase/nocobase/pull/8482)) by @zhangzhonghe

- **[UI templates]** Fix an issue where reference template blocks could not set data scopes via event flow settings. ([#8472](https://github.com/nocobase/nocobase/pull/8472)) by @gchust

- **[File manager]** Fix the issue where filename get from request body became unexpectedly decoded string ([#8481](https://github.com/nocobase/nocobase/pull/8481)) by @mytharcher

- **[Action: Import records Pro]** Fix the issue where workflow triggered by async import delayed to execute by @mytharcher

- **[Workflow: Webhook]** Fix the issue where body data is missing when body parsing not configured by @mytharcher

- **[Template print]** remove footer buttons from print template configuration by @katherinehhh

- **[Workflow: Approval]**
  - Fix the issue where return an approval to previous node but returned to start by @mytharcher

  - Fix the issue where concurrency makes execution repeatedly resumed by @mytharcher

  - Fix the issue where fields are not displayed on approval task cards by @zhangzhonghe

