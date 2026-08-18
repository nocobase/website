### 🚀 Improvements

- **[undefined]**
  - Added LDAP and DingTalk user data synchronization guides, including permissions, event modes, synchronized fields, department owners, and troubleshooting. ([#10377](https://github.com/nocobase/nocobase/pull/10377)) by @chenzhizdt
Reference: [DingTalk synchronization](https://github.com/chenzhizdt/nocobase/blob/docs/ldap-dingtalk/docs/docs/en/users-permissions/sync/sources/dingtalk.md), [LDAP synchronization](https://github.com/chenzhizdt/nocobase/blob/docs/ldap-dingtalk/docs/docs/en/users-permissions/sync/sources/ldap.md)
  - Improve LDAP and DingTalk user synchronization documentation and add all supported translations. ([#10382](https://github.com/nocobase/nocobase/pull/10382)) by @chenzhizdt
Reference: [DingTalk](docs/docs/en/users-permissions/sync/sources/dingtalk.md) / [LDAP](docs/docs/en/users-permissions/sync/sources/ldap.md)
### 🐛 Bug Fixes

- **[Workflow: JavaScript]** Fixed JavaScript workflow task recovery repeatedly enqueueing jobs whose executions have ended or expired. ([#10366](https://github.com/nocobase/nocobase/pull/10366)) by @mytharcher

- **[Action: Export records Pro]** Fix export errors when using complex filters with the Export Pro plugin by @zhangzhonghe

- **[Action: Import records Pro]** Fixed asynchronous imports not respecting field-level import permissions by @mytharcher

- **[App supervisor]** Fixed Kingbase connections when creating supervised applications by @2013xile

