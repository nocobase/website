### 🎉 新特性

- **[备份管理器]** 新增 AI 模式门户备份与恢复支持，并提供独立设置 ([#10240](https://github.com/nocobase/nocobase/pull/10240)) by @2013xile

### 🚀 优化

- **[Portal 管理]**
  - 门户布局选择固定为桌面端或移动端，AI 门户默认使用桌面端并隐藏布局选项，支持跨布局选择门户，并修复入口跳转 ([#10230](https://github.com/nocobase/nocobase/pull/10230)) by @zhangzhonghe

  - 优化 Portal Manager 表单文案和辅助说明。 ([#10242](https://github.com/nocobase/nocobase/pull/10242)) by @katherinehhh

- **[工作流]** 工作流创建和更新节点为字符串及文本字段赋值时，现已支持将文字与变量拼接使用 ([#10238](https://github.com/nocobase/nocobase/pull/10238)) by @mytharcher

- **[AI: 知识库]** 优化知识库页面布局、滚动、加载状态、空状态及操作按钮对齐 by @cgyrock

### 🐛 修复

- **[cli]** 修复子应用/自定义域名场景下 portal CLI 的路径解析、部署与 HTML 构建行为，并在 portal 禁用时保留已有 HTML 文件。 ([#10244](https://github.com/nocobase/nocobase/pull/10244)) by @chenos

- **[工作流]** 修复手动执行工作流时传入 `autoRevision=0` 仍可能创建新版本的问题。 ([#10243](https://github.com/nocobase/nocobase/pull/10243)) by @mytharcher

- **[UI 模板]** 修复表格区块在空筛选条件下切换页面返回后仍加载数据的问题 ([#9890](https://github.com/nocobase/nocobase/pull/9890)) by @zhangzhonghe

- **[用户]** 在登录与注册之间跳转时保留来源无代码 Portal。 ([#10235](https://github.com/nocobase/nocobase/pull/10235)) by @katherinehhh

- **[模板打印]** 修复 DOCX 模板生成 PDF 时中英文之间出现非预期间距的问题。 by @jiannx

- **[工作流：审批]** 修复审批页面不显示外部数据源字段的问题 by @zhangzhonghe

