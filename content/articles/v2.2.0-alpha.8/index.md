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

