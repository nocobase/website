Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase is currently updated with three branches: `main` , `next` and `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：The most stable version to date, recommended for installation;
* `next`：Beta version, contains upcoming new features and has been preliminarily tested. There might be some known or unknown issues. It's mainly for test users to collect feedback and optimize functions further. Ideal for test users who want to experience new features early and give feedback;
* `develop`：Alpha version, contains the latest feature code, may be incomplete or unstable, mainly for internal dev and rapid iteration. Suited for tech users interested in product's cutting-edge, but with potential issues and incomplete functions. Not for production use.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.37](https://www.nocobase.com/en/blog/v2.0.37)

*Release date: 2026-04-14*

### 🚀 Improvements

- **[undefined]**

  - Add Table of Contents to French README ([#9037](https://github.com/nocobase/nocobase/pull/9037)) by @saraTabbane
  - Added TOC consistency across localized READMEs ([#9038](https://github.com/nocobase/nocobase/pull/9038)) by @gaston98765
  - Add Arabic translation for documentation homepage ([#9043](https://github.com/nocobase/nocobase/pull/9043)) by @gaston98765
  - Docs: add Arabic translation for get-started introduction pages ([#9044](https://github.com/nocobase/nocobase/pull/9044)) by @gaston98765
- **[client]** add form required verification switch ([#9060](https://github.com/nocobase/nocobase/pull/9060)) by @jiannx

### 🐛 Bug Fixes

- **[utils]** Add security control for server HTTP request sending, to avoid possible SSRF ([#9079](https://github.com/nocobase/nocobase/pull/9079)) by @mytharcher
  Reference: [Environment variables](https://docs.nocobase.com/get-started/installation/env)

### [v2.0.36](https://www.nocobase.com/en/blog/v2.0.36)

*Release date: 2026-04-10*

### 🐛 Bug Fixes

- **[client]** fix subtable adds many-to-many field error ([#9070](https://github.com/nocobase/nocobase/pull/9070)) by @jiannx
- **[flow-engine]** Fixed the problem that many-to-one fields from external data sources cannot be added in the table block ([#9068](https://github.com/nocobase/nocobase/pull/9068)) by @jiannx
- **[Notification manager]** Optimize in-app notification sending performance in workflow scenarios ([#9066](https://github.com/nocobase/nocobase/pull/9066)) by @mytharcher

### [v2.0.35](https://www.nocobase.com/en/blog/v2.0.35)

*Release date: 2026-04-09*

### 🐛 Bug Fixes

- **[client]** Fixed an issue where the record pickup popup from a sub-table’s selection button could not correctly resolve parent item variable values. ([#8996](https://github.com/nocobase/nocobase/pull/8996)) by @gchust
- **[Collection field: Code]** Correct the UI interface of the code fields ([#9061](https://github.com/nocobase/nocobase/pull/9061)) by @2013xile


## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.16](https://www.nocobase.com/en/blog/v2.1.0-alpha.16)

*Release date: 2026-04-14*

### 🚀 Improvements

- **[undefined]**

  - Added TOC consistency across localized READMEs ([#9038](https://github.com/nocobase/nocobase/pull/9038)) by @gaston98765
  - Add Table of Contents to French README ([#9037](https://github.com/nocobase/nocobase/pull/9037)) by @saraTabbane
- **[server]** Improved swagger API docs of plugin manager ([#9080](https://github.com/nocobase/nocobase/pull/9080)) by @2013xile

### 🐛 Bug Fixes

- **[AI employees]** Fixed the issue where error messages were not displayed in the AI employee conversations ([#9097](https://github.com/nocobase/nocobase/pull/9097)) by @cgyrock
- **[Access control]** update acl swagger for mcp server ([#9096](https://github.com/nocobase/nocobase/pull/9096)) by @Andrew1989Y

### [v2.1.0-alpha.15](https://www.nocobase.com/en/blog/v2.1.0-alpha.15)

*Release date: 2026-04-10*

### 🎉 New Features

- **[Block: Tree]** Add tree filter block ([#9016](https://github.com/nocobase/nocobase/pull/9016)) by @jiannx
- **[Auth: API keys]** add `pm list` and `generate-api-key` commands ([#9076](https://github.com/nocobase/nocobase/pull/9076)) by @chenos
- **[AI employees]**

  - Added a data query tool and business analysis report tool for AI employees ([#9040](https://github.com/nocobase/nocobase/pull/9040)) by @2013xile
  - Add an LLIM-based web search tool for AI employees ([#9032](https://github.com/nocobase/nocobase/pull/9032)) by @cgyrock
- **[Migration manager]** support migration command by @chenos
- **[Email manager]** gmail supports sending emails with aliases by @jiannx

### 🐛 Bug Fixes

- **[flow-engine]** Fixed the problem that many-to-one fields from external data sources cannot be added in the table block ([#9068](https://github.com/nocobase/nocobase/pull/9068)) by @jiannx
- **[client]**

  - fix subtable adds many-to-many field error ([#9070](https://github.com/nocobase/nocobase/pull/9070)) by @jiannx
  - Fixed an issue where the record pickup popup from a sub-table’s selection button could not correctly resolve parent item variable values. ([#8996](https://github.com/nocobase/nocobase/pull/8996)) by @gchust
  - Fixed an issue where an incorrect unsaved changes confirmation message would appear for bulk edit action ([#9054](https://github.com/nocobase/nocobase/pull/9054)) by @gchust
  - Fixed an issue where an incorrect secondary confirmation popup would appear when submitting the form after creating a record via a popup subtable. ([#9035](https://github.com/nocobase/nocobase/pull/9035)) by @gchust
  - Fixed the issue where ctx.request could not override the Authorization header. ([#8850](https://github.com/nocobase/nocobase/pull/8850)) by @gchust
- **[data-source-manager]** Fixed an issue where some field types were not updated correctly after syncing fields from the database ([#9046](https://github.com/nocobase/nocobase/pull/9046)) by @2013xile
- **[Notification manager]** Optimize in-app notification sending performance in workflow scenarios ([#9066](https://github.com/nocobase/nocobase/pull/9066)) by @mytharcher
- **[Collection field: Code]** Correct the UI interface of the code fields ([#9061](https://github.com/nocobase/nocobase/pull/9061)) by @2013xile
- **[Workflow: HTTP request node]** Sanitized workflow request node results to avoid exposing request config, defaulted new nodes to return response data only, and added debug logging for failed requests. ([#9024](https://github.com/nocobase/nocobase/pull/9024)) by @mytharcher
- **[AI employees]**

  - Fixed the issue where abort AI employees reasonning would cause the service to crash ([#9031](https://github.com/nocobase/nocobase/pull/9031)) by @cgyrock
  - Fix AI employee document upload failure under subpath access with APP_PUBLIC_PATH configured. ([#9034](https://github.com/nocobase/nocobase/pull/9034)) by @cgyrock
  - Fixed the issue when using Deepseek or MiniMax models on dashscope ([#9033](https://github.com/nocobase/nocobase/pull/9033)) by @cgyrock
