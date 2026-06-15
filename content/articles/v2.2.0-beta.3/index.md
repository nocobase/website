### 🎉 New Features

- **[Workflow: mailer node]** Add attachment support to the workflow mailer node. ([#9724](https://github.com/nocobase/nocobase/pull/9724)) by @mytharcher

- **[Workflow]** Added workflow database transaction scope support. ([#9742](https://github.com/nocobase/nocobase/pull/9742)) by @mytharcher
Reference: [Database Transaction](docs/docs/en/workflow/nodes/transaction.md)
- **[Workflow: Database transaction node]** Added the database transaction workflow node plugin. by @mytharcher

### 🚀 Improvements

- **[client-v2]** Supported current item variables in the data scope of association field columns within form sub-tables. ([#9444](https://github.com/nocobase/nocobase/pull/9444)) by @gchust

- **[undefined]**
  - Updated the Chinese documentation label for the Version Control plugin. ([#9776](https://github.com/nocobase/nocobase/pull/9776)) by @cgyrock

  - Added Russian translations for new UI strings. ([#9771](https://github.com/nocobase/nocobase/pull/9771)) by @sembaev-a-a

- **[File manager]** Added selectable text support to the file manager PDF preview when the PDF contains embedded text. ([#9781](https://github.com/nocobase/nocobase/pull/9781)) by @mytharcher

- **[Users]** Improved the Users & Permissions v2 page layout and department tree behavior. ([#9780](https://github.com/nocobase/nocobase/pull/9780)) by @jiannx

- **[Action: Batch edit]** Improved v2 action plugin loading and kept migrated action buttons in a stable order. ([#9778](https://github.com/nocobase/nocobase/pull/9778)) by @katherinehhh

- **[Version control]** Updated the Chinese display name of the Version Control plugin. by @cgyrock

### 🐛 Bug Fixes

- **[cli-v1]** Fix the `yarn dev` error after upgrading projects created by `create-nocobase-app` from 2.0 to 2.1. ([#9775](https://github.com/nocobase/nocobase/pull/9775)) by @Molunerfinn

- **[flow-engine]** Fixed Vietnamese and Chinese IME input handling in v2 single-line text and textarea fields. ([#9764](https://github.com/nocobase/nocobase/pull/9764)) by @katherinehhh

- **[client-v2]** Fixed migration progress not showing its dedicated progress view ([#9761](https://github.com/nocobase/nocobase/pull/9761)) by @2013xile

- **[server]** Fixed unsafe plugin name handling in `pm:enable` to prevent local file inclusion through plugin resolution. ([#9701](https://github.com/nocobase/nocobase/pull/9701)) by @mytharcher

- **[Async task manager]** Fixed async task file download errors when the task id is missing from `filterByTk`. ([#9705](https://github.com/nocobase/nocobase/pull/9705)) by @mytharcher

- **[File manager]** Fixed PDF preview failures caused by the pdf.js worker module not loading correctly. ([#9779](https://github.com/nocobase/nocobase/pull/9779)) by @mytharcher

- **[Block: Kanban]** Fixed unexpected hidden popup action persistence and repeated destroy requests when opening calendar, gantt, and kanban blocks outside edit mode. ([#9772](https://github.com/nocobase/nocobase/pull/9772)) by @jiannx

- **[Action: Export records Pro]** Improved v2 import/export pro Processing mode settings and tooltip descriptions. by @katherinehhh

- **[Multi-space]** Fixed permission errors when space managers add users without access to the users email field. by @jiannx

- **[Migration manager]** Fixed failures when importing large migration data files by @2013xile

- **[Template print]** Rejected unsupported template file types before template printing starts by @2013xile

