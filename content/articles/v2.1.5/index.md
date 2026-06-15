### 🎉 New Features

- **[Workflow: Mailer node]** Added support for sending attachments in workflow mailer nodes. ([#9724](https://github.com/nocobase/nocobase/pull/9724)) by @mytharcher

### 🚀 Improvements

- **[client-v2]** Relation field column data scopes in form subtables now support current item variables. ([#9444](https://github.com/nocobase/nocobase/pull/9444)) by @gchust
- **[undefined]** Unified the Chinese documentation name of the version control plugin as “版本控制”. ([#9776](https://github.com/nocobase/nocobase/pull/9776)) by @cgyrock
- **[File manager]** Added selectable text support to PDF previews in the file manager for PDFs with embedded text. ([#9781](https://github.com/nocobase/nocobase/pull/9781)) by @mytharcher
- **[Action: Bulk edit]** Optimized the loading method for v2 action plugins and kept the order of migrated action buttons stable. ([#9778](https://github.com/nocobase/nocobase/pull/9778)) by @katherinehhh
- **[Version control]** Changed the Chinese display name of the version control plugin to “版本控制”. by @cgyrock

### 🐛 Bug Fixes

- **[cli-v1]** Fixed an error when running `yarn dev` after upgrading projects created with create-nocobase-app from 2.0 to 2.1. ([#9775](https://github.com/nocobase/nocobase/pull/9775)) by @Molunerfinn
- **[client-v2]** Fixed the issue where migration progress did not show the dedicated progress view. ([#9761](https://github.com/nocobase/nocobase/pull/9761)) by @2013xile
- **[flow-engine]** Fixed Vietnamese and Chinese IME input issues in v2 single-line text and multiline text fields. ([#9764](https://github.com/nocobase/nocobase/pull/9764)) by @katherinehhh
- **[server]** Fixed unsafe plugin name handling in `pm:enable` to prevent local file inclusion risks during plugin resolution. ([#9701](https://github.com/nocobase/nocobase/pull/9701)) by @mytharcher
- **[File manager]** Fixed PDF preview failures caused by abnormal pdf.js worker module loading. ([#9779](https://github.com/nocobase/nocobase/pull/9779)) by @mytharcher
- **[Block: Kanban]** Fixed the issue where opening Calendar, Gantt, and Kanban blocks outside edit mode unexpectedly persisted hidden popup actions and repeatedly sent delete requests. ([#9772](https://github.com/nocobase/nocobase/pull/9772)) by @jiannx
- **[Action: Export records Pro]** Improved processing mode settings and explanatory prompts for v2 Import/Export Pro. by @katherinehhh
- **[Migration manager]** Fixed possible failures when importing large migration data files. by @2013xile
- **[Template print]** Rejected unsupported template file types before template printing starts. by @2013xile
