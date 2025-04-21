### 🐛 Bug Fixes

- **[client]**
  - Fix  issue with external data source fields not display in table block ([#5825](https://github.com/nocobase/nocobase/pull/5825)) by @katherinehhh

  - Fix display issue for inherited fields in form configuration ([#5822](https://github.com/nocobase/nocobase/pull/5822)) by @katherinehhh

  - Fix inherited fields not appear in field list and cannot override ([#5800](https://github.com/nocobase/nocobase/pull/5800)) by @katherinehhh

- **[Data visualization]** Fix the issue when formatting timezone-aware date fields in MySQL ([#5829](https://github.com/nocobase/nocobase/pull/5829)) by @2013xile

- **[Workflow]**
  - Fix transaction across data sources which cause collection event error ([#5818](https://github.com/nocobase/nocobase/pull/5818)) by @mytharcher

  - Fix date type missed in date field based schedule configuration ([#5816](https://github.com/nocobase/nocobase/pull/5816)) by @mytharcher

- **[Collection field: Many to many (array)]** Fix the issue where updating m2m array fields in single relation collection does not take effect ([#5820](https://github.com/nocobase/nocobase/pull/5820)) by @2013xile

- **[Calendar]**
  - Fix  error when clicking on a blank date in the calendar ([#5803](https://github.com/nocobase/nocobase/pull/5803)) by @katherinehhh

  - Fix the issue where closing a popup opened through the 'Calendar Block' causes all popups to close ([#5793](https://github.com/nocobase/nocobase/pull/5793)) by @zhangzhonghe

- **[Public forms]** Fix incorrect QC code scan path in sub-application public form ([#5799](https://github.com/nocobase/nocobase/pull/5799)) by @katherinehhh

