### 🎉 新特性

- **[client-v2]** 新增 legacy 和 modern 路由配置环境变量。 ([#9891](https://github.com/nocobase/nocobase/pull/9891)) by @Molunerfinn

- **[ai]** 支持在远程 MCP 客户端的 URL 和请求头中使用当前用户变量。 ([#9828](https://github.com/nocobase/nocobase/pull/9828)) by @cgyrock

- **[cli]** nb init 支持 --hook-script ([#9824](https://github.com/nocobase/nocobase/pull/9824)) by @chenos

- **[通知：电子邮件]** 将工作流通知节点客户端迁移到 v2，恢复按渠道显示的通知配置表单，并保持已迁移通知配置在旧版工作流路由中的兼容性。 ([#9817](https://github.com/nocobase/nocobase/pull/9817)) by @jiannx

- **[工作流：邮件发送节点]**
  - 新增工作流邮件发送节点配置的 v2 客户端支持。 ([#9825](https://github.com/nocobase/nocobase/pull/9825)) by @jiannx

  - 为工作流邮件节点新增附件发送能力。 ([#9724](https://github.com/nocobase/nocobase/pull/9724)) by @mytharcher

- **[UI 布局]** 增加对移动端布局的支持 ([#9641](https://github.com/nocobase/nocobase/pull/9641)) by @zhangzhonghe

- **[备份管理器]** 支持 KingBase 主数据库备份和还原 ([#9791](https://github.com/nocobase/nocobase/pull/9791)) by @2013xile

- **[工作流]**
  - 将工作流设置页迁移到 v2 客户端，并将可复用的可拖拽分类页签组件抽离到 `@nocobase/client-v2`。 ([#9645](https://github.com/nocobase/nocobase/pull/9645)) by @Molunerfinn

  - 新增工作流数据库事务作用域支持。 ([#9742](https://github.com/nocobase/nocobase/pull/9742)) by @mytharcher
参考文档：[数据库事务](docs/docs/cn/workflow/nodes/transaction.md)
- **[AI 员工]**
  - 为 AI 知识库新增外部向量存储配置表单。 ([#9723](https://github.com/nocobase/nocobase/pull/9723)) by @cgyrock

  - 为 AI 知识库新增外部向量存储配置表单。 ([#9723](https://github.com/nocobase/nocobase/pull/9723)) by @cgyrock

- **[多工作区]** 新增多工作区插件 by @zhangzhonghe

- **[工作流：数据库事务节点]**
  - 为工作流数据库事务节点新增 client-v2 实现，并保留旧版客户端兼容入口。 by @katherinehhh

  - 新增数据库事务工作流节点插件。 by @mytharcher

- **[AI: 知识库]** 为 AI 知识库新增外部向量存储配置表单。 by @cgyrock

- **[迁移管理]** 支持 KingBase 主数据库迁移 by @2013xile

- **[邮件管理]** 邮件管理客户端迁移到 v2。 by @jiannx

### 🚀 优化

- **[undefined]**
  - 优化俄语文档翻译，提升措辞、可读性和术语一致性。 ([#9816](https://github.com/nocobase/nocobase/pull/9816)) by @sembaev-a-a

  - 优化 AI 知识库检索和相关文档。 ([#9765](https://github.com/nocobase/nocobase/pull/9765)) by @cgyrock

  - 优化 AI 知识库检索和相关文档。 ([#9765](https://github.com/nocobase/nocobase/pull/9765)) by @cgyrock

  - 将版本控制插件的中文文档名称统一为「版本控制」。 ([#9776](https://github.com/nocobase/nocobase/pull/9776)) by @cgyrock

  - - ([#9754](https://github.com/nocobase/nocobase/pull/9754)) by @sembaev-a-a

  - AI 搭建概述页新增版本管理对话场景 ([#9748](https://github.com/nocobase/nocobase/pull/9748)) by @Molunerfinn
参考文档：[AI 搭建快速开始](https://docs.nocobase.com/cn/ai-builder)
  - 完善版本管理文档，补充 AI 搭建自动保存版本的说明。 ([#9745](https://github.com/nocobase/nocobase/pull/9745)) by @cgyrock
参考文档：[版本管理](docs/docs/cn/ops-management/version-control/index.md)
- **[flow-engine]** 让 RunJS 通过资源 API 更新数据后关闭弹窗时，相关数据区块自动刷新 ([#9873](https://github.com/nocobase/nocobase/pull/9873)) by @gchust

- **[client-v2]**
  - 修复 Client V2 插件管理卡片在插件使用共享或历史设置路径时缺少 Settings 入口的问题。 ([#9852](https://github.com/nocobase/nocobase/pull/9852)) by @katherinehhh

  - 调整 v2 系统设置菜单顺序和页面面板高度，使其与设置中心的统一布局保持一致。 ([#9849](https://github.com/nocobase/nocobase/pull/9849)) by @katherinehhh

  - 在 UI 字段验证设置中以只读继承规则的形式展示字段级验证规则。 ([#9819](https://github.com/nocobase/nocobase/pull/9819)) by @katherinehhh

  - 表单值配置新增覆盖值选项。 ([#9578](https://github.com/nocobase/nocobase/pull/9578)) by @gchust

  - 表单子表格关系字段列数据范围支持当前项变量。 ([#9444](https://github.com/nocobase/nocobase/pull/9444)) by @gchust

- **[cli]**
  - 添加 env 配置的 schema 版本记录 ([#9782](https://github.com/nocobase/nocobase/pull/9782)) by @chenos

  - 优化不同格式的版本号兼容判断 ([#9763](https://github.com/nocobase/nocobase/pull/9763)) by @chenos

  - skills 支持指定版本更新 ([#9760](https://github.com/nocobase/nocobase/pull/9760)) by @chenos

  - 优化初始化设置的文本 ([#9750](https://github.com/nocobase/nocobase/pull/9750)) by @chenos

- **[工作流：JSON 计算]** 将工作流 JSON 计算节点配置界面迁移到 v2 工作流画布，并保留 v1 画布兼容性。 ([#9902](https://github.com/nocobase/nocobase/pull/9902)) by @mytharcher

- **[工作流]**
  - 简化工作流 v2 创建/更新节点的字段赋值配置，优化已选变量展示，并避免生成未使用的赋值表单模型数据。 ([#9887](https://github.com/nocobase/nocobase/pull/9887)) by @katherinehhh

  - 导出工作流 v2 画布扩展 API，供下游工作流节点插件复用。 ([#9834](https://github.com/nocobase/nocobase/pull/9834)) by @katherinehhh

  - 改进测试用例的稳定性 ([#9773](https://github.com/nocobase/nocobase/pull/9773)) by @mytharcher

  - 将工作流输出节点配置迁移到 v2，并让 v2 工作流结果查看器对齐旧版字符串结果的展示行为。 ([#9813](https://github.com/nocobase/nocobase/pull/9813)) by @Molunerfinn

  - 迁移工作流的结束节点到 v2 版本。 ([#9795](https://github.com/nocobase/nocobase/pull/9795)) by @Molunerfinn

  - 优化工作流元数据编辑体验，支持在详情弹窗中编辑描述，并在复制工作流时默认填充源工作流元数据。 ([#9766](https://github.com/nocobase/nocobase/pull/9766)) by @mytharcher

- **[备份管理器]**
  - 修复版本控制按选中数据表备份时，包含视图或相关数据库对象后还原失败的问题。 ([#9827](https://github.com/nocobase/nocobase/pull/9827)) by @cgyrock

  - 优化备份管理表格样式及长文件名显示。 ([#9864](https://github.com/nocobase/nocobase/pull/9864)) by @katherinehhh

  - `dataCategory` 标记为 `'runtime'` 的数据表现在会自动从备份中排除。 ([#9804](https://github.com/nocobase/nocobase/pull/9804)) by @cgyrock

  - `dataCategory` 标记为 `'runtime'` 的数据表现在会自动从备份中排除。 ([#9804](https://github.com/nocobase/nocobase/pull/9804)) by @cgyrock

- **[公开表单]** 区分 V1 和 V2 的公开表单列表，并修复 V2 Configure 进入可配置表单详情页的问题。 ([#9851](https://github.com/nocobase/nocobase/pull/9851)) by @katherinehhh

- **[工作流：自定义操作事件]** 将工作流触发器及绑定工作流设置迁移到 client-v2，涵盖动作触发器、自定义动作触发器、请求拦截触发器，以及提交/更新动作的工作流绑定设置。 ([#9845](https://github.com/nocobase/nocobase/pull/9845)) by @mytharcher

- **[用户数据同步]** 新增用户数据同步设置的新版界面支持 ([#9837](https://github.com/nocobase/nocobase/pull/9837)) by @2013xile

- **[前端流引擎]**
  - 开放 runjs 运行环境限制。 ([#9841](https://github.com/nocobase/nocobase/pull/9841)) by @gchust

  - 利用 flowsurface api 搭建 AI 员工时默认将当前区块添加至用户上下文中。 ([#9840](https://github.com/nocobase/nocobase/pull/9840)) by @gchust

- **[工作流：HTTP 请求节点]** 工作流 HTTP 请求节点迁移到 client-v2。 ([#9806](https://github.com/nocobase/nocobase/pull/9806)) by @jiannx

- **[权限控制]** 对齐 v2 用户和权限设置页与 v1 的行为，包括分页总数显示、部门树交互、选中样式，以及权限面板内部滚动。 ([#9810](https://github.com/nocobase/nocobase/pull/9810)) by @jiannx

- **[工作流：JavaScript 节点]** 将 JavaScript 工作流节点迁移到 client-v2 ([#9805](https://github.com/nocobase/nocobase/pull/9805)) by @jiannx

- **[文件管理器]**
  - 改进 PDF 预览：跨源 PDF 文件使用浏览器原生预览，同源 PDF 文件继续使用 PDF.js 渲染。 ([#9796](https://github.com/nocobase/nocobase/pull/9796)) by @mytharcher

  - 为文件管理器的 PDF 预览增加可选择文本支持，适用于包含内嵌文本的 PDF。 ([#9781](https://github.com/nocobase/nocobase/pull/9781)) by @mytharcher

- **[用户]** 优化用户和权限 v2 页面布局及部门树行为。 ([#9780](https://github.com/nocobase/nocobase/pull/9780)) by @jiannx

- **[操作：批量编辑]** 优化 v2 操作插件加载方式，并保持已迁移操作按钮的顺序稳定。 ([#9778](https://github.com/nocobase/nocobase/pull/9778)) by @katherinehhh

- **[操作：导入记录]** 优化导入和异步任务错误详情弹窗，长错误信息可完整查看且不会破坏布局。 ([#9746](https://github.com/nocobase/nocobase/pull/9746)) by @katherinehhh

- **[翻译测试工具]** 为翻译测试工具新增 client v2 设置页面。 ([#9744](https://github.com/nocobase/nocobase/pull/9744)) by @jiannx

- **[版本控制]** 将版本控制插件的中文显示名称改为「版本控制」。 by @cgyrock

- **[操作：导入记录 Pro]** 优化导入弹窗，长错误信息可完整查看，并支持在 v2 设置菜单中直接选择处理模式。 by @katherinehhh

- **[AI: 知识库]** 改进 AI 知识库文档分段、分段管理、命中测试以及文档工作流节点支持。 by @cgyrock

- **[企业微信]** 新增企业微信认证、同步和通知设置的新版界面支持 by @2013xile

- **[钉钉]** 新增钉钉认证、同步和通知设置的新版界面支持 by @2013xile

### 🐛 修复

- **[client-v2]**
  - 修复界面配置模式下刷新页面时短暂闪现暂无页面提示的问题。 ([#9918](https://github.com/nocobase/nocobase/pull/9918)) by @katherinehhh

  - 修复 v2 表单提交成功后跳转链接无法引用已保存响应结果记录的问题。 ([#9907](https://github.com/nocobase/nocobase/pull/9907)) by @katherinehhh

  - 修复表格区块配置的拖拽排序字段被删除后运行报错的问题，并支持清空拖拽排序字段配置。 ([#9867](https://github.com/nocobase/nocobase/pull/9867)) by @jiannx

  - 修复 v2 表格行操作按钮导致行高变化的问题。 ([#9866](https://github.com/nocobase/nocobase/pull/9866)) by @jiannx

  - 修复筛选表单无法给显示关联表字段赋值的问题 ([#9875](https://github.com/nocobase/nocobase/pull/9875)) by @zhangzhonghe

  - 修复联合角色在 v2 版本中无法被变量正确解析的问题。 ([#9611](https://github.com/nocobase/nocobase/pull/9611)) by @gchust

  - 修复更改区块配置后界面不刷新的问题。 ([#9843](https://github.com/nocobase/nocobase/pull/9843)) by @gchust

  - 修复自定义操作工作流触发按钮将自定义上下文 JSON 放到额外的 `values` 层级或作为序列化字符串提交的问题。 ([#9815](https://github.com/nocobase/nocobase/pull/9815)) by @mytharcher

  - 修复配置固定值或者默认值为关系字段值时不生效的问题。 ([#9820](https://github.com/nocobase/nocobase/pull/9820)) by @gchust

  - 修复子表格列事件流执行不正确的问题。 ([#9821](https://github.com/nocobase/nocobase/pull/9821)) by @gchust

  - 修复关系字段错误携带`updateAssociationValues` 问题 ([#9812](https://github.com/nocobase/nocobase/pull/9812)) by @katherinehhh

  - 修复子表单包含子表格时表单提交报错的问题。 ([#9807](https://github.com/nocobase/nocobase/pull/9807)) by @gchust

  - 修复 v2 筛选表单中复选框下拉选项未显示翻译文本的问题。 ([#9792](https://github.com/nocobase/nocobase/pull/9792)) by @katherinehhh

  - 修复 v2 表格关系字段的标题字段使用时间、日期或日期时间字段时显示和格式设置不正确的问题。 ([#9785](https://github.com/nocobase/nocobase/pull/9785)) by @katherinehhh

  - 修复区块转换成模板后无法再被修改事件流配置的问题。 ([#9585](https://github.com/nocobase/nocobase/pull/9585)) by @gchust

  - 修复迁移进度未显示专用进度视图的问题 ([#9761](https://github.com/nocobase/nocobase/pull/9761)) by @2013xile

  - 修复 v2 页面登录后一直加载的问题 ([#9738](https://github.com/nocobase/nocobase/pull/9738)) by @zhangzhonghe

- **[cli]**
  - cli 支持 pnpm 和 yarn 方式的更新 ([#9912](https://github.com/nocobase/nocobase/pull/9912)) by @chenos

  - source dev 依赖优化 ([#9882](https://github.com/nocobase/nocobase/pull/9882)) by @chenos

  - nb 运行环境 node 版本检测 ([#9749](https://github.com/nocobase/nocobase/pull/9749)) by @chenos

- **[client]**
  - 修改了一些文案错误。 ([#9905](https://github.com/nocobase/nocobase/pull/9905)) by @Molunerfinn

  - 修复水平子表单中字段过窄导致数据不显示的问题 ([#9755](https://github.com/nocobase/nocobase/pull/9755)) by @zhangzhonghe

- **[flow-engine]**
  - 修复 runjs 中 ctx.openView 部分参数不生效的问题。 ([#9883](https://github.com/nocobase/nocobase/pull/9883)) by @gchust

  - 修复调整字段宽度时详情弹窗异常关闭的问题 ([#9850](https://github.com/nocobase/nocobase/pull/9850)) by @zhangzhonghe

  - 修复拖拽字段后区块工具栏可能不重新显示的问题 ([#9848](https://github.com/nocobase/nocobase/pull/9848)) by @zhangzhonghe

  - 修复 v2 单行文本和多行文本字段中的越南语和中文输入法输入问题。 ([#9764](https://github.com/nocobase/nocobase/pull/9764)) by @katherinehhh

- **[ai]**
  - 支持在依赖当前用户的 MCP 配置中使用 NocoBase 请求变量，并避免用户态 MCP 连接失败影响 AI 员工正常对话。 ([#9888](https://github.com/nocobase/nocobase/pull/9888)) by @cgyrock

  - 修复 AI 插件中 LangChain 依赖版本解析不兼容的问题。 ([#9831](https://github.com/nocobase/nocobase/pull/9831)) by @cgyrock

  - 将 AI 相关包中的 `@langchain/openai` 锁定为仅允许补丁版本更新。 ([#9829](https://github.com/nocobase/nocobase/pull/9829)) by @cgyrock

- **[app]** 避免在推断插件 public path 时使用无关的 currentScript ([#9839](https://github.com/nocobase/nocobase/pull/9839)) by @chenos

- **[auth]** 登录状态响应不再包含加密密码数据 ([#9836](https://github.com/nocobase/nocobase/pull/9836)) by @2013xile

- **[cli-v1]** 修复 create-nocobase-app 创建的项目从 2.0 升级到 2.1 运行 yarn dev 报错的问题。 ([#9775](https://github.com/nocobase/nocobase/pull/9775)) by @Molunerfinn

- **[server]** 修复 `pm:enable` 中不安全插件名处理，避免插件解析过程导致本地文件包含风险。 ([#9701](https://github.com/nocobase/nocobase/pull/9701)) by @mytharcher

- **[备份管理器]**
  - 修复 v2 备份管理器设置页标签异常加粗、与其他设置页样式不一致的问题。 ([#9908](https://github.com/nocobase/nocobase/pull/9908)) by @katherinehhh

  - 修复备份还原时可能接受不安全 PostgreSQL schema 名称的安全问题 ([#9758](https://github.com/nocobase/nocobase/pull/9758)) by @2013xile

- **[AI 员工]**
  - 修复异常工具调用记录在后续对话中重复发送，导致 AI 员工回复失败的问题。 ([#9900](https://github.com/nocobase/nocobase/pull/9900)) by @cgyrock

  - 修复 AI 员工快捷入口触发任务时未携带当前工作上下文附件的问题。 ([#9808](https://github.com/nocobase/nocobase/pull/9808)) by @cgyrock

  - 修复 AI 员工无法正确填充子表格数据的问题。 ([#9801](https://github.com/nocobase/nocobase/pull/9801)) by @gchust

  - 修复工作流LLM节点消息配置丢失问题. ([#9743](https://github.com/nocobase/nocobase/pull/9743)) by @cgyrock

  - 修复 AI 员工对话框粘贴的附件无法删除问题。 ([#9753](https://github.com/nocobase/nocobase/pull/9753)) by @cgyrock

- **[工作流]**
  - 修复工作流 v2 添加节点菜单未按工作流和分支规则禁用不可用节点类型的问题 ([#9855](https://github.com/nocobase/nocobase/pull/9855)) by @mytharcher

  - 恢复了工作流集合触发器手动执行的防抖远程搜索，并使该选择器与 v1 的 200 条记录拉取行为保持一致。 ([#9870](https://github.com/nocobase/nocobase/pull/9870)) by @Molunerfinn

  - 修复工作流调度器在调度异常后的恢复问题。 ([#9783](https://github.com/nocobase/nocobase/pull/9783)) by @mytharcher

  - 修复工作流节点变更后工作流最后更新人未同步更新的问题。 ([#9769](https://github.com/nocobase/nocobase/pull/9769)) by @mytharcher

  - 修复工作流超时处理，使已中止的执行及其待处理任务能够原子更新。 ([#9768](https://github.com/nocobase/nocobase/pull/9768)) by @mytharcher

- **[区块：iframe]** 修复普通用户查看 v2 iframe HTML 模式区块时报 403 的问题。 ([#9889](https://github.com/nocobase/nocobase/pull/9889)) by @jiannx

- **[UI 模板]**
  - 修复关系字段区块模板无法被使用的问题。 ([#9406](https://github.com/nocobase/nocobase/pull/9406)) by @gchust

  - 修复 ctx.openview 默认上下文不正确的问题。 ([#9811](https://github.com/nocobase/nocobase/pull/9811)) by @gchust

- **[工作流：自定义操作事件]**
  - 修复 v2 自定义操作绑定工作流选择器的过滤请求，保证启用状态使用布尔值过滤并能正确列出工作流。 ([#9865](https://github.com/nocobase/nocobase/pull/9865)) by @mytharcher

  - 修复 v2 触发工作流按钮在自定义上下文请求体提交前未解析前端变量的问题 ([#9853](https://github.com/nocobase/nocobase/pull/9853)) by @mytharcher

  - 修复操作面板 v2 触发工作流按钮未绑定工作流时仍提示成功并发送请求的问题。 ([#9798](https://github.com/nocobase/nocobase/pull/9798)) by @mytharcher

- **[数据源管理]**
  - 为 v2 数据源中没有主键或记录唯一标识的数据表增加提示和快捷设置。 ([#9872](https://github.com/nocobase/nocobase/pull/9872)) by @katherinehhh

  - 修复 v1 数据源管理中删除当前集合分类后，All collections 标签页可能显示为空的问题。 ([#9757](https://github.com/nocobase/nocobase/pull/9757)) by @katherinehhh

  - 修复 v1 外部数据源 Configure fields 页面反复重渲染导致字段编辑弹窗内容为空的问题。 ([#9759](https://github.com/nocobase/nocobase/pull/9759)) by @katherinehhh

- **[工作流：邮件发送节点]** 修复工作流 v2 测试因缺少触发工作流操作注册相关 mock 而失败的问题。 ([#9863](https://github.com/nocobase/nocobase/pull/9863)) by @jiannx

- **[嵌入 NocoBase]** 修复 v2 嵌入页面在 URL token 被移除后刷新会丢失 token 访问状态的问题。 ([#9857](https://github.com/nocobase/nocobase/pull/9857)) by @katherinehhh

- **[工作流：响应消息]** 将工作流响应消息节点迁移到 v2 画布，并修复不支持的工作流类型仍可添加该节点的问题。 ([#9830](https://github.com/nocobase/nocobase/pull/9830)) by @jiannx

- **[区块：甘特图]** 修复甘特图任务弹窗模板设置无法正确生效或清空的问题。 ([#9835](https://github.com/nocobase/nocobase/pull/9835)) by @jiannx

- **[操作：打印]** 修复 v2 详情区块为空时打印整页的问题，空详情区块不再打印导航和侧边栏。 ([#9832](https://github.com/nocobase/nocobase/pull/9832)) by @katherinehhh

- **[工作流：JavaScript 节点]** 修复旧版工作流客户端中 JavaScript 节点注册失败的问题。 ([#9826](https://github.com/nocobase/nocobase/pull/9826)) by @jiannx

- **[文件管理器]**
  - 修复外部数据源附件 URL 字段上传文件时接口 404 的问题 ([#9809](https://github.com/nocobase/nocobase/pull/9809)) by @2013xile

  - 修复外部数据源附件 URL 字段上传文件时接口 404 的问题 ([#9809](https://github.com/nocobase/nocobase/pull/9809)) by @2013xile

  - 修复 pdf.js worker 模块加载异常导致 PDF 预览失败的问题。 ([#9779](https://github.com/nocobase/nocobase/pull/9779)) by @mytharcher

  - 修复切换到 pdf.js 后部分 PDF 预览缺失中文/CID 字体文字的问题。 ([#9737](https://github.com/nocobase/nocobase/pull/9737)) by @mytharcher

- **[操作：自定义请求]** 修复 V2 自定义请求操作未配置请求设置时额外弹出错误提示的问题。 ([#9802](https://github.com/nocobase/nocobase/pull/9802)) by @katherinehhh

- **[前端流引擎]** 修复 AI 搭建时弹窗里的当前记录表单和详情数据不正确的问题。 ([#9788](https://github.com/nocobase/nocobase/pull/9788)) by @gchust

- **[异步任务管理器]**
  - 修复异步任务文件下载时 `filterByTk` 缺失导致数据库查询报错的问题。 ([#9705](https://github.com/nocobase/nocobase/pull/9705)) by @mytharcher

  - 修复异步任务 worker 日志中的请求 ID 错误问题 ([#9686](https://github.com/nocobase/nocobase/pull/9686)) by @2013xile

- **[操作：导入记录]** 导入上传文件改为落盘存储，降低大数据量导入时的内存压力。 ([#9739](https://github.com/nocobase/nocobase/pull/9739)) by @mytharcher

- **[工作流：SQL 节点]** 修复部分 beta 版本用户跳过 SQL 工作流历史模板变量迁移的问题。 ([#9762](https://github.com/nocobase/nocobase/pull/9762)) by @mytharcher

- **[区块：看板]**
  - 修复非编辑态打开日历、甘特图和看板区块时意外持久化隐藏弹窗操作并重复发送删除请求的问题。 ([#9772](https://github.com/nocobase/nocobase/pull/9772)) by @jiannx

  - 修复日历等弹窗支持URL ([#9751](https://github.com/nocobase/nocobase/pull/9751)) by @jiannx

- **[API 文档]** 修复 API 文档插件声明文件构建失败的问题。 ([#9752](https://github.com/nocobase/nocobase/pull/9752)) by @katherinehhh

- **[版本控制]**
  - 修复版本控制按选中数据表备份时，包含视图或相关数据库对象后还原失败的问题。 by @cgyrock

  - 调整版本管理顶部快捷入口的位置，使其在旧版和 v2 管理布局中都显示在 UI 编辑器旁边。 by @cgyrock

- **[AI: 知识库]**
  - 修复 AI 知识库文档表格和命中测试结果卡片在窄屏或长文件名场景下内容溢出的问题。 by @cgyrock

  - 修复 AI 知识库插件中 LangChain 依赖版本解析不兼容的问题。 by @cgyrock

  - 修复未启用 AI 插件时启用 AI 知识库插件报错不明确的问题。 by @cgyrock

- **[多空间]**
  - 修复空间设置页面只能加载前 20 条空间记录的问题。 by @jiannx

  - 修复认证恢复请求被过期多空间请求头阻断的问题。 by @jiannx

  - 修复空间管理员没有用户邮箱字段权限时添加空间用户报无权限的问题。 by @jiannx

- **[数据源：外部 NocoBase]** 按上传数据源代理 NocoBase 外部数据源的文件上传和存储接口 by @2013xile

- **[操作：导出记录 Pro]** 改进 v2 导入/导出 Pro 的处理模式设置和提示说明。 by @katherinehhh

- **[操作：导入记录 Pro]** 避免 Pro 导入在创建异步任务前于请求节点解析大文件。 by @mytharcher

- **[工作流：子流程]** 修复异步子流程在服务重启或内存事件映射丢失后父流程无法继续执行的问题。 by @mytharcher

- **[迁移管理]** 修复导入大型迁移数据文件时可能失败的问题 by @2013xile

- **[模板打印]** 在模板打印开始前拒绝不支持的模板文件类型 by @2013xile

- **[工作流：审批]**
  - 修复审批动作节点校验：`applyDetail` 或 `approvalUid` 允许传入 `null`，仅在提供字符串引用时才进行处理 by @mytharcher

  - 修复相关审批首次不加载或刷新后时间线不更新的问题 by @zhangzhonghe

  - 修复 v2 审批表单中关联数据显示不出来的问题 by @zhangzhonghe

- **[应用监管器]** 修复远程 WebSocket 代理响应失败时可能导致服务崩溃的问题 by @2013xile

