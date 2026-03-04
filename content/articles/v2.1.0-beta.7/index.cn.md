### 🎉 新特性

- **[AI 员工]** 更新 AI 对话用户提示词编辑 ([#8725](https://github.com/nocobase/nocobase/pull/8725)) by @heziqiang

### 🐛 修复

- **[client]**
  - 修复默认值组件中不渲染字段组件的问题 ([#8744](https://github.com/nocobase/nocobase/pull/8744)) by @mytharcher

  - 修复切换菜单是数据区块不刷新的问题。 ([#8735](https://github.com/nocobase/nocobase/pull/8735)) by @gchust

- **[flow-engine]** 修复 ctx.exit 无法终止用户定义的事件流执行的问题。 ([#8737](https://github.com/nocobase/nocobase/pull/8737)) by @gchust

- **[database]** 修复v2版本的字段自定义正则校验失败 ([#8729](https://github.com/nocobase/nocobase/pull/8729)) by @jiannx

- **[server]** 通过追加 hash 参数解决缓存未更新问题 ([#8730](https://github.com/nocobase/nocobase/pull/8730)) by @chenos

- **[权限控制]** 设置 ACL 元数据时使用的数据库实例不正确 ([#8747](https://github.com/nocobase/nocobase/pull/8747)) by @2013xile

- **[AI 员工]**
  - 修复启用知识库后和AI员工对话报错问题 ([#8746](https://github.com/nocobase/nocobase/pull/8746)) by @cgyrock

  - 修复AI数据源配置渲染异常 ([#8731](https://github.com/nocobase/nocobase/pull/8731)) by @cgyrock

- **[前端流引擎]** 修复 sql 删除报错 ([#8745](https://github.com/nocobase/nocobase/pull/8745)) by @chenos

- **[工作流：自定义操作事件]** 修复自定义操作事件作为子流程被调用时卡住的问题 ([#8738](https://github.com/nocobase/nocobase/pull/8738)) by @mytharcher

- **[工作流：审批]**
  - 修复由于节点信息被类型过滤后，查询节点结果未在审批界面显示的问题 by @mytharcher

  - 补全缺失的参数以避免提交审批时关系数据未被更新和处理 by @mytharcher

  - 修复手动执行审批工作流时的报错 by @mytharcher

  - 修复加签和转签后由于缺失 `dataAfter` 字段值导致的加载列表报错问题 by @mytharcher

  - 修复用户没有相关权限时关系字段不应该被创建或更新的权限问题 by @mytharcher

  - 在审批操作中过滤关系字段的值，以避免越权的数据操作 by @mytharcher

  - 修复基于 ACL 过滤 appends 参数的问题 by @mytharcher

