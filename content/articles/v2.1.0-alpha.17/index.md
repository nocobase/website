### 🎉 New Features

- **[cli]** refactor NocoBase CLI ([#9122](https://github.com/nocobase/nocobase/pull/9122)) by @chenos

- **[AI employees]** Improve AI employees' ability to parse uploaded documents ([#9126](https://github.com/nocobase/nocobase/pull/9126)) by @cgyrock

### 🚀 Improvements

- **[undefined]**
  - Sync translated environment-variable and cluster-mode docs with the latest Chinese updates. ([#9115](https://github.com/nocobase/nocobase/pull/9115)) by @mytharcher

  - Docs: add Arabic translation for get-started introduction pages ([#9044](https://github.com/nocobase/nocobase/pull/9044)) by @gaston98765

  - Add Arabic translation for documentation homepage ([#9043](https://github.com/nocobase/nocobase/pull/9043)) by @gaston98765

- **[logger]** Add `referer` information to request logs ([#9110](https://github.com/nocobase/nocobase/pull/9110)) by @2013xile

- **[client]** add form required verification switch ([#9060](https://github.com/nocobase/nocobase/pull/9060)) by @jiannx

- **[Workflow: Manual node]** Use `simplePagination` on workflow tasks related collections for better list performance ([#9117](https://github.com/nocobase/nocobase/pull/9117)) by @mytharcher

- **[AI employees]** After AI employee block selection, fill form attachment into upload area ([#9127](https://github.com/nocobase/nocobase/pull/9127)) by @cgyrock

- **[Workflow: Approval]** Use `simplePagination` on `approvals` and `approvalRecords` collection for better list performance by @mytharcher

### 🐛 Bug Fixes

- **[client]**
  - Fixed the optional options of single-select fields in field rule configuration are empty ([#9119](https://github.com/nocobase/nocobase/pull/9119)) by @jiannx

  - Fixed an issue where the association field component was incorrect in the field value settings. ([#9063](https://github.com/nocobase/nocobase/pull/9063)) by @gchust

  - Fixed incorrect default value settings for sub table in form. ([#9087](https://github.com/nocobase/nocobase/pull/9087)) by @gchust

- **[utils]** Add security control for server HTTP request sending, to avoid possible SSRF ([#9079](https://github.com/nocobase/nocobase/pull/9079)) by @mytharcher
Reference: [Environment variables](https://docs.nocobase.com/get-started/installation/env)
- **[Workflow: Loop node]** Fix validations of workflow nodes ([#9111](https://github.com/nocobase/nocobase/pull/9111)) by @mytharcher

- **[Notification: In-app message]** Fix the issue where receiver select component works not correctly ([#9123](https://github.com/nocobase/nocobase/pull/9123)) by @mytharcher

- **[IdP: OAuth]** Fixed OAuth access for regular API requests ([#9120](https://github.com/nocobase/nocobase/pull/9120)) by @2013xile

- **[AI employees]**
  - Fixed aggregate query sorting dropped by ACL ([#9099](https://github.com/nocobase/nocobase/pull/9099)) by @2013xile

  - Fix the issue where the baseURL settings of google-gen-ai's LLM service does not take effect ([#9107](https://github.com/nocobase/nocobase/pull/9107)) by @cgyrock

- **[Email manager]** Remove form closing prompt after email is sent successfully by @jiannx

