汇总一周产品更新日志，最新发布可以[前往我们的博客查看](https://www.nocobase.com/cn/blog/timeline)。

**NocoBase 目前更新包括的版本更新包括三个分支：`main` ，`next`和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

`main` ：截止目前最稳定的版本，推荐安装此版本。

`next`：包含即将发布的新功能，经过初步测试的版本，可能存在部分已知或未知问题。主要面向测试用户，用于收集反馈和进一步优化功能。适合愿意提前体验新功能并提供反馈的测试用户。

`develop`：开发中的版本，包含最新的功能代码，可能尚未完成或存在较多不稳定因素，主要用于内部开发和快速迭代。适合对产品功能前沿发展感兴趣的技术用户，但可能存在较多问题或不完整功能，不建议在生产环境中使用。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.49](https://www.nocobase.com/cn/blog/v2.0.49)

*发布日期：2026-05-06*

### 🚀 优化

- **[undefined]** 为手动发布工作流添加飞书失败通知 ([#9349](https://github.com/nocobase/nocobase/pull/9349)) by @Molunerfinn

### 🐛 修复

- **[数据源：主数据库]** 防止在集合加载期间 fields 未定义时发生崩溃 ([#9174](https://github.com/nocobase/nocobase/pull/9174)) by @saraTabbane
- **[UI 模板]** 修复弹窗模板列表没有正确加载可用模板的问题。 ([#9332](https://github.com/nocobase/nocobase/pull/9332)) by @gchust
- **[AI 员工]** 修复 AI 员工使用 deepseek v4 模型偶现报错问题 ([#9348](https://github.com/nocobase/nocobase/pull/9348)) by @cgyrock
- **[文件管理器]** 改进了预览文件下载时的错误处理 ([#9103](https://github.com/nocobase/nocobase/pull/9103)) by @gaston98765
- **[工作流：审批]** 修复查看可发起的审批列表 API 中，筛选和其他查询参数不起作用的问题 by @mytharcher

### [v2.0.48](https://www.nocobase.com/cn/blog/v2.0.48)

*发布日期：2026-05-04*

### 🐛 修复

- **[AI 员工]** 修复操作按钮 AI 员工列表显示了开发员工问题 ([#9320](https://github.com/nocobase/nocobase/pull/9320)) by @cgyrock
- **[工作流：审批]**

  - 修复原始申请表单区块中 s3-pro 存储的文件未重新加载的问题 by @mytharcher
  - 在审批相关操作中，支持解析部分前端变量 by @mytharcher

### [v2.0.47](https://www.nocobase.com/cn/blog/v2.0.47)

*发布日期：2026-05-01*

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

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.25](https://www.nocobase.com/cn/blog/v2.1.0-beta.25)

*发布日期：2026-05-06*

### 🎉 新特性

- **[cli]** 增加发布相关命令 ([#9308](https://github.com/nocobase/nocobase/pull/9308)) by @Andrew1989Y
- **[undefined]** 新增印尼语和越南语文档。 ([#9303](https://github.com/nocobase/nocobase/pull/9303)) by @Molunerfinn
- **[AI 员工]** LLM 接入服务新增对 Xiaomi MIMO 平台的支持 ([#9315](https://github.com/nocobase/nocobase/pull/9315)) by @cgyrock
- **[迁移管理]** 新增 Nocobase CLI 专用 APIs by @Andrew1989Y
- **[备份管理器]** 新增 Nocobase CLI 专用 Apis by @Andrew1989Y

### 🚀 优化

- **[undefined]**

  - 为手动发布工作流添加飞书失败通知([#9349](https://github.com/nocobase/nocobase/pull/9349)) by @Molunerfinn
  - 西班牙语、葡萄牙语、俄语、德语文档对齐英文文档。 ([#9299](https://github.com/nocobase/nocobase/pull/9299)) by @Molunerfinn
  - 同步法语文档与中文文档。 ([#9291](https://github.com/nocobase/nocobase/pull/9291)) by @Molunerfinn
- **[IdP: OAuth]** OAuth 会话有效期现在与系统 Token 策略保持一致 ([#9345](https://github.com/nocobase/nocobase/pull/9345)) by @2013xile
- **[区块：看板]**

  - 调整看板默认列宽。 ([#9306](https://github.com/nocobase/nocobase/pull/9306)) by @jiannx
  - 优化日历和看板区块的创建配置。 ([#9294](https://github.com/nocobase/nocobase/pull/9294)) by @jiannx
- **[AI 员工]** AI 员工分类调整 ([#9274](https://github.com/nocobase/nocobase/pull/9274)) by @cgyrock
- **[工作流：审批]** 将关系字段从数据库加载的显示模式标记为过时功能，提醒用户迁移 by @mytharcher

### 🐛 修复

- **[undefined]**

  - 修复依赖与构建校验流水线，避免独立 pro 插件 checkout 失败时被静默跳过而导致构建覆盖缺失。 ([#9324](https://github.com/nocobase/nocobase/pull/9324)) by @Molunerfinn
  - 修复翻译膨胀文件，对齐多语言文档结构。 ([#9305](https://github.com/nocobase/nocobase/pull/9305)) by @Molunerfinn
- **[cli]** 修复 CLI 布尔选项无法通过否定参数关闭的问题 ([#9337](https://github.com/nocobase/nocobase/pull/9337)) by @2013xile
- **[client-v2]**

  - 修复远程插件加载时已带 `.js` 后缀的插件 URL 被错误解析成重复 `.js.js` 路径的问题。 ([#9336](https://github.com/nocobase/nocobase/pull/9336)) by @Molunerfinn
  - 修复触发工作流按钮无法配置绑定工作流的问题 ([#9314](https://github.com/nocobase/nocobase/pull/9314)) by @mytharcher
- **[ai]** 修复 AI 员工注册时缺少 category 字段设置的问题 ([#9300](https://github.com/nocobase/nocobase/pull/9300)) by @cgyrock
- **[flow-engine]** 修复表单相关变量中可以选择系统隐藏字段的问题。 ([#9302](https://github.com/nocobase/nocobase/pull/9302)) by @gchust
- **[client]**

  - 修复 v2 表格区块筛选或刷新数据后，JS 字段单元格偶现空白的问题。 ([#9285](https://github.com/nocobase/nocobase/pull/9285)) by @jiannx
  - 修复 v2 表单 Data scope 变量依赖字段无值时未传递 null 的问题。 ([#9287](https://github.com/nocobase/nocobase/pull/9287)) by @jiannx
  - 修复关系字段弹窗选择页面中筛选表单字段会消失的问题 ([#9211](https://github.com/nocobase/nocobase/pull/9211)) by @zhangzhonghe
  - JS column 在行数据变化时重新执行渲染流程 ([#9282](https://github.com/nocobase/nocobase/pull/9282)) by @jiannx
- **[database]** 修复 SQL Server 外部数据源日期时间字段筛选可能失败的问题 ([#9272](https://github.com/nocobase/nocobase/pull/9272)) by @2013xile
- **[AI 员工]**

  - 修复 AI 员工使用 deepseek v4 模型偶现报错问题 ([#9348](https://github.com/nocobase/nocobase/pull/9348)) by @cgyrock
  - 修复工作流 AI 员工节点切换 AI 员工后会清空技能的问题 ([#9342](https://github.com/nocobase/nocobase/pull/9342)) by @cgyrock
  - 修复操作按钮 AI 员工列表显示了开发员工问题 ([#9320](https://github.com/nocobase/nocobase/pull/9320)) by @cgyrock
- **[数据源：主数据库]** 防止在集合加载期间 fields 未定义时发生崩溃 ([#9174](https://github.com/nocobase/nocobase/pull/9174)) by @saraTabbane
- **[UI 模板]** 修复弹窗模板列表没有正确加载可用模板的问题。 ([#9332](https://github.com/nocobase/nocobase/pull/9332)) by @gchust
- **[文件管理器]** 改进了预览文件下载时的错误处理 ([#9103](https://github.com/nocobase/nocobase/pull/9103)) by @gaston98765
- **[区块：树]** 修复筛选区块节点显示异常 ([#9260](https://github.com/nocobase/nocobase/pull/9260)) by @jiannx
- **[区块：甘特图]** 新增甘特图区块“启用拖动重新排期”配置。 ([#9301](https://github.com/nocobase/nocobase/pull/9301)) by @jiannx
- **[区块：看板]** 修复字段配置浮层重复显示 ([#9271](https://github.com/nocobase/nocobase/pull/9271)) by @jiannx
- **[操作：导入记录]** 修复导入出错时时失败行索引错误的问题 ([#9277](https://github.com/nocobase/nocobase/pull/9277)) by @mytharcher
- **[操作：导出记录 Pro]** 修复自动判断同步异步的模式未生效的问题 by @mytharcher
- **[迁移管理]** 修复 migration:create 从异步任务记录中返回 taskId 的问题。 by @Andrew1989Y
- **[工作流：审批]**

  - 修复查看可发起的审批列表 API 中，筛选和其他查询参数不起作用的问题 by @mytharcher
  - 修复原始申请表单区块中 s3-pro 存储的文件未重新加载的问题 by @mytharcher
  - 修复类型错误 by @mytharcher
  - 在审批相关操作中，支持解析部分前端变量 by @mytharcher
  - 修复审批 `execute` 的触发时序，确保在审批事务提交后同步 `latestExecutionId` by @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.30](https://www.nocobase.com/cn/blog/v2.1.0-alpha.30)

*发布日期：2026-05-06*

### 🚀 优化

- **[undefined]** 为手动发布工作流添加飞书失败通知 ([#9349](https://github.com/nocobase/nocobase/pull/9349)) by @Molunerfinn
- **[IdP: OAuth]** OAuth 会话有效期现在与系统 Token 策略保持一致 ([#9345](https://github.com/nocobase/nocobase/pull/9345)) by @2013xile

### 🐛 修复

- **[client-v2]** 修复远程插件加载时已带 `.js` 后缀的插件 URL 被错误解析成重复 `.js.js` 路径的问题。 ([#9336](https://github.com/nocobase/nocobase/pull/9336)) by @Molunerfinn
- **[cli]** 修复 CLI 布尔选项无法通过否定参数关闭的问题 ([#9337](https://github.com/nocobase/nocobase/pull/9337)) by @2013xile
- **[AI 员工]**

  - 修复 AI 员工使用 deepseek v4 模型偶现报错问题 ([#9348](https://github.com/nocobase/nocobase/pull/9348)) by @cgyrock
  - 修复工作流 AI 员工节点切换 AI 员工后会清空技能的问题 ([#9342](https://github.com/nocobase/nocobase/pull/9342)) by @cgyrock
- **[数据源：主数据库]** 防止在集合加载期间 fields 未定义时发生崩溃 ([#9174](https://github.com/nocobase/nocobase/pull/9174)) by @saraTabbane
- **[UI 模板]** 修复弹窗模板列表没有正确加载可用模板的问题。 ([#9332](https://github.com/nocobase/nocobase/pull/9332)) by @gchust
- **[区块：看板]** 修复弹窗或二级页面中关联看板区块使用未解析运行时资源参数的问题。 ([#9350](https://github.com/nocobase/nocobase/pull/9350)) by @jiannx
- **[工作流：审批]** 修复查看可发起的审批列表 API 中，筛选和其他查询参数不起作用的问题 by @mytharcher

### [v2.1.0-alpha.29](https://www.nocobase.com/cn/blog/v2.1.0-alpha.29)

*发布日期：2026-05-04*

### 🐛 修复

- **[文件管理器]** 改进了预览文件下载时的错误处理 ([#9103](https://github.com/nocobase/nocobase/pull/9103)) by @gaston98765
- **[工作流：审批]** 在审批相关操作中，支持解析部分前端变量 by @mytharcher

### [v2.1.0-alpha.28](https://www.nocobase.com/cn/blog/v2.1.0-alpha.28)

*发布日期：2026-05-04*

### 🐛 修复

- **[工作流：审批]** 修复原始申请表单区块中 s3-pro 存储的文件未重新加载的问题 by @mytharcher

### [v2.1.0-alpha.27](https://www.nocobase.com/cn/blog/v2.1.0-alpha.27)

*发布日期：2026-05-03*

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
