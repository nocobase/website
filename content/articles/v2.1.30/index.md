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

