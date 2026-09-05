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

