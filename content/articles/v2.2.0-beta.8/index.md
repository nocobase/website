### 🚀 Improvements

- **[cli]** support OAuth device authorization flow ([#9922](https://github.com/nocobase/nocobase/pull/9922)) by @chenos

- **[client-v2]** Support configure js block should be wrapped by block card. ([#9897](https://github.com/nocobase/nocobase/pull/9897)) by @gchust

- **[flow-engine]** Automatically refreshed related data blocks when RunJS closes a popup after updating data through resource APIs ([#9873](https://github.com/nocobase/nocobase/pull/9873)) by @gchust

- **[Form drafts]** Migrate plugin form drafts to client v2. ([#9910](https://github.com/nocobase/nocobase/pull/9910)) by @gchust

### 🐛 Bug Fixes

- **[client-v2]**
  - Fixed link actions becoming invisible on mobile embedded pages when icon-only mode is enabled but no icon is configured. ([#9921](https://github.com/nocobase/nocobase/pull/9921)) by @katherinehhh

  - Fixed a brief no-pages prompt flash when refreshing in UI Editor mode. ([#9918](https://github.com/nocobase/nocobase/pull/9918)) by @katherinehhh

  - Fixed v2 form submit success redirects so they can reference the saved response record. ([#9907](https://github.com/nocobase/nocobase/pull/9907)) by @katherinehhh

  - Fixed link actions becoming invisible on mobile embedded pages when icon-only mode is enabled but no icon is configured. ([#9919](https://github.com/nocobase/nocobase/pull/9919)) by @katherinehhh

  - Fixed v2 table row action buttons changing row height. ([#9866](https://github.com/nocobase/nocobase/pull/9866)) by @jiannx

  - Fixed table blocks failing when a configured drag sorting field has been deleted, and allowed clearing the drag sorting field setting. ([#9867](https://github.com/nocobase/nocobase/pull/9867)) by @jiannx

- **[flow-engine]**
  - Fix the issue where mobile popups with long content cannot scroll ([#9871](https://github.com/nocobase/nocobase/pull/9871)) by @zhangzhonghe

  - Fixed an issue where some parameters of ctx.openView in RunJS would not take effect. ([#9883](https://github.com/nocobase/nocobase/pull/9883)) by @gchust

- **[cli]** support pnpm and yarn global self update ([#9912](https://github.com/nocobase/nocobase/pull/9912)) by @chenos

- **[client]** Corrected several copy and typo issues across locales, related UI text, and documentation. ([#9905](https://github.com/nocobase/nocobase/pull/9905)) by @Molunerfinn

- **[Flow engine]** Fixed the issue where mobile page can't be created by flow surface api. ([#9911](https://github.com/nocobase/nocobase/pull/9911)) by @gchust

- **[AI employees]**
  - Fixed the AI datasource card list so it adapts responsively to different viewport widths. ([#9924](https://github.com/nocobase/nocobase/pull/9924)) by @cgyrock

  - Fixed AI employee chat failures caused by replaying malformed tool calls. ([#9900](https://github.com/nocobase/nocobase/pull/9900)) by @cgyrock

- **[Backup manager]** Fixed inconsistent bold labels on the v2 Backup manager settings page. ([#9908](https://github.com/nocobase/nocobase/pull/9908)) by @katherinehhh

- **[Block: iframe]** Fixed 403 errors for normal users when viewing v2 iframe blocks in HTML mode. ([#9889](https://github.com/nocobase/nocobase/pull/9889)) by @jiannx

- **[Data source: External NocoBase]** Fixed NocoBase external data sources failing to load when connection options include runtime objects by @2013xile

- **[AI: Knowledge base]** Fixed layout overflow in version control and knowledge base document lists when content or viewport size is constrained. by @cgyrock

- **[Migration manager]** Fixed migration rules for database-synced collections by @2013xile

- **[Record history]**
  - Fixed an issue where record history could fail to save changes for some collections by @2013xile

  - Fixed external NocoBase data source loading failure when record history is enabled by @2013xile

- **[App supervisor]** Fixed the app supervisor Applications tab registration in Client V2 by @2013xile

- **[WeCom]** Fixed a blank flash when switching route menu items with the WeCom plugin enabled in Client V2 by @2013xile

