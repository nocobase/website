### 🎉 新特性

- **[区块：地图]** 新增2.0 地图区块 ([#7944](https://github.com/nocobase/nocobase/pull/7944)) by @katherinehhh

- **[认证：OIDC]** 支持选项 当用户未登录时自动跳转到 SSO 登录页 by @heziqiang

### 🐛 修复

- **[client]**
  - 避免打开字段默认值配置时的报错 ([#7997](https://github.com/nocobase/nocobase/pull/7997)) by @mytharcher

  - 修复关系树表表格区块添加子记录时报错的问题 ([#7989](https://github.com/nocobase/nocobase/pull/7989)) by @katherinehhh

  - 修复markdown 字段html 模式下超出宽度省略时显示异常的问题 ([#7994](https://github.com/nocobase/nocobase/pull/7994)) by @katherinehhh

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

