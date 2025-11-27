### 🎉 新特性

- **[认证：OIDC]** 支持选项 当用户未登录时自动跳转到 SSO 登录页 by @heziqiang

### 🚀 优化

- **[client]** 对消息内容的变量使用三重括号，以免变量被 Handlerbars 转义 ([#7972](https://github.com/nocobase/nocobase/pull/7972)) by @mytharcher
- **[数据表字段：Markdown(Vditor)]** 调整 Vditor 全屏时内容宽度 ([#7974](https://github.com/nocobase/nocobase/pull/7974)) by @katherinehhh

### 🐛 修复

- **[database]** 修复：移除 time 字段转换中的 UTC 处理，避免因时区导致的纯时间值偏移 ([#7812](https://github.com/nocobase/nocobase/pull/7812)) by @ChimingLiu
- **[client]** 修复 下拉列表组件在非对象值回显时没有正确显示 label 问题 ([#7975](https://github.com/nocobase/nocobase/pull/7975)) by @katherinehhh
- **[工作流]**

  - 修复停止服务前，已创建的执行计划未发送到队列的问题 ([#7981](https://github.com/nocobase/nocobase/pull/7981)) by @mytharcher
  - 修复点击默认进入的待办列表中的任务跳转到错误页面的问题 ([#7983](https://github.com/nocobase/nocobase/pull/7983)) by @mytharcher
  - 修复部分工作流待办菜单不显示的问题 ([#7980](https://github.com/nocobase/nocobase/pull/7980)) by @mytharcher
  - 修复由于 provider 误用导致待办总数不展示的问题 ([#7968](https://github.com/nocobase/nocobase/pull/7968)) by @mytharcher
- **[工作流：人工处理节点]** 修复人工待办任务统计数字不对的问题 ([#7984](https://github.com/nocobase/nocobase/pull/7984)) by @mytharcher
- **[数据可视化]**

  - 外部数据源表的筛选字段的配置项不能显示特有属性 ([#7982](https://github.com/nocobase/nocobase/pull/7982)) by @2013xile
  - 解决图表数据查询不支持 ACL 数据范围的问题 ([#7915](https://github.com/nocobase/nocobase/pull/7915)) by @2013xile
- **[数据源管理]** 修复外部数据源修改密码后系统内无法更新密码的问题 ([#7977](https://github.com/nocobase/nocobase/pull/7977)) by @cgyrock
- **[操作：导入记录]** 修复树表导入数据报错问题 ([#7976](https://github.com/nocobase/nocobase/pull/7976)) by @cgyrock
