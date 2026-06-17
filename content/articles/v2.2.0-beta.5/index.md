### 🚀 Improvements

* **[cli]** Added schema version records for env configuration. ([#9782](https://github.com/nocobase/nocobase/pull/9782)) by @chenos
* **[File manager]** Improved PDF previews: cross-origin PDF files now use the browser-native preview, while same-origin PDF files continue to be rendered with PDF.js. ([#9796](https://github.com/nocobase/nocobase/pull/9796)) by @mytharcher

### 🐛 Bug Fixes

* **[client-v2]**
  * Fixed the issue where event flow settings could no longer be modified after a block was converted into a template. ([#9585](https://github.com/nocobase/nocobase/pull/9585)) by @gchust
  * Fixed the issue where checkbox dropdown options in v2 filter forms did not display translated text. ([#9792](https://github.com/nocobase/nocobase/pull/9792)) by @katherinehhh
  * Fixed incorrect display and format settings when the title field of a v2 table relation field used a time, date, or datetime field. ([#9785](https://github.com/nocobase/nocobase/pull/9785)) by @katherinehhh
* **[Flow engine]** Fixed incorrect data in current record forms and detail data inside popups during AI building. ([#9788](https://github.com/nocobase/nocobase/pull/9788)) by @gchust
* **[Workflow: Custom action event]** Fixed the issue where action panel v2 trigger workflow buttons still showed success and sent requests when no workflow was bound. ([#9798](https://github.com/nocobase/nocobase/pull/9798)) by @mytharcher
* **[AI employees]** Fixed the issue where AI employees could not correctly fill sub-table data. ([#9801](https://github.com/nocobase/nocobase/pull/9801)) by @gchust
