### 🎉 New Features

- **[Action: Batch edit]** bulk edit 2.0 ([#8526](https://github.com/nocobase/nocobase/pull/8526)) by @jiannx

### 🚀 Improvements

- **[client]**
  - Improve the date/time field assignment UI to support selecting relative dates/times. ([#8630](https://github.com/nocobase/nocobase/pull/8630)) by @gchust

  - Support specify title field for association fields when assigning field. ([#8624](https://github.com/nocobase/nocobase/pull/8624)) by @gchust

  - Table 2.0 supports drag and drop sorting ([#8540](https://github.com/nocobase/nocobase/pull/8540)) by @jiannx

  - Move field assignment and default value settings to form-level configuration. ([#8596](https://github.com/nocobase/nocobase/pull/8596)) by @chenos

- **[Localization]** automatically create missing i18n keys ([#8588](https://github.com/nocobase/nocobase/pull/8588)) by @jiannx

### 🐛 Bug Fixes

- **[flow-engine]** Fix an issue where the filter field submenu could not be expanded when a search keyword was present. ([#8604](https://github.com/nocobase/nocobase/pull/8604)) by @gchust

- **[client]**
  - Fix an issue where assigning a single record to a many-to-many relation field produced incorrect results. ([#8652](https://github.com/nocobase/nocobase/pull/8652)) by @gchust

  - parse date using date picker and add password strength validation, etc ([#8647](https://github.com/nocobase/nocobase/pull/8647)) by @jiannx

  - Fix the spacing issue caused by hidden linked actions in table action column ([#8646](https://github.com/nocobase/nocobase/pull/8646)) by @zhangzhonghe

  - fix resolve syntax error when markdown item renders invalid Liquid ([#8637](https://github.com/nocobase/nocobase/pull/8637)) by @katherinehhh

  - Fix unnecessary backend parsing requests for to-many field properties in form block. ([#8636](https://github.com/nocobase/nocobase/pull/8636)) by @gchust

  - Fix the issue where `Action.Modal` could not be closed after some interaction ([#8642](https://github.com/nocobase/nocobase/pull/8642)) by @mytharcher

  - fix missing number format for number formula fields and date format settings for date formula fields ([#8625](https://github.com/nocobase/nocobase/pull/8625)) by @katherinehhh

  - fix incomplete top border rendering on first form item ([#8623](https://github.com/nocobase/nocobase/pull/8623)) by @katherinehhh

  - Fix issue where cleared association attachment field is not saved after submit in edit form ([#8616](https://github.com/nocobase/nocobase/pull/8616)) by @katherinehhh

  - fix incorrect filtered data in association dropdown when title field is a foreign key ([#8619](https://github.com/nocobase/nocobase/pull/8619)) by @katherinehhh

  - fix unable to restore selected data in record picker field component after editing ([#8610](https://github.com/nocobase/nocobase/pull/8610)) by @katherinehhh

  - Fix field component options not refreshed in real time when association field switches pattern ([#8611](https://github.com/nocobase/nocobase/pull/8611)) by @katherinehhh

- **[utils]** Fix security issue of `formula.js` evaluator engine ([#8416](https://github.com/nocobase/nocobase/pull/8416)) by @mytharcher

- **[AI employees]**
  - Fixes an issue where citation links from AI web searches were not displayed in the chatbox ([#8651](https://github.com/nocobase/nocobase/pull/8651)) by @cgyrock

  - fix openai API parameters error ([#8633](https://github.com/nocobase/nocobase/pull/8633)) by @cgyrock

- **[File manager]** fix issue where file field component can still open selector dialog when disabled ([#8617](https://github.com/nocobase/nocobase/pull/8617)) by @katherinehhh

