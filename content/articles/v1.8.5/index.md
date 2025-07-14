### 🚀 Improvements

- **[Collection field: Formula]** Add more calculable interfaces ([#7215](https://github.com/nocobase/nocobase/pull/7215)) by @mytharcher

- **[Workflow]** Use logging instead of throwing error when execution should not run due to status ([#7217](https://github.com/nocobase/nocobase/pull/7217)) by @mytharcher

- **[Workflow: Approval]** Support to delete approval when related data deleted by @mytharcher

### 🐛 Bug Fixes

- **[client]**
  - issue where attachment fields could not be selected as variables in linkage rule ([#7213](https://github.com/nocobase/nocobase/pull/7213)) by @zhangzhonghe

  - Fix the issue where dropdown select components are blocked by the keyboard on iOS ([#7149](https://github.com/nocobase/nocobase/pull/7149)) by @zhangzhonghe

  - value assignment fails in edit form when both value and options are set for select field ([#7209](https://github.com/nocobase/nocobase/pull/7209)) by @katherinehhh

  - Filter collapse: Filter is not triggered during page initialization after setting default values for fields ([#7206](https://github.com/nocobase/nocobase/pull/7206)) by @zhangzhonghe

  - error when assigning values in list block using kanban sort field ([#7208](https://github.com/nocobase/nocobase/pull/7208)) by @katherinehhh

  - Browser tab title is not synchronized when switching between submenus ([#7207](https://github.com/nocobase/nocobase/pull/7207)) by @zhangzhonghe

  - Popup action: Page display does not meet expectations after switching tabs ([#7212](https://github.com/nocobase/nocobase/pull/7212)) by @zhangzhonghe

- **[acl]** Fix error when deleting a role under role union mode that includes the root role. ([#7198](https://github.com/nocobase/nocobase/pull/7198)) by @aaaaaajie

- **[Multi-app manager]** Fix auth options in unexpected position ([#7210](https://github.com/nocobase/nocobase/pull/7210)) by @mytharcher

- **[Authentication]** Fix the issue where the login page cannot scroll ([#7159](https://github.com/nocobase/nocobase/pull/7159)) by @zhangzhonghe

- **[Workflow: Approval]** Fix associations when submit approval by @mytharcher

