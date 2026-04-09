Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase is currently updated with three branches: `main` , `next` and `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：The most stable version to date, recommended for installation;
* `next`：Beta version, contains upcoming new features and has been preliminarily tested. There might be some known or unknown issues. It's mainly for test users to collect feedback and optimize functions further. Ideal for test users who want to experience new features early and give feedback;
* `develop`：Alpha version, contains the latest feature code, may be incomplete or unstable, mainly for internal dev and rapid iteration. Suited for tech users interested in product's cutting-edge, but with potential issues and incomplete functions. Not for production use.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.34](https://www.nocobase.com/en/blog/v2.0.34)

*Release date:2026-04-09*

### 🎉 New Features

- **[Migration manager]** support migration command by @chenos

### [v2.0.33](https://www.nocobase.com/en/blog/v2.0.33)

*Release date:2026-04-08*

### 🎉 New Features

- **[AI employees]** Add an LLIM-based web search tool for AI employees ([#9032](https://github.com/nocobase/nocobase/pull/9032)) by @cgyrock

### 🐛 Bug Fixes

- **[client]**

  - Fixed an issue where an incorrect unsaved changes confirmation message would appear for bulk edit action ([#9054](https://github.com/nocobase/nocobase/pull/9054)) by @gchust
  - Fixed an issue where an incorrect secondary confirmation popup would appear when submitting the form after creating a record via a popup subtable. ([#9035](https://github.com/nocobase/nocobase/pull/9035)) by @gchust
- **[data-source-manager]** Fixed an issue where some field types were not updated correctly after syncing fields from the database ([#9046](https://github.com/nocobase/nocobase/pull/9046)) by @2013xile
- **[AI employees]** Fix AI employee document upload failure under subpath access with APP_PUBLIC_PATH configured. ([#9034](https://github.com/nocobase/nocobase/pull/9034)) by @cgyrock

### [v2.0.32](https://www.nocobase.com/en/blog/v2.0.32)

*Release date:2026-04-04*

### 🚀 Improvements

- **[undefined]** Add table of contents to README ([#8878](https://github.com/nocobase/nocobase/pull/8878)) by @gaston98765

### 🐛 Bug Fixes

- **[client]**

  - subform relationship field failed to save ([#9004](https://github.com/nocobase/nocobase/pull/9004)) by @jiannx
  - the subforms of the fields do not display data ([#9008](https://github.com/nocobase/nocobase/pull/9008)) by @jiannx
  - Fixed the issue where ctx.request could not override the Authorization header. ([#8850](https://github.com/nocobase/nocobase/pull/8850)) by @gchust
- **[server]** Add serving check to avoid app status updated by non-serving instance ([#8959](https://github.com/nocobase/nocobase/pull/8959)) by @mytharcher
- **[AI employees]**

  - Fixed the issue when using deepseek or minmax models on dashscope ([#9033](https://github.com/nocobase/nocobase/pull/9033)) by @cgyrock
  - Fixed the issue where abort AI employees reasonning would cause the service to crash ([#9031](https://github.com/nocobase/nocobase/pull/9031)) by @cgyrock
- **[Workflow: HTTP request node]** Sanitized workflow request node results to avoid exposing request config, defaulted new nodes to return response data only, and added debug logging for failed requests. ([#9024](https://github.com/nocobase/nocobase/pull/9024)) by @mytharcher
- **[Collection field: Sort]** fix(field-sort): prevent crash when scopeKey attribute is undefined ([#9019](https://github.com/nocobase/nocobase/pull/9019)) by @gaston98765
- **[Block: GridCard]** Fixed the problem that the button is not refreshed when the grid card is refreshed ([#9021](https://github.com/nocobase/nocobase/pull/9021)) by @jiannx
- **[Workflow: Approval]**

  - Add fault-tolerant on workflow deleted, to avoid load error in tasks list by @mytharcher
  - Add fault-tolerant for no `latestRound` by @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.13](https://www.nocobase.com/en/blog/v2.1.0-beta.13)

*Release date:2026-04-09*

### 🎉 New Features

- **[Migration manager]** support migration command by @chenos

### [v2.1.0-beta.12](https://www.nocobase.com/en/blog/v2.1.0-beta.12)

*Release date:2026-04-08*

### 🎉 New Features

- **[client]**

  - add js variables to event flow ([#8938](https://github.com/nocobase/nocobase/pull/8938)) by @jiannx
  - add JS item action ([#8911](https://github.com/nocobase/nocobase/pull/8911)) by @jiannx
- **[AI employees]** Add an LLIM-based web search tool for AI employees ([#9032](https://github.com/nocobase/nocobase/pull/9032)) by @cgyrock

### 🚀 Improvements

- **[undefined]**

  - Add table of contents to README ([#8878](https://github.com/nocobase/nocobase/pull/8878)) by @gaston98765
  - Reduced log noise during server startup by silencing unzip commands for LibreOffice and Oracle Instant Client ([#8984](https://github.com/nocobase/nocobase/pull/8984)) by @Rishabh1925
- **[client]**

  - support setting field styles through runjs ([#8933](https://github.com/nocobase/nocobase/pull/8933)) by @jiannx
  - Optimize the horizontal layout of form actions ([#8869](https://github.com/nocobase/nocobase/pull/8869)) by @jiannx
- **[Workflow: JavaScript]** Add `isolated-vm` as default JavaScript execute engine for JavaScript node ([#8973](https://github.com/nocobase/nocobase/pull/8973)) by @mytharcher
  Reference: [JavaScript Node](https://docs.nocobase.com/cn/workflow/nodes/javascript)
- **[Workflow]**

  - Change enabled switch size to small ([#9010](https://github.com/nocobase/nocobase/pull/9010)) by @mytharcher
  - Add variable for page size parameter ([#8951](https://github.com/nocobase/nocobase/pull/8951)) by @mytharcher
- **[AI employees]** Optimize prompts for deepseek when handling unsupported file types ([#9003](https://github.com/nocobase/nocobase/pull/9003)) by @cgyrock
- **[Action: Custom request]** add action models for custom request ([#8890](https://github.com/nocobase/nocobase/pull/8890)) by @jiannx
- **[Collection field: administrative divisions of China]** field-china-region 2.0 ([#8831](https://github.com/nocobase/nocobase/pull/8831)) by @jiannx
- **[Workflow: Subflow]** Add defensive logic to avoid workflow hangs when exception occurs by @mytharcher
- **[Workflow: Approval]** Fix JSON field caused performance issue when loading approval records list by @mytharcher

### 🐛 Bug Fixes

- **[client]**

  - Fixed an issue where an incorrect unsaved changes confirmation message would appear for bulk edit action ([#9054](https://github.com/nocobase/nocobase/pull/9054)) by @gchust
  - Fixed an issue where an incorrect secondary confirmation popup would appear when submitting the form after creating a record via a popup subtable. ([#9035](https://github.com/nocobase/nocobase/pull/9035)) by @gchust
  - Fixed the issue where ctx.request could not override the Authorization header. ([#8850](https://github.com/nocobase/nocobase/pull/8850)) by @gchust
  - subform relationship field failed to save ([#9004](https://github.com/nocobase/nocobase/pull/9004)) by @jiannx
  - the subforms of the fields do not display data ([#9008](https://github.com/nocobase/nocobase/pull/9008)) by @jiannx
  - Fixed the issue where the copy of the associated fields in the table was not displayed correctly in the first rendering. ([#9007](https://github.com/nocobase/nocobase/pull/9007)) by @jiannx
  - Fixed incorrect secondary confirmation message when closing multi-level popup after modifying form data. ([#8944](https://github.com/nocobase/nocobase/pull/8944)) by @gchust
  - Fix the issue where space in variable expression cause label not display ([#8988](https://github.com/nocobase/nocobase/pull/8988)) by @mytharcher
  - Fixed the exception when adding child nodes to the tree table in the pop-up window ([#8872](https://github.com/nocobase/nocobase/pull/8872)) by @jiannx
- **[data-source-manager]** Fixed an issue where some field types were not updated correctly after syncing fields from the database ([#9046](https://github.com/nocobase/nocobase/pull/9046)) by @2013xile
- **[server]**

  - Add serving check to avoid app status updated by non-serving instance ([#8959](https://github.com/nocobase/nocobase/pull/8959)) by @mytharcher
  - Avoid to handle sync-message after app stopped ([#8940](https://github.com/nocobase/nocobase/pull/8940)) by @mytharcher
  - Change close timing of Pub-Sub to `beforeStop`, to avoid message sent or handled after database closed ([#8934](https://github.com/nocobase/nocobase/pull/8934)) by @mytharcher
- **[flow-engine]**

  - Fix clipped settings menus in popup ([#9005](https://github.com/nocobase/nocobase/pull/9005)) by @gchust
  - Fixed an issue where menu items could not be selected when the UI component width in the configuration state was too small. ([#8954](https://github.com/nocobase/nocobase/pull/8954)) by @gchust
  - Add js snippets for setting form item and details item ([#8974](https://github.com/nocobase/nocobase/pull/8974)) by @jiannx
  - Synchronize status to field configuration when form field is deleted ([#8857](https://github.com/nocobase/nocobase/pull/8857)) by @jiannx
- **[database]** Use warning instead of error when any of appends parameters invalid ([#8923](https://github.com/nocobase/nocobase/pull/8923)) by @mytharcher
- **[resourcer]** Fix an issue where external data sources fail to load correctly. ([#8929](https://github.com/nocobase/nocobase/pull/8929)) by @2013xile
- **[AI employees]**

  - Fix AI employee document upload failure under subpath access with APP_PUBLIC_PATH configured. ([#9034](https://github.com/nocobase/nocobase/pull/9034)) by @cgyrock
  - Fixed the issue when using deepseek or minmax models on dashscope ([#9033](https://github.com/nocobase/nocobase/pull/9033)) by @cgyrock
  - Fixed the issue where abort AI employees reasonning would cause the service to crash ([#9031](https://github.com/nocobase/nocobase/pull/9031)) by @cgyrock
  - Fixed the issue of abnormal web search behavior when using the Qwen  LLM ([#9012](https://github.com/nocobase/nocobase/pull/9012)) by @cgyrock
  - Add ownership verification to the AI conversation API ([#8993](https://github.com/nocobase/nocobase/pull/8993)) by @cgyrock
  - Adjust the gap between the tool card components in the AI Conversation ([#8965](https://github.com/nocobase/nocobase/pull/8965)) by @cgyrock
- **[Workflow: HTTP request node]** Sanitized workflow request node results to avoid exposing request config, defaulted new nodes to return response data only, and added debug logging for failed requests. ([#9024](https://github.com/nocobase/nocobase/pull/9024)) by @mytharcher
- **[Collection field: Sort]** fix(field-sort): prevent crash when scopeKey attribute is undefined ([#9019](https://github.com/nocobase/nocobase/pull/9019)) by @gaston98765
- **[Block: GridCard]** Fixed the problem that the button is not refreshed when the grid card is refreshed ([#9021](https://github.com/nocobase/nocobase/pull/9021)) by @jiannx
- **[Notification: In-app message]** Fix action whitelist for in-app message updates to prevent unauthorized updates by non-owners. ([#9001](https://github.com/nocobase/nocobase/pull/9001)) by @mytharcher
- **[Workflow: SQL node]** Fix security issue in SQL node ([#8989](https://github.com/nocobase/nocobase/pull/8989)) by @mytharcher
- **[Data visualization]**

  - When using variable-based filters, charts fail to resolve variable values correctly on the initial render ([#8964](https://github.com/nocobase/nocobase/pull/8964)) by @2013xile
  - fixed the abnormal data statistics of the root role chart after enabling the space plugin ([#8969](https://github.com/nocobase/nocobase/pull/8969)) by @jiannx
- **[Action: Import records]** fixed the problem of import failure after opening plugin-space ([#8968](https://github.com/nocobase/nocobase/pull/8968)) by @jiannx
- **[Workflow: JavaScript]** Fix security issues ([#8967](https://github.com/nocobase/nocobase/pull/8967)) by @mytharcher
- **[Action: Export records]** Limit import and export configuration of multi-layer related fields ([#8893](https://github.com/nocobase/nocobase/pull/8893)) by @jiannx
- **[Custom variables]** skip auth notify ([#8942](https://github.com/nocobase/nocobase/pull/8942)) by @chenos
- **[Localization]** prevent localizationTexts:missing request on permission denial ([#8903](https://github.com/nocobase/nocobase/pull/8903)) by @chenos
- **[Authentication]** fix acl to support custom state filtering parameters ([#8918](https://github.com/nocobase/nocobase/pull/8918)) by @jiannx
- **[Flow engine]** Remove legacy event copied from uiSchema repository to avoid error thrown when triggering ([#8957](https://github.com/nocobase/nocobase/pull/8957)) by @mytharcher
- **[Action: Import records Pro]**

  - limit import and export configuration of multi-layer related fields by @jiannx
  - Fix the issue where option of "Trigger workflow" not works when not checked by @mytharcher
- **[Data source: External Oracle]** Fix an error that occurs when loading the Oracle external data source by @2013xile
- **[Workflow: Approval]**

  - Fix version limit of legacy migrations to avoid error thrown when start in latest version deployment by @mytharcher
  - Add fault-tolerant on workflow deleted, to avoid load error in tasks list by @mytharcher
  - Fix translation, node selection, and return target issues in the v2 approval form return button by @zhangzhonghe
  - Add fault-tolerant for no `latestRound` by @mytharcher
- **[Email manager]**

  - Fixed signature being overwritten when using templates by @jiannx
  - no closing confirmation is displayed after the email is sent by @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.14](https://www.nocobase.com/en/blog/v2.1.0-alpha.14)

*Release date:2026-04-07*

### 🎉 New Features

- **[AI employees]** Add the ability to invoke sub agents for AI employees ([#8935](https://github.com/nocobase/nocobase/pull/8935)) by @cgyrock
- **[AI: MCP server]** Provides a generic data collection query API, callable via MCP ([#8985](https://github.com/nocobase/nocobase/pull/8985)) by @2013xile

### 🚀 Improvements

- **[undefined]**

  - Add table of contents to README ([#8878](https://github.com/nocobase/nocobase/pull/8878)) by @gaston98765
  - Reduced log noise during server startup by silencing unzip commands for LibreOffice and Oracle Instant Client ([#8984](https://github.com/nocobase/nocobase/pull/8984)) by @Rishabh1925
- **[Flow engine]** Add new apis for ui building. ([#8992](https://github.com/nocobase/nocobase/pull/8992)) by @gchust
- **[Workflow]** Change enabled switch size to small ([#9010](https://github.com/nocobase/nocobase/pull/9010)) by @mytharcher
- **[AI employees]** Optimize prompts for deepseek when handling unsupported file types ([#9003](https://github.com/nocobase/nocobase/pull/9003)) by @cgyrock
- **[Action: Custom request]** add action models for custom request ([#8890](https://github.com/nocobase/nocobase/pull/8890)) by @jiannx
- **[Workflow: JavaScript]** Add `isolated-vm` as default JavaScript execute engine for JavaScript node ([#8973](https://github.com/nocobase/nocobase/pull/8973)) by @mytharcher
  Reference: [JavaScript Node](https://docs.nocobase.com/cn/workflow/nodes/javascript)

### 🐛 Bug Fixes

- **[server]**

  - Add serving check to avoid app status updated by non-serving instance ([#8959](https://github.com/nocobase/nocobase/pull/8959)) by @mytharcher
  - Support getting the target application by hostname ([#8978](https://github.com/nocobase/nocobase/pull/8978)) by @2013xile
- **[client]**

  - subform relationship field failed to save ([#9004](https://github.com/nocobase/nocobase/pull/9004)) by @jiannx
  - the subforms of the fields do not display data ([#9008](https://github.com/nocobase/nocobase/pull/9008)) by @jiannx
  - Fixed the issue where the copy of the associated fields in the table was not displayed correctly in the first rendering. ([#9007](https://github.com/nocobase/nocobase/pull/9007)) by @jiannx
  - Fixed incorrect secondary confirmation message when closing multi-level popup after modifying form data. ([#8944](https://github.com/nocobase/nocobase/pull/8944)) by @gchust
  - Fix the issue where space in variable expression cause label not display ([#8988](https://github.com/nocobase/nocobase/pull/8988)) by @mytharcher
- **[flow-engine]**

  - Fix clipped settings menus in popup ([#9005](https://github.com/nocobase/nocobase/pull/9005)) by @gchust
  - Fixed an issue where menu items could not be selected when the UI component width in the configuration state was too small. ([#8954](https://github.com/nocobase/nocobase/pull/8954)) by @gchust
  - Add js snippets for setting form item and details item ([#8974](https://github.com/nocobase/nocobase/pull/8974)) by @jiannx
- **[Workflow: mailer node]** Fix validation for variable fields ([#9047](https://github.com/nocobase/nocobase/pull/9047)) by @mytharcher
- **[Collection field: Sort]** fix(field-sort): prevent crash when scopeKey attribute is undefined ([#9019](https://github.com/nocobase/nocobase/pull/9019)) by @gaston98765
- **[AI employees]**

  - Fix the issue where AI employees were unable to use skills ([#9023](https://github.com/nocobase/nocobase/pull/9023)) by @cgyrock
  - Fix the issue where the LLM still attempts to load skills after the getSkill tool is disabled ([#9013](https://github.com/nocobase/nocobase/pull/9013)) by @cgyrock
  - Fixed the issue of abnormal web search behavior when using the Qwen  LLM ([#9012](https://github.com/nocobase/nocobase/pull/9012)) by @cgyrock
  - Add ownership verification to the AI conversation API ([#8993](https://github.com/nocobase/nocobase/pull/8993)) by @cgyrock
- **[Block: GridCard]** Fixed the problem that the button is not refreshed when the grid card is refreshed ([#9021](https://github.com/nocobase/nocobase/pull/9021)) by @jiannx
- **[Workflow]**

  - Fix incorrect validation rule of condition instruction ([#9017](https://github.com/nocobase/nocobase/pull/9017)) by @mytharcher
  - Fix the issue where mode of collection trigger can not be set to "create or update" ([#8980](https://github.com/nocobase/nocobase/pull/8980)) by @mytharcher
- **[Notification: In-app message]** Fix action whitelist for in-app message updates to prevent unauthorized updates by non-owners. ([#9001](https://github.com/nocobase/nocobase/pull/9001)) by @mytharcher
- **[Data source manager]** Optimized MCP tool naming and reduce redundant API responses to avoid excessive consumption of AI conversation context ([#9000](https://github.com/nocobase/nocobase/pull/9000)) by @2013xile
- **[Workflow: SQL node]** Fix security issue in SQL node ([#8989](https://github.com/nocobase/nocobase/pull/8989)) by @mytharcher
- **[Data visualization]** When using variable-based filters, charts fail to resolve variable values correctly on the initial render ([#8964](https://github.com/nocobase/nocobase/pull/8964)) by @2013xile
- **[Workflow: Approval]**

  - Add fault-tolerant on workflow deleted, to avoid load error in tasks list by @mytharcher
  - Add fault-tolerant for no `latestRound` by @mytharcher
  - Fix version limit of legacy migrations to avoid error thrown when start in latest version deployment by @mytharcher
- **[Email manager]** no closing confirmation is displayed after the email is sent by @jiannx
