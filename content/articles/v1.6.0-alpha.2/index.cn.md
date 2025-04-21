### 🎉 新特性

- **[client]**
  - 支持在阅读态字段字段上启用链接打开弹窗 ([#5747](https://github.com/nocobase/nocobase/pull/5747)) by @katherinehhh

  - 支持关系区块中配置关联和取消关联操作 ([#5695](https://github.com/nocobase/nocobase/pull/5695)) by @katherinehhh

- **[server]** 新增接口审计管理模块 ([#5601](https://github.com/nocobase/nocobase/pull/5601)) by @chenzhizdt

- **[工作流]** 支持手动触发工作流 ([#5664](https://github.com/nocobase/nocobase/pull/5664)) by @mytharcher

- **[工作流：操作前事件]** 支持手动触发工作流 by @mytharcher

### 🚀 优化

- **[client]**
  - 实现前端组件的按需加载 ([#5647](https://github.com/nocobase/nocobase/pull/5647)) by @gchust

  - 提升页面的渲染性能，和支持页面的 keep-alive 功能 ([#5515](https://github.com/nocobase/nocobase/pull/5515)) by @zhangzhonghe

- **[数据表字段：排序]** 补充插件描述 ([#5720](https://github.com/nocobase/nocobase/pull/5720)) by @mytharcher

- **[嵌入 NocoBase]** 提升页面的渲染性能 by @zhangzhonghe

### 🐛 修复

- **[client]**
  - 修复一些变量在第三方数据源区块中无法正常使用的问题 ([#5782](https://github.com/nocobase/nocobase/pull/5782)) by @zhangzhonghe

  - 修复区块模板中，关系字段值为空的问题。修复第三方数据源的区块数据范围，使用变量时，不能正常工作的问题 ([#5777](https://github.com/nocobase/nocobase/pull/5777)) by @zhangzhonghe

  - 修复懒加载组件时组件的动态属性不起作用的问题 ([#5776](https://github.com/nocobase/nocobase/pull/5776)) by @gchust

  - 修复开发环境中动态加载 hook 时会出现 React 告警消息 ([#5758](https://github.com/nocobase/nocobase/pull/5758)) by @gchust

- **[数据可视化]** 修复图表区块的筛选字段组件没有渲染的问题 ([#5769](https://github.com/nocobase/nocobase/pull/5769)) by @2013xile

