### 🚀 Improvements

- **[cli]**
  - Improved the Docker CLI setup by supporting configurable default NocoBase image registry/variant, fixing proxy and `no-nginx` image port compatibility, and adding Docker Nginx/Caddy installation guides. ([#9972](https://github.com/nocobase/nocobase/pull/9972)) by @chenos

  - Refactor CLI setup startup to reuse `nb app start`, normalize API base path redirects, persist shared env proxy defaults, and rebuild Docker proxy containers when published ports change. ([#9997](https://github.com/nocobase/nocobase/pull/9997)) by @chenos

### 🐛 Bug Fixes

- **[client-v2]**
  - Fixed Vditor asset loading in production by resolving plugin CDN paths from the effective webpack public path. ([#10008](https://github.com/nocobase/nocobase/pull/10008)) by @chenos

  - Fixed an issue where Quick Edit could fail to switch dropdown options when navigating between pages. ([#10007](https://github.com/nocobase/nocobase/pull/10007)) by @gchust

- **[flow-engine]** Fixed an issue where popup configuration became inconsistent when toggling design modes. ([#10005](https://github.com/nocobase/nocobase/pull/10005)) by @gchust

- **[File manager]** Reject active-content filenames during file upload unless the configured storage MIME type rule explicitly allows them. ([#9994](https://github.com/nocobase/nocobase/pull/9994)) by @mytharcher
Reference: [Local storage](docs/docs/en/file-manager/storage/local.md), [Security guide](docs/docs/en/security/guide.md)
- **[Data source: External MariaDB]** Fix Add all collections toggle in MySQL, MSSQL, and MariaDB external data source settings. by @katherinehhh

