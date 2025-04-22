汇总一周产品更新日志，最新发布可以[前往我们的博客查看](https://www.nocobase.com/cn/blog/tags/release-notes)。

NocoBase 目前更新包括两个分支：`main` 和 `next` 。

`main` ：截止目前最稳定的版本，推荐安装此版本。

`next`：内测版，包含一些未发布的新特性，这个版本可能还不完全稳定，适用于开发者或测试人员，用于提前体验新功能或进行兼容性测试。

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

## [v1.3.38-beta](https://www.nocobase.com/cn/blog/v1.3.38-beta)

*发布时间：2024-10-24*

### 🐛 修复

- **[client]**

  - 使用简单分页的数据表在列表区块上分页异常 ([#5500](https://github.com/nocobase/nocobase/pull/5500)) by @katherinehhh
  - 在非配置状态下，编辑表单应只显示本表区块 ([#5499](https://github.com/nocobase/nocobase/pull/5499)) by @katherinehhh
- **[工作流：HTTP 请求节点]** 修复变量文本输入框中在粘贴时可能产生非标准空格导致服务端逻辑错误的问题 ([#5497](https://github.com/nocobase/nocobase/pull/5497)) by @mytharcher
- **[部门]** 修复在所属部门角色下外部数据源权限判断不正确的问题 by @2013xile

## [v1.3.39-beta](https://www.nocobase.com/cn/blog/v1.3.39-beta)

*发布时间：2024-10-24*

### 🐛 修复

- **[client]** 修复弹窗中无法添加筛选区块的问题 ([#5502](https://github.com/nocobase/nocobase/pull/5502)) by @zhangzhonghe

## [v1.3.40-beta](https://www.nocobase.com/cn/blog/v1.3.40-beta)

*发布时间：2024-10-25*

### 🎉 新特性

- **[认证：OIDC]** 添加“跳过 SSL 验证“选项 by @2013xile

### 🚀 优化

- **[client]** 勾选字段未勾选时显示禁用的未勾选框 ([#5503](https://github.com/nocobase/nocobase/pull/5503)) by @katherinehhh

### 🐛 修复

- **[database]** 修复字符串操作符”包含“和”不包含“没有正确处理 `null` 值的问题 ([#5509](https://github.com/nocobase/nocobase/pull/5509)) by @2013xile
- **[client]** 修复联动规则中使用「URL参数变量」作条件判断无效 ([#5504](https://github.com/nocobase/nocobase/pull/5504)) by @katherinehhh
- **[区块：地图]** 修复高德地图多次调用 `load` 方法，导致多张地图存在时，部分地图展示报错的问题 ([#5490](https://github.com/nocobase/nocobase/pull/5490)) by @Cyx649312038

## [v1.3.41-beta](https://www.nocobase.com/cn/blog/v1.3.41-beta)

*发布时间：2024-10-27*

### 🚀 优化

- **[权限控制]** 优化权限系统中的大表查询性能 ([#5496](https://github.com/nocobase/nocobase/pull/5496)) by @chareice

## [v1.3.42-beta](https://www.nocobase.com/cn/blog/v1.3.42-beta)

*发布时间：2024-10-28*

### 🐛 修复

- **[数据表：树]** 修复解除关联子节点，节点路径没有更新的问题 ([#5522](https://github.com/nocobase/nocobase/pull/5522)) by @2013xile

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

## [v1.4.0-alpha.20241024133132](https://www.nocobase.com/cn/blog/v1.4.0-alpha.20241024133132)

*发布时间：2024-10-24*

### 🎉 新特性

- **[client]** 支持在表单、详情区块添加分组 ([#5498](https://github.com/nocobase/nocobase/pull/5498)) by @katherinehhh
- **[日历]** 日历插件添加默认视图选择、日历插件国际化配置添加月 周的配置转换 ([#5487](https://github.com/nocobase/nocobase/pull/5487)) by @Cyx649312038
- **[数据源：人大金仓（KingbaseES）]** 支持使用 Kingbase 数据库作为主、外部数据源（pg模式） by @chareice
  参考文档：[数据源 - 人大金仓（KingbaseES）](https://docs-cn.nocobase.com/handbook/data-source-kingbase)

### 🚀 优化

- **[database]** 支持插件的静态加载逻辑 ([#5466](https://github.com/nocobase/nocobase/pull/5466)) by @chareice
- **[client]** 提升表格区块的渲染性能（首次渲染时间降低约 50%） ([#5438](https://github.com/nocobase/nocobase/pull/5438)) by @zhangzhonghe
- **[移动端]** 移动端支持表单筛选区块 ([#5482](https://github.com/nocobase/nocobase/pull/5482)) by @katherinehhh
- **[备份管理器]**

  - 更新 `备份本地存储文件` 配置默认值为true by @gchust
  - 还原操作失败时会自动恢复还原前的数据库数据 by @gchust

### 🐛 修复

- **[server]** 应用安装后未触发 app 的 afterLoad 事件 ([#5506](https://github.com/nocobase/nocobase/pull/5506)) by @chenos
- **[公开表单]** 公开表单注册acl  snippet ([#5505](https://github.com/nocobase/nocobase/pull/5505)) by @katherinehhh
- **[备份管理器]** 修复当子应用数据库使用不同schema时，执行子应用还原操作会致使主应用崩溃的问题 by @gchust

## [v1.4.0-alpha.20241024151311](https://www.nocobase.com/cn/blog/v1.4.0-alpha.20241024151311)

*发布时间：2024-10-24*

### 🎉 新特性

- **[区块：操作面板]** 给操作面板区块添加编辑标题的功能 ([#5492](https://github.com/nocobase/nocobase/pull/5492)) by @Cyx649312038

---

NocoBase 是一个极易扩展的开源无代码开发平台。完全掌控，无限扩展，助力你的开发团队快速响应变化，显著降低成本，不必投入几年时间和数百万资金研发，只需要花几分钟部署 NocoBase。

**[访问 NocoBase 官网](https://www.nocobase.com/cn)**

您可以在官网申请 Demo 演示，体验站点将在 1 分钟内创建完毕自动发送到您的邮箱。

**访问 NocoBase [GitHub](https://github.com/nocobase/nocobase) 和 [Gitee](https://gitee.com/nocobase/nocobase)**

下载 NocoBase 源码并安装。支持 Docker 安装、create-nocobase-app 安装和 Git 源码安装。

**[官方文档](https://docs-cn.nocobase.com/)持续更新中**
