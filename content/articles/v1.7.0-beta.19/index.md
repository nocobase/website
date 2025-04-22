### 🎉 New Features

- **[client]** support variables on the left side of linkage rule conditions ([#6609](https://github.com/nocobase/nocobase/pull/6609)) by @katherinehhh

- **[Workflow: date calculation node]** Add `changeTimezone` function to change timezone value for formatting by @mytharcher

### 🚀 Improvements

- **[client]**
  - support selected table records in custom request ([#6647](https://github.com/nocobase/nocobase/pull/6647)) by @katherinehhh

  - Add delay API for scenarios which open without delay ([#6681](https://github.com/nocobase/nocobase/pull/6681)) by @mytharcher

### 🐛 Bug Fixes

- **[database]** Fixed ci build error ([#6687](https://github.com/nocobase/nocobase/pull/6687)) by @aaaaaajie

- **[client]**
  - Fix error thrown when mouse hover on referenced template block in approval node configuration ([#6691](https://github.com/nocobase/nocobase/pull/6691)) by @mytharcher

  - field descriptions display issue in workflow ([#6680](https://github.com/nocobase/nocobase/pull/6680)) by @katherinehhh

  - Fix locale for upload component ([#6682](https://github.com/nocobase/nocobase/pull/6682)) by @mytharcher

  - custom association field not displaying field component  settings ([#6692](https://github.com/nocobase/nocobase/pull/6692)) by @katherinehhh

  - linkage rules compatibility with legacy data ([#6686](https://github.com/nocobase/nocobase/pull/6686)) by @katherinehhh

  - lazy load missing ui component will cause render error ([#6683](https://github.com/nocobase/nocobase/pull/6683)) by @gchust

  - Add native Password component to HoC Input ([#6679](https://github.com/nocobase/nocobase/pull/6679)) by @mytharcher

- **[Workflow: Manual node]** Fix manual task status constant ([#6676](https://github.com/nocobase/nocobase/pull/6676)) by @mytharcher

- **[Action: Import records]** fixed an error importing xlsx time field ([#6672](https://github.com/nocobase/nocobase/pull/6672)) by @aaaaaajie

- **[Workflow: Custom action event]** Fix test cases by @mytharcher

- **[Backup manager]** timeout error occurs when trying to restore an unecrypted backup with a password by @gchust

