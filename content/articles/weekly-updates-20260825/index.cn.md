汇总一周产品更新日志，最新发布可前往[我们的博客](https://www.nocobase.com/cn/blog/timeline)查看。

**NocoBase 目前更新包括三个分支：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

`main`：截至目前最稳定的版本，推荐安装此版本。

`next`：包含即将发布的新功能，经过初步测试的版本，可能存在部分已知或未知问题。主要面向测试用户，用于收集反馈和进一步优化功能。适合愿意提前体验新功能并提供反馈的测试用户。

`develop`：开发中的版本，包含最新的功能代码，可能尚未完成或存在较多不稳定因素，主要用于内部开发和快速迭代。适合对产品功能前沿发展感兴趣的技术用户，但可能存在较多问题或不完整功能，不建议在生产环境中使用。

## main

![main.png](https://static-docs.NocoBase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### v2.2.3

*发布日期: 2026-08-26*

### 🐛 修复

- **[client-v2]** 修复 v2 关系字段切换为弹窗选择时的渲染错误。 ([#10419](https://github.com/nocobase/nocobase/pull/10419)) by @katherinehhh
- **[公开表单]** 修复启用公开表单后，V2 普通表单配置中显示两个“提交”操作的问题。 ([#10417](https://github.com/nocobase/nocobase/pull/10417)) by @katherinehhh
- **[AI LLM：GigaChat]** 修复启用 GigaChat AI 服务后应用在 iOS 15.6 及更早版本上启动报错的问题 ([#10418](https://github.com/nocobase/nocobase/pull/10418)) by @cgyrock
- **[企业微信]** 修复企微自动登录生命周期及通知配置表单在 client-v2 中的兼容问题。 by @chenzhizdt

### v2.2.2

*发布日期: 2026-08-25*

### 🚀 优化

- **[undefined]** 明确 Markdown、外部页面和第三方服务使用公开 NocoBase 文件 URL 的方式 ([#10406](https://github.com/nocobase/nocobase/pull/10406)) by @mytharcher
  参考文档：[存储引擎概述](https://docs.nocobase.com/cn/file-manager/storage/)

### 🐛 修复

- **[权限控制]** 修复 `firstOrCreate` 或 `updateOrCreate` 可在缺少查看或编辑权限时读取或修改已有记录的 ACL 绕过漏洞。 ([#10403](https://github.com/nocobase/nocobase/pull/10403)) by @mytharcher
- **[工作流]**

  - 修复 v2 工作流新增数据、更新数据节点中的选项字段无法选择配置值的问题。 ([#10414](https://github.com/nocobase/nocobase/pull/10414)) by @katherinehhh
  - 修复定时任务按 cron 重复时，会在「开始于」时刻额外触发一次的问题 ([#10410](https://github.com/nocobase/nocobase/pull/10410)) by @Tespera
  - 修复工作流待办中心菜单，使当前菜单可再次点击折叠并保留选中高亮状态 ([#10404](https://github.com/nocobase/nocobase/pull/10404)) by @mytharcher
  - 修复子流程使用数据表事件未配置预加载关联字段且按记录 ID 调用时报错的问题 ([#10407](https://github.com/nocobase/nocobase/pull/10407)) by @mytharcher
- **[UI 模板]** 修复关闭包含引用区块的审批任务时报错的问题 ([#10415](https://github.com/nocobase/nocobase/pull/10415)) by @zhangzhonghe

### v2.2.1

*发布日期: 2026-08-24*

### 🐛 修复

- **[UI 布局]** 修复升级后桌面端路由可能为空的问题 ([#10405](https://github.com/NocoBase/NocoBase/pull/10405)) by @zhangzhonghe
- **[操作：导出记录 Pro]** 修复 Pro 导出字段变更后拖拽排序可能崩溃的问题。 by @katherinehhh

### v2.2.0

*发布日期: 2026-08-22*

### 🎉 新特性

- **[client-v2]**

  - 页面、子页面和弹窗的 Tab 支持配置联动规则 ([#10099](https://github.com/NocoBase/NocoBase/pull/10099)) by @zhangzhonghe
  - 为 V2 操作面板和左上角应用切换入口新增可配置的应用和工作区入口能力。 ([#9893](https://github.com/NocoBase/NocoBase/pull/9893)) by @katherinehhh
  - 新增 legacy 和 modern 路由配置环境变量。 ([#9891](https://github.com/NocoBase/NocoBase/pull/9891)) by @Molunerfinn
- **[undefined]**

  - 为 V2 操作面板和应用切换入口新增可配置的应用和工作区入口。 by @katherinehhh
  - 新增多工作区插件 by @zhangzhonghe
- **[AI 员工]**

  - 为 AI 员工新增可配置的自动或按需知识库召回，并按用户角色过滤可访问的知识库。 ([#10362](https://github.com/NocoBase/NocoBase/pull/10362)) by @cgyrock
  - 新增 DeepSeek V4 Flash 和 V4 Pro Responses API 支持，包括推理续调、原生联网搜索、引用解析和模型级联网搜索控制 ([#10337](https://github.com/NocoBase/NocoBase/pull/10337)) by @cgyrock
  - 现在可以在 AI 员工设置页面为员工分配插件提供的技能。 ([#10237](https://github.com/NocoBase/NocoBase/pull/10237)) by @cgyrock
  - 支持从 LLM 服务 CLI 命令跳转到 UI，并在创建服务时预选提供商。 ([#10210](https://github.com/NocoBase/NocoBase/pull/10210)) by @cgyrock
  - 新增可嵌入页面的 AI 聊天框区块，支持会话作用域、AI 员工任务和共享聊天运行时。 ([#10125](https://github.com/NocoBase/NocoBase/pull/10125)) by @cgyrock
  - JS 区块支持注册前端 AI 工具 ([#10121](https://github.com/NocoBase/NocoBase/pull/10121)) by @2013xile
  - 新增可在 JS 区块中触发 AI employee task 的 RunJS API。 ([#10061](https://github.com/NocoBase/NocoBase/pull/10061)) by @cgyrock
  - 新增结构化 AI 使用记录，便于统计使用情况 ([#10004](https://github.com/NocoBase/NocoBase/pull/10004)) by @2013xile
  - 为 AI 知识库新增外部向量存储配置表单。 ([#9723](https://github.com/NocoBase/NocoBase/pull/9723)) by @cgyrock
- **[WEB 客户端]** 按需返回应用语言资源命名空间，减少不必要的语言数据 ([#10175](https://github.com/NocoBase/NocoBase/pull/10175)) by @2013xile
- **[公开表单]** 在 v1 公开表单中支持创建 v2 的表单，禁止创建 v1 的表单 ([#10045](https://github.com/NocoBase/NocoBase/pull/10045)) by @zhangzhonghe
- **[区块：评论]**

  - 优化评论区块设置，支持数据范围、默认排序、下拉选择分页大小、可选跳转最后一页，以及基于标量字段的归属字段配置。 ([#9954](https://github.com/NocoBase/NocoBase/pull/9954)) by @jiannx
  - 新增评论区块。 ([#9916](https://github.com/NocoBase/NocoBase/pull/9916)) by @jiannx
- **[通知：电子邮件]** 将工作流通知节点客户端迁移到 v2，恢复按渠道显示的通知配置表单，并保持已迁移通知配置在旧版工作流路由中的兼容性。 ([#9817](https://github.com/NocoBase/NocoBase/pull/9817)) by @jiannx
- **[工作流：邮件发送节点]** 新增工作流邮件发送节点配置的 v2 客户端支持。 ([#9825](https://github.com/NocoBase/NocoBase/pull/9825)) by @jiannx
- **[UI 布局]** 增加对移动端布局的支持 ([#9641](https://github.com/NocoBase/NocoBase/pull/9641)) by @zhangzhonghe
- **[工作流]**

  - 新增工作流数据库事务作用域支持。 ([#9742](https://github.com/NocoBase/NocoBase/pull/9742)) by @mytharcher
    参考文档：[数据库事务](docs/docs/cn/workflow/nodes/transaction.md)
  - 将工作流设置页迁移到 v2 客户端，并将可复用的可拖拽分类页签组件抽离到 `@NocoBase/client-v2`。 ([#9645](https://github.com/NocoBase/NocoBase/pull/9645)) by @Molunerfinn
- **[多空间]**

  - 新增默认空间配置，新建用户会自动加入所选默认空间。 by @jiannx
  - 为 v1 和 v2 的空间切换器及空间管理新增按空间显示名称的防抖搜索 by @jiannx
- **[AI: 知识库]**

  - 支持从 CLI 命令跳转到向量数据库创建和编辑 UI，并在新建时预选提供商。 by @cgyrock
  - 新增知识库管理的角色只读和读写权限，支持创建人所有权及只读管理视图。 by @cgyrock
- **[工作流：数据库事务节点]**

  - 新增数据库事务工作流节点插件。 by @mytharcher
  - 为工作流数据库事务节点新增 client-v2 实现，并保留旧版客户端兼容入口。 by @katherinehhh
- **[历史记录]** 为记录历史插件新增 client v2 支持。 by @jiannx
- **[工作流：审批]**

  - 新版客户端审批发起列表新增使用提示，并将可发起审批调整为卡片式选择 by @mytharcher
  - 审批发起列表新增使用提示，并将可发起审批调整为卡片式选择 by @mytharcher
  - 为 v2 页面新增审批发起和待办区块 by @zhangzhonghe
- **[邮件管理]**

  - 邮件同步现已改为可恢复的后台任务，提供状态历史和更安全的全量同步清理，并正确包含 Gmail 垃圾邮件和已删除邮件。 by @jiannx
  - 邮件管理客户端迁移到 v2。 by @jiannx
- **[认证：LDAP]** 新增 LDAP 用户同步配置的客户端 v2 支持。 by @chenzhizdt

### 🚀 优化

- **[undefined]**

  - 文件 URL 现在使用稳定的 NocoBase 访问地址，可在跳转到存储地址前完成权限校验。 ([#10103](https://github.com/NocoBase/NocoBase/pull/10103)) by @mytharcher
  - 优化俄语文档翻译，提升措辞、可读性和术语一致性。 ([#9816](https://github.com/NocoBase/NocoBase/pull/9816)) by @sembaev-a-a
  - 优化 AI 知识库检索和相关文档。 ([#9765](https://github.com/NocoBase/NocoBase/pull/9765)) by @cgyrock
  - - ([#9754](https://github.com/NocoBase/NocoBase/pull/9754)) by @sembaev-a-a
- **[cli]** `nb api resource create` 的 `--values` 支持传 JSON 数组，一次请求创建多条记录。 ([#10325](https://github.com/NocoBase/NocoBase/pull/10325)) by @Molunerfinn
  参考文档：[nb api resource create](https://github.com/NocoBase/NocoBase/blob/fix/cli-resource-create-array-values/docs/docs/cn/api/cli/api/resource/create.md)
- **[client-v2]**

  - 重构 Markdown Vditor 为统一的插件化 Markdown 引擎，并为已有 Markdown 区块和 Vditor 字段插件保留兼容桥。 ([#9998](https://github.com/NocoBase/NocoBase/pull/9998)) by @katherinehhh
  - 重构 Markdown Vditor 为统一的插件化 Markdown 引擎，并为已有 Markdown 区块和 Vditor 字段插件保留兼容桥。 ([#9998](https://github.com/NocoBase/NocoBase/pull/9998)) by @katherinehhh
  - 调整 v2 系统设置菜单顺序和页面面板高度，使其与设置中心的统一布局保持一致。 ([#9849](https://github.com/NocoBase/NocoBase/pull/9849)) by @katherinehhh
  - 修复 Client V2 插件管理卡片在插件使用共享或历史设置路径时缺少 Settings 入口的问题。 ([#9852](https://github.com/NocoBase/NocoBase/pull/9852)) by @katherinehhh
- **[工作流]**

  - 新版客户端待办中心按工作流分组展示，并统一各类待办的工作流筛选行为。 ([#10374](https://github.com/NocoBase/NocoBase/pull/10374)) by @mytharcher
  - 工作流创建和更新节点为字符串及文本字段赋值时，现已支持将文字与变量拼接使用 ([#10238](https://github.com/NocoBase/NocoBase/pull/10238)) by @mytharcher
  - 待办中心现可按工作流筛选和快速导航，并展示各工作流的待办数量 ([#10173](https://github.com/NocoBase/NocoBase/pull/10173)) by @mytharcher
  - 改进工作流 pending 任务处理，将启动、继续和重跑任务持久化到事件队列中。 ([#9846](https://github.com/NocoBase/NocoBase/pull/9846)) by @mytharcher
  - 工作流 v2 画布中暂不支持的节点现在会保留普通节点卡片操作，并将节点类型显示为暂不支持。 ([#10054](https://github.com/NocoBase/NocoBase/pull/10054)) by @mytharcher
  - 简化工作流 v2 创建/更新节点的字段赋值配置，优化已选变量展示，并避免生成未使用的赋值表单模型数据。 ([#9887](https://github.com/NocoBase/NocoBase/pull/9887)) by @katherinehhh
  - 导出工作流 v2 画布扩展 API，供下游工作流节点插件复用。 ([#9834](https://github.com/NocoBase/NocoBase/pull/9834)) by @katherinehhh
  - 将工作流输出节点配置迁移到 v2，并让 v2 工作流结果查看器对齐旧版字符串结果的展示行为。 ([#9813](https://github.com/NocoBase/NocoBase/pull/9813)) by @Molunerfinn
  - 迁移工作流的结束节点到 v2 版本。 ([#9795](https://github.com/NocoBase/NocoBase/pull/9795)) by @Molunerfinn
- **[AI 员工]**

  - 简化 AI 知识库向量配置 ([#10178](https://github.com/NocoBase/NocoBase/pull/10178)) by @cgyrock
  - 改进 AI 员工在配置校验、数据权限、记录上下文、附件、工作流任务、会话恢复及代码编辑器生命周期方面的可靠性。 ([#10162](https://github.com/NocoBase/NocoBase/pull/10162)) by @cgyrock
  - 修复 AI 员工模型设置保存、禁用员工创建会话以及移动端聊天框布局行为的问题。 ([#10120](https://github.com/NocoBase/NocoBase/pull/10120)) by @cgyrock
  - 改进 AI 员工工具设置、数据查询约束、关联字段查询，以及异常工具调用的诊断信息保留。 ([#10042](https://github.com/NocoBase/NocoBase/pull/10042)) by @cgyrock
  - 优化 AI 员工网页搜索，减少不必要的模型推理，并更好地使用各 Provider 的思考控制参数。 ([#9996](https://github.com/NocoBase/NocoBase/pull/9996)) by @cgyrock
  - 在 v2 界面中移除了已废弃的 AI 员工 Datasource 设置入口和上下文选择入口。 ([#9988](https://github.com/NocoBase/NocoBase/pull/9988)) by @cgyrock
  - 将 AI 员工插件迁移到 client-v2。 ([#9794](https://github.com/NocoBase/NocoBase/pull/9794)) by @cgyrock
- **[文件管理器]** 新增独立的存储配置，可分别控制返回原始文件 URL 和允许公开访问文件 URL ([#10160](https://github.com/NocoBase/NocoBase/pull/10160)) by @mytharcher
- **[工作流：人工处理节点]** 在新版待办中心显示人工任务并引导用户前往旧版页面处理 ([#10085](https://github.com/NocoBase/NocoBase/pull/10085)) by @zhangzhonghe
- **[前端流引擎]**

  - UI 搭建 api 支持多工作区。 ([#10072](https://github.com/NocoBase/NocoBase/pull/10072)) by @gchust
  - 开放 runjs 运行环境限制。 ([#9841](https://github.com/NocoBase/NocoBase/pull/9841)) by @gchust
- **[数据表: SQL]** 非用户可见变更；为已迁移插件补充 client-v2 单元测试覆盖。 ([#9967](https://github.com/NocoBase/NocoBase/pull/9967)) by @katherinehhh
- **[数据可视化]** 改进图表事件脚本，支持安全清理自定义事件处理器 ([#10034](https://github.com/NocoBase/NocoBase/pull/10034)) by @2013xile
- **[数据源管理]**

  - 在 v2 主数据源中新建数据表菜单中隐藏已废弃的数据表模板。 ([#10009](https://github.com/NocoBase/NocoBase/pull/10009)) by @katherinehhh
  - V2 配置字段中展示外部数据源不支持的字段，并统一备份恢复表单标签样式。 ([#9983](https://github.com/NocoBase/NocoBase/pull/9983)) by @katherinehhh
- **[区块：评论]**

  - 改进评论提交按钮配置，并修复相关的评论和用户表单提交问题。 ([#10002](https://github.com/NocoBase/NocoBase/pull/10002)) by @jiannx
  - 将新的评论区块插件加入 NocoBase 预设，并将旧评论插件标记为废弃。 ([#9936](https://github.com/NocoBase/NocoBase/pull/9936)) by @jiannx
- **[用户]**

  - 完善用户插件 client-v2 测试覆盖率。 ([#9975](https://github.com/NocoBase/NocoBase/pull/9975)) by @jiannx
  - 优化用户和权限 v2 页面布局及部门树行为。 ([#9780](https://github.com/NocoBase/NocoBase/pull/9780)) by @jiannx
- **[工作流：JavaScript 节点]**

  - 调整 v2 工作流请求节点和邮件节点配置字段，使其布局和附件变量选择行为与旧版保持一致。 ([#9952](https://github.com/NocoBase/NocoBase/pull/9952)) by @jiannx
  - 将 JavaScript 工作流节点迁移到 client-v2 ([#9805](https://github.com/NocoBase/NocoBase/pull/9805)) by @jiannx
- **[UI 布局]** 优化 v2 移动端标签栏，标签过多时可横向滚动，避免图标重叠。 ([#9949](https://github.com/NocoBase/NocoBase/pull/9949)) by @katherinehhh
- **[工作流：聚合查询节点]** 优化 v2 工作流更新节点和聚合查询节点的字段选择逻辑，并修复聚合查询节点关联数据表选择的切换异常。 ([#9938](https://github.com/NocoBase/NocoBase/pull/9938)) by @katherinehhh
- **[日志]** 为 client v2 运行时添加日志设置页面。 ([#9933](https://github.com/NocoBase/NocoBase/pull/9933)) by @jiannx
- **[表单草稿]** 迁移表单草稿插件至 client v2。 ([#9910](https://github.com/NocoBase/NocoBase/pull/9910)) by @gchust
- **[工作流：JSON 计算]** 将工作流 JSON 计算节点配置界面迁移到 v2 工作流画布，并保留 v1 画布兼容性。 ([#9902](https://github.com/NocoBase/NocoBase/pull/9902)) by @mytharcher
- **[用户数据同步]** 新增用户数据同步设置的新版界面支持 ([#9837](https://github.com/NocoBase/NocoBase/pull/9837)) by @2013xile
- **[公开表单]** 区分 V1 和 V2 的公开表单列表，并修复 V2 Configure 进入可配置表单详情页的问题。 ([#9851](https://github.com/NocoBase/NocoBase/pull/9851)) by @katherinehhh
- **[备份管理器]**

  - 优化备份管理表格样式及长文件名显示。 ([#9864](https://github.com/NocoBase/NocoBase/pull/9864)) by @katherinehhh
  - `dataCategory` 标记为 `'runtime'` 的数据表现在会自动从备份中排除。 ([#9804](https://github.com/NocoBase/NocoBase/pull/9804)) by @cgyrock
- **[工作流：自定义操作事件]** 将工作流触发器及绑定工作流设置迁移到 client-v2，涵盖动作触发器、自定义动作触发器、请求拦截触发器，以及提交/更新动作的工作流绑定设置。 ([#9845](https://github.com/NocoBase/NocoBase/pull/9845)) by @mytharcher
- **[工作流：HTTP 请求节点]** 工作流 HTTP 请求节点迁移到 client-v2。 ([#9806](https://github.com/NocoBase/NocoBase/pull/9806)) by @jiannx
- **[翻译测试工具]** 为翻译测试工具新增 client v2 设置页面。 ([#9744](https://github.com/NocoBase/NocoBase/pull/9744)) by @jiannx
- **[权限控制]** 对齐 v2 用户和权限设置页与 v1 的行为，包括分页总数显示、部门树交互、选中样式，以及权限面板内部滚动。 ([#9810](https://github.com/NocoBase/NocoBase/pull/9810)) by @jiannx
- **[AI: 知识库]**

  - 统一向量数据库列表与其他设置表格的卡片样式 by @cgyrock
  - 现在可以直接为每个 AI 知识库配置向量数据库和 Embedding 设置 by @cgyrock
  - 将 AI 知识库设置页迁移到 v2 客户端，并修复知识库和向量存储页面的布局与加载问题。 by @cgyrock
- **[HTTP 请求加密]** 新增 HTTP 请求加密插件的 v2 客户端支持，确保 v2 客户端中的查询参数继续被加密。 by @jiannx
- **[工作流：数据库事务节点]** 优化 v2 工作流数据库事务节点布局，使分支标签和提交标记拥有更合适的间距。 by @katherinehhh
- **[工作流：子流程]** 基于工作流引擎重构，调整等待队列处理策略 by @mytharcher
- **[文件存储：S3 (Pro)]**

  - S3 Pro 上传现在返回包含永久文件 URL 的已创建文件记录。 by @mytharcher
  - S3 Pro 新增独立的原始 URL、文件 URL 公开访问和不使用签名 URL 配置 by @mytharcher
- **[工作流：审批]**

  - 新版客户端审批待办支持按工作流分组，审批时间线与旧版体验保持一致。 by @mytharcher
  - 审批申请和审批待办现可按工作流筛选，并展示各工作流的待办数量 by @mytharcher
- **[邮件管理]**

  - 将按部门查看邮件配置移动到 V1 邮件通用设置页面，避免服务商凭据保存时覆盖该配置，并将 V2 通用设置排在服务商设置之前。 by @jiannx
  - 将按部门查看邮件配置移动到邮件通用设置页面。 by @jiannx
- **[应用监管器]** 隐藏 V2 单独的应用入口区块，同时保留内部可用的应用设置页。 by @katherinehhh
- **[企业微信]** 新增企业微信认证、同步和通知设置的新版界面支持 by @2013xile
- **[钉钉]**

  - 补齐钉钉客户端 v2 支持，包括 Stream 同步模式、通知配置和自动登录优化。 by @chenzhizdt
  - 新增钉钉认证、同步和通知设置的新版界面支持 by @2013xile

### 🐛 修复

- **[undefined]** 修复 `nb plugin import` 无法导入 `yarn build --tar` 打包的插件，并修正插件开发文档中失效的示例代码与脚手架结构说明。 ([#10351](https://github.com/NocoBase/NocoBase/pull/10351)) by @Molunerfinn
- **[client-v2]**

  - 修复关联表单值仅包含关联记录 ID 时关系记录选择器显示 `N/A` 的问题。 ([#10386](https://github.com/NocoBase/NocoBase/pull/10386)) by @cgyrock
  - 修复 v2 表格筛选器误报 DatePicker 组件缺失的问题。 ([#10392](https://github.com/NocoBase/NocoBase/pull/10392)) by @katherinehhh
  - 修复打开 v2 表格筛选器时控制台误报组件缺失的问题。 ([#10389](https://github.com/NocoBase/NocoBase/pull/10389)) by @katherinehhh
  - 修复工作流设置中无法清空筛选条件并触发报错的问题。 ([#10388](https://github.com/NocoBase/NocoBase/pull/10388)) by @Molunerfinn
  - 修复 Client V2 页面未显示响应提示的问题，包括操作前事件返回的错误消息 ([#10376](https://github.com/NocoBase/NocoBase/pull/10376)) by @mytharcher
  - 修复英文环境下移动端选择字段搜索时显示中文的问题 ([#10367](https://github.com/NocoBase/NocoBase/pull/10367)) by @zhangzhonghe
  - 修复 `/v` 路由下切换到无页面配置权限的角色后页面仍处于编辑态的问题 ([#10359](https://github.com/NocoBase/NocoBase/pull/10359)) by @jiannx
  - v2 区块使用的外部数据源不可用时，显示本地化提示并支持重试。 ([#10336](https://github.com/NocoBase/NocoBase/pull/10336)) by @katherinehhh
  - 无设置权限时跳转到首个可访问页面 ([#10331](https://github.com/NocoBase/NocoBase/pull/10331)) by @zhangzhonghe
  - 当前 Settings 页签无权限时自动跳转到可访问页签 ([#10332](https://github.com/NocoBase/NocoBase/pull/10332)) by @zhangzhonghe
  - 修复 V2 字段编辑和显示超大 decimal 数值不正确的问题。 ([#10330](https://github.com/NocoBase/NocoBase/pull/10330)) by @katherinehhh
  - 修复看板列快捷创建记录时未继承所选分组值的问题 ([#10321](https://github.com/NocoBase/NocoBase/pull/10321)) by @jiannx
  - 修复自动 SSO 跳转 Provider 在生产构建中无法保持正确鉴权顺序的问题 ([#10100](https://github.com/NocoBase/NocoBase/pull/10100)) by @jiannx
  - 工作流筛选条件现在会保留工作流变量表达式，并在变量元数据无法解析时显示明确的错误提示。 ([#10088](https://github.com/NocoBase/NocoBase/pull/10088)) by @Molunerfinn
  - 修复 v2 工作流赋值编辑器在集合字段名为 nodeName 时产生的控制台报错。 ([#10067](https://github.com/NocoBase/NocoBase/pull/10067)) by @katherinehhh
  - 修复工作流 v2 变量编辑器在触发器、筛选条件和字段赋值表单中的变量胶囊回显、禁用态和操作符标签显示不一致的问题。 ([#10041](https://github.com/NocoBase/NocoBase/pull/10041)) by @Molunerfinn
  - 修复 v2 工作流已执行版本只读状态下仍可修改字段赋值的问题。 ([#10014](https://github.com/NocoBase/NocoBase/pull/10014)) by @katherinehhh
  - 修复打开 V2 空 Group 菜单项时显示 404 的问题 ([#9896](https://github.com/NocoBase/NocoBase/pull/9896)) by @zhangzhonghe
  - 修复工作流手动执行后自动创建新版本的跳转问题，确保旧版和新版界面都会打开正确的工作流页面。 ([#9955](https://github.com/NocoBase/NocoBase/pull/9955)) by @Molunerfinn
  - 修复 V2 管理端进入没有可用子菜单页面的分组时显示 404 的问题。 ([#9932](https://github.com/NocoBase/NocoBase/pull/9932)) by @katherinehhh
  - 修复移动端嵌入页中操作启用纯图标模式但未配置图标时，链接操作文字不可见的问题。 ([#9919](https://github.com/NocoBase/NocoBase/pull/9919)) by @katherinehhh
  - 修复界面配置模式下刷新页面时短暂闪现暂无页面提示的问题。 ([#9918](https://github.com/NocoBase/NocoBase/pull/9918)) by @katherinehhh
- **[flow-engine]**

  - 修复 RunJS 资源创建操作无法创建关联子表格记录的问题 ([#10355](https://github.com/NocoBase/NocoBase/pull/10355)) by @gchust
  - 修复浏览器窗口较矮时下拉菜单内容显示不全的问题 ([#10379](https://github.com/NocoBase/NocoBase/pull/10379)) by @zhangzhonghe
  - 修复单值变量输入框选择变量后仍可继续输入额外文本的问题。 ([#10050](https://github.com/NocoBase/NocoBase/pull/10050)) by @katherinehhh
  - 修复移动端半窗内容过长时无法滚动的问题 ([#9871](https://github.com/NocoBase/NocoBase/pull/9871)) by @zhangzhonghe
- **[client]** 修复左侧菜单长标题显示不全和配置工具栏位置偏移的问题 ([#10380](https://github.com/NocoBase/NocoBase/pull/10380)) by @zhangzhonghe
- **[auth]** 修复跨域部署中 API 请求偶发 `Invalid CSRF token` 错误的问题 ([#10245](https://github.com/NocoBase/NocoBase/pull/10245)) by @mytharcher
- **[server]** 修复未启用多应用插件时自定义工作区不显示的问题 ([#10055](https://github.com/NocoBase/NocoBase/pull/10055)) by @2013xile
- **[AI 员工]**

  - 修复 AI 附件遮罩导致 V2 Import 无法拖拽上传文件的问题。 ([#10384](https://github.com/NocoBase/NocoBase/pull/10384)) by @katherinehhh
  - 修复 AI 员工流式输出长回复时，其他闲置浏览器标签页内存暴涨至数 GB 的问题 ([#10352](https://github.com/NocoBase/NocoBase/pull/10352)) by @cgyrock
  - 修复 AI 插件 client-v2 设置页面中 Settings 标签未翻译的问题 ([#10234](https://github.com/NocoBase/NocoBase/pull/10234)) by @cgyrock
  - 修复前端工具在对话中询问确认而未使用运行时审批的问题 ([#10166](https://github.com/NocoBase/NocoBase/pull/10166)) by @2013xile
  - 修复 V2 公开表单页面触发不必要登录态请求的问题 ([#10013](https://github.com/NocoBase/NocoBase/pull/10013)) by @zhangzhonghe
- **[工作流]**

  - 在选择触发器类型前禁用工作流执行模式选项。 ([#10296](https://github.com/NocoBase/NocoBase/pull/10296)) by @Molunerfinn
  - 修复工作流执行记录页面标题，并为不存在的工作流增加工作流列表链接 ([#10360](https://github.com/NocoBase/NocoBase/pull/10360)) by @mytharcher
  - 完善永久文件 URL、附件缩略图、预览下载和本地存储安全响应头的回归测试覆盖 ([#10148](https://github.com/NocoBase/NocoBase/pull/10148)) by @mytharcher
  - 查看已执行工作流时，工作流表单控件现在会正确继承禁用状态。 ([#10079](https://github.com/NocoBase/NocoBase/pull/10079)) by @Molunerfinn
  - 更新触发器配置后自动刷新工作流画布 ([#10068](https://github.com/NocoBase/NocoBase/pull/10068)) by @zhangzhonghe
  - 修复工作流 v2 条件操作数默认保持单行显示，并在所选变量路径过长时正确换行。 ([#10033](https://github.com/NocoBase/NocoBase/pull/10033)) by @Molunerfinn
  - 修复 workflow v2 任务中心的显示和详情加载问题 ([#10001](https://github.com/NocoBase/NocoBase/pull/10001)) by @zhangzhonghe
  - 修复工作流结果文案未翻译和抄送配置弹窗过宽的问题 ([#9977](https://github.com/NocoBase/NocoBase/pull/9977)) by @zhangzhonghe
  - 修复 workflow 画布在跨 bundle 场景下的 Context 不一致问题，确保旧版工作流页面中的分支和一些变量选择能正常工作。 ([#9951](https://github.com/NocoBase/NocoBase/pull/9951)) by @Molunerfinn
  - 修复迁移到 client v2 的部分问题 ([#9929](https://github.com/NocoBase/NocoBase/pull/9929)) by @mytharcher
  - 修复 v2 工作流中无法配置站内信内容的问题 ([#9885](https://github.com/NocoBase/NocoBase/pull/9885)) by @zhangzhonghe
  - 恢复了工作流集合触发器手动执行的防抖远程搜索，并使该选择器与 v1 的 200 条记录拉取行为保持一致。 ([#9870](https://github.com/NocoBase/NocoBase/pull/9870)) by @Molunerfinn
  - 修复工作流 v2 添加节点菜单未按工作流和分支规则禁用不可用节点类型的问题 ([#9855](https://github.com/NocoBase/NocoBase/pull/9855)) by @mytharcher
- **[通知：站内信]** 修复站内信消息模板表单显示工作流画布变量、而非页面实际提供的变量的问题。 ([#10180](https://github.com/NocoBase/NocoBase/pull/10180)) by @Molunerfinn
- **[区块：地图]** 修复地图显示点位数据时区域圈选无法双击结束，以及高德地图持续加载的问题 ([#10373](https://github.com/NocoBase/NocoBase/pull/10373)) by @jiannx
- **[UI 布局]**

  - 修复移动端页面出现在桌面端导航中的问题 ([#10375](https://github.com/NocoBase/NocoBase/pull/10375)) by @zhangzhonghe
  - 修复无界面配置权限的角色仍能看到移动端 UI Editor 的问题 ([#10341](https://github.com/NocoBase/NocoBase/pull/10341)) by @zhangzhonghe
  - 修复桌面页面在窄屏下误用移动端样式的问题 ([#10229](https://github.com/NocoBase/NocoBase/pull/10229)) by @zhangzhonghe
  - 修复 Mobile 设置入口丢失当前子应用路径的问题 ([#10078](https://github.com/NocoBase/NocoBase/pull/10078)) by @zhangzhonghe
  - 修复子应用中的 Mobile 设置入口错误跳转到主应用的问题。 ([#10075](https://github.com/NocoBase/NocoBase/pull/10075)) by @katherinehhh
- **[文件管理器]**

  - 修复子应用中的 Logo 等本地存储文件在稳定 URL 重定向后无法加载的问题 ([#10358](https://github.com/NocoBase/NocoBase/pull/10358)) by @mytharcher
  - 修复已登录的成员用户无法加载系统 Logo 等共享附件的问题 ([#10268](https://github.com/NocoBase/NocoBase/pull/10268)) by @mytharcher
  - 修复外部数据源附件 URL 字段上传文件时接口 404 的问题 ([#9809](https://github.com/NocoBase/NocoBase/pull/9809)) by @2013xile
- **[用户]**

  - 修复在 UI 编辑模式下提交表单时可能跳过必填字段校验的问题 ([#10371](https://github.com/NocoBase/NocoBase/pull/10371)) by @jiannx
  - V2 新建用户或修改密码失败时展示后端错误信息。 ([#10364](https://github.com/NocoBase/NocoBase/pull/10364)) by @katherinehhh
- **[区块：树]**

  - 修复树筛选字段权限及关联树表展开状态，并修正详情区块筛选后的分页总数。 ([#10361](https://github.com/NocoBase/NocoBase/pull/10361)) by @jiannx
  - 修复 Tree 区块搜索无匹配业务字段记录时仍显示占位节点的问题 ([#10323](https://github.com/NocoBase/NocoBase/pull/10323)) by @jiannx
- **[操作：导入记录]** 修复 v2 导入弹窗中拖入文件无法导入的问题。 ([#10350](https://github.com/NocoBase/NocoBase/pull/10350)) by @katherinehhh
- **[操作：打印]**

  - 修复 V1 页面缺少打印操作模型注册的问题。 ([#10347](https://github.com/NocoBase/NocoBase/pull/10347)) by @katherinehhh
  - 修复 v2 详情区块为空时打印整页的问题，空详情区块不再打印导航和侧边栏。 ([#9832](https://github.com/NocoBase/NocoBase/pull/9832)) by @katherinehhh
- **[验证]** Verification 列表新增刷新按钮 ([#10340](https://github.com/NocoBase/NocoBase/pull/10340)) by @zhangzhonghe
- **[通知管理]**

  - 修复未保存语言记录时翻译测试页面报错的问题，并支持在新增通知渠道时自定义渠道标识 ([#10311](https://github.com/NocoBase/NocoBase/pull/10311)) by @jiannx
  - 修复通知接收人选择后用户 ID 保存为文本的问题 ([#10093](https://github.com/NocoBase/NocoBase/pull/10093)) by @zhangzhonghe
  - 修复 CC 配置中显示错误工作流变量的问题 ([#9937](https://github.com/NocoBase/NocoBase/pull/9937)) by @zhangzhonghe
- **[区块：甘特图]** 修复甘特图短任务条未使用记录自定义颜色的问题 ([#10322](https://github.com/NocoBase/NocoBase/pull/10322)) by @jiannx
- **[本地化]** 修复打开带有 Lina AI 助手入口的本地化设置时发生的崩溃。 ([#10293](https://github.com/NocoBase/NocoBase/pull/10293)) by @cgyrock
- **[备份管理器]**

  - 修复 V2 备份恢复过程中可重复提交恢复请求的问题。 ([#10262](https://github.com/NocoBase/NocoBase/pull/10262)) by @katherinehhh
  - 提升备份插件前端测试的稳定性和准确性。 ([#10184](https://github.com/NocoBase/NocoBase/pull/10184)) by @cgyrock
  - 修复 v2 备份管理器设置页标签异常加粗、与其他设置页样式不一致的问题。 ([#9908](https://github.com/NocoBase/NocoBase/pull/9908)) by @katherinehhh
- **[变量和密钥]** 修复 v2 变量和密钥批量导入的校验提示，并修复 Type 筛选失败问题。 ([#10154](https://github.com/NocoBase/NocoBase/pull/10154)) by @katherinehhh
- **[用户认证]**

  - 修复 v2 认证器管理页面的声明生成错误 ([#10095](https://github.com/NocoBase/NocoBase/pull/10095)) by @jiannx
  - 修复 v2 认证管理中编辑认证器时已保存设置不回显的问题。 ([#10091](https://github.com/NocoBase/NocoBase/pull/10091)) by @jiannx
  - 修复 v2 子应用中 SSO 登录后跳转地址错误的问题 ([#9927](https://github.com/NocoBase/NocoBase/pull/9927)) by @2013xile
- **[工作流：JSON 变量映射]** 修复工作流 JSON 变量映射节点选择循环作用域变量时报错的问题。 ([#10094](https://github.com/NocoBase/NocoBase/pull/10094)) by @Molunerfinn
- **[工作流：延时节点]** 修复延时节点的时长输入，并阻止保存小于最小值的数值。 ([#10056](https://github.com/NocoBase/NocoBase/pull/10056)) by @Molunerfinn
- **[工作流：聚合查询节点]** 修复验证规则以支持筛选条件为空的情况 ([#10053](https://github.com/NocoBase/NocoBase/pull/10053)) by @mytharcher
- **[公开表单]** 修复关闭 UI Editor 后公开表单仍可配置的问题 ([#10036](https://github.com/NocoBase/NocoBase/pull/10036)) by @zhangzhonghe
- **[嵌入 NocoBase]**

  - 修复嵌入 NocoBase 页面时 token 污染的问题。 ([#9948](https://github.com/NocoBase/NocoBase/pull/9948)) by @gchust
  - 修复 v2 嵌入页面在 URL token 被移除后刷新会丢失 token 访问状态的问题。 ([#9857](https://github.com/NocoBase/NocoBase/pull/9857)) by @katherinehhh
- **[操作：导出记录]** 修复 v2 可导出字段选择关系字段后拖拽导致页面崩溃的问题。 ([#9995](https://github.com/NocoBase/NocoBase/pull/9995)) by @katherinehhh
- **[区块：评论]** 调整新评论区块的默认操作顺序。 ([#9976](https://github.com/NocoBase/NocoBase/pull/9976)) by @jiannx
- **[前端流引擎]** 修复 flow surfaces api 无法正确创建移动端页面的问题。 ([#9911](https://github.com/NocoBase/NocoBase/pull/9911)) by @gchust
- **[工作流：邮件发送节点]** 修复工作流 v2 测试因缺少触发工作流操作注册相关 mock 而失败的问题。 ([#9863](https://github.com/NocoBase/NocoBase/pull/9863)) by @jiannx
- **[数据源管理]** 为 v2 数据源中没有主键或记录唯一标识的数据表增加提示和快捷设置。 ([#9872](https://github.com/NocoBase/NocoBase/pull/9872)) by @katherinehhh
- **[工作流：JavaScript 节点]** 修复旧版工作流客户端中 JavaScript 节点注册失败的问题。 ([#9826](https://github.com/NocoBase/NocoBase/pull/9826)) by @jiannx
- **[工作流：响应消息]** 将工作流响应消息节点迁移到 v2 画布，并修复不支持的工作流类型仍可添加该节点的问题。 ([#9830](https://github.com/NocoBase/NocoBase/pull/9830)) by @jiannx
- **[API 文档]** 修复 API 文档插件声明文件构建失败的问题。 ([#9752](https://github.com/NocoBase/NocoBase/pull/9752)) by @katherinehhh
- **[AI: 知识库]** 为 AI 知识库工作流创建文档节点增加覆盖选项，支持替换相同标识的已有文档。 by @cgyrock
- **[数据源：外部 PostgreSQL]** 修复 client v2 编辑外部关系型数据源时未自动加载数据表的问题。 by @katherinehhh
- **[plugin-service-platform]**

  - 恢复服务平台中已授权插件的下载能力。 by @jiannx
  - 禁用服务平台的插件下载接口。 by @jiannx
- **[验证：TOTP 认证器]** 修复 TOTP 认证器绑定流程，确保临时设置密钥在绑定后被删除，并阻止已验证的验证码被重复使用。 by @jiannx
- **[数据源：外部 NocoBase]** 修复外部 NocoBase 文件表的文件预览、永久 URL 处理和上传路由问题，包括 S3 Pro 上传场景 by @mytharcher
- **[多空间]** 修复认证恢复请求被过期多空间请求头阻断的问题。 by @jiannx
- **[认证：SAML 2.0]** 修复现代客户端中未认证用户的 SAML 自动登录跳转，并保留原始目标路径 by @jiannx
- **[应用单点登录]** 修复 v2 子应用中 App SSO 登录后跳转地址错误的问题 by @2013xile
- **[工作流：子流程]** 修复子流程节点配置选择框按工作流标题搜索不生效的问题。 by @mytharcher
- **[迁移管理]**

  - 修复重复提交导致创建多个迁移版本的问题，并优化 v2 迁移日志及执行过程抽屉的展示。 by @katherinehhh
  - 改进 v2 迁移错误提示，禁止迁移规则重名，并修复环境检查弹窗溢出问题。 by @katherinehhh
- **[认证：OIDC]** 修复 OIDC 自动登录在生产构建中不跳转的问题，并在登录后保留原始现代客户端路径 by @jiannx
- **[工作流：审批]**

  - 新版待办中心中的异常审批工作流现在会被禁用，并显示配置异常提示。 by @mytharcher
  - 修复相关审批区块无法在 Client V2 数据详情页中加载的问题 by @mytharcher
  - 修复工作流配置弹窗中的表单操作按钮仍会响应点击的问题 by @zhangzhonghe
  - 修复相关审批区块在撤回或退回后不刷新的问题 by @zhangzhonghe
  - 审批界面无法在 V2 使用时引导用户前往 V1 页面 by @zhangzhonghe
  - 修复审批申请表单空白及操作按钮缺失或显示错误的问题 by @zhangzhonghe
  - 允许用户在审批工作流执行后查看操作界面和审批卡片 by @zhangzhonghe
  - 修复审批工作流手动执行弹窗中申请人字段提前校验及角色名称未翻译的问题。 by @Molunerfinn
  - 修复配置审批工作流条件时报错的问题 by @zhangzhonghe
  - 修复生产构建后已执行工作流的审批任务标题仍可编辑的问题。 by @Molunerfinn
  - 打开审批表单时关闭 Apply new 抽屉 by @zhangzhonghe
  - 修复审批人界面默认显示空区块及固定审批人 ID 保存问题 by @zhangzhonghe
  - 修复打开抄送节点配置时报错的问题 by @zhangzhonghe
  - 修复 v2 审批子表格在详情中显示异常的问题 by @zhangzhonghe
  - 修复审批人排序和旧版配置入口显示问题 by @zhangzhonghe
  - 修复审批任务卡片不显示审批数据的问题 by @zhangzhonghe
  - 修复 v2 审批任务详情弹窗缺少已处理审批信息的问题 by @zhangzhonghe
  - 修复 workflow v2 任务中心审批任务的表单和操作问题 by @zhangzhonghe
  - 修复迁移到 client v2 引入的问题 by @mytharcher
  - 修复审批发起人界面的显示与操作问题 by @zhangzhonghe
  - 修复审批数据表出现在区块数据源列表中的问题 by @zhangzhonghe
  - 修复启用审批和通知插件时 V2 页面可能无法打开的问题 by @zhangzhonghe
- **[数据表字段：手写签名]** 修复 client-v2 手写签名字段文件数据表选择器的多语言显示和选项筛选问题。 by @katherinehhh
- **[审计日志]** 修复 V2 审计日志 Role 列显示原始翻译表达式的问题。 by @katherinehhh
- **[应用监管器]** 修复子应用访问链接丢失 v2 路径的问题 by @2013xile
- **[企业微信]**

  - 修复企业微信通知渠道无法保存所选认证器的问题。 by @jiannx
  - 修复在 Client V2 中启用企业微信插件后切换路由菜单时页面短暂白屏的问题 by @2013xile
- **[钉钉]** 修复在 v2 渠道表单中保存钉钉通知渠道时丢失所选认证器的问题 by @jiannx

### v2.1.44

*发布日期: 2026-08-21*

### 🎉 新特性

- **[多空间]** v1 和 v2 的空间切换器及空间管理新增搜索功能 by @jiannx

### 🐛 修复

- **[钉钉]** 修复切换钉钉账号后，内部免登仍然保留上一个用户会话的问题。 by @chenzhizdt

### v2.1.43

*发布日期: 2026-08-19*

### 🐛 修复

- **[app]** 为支持范围内的旧版浏览器补充现代 JavaScript API 运行时 Polyfill ([#10385](https://github.com/NocoBase/NocoBase/pull/10385)) by @mytharcher
- **[undefined]** 修复重新加载外部数据库已选数据表后，自定义字段显示名被重置的问题 by @cgyrock
- **[数据源管理]** 修复提交外部数据库数据源或调整已选数据表后，自定义字段显示名被重置的问题 ([#10387](https://github.com/NocoBase/NocoBase/pull/10387)) by @cgyrock
- **[工作流：审批]** 修复审批流配置可退回任意上级审批节点时，实际只能退回最近上一级的问题 by @mytharcher

### v2.1.42

*发布日期: 2026-08-18*

### 🚀 优化

- **[undefined]**
  - 新增 LDAP 和钉钉用户数据同步文档，包括权限配置、事件接收模式、同步字段、部门负责人和故障排查。 ([#10377](https://github.com/NocoBase/NocoBase/pull/10377)) by @chenzhizdt
    参考文档：[钉钉同步](https://github.com/chenzhizdt/NocoBase/blob/docs/ldap-dingtalk/docs/docs/cn/users-permissions/sync/sources/dingtalk.md), [LDAP 同步](https://github.com/chenzhizdt/NocoBase/blob/docs/ldap-dingtalk/docs/docs/cn/users-permissions/sync/sources/ldap.md)
  - 完善 LDAP 和钉钉用户同步文档，并补充所有支持语言的翻译。 ([#10382](https://github.com/NocoBase/NocoBase/pull/10382)) by @chenzhizdt
    参考文档：[钉钉](docs/docs/cn/users-permissions/sync/sources/dingtalk.md) / [LDAP](docs/docs/cn/users-permissions/sync/sources/ldap.md)

### 🐛 修复

- **[工作流：JavaScript 节点]** 修复 JavaScript 工作流任务恢复过程重复投递执行已结束或已超时任务的问题。 ([#10366](https://github.com/NocoBase/NocoBase/pull/10366)) by @mytharcher
- **[操作：导出记录 Pro]** 修复启用导出 Pro 插件后使用复杂筛选条件时导出报错的问题 by @zhangzhonghe
- **[操作：导入记录 Pro]** 修复异步导入不遵守字段导入权限的问题 by @mytharcher
- **[应用监管器]** 修复创建受监管应用时的 Kingbase 数据库连接问题 by @2013xile

## next

![next.png](https://static-docs.NocoBase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### v2.3.0-beta.4

*发布日期: 2026-08-25*

### 🚀 优化

- **[undefined]** 明确 Markdown、外部页面和第三方服务使用公开 NocoBase 文件 URL 的方式 ([#10406](https://github.com/NocoBase/NocoBase/pull/10406)) by @mytharcher
  参考文档：[存储引擎概述](https://docs.NocoBase.com/cn/file-manager/storage/)

### 🐛 修复

- **[UI 布局]** 修复升级后桌面端路由可能为空的问题 ([#10405](https://github.com/NocoBase/NocoBase/pull/10405)) by @zhangzhonghe
- **[工作流]** 修复工作流待办中心菜单，使当前菜单可再次点击折叠并保留选中高亮状态 ([#10404](https://github.com/NocoBase/NocoBase/pull/10404)) by @mytharcher
- **[操作：导出记录 Pro]** 修复 Pro 导出字段变更后拖拽排序可能崩溃的问题。 by @katherinehhh

### v2.2.0-beta.18

*发布日期: 2026-08-20*

### 🎉 新特性

- **[AI 员工]** 新增 DeepSeek V4 Flash 和 V4 Pro Responses API 支持，包括推理续调、原生联网搜索、引用解析和模型级联网搜索控制 ([#10337](https://github.com/NocoBase/NocoBase/pull/10337)) by @cgyrock
- **[多空间]**

  - v1 和 v2 的空间切换器及空间管理新增搜索功能 by @jiannx
  - 为 v1 和 v2 的空间切换器及空间管理新增按空间显示名称的防抖搜索 by @jiannx
- **[邮件管理]** 邮件同步现已改为可恢复的后台任务，提供状态历史和更安全的全量同步清理，并正确包含 Gmail 垃圾邮件和已删除邮件。 by @jiannx
- **[认证：LDAP]** 新增 LDAP 用户同步配置的客户端 v2 支持。 by @chenzhizdt

### 🚀 优化

- **[undefined]**

  - 完善 LDAP 和钉钉用户同步文档，并补充所有支持语言的翻译。 ([#10382](https://github.com/NocoBase/NocoBase/pull/10382)) by @chenzhizdt
    参考文档：[钉钉](docs/docs/cn/users-permissions/sync/sources/dingtalk.md) / [LDAP](docs/docs/cn/users-permissions/sync/sources/ldap.md)
  - 新增 LDAP 和钉钉用户数据同步文档，包括权限配置、事件接收模式、同步字段、部门负责人和故障排查。 ([#10377](https://github.com/NocoBase/NocoBase/pull/10377)) by @chenzhizdt
    参考文档：[钉钉同步](https://github.com/chenzhizdt/NocoBase/blob/docs/ldap-dingtalk/docs/docs/cn/users-permissions/sync/sources/dingtalk.md), [LDAP 同步](https://github.com/chenzhizdt/NocoBase/blob/docs/ldap-dingtalk/docs/docs/cn/users-permissions/sync/sources/ldap.md)
- **[lock-manager]** 新增本地锁租约续期能力，并确保通过 tryAcquire 获取的锁在复用和异常场景下安全释放 ([#10368](https://github.com/NocoBase/NocoBase/pull/10368)) by @jiannx
- **[cli]** `nb api resource create` 的 `--values` 支持传 JSON 数组，一次请求创建多条记录。 ([#10325](https://github.com/NocoBase/NocoBase/pull/10325)) by @Molunerfinn
  参考文档：[nb api resource create](https://github.com/NocoBase/NocoBase/blob/fix/cli-resource-create-array-values/docs/docs/cn/api/cli/api/resource/create.md)
- **[工作流]** 新版客户端待办中心按工作流分组展示，并统一各类待办的工作流筛选行为。 ([#10374](https://github.com/NocoBase/NocoBase/pull/10374)) by @mytharcher
- **[区块：树]** 树筛选区块现已支持配置默认排序。 ([#10339](https://github.com/NocoBase/NocoBase/pull/10339)) by @jiannx
- **[Redis 分布式锁适配器]** 新增 Redis 锁租约续期能力，并确保可复用锁句柄在竞争和异常场景下安全释放 by @jiannx
- **[工作流：审批]** 新版客户端审批待办支持按工作流分组，审批时间线与旧版体验保持一致。 by @mytharcher
- **[钉钉]** 补齐钉钉客户端 v2 支持，包括 Stream 同步模式、通知配置和自动登录优化。 by @chenzhizdt

### 🐛 修复

- **[client-v2]**

  - 修复关联表单值仅包含关联记录 ID 时关系记录选择器显示 `N/A` 的问题。 ([#10386](https://github.com/NocoBase/NocoBase/pull/10386)) by @cgyrock
  - 修复 v2 表格筛选器误报 DatePicker 组件缺失的问题。 ([#10392](https://github.com/NocoBase/NocoBase/pull/10392)) by @katherinehhh
  - 修复打开 v2 表格筛选器时控制台误报组件缺失的问题。 ([#10389](https://github.com/NocoBase/NocoBase/pull/10389)) by @katherinehhh
  - 修复工作流设置中无法清空筛选条件并触发报错的问题。 ([#10388](https://github.com/NocoBase/NocoBase/pull/10388)) by @Molunerfinn
  - 修复 Client V2 页面未显示响应提示的问题，包括操作前事件返回的错误消息 ([#10376](https://github.com/NocoBase/NocoBase/pull/10376)) by @mytharcher
  - 修复英文环境下移动端选择字段搜索时显示中文的问题 ([#10367](https://github.com/NocoBase/NocoBase/pull/10367)) by @zhangzhonghe
  - 修复筛选表单在 UI 编辑模式下自动刷新数据的问题 ([#10356](https://github.com/NocoBase/NocoBase/pull/10356)) by @zhangzhonghe
  - v2 筛选表单中的树形关系字段默认使用级联选择 ([#10357](https://github.com/NocoBase/NocoBase/pull/10357)) by @zhangzhonghe
  - 修复表单字段联动规则操作中错误列出 JS item 的问题 ([#10363](https://github.com/NocoBase/NocoBase/pull/10363)) by @gchust
  - 修复 `/v` 路由下切换到无页面配置权限的角色后页面仍处于编辑态的问题 ([#10359](https://github.com/NocoBase/NocoBase/pull/10359)) by @jiannx
  - 当前 Settings 页签无权限时自动跳转到可访问页签 ([#10332](https://github.com/NocoBase/NocoBase/pull/10332)) by @zhangzhonghe
  - 修复移动端单选关联字段再次点击已选记录后无法清空的问题 ([#10346](https://github.com/NocoBase/NocoBase/pull/10346)) by @zhangzhonghe
  - 修复筛选表单无法直接添加中国行政区字段的问题 ([#10333](https://github.com/NocoBase/NocoBase/pull/10333)) by @zhangzhonghe
  - 修复 ctx.form.submit 无法正确提交表单数据的问题。 ([#10063](https://github.com/NocoBase/NocoBase/pull/10063)) by @gchust
  - 无设置权限时跳转到首个可访问页面 ([#10331](https://github.com/NocoBase/NocoBase/pull/10331)) by @zhangzhonghe
  - 修复 V2 字段编辑和显示超大 decimal 数值不正确的问题。 ([#10330](https://github.com/NocoBase/NocoBase/pull/10330)) by @katherinehhh
  - v2 区块使用的外部数据源不可用时，显示本地化提示并支持重试。 ([#10336](https://github.com/NocoBase/NocoBase/pull/10336)) by @katherinehhh
- **[app]** 为支持范围内的旧版浏览器补充现代 JavaScript API 运行时 Polyfill ([#10385](https://github.com/NocoBase/NocoBase/pull/10385)) by @mytharcher
- **[flow-engine]** 修复浏览器窗口较矮时下拉菜单内容显示不全的问题 ([#10379](https://github.com/NocoBase/NocoBase/pull/10379)) by @zhangzhonghe
- **[client]** 修复左侧菜单长标题显示不全和配置工具栏位置偏移的问题 ([#10380](https://github.com/NocoBase/NocoBase/pull/10380)) by @zhangzhonghe
- **[undefined]**

  - 修复 `nb plugin import` 无法导入 `yarn build --tar` 打包的插件，并修正插件开发文档中失效的示例代码与脚手架结构说明。 ([#10351](https://github.com/NocoBase/NocoBase/pull/10351)) by @Molunerfinn
  - 修复重新加载外部数据库已选数据表后，自定义字段显示名被重置的问题 by @cgyrock
- **[database]** 修复启用数据库下划线命名时驼峰字段前缀索引创建失败的问题 ([#10329](https://github.com/NocoBase/NocoBase/pull/10329)) by @2013xile
- **[数据源管理]** 修复提交外部数据库数据源或调整已选数据表后，自定义字段显示名被重置的问题 ([#10387](https://github.com/NocoBase/NocoBase/pull/10387)) by @cgyrock
- **[工作流：JavaScript 节点]** 修复 JavaScript 工作流任务恢复过程重复投递执行已结束或已超时任务的问题。 ([#10366](https://github.com/NocoBase/NocoBase/pull/10366)) by @mytharcher
- **[工作流]**

  - 修复工作流执行记录页面标题，并为不存在的工作流增加工作流列表链接 ([#10360](https://github.com/NocoBase/NocoBase/pull/10360)) by @mytharcher
  - 在选择触发器类型前禁用工作流执行模式选项。 ([#10296](https://github.com/NocoBase/NocoBase/pull/10296)) by @Molunerfinn
- **[通知：站内信]** 修复站内信消息模板表单显示工作流画布变量、而非页面实际提供的变量的问题。 ([#10180](https://github.com/NocoBase/NocoBase/pull/10180)) by @Molunerfinn
- **[区块：地图]** 修复地图显示点位数据时区域圈选无法双击结束，以及高德地图持续加载的问题 ([#10373](https://github.com/NocoBase/NocoBase/pull/10373)) by @jiannx
- **[数据表字段：Markdown(Vditor)]** 修复 v2 详情区块中 Markdown HTML 预览在暗黑主题下显示异常的问题。 ([#10370](https://github.com/NocoBase/NocoBase/pull/10370)) by @katherinehhh
- **[UI 布局]**

  - 修复移动端页面出现在桌面端导航中的问题 ([#10375](https://github.com/NocoBase/NocoBase/pull/10375)) by @zhangzhonghe
  - 修复无界面配置权限的角色仍能看到移动端 UI Editor 的问题 ([#10341](https://github.com/NocoBase/NocoBase/pull/10341)) by @zhangzhonghe
- **[AI 员工]**

  - 修复 AI 附件遮罩导致 V2 Import 无法拖拽上传文件的问题。 ([#10384](https://github.com/NocoBase/NocoBase/pull/10384)) by @katherinehhh
  - 修复 AI 员工流式输出长回复时，其他闲置浏览器标签页内存暴涨至数 GB 的问题 ([#10352](https://github.com/NocoBase/NocoBase/pull/10352)) by @cgyrock
- **[工作流：JSON 计算]** 修复 JSON 查询任务丢失结构化解析错误并显示 `[object Object]` 的问题 ([#10344](https://github.com/NocoBase/NocoBase/pull/10344)) by @mytharcher
- **[用户]**

  - V2 新建用户或修改密码失败时展示后端错误信息。 ([#10364](https://github.com/NocoBase/NocoBase/pull/10364)) by @katherinehhh
  - 修复在 UI 编辑模式下提交表单时可能跳过必填字段校验的问题 ([#10371](https://github.com/NocoBase/NocoBase/pull/10371)) by @jiannx
- **[文件管理器]**

  - 修复单值字段选择已有文件时需要额外提交的问题 ([#10372](https://github.com/NocoBase/NocoBase/pull/10372)) by @zhangzhonghe
  - 修复子应用中的 Logo 等本地存储文件在稳定 URL 重定向后无法加载的问题 ([#10358](https://github.com/NocoBase/NocoBase/pull/10358)) by @mytharcher
  - 修复在文件之间切换时视频预览内容不更新的问题 ([#10345](https://github.com/NocoBase/NocoBase/pull/10345)) by @mytharcher
- **[操作：导入记录]** 修复 v2 导入弹窗中拖入文件无法导入的问题。 ([#10350](https://github.com/NocoBase/NocoBase/pull/10350)) by @katherinehhh
- **[操作：打印]** 修复 V1 页面缺少打印操作模型注册的问题。 ([#10347](https://github.com/NocoBase/NocoBase/pull/10347)) by @katherinehhh
- **[区块：树]** 修复树筛选字段权限及关联树表展开状态，并修正详情区块筛选后的分页总数。 ([#10361](https://github.com/NocoBase/NocoBase/pull/10361)) by @jiannx
- **[验证]** Verification 列表新增刷新按钮 ([#10340](https://github.com/NocoBase/NocoBase/pull/10340)) by @zhangzhonghe
- **[区块：看板]** 修复重新打开看板卡片详情抽屉后已配置内容丢失的问题 ([#10334](https://github.com/NocoBase/NocoBase/pull/10334)) by @jiannx
- **[操作：导出记录]**

  - 修复按多个关系字段筛选后表格导出报错的问题 ([#10342](https://github.com/NocoBase/NocoBase/pull/10342)) by @zhangzhonghe
  - 修复 Export V2 中调整关系字段后拖拽排序导致页面崩溃的问题。 ([#10335](https://github.com/NocoBase/NocoBase/pull/10335)) by @katherinehhh
- **[通知管理]** 修复未保存语言记录时翻译测试页面报错的问题，并支持在新增通知渠道时自定义渠道标识 ([#10311](https://github.com/NocoBase/NocoBase/pull/10311)) by @jiannx
- **[操作：复制记录]** 优化 v2 直接复制失败提示，避免重复显示 API 错误信息。 ([#10327](https://github.com/NocoBase/NocoBase/pull/10327)) by @katherinehhh
- **[数据源：外部 PostgreSQL]** 修复 client v2 编辑外部关系型数据源时未自动加载数据表的问题。 by @katherinehhh
- **[数据表字段：加密]** 修复集合包含加密字段时批量导入报错 `model.changed is not a function` 的问题 by @cgyrock
- **[操作：导出记录 Pro]** 修复启用导出 Pro 插件后使用复杂筛选条件时导出报错的问题 by @zhangzhonghe
- **[操作：导入记录 Pro]**

  - 修复异步导入不遵守字段导入权限的问题 by @mytharcher
  - 修复异步导入的记录未关联当前空间的问题 by @jiannx
  - 优化导入结果统计文案，明确区分新增记录数与更新记录数 by @mytharcher
- **[工作流：Webhook 触发器]** 修复未填写请求头时手动执行 Webhook 工作流返回 400 错误的问题 by @mytharcher
- **[历史记录]** 提升大规模快照表场景下的历史记录写入性能 by @2013xile
- **[工作流：审批]**

  - 修复审批流配置可退回任意上级审批节点时，实际只能退回最近上一级的问题 by @mytharcher
  - 为 Client V2 相关审批区块增加数据范围筛选 by @zhangzhonghe
  - 修复相关审批区块在撤回或退回后不刷新的问题 by @zhangzhonghe
  - 新版待办中心中的异常审批工作流现在会被禁用，并显示配置异常提示。 by @mytharcher
  - 修复审批详情中子表格列宽与发起表单不一致的问题 by @zhangzhonghe
  - 修复相关审批区块无法在 Client V2 数据详情页中加载的问题 by @mytharcher
- **[审计日志]** 修复 V2 审计日志 Role 列显示原始翻译表达式的问题。 by @katherinehhh
- **[应用监管器]** 修复创建受监管应用时的 Kingbase 数据库连接问题 by @2013xile
