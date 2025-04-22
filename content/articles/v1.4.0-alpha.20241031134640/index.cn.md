### 🎉 新特性

- **[企业微信]** 新增企业微信通知渠道 by @chenzhizdt

### 🚀 优化

- **[client]** 字段标题清空时恢复为字段标题默认值 ([#5549](https://github.com/nocobase/nocobase/pull/5549)) by @katherinehhh

- **[通知管理]**
  - 增加 UserSelect 和 UserAddition 组件，方便在开发通知渠道的时候使用 ([#5553](https://github.com/nocobase/nocobase/pull/5553)) by @2013xile

  - 增加通知插件的渠道类型注册中心接口 ([#5531](https://github.com/nocobase/nocobase/pull/5531)) by @mytharcher

  - 调整通知插件渠道类型注册中心的接口名称 ([#5532](https://github.com/nocobase/nocobase/pull/5532)) by @mytharcher

  - 增加通知插件获取所有已注册通知类型的接口 ([#5529](https://github.com/nocobase/nocobase/pull/5529)) by @mytharcher

- **[通知：站内信]** 优化站内信界面并增加了一些日志 ([#5550](https://github.com/nocobase/nocobase/pull/5550)) by @sheldon66

### 🐛 修复

- **[database]**
  - 修复 collection 设置 filter target key 不正确的问题 ([#5558](https://github.com/nocobase/nocobase/pull/5558)) by @chareice

  - 修复联合主键中 sequelize primaryKeyField 属性读取错误的问题 ([#5556](https://github.com/nocobase/nocobase/pull/5556)) by @chareice

- **[client]**
  - 修复表格区块中的骨架屏组件不消失的问题 ([#5548](https://github.com/nocobase/nocobase/pull/5548)) by @zhangzhonghe

  - 修复子表格一次删除了多条数据，超长文本省略设置新添数据不生效等问题 ([#5523](https://github.com/nocobase/nocobase/pull/5523)) by @katherinehhh

- **[数据源管理]** 修复无法移除失败状态的数据源的问题 ([#5554](https://github.com/nocobase/nocobase/pull/5554)) by @chareice

- **[通知：电子邮件]**
  - 修复基于用户 ID 发送 email 通知的查询 ([#5533](https://github.com/nocobase/nocobase/pull/5533)) by @mytharcher

  - 修复基于用户 ID 发送邮寄通知时缺少标题的问题 ([#5534](https://github.com/nocobase/nocobase/pull/5534)) by @mytharcher

  - 修复 Email 通知渠道动态表单联动规则路径问题 ([#5527](https://github.com/nocobase/nocobase/pull/5527)) by @mytharcher

- **[数据表字段：多对多 (数组)]** 修复多对多（数组）字段的选择组件只有一个选项的问题 ([#5544](https://github.com/nocobase/nocobase/pull/5544)) by @2013xile

- **[通知管理]** 修复通知渠道类型异常时的页面崩溃问题 ([#5528](https://github.com/nocobase/nocobase/pull/5528)) by @mytharcher

- **[工作流：SQL 节点]** 修复sse导致“waitForLoadState(‘networkidle’)”超时 ([#5524](https://github.com/nocobase/nocobase/pull/5524)) by @hongboji

- **[字段组件：掩码]** 修复只读状态掩码无法点击显示原文的问题 by @gchust

- **[工作流：自定义操作事件]** 修复sse导致“waitForLoadState(‘networkidle’)”超时 by @hongboji

- **[企业微信]** 修复从企业微信工作台进入应用响应 404 not found 的问题 by @chenzhizdt

