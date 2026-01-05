### 🚀 Improvements

- **[Access control]** Improve permission checks when modifying nested association fields ([#7856](https://github.com/nocobase/nocobase/pull/7856)) by @2013xile

### 🐛 Bug Fixes

- **[client]**
  - fix refine logic for optional targetKey ([#8333](https://github.com/nocobase/nocobase/pull/8333)) by @katherinehhh

  - Fix the issue where association fields are not correct in `FilterAction` component ([#8295](https://github.com/nocobase/nocobase/pull/8295)) by @mytharcher

  - fix incorrect filter params for relation field Select in editable subtable ([#8335](https://github.com/nocobase/nocobase/pull/8335)) by @katherinehhh

- **[flow-engine]** Fix an issue where state pollution could occur when opening popups multiple times. ([#8327](https://github.com/nocobase/nocobase/pull/8327)) by @gchust

- **[database]** Fix object `appends` in `OptionsParser`, and increase `arrayLimit` for parameters ([#8328](https://github.com/nocobase/nocobase/pull/8328)) by @mytharcher

- **[Action: Import records]** Fix incorrect error message when a  unique constraint error is triggered during async XLSX import ([#8342](https://github.com/nocobase/nocobase/pull/8342)) by @cgyrock

- **[Data source: Main]** View collection metadata should include source field options ([#8337](https://github.com/nocobase/nocobase/pull/8337)) by @2013xile

- **[Action: Export records Pro]** Fix error when sub-applications execute async import/export tasks while the main application does not enable the import/export pro plugin by @cgyrock

- **[Workflow: Approval]** Fix the issue where filter fields not work correctly in tasks center by @mytharcher

- **[Email manager]** show reply all button and data scope supports filtering child messages. by @jiannx

