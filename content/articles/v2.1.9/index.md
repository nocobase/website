### 🚀 Improvements

- **[client-v2]** Add override value option for field value settings. ([#9578](https://github.com/nocobase/nocobase/pull/9578)) by @gchust

### 🐛 Bug Fixes

- **[client-v2]**
  - Fixed custom action workflow trigger buttons sending custom context JSON under an extra `values` property or as a serialized string. ([#9815](https://github.com/nocobase/nocobase/pull/9815)) by @mytharcher

  - Fixed an issue where configuring an association field value as a fixed value or default value would not take effect. ([#9820](https://github.com/nocobase/nocobase/pull/9820)) by @gchust

- **[auth]** Encrypted password data is no longer included in sign-in status responses ([#9836](https://github.com/nocobase/nocobase/pull/9836)) by @2013xile

- **[app]** Ignore unrelated currentScript when inferring plugin public path ([#9839](https://github.com/nocobase/nocobase/pull/9839)) by @chenos

- **[UI templates]** Fixed incorrect default context for ctx.openview. ([#9811](https://github.com/nocobase/nocobase/pull/9811)) by @gchust

