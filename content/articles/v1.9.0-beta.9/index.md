### 🎉 New Features

- **[client]**
  - Table blocks support adding a 'Column settings' button to configure column order and visibility ([#7204](https://github.com/nocobase/nocobase/pull/7204)) by @kerwin612

  - Support field validation rule ([#7297](https://github.com/nocobase/nocobase/pull/7297)) by @aaaaaajie

- **[Data source: Main]**
  - support reading tables from main data source ([#7238](https://github.com/nocobase/nocobase/pull/7238)) by @aaaaaajie

  - Support displaying plugin-defined tables in the main data source. ([#7187](https://github.com/nocobase/nocobase/pull/7187)) by @aaaaaajie

  - support reading tables from main data source ([#7238](https://github.com/nocobase/nocobase/pull/7238)) by @aaaaaajie

### 🚀 Improvements

- **[client]** Support to rotate image when previewing ([#7523](https://github.com/nocobase/nocobase/pull/7523)) by @mytharcher

- **[snowflake-id]** Change the IDs of system tables with auto-increment primary keys but no unique identifiers to 53-bit Snowflake-like IDs ([#7465](https://github.com/nocobase/nocobase/pull/7465)) by @2013xile

- **[Workflow]** Split the dispatching-related logic into a standalone dispatcher ([#7535](https://github.com/nocobase/nocobase/pull/7535)) by @mytharcher

- **[RabbitMQ queue adapter]** improve RabbitMQ connection handling and message processing logic by @sdp-ncd

- **[Email manager]**
  - supports batch synchronization by @jiannx

  - rich editor supports image resizing by @jiannx

### 🐛 Bug Fixes

- **[client]**
  - Fix an issue where the "Column settings" button loads columns from the table inside the modal dialog ([#7385](https://github.com/nocobase/nocobase/pull/7385)) by @kerwin612

  - Fix the issue where sidebar submenus cannot highlight correctly ([#7520](https://github.com/nocobase/nocobase/pull/7520)) by @duannyuuu

- **[Workflow]**
  - Fix the issue of duplicated executing due to improper queue handling ([#7533](https://github.com/nocobase/nocobase/pull/7533)) by @mytharcher

  - Fix the issue where the workflow list condition is incorrect when loading associated field context in the bound workflow configuration ([#7516](https://github.com/nocobase/nocobase/pull/7516)) by @mytharcher

  - Fix the issue where scheduled tasks based on date fields do not trigger after start ([#7524](https://github.com/nocobase/nocobase/pull/7524)) by @mytharcher

- **[Workflow: Loop node]** Fixed the issue where the process incorrectly advanced to the next item even when loop node conditions were not satisfied ([#7521](https://github.com/nocobase/nocobase/pull/7521)) by @mytharcher

- **[Email manager]**
  - Garbage email subject by @jiannx

  - garbage subject by @jiannx

  - rich editor support soft line breaks by @jiannx

  - Supports the same email for multiple people by @jiannx

  - email message list optimal performance by @jiannx

  - after selecting rows, set "Read" and "unread" by @jiannx

  - add rawId field for performance optimization by @jiannx

  - ref attribute in html causes rendering exception by @jiannx

  - submail content cannot be filtered by @jiannx

  - support resync by @jiannx

  - Manually distinguish between forwarding and replying by @jiannx

