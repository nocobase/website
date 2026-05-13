### 🎉 New Features

- **[client]**
  - add current user language variable in v2 ([#9405](https://github.com/nocobase/nocobase/pull/9405)) by @katherinehhh

  - add date range limit option for date fields in v2 forms ([#9400](https://github.com/nocobase/nocobase/pull/9400)) by @katherinehhh

### 🚀 Improvements

- **[client]** exclude already associated records in association selection dialog of one-to-many table block ([#9448](https://github.com/nocobase/nocobase/pull/9448)) by @katherinehhh

- **[Departments]** optimize department list style by adding icons and adjusting spacing ([#9435](https://github.com/nocobase/nocobase/pull/9435)) by @katherinehhh

- **[AI: Knowledge base]** The unique identifier for a knowledge base is configurable at the time of creation by @cgyrock

### 🐛 Bug Fixes

- **[client]**
  - Fixed the issue where legacy default value settings can't be removed. ([#9470](https://github.com/nocobase/nocobase/pull/9470)) by @gchust

  - Fixed the issue where can't select options for association's select field. ([#9088](https://github.com/nocobase/nocobase/pull/9088)) by @gchust

  - Fixed an issue where the target block data scope was set incorrectly when deselecting row data in a table block event flow. ([#9443](https://github.com/nocobase/nocobase/pull/9443)) by @gchust

  - Fix duplicate table requests when filter forms have default values ([#9423](https://github.com/nocobase/nocobase/pull/9423)) by @zhangzhonghe

  - Fixed V2 linkage rules to support setting selectable options for fields ([#9399](https://github.com/nocobase/nocobase/pull/9399)) by @jiannx

  - fix error when changing title field of association field in v2 table block ([#9451](https://github.com/nocobase/nocobase/pull/9451)) by @katherinehhh

  - Fixed an intermittent issue where action button linkage rules would fail to take effect. ([#9430](https://github.com/nocobase/nocobase/pull/9430)) by @gchust

  - hide subtable component for to-many association fields in v2 subtable ([#9438](https://github.com/nocobase/nocobase/pull/9438)) by @katherinehhh

- **[server]** fix(file-manager): force download active content files in local/public storage ([#9437](https://github.com/nocobase/nocobase/pull/9437)) by @mytharcher

- **[AI employees]** Fixed Ollama test flight requiring key input ([#9450](https://github.com/nocobase/nocobase/pull/9450)) by @cgyrock

- **[Graph collection manager]** fix graphical interface auto layout throws update action filter error ([#9421](https://github.com/nocobase/nocobase/pull/9421)) by @katherinehhh

- **[Workflow]** fix: restore helper text in FlowModel workflow binding dialogs for operation and custom action events ([#9447](https://github.com/nocobase/nocobase/pull/9447)) by @mytharcher

- **[Departments]** fix translation conflict between add user and add department buttons in Users & Permissions settings ([#9456](https://github.com/nocobase/nocobase/pull/9456)) by @katherinehhh

- **[Collection field: Markdown(Vditor)]** fix markdown field tooltip being hidden in horizontal form layout ([#9420](https://github.com/nocobase/nocobase/pull/9420)) by @katherinehhh

- **[WEB client]** Fix route type filtering when using translated labels ([#9425](https://github.com/nocobase/nocobase/pull/9425)) by @zhangzhonghe

- **[Workflow: Approval]**
  - Fix the issue where JS field appears in approval process settings by @zhangzhonghe

  - Fix approval form layout on mobile devices by @zhangzhonghe

  - Fix duplicate approval record index when delegating approval tasks. by @mytharcher

- **[Backup manager]** Fixed an issue where backups would fail with an error when files could not be found. by @gchust

