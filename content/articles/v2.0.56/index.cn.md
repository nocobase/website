### 🎉 新特性

- **[备份管理器]** 开源备份管理器插件 ([#9550](https://github.com/nocobase/nocobase/pull/9550)) by @chenos

### 🚀 优化

- **[client]** 优化操作按钮显示设置 ([#9510](https://github.com/nocobase/nocobase/pull/9510)) by @katherinehhh
- **[flow-engine]** v2 字段配置菜单现在支持搜索字段 ([#9489](https://github.com/nocobase/nocobase/pull/9489)) by @zhangzhonghe
- **[undefined]**

  - 为依赖变更添加 Pull Request 安全检查 ([#9523](https://github.com/nocobase/nocobase/pull/9523)) by @zhangzhonghe
- **[通知管理]** 调整队列策略以优化发送性能 ([#9407](https://github.com/nocobase/nocobase/pull/9407)) by @mytharcher
- **[AI: 知识库]** 开放 AI 知识库的向量存储修改功能 by @cgyrock
- **[工作流：审批]** 相关审批现在以时间线卡片展示 by @zhangzhonghe

### 🐛 修复

- **[client]**

  - 修复 v2 关系字段通过数据范围联动时，依赖的关系字段变更后未清空已选值的问题 ([#9551](https://github.com/nocobase/nocobase/pull/9551)) by @katherinehhh
  - 修复菜单徽章值为 0 时仍显示小红点的问题 ([#9491](https://github.com/nocobase/nocobase/pull/9491)) by @zhangzhonghe
  - 修复筛选表单无法使用当前表单变量的问题 ([#9474](https://github.com/nocobase/nocobase/pull/9474)) by @zhangzhonghe
  - 修复 v2 区块退出编辑模式后缩窄宽度丢失的问题 ([#9529](https://github.com/nocobase/nocobase/pull/9529)) by @zhangzhonghe
  - 修复子表单里 JS Field 菜单状态不正确的问题。 ([#9507](https://github.com/nocobase/nocobase/pull/9507)) by @gchust
- **[flow-engine]** 修复外部数据源字段配置为多选字段后，在 v2 表单中无法进行多选的问题 ([#9542](https://github.com/nocobase/nocobase/pull/9542)) by @katherinehhh
- **[AI 员工]** 修复 AI 员工使用只读知识库时报错问题 ([#9539](https://github.com/nocobase/nocobase/pull/9539)) by @cgyrock
- **[日历]** 修复日历展开更多日程时显示不全的问题 ([#9492](https://github.com/nocobase/nocobase/pull/9492)) by @zhangzhonghe
- **[操作：批量更新]** 修复批量更新插件在更新失败后未重置 loading 状态的问题 ([#9509](https://github.com/nocobase/nocobase/pull/9509)) by @katherinehhh
- **[API 文档]** 修复 Collection API 文档中的查询参数相互影响问题 ([#9442](https://github.com/nocobase/nocobase/pull/9442)) by @jiannx
- **[工作流]** 为手动执行工作流增加加载状态。 ([#9533](https://github.com/nocobase/nocobase/pull/9533)) by @mytharcher
- **[迁移管理]** 修复使用 OceanBase 时创建迁移文件失败的问题 by @2013xile
- **[文件存储：S3 (Pro)]** 修复 S3 Pro 端点处理逻辑，避免服务端上传和 URL 预览重复拼接 bucket 子域名。 by @mytharcher
- **[工作流：审批]** 修复同一审批任务并发转签时审批记录索引重复的问题。 by @mytharcher
