### 🐛 修复

- **[client-v2]** 修复 v2 关系字段切换为弹窗选择时的渲染错误。 ([#10419](https://github.com/nocobase/nocobase/pull/10419)) by @katherinehhh

- **[工作流]**
  - 修复定时任务（静态模式）在「结束于」之后仍会多执行一次的问题 ([#10411](https://github.com/nocobase/nocobase/pull/10411)) by @Tespera

  - 优化工作流待办中心移动端详情处理：使用全宽抽屉并适配审批内容布局。 ([#10428](https://github.com/nocobase/nocobase/pull/10428)) by @mytharcher

  - 为工作流任务状态和 ID 添加联合索引，优化待处理任务的恢复查询。 ([#10427](https://github.com/nocobase/nocobase/pull/10427)) by @mytharcher

- **[公开表单]** 修复启用公开表单后，V2 普通表单配置中显示两个“提交”操作的问题。 ([#10417](https://github.com/nocobase/nocobase/pull/10417)) by @katherinehhh

- **[通知管理]** 修复工作流用户接收人变量显示“Variable parsing failed”的问题，并统一各工作流节点的用户选择组件。 ([#10432](https://github.com/nocobase/nocobase/pull/10432)) by @mytharcher

- **[AI LLM：GigaChat]** 修复启用 GigaChat AI 服务后应用在 iOS 15.6 及更早版本上启动报错的问题 ([#10418](https://github.com/nocobase/nocobase/pull/10418)) by @cgyrock

- **[AI: 知识库]** 修复 Root 用户使用 AI 员工时被错误提示没有知识库访问权限的问题 by @hongboji

- **[多空间]** 修复多空间下文件集合返回的文件和预览链接未携带当前空间上下文，导致打开文件时错误返回 404 的问题。 by @jiannx

- **[工作流：审批]**
  - 优化审批任务详情及远程表单在移动端窄屏下的布局。 by @mytharcher

  - 修复 v1 工作流页面中子流程节点选择审批工作流时不显示触发器变量表单的问题。 by @mytharcher

  - 修复审批人变量显示“Variable parsing failed”的问题，并复用工作流公共用户选择组件。 by @mytharcher

- **[企业微信]** 修复企微自动登录生命周期及通知配置表单在 client-v2 中的兼容问题。 by @chenzhizdt

- **[钉钉]** 修复 v1 客户端中钉钉 Stream 模式同步源无法提交的问题。 by @chenzhizdt

