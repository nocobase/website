### 🚀 Improvements

- **[server]** Support configuring a CORS origin whitelist ([#8454](https://github.com/nocobase/nocobase/pull/8454)) by @2013xile

- **[Action: Export records]** Improve export action data scope based on selected records or resource filters ([#8442](https://github.com/nocobase/nocobase/pull/8442)) by @katherinehhh

- **[Action: Export records Pro]** Improve export action data scope based on selected records or resource filters by @katherinehhh

### 🐛 Bug Fixes

- **[client]**
  - Fix the issue where the "Custom Variables" popup is obscured ([#8463](https://github.com/nocobase/nocobase/pull/8463)) by @zhangzhonghe

  - fix issue when editing collection in the graphical interface ([#8451](https://github.com/nocobase/nocobase/pull/8451)) by @katherinehhh

  - fix issue where collection field group sorting settings did not take effect. ([#8453](https://github.com/nocobase/nocobase/pull/8453)) by @katherinehhh

  - Fix the issue where the shortcut modal height exceeds the viewport height ([#8437](https://github.com/nocobase/nocobase/pull/8437)) by @zhangzhonghe

  - Fix the issue where table row button linkage rules affect the state of buttons within popup forms ([#8434](https://github.com/nocobase/nocobase/pull/8434)) by @zhangzhonghe

  - Fix an issue where the table action column state was polluted when switching pages. ([#8438](https://github.com/nocobase/nocobase/pull/8438)) by @gchust

  - Fix the issue where the table "Column Settings" button is non-functional ([#8441](https://github.com/nocobase/nocobase/pull/8441)) by @zhangzhonghe

  - Fix an issue where the file association field's picker popup had an incorrect z-index, and the popup configuration could not be saved correctly. ([#8446](https://github.com/nocobase/nocobase/pull/8446)) by @gchust

- **[flow-engine]**
  - Fix an issue where variables in runjs code params were resolved before execution. ([#8445](https://github.com/nocobase/nocobase/pull/8445)) by @gchust

  - Fix an issue where popup variables could not be selected in the data selector’s quick-create popup. ([#8450](https://github.com/nocobase/nocobase/pull/8450)) by @gchust

  - Fix an issue where repeatedly clicking the configuration menu could open multiple configuration popups. ([#8448](https://github.com/nocobase/nocobase/pull/8448)) by @gchust

- **[Mobile (deprecated)]** Deprecated mobile plugin (replaced by the ui-layout plugin from version 2.0). ([#8456](https://github.com/nocobase/nocobase/pull/8456)) by @chenos

- **[Flow engine]** Fix an issue where variables containing hyphens could not be parsed correctly. ([#8432](https://github.com/nocobase/nocobase/pull/8432)) by @gchust

- **[Email manager]** Fix the issue where the email configuration popup is obscured by @zhangzhonghe

