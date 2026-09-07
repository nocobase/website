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

