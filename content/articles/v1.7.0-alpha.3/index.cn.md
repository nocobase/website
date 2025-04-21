### 🎉 新特性

- **[client]** 支持表格行内操作仅显示图标，鼠标悬停显示操作名称 ([#6451](https://github.com/nocobase/nocobase/pull/6451)) by @katherinehhh

### 🚀 优化

- **[文件管理器]** 简化生成文件 URL 的逻辑和 API ([#6472](https://github.com/nocobase/nocobase/pull/6472)) by @mytharcher

- **[文件存储：S3 (Pro)]**
  - 将文案“访问 URL 基础”改为“基础 URL” by @zhangzhonghe

  - 优化生成文件 URL 的方法 by @mytharcher

- **[备份管理器]** 允许在相同版本的预发布和发布版本之间恢复备份 by @gchust

### 🐛 修复

- **[client]**
  - 联动规则中字段列表没有显示全部可选字段 ([#6488](https://github.com/nocobase/nocobase/pull/6488)) by @katherinehhh

  - 页面右上角图标的颜色不会随主题变化 ([#6482](https://github.com/nocobase/nocobase/pull/6482)) by @zhangzhonghe

  - 富文本字段清空后提交时数据未删除 ([#6486](https://github.com/nocobase/nocobase/pull/6486)) by @katherinehhh

  - 表单默认值输入框样式不正确 ([#6490](https://github.com/nocobase/nocobase/pull/6490)) by @gchust

  - 点击筛选表单的重置按钮无法清除网格卡片区块的筛选条件 ([#6475](https://github.com/nocobase/nocobase/pull/6475)) by @zhangzhonghe

- **[工作流：人工处理节点]**
  - 修改迁移脚本确保执行 ([#6487](https://github.com/nocobase/nocobase/pull/6487)) by @mytharcher

  - 修复迁移脚本 ([#6484](https://github.com/nocobase/nocobase/pull/6484)) by @mytharcher

  - 修复区块的筛选组件中工作流标题项 ([#6480](https://github.com/nocobase/nocobase/pull/6480)) by @mytharcher

  - 修复 id 列不存在时迁移脚本报错 ([#6470](https://github.com/nocobase/nocobase/pull/6470)) by @chenos

  - 避免历史表被关系字段同步出来 ([#6478](https://github.com/nocobase/nocobase/pull/6478)) by @mytharcher

- **[工作流]** 不统计已删除的工作流的待办 ([#6474](https://github.com/nocobase/nocobase/pull/6474)) by @mytharcher

- **[变量和密钥]** 变量与密钥弹窗界面按钮不显示 ([#6485](https://github.com/nocobase/nocobase/pull/6485)) by @gchust

- **[工作流：聚合查询节点]** 修复对聚合结果为 null 时取整报错 ([#6473](https://github.com/nocobase/nocobase/pull/6473)) by @mytharcher

- **[嵌入 NocoBase]** 页面显示空白 by @zhangzhonghe

- **[备份管理器]** 默认的备份设置不存在时服务器无法启动 by @gchust

- **[工作流：审批]**
  - 修复审批表单中文件字段报错问题 by @mytharcher

  - 基于钩子事件修复待办任务数量 by @mytharcher

