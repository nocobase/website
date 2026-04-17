### 🎉 New Features

- **[AI employees]**
  - Allows to add AI employees in popup of sub tables ([#8873](https://github.com/nocobase/nocobase/pull/8873)) by @2013xile

  - Scheduled cleanup of AI conversation checkpoint data. ([#8855](https://github.com/nocobase/nocobase/pull/8855)) by @cgyrock

- **[App supervisor]** Support filtering in the application list<br />Add confirmation dialogs for start and stop actions<br />Sort application status entries by environment name by @2013xile

### 🚀 Improvements

- **[server]** improve pm add logic ([#8875](https://github.com/nocobase/nocobase/pull/8875)) by @chenos

- **[undefined]** README ([#8866](https://github.com/nocobase/nocobase/pull/8866)) by @gaston98765

- **[client]** Support showing confirm message before closing popup. ([#8839](https://github.com/nocobase/nocobase/pull/8839)) by @gchust

- **[Workflow]** Fix the issue where gracefully shutdown not drain all events ([#8894](https://github.com/nocobase/nocobase/pull/8894)) by @mytharcher

- **[Async task manager]** async tasks are added to support workers in post error messages ([#8849](https://github.com/nocobase/nocobase/pull/8849)) by @cgyrock

### 🐛 Bug Fixes

- **[client]**
  - Fixed the issue where the “Select record” popup in the subtable failed to load correctly when opened the second time. ([#8865](https://github.com/nocobase/nocobase/pull/8865)) by @gchust

  - Fixed the issue where the default values of some fields did not take effect after refreshing the page. ([#8834](https://github.com/nocobase/nocobase/pull/8834)) by @gchust

- **[database]** Fix the server-side validation issue for date fields ([#8867](https://github.com/nocobase/nocobase/pull/8867)) by @2013xile

- **[Data source manager]** Fixed issue that collection created by AI employee always missing `createBy` and `updateBy` fields ([#8895](https://github.com/nocobase/nocobase/pull/8895)) by @cgyrock

- **[AI employees]**
  - Fix issue with specified URL for LLM service not taking effect in text embedding model calls. ([#8892](https://github.com/nocobase/nocobase/pull/8892)) by @cgyrock

  - Fixed potential undefined variable errors in AI plugin upgrade migration scripts. ([#8883](https://github.com/nocobase/nocobase/pull/8883)) by @cgyrock

- **[Localization]** localizationTexts:missing interface permission exception ([#8861](https://github.com/nocobase/nocobase/pull/8861)) by @jiannx

- **[Action: Import records Pro]**
  - Fix `beforeStop` event on sub app not fired by @mytharcher

  - Fix lazy import caused SES error by @mytharcher

  - Fix the issue where async tasks do not end after an error occurs in async import by @cgyrock

- **[AI: Knowledge base]** Prevent the vector database and vector storage in use from being deleted. by @cgyrock

- **[Template print]** Fix sql collection printing error by @jiannx

- **[Email manager]** Fixed page error when the email does not exist by @jiannx

