汇总一周产品更新日志，最新发布可以[前往我们的博客查看](https://www.nocobase.com/cn/blog/tags/release-notes)。

**上周我们发布了 [NocoBase 1.5.0 版本](https://www.nocobase.com/cn/blog/nocobase-1-5-0)，带来内核优化、大规模数据导入导出、邮件管理、模板打印等多项新特性。**

**NocoBase 目前更新包括的版本更新包括三个分支：`main` ，`next`和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

`main` ：截止目前最稳定的版本，推荐安装此版本。

`next`：包含即将发布的新功能，经过初步测试的版本，可能存在部分已知或未知问题。主要面向测试用户,用于收集反馈和进一步优化功能。适合愿意提前体验新功能并提供反馈的测试用户。

`develop`：开发中的版本，包含最新的功能代码，可能尚未完成或存在较多不稳定因素，主要用于内部开发和快速迭代。适合对产品功能前沿发展感兴趣的技术用户，但可能存在较多问题或不完整功能，不建议在生产环境中使用。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.5.1](https://www.nocobase.com/cn/blog/v1.5.1)

*发布时间：2025-02-06*

#### 🐛 修复

- **[client]**
  - `子表单(弹窗)`标题翻译不正确 ([#6159](https://github.com/nocobase/nocobase/pull/6159)) by @gchust
  - 子表单字段设置为“隐藏保留值”时，其默认值变量不能正常工作 ([#6165](https://github.com/nocobase/nocobase/pull/6165)) by @zhangzhonghe

### [v1.5.2](https://www.nocobase.com/cn/blog/v1.5.2)

*发布时间：2025-02-06*

#### 🚀 优化

- **[移动端]** 当没有配置权限时，隐藏移动端配置页 header ([#6171](https://github.com/nocobase/nocobase/pull/6171)) by @zhangzhonghe

#### 🐛 修复

- **[工作流：通知节点]** 确保当用户输入包含 handlebars 语法时，通知能够正确发送。 ([#6164](https://github.com/nocobase/nocobase/pull/6164)) by @sheldon66
- **[工作流：人工处理节点]** 修复人工节点使用终止按钮提交表单数据未被解析的问题 ([#6160](https://github.com/nocobase/nocobase/pull/6160)) by @mytharcher

### [v1.5.3](https://www.nocobase.com/cn/blog/v1.5.3)

*发布时间：2025-02-07*

#### 🐛 修复

- **[client]**
  - 点击 belongsToArray 字段打开的弹窗，获取的数据错误 ([#6173](https://github.com/nocobase/nocobase/pull/6173)) by @zhangzhonghe
  - 筛选表单时间字段运算符设置成“介于”，组件未变成时间范围选择器 ([#6170](https://github.com/nocobase/nocobase/pull/6170)) by @katherinehhh
  - 看板、日历区块的弹窗编辑表单未显示 "Unsaved changes" ([#6172](https://github.com/nocobase/nocobase/pull/6172)) by @katherinehhh

### [v1.5.4](https://www.nocobase.com/cn/blog/v1.5.4)

*发布时间：2025-02-10*

#### 🚀 优化

- **[工作流]** 为复制工作流操作增加加载中提示 ([#6179](https://github.com/nocobase/nocobase/pull/6179)) by @mytharcher

#### 🐛 修复

- **[client]**

  - 修复新增数据节点的字段配置报错 ([#6187](https://github.com/nocobase/nocobase/pull/6187)) by @mytharcher
  - 筛选表单中的关系字段不显示“允许多选”配置项 ([#6174](https://github.com/nocobase/nocobase/pull/6174)) by @zhangzhonghe
  - 用联动规则将字段隐藏后，字段不再显示 ([#6182](https://github.com/nocobase/nocobase/pull/6182)) by @zhangzhonghe
- **[utils]** 优化 storage/plugins 读取逻辑 ([#6186](https://github.com/nocobase/nocobase/pull/6186)) by @chenos
- **[通知：站内信]** 修复：在渠道列表 API 的消息时间戳和标题子查询中添加用户过滤条件，确保数据隔离。 ([#6185](https://github.com/nocobase/nocobase/pull/6185)) by @deepure
- **[备份管理器]** 容错模式还原时备份中的用户上传文件未复制到 uploads 文件夹 by @gchust

### [v1.5.5](https://www.nocobase.com/cn/blog/v1.5.5)

*发布时间：2025-02-11*

#### 🚀 优化

- **[通知：站内信]** 增加在站内信渠道中获取最新消息标题和最新接收时间的测试用例。 ([#6189](https://github.com/nocobase/nocobase/pull/6189)) by @sheldon66

### [v1.5.6](https://www.nocobase.com/cn/blog/v1.5.6)

*发布时间：2025-02-12*

#### 🐛 修复

- **[client]**

  - 切换页面后，区块不刷新 ([#6200](https://github.com/nocobase/nocobase/pull/6200)) by @zhangzhonghe
  - 表格行的弹窗操作新增表单区块是当前记录的子表时，区块未显示 ([#6190](https://github.com/nocobase/nocobase/pull/6190)) by @katherinehhh
  - 表格区块在无数据时高度设置不生效 ([#6192](https://github.com/nocobase/nocobase/pull/6192)) by @katherinehhh
- **[操作：自定义请求]**

  - 自定义请求按钮中“当前记录”变量值不正确 ([#6196](https://github.com/nocobase/nocobase/pull/6196)) by @zhangzhonghe
  - 自定义请求按钮兼容旧版本的变量 ([#6194](https://github.com/nocobase/nocobase/pull/6194)) by @zhangzhonghe
- **[数据可视化]** 在操作面板弹窗中添加图表区块不显示 ([#6198](https://github.com/nocobase/nocobase/pull/6198)) by @2013xile

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.6.0-beta.4](https://www.nocobase.com/cn/blog/v1.6.0-beta.4)

*发布时间：2025-02-11*

#### 🚀 优化

- **[备份管理器]** 移除 UI 上容错模式 by @gchust

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.21](https://www.nocobase.com/cn/blog/v1.6.0-alpha.21)

*发布时间：2025-02-07*

#### 🎉 新特性

- **[IP 限制]** 修复 IP 配置文件不存在时的应用错误。 by @sheldon66

#### 🐛 修复

- **[auth]** 更新客户端认证中间件逻辑避免 token 并发更新失败。 ([#6135](https://github.com/nocobase/nocobase/pull/6135)) by @sheldon66

### [v1.6.0-alpha.23](https://www.nocobase.com/cn/blog/v1.6.0-alpha.23)

*发布时间：2025-02-07*

#### 🐛 修复

- **[client]** 修复 对多的关系字段子表单禁用允许多选时显示从已有数据选择配置项 ([#6167](https://github.com/nocobase/nocobase/pull/6167)) by @katherinehhh
- **[数据源管理]** 使用 loginWithJti 更新认证相关的测试用例, 避免报错。 ([#6175](https://github.com/nocobase/nocobase/pull/6175)) by @sheldon66
- **[WEB 客户端]** 升级后，路由权限异常 ([#6177](https://github.com/nocobase/nocobase/pull/6177)) by @zhangzhonghe

### [v1.6.0-alpha.24](https://www.nocobase.com/cn/blog/v1.6.0-alpha.24)

*发布时间：2025-02-11*

#### 🎉 新特性

- **[本地化]** 桌面端路由和移动端路由本地化 ([#6180](https://github.com/nocobase/nocobase/pull/6180)) by @2013xile

#### 🚀 优化

- **[client]** 页面标题默认使用路由的标题 ([#6188](https://github.com/nocobase/nocobase/pull/6188)) by @zhangzhonghe
- **[数据源管理]** 将测试函数 login 修改为异步，并更新相关测试用例。 ([#6181](https://github.com/nocobase/nocobase/pull/6181)) by @sheldon66
- **[工作流：自定义操作事件]** 使用异步的 login 函数并更新相关的测试用例。 by @sheldon66
- **[工作流：审批]** 使用异步的 login 函数并更新相关的测试用例。 by @sheldon66

#### 🐛 修复

- **[WEB 客户端]** 去除页面默认 tab 标题 ([#6178](https://github.com/nocobase/nocobase/pull/6178)) by @zhangzhonghe

---

NocoBase 是一个极易扩展的开源无代码开发平台。完全掌控，无限扩展，助力你的开发团队快速响应变化，显著降低成本，不必投入几年时间和数百万资金研发，只需要花几分钟部署 NocoBase。

**[访问 NocoBase 官网](https://www.nocobase.com/cn)**

您可以在官网申请 Demo 演示，体验站点将在 1 分钟内创建完毕自动发送到您的邮箱。

**访问 NocoBase [GitHub](https://github.com/nocobase/nocobase) 和 [Gitee](https://gitee.com/nocobase/nocobase)**

下载 NocoBase 源码并安装。支持 Docker 安装、create-nocobase-app 安装和 Git 源码安装。

**[官方文档](https://docs-cn.nocobase.com/)持续更新中**
