汇总一周产品更新日志，最新发布可以[前往我们的博客查看](https://www.nocobase.com/cn/blog/timeline)。

**NocoBase 目前更新包括的版本更新包括三个分支：`main` ，`next`和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

`main` ：截止目前最稳定的版本，推荐安装此版本。

`next`：包含即将发布的新功能，经过初步测试的版本，可能存在部分已知或未知问题。主要面向测试用户，用于收集反馈和进一步优化功能。适合愿意提前体验新功能并提供反馈的测试用户。

`develop`：开发中的版本，包含最新的功能代码，可能尚未完成或存在较多不稳定因素，主要用于内部开发和快速迭代。适合对产品功能前沿发展感兴趣的技术用户，但可能存在较多问题或不完整功能，不建议在生产环境中使用。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.26](https://www.nocobase.com/cn/blog/v1.8.26)

*发布时间：2025-09-20*

#### 🚀 优化

- **[client]** 表格列提示信息和分组标题支持本地化 ([#7485](https://github.com/nocobase/nocobase/pull/7485)) by @katherinehhh
- **[日历]** 支持日历区块表头多语言显示 ([#7508](https://github.com/nocobase/nocobase/pull/7508)) by @katherinehhh

#### 🐛 修复

- **[client]** 修复菜单的图标配置弹窗被遮挡的问题 ([#7515](https://github.com/nocobase/nocobase/pull/7515)) by @zhangzhonghe
- **[通知：站内信]**

  - 修复通知链接解析错误的问题 ([#7509](https://github.com/nocobase/nocobase/pull/7509)) by @mytharcher
  - 修复打开通知弹窗不展示最近消息的问题 ([#7514](https://github.com/nocobase/nocobase/pull/7514)) by @mytharcher
- **[工作流]** 修复工作流后台任务队列订阅逻辑不正确导致执行消息处理异常的问题 ([#7507](https://github.com/nocobase/nocobase/pull/7507)) by @mytharcher
- **[工作流：审批]**

  - 修复删除外部数据源数据时报错的问题 by @mytharcher
  - 修复审批处理表单中公式字段不自动变化的问题 by @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.8](https://www.nocobase.com/cn/blog/v1.9.0-beta.8)

*发布时间：2025-09-20*

#### 🚀 优化

- **[auth]** 支持在用户名中使用 `.` ([#7504](https://github.com/nocobase/nocobase/pull/7504)) by @2013xile
- **[client]** 表格列提示信息和分组标题支持本地化 ([#7485](https://github.com/nocobase/nocobase/pull/7485)) by @katherinehhh
- **[工作流：人工处理节点]** 支持查看和继续执行已停用工作流中的人工待办任务 ([#7493](https://github.com/nocobase/nocobase/pull/7493)) by @mytharcher
- **[日历]** 支持日历区块表头多语言显示 ([#7508](https://github.com/nocobase/nocobase/pull/7508)) by @katherinehhh
- **[主题编辑器]** 新增对侧边菜单栏的颜色配置 ([#7483](https://github.com/nocobase/nocobase/pull/7483)) by @duannyuuu
- **[Redis 消息队列适配器]** 在 Redis 消息队列适配器中使用标准的系统日志 by @mytharcher

#### 🐛 修复

- **[client]**

  - 修复按钮的图标配置弹窗被遮挡的问题 ([#7506](https://github.com/nocobase/nocobase/pull/7506)) by @zhangzhonghe
  - 修复菜单的图标配置弹窗被遮挡的问题 ([#7515](https://github.com/nocobase/nocobase/pull/7515)) by @zhangzhonghe
  - 修复 Popover 组件被遮挡的问题 ([#7491](https://github.com/nocobase/nocobase/pull/7491)) by @zhangzhonghe
- **[通知：站内信]**

  - 修复通知链接解析错误的问题 ([#7509](https://github.com/nocobase/nocobase/pull/7509)) by @mytharcher
  - 修复打开通知弹窗不展示最近消息的问题 ([#7514](https://github.com/nocobase/nocobase/pull/7514)) by @mytharcher
- **[工作流]**

  - 修复潜在的工作流日志缓存报错问题 ([#7490](https://github.com/nocobase/nocobase/pull/7490)) by @mytharcher
  - 修复工作流后台任务队列订阅逻辑不正确导致执行消息处理异常的问题 ([#7507](https://github.com/nocobase/nocobase/pull/7507)) by @mytharcher
- **[数据源：REST API]** 修复 REST API URL 验证规则 by @katherinehhh
- **[HTTP 请求加密]** 修复请求参数不支持原生 URLSearchParams 类型的问题 by @mytharcher
- **[模板打印]** 支持省市区字段 by @jiannx
- **[工作流：审批]**

  - 修复审批处理表单中公式字段不自动变化的问题 by @mytharcher
  - 修复删除外部数据源数据时报错的问题 by @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.16](https://www.nocobase.com/cn/blog/v1.9.0-alpha.16)

*发布时间：2025-09-24*

#### 🚀 优化

- **[client]**

  - 支持预览图片时旋转图片 ([#7523](https://github.com/nocobase/nocobase/pull/7523)) by @mytharcher
  - 表格列提示信息和分组标题支持本地化 ([#7485](https://github.com/nocobase/nocobase/pull/7485)) by @katherinehhh
- **[RabbitMQ 消息队列适配器]** 优化 RabbitMQ 连接处理和消息处理逻辑 by @sdp-ncd

#### 🐛 修复

- **[client]**

  - 修复左侧菜单栏子菜单不能正确高亮的问题 ([#7520](https://github.com/nocobase/nocobase/pull/7520)) by @duannyuuu
  - 修复菜单的图标配置弹窗被遮挡的问题 ([#7515](https://github.com/nocobase/nocobase/pull/7515)) by @zhangzhonghe
- **[通知：站内信]** 修复打开通知弹窗不展示最近消息的问题 ([#7514](https://github.com/nocobase/nocobase/pull/7514)) by @mytharcher
- **[工作流]** 修复绑定工作流配置中加载关系字段上下文的工作流列表条件错误的问题 ([#7516](https://github.com/nocobase/nocobase/pull/7516)) by @mytharcher
- **[工作流：循环节点]** 修复了循环节点条件未满足时仍错误继续到下一项的问题 ([#7521](https://github.com/nocobase/nocobase/pull/7521)) by @mytharcher
- **[工作流：审批]**

  - 修复删除外部数据源数据时报错的问题 by @mytharcher
  - 修复审批处理表单中公式字段不自动变化的问题 by @mytharcher
