### 🐛 Bug Fixes

- **[client-v2]** Fixed hasMany record deletion when the target collection uses multiple record identifier fields, including bulk deletion in v1 and v2. ([#11423](https://github.com/nocobase/nocobase/pull/11423))

- **[Data source: Main]** Fixed field synchronization for tables loaded from the main database and preserved existing field metadata when imported physical table names include the configured prefix ([#11327](https://github.com/nocobase/nocobase/pull/11327))

- **[Migration manager]** Fixed PostgreSQL migrations losing lines that begin with `--` in multiline fields, changing line endings, or failing to restore the exported data.

- **[Data source: External Oracle]** Oracle Thin now lists tables from the configured schema, flags previously selected tables that are unavailable, and reports an error when a newly selected table is unavailable.

