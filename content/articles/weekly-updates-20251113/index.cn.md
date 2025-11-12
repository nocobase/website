汇总一周产品更新日志，最新发布可以[前往我们的博客查看](https://www.nocobase.com/cn/blog/timeline)。

**NocoBase 目前更新包括的版本更新包括三个分支：`main` ，`next`和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

`main` ：截止目前最稳定的版本，推荐安装此版本。

`next`：包含即将发布的新功能，经过初步测试的版本，可能存在部分已知或未知问题。主要面向测试用户，用于收集反馈和进一步优化功能。适合愿意提前体验新功能并提供反馈的测试用户。

`develop`：开发中的版本，包含最新的功能代码，可能尚未完成或存在较多不稳定因素，主要用于内部开发和快速迭代。适合对产品功能前沿发展感兴趣的技术用户，但可能存在较多问题或不完整功能，不建议在生产环境中使用。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.3](https://www.nocobase.com/cn/blog/v1.9.3)

*发布时间：2025-11-05*

### 🚀 优化

- **[database]** 对 MariaDB 连接实例增加 `multipleStatements` 选项，以支持一次查询中调用多条语句 ([#7781](https://github.com/nocobase/nocobase/pull/7781)) by @mytharcher
- **[工作流]** 支持工作流中的数据区块使用一致的详情区块配置菜单 ([#7771](https://github.com/nocobase/nocobase/pull/7771)) by @mytharcher

### 🐛 修复

- **[server]** 使用应用名称隔离发布订阅的频道 ([#7762](https://github.com/nocobase/nocobase/pull/7762)) by @mytharcher
- **[client]** 修复 “Maximum call stack size exceeded” ([#7780](https://github.com/nocobase/nocobase/pull/7780)) by @zhangzhonghe
- **[database]** 字段名为 snake_case 风格时，索引字段判断不正确的问题 ([#7776](https://github.com/nocobase/nocobase/pull/7776)) by @2013xile
- **[工作流]** 修复了集群模式下工作流调度器无法正确识别空闲状态的问题，该问题可能导致插件未就绪就开始消费队列事件 ([#7768](https://github.com/nocobase/nocobase/pull/7768)) by @mytharcher
- **[移动端（已废弃）]** 修复移动端的日期字段默认值弹窗无法选中日期的问题 ([#7783](https://github.com/nocobase/nocobase/pull/7783)) by @zhangzhonghe
- **[工作流：审批]** 修复复制审批工作流时报错的问题 by @mytharcher
- **[邮件管理]** mailMessages添加索引 by @jiannx

### [v1.9.2](https://www.nocobase.com/cn/blog/v1.9.2)

*发布时间：2025-11-04*

### 🚀 优化

- **[工作流：审批]** 在转签和加签时通知新的审批人 by @mytharcher

### 🐛 修复

- **[工作流]** 修复在服务拆分模式下，手动执行带中断节点的工作流一直等待的问题 ([#7767](https://github.com/nocobase/nocobase/pull/7767)) by @mytharcher
- **[邮件管理]** 给索引添加迁移脚本 by @jiannx

### [v1.9.1](https://www.nocobase.com/cn/blog/v1.9.1)

*发布时间：2025-11-04*

### 🐛 修复

- **[工作流：审批]** 并行分支中不再支持创建审批节点，避免流程状态导致的问题 by @mytharcher
- **[邮件管理]** 添加同步日志 by @jiannx

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.16](https://www.nocobase.com/cn/blog/v1.9.0-beta.16)

*发布时间：2025-11-03*

### 🎉 新特性

- **[工作流：审批]** 支持“数据保存前”的触发模式 by @mytharcher

### 🚀 优化

- **[server]** 增加 Gateway 层日志 ([#7683](https://github.com/nocobase/nocobase/pull/7683)) by @2013xile
- **[工作流：通知节点]** 通知节点增加“忽略失败”选项，以支持发送失败时继续执行工作流 ([#7736](https://github.com/nocobase/nocobase/pull/7736)) by @mytharcher

### 🐛 修复

- **[client]**

  - 修复操作面板中的扫描二维码无法配置联动规则 ([#7693](https://github.com/nocobase/nocobase/pull/7693)) by @katherinehhh
  - 修复弹窗内 iframe 区块联动规则失效问题 ([#7694](https://github.com/nocobase/nocobase/pull/7694)) by @katherinehhh
- **[database]** 跳过 MySQL JSON 列的默认值同步处理 ([#7696](https://github.com/nocobase/nocobase/pull/7696)) by @2013xile
- **[工作流]**

  - 修复在服务拆分模式下，工作流内存等待队列处理不当导致部分工作流不执行的问题 ([#7692](https://github.com/nocobase/nocobase/pull/7692)) by @mytharcher
  - 修复创建延迟启动的执行计划的状态初始值 ([#7721](https://github.com/nocobase/nocobase/pull/7721)) by @mytharcher
  - 修复开启分支的节点删除后，保留的分支内部第一个节点的 key 被改为新值的问题 ([#7665](https://github.com/nocobase/nocobase/pull/7665)) by @mytharcher
- **[权限控制]** 修复 `resourceManager` 的中间件顺序 ([#7728](https://github.com/nocobase/nocobase/pull/7728)) by @2013xile
- **[文件管理器]** 修复 `.msg` 文件无法正常上传的问题 ([#7662](https://github.com/nocobase/nocobase/pull/7662)) by @mytharcher
- **[工作流：人工处理节点]** 修复工作流停用后人工处理任务从待办中心消失的问题 ([#7687](https://github.com/nocobase/nocobase/pull/7687)) by @mytharcher
- **[数据表字段：中国行政区划]** 城市和县区相同时，无法导入数据 ([#7673](https://github.com/nocobase/nocobase/pull/7673)) by @2013xile
- **[工作流：审批]**

  - 修复审批完成通知中的状态文本的翻译问题，当用户未设置语言偏好时使用系统配置的默认语言进行翻译 by @mytharcher
  - 修复语言翻译 by @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.34](https://www.nocobase.com/cn/blog/v2.0.0-alpha.34)

*发布时间：2025-11-05*

### 🚀 优化

- **[database]** 对 MariaDB 连接实例增加 `multipleStatements` 选项，以支持一次查询中调用多条语句 ([#7781](https://github.com/nocobase/nocobase/pull/7781)) by @mytharcher

### 🐛 修复

- **[flow-engine]** 修复了表格区块翻页后行操作按钮未正确更新的问题，确保按钮功能与当前页面数据匹配。 ([#7779](https://github.com/nocobase/nocobase/pull/7779)) by @gchust
- **[client]**

  - 修复 “Maximum call stack size exceeded” ([#7780](https://github.com/nocobase/nocobase/pull/7780)) by @zhangzhonghe
  - 关系字段标题字段设置超出省略不生效 ([#7778](https://github.com/nocobase/nocobase/pull/7778)) by @katherinehhh
  - 更新记录操作按钮的联动规则失效 ([#7774](https://github.com/nocobase/nocobase/pull/7774)) by @gchust
- **[database]** 字段名为 snake_case 风格时，索引字段判断不正确的问题 ([#7776](https://github.com/nocobase/nocobase/pull/7776)) by @2013xile
- **[移动端（已废弃）]** 修复移动端的日期字段默认值弹窗无法选中日期的问题 ([#7783](https://github.com/nocobase/nocobase/pull/7783)) by @zhangzhonghe

### [v2.0.0-alpha.33](https://www.nocobase.com/cn/blog/v2.0.0-alpha.33)

*发布时间：2025-11-05*

### 🎉 新特性

- **[client]** 子表格支持分页展示数据 ([#7754](https://github.com/nocobase/nocobase/pull/7754)) by @katherinehhh

### 🚀 优化

- **[undefined]** 更新图表插件英文文档 ([#7748](https://github.com/nocobase/nocobase/pull/7748)) by @heziqiang
- **[telemetry]** 增加在线子应用数量等遥测指标 ([#7743](https://github.com/nocobase/nocobase/pull/7743)) by @2013xile
- **[工作流]** 支持工作流中的数据区块使用一致的详情区块配置菜单 ([#7771](https://github.com/nocobase/nocobase/pull/7771)) by @mytharcher
- **[多应用管理器（已废弃）]** 支持子应用异步排队启动 ([#7749](https://github.com/nocobase/nocobase/pull/7749)) by @2013xile
- **[数据可视化]** 添加图表日期时间格式化选项 ([#7763](https://github.com/nocobase/nocobase/pull/7763)) by @heziqiang
- **[工作流：审批]** 在转签和加签时通知新的审批人 by @mytharcher

### 🐛 修复

- **[client]**

  - 修复了变量相关组件中枚举类型的标签未正确显示为对应语言的问题。 ([#7765](https://github.com/nocobase/nocobase/pull/7765)) by @gchust
  - 修复设置前端字段验证后，同时设置必填时，必填标志缺失的问题 ([#7760](https://github.com/nocobase/nocobase/pull/7760)) by @katherinehhh
  - 修复表单中非时区日期清除异常问题 ([#7759](https://github.com/nocobase/nocobase/pull/7759)) by @katherinehhh
  - 修复联动规则设置的必填字段不能正常工作的问题 ([#7756](https://github.com/nocobase/nocobase/pull/7756)) by @zhangzhonghe
  - 修复筛选表单日期字段删除“指定日期”时日期变为 Invalid Date 的问题 ([#7746](https://github.com/nocobase/nocobase/pull/7746)) by @katherinehhh
  - 修复 Markdown Vditor 字段必填验证失败的问题 ([#7764](https://github.com/nocobase/nocobase/pull/7764)) by @katherinehhh
  - 筛选表单关系字段支持配置数据范围 ([#7761](https://github.com/nocobase/nocobase/pull/7761)) by @zhangzhonghe
  - 修复子表格中时间字段格式错误问题 ([#7750](https://github.com/nocobase/nocobase/pull/7750)) by @katherinehhh
- **[flow-engine]**

  - 当字段筛选值设置为 false 时，数据范围筛选请求不正确 ([#7766](https://github.com/nocobase/nocobase/pull/7766)) by @gchust
  - 无法解析子表单当前对象变量的关系字段值 ([#7751](https://github.com/nocobase/nocobase/pull/7751)) by @gchust
  - 修复数据区块最后一页删除数据后分页请求参数不对的问题 ([#7755](https://github.com/nocobase/nocobase/pull/7755)) by @katherinehhh
- **[server]** 使用应用名称隔离发布订阅的频道 ([#7762](https://github.com/nocobase/nocobase/pull/7762)) by @mytharcher
- **[区块：网格卡片]** 修复列表区块和网格卡片区块数据显示同一条的问题 ([#7773](https://github.com/nocobase/nocobase/pull/7773)) by @katherinehhh
- **[多应用管理器（已废弃）]** 子应用状态遥测指标不能正确收集 ([#7772](https://github.com/nocobase/nocobase/pull/7772)) by @2013xile
- **[工作流]**

  - 修复了集群模式下工作流调度器无法正确识别空闲状态的问题，该问题可能导致插件未就绪就开始消费队列事件 ([#7768](https://github.com/nocobase/nocobase/pull/7768)) by @mytharcher
  - 修复在服务拆分模式下，手动执行带中断节点的工作流一直等待的问题 ([#7767](https://github.com/nocobase/nocobase/pull/7767)) by @mytharcher
- **[工作流：审批]**

  - 修复复制审批工作流时报错的问题 by @mytharcher
  - 并行分支中不再支持创建审批节点，避免流程状态导致的问题 by @mytharcher
- **[邮件管理]**

  - 添加同步日志 by @jiannx
  - 给索引添加迁移脚本 by @jiannx

### [v2.0.0-alpha.31](https://www.nocobase.com/cn/blog/v2.0.0-alpha.31)

*发布时间：2025-11-03*

### 🎉 新特性

- **[工作流：审批]** 支持“数据保存前”的触发模式 by @mytharcher

### 🐛 修复

- **[client]** 无法加载当前表单变量字段 ([#7745](https://github.com/nocobase/nocobase/pull/7745)) by @gchust
- **[工作流：审批]** 修复语言翻译 by @mytharcher

### [v2.0.0-alpha.30](https://www.nocobase.com/cn/blog/v2.0.0-alpha.30)

*发布时间：2025-11-02*

### 🚀 优化

- **[工作流：通知节点]** 通知节点增加“忽略失败”选项，以支持发送失败时继续执行工作流 ([#7736](https://github.com/nocobase/nocobase/pull/7736)) by @mytharcher

### [v2.0.0-alpha.29](https://www.nocobase.com/cn/blog/v2.0.0-alpha.29)

*发布时间：2025-11-02*

### 🐛 修复

- **[client]**

  - 解决了当前表单中关联字段变量无法正确识别的情况，确保表单中的数据处理更准确。 ([#7726](https://github.com/nocobase/nocobase/pull/7726)) by @gchust
  - 当变量解析结果为数组并被设置为“对一”字段的值或默认值时会导致错误的问题现已修复。此修复确保了对变量解析结果的正确处理，提高了系统的稳定性和准确性。 ([#7735](https://github.com/nocobase/nocobase/pull/7735)) by @gchust
- **[权限控制]** 修复 `resourceManager` 的中间件顺序 ([#7728](https://github.com/nocobase/nocobase/pull/7728)) by @2013xile

### [v2.0.0-alpha.28](https://www.nocobase.com/cn/blog/v2.0.0-alpha.28)

*发布时间：2025-11-01*

### 🚀 优化

- **[flow-engine]** 优化复制 UID 失败时的错误提示消息，提供更清晰的解决问题指引。 ([#7718](https://github.com/nocobase/nocobase/pull/7718)) by @gchust

### 🐛 修复

- **[flow-engine]** 事件流里的步骤不应该显示到配置菜单里 ([#7723](https://github.com/nocobase/nocobase/pull/7723)) by @gchust
- **[client]** 修复非可筛选字段错误地显示在筛选选项中，现在仅显示可用字段以供选择。 ([#7700](https://github.com/nocobase/nocobase/pull/7700)) by @gchust
- **[工作流]** 修复创建延迟启动的执行计划的状态初始值 ([#7721](https://github.com/nocobase/nocobase/pull/7721)) by @mytharcher
- **[AI 员工]** 优化 Gemini 的 Web Search 逻辑与提示 ([#7720](https://github.com/nocobase/nocobase/pull/7720)) by @cgyrock
- **[操作：导出记录]** 修复导出按钮中可导出字段列表显示错误问题 ([#7714](https://github.com/nocobase/nocobase/pull/7714)) by @katherinehhh
- **[操作：导入记录]** 修复导入按钮中导入字段列表显示错误的问题 ([#7710](https://github.com/nocobase/nocobase/pull/7710)) by @katherinehhh
- **[操作：导入记录 Pro]** 修复导入按钮中导入 pro 字段列表显示错误的问题 by @katherinehhh

### [v2.0.0-alpha.27](https://www.nocobase.com/cn/blog/v2.0.0-alpha.27)

*发布时间：2025-10-31*

### 🎉 新特性

- **[client]** 事件流： 添加了新的预定义操作，增强了事件处理的自定义选项，使用户可以简化工作流程并提高效率 ([#7672](https://github.com/nocobase/nocobase/pull/7672)) by @zhangzhonghe

### 🚀 优化

- **[AI 员工]** 优化 AI 员工交互与任务配置体验 ([#7707](https://github.com/nocobase/nocobase/pull/7707)) by @cgyrock

### 🐛 修复

- **[client]** 修复数据表关系字段删除后 UI 区块显示异常问题 ([#7706](https://github.com/nocobase/nocobase/pull/7706)) by @katherinehhh

### [v2.0.0-alpha.26](https://www.nocobase.com/cn/blog/v2.0.0-alpha.26)

*发布时间：2025-10-30*

### 🚀 优化

- **[undefined]** 更新图表概览部分文档 ([#7702](https://github.com/nocobase/nocobase/pull/7702)) by @heziqiang
- **[client]** JS 代码编辑器里支持 jsx 语法 ([#7699](https://github.com/nocobase/nocobase/pull/7699)) by @gchust
- **[AI 员工]** AI 员工可基于表格区块元信息自主查询数据 ([#7703](https://github.com/nocobase/nocobase/pull/7703)) by @cgyrock

### 🐛 修复

- **[client]**

  - 修复弹窗内 iframe 区块联动规则失效问题 ([#7694](https://github.com/nocobase/nocobase/pull/7694)) by @katherinehhh
  - 修复操作面板中的扫描二维码无法配置联动规则 ([#7693](https://github.com/nocobase/nocobase/pull/7693)) by @katherinehhh
- **[database]** 跳过 MySQL JSON 列的默认值同步处理 ([#7696](https://github.com/nocobase/nocobase/pull/7696)) by @2013xile
- **[工作流]** 修复在服务拆分模式下，工作流内存等待队列处理不当导致部分工作流不执行的问题 ([#7692](https://github.com/nocobase/nocobase/pull/7692)) by @mytharcher
