### 🚀 Improvements

- **[client-v2]** Reduced the spacing between fields in horizontal mobile details blocks. ([#11644](https://github.com/nocobase/nocobase/pull/11644))

### 🐛 Bug Fixes

- **[Error handler]** Duplicate and not-null field messages now include the collection title when available, including when saving related records. ([#11638](https://github.com/nocobase/nocobase/pull/11638))

- **[Notification: In-app message]** Fixed an issue where opening a channel in the mobile inbox could show messages from another channel. ([#11662](https://github.com/nocobase/nocobase/pull/11662))

- **[Migration manager]** PostgreSQL migrations now exclude unrelated sequences, so selected tables can be restored even when the target lacks schemas used only by other tables.

