### 🚀 Improvements

- **[undefined]** Clarified the default JavaScript Worker concurrency behavior and when to configure a concurrency limit ([#10317](https://github.com/nocobase/nocobase/pull/10317)) by @mytharcher
Reference: [JavaScript node](https://docs.nocobase.com/workflow/nodes/javascript)
- **[Workflow: JavaScript]** JavaScript workflow nodes now queue asynchronous Worker execution and limit per-process Worker concurrency to reduce resource spikes. ([#10280](https://github.com/nocobase/nocobase/pull/10280)) by @mytharcher

### 🐛 Bug Fixes

- **[Flow engine]**
  - Fixed popup record variables and association blocks for custom non-Sequelize data sources ([#10272](https://github.com/nocobase/nocobase/pull/10272)) by @gchust

  - Fixed incorrect variable resolution for form field values ([#10319](https://github.com/nocobase/nocobase/pull/10319)) by @gchust

- **[File manager]** Fixed file downloads failing after previewing cross-origin images when browser cache entries lack CORS response headers ([#10313](https://github.com/nocobase/nocobase/pull/10313)) by @mytharcher
Reference: [File Preview](https://github.com/nocobase/nocobase/blob/fix/file-manager-download-cors-cache/docs/docs/en/file-manager/file-preview/index.md) / [Aliyun OSS](https://github.com/nocobase/nocobase/blob/fix/file-manager-download-cors-cache/docs/docs/en/file-manager/storage/aliyun-oss.md)
