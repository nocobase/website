Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase is currently updated with three branches: `main` , `next` and `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：The most stable version to date, recommended for installation;
* `next`：Beta version, contains upcoming new features and has been preliminarily tested. There might be some known or unknown issues. It's mainly for test users to collect feedback and optimize functions further. Ideal for test users who want to experience new features early and give feedback;
* `develop`：Alpha version, contains the latest feature code, may be incomplete or unstable, mainly for internal dev and rapid iteration. Suited for tech users interested in product's cutting-edge, but with potential issues and incomplete functions. Not for production use.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.19](https://www.nocobase.com/en/blog/v2.0.19)

*Release date: 2026-03-18*

### 🚀 Improvements

- **[Workflow]** Fix the issue where gracefully shutdown not drain all events ([#8894](https://github.com/nocobase/nocobase/pull/8894)) by @mytharcher

### 🐛 Bug Fixes

- **[AI employees]** Fix issue with specified URL for LLM service not taking effect in text embedding model calls. ([#8892](https://github.com/nocobase/nocobase/pull/8892)) by @cgyrock
- **[Action: Import records Pro]** Fix `beforeStop` event on sub app not fired by @mytharcher

### [v2.0.18](https://www.nocobase.com/en/blog/v2.0.18)

*Release date: 2026-03-17*

### 🎉 New Features

- **[AI employees]**

  - Scheduled cleanup of AI conversation checkpoint data. ([#8855](https://github.com/nocobase/nocobase/pull/8855)) by @cgyrock
  - Allows to add AI employees in popup of sub tables ([#8873](https://github.com/nocobase/nocobase/pull/8873)) by @2013xile
- **[App supervisor]** Support filtering in the application list<br />Add confirmation dialogs for start and stop actions<br />Sort application status entries by environment name by @2013xile

### 🚀 Improvements

- **[server]** improve pm add logic ([#8875](https://github.com/nocobase/nocobase/pull/8875)) by @chenos
- **[client]** Support showing confirm message before closing popup. ([#8839](https://github.com/nocobase/nocobase/pull/8839)) by @gchust
- **[Async task manager]** async tasks are added to support workers in post error messages ([#8849](https://github.com/nocobase/nocobase/pull/8849)) by @cgyrock

### 🐛 Bug Fixes

- **[client]** Fixed the issue where the “Select record” popup in the subtable failed to load correctly when opened the second time. ([#8865](https://github.com/nocobase/nocobase/pull/8865)) by @gchust
- **[AI employees]** Fixed potential undefined variable errors in AI plugin upgrade migration scripts. ([#8883](https://github.com/nocobase/nocobase/pull/8883)) by @cgyrock
- **[Action: Import records Pro]** Fix the issue where async tasks do not end after an error occurs in async import by @cgyrock

### [v2.0.17](https://www.nocobase.com/en/blog/v2.0.17)

*Release date: 2026-03-14*

### 🚀 Improvements

- **[undefined]** README ([#8866](https://github.com/nocobase/nocobase/pull/8866)) by @gaston98765

### 🐛 Bug Fixes

- **[client]** Fixed the issue where the default values of some fields did not take effect after refreshing the page. ([#8834](https://github.com/nocobase/nocobase/pull/8834)) by @gchust
- **[database]** Fix the server-side validation issue for date fields ([#8867](https://github.com/nocobase/nocobase/pull/8867)) by @2013xile
- **[Localization]** localizationTexts:missing interface permission exception ([#8861](https://github.com/nocobase/nocobase/pull/8861)) by @jiannx
- **[AI: Knowledge base]** Prevent the vector database and vector storage in use from being deleted. by @cgyrock

### [v2.0.16](https://www.nocobase.com/en/blog/v2.0.16)

*Release date: 2026-03-12*

### 🐛 Bug Fixes

- **[client]**

  - Fix connectable fields not displaying when linking data blocks under external data sources ([#8848](https://github.com/nocobase/nocobase/pull/8848)) by @zhangzhonghe
  - fixed table block height being invalid ([#8842](https://github.com/nocobase/nocobase/pull/8842)) by @jiannx
  - Fixed the issue where adding a data block or refreshing the page would trigger double refreshes. ([#8851](https://github.com/nocobase/nocobase/pull/8851)) by @gchust
- **[UI templates]** Fixed the errors occurred when using edit form block and detail block template. ([#8859](https://github.com/nocobase/nocobase/pull/8859)) by @gchust
- **[Form drafts]** Fixed the issue where form draft data was lost when the popup was opened multiple times. ([#8858](https://github.com/nocobase/nocobase/pull/8858)) by @gchust
- **[Localization]** unfound entries will not be submitted in the non-editing state of the page. ([#8841](https://github.com/nocobase/nocobase/pull/8841)) by @jiannx
- **[Action: Import records Pro]** Fixed the issue where multiple selections cannot be made for duplicate fields in the imported configuration. by @jiannx

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.9](https://www.nocobase.com/en/blog/v2.1.0-beta.9)

*Release date: 2026-03-12*

### 🐛 Bug Fixes

- **[client]**

  - fixed table block height being invalid ([#8842](https://github.com/nocobase/nocobase/pull/8842)) by @jiannx
  - Fixed the issue where adding a data block or refreshing the page would trigger double refreshes. ([#8851](https://github.com/nocobase/nocobase/pull/8851)) by @gchust
  - Fix connectable fields not displaying when linking data blocks under external data sources ([#8848](https://github.com/nocobase/nocobase/pull/8848)) by @zhangzhonghe
- **[UI templates]** Fixed the errors occurred when using edit form block and detail block template. ([#8859](https://github.com/nocobase/nocobase/pull/8859)) by @gchust
- **[Form drafts]** Fixed the issue where form draft data was lost when the popup was opened multiple times. ([#8858](https://github.com/nocobase/nocobase/pull/8858)) by @gchust
- **[Localization]** unfound entries will not be submitted in the non-editing state of the page. ([#8841](https://github.com/nocobase/nocobase/pull/8841)) by @jiannx
- **[Action: Import records Pro]** Fixed the issue where multiple selections cannot be made for duplicate fields in the imported configuration. by @jiannx
- **[Email manager]** reply and reply to all recipient adjustments, fixing table field addition failed and other issues by @jiannx
- **[Migration manager]** Fix the issue that system tables cannot be selected in custom rules by @cgyrock

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.9](https://www.nocobase.com/en/blog/v2.1.0-alpha.9)

*Release date: 2026-03-14*

### 🎉 New Features

- **[AI employees]** Allows to add AI employees in popup of sub tables ([#8873](https://github.com/nocobase/nocobase/pull/8873)) by @2013xile
- **[AI: MCP server]** Add a new MCP server plugin to allow building NocoBase systems and supporting business workflows. ([#8824](https://github.com/nocobase/nocobase/pull/8824)) by @2013xile

### 🚀 Improvements

- **[undefined]** README ([#8866](https://github.com/nocobase/nocobase/pull/8866)) by @gaston98765

### 🐛 Bug Fixes

- **[database]** Fix the server-side validation issue for date fields ([#8867](https://github.com/nocobase/nocobase/pull/8867)) by @2013xile
- **[client]**

  - Fix connectable fields not displaying when linking data blocks under external data sources ([#8848](https://github.com/nocobase/nocobase/pull/8848)) by @zhangzhonghe
  - Fixed the issue where adding a data block or refreshing the page would trigger double refreshes. ([#8851](https://github.com/nocobase/nocobase/pull/8851)) by @gchust
  - Fixed the issue where the default values of some fields did not take effect after refreshing the page. ([#8834](https://github.com/nocobase/nocobase/pull/8834)) by @gchust
  - fixed table block height being invalid ([#8842](https://github.com/nocobase/nocobase/pull/8842)) by @jiannx
- **[Localization]**

  - localizationTexts:missing interface permission exception ([#8861](https://github.com/nocobase/nocobase/pull/8861)) by @jiannx
  - unfound entries will not be submitted in the non-editing state of the page. ([#8841](https://github.com/nocobase/nocobase/pull/8841)) by @jiannx
- **[Form drafts]** Fixed the issue where form draft data was lost when the popup was opened multiple times. ([#8858](https://github.com/nocobase/nocobase/pull/8858)) by @gchust
- **[UI templates]** Fixed the errors occurred when using edit form block and detail block template. ([#8859](https://github.com/nocobase/nocobase/pull/8859)) by @gchust
- **[AI: Knowledge base]** Prevent the vector database and vector storage in use from being deleted. by @cgyrock
- **[Action: Import records Pro]** Fixed the issue where multiple selections cannot be made for duplicate fields in the imported configuration. by @jiannx
- **[Email manager]** reply and reply to all recipient adjustments, fixing table field addition failed and other issues by @jiannx
- **[Migration manager]** Fix the issue that system tables cannot be selected in custom rules by @cgyrock
