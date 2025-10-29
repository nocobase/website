### 🚀 Improvements

- **[server]** Add gateway log ([#7683](https://github.com/nocobase/nocobase/pull/7683)) by @2013xile

- **[flow-engine]** Support define variable context in flow step definition ([#7674](https://github.com/nocobase/nocobase/pull/7674)) by @gchust

- **[Data visualization]**
  - add tip to run query before configuring chart options ([#7685](https://github.com/nocobase/nocobase/pull/7685)) by @heziqiang

  - refresh chart data on global preview button click ([#7678](https://github.com/nocobase/nocobase/pull/7678)) by @heziqiang

- **[AI employees]** Optimized AI coding experience, including using AI employee to review, diagnose, and fix code. ([#7679](https://github.com/nocobase/nocobase/pull/7679)) by @cgyrock

- **[Data source manager]** Adjust the column order of field type and interface, and add a confirmation step when making modifications. ([#7680](https://github.com/nocobase/nocobase/pull/7680)) by @2013xile

- **[Workflow]** Complete the bound workflow configuration for the update record action button ([#7668](https://github.com/nocobase/nocobase/pull/7668)) by @mytharcher

- **[Multi-app manager (deprecated)]** improve app supervisor ([#7661](https://github.com/nocobase/nocobase/pull/7661)) by @chenos

### 🐛 Bug Fixes

- **[client]**
  - Resolved an issue where users could not set default values for fields displayed in read-only mode. This ensures smoother field configuration when fields are not editable. ([#7689](https://github.com/nocobase/nocobase/pull/7689)) by @gchust

  - Fix known issues with subform linkage rules ([#7698](https://github.com/nocobase/nocobase/pull/7698)) by @zhangzhonghe

  - js block fields menu can't be loaded in filter form block ([#7690](https://github.com/nocobase/nocobase/pull/7690)) by @gchust

- **[flow-engine]** incorrect context selection of the current popup record when editing the data scope of an associated field inside an edit form ([#7675](https://github.com/nocobase/nocobase/pull/7675)) by @gchust

- **[Workflow: Manual node]** Fix the issue where manual tasks disappear after workflow disabled ([#7687](https://github.com/nocobase/nocobase/pull/7687)) by @mytharcher

- **[AI employees]** Fixed an issue where blocks with associated API resources did not fetch corresponding data when selected. ([#7688](https://github.com/nocobase/nocobase/pull/7688)) by @cgyrock

- **[Workflow]** Fix the issue where, after deleting a node that starts branching, the key of the first node retained within the branch was incorrectly changed to a new value ([#7665](https://github.com/nocobase/nocobase/pull/7665)) by @mytharcher

- **[Collection field: administrative divisions of China]** Data import fails when the city and area have the same name ([#7673](https://github.com/nocobase/nocobase/pull/7673)) by @2013xile

- **[File manager]** Fix the issue of `.msg` file can not be uploaded properly ([#7662](https://github.com/nocobase/nocobase/pull/7662)) by @mytharcher

- **[Flow engine]** not be able to resolve variables in linkage set fields action ([#7684](https://github.com/nocobase/nocobase/pull/7684)) by @gchust

- **[Data visualization]** use sql:runById API to fetch query data on initialization ([#7677](https://github.com/nocobase/nocobase/pull/7677)) by @heziqiang

- **[Workflow: Approval]** Fix the translation issue of the status text in approval completion notifications, using the system’s default language for translation when the user has not set a language preference by @mytharcher

