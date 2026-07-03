### 🐛 Bug Fixes

- **[client]** Fixed an issue where updating sub-table values through field assignment would result in data contamination. ([#9163](https://github.com/nocobase/nocobase/pull/9163)) by @gchust

- **[data-source-manager]** Fixed an issue where sequence fields could be changed to string after database synchronization ([#9143](https://github.com/nocobase/nocobase/pull/9143)) by @2013xile

- **[File manager]** Return null when preview URL is missing ([#9104](https://github.com/nocobase/nocobase/pull/9104)) by @gaston98765

- **[Workflow: JavaScript]** Fix security issue of script executing in `node:vm` mode ([#9084](https://github.com/nocobase/nocobase/pull/9084)) by @mytharcher

- **[Departments]**
  - Fixed department lists in department management not following the `sort` field order ([#9150](https://github.com/nocobase/nocobase/pull/9150)) by @2013xile

  - Fixed missing or stale main department values after saving user departments ([#9156](https://github.com/nocobase/nocobase/pull/9156)) by @2013xile

