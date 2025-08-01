### 🎉 新特性

- **[client]** 为 Input、TextArea、URL 和 InputNumber 组件添加了"自动聚焦"选项，启用后输入框在页面初始渲染时会自动获得焦点 ([#7320](https://github.com/nocobase/nocobase/pull/7320)) by @zhangzhonghe

### 🐛 修复

- **[client]**
  - 修复文件预览在空 URL 时报错的问题 ([#7315](https://github.com/nocobase/nocobase/pull/7315)) by @mytharcher

  - 为本地文件预览补全 URL ([#7314](https://github.com/nocobase/nocobase/pull/7314)) by @mytharcher

- **[utils]** 修复 parseDate 解析时间变量时区处理错误的问题 ([#7318](https://github.com/nocobase/nocobase/pull/7318)) by @katherinehhh

- **[undefined]** 将新插件加入到预置集合 ([#7319](https://github.com/nocobase/nocobase/pull/7319)) by @mytharcher

- **[文件管理器]** 修复上传文件时存储引擎外键的权限问题 ([#7316](https://github.com/nocobase/nocobase/pull/7316)) by @mytharcher

- **[工作流]** 修复执行器退出时对 `undefined` 结果的处理 ([#7317](https://github.com/nocobase/nocobase/pull/7317)) by @mytharcher

- **[工作流：动态表达式计算节点]** 修复旧 API 导致的错误 ([#7321](https://github.com/nocobase/nocobase/pull/7321)) by @mytharcher

- **[工作流：子流程]** 修复子流程假死的问题 by @mytharcher

