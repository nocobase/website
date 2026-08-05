### 🎉 新特性

- **[client-v2]** 支持将独立设置应用配置为默认应用入口。 ([#10267](https://github.com/nocobase/nocobase/pull/10267)) by @katherinehhh

- **[AI 员工]**
  - 现在可以在 AI 员工设置页面为员工分配插件提供的技能。 ([#10237](https://github.com/nocobase/nocobase/pull/10237)) by @cgyrock

  - 新增按 Portal 隔离的 AI 会话和未读数。 ([#10266](https://github.com/nocobase/nocobase/pull/10266)) by @cgyrock

- **[Portal 管理]** 更新初始化默认行为：非 latest 安装默认使用新版客户端入口，并创建默认的 AI、admin 和 mobile 门户；CLI 现在支持保存和更新客户端入口模式。 ([#10281](https://github.com/nocobase/nocobase/pull/10281)) by @chenos

### 🚀 优化

- **[操作：批量更新]** v2 更新记录和批量更新操作支持配置提交成功后的提示、关闭和跳转行为。 ([#10278](https://github.com/nocobase/nocobase/pull/10278)) by @katherinehhh

- **[操作：导出记录]** v2 导入和导出按钮的字段配置支持检索。 ([#10261](https://github.com/nocobase/nocobase/pull/10261)) by @katherinehhh

- **[操作：导出记录 Pro]** v2 导入 Pro 和导出 Pro 按钮的字段配置支持检索。 by @katherinehhh

### 🐛 修复

- **[client-v2]**
  - 修复工作流审批配置弹窗缺少内边距的问题 ([#10276](https://github.com/nocobase/nocobase/pull/10276)) by @zhangzhonghe

  - 修复 v2 JS 列事件流触发条件中缺少“当前记录”变量的问题。 ([#10279](https://github.com/nocobase/nocobase/pull/10279)) by @katherinehhh

  - 应用升级期间不再显示维护弹窗和重试按钮 ([#10250](https://github.com/nocobase/nocobase/pull/10250)) by @zhangzhonghe

  - 修复表格长内容撑宽列且无法自动换行的问题 ([#10259](https://github.com/nocobase/nocobase/pull/10259)) by @zhangzhonghe

- **[database]** 修复 MSSQL 中筛选多值关系并按主集合字段排序分页时查询报错的问题 ([#10224](https://github.com/nocobase/nocobase/pull/10224)) by @cgyrock

- **[data-source-manager]** 修复外部数据源数据表同步后已移除的数据表仍残留在数据库管理器中的问题 ([#10209](https://github.com/nocobase/nocobase/pull/10209)) by @cgyrock

- **[本地化]** 修复打开带有 Lina AI 助手入口的本地化设置时发生的崩溃。 ([#10293](https://github.com/nocobase/nocobase/pull/10293)) by @cgyrock

- **[数据源管理]** 修复配置字段表格中 UI 类型可被直接清空的问题。 ([#10288](https://github.com/nocobase/nocobase/pull/10288)) by @hongboji

- **[备份管理器]** 修复 V2 备份恢复过程中可重复提交恢复请求的问题。 ([#10262](https://github.com/nocobase/nocobase/pull/10262)) by @katherinehhh

- **[文件管理器]** 修复已登录的成员用户无法加载系统 Logo 等共享附件的问题 ([#10268](https://github.com/nocobase/nocobase/pull/10268)) by @mytharcher

- **[AI 员工]** 修复 AI 员工入口未在非默认门户中显示的问题。 ([#10260](https://github.com/nocobase/nocobase/pull/10260)) by @cgyrock

- **[数据源：外部 MySQL]** 修复外部数据库数据源新增表后，之前已选择的表从运行时集合中消失的问题。 by @cgyrock

- **[AI: 知识库]** 修复 PGVector 知识库搜索占用无用 PostgreSQL 连接，以及不同向量表重复创建连接池的问题。 by @cgyrock

- **[数据源：外部 SQL Server]** 不适用——仅新增回归测试覆盖 by @cgyrock

- **[工作流：审批]**
  - 修复审批发起详情中子表格字段内容不显示的问题 by @zhangzhonghe

  - 修复审批意见使用 RunJS 时默认值不生效的问题 by @zhangzhonghe

  - 支持为审批意见配置默认值 by @zhangzhonghe

- **[应用监管器]** 修复创建应用时数据库名称、schema 或数据表前缀可使用非英文字母开头或非法字符的问题。 by @hongboji

- **[认证：LDAP]** 修复 LDAP 用户 DN 同时包含 UTF-8 转义和逗号等语法转义时无法登录的问题。 by @hongboji

