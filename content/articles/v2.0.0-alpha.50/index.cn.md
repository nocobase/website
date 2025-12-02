### 🚀 优化

- **[client]**

  - 附件上传组件支持“允许多选”设置 ([#8052](https://github.com/nocobase/nocobase/pull/8052)) by @katherinehhh
  - 优化 Select 组件，鼠标悬停时显示被折叠的已选中选项 ([#8029](https://github.com/nocobase/nocobase/pull/8029)) by @katherinehhh
  - 优化 Select 组件被折叠的选中项在鼠标悬停时显示出来 ([#8030](https://github.com/nocobase/nocobase/pull/8030)) by @katherinehhh
- **[AI 员工]** 为添加 LLM 表单新增字段 provider ([#8049](https://github.com/nocobase/nocobase/pull/8049)) by @heziqiang
- **[工作流]** 为 UserSelect 组件增加主数据源上下文，以提供一个更通用的组件，可以在其他地方使用 ([#8010](https://github.com/nocobase/nocobase/pull/8010)) by @mytharcher

### 🐛 修复

- **[client]**

  - 修复下拉选择关系对多禁用多选后显示 N/A 的问题 ([#8050](https://github.com/nocobase/nocobase/pull/8050)) by @katherinehhh
  - 修复联动规则下拉选择框闪烁的问题 ([#8018](https://github.com/nocobase/nocobase/pull/8018)) by @zhangzhonghe
  - 修复筛选操作中将日期字段切换到时间字段后渲染报错的问题。 ([#8036](https://github.com/nocobase/nocobase/pull/8036)) by @gchust
  - 修复添加评论区块时出现当前记录菜单的问题。 ([#8039](https://github.com/nocobase/nocobase/pull/8039)) by @gchust
  - 修复数据选择器区块批量删除数据失败问题 ([#8023](https://github.com/nocobase/nocobase/pull/8023)) by @katherinehhh
  - 修复详情区块里的 JS field 默认样式不正确的问题。 ([#8031](https://github.com/nocobase/nocobase/pull/8031)) by @gchust
  - 修复树表表格区块不能展开子节点的问题 ([#8011](https://github.com/nocobase/nocobase/pull/8011)) by @katherinehhh
  - 修复子表格列拖拽无效问题 ([#8026](https://github.com/nocobase/nocobase/pull/8026)) by @katherinehhh
  - 修复子表格列宽设置无效问题 ([#8027](https://github.com/nocobase/nocobase/pull/8027)) by @katherinehhh
  - 修复弹窗中关系字段数据加载导致报错的问题，确保数据展示和功能更流畅。 ([#7985](https://github.com/nocobase/nocobase/pull/7985)) by @gchust
  - 修复 markdown字段 Popover 样式问题 ([#8012](https://github.com/nocobase/nocobase/pull/8012)) by @katherinehhh
  - 修复编辑操作和新增操作弹窗的默认标题不正确的问题。 ([#8033](https://github.com/nocobase/nocobase/pull/8033)) by @gchust
  - 修复 Variable.Input 组件的懒加载问题，该问题会导致变量选项菜单不正常的重渲染 ([#8009](https://github.com/nocobase/nocobase/pull/8009)) by @mytharcher
  - 修复无法正确解析关系字段打开的弹窗里的当前弹窗弹窗记录变量。 ([#8019](https://github.com/nocobase/nocobase/pull/8019)) by @gchust
- **[acl]** 修复外部数据源的权限数据范围使用了当前用户相关变量时， acl meta 信息获取不正确的问题 ([#8013](https://github.com/nocobase/nocobase/pull/8013)) by @2013xile
- **[flow-engine]**

  - 修复评论编辑后更新保存失败的问题 ([#8035](https://github.com/nocobase/nocobase/pull/8035)) by @katherinehhh
  - 修复点击弹窗中表单提交按钮关闭弹窗时数据区块数据不刷新的问题。 ([#8021](https://github.com/nocobase/nocobase/pull/8021)) by @gchust
- **[主题编辑器]** 移动端支持切换主题 ([#8046](https://github.com/nocobase/nocobase/pull/8046)) by @zhangzhonghe
- **[多应用管理器（已废弃）]** 设置日志级别，子应用不生效 ([#8045](https://github.com/nocobase/nocobase/pull/8045)) by @2013xile
- **[数据源管理]** 修复外部数据源更新密码报错问题 ([#8024](https://github.com/nocobase/nocobase/pull/8024)) by @cgyrock
- **[操作：导入记录]** 修复导入时如果字段包含 `null` 值报错的问题 ([#8037](https://github.com/nocobase/nocobase/pull/8037)) by @mytharcher
- **[工作流]** 修复发送消息之前队列已关闭的问题 ([#8003](https://github.com/nocobase/nocobase/pull/8003)) by @mytharcher
- **[评论]**

  - 修复评论区块删除记录失败的问题 by @katherinehhh
  - 非评论表使用评论区块时显示提示“当前表不是评论表，无法使用评论区块” by @katherinehhh
- **[多空间]** 移动端支持空间切换 by @jiannx
- **[工作流：子流程]** 修复选择工作流组件在工作流列表超过 200 个之后展示不正常的问题 by @mytharcher
- **[工作流：审批]**

  - 修复创建审批信息区块报错的问题 by @mytharcher
  - 为避免添加索引时重复数据的错误，增加迁移脚本 by @mytharcher
  - 修复审批详情弹窗在刷新页面后打印按钮无法工作的问题 by @mytharcher
