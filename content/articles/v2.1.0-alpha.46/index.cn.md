### 🎉 新特性

- **[client-v2]** 新增 `TypedVariableInput` 组件，让邮件插件 v2 的 SMTP 端口和安全模式等字段既能填类型化常量，也能填 `{{ $env.X }}` 变量。 ([#9637](https://github.com/nocobase/nocobase/pull/9637)) by @Molunerfinn

- **[权限控制]** 将用户与角色权限设置页迁移到 v2。 ([#9619](https://github.com/nocobase/nocobase/pull/9619)) by @jiannx

### 🚀 优化

- **[server]** 新版客户端的访问路径由 `/v2/` 调整为 `/v/`。 ([#9674](https://github.com/nocobase/nocobase/pull/9674)) by @Molunerfinn

- **[ai]** 升级 `xlsx` 的版本以避免安全问题 ([#9675](https://github.com/nocobase/nocobase/pull/9675)) by @mytharcher

- **[client]** 增强部分 runjs 内置函数的自动补全。 ([#9481](https://github.com/nocobase/nocobase/pull/9481)) by @gchust

- **[cli]** 优化 CLI 更新策略 ([#9633](https://github.com/nocobase/nocobase/pull/9633)) by @chenos

- **[undefined]** 更新嵌入 NocoBase 插件的开源版使用说明 ([#9642](https://github.com/nocobase/nocobase/pull/9642)) by @zhangzhonghe
参考文档：[嵌入 NocoBase](https://docs.nocobase.com/cn/integration/embed/)
- **[部门]** 新增 v2 版部门设置页面，用于管理部门、部门成员和用户所属部门。 ([#9660](https://github.com/nocobase/nocobase/pull/9660)) by @jiannx

- **[认证：SAML 2.0]** SAML/CAS 登录跳转改为跟随新版客户端前缀。 by @Molunerfinn

- **[操作：导入记录 Pro]** 升级 `xlsx` 的版本以避免安全问题 by @mytharcher

- **[认证：OIDC]** OIDC 登录跳转改为跟随新版客户端前缀。 by @Molunerfinn

- **[工作流：审批]** 调整审批触发器和节点配置的验证规则，确保 UI 相关字段存在 by @mytharcher

### 🐛 修复

- **[client-v2]**
  - 修复 v2 表格自定义列宽设置为 0 时列不可见的问题。 ([#9689](https://github.com/nocobase/nocobase/pull/9689)) by @katherinehhh

  - 调整所有关系字段选择，限制最多两层的关联字段 ([#9454](https://github.com/nocobase/nocobase/pull/9454)) by @jiannx

  - 修复菜单联动规则保存报错的问题 ([#9666](https://github.com/nocobase/nocobase/pull/9666)) by @zhangzhonghe

  - 修复 v2 页面区块上方间距过大的问题 ([#9647](https://github.com/nocobase/nocobase/pull/9647)) by @zhangzhonghe

  - 修复批量更新操作字段赋值配置异常问题 ([#9640](https://github.com/nocobase/nocobase/pull/9640)) by @katherinehhh

- **[client]**
  - 修复引用表单模板中保存树形关系字段时报错的问题 ([#9643](https://github.com/nocobase/nocobase/pull/9643)) by @zhangzhonghe

  - 修复移动端关系字段选择数据后不显示的问题 ([#9665](https://github.com/nocobase/nocobase/pull/9665)) by @zhangzhonghe

  - 修复刷新页面后区块偶现误提示数据表已删除的问题 ([#9662](https://github.com/nocobase/nocobase/pull/9662)) by @zhangzhonghe

  - 修复表格行操作联动规则不正确的问题。 ([#9652](https://github.com/nocobase/nocobase/pull/9652)) by @gchust

  - 修复v2 表单切换字段显示状态后字段变为只读的问题 ([#9649](https://github.com/nocobase/nocobase/pull/9649)) by @katherinehhh

- **[flow-engine]**
  - 修复为子表单设置字段值时页面卡死的问题。 ([#9598](https://github.com/nocobase/nocobase/pull/9598)) by @gchust

  - 修复切换 UI 配置模式开关后弹窗内部存在旧 UI 数据的问题。 ([#9525](https://github.com/nocobase/nocobase/pull/9525)) by @gchust

  - 修复鼠标移到关联字段分组时字段搜索内容被清空的问题 ([#9646](https://github.com/nocobase/nocobase/pull/9646)) by @zhangzhonghe

- **[cli]** 修复 nginx 模板，使 `.mjs` 静态资源以 JavaScript MIME 类型返回。 ([#9626](https://github.com/nocobase/nocobase/pull/9626)) by @mytharcher

- **[database]** 修复导入纯数字密码值可能失败的问题 ([#9635](https://github.com/nocobase/nocobase/pull/9635)) by @2013xile

- **[数据表: SQL]**
  - 禁止 SQL 数据表访问敏感的 PostgreSQL 元数据 ([#9683](https://github.com/nocobase/nocobase/pull/9683)) by @2013xile

  - 禁止 SQL 数据表访问敏感的 PostgreSQL 元数据 ([#9683](https://github.com/nocobase/nocobase/pull/9683)) by @2013xile

- **[数据源管理]** 修复 v2 数据源管理中多空间字段的本地化显示问题。 ([#9690](https://github.com/nocobase/nocobase/pull/9690)) by @jiannx

- **[AI 员工]**
  - 隐藏前端提示中的原始 LLM 服务商错误。 ([#9678](https://github.com/nocobase/nocobase/pull/9678)) by @cgyrock

  - 工作流 AI 员工节点可使用默认模型 ([#9679](https://github.com/nocobase/nocobase/pull/9679)) by @cgyrock

  - 修复 AI 提供商 base URL 校验问题。 ([#9667](https://github.com/nocobase/nocobase/pull/9667)) by @cgyrock

  - 修复工作流 AI 员工节点调用`ctx.get`报错问题 ([#9661](https://github.com/nocobase/nocobase/pull/9661)) by @cgyrock

- **[操作：复制记录]** 修复复制操作提交失败未重置按钮状态的问题 ([#9676](https://github.com/nocobase/nocobase/pull/9676)) by @katherinehhh

- **[工作流：自定义操作事件]** 修复工作台操作面板按钮列表中缺少触发工作流操作的问题。 ([#9682](https://github.com/nocobase/nocobase/pull/9682)) by @katherinehhh

- **[日历]** 修复 v2 页面中日历事件未按配置的颜色字段显示颜色的问题。 ([#9677](https://github.com/nocobase/nocobase/pull/9677)) by @jiannx

- **[通知：站内信]** 修复站内消息频道时间戳过滤条件中的 SQL 注入风险。 ([#9630](https://github.com/nocobase/nocobase/pull/9630)) by @mytharcher

- **[前端流引擎]**
  - 修复弹窗标签页拖动调整位置不生效的问题。 ([#9602](https://github.com/nocobase/nocobase/pull/9602)) by @gchust

  - 修复复制模板后修改区块内容可能会影响原始区块内容的问题。 ([#9664](https://github.com/nocobase/nocobase/pull/9664)) by @gchust

- **[授权设置]** 修复许可证设置页面在 pkg 登录检查缓慢或不可达时长时间卡住的问题 ([#9650](https://github.com/nocobase/nocobase/pull/9650)) by @hongboji

- **[权限控制]** 修复联合角色作为默认角色时首次登录权限不完整的问题 ([#9632](https://github.com/nocobase/nocobase/pull/9632)) by @2013xile

- **[区块：甘特图]** 优化甘特图提示框位置，避免遮挡任务条，并统一任务名称在任务条内外的对齐方式 ([#9638](https://github.com/nocobase/nocobase/pull/9638)) by @jiannx

- **[工作流：JavaScript 节点]** 明确工作流 JavaScript 模块支持模式为非安全模式，不能作为权限边界 ([#9629](https://github.com/nocobase/nocobase/pull/9629)) by @mytharcher
参考文档：[工作流 JavaScript 节点](docs/docs/cn/workflow/nodes/javascript.md)
- **[文件管理器]** 修复本地文件存储路径校验，阻止不安全路径逃逸出配置的存储根目录。 ([#9628](https://github.com/nocobase/nocobase/pull/9628)) by @mytharcher

- **[密码策略]**
  - 修复登录失败时真实错误被 "argument #1 unsupported type undefined" 覆盖的问题（当底层错误没有状态码时）。 by @Molunerfinn

  - 修复密码策略校验纯数字密码值时可能失败的问题 by @2013xile

- **[数据源：REST API]** 修复数据源管理器 client-v2 类型声明不一致时，REST API 数据源插件声明构建失败的问题。 by @katherinehhh

