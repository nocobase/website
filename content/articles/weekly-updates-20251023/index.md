Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase is currently updated with three branches: `main` , `next` and `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：The most stable version to date, recommended for installation;
* `next`：Beta version, contains upcoming new features and has been preliminarily tested. There might be some known or unknown issues. It's mainly for test users to collect feedback and optimize functions further. Ideal for test users who want to experience new features early and give feedback;
* `develop`：Alpha version, contains the latest feature code, may be incomplete or unstable, mainly for internal dev and rapid iteration. Suited for tech users interested in product's cutting-edge, but with potential issues and incomplete functions. Not for production use.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.31](https://www.nocobase.com/en/blog/v1.8.31)

*Release date: 2025-10-17*

### 🐛 Bug Fixes

- **[database]** Fix error thrown when operator `$in` meets `null` value ([#7610](https://github.com/nocobase/nocobase/pull/7610)) by @mytharcher
- **[Workflow: Approval]**

  - Fix the transaction timeout issue caused by transactions not rolling back properly when database errors occur after approval submission by @mytharcher
  - Fix the issue where variables are not parsed in approval submit form by @mytharcher

### [v1.8.30](https://www.nocobase.com/en/blog/v1.8.30)

*Release date: 2025-10-16*

### 🐛 Bug Fixes

- **[client]** Fix the issue of tab icon pop-ups being obscured ([#7607](https://github.com/nocobase/nocobase/pull/7607)) by @zhangzhonghe

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.13](https://www.nocobase.com/en/blog/v1.9.0-beta.13)

*Release date: 2025-10-22*

### 🚀 Improvements

- **[client]** In order to get more accurate MIME type of file, use `mime` package to detect MIME type of file in client ([#7551](https://github.com/nocobase/nocobase/pull/7551)) by @mytharcher
- **[Data source: Main]** Refactor the localization logic for error messages, and handle within the error-handling plugin ([#7582](https://github.com/nocobase/nocobase/pull/7582)) by @2013xile
- **[Workflow]** Add `keepBranch` option when deleting node ([#7571](https://github.com/nocobase/nocobase/pull/7571)) by @mytharcher
- **[Workflow: Approval]** Refactor branch configuration to adapt to kernel changes by @mytharcher

### 🐛 Bug Fixes

- **[client]**

  - fix error when clearing date field in filter block ([#7632](https://github.com/nocobase/nocobase/pull/7632)) by @katherinehhh
  - fix subtable default value not working in edit form drawer ([#7631](https://github.com/nocobase/nocobase/pull/7631)) by @katherinehhh
  - Fix the issue where images did not display correctly when both rotated and scaled during preview ([#7573](https://github.com/nocobase/nocobase/pull/7573)) by @mytharcher
  - Fix the issue of tab icon pop-ups being obscured ([#7607](https://github.com/nocobase/nocobase/pull/7607)) by @zhangzhonghe
- **[database]** Fix error thrown when operator `$in` meets `null` value ([#7610](https://github.com/nocobase/nocobase/pull/7610)) by @mytharcher
- **[Data source: Main]** Fix the issue where metadata was not synchronized across multiple nodes after creating a reverse association field ([#7628](https://github.com/nocobase/nocobase/pull/7628)) by @mytharcher
- **[Workflow: Approval]**

  - Fix the issue of migration script errors due to non-existent tables when the application is not installed by @mytharcher
  - Fix the issue of Snowflake ID not being generated due to skipped hooks by @mytharcher
- **[Auth: LDAP]** Fix LDAP bind failure with non-ASCII (UTF-8) DNs in Active Directory by @2013xile

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.19](https://www.nocobase.com/en/blog/v2.0.0-alpha.19)

*Release date: 2025-10-21*

### 🐛 Bug Fixes

- **[client]**

  - Fixed an issue where the URL did not update correctly after switching tabs within a popup, reopening a nested popup, and then closing all popups. ([#7630](https://github.com/nocobase/nocobase/pull/7630)) by @gchust
  - fix subtable default value not working in edit form drawer ([#7631](https://github.com/nocobase/nocobase/pull/7631)) by @katherinehhh
  - fix error when clearing date field in filter block ([#7632](https://github.com/nocobase/nocobase/pull/7632)) by @katherinehhh
- **[Multi-app manager (deprecated)]** Fix not being able to disable old multi-app-manager ([#7633](https://github.com/nocobase/nocobase/pull/7633)) by @jiannx

### [v2.0.0-alpha.17](https://www.nocobase.com/en/blog/v2.0.0-alpha.17)

*Release date: 2025-10-21*

### 🎉 New Features

- **[client]** Added support for table row click event listeners, enabling users to execute specific actions when a row in the table is clicked ([#7622](https://github.com/nocobase/nocobase/pull/7622)) by @zhangzhonghe
- **[Workflow: Approval]** Expose the `approvalId` variable for use from approval triggers by @mytharcher

### 🐛 Bug Fixes

- **[flow-engine]** Fix the issue of translation not taking effect in antd components ([#7621](https://github.com/nocobase/nocobase/pull/7621)) by @zhangzhonghe
- **[Data source: Main]** Fix the issue where metadata was not synchronized across multiple nodes after creating a reverse association field ([#7628](https://github.com/nocobase/nocobase/pull/7628)) by @mytharcher
- **[plugin-demo-platform]** demo support auto stop apps by @jiannx
- **[Multi-app]**

  - multi-app migration not emit hooks by @jiannx
  - multi app proxy support cache by @jiannx

### [v2.0.0-alpha.16](https://www.nocobase.com/en/blog/v2.0.0-alpha.16)

*Release date: 2025-10-20*

### 🎉 New Features

- **[Form drafts]** Form drafts by @chenos

### 🐛 Bug Fixes

- **[flow-engine]** unable to get current view context in reference block ([#7620](https://github.com/nocobase/nocobase/pull/7620)) by @gchust
- **[client]** handle missing context in usePlugin ([#7627](https://github.com/nocobase/nocobase/pull/7627)) by @chenos

### [v2.0.0-alpha.15](https://www.nocobase.com/en/blog/v2.0.0-alpha.15)

*Release date: 2025-10-20*

### 🚀 Improvements

- **[client]** support association fields in JS field model ([#7618](https://github.com/nocobase/nocobase/pull/7618)) by @gchust
- **[AI employees]**

  - Refactored the OpenAI LLM Provider into two separate providers to support OpenAI's Completions and Responses APIs. ([#7615](https://github.com/nocobase/nocobase/pull/7615)) by @cgyrock
  - Add new LLM provider Ollama ([#7612](https://github.com/nocobase/nocobase/pull/7612)) by @ReLaMi96

### 🐛 Bug Fixes

- **[Workflow: Approval]**
  - Fix the issue where task count not updated after added assignee by @mytharcher
  - Fix the transaction timeout issue caused by transactions not rolling back properly when database errors occur after approval submission by @mytharcher

### [v2.0.0-alpha.14](https://www.nocobase.com/en/blog/v2.0.0-alpha.14)

*Release date: 2025-10-17*

### 🚀 Improvements

- **[AI employees]** AI coding optimization ([#7614](https://github.com/nocobase/nocobase/pull/7614)) by @cgyrock
- **[Data source: Main]** Refactor the localization logic for error messages, and handle within the error-handling plugin ([#7582](https://github.com/nocobase/nocobase/pull/7582)) by @2013xile

### 🐛 Bug Fixes

- **[database]**

  - Set the `search_path` before executing SQL statements using the `runSQL` method ([#7611](https://github.com/nocobase/nocobase/pull/7611)) by @2013xile
  - Fix error thrown when operator `$in` meets `null` value ([#7610](https://github.com/nocobase/nocobase/pull/7610)) by @mytharcher
- **[client]** Fix the issue of tab icon pop-ups being obscured ([#7607](https://github.com/nocobase/nocobase/pull/7607)) by @zhangzhonghe
- **[Workflow: Approval]** Fix the issue where variables are not parsed in approval submit form by @mytharcher

### [v2.0.0-alpha.13](https://www.nocobase.com/en/blog/v2.0.0-alpha.13)

*Release date: 2025-10-16*

### 🎉 New Features

- **[Block: Reference]** Add an experimental "Reference block" plugin, which allows reusing existing blocks by referencing or copying. ([#7584](https://github.com/nocobase/nocobase/pull/7584)) by @gchust

### 🐛 Bug Fixes

- **[Data visualization]** Fix the issue where the chart cannot be displayed due to the timeout of event registration ([#7608](https://github.com/nocobase/nocobase/pull/7608)) by @heziqiang

### [v2.0.0-alpha.10](https://www.nocobase.com/en/blog/v2.0.0-alpha.10)

*Release date: 2025-10-15*

### 🚀 Improvements

- **[Data visualization]** Update plugin-data-vi 2.0, fix some issues and optimize UI. ([#7597](https://github.com/nocobase/nocobase/pull/7597)) by @heziqiang

### 🐛 Bug Fixes

- **[Workflow: Approval]** Fix the issue of Snowflake ID not being generated due to skipped hooks by @mytharcher

### [v2.0.0-alpha.9](https://www.nocobase.com/en/blog/v2.0.0-alpha.9)

*Release date: 2025-10-15*

### 🎉 New Features

- **[client]** Add support for custom variables ([#7585](https://github.com/nocobase/nocobase/pull/7585)) by @zhangzhonghe

### 🚀 Improvements

- **[AI employees]** add minimize button for chat box In mobile layout ([#7595](https://github.com/nocobase/nocobase/pull/7595)) by @cgyrock

### 🐛 Bug Fixes

- **[server]** Preserve field.targetKey when copying reference fields ([#7599](https://github.com/nocobase/nocobase/pull/7599)) by @chenos
- **[AI employees]** fix chat box layout issue In mobile layout ([#7591](https://github.com/nocobase/nocobase/pull/7591)) by @cgyrock
