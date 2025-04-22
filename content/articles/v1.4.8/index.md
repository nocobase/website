### 🐛 Bug Fixes

- **[client]**
  - Fix data template issue in filter form configured in association field record picker ([#5837](https://github.com/nocobase/nocobase/pull/5837)) by @katherinehhh

  - Fix issue with Markdown string templates not loading data of association data  （External dataSource） ([#5791](https://github.com/nocobase/nocobase/pull/5791)) by @katherinehhh

- **[User data synchronization]** Skip unsupported data types during synchronization instead of throwing an error. ([#5835](https://github.com/nocobase/nocobase/pull/5835)) by @chenzhizdt

- **[Backup manager]**
  - Fixed slow popup of download window for large backup files by @gchust

  - Fixed the issue where restoring a backup sub-application causes all applications to restart by @gchust

