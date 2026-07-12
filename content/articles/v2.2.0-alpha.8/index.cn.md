### 🎉 新特性

- **[公开表单]** 在 v1 公开表单中支持创建 v2 的表单，禁止创建 v1 的表单 ([#10045](https://github.com/nocobase/nocobase/pull/10045)) by @zhangzhonghe

### 🚀 优化

- **[工作流]** 工作流 v2 画布中暂不支持的节点现在会保留普通节点卡片操作，并将节点类型显示为暂不支持。 ([#10054](https://github.com/nocobase/nocobase/pull/10054)) by @mytharcher

- **[前端流引擎]** UI 搭建 api 支持多工作区。 ([#10072](https://github.com/nocobase/nocobase/pull/10072)) by @gchust

- **[AI 员工]** 改进 AI 员工工具设置、数据查询约束、关联字段查询，以及异常工具调用的诊断信息保留。 ([#10042](https://github.com/nocobase/nocobase/pull/10042)) by @cgyrock

- **[数据表: SQL]** 非用户可见变更；为已迁移插件补充 client-v2 单元测试覆盖。 ([#9967](https://github.com/nocobase/nocobase/pull/9967)) by @katherinehhh

### 🐛 修复

- **[client-v2]**
  - 修复 v2 工作流赋值编辑器在集合字段名为 nodeName 时产生的控制台报错。 ([#10067](https://github.com/nocobase/nocobase/pull/10067)) by @katherinehhh

  - 修复表格区块按钮联动规则翻页后可能存在状态污染。 ([#10038](https://github.com/nocobase/nocobase/pull/10038)) by @gchust

  - 修复工作流 v2 变量编辑器在触发器、筛选条件和字段赋值表单中的变量胶囊回显、禁用态和操作符标签显示不一致的问题。 ([#10041](https://github.com/nocobase/nocobase/pull/10041)) by @Molunerfinn

- **[app]**
  - 修复 Redis 缓存配置忽略专用缓存地址的问题 ([#10065](https://github.com/nocobase/nocobase/pull/10065)) by @2013xile

  - 修复 `CDN_BASE_URL` 为空时异步资源错误使用外部脚本地址的问题。 ([#10052](https://github.com/nocobase/nocobase/pull/10052)) by @Molunerfinn

- **[server]** 修复未启用多应用插件时自定义工作区不显示的问题 ([#10055](https://github.com/nocobase/nocobase/pull/10055)) by @2013xile

- **[flow-engine]**
  - 修复单值变量输入框选择变量后仍可继续输入额外文本的问题。 ([#10050](https://github.com/nocobase/nocobase/pull/10050)) by @katherinehhh

  - 修复 js bock 中覆盖 ctx.api 会造成 maximum call stack size exceeded 的问题。 ([#10051](https://github.com/nocobase/nocobase/pull/10051)) by @gchust

- **[工作流：延时节点]**
  - 修复延时节点的时长输入，并阻止保存小于最小值的数值。 ([#10056](https://github.com/nocobase/nocobase/pull/10056)) by @Molunerfinn

  - 阻止通过 API 为延时节点设置小于 1 的数值时长 ([#10057](https://github.com/nocobase/nocobase/pull/10057)) by @mytharcher

- **[工作流]**
  - 修复子流程在目标工作流执行记录创建前失败时父节点可能一直等待的问题 ([#10043](https://github.com/nocobase/nocobase/pull/10043)) by @mytharcher

  - 修复手动执行工作流时，请求有效但未启动执行会返回错误的问题。 ([#10049](https://github.com/nocobase/nocobase/pull/10049)) by @mytharcher

- **[数据源：主数据库]** 禁止保存无效的多对多关系字段配置 ([#10044](https://github.com/nocobase/nocobase/pull/10044)) by @2013xile

- **[前端流引擎]** 修复弹窗记录变量无法从外部 NocoBase 数据源解析的问题 ([#10048](https://github.com/nocobase/nocobase/pull/10048)) by @gchust

- **[表单草稿]** 修复表单草稿在连续刷新页面后丢失的问题 ([#10059](https://github.com/nocobase/nocobase/pull/10059)) by @gchust

- **[工作流：聚合查询节点]** 修复验证规则以支持筛选条件为空的情况 ([#10053](https://github.com/nocobase/nocobase/pull/10053)) by @mytharcher

- **[Redis worker ID 分配器]**
  - 修复未配置 Worker ID Redis 时单机模式无法启动的问题 by @2013xile

  - 改进 Redis Worker ID 隔离与故障诊断 by @2013xile

- **[plugin-service-platform]** 恢复服务平台中已授权插件的下载能力。 by @jiannx

- **[模板打印]** 修复模板打印权限校验，避免渲染当前角色不可查看的字段和数据范围外的记录。 by @jiannx

- **[工作流：审批]**
  - 修复 v2 审批子表格在详情中显示异常的问题 by @zhangzhonghe

  - 修复审批人界面默认显示空区块及固定审批人 ID 保存问题 by @zhangzhonghe

  - 修复审批子表格禁用后内部字段仍可编辑的问题 by @zhangzhonghe

  - 支持字符串类型的审批人 ID 添加并使用 by @mytharcher

  - 修复审批表单字段在打印预览中变成单列显示的问题 by @zhangzhonghe

  - 打开审批表单时关闭 Apply new 抽屉 by @zhangzhonghe

  - 修复审批任务卡片不显示审批数据的问题 by @zhangzhonghe

