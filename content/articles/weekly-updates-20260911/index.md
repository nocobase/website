Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase is currently updated across three branches: `main`, `next`, and `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: The most stable version to date, recommended for installation.
* `next`: Beta version, contains upcoming new features and has been preliminarily tested. There might be some known or unknown issues. It is mainly used to collect feedback from test users and further optimize features. Ideal for test users who want to experience new features early and provide feedback.
* `develop`: Alpha version, contains the latest feature code, may be incomplete or unstable, and is mainly used for internal development and rapid iteration. Suited for technical users interested in cutting-edge product capabilities, but not recommended for production use.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### v2.2.10

*Release date: 2026-09-10*

### 🚀 Improvements

- **[utils]** Added an option to block server-side requests and redirects to literal IP addresses ([#10490](https://github.com/nocobase/nocobase/pull/10490)) by @2013xile
- **[client-v2]** Improve V2 form QR scanning reliability on iOS. ([#10456](https://github.com/nocobase/nocobase/pull/10456)) by @katherinehhh

### 🐛 Bug Fixes

- **[client-v2]** Hide unsupported built-in date variables from workflow create and update field assignments. ([#10442](https://github.com/nocobase/nocobase/pull/10442)) by @mytharcher
- **[server]** Fixed misleading preparing status when a subapp deployment environment is unavailable ([#10485](https://github.com/nocobase/nocobase/pull/10485)) by @2013xile
- **[Workflow: Delay node]** Fixed delay duration variable validation and report invalid resolved values instead of waiting unexpectedly. ([#10469](https://github.com/nocobase/nocobase/pull/10469)) by @mytharcher
- **[App supervisor]** Fixed subapp access failures after rolling updates or deployment environment changes by @2013xile

### v2.2.9

*Release date: 2026-09-09*

### 🐛 Bug Fixes

- **[client-v2]**

  - Fixed the v2 Update record field settings failing after an assigned field was deleted. ([#10483](https://github.com/nocobase/nocobase/pull/10483)) by @katherinehhh
  - Show the standard deleted-field warning for historical V2 field assignments. ([#10484](https://github.com/nocobase/nocobase/pull/10484)) by @katherinehhh
  - Fix filter forms not collapsing on mobile ([#10479](https://github.com/nocobase/nocobase/pull/10479)) by @zhangzhonghe
  - Support displaying to-many association fields as read-only subtables in client v2 forms. ([#10478](https://github.com/nocobase/nocobase/pull/10478)) by @katherinehhh
  - Fix nested association fields rendering blank in V2 forms when the parent relation uses dropdown selection. ([#10477](https://github.com/nocobase/nocobase/pull/10477)) by @katherinehhh
  - Fixed the inverse relationship type being editable in v2 field configuration. ([#10476](https://github.com/nocobase/nocobase/pull/10476)) by @katherinehhh
  - Fix interrupted option value input for custom radio and checkbox fields in filter forms ([#10480](https://github.com/nocobase/nocobase/pull/10480)) by @zhangzhonghe
  - Fix full-page reloads when opening settings pages ([#10474](https://github.com/nocobase/nocobase/pull/10474)) by @zhangzhonghe
- **[cli]** Restrict legacy local upload URLs to signed-in users by default, with an opt-in compatibility switch for public access. ([#10471](https://github.com/nocobase/nocobase/pull/10471)) by @mytharcher
- **[Data source manager]** Fixed the inverse-field option not remaining selected when editing a v2 relation field. ([#10482](https://github.com/nocobase/nocobase/pull/10482)) by @katherinehhh
- **[Flow engine]** Fixed non-admin variable resolution in form linkage rules, referenced templates, and scripts. ([#10467](https://github.com/nocobase/nocobase/pull/10467)) by @gchust
- **[Access control]** Fix role permissions so selecting a deeply nested menu also selects all parent menus ([#10473](https://github.com/nocobase/nocobase/pull/10473)) by @zhangzhonghe
- **[Block: Kanban]** Fixed an issue where newly created records were not immediately visible in the Kanban block. ([#10463](https://github.com/nocobase/nocobase/pull/10463)) by @gaurangagar
- **[Workflow: Approval]** Fix approval cards showing outdated content after saving an edited draft by @zhangzhonghe

### v2.2.8

*Release date: 2026-09-08*

### 🚀 Improvements

- **[WeCom]** Improved type safety and unified the notification recipient selector in the WeCom plugin. by @chenzhizdt

### 🐛 Bug Fixes

- **[server]** Fixed applications unexpectedly starting in environments where they were not deployed ([#10464](https://github.com/nocobase/nocobase/pull/10464)) by @2013xile
- **[Notification: In-app message]** Allow all workflow variable types in in-app notification titles and detail links. ([#10470](https://github.com/nocobase/nocobase/pull/10470)) by @mytharcher
- **[File manager]** Prevent file redirects from reusing expired signed storage URLs. ([#10475](https://github.com/nocobase/nocobase/pull/10475)) by @mytharcher
- **[Data source manager]** Added current user and current role variable selection to v2 permission data scopes ([#10472](https://github.com/nocobase/nocobase/pull/10472)) by @jiannx
- **[Workflow: JavaScript]** Fixed an issue where a timed-out JavaScript workflow node could incorrectly abort the workflow instead of respecting "Continue when exception thrown". ([#10461](https://github.com/nocobase/nocobase/pull/10461)) by @mytharcher
- **[AI employees]** Fixed AI employees repeatedly querying knowledge bases when the Knowledge Base Prompt omitted the retrieved-content placeholder, and added clear validation guidance when saving the configuration. ([#10413](https://github.com/nocobase/nocobase/pull/10413)) by @cgyrock
- **[AI: Knowledge base]** Fixed PGVector connection testing, ZIP import result display, document segment-setting inheritance, and validation for chunk overlap values in AI knowledge bases. by @cgyrock
- **[App supervisor]** Fixed exposure of sub-application authentication secrets in application management responses by @2013xile
- **[DingTalk]** Unified the DingTalk notification recipient selector. by @chenzhizdt

### v2.2.7

*Release date: 2026-09-05*

### 🎉 New Features

- **[AI: Knowledge base]** Added an authenticated knowledge base retrieval API and a built-in provider for connecting remote NocoBase knowledge bases. by @cgyrock

### 🚀 Improvements

- **[undefined]** Corrected the root package license metadata to Apache-2.0 and raised the Node.js requirement to version 22 ([#10448](https://github.com/nocobase/nocobase/pull/10448)) by @hongboji
- **[Notification: In-app message]** Fixed frontend freezing after selecting an in-app message or email channel in workflow v2 notification nodes ([#10445](https://github.com/nocobase/nocobase/pull/10445)) by @jiannx
- **[DingTalk]** DingTalk ActionCard button links can now be configured to open in an external browser. by @chenzhizdt

### 🐛 Bug Fixes

- **[Collection: SQL]** Restricted SQL collections from querying PostgreSQL system objects or executing multiple statements ([#10455](https://github.com/nocobase/nocobase/pull/10455)) by @2013xile
- **[Block: Comment]** Fixed the record comments block to display the commenter's nickname when using the Last modified by field ([#10446](https://github.com/nocobase/nocobase/pull/10446)) by @jiannx
- **[AI employees]**

  - Prevented Bedrock errors caused by aborted AI responses leaving tool calls without matching tool results. ([#10447](https://github.com/nocobase/nocobase/pull/10447)) by @cgyrock
  - Fixed an error that prevented business analysis reports containing charts from opening. ([#10440](https://github.com/nocobase/nocobase/pull/10440)) by @cgyrock
- **[Collection field: Markdown(Vditor)]** Fix Vditor detail fields to use HTML preview by default so Markdown images can be displayed. ([#10459](https://github.com/nocobase/nocobase/pull/10459)) by @mytharcher
- **[Data source manager]** Fix the missing record unique key setting in the v2 collection editor. ([#10453](https://github.com/nocobase/nocobase/pull/10453)) by @katherinehhh
- **[Workflow]** Fixed workflow user selection when a user-related collection uses its primary key as the user foreign key ([#10354](https://github.com/nocobase/nocobase/pull/10354)) by @mytharcher
- **[File manager]** Fixed AI employee workflow nodes failing to access NocoBase permanent file URLs and unnecessarily copying internal files to AI storage. ([#10408](https://github.com/nocobase/nocobase/pull/10408)) by @cgyrock
- **[AI: Knowledge base]** Knowledge base uploads now allow all document formats supported by the backend by @cgyrock
- **[Template print]** Fix dynamic image rendering for stable file URLs in template printing. by @hongboji

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### v2.3.0-beta.9

*Release date: 2026-09-10*

### 🚀 Improvements

- **[utils]** Added an option to block server-side requests and redirects to literal IP addresses ([#10490](https://github.com/nocobase/nocobase/pull/10490)) by @2013xile
- **[client-v2]** Improve V2 form QR scanning reliability on iOS. ([#10456](https://github.com/nocobase/nocobase/pull/10456)) by @katherinehhh
- **[WeCom]** Improved type safety and unified the notification recipient selector in the WeCom plugin. by @chenzhizdt

### 🐛 Bug Fixes

- **[client-v2]**

  - Hide unsupported built-in date variables from workflow create and update field assignments. ([#10442](https://github.com/nocobase/nocobase/pull/10442)) by @mytharcher
  - Fix full-page reloads when opening settings pages ([#10474](https://github.com/nocobase/nocobase/pull/10474)) by @zhangzhonghe
  - Fixed the v2 Update record field settings failing after an assigned field was deleted. ([#10483](https://github.com/nocobase/nocobase/pull/10483)) by @katherinehhh
  - Show the standard deleted-field warning for historical V2 field assignments. ([#10484](https://github.com/nocobase/nocobase/pull/10484)) by @katherinehhh
  - Fix interrupted option value input for custom radio and checkbox fields in filter forms ([#10480](https://github.com/nocobase/nocobase/pull/10480)) by @zhangzhonghe
  - Support displaying to-many association fields as read-only subtables in client v2 forms. ([#10478](https://github.com/nocobase/nocobase/pull/10478)) by @katherinehhh
  - Fix nested association fields rendering blank in V2 forms when the parent relation uses dropdown selection. ([#10477](https://github.com/nocobase/nocobase/pull/10477)) by @katherinehhh
  - Fixed the inverse relationship type being editable in v2 field configuration. ([#10476](https://github.com/nocobase/nocobase/pull/10476)) by @katherinehhh
  - Fix filter forms not collapsing on mobile ([#10479](https://github.com/nocobase/nocobase/pull/10479)) by @zhangzhonghe
- **[server]** Fixed misleading preparing status when a subapp deployment environment is unavailable ([#10485](https://github.com/nocobase/nocobase/pull/10485)) by @2013xile
- **[cli]** Restrict legacy local upload URLs to signed-in users by default, with an opt-in compatibility switch for public access. ([#10471](https://github.com/nocobase/nocobase/pull/10471)) by @mytharcher
- **[Workflow: Delay node]** Fixed delay duration variable validation and report invalid resolved values instead of waiting unexpectedly. ([#10469](https://github.com/nocobase/nocobase/pull/10469)) by @mytharcher
- **[Data source manager]**

  - Fixed the inverse-field option not remaining selected when editing a v2 relation field. ([#10482](https://github.com/nocobase/nocobase/pull/10482)) by @katherinehhh
  - Added current user and current role variable selection to v2 permission data scopes ([#10472](https://github.com/nocobase/nocobase/pull/10472)) by @jiannx
- **[Notification: In-app message]** Allow all workflow variable types in in-app notification titles and detail links. ([#10470](https://github.com/nocobase/nocobase/pull/10470)) by @mytharcher
- **[Access control]** Fix role permissions so selecting a deeply nested menu also selects all parent menus ([#10473](https://github.com/nocobase/nocobase/pull/10473)) by @zhangzhonghe
- **[Block: Kanban]** Fixed an issue where newly created records were not immediately visible in the Kanban block. ([#10463](https://github.com/nocobase/nocobase/pull/10463)) by @gaurangagar
- **[File manager]** Prevent file redirects from reusing expired signed storage URLs. ([#10475](https://github.com/nocobase/nocobase/pull/10475)) by @mytharcher
- **[Flow engine]** Fixed non-admin variable resolution in form linkage rules, referenced templates, and scripts. ([#10467](https://github.com/nocobase/nocobase/pull/10467)) by @gchust
- **[Workflow: Approval]** Fix approval cards showing outdated content after saving an edited draft by @zhangzhonghe
- **[App supervisor]** Fixed subapp access failures after rolling updates or deployment environment changes by @2013xile

### v2.3.0-beta.8

*Release date: 2026-09-07*

### 🎉 New Features

- **[AI: Knowledge base]** Added an authenticated knowledge base retrieval API and a built-in provider for connecting remote NocoBase knowledge bases. by @cgyrock

### 🚀 Improvements

- **[Notification: In-app message]** Fixed frontend freezing after selecting an in-app message or email channel in workflow v2 notification nodes ([#10445](https://github.com/nocobase/nocobase/pull/10445)) by @jiannx

### 🐛 Bug Fixes

- **[server]** Fixed applications unexpectedly starting in environments where they were not deployed ([#10464](https://github.com/nocobase/nocobase/pull/10464)) by @2013xile
- **[AI employees]**

  - Fixed AI employees repeatedly querying knowledge bases when the Knowledge Base Prompt omitted the retrieved-content placeholder, and added clear validation guidance when saving the configuration. ([#10413](https://github.com/nocobase/nocobase/pull/10413)) by @cgyrock
  - Prevented Bedrock errors caused by aborted AI responses leaving tool calls without matching tool results. ([#10447](https://github.com/nocobase/nocobase/pull/10447)) by @cgyrock
- **[Collection field: Markdown(Vditor)]** Fix Vditor detail fields to use HTML preview by default so Markdown images can be displayed. ([#10459](https://github.com/nocobase/nocobase/pull/10459)) by @mytharcher
- **[Collection: SQL]** Restricted SQL collections from querying PostgreSQL system objects or executing multiple statements ([#10455](https://github.com/nocobase/nocobase/pull/10455)) by @2013xile
- **[Block: Comment]** Fixed the record comments block to display the commenter's nickname when using the Last modified by field ([#10446](https://github.com/nocobase/nocobase/pull/10446)) by @jiannx
- **[Workflow]** Fixed workflow user selection when a user-related collection uses its primary key as the user foreign key ([#10354](https://github.com/nocobase/nocobase/pull/10354)) by @mytharcher
- **[Data source manager]** Fix the missing record unique key setting in the v2 collection editor. ([#10453](https://github.com/nocobase/nocobase/pull/10453)) by @katherinehhh
- **[Workflow: JavaScript]** Fixed an issue where a timed-out JavaScript workflow node could incorrectly abort the workflow instead of respecting "Continue when exception thrown". ([#10461](https://github.com/nocobase/nocobase/pull/10461)) by @mytharcher
- **[AI: Knowledge base]**

  - Knowledge base uploads now allow all document formats supported by the backend by @cgyrock
  - Fixed PGVector connection testing, ZIP import result display, document segment-setting inheritance, and validation for chunk overlap values in AI knowledge bases. by @cgyrock
- **[Template print]** Fix dynamic image rendering for stable file URLs in template printing. by @hongboji
- **[App supervisor]** Fixed exposure of sub-application authentication secrets in application management responses by @2013xile
- **[DingTalk]** Unified the DingTalk notification recipient selector. by @chenzhizdt

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### v2.4.0-alpha.5

*Release date: 2026-09-09*

### 🚀 Improvements

- **[WeCom]** Improved type safety and unified the notification recipient selector in the WeCom plugin. by @chenzhizdt

### 🐛 Bug Fixes

- **[client-v2]**

  - Support displaying to-many association fields as read-only subtables in client v2 forms. ([#10478](https://github.com/nocobase/nocobase/pull/10478)) by @katherinehhh
  - Fixed the inverse relationship type being editable in v2 field configuration. ([#10476](https://github.com/nocobase/nocobase/pull/10476)) by @katherinehhh
  - Fix nested association fields rendering blank in V2 forms when the parent relation uses dropdown selection. ([#10477](https://github.com/nocobase/nocobase/pull/10477)) by @katherinehhh
- **[cli]** Restrict legacy local upload URLs to signed-in users by default, with an opt-in compatibility switch for public access. ([#10471](https://github.com/nocobase/nocobase/pull/10471)) by @mytharcher
- **[Workflow: JavaScript]** Fixed an issue where a timed-out JavaScript workflow node could incorrectly abort the workflow instead of respecting "Continue when exception thrown". ([#10461](https://github.com/nocobase/nocobase/pull/10461)) by @mytharcher
- **[File manager]** Prevent file redirects from reusing expired signed storage URLs. ([#10475](https://github.com/nocobase/nocobase/pull/10475)) by @mytharcher
- **[Notification: In-app message]** Allow all workflow variable types in in-app notification titles and detail links. ([#10470](https://github.com/nocobase/nocobase/pull/10470)) by @mytharcher
- **[Data source manager]** Added current user and current role variable selection to v2 permission data scopes ([#10472](https://github.com/nocobase/nocobase/pull/10472)) by @jiannx
- **[Block: Kanban]** Fixed an issue where newly created records were not immediately visible in the Kanban block. ([#10463](https://github.com/nocobase/nocobase/pull/10463)) by @gaurangagar
- **[DingTalk]** Unified the DingTalk notification recipient selector. by @chenzhizdt

### v2.4.0-alpha.4

*Release date: 2026-09-06*

### 🎉 New Features

- **[AI: Knowledge base]** Added an authenticated knowledge base retrieval API and a built-in provider for connecting remote NocoBase knowledge bases. by @cgyrock

### 🚀 Improvements

- **[Notification: In-app message]** Fixed frontend freezing after selecting an in-app message or email channel in workflow v2 notification nodes ([#10445](https://github.com/nocobase/nocobase/pull/10445)) by @jiannx

### 🐛 Bug Fixes

- **[server]** Fixed applications unexpectedly starting in environments where they were not deployed ([#10464](https://github.com/nocobase/nocobase/pull/10464)) by @2013xile
- **[Collection field: Markdown(Vditor)]** Fix Vditor detail fields to use HTML preview by default so Markdown images can be displayed. ([#10459](https://github.com/nocobase/nocobase/pull/10459)) by @mytharcher
- **[AI employees]**

  - Fixed AI employees repeatedly querying knowledge bases when the Knowledge Base Prompt omitted the retrieved-content placeholder, and added clear validation guidance when saving the configuration. ([#10413](https://github.com/nocobase/nocobase/pull/10413)) by @cgyrock
  - Prevented Bedrock errors caused by aborted AI responses leaving tool calls without matching tool results. ([#10447](https://github.com/nocobase/nocobase/pull/10447)) by @cgyrock
- **[Block: Comment]** Fixed the record comments block to display the commenter's nickname when using the Last modified by field ([#10446](https://github.com/nocobase/nocobase/pull/10446)) by @jiannx
- **[Data source manager]** Fix the missing record unique key setting in the v2 collection editor. ([#10453](https://github.com/nocobase/nocobase/pull/10453)) by @katherinehhh
- **[Workflow]** Fixed workflow user selection when a user-related collection uses its primary key as the user foreign key ([#10354](https://github.com/nocobase/nocobase/pull/10354)) by @mytharcher
- **[Collection: SQL]** Restricted SQL collections from querying PostgreSQL system objects or executing multiple statements ([#10455](https://github.com/nocobase/nocobase/pull/10455)) by @2013xile
- **[AI: Knowledge base]**

  - Fixed PGVector connection testing, ZIP import result display, document segment-setting inheritance, and validation for chunk overlap values in AI knowledge bases. by @cgyrock
  - Knowledge base uploads now allow all document formats supported by the backend by @cgyrock
- **[Template print]** Fix dynamic image rendering for stable file URLs in template printing. by @hongboji
- **[App supervisor]** Fixed exposure of sub-application authentication secrets in application management responses by @2013xile
