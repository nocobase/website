### 🚀 Improvements

- **[database]**
  - Add trim option for text field ([#6603](https://github.com/nocobase/nocobase/pull/6603)) by @mytharcher

  - Add trim option for string field ([#6565](https://github.com/nocobase/nocobase/pull/6565)) by @mytharcher

- **[File manager]** Add trim option for text fields of storages collection ([#6604](https://github.com/nocobase/nocobase/pull/6604)) by @mytharcher

- **[Workflow]** Improve code ([#6589](https://github.com/nocobase/nocobase/pull/6589)) by @mytharcher

- **[Workflow: Approval]** Support to use block template for approval process form by @mytharcher

### 🐛 Bug Fixes

- **[database]** Avoid "datetimeNoTz" field changes when value not changed in updating record ([#6588](https://github.com/nocobase/nocobase/pull/6588)) by @mytharcher

- **[client]**
  - association field (select) displaying N/A when exposing related collection fields ([#6582](https://github.com/nocobase/nocobase/pull/6582)) by @katherinehhh

  - Fix `disabled` property not works when `SchemaInitializerItem` has `items` ([#6597](https://github.com/nocobase/nocobase/pull/6597)) by @mytharcher

  - cascade  issue: 'The value of xxx cannot be in array format' when deleting and re-selecting ([#6585](https://github.com/nocobase/nocobase/pull/6585)) by @katherinehhh

- **[Collection field: Many to many (array)]** Issue of filtering by fields in an association collection with a many to many (array) field ([#6596](https://github.com/nocobase/nocobase/pull/6596)) by @2013xile

- **[Public forms]** View permissions include list and get ([#6607](https://github.com/nocobase/nocobase/pull/6607)) by @chenos

- **[Authentication]** token assignment in `AuthProvider` ([#6593](https://github.com/nocobase/nocobase/pull/6593)) by @2013xile

- **[Workflow]** Fix sync option display incorrectly ([#6595](https://github.com/nocobase/nocobase/pull/6595)) by @mytharcher

- **[Block: Map]** map management validation should not pass with space input ([#6575](https://github.com/nocobase/nocobase/pull/6575)) by @katherinehhh

- **[Workflow: Approval]**
  - Fix client variables to use in approval form by @mytharcher

  - Fix branch mode when `endOnReject` configured as `true` by @mytharcher

