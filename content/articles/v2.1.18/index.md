### 🚀 Improvements

- **[cli]** Support manual Nginx/Caddy proxy config generation, allow Docker deployments without bundled Nginx, and align proxy and CDN-related runtime configuration. ([#9943](https://github.com/nocobase/nocobase/pull/9943)) by @chenos

- **[undefined]** Clarified the security guidance for PDF previews using external storage. ([#9901](https://github.com/nocobase/nocobase/pull/9901)) by @mytharcher
Reference: [File Preview](https://github.com/nocobase/nocobase/blob/docs/file-preview-security/docs/docs/en/file-manager/file-preview/index.md)
- **[utils]** Added warnings for server-side outbound requests that target potential SSRF-risk addresses when `SERVER_REQUEST_WHITELIST` is not configured. ([#9966](https://github.com/nocobase/nocobase/pull/9966)) by @mytharcher
Reference: [Environment Variables](https://docs.nocobase.com/get-started/installation/env), [Global Environment Variables](https://docs.nocobase.com/api/app/env)
- **[AI: Knowledge base]** Added ZIP filename encoding options for knowledge base document uploads to avoid garbled filenames in ZIP archives created with non-UTF-8 encodings. by @cgyrock

### 🐛 Bug Fixes

- **[client-v2]** Fix the issue where route subpages are blank or use incorrect spacing after refresh ([#9961](https://github.com/nocobase/nocobase/pull/9961)) by @zhangzhonghe

- **[Workflow]** Reduced unnecessary workflow dispatcher DB fetch retries under concurrent queue processing. ([#9953](https://github.com/nocobase/nocobase/pull/9953)) by @mytharcher

- **[Action: Export records]** Fixed XLSX exports so text-like field values that start with formula characters are escaped before being opened in Excel. ([#9973](https://github.com/nocobase/nocobase/pull/9973)) by @mytharcher

- **[AI employees]** Fixed LLM providers falling back to their default Base URL when the custom Base URL field is cleared. ([#9958](https://github.com/nocobase/nocobase/pull/9958)) by @cgyrock

- **[Data source: External NocoBase]** Fixed external NocoBase attachment uploads and updates in attachment fields by @2013xile

