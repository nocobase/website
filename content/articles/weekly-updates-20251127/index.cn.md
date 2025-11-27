汇总一周产品更新日志，最新发布可以[前往我们的博客查看](https://www.nocobase.com/cn/blog/timeline)。

**NocoBase 目前更新包括的版本更新包括三个分支：`main` ，`next`和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

`main` ：截止目前最稳定的版本，推荐安装此版本。

`next`：包含即将发布的新功能，经过初步测试的版本，可能存在部分已知或未知问题。主要面向测试用户，用于收集反馈和进一步优化功能。适合愿意提前体验新功能并提供反馈的测试用户。

`develop`：开发中的版本，包含最新的功能代码，可能尚未完成或存在较多不稳定因素，主要用于内部开发和快速迭代。适合对产品功能前沿发展感兴趣的技术用户，但可能存在较多问题或不完整功能，不建议在生产环境中使用。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.14](https://www.nocobase.com/cn/blog/v1.9.14)

*发布时间：2025-11-27*

### 🎉 新特性

- **[认证：OIDC]** 支持选项 当用户未登录时自动跳转到 SSO 登录页 by @heziqiang

### 🚀 优化

- **[client]** 对消息内容的变量使用三重括号，以免变量被 Handlerbars 转义 ([#7972](https://github.com/nocobase/nocobase/pull/7972)) by @mytharcher
- **[数据表字段：Markdown(Vditor)]** 调整 Vditor 全屏时内容宽度 ([#7974](https://github.com/nocobase/nocobase/pull/7974)) by @katherinehhh

### 🐛 修复

- **[database]** 修复：移除 time 字段转换中的 UTC 处理，避免因时区导致的纯时间值偏移 ([#7812](https://github.com/nocobase/nocobase/pull/7812)) by @ChimingLiu
- **[client]** 修复 下拉列表组件在非对象值回显时没有正确显示 label 问题 ([#7975](https://github.com/nocobase/nocobase/pull/7975)) by @katherinehhh
- **[工作流]**

  - 修复停止服务前，已创建的执行计划未发送到队列的问题 ([#7981](https://github.com/nocobase/nocobase/pull/7981)) by @mytharcher
  - 修复点击默认进入的待办列表中的任务跳转到错误页面的问题 ([#7983](https://github.com/nocobase/nocobase/pull/7983)) by @mytharcher
  - 修复部分工作流待办菜单不显示的问题 ([#7980](https://github.com/nocobase/nocobase/pull/7980)) by @mytharcher
  - 修复由于 provider 误用导致待办总数不展示的问题 ([#7968](https://github.com/nocobase/nocobase/pull/7968)) by @mytharcher
- **[工作流：人工处理节点]** 修复人工待办任务统计数字不对的问题 ([#7984](https://github.com/nocobase/nocobase/pull/7984)) by @mytharcher
- **[数据可视化]**

  - 外部数据源表的筛选字段的配置项不能显示特有属性 ([#7982](https://github.com/nocobase/nocobase/pull/7982)) by @2013xile
  - 解决图表数据查询不支持 ACL 数据范围的问题 ([#7915](https://github.com/nocobase/nocobase/pull/7915)) by @2013xile
- **[数据源管理]** 修复外部数据源修改密码后系统内无法更新密码的问题 ([#7977](https://github.com/nocobase/nocobase/pull/7977)) by @cgyrock
- **[操作：导入记录]** 修复树表导入数据报错问题 ([#7976](https://github.com/nocobase/nocobase/pull/7976)) by @cgyrock

### [v1.9.13](https://www.nocobase.com/cn/blog/v1.9.13)

*发布时间：2025-11-25*

### 🐛 修复

- **[client]** 修复使用 Iframe 时，导致路由异常的问题 ([#7957](https://github.com/nocobase/nocobase/pull/7957)) by @zhangzhonghe

### [v1.9.12](https://www.nocobase.com/cn/blog/v1.9.12)

*发布时间：2025-11-24*

### 🚀 优化

- **[client]** 为更新记录和删除记录操作按钮添加加载状态，以避免重复请求 ([#7964](https://github.com/nocobase/nocobase/pull/7964)) by @mytharcher
- **[异步任务管理器]** 优化异步任务的错误信息，任务失败时将明确提示具体的错误原因 ([#7796](https://github.com/nocobase/nocobase/pull/7796)) by @mytharcher
- **[操作：导入记录 Pro]** 优化异步任务的错误信息，任务失败时将明确提示具体的错误原因 by @mytharcher
- **[工作流：审批]**

  - 修复审批人选择组件，仅允许用户表的主外键可选 by @mytharcher
  - 减少打开审批弹窗时加载的关联数据，以提供更好的性能表现 by @mytharcher
  - 在手动执行（或子流程调用）时，同时支持传入整行数据或仅主键，避免触发器数据中的数据一致性问题 by @mytharcher

### 🐛 修复

- **[异步任务管理器]** 为 `asyncTasks` 数据表增加迁移规则，避免异步任务记录被迁移 ([#7950](https://github.com/nocobase/nocobase/pull/7950)) by @mytharcher
- **[工作流：审批]** 修复语言文件 by @mytharcher

### [v1.9.11](https://www.nocobase.com/cn/blog/v1.9.11)

*发布时间：2025-11-24*

### 🐛 修复

- **[client]** 修复外部数据源配置 belongsTo 字段时，field interface 显示为 many to one 而非 one to one 的问题 ([#7936](https://github.com/nocobase/nocobase/pull/7936)) by @cgyrock
- **[工作流]** 修复了更新待办数量时意外导致填写中的表单状态被重置的问题 ([#7937](https://github.com/nocobase/nocobase/pull/7937)) by @mytharcher
- **[数据表字段：多对多 (数组)]** 修复多对多（数组）字段在新增/修改关联数据时的异常行为 ([#7926](https://github.com/nocobase/nocobase/pull/7926)) by @cgyrock

### [v1.9.10](https://www.nocobase.com/cn/blog/v1.9.10)

*发布时间：2025-11-20*

### 🚀 优化

- **[权限控制]** 缩小 member 角色的默认权限 ([#7921](https://github.com/nocobase/nocobase/pull/7921)) by @2013xile
- **[数据可视化]** 为插件界面添加了俄语支持。 ([#7676](https://github.com/nocobase/nocobase/pull/7676)) by @sembaev-a-a
- **[工作流：Webhook 触发器]** 为响应节点增加图标 by @mytharcher

### 🐛 修复

- **[client]** 修复错误： Can't resolve 'antd-mobile' 和 Can't resolve 'antd-mobile-icons' ([#7914](https://github.com/nocobase/nocobase/pull/7914)) by @zhangzhonghe
- **[权限控制]** 关系字段关联操作支持数据范围限制 ([#7919](https://github.com/nocobase/nocobase/pull/7919)) by @2013xile
- **[数据源：主数据库]** 修复增加一对多字段后在重启应用前无法选择外键字段的问题 ([#7907](https://github.com/nocobase/nocobase/pull/7907)) by @cgyrock

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.17](https://www.nocobase.com/cn/blog/v1.9.0-beta.17)

*发布时间：2025-11-21*

### 🚀 优化

- **[database]** 对 MariaDB 连接实例增加 `multipleStatements` 选项，以支持一次查询中调用多条语句 ([#7781](https://github.com/nocobase/nocobase/pull/7781)) by @mytharcher
- **[权限控制]**

  - 缩小 member 角色的默认权限 ([#7921](https://github.com/nocobase/nocobase/pull/7921)) by @2013xile
  - 优化关系字段关联操作的权限控制逻辑 ([#7800](https://github.com/nocobase/nocobase/pull/7800)) by @2013xile
- **[数据可视化]** 为插件界面添加了俄语支持。 ([#7676](https://github.com/nocobase/nocobase/pull/7676)) by @sembaev-a-a
- **[工作流]** 支持工作流中的数据区块使用一致的详情区块配置菜单 ([#7771](https://github.com/nocobase/nocobase/pull/7771)) by @mytharcher
- **[工作流：Webhook 触发器]** 为响应节点增加图标 by @mytharcher
- **[工作流：JavaScript 节点]** 修复传递到执行环境中的上层函数导致的安全漏洞，避免通过利用漏洞访问上层执行环境的问题 by @mytharcher
- **[认证：OIDC]** 增加请求超时时间 by @2013xile
- **[工作流：审批]** 在转签和加签时通知新的审批人 by @mytharcher

### 🐛 修复

- **[client]**

  - 修复外部数据源配置 belongsTo 字段时，field interface 显示为 many to one 而非 one to one 的问题 ([#7936](https://github.com/nocobase/nocobase/pull/7936)) by @cgyrock
  - 修复错误：Can't resolve 'antd-mobile' 和 Can't resolve 'antd-mobile-icons' ([#7914](https://github.com/nocobase/nocobase/pull/7914)) by @zhangzhonghe
  - 修复拖拽引用模板后再删除引用模板而导致的复制模板不显示的问题 ([#7847](https://github.com/nocobase/nocobase/pull/7847)) by @zhangzhonghe
  - 修复审批表单的联动规则不生效的问题 ([#7858](https://github.com/nocobase/nocobase/pull/7858)) by @zhangzhonghe
  - 修复详情区块简单分页出现空数据下一页的问题 ([#7784](https://github.com/nocobase/nocobase/pull/7784)) by @katherinehhh
  - 修复 “Maximum call stack size exceeded” ([#7780](https://github.com/nocobase/nocobase/pull/7780)) by @zhangzhonghe
- **[server]**

  - 修复服务拆分模式下未订阅无法发布队列消息的问题 ([#7875](https://github.com/nocobase/nocobase/pull/7875)) by @mytharcher
  - 使用应用名称隔离发布订阅的频道 ([#7762](https://github.com/nocobase/nocobase/pull/7762)) by @mytharcher
  - 修复消息队列在启用服务拆分模式后，工作进程发消息导致报错的问题 ([#7797](https://github.com/nocobase/nocobase/pull/7797)) by @mytharcher
- **[utils]** 为 intersect 策略增加对象类型支持 ([#7840](https://github.com/nocobase/nocobase/pull/7840)) by @chenos
- **[database]** 字段名为 snake_case 风格时，索引字段判断不正确的问题 ([#7776](https://github.com/nocobase/nocobase/pull/7776)) by @2013xile
- **[数据表字段：多对多 (数组)]** 修复多对多（数组）字段在新增/修改关联数据时的异常行为 ([#7926](https://github.com/nocobase/nocobase/pull/7926)) by @cgyrock
- **[数据源：主数据库]** 修复增加一对多字段后在重启应用前无法选择外键字段的问题 ([#7907](https://github.com/nocobase/nocobase/pull/7907)) by @cgyrock
- **[工作流]**

  - 修复了更新待办数量时意外导致填写中的表单状态被重置的问题 ([#7937](https://github.com/nocobase/nocobase/pull/7937)) by @mytharcher
  - 使用底层事件队列代替共享后台任务队列，以避免共享队列在服务拆分模式下会被错误消费的问题 ([#7871](https://github.com/nocobase/nocobase/pull/7871)) by @mytharcher
  - 修复服务拆分模式下，工作流插件不处于服务模式时仍然消费队列的问题 ([#7820](https://github.com/nocobase/nocobase/pull/7820)) by @mytharcher
  - 修复监听不存在的外部数据源事件产生的报错 ([#7855](https://github.com/nocobase/nocobase/pull/7855)) by @mytharcher
  - 修复在服务拆分模式下，手动执行带中断节点的工作流一直等待的问题 ([#7767](https://github.com/nocobase/nocobase/pull/7767)) by @mytharcher
  - 为工作流的日志增加 `workflowId` 的数据标识 ([#7789](https://github.com/nocobase/nocobase/pull/7789)) by @mytharcher
  - 修复了集群模式下工作流调度器无法正确识别空闲状态的问题，该问题可能导致插件未就绪就开始消费队列事件 ([#7768](https://github.com/nocobase/nocobase/pull/7768)) by @mytharcher
- **[权限控制]**

  - 关系字段关联操作支持数据范围限制 ([#7919](https://github.com/nocobase/nocobase/pull/7919)) by @2013xile
  - 关系字段关联操作 snippets 不生效的问题 ([#7876](https://github.com/nocobase/nocobase/pull/7876)) by @2013xile
- **[工作流：人工处理节点]** 修复翻译语言指向的命名空间，以正确的翻译内容 ([#7877](https://github.com/nocobase/nocobase/pull/7877)) by @mytharcher
- **[用户]** 字段名为 snake_case 风格时，索引字段重置不正确的问题 ([#7785](https://github.com/nocobase/nocobase/pull/7785)) by @2013xile
- **[移动端（已废弃）]** 修复移动端的日期字段默认值弹窗无法选中日期的问题 ([#7783](https://github.com/nocobase/nocobase/pull/7783)) by @zhangzhonghe
- **[工作流：自定义变量节点]** 修复变量节点缺失 config 时报错的问题 by @mytharcher
- **[工作流：自定义操作事件]** 修复监听不存在的外部数据源事件产生的报错 by @mytharcher
- **[模板打印]** 解析 filter 中变量 by @jiannx
- **[数据可视化：EChrats]** 修复 Echarts 选项配置 Label type 不生效的问题 by @heziqiang
- **[工作流：审批]**

  - 修复待办中心审批列表卡片上的日期格式，展示完整的日期和时间 by @mytharcher
  - 修复通知渠道分页数量太小加载不全的问题 by @mytharcher
  - 修复提交审批处理时查询审批记录列表的性能问题 by @mytharcher
  - 修复重查关系数据时未屏蔽主表字段的问题 by @mytharcher
  - 修复由于多个审批人并发处理审批时的竞态导致的节点重复执行的问题 by @mytharcher
  - 并行分支中不再支持创建审批节点，避免流程状态导致的问题 by @mytharcher
  - 修复审批表单的联动规则不生效的问题 by @zhangzhonghe
  - 修复复制审批工作流时报错的问题 by @mytharcher
- **[邮件管理]**

  - 添加同步日志 by @jiannx
  - 没有时间戳的情况下同步微软邮件已读状态 by @jiannx
  - mailMessages 添加索引 by @jiannx
  - 给索引添加迁移脚本 by @jiannx
  - 修复 Outlook 内敛图片和同步问题 by @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.47](https://www.nocobase.com/cn/blog/v2.0.0-alpha.47)

*发布时间：2025-11-26*

### 🚀 优化

- **[client]**

  - 支持在图表查询初始时选择筛选字段 ([#7933](https://github.com/nocobase/nocobase/pull/7933)) by @heziqiang
  - 对消息内容的变量使用三重括号，以免变量被 Handlerbars 转义 ([#7972](https://github.com/nocobase/nocobase/pull/7972)) by @mytharcher
  - 为更新记录和删除记录操作按钮添加加载状态，以避免重复请求 ([#7964](https://github.com/nocobase/nocobase/pull/7964)) by @mytharcher
- **[数据表字段：Markdown(Vditor)]** 调整 Vditor 全屏时内容宽度 ([#7974](https://github.com/nocobase/nocobase/pull/7974)) by @katherinehhh

### 🐛 修复

- **[client]**

  - 修复非 id 关系字段弹窗详情区块打开报错。 ([#7973](https://github.com/nocobase/nocobase/pull/7973)) by @gchust
  - 修复非 id 关系字段弹窗中关系数据加载错误的问题。 ([#7970](https://github.com/nocobase/nocobase/pull/7970)) by @gchust
  - 修复使用 Iframe 时，导致路由异常的问题 ([#7957](https://github.com/nocobase/nocobase/pull/7957)) by @zhangzhonghe
  - 修复数字字段格式化精度设置无效的问题 ([#7967](https://github.com/nocobase/nocobase/pull/7967)) by @katherinehhh
  - 修复新建 2.0 页面的类型不正确的问题 ([#7945](https://github.com/nocobase/nocobase/pull/7945)) by @zhangzhonghe
  - 修复点击筛选重置按钮时筛选值未清空的问题 ([#7966](https://github.com/nocobase/nocobase/pull/7966)) by @zhangzhonghe
- **[工作流]** 修复由于 provider 误用导致待办总数不展示的问题 ([#7968](https://github.com/nocobase/nocobase/pull/7968)) by @mytharcher
- **[数据可视化]** 解决图表数据查询不支持 ACL 数据范围的问题 ([#7915](https://github.com/nocobase/nocobase/pull/7915)) by @2013xile
- **[区块：引用]** 修复引用区块会将被引用区块从原始页面中移除的问题。 ([#7969](https://github.com/nocobase/nocobase/pull/7969)) by @gchust
- **[AI 员工]** 修复AI员工生成 SQL 异常输出的问题 ([#7956](https://github.com/nocobase/nocobase/pull/7956)) by @heziqiang
- **[模板打印]** 修复表格行中模板打印操作添加模板失败问题 by @katherinehhh

### [v2.0.0-alpha.46](https://www.nocobase.com/cn/blog/v2.0.0-alpha.46)

*发布时间：2025-11-24*

### 🚀 优化

- **[flow-engine]** 支持动态切换 flow model 类型 ([#7952](https://github.com/nocobase/nocobase/pull/7952)) by @gchust
- **[AI 员工]** AI 员工插件添加 upgrade 钩子函数 ([#7951](https://github.com/nocobase/nocobase/pull/7951)) by @heziqiang
- **[异步任务管理器]** 优化异步任务的错误信息，任务失败时将明确提示具体的错误原因 ([#7796](https://github.com/nocobase/nocobase/pull/7796)) by @mytharcher
- **[工作流：审批]**

  - 在手动执行（或子流程调用）时，同时支持传入整行数据或仅主键，避免触发器数据中的数据一致性问题 by @mytharcher
  - 减少打开审批弹窗时加载的关联数据，以提供更好的性能表现 by @mytharcher
  - 修复审批人选择组件，仅允许用户表的主外键可选 by @mytharcher

### 🐛 修复

- **[client]** 文本字段在详情区块中超出内容宽度时应默认换行 ([#7955](https://github.com/nocobase/nocobase/pull/7955)) by @katherinehhh
- **[异步任务管理器]** 为 `asyncTasks` 数据表增加迁移规则，避免异步任务记录被迁移 ([#7950](https://github.com/nocobase/nocobase/pull/7950)) by @mytharcher
- **[文件管理器]** 修复表单附件字段上传未按设置使用指定文件存储器的问题 ([#7947](https://github.com/nocobase/nocobase/pull/7947)) by @katherinehhh
- **[工作流：审批]** 修复语言文件 by @mytharcher

### [v2.0.0-alpha.45](https://www.nocobase.com/cn/blog/v2.0.0-alpha.45)

*发布时间：2025-11-21*

### 🎉 新特性

- **[client]** 支持表格列字段开启排序 ([#7900](https://github.com/nocobase/nocobase/pull/7900)) by @katherinehhh
- **[工作流]** 新增“多条件分支”节点，提供类似 `switch` / `case` 的控制流程 ([#7878](https://github.com/nocobase/nocobase/pull/7878)) by @mytharcher

### 🐛 修复

- **[client]** 修复多级联选择器清空数据时报错的问题 ([#7943](https://github.com/nocobase/nocobase/pull/7943)) by @katherinehhh
- **[数据可视化]** 修复图表配置保存后区块没有更新的问题 ([#7920](https://github.com/nocobase/nocobase/pull/7920)) by @heziqiang
- **[模板打印]** 修复详情区块模板打印按钮报错问题 by @katherinehhh

### [v2.0.0-alpha.44](https://www.nocobase.com/cn/blog/v2.0.0-alpha.44)

*发布时间：2025-11-21*

### 🎉 新特性

- **[client]**

  - 为关系字段下拉选择器增加快捷新增能力 ([#7887](https://github.com/nocobase/nocobase/pull/7887)) by @katherinehhh
  - 支持树表关系字段使用级联选择器 ([#7846](https://github.com/nocobase/nocobase/pull/7846)) by @katherinehhh
- **[遥测]** 新增插件：遥测，基于 OpenTelemetry 的应用遥测插件，内置 CPU、内存、HTTP 请求等指标，并支持通过 HTTP 导出 by @2013xile

### 🚀 优化

- **[telemetry]** 支持控制需要上报的指标 ([#7938](https://github.com/nocobase/nocobase/pull/7938)) by @2013xile
- **[异步任务管理器]** 在子应用中执行异步任务时，异步进程只启动对应的子应用 ([#7927](https://github.com/nocobase/nocobase/pull/7927)) by @2013xile

### 🐛 修复

- **[client]**

  - 修复树表按钮显示在非树表区块中的问题 ([#7931](https://github.com/nocobase/nocobase/pull/7931)) by @katherinehhh
  - 修复外部数据源配置 belongsTo 字段时，field interface 显示为 many to one 而非 one to one 的问题 ([#7936](https://github.com/nocobase/nocobase/pull/7936)) by @cgyrock
- **[flow-engine]** 修复详情区块按钮的工具栏图标显示错位的问题 ([#7929](https://github.com/nocobase/nocobase/pull/7929)) by @zhangzhonghe
- **[工作流]** 修复了更新待办数量时意外导致填写中的表单状态被重置的问题 ([#7937](https://github.com/nocobase/nocobase/pull/7937)) by @mytharcher
- **[数据表字段：多对多 (数组)]** 修复多对多（数组）字段在新增/修改关联数据时的异常行为 ([#7926](https://github.com/nocobase/nocobase/pull/7926)) by @cgyrock
- **[操作：导入记录 Pro]** 修复导入 Pro 操作允许上传时修改导入选项不生效的问题 by @katherinehhh

### [v2.0.0-alpha.43](https://www.nocobase.com/cn/blog/v2.0.0-alpha.43)

*发布时间：2025-11-20*

### 🚀 优化

- **[数据可视化]** 为插件界面添加了俄语支持。 ([#7676](https://github.com/nocobase/nocobase/pull/7676)) by @sembaev-a-a
- **[权限控制]** 缩小 member 角色的默认权限 ([#7921](https://github.com/nocobase/nocobase/pull/7921)) by @2013xile
- **[工作流：Webhook 触发器]** 为响应节点增加图标 by @mytharcher

### 🐛 修复

- **[client]** 修复错误： Can't resolve 'antd-mobile' 和 Can't resolve 'antd-mobile-icons' ([#7914](https://github.com/nocobase/nocobase/pull/7914)) by @zhangzhonghe
- **[flow-engine]** 修复打开表格区块的快捷编辑表单报错的问题。 ([#7923](https://github.com/nocobase/nocobase/pull/7923)) by @gchust
- **[前端流引擎]** 修复记录变量解析问题：当同时使用记录本身和其字段时，始终返回完整记录。 ([#7917](https://github.com/nocobase/nocobase/pull/7917)) by @gchust
- **[数据源：主数据库]** 修复增加一对多字段后在重启应用前无法选择外键字段的问题 ([#7907](https://github.com/nocobase/nocobase/pull/7907)) by @cgyrock
- **[权限控制]** 关系字段关联操作支持数据范围限制 ([#7919](https://github.com/nocobase/nocobase/pull/7919)) by @2013xile
