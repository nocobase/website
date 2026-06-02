### 🎉 New Features

- **[client-v2]** Add `TypedVariableInput` so v2 email plugin's SMTP port and secure mode fields can accept either a typed constant or a `{{ $env.X }}` variable. ([#9637](https://github.com/nocobase/nocobase/pull/9637)) by @Molunerfinn

- **[Access control]** Migrated the Users and Roles & Permissions settings pages to v2. ([#9619](https://github.com/nocobase/nocobase/pull/9619)) by @jiannx

### 🚀 Improvements

- **[undefined]** Update the Embed NocoBase documentation for the open source plugin ([#9642](https://github.com/nocobase/nocobase/pull/9642)) by @zhangzhonghe
Reference: [Embed NocoBase](https://docs.nocobase.com/en/integration/embed/)
- **[client]** Enhanced autocomplete support for some built-in RunJS functions. ([#9481](https://github.com/nocobase/nocobase/pull/9481)) by @gchust

- **[cli]** improve init and self update guidance ([#9633](https://github.com/nocobase/nocobase/pull/9633)) by @chenos

### 🐛 Bug Fixes

- **[client]**
  - Fix the issue where blocks may incorrectly show as deleted after refreshing the page ([#9662](https://github.com/nocobase/nocobase/pull/9662)) by @zhangzhonghe

  - Fixed incorrect record action linkage rule behavior in table block. ([#9652](https://github.com/nocobase/nocobase/pull/9652)) by @gchust

  - （linkage rule） fix fields becoming readonly when shown after being hidden ([#9649](https://github.com/nocobase/nocobase/pull/9649)) by @katherinehhh

- **[cli]** Fix nginx template to serve `.mjs` assets with JavaScript MIME type. ([#9626](https://github.com/nocobase/nocobase/pull/9626)) by @mytharcher

- **[database]** Fixed an issue where importing numeric password values could fail ([#9635](https://github.com/nocobase/nocobase/pull/9635)) by @2013xile

- **[flow-engine]**
  - Fixed an issue where the popup displayed outdated UI data after toggling the UI configuration mode switch. ([#9525](https://github.com/nocobase/nocobase/pull/9525)) by @gchust

  - Fix the issue where field search is cleared when hovering over association fields ([#9646](https://github.com/nocobase/nocobase/pull/9646)) by @zhangzhonghe

- **[client-v2]** preserve assign field values ([#9640](https://github.com/nocobase/nocobase/pull/9640)) by @katherinehhh

- **[File manager]** Fixed local file storage path validation to prevent unsafe paths from escaping the configured storage root. ([#9628](https://github.com/nocobase/nocobase/pull/9628)) by @mytharcher

- **[Block: Gantt]** Improved gantt tooltip placement to avoid covering task bars and aligned task labels consistently inside and outside bars ([#9638](https://github.com/nocobase/nocobase/pull/9638)) by @jiannx

- **[Access control]** Fixed incomplete permissions on first login when union role is the default ([#9632](https://github.com/nocobase/nocobase/pull/9632)) by @2013xile

- **[License settings]** Fixed the license settings page hanging for a long time when the pkg login check is slow or unreachable ([#9650](https://github.com/nocobase/nocobase/pull/9650)) by @hongboji

- **[Workflow: JavaScript]** Clarify that Workflow JavaScript module support mode is unsafe and not a permission boundary ([#9629](https://github.com/nocobase/nocobase/pull/9629)) by @mytharcher
Reference: [Workflow JavaScript](docs/docs/en/workflow/nodes/javascript.md)
- **[Password policy]** Fixed an issue where password policy validation could fail for numeric password values by @2013xile

