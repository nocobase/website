### 🎉 新特性

- **[AI 员工]** 为 AI 员工新增可配置的自动或按需知识库召回，并按用户角色过滤可访问的知识库。 ([#10362](https://github.com/nocobase/nocobase/pull/10362)) by @cgyrock

- **[AI: 知识库]** 新增知识库管理的角色只读和读写权限，支持创建人所有权及只读管理视图。 by @cgyrock

- **[多空间]** v1 和 v2 的空间切换器及空间管理新增搜索功能 by @jiannx

- **[邮件管理]** 邮件同步现已改为可恢复的后台任务，提供状态历史和更安全的全量同步清理，并正确包含 Gmail 垃圾邮件和已删除邮件。 by @jiannx

### 🚀 优化

- **[钉钉]** 补齐钉钉客户端 v2 支持，包括 Stream 同步模式、通知配置和自动登录优化。 by @chenzhizdt

### 🐛 修复

- **[client-v2]**
  - 修复 v2 表格筛选器误报 DatePicker 组件缺失的问题。 ([#10392](https://github.com/nocobase/nocobase/pull/10392)) by @katherinehhh

  - 修复工作流设置中无法清空筛选条件并触发报错的问题。 ([#10388](https://github.com/nocobase/nocobase/pull/10388)) by @Molunerfinn

  - 修复关联表单值仅包含关联记录 ID 时关系记录选择器显示 `N/A` 的问题。 ([#10386](https://github.com/nocobase/nocobase/pull/10386)) by @cgyrock

  - 修复打开 v2 表格筛选器时控制台误报组件缺失的问题。 ([#10389](https://github.com/nocobase/nocobase/pull/10389)) by @katherinehhh

- **[app]** 为支持范围内的旧版浏览器补充现代 JavaScript API 运行时 Polyfill ([#10385](https://github.com/nocobase/nocobase/pull/10385)) by @mytharcher

- **[flow-engine]** 修复 RunJS 资源创建操作无法创建关联子表格记录的问题 ([#10355](https://github.com/nocobase/nocobase/pull/10355)) by @gchust

- **[undefined]** 修复重新加载外部数据库已选数据表后，自定义字段显示名被重置的问题 by @cgyrock

- **[数据源管理]** 修复提交外部数据库数据源或调整已选数据表后，自定义字段显示名被重置的问题 ([#10387](https://github.com/nocobase/nocobase/pull/10387)) by @cgyrock

- **[AI 员工]** 修复 AI 附件遮罩导致 V2 Import 无法拖拽上传文件的问题。 ([#10384](https://github.com/nocobase/nocobase/pull/10384)) by @katherinehhh

- **[数据源：外部 PostgreSQL]** 修复 client v2 编辑外部关系型数据源时未自动加载数据表的问题。 by @katherinehhh

- **[操作：导入记录 Pro]** 修复异步导入不遵守字段导入权限的问题 by @mytharcher

- **[操作：导出记录 Pro]** 修复启用导出 Pro 插件后使用复杂筛选条件时导出报错的问题 by @zhangzhonghe

- **[工作流：审批]**
  - 修复审批流配置可退回任意上级审批节点时，实际只能退回最近上一级的问题 by @mytharcher

  - 修复相关审批区块无法在 Client V2 数据详情页中加载的问题 by @mytharcher

- **[应用监管器]** 修复创建受监管应用时的 Kingbase 数据库连接问题 by @2013xile

- **[钉钉]** 修复切换钉钉账号后，内部免登仍然保留上一个用户会话的问题。 by @chenzhizdt

