### 🎉 新特性

- **[client-v2]**
  - 页面、子页面和弹窗的 Tab 支持配置联动规则 ([#10099](https://github.com/nocobase/nocobase/pull/10099)) by @zhangzhonghe

  - 新增 legacy 和 modern 路由配置环境变量。 ([#9891](https://github.com/nocobase/nocobase/pull/9891)) by @Molunerfinn

- **[AI 员工]** 新增可在 JS 区块中触发 AI employee task 的 RunJS API。 ([#10061](https://github.com/nocobase/nocobase/pull/10061)) by @cgyrock

- **[公开表单]** 在 v1 公开表单中支持创建 v2 的表单，禁止创建 v1 的表单 ([#10045](https://github.com/nocobase/nocobase/pull/10045)) by @zhangzhonghe

- **[区块：评论]**
  - 优化评论区块设置，支持数据范围、默认排序、下拉选择分页大小、可选跳转最后一页，以及基于标量字段的归属字段配置。 ([#9954](https://github.com/nocobase/nocobase/pull/9954)) by @jiannx

  - 新增评论区块。 ([#9916](https://github.com/nocobase/nocobase/pull/9916)) by @jiannx

- **[通知：电子邮件]** 将工作流通知节点客户端迁移到 v2，恢复按渠道显示的通知配置表单，并保持已迁移通知配置在旧版工作流路由中的兼容性。 ([#9817](https://github.com/nocobase/nocobase/pull/9817)) by @jiannx

- **[工作流：邮件发送节点]** 新增工作流邮件发送节点配置的 v2 客户端支持。 ([#9825](https://github.com/nocobase/nocobase/pull/9825)) by @jiannx

- **[工作流]** 将工作流设置页迁移到 v2 客户端，并将可复用的可拖拽分类页签组件抽离到 `@nocobase/client-v2`。 ([#9645](https://github.com/nocobase/nocobase/pull/9645)) by @Molunerfinn

- **[工作流：数据库事务节点]** 为工作流数据库事务节点新增 client-v2 实现，并保留旧版客户端兼容入口。 by @katherinehhh

- **[历史记录]** 为记录历史插件新增 client v2 支持。 by @jiannx

- **[工作流：审批]** 为 v2 页面新增审批发起和待办区块 by @zhangzhonghe

- **[钉钉]** 新增钉钉 Stream 模式组织事件同步支持。 by @chenzhizdt

### 🚀 优化

- **[undefined]**
  - 更新数据源文档结构、链接和多语言页面。 ([#10108](https://github.com/nocobase/nocobase/pull/10108)) by @hongboji
参考文档：[数据源](docs/docs/cn/data-sources/index.md)
  - 更新数据源文档结构、链接和多语言页面。 ([#10108](https://github.com/nocobase/nocobase/pull/10108)) by @hongboji
参考文档：[数据源](docs/docs/cn/data-sources/index.md)
  - 文件 URL 现在使用稳定的 NocoBase 访问地址，可在跳转到存储地址前完成权限校验。 ([#10103](https://github.com/nocobase/nocobase/pull/10103)) by @mytharcher

  - 文件 URL 现在使用稳定的 NocoBase 访问地址，可在跳转到存储地址前完成权限校验。 ([#10047](https://github.com/nocobase/nocobase/pull/10047)) by @mytharcher

  - 优化俄语文档翻译，提升措辞、可读性和术语一致性。 ([#9816](https://github.com/nocobase/nocobase/pull/9816)) by @sembaev-a-a

  - 优化 AI 知识库检索和相关文档。 ([#9765](https://github.com/nocobase/nocobase/pull/9765)) by @cgyrock

  - - ([#9754](https://github.com/nocobase/nocobase/pull/9754)) by @sembaev-a-a

- **[client-v2]**
  - 重构 Markdown Vditor 为统一的插件化 Markdown 引擎，并为已有 Markdown 区块和 Vditor 字段插件保留兼容桥。 ([#9998](https://github.com/nocobase/nocobase/pull/9998)) by @katherinehhh

  - 重构 Markdown Vditor 为统一的插件化 Markdown 引擎，并为已有 Markdown 区块和 Vditor 字段插件保留兼容桥。 ([#9998](https://github.com/nocobase/nocobase/pull/9998)) by @katherinehhh

- **[工作流：人工处理节点]** 在新版待办中心显示人工任务并引导用户前往旧版页面处理 ([#10085](https://github.com/nocobase/nocobase/pull/10085)) by @zhangzhonghe

- **[工作流]**
  - 工作流 v2 画布中暂不支持的节点现在会保留普通节点卡片操作，并将节点类型显示为暂不支持。 ([#10054](https://github.com/nocobase/nocobase/pull/10054)) by @mytharcher

  - 简化工作流 v2 创建/更新节点的字段赋值配置，优化已选变量展示，并避免生成未使用的赋值表单模型数据。 ([#9887](https://github.com/nocobase/nocobase/pull/9887)) by @katherinehhh

  - 导出工作流 v2 画布扩展 API，供下游工作流节点插件复用。 ([#9834](https://github.com/nocobase/nocobase/pull/9834)) by @katherinehhh

  - 将工作流输出节点配置迁移到 v2，并让 v2 工作流结果查看器对齐旧版字符串结果的展示行为。 ([#9813](https://github.com/nocobase/nocobase/pull/9813)) by @Molunerfinn

  - 迁移工作流的结束节点到 v2 版本。 ([#9795](https://github.com/nocobase/nocobase/pull/9795)) by @Molunerfinn

- **[AI 员工]**
  - 改进 AI 员工工具设置、数据查询约束、关联字段查询，以及异常工具调用的诊断信息保留。 ([#10042](https://github.com/nocobase/nocobase/pull/10042)) by @cgyrock

  - 优化 AI 员工网页搜索，减少不必要的模型推理，并更好地使用各 Provider 的思考控制参数。 ([#9996](https://github.com/nocobase/nocobase/pull/9996)) by @cgyrock

  - 在 v2 界面中移除了已废弃的 AI 员工 Datasource 设置入口和上下文选择入口。 ([#9988](https://github.com/nocobase/nocobase/pull/9988)) by @cgyrock

  - 将 AI 员工插件迁移到 client-v2。 ([#9794](https://github.com/nocobase/nocobase/pull/9794)) by @cgyrock

- **[数据表: SQL]** 非用户可见变更；为已迁移插件补充 client-v2 单元测试覆盖。 ([#9967](https://github.com/nocobase/nocobase/pull/9967)) by @katherinehhh

- **[区块：评论]**
  - 改进评论提交按钮配置，并修复相关的评论和用户表单提交问题。 ([#10002](https://github.com/nocobase/nocobase/pull/10002)) by @jiannx

  - 将新的评论区块插件加入 NocoBase 预设，并将旧评论插件标记为废弃。 ([#9936](https://github.com/nocobase/nocobase/pull/9936)) by @jiannx

- **[用户]** 完善用户插件 client-v2 测试覆盖率。 ([#9975](https://github.com/nocobase/nocobase/pull/9975)) by @jiannx

- **[日志]** 为 client v2 运行时添加日志设置页面。 ([#9933](https://github.com/nocobase/nocobase/pull/9933)) by @jiannx

- **[工作流：聚合查询节点]** 优化 v2 工作流更新节点和聚合查询节点的字段选择逻辑，并修复聚合查询节点关联数据表选择的切换异常。 ([#9938](https://github.com/nocobase/nocobase/pull/9938)) by @katherinehhh

- **[工作流：JavaScript 节点]**
  - 调整 v2 工作流请求节点和邮件节点配置字段，使其布局和附件变量选择行为与旧版保持一致。 ([#9952](https://github.com/nocobase/nocobase/pull/9952)) by @jiannx

  - 将 JavaScript 工作流节点迁移到 client-v2 ([#9805](https://github.com/nocobase/nocobase/pull/9805)) by @jiannx

- **[工作流：JSON 计算]** 将工作流 JSON 计算节点配置界面迁移到 v2 工作流画布，并保留 v1 画布兼容性。 ([#9902](https://github.com/nocobase/nocobase/pull/9902)) by @mytharcher

- **[备份管理器]** `dataCategory` 标记为 `'runtime'` 的数据表现在会自动从备份中排除。 ([#9804](https://github.com/nocobase/nocobase/pull/9804)) by @cgyrock

- **[工作流：自定义操作事件]** 将工作流触发器及绑定工作流设置迁移到 client-v2，涵盖动作触发器、自定义动作触发器、请求拦截触发器，以及提交/更新动作的工作流绑定设置。 ([#9845](https://github.com/nocobase/nocobase/pull/9845)) by @mytharcher

- **[工作流：HTTP 请求节点]** 工作流 HTTP 请求节点迁移到 client-v2。 ([#9806](https://github.com/nocobase/nocobase/pull/9806)) by @jiannx

- **[HTTP 请求加密]** 新增 HTTP 请求加密插件的 v2 客户端支持，确保 v2 客户端中的查询参数继续被加密。 by @jiannx

- **[工作流：数据库事务节点]** 优化 v2 工作流数据库事务节点布局，使分支标签和提交标记拥有更合适的间距。 by @katherinehhh

- **[AI: 知识库]** 将 AI 知识库设置页迁移到 v2 客户端，并修复知识库和向量存储页面的布局与加载问题。 by @cgyrock

- **[文件存储：S3 (Pro)]** S3 Pro 上传现在返回包含永久文件 URL 的已创建文件记录。 by @mytharcher

- **[邮件管理]** 将按部门查看邮件配置移动到 V1 邮件通用设置页面，避免服务商凭据保存时覆盖该配置，并将 V2 通用设置排在服务商设置之前。 by @jiannx

### 🐛 修复

- **[client-v2]**
  - 修正 Urdu 标签，并在系统设置语言列表中新增独立的乌兹别克语选项。 ([#10090](https://github.com/nocobase/nocobase/pull/10090)) by @hongboji

  - 修复自动 SSO 跳转 Provider 在生产构建中无法保持正确鉴权顺序的问题 ([#10100](https://github.com/nocobase/nocobase/pull/10100)) by @jiannx

  - 工作流筛选条件现在会保留工作流变量表达式，并在变量元数据无法解析时显示明确的错误提示。 ([#10088](https://github.com/nocobase/nocobase/pull/10088)) by @Molunerfinn

  - 修复 v2 工作流赋值编辑器在集合字段名为 nodeName 时产生的控制台报错。 ([#10067](https://github.com/nocobase/nocobase/pull/10067)) by @katherinehhh

  - 修复工作流 v2 变量编辑器在触发器、筛选条件和字段赋值表单中的变量胶囊回显、禁用态和操作符标签显示不一致的问题。 ([#10041](https://github.com/nocobase/nocobase/pull/10041)) by @Molunerfinn

  - 修复 v2 工作流已执行版本只读状态下仍可修改字段赋值的问题。 ([#10014](https://github.com/nocobase/nocobase/pull/10014)) by @katherinehhh

  - 修复工作流手动执行后自动创建新版本的跳转问题，确保旧版和新版界面都会打开正确的工作流页面。 ([#9955](https://github.com/nocobase/nocobase/pull/9955)) by @Molunerfinn

- **[flow-engine]** 修复单值变量输入框选择变量后仍可继续输入额外文本的问题。 ([#10050](https://github.com/nocobase/nocobase/pull/10050)) by @katherinehhh

- **[AI 员工]** 修复在 AI 员工聊天输入框粘贴文件后发送报错的问题 ([#10106](https://github.com/nocobase/nocobase/pull/10106)) by @cgyrock

- **[用户认证]**
  - 修复 v2 认证器管理页面的声明生成错误 ([#10095](https://github.com/nocobase/nocobase/pull/10095)) by @jiannx

  - 修复 v2 认证管理中编辑认证器时已保存设置不回显的问题。 ([#10091](https://github.com/nocobase/nocobase/pull/10091)) by @jiannx

- **[通知管理]**
  - 修复通知接收人选择后用户 ID 保存为文本的问题 ([#10093](https://github.com/nocobase/nocobase/pull/10093)) by @zhangzhonghe

  - 修复 CC 配置中显示错误工作流变量的问题 ([#9937](https://github.com/nocobase/nocobase/pull/9937)) by @zhangzhonghe

- **[工作流：JSON 变量映射]** 修复工作流 JSON 变量映射节点选择循环作用域变量时报错的问题。 ([#10094](https://github.com/nocobase/nocobase/pull/10094)) by @Molunerfinn

- **[UI 布局]** 修复 Mobile 设置入口丢失当前子应用路径的问题 ([#10078](https://github.com/nocobase/nocobase/pull/10078)) by @zhangzhonghe

- **[工作流]**
  - 查看已执行工作流时，工作流表单控件现在会正确继承禁用状态。 ([#10079](https://github.com/nocobase/nocobase/pull/10079)) by @Molunerfinn

  - 更新触发器配置后自动刷新工作流画布 ([#10068](https://github.com/nocobase/nocobase/pull/10068)) by @zhangzhonghe

  - 修复工作流 v2 条件操作数默认保持单行显示，并在所选变量路径过长时正确换行。 ([#10033](https://github.com/nocobase/nocobase/pull/10033)) by @Molunerfinn

  - 修复 workflow v2 任务中心的显示和详情加载问题 ([#10001](https://github.com/nocobase/nocobase/pull/10001)) by @zhangzhonghe

  - 修复工作流结果文案未翻译和抄送配置弹窗过宽的问题 ([#9977](https://github.com/nocobase/nocobase/pull/9977)) by @zhangzhonghe

  - 修复 workflow 画布在跨 bundle 场景下的 Context 不一致问题，确保旧版工作流页面中的分支和一些变量选择能正常工作。 ([#9951](https://github.com/nocobase/nocobase/pull/9951)) by @Molunerfinn

  - 修复 v2 工作流中无法配置站内信内容的问题 ([#9885](https://github.com/nocobase/nocobase/pull/9885)) by @zhangzhonghe

  - 修复迁移到 client v2 的部分问题 ([#9929](https://github.com/nocobase/nocobase/pull/9929)) by @mytharcher

  - 恢复了工作流集合触发器手动执行的防抖远程搜索，并使该选择器与 v1 的 200 条记录拉取行为保持一致。 ([#9870](https://github.com/nocobase/nocobase/pull/9870)) by @Molunerfinn

  - 修复工作流 v2 添加节点菜单未按工作流和分支规则禁用不可用节点类型的问题 ([#9855](https://github.com/nocobase/nocobase/pull/9855)) by @mytharcher

- **[工作流：延时节点]** 修复延时节点的时长输入，并阻止保存小于最小值的数值。 ([#10056](https://github.com/nocobase/nocobase/pull/10056)) by @Molunerfinn

- **[工作流：聚合查询节点]** 修复验证规则以支持筛选条件为空的情况 ([#10053](https://github.com/nocobase/nocobase/pull/10053)) by @mytharcher

- **[公开表单]** 修复关闭 UI Editor 后公开表单仍可配置的问题 ([#10036](https://github.com/nocobase/nocobase/pull/10036)) by @zhangzhonghe

- **[区块：评论]** 调整新评论区块的默认操作顺序。 ([#9976](https://github.com/nocobase/nocobase/pull/9976)) by @jiannx

- **[工作流：邮件发送节点]** 修复工作流 v2 测试因缺少触发工作流操作注册相关 mock 而失败的问题。 ([#9863](https://github.com/nocobase/nocobase/pull/9863)) by @jiannx

- **[工作流：JavaScript 节点]** 修复旧版工作流客户端中 JavaScript 节点注册失败的问题。 ([#9826](https://github.com/nocobase/nocobase/pull/9826)) by @jiannx

- **[工作流：响应消息]** 将工作流响应消息节点迁移到 v2 画布，并修复不支持的工作流类型仍可添加该节点的问题。 ([#9830](https://github.com/nocobase/nocobase/pull/9830)) by @jiannx

- **[文件管理器]** 修复外部数据源附件 URL 字段上传文件时接口 404 的问题 ([#9809](https://github.com/nocobase/nocobase/pull/9809)) by @2013xile

- **[验证：TOTP 认证器]** 修复 TOTP 认证器绑定流程，确保临时设置密钥在绑定后被删除，并阻止已验证的验证码被重复使用。 by @jiannx

- **[认证：SAML 2.0]** 修复现代客户端中未认证用户的 SAML 自动登录跳转，并保留原始目标路径 by @jiannx

- **[AI: 知识库]** 为 AI 知识库工作流创建文档节点增加覆盖选项，支持替换相同标识的已有文档。 by @cgyrock

- **[数据源：外部 NocoBase]** 修复外部 NocoBase 文件表的文件预览、永久 URL 处理和上传路由问题，包括 S3 Pro 上传场景 by @mytharcher

- **[plugin-service-platform]**
  - 恢复服务平台中已授权插件的下载能力。 by @jiannx

  - 禁用服务平台的插件下载接口。 by @jiannx

- **[工作流：子流程]** 修复子流程节点配置选择框按工作流标题搜索不生效的问题。 by @mytharcher

- **[文件存储：S3 (Pro)]** 修复 S3 兼容存储的文件 URL 遗漏配置路径，导致已上传的 Logo 和附件返回 404 的问题 by @mytharcher

- **[认证：OIDC]** 修复 OIDC 自动登录在生产构建中不跳转的问题，并在登录后保留原始现代客户端路径 by @jiannx

- **[工作流：审批]**
  - 修复审批申请表单空白及操作按钮缺失或显示错误的问题 by @zhangzhonghe

  - 修复审批工作流手动执行弹窗中申请人字段提前校验及角色名称未翻译的问题。 by @Molunerfinn

  - 修复生产构建后已执行工作流的审批任务标题仍可编辑的问题。 by @Molunerfinn

  - 允许用户在审批工作流执行后查看操作界面和审批卡片 by @zhangzhonghe

  - 修复工作流配置弹窗中的表单操作按钮仍会响应点击的问题 by @zhangzhonghe

  - 修复审批发起人界面的显示与操作问题 by @zhangzhonghe

  - 打开审批表单时关闭 Apply new 抽屉 by @zhangzhonghe

  - 修复启用审批和通知插件时 V2 页面可能无法打开的问题 by @zhangzhonghe

  - 修复 workflow v2 任务中心审批任务的表单和操作问题 by @zhangzhonghe

  - 修复 v2 审批子表格在详情中显示异常的问题 by @zhangzhonghe

  - 修复 v2 审批任务详情弹窗缺少已处理审批信息的问题 by @zhangzhonghe

  - 修复审批人界面默认显示空区块及固定审批人 ID 保存问题 by @zhangzhonghe

  - 修复审批数据表出现在区块数据源列表中的问题 by @zhangzhonghe

  - 修复迁移到 client v2 引入的问题 by @mytharcher

  - 修复配置审批工作流条件时报错的问题 by @zhangzhonghe

  - 审批界面无法在 V2 使用时引导用户前往 V1 页面 by @zhangzhonghe

  - 修复审批人排序和旧版配置入口显示问题 by @zhangzhonghe

  - 修复打开抄送节点配置时报错的问题 by @zhangzhonghe

  - 修复审批任务卡片不显示审批数据的问题 by @zhangzhonghe

- **[数据表字段：手写签名]** 修复 client-v2 手写签名字段文件数据表选择器的多语言显示和选项筛选问题。 by @katherinehhh

- **[企业微信]** 修复企业微信通知渠道无法保存所选认证器的问题。 by @jiannx

