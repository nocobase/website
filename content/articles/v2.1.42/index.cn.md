### 🚀 优化

- **[undefined]**
  - 新增 LDAP 和钉钉用户数据同步文档，包括权限配置、事件接收模式、同步字段、部门负责人和故障排查。 ([#10377](https://github.com/nocobase/nocobase/pull/10377)) by @chenzhizdt
参考文档：[钉钉同步](https://github.com/chenzhizdt/nocobase/blob/docs/ldap-dingtalk/docs/docs/cn/users-permissions/sync/sources/dingtalk.md), [LDAP 同步](https://github.com/chenzhizdt/nocobase/blob/docs/ldap-dingtalk/docs/docs/cn/users-permissions/sync/sources/ldap.md)
  - 完善 LDAP 和钉钉用户同步文档，并补充所有支持语言的翻译。 ([#10382](https://github.com/nocobase/nocobase/pull/10382)) by @chenzhizdt
参考文档：[钉钉](docs/docs/cn/users-permissions/sync/sources/dingtalk.md) / [LDAP](docs/docs/cn/users-permissions/sync/sources/ldap.md)
### 🐛 修复

- **[工作流：JavaScript 节点]** 修复 JavaScript 工作流任务恢复过程重复投递执行已结束或已超时任务的问题。 ([#10366](https://github.com/nocobase/nocobase/pull/10366)) by @mytharcher

- **[操作：导出记录 Pro]** 修复启用导出 Pro 插件后使用复杂筛选条件时导出报错的问题 by @zhangzhonghe

- **[操作：导入记录 Pro]** 修复异步导入不遵守字段导入权限的问题 by @mytharcher

- **[应用监管器]** 修复创建受监管应用时的 Kingbase 数据库连接问题 by @2013xile

