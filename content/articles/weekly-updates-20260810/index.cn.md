汇总一周产品更新日志，最新发布可前往[我们的博客](https://www.nocobase.com/cn/blog/timeline)查看。

**NocoBase 目前更新包括三个分支：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

`main`：截至目前最稳定的版本，推荐安装此版本。

`next`：包含即将发布的新功能，经过初步测试的版本，可能存在部分已知或未知问题。主要面向测试用户，用于收集反馈和进一步优化功能。适合愿意提前体验新功能并提供反馈的测试用户。

`develop`：开发中的版本，包含最新的功能代码，可能尚未完成或存在较多不稳定因素，主要用于内部开发和快速迭代。适合对产品功能前沿发展感兴趣的技术用户，但可能存在较多问题或不完整功能，不建议在生产环境中使用。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### v2.1.37

*发布日期: 2026-08-08*

### 🎉 新特性

- **[client-v2]** 为 V2 字段值编辑器新增 Date 变量，并支持非日期字段的格式化输出。 ([#10289](https://github.com/nocobase/nocobase/pull/10289)) by @katherinehhh

### 🐛 修复

- **[client-v2]**

  - 修复 v2 弹窗编辑子表格的新增和编辑弹窗中缺失或取值不正确的 `Current popup` 上级记录变量。 ([#10292](https://github.com/nocobase/nocobase/pull/10292)) by @katherinehhh
  - 修复子表格关系字段赋值时上级项变量解析到错误层级的问题。 ([#10249](https://github.com/nocobase/nocobase/pull/10249)) by @gchust
  - 修复移动端选择列表取消按钮语言不一致的问题 ([#10297](https://github.com/nocobase/nocobase/pull/10297)) by @zhangzhonghe
- **[data-source-manager]** 修复从数据库同步字段后公式字段变为数字字段的问题 ([#10303](https://github.com/nocobase/nocobase/pull/10303)) by @2013xile
- **[database]** 修复应用重启后迁移包遗漏多对多中间表数据的问题 ([#10306](https://github.com/nocobase/nocobase/pull/10306)) by @cgyrock
- **[备份管理器]** 修复异步导出任务触发重复自动备份的问题 ([#10300](https://github.com/nocobase/nocobase/pull/10300)) by @gchust
- **[AI 员工]** AI 员工操作现已支持在 v2 表单中通过联动规则控制显示和隐藏。 ([#10298](https://github.com/nocobase/nocobase/pull/10298)) by @jiannx
- **[数据源：外部 NocoBase]** 修复 AI 工作流无法读取外部 NocoBase 文件表和附件字段文件的问题 by @2013xile
- **[迁移管理]** 修复应用重启后的多对多中间表迁移数据问题，并将迁移规则归类为系统数据 by @cgyrock
- **[工作流：审批]** 修复审批意见使用 RunJS 时默认值不生效的问题 by @zhangzhonghe
- **[应用监管器]** 修复创建应用时数据库名称、schema 或数据表前缀可使用非英文字母开头或非法字符的问题。 by @hongboji

### v2.1.36

*发布日期: 2026-08-05*

### 🐛 修复

- **[数据源管理]** 修复配置字段表格中 UI 类型可被直接清空的问题。 ([#10288](https://github.com/nocobase/nocobase/pull/10288)) by @hongboji
- **[认证：LDAP]** 修复 LDAP 用户 DN 同时包含 UTF-8 转义和逗号等语法转义时无法登录的问题。 by @hongboji

### v2.1.35

*发布日期: 2026-08-05*

### 🚀 优化

- **[工作流：HTTP 请求节点]** 修复不稳定的测试用例 ([#10246](https://github.com/nocobase/nocobase/pull/10246)) by @mytharcher
- **[操作：批量更新]** v2 更新记录和批量更新操作支持配置提交成功后的提示、关闭和跳转行为。 ([#10278](https://github.com/nocobase/nocobase/pull/10278)) by @katherinehhh
- **[操作：导出记录]** v2 导入和导出按钮的字段配置支持检索。 ([#10261](https://github.com/nocobase/nocobase/pull/10261)) by @katherinehhh
- **[操作：导出记录 Pro]** v2 导入 Pro 和导出 Pro 按钮的字段配置支持检索。 by @katherinehhh

### 🐛 修复

- **[client-v2]** 修复 v2 JS 列事件流触发条件中缺少“当前记录”变量的问题。 ([#10279](https://github.com/nocobase/nocobase/pull/10279)) by @katherinehhh
- **[database]** 修复 MSSQL 中筛选多值关系并按主集合字段排序分页时查询报错的问题 ([#10224](https://github.com/nocobase/nocobase/pull/10224)) by @cgyrock
- **[data-source-manager]** 修复外部数据源数据表同步后已移除的数据表仍残留在数据库管理器中的问题 ([#10209](https://github.com/nocobase/nocobase/pull/10209)) by @cgyrock
- **[工作流：JavaScript 节点]** 修复 JavaScript 工作流节点在脚本返回或异步工作流超时后 Worker 不退出的问题 ([#10241](https://github.com/nocobase/nocobase/pull/10241)) by @mytharcher
- **[数据表字段：自动编码]** 修复数据迁移后多条记录共用最新创建时间时自动编号可能重复的问题 ([#10239](https://github.com/nocobase/nocobase/pull/10239)) by @mytharcher
- **[数据源：外部 SQL Server]** 不适用——仅新增回归测试覆盖 by @cgyrock
- **[AI: 知识库]** 修复 PGVector 知识库搜索占用无用 PostgreSQL 连接，以及不同向量表重复创建连接池的问题。 by @cgyrock
- **[数据源：外部 MySQL]** 修复外部数据库数据源新增表后，之前已选择的表从运行时集合中消失的问题。 by @cgyrock
- **[工作流：审批]**

  - 修复审批发起详情中子表格字段内容不显示的问题 by @zhangzhonghe
  - 支持为审批意见配置默认值 by @zhangzhonghe

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### v3.0.0-alpha.7

*发布日期: 2026-08-06*

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

### v3.0.0-alpha.6

*发布日期: 2026-08-03*

### 🚀 优化

- **[工作流：HTTP 请求节点]** 修复不稳定的测试用例 ([#10246](https://github.com/nocobase/nocobase/pull/10246)) by @mytharcher

### 🐛 修复

- **[auth]** 修复跨域部署中 API 请求偶发 `Invalid CSRF token` 错误的问题 ([#10245](https://github.com/nocobase/nocobase/pull/10245)) by @mytharcher
- **[Portal 管理]** 修复 Portal 卡片的设备图标和长标题显示问题 ([#10248](https://github.com/nocobase/nocobase/pull/10248)) by @zhangzhonghe
- **[数据表字段：自动编码]** 修复数据迁移后多条记录共用最新创建时间时自动编号可能重复的问题 ([#10239](https://github.com/nocobase/nocobase/pull/10239)) by @mytharcher
- **[工作流：JavaScript 节点]** 修复 JavaScript 工作流节点在脚本返回或异步工作流超时后 Worker 不退出的问题 ([#10241](https://github.com/nocobase/nocobase/pull/10241)) by @mytharcher
