### 🎉 新特性

- **[undefined]** 新增实验性质的"引用区块"插件，支持以引用和复制的方式复用已有的区块。 ([#7584](https://github.com/nocobase/nocobase/pull/7584)) by @gchust

- **[client]**
  - 应用进入维护状态时支持显示插件自定义的应用维护状态组件 ([#8252](https://github.com/nocobase/nocobase/pull/8252)) by @cgyrock

  - 创建数据表时可以更改预设id字段类型 ([#8129](https://github.com/nocobase/nocobase/pull/8129)) by @cgyrock

  - 为对多子表单增加允许添加数据、选择已有数据及解除关联的设置项支持 ([#8099](https://github.com/nocobase/nocobase/pull/8099)) by @katherinehhh

  - 支持在主题编辑器中自定义全局样式 ([#7960](https://github.com/nocobase/nocobase/pull/7960)) by @ljmiaoo

  - 支持在详情区块中配置默认排序规则 ([#8070](https://github.com/nocobase/nocobase/pull/8070)) by @katherinehhh

  - 支持设置数字字段的数据类型，可选项包括 double、float 和 decimal ([#8058](https://github.com/nocobase/nocobase/pull/8058)) by @chenos

  - 支持表格列字段开启排序 ([#7900](https://github.com/nocobase/nocobase/pull/7900)) by @katherinehhh

  - 为关系字段下拉选择器增加快捷新增能力 ([#7887](https://github.com/nocobase/nocobase/pull/7887)) by @katherinehhh

  - 支持树表关系字段使用级联选择器 ([#7846](https://github.com/nocobase/nocobase/pull/7846)) by @katherinehhh

  - 支持表格列操作的拖动 ([#7842](https://github.com/nocobase/nocobase/pull/7842)) by @zhangzhonghe

  - 子表格支持分页展示数据 ([#7754](https://github.com/nocobase/nocobase/pull/7754)) by @katherinehhh

  - 事件流： 添加了新的预定义操作，增强了事件处理的自定义选项，使用户可以简化工作流程并提高效率 ([#7672](https://github.com/nocobase/nocobase/pull/7672)) by @zhangzhonghe

  - 增加 2.0 markdown 区块 ([#7613](https://github.com/nocobase/nocobase/pull/7613)) by @katherinehhh

  - 支持为子表单设置联动规则 ([#7640](https://github.com/nocobase/nocobase/pull/7640)) by @zhangzhonghe

  - 增加对表格行点击事件监听的支持，使用户可以在点击表格中的某一行时执行特定操作 ([#7622](https://github.com/nocobase/nocobase/pull/7622)) by @zhangzhonghe

  - 添加对自定义变量的支持 ([#7585](https://github.com/nocobase/nocobase/pull/7585)) by @zhangzhonghe

  - 新增“当前设备类型”变量 ([#7576](https://github.com/nocobase/nocobase/pull/7576)) by @zhangzhonghe

- **[文件管理器]** 存储支持配置文件重命名方式 ([#8231](https://github.com/nocobase/nocobase/pull/8231)) by @JAVA-LW

- **[工作流]**
  - 为工作流增加新的系统变量，包括“应用实例 ID”和“生成雪花 ID” ([#8223](https://github.com/nocobase/nocobase/pull/8223)) by @mytharcher

  - 新增“多条件分支”节点，提供类似 `switch` / `case` 的控制流程 ([#7878](https://github.com/nocobase/nocobase/pull/7878)) by @mytharcher

- **[区块：地图]** 新增2.0 地图区块 ([#7944](https://github.com/nocobase/nocobase/pull/7944)) by @katherinehhh

- **[数据可视化]**
  - 新增图表配置的AI员工 ([#7815](https://github.com/nocobase/nocobase/pull/7815)) by @heziqiang

  - 新增图表SQL数据源 ([#7830](https://github.com/nocobase/nocobase/pull/7830)) by @heziqiang

  - 新增图表类型 环形图 ([#7629](https://github.com/nocobase/nocobase/pull/7629)) by @heziqiang

- **[前端流引擎]** 支持在编写 SQL 时使用 LiquidJS 模板字符串 ([#7667](https://github.com/nocobase/nocobase/pull/7667)) by @2013xile

- **[数据源管理]**
  - 主数据源支持从主数据库中读取数据表，并支持更改字段 interface ([#7118](https://github.com/nocobase/nocobase/pull/7118)) by @aaaaaajie

  - 主数据源支持从主数据库中读取数据表，并支持更改字段 interface ([#7118](https://github.com/nocobase/nocobase/pull/7118)) by @aaaaaajie

- **[区块：网格卡片]** 新增2.0 网格卡片区块 ([#7579](https://github.com/nocobase/nocobase/pull/7579)) by @katherinehhh

- **[区块：列表]** 新增2.0 列表区块 ([#7574](https://github.com/nocobase/nocobase/pull/7574)) by @katherinehhh

- **[区块：操作面板]** 新增2.0 操作面板区块 ([#7594](https://github.com/nocobase/nocobase/pull/7594)) by @katherinehhh

- **[AI 员工]** 改进AI插件的联网搜索功能 ([#7580](https://github.com/nocobase/nocobase/pull/7580)) by @cgyrock

- **[遥测]** 新增插件：遥测，基于 OpenTelemetry 的应用遥测插件，内置 CPU、内存、HTTP 请求等指标，并支持通过 HTTP 导出 by @2013xile

- **[表单草稿]** 表单草稿 by @chenos

- **[文件存储：S3 (Pro)]** 为 S3 Pro 存储器增加重命名模式选项 by @mytharcher

- **[工作流：审批]**
  - 允许选择在审批处理界面中展示数据的快照还是最新状态 by @mytharcher

  - 增加受众配置项，以控制谁可以发起审批 by @mytharcher

- **[邮件管理]** 邮件管理2.0实现 by @jiannx

### 🚀 优化

- **[undefined]**
  - 更新图表插件英文文档 ([#7748](https://github.com/nocobase/nocobase/pull/7748)) by @heziqiang

  - 更新图表概览部分文档 ([#7702](https://github.com/nocobase/nocobase/pull/7702)) by @heziqiang

- **[flow-engine]**
  - runjs 环境支持 window.location.reload 方法。 ([#8316](https://github.com/nocobase/nocobase/pull/8316)) by @gchust

  - 优化在切换配置模式时的性能问题 ([#8241](https://github.com/nocobase/nocobase/pull/8241)) by @zhangzhonghe

  - runjs 环境支持 FormData 对象。 ([#8263](https://github.com/nocobase/nocobase/pull/8263)) by @gchust

  - 支持动态隐藏配置菜单 ([#7924](https://github.com/nocobase/nocobase/pull/7924)) by @gchust

  - 为 FlowModelRenderer 添加 useCache 选项 ([#8072](https://github.com/nocobase/nocobase/pull/8072)) by @zhangzhonghe

  - 新增 `removeModelWithSubModels` 方法，用于递归移除模型及其子模型 ([#8064](https://github.com/nocobase/nocobase/pull/8064)) by @zhangzhonghe

  - 支持动态切换 flow model 类型 ([#7952](https://github.com/nocobase/nocobase/pull/7952)) by @gchust

  - 支持 flow engine 层监听 models 树变更。 ([#7905](https://github.com/nocobase/nocobase/pull/7905)) by @gchust

  - 优化当前记录的变量解析，提高弹窗打开的速度 ([#7895](https://github.com/nocobase/nocobase/pull/7895)) by @gchust

  - 优化 runjs 的上下文中第三方库的 api 结构，并支持 Antd 图标库。 ([#7896](https://github.com/nocobase/nocobase/pull/7896)) by @gchust

  - 优化工具栏样式，防止图标被遮挡 ([#7883](https://github.com/nocobase/nocobase/pull/7883)) by @zhangzhonghe

  - 优化页面标签的工具栏样式 ([#7795](https://github.com/nocobase/nocobase/pull/7795)) by @zhangzhonghe

  - 支持延迟操作 flow model ([#7786](https://github.com/nocobase/nocobase/pull/7786)) by @gchust

  - 优化复制 UID 失败时的错误提示消息，提供更清晰的解决问题指引。 ([#7718](https://github.com/nocobase/nocobase/pull/7718)) by @gchust

  - 支持在 flow step 中定义上下文变量 ([#7674](https://github.com/nocobase/nocobase/pull/7674)) by @gchust

  - 支持通过在 URL 查询参数中添加 skipRunJs=true 来跳过 runjs 流步骤。 ([#7638](https://github.com/nocobase/nocobase/pull/7638)) by @gchust

  - 支持弹窗变量 ([#7583](https://github.com/nocobase/nocobase/pull/7583)) by @gchust

  - 将自动流程规范化，统一通过 "beforeRender" 事件触发，确保流程运行的一致性和可预期性。 ([#7577](https://github.com/nocobase/nocobase/pull/7577)) by @gchust

  - 优化代码编辑器的体验， 增加更多代码片段，动态展示不同场景的代码补全 ([#7559](https://github.com/nocobase/nocobase/pull/7559)) by @gchust

  - 优化拖拽功能 ([#7526](https://github.com/nocobase/nocobase/pull/7526)) by @zhangzhonghe

- **[sdk]** 改进 api storage 实现 ([#8308](https://github.com/nocobase/nocobase/pull/8308)) by @chenos

- **[client]**
  - JS 代码编辑器支持全屏。 ([#8294](https://github.com/nocobase/nocobase/pull/8294)) by @gchust

  - 改进树表区块 Add child 实现，使其等同于对应 children 关联的 Add new ([#8272](https://github.com/nocobase/nocobase/pull/8272)) by @katherinehhh

  - Color 字段支持清空默认值 ([#8268](https://github.com/nocobase/nocobase/pull/8268)) by @katherinehhh

  - 操作列的 column width 的改成 Select 的形式 ([#8218](https://github.com/nocobase/nocobase/pull/8218)) by @katherinehhh

  - 表格列宽配置支持自定义宽度输入 ([#8200](https://github.com/nocobase/nocobase/pull/8200)) by @katherinehhh

  - 调整表格列宽配置方式改为选项选择 ([#8188](https://github.com/nocobase/nocobase/pull/8188)) by @katherinehhh

  - 优化数据选择器样式并设置maxTagCount ([#8175](https://github.com/nocobase/nocobase/pull/8175)) by @katherinehhh

  - 配置项优化（区块、字段、操作） ([#8141](https://github.com/nocobase/nocobase/pull/8141)) by @katherinehhh

  - 百分比字段支持数字格式化设置 ([#8123](https://github.com/nocobase/nocobase/pull/8123)) by @katherinehhh

  - 修复子表格删除行后跳至最后分页的问题，并支持列级验证规则配置 ([#8094](https://github.com/nocobase/nocobase/pull/8094)) by @katherinehhh

  - 调整编辑态子表格中大字段的展示 ([#8078](https://github.com/nocobase/nocobase/pull/8078)) by @katherinehhh

  - JSON 字段内容超出时支持省略显示 ([#8067](https://github.com/nocobase/nocobase/pull/8067)) by @katherinehhh

  - 附件上传组件支持“允许多选”设置 ([#8052](https://github.com/nocobase/nocobase/pull/8052)) by @katherinehhh

  - 优化 Select 组件被折叠的选中项在鼠标悬停时显示出来 ([#8030](https://github.com/nocobase/nocobase/pull/8030)) by @katherinehhh

  - 支持在图表查询初始时选择筛选字段 ([#7933](https://github.com/nocobase/nocobase/pull/7933)) by @heziqiang

  - 适配移动端组件 ([#7870](https://github.com/nocobase/nocobase/pull/7870)) by @zhangzhonghe

  - 在 RunJS 脚本上下文中新增对 Day.js 库的支持，便于进行日期和时间的操作。 ([#7841](https://github.com/nocobase/nocobase/pull/7841)) by @gchust

  - 新增页面版本到 flow engine 上下文里 ([#7826](https://github.com/nocobase/nocobase/pull/7826)) by @gchust

  - 优化markdown 编辑器 ([#7793](https://github.com/nocobase/nocobase/pull/7793)) by @katherinehhh

  - 2.0 区块适配 tableoid 字段 ([#7809](https://github.com/nocobase/nocobase/pull/7809)) by @katherinehhh

  - JS 代码编辑器里支持 jsx 语法 ([#7699](https://github.com/nocobase/nocobase/pull/7699)) by @gchust

  - JS field model 支持关系字段 ([#7618](https://github.com/nocobase/nocobase/pull/7618)) by @gchust

- **[server]** 优化因应用实例不存在导致获取应用维护状态消息异常的容错机制 ([#8196](https://github.com/nocobase/nocobase/pull/8196)) by @2013xile

- **[acl]** 支持 `acl.registerSnippet` 接口合并权限片段的配置 ([#8155](https://github.com/nocobase/nocobase/pull/8155)) by @mytharcher

- **[telemetry]**
  - 支持控制需要上报的指标 ([#7938](https://github.com/nocobase/nocobase/pull/7938)) by @2013xile

  - 增加在线子应用数量等遥测指标 ([#7743](https://github.com/nocobase/nocobase/pull/7743)) by @2013xile

- **[database]** 重构字段加密插件，提升安全性，支持应用密钥生成与更换、字段独立密钥。 ([#7769](https://github.com/nocobase/nocobase/pull/7769)) by @cgyrock

- **[AI 员工]**
  - 修复 workflow 中 LLM 节点对 Gemini 的兼容问题。<br/>优化 AI 工具 dataSourceQuery 在大数据量场景下的处理性能。<br/>修复数据建模相关问题。<br/>新增 AI 建议工具。<br/> ([#8249](https://github.com/nocobase/nocobase/pull/8249)) by @heziqiang

  - 解决 AI 员工首次编辑后提交无响应的问题<br/>删除不必要的内置 AI 员工「Avery 表单助手」<br/>新增内置 AI 员工的默认初始角色权限<br/>优化 AI 员工的错误处理与输出结果<br/>新增 AI 访问弹窗（Modal）上下文变量的能力<br/>新增 AI 外部数据源的支持<br/>修复 AI 在处理大量数据时会话内容被错误裁剪的问题<br/> ([#8191](https://github.com/nocobase/nocobase/pull/8191)) by @heziqiang

  - 内置 AI 员工提示词支持编辑。<br/>优化 Nathan (AI 员工) 的系统提示词。<br/>修复了服务端读取静态文件的问题。 ([#8097](https://github.com/nocobase/nocobase/pull/8097)) by @heziqiang

  - 为添加 LLM 表单新增字段 provider ([#8049](https://github.com/nocobase/nocobase/pull/8049)) by @heziqiang

  - AI员工插件添加 upgrade 钩子函数 ([#7951](https://github.com/nocobase/nocobase/pull/7951)) by @heziqiang

  - 优化 AI 员工交互与任务配置体验 ([#7707](https://github.com/nocobase/nocobase/pull/7707)) by @cgyrock

  - AI 员工可基于表格区块元信息自主查询数据 ([#7703](https://github.com/nocobase/nocobase/pull/7703)) by @cgyrock

  - 优化 AI 编程体验，包括使用 AI 员工审查、诊断并修复代码。 ([#7679](https://github.com/nocobase/nocobase/pull/7679)) by @cgyrock

  - 重构了 OpenAI LLM Provider，将其拆分为两个独立的 Provider，以分别支持 OpenAI 的 Completions 和 Responses API。 ([#7615](https://github.com/nocobase/nocobase/pull/7615)) by @cgyrock

  - 添加新的 LLM 提供商 Ollama ([#7612](https://github.com/nocobase/nocobase/pull/7612)) by @ReLaMi96

  - AI写代码功能优化 ([#7614](https://github.com/nocobase/nocobase/pull/7614)) by @cgyrock

  - 在移动端布局中为聊天框添加最小化按钮 ([#7595](https://github.com/nocobase/nocobase/pull/7595)) by @cgyrock

- **[UI 模板]**
  - 新增详情区块字段模板支持。 ([#8247](https://github.com/nocobase/nocobase/pull/8247)) by @gchust

  - 新增界面模板插件，提供区块模板和弹窗模板复用的能力。 ([#8163](https://github.com/nocobase/nocobase/pull/8163)) by @gchust

- **[工作流]**
  - 为复制工作流的 API 增加来源工作流的实例参数 ([#8225](https://github.com/nocobase/nocobase/pull/8225)) by @mytharcher

  - 优化数据表事件“发生变动的字段”配置项的描述，以避免误解 ([#8216](https://github.com/nocobase/nocobase/pull/8216)) by @mytharcher

  - 支持在工作流的复制（版本）过程中，使用已复制的工作流中使用旧的配置信息来生成新的配置 ([#8165](https://github.com/nocobase/nocobase/pull/8165)) by @mytharcher

  - 为执行器的准备阶段增加容错逻辑，避免数据缺失造成的流程挂起 ([#8156](https://github.com/nocobase/nocobase/pull/8156)) by @mytharcher

  - 对工作流画布的关系数据使用懒加载，以提升性能 ([#8142](https://github.com/nocobase/nocobase/pull/8142)) by @mytharcher

  - 对更新记录操作按钮补全绑定工作流的配置项 ([#7668](https://github.com/nocobase/nocobase/pull/7668)) by @mytharcher

- **[异步任务管理器]**
  - 在清理任务过程中增加异常捕获机制，以防止应用程序崩溃并提升稳定性 ([#8215](https://github.com/nocobase/nocobase/pull/8215)) by @mytharcher

  - 在子应用中执行异步任务时，异步进程只启动对应的子应用 ([#7927](https://github.com/nocobase/nocobase/pull/7927)) by @2013xile

- **[区块：操作面板]** 优化区块/操作/字段在配置状态下隐藏时的显示 ([#8174](https://github.com/nocobase/nocobase/pull/8174)) by @katherinehhh

- **[区块：列表]** 补充 Table、List、Grid Card 区块的 Link 按钮配置 ([#8194](https://github.com/nocobase/nocobase/pull/8194)) by @katherinehhh

- **[错误处理器]** SQL 语法错误时，不对外暴露数据库原始提示，避免暴露数据库类型 ([#8195](https://github.com/nocobase/nocobase/pull/8195)) by @2013xile

- **[区块：地图]** 地图字段显示模式为文本时支持超出省略设置 ([#8189](https://github.com/nocobase/nocobase/pull/8189)) by @katherinehhh

- **[权限控制]** 不允许给用户设置 root 角色 ([#8180](https://github.com/nocobase/nocobase/pull/8180)) by @2013xile

- **[区块：网格卡片]**
  - 优化网格卡片区块样式，使布局更紧凑 ([#8152](https://github.com/nocobase/nocobase/pull/8152)) by @katherinehhh

  - 网格卡片新增一页显示的行数配置，移除 pageSize 配置，改为自动计算 pageSize ([#8055](https://github.com/nocobase/nocobase/pull/8055)) by @katherinehhh

- **[数据表字段：Markdown(Vditor)]** 调整Markdown 字段在阅读态下默认不解析变量 ([#8145](https://github.com/nocobase/nocobase/pull/8145)) by @katherinehhh

- **[操作：导入记录]** 导入配置字段支持选择 ID ([#8133](https://github.com/nocobase/nocobase/pull/8133)) by @katherinehhh

- **[数据可视化]**
  - 更新图表提示栏和事件代码模板注释 ([#7814](https://github.com/nocobase/nocobase/pull/7814)) by @heziqiang

  - 添加图表日期时间格式化选项 ([#7763](https://github.com/nocobase/nocobase/pull/7763)) by @heziqiang

  - 添加提示 请先点击”运行查询“后再配置图表选项 ([#7685](https://github.com/nocobase/nocobase/pull/7685)) by @heziqiang

  - 图表配置面板点击公共预览按钮时刷新图表数据 ([#7678](https://github.com/nocobase/nocobase/pull/7678)) by @heziqiang

  - 更新插件数据 VI 2.0 版，修复了一些问题并优化了用户界面。 ([#7597](https://github.com/nocobase/nocobase/pull/7597)) by @heziqiang

  - 扩展图表类型；优化用户界面和交互体验。 ([#7581](https://github.com/nocobase/nocobase/pull/7581)) by @heziqiang

- **[多应用管理器（已废弃）]**
  - 支持子应用异步排队启动 ([#7749](https://github.com/nocobase/nocobase/pull/7749)) by @2013xile

  - 改进 app supervisor ([#7661](https://github.com/nocobase/nocobase/pull/7661)) by @chenos

- **[数据源管理]** 调整字段类型和 interface 列顺序，修改时增加二次确认 ([#7680](https://github.com/nocobase/nocobase/pull/7680)) by @2013xile

- **[多空间]** 使用 api.storage 替代localstorage, 权限控制重构, 问题修复 by @jiannx

- **[操作：导出记录 Pro]** 导入pro和导出pro 按钮支持权限控制 by @katherinehhh

- **[遥测：Prometheus]** 升级 `@opentelemetry/exporter-prometheus` by @2013xile

- **[数据表字段：加密]** 优化字段加密插件，支持独立 IV 下的数据检索 by @cgyrock

- **[工作流：审批]**
  - 在本轮流程执行结束时，更新 `approval.data` 为审批数据的最新版本，以匹配“最新”记录展示模式 by @mytharcher

  - 调整获取单个审批单据的 API，并简化代码 by @mytharcher

- **[迁移管理]** 优化迁移检查、迁移 SQL 下载、迁移日志格式及迁移执行过程的可视化体验 by @cgyrock

### 🐛 修复

- **[undefined]**
  - 修复暗黑模式下的插件文档首页样式不正确的问题。 ([#7839](https://github.com/nocobase/nocobase/pull/7839)) by @gchust

  - 路由路径匹配支持新多应用 ([#7570](https://github.com/nocobase/nocobase/pull/7570)) by @jiannx

  - 修复引用区块会将被引用区块从原始页面中移除的问题。 ([#7969](https://github.com/nocobase/nocobase/pull/7969)) by @gchust

- **[client]**
  - 修复详情区块中子详情弹窗数据错误问题 ([#8318](https://github.com/nocobase/nocobase/pull/8318)) by @katherinehhh

  - 修复连续打开弹窗中联动规则和事件流配置弹窗后再关闭当前弹窗时会报错的问题。 ([#8312](https://github.com/nocobase/nocobase/pull/8312)) by @gchust

  - 修复连续打开弹窗中联动规则和事件流配置弹窗后再关闭当前弹窗时会报错的问题。 ([#8312](https://github.com/nocobase/nocobase/pull/8312)) by @gchust

  - 修复表格块快捷编辑开关修改后需要刷新页面才能生效的问题。 ([#8311](https://github.com/nocobase/nocobase/pull/8311)) by @gchust

  - 修复切换菜单时如果 URL 中的查询参数发生改变，依赖该查询参数的作为数据范围的区块不会正确刷新。 ([#8310](https://github.com/nocobase/nocobase/pull/8310)) by @gchust

  - 修复关系字段组件的权限问题 ([#8243](https://github.com/nocobase/nocobase/pull/8243)) by @katherinehhh

  - 修复详情区块中子详情组件在翻页时数据不更新问题 ([#8305](https://github.com/nocobase/nocobase/pull/8305)) by @katherinehhh

  - 修复编辑表单翻页时子表单中嵌套的子表格内容不更新的问题 ([#8304](https://github.com/nocobase/nocobase/pull/8304)) by @katherinehhh

  - 修复弹窗打不开的问题和优化导航稳定性 ([#8287](https://github.com/nocobase/nocobase/pull/8287)) by @zhangzhonghe

  - 修复从下拉选择组件切换到数组子表单组件时的报错问题 ([#8301](https://github.com/nocobase/nocobase/pull/8301)) by @katherinehhh

  - 不应允许通过 JS Field 为表单添加关联字段。 ([#8296](https://github.com/nocobase/nocobase/pull/8296)) by @gchust

  - 修复更新记录操作后会出现多次刷新数据的问题。 ([#8299](https://github.com/nocobase/nocobase/pull/8299)) by @gchust

  - 修复对多字段的子表单中AddNew内容被选择数据覆盖的问题 ([#8292](https://github.com/nocobase/nocobase/pull/8292)) by @katherinehhh

  - 修复详情区块里编辑记录后 JS Item 不刷新的问题。 ([#8291](https://github.com/nocobase/nocobase/pull/8291)) by @gchust

  - 修复数据选择器字段组件弹窗中新增记录不刷新的问题。 ([#8289](https://github.com/nocobase/nocobase/pull/8289)) by @gchust

  - 修复隐藏状态的 JS block 区块渲染错误的问题。 ([#8286](https://github.com/nocobase/nocobase/pull/8286)) by @gchust

  - 修复人工节点表单中多对多数据选择器的表单区块菜单报错的问题 ([#8282](https://github.com/nocobase/nocobase/pull/8282)) by @mytharcher

  - 修复人工节点表单中多对多数据选择器的表单区块菜单报错的问题 ([#8282](https://github.com/nocobase/nocobase/pull/8282)) by @mytharcher

  - 修复关系字段被删除后区块报错的问题 ([#8273](https://github.com/nocobase/nocobase/pull/8273)) by @katherinehhh

  - 修复筛选表单的字段默认值在初始渲染时不触发一次筛选的问题 ([#8232](https://github.com/nocobase/nocobase/pull/8232)) by @zhangzhonghe

  - 修复展示关联字段懒加载时因无限循环导致的栈溢出问题 ([#8262](https://github.com/nocobase/nocobase/pull/8262)) by @zhangzhonghe

  - 兼容联动规则为空的情况，防止出现报错 ([#8239](https://github.com/nocobase/nocobase/pull/8239)) by @zhangzhonghe

  - 修复无法移除表格区块操作列的问题。 ([#8230](https://github.com/nocobase/nocobase/pull/8230)) by @gchust

  - 修复预览运行时将 JSX 编译产物写回 stepParams，导致保存后源码被改写的问题。 ([#8171](https://github.com/nocobase/nocobase/pull/8171)) by @gchust

  - 修复 S3 Pro 附件上传报错，并优化文件预览 ([#8211](https://github.com/nocobase/nocobase/pull/8211)) by @katherinehhh

  - 在调整列宽时，防止单行总宽度溢出 ([#8166](https://github.com/nocobase/nocobase/pull/8166)) by @zhangzhonghe

  - 修复筛选表单中勾选框选择“否”仍按“是”筛选的问题。 ([#8170](https://github.com/nocobase/nocobase/pull/8170)) by @gchust

  - 修复角色拥有新建权限时新建表单中的提交按钮未显示问题 ([#8190](https://github.com/nocobase/nocobase/pull/8190)) by @katherinehhh

  - 修复子表格/子表单从已有数据选择时，未选中项提交导致数据被清空的问题 ([#8172](https://github.com/nocobase/nocobase/pull/8172)) by @katherinehhh

  - 修复新增表单配置中出现数据范围设置的问题 ([#8176](https://github.com/nocobase/nocobase/pull/8176)) by @katherinehhh

  - 修复表单中 tableoid 字段渲染错误的问题 ([#8177](https://github.com/nocobase/nocobase/pull/8177)) by @katherinehhh

  - 标签页的事件流无法保存 ([#8168](https://github.com/nocobase/nocobase/pull/8168)) by @chenos

  - 修复标签页隐藏后仍占用间距的问题 ([#8167](https://github.com/nocobase/nocobase/pull/8167)) by @chenos

  - 修复关系选择记录器中已选项被错误过滤的问题 ([#8151](https://github.com/nocobase/nocobase/pull/8151)) by @katherinehhh

  - 修复关系字段下拉在存在 options 字段时显示为灰色不可选的问题 ([#8153](https://github.com/nocobase/nocobase/pull/8153)) by @katherinehhh

  - 修复切换标签字段会造成弹窗配置丢失的问题。 ([#8136](https://github.com/nocobase/nocobase/pull/8136)) by @gchust

  - 修复筛选表单里单选字段使用多选操作符时输入中文会清空已有的选项的问题。 ([#8140](https://github.com/nocobase/nocobase/pull/8140)) by @gchust

  - 修复 `RemoteSelect` 组件当值为空时错误的加载选项记录的问题 ([#8137](https://github.com/nocobase/nocobase/pull/8137)) by @mytharcher

  - 修复关系字段选择被子字段 disabled字段限制的问题 ([#8131](https://github.com/nocobase/nocobase/pull/8131)) by @katherinehhh

  - 修复筛选表单字段默认标签无法正确多语言翻译的问题。 ([#8135](https://github.com/nocobase/nocobase/pull/8135)) by @gchust

  - 修复日期筛选字段选“过去”或者“未来”选项时 UI 组件宽度不一致问题。 ([#8130](https://github.com/nocobase/nocobase/pull/8130)) by @gchust

  - 修复 JS block 区块标题描述样式与其它区块样式不一致的问题。 ([#8115](https://github.com/nocobase/nocobase/pull/8115)) by @gchust

  - 修复多行文本不换行问题 ([#8122](https://github.com/nocobase/nocobase/pull/8122)) by @katherinehhh

  - 修复操作符为包含任何一个和不包含任何一个时可选项字段筛选没有列出所有可选项的问题。 ([#8118](https://github.com/nocobase/nocobase/pull/8118)) by @gchust

  - 修复子表单中嵌套子表格无数据的问题 ([#8117](https://github.com/nocobase/nocobase/pull/8117)) by @katherinehhh

  - 修复筛选操作中介于时间筛选值清空后再次触发筛选会报错的问题。 ([#8110](https://github.com/nocobase/nocobase/pull/8110)) by @gchust

  - 修复筛选表单中关系字段可选数据不正确的问题。 ([#8109](https://github.com/nocobase/nocobase/pull/8109)) by @gchust

  - 修复筛选表单中自定义字段配置无法正确回填及部分配置不生效的问题。 ([#8106](https://github.com/nocobase/nocobase/pull/8106)) by @gchust

  - 修复 Checkbox 字段筛选不起作用的问题。 ([#8103](https://github.com/nocobase/nocobase/pull/8103)) by @gchust

  - 修复筛选操作中的 number 字段值未被正确回填的问题。 ([#8104](https://github.com/nocobase/nocobase/pull/8104)) by @gchust

  - 修复筛选表单中部分字段操作符无法正确筛选数据的问题。 ([#8100](https://github.com/nocobase/nocobase/pull/8100)) by @gchust

  - 修复移除区块后筛选区块里已经配置的该区块的字段未删除的问题。 ([#8098](https://github.com/nocobase/nocobase/pull/8098)) by @gchust

  - 修复按钮隐藏后在非配置模式下出现多余间距的问题 ([#8092](https://github.com/nocobase/nocobase/pull/8092)) by @katherinehhh

  - 修复无法修改筛选表单中的重制按钮文字的问题。 ([#8089](https://github.com/nocobase/nocobase/pull/8089)) by @gchust

  - 修复字段筛选操作符为 $in 和 $notIn 时字段输入框不支持多个输入值的问题。 ([#8081](https://github.com/nocobase/nocobase/pull/8081)) by @gchust

  - 修复添加数据区块后不会自动出现在筛选表单的字段菜单中的问题。 ([#8085](https://github.com/nocobase/nocobase/pull/8085)) by @gchust

  - 筛选表单中的关系字段的配置菜单不应该显示快捷创建。 ([#8083](https://github.com/nocobase/nocobase/pull/8083)) by @gchust

  - 修复列表区块中关系子表格数据错误的问题 ([#8082](https://github.com/nocobase/nocobase/pull/8082)) by @katherinehhh

  - 修复数据表中设置的数值字段验证规则，在表单中未生效的问题 ([#8025](https://github.com/nocobase/nocobase/pull/8025)) by @katherinehhh

  - 修复筛选表单中的字段被字段后端验证规则限制的问题。 ([#8074](https://github.com/nocobase/nocobase/pull/8074)) by @gchust

  - 修复子表格中大字段编辑回显异常问题 ([#8069](https://github.com/nocobase/nocobase/pull/8069)) by @katherinehhh

  - 修复对多关系下拉组件在关闭允许多选时快捷新增报错的问题 ([#8034](https://github.com/nocobase/nocobase/pull/8034)) by @katherinehhh

  - 修复 json 字段快捷编辑报错 ([#8059](https://github.com/nocobase/nocobase/pull/8059)) by @katherinehhh

  - json 字段提交时应为对象 ([#8057](https://github.com/nocobase/nocobase/pull/8057)) by @katherinehhh

  - 修复无法使用回车按键触发筛选操作的问题。 ([#8056](https://github.com/nocobase/nocobase/pull/8056)) by @gchust

  - 修复下拉选择关系对多禁用多选后显示 N/A 的问题 ([#8050](https://github.com/nocobase/nocobase/pull/8050)) by @katherinehhh

  - 修复数据选择器区块批量删除数据失败问题 ([#8023](https://github.com/nocobase/nocobase/pull/8023)) by @katherinehhh

  - 修复添加评论区块时出现当前记录菜单的问题。 ([#8039](https://github.com/nocobase/nocobase/pull/8039)) by @gchust

  - 修复筛选操作中将日期字段切换到时间字段后渲染报错的问题。 ([#8036](https://github.com/nocobase/nocobase/pull/8036)) by @gchust

  - 修复编辑操作和新增操作弹窗的默认标题不正确的问题。 ([#8033](https://github.com/nocobase/nocobase/pull/8033)) by @gchust

  - 修复详情区块里的 JS field 默认样式不正确的问题。 ([#8031](https://github.com/nocobase/nocobase/pull/8031)) by @gchust

  - 修复子表格列宽设置无效问题 ([#8027](https://github.com/nocobase/nocobase/pull/8027)) by @katherinehhh

  - 修复子表格列拖拽无效问题 ([#8026](https://github.com/nocobase/nocobase/pull/8026)) by @katherinehhh

  - 修复无法正确解析关系字段打开的弹窗里的当前弹窗弹窗记录变量。 ([#8019](https://github.com/nocobase/nocobase/pull/8019)) by @gchust

  - 修复 markdown字段 Popover 样式问题 ([#8012](https://github.com/nocobase/nocobase/pull/8012)) by @katherinehhh

  - 修复弹窗中关系字段数据加载导致报错的问题，确保数据展示和功能更流畅。 ([#7985](https://github.com/nocobase/nocobase/pull/7985)) by @gchust

  - 修复树表表格区块不能展开子节点的问题 ([#8011](https://github.com/nocobase/nocobase/pull/8011)) by @katherinehhh

  - 修复联合主键表格区块选中和删除行无效的问题 ([#7978](https://github.com/nocobase/nocobase/pull/7978)) by @katherinehhh

  - 修复跳转页面时页面 tab 的状态和路由不对应的问题 ([#7991](https://github.com/nocobase/nocobase/pull/7991)) by @zhangzhonghe

  - 修复markdown 字段html 模式下超出宽度省略时显示异常的问题 ([#7994](https://github.com/nocobase/nocobase/pull/7994)) by @katherinehhh

  - 修复级联下拉选择器搜索数据不全问题 ([#7990](https://github.com/nocobase/nocobase/pull/7990)) by @katherinehhh

  - 修复非 id 关系字段弹窗详情区块打开报错。 ([#7973](https://github.com/nocobase/nocobase/pull/7973)) by @gchust

  - 修复非 id 关系字段弹窗中关系数据加载错误的问题。 ([#7970](https://github.com/nocobase/nocobase/pull/7970)) by @gchust

  - 修复数字字段格式化精度设置无效的问题 ([#7967](https://github.com/nocobase/nocobase/pull/7967)) by @katherinehhh

  - 修复点击筛选重置按钮时筛选值未清空的问题 ([#7966](https://github.com/nocobase/nocobase/pull/7966)) by @zhangzhonghe

  - 修复新建 2.0 页面的类型不正确的问题 ([#7945](https://github.com/nocobase/nocobase/pull/7945)) by @zhangzhonghe

  - 文本字段在详情区块中超出内容宽度时应默认换行 ([#7955](https://github.com/nocobase/nocobase/pull/7955)) by @katherinehhh

  - 修复多级联选择器清空数据时报错的问题 ([#7943](https://github.com/nocobase/nocobase/pull/7943)) by @katherinehhh

  - 修复树表按钮显示在非树表区块中的问题 ([#7931](https://github.com/nocobase/nocobase/pull/7931)) by @katherinehhh

  - 修复 JS block 区块中的标题和描述不显示的问题。 ([#7913](https://github.com/nocobase/nocobase/pull/7913)) by @gchust

  - 修复区块被隐藏后依然占用页面空间的问题。 ([#7906](https://github.com/nocobase/nocobase/pull/7906)) by @gchust

  - 修复筛选按钮中，重置按钮清空默认条件的问题 ([#7903](https://github.com/nocobase/nocobase/pull/7903)) by @zhangzhonghe

  - 修复新增表单子表单字段权限判断错误的问题 ([#7902](https://github.com/nocobase/nocobase/pull/7902)) by @katherinehhh

  - 修复表单字段配置项缺陷 ([#7867](https://github.com/nocobase/nocobase/pull/7867)) by @katherinehhh

  - 修复富文本字段无法输入默认值及多选字段默认值无法选择多个选项的问题。 ([#7864](https://github.com/nocobase/nocobase/pull/7864)) by @gchust

  - 修复默认的 js field 配置未使用显示模式配置。 ([#7862](https://github.com/nocobase/nocobase/pull/7862)) by @gchust

  - 修复无法正确设置筛选表单日期字段默认值的问题。 ([#7853](https://github.com/nocobase/nocobase/pull/7853)) by @gchust

  - 修复表格区块的快捷编辑操作无法正确更新数据的问题。 ([#7845](https://github.com/nocobase/nocobase/pull/7845)) by @gchust

  - 修复代码编辑器中预览代码时如果使用了jsx语法会报错的问题 ([#7836](https://github.com/nocobase/nocobase/pull/7836)) by @gchust

  - 修复了表格中行记录数据更新后，行操作按钮的联动规则未重新执行的问题，现在在数据变更时联动规则能够正确重新应用。 ([#7832](https://github.com/nocobase/nocobase/pull/7832)) by @gchust

  - 修复筛选表单关系字段报错 “value.replace is not a function” ([#7824](https://github.com/nocobase/nocobase/pull/7824)) by @zhangzhonghe

  - 当前数据表变量不应该可以从筛选组件的变量选择器中被选择 ([#7818](https://github.com/nocobase/nocobase/pull/7818)) by @gchust

  - 修复 onChange 回调传参错误 ([#7807](https://github.com/nocobase/nocobase/pull/7807)) by @zhangzhonghe

  - 表格区块操作列无法被隐藏 ([#7804](https://github.com/nocobase/nocobase/pull/7804)) by @gchust

  - 修复数据表选择器字段无法正确选择数据的问题 ([#7794](https://github.com/nocobase/nocobase/pull/7794)) by @katherinehhh

  - 支持在 AI 员工指令里选择整个变量对象 ([#7791](https://github.com/nocobase/nocobase/pull/7791)) by @gchust

  - 修复表格操作列和 jsColumn 列宽度设置不生效问题 ([#7777](https://github.com/nocobase/nocobase/pull/7777)) by @katherinehhh

  - 页面的事件流设置页面区块数据范围不生效 ([#7788](https://github.com/nocobase/nocobase/pull/7788)) by @gchust

  - 关系字段标题字段设置超出省略不生效 ([#7778](https://github.com/nocobase/nocobase/pull/7778)) by @katherinehhh

  - 更新记录操作按钮的联动规则失效 ([#7774](https://github.com/nocobase/nocobase/pull/7774)) by @gchust

  - 修复 Markdown Vditor 字段必填验证失败的问题 ([#7764](https://github.com/nocobase/nocobase/pull/7764)) by @katherinehhh

  - 修复了变量相关组件中枚举类型的标签未正确显示为对应语言的问题。 ([#7765](https://github.com/nocobase/nocobase/pull/7765)) by @gchust

  - 修复设置前端字段验证后，同时设置必填时，必填标志缺失的问题 ([#7760](https://github.com/nocobase/nocobase/pull/7760)) by @katherinehhh

  - 筛选表单关系字段支持配置数据范围 ([#7761](https://github.com/nocobase/nocobase/pull/7761)) by @zhangzhonghe

  - 修复表单中非时区日期清除异常问题 ([#7759](https://github.com/nocobase/nocobase/pull/7759)) by @katherinehhh

  - 修复联动规则设置的必填字段不能正常工作的问题 ([#7756](https://github.com/nocobase/nocobase/pull/7756)) by @zhangzhonghe

  - 修复子表格中时间字段格式错误问题 ([#7750](https://github.com/nocobase/nocobase/pull/7750)) by @katherinehhh

  - 修复筛选表单日期字段删除“指定日期”时日期变为 Invalid Date 的问题 ([#7746](https://github.com/nocobase/nocobase/pull/7746)) by @katherinehhh

  - 无法加载当前表单变量字段 ([#7745](https://github.com/nocobase/nocobase/pull/7745)) by @gchust

  - 当变量解析结果为数组并被设置为“对一”字段的值或默认值时会导致错误的问题现已修复。此修复确保了对变量解析结果的正确处理，提高了系统的稳定性和准确性。 ([#7735](https://github.com/nocobase/nocobase/pull/7735)) by @gchust

  - 解决了当前表单中关联字段变量无法正确识别的情况，确保表单中的数据处理更准确。 ([#7726](https://github.com/nocobase/nocobase/pull/7726)) by @gchust

  - 修复非可筛选字段错误地显示在筛选选项中，现在仅显示可用字段以供选择。 ([#7700](https://github.com/nocobase/nocobase/pull/7700)) by @gchust

  - 修复数据表关系字段删除后UI 区块显示异常问题 ([#7706](https://github.com/nocobase/nocobase/pull/7706)) by @katherinehhh

  - 修复子表单联动规则的已知问题 ([#7698](https://github.com/nocobase/nocobase/pull/7698)) by @zhangzhonghe

  - 筛选表单中 JS 区块的字段无法被加载 ([#7690](https://github.com/nocobase/nocobase/pull/7690)) by @gchust

  - 修复了字段为只读模式时无法设置默认值的问题，确保在字段不可编辑时能够更顺畅地配置默认值。 ([#7689](https://github.com/nocobase/nocobase/pull/7689)) by @gchust

  - 修复了在弹窗中切换标签页，再次打开二级弹窗并关闭所有弹窗后，页面 URL 未正确更新的问题。 ([#7630](https://github.com/nocobase/nocobase/pull/7630)) by @gchust

  - 修复 usePlugin 缺失上下文时的错误 ([#7627](https://github.com/nocobase/nocobase/pull/7627)) by @chenos

  - 修复切换表格分页时，页面显示异常的问题 ([#7572](https://github.com/nocobase/nocobase/pull/7572)) by @zhangzhonghe

  - 无法为`批量更新`和`更新`操作配置赋值字段 ([#7565](https://github.com/nocobase/nocobase/pull/7565)) by @gchust

  - 修复提交表单后不刷新数据的问题 ([#7560](https://github.com/nocobase/nocobase/pull/7560)) by @zhangzhonghe

  - 修复了代码编辑器中 "运行" 功能无法正常工作的问题，现在用户可以正确执行代码。 ([#7547](https://github.com/nocobase/nocobase/pull/7547)) by @gchust

- **[flow-engine]**
  - 修复筛选操作字段选择框高度太小的问题。 ([#8288](https://github.com/nocobase/nocobase/pull/8288)) by @gchust

  - 修复弹窗标签页内容无法显示的问题 ([#8281](https://github.com/nocobase/nocobase/pull/8281)) by @zhangzhonghe

  - 修复打开子页面时主页面卸载和不必要重渲染的问题 ([#8276](https://github.com/nocobase/nocobase/pull/8276)) by @zhangzhonghe

  - 修复树表中添加子记录操作权限判断错误问题 ([#8240](https://github.com/nocobase/nocobase/pull/8240)) by @katherinehhh

  - 修复部分区块弹窗记录相关变量显示错误的问题。 ([#8060](https://github.com/nocobase/nocobase/pull/8060)) by @gchust

  - 修复操作或者标签页拖动后，新添加的操作和标签页不显示的问题。 ([#8224](https://github.com/nocobase/nocobase/pull/8224)) by @gchust

  - 修复外部数据源权限判断缺陷 ([#8221](https://github.com/nocobase/nocobase/pull/8221)) by @katherinehhh

  - 修复外部数据源操作有权限但被隐藏的问题 ([#8217](https://github.com/nocobase/nocobase/pull/8217)) by @katherinehhh

  - 修复通过弹窗 uid 复用弹窗时，弹窗中的表单提交不会刷新区块数据。 ([#8202](https://github.com/nocobase/nocobase/pull/8202)) by @gchust

  - 修复附件下载错误问题 ([#8154](https://github.com/nocobase/nocobase/pull/8154)) by @katherinehhh

  - 修复 integer 类型作为可选项时未正确转换的问题 ([#8138](https://github.com/nocobase/nocobase/pull/8138)) by @chenos

  - 修复 toggleable 子模型菜单未指定 useModel 时无法切换的问题，自动从 createModelOptions.use 推断 ([#8105](https://github.com/nocobase/nocobase/pull/8105)) by @zhangzhonghe

  - 修复切换字段组件后旧组件的配置项还会显示在菜单里的问题。 ([#8095](https://github.com/nocobase/nocobase/pull/8095)) by @gchust

  - 将 useEffect 移至 FlowModelRenderer 中的条件返回之前 ([#8088](https://github.com/nocobase/nocobase/pull/8088)) by @zhangzhonghe

  - 修复筛选操作字段里出现不支持筛选的关系字段的问题。 ([#8086](https://github.com/nocobase/nocobase/pull/8086)) by @gchust

  - 修复评论编辑后更新保存失败的问题 ([#8035](https://github.com/nocobase/nocobase/pull/8035)) by @katherinehhh

  - 修复点击弹窗中表单提交按钮关闭弹窗时数据区块数据不刷新的问题。 ([#8021](https://github.com/nocobase/nocobase/pull/8021)) by @gchust

  - 修复详情区块中无法正确触发当前记录变量后端解析的问题。 ([#8004](https://github.com/nocobase/nocobase/pull/8004)) by @gchust

  - 修复详情区块按钮的工具栏图标显示错位的问题 ([#7929](https://github.com/nocobase/nocobase/pull/7929)) by @zhangzhonghe

  - 修复打开表格区块的快捷编辑表单报错的问题。 ([#7923](https://github.com/nocobase/nocobase/pull/7923)) by @gchust

  - 修复用户重登陆了 acl 权限数据未重新加载的问题。 ([#7874](https://github.com/nocobase/nocobase/pull/7874)) by @gchust

  - 修复事件流修改后需要刷新页面才会生效的问题。 ([#7811](https://github.com/nocobase/nocobase/pull/7811)) by @gchust

  - 修复了子表单关系字段通过用户界面修改后，其变量无法正确解析的问题。 ([#7799](https://github.com/nocobase/nocobase/pull/7799)) by @gchust

  - 多主键记录编辑表单报错 ([#7798](https://github.com/nocobase/nocobase/pull/7798)) by @gchust

  - 修复了“打开视图”操作的部分配置未正常应用的问题，现在所有相关配置均能按预期正常运行。 ([#7790](https://github.com/nocobase/nocobase/pull/7790)) by @gchust

  - 修复了表格区块翻页后行操作按钮未正确更新的问题，确保按钮功能与当前页面数据匹配。 ([#7779](https://github.com/nocobase/nocobase/pull/7779)) by @gchust

  - 当字段筛选值设置为 false 时，数据范围筛选请求不正确 ([#7766](https://github.com/nocobase/nocobase/pull/7766)) by @gchust

  - 修复数据区块最后一页删除数据后分页请求参数不对的问题 ([#7755](https://github.com/nocobase/nocobase/pull/7755)) by @katherinehhh

  - 无法解析子表单当前对象变量的关系字段值 ([#7751](https://github.com/nocobase/nocobase/pull/7751)) by @gchust

  - 事件流里的步骤不应该显示到配置菜单里 ([#7723](https://github.com/nocobase/nocobase/pull/7723)) by @gchust

  - 弹窗里编辑表单关联字段的数据范围中的当前弹窗记录上下文选择不正确 ([#7675](https://github.com/nocobase/nocobase/pull/7675)) by @gchust

  - 修复了 FlowModel 无法配置自定义 flow action 的问题，现在用户可以正常配置流程操作。 ([#7666](https://github.com/nocobase/nocobase/pull/7666)) by @gchust

  - 修复 js 代码编辑器中的复制粘贴相关代码片段报错。 ([#7641](https://github.com/nocobase/nocobase/pull/7641)) by @gchust

  - 修复 antd 组件的翻译不生效的问题 ([#7621](https://github.com/nocobase/nocobase/pull/7621)) by @zhangzhonghe

  - 引用区块中无法获取当前视图相关变量 ([#7620](https://github.com/nocobase/nocobase/pull/7620)) by @gchust

- **[database]**
  - 查找多对多关系数据时，带上 through scope 条件 ([#8277](https://github.com/nocobase/nocobase/pull/8277)) by @2013xile

  - 查找多对多关系数据时，带上 through scope 条件 ([#8277](https://github.com/nocobase/nocobase/pull/8277)) by @2013xile

  - 修复主数据源与外部数据源之间日期字段查询结果不一致的问题 ([#8181](https://github.com/nocobase/nocobase/pull/8181)) by @cgyrock

  - 查询多目标键（联合唯一键）表时，`filterByTk` 参数支持传入数组 ([#7986](https://github.com/nocobase/nocobase/pull/7986)) by @chenos

  - 使用 `runSQL` 方法执行 SQL 前先设置 `search_path` ([#7611](https://github.com/nocobase/nocobase/pull/7611)) by @2013xile

- **[cli]** license-kit 适配 DB_PASSWORD 为空的情况 ([#8220](https://github.com/nocobase/nocobase/pull/8220)) by @jiannx

- **[server]**
  - 支持外部数据源使用 Snowflake ID  (53 bits) 类型字段 ([#8185](https://github.com/nocobase/nocobase/pull/8185)) by @2013xile

  - 更新license-kit至最新版本 ([#8173](https://github.com/nocobase/nocobase/pull/8173)) by @jiannx

  - 保留复制引用字段时的 field.targetKey 值 ([#7599](https://github.com/nocobase/nocobase/pull/7599)) by @chenos

  - 主键迁移脚本报错 ([#7563](https://github.com/nocobase/nocobase/pull/7563)) by @2013xile

- **[acl]**
  - 修复 `acl.can` API 当角色是 `root` 是返回 `null` 的问题 ([#8150](https://github.com/nocobase/nocobase/pull/8150)) by @mytharcher

  - 修复 acl.allow 被提前执行的问题 ([#8065](https://github.com/nocobase/nocobase/pull/8065)) by @chenos

- **[utils]**
  - 修复筛选按钮报错“Invalid filter item type” ([#7838](https://github.com/nocobase/nocobase/pull/7838)) by @zhangzhonghe

  - 修复事件流报“Unrecognized operation”的错误 ([#7835](https://github.com/nocobase/nocobase/pull/7835)) by @zhangzhonghe

- **[操作：批量更新]** 修复外部数据源的批量更新操作报错的问题。 ([#8320](https://github.com/nocobase/nocobase/pull/8320)) by @gchust

- **[数据可视化]**
  - 修复 AI 饼图 label 展示错误，为基于数据集的饼图提供归一化选项。<br/> 图表排序字段仅支持从已选择字段中过滤。<br/> ([#8309](https://github.com/nocobase/nocobase/pull/8309)) by @heziqiang

  - 修复图表 SQL 模式选择外部数据源的问题；<br/>修复图表区块请求时展示 loading 的问题；<br/> 修复初始空图表取消配置回滚后报错的问题； ([#8169](https://github.com/nocobase/nocobase/pull/8169)) by @heziqiang

  - 修复图表配置保存后区块没有更新的问题 ([#7920](https://github.com/nocobase/nocobase/pull/7920)) by @heziqiang

  - 仅在图表预览时使用 sql 数据查询的 debug 模式 ([#7893](https://github.com/nocobase/nocobase/pull/7893)) by @heziqiang

  - 图表初始化时使用 sql:runById 接口请求查询数据 ([#7677](https://github.com/nocobase/nocobase/pull/7677)) by @heziqiang

  - 修复图表SQL查询中的变量自动解析问题 ([#7642](https://github.com/nocobase/nocobase/pull/7642)) by @heziqiang

  - 修复图表数据请求参数orders丢失的问题 ([#7636](https://github.com/nocobase/nocobase/pull/7636)) by @heziqiang

  - 修复因事件注册超时导致图表无法显示的问题 ([#7608](https://github.com/nocobase/nocobase/pull/7608)) by @heziqiang

- **[操作：导入记录]**
  - 文件导入时进行空间校验 ([#8285](https://github.com/nocobase/nocobase/pull/8285)) by @jiannx

  - 修复导入操作遇到错误时，消息中的行索引总是显示为 1 的问题 ([#8244](https://github.com/nocobase/nocobase/pull/8244)) by @mytharcher

  - 同步等待导入后触发的 `afterCreate` 事件完成 ([#8158](https://github.com/nocobase/nocobase/pull/8158)) by @2013xile

  - 修复导入按钮中导入字段列表显示错误的问题 ([#7710](https://github.com/nocobase/nocobase/pull/7710)) by @katherinehhh

- **[文件管理器]**
  - 修复上传文件到 AWS S3 大于 5MB 时报错的问题 ([#8275](https://github.com/nocobase/nocobase/pull/8275)) by @mytharcher

  - 修复预览 OSS 中的 `.txt` 文件时，中文内容显示为乱码的问题 ([#8161](https://github.com/nocobase/nocobase/pull/8161)) by @mytharcher

  - 修复List 区块、Grid card 区块中子详情数据展示错误问题 ([#8087](https://github.com/nocobase/nocobase/pull/8087)) by @katherinehhh

  - 修复阅读态子表格中 Attachment 字段数据未正常加载问题 ([#8073](https://github.com/nocobase/nocobase/pull/8073)) by @katherinehhh

  - 修复表单附件字段上传未按设置使用指定文件存储器的问题 ([#7947](https://github.com/nocobase/nocobase/pull/7947)) by @katherinehhh

  - 修复表格区块配置字段相关缺陷 ([#7843](https://github.com/nocobase/nocobase/pull/7843)) by @katherinehhh

- **[异步任务管理器]**
  - 修复取消后台任务的提示语言 ([#8245](https://github.com/nocobase/nocobase/pull/8245)) by @mytharcher

  - 修复取消后台任务的提示语言 ([#8245](https://github.com/nocobase/nocobase/pull/8245)) by @mytharcher

- **[工作流]**
  - 修复“外部数据源”刷新后绑定的数据表事件失效的问题 ([#8207](https://github.com/nocobase/nocobase/pull/8207)) by @cgyrock

  - 修复“外部数据源”刷新后绑定的数据表事件失效的问题 ([#8207](https://github.com/nocobase/nocobase/pull/8207)) by @cgyrock

  - 修复删除工作流版本（非主版本）时的报错 ([#8203](https://github.com/nocobase/nocobase/pull/8203)) by @mytharcher

  - 修复手动执行时，选择数据组件的加载列表展示不全的问题 ([#8187](https://github.com/nocobase/nocobase/pull/8187)) by @mytharcher

  - 修复配置绑定工作流按钮中添加工作流点击后卡死的问题 ([#7541](https://github.com/nocobase/nocobase/pull/7541)) by @mytharcher

- **[UI 模板]**
  - 修复部分旧弹窗转换成模板后无法被正确复用的问题。 ([#8283](https://github.com/nocobase/nocobase/pull/8283)) by @gchust

  - 修复字段模板无法应用联动规则和布局的问题。 ([#8266](https://github.com/nocobase/nocobase/pull/8266)) by @gchust

  - 修复关系字段弹窗打开非关系字段弹窗模板报错的问题。 ([#8233](https://github.com/nocobase/nocobase/pull/8233)) by @gchust

- **[数据表：树]** 批量创建树表节点后，更新路径表 ([#8267](https://github.com/nocobase/nocobase/pull/8267)) by @2013xile

- **[AI 员工]**
  - 修复 LLM 节点消息内容未显示的问题 ([#8257](https://github.com/nocobase/nocobase/pull/8257)) by @heziqiang

  - 修复AI对话记录文本不换行的问题 ([#8096](https://github.com/nocobase/nocobase/pull/8096)) by @heziqiang

  - 修复AI添加数据源角色名称未被编译的问题 ([#8076](https://github.com/nocobase/nocobase/pull/8076)) by @heziqiang

  - 修复部分当前记录字段无法展示在变量选择列表里的问题。 ([#8053](https://github.com/nocobase/nocobase/pull/8053)) by @gchust

  - 修复AI员工生成 SQL 异常输出的问题 ([#7956](https://github.com/nocobase/nocobase/pull/7956)) by @heziqiang

  - 在 v1 页面隐藏AI员工对话按钮 ([#7829](https://github.com/nocobase/nocobase/pull/7829)) by @cgyrock

  - 优化 Gemini 的 Web Search 逻辑与提示 ([#7720](https://github.com/nocobase/nocobase/pull/7720)) by @cgyrock

  - 修复了在选择包含API资源的区块时未正确获取对应数据的问题。 ([#7688](https://github.com/nocobase/nocobase/pull/7688)) by @cgyrock

  - 修复了移动端布局界面中AI员工对话框的布局问题 ([#7591](https://github.com/nocobase/nocobase/pull/7591)) by @cgyrock

  - 修复AI员工建模工具在使用chatGPT-4o时的异常。 ([#7566](https://github.com/nocobase/nocobase/pull/7566)) by @cgyrock

  - 修复 AI 员工权限配置页报错 ([#7548](https://github.com/nocobase/nocobase/pull/7548)) by @2013xile

- **[工作流：人工处理节点]**
  - 修复取消已删除工作流的执行计划时报错的问题 ([#8258](https://github.com/nocobase/nocobase/pull/8258)) by @mytharcher

  - 修复人工待办列表使用了错误的列表 API 的问题 ([#8144](https://github.com/nocobase/nocobase/pull/8144)) by @mytharcher

- **[数据表字段：自动编码]**
  - 修复运行 field-sequence 插件的 repair 命令时遇到当前环境不存在的 collection 时报错的问题 ([#8251](https://github.com/nocobase/nocobase/pull/8251)) by @cgyrock

  - 提升sequence字段插件处理repair命令时的健壮性 ([#8139](https://github.com/nocobase/nocobase/pull/8139)) by @cgyrock

- **[部门]** 修复聚合搜索无法定位用户的问题 ([#8222](https://github.com/nocobase/nocobase/pull/8222)) by @2013xile

- **[数据表字段：多对多 (数组)]** 修复目标键类型为 Snowflake ID (53 bits) 时无法创建多对多（数组）字段的问题 ([#8226](https://github.com/nocobase/nocobase/pull/8226)) by @2013xile

- **[授权设置]**
  - 修复授权插件显示异常 ([#8214](https://github.com/nocobase/nocobase/pull/8214)) by @jiannx

  - 修复 plugin-license ts构建异常 ([#8183](https://github.com/nocobase/nocobase/pull/8183)) by @jiannx

  - 授权优化，添加提示信息 ([#7993](https://github.com/nocobase/nocobase/pull/7993)) by @jiannx

- **[数据表字段：公式]**
  - 修复 BigInt 字段无法添加到详情区块和表单区块的问题 ([#8201](https://github.com/nocobase/nocobase/pull/8201)) by @katherinehhh

  - 修复筛选操作和筛选表单中公式字段无法输入值的问题。 ([#8102](https://github.com/nocobase/nocobase/pull/8102)) by @gchust

  - 修复无法将公式字段添加到筛选表单的问题。 ([#8071](https://github.com/nocobase/nocobase/pull/8071)) by @gchust

- **[区块：地图]** 修复菜单切换后地图缩略等级显示不正确的问题 ([#8193](https://github.com/nocobase/nocobase/pull/8193)) by @katherinehhh

- **[通知：电子邮件]** 修复邮件通知连接限制 ([#8119](https://github.com/nocobase/nocobase/pull/8119)) by @jiannx

- **[区块：操作面板]** 优化操作面板 List 布局间距 ([#8084](https://github.com/nocobase/nocobase/pull/8084)) by @katherinehhh

- **[数据源管理]** 修复外部数据源更新密码报错问题 ([#8024](https://github.com/nocobase/nocobase/pull/8024)) by @cgyrock

- **[操作：导出记录]**
  - 修复导出按钮可导出字段列表缺少系统字段的问题 ([#8002](https://github.com/nocobase/nocobase/pull/8002)) by @katherinehhh

  - 修复导出按钮中可导出字段列表显示错误问题 ([#7714](https://github.com/nocobase/nocobase/pull/7714)) by @katherinehhh

- **[前端流引擎]**
  - 修复记录变量解析问题：当同时使用记录本身和其字段时，始终返回完整记录。 ([#7917](https://github.com/nocobase/nocobase/pull/7917)) by @gchust

  - 联动规则变量赋值无法正确解析变量 ([#7684](https://github.com/nocobase/nocobase/pull/7684)) by @gchust

  - 修复上级弹窗中的记录变量解析不正确的问题。 ([#7637](https://github.com/nocobase/nocobase/pull/7637)) by @gchust

- **[多应用管理器（已废弃）]**
  - 子应用停止后发布同步信号，通知其他节点停止对应子应用 ([#7849](https://github.com/nocobase/nocobase/pull/7849)) by @2013xile

  - 子应用状态遥测指标不能正确收集 ([#7772](https://github.com/nocobase/nocobase/pull/7772)) by @2013xile

  - 修复不能禁用旧的多应用管理 ([#7633](https://github.com/nocobase/nocobase/pull/7633)) by @jiannx

  - 修复多应用数据迁移前端口校验 ([#7540](https://github.com/nocobase/nocobase/pull/7540)) by @jiannx

- **[区块：网格卡片]** 修复列表区块和网格卡片区块数据显示同一条的问题 ([#7773](https://github.com/nocobase/nocobase/pull/7773)) by @katherinehhh

- **[区块：模板（已废弃）]** 修复了打开或关闭弹窗时会触发多余区块模板请求的问题 ([#7561](https://github.com/nocobase/nocobase/pull/7561)) by @gchust

- **[操作：导出记录 Pro]** 修复附件导出中「为每条记录生成文件夹」选项不生效的问题 by @katherinehhh

- **[数据源：外部 PostgreSQL]** 修复“外部数据源”刷新后绑定的数据表事件失效的问题 by @cgyrock

- **[操作：导入记录 Pro]**
  - 修复导入的重复字段检查逻辑，唯一字段为 null 时将报错 by @mytharcher

  - 修复导入pro操作允许上传时修改导入选项不生效的问题 by @katherinehhh

  - 修复导入按钮中导入pro字段列表显示错误的问题 by @katherinehhh

- **[数据表：连接外部数据（FDW）]**
  - 修复连接大写表名表时的触发器报错 by @2013xile

  - 修复大写表名表加载失败的问题 by @2013xile

- **[数据源：外部 SQL Server]** 修复 `encrypt` 和 `trustServerCertificate` 选项不可用的问题 by @2013xile

- **[多空间]**
  - 移动端支持空间切换 by @jiannx

  - 修复在系统表中创建其他字段 by @jiannx

  - 修复多空间关联用户 by @jiannx

- **[HTTP 请求加密]** 统一 qs 数组解析格式为 brackets by @chenos

- **[评论]**
  - 修复评论区块删除记录失败的问题 by @katherinehhh

  - 修复评论区块引用评论失效问题 by @katherinehhh

  - 非评论表使用评论区块时显示提示“当前表不是评论表，无法使用评论区块” by @katherinehhh

- **[模板打印]**
  - 修复详情区块模板打印按钮报错问题 by @katherinehhh

  - 修复表格行中模板打印操作添加模板失败问题 by @katherinehhh

  - 修复模板打印请求没有适配外部数据源的问题 by @katherinehhh

- **[多应用]**
  - 多应用代理支持缓存 by @jiannx

  - 多应用数据迁移不触发hooks by @jiannx

- **[plugin-demo-platform]** demo支持自动关闭应用 by @jiannx

- **[数据源：外部 Oracle]** 修复“外部数据源”刷新后绑定的数据表事件失效的问题 by @cgyrock

- **[工作流：审批]**
  - 修复无关的审批待办任务被错误的修改状态为“未处理”的问题 by @mytharcher

  - 修复审批通过时对关系字段创建了新数据的问题 by @mytharcher

  - 修复重复回滚同一事务的问题 by @mytharcher

  - 修复工作流删除后取消执行计划时报错的问题 by @mytharcher

  - 修复审批人提交表单中已填写的内容消失的问题 by @mytharcher

  - 修复审批通过时对对多关系字段创建了新数据的问题 by @mytharcher

  - 修复创建审批信息区块报错的问题 by @mytharcher

- **[邮件管理]**
  - 对异常数据进行兜底处理 by @jiannx

  - 修复草稿问题 by @jiannx

  - 不同步gmail的定时状态 by @jiannx

  - ShadowHtml刷新报错 by @jiannx

  - 允许修正邮件父节点id by @jiannx

- **[迁移管理]**
  - 修复迁移时数据中的换行符丢失问题 by @cgyrock

  - 修复用户输入的迁移描述丢失问题，并使用当前时间作为默认迁移描述 by @cgyrock

