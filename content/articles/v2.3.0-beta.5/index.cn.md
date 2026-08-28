### 🐛 修复

- **[client-v2]** 修复 v2 关系字段切换为弹窗选择时的渲染错误。 ([#10419](https://github.com/nocobase/nocobase/pull/10419)) by @katherinehhh

- **[AI LLM：GigaChat]** 修复启用 GigaChat AI 服务后应用在 iOS 15.6 及更早版本上启动报错的问题 ([#10418](https://github.com/nocobase/nocobase/pull/10418)) by @cgyrock

- **[公开表单]** 修复启用公开表单后，V2 普通表单配置中显示两个“提交”操作的问题。 ([#10417](https://github.com/nocobase/nocobase/pull/10417)) by @katherinehhh

- **[权限控制]** 修复 `firstOrCreate` 或 `updateOrCreate` 可在缺少查看或编辑权限时读取或修改已有记录的 ACL 绕过漏洞。 ([#10403](https://github.com/nocobase/nocobase/pull/10403)) by @mytharcher

- **[工作流]**
  - 修复 v2 工作流新增数据、更新数据节点中的选项字段无法选择配置值的问题。 ([#10414](https://github.com/nocobase/nocobase/pull/10414)) by @katherinehhh

  - 修复定时任务按 cron 重复时，会在「开始于」时刻额外触发一次的问题 ([#10410](https://github.com/nocobase/nocobase/pull/10410)) by @Tespera

  - 修复子流程使用数据表事件未配置预加载关联字段且按记录 ID 调用时报错的问题 ([#10407](https://github.com/nocobase/nocobase/pull/10407)) by @mytharcher

- **[UI 模板]** 修复关闭包含引用区块的审批任务时报错的问题 ([#10415](https://github.com/nocobase/nocobase/pull/10415)) by @zhangzhonghe

- **[多空间]** 修复多空间下文件集合返回的文件和预览链接未携带当前空间上下文，导致打开文件时错误返回 404 的问题。 by @jiannx

- **[AI: 知识库]** 修复 Root 用户使用 AI 员工时被错误提示没有知识库访问权限的问题 by @hongboji

- **[工作流：审批]** 修复 v1 工作流页面中子流程节点选择审批工作流时不显示触发器变量表单的问题。 by @mytharcher

- **[企业微信]** 修复企微自动登录生命周期及通知配置表单在 client-v2 中的兼容问题。 by @chenzhizdt

