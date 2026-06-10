### 🎉 新特性

- **[undefined]** 新增顶层 proxy 命令，支持 nginx 和 caddy。 ([#9721](https://github.com/nocobase/nocobase/pull/9721)) by @chenos
- **[备份管理器]** 适配新增的版本管理插件。 ([#9563](https://github.com/nocobase/nocobase/pull/9563)) by @cgyrock
- **[版本管理]** 新增版本管理插件。 by @cgyrock

### 🚀 优化

- **[数据源管理]** 新增数据源权限管理的 client-v2 实现，并统一相关权限选择抽屉的交互和布局。 ([#9706](https://github.com/nocobase/nocobase/pull/9706)) by @jiannx
- **[数据表：连接外部数据（FDW）]** 改进 V2 数据表模板与 V1 的一致性，包括 SQL 确认、外部数据库服务管理和模板表单顺序。 ([#9711](https://github.com/nocobase/nocobase/pull/9711)) by @katherinehhh
- **[模板打印]** 更新打印模板数据表元数据，用于版本管理备份分类。 by @cgyrock
- **[历史记录]** 更新记录历史数据表元数据，用于版本管理备份分类。 by @cgyrock
- **[工作流：审批]** 更新审批流数据表元数据，用于版本管理备份分类。 by @cgyrock
- **[审计日志]** 更新审计日志数据表元数据，用于版本管理备份分类。 by @cgyrock
- **[邮件管理]** 更新邮件管理数据表元数据，用于版本管理备份分类。 by @cgyrock
- **[应用监管器]** 更新应用监控数据表元数据，用于版本管理备份分类。 by @cgyrock

### 🐛 修复

- **[client-v2]**

  - 修复 client-v2 详情视图中 JSON 字段对象值显示为空的问题。 ([#9714](https://github.com/nocobase/nocobase/pull/9714)) by @katherinehhh
  - 修复 V2 选项字段在本地化环境下错误翻译普通选项标签的问题。 ([#9708](https://github.com/nocobase/nocobase/pull/9708)) by @katherinehhh
- **[错误处理器]** 降低正常未登录且未携带 token 请求产生的错误日志噪声。 ([#9718](https://github.com/nocobase/nocobase/pull/9718)) by @2013xile
- **[区块：列表]** 修复列表区块行操作依赖当前记录时联动状态可能残留的问题。 ([#9716](https://github.com/nocobase/nocobase/pull/9716)) by @katherinehhh
- **[数据源管理]** 改进 V2 数据源管理中数据表、字段、同步和加载数据表操作失败时的错误提示。 ([#9710](https://github.com/nocobase/nocobase/pull/9710)) by @katherinehhh
- **[AI 员工]** 修复 client-v2 图表设置中缺少 Dara 助手按钮的问题。 ([#9696](https://github.com/nocobase/nocobase/pull/9696)) by @cgyrock
- **[AI: 知识库]** 修复 S3 知识库文件 URL 缺少路径的问题。 by @cgyrock
- **[操作：导入记录 Pro]** 修复导入 XLSX 文件时 UTF-8 共享字符串跨流式分块导致文本乱码的问题。 by @mytharcher
- **[历史记录]** 修复外部数据源变更未记录历史的问题。 by @2013xile
