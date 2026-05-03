### 🎉 新特性

- **[cli]** 增加发布相关命令 ([#9308](https://github.com/nocobase/nocobase/pull/9308)) by @Andrew1989Y

- **[undefined]** 新增印尼语和越南语文档。 ([#9303](https://github.com/nocobase/nocobase/pull/9303)) by @Molunerfinn

- **[server]** AI 员工可以通过 Bash 命令检索内置文档 ([#9269](https://github.com/nocobase/nocobase/pull/9269)) by @2013xile

- **[AI 员工]** LLM 接入服务新增对 Xiaomi MIMO 平台的支持 ([#9315](https://github.com/nocobase/nocobase/pull/9315)) by @cgyrock

- **[迁移管理]** 新增 Nocobase CLI 专用 APIs by @Andrew1989Y

- **[备份管理器]** 新增 Nocobase CLI 专用 Apis by @Andrew1989Y

### 🚀 优化

- **[flow-engine]** 优化 v2 页面区块拖拽布局的交互表现 ([#9264](https://github.com/nocobase/nocobase/pull/9264)) by @zhangzhonghe

- **[undefined]**
  - 西班牙语、葡萄牙语、俄语、德语文档对齐英文文档。 ([#9299](https://github.com/nocobase/nocobase/pull/9299)) by @Molunerfinn

  - 同步法语文档与中文文档。 ([#9291](https://github.com/nocobase/nocobase/pull/9291)) by @Molunerfinn

- **[AI 员工]**
  - 优化 Nathan 的 RunJS 编辑工具，并减少长 AI 对话中的卡顿 ([#9311](https://github.com/nocobase/nocobase/pull/9311)) by @2013xile

  - AI 员工分类调整 ([#9274](https://github.com/nocobase/nocobase/pull/9274)) by @cgyrock

- **[区块：看板]**
  - 调整看板默认列宽。 ([#9306](https://github.com/nocobase/nocobase/pull/9306)) by @jiannx

  - 优化日历和看板区块的创建配置。 ([#9294](https://github.com/nocobase/nocobase/pull/9294)) by @jiannx

- **[工作流：审批]** 将关系字段从数据库加载的显示模式标记为过时功能，提醒用户迁移 by @mytharcher

### 🐛 修复

- **[undefined]**
  - 修复依赖与构建校验流水线，避免独立 pro 插件 checkout 失败时被静默跳过而导致构建覆盖缺失。 ([#9324](https://github.com/nocobase/nocobase/pull/9324)) by @Molunerfinn

  - 修复翻译膨胀文件，对齐多语言文档结构。 ([#9305](https://github.com/nocobase/nocobase/pull/9305)) by @Molunerfinn

- **[client-v2]** 修复触发工作流按钮无法配置绑定工作流的问题 ([#9314](https://github.com/nocobase/nocobase/pull/9314)) by @mytharcher

- **[flow-engine]** 修复表单相关变量中可以选择系统隐藏字段的问题。 ([#9302](https://github.com/nocobase/nocobase/pull/9302)) by @gchust

- **[ai]** 修复 AI 员工注册时缺少 category 字段设置的问题 ([#9300](https://github.com/nocobase/nocobase/pull/9300)) by @cgyrock

- **[client]**
  - 修复 v2 表格区块筛选或刷新数据后，JS 字段单元格偶现空白的问题。 ([#9285](https://github.com/nocobase/nocobase/pull/9285)) by @jiannx

  - 修复关系字段弹窗选择页面中筛选表单字段会消失的问题 ([#9211](https://github.com/nocobase/nocobase/pull/9211)) by @zhangzhonghe

  - 修复 v2 表单 Data scope 变量依赖字段无值时未传递 null 的问题。 ([#9287](https://github.com/nocobase/nocobase/pull/9287)) by @jiannx

  - JS column 在行数据变化时重新执行渲染流程 ([#9282](https://github.com/nocobase/nocobase/pull/9282)) by @jiannx

- **[database]** 修复 SQL Server 外部数据源日期时间字段筛选可能失败的问题 ([#9272](https://github.com/nocobase/nocobase/pull/9272)) by @2013xile

- **[AI 员工]**
  - 修复操作按钮 AI 员工列表显示了开发员工问题 ([#9320](https://github.com/nocobase/nocobase/pull/9320)) by @cgyrock

  - 修复 AI 员工接入 deepseek v4 报错问题 ([#9275](https://github.com/nocobase/nocobase/pull/9275)) by @cgyrock

- **[区块：甘特图]** 新增甘特图区块“启用拖动重新排期”配置。 ([#9301](https://github.com/nocobase/nocobase/pull/9301)) by @jiannx

- **[区块：树]** 修复筛选区块节点显示异常 ([#9260](https://github.com/nocobase/nocobase/pull/9260)) by @jiannx

- **[操作：导入记录]** 修复导入出错时时失败行索引错误的问题 ([#9277](https://github.com/nocobase/nocobase/pull/9277)) by @mytharcher

- **[区块：看板]** 修复字段配置浮层重复显示 ([#9271](https://github.com/nocobase/nocobase/pull/9271)) by @jiannx

- **[操作：导出记录 Pro]** 修复自动判断同步异步的模式未生效的问题 by @mytharcher

- **[迁移管理]** 修复 migration:create 从异步任务记录中返回 taskId 的问题。 by @Andrew1989Y

- **[工作流：审批]**
  - 修复审批 `execute` 的触发时序，确保在审批事务提交后同步 `latestExecutionId` by @mytharcher

  - 修复类型错误 by @mytharcher

