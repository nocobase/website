### 🚀 优化

- **[lock-manager]** 新增本地锁租约续期能力，并确保通过 tryAcquire 获取的锁在复用和异常场景下安全释放 ([#10368](https://github.com/nocobase/nocobase/pull/10368)) by @jiannx

- **[Redis 分布式锁适配器]** 新增 Redis 锁租约续期能力，并确保可复用锁句柄在竞争和异常场景下安全释放 by @jiannx

### 🐛 修复

- **[文件管理器]** 修复单值字段选择已有文件时需要额外提交的问题 ([#10372](https://github.com/nocobase/nocobase/pull/10372)) by @zhangzhonghe

- **[数据表字段：Markdown(Vditor)]** 修复 v2 详情区块中 Markdown HTML 预览在暗黑主题下显示异常的问题。 ([#10370](https://github.com/nocobase/nocobase/pull/10370)) by @katherinehhh

- **[数据表字段：加密]** 修复集合包含加密字段时批量导入报错 `model.changed is not a function` 的问题 by @cgyrock

- **[工作流：Webhook 触发器]** 修复未填写请求头时手动执行 Webhook 工作流返回 400 错误的问题 by @mytharcher

