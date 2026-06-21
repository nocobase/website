汇总一周产品更新日志，最新发布可以[前往我们的博客查看](https://www.nocobase.com/cn/blog/timeline)。

**NocoBase 目前更新包括的版本更新包括三个分支：`main` ，`next`和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

`main` ：截止目前最稳定的版本，推荐安装此版本。

`next`：包含即将发布的新功能，经过初步测试的版本，可能存在部分已知或未知问题。主要面向测试用户，用于收集反馈和进一步优化功能。适合愿意提前体验新功能并提供反馈的测试用户。

`develop`：开发中的版本，包含最新的功能代码，可能尚未完成或存在较多不稳定因素，主要用于内部开发和快速迭代。适合对产品功能前沿发展感兴趣的技术用户，但可能存在较多问题或不完整功能，不建议在生产环境中使用。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.1.9](https://www.nocobase.com/cn/blog/v2.1.9)

*发布日期：2026-06-20*

### 🚀 优化

- **[client-v2]** 表单值配置新增覆盖值选项。 ([#9578](https://github.com/nocobase/nocobase/pull/9578)) by @gchust

### 🐛 修复

- **[client-v2]**

  - 修复自定义操作工作流触发按钮将自定义上下文 JSON 放到额外的 `values` 层级或作为序列化字符串提交的问题。 ([#9815](https://github.com/nocobase/nocobase/pull/9815)) by @mytharcher
  - 修复配置固定值或者默认值为关系字段值时不生效的问题。 ([#9820](https://github.com/nocobase/nocobase/pull/9820)) by @gchust
- **[auth]** 登录状态响应不再包含加密密码数据 ([#9836](https://github.com/nocobase/nocobase/pull/9836)) by @2013xile
- **[app]** 避免在推断插件 public path 时使用无关的 currentScript ([#9839](https://github.com/nocobase/nocobase/pull/9839)) by @chenos
- **[UI 模板]** 修复 ctx.openview 默认上下文不正确的问题。 ([#9811](https://github.com/nocobase/nocobase/pull/9811)) by @gchust

### [v2.1.8](https://www.nocobase.com/cn/blog/v2.1.8)

*发布日期：2026-06-18*

### 🐛 修复

- **[ai]**

  - 将 AI 相关包中的 `@langchain/openai` 锁定为仅允许补丁版本更新。 ([#9829](https://github.com/nocobase/nocobase/pull/9829)) by @cgyrock
  - 修复 AI 插件中 LangChain 依赖版本解析不兼容的问题。 ([#9831](https://github.com/nocobase/nocobase/pull/9831)) by @cgyrock
- **[AI: 知识库]**

  - 修复未启用 AI 插件时启用 AI 知识库插件报错不明确的问题。 by @cgyrock
  - 修复 AI 知识库插件中 LangChain 依赖版本解析不兼容的问题。 by @cgyrock

### [v2.1.7](https://www.nocobase.com/cn/blog/v2.1.7)

*发布日期：2026-06-18*

### 🎉 新特性

- **[备份管理器]** 支持 KingBase 主数据库备份和还原 ([#9791](https://github.com/nocobase/nocobase/pull/9791)) by @2013xile
- **[迁移管理]** 支持 KingBase 主数据库迁移 by @2013xile

### 🚀 优化

- **[AI: 知识库]** 优化 AI 知识库检索和相关文档。 ([#9765](https://github.com/nocobase/nocobase/pull/9765)) by @cgyrock
- **[cli]** 添加 env 配置的 schema 版本记录 ([#9782](https://github.com/nocobase/nocobase/pull/9782)) by @chenos
- **[工作流]** 改进测试用例的稳定性 ([#9773](https://github.com/nocobase/nocobase/pull/9773)) by @mytharcher
- **[文件管理器]** 改进 PDF 预览：跨源 PDF 文件使用浏览器原生预览，同源 PDF 文件继续使用 PDF.js 渲染。 ([#9796](https://github.com/nocobase/nocobase/pull/9796)) by @mytharcher
- **[备份管理器]** `dataCategory` 标记为 `'runtime'` 的数据表现在会自动从备份中排除。 ([#9804](https://github.com/nocobase/nocobase/pull/9804)) by @cgyrock
- **[AI: 知识库]** 改进 AI 知识库文档分段、分段管理、命中测试以及文档工作流节点支持。 by @cgyrock

### 🐛 修复

- **[client-v2]**

  - 修复子表单包含子表格时表单提交报错的问题。 ([#9807](https://github.com/nocobase/nocobase/pull/9807)) by @gchust
  - 修复子表格列事件流执行不正确的问题。 ([#9821](https://github.com/nocobase/nocobase/pull/9821)) by @gchust
  - 修复关系字段错误携带 `updateAssociationValues` 的问题 ([#9812](https://github.com/nocobase/nocobase/pull/9812)) by @katherinehhh
  - 修复 v2 筛选表单中复选框下拉选项未显示翻译文本的问题。 ([#9792](https://github.com/nocobase/nocobase/pull/9792)) by @katherinehhh
  - 修复区块保存为模板后无法再修改事件流配置的问题。 ([#9585](https://github.com/nocobase/nocobase/pull/9585)) by @gchust
  - 修复 v2 表格关系字段的标题字段使用时间、日期或日期时间字段时显示和格式设置不正确的问题。 ([#9785](https://github.com/nocobase/nocobase/pull/9785)) by @katherinehhh
- **[工作流]** 修复工作流调度器在调度异常后的恢复问题。 ([#9783](https://github.com/nocobase/nocobase/pull/9783)) by @mytharcher
- **[文件管理器]** 修复外部数据源附件 URL 字段上传文件时接口 404 的问题 ([#9809](https://github.com/nocobase/nocobase/pull/9809)) by @2013xile
- **[操作：自定义请求]** 修复 V2 自定义请求操作未配置请求设置时额外弹出错误提示的问题。 ([#9802](https://github.com/nocobase/nocobase/pull/9802)) by @katherinehhh
- **[AI 员工]**

  - 修复 AI 员工无法正确填充子表格数据的问题。 ([#9801](https://github.com/nocobase/nocobase/pull/9801)) by @gchust
  - 修复 AI 员工快捷入口触发任务时未携带当前工作上下文附件的问题。 ([#9808](https://github.com/nocobase/nocobase/pull/9808)) by @cgyrock
- **[工作流：自定义操作事件]** 修复操作面板 v2 触发工作流按钮未绑定工作流时仍提示成功并发送请求的问题。 ([#9798](https://github.com/nocobase/nocobase/pull/9798)) by @mytharcher
- **[前端流引擎]** 修复 AI 搭建时弹窗里的当前记录表单和详情数据不正确的问题。 ([#9788](https://github.com/nocobase/nocobase/pull/9788)) by @gchust
- **[异步任务管理器]** 修复异步任务文件下载时 `filterByTk` 缺失导致数据库查询报错的问题。 ([#9705](https://github.com/nocobase/nocobase/pull/9705)) by @mytharcher
- **[数据源：外部 NocoBase]** 按上传数据源代理 NocoBase 外部数据源的文件上传和存储接口 by @2013xile
- **[多空间]** 修复空间管理员没有用户邮箱字段权限时添加空间用户报无权限的问题。 by @jiannx
- **[工作流：子流程]** 修复异步子流程在服务重启或内存事件映射丢失后父流程无法继续执行的问题。 by @mytharcher
- **[应用监管器]** 修复远程 WebSocket 代理响应失败时可能导致服务崩溃的问题 by @2013xile

### [v2.1.5](https://www.nocobase.com/cn/blog/v2.1.5)

*发布日期：2026-06-15*

### 🎉 新特性

- **[工作流：邮件发送节点]** 为工作流邮件节点新增附件发送能力。 ([#9724](https://github.com/nocobase/nocobase/pull/9724)) by @mytharcher

### 🚀 优化

- **[client-v2]** 表单子表格关系字段列数据范围支持当前项变量。 ([#9444](https://github.com/nocobase/nocobase/pull/9444)) by @gchust
- **[undefined]** 将版本控制插件的中文文档名称统一为「版本控制」。 ([#9776](https://github.com/nocobase/nocobase/pull/9776)) by @cgyrock
- **[文件管理器]** 为文件管理器的 PDF 预览增加可选择文本支持，适用于包含内嵌文本的 PDF。 ([#9781](https://github.com/nocobase/nocobase/pull/9781)) by @mytharcher
- **[操作：批量编辑]** 优化 v2 操作插件加载方式，并保持已迁移操作按钮的顺序稳定。 ([#9778](https://github.com/nocobase/nocobase/pull/9778)) by @katherinehhh
- **[版本控制]** 将版本控制插件的中文显示名称改为「版本控制」。 by @cgyrock

### 🐛 修复

- **[cli-v1]** 修复 create-nocobase-app 创建的项目从 2.0 升级到 2.1 运行 yarn dev 报错的问题。 ([#9775](https://github.com/nocobase/nocobase/pull/9775)) by @Molunerfinn
- **[client-v2]** 修复迁移进度未显示专用进度视图的问题 ([#9761](https://github.com/nocobase/nocobase/pull/9761)) by @2013xile
- **[flow-engine]** 修复 v2 单行文本和多行文本字段中的越南语和中文输入法输入问题。 ([#9764](https://github.com/nocobase/nocobase/pull/9764)) by @katherinehhh
- **[server]** 修复 `pm:enable` 中不安全插件名处理，避免插件解析过程导致本地文件包含风险。 ([#9701](https://github.com/nocobase/nocobase/pull/9701)) by @mytharcher
- **[文件管理器]** 修复 pdf.js worker 模块加载异常导致 PDF 预览失败的问题。 ([#9779](https://github.com/nocobase/nocobase/pull/9779)) by @mytharcher
- **[区块：看板]** 修复非编辑态打开日历、甘特图和看板区块时意外持久化隐藏弹窗操作并重复发送删除请求的问题。 ([#9772](https://github.com/nocobase/nocobase/pull/9772)) by @jiannx
- **[操作：导出记录 Pro]** 改进 v2 导入/导出 Pro 的处理模式设置和提示说明。 by @katherinehhh
- **[迁移管理]** 修复导入大型迁移数据文件时可能失败的问题 by @2013xile
- **[模板打印]** 在模板打印开始前拒绝不支持的模板文件类型 by @2013xile

### [v2.1.4](https://www.nocobase.com/cn/blog/v2.1.4)

*发布日期：2026-06-13*

### 🚀 优化

- **[工作流]** 优化工作流元数据编辑体验，支持在详情弹窗中编辑描述，并在复制工作流时默认填充源工作流元数据。 ([#9766](https://github.com/nocobase/nocobase/pull/9766)) by @mytharcher

### 🐛 修复

- **[操作：导入记录]** 导入上传文件改为落盘存储，降低大数据量导入时的内存压力。 ([#9739](https://github.com/nocobase/nocobase/pull/9739)) by @mytharcher
- **[备份管理器]** 修复备份还原时可能接受不安全 PostgreSQL schema 名称的安全问题 ([#9758](https://github.com/nocobase/nocobase/pull/9758)) by @2013xile
- **[工作流]**

  - 修复工作流超时处理，使已中止的执行及其待处理任务能够原子更新。 ([#9768](https://github.com/nocobase/nocobase/pull/9768)) by @mytharcher
  - 修复工作流节点变更后工作流最后更新人未同步更新的问题。 ([#9769](https://github.com/nocobase/nocobase/pull/9769)) by @mytharcher
- **[操作：导入记录 Pro]** 避免 Pro 导入在创建异步任务前于请求节点解析大文件。 by @mytharcher
- **[版本管理]** 调整版本管理顶部快捷入口的位置，使其在旧版和 v2 管理布局中都显示在 UI 编辑器旁边。 by @cgyrock

### [v2.1.3](https://www.nocobase.com/cn/blog/v2.1.3)

*发布日期：2026-06-12*

### 🚀 优化

- **[cli]**
  - 优化不同格式的版本号兼容判断 ([#9763](https://github.com/nocobase/nocobase/pull/9763)) by @chenos
  - skills 支持指定版本更新 ([#9760](https://github.com/nocobase/nocobase/pull/9760)) by @chenos

### 🐛 修复

- **[client]** 修复水平子表单中字段过窄导致数据不显示的问题 ([#9755](https://github.com/nocobase/nocobase/pull/9755)) by @zhangzhonghe
- **[数据源管理]**

  - 修复 v1 外部数据源 Configure fields 页面反复重渲染导致字段编辑弹窗内容为空的问题。 ([#9759](https://github.com/nocobase/nocobase/pull/9759)) by @katherinehhh
  - 修复 v1 数据源管理中删除当前集合分类后，All collections 标签页可能显示为空的问题。 ([#9757](https://github.com/nocobase/nocobase/pull/9757)) by @katherinehhh
- **[异步任务管理器]** 修复异步任务 worker 日志中的请求 ID 错误问题 ([#9686](https://github.com/nocobase/nocobase/pull/9686)) by @2013xile
- **[工作流：SQL 节点]** 修复部分 beta 版本用户跳过 SQL 工作流历史模板变量迁移的问题。 ([#9762](https://github.com/nocobase/nocobase/pull/9762)) by @mytharcher
- **[AI 员工]**

  - 修复工作流 LLM 节点消息配置丢失问题。 ([#9743](https://github.com/nocobase/nocobase/pull/9743)) by @cgyrock
  - 修复 AI 员工对话框粘贴的附件无法删除问题。 ([#9753](https://github.com/nocobase/nocobase/pull/9753)) by @cgyrock
- **[区块：看板]** 修复日历等弹窗支持URL ([#9751](https://github.com/nocobase/nocobase/pull/9751)) by @jiannx
- **[工作流：审批]** 修复 v2 审批表单中关联数据显示不出来的问题 by @zhangzhonghe

### [v2.1.2](https://www.nocobase.com/cn/blog/v2.1.2)

*发布日期：2026-06-12*

### 🎉 新特性

- **[AI 员工]** 为 AI 知识库新增外部向量存储配置表单。 ([#9723](https://github.com/nocobase/nocobase/pull/9723)) by @cgyrock
- **[AI: 知识库]** 为 AI 知识库新增外部向量存储配置表单。 by @cgyrock

### 🚀 优化

- **[undefined]**

  - AI 搭建概述页新增版本管理对话场景 ([#9748](https://github.com/nocobase/nocobase/pull/9748)) by @Molunerfinn
    参考文档：[AI 搭建快速开始](https://docs.nocobase.com/cn/ai-builder)
  - 完善版本管理文档，补充 AI 搭建自动保存版本的说明。 ([#9745](https://github.com/nocobase/nocobase/pull/9745)) by @cgyrock
    参考文档：[版本管理](docs/docs/cn/ops-management/version-control/index.md)
- **[cli]** 优化初始化设置的文本 ([#9750](https://github.com/nocobase/nocobase/pull/9750)) by @chenos
- **[操作：导入记录]** 优化导入和异步任务错误详情弹窗，长错误信息可完整查看且不会破坏布局。 ([#9746](https://github.com/nocobase/nocobase/pull/9746)) by @katherinehhh
- **[操作：导入记录 Pro]** 优化导入弹窗，长错误信息可完整查看，并支持在 v2 设置菜单中直接选择处理模式。 by @katherinehhh

### 🐛 修复

- **[client-v2]** 修复 v2 页面登录后一直加载的问题 ([#9738](https://github.com/nocobase/nocobase/pull/9738)) by @zhangzhonghe
- **[cli]** nb 运行环境 node 版本检测 ([#9749](https://github.com/nocobase/nocobase/pull/9749)) by @chenos
- **[文件管理器]** 修复切换到 pdf.JS 后部分 PDF 预览缺失中文/CID 字体文字的问题。 ([#9737](https://github.com/nocobase/nocobase/pull/9737)) by @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.2.0-beta.5](https://www.nocobase.com/cn/blog/v2.2.0-beta.5)

*发布日期：2026-06-16*

### 🚀 优化

* **[cli]** 添加 env 配置的 schema 版本记录。([#9782](https://github.com/nocobase/nocobase/pull/9782)) by @chenos
* **[文件管理器]** 改进 PDF 预览：跨源 PDF 文件使用浏览器原生预览，同源 PDF 文件继续使用 PDF.js 渲染。([#9796](https://github.com/nocobase/nocobase/pull/9796)) by @mytharcher

### 🐛 修复

* **[client-v2]**
  * 修复区块转换为模板后，无法再修改事件流配置的问题。([#9585](https://github.com/nocobase/nocobase/pull/9585)) by @gchust
  * 修复 v2 筛选表单中复选框下拉选项未显示翻译文本的问题。([#9792](https://github.com/nocobase/nocobase/pull/9792)) by @katherinehhh
  * 修复 v2 表格关系字段的标题字段使用时间、日期或日期时间字段时，显示和格式设置不正确的问题。([#9785](https://github.com/nocobase/nocobase/pull/9785)) by @katherinehhh
* **[前端流引擎]** 修复 AI 搭建时弹窗中的当前记录表单和详情数据不正确的问题。([#9788](https://github.com/nocobase/nocobase/pull/9788)) by @gchust
* **[工作流：自定义操作事件]** 修复操作面板 v2 的触发工作流按钮未绑定工作流时，仍提示成功并发送请求的问题。([#9798](https://github.com/nocobase/nocobase/pull/9798)) by @mytharcher
* **[AI 员工]** 修复 AI 员工无法正确填充子表格数据的问题。([#9801](https://github.com/nocobase/nocobase/pull/9801)) by @gchust

### [v2.2.0-beta.3](https://www.nocobase.com/cn/blog/v2.2.0-beta.3)

*发布日期：2026-06-15*

### 🎉 新特性

- **[工作流：邮件发送节点]** 为工作流邮件节点新增附件发送能力。 ([#9724](https://github.com/nocobase/nocobase/pull/9724)) by @mytharcher
- **[工作流]** 新增工作流数据库事务作用域支持。 ([#9742](https://github.com/nocobase/nocobase/pull/9742)) by @mytharcher
  参考文档：[数据库事务](docs/docs/cn/workflow/nodes/transaction.md)
- **[工作流：数据库事务节点]** 新增数据库事务工作流节点插件。 by @mytharcher

### 🚀 优化

- **[client-v2]** 表单子表格关系字段列数据范围支持当前项变量。 ([#9444](https://github.com/nocobase/nocobase/pull/9444)) by @gchust
- **[undefined]** 将版本控制插件的中文文档名称统一为「版本控制」。 ([#9776](https://github.com/nocobase/nocobase/pull/9776)) by @cgyrock
- **[文件管理器]** 为文件管理器的 PDF 预览增加可选择文本支持，适用于包含内嵌文本的 PDF。 ([#9781](https://github.com/nocobase/nocobase/pull/9781)) by @mytharcher
- **[用户]** 优化用户和权限 v2 页面布局及部门树行为。 ([#9780](https://github.com/nocobase/nocobase/pull/9780)) by @jiannx
- **[操作：批量编辑]** 优化 v2 操作插件加载方式，并保持已迁移操作按钮的顺序稳定。 ([#9778](https://github.com/nocobase/nocobase/pull/9778)) by @katherinehhh
- **[版本控制]** 将版本控制插件的中文显示名称改为「版本控制」。 by @cgyrock

### 🐛 修复

- **[cli-v1]** 修复 create-nocobase-app 创建的项目从 2.0 升级到 2.1 运行 yarn dev 报错的问题。 ([#9775](https://github.com/nocobase/nocobase/pull/9775)) by @Molunerfinn
- **[flow-engine]** 修复 v2 单行文本和多行文本字段中的越南语和中文输入法输入问题。 ([#9764](https://github.com/nocobase/nocobase/pull/9764)) by @katherinehhh
- **[client-v2]** 修复迁移进度未显示专用进度视图的问题 ([#9761](https://github.com/nocobase/nocobase/pull/9761)) by @2013xile
- **[server]** 修复 `pm:enable` 中不安全插件名处理，避免插件解析过程导致本地文件包含风险。 ([#9701](https://github.com/nocobase/nocobase/pull/9701)) by @mytharcher
- **[异步任务管理器]** 修复异步任务文件下载时 `filterByTk` 缺失导致数据库查询报错的问题。 ([#9705](https://github.com/nocobase/nocobase/pull/9705)) by @mytharcher
- **[文件管理器]** 修复 pdf.js worker 模块加载异常导致 PDF 预览失败的问题。 ([#9779](https://github.com/nocobase/nocobase/pull/9779)) by @mytharcher
- **[区块：看板]** 修复非编辑态打开日历、甘特图和看板区块时意外持久化隐藏弹窗操作并重复发送删除请求的问题。 ([#9772](https://github.com/nocobase/nocobase/pull/9772)) by @jiannx
- **[操作：导出记录 Pro]** 改进 v2 导入/导出 Pro 的处理模式设置和提示说明。 by @katherinehhh
- **[多空间]** 修复空间管理员没有用户邮箱字段权限时添加空间用户报无权限的问题。 by @jiannx
- **[迁移管理]** 修复导入大型迁移数据文件时可能失败的问题 by @2013xile
- **[模板打印]** 在模板打印开始前拒绝不支持的模板文件类型 by @2013xile

### [v2.2.0-beta.2](https://www.nocobase.com/cn/blog/v2.2.0-beta.2)

*发布日期：2026-06-13*

### 🎉 新特性

- **[AI 员工]** 为 AI 知识库新增外部向量存储配置表单。 ([#9723](https://github.com/nocobase/nocobase/pull/9723)) by @cgyrock
- **[AI: 知识库]** 为 AI 知识库新增外部向量存储配置表单。 by @cgyrock
- **[邮件管理]** 邮件管理客户端迁移到 v2。 by @jiannx

### 🚀 优化

- **[cli]**

  - 优化不同格式的版本号兼容判断 ([#9763](https://github.com/nocobase/nocobase/pull/9763)) by @chenos
  - skills 支持指定版本更新 ([#9760](https://github.com/nocobase/nocobase/pull/9760)) by @chenos
  - 优化初始化设置的文本 ([#9750](https://github.com/nocobase/nocobase/pull/9750)) by @chenos
- **[undefined]**

  - AI 搭建概述页新增版本管理对话场景 ([#9748](https://github.com/nocobase/nocobase/pull/9748)) by @Molunerfinn
    参考文档：[AI 搭建快速开始](https://docs.nocobase.com/cn/ai-builder)
  - 完善版本管理文档，补充 AI 搭建自动保存版本的说明。 ([#9745](https://github.com/nocobase/nocobase/pull/9745)) by @cgyrock
    参考文档：[版本管理](docs/docs/cn/ops-management/version-control/index.md)
- **[工作流]** 优化工作流元数据编辑体验，支持在详情弹窗中编辑描述，并在复制工作流时默认填充源工作流元数据。 ([#9766](https://github.com/nocobase/nocobase/pull/9766)) by @mytharcher
- **[操作：导入记录]** 优化导入和异步任务错误详情弹窗，长错误信息可完整查看且不会破坏布局。 ([#9746](https://github.com/nocobase/nocobase/pull/9746)) by @katherinehhh
- **[翻译测试工具]** 为翻译测试工具新增 client v2 设置页面。 ([#9744](https://github.com/nocobase/nocobase/pull/9744)) by @jiannx
- **[操作：导入记录 Pro]** 优化导入弹窗，长错误信息可完整查看，并支持在 v2 设置菜单中直接选择处理模式。 by @katherinehhh

### 🐛 修复

- **[client]** 修复水平子表单中字段过窄导致数据不显示的问题 ([#9755](https://github.com/nocobase/nocobase/pull/9755)) by @zhangzhonghe
- **[client-v2]** 修复 v2 页面登录后一直加载的问题 ([#9738](https://github.com/nocobase/nocobase/pull/9738)) by @zhangzhonghe
- **[cli]** nb 运行环境 node 版本检测 ([#9749](https://github.com/nocobase/nocobase/pull/9749)) by @chenos
- **[操作：导入记录]** 导入上传文件改为落盘存储，降低大数据量导入时的内存压力。 ([#9739](https://github.com/nocobase/nocobase/pull/9739)) by @mytharcher
- **[异步任务管理器]** 修复异步任务 worker 日志中的请求 ID 错误问题 ([#9686](https://github.com/nocobase/nocobase/pull/9686)) by @2013xile
- **[工作流]**

  - 修复工作流超时处理，使已中止的执行及其待处理任务能够原子更新。 ([#9768](https://github.com/nocobase/nocobase/pull/9768)) by @mytharcher
  - 修复工作流节点变更后工作流最后更新人未同步更新的问题。 ([#9769](https://github.com/nocobase/nocobase/pull/9769)) by @mytharcher
- **[数据源管理]**

  - 修复 v1 外部数据源 Configure fields 页面反复重渲染导致字段编辑弹窗内容为空的问题。 ([#9759](https://github.com/nocobase/nocobase/pull/9759)) by @katherinehhh
  - 修复 v1 数据源管理中删除当前集合分类后，All collections 标签页可能显示为空的问题。 ([#9757](https://github.com/nocobase/nocobase/pull/9757)) by @katherinehhh
- **[备份管理器]** 修复备份还原时可能接受不安全 PostgreSQL schema 名称的安全问题 ([#9758](https://github.com/nocobase/nocobase/pull/9758)) by @2013xile
- **[工作流：SQL 节点]** 修复部分 beta 版本用户跳过 SQL 工作流历史模板变量迁移的问题。 ([#9762](https://github.com/nocobase/nocobase/pull/9762)) by @mytharcher
- **[区块：看板]** 修复日历等弹窗支持URL ([#9751](https://github.com/nocobase/nocobase/pull/9751)) by @jiannx
- **[AI 员工]**

  - 修复 AI 员工对话框粘贴的附件无法删除问题。 ([#9753](https://github.com/nocobase/nocobase/pull/9753)) by @cgyrock
  - 修复工作流LLM节点消息配置丢失问题. ([#9743](https://github.com/nocobase/nocobase/pull/9743)) by @cgyrock
- **[文件管理器]** 修复切换到 pdf.js 后部分 PDF 预览缺失中文/CID 字体文字的问题。 ([#9737](https://github.com/nocobase/nocobase/pull/9737)) by @mytharcher
- **[API 文档]** 修复 API 文档插件声明文件构建失败的问题。 ([#9752](https://github.com/nocobase/nocobase/pull/9752)) by @katherinehhh
- **[操作：导入记录 Pro]** 避免 Pro 导入在创建异步任务前于请求节点解析大文件。 by @mytharcher
- **[版本管理]** 调整版本管理顶部快捷入口的位置，使其在旧版和 v2 管理布局中都显示在 UI 编辑器旁边。 by @cgyrock
- **[工作流：审批]** 修复 v2 审批表单中关联数据显示不出来的问题 by @zhangzhonghe
