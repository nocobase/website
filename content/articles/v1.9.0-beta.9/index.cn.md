### 🎉 新特性

- **[client]**
  - 表格区块支持添加“列设置”按钮，可以配置表格列的顺序和显隐 ([#7204](https://github.com/nocobase/nocobase/pull/7204)) by @kerwin612

  - 支持字段验证规则 ([#7297](https://github.com/nocobase/nocobase/pull/7297)) by @aaaaaajie

- **[数据源：主数据库]**
  - 主数据源支持读表功能 ([#7238](https://github.com/nocobase/nocobase/pull/7238)) by @aaaaaajie

  - 支持主数据源显示插件定义的表。 ([#7187](https://github.com/nocobase/nocobase/pull/7187)) by @aaaaaajie

  - 主数据源支持读表功能 ([#7238](https://github.com/nocobase/nocobase/pull/7238)) by @aaaaaajie

### 🚀 优化

- **[client]** 支持预览图片时旋转图片 ([#7523](https://github.com/nocobase/nocobase/pull/7523)) by @mytharcher

- **[snowflake-id]** 将主键为自增 ID 且不具备唯一标识的系统表的 ID 修改为 53 位的类雪花算法 ID ([#7465](https://github.com/nocobase/nocobase/pull/7465)) by @2013xile

- **[工作流]** 将调度相关逻辑拆分为独立的调度器 ([#7535](https://github.com/nocobase/nocobase/pull/7535)) by @mytharcher

- **[RabbitMQ 消息队列适配器]** 优化 RabbitMQ 连接处理和消息处理逻辑 by @sdp-ncd

- **[邮件管理]**
  - 支持分批同步 by @jiannx

  - 富文本支持图片大小调整 by @jiannx

### 🐛 修复

- **[client]**
  - 修复“列设置”按钮会加载弹窗中的表格列的问题 ([#7385](https://github.com/nocobase/nocobase/pull/7385)) by @kerwin612

  - 修复左侧菜单栏子菜单不能正确高亮的问题 ([#7520](https://github.com/nocobase/nocobase/pull/7520)) by @duannyuuu

- **[工作流]**
  - 修复由于队列处理不当导致的工作流重复执行问题 ([#7533](https://github.com/nocobase/nocobase/pull/7533)) by @mytharcher

  - 修复绑定工作流配置中加载关系字段上下文的工作流列表条件错误的问题 ([#7516](https://github.com/nocobase/nocobase/pull/7516)) by @mytharcher

  - 修复基于日期字段的定时任务到期后不触发的问题 ([#7524](https://github.com/nocobase/nocobase/pull/7524)) by @mytharcher

- **[工作流：循环节点]** 修复了循环节点条件未满足时仍错误继续到下一项的问题 ([#7521](https://github.com/nocobase/nocobase/pull/7521)) by @mytharcher

- **[邮件管理]**
  - 邮件主题乱码 by @jiannx

  - 主题乱码 by @jiannx

  - 富文本支持软换行 by @jiannx

  - 支持多人相同邮件 by @jiannx

  - 邮件消息表格性能优化 by @jiannx

  - 选择行后，支持设置已读未读 by @jiannx

  - 添加rawId字段，用于性能优化 by @jiannx

  - html中ref属性导致渲染异常 by @jiannx

  - 子邮件内容无法被筛选 by @jiannx

  - 支持重新同步 by @jiannx

  - 手动区分转发和回复 by @jiannx

