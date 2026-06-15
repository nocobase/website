### 🎉 New Features

* **[Workflow: Mailer node]** Added support for sending attachments in workflow mailer nodes. ([#9724](https://github.com/nocobase/nocobase/pull/9724)) by @mytharcher
* **[Workflow]** Added support for database transaction scopes in workflows. ([#9742](https://github.com/nocobase/nocobase/pull/9742)) by @mytharcher
  Reference: [Database transactions](docs/docs/en/workflow/nodes/transaction.md)
* **[Workflow: Database transaction node]** Added a database transaction workflow node plugin. by @mytharcher

### 🚀 Improvements

* **[client-v2]** Relation field columns in form subtables now support current item variables in data scopes. ([#9444](https://github.com/nocobase/nocobase/pull/9444)) by @gchust
* **[undefined]** Unified the Chinese documentation name of the Version control plugin as “版本控制”. ([#9776](https://github.com/nocobase/nocobase/pull/9776)) by @cgyrock
* **[File manager]** Added selectable text support to PDF previews in File manager for PDFs with embedded text. ([#9781](https://github.com/nocobase/nocobase/pull/9781)) by @mytharcher
* **[Users]** Improved the layout of the v2 Users and Permissions pages and optimized department tree behavior. ([#9780](https://github.com/nocobase/nocobase/pull/9780)) by @jiannx
* **[Action: Bulk edit]** Optimized how v2 action plugins are loaded and kept the order of migrated action buttons stable. ([#9778](https://github.com/nocobase/nocobase/pull/9778)) by @katherinehhh
* **[Version control]** Renamed the Chinese display name of the Version control plugin to “版本控制”. by @cgyrock

### 🐛 Bug Fixes

* **[cli-v1]** Fixed an error when running `<span>yarn dev</span>` after upgrading projects created with create-nocobase-app from 2.0 to 2.1. ([#9775](https://github.com/nocobase/nocobase/pull/9775)) by @Molunerfinn
* **[flow-engine]** Fixed Vietnamese and Chinese IME input issues in v2 single-line text and multiline text fields. ([#9764](https://github.com/nocobase/nocobase/pull/9764)) by @katherinehhh
* **[client-v2]** Fixed the issue where migration progress did not display the dedicated progress view. ([#9761](https://github.com/nocobase/nocobase/pull/9761)) by @2013xile
* **[server]** Fixed unsafe plugin name handling in `<span>pm:enable</span>` to avoid local file inclusion risks during plugin resolution. ([#9701](https://github.com/nocobase/nocobase/pull/9701)) by @mytharcher
* **[Async task manager]** Fixed database query errors caused by missing `<span>filterByTk</span>` when downloading async task files. ([#9705](https://github.com/nocobase/nocobase/pull/9705)) by @mytharcher
* **[File manager]** Fixed PDF preview failures caused by abnormal loading of the pdf.js worker module. ([#9779](https://github.com/nocobase/nocobase/pull/9779)) by @mytharcher
* **[Block: Kanban]** Fixed the issue where opening Calendar, Gantt, and Kanban blocks in non-edit mode unexpectedly persisted hidden popup actions and repeatedly sent delete requests. ([#9772](https://github.com/nocobase/nocobase/pull/9772)) by @jiannx
* **[Action: Export records Pro]** Improved the processing mode settings and help text for v2 Import/Export Pro. by @katherinehhh
* **[Multi-space]** Fixed the issue where space administrators could not add space users when they did not have permission for the user email field. by @jiannx
* **[Migration manager]** Fixed possible failures when importing large migration data files. by @2013xile
* **[Template print]** Rejected unsupported template file types before template printing starts. by @2013xile
