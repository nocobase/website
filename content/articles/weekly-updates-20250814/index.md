Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase is currently updated with three branches: `main` , `next` and `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：The most stable version to date, recommended for installation;
* `next`：Beta version, contains upcoming new features and has been preliminarily tested. There might be some known or unknown issues. It's mainly for test users to collect feedback and optimize functions further. Ideal for test users who want to experience new features early and give feedback;
* `develop`：Alpha version, contains the latest feature code, may be incomplete or unstable, mainly for internal dev and rapid iteration. Suited for tech users interested in product's cutting-edge, but with potential issues and incomplete functions. Not for production use.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.15](https://www.nocobase.com/en/blog/v1.8.15)

*Release date: 2025-08-12*

#### 🚀 Improvements

- **[client]**

  - add "day before yesterday" date variable support ([#7359](https://github.com/nocobase/nocobase/pull/7359)) by @katherinehhh
  - Optimize performance when switching popup tabs ([#7353](https://github.com/nocobase/nocobase/pull/7353)) by @zhangzhonghe
- **[Workflow]**

  - Fix unstable test case ([#7349](https://github.com/nocobase/nocobase/pull/7349)) by @mytharcher
  - The workflow title in the task card will no longer be displayed with a strikethrough, even if the corresponding version is disabled ([#7339](https://github.com/nocobase/nocobase/pull/7339)) by @mytharcher
- **[Office File Previewer]** Add support for previewing `.odt` file ([#7347](https://github.com/nocobase/nocobase/pull/7347)) by @mytharcher
- **[Backup manager]** improve performance for mysql database backup operation by @gchust

#### 🐛 Bug Fixes

- **[client]**

  - Fix the issue where multi-column form layout doesn't convert to single-column layout on mobile devices ([#7355](https://github.com/nocobase/nocobase/pull/7355)) by @zhangzhonghe
  - Fix bulk delete collections error ([#7345](https://github.com/nocobase/nocobase/pull/7345)) by @aaaaaajie
  - Fixed issue where previously saved data scope was not preselected when configuring permissions individually. ([#7288](https://github.com/nocobase/nocobase/pull/7288)) by @aaaaaajie
- **[Workflow]**

  - Refactor the "Add Node" menu and fix the workflow canvas rendering performance issues it caused ([#7363](https://github.com/nocobase/nocobase/pull/7363)) by @mytharcher
  - Fix the issue of incorrect filter conditions when retrieving a single to-do item ([#7366](https://github.com/nocobase/nocobase/pull/7366)) by @mytharcher
  - Fix the issue of keyword matching in the field select ([#7356](https://github.com/nocobase/nocobase/pull/7356)) by @mytharcher
  - Avoid error thrown caused by publishing to event queue when stopping ([#7348](https://github.com/nocobase/nocobase/pull/7348)) by @mytharcher
- **[Notification: In-app message]** Fix the issue where in-site messages were received but not displayed in a popup ([#7364](https://github.com/nocobase/nocobase/pull/7364)) by @mytharcher
- **[Mobile]** Resolved an issue where the date picker on mobile devices displayed incorrectly when date range limits were applied ([#7362](https://github.com/nocobase/nocobase/pull/7362)) by @katherinehhh
- **[File manager]** Add `storageId` field to file collection to support permission configuration ([#7351](https://github.com/nocobase/nocobase/pull/7351)) by @mytharcher
- **[Workflow: Parallel node]** Fix parallel node suspend after resume under MySQL ([#7346](https://github.com/nocobase/nocobase/pull/7346)) by @mytharcher
- **[Workflow: CC]** Fix blocks can not be removed ([#7338](https://github.com/nocobase/nocobase/pull/7338)) by @mytharcher
- **[Office File Previewer]** Support `.docx`, `.xlsx` and `.pptx` file with only URL to be previewed ([#7336](https://github.com/nocobase/nocobase/pull/7336)) by @mytharcher
- **[Data visualization]** date variable issue in default value of date field in chart filter block ([#7291](https://github.com/nocobase/nocobase/pull/7291)) by @katherinehhh
- **[Workflow: Approval]**

  - Fix linkage rules not works in approval original detail block by @mytharcher
  - Fix update associations when submit draft by @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.10](https://www.nocobase.com/en/blog/v1.9.0-alpha.10)

*Release date: 2025-08-09*

#### 🐛 Bug Fixes

- **[Email manager]** rich editor support soft line breaks by @jiannx

### [v1.9.0-alpha.9](https://www.nocobase.com/en/blog/v1.9.0-alpha.9)

*Release date: 2025-08-09*

#### 🚀 Improvements

- **[Workflow]** Fix unstable test case ([#7349](https://github.com/nocobase/nocobase/pull/7349)) by @mytharcher

#### 🐛c Bug Fixes

- **[client]** Fix the issue where multi-column form layout doesn't convert to single-column layout on mobile devices ([#7355](https://github.com/nocobase/nocobase/pull/7355)) by @zhangzhonghe
- **[Workflow]** Fix the issue of keyword matching in the field select ([#7356](https://github.com/nocobase/nocobase/pull/7356)) by @mytharcher

### [v1.9.0-alpha.8](https://www.nocobase.com/en/blog/v1.9.0-alpha.8)

*Release date: 2025-08-08*

#### 🚀 Improvements

- **[client]** Optimize performance when switching popup tabs ([#7353](https://github.com/nocobase/nocobase/pull/7353)) by @zhangzhonghe
- **[Office File Previewer]** Add support for previewing `.odt` file ([#7347](https://github.com/nocobase/nocobase/pull/7347)) by @mytharcher

#### 🐛 Bug Fixes

- **[client]**

  - Fixed issue where previously saved data scope was not preselected when configuring permissions individually ([#7288](https://github.com/nocobase/nocobase/pull/7288)) by @aaaaaajie
  - Fix bulk delete collections error ([#7345](https://github.com/nocobase/nocobase/pull/7345)) by @aaaaaajie
- **[Workflow]** Avoid error thrown caused by publishing to event queue when stopping ([#7348](https://github.com/nocobase/nocobase/pull/7348)) by @mytharcher
- **[Workflow: Parallel node]** Fix parallel node suspend after resume under MySQL ([#7346](https://github.com/nocobase/nocobase/pull/7346)) by @mytharcher
- **[Workflow: Approval]**

  - Fix update associations when submit draft by @mytharcher
  - Fix linkage rules not works in approval original detail block by @mytharcher
