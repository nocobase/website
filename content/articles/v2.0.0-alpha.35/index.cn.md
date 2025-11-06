### 🚀 优化

- **[flow-engine]** 支持延迟操作 flow model ([#7786](https://github.com/nocobase/nocobase/pull/7786)) by @gchust

- **[工作流：JavaScript 节点]** 修复传递到执行环境中的上层函数导致的安全漏洞，避免通过利用漏洞访问上层执行环境的问题 by @mytharcher

### 🐛 修复

- **[client]**
  - 修复详情区块简单分页出现空数据下一页的问题 ([#7784](https://github.com/nocobase/nocobase/pull/7784)) by @katherinehhh

  - 修复表格操作列和 jsColumn 列宽度设置不生效问题 ([#7777](https://github.com/nocobase/nocobase/pull/7777)) by @katherinehhh

  - 页面的事件流设置页面区块数据范围不生效 ([#7788](https://github.com/nocobase/nocobase/pull/7788)) by @gchust

- **[工作流]** 为工作流的日志增加 `workflowId` 的数据标识 ([#7789](https://github.com/nocobase/nocobase/pull/7789)) by @mytharcher

- **[工作流：自定义变量节点]** 修复变量节点缺失 config 时报错的问题 by @mytharcher

- **[邮件管理]** mailMessages添加索引 by @jiannx

