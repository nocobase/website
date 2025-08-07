Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase is currently updated with three branches: `main` , `next` and `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：The most stable version to date, recommended for installation;
* `next`：Beta version, contains upcoming new features and has been preliminarily tested. There might be some known or unknown issues. It's mainly for test users to collect feedback and optimize functions further. Ideal for test users who want to experience new features early and give feedback;
* `develop`：Alpha version, contains the latest feature code, may be incomplete or unstable, mainly for internal dev and rapid iteration. Suited for tech users interested in product's cutting-edge, but with potential issues and incomplete functions. Not for production use.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.14](https://www.nocobase.com/en/blog/v1.8.14)

*Release date: 2025-08-05*

#### 🐛 Bug Fixes

- **[client]** Fix the issue where variable raw strings are submitted with the form ([#7337](https://github.com/nocobase/nocobase/pull/7337)) by @zhangzhonghe
- **[Workflow: Approval]** Add task title for added and delegated items by @mytharcher

### [v1.8.13](https://www.nocobase.com/en/blog/v1.8.13)

*Release date: 2025-08-04*

#### 🎉 New Features

- **[Auth: SAML 2.0]** Add signature-related configuration options by @2013xile

#### 🚀 Improvements

- **[Workflow: JavaScript]** Change cache to app cache to avoid bugs in cluster mode by @mytharcher

#### 🐛 Bug Fixes

- **[client]**

  - Fix tooltip shows [object Object] on hover in action panel ([#7322](https://github.com/nocobase/nocobase/pull/7322)) by @katherinehhh
  - When using variables to set field default values in filter forms, if the variable value is empty, the input box will display the original variable string ([#7335](https://github.com/nocobase/nocobase/pull/7335)) by @zhangzhonghe
- **[Collection: Tree]** Fix the path synchronization logic of tree collections ([#7330](https://github.com/nocobase/nocobase/pull/7330)) by @ChimingLiu

### [v1.8.12](https://www.nocobase.com/en/blog/v1.8.12)

*Release date: 2025-08-01*

#### 🎉 New Features

- **[client]** Added "Auto focus" option for Input, TextArea, URL, and InputNumber components that automatically focuses the input field during initial page rendering when enabled ([#7320](https://github.com/nocobase/nocobase/pull/7320)) by @zhangzhonghe

#### 🐛 Bug Fixes

- **[client]**

  - Fix file preview item on null url ([#7315](https://github.com/nocobase/nocobase/pull/7315)) by @mytharcher
  - Add full URL to local file when previewing ([#7314](https://github.com/nocobase/nocobase/pull/7314)) by @mytharcher
- **[utils]** incorrect timezone handling for parseDate ([#7318](https://github.com/nocobase/nocobase/pull/7318)) by @katherinehhh
- **[undefined]** Add new plugin to preset ([#7319](https://github.com/nocobase/nocobase/pull/7319)) by @mytharcher
- **[File manager]** Fix storage field permission ([#7316](https://github.com/nocobase/nocobase/pull/7316)) by @mytharcher
- **[Workflow]** Fix `undefined` result when processor exit ([#7317](https://github.com/nocobase/nocobase/pull/7317)) by @mytharcher
- **[Workflow: Dynamic calculation node]** Fix legacy API caused error ([#7321](https://github.com/nocobase/nocobase/pull/7321)) by @mytharcher
- **[Workflow: Subflow]** Fix flow suspended by @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.7](https://www.nocobase.com/en/blog/v1.9.0-alpha.7)

*Release date: 2025-08-06*

#### 🐛 Bug Fixes

- **[Email manager]** support resync by @jiannx

### [v1.9.0-alpha.6](https://www.nocobase.com/en/blog/v1.9.0-alpha.6)

*Release date: 2025-08-06*

#### 🚀 Improvements

- **[Workflow]** Show normal title when disabled ([#7339](https://github.com/nocobase/nocobase/pull/7339)) by @mytharcher

#### 🐛 Bug Fixes

- **[Data visualization]** date variable issue in default value of date field in chart filter block ([#7291](https://github.com/nocobase/nocobase/pull/7291)) by @katherinehhh
- **[Workflow: CC]** Fix blocks can not be removed ([#7338](https://github.com/nocobase/nocobase/pull/7338)) by @mytharcher
- **[Email manager]** Manually distinguish between forwarding and replying by @jiannx

### [v1.9.0-alpha.5](https://www.nocobase.com/en/blog/v1.9.0-alpha.5)

*Release date: 2025-08-05*

#### 🎉 New Features

- **[client]** Added "Auto focus" option for Input, TextArea, URL, and InputNumber components that automatically focuses the input field during initial page rendering when enabled ([#7320](https://github.com/nocobase/nocobase/pull/7320)) by @zhangzhonghe
- **[Auth: SAML 2.0]** Add signature-related configuration options by @2013xile

#### 🚀 Improvements

- **[Workflow: JavaScript]** Change cache to app cache to avoid bugs in cluster mode by @mytharcher

#### 🐛 Bug Fixes

- **[client]**

  - Fix the issue where variable raw strings are submitted with the form ([#7337](https://github.com/nocobase/nocobase/pull/7337)) by @zhangzhonghe
  - Fix tooltip shows [object Object] on hover in action panel ([#7322](https://github.com/nocobase/nocobase/pull/7322)) by @katherinehhh
  - When using variables to set field default values in filter forms, if the variable value is empty, the input box will display the original variable string ([#7335](https://github.com/nocobase/nocobase/pull/7335)) by @zhangzhonghe
- **[undefined]** Add new plugin to preset ([#7319](https://github.com/nocobase/nocobase/pull/7319)) by @mytharcher
- **[Collection: Tree]** Fix the path synchronization logic of tree collections ([#7330](https://github.com/nocobase/nocobase/pull/7330)) by @ChimingLiu
- **[Office File Previewer]** Support `.docx`, `.xlsx` and `.pptx` file with only URL to be previewed ([#7336](https://github.com/nocobase/nocobase/pull/7336)) by @mytharcher
- **[Workflow: Dynamic calculation node]** Fix legacy API caused error ([#7321](https://github.com/nocobase/nocobase/pull/7321)) by @mytharcher
- **[Workflow: Approval]** Add task title for added and delegated items by @mytharcher
- **[Email manager]** Supports the same email for multiple people by @jiannx
