汇总一周产品更新日志，最新发布可以[前往我们的博客查看](https://www.nocobase.com/cn/blog/tags/release-notes)。

**本周我们发布了 [NocoBase 1.4.0 版本](https://www.nocobase.com/cn/blog/nocobase-1-4-0)，带来简化插件管理、增强通知功能、用户数据同步、备份管理器等多项新特性。**

**NocoBase 目前更新包括的版本更新包括三个分支：`main` ，`next`和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

`main` ：截止目前最稳定的版本，推荐安装此版本。

`next`：包含即将发布的新功能，经过初步测试的版本，可能存在部分已知或未知问题。主要面向测试用户,用于收集反馈和进一步优化功能。适合愿意提前体验新功能并提供反馈的测试用户。

`develop`：开发中的版本，包含最新的功能代码，可能尚未完成或存在较多不稳定因素，主要用于内部开发和快速迭代。适合对产品功能前沿发展感兴趣的技术用户，但可能存在较多问题或不完整功能，不建议在生产环境中使用。

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

## [v1.3.53](https://www.nocobase.com/cn/blog/v1.3.53)

*发布时间：2024-11-28*

### 🚀 优化

- **[client]**

  - 导出必要的 hook ([#5702](https://github.com/nocobase/nocobase/pull/5702)) by @mytharcher
  - 中国行政区字段插件从内置插件中移除 ([#5693](https://github.com/nocobase/nocobase/pull/5693)) by @katherinehhh
- **[工作流：操作前事件]** 移除拦截器的警告日志 by @mytharcher

### 🐛 修复

- **[cli]** Daemon 模式不删除 sock 文件 ([#5750](https://github.com/nocobase/nocobase/pull/5750)) by @chenos
- **[client]**

  - 修复多个关系字段关联同一张表时，设置关系表字段时互相影响的问题 ([#5744](https://github.com/nocobase/nocobase/pull/5744)) by @katherinehhh
  - 修复 子表格勾选框内容未对齐问题 ([#5735](https://github.com/nocobase/nocobase/pull/5735)) by @katherinehhh
  - 修复 数据选择器未显示外键字段 ([#5734](https://github.com/nocobase/nocobase/pull/5734)) by @katherinehhh
  - 改进 子表格中验证信息的反馈显示方式 ([#5700](https://github.com/nocobase/nocobase/pull/5700)) by @katherinehhh
- **[server]** 按依赖顺序加载插件 ([#5706](https://github.com/nocobase/nocobase/pull/5706)) by @chenos
- **[区块：地图]** 修复 Google Map 切换缩放等级时报错的问题 ([#5722](https://github.com/nocobase/nocobase/pull/5722)) by @katherinehhh
- **[数据源：主数据库]** 修复视图 Collection 字段获取原始字段名的问题 ([#5729](https://github.com/nocobase/nocobase/pull/5729)) by @chareice
- **[文件管理器]** 当 Endpoint 不为空时，forcePathStyle 为 true ([#5712](https://github.com/nocobase/nocobase/pull/5712)) by @chenos

## [v1.3.55](https://www.nocobase.com/cn/blog/v1.3.55)

*发布时间：2024-12-03*

### 🚀 优化

- **[client]** 区块初始化器使用更匹配类型含义的图标 ([#5757](https://github.com/nocobase/nocobase/pull/5757)) by @mytharcher

### 🐛 修复

- **[client]**

  - 修复图标变更后导致的 E2E 用例执行失败 ([#5768](https://github.com/nocobase/nocobase/pull/5768)) by @mytharcher
  - 修复 select 数据为空时应显示空白 ([#5762](https://github.com/nocobase/nocobase/pull/5762)) by @katherinehhh
- **[database]** 修复带外键更新关系字段的问题 ([#5754](https://github.com/nocobase/nocobase/pull/5754)) by @chareice
- **[数据源管理]** 修复 source key 显示不正确 ([#5771](https://github.com/nocobase/nocobase/pull/5771)) by @katherinehhh
- **[工作流：自定义操作事件]**

  - 允许所有角色都可触发外部数据源数据表上的自定义操作事件 by @mytharcher
  - 修复自定义操作事件默认数据源 by @mytharcher
  - 修复自定义操作事件数据源不匹配的错误 by @mytharcher
  - 修复自定义操作事件在关系区块无法触发的问题 by @mytharcher

## [v1.4.1](https://www.nocobase.com/cn/blog/v1.4.1)

*发布时间：2024-12-04*

### 🚀 优化

- **[cli]** 优化 pkg 命令 ([#5785](https://github.com/nocobase/nocobase/pull/5785)) by @chenos

### 🐛 修复

- **[移动端]** 修复 移动端筛选操作缺少日期输入框 ([#5786](https://github.com/nocobase/nocobase/pull/5786)) by @katherinehhh

## [v1.4.2](https://www.nocobase.com/cn/blog/v1.4.2)

*发布时间：2024-12-04*

### 🐛 修复

- **[工作流]** 修复异步工作流在工作流列表中未展示字段标识 ([#5787](https://github.com/nocobase/nocobase/pull/5787)) by @mytharcher

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

## [v1.4.0-beta.9](https://www.nocobase.com/cn/blog/v1.4.0-beta.9)

*发布时间：2024-11-28*

### 🚀 优化

- **[移动端]** 移动端紧凑主题下样式优化 ([#5723](https://github.com/nocobase/nocobase/pull/5723)) by @katherinehhh

### 🐛 修复

- **[数据可视化]** 修复从 `context` 获取时区不正确的问题 ([#5743](https://github.com/nocobase/nocobase/pull/5743)) by @2013xile

## [v1.4.0-beta.10](https://www.nocobase.com/cn/blog/v1.4.0-beta.10)

*发布时间：2024-11-28*

### 🚀 优化

- **[client]** 支持变量组件在设置 `nullable` 为 `false` 时使用既有的自定义组件 ([#5746](https://github.com/nocobase/nocobase/pull/5746)) by @mytharcher

### 🐛 修复

- **[client]** 修复表格在中等尺寸时列数较少仍出现滚动条的问题 ([#5745](https://github.com/nocobase/nocobase/pull/5745)) by @katherinehhh

## [v1.4.0-beta.11](https://www.nocobase.com/cn/blog/v1.4.0-beta.11)

*发布时间：2024-12-02*

### 🚀 优化

- **[client]** 支持在公开表单中使用附件文件字段 ([#5749](https://github.com/nocobase/nocobase/pull/5749)) by @katherinehhh
- **[cli]** 添加或移除插件时重启进程 ([#5761](https://github.com/nocobase/nocobase/pull/5761)) by @chenos
- **[日历]** 支持在日历区块上点击日期为当前日期快速创建行程 ([#5733](https://github.com/nocobase/nocobase/pull/5733)) by @katherinehhh

### 🐛 修复

- **[client]** 修复水平布局时子表格中字段宽度异常 ([#5763](https://github.com/nocobase/nocobase/pull/5763)) by @katherinehhh

## [v1.5.0-beta.1](https://www.nocobase.com/cn/blog/v1.5.0-beta.1)

*发布时间：2024-12-03*

### 🐛 修复

- **[client]** 修复 数据选择器在跨页选择数据时无法显示已选项 ([#5770](https://github.com/nocobase/nocobase/pull/5770)) by @katherinehhh
- **[移动端]** 修复 移动端筛选操作缺少日期输入框 ([#5779](https://github.com/nocobase/nocobase/pull/5779)) by @katherinehhh
- **[工作流]** 修复节点测试弹窗中变量显示错误的问题 ([#5766](https://github.com/nocobase/nocobase/pull/5766)) by @mytharcher

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

## [v1.6.0-alpha.2](https://www.nocobase.com/cn/blog/v1.6.0-alpha.2)

*发布时间：2024-12-03*

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

---

NocoBase 是一个极易扩展的开源无代码开发平台。完全掌控，无限扩展，助力你的开发团队快速响应变化，显著降低成本，不必投入几年时间和数百万资金研发，只需要花几分钟部署 NocoBase。

**[访问 NocoBase 官网](https://www.nocobase.com/cn)**

您可以在官网申请 Demo 演示，体验站点将在 1 分钟内创建完毕自动发送到您的邮箱。

**访问 NocoBase [GitHub](https://github.com/nocobase/nocobase) 和 [Gitee](https://gitee.com/nocobase/nocobase)**

下载 NocoBase 源码并安装。支持 Docker 安装、create-nocobase-app 安装和 Git 源码安装。

**[官方文档](https://docs-cn.nocobase.com/)持续更新中**
