### 🐛 Bug Fixes

- **[client-v2]**
  - Fix: sub-table fields were still editable after the field was set to disabled ([#10532](https://github.com/nocobase/nocobase/pull/10532)) by @katherinehhh

  - Fixed quick edit popover closing when collapsing a multi-select dropdown, and dropdown options covering the Submit button. ([#10536](https://github.com/nocobase/nocobase/pull/10536)) by @katherinehhh

- **[Departments]** Restricted department user directory access to authorized roles ([#10539](https://github.com/nocobase/nocobase/pull/10539)) by @2013xile

- **[Workflow]** Fixed workflow user selection search to query the API instead of filtering only loaded users. ([#10537](https://github.com/nocobase/nocobase/pull/10537)) by @mytharcher

- **[Block: Kanban]** Fixed modern kanban blocks not refreshing after adding records through the toolbar when no filters were active. ([#10525](https://github.com/nocobase/nocobase/pull/10525)) by @jiannx

- **[Email manager]** Prevent circular email reply relationships from blocking mail synchronization by @jiannx

