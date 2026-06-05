### 🎉 New Features

- **[client-v2]** Added `TypedVariableInput` so the SMTP port and secure mode fields in the v2 email plugin can accept either typed constants or `{{ $env.X }}` variables. ([#9637](https://github.com/nocobase/nocobase/pull/9637)) by @Molunerfinn
- **[Access control]** Migrated the Users and Roles & Permissions settings pages to v2. ([#9619](https://github.com/nocobase/nocobase/pull/9619)) by @jiannx

### 🚀 Improvements

- **[server]** The modern client is now served under `/v/` instead of `/v2/`. ([#9674](https://github.com/nocobase/nocobase/pull/9674)) by @Molunerfinn
- **[ai]** Upgraded `xlsx` to avoid security issues. ([#9675](https://github.com/nocobase/nocobase/pull/9675)) by @mytharcher
- **[client]** Enhanced autocomplete support for some built-in RunJS functions. ([#9481](https://github.com/nocobase/nocobase/pull/9481)) by @gchust
- **[cli]** Improved init and self-update guidance. ([#9633](https://github.com/nocobase/nocobase/pull/9633)) by @chenos
- **[undefined]** Updated the Embed NocoBase documentation for the open-source plugin. ([#9642](https://github.com/nocobase/nocobase/pull/9642)) by @zhangzhonghe
  Reference: [Embed NocoBase](https://docs.nocobase.com/en/integration/embed/)
- **[Departments]** Added a v2 settings page for managing departments, department members, and user department assignments. ([#9660](https://github.com/nocobase/nocobase/pull/9660)) by @jiannx
- **[Auth: SAML 2.0]** SAML/CAS sign-in redirects now follow the modern client prefix. by @Molunerfinn
- **[Action: Import records Pro]** Upgraded `xlsx` to avoid security issues. by @mytharcher
- **[Auth: OIDC]** OIDC sign-in redirects now follow the modern client prefix. by @Molunerfinn
- **[Workflow: Approval]** Adjusted validation rules for approval trigger and node configurations to ensure UI-related fields exist. by @mytharcher

### 🐛 Bug Fixes

- **[client-v2]**

  - Fixed v2 table columns becoming invisible when the custom column width was set to 0. ([#9689](https://github.com/nocobase/nocobase/pull/9689)) by @katherinehhh
  - Adjusted all relation field selectors to limit association fields to a maximum of two levels. ([#9454](https://github.com/nocobase/nocobase/pull/9454)) by @jiannx
  - Fixed menu linkage rule save errors. ([#9666](https://github.com/nocobase/nocobase/pull/9666)) by @zhangzhonghe
  - Fixed excessive spacing above blocks on v2 pages. ([#9647](https://github.com/nocobase/nocobase/pull/9647)) by @zhangzhonghe
  - Preserved assigned field values. ([#9640](https://github.com/nocobase/nocobase/pull/9640)) by @katherinehhh
- **[client]**

  - Fixed the error when saving a tree relation field in a referenced form template. ([#9643](https://github.com/nocobase/nocobase/pull/9643)) by @zhangzhonghe
  - Fixed the issue where selected relation field data was not displayed on mobile. ([#9665](https://github.com/nocobase/nocobase/pull/9665)) by @zhangzhonghe
  - Fixed the issue where blocks could incorrectly appear as deleted after refreshing the page. ([#9662](https://github.com/nocobase/nocobase/pull/9662)) by @zhangzhonghe
  - Fixed incorrect record action linkage rule behavior in table blocks. ([#9652](https://github.com/nocobase/nocobase/pull/9652)) by @gchust
  - Fixed the issue where fields became read-only when shown again after being hidden by linkage rules. ([#9649](https://github.com/nocobase/nocobase/pull/9649)) by @katherinehhh
- **[flow-engine]**

  - Fixed the issue where the page got stuck when setting field values for a subform. ([#9598](https://github.com/nocobase/nocobase/pull/9598)) by @gchust
  - Fixed an issue where the popup displayed outdated UI data after toggling the UI configuration mode switch. ([#9525](https://github.com/nocobase/nocobase/pull/9525)) by @gchust
  - Fixed the issue where field search was cleared when hovering over association fields. ([#9646](https://github.com/nocobase/nocobase/pull/9646)) by @zhangzhonghe
- **[cli]** Fixed the nginx template to serve `.mjs` assets with the JavaScript MIME type. ([#9626](https://github.com/nocobase/nocobase/pull/9626)) by @mytharcher
- **[database]** Fixed an issue where importing numeric password values could fail. ([#9635](https://github.com/nocobase/nocobase/pull/9635)) by @2013xile
- **[Collection: SQL]**

  - Blocked SQL Collection access to sensitive PostgreSQL metadata. ([#9683](https://github.com/nocobase/nocobase/pull/9683)) by @2013xile
- **[Data source manager]** Fixed multi-space field localization in the v2 data source manager. ([#9690](https://github.com/nocobase/nocobase/pull/9690)) by @jiannx
- **[AI employees]**

  - Hid raw LLM provider errors from frontend messages. ([#9678](https://github.com/nocobase/nocobase/pull/9678)) by @cgyrock
  - Workflow AI employee nodes can now use the default model. ([#9679](https://github.com/nocobase/nocobase/pull/9679)) by @cgyrock
  - Fixed AI provider base URL validation. ([#9667](https://github.com/nocobase/nocobase/pull/9667)) by @cgyrock
  - Fixed `ctx.get` errors in AI employee workflow nodes. ([#9661](https://github.com/nocobase/nocobase/pull/9661)) by @cgyrock
- **[Action: Duplicate record]** Fixed the issue where the button state was not reset when duplicate record submission failed. ([#9676](https://github.com/nocobase/nocobase/pull/9676)) by @katherinehhh
- **[Workflow: Custom action event]** Fixed the issue where the workflow trigger action was missing from the workbench action panel button list. ([#9682](https://github.com/nocobase/nocobase/pull/9682)) by @katherinehhh
- **[Calendar]** Fixed the issue where calendar event colors were not rendered from the configured color field in v2 pages. ([#9677](https://github.com/nocobase/nocobase/pull/9677)) by @jiannx
- **[Notification: In-app message]** Fixed an SQL injection risk in the in-app notification channel timestamp filter. ([#9630](https://github.com/nocobase/nocobase/pull/9630)) by @mytharcher
- **[Flow engine]**

  - Fixed an issue where dragging popup tabs to reorder them did not work. ([#9602](https://github.com/nocobase/nocobase/pull/9602)) by @gchust
  - Fixed an issue where modifying a block after duplicating its template could inadvertently affect the original block’s content. ([#9664](https://github.com/nocobase/nocobase/pull/9664)) by @gchust
- **[License settings]** Fixed the issue where the license settings page could hang for a long time when the pkg login check was slow or unreachable. ([#9650](https://github.com/nocobase/nocobase/pull/9650)) by @hongboji
- **[Access control]** Fixed incomplete permissions on first login when a union role was the default role. ([#9632](https://github.com/nocobase/nocobase/pull/9632)) by @2013xile
- **[Block: Gantt]** Improved Gantt tooltip placement to avoid covering task bars and aligned task labels consistently inside and outside bars. ([#9638](https://github.com/nocobase/nocobase/pull/9638)) by @jiannx
- **[Workflow: JavaScript]** Clarified that Workflow JavaScript module support mode is unsafe and not a permission boundary. ([#9629](https://github.com/nocobase/nocobase/pull/9629)) by @mytharcher
  Reference: [Workflow JavaScript](docs/docs/en/workflow/nodes/javascript.md)
- **[File manager]** Fixed local file storage path validation to prevent unsafe paths from escaping the configured storage root. ([#9628](https://github.com/nocobase/nocobase/pull/9628)) by @mytharcher
- **[Password policy]**

  - Fixed sign-in failures masking the real error with "argument #1 unsupported type undefined" when the underlying error had no status code. by @Molunerfinn
  - Fixed an issue where password policy validation could fail for numeric password values. by @2013xile
- **[Data source: REST API]** Fixed REST API data source plugin declaration build failures caused by mismatched data source manager client-v2 type declarations. by @katherinehhh
