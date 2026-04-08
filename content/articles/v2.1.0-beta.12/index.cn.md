### 🎉 新特性

- **[client]**
  - 事件流添加 js 变量 ([#8938](https://github.com/nocobase/nocobase/pull/8938)) by @jiannx

  - 新增 JS item 操作 ([#8911](https://github.com/nocobase/nocobase/pull/8911)) by @jiannx

- **[AI 员工]** 为 AI 员工增加基于 LLM 的联网搜索工具 ([#9032](https://github.com/nocobase/nocobase/pull/9032)) by @cgyrock

### 🚀 优化

- **[undefined]**
  - 为 README 添加目录 ([#8878](https://github.com/nocobase/nocobase/pull/8878)) by @gaston98765

  - 通过静默解压 LibreOffice 和 Oracle Instant Client, 减少服务器启动时的冗余日志 ([#8984](https://github.com/nocobase/nocobase/pull/8984)) by @Rishabh1925

- **[client]**
  - 支持通过 runjs 设置字段样式 ([#8933](https://github.com/nocobase/nocobase/pull/8933)) by @jiannx

  - 优化表单按钮的水平布局 ([#8869](https://github.com/nocobase/nocobase/pull/8869)) by @jiannx

- **[工作流：JavaScript 节点]** 将 `isolated-vm` 添加为 JavaScript 节点的默认执行引擎 ([#8973](https://github.com/nocobase/nocobase/pull/8973)) by @mytharcher
参考文档：[JavaScript 节点](https://docs.nocobase.com/cn/workflow/nodes/javascript)
- **[工作流]**
  - 调整启用开关尺寸为小尺寸 ([#9010](https://github.com/nocobase/nocobase/pull/9010)) by @mytharcher

  - 为每页数量参数增加变量支持 ([#8951](https://github.com/nocobase/nocobase/pull/8951)) by @mytharcher

- **[AI 员工]** 优化deepseek处理不支持的文件类型时的提示 ([#9003](https://github.com/nocobase/nocobase/pull/9003)) by @cgyrock

- **[操作：自定义请求]** 添加自定义请求的操作按钮 ([#8890](https://github.com/nocobase/nocobase/pull/8890)) by @jiannx

- **[数据表字段：中国行政区划]** 中国行政区划字段 2.0 ([#8831](https://github.com/nocobase/nocobase/pull/8831)) by @jiannx

- **[工作流：子流程]** 为防止工作流遇到异常时卡住增加防御性逻辑 by @mytharcher

- **[工作流：审批]** 修复加载审批处理记录列表时由于 JSON 字段造成的性能问题 by @mytharcher

### 🐛 修复

- **[client]**
  - 修复批量编辑操作会弹出不正确的未保存确认消息的问题 ([#9054](https://github.com/nocobase/nocobase/pull/9054)) by @gchust

  - 修复通过弹窗子表格添加记录后提交表单时会出现错误的二次确认弹窗的问题。 ([#9035](https://github.com/nocobase/nocobase/pull/9035)) by @gchust

  - 修复 ctx.request 无法覆盖 Authorization 头信息。 ([#8850](https://github.com/nocobase/nocobase/pull/8850)) by @gchust

  - 子表格关系字段保存不成功 ([#9004](https://github.com/nocobase/nocobase/pull/9004)) by @jiannx

  - 字段的子表单不显示数据 ([#9008](https://github.com/nocobase/nocobase/pull/9008)) by @jiannx

  - 修复表格中关联字段的文案首次渲染未正确显示 ([#9007](https://github.com/nocobase/nocobase/pull/9007)) by @jiannx

  - 修复多级弹窗时表单数据修改后关闭弹窗二次确认消息不正确的问题。 ([#8944](https://github.com/nocobase/nocobase/pull/8944)) by @gchust

  - 修复变量表达式包含空格时名称无法正常显示的问题 ([#8988](https://github.com/nocobase/nocobase/pull/8988)) by @mytharcher

  - 修复弹窗内树表添加子节点异常 ([#8872](https://github.com/nocobase/nocobase/pull/8872)) by @jiannx

- **[data-source-manager]** 修复从数据库同步字段后部分字段类型未正确更新的问题 ([#9046](https://github.com/nocobase/nocobase/pull/9046)) by @2013xile

- **[server]**
  - 对分发应用状态增加服务模式的检查，以避免非服务模式的实例更新应用状态 ([#8959](https://github.com/nocobase/nocobase/pull/8959)) by @mytharcher

  - 将 Pub-Sub 关闭的时机改为 `beforeStop`，以避免数据库关闭后仍进行了消息发送和处理 ([#8934](https://github.com/nocobase/nocobase/pull/8934)) by @mytharcher

- **[flow-engine]**
  - 修复弹窗中配置菜单被裁剪的问题 ([#9005](https://github.com/nocobase/nocobase/pull/9005)) by @gchust

  - 修复配置态 UI 组件宽度太小时无法选中菜单的问题。 ([#8954](https://github.com/nocobase/nocobase/pull/8954)) by @gchust

  - 添加设置表单控件和详情控件的js片段 ([#8974](https://github.com/nocobase/nocobase/pull/8974)) by @jiannx

  - 表单字段删除时同步状态到字段配置 ([#8857](https://github.com/nocobase/nocobase/pull/8857)) by @jiannx

- **[database]** 当追加关系数据参数有误时，使用警告类型的日志并跳过该字段，避免报错导致无法执行 ([#8923](https://github.com/nocobase/nocobase/pull/8923)) by @mytharcher

- **[resourcer]** 修复外部数据源不能正确加载的问题 ([#8929](https://github.com/nocobase/nocobase/pull/8929)) by @2013xile

- **[AI 员工]**
  - 修复配置 APP_PUBLIC_PATH 后，子路径访问下 AI 员工上传文档失败的问题 ([#9034](https://github.com/nocobase/nocobase/pull/9034)) by @cgyrock

  - 修复在Dashscope上使用用deepseek或minmax模型报错问题 ([#9033](https://github.com/nocobase/nocobase/pull/9033)) by @cgyrock

  - 修复中断AI员工推理过程会导致服务崩溃的问题 ([#9031](https://github.com/nocobase/nocobase/pull/9031)) by @cgyrock

  - 修复使用千问大模型时联网搜索行为异常的问题 ([#9012](https://github.com/nocobase/nocobase/pull/9012)) by @cgyrock

  - AI 会话接口增加所有权校验 ([#8993](https://github.com/nocobase/nocobase/pull/8993)) by @cgyrock

  - 调整AI对话中工具卡片组件之间的间隙 ([#8965](https://github.com/nocobase/nocobase/pull/8965)) by @cgyrock

- **[工作流：HTTP 请求节点]** 清理工作流 HTTP 请求节点的结果结构，避免暴露请求配置；新节点默认仅返回响应数据，并为失败请求增加调试日志。 ([#9024](https://github.com/nocobase/nocobase/pull/9024)) by @mytharcher

- **[数据表字段：排序]** 修复 field-sort 插件在 scopeKey 未定义时导致的崩溃问题 ([#9019](https://github.com/nocobase/nocobase/pull/9019)) by @gaston98765

- **[区块：网格卡片]** 修复网格卡片刷新时按钮未刷新问题 ([#9021](https://github.com/nocobase/nocobase/pull/9021)) by @jiannx

- **[通知：站内信]** 修复站内信消息操作的白名单处理，避非本人免越权操作 ([#9001](https://github.com/nocobase/nocobase/pull/9001)) by @mytharcher

- **[工作流：SQL 节点]** 修复 SQL 节点安全问题 ([#8989](https://github.com/nocobase/nocobase/pull/8989)) by @mytharcher

- **[数据可视化]**
  - 图表在使用带变量筛选条件时，首次渲染无法正确解析变量值 ([#8964](https://github.com/nocobase/nocobase/pull/8964)) by @2013xile

  - 修复开启空间插件后，root 角色图表数据统计异常 ([#8969](https://github.com/nocobase/nocobase/pull/8969)) by @jiannx

- **[操作：导入记录]** 修复开启空间插件后导入失败 ([#8968](https://github.com/nocobase/nocobase/pull/8968)) by @jiannx

- **[工作流：JavaScript 节点]** 修复代码执行安全问题 ([#8967](https://github.com/nocobase/nocobase/pull/8967)) by @mytharcher

- **[操作：导出记录]** 限制导入和导出配置多层关联字段 ([#8893](https://github.com/nocobase/nocobase/pull/8893)) by @jiannx

- **[自定义变量]** 公开表单提交数据后报 No permissions ([#8942](https://github.com/nocobase/nocobase/pull/8942)) by @chenos

- **[本地化]** 无权限时不应调用 localizationTexts:missing 接口 ([#8903](https://github.com/nocobase/nocobase/pull/8903)) by @chenos

- **[用户认证]** 修复acl 支持自定义 state 筛选参数 ([#8918](https://github.com/nocobase/nocobase/pull/8918)) by @jiannx

- **[前端流引擎]** 移除从 uiSchema 表复制的遗留事件，避免触发调用后报错 ([#8957](https://github.com/nocobase/nocobase/pull/8957)) by @mytharcher

- **[操作：导入记录 Pro]**
  - 限制导入和导出配置多层关联字段 by @jiannx

  - 修复“触发工作流”选项不选时仍然触发工作流的问题 by @mytharcher

- **[数据源：外部 Oracle]** 修复 Oracle 数据源加载报错的问题 by @2013xile

- **[工作流：审批]**
  - 修复历史迁移脚本版本限制，以避免在新版本部署后启动报错的问题 by @mytharcher

  - 为删除的工作流增加容错，避免待办列表加载报错 by @mytharcher

  - 修复 v2 审批表单回退按钮的翻译、节点选择和回退目标问题 by @zhangzhonghe

  - 为缺失“提交轮次”数据增加容错 by @mytharcher

- **[邮件管理]**
  - 修复使用模板时覆盖了签名 by @jiannx

  - 邮件发送后不显示关闭确认 by @jiannx

