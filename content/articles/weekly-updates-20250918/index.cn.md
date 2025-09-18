汇总一周产品更新日志，最新发布可以[前往我们的博客查看](https://www.nocobase.com/cn/blog/timeline)。

**NocoBase 目前更新包括的版本更新包括三个分支：`main` ，`next`和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

`main` ：截止目前最稳定的版本，推荐安装此版本。

`next`：包含即将发布的新功能，经过初步测试的版本，可能存在部分已知或未知问题。主要面向测试用户，用于收集反馈和进一步优化功能。适合愿意提前体验新功能并提供反馈的测试用户。

`develop`：开发中的版本，包含最新的功能代码，可能尚未完成或存在较多不稳定因素，主要用于内部开发和快速迭代。适合对产品功能前沿发展感兴趣的技术用户，但可能存在较多问题或不完整功能，不建议在生产环境中使用。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.25](https://www.nocobase.com/cn/blog/v1.8.25)

*发布时间：2025-09-17*

#### 🚀 优化

- **[auth]** 支持在用户名中使用 `.` ([#7504](https://github.com/nocobase/nocobase/pull/7504)) by @2013xile

#### 🐛 修复

- **[client]** 修复按钮的图标配置弹窗被遮挡的问题 ([#7506](https://github.com/nocobase/nocobase/pull/7506)) by @zhangzhonghe
- **[模板打印]** 支持省市区字段 by @jiannx

### [v1.8.24](https://www.nocobase.com/cn/blog/v1.8.24)

*发布时间：2025-09-13*

#### 🎉 新特性

- **[工作流：审批]** 支持审批时退回到任意节点 by @mytharcher

#### 🚀 优化

- **[server]** 在消息队列中使用标准的系统日志 ([#7480](https://github.com/nocobase/nocobase/pull/7480)) by @mytharcher
- **[client]** 移除文件列表上多余的省略预览浮层 ([#7479](https://github.com/nocobase/nocobase/pull/7479)) by @mytharcher
- **[工作流]** 优化工作流准备执行过程，支持使用已加载的节点数据 ([#7476](https://github.com/nocobase/nocobase/pull/7476)) by @mytharcher
- **[主题编辑器]** 新增对侧边菜单栏的颜色配置 ([#7483](https://github.com/nocobase/nocobase/pull/7483)) by @duannyuuu
- **[Redis 消息队列适配器]** 在 Redis 消息队列适配器中使用标准的系统日志 by @mytharcher

#### 🐛 修复

- **[client]**

  - 修复 Popover 组件被遮挡的问题 ([#7491](https://github.com/nocobase/nocobase/pull/7491)) by @zhangzhonghe
  - 联动规则数值字段「不为空」判断错误 ([#7477](https://github.com/nocobase/nocobase/pull/7477)) by @katherinehhh
  - 修复公开表单 select/多选/日期/富文本在只读时仍可编辑的问题 ([#7484](https://github.com/nocobase/nocobase/pull/7484)) by @katherinehhh
- **[工作流]** 修复潜在的工作流日志缓存报错问题 ([#7490](https://github.com/nocobase/nocobase/pull/7490)) by @mytharcher
- **[HTTP 请求加密]** 修复请求参数不支持原生 URLSearchParams 类型的问题 by @mytharcher
- **[数据源：REST API]** 修复 REST API URL 验证规则 by @katherinehhh
- **[工作流：审批]** 修复审批完成通知中状态文本未翻译的问题 by @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.15](https://www.nocobase.com/cn/blog/v1.9.0-alpha.15)

*发布时间：2025-09-17*

#### 🚀 优化

- **[auth]** 支持在用户名中使用 `.` ([#7504](https://github.com/nocobase/nocobase/pull/7504)) by @2013xile
- **[server]** 在消息队列中使用标准的系统日志 ([#7480](https://github.com/nocobase/nocobase/pull/7480)) by @mytharcher
- **[snowflake-id]** 将主键为自增 ID 且不具备唯一标识的系统表的 ID 修改为 53 位的类雪花算法 ID ([#7465](https://github.com/nocobase/nocobase/pull/7465)) by @2013xile
- **[日历]** 支持日历区块表头多语言显示 ([#7508](https://github.com/nocobase/nocobase/pull/7508)) by @katherinehhh
- **[工作流：人工处理节点]** 支持查看和继续执行已停用工作流中的人工待办任务 ([#7493](https://github.com/nocobase/nocobase/pull/7493)) by @mytharcher
- **[主题编辑器]** 新增对侧边菜单栏的颜色配置 ([#7483](https://github.com/nocobase/nocobase/pull/7483)) by @duannyuuu
- **[Redis 消息队列适配器]** 在 Redis 消息队列适配器中使用标准的系统日志 by @mytharcher

#### 🐛 修复

- **[client]**

  - 修复按钮的图标配置弹窗被遮挡的问题 ([#7506](https://github.com/nocobase/nocobase/pull/7506)) by @zhangzhonghe
  - 修复 Popover 组件被遮挡的问题 ([#7491](https://github.com/nocobase/nocobase/pull/7491)) by @zhangzhonghe
  - 修复公开表单 select/多选/日期/富文本在只读时仍可编辑的问题 ([#7484](https://github.com/nocobase/nocobase/pull/7484)) by @katherinehhh
- **[工作流]**

  - 修复工作流后台任务队列订阅逻辑不正确导致执行消息处理异常的问题 ([#7507](https://github.com/nocobase/nocobase/pull/7507)) by @mytharcher
  - 修复潜在的工作流日志缓存报错问题 ([#7490](https://github.com/nocobase/nocobase/pull/7490)) by @mytharcher
- **[通知：站内信]** 修复通知链接解析错误的问题 ([#7509](https://github.com/nocobase/nocobase/pull/7509)) by @mytharcher
- **[数据源：REST API]** 修复 REST API URL 验证规则 by @katherinehhh
- **[HTTP 请求加密]** 修复请求参数不支持原生 URLSearchParams 类型的问题 by @mytharcher
- **[模板打印]** 支持省市区字段 by @jiannx
- **[邮件管理]** 修复主题乱码问题 by @jiannx
