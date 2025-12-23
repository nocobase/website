汇总一周产品更新日志，最新发布可以[前往我们的博客查看](https://www.nocobase.com/cn/blog/timeline)。

**NocoBase 目前更新包括的版本更新包括三个分支：`main` ，`next`和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860-djgsxo.png)

`main` ：截止目前最稳定的版本，推荐安装此版本。

`next`：包含即将发布的新功能，经过初步测试的版本，可能存在部分已知或未知问题。主要面向测试用户，用于收集反馈和进一步优化功能。适合愿意提前体验新功能并提供反馈的测试用户。

`develop`：开发中的版本，包含最新的功能代码，可能尚未完成或存在较多不稳定因素，主要用于内部开发和快速迭代。适合对产品功能前沿发展感兴趣的技术用户，但可能存在较多问题或不完整功能，不建议在生产环境中使用。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.19](https://www.nocobase.com/cn/blog/v1.9.19)

*发布时间：2025-12-04*

### 🐛 修复

- **[工作流：审批]**
  - 修复加载审批列表时内存溢出的问题 by @mytharcher
  - 修复审批人弹窗不显示标题的问题 by @zhangzhonghe

### [v1.9.18](https://www.nocobase.com/cn/blog/v1.9.18)

*发布时间：2025-12-04*

### 🐛 修复

- **[操作：导入记录]** 导入的字段和导入权限设置的字段不匹配 ([#8075](https://github.com/nocobase/nocobase/pull/8075)) by @2013xile
- **[工作流]** 修复执行历史页面中当节点上的执行记录不存在时的报错 ([#8066](https://github.com/nocobase/nocobase/pull/8066)) by @mytharcher
- **[权限控制]** 给外部数据源添加数据表关联操作的权限判断中间件 ([#8062](https://github.com/nocobase/nocobase/pull/8062)) by @2013xile
- **[工作流：审批]**

  - 修复在数据详情弹窗中加载相关审批时的权限报错 by @mytharcher
  - 修复退回分支中无法使用审批节点结果中的审批记录数据的问题 by @mytharcher
  - 修复分支模式和顺序会签时流程处理错误的问题 by @mytharcher

### [v1.9.17](https://www.nocobase.com/cn/blog/v1.9.17)

*发布时间：2025-12-02*

### 🐛 修复

- **[client]** 修复联动规则下拉选择框闪烁的问题 ([#8018](https://github.com/nocobase/nocobase/pull/8018)) by @zhangzhonghe
- **[acl]** 修复外部数据源的权限数据范围使用了当前用户相关变量时， acl meta 信息获取不正确的问题 ([#8013](https://github.com/nocobase/nocobase/pull/8013)) by @2013xile
- **[主题编辑器]** 移动端支持切换主题 ([#8046](https://github.com/nocobase/nocobase/pull/8046)) by @zhangzhonghe
- **[多应用管理器]** 设置日志级别，子应用不生效 ([#8045](https://github.com/nocobase/nocobase/pull/8045)) by @2013xile

### [v1.9.16](https://www.nocobase.com/cn/blog/v1.9.16)

*发布时间：2025-12-02*

### 🎉 新特性

- **[数据源：REST API]** 在 restful api 数据源配置中新增`接口错误信息转换`配置项 by @cgyrock

### 🚀 优化

- **[client]**

  - 优化 Select 组件，鼠标悬停时显示被折叠的已选中选项 ([#8029](https://github.com/nocobase/nocobase/pull/8029)) by @katherinehhh
  - 优化子表格字段的必填校验提示信息样式 ([#8001](https://github.com/nocobase/nocobase/pull/8001)) by @katherinehhh
- **[工作流]** 为 UserSelect 组件增加主数据源上下文，以提供一个更通用的组件，可以在其他地方使用 ([#8010](https://github.com/nocobase/nocobase/pull/8010)) by @mytharcher
- **[工作流：审批]** 使用通用组件以减少重复代码 by @mytharcher

### 🐛 修复

- **[client]** 修复 Variable.Input 组件的懒加载问题，该问题会导致变量选项菜单不正常的重渲染 ([#8009](https://github.com/nocobase/nocobase/pull/8009)) by @mytharcher
- **[操作：导入记录]** 修复导入时如果字段包含 `null` 值报错的问题 ([#8037](https://github.com/nocobase/nocobase/pull/8037)) by @mytharcher
- **[工作流]** 修复发送消息之前队列已关闭的问题 ([#8003](https://github.com/nocobase/nocobase/pull/8003)) by @mytharcher
- **[工作流：子流程]** 修复选择工作流组件在工作流列表超过 200 个之后展示不正常的问题 by @mytharcher
- **[工作流：审批]**

  - 修复由于 `RemoteSelect` 组件变更导致的加载 `approvalRecords.reassignee` 资源的权限问题 by @mytharcher
  - 修复审批详情弹窗在刷新页面后打印按钮无法工作的问题 by @mytharcher

### [v1.9.15](https://www.nocobase.com/cn/blog/v1.9.15)

*发布时间：2025-11-28*

### 🐛 修复

- **[client]**

  - 避免打开字段默认值配置时的报错 ([#7997](https://github.com/nocobase/nocobase/pull/7997)) by @mytharcher
  - 修复关系树表表格区块添加子记录时报错的问题 ([#7989](https://github.com/nocobase/nocobase/pull/7989)) by @katherinehhh
- **[部门]** 修复部门插件中的部门用户关联字段无法编辑的问题 ([#7462](https://github.com/nocobase/nocobase/pull/7462)) by @heziqiang
- **[数据表：树]** 修复因树表父字段获取不正确导致路径表更新失败的问题 ([#8000](https://github.com/nocobase/nocobase/pull/8000)) by @2013xile
- **[数据表字段：多对多 (数组)]** 修复子表格中多对多数组关系字段数据无法更新问题 ([#7998](https://github.com/nocobase/nocobase/pull/7998)) by @cgyrock
- **[工作流：审批]**

  - 修复用户在撤回重新提交后，工作流上下文中缺少申请人数据的问题 by @mytharcher
  - 修复用户带评论提交审批后在节点结果中评论为空的问题 by @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.50](https://www.nocobase.com/cn/blog/v2.0.0-alpha.50)

*发布时间：2025-12-02*

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
  - 修复 Markdown字段 Popover 样式问题 ([#8012](https://github.com/nocobase/nocobase/pull/8012)) by @katherinehhh
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

### [v2.0.0-alpha.49](https://www.nocobase.com/cn/blog/v2.0.0-alpha.49)

*发布时间：2025-11-29*

### 🎉 新特性

- **[工作流：审批]** 允许选择在审批处理界面中展示数据的快照还是最新状态 by @mytharcher

### 🚀 优化

- **[client]** 优化子表格字段的必填校验提示信息样式 ([#8001](https://github.com/nocobase/nocobase/pull/8001)) by @katherinehhh
- **[遥测：Prometheus]** 升级 `@opentelemetry/exporter-prometheus` by @2013xile
- **[操作：导入记录 Pro]** 优化异步任务的错误信息，任务失败时将明确提示具体的错误原因 by @mytharcher

### 🐛 修复

- **[flow-engine]** 修复详情区块中无法正确触发当前记录变量后端解析的问题。 ([#8004](https://github.com/nocobase/nocobase/pull/8004)) by @gchust
- **[client]** 修复联合主键表格区块选中和删除行无效的问题 ([#7978](https://github.com/nocobase/nocobase/pull/7978)) by @katherinehhh
- **[操作：导出记录]** 修复导出按钮可导出字段列表缺少系统字段的问题 ([#8002](https://github.com/nocobase/nocobase/pull/8002)) by @katherinehhh
- **[数据表：树]** 修复因树表父字段获取不正确导致路径表更新失败的问题 ([#8000](https://github.com/nocobase/nocobase/pull/8000)) by @2013xile
- **[数据表字段：多对多 (数组)]** 修复子表格中多对多数组关系字段数据无法更新问题 ([#7998](https://github.com/nocobase/nocobase/pull/7998)) by @cgyrock
- **[部门]** 修复部门插件中的部门用户关联字段无法编辑的问题 ([#7462](https://github.com/nocobase/nocobase/pull/7462)) by @heziqiang
- **[工作流：审批]** 修复由于 `RemoteSelect` 组件变更导致的加载 `approvalRecords.reassignee` 资源的权限问题 by @mytharcher

### [v2.0.0-alpha.48](https://www.nocobase.com/cn/blog/v2.0.0-alpha.48)

*发布时间：2025-11-28*

### 🎉 新特性

- **[区块：地图]** 新增 2.0 地图区块 ([#7944](https://github.com/nocobase/nocobase/pull/7944)) by @katherinehhh
- **[认证：OIDC]** 支持选项 当用户未登录时自动跳转到 SSO 登录页 by @heziqiang

### 🐛 修复

- **[client]**

  - 避免打开字段默认值配置时的报错 ([#7997](https://github.com/nocobase/nocobase/pull/7997)) by @mytharcher
  - 修复关系树表表格区块添加子记录时报错的问题 ([#7989](https://github.com/nocobase/nocobase/pull/7989)) by @katherinehhh
  - 修复 markdown 字段 HTML 模式下超出宽度省略时显示异常的问题 ([#7994](https://github.com/nocobase/nocobase/pull/7994)) by @katherinehhh
  - 修复级联下拉选择器搜索数据不全问题 ([#7990](https://github.com/nocobase/nocobase/pull/7990)) by @katherinehhh
  - 修复跳转页面时页面 tab 的状态和路由不对应的问题 ([#7991](https://github.com/nocobase/nocobase/pull/7991)) by @zhangzhonghe
  - 修复 下拉列表组件在非对象值回显时没有正确显示label 问题 ([#7975](https://github.com/nocobase/nocobase/pull/7975)) by @katherinehhh
- **[database]** 修复：移除 time 字段转换中的 UTC 处理，避免因时区导致的纯时间值偏移 ([#7812](https://github.com/nocobase/nocobase/pull/7812)) by @ChimingLiu
- **[工作流]**

  - 修复停止服务前，已创建的执行计划未发送到队列的问题 ([#7981](https://github.com/nocobase/nocobase/pull/7981)) by @mytharcher
  - 修复部分工作流待办菜单不显示的问题 ([#7980](https://github.com/nocobase/nocobase/pull/7980)) by @mytharcher
  - 修复点击默认进入的待办列表中的任务跳转到错误页面的问题 ([#7983](https://github.com/nocobase/nocobase/pull/7983)) by @mytharcher
- **[数据可视化]** 外部数据源表的筛选字段的配置项不能显示特有属性 ([#7982](https://github.com/nocobase/nocobase/pull/7982)) by @2013xile
- **[数据源管理]** 修复外部数据源修改密码后系统内无法更新密码的问题 ([#7977](https://github.com/nocobase/nocobase/pull/7977)) by @cgyrock
- **[操作：导入记录]** 修复树表导入数据报错问题 ([#7976](https://github.com/nocobase/nocobase/pull/7976)) by @cgyrock
- **[工作流：人工处理节点]** 修复人工待办任务统计数字不对的问题 ([#7984](https://github.com/nocobase/nocobase/pull/7984)) by @mytharcher
- **[工作流：审批]**

  - 修复用户在撤回重新提交后，工作流上下文中缺少申请人数据的问题 by @mytharcher
  - 修复用户带评论提交审批后在节点结果中评论为空的问题 by @mytharcher
