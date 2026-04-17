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

