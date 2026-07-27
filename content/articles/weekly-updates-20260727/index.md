Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase is currently updated across three branches: `main`, `next`, and `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: The most stable version to date, recommended for installation.
* `next`: Beta version, contains upcoming new features and has been preliminarily tested. There might be some known or unknown issues. It is mainly used to collect feedback from test users and further optimize features. Ideal for test users who want to experience new features early and provide feedback.
* `develop`: Alpha version, contains the latest feature code, may be incomplete or unstable, and is mainly used for internal development and rapid iteration. Suited for technical users interested in cutting-edge product capabilities, but not recommended for production use.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### v2.1.30

*Release date: 2026-07-24*

### 🚀 Improvements

- **[client-v2]** Improved v2 QR code and barcode scan recognition, camera lifecycle safety, and responsive preview behavior. ([#10145](https://github.com/nocobase/nocobase/pull/10145)) by @katherinehhh
- **[client]** Added Myanmar (`my-MM`) to the legacy System Settings language selector. ([#10153](https://github.com/nocobase/nocobase/pull/10153)) by @hongboji
- **[Workflow: Approval]**

  - Added usage instructions and card-style workflow selection to the approval initiation list by @mytharcher
  - Improved the approval timeline with clearer status badges, timing details, user avatars, responsive layout, and connected submission rounds by @mytharcher

### 🐛 Bug Fixes

- **[client-v2]**

  - Fix RunJS values not taking effect in client v2 date range limits. ([#10157](https://github.com/nocobase/nocobase/pull/10157)) by @katherinehhh
  - Improve error messages for unsupported and missing pages in the `/v/` branch ([#10159](https://github.com/nocobase/nocobase/pull/10159)) by @zhangzhonghe
  - Fix v2 table action titles being reverted after linkage refresh. ([#10140](https://github.com/nocobase/nocobase/pull/10140)) by @katherinehhh
  - Fixed required association values being cleared after selection in popup sub-table forms with parent-item data scopes. ([#10146](https://github.com/nocobase/nocobase/pull/10146)) by @katherinehhh
  - Fix record picker lists not refreshing after creating a record in client v2. ([#10142](https://github.com/nocobase/nocobase/pull/10142)) by @katherinehhh
- **[flow-engine]**

  - Fix v2 block configuration dropdowns closing when clicking their active trigger. ([#10143](https://github.com/nocobase/nocobase/pull/10143)) by @katherinehhh
  - Fixed untranslated default text in secondary confirmation settings when using Simplified Chinese ([#10149](https://github.com/nocobase/nocobase/pull/10149)) by @mytharcher
- **[Authentication]**

  - Fixed an intermittent database connection error during application shutdown when Redis cache is enabled ([#10151](https://github.com/nocobase/nocobase/pull/10151)) by @mytharcher
  - Fixed incorrect SSO redirects for sub-applications using custom domains ([#10170](https://github.com/nocobase/nocobase/pull/10170)) by @2013xile
- **[AI employees]** Prevented Nathan from reporting malformed or unchanged code patches as successfully applied ([#10174](https://github.com/nocobase/nocobase/pull/10174)) by @2013xile
- **[Collection field: Sequence]** Fixed v2 sequence rule options not saving entered values and fixed-text rules incorrectly reporting a required-field error. ([#10156](https://github.com/nocobase/nocobase/pull/10156)) by @katherinehhh
- **[Backup manager]** Fix missing visible error notifications when Backup Manager restore requests fail in the v2 client. ([#10158](https://github.com/nocobase/nocobase/pull/10158)) by @katherinehhh
- **[Block: Kanban]** Fixed Calendar and Kanban popup templates not taking effect or being cleared incorrectly when using copied popup templates ([#9856](https://github.com/nocobase/nocobase/pull/9856)) by @jiannx
- **[App SSO]** Fixed App SSO failures when the public issuer is unreachable from sub-application servers by @2013xile
- **[Auth: OIDC]** Fixed incorrect redirects after OIDC login through a sub-application custom domain by @2013xile
- **[Workflow: Approval]** Hide approval configuration controls when UI Editor is off by @zhangzhonghe

### v2.1.29

*Release date: 2026-07-21*

### 🚀 Improvements

- **[Workflow: Approval]** Approval notification channels can now be searched remotely by title by @mytharcher

### 🐛 Bug Fixes

- **[flow-engine]** Fixed an issue where the Add Block menu could unexpectedly disappear while searching. ([#10097](https://github.com/nocobase/nocobase/pull/10097)) by @gchust
- **[client-v2]**

  - Fixed full and specified height settings not working for JS Blocks displayed with a card ([#10126](https://github.com/nocobase/nocobase/pull/10126)) by @gchust
  - Fix the issue where date filter defaults become a single date ([#9854](https://github.com/nocobase/nocobase/pull/9854)) by @zhangzhonghe
- **[Calendar]** Add scrolling to the v2 calendar event overlay when many events are shown. ([#10138](https://github.com/nocobase/nocobase/pull/10138)) by @katherinehhh
- **[Multi-space]** Fixed account switching failures caused by stale space headers during authentication recovery by @jiannx
