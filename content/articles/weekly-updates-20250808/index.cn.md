汇总一周产品更新日志，最新发布可以[前往我们的博客查看](https://www.nocobase.com/cn/blog/timeline)。

**NocoBase 目前更新包括的版本更新包括三个分支：`main` ，`next`和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

`main` ：截止目前最稳定的版本，推荐安装此版本。

`next`：包含即将发布的新功能，经过初步测试的版本，可能存在部分已知或未知问题。主要面向测试用户,用于收集反馈和进一步优化功能。适合愿意提前体验新功能并提供反馈的测试用户。

`develop`：开发中的版本，包含最新的功能代码，可能尚未完成或存在较多不稳定因素，主要用于内部开发和快速迭代。适合对产品功能前沿发展感兴趣的技术用户，但可能存在较多问题或不完整功能，不建议在生产环境中使用。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.14](https://www.nocobase.com/cn/blog/v1.8.14)

*发布时间：2025-08-05*

#### 🐛 修复

- **[client]** 修复变量原始字符串会随表单提交的问题 ([#7337](https://github.com/nocobase/nocobase/pull/7337)) by @zhangzhonghe
- **[工作流：审批]** 为加签和转签的任务增加标题 by @mytharcher

### [v1.8.13](https://www.nocobase.com/cn/blog/v1.8.13)

*发布时间：2025-08-04*

#### 🎉 新特性

- **[认证：SAML 2.0]** 增加签名相关配置项 by @2013xile

#### 🚀 优化

- **[工作流：JavaScript 节点]** 将日志改为使用基础缓存以避免集群模式的问题 by @mytharcher

#### 🐛 修复

- **[client]**

  - 修复 操作面板鼠标移上去 tooltip 显示 [object Object] 的问题 ([#7322](https://github.com/nocobase/nocobase/pull/7322)) by @katherinehhh
  - 当在筛选表单中使用变量设置字段默认值，且变量值为空时，输入框中会显示变量的原始字符串 ([#7335](https://github.com/nocobase/nocobase/pull/7335)) by @zhangzhonghe
- **[数据表：树]** 修复树表路径同步逻辑 ([#7330](https://github.com/nocobase/nocobase/pull/7330)) by @ChimingLiu

### [v1.8.12](https://www.nocobase.com/cn/blog/v1.8.12)

*发布时间：2025-08-01*

#### 🎉 新特性

- **[client]** 为 Input、TextArea、URL 和 InputNumber 组件添加了"自动聚焦"选项，启用后输入框在页面初始渲染时会自动获得焦点 ([#7320](https://github.com/nocobase/nocobase/pull/7320)) by @zhangzhonghe

#### 🐛 修复

- **[client]**

  - 修复文件预览在空 URL 时报错的问题 ([#7315](https://github.com/nocobase/nocobase/pull/7315)) by @mytharcher
  - 为本地文件预览补全 URL ([#7314](https://github.com/nocobase/nocobase/pull/7314)) by @mytharcher
- **[utils]** 修复 parseDate 解析时间变量时区处理错误的问题 ([#7318](https://github.com/nocobase/nocobase/pull/7318)) by @katherinehhh
- **[undefined]** 将新插件加入到预置集合 ([#7319](https://github.com/nocobase/nocobase/pull/7319)) by @mytharcher
- **[文件管理器]** 修复上传文件时存储引擎外键的权限问题 ([#7316](https://github.com/nocobase/nocobase/pull/7316)) by @mytharcher
- **[工作流]** 修复执行器退出时对 `undefined` 结果的处理 ([#7317](https://github.com/nocobase/nocobase/pull/7317)) by @mytharcher
- **[工作流：动态表达式计算节点]** 修复旧 API 导致的错误 ([#7321](https://github.com/nocobase/nocobase/pull/7321)) by @mytharcher
- **[工作流：子流程]** 修复子流程假死的问题 by @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.7](https://www.nocobase.com/cn/blog/v1.9.0-alpha.7)

*发布时间：2025-08-06*

#### 🐛 修复

- **[邮件管理]** 支持重新同步 by @jiannx

### [v1.9.0-alpha.6](https://www.nocobase.com/cn/blog/v1.9.0-alpha.6)

*发布时间：2025-08-06*

#### 🚀 优化

- **[工作流]** 待办卡片中的工作流标题，即使对应版本禁用后也不再展示删除线 ([#7339](https://github.com/nocobase/nocobase/pull/7339)) by @mytharcher

#### 🐛 修复

- **[数据可视化]** 图表区块中筛选日期字段设置默认值为日期变量时显示不正确的问题 ([#7291](https://github.com/nocobase/nocobase/pull/7291)) by @katherinehhh
- **[工作流：抄送]** 修复区块无法移除的问题 ([#7338](https://github.com/nocobase/nocobase/pull/7338)) by @mytharcher
- **[邮件管理]** 手动区分转发和回复 by @jiannx

### [v1.9.0-alpha.5](https://www.nocobase.com/cn/blog/v1.9.0-alpha.5)

*发布时间：2025-08-05*

#### 🎉 新特性

- **[client]** 为 Input、TextArea、URL 和 InputNumber 组件添加了"自动聚焦"选项，启用后输入框在页面初始渲染时会自动获得焦点 ([#7320](https://github.com/nocobase/nocobase/pull/7320)) by @zhangzhonghe
- **[认证：SAML 2.0]** 增加签名相关配置项 by @2013xile

#### 🚀 优化

- **[工作流：JavaScript 节点]** 将日志改为使用基础缓存以避免集群模式的问题 by @mytharcher

#### 🐛 修复

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
