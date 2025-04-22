### 🎉 新特性

- **[client]** 支持长文本字段作为关系字段的标题字段 ([#6495](https://github.com/nocobase/nocobase/pull/6495)) by @katherinehhh

- **[工作流：聚合查询节点]** 支持为聚合结果配置精度选项 ([#6491](https://github.com/nocobase/nocobase/pull/6491)) by @mytharcher

### 🚀 优化

- **[文件存储：S3 (Pro)]** 将文案“访问 URL 基础”改为“基础 URL” by @zhangzhonghe

### 🐛 修复

- **[evaluators]** 将表达式计算保留小数调整回 9 位 ([#6492](https://github.com/nocobase/nocobase/pull/6492)) by @mytharcher

- **[文件管理器]** URL 转义 ([#6497](https://github.com/nocobase/nocobase/pull/6497)) by @chenos

- **[数据源：主数据库]** 无法创建 MySQL 视图 ([#6477](https://github.com/nocobase/nocobase/pull/6477)) by @aaaaaajie

- **[工作流]** 修复历史遗留任务数量工作流删除后统计错误 ([#6493](https://github.com/nocobase/nocobase/pull/6493)) by @mytharcher

- **[嵌入 NocoBase]** 页面显示空白 by @zhangzhonghe

- **[备份管理器]**
  - 通过多应用模板创建子应用时备份中的上传文件未被正确还原 by @gchust

  - 还原 MySQL 数据库备份时由于 GTID 集合重叠导致的失败 by @gchust

- **[工作流：审批]**
  - 将退回的审批单据列入待办 by @mytharcher

  - 修复审批过程表格中发起人查看按钮消失的问题 by @mytharcher

