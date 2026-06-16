### 🚀 优化

- **[cli]** 添加 env 配置的 schema 版本记录 ([#9782](https://github.com/nocobase/nocobase/pull/9782)) by @chenos

- **[文件管理器]** 改进 PDF 预览：跨源 PDF 文件使用浏览器原生预览，同源 PDF 文件继续使用 PDF.js 渲染。 ([#9796](https://github.com/nocobase/nocobase/pull/9796)) by @mytharcher

### 🐛 修复

- **[client-v2]**
  - 修复区块转换成模板后无法再被修改事件流配置的问题。 ([#9585](https://github.com/nocobase/nocobase/pull/9585)) by @gchust

  - 修复 v2 筛选表单中复选框下拉选项未显示翻译文本的问题。 ([#9792](https://github.com/nocobase/nocobase/pull/9792)) by @katherinehhh

  - 修复 v2 表格关系字段的标题字段使用时间、日期或日期时间字段时显示和格式设置不正确的问题。 ([#9785](https://github.com/nocobase/nocobase/pull/9785)) by @katherinehhh

- **[前端流引擎]** 修复 AI 搭建时弹窗里的当前记录表单和详情数据不正确的问题。 ([#9788](https://github.com/nocobase/nocobase/pull/9788)) by @gchust

- **[工作流：自定义操作事件]** 修复操作面板 v2 触发工作流按钮未绑定工作流时仍提示成功并发送请求的问题。 ([#9798](https://github.com/nocobase/nocobase/pull/9798)) by @mytharcher

- **[AI 员工]** 修复 AI 员工无法正确填充子表格数据的问题。 ([#9801](https://github.com/nocobase/nocobase/pull/9801)) by @gchust

