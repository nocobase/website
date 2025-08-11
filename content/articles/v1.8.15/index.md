### 🚀 Improvements

- **[client]**
  - add "day before yesterday" date variable support ([#7359](https://github.com/nocobase/nocobase/pull/7359)) by @katherinehhh

  - Optimize performance when switching popup tabs ([#7353](https://github.com/nocobase/nocobase/pull/7353)) by @zhangzhonghe

- **[Workflow]**
  - Fix unstable test case ([#7349](https://github.com/nocobase/nocobase/pull/7349)) by @mytharcher

  - Show normal title when disabled ([#7339](https://github.com/nocobase/nocobase/pull/7339)) by @mytharcher

- **[Office File Previewer]** Add support for previewing `.odt` file ([#7347](https://github.com/nocobase/nocobase/pull/7347)) by @mytharcher

- **[Backup manager]** improve performance for mysql database backup operation by @gchust

### 🐛 Bug Fixes

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

