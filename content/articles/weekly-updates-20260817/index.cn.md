汇总一周产品更新日志，最新发布可前往[我们的博客](https://www.nocobase.com/cn/blog/timeline)查看。

**NocoBase 目前更新包括三个分支：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

`main`：截至目前最稳定的版本，推荐安装此版本。

`next`：包含即将发布的新功能，经过初步测试的版本，可能存在部分已知或未知问题。主要面向测试用户，用于收集反馈和进一步优化功能。适合愿意提前体验新功能并提供反馈的测试用户。

`develop`：开发中的版本，包含最新的功能代码，可能尚未完成或存在较多不稳定因素，主要用于内部开发和快速迭代。适合对产品功能前沿发展感兴趣的技术用户，但可能存在较多问题或不完整功能，不建议在生产环境中使用。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### v2.1.41

*发布日期: 2026-08-16*

### 🚀 优化

- **[lock-manager]** 新增本地锁租约续期能力，并确保通过 tryAcquire 获取的锁在复用和异常场景下安全释放 ([#10368](https://github.com/nocobase/nocobase/pull/10368)) by @jiannx
- **[Redis 分布式锁适配器]** 新增 Redis 锁租约续期能力，并确保可复用锁句柄在竞争和异常场景下安全释放 by @jiannx

### 🐛 修复

- **[文件管理器]** 修复单值字段选择已有文件时需要额外提交的问题 ([#10372](https://github.com/nocobase/nocobase/pull/10372)) by @zhangzhonghe
- **[数据表字段：Markdown(Vditor)]** 修复 v2 详情区块中 Markdown HTML 预览在暗黑主题下显示异常的问题。 ([#10370](https://github.com/nocobase/nocobase/pull/10370)) by @katherinehhh
- **[数据表字段：加密]** 修复集合包含加密字段时批量导入报错 `model.changed is not a function` 的问题 by @cgyrock
- **[工作流：Webhook 触发器]** 修复未填写请求头时手动执行 Webhook 工作流返回 400 错误的问题 by @mytharcher

### v2.1.40

*发布日期: 2026-08-14*

### 🚀 优化

- **[区块：树]** 树筛选区块现已支持配置默认排序。 ([#10339](https://github.com/nocobase/nocobase/pull/10339)) by @jiannx

### 🐛 修复

- **[client-v2]**

  - 修复筛选表单在 UI 编辑模式下自动刷新数据的问题 ([#10356](https://github.com/nocobase/nocobase/pull/10356)) by @zhangzhonghe
  - v2 筛选表单中的树形关系字段默认使用级联选择 ([#10357](https://github.com/nocobase/nocobase/pull/10357)) by @zhangzhonghe
  - 修复移动端单选关联字段再次点击已选记录后无法清空的问题 ([#10346](https://github.com/nocobase/nocobase/pull/10346)) by @zhangzhonghe
  - 修复筛选表单无法直接添加中国行政区字段的问题 ([#10333](https://github.com/nocobase/nocobase/pull/10333)) by @zhangzhonghe
  - 修复表单字段联动规则操作中错误列出 JS item 的问题 ([#10363](https://github.com/nocobase/nocobase/pull/10363)) by @gchust
- **[工作流：JSON 计算]** 修复 JSON 查询任务丢失结构化解析错误并显示 `[object Object]` 的问题 ([#10344](https://github.com/nocobase/nocobase/pull/10344)) by @mytharcher
- **[操作：导出记录]**

  - 修复 Export V2 中调整关系字段后拖拽排序导致页面崩溃的问题。 ([#10335](https://github.com/nocobase/nocobase/pull/10335)) by @katherinehhh
  - 修复按多个关系字段筛选后表格导出报错的问题 ([#10342](https://github.com/nocobase/nocobase/pull/10342)) by @zhangzhonghe
- **[区块：看板]** 修复重新打开看板卡片详情抽屉后已配置内容丢失的问题 ([#10334](https://github.com/nocobase/nocobase/pull/10334)) by @jiannx
- **[文件管理器]** 修复在文件之间切换时视频预览内容不更新的问题 ([#10345](https://github.com/nocobase/nocobase/pull/10345)) by @mytharcher
- **[操作：导入记录 Pro]**

  - 修复异步导入的记录未关联当前空间的问题 by @jiannx
  - 优化导入结果统计文案，明确区分新增记录数与更新记录数 by @mytharcher
- **[工作流：审批]**

  - 修复审批详情中子表格列宽与发起表单不一致的问题 by @zhangzhonghe
  - 为 Client V2 相关审批区块增加数据范围筛选 by @zhangzhonghe

### v2.1.39

*发布日期: 2026-08-11*

### 🐛 修复

- **[client-v2]** 修复 ctx.form.submit 无法正确提交表单数据的问题。 ([#10063](https://github.com/nocobase/nocobase/pull/10063)) by @gchust
- **[database]** 修复启用数据库下划线命名时驼峰字段前缀索引创建失败的问题 ([#10329](https://github.com/nocobase/nocobase/pull/10329)) by @2013xile
- **[操作：复制记录]** 优化 v2 直接复制失败提示，避免重复显示 API 错误信息。 ([#10327](https://github.com/nocobase/nocobase/pull/10327)) by @katherinehhh
- **[历史记录]** 提升大规模快照表场景下的历史记录写入性能 by @2013xile
- **[工作流：审批]** 修复审批表单中删除一对多关系记录后无法重新选择的问题 by @zhangzhonghe

### v2.1.38

*发布日期: 2026-08-10*

### 🚀 优化

- **[undefined]** 明确 JavaScript Worker 的默认并发行为，以及需要配置并发上限的场景 ([#10317](https://github.com/nocobase/nocobase/pull/10317)) by @mytharcher
  参考文档：[JavaScript 节点](https://docs.nocobase.com/cn/workflow/nodes/javascript)
- **[工作流：JavaScript 节点]** JavaScript 工作流节点现在会队列化异步 Worker 执行，并限制单进程 Worker 并发以降低资源峰值。 ([#10280](https://github.com/nocobase/nocobase/pull/10280)) by @mytharcher

### 🐛 修复

- **[前端流引擎]**

  - 修复自定义非 Sequelize 数据源中弹窗记录变量和关联区块无法正确解析的问题 ([#10272](https://github.com/nocobase/nocobase/pull/10272)) by @gchust
  - 修复表单字段值变量解析不正确的问题 ([#10319](https://github.com/nocobase/nocobase/pull/10319)) by @gchust
- **[文件管理器]** 修复跨域图片预览后，因浏览器缓存缺少 CORS 响应头导致文件下载失败的问题 ([#10313](https://github.com/nocobase/nocobase/pull/10313)) by @mytharcher
  参考文档：[文件预览](https://github.com/nocobase/nocobase/blob/fix/file-manager-download-cors-cache/docs/docs/cn/file-manager/file-preview/index.md) / [阿里云 OSS](https://github.com/nocobase/nocobase/blob/fix/file-manager-download-cors-cache/docs/docs/cn/file-manager/storage/aliyun-oss.md)

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### v2.2.0-beta.17

*发布日期: 2026-08-10*

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

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### v3.0.0-alpha.9

*发布日期: 2026-08-11*

### 🚀 优化

- **[cli]** `nb api resource create` 的 `--values` 支持传 JSON 数组，一次请求创建多条记录。 ([#10325](https://github.com/nocobase/nocobase/pull/10325)) by @Molunerfinn
  参考文档：[nb api resource create](https://github.com/nocobase/nocobase/blob/fix/cli-resource-create-array-values/docs/docs/cn/api/cli/api/resource/create.md)

### 🐛 修复

- **[client-v2]**

  - 修复 V2 字段编辑和显示超大 decimal 数值不正确的问题。 ([#10330](https://github.com/nocobase/nocobase/pull/10330)) by @katherinehhh
  - 修复 ctx.form.submit 无法正确提交表单数据的问题。 ([#10063](https://github.com/nocobase/nocobase/pull/10063)) by @gchust
  - 当前 Settings 页签无权限时自动跳转到可访问页签 ([#10332](https://github.com/nocobase/nocobase/pull/10332)) by @zhangzhonghe
  - 修复看板列快捷创建记录时未继承所选分组值的问题 ([#10321](https://github.com/nocobase/nocobase/pull/10321)) by @jiannx
  - 无设置权限时跳转到首个可访问页面 ([#10331](https://github.com/nocobase/nocobase/pull/10331)) by @zhangzhonghe
- **[database]** 修复启用数据库下划线命名时驼峰字段前缀索引创建失败的问题 ([#10329](https://github.com/nocobase/nocobase/pull/10329)) by @2013xile
- **[区块：甘特图]** 修复甘特图短任务条未使用记录自定义颜色的问题 ([#10322](https://github.com/nocobase/nocobase/pull/10322)) by @jiannx
- **[区块：树]** 修复 Tree 区块搜索无匹配业务字段记录时仍显示占位节点的问题 ([#10323](https://github.com/nocobase/nocobase/pull/10323)) by @jiannx
- **[操作：复制记录]** 优化 v2 直接复制失败提示，避免重复显示 API 错误信息。 ([#10327](https://github.com/nocobase/nocobase/pull/10327)) by @katherinehhh
- **[历史记录]** 提升大规模快照表场景下的历史记录写入性能 by @2013xile
- **[工作流：审批]**

  - 修复 Client V2 审批表单返回范围选项不显示的问题 by @zhangzhonghe
  - 修复审批表单中删除一对多关系记录后无法重新选择的问题 by @zhangzhonghe
- **[钉钉]** 修复在 v2 渠道表单中保存钉钉通知渠道时丢失所选认证器的问题 by @jiannx

### v3.0.0-alpha.8

*发布日期: 2026-08-10*

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
- **[工作流：审批]**

  - 修复审批申请卡片提交后不能立即显示内容的问题 by @zhangzhonghe
  - 修复 V2 审批消息模板页与 V1 的布局和操作差异 by @zhangzhonghe
