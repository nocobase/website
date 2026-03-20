### 🚀 优化

- **[工作流]** 为执行记录列表增加筛选功能 ([#8914](https://github.com/nocobase/nocobase/pull/8914)) by @mytharcher

- **[工作流：审批]** 当触发器中未配置数据表时，禁止配置审批人的界面 by @mytharcher

### 🐛 修复

- **[server]** 修复工作进程发送应用生命周期事件导致服务实例停止的问题 ([#8906](https://github.com/nocobase/nocobase/pull/8906)) by @mytharcher

- **[client]** 修复非管理员无法清除关联字段值 ([#8904](https://github.com/nocobase/nocobase/pull/8904)) by @jiannx

- **[resourcer]** 避免 `filterByTk` 参数数组超过 100 个时被自动转换成对象 ([#8908](https://github.com/nocobase/nocobase/pull/8908)) by @2013xile

- **[操作：导入记录 Pro]**
  - 修复同步模式下导入报错的问题 by @mytharcher

  - 修复由于重复读取文件流导致超过约 30 列的文件导入报错的问题 by @mytharcher

- **[工作流：审批]** 修复加签时的并发问题 by @mytharcher

- **[迁移管理]** 修复上传迁移时，目标环境不存在新建表而抛错导致中断迁移的问题 by @Andrew1989Y

