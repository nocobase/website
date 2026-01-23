### 🎉 新特性

- **[AI 员工]** AI 对话支持复制粘贴文件 ([#8487](https://github.com/nocobase/nocobase/pull/8487)) by @heziqiang

### 🚀 优化

- **[client]**
  - 改进对多子表单默认包含一个对象，无需点击 Add New，未填写时不创建记录 ([#8473](https://github.com/nocobase/nocobase/pull/8473)) by @katherinehhh

  - 改进子表格中附件字段的上传与编辑按钮，引导用户点击上传 ([#8474](https://github.com/nocobase/nocobase/pull/8474)) by @katherinehhh

- **[flow-engine]** 优化 runjs 的 ctx.libs, 使其支持按需加载，并新增 lodash, math, formula 预定义库。 ([#8468](https://github.com/nocobase/nocobase/pull/8468)) by @gchust

- **[错误处理器]** 避免 SQL 引用错误直接暴露 ([#8464](https://github.com/nocobase/nocobase/pull/8464)) by @2013xile

- **[工作流：审批]** 增加对 API 的访问控制，以避免通过 API 越权操作数据 by @mytharcher

### 🐛 修复

- **[client]**
  - 修复富文本编辑器的弹出层被遮挡的问题 ([#8443](https://github.com/nocobase/nocobase/pull/8443)) by @zhangzhonghe

  - 修复筛选区块日期带时间时时间格式重复的问题 ([#8484](https://github.com/nocobase/nocobase/pull/8484)) by @zhangzhonghe

  - 修复 nanoid 字段在表单提交后不重新生成数据的问题 ([#8491](https://github.com/nocobase/nocobase/pull/8491)) by @katherinehhh

  - 修复级联组件必填校验重复提示的问题 ([#8476](https://github.com/nocobase/nocobase/pull/8476)) by @katherinehhh

  - filter列表去重 ([#8431](https://github.com/nocobase/nocobase/pull/8431)) by @jiannx

  - 修复在 Chrome 144 版本中不显示配置菜单的问题 ([#8470](https://github.com/nocobase/nocobase/pull/8470)) by @zhangzhonghe

- **[database]**
  - 修复嵌套关联的深度更新问题 ([#8492](https://github.com/nocobase/nocobase/pull/8492)) by @chenos

  - 修复嵌套关联的深度更新问题 ([#8492](https://github.com/nocobase/nocobase/pull/8492)) by @chenos

- **[server]** 修复通用依赖中 `mathjs` 包的版本 ([#8475](https://github.com/nocobase/nocobase/pull/8475)) by @mytharcher

- **[flow-engine]** 修复内嵌弹窗页面连续打开联动规则配置和事件流配置后关闭弹窗报错的问题。 ([#8368](https://github.com/nocobase/nocobase/pull/8368)) by @gchust

- **[数据源：主数据库]** 修复在多对多关系表格区块中删除数据时，未遵循关系字段 `onDelete: 'restrict'` 约束的问题 ([#8493](https://github.com/nocobase/nocobase/pull/8493)) by @2013xile

- **[异步任务管理器]** 修复异步导入触发的工作流事件延迟执行的问题 ([#8478](https://github.com/nocobase/nocobase/pull/8478)) by @mytharcher

- **[区块：iframe]** 修复 Iframe 添加聚合变量报错的问题 ([#8482](https://github.com/nocobase/nocobase/pull/8482)) by @zhangzhonghe

- **[UI 模板]** 修复引用模板区块无法通过事件流设置数据范围的问题。 ([#8472](https://github.com/nocobase/nocobase/pull/8472)) by @gchust

- **[文件管理器]** 修复上传文件时请求中的文件名被重复解码产生的乱码问题 ([#8481](https://github.com/nocobase/nocobase/pull/8481)) by @mytharcher

- **[操作：导入记录 Pro]** 修复异步导入触发的工作流事件延迟执行的问题 by @mytharcher

- **[工作流：Webhook 触发器]** 修复未配置请求体解析时触发器数据中该数据缺失的问题 by @mytharcher

- **[模板打印]** 模板打印的配置模板弹窗移除底部按钮 by @katherinehhh

- **[工作流：审批]**
  - 修复分支模式的审批未能正确退回至指定节点的问题 by @mytharcher

  - 修复并发提交导致流程被重复恢复执行的问题 by @mytharcher

  - 修复审批任务卡片字段不显示的问题 by @zhangzhonghe

