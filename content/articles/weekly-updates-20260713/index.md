Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase is currently updated across three branches: `main`, `next`, and `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: The most stable version to date, recommended for installation.
* `next`: Beta version, contains upcoming new features and has been preliminarily tested. There might be some known or unknown issues. It is mainly used to collect feedback from test users and further optimize features. Ideal for test users who want to experience new features early and provide feedback.
* `develop`: Alpha version, contains the latest feature code, may be incomplete or unstable, and is mainly used for internal development and rapid iteration. Suited for technical users interested in cutting-edge product capabilities, but not recommended for production use.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### v2.1.23

*Release date: 2026-07-10*

### 🐛 Bug Fixes

- **[client-v2]**

  - Fixed v2 ScanInput recognition for Safari QR images selected from the upload path. ([#10011](https://github.com/nocobase/nocobase/pull/10011)) by @katherinehhh
  - Fixed client runtime asset base URL normalization when `__webpack_public_path__` is injected without a trailing slash, and added coverage for that edge case. ([#10040](https://github.com/nocobase/nocobase/pull/10040)) by @chenos
  - Fixed an issue where button linkage rule states in table blocks could become polluted after pagination. ([#10038](https://github.com/nocobase/nocobase/pull/10038)) by @gchust
- **[app]** Fix lazy-loaded assets using an external script URL when `CDN_BASE_URL` is empty. ([#10052](https://github.com/nocobase/nocobase/pull/10052)) by @Molunerfinn
- **[flow-engine]** Fixed an issue where overriding ctx.api in a JS block could cause a Maximum call stack size exceeded error. ([#10051](https://github.com/nocobase/nocobase/pull/10051)) by @gchust
- **[Workflow: Delay node]** Prevented delay nodes from accepting numeric durations less than 1 through the API ([#10057](https://github.com/nocobase/nocobase/pull/10057)) by @mytharcher
- **[Form drafts]** Fixed form drafts disappearing after consecutive page refreshes ([#10059](https://github.com/nocobase/nocobase/pull/10059)) by @gchust
- **[Data source: Main]** Prevented invalid many-to-many relationship field configurations from being saved ([#10044](https://github.com/nocobase/nocobase/pull/10044)) by @2013xile
- **[Collection: Tree]** Fixed tree path collection creation to avoid passing internal field model metadata into collection options. ([#10035](https://github.com/nocobase/nocobase/pull/10035)) by @cgyrock
- **[Workflow]** Fixed subflow nodes remaining pending when the child workflow fails before creating an execution record ([#10043](https://github.com/nocobase/nocobase/pull/10043)) by @mytharcher
- **[Flow engine]**

  - Fixed an issue where using a local AI agent to configure linkage rules could trigger rendering errors. ([#10023](https://github.com/nocobase/nocobase/pull/10023)) by @gchust
  - Fixed popup record variables failing to resolve from external NocoBase data sources ([#10048](https://github.com/nocobase/nocobase/pull/10048)) by @gchust
- **[Template print]** Fixed template print permission checks so hidden fields and records outside the current role's view scope are not rendered. by @jiannx
- **[Workflow: Approval]**

  - Allow string type of assignee ID to be added by @mytharcher
  - Fix approval form fields becoming single-column in print preview by @zhangzhonghe
  - Fix the issue where fields in disabled approval subtables can still be edited by @zhangzhonghe

### v2.1.22

*Release date: 2026-07-09*

### 🐛 Bug Fixes

- **[client-v2]**

  - Fix association fields showing the default operator setting in filter forms ([#10025](https://github.com/nocobase/nocobase/pull/10025)) by @zhangzhonghe
  - Fix mobile popup spacing for table quick edit and select fields ([#10020](https://github.com/nocobase/nocobase/pull/10020)) by @zhangzhonghe
- **[cli]** Fixed NocoBase CLI default value issues for image registry fallback, built-in database images, env info display, and prompt initialization. ([#10027](https://github.com/nocobase/nocobase/pull/10027)) by @chenos
- **[Authentication]** Fix the issue where reset password links open the sign-in page ([#10006](https://github.com/nocobase/nocobase/pull/10006)) by @zhangzhonghe

### v2.1.21

*Release date: 2026-07-08*

### 🎉 New Features

- **[AI employees]** Add OrcaRouter as an LLM provider ([#10003](https://github.com/nocobase/nocobase/pull/10003)) by @jinhaosong-source

### 🚀 Improvements

- **[Workflow]** Remove arithmetic operators for condition node ([#10019](https://github.com/nocobase/nocobase/pull/10019)) by @mytharcher

### 🐛 Bug Fixes

- **[client-v2]**

  - Fixed stale linkage field states when switching records in runtime edit popups. ([#10010](https://github.com/nocobase/nocobase/pull/10010)) by @katherinehhh
  - Fixed an issue where association field default values in filter forms could not be cleared. ([#10022](https://github.com/nocobase/nocobase/pull/10022)) by @gchust
- **[File manager]**

  - Reject active-content filenames during file upload unless the configured storage MIME type rule explicitly allows them. ([#10021](https://github.com/nocobase/nocobase/pull/10021)) by @mytharcher
    Reference: [Local storage](https://docs.nocobase.com/file-manager/storage/local), [Security guide](https://docs.nocobase.com/security/guide)
  - Fixed missing Attachment field interface in v2 data table management, and fixed image upload preflight checks for public form file relationship fields. ([#10012](https://github.com/nocobase/nocobase/pull/10012)) by @katherinehhh
- **[Data source manager]** Hide the historical attachment field interface from the V2 data table Add field menu. ([#10018](https://github.com/nocobase/nocobase/pull/10018)) by @katherinehhh
- **[Data visualization]** Fixed chart click interactions that could stop working after chart rerendering ([#10031](https://github.com/nocobase/nocobase/pull/10031)) by @2013xile
- **[Migration manager]** Fixed an issue where migration could leave an app stuck on the repair screen by @2013xile
- **[App supervisor]** Fixed app JWT secret isolation so main app tokens are no longer accepted by sub apps after an independent secret is enabled by @2013xile

### v2.1.20

*Release date: 2026-07-07*

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

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### v2.2.0-beta.13

*Release date: 2026-07-12*

### 🐛 Bug Fixes

- **[Redis worker ID allocator]** Restored standalone startup without Redis worker ID configuration by @2013xile

### v2.2.0-beta.12

*Release date: 2026-07-11*

### 🐛 Bug Fixes

- **[server]** Fixed custom portals missing when multi-application plugins are disabled ([#10055](https://github.com/nocobase/nocobase/pull/10055)) by @2013xile
- **[app]** Fixed Redis cache configuration ignoring the dedicated cache URL ([#10065](https://github.com/nocobase/nocobase/pull/10065)) by @2013xile
- **[Redis worker ID allocator]** Improved Redis worker ID isolation and failure diagnostics by @2013xile

### v2.2.0-beta.11

*Release date: 2026-07-11*

### 🐛 Bug Fixes

- **[app]** Fix lazy-loaded assets using an external script URL when `CDN_BASE_URL` is empty. ([#10052](https://github.com/nocobase/nocobase/pull/10052)) by @Molunerfinn
- **[client-v2]**

  - Fixed v2 ScanInput recognition for Safari QR images selected from the upload path. ([#10011](https://github.com/nocobase/nocobase/pull/10011)) by @katherinehhh
  - Fixed an issue where button linkage rule states in table blocks could become polluted after pagination. ([#10038](https://github.com/nocobase/nocobase/pull/10038)) by @gchust
  - Fixed client runtime asset base URL normalization when `__webpack_public_path__` is injected without a trailing slash, and added coverage for that edge case. ([#10040](https://github.com/nocobase/nocobase/pull/10040)) by @chenos
- **[flow-engine]** Fixed an issue where overriding ctx.api in a JS block could cause a Maximum call stack size exceeded error. ([#10051](https://github.com/nocobase/nocobase/pull/10051)) by @gchust
- **[Workflow: Delay node]** Prevented delay nodes from accepting numeric durations less than 1 through the API ([#10057](https://github.com/nocobase/nocobase/pull/10057)) by @mytharcher
- **[Form drafts]** Fixed form drafts disappearing after consecutive page refreshes ([#10059](https://github.com/nocobase/nocobase/pull/10059)) by @gchust
- **[Workflow]** Fixed subflow nodes remaining pending when the child workflow fails before creating an execution record ([#10043](https://github.com/nocobase/nocobase/pull/10043)) by @mytharcher
- **[Flow engine]**

  - Fixed an issue where using a local AI agent to configure linkage rules could trigger rendering errors. ([#10023](https://github.com/nocobase/nocobase/pull/10023)) by @gchust
  - Fixed popup record variables failing to resolve from external NocoBase data sources ([#10048](https://github.com/nocobase/nocobase/pull/10048)) by @gchust
- **[Data source: Main]** Prevented invalid many-to-many relationship field configurations from being saved ([#10044](https://github.com/nocobase/nocobase/pull/10044)) by @2013xile
- **[Collection: Tree]** Fixed tree path collection creation to avoid passing internal field model metadata into collection options. ([#10035](https://github.com/nocobase/nocobase/pull/10035)) by @cgyrock
- **[Template print]** Fixed template print permission checks so hidden fields and records outside the current role's view scope are not rendered. by @jiannx
- **[Workflow: Approval]**

  - Allow string type of assignee ID to be added by @mytharcher
  - Fix approval form fields becoming single-column in print preview by @zhangzhonghe
  - Fix the issue where fields in disabled approval subtables can still be edited by @zhangzhonghe

### v2.2.0-beta.10

*Release date: 2026-07-09*

### 🎉 New Features

- **[AI employees]**
  - Add OrcaRouter as an LLM provider ([#10003](https://github.com/nocobase/nocobase/pull/10003)) by @jinhaosong-source
  - Added structured AI usage records for usage statistics ([#10004](https://github.com/nocobase/nocobase/pull/10004)) by @2013xile

### 🚀 Improvements

- **[Workflow]** Remove arithmetic operators for condition node ([#10019](https://github.com/nocobase/nocobase/pull/10019)) by @mytharcher
- **[Data visualization]** Improved chart event scripts so custom event handlers can clean up safely ([#10034](https://github.com/nocobase/nocobase/pull/10034)) by @2013xile
- **[Data source manager]** Hide deprecated v2 main data source collection templates from the create collection menu. ([#10009](https://github.com/nocobase/nocobase/pull/10009)) by @katherinehhh

### 🐛 Bug Fixes

- **[client-v2]**

  - Fix association fields showing the default operator setting in filter forms ([#10025](https://github.com/nocobase/nocobase/pull/10025)) by @zhangzhonghe
  - Fix mobile popup spacing for table quick edit and select fields ([#10020](https://github.com/nocobase/nocobase/pull/10020)) by @zhangzhonghe
  - Fixed an issue where association field default values in filter forms could not be cleared. ([#10022](https://github.com/nocobase/nocobase/pull/10022)) by @gchust
  - Fixed stale linkage field states when switching records in runtime edit popups. ([#10010](https://github.com/nocobase/nocobase/pull/10010)) by @katherinehhh
  - Fixed an issue where Quick Edit could fail to switch dropdown options when navigating between pages. ([#10007](https://github.com/nocobase/nocobase/pull/10007)) by @gchust
  - Fixed Vditor asset loading in production by resolving plugin CDN paths from the effective webpack public path. ([#10008](https://github.com/nocobase/nocobase/pull/10008)) by @chenos
- **[cli]** Fixed NocoBase CLI default value issues for image registry fallback, built-in database images, env info display, and prompt initialization. ([#10027](https://github.com/nocobase/nocobase/pull/10027)) by @chenos
- **[flow-engine]** Fixed an issue where popup configuration became inconsistent when toggling design modes. ([#10005](https://github.com/nocobase/nocobase/pull/10005)) by @gchust
- **[Data visualization]** Fixed chart click interactions that could stop working after chart rerendering ([#10031](https://github.com/nocobase/nocobase/pull/10031)) by @2013xile
- **[AI employees]** Fix unnecessary login-required requests on V2 public form pages ([#10013](https://github.com/nocobase/nocobase/pull/10013)) by @zhangzhonghe
- **[Authentication]** Fix the issue where reset password links open the sign-in page ([#10006](https://github.com/nocobase/nocobase/pull/10006)) by @zhangzhonghe
- **[Data source manager]** Hide the historical attachment field interface from the V2 data table Add field menu. ([#10018](https://github.com/nocobase/nocobase/pull/10018)) by @katherinehhh
- **[File manager]**

  - Reject active-content filenames during file upload unless the configured storage MIME type rule explicitly allows them. ([#10021](https://github.com/nocobase/nocobase/pull/10021)) by @mytharcher
    Reference: [Local storage](https://docs.nocobase.com/file-manager/storage/local), [Security guide](https://docs.nocobase.com/security/guide)
  - Fixed missing Attachment field interface in v2 data table management, and fixed image upload preflight checks for public form file relationship fields. ([#10012](https://github.com/nocobase/nocobase/pull/10012)) by @katherinehhh
- **[Embed NocoBase]** Fixed an issue where tokens could be polluted when embedding NocoBase pages. ([#9948](https://github.com/nocobase/nocobase/pull/9948)) by @gchust
- **[Data source: External MariaDB]** Fix Add all collections toggle in MySQL, MSSQL, and MariaDB external data source settings. by @katherinehhh
- **[Migration manager]** Fixed an issue where migration could leave an app stuck on the repair screen by @2013xile
- **[App supervisor]** Fixed app JWT secret isolation so main app tokens are no longer accepted by sub apps after an independent secret is enabled by @2013xile

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### v2.2.0-alpha.8

*Release date: 2026-07-13*

### 🎉 New Features

- **[Public forms]** In the v1 public form, support creating v2 forms and prohibit creating v1 forms ([#10045](https://github.com/nocobase/nocobase/pull/10045)) by @zhangzhonghe

### 🚀 Improvements

- **[Workflow]** Unsupported workflow v2 canvas nodes now keep the normal node card actions while showing the node type as unsupported. ([#10054](https://github.com/nocobase/nocobase/pull/10054)) by @mytharcher
- **[Flow engine]** Support multi portals for ui build apis. ([#10072](https://github.com/nocobase/nocobase/pull/10072)) by @gchust
- **[AI employees]** Improved AI employee tool settings, data-query guardrails, relation field querying, and malformed tool call diagnostics. ([#10042](https://github.com/nocobase/nocobase/pull/10042)) by @cgyrock
- **[Collection: SQL]** Not user-facing; added client-v2 unit test coverage for migrated plugins. ([#9967](https://github.com/nocobase/nocobase/pull/9967)) by @katherinehhh

### 🐛 Bug Fixes

- **[client-v2]**

  - Fix an error in v2 workflow value editors when a collection field is named nodeName. ([#10067](https://github.com/nocobase/nocobase/pull/10067)) by @katherinehhh
  - Fixed an issue where button linkage rule states in table blocks could become polluted after pagination. ([#10038](https://github.com/nocobase/nocobase/pull/10038)) by @gchust
  - Fixed workflow v2 variable editors to preserve saved variable pills, disabled states, and operator labels consistently across trigger, filter, and field assignment forms. ([#10041](https://github.com/nocobase/nocobase/pull/10041)) by @Molunerfinn
- **[app]**

  - Fixed Redis cache configuration ignoring the dedicated cache URL ([#10065](https://github.com/nocobase/nocobase/pull/10065)) by @2013xile
  - Fix lazy-loaded assets using an external script URL when `CDN_BASE_URL` is empty. ([#10052](https://github.com/nocobase/nocobase/pull/10052)) by @Molunerfinn
- **[server]** Fixed custom portals missing when multi-application plugins are disabled ([#10055](https://github.com/nocobase/nocobase/pull/10055)) by @2013xile
- **[flow-engine]**

  - Fixed an issue where users could type extra text after selecting a variable in single-value variable inputs. ([#10050](https://github.com/nocobase/nocobase/pull/10050)) by @katherinehhh
  - Fixed an issue where overriding ctx.api in a JS block could cause a Maximum call stack size exceeded error. ([#10051](https://github.com/nocobase/nocobase/pull/10051)) by @gchust
- **[Workflow: Delay node]**

  - Fix delay node duration input and prevent values below the minimum from being saved. ([#10056](https://github.com/nocobase/nocobase/pull/10056)) by @Molunerfinn
  - Prevented delay nodes from accepting numeric durations less than 1 through the API ([#10057](https://github.com/nocobase/nocobase/pull/10057)) by @mytharcher
- **[Workflow]**

  - Fixed subflow nodes remaining pending when the child workflow fails before creating an execution record ([#10043](https://github.com/nocobase/nocobase/pull/10043)) by @mytharcher
  - Fixed manual workflow execution returning an error when a valid request does not start an execution. ([#10049](https://github.com/nocobase/nocobase/pull/10049)) by @mytharcher
- **[Data source: Main]** Prevented invalid many-to-many relationship field configurations from being saved ([#10044](https://github.com/nocobase/nocobase/pull/10044)) by @2013xile
- **[Flow engine]** Fixed popup record variables failing to resolve from external NocoBase data sources ([#10048](https://github.com/nocobase/nocobase/pull/10048)) by @gchust
- **[Form drafts]** Fixed form drafts disappearing after consecutive page refreshes ([#10059](https://github.com/nocobase/nocobase/pull/10059)) by @gchust
- **[Workflow: Aggregate node]** Fix validation rule to allow null filter ([#10053](https://github.com/nocobase/nocobase/pull/10053)) by @mytharcher
- **[Redis worker ID allocator]**

  - Restored standalone startup without Redis worker ID configuration by @2013xile
  - Improved Redis worker ID isolation and failure diagnostics by @2013xile
- **[plugin-service-platform]** Restored licensed plugin downloads from the service platform. by @jiannx
- **[Template print]** Fixed template print permission checks so hidden fields and records outside the current role's view scope are not rendered. by @jiannx
- **[Workflow: Approval]**

  - Fix v2 approval subtables not displaying correctly in details by @zhangzhonghe
  - Fix empty approval interfaces and fixed assignee IDs by @zhangzhonghe
  - Fix the issue where fields in disabled approval subtables can still be edited by @zhangzhonghe
  - Allow string type of assignee ID to be added by @mytharcher
  - Fix approval form fields becoming single-column in print preview by @zhangzhonghe
  - Close the Apply new drawer when opening an approval form by @zhangzhonghe
  - Fix missing approval data on approval task cards by @zhangzhonghe

### v2.2.0-alpha.7

*Release date: 2026-07-09*

### 🎉 New Features

- **[AI employees]**

  - Add OrcaRouter as an LLM provider ([#10003](https://github.com/nocobase/nocobase/pull/10003)) by @jinhaosong-source
  - Added structured AI usage records for usage statistics ([#10004](https://github.com/nocobase/nocobase/pull/10004)) by @2013xile
- **[Workflow: Approval]** Add approval initiation and todo blocks for v2 pages by @zhangzhonghe

### 🚀 Improvements

- **[client-v2]**

  - Refactor Markdown Vditor into a unified plugin-backed Markdown engine with compatibility bridges for existing Markdown block and Vditor field plugins. ([#9998](https://github.com/nocobase/nocobase/pull/9998)) by @katherinehhh
- **[AI employees]** Improved AI employee web search to reduce unnecessary model reasoning and better use provider-specific thinking controls. ([#9996](https://github.com/nocobase/nocobase/pull/9996)) by @cgyrock
- **[Data visualization]** Improved chart event scripts so custom event handlers can clean up safely ([#10034](https://github.com/nocobase/nocobase/pull/10034)) by @2013xile
- **[Workflow]** Remove arithmetic operators for condition node ([#10019](https://github.com/nocobase/nocobase/pull/10019)) by @mytharcher
- **[Data source manager]** Hide deprecated v2 main data source collection templates from the create collection menu. ([#10009](https://github.com/nocobase/nocobase/pull/10009)) by @katherinehhh
- **[Block: Comment]** Improved comment submit actions and fixed related comment/user form submission issues. ([#10002](https://github.com/nocobase/nocobase/pull/10002)) by @jiannx

### 🐛 Bug Fixes

- **[client-v2]**

  - Fixed client runtime asset base URL normalization when `__webpack_public_path__` is injected without a trailing slash, and added coverage for that edge case. ([#10040](https://github.com/nocobase/nocobase/pull/10040)) by @chenos
  - Fixed v2 ScanInput recognition for Safari QR images selected from the upload path. ([#10011](https://github.com/nocobase/nocobase/pull/10011)) by @katherinehhh
  - Fix association fields showing the default operator setting in filter forms ([#10025](https://github.com/nocobase/nocobase/pull/10025)) by @zhangzhonghe
  - Fix mobile popup spacing for table quick edit and select fields ([#10020](https://github.com/nocobase/nocobase/pull/10020)) by @zhangzhonghe
  - Fixed an issue where Quick Edit could fail to switch dropdown options when navigating between pages. ([#10007](https://github.com/nocobase/nocobase/pull/10007)) by @gchust
  - Fixed Vditor asset loading in production by resolving plugin CDN paths from the effective webpack public path. ([#10008](https://github.com/nocobase/nocobase/pull/10008)) by @chenos
  - Fixed stale linkage field states when switching records in runtime edit popups. ([#10010](https://github.com/nocobase/nocobase/pull/10010)) by @katherinehhh
  - Fixed an issue where association field default values in filter forms could not be cleared. ([#10022](https://github.com/nocobase/nocobase/pull/10022)) by @gchust
  - Fixed an issue where v2 workflow assigned fields could still be edited in read-only executed workflow versions. ([#10014](https://github.com/nocobase/nocobase/pull/10014)) by @katherinehhh
- **[cli]** Fixed NocoBase CLI default value issues for image registry fallback, built-in database images, env info display, and prompt initialization. ([#10027](https://github.com/nocobase/nocobase/pull/10027)) by @chenos
- **[flow-engine]** Fixed an issue where popup configuration became inconsistent when toggling design modes. ([#10005](https://github.com/nocobase/nocobase/pull/10005)) by @gchust
- **[Collection: Tree]** Fixed tree path collection creation to avoid passing internal field model metadata into collection options. ([#10035](https://github.com/nocobase/nocobase/pull/10035)) by @cgyrock
- **[Public forms]** Fix the issue where public forms can still be configured when UI Editor is off ([#10036](https://github.com/nocobase/nocobase/pull/10036)) by @zhangzhonghe
- **[Flow engine]** Fixed an issue where using a local AI agent to configure linkage rules could trigger rendering errors. ([#10023](https://github.com/nocobase/nocobase/pull/10023)) by @gchust
- **[Authentication]** Fix the issue where reset password links open the sign-in page ([#10006](https://github.com/nocobase/nocobase/pull/10006)) by @zhangzhonghe
- **[Data visualization]** Fixed chart click interactions that could stop working after chart rerendering ([#10031](https://github.com/nocobase/nocobase/pull/10031)) by @2013xile
- **[Workflow]**

  - Fixed workflow v2 condition operands to stay on one row by default and wrap correctly when selected variable paths are too long. ([#10033](https://github.com/nocobase/nocobase/pull/10033)) by @Molunerfinn
  - Fix untranslated workflow result labels and oversized CC configuration dialogs ([#9977](https://github.com/nocobase/nocobase/pull/9977)) by @zhangzhonghe
  - Fix display and detail loading issues in the workflow v2 task center ([#10001](https://github.com/nocobase/nocobase/pull/10001)) by @zhangzhonghe
- **[Data source manager]** Hide the historical attachment field interface from the V2 data table Add field menu. ([#10018](https://github.com/nocobase/nocobase/pull/10018)) by @katherinehhh
- **[File manager]**

  - Reject active-content filenames during file upload unless the configured storage MIME type rule explicitly allows them. ([#10021](https://github.com/nocobase/nocobase/pull/10021)) by @mytharcher
    Reference: [Local storage](https://docs.nocobase.com/file-manager/storage/local), [Security guide](https://docs.nocobase.com/security/guide)
  - Reject active-content filenames during file upload unless the configured storage MIME type rule explicitly allows them. ([#9994](https://github.com/nocobase/nocobase/pull/9994)) by @mytharcher
    Reference: [Local storage](docs/docs/en/file-manager/storage/local.md), [Security guide](docs/docs/en/security/guide.md)
  - Fixed missing Attachment field interface in v2 data table management, and fixed image upload preflight checks for public form file relationship fields. ([#10012](https://github.com/nocobase/nocobase/pull/10012)) by @katherinehhh
- **[Embed NocoBase]** Fixed an issue where tokens could be polluted when embedding NocoBase pages. ([#9948](https://github.com/nocobase/nocobase/pull/9948)) by @gchust
- **[AI employees]** Fix unnecessary login-required requests on V2 public form pages ([#10013](https://github.com/nocobase/nocobase/pull/10013)) by @zhangzhonghe
- **[AI: Knowledge base]** Added an overwrite option for AI knowledge base workflow document creation, allowing workflows to replace existing documents with the same key. by @cgyrock
- **[Data source: External MariaDB]** Fix Add all collections toggle in MySQL, MSSQL, and MariaDB external data source settings. by @katherinehhh
- **[plugin-service-platform]** Disabled the service platform plugin download endpoint. by @jiannx
- **[Workflow: Subflow]** Fixed workflow title search in the subflow node configuration selector. by @mytharcher
- **[Migration manager]** Fixed an issue where migration could leave an app stuck on the repair screen by @2013xile
- **[Workflow: Approval]**

  - Fix approval assignee sorting and hide unsupported legacy configuration entries by @zhangzhonghe
  - Fix the error when configuring approval workflow conditions by @zhangzhonghe
  - Fix missing processed approval details in v2 task detail popups by @zhangzhonghe
  - Fix approval task form and action issues in the workflow v2 task center by @zhangzhonghe
- **[App supervisor]** Fixed app JWT secret isolation so main app tokens are no longer accepted by sub apps after an independent secret is enabled by @2013xile
