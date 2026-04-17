### 🎉 新特性

- **[client]** 事件流添加 js 变量 ([#8938](https://github.com/nocobase/nocobase/pull/8938)) by @jiannx

### 🚀 优化

- **[client]** 支持通过 runjs 设置字段样式 ([#8933](https://github.com/nocobase/nocobase/pull/8933)) by @jiannx
- **[flow-engine]** 增强页面搭建相关的 API 的 schema 验证。 ([#8881](https://github.com/nocobase/nocobase/pull/8881)) by @gchust
- **[工作流：操作前事件]** 为触发器和节点增加验证规则 ([#8971](https://github.com/nocobase/nocobase/pull/8971)) by @mytharcher
- **[工作流]** 为每页数量参数增加变量支持 ([#8951](https://github.com/nocobase/nocobase/pull/8951)) by @mytharcher
- **[工作流：Webhook 触发器]** 为创建触发器和节点的 API 增加验证处理 by @mytharcher
- **[工作流：子流程]**

  - 为新增节点 API 增加验证处理 by @mytharcher
  - 为防止工作流遇到异常时卡住增加防御性逻辑 by @mytharcher
- **[工作流：审批]** 为触发器和节点 API 增加验证处理 by @mytharcher

### 🐛 修复

- **[client]** 修复弹窗内树表添加子节点异常 ([#8872](https://github.com/nocobase/nocobase/pull/8872)) by @jiannx
- **[操作：导出记录]** 限制导入和导出配置多层关联字段 ([#8893](https://github.com/nocobase/nocobase/pull/8893)) by @jiannx
- **[数据可视化]** 修复开启空间插件后，root 角色图表数据统计异常 ([#8969](https://github.com/nocobase/nocobase/pull/8969)) by @jiannx
- **[操作：导入记录]** 修复开启空间插件后导入失败 ([#8968](https://github.com/nocobase/nocobase/pull/8968)) by @jiannx
- **[工作流：JavaScript 节点]** 修复代码执行安全问题 ([#8967](https://github.com/nocobase/nocobase/pull/8967)) by @mytharcher
- **[AI 员工]** 调整 AI 对话中工具卡片组件之间的间隙 ([#8965](https://github.com/nocobase/nocobase/pull/8965)) by @cgyrock
- **[前端流引擎]** 移除从 uiSchema 表复制的遗留事件，避免触发调用后报错 ([#8957](https://github.com/nocobase/nocobase/pull/8957)) by @mytharcher
- **[用户认证]** 修复 acl 支持自定义 state 筛选参数 ([#8918](https://github.com/nocobase/nocobase/pull/8918)) by @jiannx
- **[操作：导入记录 Pro]** 限制导入和导出配置多层关联字段 by @jiannx
- **[邮件管理]** 修复使用模板时覆盖了签名 by @jiannx
