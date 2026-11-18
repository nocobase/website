### 🐛 Bug Fixes

- **[client-v2]** Fixed the sidebar collapse button covering links in the app switcher. ([#11546](https://github.com/nocobase/nocobase/pull/11546))

- **[Workflow: Loop node]** Fixed scope variables being unavailable when configuring conditions on top-level loops. ([#11583](https://github.com/nocobase/nocobase/pull/11583))

- **[Block: template (deprecated)]** Saving a legacy block template layout now requires permission to configure the interface. ([#11538](https://github.com/nocobase/nocobase/pull/11538))

- **[Backup manager]** PostgreSQL backups created with a newer pg_dump major version are now rejected before restoration when the installed pg_restore is older. ([#11585](https://github.com/nocobase/nocobase/pull/11585))

- **[Workflow]** Fixed a crash when configuring nodes such as Webhook responses inside loops in the V1 workflow editor. ([#11581](https://github.com/nocobase/nocobase/pull/11581))

- **[Multi-space]** Fixed images and file previews returning 404 when opened from records in the selected space.

