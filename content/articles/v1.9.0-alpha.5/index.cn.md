### 🎉 新特性

- **[client]** 为 Input、TextArea、URL 和 InputNumber 组件添加了"自动聚焦"选项，启用后输入框在页面初始渲染时会自动获得焦点 ([#7320](https://github.com/nocobase/nocobase/pull/7320)) by @zhangzhonghe

- **[认证：SAML 2.0]** 增加签名相关配置项 by @2013xile

### 🚀 优化

- **[工作流：JavaScript 节点]** 将日志改为使用基础缓存以避免集群模式的问题 by @mytharcher

### 🐛 修复

- **[client]**
  - 修复变量原始字符串会随表单提交的问题 ([#7337](https://github.com/nocobase/nocobase/pull/7337)) by @zhangzhonghe

  - 修复 操作面板鼠标移上去 tooltip 显示 [object Object] 的问题 ([#7322](https://github.com/nocobase/nocobase/pull/7322)) by @katherinehhh

  - 当在筛选表单中使用变量设置字段默认值，且变量值为空时，输入框中会显示变量的原始字符串 ([#7335](https://github.com/nocobase/nocobase/pull/7335)) by @zhangzhonghe

- **[undefined]** 将新插件加入到预置集合 ([#7319](https://github.com/nocobase/nocobase/pull/7319)) by @mytharcher

- **[数据表：树]** 修复树表路径同步逻辑 ([#7330](https://github.com/nocobase/nocobase/pull/7330)) by @ChimingLiu

- **[Office 文件预览]** 支持 URL 中包含 `.docx`, `.xlsx` 和 `.pptx` 的文件预览 ([#7336](https://github.com/nocobase/nocobase/pull/7336)) by @mytharcher

- **[工作流：动态表达式计算节点]** 修复旧 API 导致的错误 ([#7321](https://github.com/nocobase/nocobase/pull/7321)) by @mytharcher

- **[工作流：审批]** 为加签和转签的任务增加标题 by @mytharcher

- **[邮件管理]** 支持多人相同邮件 by @jiannx

