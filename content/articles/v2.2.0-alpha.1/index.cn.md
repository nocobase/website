### 🎉 新特性

- **[client-v2]** 支持文本字段使用扫码录入 ([#9599](https://github.com/nocobase/nocobase/pull/9599)) by @katherinehhh
- **[undefined]** 新增顶层 proxy 命令，支持 nginx 和 caddy ([#9721](https://github.com/nocobase/nocobase/pull/9721)) by @chenos
- **[异步任务管理器]** 为异步任务管理器顶部栏入口增加 v2 客户端支持。 ([#9707](https://github.com/nocobase/nocobase/pull/9707)) by @jiannx
- **[备份管理器]**

  - 为备份管理器插件新增 v2 客户端运行时支持。 ([#9712](https://github.com/nocobase/nocobase/pull/9712)) by @katherinehhh
  - 适配新增的版本管理插件 ([#9563](https://github.com/nocobase/nocobase/pull/9563)) by @cgyrock
- **[数据源：外部 NocoBase]** 新增数据源插件：外部 NocoBase by @2013xile
- **[版本管理]** 新增版本管理插件 by @cgyrock

### 🚀 优化

- **[client-v2]**

  - 支持在 v2 弹窗选择关系字段中关闭多选。 ([#9730](https://github.com/nocobase/nocobase/pull/9730)) by @katherinehhh
  - 优化 v2 页面中已配置外部数据源的区块在数据源被禁用后的渲染，避免渲染报错，并在 UI 配置状态下显示更清晰的占位提示。 ([#9699](https://github.com/nocobase/nocobase/pull/9699)) by @katherinehhh
- **[变量和密钥]** 环境变量（`$env`）现在在 v1 运行时能被基于 flow-engine 的变量选择器选取。 ([#9728](https://github.com/nocobase/nocobase/pull/9728)) by @Molunerfinn
- **[文件管理器]** 为文件管理器内部上传接口增加 `subPath` 支持。 ([#9731](https://github.com/nocobase/nocobase/pull/9731)) by @mytharcher
- **[数据源管理]** 新增数据源权限管理的 client-v2 实现，并统一相关权限选择抽屉的交互和布局。 ([#9706](https://github.com/nocobase/nocobase/pull/9706)) by @jiannx
- **[数据表：连接外部数据（FDW）]** 改进 V2 数据表模板与 V1 的一致性，包括 SQL 确认、外部数据库服务管理和模板表单顺序。 ([#9711](https://github.com/nocobase/nocobase/pull/9711)) by @katherinehhh
- **[模板打印]** 更新打印模板数据表元数据，用于版本控制备份分类。 by @cgyrock
- **[历史记录]** 更新记录历史数据表元数据，用于版本控制备份分类。 by @cgyrock
- **[工作流：审批]** 更新审批流数据表元数据，用于版本控制备份分类。 by @cgyrock
- **[审计日志]** 更新审计日志数据表元数据，用于版本控制备份分类。 by @cgyrock
- **[邮件管理]** 更新邮件管理数据表元数据，用于版本控制备份分类。 by @cgyrock
- **[应用监管器]** 更新应用监控数据表元数据，用于版本控制备份分类。 by @cgyrock

### 🐛 修复

- **[database]** 修复密码字段在批量更新时未正确加密的问题。 ([#9736](https://github.com/nocobase/nocobase/pull/9736)) by @mytharcher
- **[client]** 修复弹窗子表格行按钮通过联动规则隐藏时误隐藏整个子表格字段的问题 ([#9717](https://github.com/nocobase/nocobase/pull/9717)) by @katherinehhh
- **[client-v2]**

  - 修复 client v2 阅读态 JSON 字段对象值显示为空的问题。 ([#9714](https://github.com/nocobase/nocobase/pull/9714)) by @katherinehhh
  - 修复 V2 选项字段在本地化环境下错误翻译普通选项标签的问题。 ([#9708](https://github.com/nocobase/nocobase/pull/9708)) by @katherinehhh
- **[区块：地图]**

  - 修复 v1 谷歌地图区块中 DrawingManager 不可用的问题 ([#9735](https://github.com/nocobase/nocobase/pull/9735)) by @katherinehhh
  - 修复启用地图插件后，v2 数据源管理的添加字段菜单中缺少地图几何字段的问题。 ([#9715](https://github.com/nocobase/nocobase/pull/9715)) by @katherinehhh
- **[日历]** 修复 v2 日历区块详情弹窗中无法添加详情和编辑区块的问题 ([#9729](https://github.com/nocobase/nocobase/pull/9729)) by @jiannx
- **[数据源管理]**

  - 修复 v2 数据源字段配置抽屉修改标题字段后，关闭再打开仍显示旧标题字段的问题。 ([#9720](https://github.com/nocobase/nocobase/pull/9720)) by @katherinehhh
  - 改进 V2 数据源管理中数据表、字段、同步和加载数据表操作失败时的错误提示。 ([#9710](https://github.com/nocobase/nocobase/pull/9710)) by @katherinehhh
- **[AI 员工]**

  - 优化 AI 员工数据查询提示词，引导其先加载所需技能再使用查询工具。 ([#9725](https://github.com/nocobase/nocobase/pull/9725)) by @cgyrock
  - 修复 client-v2 图表设置中缺少 Dara 助手按钮的问题。 ([#9696](https://github.com/nocobase/nocobase/pull/9696)) by @cgyrock
- **[区块：列表]** 修复列表区块行按钮依赖当前记录时联动状态可能残留的问题。 ([#9716](https://github.com/nocobase/nocobase/pull/9716)) by @katherinehhh
- **[错误处理器]** 降低正常未登录且未携带 token 请求产生的错误日志噪声 ([#9718](https://github.com/nocobase/nocobase/pull/9718)) by @2013xile
- **[操作：导入记录 Pro]** 修复导入 XLSX 时 UTF-8 shared strings 跨流式分块导致文本乱码的问题。 by @mytharcher
- **[AI: 知识库]** 修复 S3 知识库文件链接缺少路径的问题。 by @cgyrock
- **[历史记录]** 修复外部数据源变更未记录历史的问题 by @2013xile
