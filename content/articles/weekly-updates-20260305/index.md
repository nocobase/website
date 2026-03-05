Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase is currently updated with three branches: `main` , `next` and `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：The most stable version to date, recommended for installation;
* `next`：Beta version, contains upcoming new features and has been preliminarily tested. There might be some known or unknown issues. It's mainly for test users to collect feedback and optimize functions further. Ideal for test users who want to experience new features early and give feedback;
* `develop`：Alpha version, contains the latest feature code, may be incomplete or unstable, mainly for internal dev and rapid iteration. Suited for tech users interested in product's cutting-edge, but with potential issues and incomplete functions. Not for production use.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.10](https://www.nocobase.com/en/blog/v2.0.10)

*Release date: 2026-03-04*

### 🐛 Bug Fixes

- **[AI employees]** Fixed ai employee chat error while knowledge base enabled ([#8746](https://github.com/nocobase/nocobase/pull/8746)) by @cgyrock
- **[Flow engine]** fix sql destroy error ([#8745](https://github.com/nocobase/nocobase/pull/8745)) by @chenos
- **[Access control]** Database instance used when setting ACL metadata is incorrect ([#8747](https://github.com/nocobase/nocobase/pull/8747)) by @2013xile
- **[Workflow: Approval]** Fix the issue where query result not showing caused by nodes filtered by type by @mytharcher

### [v2.0.9](https://www.nocobase.com/en/blog/v2.0.9)

*Release date: 2026-03-03*

### 🐛 Bug Fixes

- **[client]**

  - Fix the issue where CollectionField component not render in DefaultValue component ([#8744](https://github.com/nocobase/nocobase/pull/8744)) by @mytharcher
  - Fixed an issue where the data block did not refresh when switching menus. ([#8735](https://github.com/nocobase/nocobase/pull/8735)) by @gchust
- **[database]** Fix field custom regular check failure in v2 ([#8729](https://github.com/nocobase/nocobase/pull/8729)) by @jiannx
- **[flow-engine]** Fixed an issue where ctx.exit could not terminate the execution of user-defined event flows. ([#8737](https://github.com/nocobase/nocobase/pull/8737)) by @gchust
- **[Workflow: Approval]** Add missed parameter to avoid associations not updated when submit new approval by @mytharcher

### [v2.0.8](https://www.nocobase.com/en/blog/v2.0.8)

*Release date: 2026-03-01*

### 🎉 New Features

- **[AI employees]** Update AI chatbox user prompt ([#8725](https://github.com/nocobase/nocobase/pull/8725)) by @heziqiang

### 🐛 Bug Fixes

- **[server]** Resolve cache issue by appending hash to assets ([#8730](https://github.com/nocobase/nocobase/pull/8730)) by @chenos
- **[AI employees]** Fixed AI data source configuration rendering issue. ([#8731](https://github.com/nocobase/nocobase/pull/8731)) by @cgyrock
- **[Workflow: Custom action event]** Fix the issue where custom action workflow hangs when execute as sub-flow ([#8738](https://github.com/nocobase/nocobase/pull/8738)) by @mytharcher
- **[Workflow: Approval]**

  - Sanitize association values in approval actions, to avoid any data manipulation beyond permission by @mytharcher
  - Fix the issue where error throw when execute approval workflow manually by @mytharcher
  - Fix error thrown caused by value of `dataAfter` missing when added or delegated by @mytharcher
  - Fix the issue where appends parameter filtering by ACL by @mytharcher
  - Fix ACL issue where association value should not be create or update when user has no permission by @mytharcher

### [v2.0.7](https://www.nocobase.com/en/blog/v2.0.7)

*Release date: 2026-02-27*

### 🎉 New Features

- **[AI employees]** Support searching built-in docs with multiple keywords and reading multiple documents in a single tool calling ([#8718](https://github.com/nocobase/nocobase/pull/8718)) by @2013xile

### 🚀 Improvements

- **[client]** support summary configuration for table ([#8721](https://github.com/nocobase/nocobase/pull/8721)) by @chenos
- **[Embed NocoBase]** Provide sanitize API to filter association values in action ([#8688](https://github.com/nocobase/nocobase/pull/8688)) by @mytharcher

### 🐛 Bug Fixes

- **[Data visualization]** fix i18n for plugin chart entry text ([#8716](https://github.com/nocobase/nocobase/pull/8716)) by @heziqiang
- **[Workflow: JavaScript]** Fix test cases can not pass on windows ([#8722](https://github.com/nocobase/nocobase/pull/8722)) by @mytharcher
- **[AI employees]** Resolve issue where AI message renders with length 0 ([#8723](https://github.com/nocobase/nocobase/pull/8723)) by @heziqiang
- **[Template print]** Fix the issue where ACL API changed but is not adapted to plugin by @mytharcher
- **[Workflow: Approval]** Sanitize association values in approval actions, to avoid any data manipulation beyond permission by @mytharcher
- **[Email manager]** Fix image content ID format parsing by @jiannx

### [v2.0.6](https://www.nocobase.com/en/blog/v2.0.6)

*Release date: 2026-02-26*

### 🐛 Bug Fixes

- **[AI employees]** Fixed AI conversation error when using MySQL database. ([#8708](https://github.com/nocobase/nocobase/pull/8708)) by @cgyrock

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.7](https://www.nocobase.com/en/blog/v2.1.0-beta.7)

*Release date: 2026-03-04*

### 🎉 New Features

- **[AI employees]** Update AI chatbox user prompt ([#8725](https://github.com/nocobase/nocobase/pull/8725)) by @heziqiang

### 🐛 Bug Fixes

- **[client]**

  - Fix the issue where CollectionField component not render in DefaultValue component ([#8744](https://github.com/nocobase/nocobase/pull/8744)) by @mytharcher
  - Fixed an issue where the data block did not refresh when switching menus. ([#8735](https://github.com/nocobase/nocobase/pull/8735)) by @gchust
- **[flow-engine]** Fixed an issue where ctx.exit could not terminate the execution of user-defined event flows. ([#8737](https://github.com/nocobase/nocobase/pull/8737)) by @gchust
- **[database]** Fix field custom regular check failure in v2 ([#8729](https://github.com/nocobase/nocobase/pull/8729)) by @jiannx
- **[server]** Resolve cache issue by appending hash to assets ([#8730](https://github.com/nocobase/nocobase/pull/8730)) by @chenos
- **[Access control]** Database instance used when setting ACL metadata is incorrect ([#8747](https://github.com/nocobase/nocobase/pull/8747)) by @2013xile
- **[AI employees]**

  - Fixed ai employee chat error while knowledge base enabled ([#8746](https://github.com/nocobase/nocobase/pull/8746)) by @cgyrock
  - Fixed AI data source configuration rendering issue. ([#8731](https://github.com/nocobase/nocobase/pull/8731)) by @cgyrock
- **[Flow engine]** fix sql destroy error ([#8745](https://github.com/nocobase/nocobase/pull/8745)) by @chenos
- **[Workflow: Custom action event]** Fix the issue where custom action workflow hangs when execute as sub-flow ([#8738](https://github.com/nocobase/nocobase/pull/8738)) by @mytharcher
- **[Workflow: Approval]**

  - Fix the issue where query result not showing caused by nodes filtered by type by @mytharcher
  - Add missed parameter to avoid associations not updated when submit new approval by @mytharcher
  - Fix the issue where error throw when execute approval workflow manually by @mytharcher
  - Fix error thrown caused by value of `dataAfter` missing when added or delegated by @mytharcher
  - Fix ACL issue where association value should not be create or update when user has no permission by @mytharcher
  - Sanitize association values in approval actions, to avoid any data manipulation beyond permission by @mytharcher
  - Fix the issue where appends parameter filtering by ACL by @mytharcher

### [v2.1.0-beta.6](https://www.nocobase.com/en/blog/v2.1.0-beta.6)

*Release date: 2026-02-27*

### 🎉 New Features

- **[AI employees]** Support searching built-in docs with multiple keywords and reading multiple documents in a single tool calling ([#8718](https://github.com/nocobase/nocobase/pull/8718)) by @2013xile

### 🚀 Improvements

- **[client]** support summary configuration for table ([#8721](https://github.com/nocobase/nocobase/pull/8721)) by @chenos
- **[AI employees]** Update AI chatbox user prompt ([#8717](https://github.com/nocobase/nocobase/pull/8717)) by @heziqiang
- **[Embed NocoBase]** Provide sanitize API to filter association values in action ([#8688](https://github.com/nocobase/nocobase/pull/8688)) by @mytharcher

### 🐛 Bug Fixes

- **[AI employees]** Resolve issue where AI message renders with length 0 ([#8723](https://github.com/nocobase/nocobase/pull/8723)) by @heziqiang
- **[Data visualization]** fix i18n for plugin chart entry text ([#8716](https://github.com/nocobase/nocobase/pull/8716)) by @heziqiang
- **[Workflow: JavaScript]** Fix test cases can not pass on windows ([#8722](https://github.com/nocobase/nocobase/pull/8722)) by @mytharcher
- **[Template print]** Fix the issue where ACL API changed but is not adapted to plugin by @mytharcher
- **[Workflow: Approval]** Sanitize association values in approval actions, to avoid any data manipulation beyond permission by @mytharcher
- **[Email manager]** Fix image content ID format parsing by @jiannx

### [v2.1.0-beta.5](https://www.nocobase.com/en/blog/v2.1.0-beta.5)

*Release date: 2026-02-26*

### 🚀 Improvements

- **[AI employees]** Update AI chatbox user prompt ([#8717](https://github.com/nocobase/nocobase/pull/8717)) by @heziqiang

### 🐛 Bug Fixes

- **[AI employees]** Fixed AI conversation error when using MySQL database. ([#8708](https://github.com/nocobase/nocobase/pull/8708)) by @cgyrock

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.7](https://www.nocobase.com/en/blog/v2.1.0-alpha.7)

*Release date: 2026-02-26*

### 🎉 New Features

- **[AI employees]** Support searching built-in docs with multiple keywords and reading multiple documents in a single tool calling ([#8718](https://github.com/nocobase/nocobase/pull/8718)) by @2013xile

### 🚀 Improvements

- **[AI employees]** Update AI chatbox user prompt ([#8717](https://github.com/nocobase/nocobase/pull/8717)) by @heziqiang

### 🐛 Bug Fixes

- **[client]** In mobile, close the menu first and then perform the page jump ([#8699](https://github.com/nocobase/nocobase/pull/8699)) by @zhangzhonghe
- **[AI LLM: GigaChat]** Fixed GigaChat plugin not working in version 2.0. ([#8707](https://github.com/nocobase/nocobase/pull/8707)) by @cgyrock
- **[AI employees]**

  - Fixed AI conversation error when using MySQL database. ([#8708](https://github.com/nocobase/nocobase/pull/8708)) by @cgyrock
  - Unify file input for chatGPT APIs using ContentBlock ([#8696](https://github.com/nocobase/nocobase/pull/8696)) by @cgyrock
  - Fix ai agent error when user sends new message without confirming tool execution ([#8697](https://github.com/nocobase/nocobase/pull/8697)) by @cgyrock
- **[AI: Knowledge base]** Fixed AI knowledge base plugin startup error. by @cgyrock
- **[Email manager]** Image rendering error by @jiannx
