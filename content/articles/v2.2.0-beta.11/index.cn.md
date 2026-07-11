### 🐛 修复

- **[app]** 修复 `CDN_BASE_URL` 为空时异步资源错误使用外部脚本地址的问题。 ([#10052](https://github.com/nocobase/nocobase/pull/10052)) by @Molunerfinn

- **[client-v2]**
  - 修复 v2 扫码录入在 Safari 中选择上传二维码图片时识别失败的问题。 ([#10011](https://github.com/nocobase/nocobase/pull/10011)) by @katherinehhh

  - 修复表格区块按钮联动规则翻页后可能存在状态污染。 ([#10038](https://github.com/nocobase/nocobase/pull/10038)) by @gchust

  - 修复 `__webpack_public_path__` 以不带尾随 `/` 的形式注入时客户端运行时静态资源基础路径归一化不一致的问题，并补充了该边界场景的测试覆盖。 ([#10040](https://github.com/nocobase/nocobase/pull/10040)) by @chenos

- **[flow-engine]** 修复 js bock 中覆盖 ctx.api 会造成 maximum call stack size exceeded 的问题。 ([#10051](https://github.com/nocobase/nocobase/pull/10051)) by @gchust

- **[工作流：延时节点]** 阻止通过 API 为延时节点设置小于 1 的数值时长 ([#10057](https://github.com/nocobase/nocobase/pull/10057)) by @mytharcher

- **[表单草稿]** 修复表单草稿在连续刷新页面后丢失的问题 ([#10059](https://github.com/nocobase/nocobase/pull/10059)) by @gchust

- **[工作流]** 修复子流程在目标工作流执行记录创建前失败时父节点可能一直等待的问题 ([#10043](https://github.com/nocobase/nocobase/pull/10043)) by @mytharcher

- **[前端流引擎]**
  - 修复使用本地 AI agent 配置联动规则可能触发渲染错误。 ([#10023](https://github.com/nocobase/nocobase/pull/10023)) by @gchust

  - 修复弹窗记录变量无法从外部 NocoBase 数据源解析的问题 ([#10048](https://github.com/nocobase/nocobase/pull/10048)) by @gchust

- **[数据源：主数据库]** 禁止保存无效的多对多关系字段配置 ([#10044](https://github.com/nocobase/nocobase/pull/10044)) by @2013xile

- **[数据表：树]** 修复树路径集合创建时将内部字段模型元数据传入集合配置的问题。 ([#10035](https://github.com/nocobase/nocobase/pull/10035)) by @cgyrock

- **[模板打印]** 修复模板打印权限校验，避免渲染当前角色不可查看的字段和数据范围外的记录。 by @jiannx

- **[工作流：审批]**
  - 支持字符串类型的审批人 ID 添加并使用 by @mytharcher

  - 修复审批表单字段在打印预览中变成单列显示的问题 by @zhangzhonghe

  - 修复审批子表格禁用后内部字段仍可编辑的问题 by @zhangzhonghe

