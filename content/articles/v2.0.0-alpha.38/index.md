### 🎉 New Features

- **[client]** Support dragging for table column actions ([#7842](https://github.com/nocobase/nocobase/pull/7842)) by @zhangzhonghe

- **[Data visualization]** add chart sql datasource ([#7830](https://github.com/nocobase/nocobase/pull/7830)) by @heziqiang

### 🚀 Improvements

- **[client]** Added support for the Day.js library in the RunJS scripting context, enabling easier date and time manipulations. ([#7841](https://github.com/nocobase/nocobase/pull/7841)) by @gchust

### 🐛 Bug Fixes

- **[utils]**
  - Fix the "Invalid filter item type" error on the filter button ([#7838](https://github.com/nocobase/nocobase/pull/7838)) by @zhangzhonghe

  - Enable object merging in intersect strategy ([#7840](https://github.com/nocobase/nocobase/pull/7840)) by @chenos

  - Fix the 'Unrecognized operation' error in the event flow ([#7835](https://github.com/nocobase/nocobase/pull/7835)) by @zhangzhonghe

- **[client]**
  - Fixed an issue where the linkage rules for row action buttons in a table block were not re-executed after the row data was updated, ensuring the rules are now properly reapplied when changes occur. ([#7832](https://github.com/nocobase/nocobase/pull/7832)) by @gchust

  - Fixed the errors when preview code in code editor if the code contains jsx syntax ([#7836](https://github.com/nocobase/nocobase/pull/7836)) by @gchust

- **[undefined]** Fix the issue of incorrect styling on the plugin documentation homepage in dark mode. ([#7839](https://github.com/nocobase/nocobase/pull/7839)) by @gchust

- **[File manager]** fix table block field configuration issues ([#7843](https://github.com/nocobase/nocobase/pull/7843)) by @katherinehhh

- **[AI employees]** Hide AI employee chat button on v1 pages ([#7829](https://github.com/nocobase/nocobase/pull/7829)) by @cgyrock

- **[Data visualization: ECharts]** fix issue with ECharts config labelType by @heziqiang

- **[Email manager]**
  - fix draft bugs by @jiannx

  - sync microsoft mail read status without timestamp by @jiannx

