### 🎉 New Features

- **[undefined]**
  - Add top-level proxy commands for nginx and caddy ([#9721](https://github.com/nocobase/nocobase/pull/9721)) by @chenos

  - Improved managed app and plugin management in the CLI, including appPath-aware environment handling, plugin import, licensed plugin sync, and related documentation updates. ([#9655](https://github.com/nocobase/nocobase/pull/9655)) by @chenos
Reference: [CLI docs](https://github.com/nocobase/nocobase/tree/feat/cli-app-path/docs/docs/en/api/cli), [Quickstart](https://github.com/nocobase/nocobase/tree/feat/cli-app-path/docs/docs/en/quickstart)
  - Add a new AI employee, Localization Engineer Lina, to assist with localization translation tasks ([#9434](https://github.com/nocobase/nocobase/pull/9434)) by @2013xile
Reference: [Localization Management](https://docs.nocobase.com/system-management/localization)<br>[Lina: Localization Engineer](https://docs.nocobase.com/ai-employees/built-in/lina)<br>[Use Lina and local HY-MT1.5-1.8B to translate localization entries](https://docs.nocobase.com/ai-employees/scenarios/localization-hy-mt)
  - Add Indonesian and Vietnamese documentation. ([#9303](https://github.com/nocobase/nocobase/pull/9303)) by @Molunerfinn

  - Add a CI workflow that checks for missing `plugin-*` peerDependencies and runs the build, with PR comment reporting. ([#9058](https://github.com/nocobase/nocobase/pull/9058)) by @Molunerfinn

- **[client-v2]**
  - support scan input for text fields ([#9599](https://github.com/nocobase/nocobase/pull/9599)) by @katherinehhh

  - Add `TypedVariableInput` so v2 email plugin's SMTP port and secure mode fields can accept either a typed constant or a `{{ $env.X }}` variable. ([#9637](https://github.com/nocobase/nocobase/pull/9637)) by @Molunerfinn

  - support field value assignment in submit form actions ([#9570](https://github.com/nocobase/nocobase/pull/9570)) by @katherinehhh

  - Support embedded v2 pages and public form v2 pages ([#9431](https://github.com/nocobase/nocobase/pull/9431)) by @zhangzhonghe

  - Rewrite the client-v2 Plugin manager page into a responsive card-based UI with category filter, search, enable/disable/remove, Bulk enable, and a plugin detail modal; also make the client-v1 Plugin manager page responsive on narrow screens. ([#9573](https://github.com/nocobase/nocobase/pull/9573)) by @Molunerfinn

  - Add a Security menu and the Token policy settings page to the v2 admin; user-center now supports Change password. ([#9556](https://github.com/nocobase/nocobase/pull/9556)) by @Molunerfinn

- **[cli]**
  - Add dynamic api command compatibility guards ([#9613](https://github.com/nocobase/nocobase/pull/9613)) by @chenos

  - support basic auth ([#9558](https://github.com/nocobase/nocobase/pull/9558)) by @chenos

  - add backup create and restore commands ([#9541](https://github.com/nocobase/nocobase/pull/9541)) by @chenos

  - Add release command in API ([#9308](https://github.com/nocobase/nocobase/pull/9308)) by @Andrew1989Y

  - refactor NocoBase CLI ([#9122](https://github.com/nocobase/nocobase/pull/9122)) by @chenos

- **[client]**
  - Add linkage rules support for page menu items ([#9304](https://github.com/nocobase/nocobase/pull/9304)) by @zhangzhonghe

  - add js variables to event flow ([#8938](https://github.com/nocobase/nocobase/pull/8938)) by @jiannx

  - add JS item action ([#8911](https://github.com/nocobase/nocobase/pull/8911)) by @jiannx

- **[flow-engine]**
  - Migrate `plugin-environment-variables` to client-v2 with a React-based settings page and a globally registered `$env` runtime variable; add a client-v2 entry to `plugin-file-manager` with a React-based storage configuration page and FlowModel-based upload field, upload action, and preview. ([#9413](https://github.com/nocobase/nocobase/pull/9413)) by @Molunerfinn

  - Add `getSubclassesOfAsync` to FlowEngine for discovering async-registered model classes via the new `extends` field in `registerModelLoaders`. ([#9065](https://github.com/nocobase/nocobase/pull/9065)) by @Molunerfinn

- **[server]** AI employees can search bundled documentation with Bash commands ([#9269](https://github.com/nocobase/nocobase/pull/9269)) by @2013xile

- **[cli-v1]** resolve storage path from env ([#9147](https://github.com/nocobase/nocobase/pull/9147)) by @chenos

- **[Async task manager]** Added v2 client support for the async task manager topbar action. ([#9707](https://github.com/nocobase/nocobase/pull/9707)) by @jiannx

- **[Backup manager]**
  - Added v2 client runtime support for the backup manager plugin. ([#9712](https://github.com/nocobase/nocobase/pull/9712)) by @katherinehhh

  - Adapt to the new version control plugin ([#9563](https://github.com/nocobase/nocobase/pull/9563)) by @cgyrock

- **[Block: Gantt]**
  - Added an option for Gantt blocks to focus on today by default when opened ([#9692](https://github.com/nocobase/nocobase/pull/9692)) by @jiannx

  - Added v2 support for the Gantt block. ([#9545](https://github.com/nocobase/nocobase/pull/9545)) by @jiannx

- **[Access control]** Migrated the Users and Roles & Permissions settings pages to v2. ([#9619](https://github.com/nocobase/nocobase/pull/9619)) by @jiannx

- **[Office File Previewer]** Migrate the Office file preview plugin to the v2 (FlowEngine) client. ([#9620](https://github.com/nocobase/nocobase/pull/9620)) by @Molunerfinn

- **[Workflow]**
  - Add timeout control for workflows, support to automatically abort time-outed execution if timeout option is set ([#9363](https://github.com/nocobase/nocobase/pull/9363)) by @mytharcher

  - Add created and updated by fields for workflows ([#9217](https://github.com/nocobase/nocobase/pull/9217)) by @mytharcher

  - Add API to check node creation ([#9207](https://github.com/nocobase/nocobase/pull/9207)) by @mytharcher

  - Add log field for jobs, in order to show log content of some node for debug ([#9165](https://github.com/nocobase/nocobase/pull/9165)) by @mytharcher

- **[IdP: OAuth]**
  - Added foundation support for app single sign-on in multi-app deployments ([#9547](https://github.com/nocobase/nocobase/pull/9547)) by @2013xile

  - Add a new IdP: OAuth plugin to enable MCP services to authenticate via OAuth ([#8896](https://github.com/nocobase/nocobase/pull/8896)) by @2013xile

- **[Theme editor]** Theme editor is now available in the v2 interface ([#9530](https://github.com/nocobase/nocobase/pull/9530)) by @zhangzhonghe

- **[Block: Kanban]**
  - Added client-v2 support for the Kanban plugin ([#9475](https://github.com/nocobase/nocobase/pull/9475)) by @jiannx

  - kanban block v2 ([#9142](https://github.com/nocobase/nocobase/pull/9142)) by @jiannx

- **[Block: Markdown]** Added client v2 support for Markdown blocks ([#9487](https://github.com/nocobase/nocobase/pull/9487)) by @jiannx

- **[Block: List]** List blocks support client-v2 ([#9486](https://github.com/nocobase/nocobase/pull/9486)) by @jiannx

- **[Calendar]**
  - Added client v2 support for the Calendar plugin. ([#9464](https://github.com/nocobase/nocobase/pull/9464)) by @jiannx

  - calendar block v2 ([#9092](https://github.com/nocobase/nocobase/pull/9092)) by @jiannx

- **[Block: Tree]**
  - Added client-v2 support for the tree filter block. ([#9466](https://github.com/nocobase/nocobase/pull/9466)) by @jiannx

  - Add tree filter block ([#9016](https://github.com/nocobase/nocobase/pull/9016)) by @jiannx

- **[AI employees]**
  - Workflow AI employee node supports loading files from attachment fields. ([#9402](https://github.com/nocobase/nocobase/pull/9402)) by @cgyrock

  - The workflow has added AI employee instruction ([#9025](https://github.com/nocobase/nocobase/pull/9025)) by @cgyrock

  - Added a data query tool and business analysis report tool for AI employees ([#9040](https://github.com/nocobase/nocobase/pull/9040)) by @2013xile

  - Add the ability to invoke sub agents for AI employees ([#8935](https://github.com/nocobase/nocobase/pull/8935)) by @cgyrock

  - Added SKILLS capability to AI employees. ([#8797](https://github.com/nocobase/nocobase/pull/8797)) by @cgyrock

- **[Data visualization]** Add client-v2 support for block plugins ([#9297](https://github.com/nocobase/nocobase/pull/9297)) by @zhangzhonghe

- **[Auth: API keys]** add `pm list` and `generate-api-key` commands ([#9076](https://github.com/nocobase/nocobase/pull/9076)) by @chenos

- **[AI: MCP server]**
  - Provides a generic data collection query API, callable via MCP ([#8985](https://github.com/nocobase/nocobase/pull/8985)) by @2013xile

  - Add a new MCP server plugin to allow building NocoBase systems and supporting business workflows. ([#8824](https://github.com/nocobase/nocobase/pull/8824)) by @2013xile

- **[Data source manager]** Support on-demand loading of MCP tools ([#8936](https://github.com/nocobase/nocobase/pull/8936)) by @2013xile

- **[Collection field: Code]** field-code supports 2.0 ([#8804](https://github.com/nocobase/nocobase/pull/8804)) by @jiannx

- **[Data source: External NocoBase]** Added an data source plugin: external NocoBase by @2013xile

- **[Multi-space]** Added client v2 support for the multi-space plugin, including space switching and space management. by @jiannx

- **[App SSO]** Added an App SSO plugin for automatic sign-in between applications by @2013xile

- **[Version control]** Add version control plugin by @cgyrock

- **[Two-factor authentication (2FA)]** TOTP and two-factor authentication can now be bound, verified, and configured from the v2 client. by @Molunerfinn

- **[Password policy]** Migrate plugin-password-policy to the client-v2 admin shell with the Password policy / Locked users settings pages and client-side rule enforcement on the user-center change-password form. by @Molunerfinn

- **[Workflow: Webhook]** Add 408 response status for timed-out webhook workflow (sync mode) by @mytharcher

- **[Workflow: Subflow]** Support timeout setting in workflow by @mytharcher

- **[Migration manager]** Add some APIs for nocobase cli by @Andrew1989Y

- **[File storage: S3(Pro)]** Support uploading files via S3 Pro storage in the v2 file manager. by @Molunerfinn

- **[Auth: OIDC]** Migrate `plugin-auth-oidc` to v2 admin; sign-in button, admin settings form, and SSO auto-redirect now work under v2. by @Molunerfinn

- **[Workflow: Approval]**
  - Support timeout setting in workflow by @mytharcher

  - Support to delete draft approval by @mytharcher

- **[Email manager]** gmail supports sending emails with aliases by @jiannx

- **[App supervisor]** Added App SSO settings for sub applications by @2013xile

- **[Auth: LDAP]** Add v2 client entry so the LDAP authenticator renders its sign-in form and admin settings on v2 apps. by @Molunerfinn

### 🚀 Improvements

- **[undefined]**
  - support session-scoped current env in nb cli ([#9415](https://github.com/nocobase/nocobase/pull/9415)) by @chenos

  - Align Spanish, Portuguese, Russian, and German documentation with the English source. ([#9299](https://github.com/nocobase/nocobase/pull/9299)) by @Molunerfinn

  - Sync French documentation with the Chinese source. ([#9291](https://github.com/nocobase/nocobase/pull/9291)) by @Molunerfinn

  - Update AI docs to require NocoBase >= 2.1.0-beta.20 and recommend latest beta version. ([#9252](https://github.com/nocobase/nocobase/pull/9252)) by @Molunerfinn

  - Improve AI Agent installation guide to prevent Agents from bypassing the `--ui` wizard and to auto-detect Node version managers. ([#9243](https://github.com/nocobase/nocobase/pull/9243)) by @Molunerfinn

  - - ([#9098](https://github.com/nocobase/nocobase/pull/9098)) by @Molunerfinn

  - Add a dedicated client-v2 entry and build it independently with rsbuild while keeping v1 unchanged. ([#8743](https://github.com/nocobase/nocobase/pull/8743)) by @Molunerfinn

- **[client-v2]**
  - Added support for disabling multiple selection in v2 popup select association fields. ([#9730](https://github.com/nocobase/nocobase/pull/9730)) by @katherinehhh

  - Improved v2 block rendering when a configured external data source is disabled, preventing render errors and showing a clearer UI Editor placeholder. ([#9699](https://github.com/nocobase/nocobase/pull/9699)) by @katherinehhh

  - add v2 table row selection setting ([#9614](https://github.com/nocobase/nocobase/pull/9614)) by @katherinehhh

  - support action panel action colors ([#9612](https://github.com/nocobase/nocobase/pull/9612)) by @katherinehhh

  - Remove the Hidden option from menu configuration ([#9596](https://github.com/nocobase/nocobase/pull/9596)) by @zhangzhonghe

  - Filter out v1 menus in the v2 layout and only show v2 menus ([#9427](https://github.com/nocobase/nocobase/pull/9427)) by @zhangzhonghe

  - Separate client v2 from client v1, and remove its dependency on client v1 ([#8937](https://github.com/nocobase/nocobase/pull/8937)) by @zhangzhonghe

- **[server]**
  - The modern client is now served under `/v/` instead of `/v2/`. ([#9674](https://github.com/nocobase/nocobase/pull/9674)) by @Molunerfinn

  - Improved swagger API docs of plugin manager ([#9080](https://github.com/nocobase/nocobase/pull/9080)) by @2013xile

- **[cli]**
  - improve init and self update guidance ([#9633](https://github.com/nocobase/nocobase/pull/9633)) by @chenos

  - streamline app upgrade flow ([#9587](https://github.com/nocobase/nocobase/pull/9587)) by @chenos

  - improve env auth flow ([#9546](https://github.com/nocobase/nocobase/pull/9546)) by @chenos

  - Improved the NocoBase CLI prompt experience by migrating setup and management workflows to Inquirer, and fixed related install, skills, and Docker runtime issues. ([#9452](https://github.com/nocobase/nocobase/pull/9452)) by @chenos

  - Added CLI request source tracking in request logs and audit logs ([#9223](https://github.com/nocobase/nocobase/pull/9223)) by @2013xile

  - Improved generated API CLI help output and ACL command grouping ([#9166](https://github.com/nocobase/nocobase/pull/9166)) by @2013xile

  - Improved `nb api` help fallback and unified warning messages for runtime bootstrap failures ([#9153](https://github.com/nocobase/nocobase/pull/9153)) by @2013xile

- **[client]**
  - Migrate jsonLogic from Application v1 to BaseApplication ([#9522](https://github.com/nocobase/nocobase/pull/9522)) by @zhangzhonghe

  - support setting field styles through runjs ([#8933](https://github.com/nocobase/nocobase/pull/8933)) by @jiannx

  - Refactor admin layout settings and application to model host architecture with v1 v2 compatibility safeguards ([#8710](https://github.com/nocobase/nocobase/pull/8710)) by @zhangzhonghe

- **[build]**
  - Added regression coverage to keep `deleteServerFiles` from removing `client` and `client-v2` build artifacts across Windows and POSIX paths. ([#9318](https://github.com/nocobase/nocobase/pull/9318)) by @Molunerfinn

  - App client production builds now run on Rsbuild, and build profiling plus declaration scheduling improvements make build bottlenecks easier to identify and reduce. ([#8963](https://github.com/nocobase/nocobase/pull/8963)) by @Molunerfinn

  - Migrate the client build pipeline in `@nocobase/build` from Vite to Rsbuild. ([#8932](https://github.com/nocobase/nocobase/pull/8932)) by @Molunerfinn

- **[database]** Fixed AI business report generation and data query behavior to avoid malformed chart output, incorrect datetime handling, and missing multi-data-source coverage ([#9078](https://github.com/nocobase/nocobase/pull/9078)) by @2013xile

- **[flow-engine]**
  - Improve schema validation for ui building api. ([#8881](https://github.com/nocobase/nocobase/pull/8881)) by @gchust

  - Improve schema validation for ui building api. ([#8881](https://github.com/nocobase/nocobase/pull/8881)) by @gchust

- **[app]** Add an Rsbuild-based dev workflow for client-v1 while keeping local plugin development and the current `/v2/` topology compatible ([#8902](https://github.com/nocobase/nocobase/pull/8902)) by @Molunerfinn

- **[Variables and secrets]** Environment variables (`$env`) can now be selected by flow-engine-based variable pickers in the v1 runtime. ([#9728](https://github.com/nocobase/nocobase/pull/9728)) by @Molunerfinn

- **[Data source manager]**
  - Added client-v2 data source permission management and aligned related permission picker drawers. ([#9706](https://github.com/nocobase/nocobase/pull/9706)) by @jiannx

  - Optimize the data modeling API to support creating comment collections with AI, configuring relationship fields for external data sources, and setting field validation rules ([#9480](https://github.com/nocobase/nocobase/pull/9480)) by @2013xile

- **[Collection: Connect to foreign data (FDW)]** Improved V2 collection template parity for SQL collections and foreign data collections, including SQL confirmation, foreign database server management, and template ordering. ([#9711](https://github.com/nocobase/nocobase/pull/9711)) by @katherinehhh

- **[Multi-keyword filter]** Migrate multi keyword filter into client v2. ([#9691](https://github.com/nocobase/nocobase/pull/9691)) by @gchust

- **[Workflow]**
  - Removed workflow history transaction coupling from workflow execution. ([#9668](https://github.com/nocobase/nocobase/pull/9668)) by @mytharcher

  - Refactor workflow async-node availability checks ([#9532](https://github.com/nocobase/nocobase/pull/9532)) by @mytharcher

  - Add validation for all triggers and nodes ([#8930](https://github.com/nocobase/nocobase/pull/8930)) by @mytharcher

- **[UI templates]** Migrate UI templates to client v2. ([#9591](https://github.com/nocobase/nocobase/pull/9591)) by @gchust

- **[Departments]** Added a v2 settings page for managing departments, department members, and user department assignments. ([#9660](https://github.com/nocobase/nocobase/pull/9660)) by @jiannx

- **[Notification manager]** Migrate the notification-related plugins to v2. ([#9597](https://github.com/nocobase/nocobase/pull/9597)) by @Molunerfinn

- **[Data visualization]** Added client v2 support for chart blocks. ([#9517](https://github.com/nocobase/nocobase/pull/9517)) by @jiannx

- **[Verification]** Add v2 client to the Verification plugin (admin settings page, user center entry, SMS OTP forms). ([#9515](https://github.com/nocobase/nocobase/pull/9515)) by @Molunerfinn

- **[Authentication]**
  - Custom brand settings now work correctly in the v2 client ([#9543](https://github.com/nocobase/nocobase/pull/9543)) by @zhangzhonghe

  - Implement the Authenticators settings page in client-v2 and ship reusable client-v2 table, variable input, and form primitives. ([#9457](https://github.com/nocobase/nocobase/pull/9457)) by @Molunerfinn

- **[Block: Map]** Added v2 client support for the map plugin. ([#9511](https://github.com/nocobase/nocobase/pull/9511)) by @jiannx

- **[Localization]** Improved Lina localization translation tasks with translation scope, reference language settings, and quick editing ([#9521](https://github.com/nocobase/nocobase/pull/9521)) by @2013xile

- **[Workflow: Custom action event]**
  - Migrated the block-workbench and workflow-custom-action-trigger plugins to client v2, including their action models and QR scanner flow. ([#9494](https://github.com/nocobase/nocobase/pull/9494)) by @jiannx

  - Add ACL control of triggering on record mode (both single and multiple) ([#9125](https://github.com/nocobase/nocobase/pull/9125)) by @mytharcher

- **[Block: iframe]** Added v2 support for the iframe block. ([#9485](https://github.com/nocobase/nocobase/pull/9485)) by @jiannx

- **[Block: GridCard]** Updated grid card plugin to support client v2 ([#9484](https://github.com/nocobase/nocobase/pull/9484)) by @jiannx

- **[AI employees]**
  - AI employee parallel conversation Interaction and performance optimization ([#9462](https://github.com/nocobase/nocobase/pull/9462)) by @cgyrock

  - AI employee support parallel processing of multiple conversation ([#9344](https://github.com/nocobase/nocobase/pull/9344)) by @cgyrock

  - Improved Nathan's RunJS editing tools and reduced lag during long AI chat conversations ([#9311](https://github.com/nocobase/nocobase/pull/9311)) by @2013xile

  - Update AI employee shortcut task configuration to use the same skills settings component as workflow AI employee node configuration ([#9246](https://github.com/nocobase/nocobase/pull/9246)) by @cgyrock

  - Adjust the skill/tool configuration interaction for AI employee instruction ([#9232](https://github.com/nocobase/nocobase/pull/9232)) by @cgyrock

  - Update AI chatbox user prompt ([#8717](https://github.com/nocobase/nocobase/pull/8717)) by @heziqiang

  - Update AI chatbox user prompt ([#8717](https://github.com/nocobase/nocobase/pull/8717)) by @heziqiang

- **[File manager]** Third-party storage plugins can now register their own storage type form on the v2 file manager settings page. ([#9439](https://github.com/nocobase/nocobase/pull/9439)) by @Molunerfinn

- **[Block: Kanban]**
  - Improved v2 detail field spacing consistency and made kanban card and column spacing better adapt to theme settings. ([#9390](https://github.com/nocobase/nocobase/pull/9390)) by @jiannx

  - Reduced the default kanban column width. ([#9306](https://github.com/nocobase/nocobase/pull/9306)) by @jiannx

  - Improved Calendar and Kanban block creation settings. ([#9294](https://github.com/nocobase/nocobase/pull/9294)) by @jiannx

- **[IdP: OAuth]** OAuth sessions now use the same expiration settings as the system token policy ([#9345](https://github.com/nocobase/nocobase/pull/9345)) by @2013xile

- **[Access control]** add some new apis for acl skill ([#9198](https://github.com/nocobase/nocobase/pull/9198)) by @Andrew1989Y

- **[Flow engine]** Add new apis for ui building. ([#8992](https://github.com/nocobase/nocobase/pull/8992)) by @gchust

- **[Action: Custom request]**
  - add action models for custom request ([#8890](https://github.com/nocobase/nocobase/pull/8890)) by @jiannx

  - Event streaming supports custom requests ([#8749](https://github.com/nocobase/nocobase/pull/8749)) by @jiannx

- **[Workflow: Pre-action event]** Add validation rules for triggers and nodes ([#8971](https://github.com/nocobase/nocobase/pull/8971)) by @mytharcher

- **[Collection field: administrative divisions of China]** field-china-region 2.0 ([#8831](https://github.com/nocobase/nocobase/pull/8831)) by @jiannx

- **[Auth: SAML 2.0]**
  - SAML/CAS signin redirects now follow the modern client prefix. by @Molunerfinn

  - Add client-v2 entries for the CAS and SAML authentication plugins so they work with the v2 sign-in page and Authenticators settings. by @Molunerfinn

- **[IP restriction]** Add a v2 client for the IP restriction plugin. by @Molunerfinn

- **[Custom brand]** Custom brand settings are now available in the v2 client by @zhangzhonghe

- **[Workflow: Webhook]** Add validation for creating trigger / node API by @mytharcher

- **[Workflow: Subflow]**
  - Removed workflow history transaction coupling from subflow workflow instructions. by @mytharcher

  - Add validation for creating node API by @mytharcher

- **[Template print]** Updated print template collection metadata for version-control backup classification. by @cgyrock

- **[Auth: OIDC]** OIDC signin redirect now follows the modern client prefix. by @Molunerfinn

- **[Record history]** Updated record history collection metadata for version-control backup classification. by @cgyrock

- **[Workflow: Approval]**
  - Add `async` flag for approval instruction, to adapt new creating node API in workflow canvas by @mytharcher

  - Removed workflow history transaction coupling from approval workflow instructions. by @mytharcher

  - Add validation for approval node creation by @mytharcher

  - Updated workflow approval collection metadata for version-control backup classification. by @cgyrock

  - Add validation for trigger / node API by @mytharcher

  - Adjust validation rules for approval trigger config and node config, to make sure UI field is existed by @mytharcher

- **[Audit logs]** Updated audit logger collection metadata for version-control backup classification. by @cgyrock

- **[Email manager]** Updated email manager collection metadata for version-control backup classification. by @cgyrock

- **[App supervisor]** Updated app supervisor collection metadata for version-control backup classification. by @cgyrock

### 🐛 Bug Fixes

- **[undefined]**
  - align nginx config paths ([#9528](https://github.com/nocobase/nocobase/pull/9528)) by @chenos

  - Fix dead links in translated documentation and enable dead-link detection by default in the docs build. ([#9371](https://github.com/nocobase/nocobase/pull/9371)) by @Molunerfinn

  - Fix the dependency-and-build workflow so standalone pro plugin checkout failures break CI instead of silently skipping build coverage. ([#9324](https://github.com/nocobase/nocobase/pull/9324)) by @Molunerfinn

  - Fix bloated translation files and align cross-language documentation structure. ([#9305](https://github.com/nocobase/nocobase/pull/9305)) by @Molunerfinn

  - Fix language switcher generating incorrect URLs (e.g., `/cn/es/` instead of `/es/`) in the documentation site. ([#9233](https://github.com/nocobase/nocobase/pull/9233)) by @Molunerfinn

- **[client-v2]**
  - Fixed JSON fields in client v2 display views rendering blank cells for object values. ([#9714](https://github.com/nocobase/nocobase/pull/9714)) by @katherinehhh

  - Fixed V2 option fields incorrectly translating plain option labels in localized environments. ([#9708](https://github.com/nocobase/nocobase/pull/9708)) by @katherinehhh

  - Fixed v2 table columns becoming invisible when the custom column width is set to 0. ([#9689](https://github.com/nocobase/nocobase/pull/9689)) by @katherinehhh

  - Adjusted all relation field selectors to limit association fields to a maximum of two levels ([#9454](https://github.com/nocobase/nocobase/pull/9454)) by @jiannx

  - Fix menu linkage rule save errors ([#9666](https://github.com/nocobase/nocobase/pull/9666)) by @zhangzhonghe

  - Fix the excessive spacing above blocks on v2 pages ([#9647](https://github.com/nocobase/nocobase/pull/9647)) by @zhangzhonghe

  - preserve assign field values ([#9640](https://github.com/nocobase/nocobase/pull/9640)) by @katherinehhh

  - Fix the sub-app sign-in tabs rendering raw translation templates, and prevent the v2 authentication-method edit drawer from dropping field values on submit. ([#9581](https://github.com/nocobase/nocobase/pull/9581)) by @Molunerfinn

  - Improve plugin manager page performance by using CSS line-clamp instead of antd Typography ellipsis. ([#9593](https://github.com/nocobase/nocobase/pull/9593)) by @Molunerfinn

  - Fixed browser language metadata so the app page follows the selected application language instead of being marked as English. ([#9564](https://github.com/nocobase/nocobase/pull/9564)) by @Molunerfinn

  - Fixed inconsistent dnd-kit dependency registration. ([#9544](https://github.com/nocobase/nocobase/pull/9544)) by @jiannx

  - Fixed the Kanban plugin v2 route failing to load because dnd-kit dependencies were not provided by the client. ([#9516](https://github.com/nocobase/nocobase/pull/9516)) by @jiannx

  - The shared v2 Table component now shows the page-size selector by default, matching v1 behavior. ([#9512](https://github.com/nocobase/nocobase/pull/9512)) by @Molunerfinn

  - Fix issue where the title field option list is empty for relation fields in table blocks ([#9490](https://github.com/nocobase/nocobase/pull/9490)) by @katherinehhh

  - Keep empty groups after filtering v1 menus in the v2 layout ([#9478](https://github.com/nocobase/nocobase/pull/9478)) by @zhangzhonghe

  - Fix the issue where the page turns blank behind the plugin enabling dialog ([#9455](https://github.com/nocobase/nocobase/pull/9455)) by @zhangzhonghe

  - Fix v1 admin pages crashing when they reference v2 plugin modules in production builds. ([#9460](https://github.com/nocobase/nocobase/pull/9460)) by @Molunerfinn

  - Fixed error when selecting association fields in field settings. ([#9379](https://github.com/nocobase/nocobase/pull/9379)) by @gchust

  - Fix the issue where a 404 page flashes after the app starts ([#9365](https://github.com/nocobase/nocobase/pull/9365)) by @zhangzhonghe

  - Fix the issue where some v2 pages fail to load remote plugins ([#9369](https://github.com/nocobase/nocobase/pull/9369)) by @zhangzhonghe

  - Fix the v2 page block drag placeholder and drop position issues ([#9361](https://github.com/nocobase/nocobase/pull/9361)) by @zhangzhonghe

  - Fixed remote plugin loading so plugin URLs that already end with `.js` are not resolved to duplicate `.js.js` paths. ([#9336](https://github.com/nocobase/nocobase/pull/9336)) by @Molunerfinn

  - Fix the issue where `RemoteSelect` not rendering in configuration of bind workflow ([#9314](https://github.com/nocobase/nocobase/pull/9314)) by @mytharcher

- **[client]**
  - Fix the issue where blocks may incorrectly show as deleted after refreshing the page ([#9662](https://github.com/nocobase/nocobase/pull/9662)) by @zhangzhonghe

  - fix issue where subtable in subform could not add a second row ([#9586](https://github.com/nocobase/nocobase/pull/9586)) by @katherinehhh

  - fix preserve time format for v2 time fields ([#9579](https://github.com/nocobase/nocobase/pull/9579)) by @katherinehhh

  - increase scan input image upload limit ([#9580](https://github.com/nocobase/nocobase/pull/9580)) by @katherinehhh

  - fix sync mobile date picker popup value ([#9582](https://github.com/nocobase/nocobase/pull/9582)) by @katherinehhh

  - Fixed dev mode loading for built storage plugins that depend on named exports from local source plugins. ([#9548](https://github.com/nocobase/nocobase/pull/9548)) by @Molunerfinn

  - Fix the issue where system settings appear empty after submitting ([#9458](https://github.com/nocobase/nocobase/pull/9458)) by @zhangzhonghe

  - filter non-essential optional blocks in the selection pop-up box of related fields ([#9224](https://github.com/nocobase/nocobase/pull/9224)) by @jiannx

  - Fix the issue where the page title does not update after switching menus ([#8864](https://github.com/nocobase/nocobase/pull/8864)) by @zhangzhonghe

- **[flow-engine]**
  - Fix the issue where field search is cleared when hovering over association fields ([#9646](https://github.com/nocobase/nocobase/pull/9646)) by @zhangzhonghe

  - Fix unstable cascading menus when typing in search boxes ([#9473](https://github.com/nocobase/nocobase/pull/9473)) by @zhangzhonghe

  - Fixed incorrect error message in browser's console. ([#9502](https://github.com/nocobase/nocobase/pull/9502)) by @gchust

  - Fixed unstable relation-field submenus in submodel menus ([#9417](https://github.com/nocobase/nocobase/pull/9417)) by @jiannx

  - Add js snippets for setting form item and details item ([#8974](https://github.com/nocobase/nocobase/pull/8974)) by @jiannx

- **[build]**
  - Text assets in server builds are now copied as files instead of being converted into JavaScript modules. ([#9565](https://github.com/nocobase/nocobase/pull/9565)) by @Molunerfinn

  - Fix plugin build failure when v1 client code imports another plugin's `/client-v2` entry. ([#9436](https://github.com/nocobase/nocobase/pull/9436)) by @Molunerfinn

- **[cli-v1]**
  - Fixed create-nocobase-app development startup by reusing packaged app shells while enabling local plugin development. ([#9471](https://github.com/nocobase/nocobase/pull/9471)) by @Molunerfinn

  - Fixed development startup failures in apps created with create-nocobase-app caused by app-dev client path resolution. ([#9465](https://github.com/nocobase/nocobase/pull/9465)) by @Molunerfinn

- **[server]**
  - Fixed sub-application OAuth discovery requests being routed as main-app requests ([#9383](https://github.com/nocobase/nocobase/pull/9383)) by @2013xile

  - Support getting the target application by hostname ([#8978](https://github.com/nocobase/nocobase/pull/8978)) by @2013xile

- **[cli]**
  - Fixed CLI boolean options so they can be disabled with negated flags ([#9337](https://github.com/nocobase/nocobase/pull/9337)) by @2013xile

  - Fixed CLI OAuth login failures on Windows caused by long authorization URLs ([#9159](https://github.com/nocobase/nocobase/pull/9159)) by @2013xile

- **[ai]** Fix missing category field setup during AI employee registration ([#9300](https://github.com/nocobase/nocobase/pull/9300)) by @cgyrock

- **[test]** Fixed plugin builds so server dependencies with dotted package names like `big.js` are packaged into `dist/node_modules`. ([#8953](https://github.com/nocobase/nocobase/pull/8953)) by @Molunerfinn

- **[Calendar]**
  - Fixed an issue where Details and Edit blocks could not be added in v2 calendar block detail drawers ([#9729](https://github.com/nocobase/nocobase/pull/9729)) by @jiannx

  - Fixed calendar event colors not rendering from the configured color field in v2 pages. ([#9677](https://github.com/nocobase/nocobase/pull/9677)) by @jiannx

  - Fixed the cursor style for event items in the calendar more-events overlay ([#9519](https://github.com/nocobase/nocobase/pull/9519)) by @jiannx

  - not register calendar actions to other blocks ([#9200](https://github.com/nocobase/nocobase/pull/9200)) by @jiannx

- **[AI employees]**
  - Improved AI employee data-query prompts to load the required skill before using query tools. ([#9725](https://github.com/nocobase/nocobase/pull/9725)) by @cgyrock

  - Fixed the missing Dara assistant button in client-v2 chart settings. ([#9696](https://github.com/nocobase/nocobase/pull/9696)) by @cgyrock

  - Workflow AI employee nodes can use the default model ([#9679](https://github.com/nocobase/nocobase/pull/9679)) by @cgyrock

  - Fixed `ctx.get` errors in AI employee workflow nodes ([#9661](https://github.com/nocobase/nocobase/pull/9661)) by @cgyrock

  - Fix error when AI employee access read-only knowledge base ([#9538](https://github.com/nocobase/nocobase/pull/9538)) by @cgyrock

  - Fixed AI tool call cards not appearing immediately when streamed tool events are split ([#9534](https://github.com/nocobase/nocobase/pull/9534)) by @2013xile

  - Fix issue where operator role permissions are not taking effect in AI employee nodes ([#9513](https://github.com/nocobase/nocobase/pull/9513)) by @cgyrock

  - Fixed plugin-ai load error ([#9483](https://github.com/nocobase/nocobase/pull/9483)) by @cgyrock

  - Fix workflow AI employee node not ending properly after tool assignment. ([#9381](https://github.com/nocobase/nocobase/pull/9381)) by @cgyrock

  - Fix AI employee node reading associations field attachment error in workflow ([#9377](https://github.com/nocobase/nocobase/pull/9377)) by @cgyrock

  - Fix the issue where the workflow AI employee node  clears skills after switching AI employees ([#9342](https://github.com/nocobase/nocobase/pull/9342)) by @cgyrock

  - Fix AI employee shortcut task rendering error ([#9267](https://github.com/nocobase/nocobase/pull/9267)) by @cgyrock

  - Fix the error in the API for fetching the AI employee list ([#9241](https://github.com/nocobase/nocobase/pull/9241)) by @cgyrock

  - Refined Atlas task delegation behavior and updated Viz to use the business report workflow for report requests ([#9229](https://github.com/nocobase/nocobase/pull/9229)) by @2013xile

  - Workflow AI employee:  UI adjustment and bug fixes. ([#9213](https://github.com/nocobase/nocobase/pull/9213)) by @cgyrock

  - Fix log recording anomalies in AI employee instruction ([#9180](https://github.com/nocobase/nocobase/pull/9180)) by @cgyrock

  - Fixed aggregate query sorting dropped by ACL ([#9099](https://github.com/nocobase/nocobase/pull/9099)) by @2013xile

  - Fixed the issue where error messages were not displayed in the AI employee conversations ([#9097](https://github.com/nocobase/nocobase/pull/9097)) by @cgyrock

  - Fix the issue where AI employees were unable to use skills ([#9023](https://github.com/nocobase/nocobase/pull/9023)) by @cgyrock

  - Fix the issue where the LLM still attempts to load skills after the getSkill tool is disabled ([#9013](https://github.com/nocobase/nocobase/pull/9013)) by @cgyrock

  - Fix failing test cases in the ai module of the core package. ([#8941](https://github.com/nocobase/nocobase/pull/8941)) by @cgyrock

- **[Data source manager]**
  - Fixed stale title field display when reopening the v2 data source field configuration drawer after changing the title field. ([#9720](https://github.com/nocobase/nocobase/pull/9720)) by @katherinehhh

  - Improved V2 data source manager error messages when collection, field, sync, and table-loading operations fail. ([#9710](https://github.com/nocobase/nocobase/pull/9710)) by @katherinehhh

  - Fixed multi-space field localization in v2 data source manager. ([#9690](https://github.com/nocobase/nocobase/pull/9690)) by @jiannx

  - Optimized MCP tool naming and reduce redundant API responses to avoid excessive consumption of AI conversation context ([#9000](https://github.com/nocobase/nocobase/pull/9000)) by @2013xile

- **[Block: Map]** Fixed map geometry fields missing from the v2 data source manager add-field menu after enabling the map plugin. ([#9715](https://github.com/nocobase/nocobase/pull/9715)) by @katherinehhh

- **[Collection: SQL]** Blocked SQL Collection access to sensitive PostgreSQL metadata ([#9683](https://github.com/nocobase/nocobase/pull/9683)) by @2013xile

- **[Workflow: Custom action event]**
  - Fixed the workflow trigger action missing from the workbench action panel button list. ([#9682](https://github.com/nocobase/nocobase/pull/9682)) by @katherinehhh

  - Fix duplicate Trigger workflow options in v2 block action menus ([#9622](https://github.com/nocobase/nocobase/pull/9622)) by @zhangzhonghe

  - Filter custom action workflow binding options by the current block collection. ([#9610](https://github.com/nocobase/nocobase/pull/9610)) by @mytharcher

- **[Action: Duplicate record]** fix(duplicate): reset button state on submission failure ([#9676](https://github.com/nocobase/nocobase/pull/9676)) by @katherinehhh

- **[Block: Gantt]**
  - Improved gantt tooltip placement to avoid covering task bars and aligned task labels consistently inside and outside bars ([#9638](https://github.com/nocobase/nocobase/pull/9638)) by @jiannx

  - Fixed the v2 gantt shared folder path and added zebra striping. ([#9621](https://github.com/nocobase/nocobase/pull/9621)) by @jiannx

- **[License settings]**
  - Added client-v2 support for license settings and commercial license injection. ([#9555](https://github.com/nocobase/nocobase/pull/9555)) by @jiannx

  - resolve symlinked bundled deps ([#9518](https://github.com/nocobase/nocobase/pull/9518)) by @chenos

- **[File manager]** Improved PDF preview failure messages and documented CORS requirements for external storage. ([#9600](https://github.com/nocobase/nocobase/pull/9600)) by @mytharcher
Reference: [File Preview](docs/docs/en/file-manager/file-preview/index.md)
- **[Block: iframe]** fix  iframe content not filling configured block height ([#9540](https://github.com/nocobase/nocobase/pull/9540)) by @katherinehhh

- **[Action: Export records]** improve field configuration performance with many association fields ([#9524](https://github.com/nocobase/nocobase/pull/9524)) by @katherinehhh

- **[Localization]** Fixed built-in localization reference translations for AI translation tasks ([#9531](https://github.com/nocobase/nocobase/pull/9531)) by @2013xile

- **[Authentication]** Prevent the server from crashing when a WebSocket auth token references an authenticator whose auth type plugin is unloaded or missing. ([#9514](https://github.com/nocobase/nocobase/pull/9514)) by @Molunerfinn

- **[Workflow: JavaScript]**
  - Fixed workflow JavaScript QuickJS runtime package loading in production builds. ([#9503](https://github.com/nocobase/nocobase/pull/9503)) by @mytharcher

  - Fix the issue where error thrown when configure JavaScript node ([#9169](https://github.com/nocobase/nocobase/pull/9169)) by @mytharcher

- **[Block: Markdown]** Fix the issue of v2 Markdown block reporting errors ([#9440](https://github.com/nocobase/nocobase/pull/9440)) by @zhangzhonghe

- **[Block: Tree]**
  - Improved tree filter block settings and fixed unsupported association, title-field fallback, and search reset behavior. ([#9426](https://github.com/nocobase/nocobase/pull/9426)) by @jiannx

  - Fix the abnormal display of filter block nodes ([#9260](https://github.com/nocobase/nocobase/pull/9260)) by @jiannx

- **[Mobile (deprecated)]** Fix mobile message popups that could not be closed or scrolled ([#9424](https://github.com/nocobase/nocobase/pull/9424)) by @zhangzhonghe

- **[AI: MCP server]**
  - Fixed MCP server packaging so runtime dependencies are included ([#9401](https://github.com/nocobase/nocobase/pull/9401)) by @2013xile

  - Fixed authentication mismatches caused by unrelated forwarded headers in the MCP generic CRUD tool ([#8983](https://github.com/nocobase/nocobase/pull/8983)) by @2013xile

  - Fixed MCP tools generated from Swagger when input schemas include `null` types or `nullable` markers that are invalid for OpenAI tool validation ([#8994](https://github.com/nocobase/nocobase/pull/8994)) by @2013xile

- **[Flow engine]** Fixed an issue where blocks generated by AI could not be converted from reference templates back to duplicate templates. ([#9392](https://github.com/nocobase/nocobase/pull/9392)) by @gchust

- **[Block: Kanban]**
  - Improved Kanban card compact styling and optimized quick-create popup template selection. ([#9370](https://github.com/nocobase/nocobase/pull/9370)) by @jiannx

  - Fixed kanban associated blocks using unresolved runtime resource params in popup or secondary-page contexts. ([#9350](https://github.com/nocobase/nocobase/pull/9350)) by @jiannx

  - Fixed repeated display of field configuration floating layer ([#9271](https://github.com/nocobase/nocobase/pull/9271)) by @jiannx

- **[Action: Custom request]** upgrade koa to v3 ([#9368](https://github.com/nocobase/nocobase/pull/9368)) by @chenos

- **[Data visualization]** Fixed empty field selectors in chart query configuration on flow pages ([#9276](https://github.com/nocobase/nocobase/pull/9276)) by @2013xile

- **[IdP: OAuth]**
  - Fixed OAuth CLI sign-in failures and restricted dynamic registration to local callback URLs ([#9248](https://github.com/nocobase/nocobase/pull/9248)) by @2013xile

  - Fixed OAuth client registration and token refresh failures after service restart ([#9139](https://github.com/nocobase/nocobase/pull/9139)) by @2013xile

  - Fixed OAuth access for regular API requests ([#9120](https://github.com/nocobase/nocobase/pull/9120)) by @2013xile

  - Fixed incorrect redirect after MCP OAuth login in sub applications ([#9015](https://github.com/nocobase/nocobase/pull/9015)) by @2013xile

- **[Workflow: Aggregate node]** Fix the issue where aggregate node could not be saved because incorrect validation rule ([#9208](https://github.com/nocobase/nocobase/pull/9208)) by @mytharcher

- **[Workflow: Loop node]** Fix validations of workflow nodes ([#9111](https://github.com/nocobase/nocobase/pull/9111)) by @mytharcher

- **[Access control]** update acl swagger for mcp server ([#9096](https://github.com/nocobase/nocobase/pull/9096)) by @Andrew1989Y

- **[Workflow: mailer node]** Fix validation for variable fields ([#9047](https://github.com/nocobase/nocobase/pull/9047)) by @mytharcher

- **[Workflow]**
  - Fix incorrect validation rule of condition instruction ([#9017](https://github.com/nocobase/nocobase/pull/9017)) by @mytharcher

  - Fix the issue where mode of collection trigger can not be set to "create or update" ([#8980](https://github.com/nocobase/nocobase/pull/8980)) by @mytharcher

- **[Password policy]** Fix sign-in failures masking the real error with "argument #1 unsupported type undefined" when the underlying error has no status code. by @Molunerfinn

- **[Data source: REST API]** Fixed REST API data source plugin declaration build failures caused by mismatched data source manager client-v2 type declarations. by @katherinehhh

- **[plugin-commercial]** Added client-v2 commercial license components and topbar license status entry. by @jiannx

- **[Auth: SAML 2.0]** Fix SAML auto-redirect interceptor flickering the app shell and double-opening drawers on every navigation. by @Molunerfinn

- **[Workflow: Webhook]** Fix the issue where creating response node intercepted by validation of `statusCode` configuration by @mytharcher

- **[Migration manager]** Fix `migration:create` returning `taskId` from the async task record. by @Andrew1989Y

- **[Template print]** Fixed template print PDF conversion errors not being returned to the client correctly by @jiannx

- **[Email manager]**
  - no closing confirmation is displayed after the email is sent by @jiannx

  - Fixed the mail identities title display by @jiannx

