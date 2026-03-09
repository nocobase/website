### 🚀 优化

- **[Redis 分布式锁适配器]** 基于主仓库 LockManager 接口变更重构 by @mytharcher

- **[备份管理器]** 为定时备份增加分布式锁，避免重复备份 by @mytharcher

### 🐛 修复

- **[client]**
  - v2 区块现在只会显示当前数据源支持的操作 ([#8803](https://github.com/nocobase/nocobase/pull/8803)) by @zhangzhonghe

  - 修复 v2 子页面返回按钮样式异常的问题 ([#8810](https://github.com/nocobase/nocobase/pull/8810)) by @zhangzhonghe

- **[lock-manager]** 修复锁管理器的竞态问题 ([#8734](https://github.com/nocobase/nocobase/pull/8734)) by @mytharcher

- **[server]** 修复非数据库类数据源表格查询报错问题 ([#8776](https://github.com/nocobase/nocobase/pull/8776)) by @cgyrock

- **[权限控制]** 修复 Restful API 数据源数据修改操作报错问题 ([#8788](https://github.com/nocobase/nocobase/pull/8788)) by @cgyrock

- **[操作：导出记录]** 修复多对多数组字段导出后空白的问题 ([#8787](https://github.com/nocobase/nocobase/pull/8787)) by @cgyrock

