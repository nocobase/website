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

  - 修复错误： Can't resolve 'antd-mobile' 和 Can't resolve 'antd-mobile-icons' ([#7914](https://github.com/nocobase/nocobase/pull/7914)) by @zhangzhonghe

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

- **[模板打印]** 解析filter中变量 by @jiannx

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

  - mailMessages添加索引 by @jiannx

  - 给索引添加迁移脚本 by @jiannx

  - 修复outlook内敛图片和同步问题 by @jiannx

