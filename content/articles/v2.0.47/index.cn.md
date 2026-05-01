### 🎉 新特性

- **[AI 员工]** LLM 接入服务新增对 Xiaomi MIMO 平台的支持 ([#9315](https://github.com/nocobase/nocobase/pull/9315)) by @cgyrock

### 🚀 优化

- **[flow-engine]** 优化 v2 页面区块拖拽布局的交互表现 ([#9264](https://github.com/nocobase/nocobase/pull/9264)) by @zhangzhonghe

- **[AI 员工]** AI 员工分类调整 ([#9274](https://github.com/nocobase/nocobase/pull/9274)) by @cgyrock

- **[工作流：审批]** 将关系字段从数据库加载的显示模式标记为过时功能，提醒用户迁移 by @mytharcher

### 🐛 修复

- **[database]** 修复 SQL Server 外部数据源日期时间字段筛选可能失败的问题 ([#9272](https://github.com/nocobase/nocobase/pull/9272)) by @2013xile

- **[client]**
  - 修复 v2 表单 Data scope 变量依赖字段无值时未传递 null 的问题。 ([#9287](https://github.com/nocobase/nocobase/pull/9287)) by @jiannx

  - JS column 在行数据变化时重新执行渲染流程 ([#9282](https://github.com/nocobase/nocobase/pull/9282)) by @jiannx

  - 修复关系字段弹窗选择页面中筛选表单字段会消失的问题 ([#9211](https://github.com/nocobase/nocobase/pull/9211)) by @zhangzhonghe

  - 修复 v2 表格区块筛选或刷新数据后，JS 字段单元格偶现空白的问题。 ([#9285](https://github.com/nocobase/nocobase/pull/9285)) by @jiannx

- **[flow-engine]** 修复表单相关变量中可以选择系统隐藏字段的问题。 ([#9302](https://github.com/nocobase/nocobase/pull/9302)) by @gchust

- **[操作：导入记录]** 修复导入出错时时失败行索引错误的问题 ([#9277](https://github.com/nocobase/nocobase/pull/9277)) by @mytharcher

- **[区块：甘特图]** 新增甘特图区块“启用拖动重新排期”配置。 ([#9301](https://github.com/nocobase/nocobase/pull/9301)) by @jiannx

- **[AI 员工]** 修复 AI 员工接入 deepseek v4 报错问题 ([#9275](https://github.com/nocobase/nocobase/pull/9275)) by @cgyrock

- **[操作：导出记录 Pro]** 修复自动判断同步异步的模式未生效的问题 by @mytharcher

- **[工作流：审批]**
  - 修复类型错误 by @mytharcher

  - 修复审批 `execute` 的触发时序，确保在审批事务提交后同步 `latestExecutionId` by @mytharcher

