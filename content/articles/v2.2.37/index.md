### 🐛 Bug Fixes

- **[Collection: SQL]** Fixed the SQL collection preview crashing when a query returns JSON or JSONB objects and arrays ([#11265](https://github.com/nocobase/nocobase/pull/11265)) by @hongboji

- **[Record history]** Fixed record history blocks still requesting history data after form submit when the block is hidden or the current role has no permission to view it by @hongboji

- **[Data source: External Oracle]** Fixed Oracle external data sources failing to create records when a table primary key is defined as an IDENTITY column, because the primary key and auto-increment attributes were not detected during table sync by @hongboji

- **[Feishu / Lark]** Fix Feishu message templates saving without effect: message fields were bound outside the template column and silently dropped by @chenzhizdt

