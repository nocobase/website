汇总一周产品更新日志，最新发布可以[前往我们的博客查看](https://www.nocobase.com/cn/blog/timeline)。

**NocoBase 目前更新包括的版本更新包括三个分支：`main` ，`next`和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

`main` ：截止目前最稳定的版本，推荐安装此版本。

`next`：包含即将发布的新功能，经过初步测试的版本，可能存在部分已知或未知问题。主要面向测试用户，用于收集反馈和进一步优化功能。适合愿意提前体验新功能并提供反馈的测试用户。

`develop`：开发中的版本，包含最新的功能代码，可能尚未完成或存在较多不稳定因素，主要用于内部开发和快速迭代。适合对产品功能前沿发展感兴趣的技术用户，但可能存在较多问题或不完整功能，不建议在生产环境中使用。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.33](https://www.nocobase.com/cn/blog/v1.8.33)

*发布时间：2025-10-29*

### 🚀 优化

- **[server]** 增加 Gateway 层日志 ([#7683](https://github.com/nocobase/nocobase/pull/7683)) by @2013xile

### 🐛 修复

- **[database]** 跳过 MySQL JSON 列的默认值同步处理 ([#7696](https://github.com/nocobase/nocobase/pull/7696)) by @2013xile
- **[client]**

  - 修复弹窗内 iframe 区块联动规则失效问题 ([#7694](https://github.com/nocobase/nocobase/pull/7694)) by @katherinehhh
  - 修复操作面板中的扫描二维码无法配置联动规则 ([#7693](https://github.com/nocobase/nocobase/pull/7693)) by @katherinehhh
- **[工作流]** 修复在服务拆分模式下，工作流内存等待队列处理不当导致部分工作流不执行的问题 ([#7692](https://github.com/nocobase/nocobase/pull/7692)) by @mytharcher

### [v1.8.32](https://www.nocobase.com/cn/blog/v1.8.32)

*发布时间：2025-10-27*

### 🚀 优化

- **[server]** 优化加载本地化资源的方法，避免阻塞事件循环 ([#7653](https://github.com/nocobase/nocobase/pull/7653)) by @2013xile
- **[cache]** 避免因 clone 布隆过滤器造成的性能损耗 ([#7652](https://github.com/nocobase/nocobase/pull/7652)) by @2013xile
- **[操作：导入记录]** 改进了在未找到表头时的错误提示信息 ([#7656](https://github.com/nocobase/nocobase/pull/7656)) by @mytharcher

### 🐛 修复

- **[client]**

  - 修复筛选区块中日期字段清除时报错的问题 ([#7632](https://github.com/nocobase/nocobase/pull/7632)) by @katherinehhh
  - 修复字段标题换行截断单词的问题 ([#7647](https://github.com/nocobase/nocobase/pull/7647)) by @katherinehhh
  - 修复编辑弹窗中子表格默认值失效的问题 ([#7631](https://github.com/nocobase/nocobase/pull/7631)) by @katherinehhh
- **[数据表字段：中国行政区划]** 城市和县区相同时，无法导入数据 ([#7673](https://github.com/nocobase/nocobase/pull/7673)) by @2013xile
- **[工作流]**

  - 修复开启分支的节点删除后，保留的分支内部第一个节点的 key 被改为新值的问题 ([#7665](https://github.com/nocobase/nocobase/pull/7665)) by @mytharcher
  - 修复应用停止时日志报错的问题 ([#7639](https://github.com/nocobase/nocobase/pull/7639)) by @mytharcher
- **[文件管理器]** 修复 `.msg` 文件无法正常上传的问题 ([#7662](https://github.com/nocobase/nocobase/pull/7662)) by @mytharcher
- **[数据源：主数据库]** 修复创建反向关系字段后，多节点未同步元数据的问题 ([#7628](https://github.com/nocobase/nocobase/pull/7628)) by @mytharcher
- **[工作流：审批]**

  - 修复审批完成通知中的状态文本的翻译问题，当用户未设置语言偏好时使用系统配置的默认语言进行翻译 by @mytharcher
  - 修复加签后待办数字未更新的问题 by @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.15](https://www.nocobase.com/cn/blog/v1.9.0-beta.15)

*发布时间：2025-10-25*

### 🐛 修复

- **[Redis 消息队列适配器]** 修复 Redis 队列适配器在启动后订阅的频道没有正确监听的问题 by @mytharcher

### [v1.9.0-beta.14](https://www.nocobase.com/cn/blog/v1.9.0-beta.14)

*发布时间：2025-10-25*

### 🎉 新特性

- **[工作流：审批]** 审批触发器中开放审批单据编号变量以供使用 by @mytharcher

### 🚀 优化

- **[server]** 优化加载本地化资源的方法，避免阻塞事件循环 ([#7653](https://github.com/nocobase/nocobase/pull/7653)) by @2013xile
- **[cache]** 避免因 clone 布隆过滤器造成的性能损耗 ([#7652](https://github.com/nocobase/nocobase/pull/7652)) by @2013xile
- **[操作：导入记录]** 改进了在未找到表头时的错误提示信息 ([#7656](https://github.com/nocobase/nocobase/pull/7656)) by @mytharcher

### 🐛 修复

- **[client]** 修复字段标题换行截断单词的问题 ([#7647](https://github.com/nocobase/nocobase/pull/7647)) by @katherinehhh
- **[工作流]** 修复应用停止时日志报错的问题 ([#7639](https://github.com/nocobase/nocobase/pull/7639)) by @mytharcher
- **[工作流：审批]**

  - 修复审批提交后数据库报错时事务未正常回滚导致的事务超时问题 by @mytharcher
  - 修复加签后待办数字未更新的问题 by @mytharcher
  - 修复提交审批表单中部分变量未被解析的问题 by @mytharcher
- **[邮件管理]** 捕获同步异常 by @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.25](https://www.nocobase.com/cn/blog/v2.0.0-alpha.25)

*发布时间：2025-10-29*

### 🚀 优化

- **[server]** 增加 Gateway 层日志 ([#7683](https://github.com/nocobase/nocobase/pull/7683)) by @2013xile
- **[flow-engine]** 支持在 flow step 中定义上下文变量 ([#7674](https://github.com/nocobase/nocobase/pull/7674)) by @gchust
- **[数据可视化]**

  - 添加提示 请先点击”运行查询“后再配置图表选项 ([#7685](https://github.com/nocobase/nocobase/pull/7685)) by @heziqiang
  - 图表配置面板点击公共预览按钮时刷新图表数据 ([#7678](https://github.com/nocobase/nocobase/pull/7678)) by @heziqiang
- **[AI 员工]** 优化 AI 编程体验，包括使用 AI 员工审查、诊断并修复代码。 ([#7679](https://github.com/nocobase/nocobase/pull/7679)) by @cgyrock
- **[数据源管理]** 调整字段类型和 interface 列顺序，修改时增加二次确认 ([#7680](https://github.com/nocobase/nocobase/pull/7680)) by @2013xile
- **[工作流]** 对更新记录操作按钮补全绑定工作流的配置项 ([#7668](https://github.com/nocobase/nocobase/pull/7668)) by @mytharcher
- **[多应用管理器（已废弃）]** 改进 app supervisor ([#7661](https://github.com/nocobase/nocobase/pull/7661)) by @chenos

### 🐛 修复

- **[client]**

  - 修复了字段为只读模式时无法设置默认值的问题，确保在字段不可编辑时能够更顺畅地配置默认值。 ([#7689](https://github.com/nocobase/nocobase/pull/7689)) by @gchust
  - 修复子表单联动规则的已知问题 ([#7698](https://github.com/nocobase/nocobase/pull/7698)) by @zhangzhonghe
  - 筛选表单中 JS 区块的字段无法被加载 ([#7690](https://github.com/nocobase/nocobase/pull/7690)) by @gchust
- **[flow-engine]** 弹窗里编辑表单关联字段的数据范围中的当前弹窗记录上下文选择不正确 ([#7675](https://github.com/nocobase/nocobase/pull/7675)) by @gchust
- **[工作流：人工处理节点]** 修复工作流停用后人工处理任务从待办中心消失的问题 ([#7687](https://github.com/nocobase/nocobase/pull/7687)) by @mytharcher
- **[AI 员工]** 修复了在选择包含 API 资源的区块时未正确获取对应数据的问题。 ([#7688](https://github.com/nocobase/nocobase/pull/7688)) by @cgyrock
- **[工作流]** 修复开启分支的节点删除后，保留的分支内部第一个节点的 key 被改为新值的问题 ([#7665](https://github.com/nocobase/nocobase/pull/7665)) by @mytharcher
- **[数据表字段：中国行政区划]** 城市和县区相同时，无法导入数据 ([#7673](https://github.com/nocobase/nocobase/pull/7673)) by @2013xile
- **[文件管理器]** 修复 `.msg` 文件无法正常上传的问题 ([#7662](https://github.com/nocobase/nocobase/pull/7662)) by @mytharcher
- **[前端流引擎]** 联动规则变量赋值无法正确解析变量 ([#7684](https://github.com/nocobase/nocobase/pull/7684)) by @gchust
- **[数据可视化]** 图表初始化时使用 sql:runById 接口请求查询数据 ([#7677](https://github.com/nocobase/nocobase/pull/7677)) by @heziqiang
- **[工作流：审批]** 修复审批完成通知中的状态文本的翻译问题，当用户未设置语言偏好时使用系统配置的默认语言进行翻译 by @mytharcher

### [v2.0.0-alpha.24](https://www.nocobase.com/cn/blog/v2.0.0-alpha.24)

*发布时间：2025-10-27*

### 🎉 新特性

- **[前端流引擎]** 支持在编写 SQL 时使用 LiquidJS 模板字符串 ([#7667](https://github.com/nocobase/nocobase/pull/7667)) by @2013xile

### [v2.0.0-alpha.22](https://www.nocobase.com/cn/blog/v2.0.0-alpha.22)

*发布时间：2025-10-25*

### 🎉 新特性

- **[client]** 增加 2.0 Markdown 区块 ([#7613](https://github.com/nocobase/nocobase/pull/7613)) by @katherinehhh
- **[数据源管理]**

  - 主数据源支持从主数据库中读取数据表，并支持更改字段 interface ([#7118](https://github.com/nocobase/nocobase/pull/7118)) by @aaaaaajie
  - 主数据源支持从主数据库中读取数据表，并支持更改字段 interface ([#7118](https://github.com/nocobase/nocobase/pull/7118)) by @aaaaaajie
- **[历史记录]** 新增历史记录区块 by @2013xile

### 🐛 修复

- **[flow-engine]** 修复了 FlowModel 无法配置自定义 flow action 的问题，现在用户可以正常配置流程操作。 ([#7666](https://github.com/nocobase/nocobase/pull/7666)) by @gchust
- **[Redis 消息队列适配器]** 修复 Redis 队列适配器在启动后订阅的频道没有正确监听的问题 by @mytharcher

### [v2.0.0-alpha.21](https://www.nocobase.com/cn/blog/v2.0.0-alpha.21)

*发布时间：2025-10-25*

### 🚀 优化

- **[cache]** 避免因 clone 布隆过滤器造成的性能损耗 ([#7652](https://github.com/nocobase/nocobase/pull/7652)) by @2013xile
- **[server]** 优化加载本地化资源的方法，避免阻塞事件循环 ([#7653](https://github.com/nocobase/nocobase/pull/7653)) by @2013xile
- **[操作：导入记录]** 改进了在未找到表头时的错误提示信息 ([#7656](https://github.com/nocobase/nocobase/pull/7656)) by @mytharcher

### 🐛 修复

- **[client]** 修复字段标题换行截断单词的问题 ([#7647](https://github.com/nocobase/nocobase/pull/7647)) by @katherinehhh
- **[数据可视化]** 修复图表 SQL 查询中的变量自动解析问题 ([#7642](https://github.com/nocobase/nocobase/pull/7642)) by @heziqiang
- **[工作流]** 修复应用停止时日志报错的问题 ([#7639](https://github.com/nocobase/nocobase/pull/7639)) by @mytharcher

### [v2.0.0-alpha.20](https://www.nocobase.com/cn/blog/v2.0.0-alpha.20)

*发布时间：2025-10-23*

### 🎉 新特性

- **[client]** 支持为子表单设置联动规则 ([#7640](https://github.com/nocobase/nocobase/pull/7640)) by @zhangzhonghe
- **[区块：列表]** 新增2.0 列表区块 ([#7574](https://github.com/nocobase/nocobase/pull/7574)) by @katherinehhh
- **[数据可视化]** 新增图表类型 环形图 ([#7629](https://github.com/nocobase/nocobase/pull/7629)) by @heziqiang
- **[区块：操作面板]** 新增2.0 操作面板区块 ([#7594](https://github.com/nocobase/nocobase/pull/7594)) by @katherinehhh
- **[区块：网格卡片]** 新增2.0 网格卡片区块 ([#7579](https://github.com/nocobase/nocobase/pull/7579)) by @katherinehhh

### 🚀 优化

- **[flow-engine]** 支持通过在 URL 查询参数中添加 skipRunJs=true 来跳过 runjs 流步骤。 ([#7638](https://github.com/nocobase/nocobase/pull/7638)) by @gchust

### 🐛 修复

- **[flow-engine]** 修复 js 代码编辑器中的复制粘贴相关代码片段报错。 ([#7641](https://github.com/nocobase/nocobase/pull/7641)) by @gchust
- **[前端流引擎]** 修复上级弹窗中的记录变量解析不正确的问题。 ([#7637](https://github.com/nocobase/nocobase/pull/7637)) by @gchust
- **[数据可视化]** 修复图表数据请求参数 orders 丢失的问题 ([#7636](https://github.com/nocobase/nocobase/pull/7636)) by @heziqiang
- **[邮件管理]** 捕获同步异常 by @jiannx
