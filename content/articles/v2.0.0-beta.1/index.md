### 🎉 New Features

- **[undefined]** Add an experimental "Reference block" plugin, which allows reusing existing blocks by referencing or copying. ([#7584](https://github.com/nocobase/nocobase/pull/7584)) by @gchust

- **[client]**
  - Support plugin-defined maintenance components when the app enters maintenance status ([#8252](https://github.com/nocobase/nocobase/pull/8252)) by @cgyrock

  - When creating colletion, the preset id field type can be changed ([#8129](https://github.com/nocobase/nocobase/pull/8129)) by @cgyrock

  - add support for add/select/disassociate settings in to-many subform ([#8099](https://github.com/nocobase/nocobase/pull/8099)) by @katherinehhh

  - Support customizing global styles in the theme editor ([#7960](https://github.com/nocobase/nocobase/pull/7960)) by @ljmiaoo

  - support setting default sorting rule in detail block ([#8070](https://github.com/nocobase/nocobase/pull/8070)) by @katherinehhh

  - Support setting data type for Number field (options: double, float, decimal) ([#8058](https://github.com/nocobase/nocobase/pull/8058)) by @chenos

  - support column field sorting in table ([#7900](https://github.com/nocobase/nocobase/pull/7900)) by @katherinehhh

  - add quick-create support to association field select ([#7887](https://github.com/nocobase/nocobase/pull/7887)) by @katherinehhh

  - support cascade selector for tree collection association field ([#7846](https://github.com/nocobase/nocobase/pull/7846)) by @katherinehhh

  - Support dragging for table column actions ([#7842](https://github.com/nocobase/nocobase/pull/7842)) by @zhangzhonghe

  - add pagination support to sub table ([#7754](https://github.com/nocobase/nocobase/pull/7754)) by @katherinehhh

  - Event Flow: Introduced new predefined actions to enhance customization options for event handling, allowing users to streamline workflows and improve efficiency ([#7672](https://github.com/nocobase/nocobase/pull/7672)) by @zhangzhonghe

  - Add 2.0 markdown block ([#7613](https://github.com/nocobase/nocobase/pull/7613)) by @katherinehhh

  - Support for setting linkage rules for sub-forms ([#7640](https://github.com/nocobase/nocobase/pull/7640)) by @zhangzhonghe

  - Added support for table row click event listeners, enabling users to execute specific actions when a row in the table is clicked ([#7622](https://github.com/nocobase/nocobase/pull/7622)) by @zhangzhonghe

  - Add support for custom variables ([#7585](https://github.com/nocobase/nocobase/pull/7585)) by @zhangzhonghe

  - Add "Current device type" variable ([#7576](https://github.com/nocobase/nocobase/pull/7576)) by @zhangzhonghe

- **[File manager]** Support file renaming method configuration ([#8231](https://github.com/nocobase/nocobase/pull/8231)) by @JAVA-LW

- **[Workflow]**
  - Add new system variables in workflow, including `instanceId` and `genSnowflakeId()` ([#8223](https://github.com/nocobase/nocobase/pull/8223)) by @mytharcher

  - Add "Multi-conditions" node, provide the flow control like `switch` / `case` ([#7878](https://github.com/nocobase/nocobase/pull/7878)) by @mytharcher

- **[Block: Map]** add 2.0 map block ([#7944](https://github.com/nocobase/nocobase/pull/7944)) by @katherinehhh

- **[Data visualization]**
  - add AI employee for configuring chart ([#7815](https://github.com/nocobase/nocobase/pull/7815)) by @heziqiang

  - add chart sql datasource ([#7830](https://github.com/nocobase/nocobase/pull/7830)) by @heziqiang

  - add chart type "Doughnut chart" ([#7629](https://github.com/nocobase/nocobase/pull/7629)) by @heziqiang

- **[Flow engine]** Supports using LiquidJS template strings in SQL statements ([#7667](https://github.com/nocobase/nocobase/pull/7667)) by @2013xile

- **[Data source manager]**
  - The main data source now supports reading database tables directly from the main database and allows modifying field interfaces ([#7118](https://github.com/nocobase/nocobase/pull/7118)) by @aaaaaajie

  - The main data source now supports reading database tables directly from the main database and allows modifying field interfaces ([#7118](https://github.com/nocobase/nocobase/pull/7118)) by @aaaaaajie

- **[Block: GridCard]** Add 2.0 grid card block ([#7579](https://github.com/nocobase/nocobase/pull/7579)) by @katherinehhh

- **[Block: List]** Add 2.0 list block ([#7574](https://github.com/nocobase/nocobase/pull/7574)) by @katherinehhh

- **[Block: Action panel]** Add 2.0 action panel block ([#7594](https://github.com/nocobase/nocobase/pull/7594)) by @katherinehhh

- **[AI employees]** Improve web search function of plugin-ai ([#7580](https://github.com/nocobase/nocobase/pull/7580)) by @cgyrock

- **[Telemetry]** Add new plugin: Telemetry, an OpenTelemetry-based telemetry plugin providing CPU, memory, and HTTP request metrics with HTTP export support by @2013xile

- **[Form drafts]** Form drafts by @chenos

- **[File storage: S3(Pro)]** Add rename mode option for S3 Pro storage by @mytharcher

- **[Workflow: Approval]**
  - Allow to choose whether to show snapshot or latest record in the approval process UI by @mytharcher

  - Add audience configuration to control who could initiate an approval by @mytharcher

- **[Email manager]** Email management 2.0 implementation by @jiannx

### 🚀 Improvements

- **[undefined]**
  - update the English documentation of the chart plugin ([#7748](https://github.com/nocobase/nocobase/pull/7748)) by @heziqiang

  - update chart overview document ([#7702](https://github.com/nocobase/nocobase/pull/7702)) by @heziqiang

- **[flow-engine]**
  - Support window.loacation.reload method in the runjs environment. ([#8316](https://github.com/nocobase/nocobase/pull/8316)) by @gchust

  - Optimize performance issues when switching configuration modes ([#8241](https://github.com/nocobase/nocobase/pull/8241)) by @zhangzhonghe

  - Support the FormData object in the runjs environment. ([#8263](https://github.com/nocobase/nocobase/pull/8263)) by @gchust

  - support hide step configuration menu dynamically ([#7924](https://github.com/nocobase/nocobase/pull/7924)) by @gchust

  - Add useCache option to FlowModelRenderer ([#8072](https://github.com/nocobase/nocobase/pull/8072)) by @zhangzhonghe

  - Add `removeModelWithSubModels` method to recursively remove model and its sub-models ([#8064](https://github.com/nocobase/nocobase/pull/8064)) by @zhangzhonghe

  - Support switch flow model class dynamically ([#7952](https://github.com/nocobase/nocobase/pull/7952)) by @gchust

  - Support listening flow models tree change event in flow engine. ([#7905](https://github.com/nocobase/nocobase/pull/7905)) by @gchust

  - improve current record variable resolving, make opening dialog faster ([#7895](https://github.com/nocobase/nocobase/pull/7895)) by @gchust

  - Optimized the API structure of third-party libraries in the runjs context and added support for the Antd icon library. ([#7896](https://github.com/nocobase/nocobase/pull/7896)) by @gchust

  - Optimize the toolbar style to prevent icons from being obscured ([#7883](https://github.com/nocobase/nocobase/pull/7883)) by @zhangzhonghe

  - Optimize the toolbar styles for page tabs ([#7795](https://github.com/nocobase/nocobase/pull/7795)) by @zhangzhonghe

  - support delayed operation in flow model ([#7786](https://github.com/nocobase/nocobase/pull/7786)) by @gchust

  - Improved the error message displayed when copying UID fails, providing clearer instructions for resolving the issue. ([#7718](https://github.com/nocobase/nocobase/pull/7718)) by @gchust

  - Support define variable context in flow step definition ([#7674](https://github.com/nocobase/nocobase/pull/7674)) by @gchust

  - Support skipping the runjs flow step by adding skipRunJs=true to the URL query string. ([#7638](https://github.com/nocobase/nocobase/pull/7638)) by @gchust

  - support popup variable ([#7583](https://github.com/nocobase/nocobase/pull/7583)) by @gchust

  - Standardized automatic workflows to be consistently triggered by the "beforeRender" event, ensuring predictable and unified operation across processes. ([#7577](https://github.com/nocobase/nocobase/pull/7577)) by @gchust

  - Enhance the code editing experience with richer snippets and context-aware code completions for various scenarios ([#7559](https://github.com/nocobase/nocobase/pull/7559)) by @gchust

  - Optimize drag and drop functionality ([#7526](https://github.com/nocobase/nocobase/pull/7526)) by @zhangzhonghe

- **[sdk]** Improve API storage implementation ([#8308](https://github.com/nocobase/nocobase/pull/8308)) by @chenos

- **[client]**
  - Support full screen mode for JS code editor. ([#8294](https://github.com/nocobase/nocobase/pull/8294)) by @gchust

  - make Add child equivalent to Add new of the corresponding children association ([#8272](https://github.com/nocobase/nocobase/pull/8272)) by @katherinehhh

  - support clearing default value for color field ([#8268](https://github.com/nocobase/nocobase/pull/8268)) by @katherinehhh

  - use select for operation column width configuration ([#8218](https://github.com/nocobase/nocobase/pull/8218)) by @katherinehhh

  - support custom column width for table columns ([#8200](https://github.com/nocobase/nocobase/pull/8200)) by @katherinehhh

  - change table column width to use selectable options ([#8188](https://github.com/nocobase/nocobase/pull/8188)) by @katherinehhh

  - improve recordPicker styles with maxTagCount ([#8175](https://github.com/nocobase/nocobase/pull/8175)) by @katherinehhh

  - optimize configuration options (Blocks, Fields, Actions) ([#8141](https://github.com/nocobase/nocobase/pull/8141)) by @katherinehhh

  - support number formatting for percentage fields ([#8123](https://github.com/nocobase/nocobase/pull/8123)) by @katherinehhh

  - fix subtable pagination jump after row removal and add support for column validation rules ([#8094](https://github.com/nocobase/nocobase/pull/8094)) by @katherinehhh

  - adjust large field display in editable subtable ([#8078](https://github.com/nocobase/nocobase/pull/8078)) by @katherinehhh

  - support ellipsis for overflowing JSON field content ([#8067](https://github.com/nocobase/nocobase/pull/8067)) by @katherinehhh

  - support allowMultiple setting in attachment upload component ([#8052](https://github.com/nocobase/nocobase/pull/8052)) by @katherinehhh

  - show collapsed options on hover in  Select component ([#8030](https://github.com/nocobase/nocobase/pull/8030)) by @katherinehhh

  - Support initializing selected filter fields in chart query ([#7933](https://github.com/nocobase/nocobase/pull/7933)) by @heziqiang

  - Adapt Components for Mobile Devices ([#7870](https://github.com/nocobase/nocobase/pull/7870)) by @zhangzhonghe

  - Added support for the Day.js library in the RunJS scripting context, enabling easier date and time manipulations. ([#7841](https://github.com/nocobase/nocobase/pull/7841)) by @gchust

  - add page info version to flow engine context ([#7826](https://github.com/nocobase/nocobase/pull/7826)) by @gchust

  - enhance Markdown Editor ([#7793](https://github.com/nocobase/nocobase/pull/7793)) by @katherinehhh

  - adapt to tableoid field in 2.0 ([#7809](https://github.com/nocobase/nocobase/pull/7809)) by @katherinehhh

  - support jsx in JS code editor ([#7699](https://github.com/nocobase/nocobase/pull/7699)) by @gchust

  - support association fields in JS field model ([#7618](https://github.com/nocobase/nocobase/pull/7618)) by @gchust

- **[server]** Add fault tolerance when missing app instances cause errors while fetching app maintaining messages ([#8196](https://github.com/nocobase/nocobase/pull/8196)) by @2013xile

- **[acl]** Support `acl.registerSnippet` API to merge snippet configuration ([#8155](https://github.com/nocobase/nocobase/pull/8155)) by @mytharcher

- **[telemetry]**
  - Support controlling which metrics are exported ([#7938](https://github.com/nocobase/nocobase/pull/7938)) by @2013xile

  - Add telemetry metrics for number of online sub-applications, etc ([#7743](https://github.com/nocobase/nocobase/pull/7743)) by @2013xile

- **[database]** Refactored the field encryption plugin to enhance security, supporting application key generation and rotation, and per-field encryption keys. ([#7769](https://github.com/nocobase/nocobase/pull/7769)) by @cgyrock

- **[AI employees]**
  - improve Gemini compatibility for LLM nodes in workflow.<br/>optimize AI tool dataSourceQuery for large-scale data handling.<br/>resolve data modeling issues.<br/>add AI suggestion tool。 ([#8249](https://github.com/nocobase/nocobase/pull/8249)) by @heziqiang

  - Fix AI employee not responding on first edit submission<br/>Delete unnecessary built-in AI employee “Avery Form Assistant”<br/>Add default initial role permissions for built-in AI employees<br/>Improve AI employee error handling and output behavior<br/>Add support for AI to access modal context variables<br/>Add support for external data sources for AI<br/>Fix incorrect conversation truncation when AI processes large data volumes ([#8191](https://github.com/nocobase/nocobase/pull/8191)) by @heziqiang

  - Enabled editing functionality for built-in AI assistant system prompts.<br/>Optimized the system prompt for the Nathan AI assistant.<br/>Fixed an issue with the server failing to read static files. ([#8097](https://github.com/nocobase/nocobase/pull/8097)) by @heziqiang

  - add missing provider field to the Add LLM form ([#8049](https://github.com/nocobase/nocobase/pull/8049)) by @heziqiang

  - AI employee plugin add upgrade hook ([#7951](https://github.com/nocobase/nocobase/pull/7951)) by @heziqiang

  - Improve AI employee interaction logic and optimize task configuration flow ([#7707](https://github.com/nocobase/nocobase/pull/7707)) by @cgyrock

  - AI employee can autonomously query data based on table block metadata ([#7703](https://github.com/nocobase/nocobase/pull/7703)) by @cgyrock

  - Optimized AI coding experience, including using AI employee to review, diagnose, and fix code. ([#7679](https://github.com/nocobase/nocobase/pull/7679)) by @cgyrock

  - Refactored the OpenAI LLM Provider into two separate providers to support OpenAI's Completions and Responses APIs. ([#7615](https://github.com/nocobase/nocobase/pull/7615)) by @cgyrock

  - Add new LLM provider Ollama ([#7612](https://github.com/nocobase/nocobase/pull/7612)) by @ReLaMi96

  - AI coding optimization ([#7614](https://github.com/nocobase/nocobase/pull/7614)) by @cgyrock

  - add minimize button for chat box In mobile layout ([#7595](https://github.com/nocobase/nocobase/pull/7595)) by @cgyrock

- **[UI templates]**
  - Add field template support for details block. ([#8247](https://github.com/nocobase/nocobase/pull/8247)) by @gchust

  - Added UI templates plugin, providing the ability to reuse block templates and popup templates. ([#8163](https://github.com/nocobase/nocobase/pull/8163)) by @gchust

- **[Workflow]**
  - Add original workflow instance to duplicate API ([#8225](https://github.com/nocobase/nocobase/pull/8225)) by @mytharcher

  - Improve description of `changed` field in collection event ([#8216](https://github.com/nocobase/nocobase/pull/8216)) by @mytharcher

  - Support to use legacy config to create new in duplicated workflow ([#8165](https://github.com/nocobase/nocobase/pull/8165)) by @mytharcher

  - Add fault-tolerant logic for data missing in the processor preparation, to avoid execution hang ([#8156](https://github.com/nocobase/nocobase/pull/8156)) by @mytharcher

  - Use lazy load for association data on workflow canvas to improve performance ([#8142](https://github.com/nocobase/nocobase/pull/8142)) by @mytharcher

  - Complete the bound workflow configuration for the update record action button ([#7668](https://github.com/nocobase/nocobase/pull/7668)) by @mytharcher

- **[Async task manager]**
  - Improved error handling during cleanup tasks by adding exception-catching mechanisms to prevent application crashes ([#8215](https://github.com/nocobase/nocobase/pull/8215)) by @mytharcher

  - Async tasks for sub applications should start only the target sub applications in Workers ([#7927](https://github.com/nocobase/nocobase/pull/7927)) by @2013xile

- **[Block: Action panel]** improve display of hidden blocks, actions, and fields in configuration mode ([#8174](https://github.com/nocobase/nocobase/pull/8174)) by @katherinehhh

- **[Block: List]** add Link button for Table, List, and Grid Card blocks ([#8194](https://github.com/nocobase/nocobase/pull/8194)) by @katherinehhh

- **[Error handler]** Do not expose raw database error messages on SQL syntax errors, to avoid revealing the database type ([#8195](https://github.com/nocobase/nocobase/pull/8195)) by @2013xile

- **[Block: Map]** support text overflow ellipsis for map field in text display mode ([#8189](https://github.com/nocobase/nocobase/pull/8189)) by @katherinehhh

- **[Access control]** Disallow assigning the root role to users ([#8180](https://github.com/nocobase/nocobase/pull/8180)) by @2013xile

- **[Block: GridCard]**
  - Optimize Grid Card block styles for a more compact layout ([#8152](https://github.com/nocobase/nocobase/pull/8152)) by @katherinehhh

  - add row count config to grid card and replace pageSize with automatic calculation ([#8055](https://github.com/nocobase/nocobase/pull/8055)) by @katherinehhh

- **[Collection field: Markdown(Vditor)]** Disable variable parsing in Markdown field by default in readPretty mode ([#8145](https://github.com/nocobase/nocobase/pull/8145)) by @katherinehhh

- **[Action: Import records]** allow selecting ID for import fields ([#8133](https://github.com/nocobase/nocobase/pull/8133)) by @katherinehhh

- **[Data visualization]**
  - update alert tips and events code template annotations ([#7814](https://github.com/nocobase/nocobase/pull/7814)) by @heziqiang

  - add chart data time format options ([#7763](https://github.com/nocobase/nocobase/pull/7763)) by @heziqiang

  - add tip to run query before configuring chart options ([#7685](https://github.com/nocobase/nocobase/pull/7685)) by @heziqiang

  - refresh chart data on global preview button click ([#7678](https://github.com/nocobase/nocobase/pull/7678)) by @heziqiang

  - Update plugin-data-vi 2.0, fix some issues and optimize UI. ([#7597](https://github.com/nocobase/nocobase/pull/7597)) by @heziqiang

  - Expand chart types; Optimize UI and interactive experience. ([#7581](https://github.com/nocobase/nocobase/pull/7581)) by @heziqiang

- **[Multi-app manager (deprecated)]**
  - Enabled asynchronous startup for sub-applications using a queue ([#7749](https://github.com/nocobase/nocobase/pull/7749)) by @2013xile

  - improve app supervisor ([#7661](https://github.com/nocobase/nocobase/pull/7661)) by @chenos

- **[Data source manager]** Adjust the column order of field type and interface, and add a confirmation step when making modifications. ([#7680](https://github.com/nocobase/nocobase/pull/7680)) by @2013xile

- **[Multi-space]** use api.storage to replace localstorage, permission control refactoring and bugfix by @jiannx

- **[Action: Export records Pro]** import pro& export pro action support permission control by @katherinehhh

- **[Telemetry: Prometheus]** Upgrade `@opentelemetry/exporter-prometheus` by @2013xile

- **[Collection field: Encryption]** Optimized field encryption plugin to support data retrieval with independent IVs by @cgyrock

- **[Workflow: Approval]**
  - Update `approval.data` to latest version of the approving record when execution end, to match "Latest" record show mode by @mytharcher

  - Change API to get single approval item, and simplify code by @mytharcher

- **[Migration manager]** Improved migration checks, SQL download support, log formatting, and execution process visibility by @cgyrock

### 🐛 Bug Fixes

- **[undefined]**
  - Fix the issue of incorrect styling on the plugin documentation homepage in dark mode. ([#7839](https://github.com/nocobase/nocobase/pull/7839)) by @gchust

  - routing path matching supports new multiple applications ([#7570](https://github.com/nocobase/nocobase/pull/7570)) by @jiannx

  - Fixed an issue where quoting a block would remove the quoted block from the original page. ([#7969](https://github.com/nocobase/nocobase/pull/7969)) by @gchust

- **[client]**
  - fix incorrect data in sub-detail dialog of detail block ([#8318](https://github.com/nocobase/nocobase/pull/8318)) by @katherinehhh

  - Fixed an issue where an error occurred when closing the current popup after consecutively opening the linkage rules and event flow configuration popups. ([#8312](https://github.com/nocobase/nocobase/pull/8312)) by @gchust

  - Fixed an issue where an error occurred when closing the current popup after consecutively opening the linkage rules and event flow configuration popups. ([#8312](https://github.com/nocobase/nocobase/pull/8312)) by @gchust

  - Fixed an issue where changes to the quick edit toggle in table blocks required a page refresh to take effect. ([#8311](https://github.com/nocobase/nocobase/pull/8311)) by @gchust

  - Fix an issue where blocks using URL query parameters as data scopes did not refresh correctly when the query parameters changed during menu switching. ([#8310](https://github.com/nocobase/nocobase/pull/8310)) by @gchust

  - fix permission issues in association field component ([#8243](https://github.com/nocobase/nocobase/pull/8243)) by @katherinehhh

  - fix sub-detail data not updating when paginating detail block ([#8305](https://github.com/nocobase/nocobase/pull/8305)) by @katherinehhh

  - fix nested subtable content not updating when switching pages in edit form ([#8304](https://github.com/nocobase/nocobase/pull/8304)) by @katherinehhh

  - Fix issue where popup cannot be opened and improve navigation stability ([#8287](https://github.com/nocobase/nocobase/pull/8287)) by @zhangzhonghe

  - Fix error when switching from Select component to Array Subform component ([#8301](https://github.com/nocobase/nocobase/pull/8301)) by @katherinehhh

  - Disallow adding association fields to form block via JS Field. ([#8296](https://github.com/nocobase/nocobase/pull/8296)) by @gchust

  - Fix an issue where data would refresh multiple times after the record update action. ([#8299](https://github.com/nocobase/nocobase/pull/8299)) by @gchust

  - Fix issue where adding new data in subform is overwritten by selected data ([#8292](https://github.com/nocobase/nocobase/pull/8292)) by @katherinehhh

  - Fix an issue where the JS Item did not refresh after editing a record in the details block. ([#8291](https://github.com/nocobase/nocobase/pull/8291)) by @gchust

  - Fix an issue where newly added records did not refresh in the data selector field component popup. ([#8289](https://github.com/nocobase/nocobase/pull/8289)) by @gchust

  - Fixed the render error for JS block in hidden state. ([#8286](https://github.com/nocobase/nocobase/pull/8286)) by @gchust

  - Fix the issue where error thrown in in filter form block settings of m2m field ([#8282](https://github.com/nocobase/nocobase/pull/8282)) by @mytharcher

  - Fix the issue where error thrown in in filter form block settings of m2m field ([#8282](https://github.com/nocobase/nocobase/pull/8282)) by @mytharcher

  - fix prevent block errors after a association field is deleted ([#8273](https://github.com/nocobase/nocobase/pull/8273)) by @katherinehhh

  - Fix filter form default values not triggering filter on initial render ([#8232](https://github.com/nocobase/nocobase/pull/8232)) by @zhangzhonghe

  - Fix stack overflow caused by infinite loop in display association fields lazy loading ([#8262](https://github.com/nocobase/nocobase/pull/8262)) by @zhangzhonghe

  - Handle empty linkage rules to prevent errors ([#8239](https://github.com/nocobase/nocobase/pull/8239)) by @zhangzhonghe

  - Fixed the issue where the table block's operation column could not be removed. ([#8230](https://github.com/nocobase/nocobase/pull/8230)) by @gchust

  - Fixed the issue where preview execution wrote compiled JSX output back to stepParams, causing saved source code to be rewritten. ([#8171](https://github.com/nocobase/nocobase/pull/8171)) by @gchust

  - Fix S3 Pro attachment upload error and improve file preview ([#8211](https://github.com/nocobase/nocobase/pull/8211)) by @katherinehhh

  - Prevent row total width overflow during column resize ([#8166](https://github.com/nocobase/nocobase/pull/8166)) by @zhangzhonghe

  - Fix an issue where selecting “No” for a checkbox filter still applied the “Yes” filter. ([#8170](https://github.com/nocobase/nocobase/pull/8170)) by @gchust

  - fix submit button not shown in create form when role has create permission ([#8190](https://github.com/nocobase/nocobase/pull/8190)) by @katherinehhh

  - prevent existing subtable/subform data from being cleared when submitting without selecting any items ([#8172](https://github.com/nocobase/nocobase/pull/8172)) by @katherinehhh

  - prevent Data scope setting from appearing in create form configuration ([#8176](https://github.com/nocobase/nocobase/pull/8176)) by @katherinehhh

  - Fix rendering issue of tableoid field in form block ([#8177](https://github.com/nocobase/nocobase/pull/8177)) by @katherinehhh

  - Failed to save the tab event flow ([#8168](https://github.com/nocobase/nocobase/pull/8168)) by @chenos

  - remove extra spacing after tab is hidden ([#8167](https://github.com/nocobase/nocobase/pull/8167)) by @chenos

  - fix incorrect filtering of selected options in the association record select ([#8151](https://github.com/nocobase/nocobase/pull/8151)) by @katherinehhh

  - fix association field dropdown being disabled when options field exists ([#8153](https://github.com/nocobase/nocobase/pull/8153)) by @katherinehhh

  - Fixed an issue where switching label fields caused popup configurations to be lost. ([#8136](https://github.com/nocobase/nocobase/pull/8136)) by @gchust

  - Fixed an issue where entering Chinese text cleared existing options when using multi-select operators on single-select field in filter form block. ([#8140](https://github.com/nocobase/nocobase/pull/8140)) by @gchust

  - Fix the issue where `RemoteSelect` component incorrectly loading record when value is null ([#8137](https://github.com/nocobase/nocobase/pull/8137)) by @mytharcher

  - fix prevent child disabled state from blocking relation field selection ([#8131](https://github.com/nocobase/nocobase/pull/8131)) by @katherinehhh

  - Fixed an issue where default field labels in filter form block could not be correctly translated in multiple languages. ([#8135](https://github.com/nocobase/nocobase/pull/8135)) by @gchust

  - Fixed an issue where the UI component width was inconsistent when selecting “Past” or “Next” for date filter fields. ([#8130](https://github.com/nocobase/nocobase/pull/8130)) by @gchust

  - Fixed an issue where the title and description styles of JS block was inconsistent with other blocks. ([#8115](https://github.com/nocobase/nocobase/pull/8115)) by @gchust

  - fix  long text field tooltip line break issue ([#8122](https://github.com/nocobase/nocobase/pull/8122)) by @katherinehhh

  - Fixed an issue where the selectable options were not fully listed when using the “is any of” or “is none of” operators for option-based field filtering. ([#8118](https://github.com/nocobase/nocobase/pull/8118)) by @gchust

  - fix nested subtable in subform not displaying data ([#8117](https://github.com/nocobase/nocobase/pull/8117)) by @katherinehhh

  - Fixed an issue where clearing the between time filter values and triggering the filter again caused an error. ([#8110](https://github.com/nocobase/nocobase/pull/8110)) by @gchust

  - Fixed an issue where the selectable data for association fields in filter form block was incorrect. ([#8109](https://github.com/nocobase/nocobase/pull/8109)) by @gchust

  - Fixed an issue where custom fields configurations in filter form were not correctly pre-filled and some settings did not take effect. ([#8106](https://github.com/nocobase/nocobase/pull/8106)) by @gchust

  - Fixed an issue where filtering on Checkbox fields did not take effect. ([#8103](https://github.com/nocobase/nocobase/pull/8103)) by @gchust

  - Fixed an issue where number field value was not correctly pre-filled in filter action. ([#8104](https://github.com/nocobase/nocobase/pull/8104)) by @gchust

  - Fixed an issue where some field operators in filter forms failed to filter data correctly. ([#8100](https://github.com/nocobase/nocobase/pull/8100)) by @gchust

  - Fixed an issue where the configured fields from a removed block were not deleted from the filter block. ([#8098](https://github.com/nocobase/nocobase/pull/8098)) by @gchust

  - fix extra space gap when button is hidden in non-configuration mode ([#8092](https://github.com/nocobase/nocobase/pull/8092)) by @katherinehhh

  - Fixed an issue where the reset button text in filter form block could not be modified. ([#8089](https://github.com/nocobase/nocobase/pull/8089)) by @gchust

  - Fixed an issue where the field input did not support multiple values when using the $in or $notIn operators for filtering fields. ([#8081](https://github.com/nocobase/nocobase/pull/8081)) by @gchust

  - Fixed an issue where newly added data blocks did not automatically appear in the field menu of the filter form block. ([#8085](https://github.com/nocobase/nocobase/pull/8085)) by @gchust

  - The configuration menu for association fields in filter forms should not display the quick-create option. ([#8083](https://github.com/nocobase/nocobase/pull/8083)) by @gchust

  - fix association subtable data issue in List block ([#8082](https://github.com/nocobase/nocobase/pull/8082)) by @katherinehhh

  - fix numeric field validation rules from collection settings not applied ([#8025](https://github.com/nocobase/nocobase/pull/8025)) by @katherinehhh

  - Fixed an issue where fields in filter forms were restricted by backend validation rules for fields. ([#8074](https://github.com/nocobase/nocobase/pull/8074)) by @gchust

  - fix large field display issue in subtable edit ([#8069](https://github.com/nocobase/nocobase/pull/8069)) by @katherinehhh

  - fix quick create throws error when allowMultiple is disabled in association record select ([#8034](https://github.com/nocobase/nocobase/pull/8034)) by @katherinehhh

  - json field quick edit issue ([#8059](https://github.com/nocobase/nocobase/pull/8059)) by @katherinehhh

  - fix  json field should be submitted as an object ([#8057](https://github.com/nocobase/nocobase/pull/8057)) by @katherinehhh

  - Fixed an issue where the enter key could not be used to trigger the filter action. ([#8056](https://github.com/nocobase/nocobase/pull/8056)) by @gchust

  - Fix issue where N/A is displayed after disabling allowMultiple in many-to-many association record select ([#8050](https://github.com/nocobase/nocobase/pull/8050)) by @katherinehhh

  - Fix failed to delete record in record picker block ([#8023](https://github.com/nocobase/nocobase/pull/8023)) by @katherinehhh

  - Fixed an issue where the current record menu appeared when adding a comment block. ([#8039](https://github.com/nocobase/nocobase/pull/8039)) by @gchust

  - Fixed an issue where switching a date field to a time field in filter action caused a rendering error. ([#8036](https://github.com/nocobase/nocobase/pull/8036)) by @gchust

  - Fixed an issue where the default titles of the edit and create new action popups were incorrect. ([#8033](https://github.com/nocobase/nocobase/pull/8033)) by @gchust

  - Fixed an issue where the default style of the JS field in the detail block was incorrect. ([#8031](https://github.com/nocobase/nocobase/pull/8031)) by @gchust

  - fix subtable column width not applied ([#8027](https://github.com/nocobase/nocobase/pull/8027)) by @katherinehhh

  - fix subtable column drag not working ([#8026](https://github.com/nocobase/nocobase/pull/8026)) by @katherinehhh

  - Fixed an issue where the current popup record variable could not be correctly resolved in popup opened by association field. ([#8019](https://github.com/nocobase/nocobase/pull/8019)) by @gchust

  - fix markdown display field popover style issue ([#8012](https://github.com/nocobase/nocobase/pull/8012)) by @katherinehhh

  - Resolved an issue causing errors when loading data for association fields in popup windows, ensuring smoother data display and functionality. ([#7985](https://github.com/nocobase/nocobase/pull/7985)) by @gchust

  - fix  tree table block cannot expand child nodes ([#8011](https://github.com/nocobase/nocobase/pull/8011)) by @katherinehhh

  - Fix table block selection and deletion issues for composite keys ([#7978](https://github.com/nocobase/nocobase/pull/7978)) by @katherinehhh

  - Fix the issue where the page tab state and route do not correspond ([#7991](https://github.com/nocobase/nocobase/pull/7991)) by @zhangzhonghe

  - fix display issue when the markdown field is ellipsized in HTML mode ([#7994](https://github.com/nocobase/nocobase/pull/7994)) by @katherinehhh

  - fix incomplete search results in cascade selector ([#7990](https://github.com/nocobase/nocobase/pull/7990)) by @katherinehhh

  - Fixed an issue where opening the detail block in the popup for non-ID relationship fields caused an error. ([#7973](https://github.com/nocobase/nocobase/pull/7973)) by @gchust

  - Fixed an issue where association data failed to load correctly in the popup for non-ID relationship fields. ([#7970](https://github.com/nocobase/nocobase/pull/7970)) by @gchust

  - fix issue with invalid precision setting for numeric field format ([#7967](https://github.com/nocobase/nocobase/pull/7967)) by @katherinehhh

  - fix the issue where the filter value is not cleared when clicking the Reset button ([#7966](https://github.com/nocobase/nocobase/pull/7966)) by @zhangzhonghe

  - Fix the incorrect typing in the new 2.0 page ([#7945](https://github.com/nocobase/nocobase/pull/7945)) by @zhangzhonghe

  - fix auto-wrap text fields in detail block when content exceeds width ([#7955](https://github.com/nocobase/nocobase/pull/7955)) by @katherinehhh

  - fix error thrown when clearing value in multi-level cascade ([#7943](https://github.com/nocobase/nocobase/pull/7943)) by @katherinehhh

  - remove tree-table action from non-tree-collection block ([#7931](https://github.com/nocobase/nocobase/pull/7931)) by @katherinehhh

  - Fixed an issue where the title and description were not displayed in the JS block. ([#7913](https://github.com/nocobase/nocobase/pull/7913)) by @gchust

  - Fixed the issue where hidden blocks still occupied space on the page. ([#7906](https://github.com/nocobase/nocobase/pull/7906)) by @gchust

  - Fix the issue where the reset button in the filter button clears default conditions ([#7903](https://github.com/nocobase/nocobase/pull/7903)) by @zhangzhonghe

  - fix incorrect permission check for subform fields in new forms ([#7902](https://github.com/nocobase/nocobase/pull/7902)) by @katherinehhh

  - fix issues in form item setting ([#7867](https://github.com/nocobase/nocobase/pull/7867)) by @katherinehhh

  - Fix issue where the rich text field cannot input default value and the multi-select field default value cannot select multiple options. ([#7864](https://github.com/nocobase/nocobase/pull/7864)) by @gchust

  - Fixed the issue the default JS field configuration did not use the display mode setting. ([#7862](https://github.com/nocobase/nocobase/pull/7862)) by @gchust

  - Fixed the issue about not be able to set default value of date field in filter form block model. ([#7853](https://github.com/nocobase/nocobase/pull/7853)) by @gchust

  - Fixed the issue quick edit operations in the table block do not update data correctly. ([#7845](https://github.com/nocobase/nocobase/pull/7845)) by @gchust

  - Fixed the errors when preview code in code editor if the code contains jsx syntax ([#7836](https://github.com/nocobase/nocobase/pull/7836)) by @gchust

  - Fixed an issue where the linkage rules for row action buttons in a table block were not re-executed after the row data was updated, ensuring the rules are now properly reapplied when changes occur. ([#7832](https://github.com/nocobase/nocobase/pull/7832)) by @gchust

  - Fix the error 'value.replace is not a function' in the filter form relationship field ([#7824](https://github.com/nocobase/nocobase/pull/7824)) by @zhangzhonghe

  - current collection variable should not be selectable from filter component's variable selector ([#7818](https://github.com/nocobase/nocobase/pull/7818)) by @gchust

  - Fix incorrect parameters in the onChange callback ([#7807](https://github.com/nocobase/nocobase/pull/7807)) by @zhangzhonghe

  - can't hide table block's actions column ([#7804](https://github.com/nocobase/nocobase/pull/7804)) by @gchust

  - Fix collection selector field unable to select collection correctly ([#7794](https://github.com/nocobase/nocobase/pull/7794)) by @katherinehhh

  - support selecting whole variable object in AI employee's prompt ([#7791](https://github.com/nocobase/nocobase/pull/7791)) by @gchust

  - fix  table action and jsColumn width not applied ([#7777](https://github.com/nocobase/nocobase/pull/7777)) by @katherinehhh

  - block's data scope is not working if set by page event flow ([#7788](https://github.com/nocobase/nocobase/pull/7788)) by @gchust

  - fix association field title field ellipsis not applied ([#7778](https://github.com/nocobase/nocobase/pull/7778)) by @katherinehhh

  - update record action's linkage rule is not working ([#7774](https://github.com/nocobase/nocobase/pull/7774)) by @gchust

  - Fix required validation failure for Markdown Vditor field ([#7764](https://github.com/nocobase/nocobase/pull/7764)) by @katherinehhh

  - Fixed an issue where the labels of enum types in variable-related components were not displayed in the correct language. ([#7765](https://github.com/nocobase/nocobase/pull/7765)) by @gchust

  - Fix missing required field indicator after setting frontend validation ([#7760](https://github.com/nocobase/nocobase/pull/7760)) by @katherinehhh

  - Add data scope configuration for relationship fields in filter forms ([#7761](https://github.com/nocobase/nocobase/pull/7761)) by @zhangzhonghe

  - fix issue with clearing non-timezone date in edit form ([#7759](https://github.com/nocobase/nocobase/pull/7759)) by @katherinehhh

  - Fix required field validation for linkage rules ([#7756](https://github.com/nocobase/nocobase/pull/7756)) by @zhangzhonghe

  - fix time format issue in subtable fields ([#7750](https://github.com/nocobase/nocobase/pull/7750)) by @katherinehhh

  - resolve Invalid Date issue when deleting Specified Date in filte… ([#7746](https://github.com/nocobase/nocobase/pull/7746)) by @katherinehhh

  - can't load current form variable's fields ([#7745](https://github.com/nocobase/nocobase/pull/7745)) by @gchust

  - Resolved an issue where assigning an array as the value or default value to a "toOne" field resulted in an error. This ensures proper handling of variable resolution results, improving system stability and accuracy. ([#7735](https://github.com/nocobase/nocobase/pull/7735)) by @gchust

  - Resolved an issue where the association field variable in the current form could not be properly identified, ensuring accurate data processing in forms. ([#7726](https://github.com/nocobase/nocobase/pull/7726)) by @gchust

  - Fixed an issue where non-filterable fields were incorrectly listed in the filter options, ensuring only applicable fields appear for selection. ([#7700](https://github.com/nocobase/nocobase/pull/7700)) by @gchust

  - resolve UI issue when deleting association  field in collection ([#7706](https://github.com/nocobase/nocobase/pull/7706)) by @katherinehhh

  - Fix known issues with subform linkage rules ([#7698](https://github.com/nocobase/nocobase/pull/7698)) by @zhangzhonghe

  - js block fields menu can't be loaded in filter form block ([#7690](https://github.com/nocobase/nocobase/pull/7690)) by @gchust

  - Resolved an issue where users could not set default values for fields displayed in read-only mode. This ensures smoother field configuration when fields are not editable. ([#7689](https://github.com/nocobase/nocobase/pull/7689)) by @gchust

  - Fixed an issue where the URL did not update correctly after switching tabs within a popup, reopening a nested popup, and then closing all popups. ([#7630](https://github.com/nocobase/nocobase/pull/7630)) by @gchust

  - handle missing context in usePlugin ([#7627](https://github.com/nocobase/nocobase/pull/7627)) by @chenos

  - Fix abnormal page display issues when switching table pagination ([#7572](https://github.com/nocobase/nocobase/pull/7572)) by @zhangzhonghe

  - Can't configure assign field value for `Update` and `Bulk update` action ([#7565](https://github.com/nocobase/nocobase/pull/7565)) by @gchust

  - Fix the issue of not refreshing data after submitting the form ([#7560](https://github.com/nocobase/nocobase/pull/7560)) by @zhangzhonghe

  - Fixed an issue where the "Run" action in the code editor was not functioning, ensuring users can now execute code correctly. ([#7547](https://github.com/nocobase/nocobase/pull/7547)) by @gchust

- **[flow-engine]**
  - Fix the issue where the collection fields selector dropdown in filter action had an insufficient height. ([#8288](https://github.com/nocobase/nocobase/pull/8288)) by @gchust

  - Fix popup tab content not displaying ([#8281](https://github.com/nocobase/nocobase/pull/8281)) by @zhangzhonghe

  - Fix page unmount and re-render issue when opening a sub-page ([#8276](https://github.com/nocobase/nocobase/pull/8276)) by @zhangzhonghe

  - fix permission check issue for add child records in tree table ([#8240](https://github.com/nocobase/nocobase/pull/8240)) by @katherinehhh

  - Fixed an issue where some block popup record-related variables were displayed incorrectly. ([#8060](https://github.com/nocobase/nocobase/pull/8060)) by @gchust

  - Fixed the issue where actions or tabs added after dragging actions or tabs do not display. ([#8224](https://github.com/nocobase/nocobase/pull/8224)) by @gchust

  - permission check issue in external data sources ([#8221](https://github.com/nocobase/nocobase/pull/8221)) by @katherinehhh

  - fix  external data source actions being hidden despite having permission ([#8217](https://github.com/nocobase/nocobase/pull/8217)) by @katherinehhh

  - Fix the issue where submitting the form in a reused modal via popup uid does not refresh the block data. ([#8202](https://github.com/nocobase/nocobase/pull/8202)) by @gchust

  - Fix incorrect file download for attachments ([#8154](https://github.com/nocobase/nocobase/pull/8154)) by @katherinehhh

  - fix: incorrect conversion when using integer type as enum options ([#8138](https://github.com/nocobase/nocobase/pull/8138)) by @chenos

  - Fix toggleable sub-model menu items failing when `useModel` is omitted by inferring it from `createModelOptions.use` ([#8105](https://github.com/nocobase/nocobase/pull/8105)) by @zhangzhonghe

  - Fixed an issue where configuration options from the previous component remained visible in the menu after switching field components. ([#8095](https://github.com/nocobase/nocobase/pull/8095)) by @gchust

  - Move useEffect before conditional return in FlowModelRenderer ([#8088](https://github.com/nocobase/nocobase/pull/8088)) by @zhangzhonghe

  - Fixed an issue where unsupported association fields appeared in filter operation fields. ([#8086](https://github.com/nocobase/nocobase/pull/8086)) by @gchust

  - fix comment record fails to save after editing ([#8035](https://github.com/nocobase/nocobase/pull/8035)) by @katherinehhh

  - Fixed an issue where data blocks did not refresh when closing a popup by clicking the form submit button inside the popup. ([#8021](https://github.com/nocobase/nocobase/pull/8021)) by @gchust

  - Fixed an issue where the current record variable could not be correctly triggered for resoving in the details block. ([#8004](https://github.com/nocobase/nocobase/pull/8004)) by @gchust

  - Fix the issue of misaligned toolbar icon display in the details block button ([#7929](https://github.com/nocobase/nocobase/pull/7929)) by @zhangzhonghe

  - Fixed the issue where opening the table block's quick edit form caused an error. ([#7923](https://github.com/nocobase/nocobase/pull/7923)) by @gchust

  - Fixed the issue where ACL permission data is not reloaded after logout and login. ([#7874](https://github.com/nocobase/nocobase/pull/7874)) by @gchust

  - Fix the issue where changes to the event flow would only take effect after refreshing the page. ([#7811](https://github.com/nocobase/nocobase/pull/7811)) by @gchust

  - Fixed an issue where variables in subform association fields were not correctly resolved when the field was modified via the user interface. ([#7799](https://github.com/nocobase/nocobase/pull/7799)) by @gchust

  - error in edit form for multi-primary key records ([#7798](https://github.com/nocobase/nocobase/pull/7798)) by @gchust

  - Fixed an issue where certain configurations for the "Open View" action were not applied, ensuring the action now works as intended for all specified configurations. ([#7790](https://github.com/nocobase/nocobase/pull/7790)) by @gchust

  - Fixed an issue where the action buttons in the table block did not update correctly after switching pages, ensuring their functionality matches the current page's data. ([#7779](https://github.com/nocobase/nocobase/pull/7779)) by @gchust

  - when the field filter value is set to false, the request with data scope is incorrect ([#7766](https://github.com/nocobase/nocobase/pull/7766)) by @gchust

  - fix: resolve page request parameter issue after deleting data on last page ([#7755](https://github.com/nocobase/nocobase/pull/7755)) by @katherinehhh

  - can't resolve subform current object variable's association field value ([#7751](https://github.com/nocobase/nocobase/pull/7751)) by @gchust

  - event flow's steps should not be displayed in configuration menus ([#7723](https://github.com/nocobase/nocobase/pull/7723)) by @gchust

  - incorrect context selection of the current popup record when editing the data scope of an associated field inside an edit form ([#7675](https://github.com/nocobase/nocobase/pull/7675)) by @gchust

  - Resolved an issue where flow actions defined by a flow model could not be configured, ensuring users can now customize flow actions as intended. ([#7666](https://github.com/nocobase/nocobase/pull/7666)) by @gchust

  - Fixed an error when copying or pasting code snippets in the JS code editor. ([#7641](https://github.com/nocobase/nocobase/pull/7641)) by @gchust

  - Fix the issue of translation not taking effect in antd components ([#7621](https://github.com/nocobase/nocobase/pull/7621)) by @zhangzhonghe

  - unable to get current view context in reference block ([#7620](https://github.com/nocobase/nocobase/pull/7620)) by @gchust

- **[database]**
  - Include through scope when querying m2m relationships ([#8277](https://github.com/nocobase/nocobase/pull/8277)) by @2013xile

  - Include through scope when querying m2m relationships ([#8277](https://github.com/nocobase/nocobase/pull/8277)) by @2013xile

  - Fix date field query inconsistency between main and external data sources ([#8181](https://github.com/nocobase/nocobase/pull/8181)) by @cgyrock

  - `filterByTk` now supports arrays when querying collections with multiple filter target keys ([#7986](https://github.com/nocobase/nocobase/pull/7986)) by @chenos

  - Set the `search_path` before executing SQL statements using the `runSQL` method ([#7611](https://github.com/nocobase/nocobase/pull/7611)) by @2013xile

- **[cli]** license-kit is compatible with the case where DB_PASSWORD is empty ([#8220](https://github.com/nocobase/nocobase/pull/8220)) by @jiannx

- **[server]**
  - Support Snowflake ID (53-bit) fields for external data sources ([#8185](https://github.com/nocobase/nocobase/pull/8185)) by @2013xile

  - Update license-kit to the latest version ([#8173](https://github.com/nocobase/nocobase/pull/8173)) by @jiannx

  - Preserve field.targetKey when copying reference fields ([#7599](https://github.com/nocobase/nocobase/pull/7599)) by @chenos

  - Primary key migration error ([#7563](https://github.com/nocobase/nocobase/pull/7563)) by @2013xile

- **[acl]**
  - Fix the issue where the API `acl.can` return `null` when role is `root` ([#8150](https://github.com/nocobase/nocobase/pull/8150)) by @mytharcher

  - fix: acl.allow executed too early ([#8065](https://github.com/nocobase/nocobase/pull/8065)) by @chenos

- **[utils]**
  - Fix the "Invalid filter item type" error on the filter button ([#7838](https://github.com/nocobase/nocobase/pull/7838)) by @zhangzhonghe

  - Fix the 'Unrecognized operation' error in the event flow ([#7835](https://github.com/nocobase/nocobase/pull/7835)) by @zhangzhonghe

- **[Action: Batch update]** Fixed the error in batch update action for external data sources. ([#8320](https://github.com/nocobase/nocobase/pull/8320)) by @gchust

- **[Data visualization]**
  - Fix issue about AI pie chart label display, normalize option for dataset-based pie charts.<br/> Restrict chart order field to selected fields only. ([#8309](https://github.com/nocobase/nocobase/pull/8309)) by @heziqiang

  - Resolve issue about SQL mode select external data source; <br/>Resolve issue about chart block loading state during data fetch;  <br/> Resolve issue about empty chart block cancel configure; ([#8169](https://github.com/nocobase/nocobase/pull/8169)) by @heziqiang

  - Fix issue where chart block not updating after save ([#7920](https://github.com/nocobase/nocobase/pull/7920)) by @heziqiang

  - Use sql resource debug mode only during chart preview ([#7893](https://github.com/nocobase/nocobase/pull/7893)) by @heziqiang

  - use sql:runById API to fetch query data on initialization ([#7677](https://github.com/nocobase/nocobase/pull/7677)) by @heziqiang

  - fix SQL query issue when parsing variables ([#7642](https://github.com/nocobase/nocobase/pull/7642)) by @heziqiang

  - fix missing orders param in chart data query ([#7636](https://github.com/nocobase/nocobase/pull/7636)) by @heziqiang

  - Fix the issue where the chart cannot be displayed due to the timeout of event registration ([#7608](https://github.com/nocobase/nocobase/pull/7608)) by @heziqiang

- **[Action: Import records]**
  - Space verification when importing files ([#8285](https://github.com/nocobase/nocobase/pull/8285)) by @jiannx

  - Fix the issue where row index in error message is always 1 when error thrown in import action ([#8244](https://github.com/nocobase/nocobase/pull/8244)) by @mytharcher

  - Synchronously wait for the `afterCreate` events triggered by the import to finish. ([#8158](https://github.com/nocobase/nocobase/pull/8158)) by @2013xile

  - resolve issue with field list display in Importable fields ([#7710](https://github.com/nocobase/nocobase/pull/7710)) by @katherinehhh

- **[File manager]**
  - Fix the issue where error thrown when upload file larger than 5MB to AWS S3 ([#8275](https://github.com/nocobase/nocobase/pull/8275)) by @mytharcher

  - Fix the issue where previewing `.txt` file on OSS got wrong charset ([#8161](https://github.com/nocobase/nocobase/pull/8161)) by @mytharcher

  - Fix incorrect sub-detail data display in List and Grid Card blocks ([#8087](https://github.com/nocobase/nocobase/pull/8087)) by @katherinehhh

  - Fix attachment field not displayed correctly in readPretty subtable ([#8073](https://github.com/nocobase/nocobase/pull/8073)) by @katherinehhh

  - fix  upload files to specified storage instead of default storage ([#7947](https://github.com/nocobase/nocobase/pull/7947)) by @katherinehhh

  - fix table block field configuration issues ([#7843](https://github.com/nocobase/nocobase/pull/7843)) by @katherinehhh

- **[Async task manager]**
  - Fix language of canceling background task ([#8245](https://github.com/nocobase/nocobase/pull/8245)) by @mytharcher

  - Fix language of canceling background task ([#8245](https://github.com/nocobase/nocobase/pull/8245)) by @mytharcher

- **[Workflow]**
  - Fixed database events becoming invalid after refreshing the external data source ([#8207](https://github.com/nocobase/nocobase/pull/8207)) by @cgyrock

  - Fixed database events becoming invalid after refreshing the external data source ([#8207](https://github.com/nocobase/nocobase/pull/8207)) by @cgyrock

  - Fix the issue where error thrown when delete workflow version which is not current ([#8203](https://github.com/nocobase/nocobase/pull/8203)) by @mytharcher

  - Fix the issue where the only one record show in record list to be manually execute ([#8187](https://github.com/nocobase/nocobase/pull/8187)) by @mytharcher

  - Fix the issue where adding a workflow in the bound workflow button configuration caused the application to freeze after clicking ([#7541](https://github.com/nocobase/nocobase/pull/7541)) by @mytharcher

- **[UI templates]**
  - Fix an issue where some legacy popups could not be reused correctly after being converted into templates. ([#8283](https://github.com/nocobase/nocobase/pull/8283)) by @gchust

  - Fix an issue where field templates could not apply linkage rules and form layout. ([#8266](https://github.com/nocobase/nocobase/pull/8266)) by @gchust

  - Fix an error where opening an association field popup would incorrectly use a non-association field popup template. ([#8233](https://github.com/nocobase/nocobase/pull/8233)) by @gchust

- **[Collection: Tree]** Update paths after bulk creating tree collection nodes ([#8267](https://github.com/nocobase/nocobase/pull/8267)) by @2013xile

- **[AI employees]**
  - Rresolve issue where llm node message content was not displayed ([#8257](https://github.com/nocobase/nocobase/pull/8257)) by @heziqiang

  - Resolve issue about ai message line break ([#8096](https://github.com/nocobase/nocobase/pull/8096)) by @heziqiang

  - Resolve issue where datasource role name was not compiled ([#8076](https://github.com/nocobase/nocobase/pull/8076)) by @heziqiang

  - Fixed an issue where some current record fields could not be displayed in the variable selection component. ([#8053](https://github.com/nocobase/nocobase/pull/8053)) by @gchust

  - Fix issue when ai generating SQL output ([#7956](https://github.com/nocobase/nocobase/pull/7956)) by @heziqiang

  - Hide AI employee chat button on v1 pages ([#7829](https://github.com/nocobase/nocobase/pull/7829)) by @cgyrock

  - Optimized web search behavior and user hints for Gemini ([#7720](https://github.com/nocobase/nocobase/pull/7720)) by @cgyrock

  - Fixed an issue where blocks with associated API resources did not fetch corresponding data when selected. ([#7688](https://github.com/nocobase/nocobase/pull/7688)) by @cgyrock

  - fix chat box layout issue In mobile layout ([#7591](https://github.com/nocobase/nocobase/pull/7591)) by @cgyrock

  - Fix errors in the AI employee data-modeling tool when using ChatGPT-4o. ([#7566](https://github.com/nocobase/nocobase/pull/7566)) by @cgyrock

  - Fix the error on the ai employee permissions configuration page ([#7548](https://github.com/nocobase/nocobase/pull/7548)) by @2013xile

- **[Workflow: Manual node]**
  - Fix the issue where error thrown when cancel execution of deleted workflow ([#8258](https://github.com/nocobase/nocobase/pull/8258)) by @mytharcher

  - Fix the issue manual todo list is using incorrect API ([#8144](https://github.com/nocobase/nocobase/pull/8144)) by @mytharcher

- **[Collection field: Sequence]**
  - Fixed an error when the field-sequence repair command encounters a non-existent collection in the current environment. ([#8251](https://github.com/nocobase/nocobase/pull/8251)) by @cgyrock

  - Improve the robustness of the plugin-field-sequence when handling the repair command ([#8139](https://github.com/nocobase/nocobase/pull/8139)) by @cgyrock

- **[Departments]** Fix an issue where aggregate search cannot locate users ([#8222](https://github.com/nocobase/nocobase/pull/8222)) by @2013xile

- **[Collection field: Many to many (array)]** Fix an issue where many-to-many (array) fields cannot be created when the target key type is Snowflake ID (53-bit) ([#8226](https://github.com/nocobase/nocobase/pull/8226)) by @2013xile

- **[License settings]**
  - Fix the abnormal display of the licensed plugin ([#8214](https://github.com/nocobase/nocobase/pull/8214)) by @jiannx

  - fix plugin-license ts build exception ([#8183](https://github.com/nocobase/nocobase/pull/8183)) by @jiannx

  - license optimization and addition of prompt information ([#7993](https://github.com/nocobase/nocobase/pull/7993)) by @jiannx

- **[Collection field: Formula]**
  - Fix issue where BigInt fields cannot be added to Detail and Form block ([#8201](https://github.com/nocobase/nocobase/pull/8201)) by @katherinehhh

  - Fixed an issue where formula fields in filter action and filter form block could not type input values. ([#8102](https://github.com/nocobase/nocobase/pull/8102)) by @gchust

  - Fixed an issue where formula fields could not be added to filter form block. ([#8071](https://github.com/nocobase/nocobase/pull/8071)) by @gchust

- **[Block: Map]** fix incorrect map zoom level after menu switch ([#8193](https://github.com/nocobase/nocobase/pull/8193)) by @katherinehhh

- **[Notification: Email]** fix email notification connection limitation ([#8119](https://github.com/nocobase/nocobase/pull/8119)) by @jiannx

- **[Block: Action panel]** optimize style in List layout of action panel block ([#8084](https://github.com/nocobase/nocobase/pull/8084)) by @katherinehhh

- **[Data source manager]** Fix errors when updating passwords for external data sources ([#8024](https://github.com/nocobase/nocobase/pull/8024)) by @cgyrock

- **[Action: Export records]**
  - fix missing system fields in exportable field list ([#8002](https://github.com/nocobase/nocobase/pull/8002)) by @katherinehhh

  - resolve issue with exportable field list display in export action ([#7714](https://github.com/nocobase/nocobase/pull/7714)) by @katherinehhh

- **[Flow engine]**
  - Ensure record variables always return full records when used together with their individual fields. ([#7917](https://github.com/nocobase/nocobase/pull/7917)) by @gchust

  - not be able to resolve variables in linkage set fields action ([#7684](https://github.com/nocobase/nocobase/pull/7684)) by @gchust

  - Fixed incorrect resolving of the parent popup’s record variable. ([#7637](https://github.com/nocobase/nocobase/pull/7637)) by @gchust

- **[Multi-app manager (deprecated)]**
  - After a sub application stops, publish a synchronization message to notify other nodes to stop the corresponding sub application ([#7849](https://github.com/nocobase/nocobase/pull/7849)) by @2013xile

  - Incorrect collection for sub-application status metric ([#7772](https://github.com/nocobase/nocobase/pull/7772)) by @2013xile

  - Fix not being able to disable old multi-app-manager ([#7633](https://github.com/nocobase/nocobase/pull/7633)) by @jiannx

  - Fix port validation before multi-application data migration ([#7540](https://github.com/nocobase/nocobase/pull/7540)) by @jiannx

- **[Block: GridCard]** fix data duplication issue between list and grid card block ([#7773](https://github.com/nocobase/nocobase/pull/7773)) by @katherinehhh

- **[Block: template (deprecated)]** Fixed an issue where unnecessary requests for block templates were triggered when opening or closing modals ([#7561](https://github.com/nocobase/nocobase/pull/7561)) by @gchust

- **[Action: Export records Pro]** fix attachment export option "Generate a folder for each record" not taking effect by @katherinehhh

- **[Data source: External PostgreSQL]** Fixed database events becoming invalid after refreshing the external data source by @cgyrock

- **[Action: Import records Pro]**
  - Fix unique check logic which will throw error when the value of unique field is null by @mytharcher

  - fix issue where uploader modification of import options has no effect by @katherinehhh

  - resolve issue with field list display in Importable fields by @katherinehhh

- **[Collection: Connect to foreign data (FDW)]**
  - Fix trigger errors when connecting to tables with uppercase names by @2013xile

  - Fix issue where loading fails for tables with uppercase names by @2013xile

- **[Data source: External SQL Server]** Fix issues where the `encrypt` and `trustServerCertificate` options are not available by @2013xile

- **[Multi-space]**
  - Mobile devices support space switching by @jiannx

  - Fix the creation of other fields in the system collection by @jiannx

  - multi-space associated users by @jiannx

- **[HTTP request encryption]** Use brackets for array format in qs parsing by @chenos

- **[Comments]**
  - Fix failed to delete record in comment block by @katherinehhh

  - fix  issue when quoted comments in comment block fail to display by @katherinehhh

  - Fix show warning when comment block is used on non-comment collection by @katherinehhh

- **[Template print]**
  - fix  template print action error in detail block by @katherinehhh

  - fix fail to add template in record template print operation by @katherinehhh

  - Fix  template print request not working with external data sources by @katherinehhh

- **[Multi-app]**
  - multi app proxy support cache by @jiannx

  - multi-app migration not emit hooks by @jiannx

- **[plugin-demo-platform]** demo support auto stop apps by @jiannx

- **[Data source: External Oracle]** Fixed database events becoming invalid after refreshing the external data source by @cgyrock

- **[Workflow: Approval]**
  - Fix the issue where status of unrelated approval records are incorrectly changed to `UNPROCESSED` by approve action by @mytharcher

  - Fix the issue where approving makes association to creating new record by @mytharcher

  - Fix duplicated rollback of same transaction by @mytharcher

  - Fix the issue where error thrown when cancel a execution when its workflow is deleted by @mytharcher

  - Fix the issue filled data disappeared in assignee's form by @mytharcher

  - Fix the issue where approving makes to-many association to creating new records by @mytharcher

  - Fix error thrown when create approval information block by @mytharcher

- **[Email manager]**
  - Handling abnormal data by @jiannx

  - fix draft bugs by @jiannx

  - not synchronizing gmail scheduled status by @jiannx

  - ShadowHtml refresh error by @jiannx

  - allow modification of email parent id by @jiannx

- **[Migration manager]**
  - Fix an issue where line breaks in data were lost during migration. by @cgyrock

  - Fix missing migration description and set the current time as the default by @cgyrock

