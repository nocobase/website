### 🎉 New Features

- **[client]** add subtable (popup editing) field component ([#8280](https://github.com/nocobase/nocobase/pull/8280)) by @katherinehhh

- **[Workflow]** Add API for moving node ([#8507](https://github.com/nocobase/nocobase/pull/8507)) by @mytharcher

### 🚀 Improvements

- **[client]**
  - prevent full table re-render when updating a cell ([#8349](https://github.com/nocobase/nocobase/pull/8349)) by @katherinehhh

  - Improve to-many subform to initialize with a default item and avoid creating records when left empty ([#8458](https://github.com/nocobase/nocobase/pull/8458)) by @katherinehhh

- **[File manager]** Add extensible previewer for file manager ([#8501](https://github.com/nocobase/nocobase/pull/8501)) by @mytharcher

- **[Workflow]** Change the route path of workflow sub pages, to make all workflow pages under `/admin/settings/workflow` prefix ([#8519](https://github.com/nocobase/nocobase/pull/8519)) by @mytharcher

### 🐛 Bug Fixes

- **[client]**
  - Fix duplicated time in filter DateTime value ([#8506](https://github.com/nocobase/nocobase/pull/8506)) by @zhangzhonghe

  - Fixed an issue that prevented using form variables to assign values in linkage rules for multi-level to-many subform fields. ([#8518](https://github.com/nocobase/nocobase/pull/8518)) by @gchust

  - Fix an issue where data did not refresh after changes across multiple-level popups and across blocks. ([#8471](https://github.com/nocobase/nocobase/pull/8471)) by @gchust

  - fix issue where sub-detail data in read-only mode could not be displayed correctly in the edit form ([#8469](https://github.com/nocobase/nocobase/pull/8469)) by @katherinehhh

  - fix refine logic for optional targetKey ([#8333](https://github.com/nocobase/nocobase/pull/8333)) by @katherinehhh

  - fix incorrect filter params for relation field Select in editable subtable ([#8335](https://github.com/nocobase/nocobase/pull/8335)) by @katherinehhh

- **[flow-engine]** fix FilterByTK issue when filterTargetKey is a single-element array in external data source ([#8522](https://github.com/nocobase/nocobase/pull/8522)) by @katherinehhh

- **[AI employees]** fix issues of inconsistent selectable field configuration between AI modeling and data source management ([#8488](https://github.com/nocobase/nocobase/pull/8488)) by @cgyrock

- **[Email manager]** body does not collapse when text is selected.  fix download attachment failed by @jiannx

