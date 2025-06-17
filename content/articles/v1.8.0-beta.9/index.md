### 🚀 Improvements

- **[client]**
  - Auto-hide grid card block action bar when empty ([#7069](https://github.com/nocobase/nocobase/pull/7069)) by @zhangzhonghe

  - Logo container width adapts to content type (fixed 168px for images, auto width for text) ([#7075](https://github.com/nocobase/nocobase/pull/7075)) by @Cyx649312038

- **[Verification]** Remove verifier options from the response of the `verifiers:listByUser` API ([#7090](https://github.com/nocobase/nocobase/pull/7090)) by @2013xile

### 🐛 Bug Fixes

- **[client]**
  - required validation message in subtable persists when switching page ([#7080](https://github.com/nocobase/nocobase/pull/7080)) by @katherinehhh

  - style condition on subtable column fields not applied correctly ([#7083](https://github.com/nocobase/nocobase/pull/7083)) by @katherinehhh

  - decimal point lost after switching amount component from mask to inputNumer ([#7077](https://github.com/nocobase/nocobase/pull/7077)) by @katherinehhh

  - URL query parameter variables not working in public form field default value ([#7084](https://github.com/nocobase/nocobase/pull/7084)) by @katherinehhh

  - Filtering through relationship collection fields in filter forms is invalid ([#7070](https://github.com/nocobase/nocobase/pull/7070)) by @zhangzhonghe

  - incorrect Markdown (Vditor) rendering in subtable ([#7074](https://github.com/nocobase/nocobase/pull/7074)) by @katherinehhh

- **[database]** support association updates in updateOrCreate and firstOrCreate ([#7088](https://github.com/nocobase/nocobase/pull/7088)) by @chenos

- **[Collection field: Many to many (array)]** Updating a many to many (array) field throws an error when the `updatedBy` field is present ([#7089](https://github.com/nocobase/nocobase/pull/7089)) by @2013xile

- **[Collection field: Sequence]** Fix string based bigint sequence calculation ([#7079](https://github.com/nocobase/nocobase/pull/7079)) by @mytharcher

- **[Public forms]** Public forms: Fix unauthorized access issue on form submission ([#7085](https://github.com/nocobase/nocobase/pull/7085)) by @zhangzhonghe

