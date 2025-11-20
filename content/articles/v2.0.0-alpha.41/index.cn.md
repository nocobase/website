### 🎉 新特性

- **[数据可视化]** 新增图表配置的 AI 员工 ([#7815](https://github.com/nocobase/nocobase/pull/7815)) by @heziqiang

### 🚀 优化

- **[flow-engine]**

  - 支持 flow engine 层监听 models 树变更。 ([#7905](https://github.com/nocobase/nocobase/pull/7905)) by @gchust
  - 优化当前记录的变量解析，提高弹窗打开的速度 ([#7895](https://github.com/nocobase/nocobase/pull/7895)) by @gchust
  - 优化 runjs 的上下文中第三方库的 api 结构，并支持 Antd 图标库。 ([#7896](https://github.com/nocobase/nocobase/pull/7896)) by @gchust
- **[database]** 重构字段加密插件，提升安全性，支持应用密钥生成与更换、字段独立密钥。 ([#7769](https://github.com/nocobase/nocobase/pull/7769)) by @cgyrock
- **[数据表字段：加密]** 优化字段加密插件，支持独立 IV 下的数据检索 by @cgyrock

### 🐛 修复

- **[client]**

  - 修复区块被隐藏后依然占用页面空间的问题。 ([#7906](https://github.com/nocobase/nocobase/pull/7906)) by @gchust
  - 修复筛选按钮中，重置按钮清空默认条件的问题 ([#7903](https://github.com/nocobase/nocobase/pull/7903)) by @zhangzhonghe
  - 修复新增表单子表单字段权限判断错误的问题 ([#7902](https://github.com/nocobase/nocobase/pull/7902)) by @katherinehhh
- **[server]** 修复服务拆分模式下未订阅无法发布队列消息的问题 ([#7875](https://github.com/nocobase/nocobase/pull/7875)) by @mytharcher
- **[工作流]**

  - 修复监听不存在的外部数据源事件产生的报错 ([#7855](https://github.com/nocobase/nocobase/pull/7855)) by @mytharcher
  - 使用底层事件队列代替共享后台任务队列，以避免共享队列在服务拆分模式下会被错误消费的问题 ([#7871](https://github.com/nocobase/nocobase/pull/7871)) by @mytharcher
- **[工作流：人工处理节点]** 修复翻译语言指向的命名空间，以正确的翻译内容 ([#7877](https://github.com/nocobase/nocobase/pull/7877)) by @mytharcher
- **[权限控制]** 关系字段关联操作 snippets 不生效的问题 ([#7876](https://github.com/nocobase/nocobase/pull/7876)) by @2013xile
- **[工作流：自定义操作事件]** 修复监听不存在的外部数据源事件产生的报错 by @mytharcher
- **[评论]** 修复评论区块引用评论失效问题 by @katherinehhh
- **[模板打印]** 解析 filter 中变量 by @jiannx
- **[工作流：审批]** 修复由于多个审批人并发处理审批时的竞态导致的节点重复执行的问题 by @mytharcher
