### 🚀 Improvements

- **[Notification: In-app message]** Remove SQL logs output via `console.log` ([#7368](https://github.com/nocobase/nocobase/pull/7368)) by @2013xile

### 🐛 Bug Fixes

- **[server]** Some requests lack `ctx.action`, causing errors in the audit log middleware ([#7369](https://github.com/nocobase/nocobase/pull/7369)) by @2013xile

- **[Collection field: Formula]** Fix the issue where formula input could not pass validation due to variable type ([#7373](https://github.com/nocobase/nocobase/pull/7373)) by @mytharcher

- **[Backup manager]** large file backups could show “successful” before actually finishing by @gchust

