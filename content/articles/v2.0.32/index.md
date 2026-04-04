### 🚀 Improvements

- **[undefined]** Add table of contents to README ([#8878](https://github.com/nocobase/nocobase/pull/8878)) by @gaston98765

### 🐛 Bug Fixes

- **[client]**
  - subform relationship field failed to save ([#9004](https://github.com/nocobase/nocobase/pull/9004)) by @jiannx

  - the subforms of the fields do not display data ([#9008](https://github.com/nocobase/nocobase/pull/9008)) by @jiannx

  - Fixed the issue where ctx.request could not override the Authorization header. ([#8850](https://github.com/nocobase/nocobase/pull/8850)) by @gchust

- **[server]** Add serving check to avoid app status updated by non-serving instance ([#8959](https://github.com/nocobase/nocobase/pull/8959)) by @mytharcher

- **[AI employees]**
  - Fixed the issue when using deepseek or minmax models on dashscope ([#9033](https://github.com/nocobase/nocobase/pull/9033)) by @cgyrock

  - Fixed the issue where abort AI employees reasonning would cause the service to crash ([#9031](https://github.com/nocobase/nocobase/pull/9031)) by @cgyrock

- **[Workflow: HTTP request node]** Sanitized workflow request node results to avoid exposing request config, defaulted new nodes to return response data only, and added debug logging for failed requests. ([#9024](https://github.com/nocobase/nocobase/pull/9024)) by @mytharcher

- **[Collection field: Sort]** fix(field-sort): prevent crash when scopeKey attribute is undefined ([#9019](https://github.com/nocobase/nocobase/pull/9019)) by @gaston98765

- **[Block: GridCard]** Fixed the problem that the button is not refreshed when the grid card is refreshed ([#9021](https://github.com/nocobase/nocobase/pull/9021)) by @jiannx

- **[Workflow: Approval]**
  - Add fault-tolerant on workflow deleted, to avoid load error in tasks list by @mytharcher

  - Add fault-tolerant for no `latestRound` by @mytharcher

