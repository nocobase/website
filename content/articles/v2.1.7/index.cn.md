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
