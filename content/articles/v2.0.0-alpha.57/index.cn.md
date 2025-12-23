### 🎉 新特性

- **[工作流]** 为工作流增加新的系统变量，包括“应用实例 ID”和“生成雪花 ID” ([#8223](https://github.com/nocobase/nocobase/pull/8223)) by @mytharcher

### 🚀 优化

- **[client]** 操作列的 column width 的改成 Select 的形式 ([#8218](https://github.com/nocobase/nocobase/pull/8218)) by @katherinehhh

- **[AI 员工]** 解决 AI 员工首次编辑后提交无响应的问题<br/>删除不必要的内置 AI 员工「Avery 表单助手」<br/>新增内置 AI 员工的默认初始角色权限<br/>优化 AI 员工的错误处理与输出结果<br/>新增 AI 访问弹窗（Modal）上下文变量的能力<br/>新增 AI 外部数据源的支持<br/>修复 AI 在处理大量数据时会话内容被错误裁剪的问题<br/> ([#8191](https://github.com/nocobase/nocobase/pull/8191)) by @heziqiang

- **[工作流]**
  - 为复制工作流的 API 增加来源工作流的实例参数 ([#8225](https://github.com/nocobase/nocobase/pull/8225)) by @mytharcher

  - 优化数据表事件“发生变动的字段”配置项的描述，以避免误解 ([#8216](https://github.com/nocobase/nocobase/pull/8216)) by @mytharcher

- **[异步任务管理器]** 在清理任务过程中增加异常捕获机制，以防止应用程序崩溃并提升稳定性 ([#8215](https://github.com/nocobase/nocobase/pull/8215)) by @mytharcher

- **[区块：操作面板]** 优化区块/操作/字段在配置状态下隐藏时的显示 ([#8174](https://github.com/nocobase/nocobase/pull/8174)) by @katherinehhh

- **[界面模板]** 新增界面模板插件，提供区块模板和弹窗模板复用的能力。 ([#8163](https://github.com/nocobase/nocobase/pull/8163)) by @gchust

- **[操作：导出记录 Pro]** 导入pro和导出pro 按钮支持权限控制 by @katherinehhh

- **[工作流：审批]** 在本轮流程执行结束时，更新 `approval.data` 为审批数据的最新版本，以匹配“最新”记录展示模式 by @mytharcher

### 🐛 修复

- **[flow-engine]**
  - 修复树表中添加子记录操作权限判断错误问题 ([#8240](https://github.com/nocobase/nocobase/pull/8240)) by @katherinehhh

  - 修复部分区块弹窗记录相关变量显示错误的问题。 ([#8060](https://github.com/nocobase/nocobase/pull/8060)) by @gchust

  - 修复操作或者标签页拖动后，新添加的操作和标签页不显示的问题。 ([#8224](https://github.com/nocobase/nocobase/pull/8224)) by @gchust

  - 修复外部数据源权限判断缺陷 ([#8221](https://github.com/nocobase/nocobase/pull/8221)) by @katherinehhh

  - 修复外部数据源操作有权限但被隐藏的问题 ([#8217](https://github.com/nocobase/nocobase/pull/8217)) by @katherinehhh

- **[client]**
  - 兼容联动规则为空的情况，防止出现报错 ([#8239](https://github.com/nocobase/nocobase/pull/8239)) by @zhangzhonghe

  - 修复无法移除表格区块操作列的问题。 ([#8230](https://github.com/nocobase/nocobase/pull/8230)) by @gchust

  - 修复预览运行时将 JSX 编译产物写回 stepParams，导致保存后源码被改写的问题。 ([#8171](https://github.com/nocobase/nocobase/pull/8171)) by @gchust

  - 修复 S3 Pro 附件上传报错，并优化文件预览 ([#8211](https://github.com/nocobase/nocobase/pull/8211)) by @katherinehhh

- **[cli]** license-kit 适配 DB_PASSWORD 为空的情况 ([#8220](https://github.com/nocobase/nocobase/pull/8220)) by @jiannx

- **[database]** 修复主数据源与外部数据源之间日期字段查询结果不一致的问题 ([#8181](https://github.com/nocobase/nocobase/pull/8181)) by @cgyrock

- **[数据表字段：自动编码]** 修复运行 field-sequence 插件的 repair 命令时遇到当前环境不存在的 collection 时报错的问题 ([#8251](https://github.com/nocobase/nocobase/pull/8251)) by @cgyrock

- **[工作流：人工处理节点]** 修复取消已删除工作流的执行计划时报错的问题 ([#8258](https://github.com/nocobase/nocobase/pull/8258)) by @mytharcher

- **[界面模板]** 修复关系字段弹窗打开非关系字段弹窗模板报错的问题。 ([#8233](https://github.com/nocobase/nocobase/pull/8233)) by @gchust

- **[部门]** 修复聚合搜索无法定位用户的问题 ([#8222](https://github.com/nocobase/nocobase/pull/8222)) by @2013xile

- **[数据表字段：多对多 (数组)]** 修复目标键类型为 Snowflake ID (53 bits) 时无法创建多对多（数组）字段的问题 ([#8226](https://github.com/nocobase/nocobase/pull/8226)) by @2013xile

- **[授权设置]** 修复授权插件显示异常 ([#8214](https://github.com/nocobase/nocobase/pull/8214)) by @jiannx

- **[操作：导入记录]** 修复导入操作遇到错误时，消息中的行索引总是显示为 1 的问题 ([#8244](https://github.com/nocobase/nocobase/pull/8244)) by @mytharcher

- **[模板打印]** 修复模板打印请求没有适配外部数据源的问题 by @katherinehhh

- **[工作流：审批]**
  - 修复重复回滚同一事务的问题 by @mytharcher

  - 修复审批通过时对关系字段创建了新数据的问题 by @mytharcher

  - 修复审批通过时对对多关系字段创建了新数据的问题 by @mytharcher

