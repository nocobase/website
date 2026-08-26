### 🚀 优化

- **[undefined]** 明确 Markdown、外部页面和第三方服务使用公开 NocoBase 文件 URL 的方式 ([#10406](https://github.com/nocobase/nocobase/pull/10406)) by @mytharcher
参考文档：[存储引擎概述](https://docs.nocobase.com/cn/file-manager/storage/)
### 🐛 修复

- **[工作流]**
  - 修复 v2 工作流新增数据、更新数据节点中的选项字段无法选择配置值的问题。 ([#10414](https://github.com/nocobase/nocobase/pull/10414)) by @katherinehhh

  - 修复子流程使用数据表事件未配置预加载关联字段且按记录 ID 调用时报错的问题 ([#10407](https://github.com/nocobase/nocobase/pull/10407)) by @mytharcher

  - 修复工作流待办中心菜单，使当前菜单可再次点击折叠并保留选中高亮状态 ([#10404](https://github.com/nocobase/nocobase/pull/10404)) by @mytharcher

  - 修复定时任务按 cron 重复时，会在「开始于」时刻额外触发一次的问题 ([#10410](https://github.com/nocobase/nocobase/pull/10410)) by @Tespera

- **[UI 模板]** 修复关闭包含引用区块的审批任务时报错的问题 ([#10415](https://github.com/nocobase/nocobase/pull/10415)) by @zhangzhonghe

- **[UI 布局]** 修复升级后桌面端路由可能为空的问题 ([#10405](https://github.com/nocobase/nocobase/pull/10405)) by @zhangzhonghe

- **[权限控制]** 修复 `firstOrCreate` 或 `updateOrCreate` 可在缺少查看或编辑权限时读取或修改已有记录的 ACL 绕过漏洞。 ([#10403](https://github.com/nocobase/nocobase/pull/10403)) by @mytharcher

- **[操作：导出记录 Pro]** 修复 Pro 导出字段变更后拖拽排序可能崩溃的问题。 by @katherinehhh

