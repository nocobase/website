### 🐛 Bug Fixes

- **[Authentication]** Fixed authenticator options being rendered before their auth type plugin finished loading, which made LDAP sign-in fail with "must either provide a buffer via raw or some value" after an application reload ([#11182](https://github.com/nocobase/nocobase/pull/11182)) by @hongboji

