### 🚀 Improvements

- **[client]** Optimize performance when switching popup tabs ([#7353](https://github.com/nocobase/nocobase/pull/7353)) by @zhangzhonghe

- **[Office File Previewer]** Add support for previewing `.odt` file ([#7347](https://github.com/nocobase/nocobase/pull/7347)) by @mytharcher

### 🐛 Bug Fixes

- **[client]**
  - Fixed issue where previously saved data scope was not preselected when configuring permissions individually. ([#7288](https://github.com/nocobase/nocobase/pull/7288)) by @aaaaaajie

  - Fix bulk delete collections error ([#7345](https://github.com/nocobase/nocobase/pull/7345)) by @aaaaaajie

- **[Workflow]** Avoid error thrown caused by publishing to event queue when stopping ([#7348](https://github.com/nocobase/nocobase/pull/7348)) by @mytharcher

- **[Workflow: Parallel node]** Fix parallel node suspend after resume under MySQL ([#7346](https://github.com/nocobase/nocobase/pull/7346)) by @mytharcher

- **[Workflow: Approval]**
  - Fix update associations when submit draft by @mytharcher

  - Fix linkage rules not works in approval original detail block by @mytharcher

