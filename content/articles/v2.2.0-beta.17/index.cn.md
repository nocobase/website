### 🎉 新特性

- **[client-v2]** 为 V2 字段值编辑器新增 Date 变量，并支持非日期字段的格式化输出。 ([#10289](https://github.com/nocobase/nocobase/pull/10289)) by @katherinehhh

- **[AI 员工]**
  - 现在可以在 AI 员工设置页面为员工分配插件提供的技能。 ([#10237](https://github.com/nocobase/nocobase/pull/10237)) by @cgyrock

  - 支持从 LLM 服务 CLI 命令跳转到 UI，并在创建服务时预选提供商。 ([#10210](https://github.com/nocobase/nocobase/pull/10210)) by @cgyrock

- **[多空间]** 新增默认空间配置，新建用户会自动加入所选默认空间。 by @jiannx

- **[AI: 知识库]** 支持从 CLI 命令跳转到向量数据库创建和编辑 UI，并在新建时预选提供商。 by @cgyrock

### 🚀 优化

- **[undefined]** 明确 JavaScript Worker 的默认并发行为，以及需要配置并发上限的场景 ([#10317](https://github.com/nocobase/nocobase/pull/10317)) by @mytharcher
参考文档：[JavaScript 节点](https://docs.nocobase.com/cn/workflow/nodes/javascript)
- **[工作流：JavaScript 节点]** JavaScript 工作流节点现在会队列化异步 Worker 执行，并限制单进程 Worker 并发以降低资源峰值。 ([#10280](https://github.com/nocobase/nocobase/pull/10280)) by @mytharcher

- **[操作：导出记录]** v2 导入和导出按钮的字段配置支持检索。 ([#10261](https://github.com/nocobase/nocobase/pull/10261)) by @katherinehhh

- **[操作：批量更新]** v2 更新记录和批量更新操作支持配置提交成功后的提示、关闭和跳转行为。 ([#10278](https://github.com/nocobase/nocobase/pull/10278)) by @katherinehhh

- **[工作流：HTTP 请求节点]** 修复不稳定的测试用例 ([#10246](https://github.com/nocobase/nocobase/pull/10246)) by @mytharcher

- **[工作流]** 工作流创建和更新节点为字符串及文本字段赋值时，现已支持将文字与变量拼接使用 ([#10238](https://github.com/nocobase/nocobase/pull/10238)) by @mytharcher

- **[操作：导出记录 Pro]** v2 导入 Pro 和导出 Pro 按钮的字段配置支持检索。 by @katherinehhh

- **[AI: 知识库]** 统一向量数据库列表与其他设置表格的卡片样式 by @cgyrock

### 🐛 修复

- **[client-v2]**
  - 修复看板列快捷创建记录时未继承所选分组值的问题 ([#10321](https://github.com/nocobase/nocobase/pull/10321)) by @jiannx

  - 修复 v2 弹窗编辑子表格的新增和编辑弹窗中缺失或取值不正确的 `Current popup` 上级记录变量。 ([#10292](https://github.com/nocobase/nocobase/pull/10292)) by @katherinehhh

  - 修复子表格关系字段赋值时上级项变量解析到错误层级的问题。 ([#10249](https://github.com/nocobase/nocobase/pull/10249)) by @gchust

  - 修复移动端选择列表取消按钮语言不一致的问题 ([#10297](https://github.com/nocobase/nocobase/pull/10297)) by @zhangzhonghe

  - 修复 v2 JS 列事件流触发条件中缺少“当前记录”变量的问题。 ([#10279](https://github.com/nocobase/nocobase/pull/10279)) by @katherinehhh

- **[database]**
  - 修复应用重启后迁移包遗漏多对多中间表数据的问题 ([#10306](https://github.com/nocobase/nocobase/pull/10306)) by @cgyrock

  - 修复 MSSQL 中筛选多值关系并按主集合字段排序分页时查询报错的问题 ([#10224](https://github.com/nocobase/nocobase/pull/10224)) by @cgyrock

- **[data-source-manager]**
  - 修复从数据库同步字段后公式字段变为数字字段的问题 ([#10303](https://github.com/nocobase/nocobase/pull/10303)) by @2013xile

  - 修复外部数据源数据表同步后已移除的数据表仍残留在数据库管理器中的问题 ([#10209](https://github.com/nocobase/nocobase/pull/10209)) by @cgyrock

- **[auth]** 修复跨域部署中 API 请求偶发 `Invalid CSRF token` 错误的问题 ([#10245](https://github.com/nocobase/nocobase/pull/10245)) by @mytharcher

- **[区块：树]** 修复 Tree 区块搜索无匹配业务字段记录时仍显示占位节点的问题 ([#10323](https://github.com/nocobase/nocobase/pull/10323)) by @jiannx

- **[区块：甘特图]** 修复甘特图短任务条未使用记录自定义颜色的问题 ([#10322](https://github.com/nocobase/nocobase/pull/10322)) by @jiannx

- **[前端流引擎]**
  - 修复表单字段值变量解析不正确的问题 ([#10319](https://github.com/nocobase/nocobase/pull/10319)) by @gchust

  - 修复自定义非 Sequelize 数据源中弹窗记录变量和关联区块无法正确解析的问题 ([#10272](https://github.com/nocobase/nocobase/pull/10272)) by @gchust

- **[备份管理器]**
  - 修复 V2 备份恢复过程中可重复提交恢复请求的问题。 ([#10262](https://github.com/nocobase/nocobase/pull/10262)) by @katherinehhh

  - 修复异步导出任务触发重复自动备份的问题 ([#10300](https://github.com/nocobase/nocobase/pull/10300)) by @gchust

- **[数据源管理]** 修复配置字段表格中 UI 类型可被直接清空的问题。 ([#10288](https://github.com/nocobase/nocobase/pull/10288)) by @hongboji

- **[文件管理器]**
  - 修复跨域图片预览后，因浏览器缓存缺少 CORS 响应头导致文件下载失败的问题 ([#10313](https://github.com/nocobase/nocobase/pull/10313)) by @mytharcher
参考文档：[文件预览](https://github.com/nocobase/nocobase/blob/fix/file-manager-download-cors-cache/docs/docs/cn/file-manager/file-preview/index.md) / [阿里云 OSS](https://github.com/nocobase/nocobase/blob/fix/file-manager-download-cors-cache/docs/docs/cn/file-manager/storage/aliyun-oss.md)
  - 修复已登录的成员用户无法加载系统 Logo 等共享附件的问题 ([#10268](https://github.com/nocobase/nocobase/pull/10268)) by @mytharcher

- **[数据表字段：自动编码]** 修复数据迁移后多条记录共用最新创建时间时自动编号可能重复的问题 ([#10239](https://github.com/nocobase/nocobase/pull/10239)) by @mytharcher

- **[AI 员工]**
  - 修复 AI 插件 client-v2 设置页面中 Settings 标签未翻译的问题 ([#10234](https://github.com/nocobase/nocobase/pull/10234)) by @cgyrock

  - AI 员工操作现已支持在 v2 表单中通过联动规则控制显示和隐藏。 ([#10298](https://github.com/nocobase/nocobase/pull/10298)) by @jiannx

- **[UI 模板]** 修复表格区块在空筛选条件下切换页面返回后仍加载数据的问题 ([#9890](https://github.com/nocobase/nocobase/pull/9890)) by @zhangzhonghe

- **[本地化]** 修复打开带有 Lina AI 助手入口的本地化设置时发生的崩溃。 ([#10293](https://github.com/nocobase/nocobase/pull/10293)) by @cgyrock

- **[工作流]** 修复手动执行工作流时传入 `autoRevision=0` 仍可能创建新版本的问题。 ([#10243](https://github.com/nocobase/nocobase/pull/10243)) by @mytharcher

- **[工作流：JavaScript 节点]** 修复 JavaScript 工作流节点在脚本返回或异步工作流超时后 Worker 不退出的问题 ([#10241](https://github.com/nocobase/nocobase/pull/10241)) by @mytharcher

- **[数据源：外部 NocoBase]** 修复 AI 工作流无法读取外部 NocoBase 文件表和附件字段文件的问题 by @2013xile

- **[数据源：外部 SQL Server]** 不适用——仅新增回归测试覆盖 by @cgyrock

- **[数据源：外部 MySQL]** 修复外部数据库数据源新增表后，之前已选择的表从运行时集合中消失的问题。 by @cgyrock

- **[AI: 知识库]** 修复 PGVector 知识库搜索占用无用 PostgreSQL 连接，以及不同向量表重复创建连接池的问题。 by @cgyrock

- **[迁移管理]** 修复应用重启后的多对多中间表迁移数据问题，并将迁移规则归类为系统数据 by @cgyrock

- **[模板打印]**
  - 无 — 本 PR 记录修复目标，但不包含已发布的行为变更。 by @hongboji

  - 修复 DOCX 模板生成 PDF 时中英文之间出现非预期间距的问题。 by @jiannx

- **[工作流：审批]**
  - 修复审批页面不显示外部数据源字段的问题 by @zhangzhonghe

  - 修复审批发起详情中子表格字段内容不显示的问题 by @zhangzhonghe

  - 修复审批意见使用 RunJS 时默认值不生效的问题 by @zhangzhonghe

  - 修复审批表单中删除一对多关系记录后无法重新选择的问题 by @zhangzhonghe

  - 支持为审批意见配置默认值 by @zhangzhonghe

- **[应用监管器]** 修复创建应用时数据库名称、schema 或数据表前缀可使用非英文字母开头或非法字符的问题。 by @hongboji

- **[钉钉]** 修复在 v2 渠道表单中保存钉钉通知渠道时丢失所选认证器的问题 by @jiannx

- **[认证：LDAP]** 修复 LDAP 用户 DN 同时包含 UTF-8 转义和逗号等语法转义时无法登录的问题。 by @hongboji

