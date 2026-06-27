### 🎉 New Features

- **[client-v2]** Add an environment variable to configure legacy and modern route entry modes. ([#9891](https://github.com/nocobase/nocobase/pull/9891)) by @Molunerfinn
- **[ai]** Added support for using current user variables in remote MCP client URLs and headers. ([#9828](https://github.com/nocobase/nocobase/pull/9828)) by @cgyrock
- **[cli]** support install hook scripts ([#9824](https://github.com/nocobase/nocobase/pull/9824)) by @chenos
- **[Notification: Email]** Migrated the workflow notification node client to v2, restored channel-specific notification forms, and kept legacy workflow route compatibility for migrated notification configuration. ([#9817](https://github.com/nocobase/nocobase/pull/9817)) by @jiannx
- **[Workflow: mailer node]**

  - Added v2 client support for configuring the workflow mailer node. ([#9825](https://github.com/nocobase/nocobase/pull/9825)) by @jiannx
  - Add attachment support to the workflow mailer node. ([#9724](https://github.com/nocobase/nocobase/pull/9724)) by @mytharcher
- **[UI layout]** Add support for mobile layout ([#9641](https://github.com/nocobase/nocobase/pull/9641)) by @zhangzhonghe
- **[Backup manager]** Support backup and restore for KingBase as the primary database ([#9791](https://github.com/nocobase/nocobase/pull/9791)) by @2013xile
- **[Workflow]**

  - Migrate the Workflow settings page to the v2 client and share a reusable draggable category-tabs component via `@nocobase/client-v2`. ([#9645](https://github.com/nocobase/nocobase/pull/9645)) by @Molunerfinn
  - Added workflow database transaction scope support. ([#9742](https://github.com/nocobase/nocobase/pull/9742)) by @mytharcher
    Reference: [Database Transaction](docs/docs/en/workflow/nodes/transaction.md)
- **[AI employees]**

  - Added an external vector store configuration form for AI knowledge bases. ([#9723](https://github.com/nocobase/nocobase/pull/9723)) by @cgyrock
- **[Multi-portal]** Add Multi-Portal plugin by @zhangzhonghe
- **[Workflow: Database transaction node]**

  - Added a client-v2 implementation for the workflow database transaction node while preserving the legacy client entry. by @katherinehhh
  - Added the database transaction workflow node plugin. by @mytharcher
- **[AI: Knowledge base]** Added an external vector store configuration form for AI knowledge bases. by @cgyrock
- **[Migration manager]** Support migrations for KingBase as the primary database. by @2013xile
- **[Email manager]** Migrated the email manager client to v2. by @jiannx

### 🚀 Improvements

- **[undefined]**

  - Refined Russian documentation translation for improved wording, readability, and terminology consistency. ([#9816](https://github.com/nocobase/nocobase/pull/9816)) by @sembaev-a-a
  - Improved AI knowledge base retrieval and documentation. ([#9765](https://github.com/nocobase/nocobase/pull/9765)) by @cgyrock
  - Updated the Chinese documentation label for the Version Control plugin. ([#9776](https://github.com/nocobase/nocobase/pull/9776)) by @cgyrock
  - Added Russian translations for new UI strings. ([#9771](https://github.com/nocobase/nocobase/pull/9771)) by @sembaev-a-a
  - Refined Russian documentation translation for improved wording, readability, and terminology consistency. ([#9754](https://github.com/nocobase/nocobase/pull/9754)) by @sembaev-a-a
  - Add a version control scenario to the AI builder quick start ([#9748](https://github.com/nocobase/nocobase/pull/9748)) by @Molunerfinn
    Reference: [AI Builder Quick Start](https://docs.nocobase.com/en/ai-builder)
  - Improved the version control documentation with AI Builder automatic revision guidance. ([#9745](https://github.com/nocobase/nocobase/pull/9745)) by @cgyrock
- **[flow-engine]** Automatically refreshed related data blocks when RunJS closes a popup after updating data through resource APIs ([#9873](https://github.com/nocobase/nocobase/pull/9873)) by @gchust
- **[client-v2]**

  - Fixed missing Settings entries for Client V2 plugin manager cards when a plugin uses a shared or legacy settings path. ([#9852](https://github.com/nocobase/nocobase/pull/9852)) by @katherinehhh
  - Adjusted the v2 System settings menu order and page panel height to match the standard settings layout. ([#9849](https://github.com/nocobase/nocobase/pull/9849)) by @katherinehhh
  - Show field-level validation rules as read-only inherited rules in UI field validation settings. ([#9819](https://github.com/nocobase/nocobase/pull/9819)) by @katherinehhh
  - Add override value option for field value settings. ([#9578](https://github.com/nocobase/nocobase/pull/9578)) by @gchust
  - Supported current item variables in the data scope of association field columns within form sub-tables. ([#9444](https://github.com/nocobase/nocobase/pull/9444)) by @gchust
- **[cli]**

  - add env config schema version ([#9782](https://github.com/nocobase/nocobase/pull/9782)) by @chenos
  - normalize app compat build versions ([#9763](https://github.com/nocobase/nocobase/pull/9763)) by @chenos
  - support updating skills to a specified version ([#9760](https://github.com/nocobase/nocobase/pull/9760)) by @chenos
  - clarify init setup wording ([#9750](https://github.com/nocobase/nocobase/pull/9750)) by @chenos
- **[Workflow: JSON calculation]** Migrated the workflow JSON calculation node configuration UI to the v2 workflow canvas while preserving v1 canvas compatibility. ([#9902](https://github.com/nocobase/nocobase/pull/9902)) by @mytharcher
- **[Workflow]**

  - Simplified workflow v2 create/update field assignment, improved selected variable display, and avoided generating unused assign-form model data. ([#9887](https://github.com/nocobase/nocobase/pull/9887)) by @katherinehhh
  - Exported workflow v2 canvas extension APIs for downstream workflow node plugins. ([#9834](https://github.com/nocobase/nocobase/pull/9834)) by @katherinehhh
  - Stabilize update options test ([#9773](https://github.com/nocobase/nocobase/pull/9773)) by @mytharcher
  - Migrate the workflow output node configuration to v2 and align v2 workflow result viewers with the legacy display behavior for string results. ([#9813](https://github.com/nocobase/nocobase/pull/9813)) by @Molunerfinn
  - Migrate the workflow end node to the v2 implementation. ([#9795](https://github.com/nocobase/nocobase/pull/9795)) by @Molunerfinn
  - Improved workflow metadata editing by allowing descriptions to be edited from the details modal and pre-filling duplicate workflow metadata. ([#9766](https://github.com/nocobase/nocobase/pull/9766)) by @mytharcher
- **[Backup manager]**

  - Fixed version-control restore failures when selected-collection backups contain database views or related database objects. ([#9827](https://github.com/nocobase/nocobase/pull/9827)) by @cgyrock
  - Improved backup manager table styling and long file name display. ([#9864](https://github.com/nocobase/nocobase/pull/9864)) by @katherinehhh
  - Tables whose collection `dataCategory` is marked as `'runtime'` are now excluded from backups automatically. ([#9804](https://github.com/nocobase/nocobase/pull/9804)) by @cgyrock
- **[Public forms]** Separated v1 and v2 public form lists and fixed the v2 Configure page to open a configurable form detail page. ([#9851](https://github.com/nocobase/nocobase/pull/9851)) by @katherinehhh
- **[Workflow: Custom action event]** Migrated workflow triggers and bind-workflow settings to client-v2, including action trigger, custom action trigger, request interception trigger, and submit/update action workflow binding settings. ([#9845](https://github.com/nocobase/nocobase/pull/9845)) by @mytharcher
- **[User data synchronization]** Added modern UI support for user data synchronization settings ([#9837](https://github.com/nocobase/nocobase/pull/9837)) by @2013xile
- **[Flow engine]**

  - Open runjs browser globals. ([#9841](https://github.com/nocobase/nocobase/pull/9841)) by @gchust
  - Added the current block to the user context by default when building AI employees using the Flow Surface API. ([#9840](https://github.com/nocobase/nocobase/pull/9840)) by @gchust
- **[Workflow: HTTP request node]** Migrated the workflow HTTP request node to client-v2. ([#9806](https://github.com/nocobase/nocobase/pull/9806)) by @jiannx
- **[Access control]** Aligned the v2 Users & Permissions settings pages with v1 behavior, including pagination totals, department tree behavior, selected styles, and internal permissions-panel scrolling. ([#9810](https://github.com/nocobase/nocobase/pull/9810)) by @jiannx
- **[Workflow: JavaScript]** Migrated the JavaScript workflow node to client-v2 ([#9805](https://github.com/nocobase/nocobase/pull/9805)) by @jiannx
- **[File manager]**

  - Improved PDF previews by using the browser-native viewer for cross-origin PDF files while keeping same-origin PDF files rendered with PDF.js. ([#9796](https://github.com/nocobase/nocobase/pull/9796)) by @mytharcher
  - Added selectable text support to the file manager PDF preview when the PDF contains embedded text. ([#9781](https://github.com/nocobase/nocobase/pull/9781)) by @mytharcher
- **[Users]** Improved the Users & Permissions v2 page layout and department tree behavior. ([#9780](https://github.com/nocobase/nocobase/pull/9780)) by @jiannx
- **[Action: Batch edit]** Improved v2 action plugin loading and kept migrated action buttons in a stable order. ([#9778](https://github.com/nocobase/nocobase/pull/9778)) by @katherinehhh
- **[Action: Import records]** Improved import and async task error dialogs so long error messages can be fully read without breaking the layout. ([#9746](https://github.com/nocobase/nocobase/pull/9746)) by @katherinehhh
- **[Locale tester]** Added a client v2 settings page for the locale tester. ([#9744](https://github.com/nocobase/nocobase/pull/9744)) by @jiannx
- **[Version control]** Updated the Chinese display name of the Version Control plugin. by @cgyrock
- **[Action: Import records Pro]** Improved import dialogs so long error messages remain readable and v2 processing mode can be selected directly from the settings menu. by @katherinehhh
- **[AI: Knowledge base]** Improved AI knowledge base document segmentation, segment management, hit tests, and document workflow node support. by @cgyrock
- **[WeCom]** Added modern UI support for WeCom authentication, sync, and notification settings by @2013xile
- **[DingTalk]** Added modern UI support for DingTalk authentication, sync, and notification settings by @2013xile

### 🐛 Bug Fixes

- **[client-v2]**

  - Fixed a brief no-pages prompt flash when refreshing in UI Editor mode. ([#9918](https://github.com/nocobase/nocobase/pull/9918)) by @katherinehhh
  - Fixed v2 form submit success redirects so they can reference the saved response record. ([#9907](https://github.com/nocobase/nocobase/pull/9907)) by @katherinehhh
  - Fixed table blocks failing when a configured drag sorting field has been deleted, and allowed clearing the drag sorting field setting. ([#9867](https://github.com/nocobase/nocobase/pull/9867)) by @jiannx
  - Fixed v2 table row action buttons changing row height. ([#9866](https://github.com/nocobase/nocobase/pull/9866)) by @jiannx
  - Fix assigning values to display association fields in filter forms ([#9875](https://github.com/nocobase/nocobase/pull/9875)) by @zhangzhonghe
  - Fixed an issue where union roles could not be correctly resolved by variables in v2. ([#9611](https://github.com/nocobase/nocobase/pull/9611)) by @gchust
  - Fixed block did not refresh after blocks settings updated. ([#9843](https://github.com/nocobase/nocobase/pull/9843)) by @gchust
  - Fixed custom action workflow trigger buttons sending custom context JSON under an extra `values` property or as a serialized string. ([#9815](https://github.com/nocobase/nocobase/pull/9815)) by @mytharcher
  - Fixed an issue where configuring an association field value as a fixed value or default value would not take effect. ([#9820](https://github.com/nocobase/nocobase/pull/9820)) by @gchust
  - Fixed an issue where event flows on sub-table columns would execute incorrectly. ([#9821](https://github.com/nocobase/nocobase/pull/9821)) by @gchust
  - remove unexpected updateAssociationValues from association fields ([#9812](https://github.com/nocobase/nocobase/pull/9812)) by @katherinehhh
  - Fixed an issue where form submission would show incorrect message when a subform contained a sub-table. ([#9807](https://github.com/nocobase/nocobase/pull/9807)) by @gchust
  - Fixed untranslated Yes/No options in v2 filter form checkbox dropdowns. ([#9792](https://github.com/nocobase/nocobase/pull/9792)) by @katherinehhh
  - Fixed incorrect display and format settings when v2 table association title fields use time, date-only, or datetime fields. ([#9785](https://github.com/nocobase/nocobase/pull/9785)) by @katherinehhh
  - Fixed the issue that not able to update event flow settings after saving block as template. ([#9585](https://github.com/nocobase/nocobase/pull/9585)) by @gchust
  - Fixed migration progress not showing its dedicated progress view ([#9761](https://github.com/nocobase/nocobase/pull/9761)) by @2013xile
  - Fix the issue where v2 pages could keep loading after signing in ([#9738](https://github.com/nocobase/nocobase/pull/9738)) by @zhangzhonghe
- **[cli]**

  - support pnpm and yarn global self update ([#9912](https://github.com/nocobase/nocobase/pull/9912)) by @chenos
  - prepare npm source dev dependencies ([#9882](https://github.com/nocobase/nocobase/pull/9882)) by @chenos
  - require Node.js 22 for nb ([#9749](https://github.com/nocobase/nocobase/pull/9749)) by @chenos
- **[client]**

  - Corrected several copy and typo issues across locales, related UI text, and documentation. ([#9905](https://github.com/nocobase/nocobase/pull/9905)) by @Molunerfinn
  - Fix the issue where fields in horizontal subforms are too narrow to display data ([#9755](https://github.com/nocobase/nocobase/pull/9755)) by @zhangzhonghe
- **[flow-engine]**

  - Fixed an issue where some parameters of ctx.openView in RunJS would not take effect. ([#9883](https://github.com/nocobase/nocobase/pull/9883)) by @gchust
  - Fix the issue where resizing fields closes the detail popup ([#9850](https://github.com/nocobase/nocobase/pull/9850)) by @zhangzhonghe
  - Fix the issue where the block toolbar may not reappear after dragging a field ([#9848](https://github.com/nocobase/nocobase/pull/9848)) by @zhangzhonghe
  - Fixed Vietnamese and Chinese IME input handling in v2 single-line text and textarea fields. ([#9764](https://github.com/nocobase/nocobase/pull/9764)) by @katherinehhh
- **[ai]**

  - Added support for using NocoBase request variables in user-bound MCP configurations and prevented user-bound MCP connection failures from interrupting AI employee conversations. ([#9888](https://github.com/nocobase/nocobase/pull/9888)) by @cgyrock
  - Fixed incompatible LangChain dependency resolutions for AI plugins. ([#9831](https://github.com/nocobase/nocobase/pull/9831)) by @cgyrock
  - Locked `@langchain/openai` to patch-level updates for AI packages. ([#9829](https://github.com/nocobase/nocobase/pull/9829)) by @cgyrock
- **[app]** Ignore unrelated currentScript when inferring plugin public path ([#9839](https://github.com/nocobase/nocobase/pull/9839)) by @chenos
- **[auth]** Encrypted password data is no longer included in sign-in status responses ([#9836](https://github.com/nocobase/nocobase/pull/9836)) by @2013xile
- **[cli-v1]** Fix the `yarn dev` error after upgrading projects created by `create-nocobase-app` from 2.0 to 2.1. ([#9775](https://github.com/nocobase/nocobase/pull/9775)) by @Molunerfinn
- **[server]** Fixed unsafe plugin name handling in `pm:enable` to prevent local file inclusion through plugin resolution. ([#9701](https://github.com/nocobase/nocobase/pull/9701)) by @mytharcher
- **[Backup manager]**

  - Fixed inconsistent bold labels on the v2 Backup manager settings page. ([#9908](https://github.com/nocobase/nocobase/pull/9908)) by @katherinehhh
  - Fixed a security issue where unsafe PostgreSQL schema names could be accepted during backup restore ([#9758](https://github.com/nocobase/nocobase/pull/9758)) by @2013xile
- **[AI employees]**

  - Fixed AI employee chat failures caused by replaying malformed tool calls. ([#9900](https://github.com/nocobase/nocobase/pull/9900)) by @cgyrock
  - Fixed AI employee shortcut task triggers so attachments from the current work context are included when running a task from the shortcut profile. ([#9808](https://github.com/nocobase/nocobase/pull/9808)) by @cgyrock
  - Fixed an issue where AI employees could not correctly fill sub-table data. ([#9801](https://github.com/nocobase/nocobase/pull/9801)) by @gchust
  - Fixed loss of message configuration in workflow LLM nodes. ([#9743](https://github.com/nocobase/nocobase/pull/9743)) by @cgyrock
  - Fixed an issue where attachments pasted into the AI employee dialog could not be removed. ([#9753](https://github.com/nocobase/nocobase/pull/9753)) by @cgyrock
- **[Workflow]**

  - Fixed the workflow v2 add-node menu so unavailable node types are disabled according to workflow and branch rules ([#9855](https://github.com/nocobase/nocobase/pull/9855)) by @mytharcher
  - Restored debounced remote search for workflow collection trigger manual execution and aligned the selector with the v1 200-record fetch behavior. ([#9870](https://github.com/nocobase/nocobase/pull/9870)) by @Molunerfinn
  - Fixed workflow dispatcher recovery after unexpected dispatch errors. ([#9783](https://github.com/nocobase/nocobase/pull/9783)) by @mytharcher
  - Fixed workflow last modifier tracking after workflow nodes are changed. ([#9769](https://github.com/nocobase/nocobase/pull/9769)) by @mytharcher
  - Fixed workflow timeout handling so aborted executions and their pending jobs are updated atomically. ([#9768](https://github.com/nocobase/nocobase/pull/9768)) by @mytharcher
- **[Block: iframe]** Fixed 403 errors for normal users when viewing v2 iframe blocks in HTML mode. ([#9889](https://github.com/nocobase/nocobase/pull/9889)) by @jiannx
- **[UI templates]**

  - Fixed an issue where association field block templates could not be used. ([#9406](https://github.com/nocobase/nocobase/pull/9406)) by @gchust
  - Fixed incorrect default context for ctx.openview. ([#9811](https://github.com/nocobase/nocobase/pull/9811)) by @gchust
- **[Workflow: Custom action event]**

  - Fixed the v2 custom action workflow binding selector so enabled workflows are filtered with boolean values and can be listed correctly. ([#9865](https://github.com/nocobase/nocobase/pull/9865)) by @mytharcher
  - Fixed custom-context trigger workflow actions so frontend variables in request payloads are resolved before submission in v2 action buttons ([#9853](https://github.com/nocobase/nocobase/pull/9853)) by @mytharcher
  - Fixed action panel v2 trigger workflow buttons showing success and sending a request when no workflow is bound. ([#9798](https://github.com/nocobase/nocobase/pull/9798)) by @mytharcher
- **[Data source manager]**

  - Added a warning and quick setup for v2 data source collections without a primary key or record unique key. ([#9872](https://github.com/nocobase/nocobase/pull/9872)) by @katherinehhh
  - Fixed an issue where deleting the active collection category in the v1 data source manager could leave the All collections tab empty. ([#9757](https://github.com/nocobase/nocobase/pull/9757)) by @katherinehhh
  - Fixed the blank edit field drawer caused by repeated rerenders on the v1 external data source Configure fields page. ([#9759](https://github.com/nocobase/nocobase/pull/9759)) by @katherinehhh
- **[Workflow: mailer node]** Fixed workflow v2 test failures caused by missing mocks for trigger workflow action registration. ([#9863](https://github.com/nocobase/nocobase/pull/9863)) by @jiannx
- **[Embed NocoBase]** Fixed v2 embed pages losing token-based access after the URL token is removed and the page is refreshed. ([#9857](https://github.com/nocobase/nocobase/pull/9857)) by @katherinehhh
- **[Workflow: Response message]** Migrated the workflow response message node to the v2 canvas and fixed unsupported workflow types being able to add it. ([#9830](https://github.com/nocobase/nocobase/pull/9830)) by @jiannx
- **[Block: Gantt]** Fixed Gantt task popup template settings not applying or clearing correctly. ([#9835](https://github.com/nocobase/nocobase/pull/9835)) by @jiannx
- **[Action: Print]** Fixed v2 detail block printing so empty detail blocks no longer print the whole page. ([#9832](https://github.com/nocobase/nocobase/pull/9832)) by @katherinehhh
- **[Workflow: JavaScript]** Fixed JavaScript workflow node registration failure in the legacy workflow client. ([#9826](https://github.com/nocobase/nocobase/pull/9826)) by @jiannx
- **[File manager]**

  - Fixed 404 errors when uploading files to attachment URL fields in external data sources ([#9809](https://github.com/nocobase/nocobase/pull/9809)) by @2013xile
  - Fixed PDF preview failures caused by the pdf.js worker module not loading correctly. ([#9779](https://github.com/nocobase/nocobase/pull/9779)) by @mytharcher
  - Fix PDF previews missing CJK/CID font text after switching to pdf.js. ([#9737](https://github.com/nocobase/nocobase/pull/9737)) by @mytharcher
- **[Action: Custom request]** Fixed V2 custom request actions showing an extra error when request settings are not configured. ([#9802](https://github.com/nocobase/nocobase/pull/9802)) by @katherinehhh
- **[Flow engine]** Fixed an issue where current record forms and details in popup could contain incorrect data if built by AI. ([#9788](https://github.com/nocobase/nocobase/pull/9788)) by @gchust
- **[Async task manager]**

  - Fixed async task file download errors when the task id is missing from `filterByTk`. ([#9705](https://github.com/nocobase/nocobase/pull/9705)) by @mytharcher
  - Fixed incorrect request IDs in async task worker logs ([#9686](https://github.com/nocobase/nocobase/pull/9686)) by @2013xile
- **[Action: Import records]** Store import uploads on disk to reduce memory pressure during large imports. ([#9739](https://github.com/nocobase/nocobase/pull/9739)) by @mytharcher
- **[Workflow: SQL node]** Fixed SQL workflow legacy template-variable migration being skipped for some beta-version users. ([#9762](https://github.com/nocobase/nocobase/pull/9762)) by @mytharcher
- **[Block: Kanban]**

  - Fixed unexpected hidden popup action persistence and repeated destroy requests when opening calendar, gantt, and kanban blocks outside edit mode. ([#9772](https://github.com/nocobase/nocobase/pull/9772)) by @jiannx
  - Fixed URL support for calendar and related popups. ([#9751](https://github.com/nocobase/nocobase/pull/9751)) by @jiannx
- **[API documentation]** Fixed the API documentation package declaration build failure. ([#9752](https://github.com/nocobase/nocobase/pull/9752)) by @katherinehhh
- **[Version control]**

  - Fixed version-control restore failures when selected-collection backups contain database views or related database objects. by @cgyrock
  - Adjusted the Version control topbar shortcut to appear next to the UI editor in both legacy and v2 admin layouts. by @cgyrock
- **[AI: Knowledge base]**

  - Fixed AI knowledge base document table and hit-test result cards overflowing on narrow screens or with long filenames. by @cgyrock
  - Fixed incompatible LangChain dependency resolutions for the AI knowledge base plugin. by @cgyrock
  - Fixed unclear failures when enabling the AI knowledge base plugin without the AI plugin available. by @cgyrock
- **[Multi-space]**

  - Fixed the spaces settings page so it can load spaces beyond the first 20 records. by @jiannx
  - Fixed authentication recovery requests being blocked by stale multi-space headers. by @jiannx
  - Fixed permission errors when space managers add users without access to the users email field. by @jiannx
- **[Data source: External NocoBase]** Proxy NocoBase external data source file upload and storage actions by upload data source by @2013xile
- **[Action: Export records Pro]** Improved v2 import/export pro Processing mode settings and tooltip descriptions. by @katherinehhh
- **[Action: Import records Pro]** Avoid parsing large pro import files on the request node before async task creation. by @mytharcher
- **[Workflow: Subflow]** Fixed asynchronous subflows so parent workflows can resume after worker restart or in-memory event mapping loss. by @mytharcher
- **[Migration manager]** Fixed failures when importing large migration data files by @2013xile
- **[Template print]** Rejected unsupported template file types before template printing starts by @2013xile
- **[Workflow: Approval]**

  - Fixed approval action node validation to allow `null` for `applyDetail` or `approvalUid` and skip processing unless a string reference is provided by @mytharcher
  - Fix the issue where related approvals do not load or refresh correctly by @zhangzhonghe
  - Fix the issue where related data is not displayed in v2 approval forms by @zhangzhonghe
- **[App supervisor]** Fixed a crash when remote WebSocket proxy responses fail by @2013xile
