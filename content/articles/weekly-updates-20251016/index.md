Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase is currently updated with three branches: `main` , `next` and `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：The most stable version to date, recommended for installation;
* `next`：Beta version, contains upcoming new features and has been preliminarily tested. There might be some known or unknown issues. It's mainly for test users to collect feedback and optimize functions further. Ideal for test users who want to experience new features early and give feedback;
* `develop`：Alpha version, contains the latest feature code, may be incomplete or unstable, mainly for internal dev and rapid iteration. Suited for tech users interested in product's cutting-edge, but with potential issues and incomplete functions. Not for production use.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.29](https://www.nocobase.com/en/blog/v1.8.29)

*Release date: 2025-10-15*

### 🚀 Improvements

* **[Workflow: Approval]** Refactor branch configuration to adapt to kernel changes by @mytharcher

### 🐛 Bug Fixes

* **[Workflow: Approval]** Fix the issue of migration script errors due to non-existent tables when the application is not installed by @mytharcher

### [v1.8.28](https://www.nocobase.com/en/blog/v1.8.28)

*Release date: 2025-10-14*

### 🚀 Improvements

* **[client]** In order to get more accurate MIME type of file, use `mime` package to detect MIME type of file in client ([#7551](https://github.com/nocobase/nocobase/pull/7551)) by @mytharcher
* **[Workflow]**
  * Support to limit the maximum number of nodes in a workflow through environment variables ([#7542](https://github.com/nocobase/nocobase/pull/7542)) by @mytharcher
  * Add `keepBranch` option when deleting node ([#7571](https://github.com/nocobase/nocobase/pull/7571)) by @mytharcher
* **[Workflow: Loop node]** Support to limit the maximum number of cycles for loop nodes through environment variables ([#7543](https://github.com/nocobase/nocobase/pull/7543)) by @mytharcher
* **[Workflow: Approval]** Add print button to detail popup in custom approval blocks by @mytharcher

### 🐛 Bug Fixes

* **[client]**
  * Fix the issue where images did not display correctly when both rotated and scaled during preview ([#7573](https://github.com/nocobase/nocobase/pull/7573)) by @mytharcher
  * Fix the issue where missing dynamic properties in the `AssignedField` component caused file upload errors in “Create record” or “Update record” nodes ([#7556](https://github.com/nocobase/nocobase/pull/7556)) by @mytharcher
* **[Public forms]** Fix the issue where the upload rules for file fields in public forms were incorrect ([#7553](https://github.com/nocobase/nocobase/pull/7553)) by @mytharcher
* **[Calendar]** fix data query issue caused by unique identifier in calendar block ([#7562](https://github.com/nocobase/nocobase/pull/7562)) by @katherinehhh
* **[Auth: LDAP]** Fix LDAP bind failure with non-ASCII (UTF-8) DNs in Active Directory by @2013xile

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.12](https://www.nocobase.com/en/blog/v1.9.0-beta.12)

*Release date: 2025-10-11*

### 🐛 Bug Fixes

* **[server]** Primary key migration error ([#7568](https://github.com/nocobase/nocobase/pull/7568)) by @2013xile
* **[Calendar]** fix data query issue caused by unique identifier in calendar block ([#7562](https://github.com/nocobase/nocobase/pull/7562)) by @katherinehhh

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.8](https://www.nocobase.com/en/blog/v2.0.0-alpha.8)

*Release date: 2025-10-14*

### 🎉 New Features

* **[AI employees]** Improve web search function of plugin-ai ([#7580](https://github.com/nocobase/nocobase/pull/7580)) by @cgyrock

### 🚀 Improvements

* **[client]** In order to get more accurate MIME type of file, use `mime` package to detect MIME type of file in client ([#7551](https://github.com/nocobase/nocobase/pull/7551)) by @mytharcher
* **[flow-engine]**
  * support popup variable ([#7583](https://github.com/nocobase/nocobase/pull/7583)) by @gchust
  * Enhance the code editing experience with richer snippets and context-aware code completions for various scenarios ([#7559](https://github.com/nocobase/nocobase/pull/7559)) by @gchust
  * Standardized automatic workflows to be consistently triggered by the “beforeRender” event, ensuring predictable and unified operation across processes. ([#7577](https://github.com/nocobase/nocobase/pull/7577)) by @gchust
* **[Workflow]** Add `keepBranch` option when deleting node ([#7571](https://github.com/nocobase/nocobase/pull/7571)) by @mytharcher
* **[Data visualization]** Expand chart types; Optimize UI and interactive experience. ([#7581](https://github.com/nocobase/nocobase/pull/7581)) by @heziqiang
* **[Workflow: Approval]** Refactor branch configuration to adapt to kernel changes by @mytharcher

### 🐛 Bug Fixes

* **[client]**
  * Fix abnormal page display issues when switching table pagination ([#7572](https://github.com/nocobase/nocobase/pull/7572)) by @zhangzhonghe
  * Can’t configure assign field value for `Update` and `Bulk update` action ([#7565](https://github.com/nocobase/nocobase/pull/7565)) by @gchust
  * Fix the issue where images did not display correctly when both rotated and scaled during preview ([#7573](https://github.com/nocobase/nocobase/pull/7573)) by @mytharcher
* **[Workflow: Approval]** Fix the issue of migration script errors due to non-existent tables when the application is not installed by @mytharcher
* **[Auth: LDAP]** Fix LDAP bind failure with non-ASCII (UTF-8) DNs in Active Directory by @2013xile

### [v2.0.0-alpha.7](https://www.nocobase.com/en/blog/v2.0.0-alpha.7)

*Release date: 2025-10-13*

### 🎉 New Features

* **[client]** Add “Current device type” variable ([#7576](https://github.com/nocobase/nocobase/pull/7576)) by @zhangzhonghe

### [v2.0.0-alpha.6](https://www.nocobase.com/en/blog/v2.0.0-alpha.6)

*Release date: 2025-10-11*

### 🐛 Bug Fixes

* **[server]** Primary key migration error ([#7568](https://github.com/nocobase/nocobase/pull/7568)) by @2013xile
* **[undefined]** routing path matching supports new multiple applications ([#7570](https://github.com/nocobase/nocobase/pull/7570)) by @jiannx
* **[AI employees]** Fix errors in the AI employee data-modeling tool when using ChatGPT-4o. ([#7566](https://github.com/nocobase/nocobase/pull/7566)) by @cgyrock
