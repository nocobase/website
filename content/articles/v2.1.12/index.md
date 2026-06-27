### 🚀 Improvements

- **[flow-engine]** Automatically refreshed related data blocks when RunJS closes a popup after updating data through resource APIs ([#9873](https://github.com/nocobase/nocobase/pull/9873)) by @gchust

- **[client-v2]** Support configure js block should be wrapped by block card. ([#9897](https://github.com/nocobase/nocobase/pull/9897)) by @gchust

### 🐛 Bug Fixes

- **[client-v2]**
  - Fixed link actions becoming invisible on mobile embedded pages when icon-only mode is enabled but no icon is configured. ([#9921](https://github.com/nocobase/nocobase/pull/9921)) by @katherinehhh

  - Fixed v2 table row action buttons changing row height. ([#9866](https://github.com/nocobase/nocobase/pull/9866)) by @jiannx

  - Fixed v2 form submit success redirects so they can reference the saved response record. ([#9907](https://github.com/nocobase/nocobase/pull/9907)) by @katherinehhh

  - Fixed table blocks failing when a configured drag sorting field has been deleted, and allowed clearing the drag sorting field setting. ([#9867](https://github.com/nocobase/nocobase/pull/9867)) by @jiannx

- **[client]** Corrected several copy and typo issues across locales, related UI text, and documentation. ([#9905](https://github.com/nocobase/nocobase/pull/9905)) by @Molunerfinn

- **[flow-engine]** Fixed an issue where some parameters of ctx.openView in RunJS would not take effect. ([#9883](https://github.com/nocobase/nocobase/pull/9883)) by @gchust

- **[cli]** support pnpm and yarn global self update ([#9912](https://github.com/nocobase/nocobase/pull/9912)) by @chenos

- **[AI employees]**
  - Fixed the AI datasource card list so it adapts responsively to different viewport widths. ([#9924](https://github.com/nocobase/nocobase/pull/9924)) by @cgyrock

  - Fixed AI employee chat failures caused by replaying malformed tool calls. ([#9900](https://github.com/nocobase/nocobase/pull/9900)) by @cgyrock

- **[Block: iframe]** Fixed 403 errors for normal users when viewing v2 iframe blocks in HTML mode. ([#9889](https://github.com/nocobase/nocobase/pull/9889)) by @jiannx

- **[AI: Knowledge base]** Fixed layout overflow in version control and knowledge base document lists when content or viewport size is constrained. by @cgyrock

- **[Migration manager]** Fixed migration rules for database-synced collections by @2013xile

- **[Record history]** Fixed an issue where record history could fail to save changes for some collections by @2013xile

