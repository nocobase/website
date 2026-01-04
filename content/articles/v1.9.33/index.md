### 🎉 New Features

- **[client]** Support plugin-defined maintenance components when the app enters maintenance status ([#8252](https://github.com/nocobase/nocobase/pull/8252)) by @cgyrock

- **[File manager]** Support file renaming method configuration ([#8231](https://github.com/nocobase/nocobase/pull/8231)) by @JAVA-LW

- **[File storage: S3(Pro)]** Add rename mode option for S3 Pro storage by @mytharcher

### 🚀 Improvements

- **[Migration manager]** Improved migration checks, SQL download support, log formatting, and execution process visibility by @cgyrock

### 🐛 Bug Fixes

- **[database]**
  - Include through scope when querying m2m relationships ([#8277](https://github.com/nocobase/nocobase/pull/8277)) by @2013xile

  - Fix object `appends` in `OptionsParser`, and increase `arrayLimit` for parameters ([#8328](https://github.com/nocobase/nocobase/pull/8328)) by @mytharcher

- **[client]** Fix the issue where error thrown in in filter form block settings of m2m field ([#8282](https://github.com/nocobase/nocobase/pull/8282)) by @mytharcher

- **[Async task manager]** Fix language of canceling background task ([#8245](https://github.com/nocobase/nocobase/pull/8245)) by @mytharcher

- **[File manager]** Fix the issue where error thrown when upload file larger than 5MB to AWS S3 ([#8275](https://github.com/nocobase/nocobase/pull/8275)) by @mytharcher

- **[Workflow]** Fixed database events becoming invalid after refreshing the external data source ([#8207](https://github.com/nocobase/nocobase/pull/8207)) by @cgyrock

- **[Collection: Tree]** Update paths after bulk creating tree collection nodes ([#8267](https://github.com/nocobase/nocobase/pull/8267)) by @2013xile

- **[Data source: External PostgreSQL]** Fixed database events becoming invalid after refreshing the external data source by @cgyrock

- **[Data source: External Oracle]** Fixed database events becoming invalid after refreshing the external data source by @cgyrock

