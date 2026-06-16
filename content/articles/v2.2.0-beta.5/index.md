### 🚀 Improvements

- **[cli]** add env config schema version ([#9782](https://github.com/nocobase/nocobase/pull/9782)) by @chenos

- **[File manager]** Improved PDF previews by using the browser-native viewer for cross-origin PDF files while keeping same-origin PDF files rendered with PDF.js. ([#9796](https://github.com/nocobase/nocobase/pull/9796)) by @mytharcher

### 🐛 Bug Fixes

- **[client-v2]**
  - Fixed the issue that not able to update event flow settings after saving block as template. ([#9585](https://github.com/nocobase/nocobase/pull/9585)) by @gchust

  - Fixed untranslated Yes/No options in v2 filter form checkbox dropdowns. ([#9792](https://github.com/nocobase/nocobase/pull/9792)) by @katherinehhh

  - Fixed incorrect display and format settings when v2 table association title fields use time, date-only, or datetime fields. ([#9785](https://github.com/nocobase/nocobase/pull/9785)) by @katherinehhh

- **[Flow engine]** Fixed an issue where current record forms and details in popup could contain incorrect data if built by AI. ([#9788](https://github.com/nocobase/nocobase/pull/9788)) by @gchust

- **[Workflow: Custom action event]** Fixed action panel v2 trigger workflow buttons showing success and sending a request when no workflow is bound. ([#9798](https://github.com/nocobase/nocobase/pull/9798)) by @mytharcher

- **[AI employees]** Fixed an issue where AI employees could not correctly fill sub-table data. ([#9801](https://github.com/nocobase/nocobase/pull/9801)) by @gchust

