### 🎉 New Features

- **[server]** Refactor the app supervisor to support multi-app management across different scenarios ([#8043](https://github.com/nocobase/nocobase/pull/8043)) by @2013xile

### 🚀 Improvements

- **[client]**
  - Improve the date/time field assignment UI to support selecting relative dates/times. ([#8630](https://github.com/nocobase/nocobase/pull/8630)) by @gchust

  - Support specify title field for association fields when assigning field. ([#8624](https://github.com/nocobase/nocobase/pull/8624)) by @gchust

### 🐛 Bug Fixes

- **[flow-engine]**
  - Fix an issue where the filter field submenu could not be expanded when a search keyword was present. ([#8604](https://github.com/nocobase/nocobase/pull/8604)) by @gchust

  - fix column delete action not working in popup sub-table edit when createModelOptions is configured ([#8560](https://github.com/nocobase/nocobase/pull/8560)) by @katherinehhh

- **[client]**
  - Fix an issue where assigning a single record to a many-to-many relation field produced incorrect results. ([#8652](https://github.com/nocobase/nocobase/pull/8652)) by @gchust

  - parse date using date picker and add password strength validation, etc ([#8647](https://github.com/nocobase/nocobase/pull/8647)) by @jiannx

  - Fix the spacing issue caused by hidden linked actions in table action column ([#8646](https://github.com/nocobase/nocobase/pull/8646)) by @zhangzhonghe

  - Fix the issue where `Action.Modal` could not be closed after some interaction ([#8642](https://github.com/nocobase/nocobase/pull/8642)) by @mytharcher

  - fix resolve syntax error when markdown item renders invalid Liquid ([#8637](https://github.com/nocobase/nocobase/pull/8637)) by @katherinehhh

  - Fix unnecessary backend parsing requests for to-many field properties in form block. ([#8636](https://github.com/nocobase/nocobase/pull/8636)) by @gchust

  - fix missing number format for number formula fields and date format settings for date formula fields ([#8625](https://github.com/nocobase/nocobase/pull/8625)) by @katherinehhh

  - fix incomplete top border rendering on first form item ([#8623](https://github.com/nocobase/nocobase/pull/8623)) by @katherinehhh

  - fix: hide "Enable tree table" and "Expand all rows by default" for non-tree collections ([#8566](https://github.com/nocobase/nocobase/pull/8566)) by @katherinehhh

- **[utils]** Fix security issue of `formula.js` evaluator engine ([#8416](https://github.com/nocobase/nocobase/pull/8416)) by @mytharcher

- **[AI employees]**
  - Fixes an issue where citation links from AI web searches were not displayed in the chatbox ([#8651](https://github.com/nocobase/nocobase/pull/8651)) by @cgyrock

  - fix openai API parameters error ([#8633](https://github.com/nocobase/nocobase/pull/8633)) by @cgyrock

- **[Template print]** fix fields with the same key lead to rendering errors by @jiannx

- **[Workflow: Approval]**
  - Fix the issue where error thrown when approving record deleted by @mytharcher

  - Fix the issue where approval data not showing in record detail popup if workflow mode is set to "Before save" by @mytharcher

