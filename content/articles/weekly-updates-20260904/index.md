Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase is currently updated across three branches: `main`, `next`, and `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: The most stable version to date, recommended for installation.
* `next`: Beta version, contains upcoming new features and has been preliminarily tested. There might be some known or unknown issues. It is mainly used to collect feedback from test users and further optimize features. Ideal for test users who want to experience new features early and provide feedback.
* `develop`: Alpha version, contains the latest feature code, may be incomplete or unstable, and is mainly used for internal development and rapid iteration. Suited for technical users interested in cutting-edge product capabilities, but not recommended for production use.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### v2.2.6

*Release date: 2026-09-02*

### 🚀 Improvements

- **[Migration manager]** Displayed migration file sizes with readable binary units instead of raw byte counts by @hongboji

### 🐛 Bug Fixes

- **[utils]** Prevent stored XSS in rich-text fields written through APIs and rendered in display or edit mode. ([#10425](https://github.com/nocobase/nocobase/pull/10425)) by @katherinehhh
- **[database]** Fixed SQL Server string filters failing to match literal square brackets and other `LIKE` wildcard characters ([#10436](https://github.com/nocobase/nocobase/pull/10436)) by @hongboji
- **[Collection field: Markdown(Vditor)]** Restore table actions in V2 Markdown Vditor fields. ([#10438](https://github.com/nocobase/nocobase/pull/10438)) by @katherinehhh
- **[File manager]** Fixed the missing file storage selector in v2 file collection create and edit forms. ([#10439](https://github.com/nocobase/nocobase/pull/10439)) by @katherinehhh
- **[File storage: S3(Pro)]** Fix S3 Pro multipart upload failures for backup files larger than 5 MB. by @mytharcher

### v2.2.5

*Release date: 2026-08-31*

### 🐛 Bug Fixes

- **[Workflow]**

  - Improve workflow task detail handling on mobile by using a full-width Drawer and responsive task-center presentation. ([#10428](https://github.com/nocobase/nocobase/pull/10428)) by @mytharcher
  - Optimized pending workflow job recovery by adding a composite index on job status and ID. ([#10427](https://github.com/nocobase/nocobase/pull/10427)) by @mytharcher
  - Fix schedule workflows in static mode running one more time after `endsOn` ([#10411](https://github.com/nocobase/nocobase/pull/10411)) by @Tespera
- **[Notification manager]** Fix workflow user recipient variables displaying `Variable parsing failed` and unify user selectors across workflow nodes. ([#10432](https://github.com/nocobase/nocobase/pull/10432)) by @mytharcher
- **[Workflow: Approval]**

  - Adapted approval task details and remote forms to narrow mobile viewports. by @mytharcher
  - Fix approval assignee variables displaying `Variable parsing failed` and reuse the shared workflow user selector. by @mytharcher

### v2.2.4

*Release date: 2026-08-28*

### 🐛 Bug Fixes

- **[AI: Knowledge base]** Fixed AI employees incorrectly reporting no knowledge-base access for root users by @hongboji
- **[Workflow: Approval]** Fixed the approval trigger-variable form not rendering for subflow nodes on v1 workflow pages. by @mytharcher
- **[DingTalk]** Fixed an issue where DingTalk Stream mode synchronization sources could not be submitted in the v1 client. by @chenzhizdt


## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### v2.3.0-beta.6

*Release date: 2026-08-31*

### 🐛 Bug Fixes

- **[Workflow]**

  - Optimized pending workflow job recovery by adding a composite index on job status and ID. ([#10427](https://github.com/nocobase/nocobase/pull/10427)) by @mytharcher
  - Fix schedule workflows in static mode running one more time after `endsOn` ([#10411](https://github.com/nocobase/nocobase/pull/10411)) by @Tespera
  - Improve workflow task detail handling on mobile by using a full-width Drawer and responsive task-center presentation. ([#10428](https://github.com/nocobase/nocobase/pull/10428)) by @mytharcher
- **[Notification manager]** Fix workflow user recipient variables displaying `Variable parsing failed` and unify user selectors across workflow nodes. ([#10432](https://github.com/nocobase/nocobase/pull/10432)) by @mytharcher
- **[Workflow: Approval]**

  - Fix approval assignee variables displaying `Variable parsing failed` and reuse the shared workflow user selector. by @mytharcher
  - Adapted approval task details and remote forms to narrow mobile viewports. by @mytharcher
- **[DingTalk]** Fixed an issue where DingTalk Stream mode synchronization sources could not be submitted in the v1 client. by @chenzhizdt

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### v2.4.0-alpha.3

*Release date: 2026-09-02*

### 🚀 Improvements

- **[AI employees]** Removed the persisted AI context data source settings and selector while keeping direct data source query capabilities. ([#10450](https://github.com/nocobase/nocobase/pull/10450)) by @cgyrock

### v2.4.0-alpha.2

*Release date: 2026-09-02*

### 🚀 Improvements

- **[undefined]** Corrected the root package license metadata to Apache-2.0 and raised the Node.js requirement to version 22 ([#10448](https://github.com/nocobase/nocobase/pull/10448)) by @hongboji
- **[DingTalk]** DingTalk ActionCard button links can now be configured to open in an external browser. by @chenzhizdt

### 🐛 Bug Fixes

- **[File manager]** Fixed AI employee workflow nodes failing to access NocoBase permanent file URLs and unnecessarily copying internal files to AI storage. ([#10408](https://github.com/nocobase/nocobase/pull/10408)) by @cgyrock
- **[AI employees]** Fixed an error that prevented business analysis reports containing charts from opening. ([#10440](https://github.com/nocobase/nocobase/pull/10440)) by @cgyrock

### v2.4.0-alpha.1

*Release date: 2026-09-02*

### 🚀 Improvements

- **[Migration manager]** Displayed migration file sizes with readable binary units instead of raw byte counts by @hongboji

### 🐛 Bug Fixes

- **[database]** Fixed SQL Server string filters failing to match literal square brackets and other `LIKE` wildcard characters ([#10436](https://github.com/nocobase/nocobase/pull/10436)) by @hongboji
- **[utils]** Prevent stored XSS in rich-text fields written through APIs and rendered in display or edit mode. ([#10425](https://github.com/nocobase/nocobase/pull/10425)) by @katherinehhh
- **[Collection field: Markdown(Vditor)]** Restore table actions in V2 Markdown Vditor fields. ([#10438](https://github.com/nocobase/nocobase/pull/10438)) by @katherinehhh
- **[File manager]** Fixed the missing file storage selector in v2 file collection create and edit forms. ([#10439](https://github.com/nocobase/nocobase/pull/10439)) by @katherinehhh
- **[File storage: S3(Pro)]** Fix S3 Pro multipart upload failures for backup files larger than 5 MB. by @mytharcher
