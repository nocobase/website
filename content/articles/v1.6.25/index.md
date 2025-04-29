### 🎉 New Features

- **[undefined]** add publish ci for license kit ([#6786](https://github.com/nocobase/nocobase/pull/6786)) by @jiannx

- **[Data visualization: ECharts]** Add "Y-Axis inverse" setting for bar charts by @2013xile

### 🚀 Improvements

- **[utils]** Increase the height of the filter button field list and sort/categorize the fields ([#6779](https://github.com/nocobase/nocobase/pull/6779)) by @zhangzhonghe

- **[client]** optimize subtable add button style and align paginator on the  same row ([#6790](https://github.com/nocobase/nocobase/pull/6790)) by @katherinehhh

- **[File manager]** Add OSS timeout option default to 10min ([#6795](https://github.com/nocobase/nocobase/pull/6795)) by @mytharcher

- **[Password policy]** Change default password expiration to never expire by @2013xile

- **[WeCom]** Prioritize corporate email over personal email when updating the user's email by @2013xile

### 🐛 Bug Fixes

- **[client]**
  - In the collapse block, clicking the clear button in the relationship field search box should not delete the data range ([#6782](https://github.com/nocobase/nocobase/pull/6782)) by @zhangzhonghe

  - association field not submitting data when displaying field from related collection ([#6798](https://github.com/nocobase/nocobase/pull/6798)) by @katherinehhh

  - Prohibit moving menus before or after page tabs ([#6777](https://github.com/nocobase/nocobase/pull/6777)) by @zhangzhonghe

  - Table block displays duplicate data when filtering ([#6792](https://github.com/nocobase/nocobase/pull/6792)) by @zhangzhonghe

  - In the filter form, switching the field operator and then refreshing the page causes an error ([#6781](https://github.com/nocobase/nocobase/pull/6781)) by @zhangzhonghe

- **[database]**
  - Avoid error thrown when data type is not string ([#6797](https://github.com/nocobase/nocobase/pull/6797)) by @mytharcher

  - add  unavailableActions to sql collection and view collection ([#6765](https://github.com/nocobase/nocobase/pull/6765)) by @katherinehhh

- **[create-nocobase-app]** Temporarily fix mariadb issue by downgrading to 2.5.6 ([#6762](https://github.com/nocobase/nocobase/pull/6762)) by @chenos

- **[Authentication]** Disallow changing authenticator name ([#6808](https://github.com/nocobase/nocobase/pull/6808)) by @2013xile

- **[Template print]** Fix: Correct permission validation logic to prevent unauthorized actions. by @sheldon66

- **[File storage: S3(Pro)]** access url expiration invalid by @jiannx

- **[Block: Tree]** After connecting through a foreign key, clicking to trigger filtering results in empty filter conditions by @zhangzhonghe

