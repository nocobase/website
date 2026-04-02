Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase is currently updated with three branches: `main` , `next` and `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：The most stable version to date, recommended for installation;
* `next`：Beta version, contains upcoming new features and has been preliminarily tested. There might be some known or unknown issues. It's mainly for test users to collect feedback and optimize functions further. Ideal for test users who want to experience new features early and give feedback;
* `develop`：Alpha version, contains the latest feature code, may be incomplete or unstable, mainly for internal dev and rapid iteration. Suited for tech users interested in product's cutting-edge, but with potential issues and incomplete functions. Not for production use.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.31](https://www.nocobase.com/en/blog/v2.0.31)

*Release date: 2026-04-01*

### 🚀 Improvements

- **[AI employees]** Optimize prompts for deepseek when handling unsupported file types ([#9003](https://github.com/nocobase/nocobase/pull/9003)) by @cgyrock
- **[Workflow]** Change enabled switch size to small ([#9010](https://github.com/nocobase/nocobase/pull/9010)) by @mytharcher

### 🐛 Bug Fixes

- **[client]** Fixed the issue where the copy of the associated fields in the table was not displayed correctly in the first rendering. ([#9007](https://github.com/nocobase/nocobase/pull/9007)) by @jiannx
- **[flow-engine]** Fix clipped settings menus in popup ([#9005](https://github.com/nocobase/nocobase/pull/9005)) by @gchust
- **[Notification: In-app message]** Fix action whitelist for in-app message updates to prevent unauthorized updates by non-owners. ([#9001](https://github.com/nocobase/nocobase/pull/9001)) by @mytharcher
- **[AI employees]** Fixed the issue of abnormal web search behavior when using the Qwen  LLM ([#9012](https://github.com/nocobase/nocobase/pull/9012)) by @cgyrock

### [v2.0.30](https://www.nocobase.com/en/blog/v2.0.30)

*Release date: 2026-03-30*

### 🚀 Improvements

- **[Workflow: JavaScript]** Add `isolated-vm` as default JavaScript execute engine for JavaScript node ([#8973](https://github.com/nocobase/nocobase/pull/8973)) by @mytharcher
  Reference: [JavaScript Node](https://docs.nocobase.com/cn/workflow/nodes/javascript)

### 🐛 Bug Fixes

- **[client]** Fixed incorrect secondary confirmation message when closing multi-level popup after modifying form data. ([#8944](https://github.com/nocobase/nocobase/pull/8944)) by @gchust
- **[Workflow: SQL node]** Fix security issue in SQL node ([#8989](https://github.com/nocobase/nocobase/pull/8989)) by @mytharcher
- **[AI employees]** Add ownership verification to the AI conversation API ([#8993](https://github.com/nocobase/nocobase/pull/8993)) by @cgyrock
- **[Workflow: Approval]** Fix version limit of legacy migrations to avoid error thrown when start in latest version deployment by @mytharcher

### [v2.0.29](https://www.nocobase.com/en/blog/v2.0.29)

*Release date: 2026-03-30*

### 🚀 Improvements

- **[undefined]** Reduced log noise during server startup by silencing unzip commands for LibreOffice and Oracle Instant Client ([#8984](https://github.com/nocobase/nocobase/pull/8984)) by @Rishabh1925

### 🐛 Bug Fixes

- **[client]** Fix the issue where space in variable expression cause label not display ([#8988](https://github.com/nocobase/nocobase/pull/8988)) by @mytharcher
- **[flow-engine]** Fixed an issue where menu items could not be selected when the UI component width in the configuration state was too small. ([#8954](https://github.com/nocobase/nocobase/pull/8954)) by @gchust
- **[Data visualization]** When using variable-based filters, charts fail to resolve variable values correctly on the initial render ([#8964](https://github.com/nocobase/nocobase/pull/8964)) by @2013xile

### [v2.0.28](https://www.nocobase.com/en/blog/v2.0.28)

*Release date: 2026-03-27*

### 🐛 Bug Fixes

- **[Action: Import records]** fixed the problem of import failure after opening plugin-space ([#8968](https://github.com/nocobase/nocobase/pull/8968)) by @jiannx
- **[Data visualization]** fixed the abnormal data statistics of the root role chart after enabling the space plugin ([#8969](https://github.com/nocobase/nocobase/pull/8969)) by @jiannx
- **[Workflow: JavaScript]** Fix security issues ([#8967](https://github.com/nocobase/nocobase/pull/8967)) by @mytharcher
- **[AI employees]** Adjust the gap between the tool card components in the AI Conversation ([#8965](https://github.com/nocobase/nocobase/pull/8965)) by @cgyrock
- **[Action: Export records]** Limit import and export configuration of multi-layer related fields ([#8893](https://github.com/nocobase/nocobase/pull/8893)) by @jiannx
- **[Action: Import records Pro]** limit import and export configuration of multi-layer related fields by @jiannx

### [v2.0.27](https://www.nocobase.com/en/blog/v2.0.27)

*Release date: 2026-03-26*

### 🚀 Improvements

- **[Workflow]** Add variable for page size parameter ([#8951](https://github.com/nocobase/nocobase/pull/8951)) by @mytharcher
- **[Workflow: Subflow]** Add defensive logic to avoid workflow hangs when exception occurs by @mytharcher

### 🐛 Bug Fixes

- **[client]** Fixed the exception when adding child nodes to the tree table in the pop-up window ([#8872](https://github.com/nocobase/nocobase/pull/8872)) by @jiannx
- **[server]** Avoid to handle sync-message after app stopped ([#8940](https://github.com/nocobase/nocobase/pull/8940)) by @mytharcher
- **[Flow engine]** Remove legacy event copied from uiSchema repository to avoid error thrown when triggering ([#8957](https://github.com/nocobase/nocobase/pull/8957)) by @mytharcher
- **[Authentication]** fix acl to support custom state filtering parameters ([#8918](https://github.com/nocobase/nocobase/pull/8918)) by @jiannx
- **[Email manager]** Fixed signature being overwritten when using templates by @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.13](https://www.nocobase.com/en/blog/v2.1.0-alpha.13)

*Release date: 2026-03-27*

### 🎉 New Features

- **[client]** Add JS variables to event flow ([#8938](https://github.com/nocobase/nocobase/pull/8938)) by @jiannx

### 🚀 Improvements

- **[client]** support setting field styles through runjs ([#8933](https://github.com/nocobase/nocobase/pull/8933)) by @jiannx
- **[flow-engine]** Improve schema validation for ui building api. ([#8881](https://github.com/nocobase/nocobase/pull/8881)) by @gchust
- **[Workflow: Pre-action event]** Add validation rules for triggers and nodes ([#8971](https://github.com/nocobase/nocobase/pull/8971)) by @mytharcher
- **[Workflow]** Add variable for page size parameter ([#8951](https://github.com/nocobase/nocobase/pull/8951)) by @mytharcher
- **[Workflow: Webhook]** Add validation for creating trigger / node API by @mytharcher
- **[Workflow: Subflow]**

  - Add validation for creating node API by @mytharcher
  - Add defensive logic to avoid workflow hangs when exception occurs by @mytharcher
- **[Workflow: Approval]** Add validation for trigger / node API by @mytharcher

### 🐛 Bug Fixes

- **[client]** Fixed the exception when adding child nodes to the tree table in the pop-up window ([#8872](https://github.com/nocobase/nocobase/pull/8872)) by @jiannx
- **[server]** Avoid to handle sync-message after app stopped ([#8940](https://github.com/nocobase/nocobase/pull/8940)) by @mytharcher
- **[Action: Export records]** Limit import and export configuration of multi-layer related fields ([#8893](https://github.com/nocobase/nocobase/pull/8893)) by @jiannx
- **[Data visualization]** fixed the abnormal data statistics of the root role chart after enabling the space plugin ([#8969](https://github.com/nocobase/nocobase/pull/8969)) by @jiannx
- **[Action: Import records]** fixed the problem of import failure after opening plugin-space ([#8968](https://github.com/nocobase/nocobase/pull/8968)) by @jiannx
- **[Workflow: JavaScript]** Fix security issues ([#8967](https://github.com/nocobase/nocobase/pull/8967)) by @mytharcher
- **[AI employees]** Adjust the gap between the tool card components in the AI Conversation ([#8965](https://github.com/nocobase/nocobase/pull/8965)) by @cgyrock
- **[Flow engine]** Remove legacy event copied from uiSchema repository to avoid error thrown when triggering ([#8957](https://github.com/nocobase/nocobase/pull/8957)) by @mytharcher
- **[Authentication]** fix acl to support custom state filtering parameters ([#8918](https://github.com/nocobase/nocobase/pull/8918)) by @jiannx
- **[Action: Import records Pro]** limit import and export configuration of multi-layer related fields by @jiannx
- **[Email manager]** Fixed signature being overwritten when using templates by @jiannx
