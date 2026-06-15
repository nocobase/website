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
