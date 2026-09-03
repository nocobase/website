### 🚀 Improvements

- **[undefined]** Corrected the root package license metadata to Apache-2.0 and raised the Node.js requirement to version 22 ([#10448](https://github.com/nocobase/nocobase/pull/10448)) by @hongboji

- **[Migration manager]** Displayed migration file sizes with readable binary units instead of raw byte counts by @hongboji

- **[DingTalk]** DingTalk ActionCard button links can now be configured to open in an external browser. by @chenzhizdt

### 🐛 Bug Fixes

- **[utils]** Prevent stored XSS in rich-text fields written through APIs and rendered in display or edit mode. ([#10425](https://github.com/nocobase/nocobase/pull/10425)) by @katherinehhh

- **[database]** Fixed SQL Server string filters failing to match literal square brackets and other `LIKE` wildcard characters ([#10436](https://github.com/nocobase/nocobase/pull/10436)) by @hongboji

- **[File manager]**
  - Fixed the missing file storage selector in v2 file collection create and edit forms. ([#10439](https://github.com/nocobase/nocobase/pull/10439)) by @katherinehhh

  - Fixed AI employee workflow nodes failing to access NocoBase permanent file URLs and unnecessarily copying internal files to AI storage. ([#10408](https://github.com/nocobase/nocobase/pull/10408)) by @cgyrock

- **[Collection field: Markdown(Vditor)]** Restore table actions in V2 Markdown Vditor fields. ([#10438](https://github.com/nocobase/nocobase/pull/10438)) by @katherinehhh

- **[AI employees]** Fixed an error that prevented business analysis reports containing charts from opening. ([#10440](https://github.com/nocobase/nocobase/pull/10440)) by @cgyrock

- **[File storage: S3(Pro)]** Fix S3 Pro multipart upload failures for backup files larger than 5 MB. by @mytharcher

