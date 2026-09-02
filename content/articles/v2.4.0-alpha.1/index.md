### 🚀 Improvements

- **[Migration manager]** Displayed migration file sizes with readable binary units instead of raw byte counts by @hongboji

### 🐛 Bug Fixes

- **[database]** Fixed SQL Server string filters failing to match literal square brackets and other `LIKE` wildcard characters ([#10436](https://github.com/nocobase/nocobase/pull/10436)) by @hongboji

- **[utils]** Prevent stored XSS in rich-text fields written through APIs and rendered in display or edit mode. ([#10425](https://github.com/nocobase/nocobase/pull/10425)) by @katherinehhh

- **[Collection field: Markdown(Vditor)]** Restore table actions in V2 Markdown Vditor fields. ([#10438](https://github.com/nocobase/nocobase/pull/10438)) by @katherinehhh

- **[File manager]** Fixed the missing file storage selector in v2 file collection create and edit forms. ([#10439](https://github.com/nocobase/nocobase/pull/10439)) by @katherinehhh

- **[File storage: S3(Pro)]** Fix S3 Pro multipart upload failures for backup files larger than 5 MB. by @mytharcher

