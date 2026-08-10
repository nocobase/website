### 🎉 新特性

- **[client-v2]** 为 V2 字段值编辑器新增 Date 变量，并支持非日期字段的格式化输出。 ([#10289](https://github.com/nocobase/nocobase/pull/10289)) by @katherinehhh

- **[Portal 管理]** 用户无权限访问 Portal 时显示无权访问提示 ([#10275](https://github.com/nocobase/nocobase/pull/10275)) by @zhangzhonghe

- **[连接编码 agent]** 在 AI Portal 卡片上一键复制接入说明，把门户交给编码 agent by @Albert-mah

### 🚀 优化

- **[undefined]**
  - 明确 JavaScript Worker 的默认并发行为，以及需要配置并发上限的场景 ([#10317](https://github.com/nocobase/nocobase/pull/10317)) by @mytharcher
参考文档：[JavaScript 节点](https://docs.nocobase.com/cn/workflow/nodes/javascript)
  - 新增大模型选择指南，介绍测评维度，并通过彩色表格对比模型搭建结果。 ([#10295](https://github.com/nocobase/nocobase/pull/10295)) by @Charls-Wu
参考文档：[大模型选择](https://docs.nocobase.com/cn/ai-builder/ai-portal/model-selection/)
- **[cli]** 修复 nb portal push 提交作者身份不正确的问题 ([#10315](https://github.com/nocobase/nocobase/pull/10315)) by @gchust

- **[Portal 管理]**
  - 提升 Portal 访问权限检查效率 ([#10302](https://github.com/nocobase/nocobase/pull/10302)) by @zhangzhonghe

  - 无法直接配置门户访问权限时显示简洁占位符 ([#10301](https://github.com/nocobase/nocobase/pull/10301)) by @zhangzhonghe

- **[工作流：JavaScript 节点]** JavaScript 工作流节点现在会队列化异步 Worker 执行，并限制单进程 Worker 并发以降低资源峰值。 ([#10280](https://github.com/nocobase/nocobase/pull/10280)) by @mytharcher

- **[验证]** 为验证设置列表添加刷新按钮 ([#10299](https://github.com/nocobase/nocobase/pull/10299)) by @zhangzhonghe

### 🐛 修复

- **[client-v2]**
  - 启用或禁用插件时显示加载反馈 ([#10310](https://github.com/nocobase/nocobase/pull/10310)) by @zhangzhonghe

  - 应用执行命令时不再显示重试按钮 ([#10290](https://github.com/nocobase/nocobase/pull/10290)) by @zhangzhonghe

  - 修复移动端选择列表取消按钮语言不一致的问题 ([#10297](https://github.com/nocobase/nocobase/pull/10297)) by @zhangzhonghe

  - 修复子表格关系字段赋值时上级项变量解析到错误层级的问题。 ([#10249](https://github.com/nocobase/nocobase/pull/10249)) by @gchust

  - 修复 v2 弹窗编辑子表格的新增和编辑弹窗中缺失或取值不正确的 `Current popup` 上级记录变量。 ([#10292](https://github.com/nocobase/nocobase/pull/10292)) by @katherinehhh

- **[database]** 修复应用重启后迁移包遗漏多对多中间表数据的问题 ([#10306](https://github.com/nocobase/nocobase/pull/10306)) by @cgyrock

- **[data-source-manager]** 修复从数据库同步字段后公式字段变为数字字段的问题 ([#10303](https://github.com/nocobase/nocobase/pull/10303)) by @2013xile

- **[undefined]** 修复无法从本地创建 Portal 的问题 ([#10304](https://github.com/nocobase/nocobase/pull/10304)) by @gchust

- **[前端流引擎]**
  - 修复表单字段值变量解析不正确的问题 ([#10319](https://github.com/nocobase/nocobase/pull/10319)) by @gchust

  - 修复自定义非 Sequelize 数据源中弹窗记录变量和关联区块无法正确解析的问题 ([#10272](https://github.com/nocobase/nocobase/pull/10272)) by @gchust

- **[AI 员工]**
  - 修复页面加载或跳转期间 AI 员工聊天入口短暂闪现的问题。 ([#10309](https://github.com/nocobase/nocobase/pull/10309)) by @cgyrock

  - AI 员工操作现已支持在 v2 表单中通过联动规则控制显示和隐藏。 ([#10298](https://github.com/nocobase/nocobase/pull/10298)) by @jiannx

- **[文件管理器]** 修复跨域图片预览后，因浏览器缓存缺少 CORS 响应头导致文件下载失败的问题 ([#10313](https://github.com/nocobase/nocobase/pull/10313)) by @mytharcher
参考文档：[文件预览](https://github.com/nocobase/nocobase/blob/fix/file-manager-download-cors-cache/docs/docs/cn/file-manager/file-preview/index.md) / [阿里云 OSS](https://github.com/nocobase/nocobase/blob/fix/file-manager-download-cors-cache/docs/docs/cn/file-manager/storage/aliyun-oss.md)
- **[操作：批量编辑]** 修正内置插件文档，明确这些插件默认启用 ([#10314](https://github.com/nocobase/nocobase/pull/10314)) by @hongboji

- **[Portal 管理]**
  - 修复旧版 AI 门户检查访问权限时的兼容性问题 ([#10307](https://github.com/nocobase/nocobase/pull/10307)) by @zhangzhonghe

  - 修复 Portal 名称为 x 或 v 时 URL 不正确的问题 ([#10305](https://github.com/nocobase/nocobase/pull/10305)) by @zhangzhonghe

  - 修复角色权限中 Portal 标题被错误翻译的问题 ([#10291](https://github.com/nocobase/nocobase/pull/10291)) by @zhangzhonghe

- **[备份管理器]** 修复异步导出任务触发重复自动备份的问题 ([#10300](https://github.com/nocobase/nocobase/pull/10300)) by @gchust

- **[工作流]** 在选择触发器类型前禁用工作流执行模式选项。 ([#10296](https://github.com/nocobase/nocobase/pull/10296)) by @Molunerfinn

- **[数据源：外部 NocoBase]** 修复 AI 工作流无法读取外部 NocoBase 文件表和附件字段文件的问题 by @2013xile

- **[迁移管理]** 修复应用重启后的多对多中间表迁移数据问题，并将迁移规则归类为系统数据 by @cgyrock

- **[模板打印]** 无 — 本 PR 记录修复目标，但不包含已发布的行为变更。 by @hongboji

- **[工作流：审批]**
  - 修复审批申请卡片提交后不能立即显示内容的问题 by @zhangzhonghe

  - 修复 V2 审批消息模板页与 V1 的布局和操作差异 by @zhangzhonghe

