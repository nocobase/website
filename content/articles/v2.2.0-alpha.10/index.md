### 🎉 New Features

* **[Web client]** Reduced application language responses to the requested resource namespaces, avoiding unnecessary language data. ([#10175](https://github.com/nocobase/nocobase/pull/10175)) by @2013xile
* **[AI employees]** Added support for registering frontend AI tools in JS blocks. ([#10121](https://github.com/nocobase/nocobase/pull/10121)) by @2013xile
* **[Workflow: Approval]**
  * Added usage guidance and card-based approval selection to the approval initiation list in client v2. by @mytharcher

### 🚀 Improvements

* **[client-v2]**
  * Improved v2 QR code and barcode scan recognition, camera lifecycle safety, and responsive preview behavior. ([#10145](https://github.com/nocobase/nocobase/pull/10145)) by @katherinehhh
  * Added Myanmar (`<span>my-MM</span>`) to the languages available in System Settings. ([#10131](https://github.com/nocobase/nocobase/pull/10131)) by @hongboji
* **[client]** Added Myanmar (`<span>my-MM</span>`) to the legacy System Settings language selector. ([#10153](https://github.com/nocobase/nocobase/pull/10153)) by @hongboji
* **[Workflow]**
  * Improved pending task handling by persisting start, resume, and rerun tasks in the event queue. ([#9846](https://github.com/nocobase/nocobase/pull/9846)) by @mytharcher
* **[File manager]** Added independent storage settings for returning original file URLs and allowing public access to file URLs. ([#10160](https://github.com/nocobase/nocobase/pull/10160)) by @mytharcher
* **[AI employees]** Fixed issues with saving AI employee model settings, disabled AI employees being able to create conversations, and the mobile chatbox layout. ([#10120](https://github.com/nocobase/nocobase/pull/10120)) by @cgyrock
* **[Workflow: Subflow]** Adjusted the waiting queue processing strategy following the workflow engine refactor. by @mytharcher
* **[File storage: S3 (Pro)]** Added independent S3 Pro settings for original URLs, public access to file URLs, and unsigned URLs. by @mytharcher
* **[Workflow: Approval]**
  * Added usage guidance and card-based selection to the approval initiation list. by @mytharcher
  * Improved the approval timeline with clearer status badges, time information, user avatars, responsive layouts, and connections between multiple submission rounds. by @mytharcher
  * Added support for remotely searching approval notification channels by title. by @mytharcher

### 🐛 Bug Fixes

* **[Documentation]** Corrected the `<span>PLUGIN_PACKAGE_PREFIX</span>` examples to ensure that preset plugins use the `<span>@nocobase/preset-</span>` prefix. ([#10179](https://github.com/nocobase/nocobase/pull/10179)) by @hongboji
* **[flow-engine]**
  * Fixed v2 table quick edit visibility not being controlled by record-level and field-level update permissions. ([#10182](https://github.com/nocobase/nocobase/pull/10182)) by @katherinehhh
  * Fixed untranslated default text in secondary confirmation settings when using Simplified Chinese. ([#10149](https://github.com/nocobase/nocobase/pull/10149)) by @mytharcher
  * Fixed v2 block configuration dropdowns unexpectedly closing when their active trigger was clicked. ([#10143](https://github.com/nocobase/nocobase/pull/10143)) by @katherinehhh
  * Fixed mobile popups extending beyond the screen and obscuring the close button. ([#10118](https://github.com/nocobase/nocobase/pull/10118)) by @zhangzhonghe
  * Fixed the Add Block menu unexpectedly disappearing during searches. ([#10097](https://github.com/nocobase/nocobase/pull/10097)) by @gchust
* **[ai]** Improved document loading reliability with clearer errors for password-protected PDFs and timeout handling. ([#10172](https://github.com/nocobase/nocobase/pull/10172)) by @cgyrock
* **[client-v2]**
  * Improved error messages for unsupported and missing pages in the `<span>/v/</span>` branch. ([#10159](https://github.com/nocobase/nocobase/pull/10159)) by @zhangzhonghe
  * Fixed RunJS values not taking effect in v2 date field range limits. ([#10157](https://github.com/nocobase/nocobase/pull/10157)) by @katherinehhh
  * Fixed v2 table action titles being overwritten by their previous titles after a linkage refresh or page reload. ([#10140](https://github.com/nocobase/nocobase/pull/10140)) by @katherinehhh
  * Fixed an issue in popup subtable forms where selected association field values were cleared and required-field validation was incorrectly triggered when using the parent record’s data scope. ([#10146](https://github.com/nocobase/nocobase/pull/10146)) by @katherinehhh
  * Fixed record picker lists not refreshing after a new record was created in client v2. ([#10142](https://github.com/nocobase/nocobase/pull/10142)) by @katherinehhh
  * Fixed full-height and specified-height settings not taking effect when a JS block was displayed as a card. ([#10126](https://github.com/nocobase/nocobase/pull/10126)) by @gchust
  * Fixed an error that could prevent approval pages from loading. ([#10116](https://github.com/nocobase/nocobase/pull/10116)) by @zhangzhonghe
  * Fixed inconsistent route states that could occur when a page tab was renamed immediately after being enabled. ([#10117](https://github.com/nocobase/nocobase/pull/10117)) by @zhangzhonghe
  * Fixed date filter default values being converted into a single date. ([#9854](https://github.com/nocobase/nocobase/pull/9854)) by @zhangzhonghe
  * Fixed mobile menus being incorrectly hidden by device type rules. ([#10123](https://github.com/nocobase/nocobase/pull/10123)) by @zhangzhonghe
  * Removed unwanted border and shadow styles from Markdown H2 headings. ([#10107](https://github.com/nocobase/nocobase/pull/10107)) by @katherinehhh
* **[utils]** Ensured that redirect targets for server-side outbound requests also comply with the `<span>SERVER_REQUEST_WHITELIST</span>`. ([#10109](https://github.com/nocobase/nocobase/pull/10109)) by @mytharcher
  Reference: [Environment variables](https://docs.nocobase.com/get-started/installation/env#server_request_whitelist)
* **[resourcer]** Fixed pre-action events potentially not being triggered when used together with the approval before-save mode. ([#10119](https://github.com/nocobase/nocobase/pull/10119)) by @mytharcher
* **[database]** Fixed an SQL injection risk when reading database view metadata. ([#10115](https://github.com/nocobase/nocobase/pull/10115)) by @2013xile
* **[server]** Prevented uploaded XML and other active content files from executing scripts within the application’s origin. ([#10104](https://github.com/nocobase/nocobase/pull/10104)) by @mytharcher
* **[Backup manager]**
  * Improved the stability and accuracy of the backup plugin’s frontend tests. ([#10184](https://github.com/nocobase/nocobase/pull/10184)) by @cgyrock
  * Fixed missing visible error notifications when Backup Manager restore requests failed in client v2. ([#10158](https://github.com/nocobase/nocobase/pull/10158)) by @katherinehhh
* **[AI employees]**
  * Fixed the Operator variable selector in AI employee workflow nodes so that nested variables could be expanded, and removed the `<span>Null</span>` option from required fields. ([#10167](https://github.com/nocobase/nocobase/pull/10167)) by @cgyrock
  * Fixed AI form context not using custom form item labels. ([#10168](https://github.com/nocobase/nocobase/pull/10168)) by @cgyrock
  * Fixed frontend tools requesting confirmation in the conversation instead of using runtime approval. ([#10166](https://github.com/nocobase/nocobase/pull/10166)) by @2013xile
  * Fixed AI employee shortcuts losing block context when a new conversation was started from an existing conversation. ([#10169](https://github.com/nocobase/nocobase/pull/10169)) by @cgyrock
  * Prevented Nathan from reporting malformed code patches or patches without changes as successfully applied. ([#10174](https://github.com/nocobase/nocobase/pull/10174)) by @2013xile
* **[Notification: In-app message]** Fixed the in-app message template form displaying workflow canvas variables instead of the variables provided by the page. ([#10180](https://github.com/nocobase/nocobase/pull/10180)) by @Molunerfinn
* **[Authentication]**
  * Fixed incorrect SSO redirects for sub-applications using custom domains. ([#10170](https://github.com/nocobase/nocobase/pull/10170)) by @2013xile
  * Fixed intermittent database connection errors during application shutdown when Redis caching was enabled. ([#10151](https://github.com/nocobase/nocobase/pull/10151)) by @mytharcher
* **[Collection field: Sequence]** Fixed v2 sequence rule options not saving entered values and fixed-text rules incorrectly reporting required-field errors after values were entered. ([#10156](https://github.com/nocobase/nocobase/pull/10156)) by @katherinehhh
* **[Block: Kanban]** Fixed copied popup templates not taking effect or being incorrectly cleared in Calendar and Kanban blocks. ([#9856](https://github.com/nocobase/nocobase/pull/9856)) by @jiannx
* **[Variables and secrets]** Fixed validation feedback for v2 bulk imports of variables and secrets, and fixed Type filter failures. ([#10154](https://github.com/nocobase/nocobase/pull/10154)) by @katherinehhh
* **[Workflow]** Improved regression test coverage for permanent file URLs, attachment thumbnails, preview downloads, and local storage security response headers. ([#10148](https://github.com/nocobase/nocobase/pull/10148)) by @mytharcher
* **[Calendar]** Fixed the v2 calendar event overlay extending beyond the page when many events were displayed by adding a scrollbar. ([#10138](https://github.com/nocobase/nocobase/pull/10138)) by @katherinehhh
* **[App SSO]** Fixed App SSO failures when the public Issuer could not be accessed by sub-application servers. by @2013xile
* **[AI: Knowledge base]** Improved AI knowledge base document processing with clearer PDF error messages, upload size validation, timeout protection, and correct pagination for segment lists. by @cgyrock
* **[Multi-space]** Fixed account switching failures caused by authentication recovery requests carrying the previous space header. by @jiannx
* **[Migration manager]** Improved v2 migration error messages, prevented duplicate migration rule names, and fixed environment check modal overflow. by @katherinehhh
* **[Auth: OIDC]** Fixed incorrect redirects after OIDC login through a custom domain of a sub-application. by @2013xile
* **[Workflow: Approval]**
  * Fixed some system variables provided in approval message templates rendering as empty. by @Molunerfinn
  * Prevented restricted approvers from viewing unauthorized fields in the original application content. by @zhangzhonghe
  * Fixed approvers being able to return applications when the Return action was not enabled. by @zhangzhonghe
  * Fixed missing field templates in approval configurations when UI Editor was disabled. by @zhangzhonghe
  * Hid approval configuration controls when UI Editor was disabled. by @zhangzhonghe
  * Fixed occasional errors when directly opening approval task details. by @zhangzhonghe
  * Fixed approval submission messages overwriting messages from pre-action events. by @mytharcher
* **[Collection field: Signature]** Fixed localization and option filtering issues in the file collection selector for client-v2 signature fields. by @katherinehhh
* **[DingTalk]** Fixed DingTalk notification channels losing the selected authenticator when saved from the v2 channel form. by @jiannx
