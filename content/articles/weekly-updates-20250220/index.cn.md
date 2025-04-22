汇总一周产品更新日志，最新发布可以[前往我们的博客查看](https://www.nocobase.com/cn/blog/tags/release-notes)。

**NocoBase 目前更新包括的版本更新包括三个分支：`main` ，`next`和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

`main` ：截止目前最稳定的版本，推荐安装此版本。

`next`：包含即将发布的新功能，经过初步测试的版本，可能存在部分已知或未知问题。主要面向测试用户,用于收集反馈和进一步优化功能。适合愿意提前体验新功能并提供反馈的测试用户。

`develop`：开发中的版本，包含最新的功能代码，可能尚未完成或存在较多不稳定因素，主要用于内部开发和快速迭代。适合对产品功能前沿发展感兴趣的技术用户，但可能存在较多问题或不完整功能，不建议在生产环境中使用。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.5.7](https://www.nocobase.com/cn/blog/v1.5.7)

*发布时间：2025-02-14*

#### 🚀 优化

- **[通知：站内信]** 移除 SSE 连接重试的控制台错误日志。 ([#6205](https://github.com/nocobase/nocobase/pull/6205)) by @sheldon66

#### 🐛 修复

- **[client]**

  - 关系数据快捷创建操作的弹窗中组件缺少拖动设置项 ([#6201](https://github.com/nocobase/nocobase/pull/6201)) by @katherinehhh
  - 数值格式化精度设置未生效 ([#6202](https://github.com/nocobase/nocobase/pull/6202)) by @katherinehhh
  - 修复在表单中，清空某个关系字段后，然后点击提交，这个关系字段没有被清空的问题 ([#5540](https://github.com/nocobase/nocobase/pull/5540)) by @zhangzhonghe
  - 提交数据后，区块不刷新 ([#6206](https://github.com/nocobase/nocobase/pull/6206)) by @zhangzhonghe
  - 关系字段清空后，范围联动的关系字段UI数据显示清空但提交时值依然存在 ([#6207](https://github.com/nocobase/nocobase/pull/6207)) by @katherinehhh
  - 表格中无编辑权限的行记录仍显示编辑操作 ([#6204](https://github.com/nocobase/nocobase/pull/6204)) by @katherinehhh
- **[数据表字段：排序]** 修复排序字段类型在外部数据源未注册的问题 ([#6212](https://github.com/nocobase/nocobase/pull/6212)) by @mytharcher
- **[用户认证]** WebSocket 认证问题 ([#6209](https://github.com/nocobase/nocobase/pull/6209)) by @2013xile
- **[数据表字段：附件（URL）]** 修复 hook 中弃用的请求地址 by @mytharcher

### [v1.5.8](https://www.nocobase.com/cn/blog/v1.5.8)

*发布时间：2025-02-17*

#### 🐛 修复

- **[client]**

  - 嵌入页面无法打开字段链接的弹窗 ([#6222](https://github.com/nocobase/nocobase/pull/6222)) by @gchust
  - 编辑表单中，显示的关系字段值不会随着关联字段变化而变化 ([#6210](https://github.com/nocobase/nocobase/pull/6210)) by @Cyx649312038
- **[移动端]** 权限配置表格中，移动端菜单数据展示不全 ([#6219](https://github.com/nocobase/nocobase/pull/6219)) by @zhangzhonghe

### [v1.5.9](https://www.nocobase.com/cn/blog/v1.5.9)

*发布时间：2025-02-17*

#### 🐛 修复

- **[client]**

  - 页面横向滚动条异常 ([#6232](https://github.com/nocobase/nocobase/pull/6232)) by @katherinehhh
  - 关闭子页面时，会触发多次区块数据请求 ([#6233](https://github.com/nocobase/nocobase/pull/6233)) by @zhangzhonghe
  - 界面上关联字段菜单缺少唯一性 key 属性 ([#6230](https://github.com/nocobase/nocobase/pull/6230)) by @gchust
- **[数据可视化]** 数据源标识包含 `-` 时，筛选报错的问题 ([#6231](https://github.com/nocobase/nocobase/pull/6231)) by @2013xile

### [v1.5.10](https://www.nocobase.com/cn/blog/v1.5.10)

*发布时间：2025-02-18*

#### 🚀 优化

- **[数据表字段：Markdown(Vditor)]** Vditor CDN 使用本地资源 ([#6229](https://github.com/nocobase/nocobase/pull/6229)) by @chenos

#### 🐛 修复

- **[工作流：循环节点]** 修复循环内部有等待节点时提前退出的问题 ([#6236](https://github.com/nocobase/nocobase/pull/6236)) by @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.6.0-beta.7](https://www.nocobase.com/cn/blog/v1.6.0-beta.7)

*发布时间：2025-02-14*

#### 🐛 修复

- **[用户认证]** 提升 token 并发更新和认证错误处理逻辑。 ([#6208](https://github.com/nocobase/nocobase/pull/6208)) by @sheldon66

### [v1.6.0-beta.8](https://www.nocobase.com/cn/blog/v1.6.0-beta.8)

*发布时间：2025-02-15*

#### 🐛 修复

- **[企业微信]** 企业微信客户端中的自动登录问题 by @2013xile

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.26](https://www.nocobase.com/cn/blog/v1.6.0-alpha.26)

*发布时间：2025-02-16*

#### 🎉 新特性

- **[client]** 支持扩展前端筛选操作符 ([#6085](https://github.com/nocobase/nocobase/pull/6085)) by @katherinehhh
- **[工作流：自定义操作事件]** 支持全局和批量数据触发自定义操作事件 by @mytharcher

#### 🚀 优化

- **[工作流]** 将绑定工作流的按钮配置转移到插件中 ([#6143](https://github.com/nocobase/nocobase/pull/6143)) by @mytharcher

### [v1.6.0-alpha.27](https://www.nocobase.com/cn/blog/v1.6.0-alpha.27)

*发布时间：2025-02-16*

#### 🎉 新特性

- **[client]** 支持数据表预置字段扩展 ([#6183](https://github.com/nocobase/nocobase/pull/6183)) by @katherinehhh
- **[日历]** 支持看板、日历、公式字段插件可选字段的扩展 ([#6076](https://github.com/nocobase/nocobase/pull/6076)) by @katherinehhh

---

NocoBase 是一个极易扩展的开源无代码开发平台。完全掌控，无限扩展，助力你的开发团队快速响应变化，显著降低成本，不必投入几年时间和数百万资金研发，只需要花几分钟部署 NocoBase。

**[访问 NocoBase 官网](https://www.nocobase.com/cn)**

您可以在官网申请 Demo 演示，体验站点将在 1 分钟内创建完毕自动发送到您的邮箱。

**访问 NocoBase [GitHub](https://github.com/nocobase/nocobase) 和 [Gitee](https://gitee.com/nocobase/nocobase)**

下载 NocoBase 源码并安装。支持 Docker 安装、create-nocobase-app 安装和 Git 源码安装。

**[官方文档](https://docs-cn.nocobase.com/)持续更新中**
