### 🎉 New Features

- **[undefined]** Add a CI workflow that checks for missing `plugin-*` peerDependencies and runs the build, with PR comment reporting. ([#9058](https://github.com/nocobase/nocobase/pull/9058)) by @Molunerfinn

- **[cli-v1]** resolve storage path from env ([#9147](https://github.com/nocobase/nocobase/pull/9147)) by @chenos

- **[cli]** refactor NocoBase CLI ([#9122](https://github.com/nocobase/nocobase/pull/9122)) by @chenos

- **[flow-engine]** Add `getSubclassesOfAsync` to FlowEngine for discovering async-registered model classes via the new `extends` field in `registerModelLoaders`. ([#9065](https://github.com/nocobase/nocobase/pull/9065)) by @Molunerfinn

- **[Workflow]**
  - Add API to check node creation ([#9207](https://github.com/nocobase/nocobase/pull/9207)) by @mytharcher

  - Add log field for jobs, in order to show log content of some node for debug ([#9165](https://github.com/nocobase/nocobase/pull/9165)) by @mytharcher

- **[AI employees]**
  - The workflow has added AI employee instruction ([#9025](https://github.com/nocobase/nocobase/pull/9025)) by @cgyrock

  - Added a data query tool and business analysis report tool for AI employees ([#9040](https://github.com/nocobase/nocobase/pull/9040)) by @2013xile

  - Add the ability to invoke sub agents for AI employees ([#8935](https://github.com/nocobase/nocobase/pull/8935)) by @cgyrock

  - Added SKILLS capability to AI employees. ([#8797](https://github.com/nocobase/nocobase/pull/8797)) by @cgyrock

- **[Auth: API keys]** add `pm list` and `generate-api-key` commands ([#9076](https://github.com/nocobase/nocobase/pull/9076)) by @chenos

- **[AI: MCP server]**
  - Provides a generic data collection query API, callable via MCP ([#8985](https://github.com/nocobase/nocobase/pull/8985)) by @2013xile

  - Add a new MCP server plugin to allow building NocoBase systems and supporting business workflows. ([#8824](https://github.com/nocobase/nocobase/pull/8824)) by @2013xile

- **[Data source manager]** Support on-demand loading of MCP tools ([#8936](https://github.com/nocobase/nocobase/pull/8936)) by @2013xile

- **[IdP: OAuth]** Add a new IdP: OAuth plugin to enable MCP services to authenticate via OAuth ([#8896](https://github.com/nocobase/nocobase/pull/8896)) by @2013xile

### 🚀 Improvements

- **[cli]**
  - Added CLI request source tracking in request logs and audit logs ([#9223](https://github.com/nocobase/nocobase/pull/9223)) by @2013xile

  - Improved generated API CLI help output and ACL command grouping ([#9166](https://github.com/nocobase/nocobase/pull/9166)) by @2013xile

  - Improved `nb api` help fallback and unified warning messages for runtime bootstrap failures ([#9153](https://github.com/nocobase/nocobase/pull/9153)) by @2013xile

- **[server]** Improved swagger API docs of plugin manager ([#9080](https://github.com/nocobase/nocobase/pull/9080)) by @2013xile

- **[database]** Fixed AI business report generation and data query behavior to avoid malformed chart output, incorrect datetime handling, and missing multi-data-source coverage ([#9078](https://github.com/nocobase/nocobase/pull/9078)) by @2013xile

- **[build]**
  - App client production builds now run on Rsbuild, and build profiling plus declaration scheduling improvements make build bottlenecks easier to identify and reduce. ([#8963](https://github.com/nocobase/nocobase/pull/8963)) by @Molunerfinn

  - Migrate the client build pipeline in `@nocobase/build` from Vite to Rsbuild. ([#8932](https://github.com/nocobase/nocobase/pull/8932)) by @Molunerfinn

- **[client]** Refactor admin layout settings and application to model host architecture with v1 v2 compatibility safeguards ([#8710](https://github.com/nocobase/nocobase/pull/8710)) by @zhangzhonghe

- **[flow-engine]**
  - Improve schema validation for ui building api. ([#8881](https://github.com/nocobase/nocobase/pull/8881)) by @gchust

  - Improve schema validation for ui building api. ([#8881](https://github.com/nocobase/nocobase/pull/8881)) by @gchust

- **[app]** Add an Rsbuild-based dev workflow for client-v1 while keeping local plugin development and the current `/v2/` topology compatible ([#8902](https://github.com/nocobase/nocobase/pull/8902)) by @Molunerfinn

- **[undefined]** Add a dedicated client-v2 entry and build it independently with rsbuild while keeping v1 unchanged. ([#8743](https://github.com/nocobase/nocobase/pull/8743)) by @Molunerfinn

- **[Access control]** add some new apis for acl skill ([#9198](https://github.com/nocobase/nocobase/pull/9198)) by @Andrew1989Y

- **[Workflow: Custom action event]** Add ACL control of triggering on record mode (both single and multiple) ([#9125](https://github.com/nocobase/nocobase/pull/9125)) by @mytharcher

- **[Flow engine]** Add new apis for ui building. ([#8992](https://github.com/nocobase/nocobase/pull/8992)) by @gchust

- **[Workflow: Pre-action event]** Add validation rules for triggers and nodes ([#8971](https://github.com/nocobase/nocobase/pull/8971)) by @mytharcher

- **[Workflow]** Add validation for all triggers and nodes ([#8930](https://github.com/nocobase/nocobase/pull/8930)) by @mytharcher

- **[Workflow: Webhook]** Add validation for creating trigger / node API by @mytharcher

- **[Workflow: Subflow]** Add validation for creating node API by @mytharcher

- **[Workflow: Approval]**
  - Add validation for approval node creation by @mytharcher

  - Add validation for trigger / node API by @mytharcher

### 🐛 Bug Fixes

- **[client]**
  - relationship field hidden sort switch ([#9220](https://github.com/nocobase/nocobase/pull/9220)) by @jiannx

  - Fix the issue where the page title does not update after switching menus ([#8864](https://github.com/nocobase/nocobase/pull/8864)) by @zhangzhonghe

- **[cli]** Fixed CLI OAuth login failures on Windows caused by long authorization URLs ([#9159](https://github.com/nocobase/nocobase/pull/9159)) by @2013xile

- **[test]** Fixed plugin builds so server dependencies with dotted package names like `big.js` are packaged into `dist/node_modules`. ([#8953](https://github.com/nocobase/nocobase/pull/8953)) by @Molunerfinn

- **[server]** Support getting the target application by hostname ([#8978](https://github.com/nocobase/nocobase/pull/8978)) by @2013xile

- **[Workflow: Aggregate node]** Fix the issue where aggregate node could not be saved because incorrect validation rule ([#9208](https://github.com/nocobase/nocobase/pull/9208)) by @mytharcher

- **[AI employees]**
  - Fix log recording anomalies in AI employee instruction ([#9180](https://github.com/nocobase/nocobase/pull/9180)) by @cgyrock

  - Fixed aggregate query sorting dropped by ACL ([#9099](https://github.com/nocobase/nocobase/pull/9099)) by @2013xile

  - Fixed the issue where error messages were not displayed in the AI employee conversations ([#9097](https://github.com/nocobase/nocobase/pull/9097)) by @cgyrock

  - Fix the issue where AI employees were unable to use skills ([#9023](https://github.com/nocobase/nocobase/pull/9023)) by @cgyrock

  - Fix the issue where the LLM still attempts to load skills after the getSkill tool is disabled ([#9013](https://github.com/nocobase/nocobase/pull/9013)) by @cgyrock

  - Fix failing test cases in the ai module of the core package. ([#8941](https://github.com/nocobase/nocobase/pull/8941)) by @cgyrock

- **[Workflow: JavaScript]** Fix the issue where error thrown when configure JavaScript node ([#9169](https://github.com/nocobase/nocobase/pull/9169)) by @mytharcher

- **[IdP: OAuth]**
  - Fixed OAuth client registration and token refresh failures after service restart ([#9139](https://github.com/nocobase/nocobase/pull/9139)) by @2013xile

  - Fixed OAuth access for regular API requests ([#9120](https://github.com/nocobase/nocobase/pull/9120)) by @2013xile

  - Fixed incorrect redirect after MCP OAuth login in sub applications ([#9015](https://github.com/nocobase/nocobase/pull/9015)) by @2013xile

- **[Workflow: Loop node]** Fix validations of workflow nodes ([#9111](https://github.com/nocobase/nocobase/pull/9111)) by @mytharcher

- **[Access control]** update acl swagger for mcp server ([#9096](https://github.com/nocobase/nocobase/pull/9096)) by @Andrew1989Y

- **[Workflow: mailer node]** Fix validation for variable fields ([#9047](https://github.com/nocobase/nocobase/pull/9047)) by @mytharcher

- **[Workflow]**
  - Fix incorrect validation rule of condition instruction ([#9017](https://github.com/nocobase/nocobase/pull/9017)) by @mytharcher

  - Fix the issue where mode of collection trigger can not be set to "create or update" ([#8980](https://github.com/nocobase/nocobase/pull/8980)) by @mytharcher

- **[Data source manager]** Optimized MCP tool naming and reduce redundant API responses to avoid excessive consumption of AI conversation context ([#9000](https://github.com/nocobase/nocobase/pull/9000)) by @2013xile

- **[AI: MCP server]**
  - Fixed MCP tools generated from Swagger when input schemas include `null` types or `nullable` markers that are invalid for OpenAI tool validation ([#8994](https://github.com/nocobase/nocobase/pull/8994)) by @2013xile

  - Fixed authentication mismatches caused by unrelated forwarded headers in the MCP generic CRUD tool ([#8983](https://github.com/nocobase/nocobase/pull/8983)) by @2013xile

