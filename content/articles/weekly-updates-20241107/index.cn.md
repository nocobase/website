汇总一周产品更新日志，最新发布可以[前往我们的博客查看](https://www.nocobase.com/cn/blog/tags/release-notes)。

NocoBase 目前更新包括两个分支：`main` 和 `next` 。

`main` ：截止目前最稳定的版本，推荐安装此版本。

`next`：内测版，包含一些未发布的新特性，这个版本可能还不完全稳定，适用于开发者或测试人员，用于提前体验新功能或进行兼容性测试。

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

## [v1.3.43-beta](https://www.nocobase.com/cn/blog/v1.3.43-beta)

*发布时间：2024-11-05*

### 🚀 优化

- **[client]** 数字精确度支持配置 8 位数 ([#5552](https://github.com/nocobase/nocobase/pull/5552)) by @chenos

### 🐛 修复

- **[client]** 修复联动样式在表单里不更新。 ([#5539](https://github.com/nocobase/nocobase/pull/5539)) by @sheldon66
- **[认证：API 密钥]** 修复 API keys 设置页面的 URL 路径 ([#5562](https://github.com/nocobase/nocobase/pull/5562)) by @2013xile
- **[移动端]** 修复预览图片被页面覆盖的问题 ([#5535](https://github.com/nocobase/nocobase/pull/5535)) by @zhangzhonghe
- **[区块：地图]** 子详情中地图字段，渲染地图不正确，应该显示坐标字符/详情区块，没有值的字段，会显示上一条数据的值 ([#5526](https://github.com/nocobase/nocobase/pull/5526)) by @katherinehhh
- **[数据表：树]** 修复更新路径表时的报错 ([#5551](https://github.com/nocobase/nocobase/pull/5551)) by @2013xile

## [v1.3.44-beta](https://www.nocobase.com/cn/blog/v1.3.44-beta)

*发布时间：2024-11-05*

### 🎉 新特性

- **[认证：OIDC]** 添加「启用 RP-initiated logout」选项 by @2013xile

### 🐛 修复

- **[client]** 修复 关系字段下拉选项中设置单选字段为标题字段时筛选不生效的问题 ([#5581](https://github.com/nocobase/nocobase/pull/5581)) by @katherinehhh

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

## [v1.4.0-alpha.20241031134640](https://www.nocobase.com/cn/blog/v1.4.0-alpha.20241031134640)

*发布时间：2024-10-31*

### 🎉 新特性

- **[企业微信]** 新增企业微信通知渠道 by @chenzhizdt

### 🚀 优化

- **[client]** 字段标题清空时恢复为字段标题默认值 ([#5549](https://github.com/nocobase/nocobase/pull/5549)) by @katherinehhh
- **[通知管理]**

  - 增加 UserSelect 和 UserAddition 组件，方便在开发通知渠道的时候使用 ([#5553](https://github.com/nocobase/nocobase/pull/5553)) by @2013xile
  - 增加通知插件的渠道类型注册中心接口 ([#5531](https://github.com/nocobase/nocobase/pull/5531)) by @mytharcher
  - 调整通知插件渠道类型注册中心的接口名称 ([#5532](https://github.com/nocobase/nocobase/pull/5532)) by @mytharcher
  - 增加通知插件获取所有已注册通知类型的接口 ([#5529](https://github.com/nocobase/nocobase/pull/5529)) by @mytharcher
- **[通知：站内信]** 优化站内信界面并增加了一些日志 ([#5550](https://github.com/nocobase/nocobase/pull/5550)) by @sheldon66

### 🐛 修复

- **[database]**

  - 修复 collection 设置 filter target key 不正确的问题 ([#5558](https://github.com/nocobase/nocobase/pull/5558)) by @chareice
  - 修复联合主键中 sequelize primaryKeyField 属性读取错误的问题 ([#5556](https://github.com/nocobase/nocobase/pull/5556)) by @chareice
- **[client]**

  - 修复表格区块中的骨架屏组件不消失的问题 ([#5548](https://github.com/nocobase/nocobase/pull/5548)) by @zhangzhonghe
  - 修复子表格一次删除了多条数据，超长文本省略设置新添数据不生效等问题 ([#5523](https://github.com/nocobase/nocobase/pull/5523)) by @katherinehhh
- **[数据源管理]** 修复无法移除失败状态的数据源的问题 ([#5554](https://github.com/nocobase/nocobase/pull/5554)) by @chareice
- **[通知：电子邮件]**

  - 修复基于用户 ID 发送 email 通知的查询 ([#5533](https://github.com/nocobase/nocobase/pull/5533)) by @mytharcher
  - 修复基于用户 ID 发送邮寄通知时缺少标题的问题 ([#5534](https://github.com/nocobase/nocobase/pull/5534)) by @mytharcher
  - 修复 Email 通知渠道动态表单联动规则路径问题 ([#5527](https://github.com/nocobase/nocobase/pull/5527)) by @mytharcher
- **[数据表字段：多对多 (数组)]** 修复多对多（数组）字段的选择组件只有一个选项的问题 ([#5544](https://github.com/nocobase/nocobase/pull/5544)) by @2013xile
- **[通知管理]** 修复通知渠道类型异常时的页面崩溃问题 ([#5528](https://github.com/nocobase/nocobase/pull/5528)) by @mytharcher
- **[工作流：SQL 节点]** 修复sse导致“waitForLoadState(‘networkidle’)”超时 ([#5524](https://github.com/nocobase/nocobase/pull/5524)) by @hongboji
- **[字段组件：掩码]** 修复只读状态掩码无法点击显示原文的问题 by @gchust
- **[工作流：自定义操作事件]** 修复sse导致“waitForLoadState(‘networkidle’)”超时 by @hongboji
- **[企业微信]** 修复从企业微信工作台进入应用响应 404 not found 的问题 by @chenzhizdt

## [v1.4.0-alpha.20241104151643](https://www.nocobase.com/cn/blog/v1.4.0-alpha.20241104151643)

*发布时间：2024-11-04*

### 🎉 新特性

- **[client]**
  - [表格] 配置操作中增加‘打开弹窗’按钮 ([#5580](https://github.com/nocobase/nocobase/pull/5580)) by @bignof
  - 「配置字段」支持筛选字段 ([#5471](https://github.com/nocobase/nocobase/pull/5471)) by @katherinehhh

### 🚀 优化

- **[client]** Layout 支持更多参数配置(labelAlign, labelWidth, labelWrap) ([#5521](https://github.com/nocobase/nocobase/pull/5521)) by @katherinehhh
- **[多应用管理器]** 子应用异步启动 ([#5571](https://github.com/nocobase/nocobase/pull/5571)) by @chenos
- **[数据表：树]** 优化含 schema 属性的 collection 的加载方法 ([#5541](https://github.com/nocobase/nocobase/pull/5541)) by @chareice

### 🐛 修复

- **[client]**
  - 搜索字段应以翻译后文本来搜索 ([#5572](https://github.com/nocobase/nocobase/pull/5572)) by @katherinehhh
  - 子表格数据删除数据后添加数据异常 ([#5566](https://github.com/nocobase/nocobase/pull/5566)) by @katherinehhh

## [v1.4.0-alpha.20241105053324](https://www.nocobase.com/cn/blog/v1.4.0-alpha.20241105053324)

*发布时间：2024-11-05*

### 🐛 修复

- **[client]** 移除添加区块中的搜索框 ([#5577](https://github.com/nocobase/nocobase/pull/5577)) by @katherinehhh

## [v1.4.0-alpha.20241105230315](https://www.nocobase.com/cn/blog/v1.4.0-alpha.20241105230315)

*发布时间：2024-11-06*

### 🐛 修复

- **[client]** 添加新数据源后配置新数据字段页面报错 ([#5576](https://github.com/nocobase/nocobase/pull/5576)) by @katherinehhh

## [v1.4.0-alpha.1](https://www.nocobase.com/cn/blog/v1.4.0-alpha.1)

*发布时间：2024-11-06*

### 🎉 新特性

- **[utils]** 支持在通知模板中使用 Handlebars 模板引擎 ([#5559](https://github.com/nocobase/nocobase/pull/5559)) by @mytharcher
- **[client]** 表格区块支持「Size」 设置 ([#5563](https://github.com/nocobase/nocobase/pull/5563)) by @katherinehhh
- **[通知：站内信]** 移动端支持站内信 ([#5560](https://github.com/nocobase/nocobase/pull/5560)) by @sheldon66

### 🚀 优化

- **[通知管理]** 通知日志增加接收人信息 ([#5561](https://github.com/nocobase/nocobase/pull/5561)) by @sheldon66

### 🐛 修复

- **[client]** 修复在看板中打开弹窗时报错的问题 ([#5592](https://github.com/nocobase/nocobase/pull/5592)) by @zhangzhonghe
- **[权限控制]** 修复联合主键下 ACL 中间件问题 ([#5598](https://github.com/nocobase/nocobase/pull/5598)) by @chareice

---

NocoBase 是一个极易扩展的开源无代码开发平台。完全掌控，无限扩展，助力你的开发团队快速响应变化，显著降低成本，不必投入几年时间和数百万资金研发，只需要花几分钟部署 NocoBase。

**[访问 NocoBase 官网](https://www.nocobase.com/cn)**

您可以在官网申请 Demo 演示，体验站点将在 1 分钟内创建完毕自动发送到您的邮箱。

**访问 NocoBase [GitHub](https://github.com/nocobase/nocobase) 和 [Gitee](https://gitee.com/nocobase/nocobase)**

下载 NocoBase 源码并安装。支持 Docker 安装、create-nocobase-app 安装和 Git 源码安装。

**[官方文档](https://docs-cn.nocobase.com/)持续更新中**
