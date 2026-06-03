### 🚀 Improvements

- **[client]** Enhanced autocomplete support for some built-in RunJS functions. ([#9481](https://github.com/nocobase/nocobase/pull/9481)) by @gchust
- **[undefined]** Updated the Embed NocoBase documentation for the open-source plugin. ([#9642](https://github.com/nocobase/nocobase/pull/9642)) by @zhangzhonghe
  Reference: [Embed NocoBase](https://docs.nocobase.com/en/integration/embed/)

### 🐛 Bug Fixes

- **[flow-engine]**

  - Fixed the issue where the page got stuck when setting field values for a subform. ([#9598](https://github.com/nocobase/nocobase/pull/9598)) by @gchust
  - Fixed an issue where the popup displayed outdated UI data after toggling the UI configuration mode switch. ([#9525](https://github.com/nocobase/nocobase/pull/9525)) by @gchust
- **[client]**

  - Fixed incorrect record action linkage rule behavior in table blocks. ([#9652](https://github.com/nocobase/nocobase/pull/9652)) by @gchust
  - Fixed the issue where selected relation field data was not displayed on mobile. ([#9665](https://github.com/nocobase/nocobase/pull/9665)) by @zhangzhonghe
  - Fixed the issue where fields became read-only when shown again after being hidden by linkage rules. ([#9649](https://github.com/nocobase/nocobase/pull/9649)) by @katherinehhh
- **[cli]** Fixed the nginx template to serve `.mjs` assets with the JavaScript MIME type. ([#9626](https://github.com/nocobase/nocobase/pull/9626)) by @mytharcher
- **[database]** Fixed an issue where importing numeric password values could fail. ([#9635](https://github.com/nocobase/nocobase/pull/9635)) by @2013xile
- **[AI employees]** Fixed AI provider base URL validation. ([#9667](https://github.com/nocobase/nocobase/pull/9667)) by @cgyrock
- **[Flow engine]**

  - Fixed an issue where dragging popup tabs to reorder them did not work. ([#9602](https://github.com/nocobase/nocobase/pull/9602)) by @gchust
  - Fixed an issue where modifying a block after duplicating its template could inadvertently affect the original block’s content. ([#9664](https://github.com/nocobase/nocobase/pull/9664)) by @gchust
- **[Notification: In-app message]** Fixed an SQL injection risk in the in-app notification channel timestamp filter. ([#9630](https://github.com/nocobase/nocobase/pull/9630)) by @mytharcher
- **[License settings]** Fixed the issue where the license settings page could hang for a long time when the pkg login check was slow or unreachable. ([#9650](https://github.com/nocobase/nocobase/pull/9650)) by @hongboji
- **[Workflow: JavaScript]** Clarified that Workflow JavaScript module support mode is unsafe and not a permission boundary. ([#9629](https://github.com/nocobase/nocobase/pull/9629)) by @mytharcher
  Reference: [Workflow JavaScript](docs/docs/en/workflow/nodes/javascript.md)
- **[Access control]** Fixed incomplete permissions on first login when a union role was the default role. ([#9632](https://github.com/nocobase/nocobase/pull/9632)) by @2013xile
- **[File manager]** Fixed local file storage path validation to prevent unsafe paths from escaping the configured storage root. ([#9628](https://github.com/nocobase/nocobase/pull/9628)) by @mytharcher
- **[Password policy]** Fixed an issue where password policy validation could fail for numeric password values. by @2013xile
