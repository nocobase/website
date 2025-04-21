汇总一周产品更新日志，最新发布可以[前往我们的博客查看](https://www.nocobase.com/cn/blog/tags/release-notes)。

**NocoBase 目前更新包括的版本更新包括三个分支：`main` ，`next`和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

`main` ：截止目前最稳定的版本，推荐安装此版本。

`next`：包含即将发布的新功能，经过初步测试的版本，可能存在部分已知或未知问题。主要面向测试用户,用于收集反馈和进一步优化功能。适合愿意提前体验新功能并提供反馈的测试用户。

`develop`：开发中的版本，包含最新的功能代码，可能尚未完成或存在较多不稳定因素，主要用于内部开发和快速迭代。适合对产品功能前沿发展感兴趣的技术用户，但可能存在较多问题或不完整功能，不建议在生产环境中使用。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.5.11](https://www.nocobase.com/cn/blog/v1.5.11)

*发布时间：2025-02-20*

#### 🎉 新特性

- **[工作流]** 支持扩展工作流节点分组 ([#6237](https://github.com/nocobase/nocobase/pull/6237)) by @mytharcher
  参考文档：[扩展节点分组](https://docs-cn.nocobase.com/handbook/workflow/development/api#registerinstructiongroup)

#### 🐛 修复

- **[client]**

  - 关系区块中的关联按钮弹窗在移动端的显示异常 ([#6235](https://github.com/nocobase/nocobase/pull/6235)) by @katherinehhh
  - 筛选表单字段的 Picker 与格式设置不匹配 ([#6234](https://github.com/nocobase/nocobase/pull/6234)) by @katherinehhh
  - 在禁用状态下正确展示 `<Variable.TextArea />` 组件 ([#6197](https://github.com/nocobase/nocobase/pull/6197)) by @mytharcher
  - 修复上传多个文件后文件丢失的问题 ([#6247](https://github.com/nocobase/nocobase/pull/6247)) by @mytharcher
- **[工作流]**

  - 修复工作流画布的样式细节 ([#6240](https://github.com/nocobase/nocobase/pull/6240)) by @mytharcher
  - 支持修改密码时触发用户表的工作流 ([#6248](https://github.com/nocobase/nocobase/pull/6248)) by @mytharcher

### [v1.5.12](https://www.nocobase.com/cn/blog/v1.5.12)

*发布时间：2025-02-21*

#### 🚀 优化

- **[工作流]** 在工作流画布的节点上隐藏节点 ID ([#6251](https://github.com/nocobase/nocobase/pull/6251)) by @mytharcher

#### 🐛 修复

- **[文件管理器]** 升级 AWS SDK 版本以修复 MinIO 上传问题 ([#6253](https://github.com/nocobase/nocobase/pull/6253)) by @mytharcher

### [v1.5.13](https://www.nocobase.com/cn/blog/v1.5.13)

*发布时间：2025-02-22*

#### 🐛 修复

- **[client]** 修复逐个上传文件后之前的文件消失的问题 ([#6260](https://github.com/nocobase/nocobase/pull/6260)) by @mytharcher
- **[工作流：操作前事件]** 修复响应消息节点的错误消息不显示的问题 by @mytharcher

### [v1.5.14](https://www.nocobase.com/cn/blog/v1.5.14)

*发布时间：2025-02-24*

#### 🐛 修复

- **[备份管理器]** 在"从本地备份还原"操作弹窗中，点击删除图标不会清空文件列表 by @gchust

### [v1.5.15](https://www.nocobase.com/cn/blog/v1.5.15)

*发布时间：2025-02-25*

#### 🚀 优化

- **[文件管理器]**

  - URL 字段长度增加为 1024 ([#6275](https://github.com/nocobase/nocobase/pull/6275)) by @mytharcher
  - 文件上传时生成的文件名由随机改成文件名加随机后缀。 ([#6217](https://github.com/nocobase/nocobase/pull/6217)) by @chenos
- **[区块：操作面板]** 优化移动端样式 ([#6270](https://github.com/nocobase/nocobase/pull/6270)) by @zhangzhonghe

#### 🐛 修复

- **[cli]** 优化 nocobase upgrade 命令行 ([#6280](https://github.com/nocobase/nocobase/pull/6280)) by @chenos

### [v1.5.16](https://www.nocobase.com/cn/blog/v1.5.16)

*发布时间：2025-02-26*

#### 🚀 优化

- **[备份管理器]** 允许还原备份到缺少部分插件的应用 by @gchust

#### 🐛 修复

- **[client]** 富文本字段组件无法删除清空所有内容 ([#6287](https://github.com/nocobase/nocobase/pull/6287)) by @katherinehhh
- **[文件管理器]**

  - 修复迁移脚本并补充测试用例 ([#6288](https://github.com/nocobase/nocobase/pull/6288)) by @mytharcher
  - 修复文件表 `path` 列的类型 ([#6294](https://github.com/nocobase/nocobase/pull/6294)) by @mytharcher
  - 修复迁移脚本并补充测试用例 ([#6288](https://github.com/nocobase/nocobase/pull/6288)) by @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### v1.6.0-beta.11

*发布时间：2025-02-27*

#### 🎉 新特性

- **[工作流]** 支持扩展工作节点流分组 ([#6237](https://github.com/nocobase/nocobase/pull/6237)) by @mytharcher
  参考文档：[扩展节点分组](https://docs-cn.nocobase.com/handbook/workflow/development/api#registerinstructiongroup)
- **[工作流：自定义操作事件]** 支持全局和批量数据触发自定义操作事件 ([#272](https://github.com/nocobase/pro-plugins/pull/272)) by @mytharcher

* **[client]**
  * 支持数据表预置字段扩展 ([#6183](https://github.com/nocobase/nocobase/pull/6183)) by @katherinehhh
  * 支持扩展前端筛选操作符 ([#6085](https://github.com/nocobase/nocobase/pull/6085)) by @katherinehhh
  * 支持为区块设置描述 ([#6015](https://github.com/nocobase/nocobase/pull/6015)) by @katherinehhh
  * 新增附件字段支持设置是否显示文件名 ([#5995](https://github.com/nocobase/nocobase/pull/5995)) by @katherinehhh
* **[日历]** 支持看板、日历、公式字段插件可选字段的扩展 ([#6076](https://github.com/nocobase/nocobase/pull/6076)) by @katherinehhh
* **[本地化]** 桌面端路由和移动端路由本地化 ([#6180](https://github.com/nocobase/nocobase/pull/6180)) by @2013xile
* **[区块：操作面板]** 支持配置移动端操作面板每行显示的图标数量 ([#6046](https://github.com/nocobase/nocobase/pull/6046)) by @katherinehhh
* **[WEB 客户端]** 支持为页面标签页配置权限，和新增路由管理页面 ([#5955](https://github.com/nocobase/nocobase/pull/5955)) by @zhangzhonghe
  参考文档：[路由管理器](https://docs-cn.nocobase.com/handbook/routes)
* **[用户认证]** 支持 token 安全配置 ([#5948](https://github.com/nocobase/nocobase/pull/5948)) by @sheldon66
  参考文档：[Token 安全策略](https://docs-cn.nocobase.com/handbook/token-policy)
* **[工作流：人工处理节点]** 增加人工节点待办表格的任务名称列 ([#6051](https://github.com/nocobase/nocobase/pull/6051)) by @mytharcher
* **[变量和密钥]** 支持配置动态的环境变量和密钥 ([#5966](https://github.com/nocobase/nocobase/pull/5966)) by @katherinehhh

#### 🚀 优化

- **[数据表字段：Markdown(Vditor)]** Vditor CDN 使用本地资源 ([#6229](https://github.com/nocobase/nocobase/pull/6229)) by @chenos
- **[工作流]** 在工作流画布的节点上隐藏节点 ID ([#6251](https://github.com/nocobase/nocobase/pull/6251)) by @mytharcher

* **[client]** 用户个人中心扩展改进 ([#6213](https://github.com/nocobase/nocobase/pull/6213)) by @katherinehhh
* **[client]**

  * 页面标题默认使用路由的标题 ([#6188](https://github.com/nocobase/nocobase/pull/6188)) by @zhangzhonghe
  * 图标选择器支持更多图标 ([#5996](https://github.com/nocobase/nocobase/pull/5996)) by @katherinehhh
* **[server]**

  * 将 AesEncryptor 移至内核 ([#6132](https://github.com/nocobase/nocobase/pull/6132)) by @chenos
  * 1. 添加服务器中间件以提取客户端的 IP 地址。
    2. 解决当 IP 被阻止时的无限重载问题。
    3. 在代理中添加 `X-Forwarded-For` HTTP 头，以启用本地调试的转发功能 ([#6069](https://github.com/nocobase/nocobase/pull/6069)) by @sheldon66
* **[工作流]** 将绑定工作流的按钮配置转移到插件中 ([#6143](https://github.com/nocobase/nocobase/pull/6143)) by @mytharcher
* **[数据源管理]** 将测试函数 login 修改为异步，并更新相关测试用例 ([#6181](https://github.com/nocobase/nocobase/pull/6181)) by @sheldon66

#### 🐛 修复

- **[client]**
  - 嵌入页面无法打开字段链接的弹窗 ([#6222](https://github.com/nocobase/nocobase/pull/6222)) by @gchust
  - 关闭子页面时，会触发多次区块数据请求 ([#6233](https://github.com/nocobase/nocobase/pull/6233)) by @zhangzhonghe
  - 筛选表单字段的 Picker 与格式设置不匹配 ([#6234](https://github.com/nocobase/nocobase/pull/6234)) by @katherinehhh
  - 界面上关联字段菜单缺少唯一性 key 属性 ([#6230](https://github.com/nocobase/nocobase/pull/6230)) by @gchust
  - 在禁用状态下正确展示 `<Variable.TextArea />` 组件([#6197](https://github.com/nocobase/nocobase/pull/6197)) by @mytharcher
  - 页面滚动横向条异常 ([#6232](https://github.com/nocobase/nocobase/pull/6232)) by @katherinehhh
  - 修复邮件通道配置表单中输入标签的字符编码错误。 ([#6221](https://github.com/nocobase/nocobase/pull/6221)) by @sheldon66
  - 关系区块中的关联按钮弹窗在移动端的显示异常 ([#6235](https://github.com/nocobase/nocobase/pull/6235)) by @katherinehhh
  - 修复上传多个文件后文件丢失的问题 ([#6247](https://github.com/nocobase/nocobase/pull/6247)) by @mytharcher
  - 跳过 CurrentUserProvider 中的认证错误。 ([#6252](https://github.com/nocobase/nocobase/pull/6252)) by @sheldon66
- **[工作流：循环节点]** 修复循环内部有等待节点时提前退出的问题 ([#6236](https://github.com/nocobase/nocobase/pull/6236)) by @mytharcher
- **[文件管理器]** 升级 AWS SDK 版本以修复 MinIO 上传问题 ([#6253](https://github.com/nocobase/nocobase/pull/6253)) by @mytharcher
- **[移动端]** 权限配置表格中，移动端菜单数据展示不全 ([#6219](https://github.com/nocobase/nocobase/pull/6219)) by @zhangzhonghe
- **[工作流]**
  - 修复工作流画布的样式细节 ([#6240](https://github.com/nocobase/nocobase/pull/6240)) by @mytharcher
  - 支持修改密码时触发用户表的工作流 ([#6248](https://github.com/nocobase/nocobase/pull/6248)) by @mytharcher
- **[数据可视化]** 数据源标识包含 `-` 时，筛选报错的问题 ([#6231](https://github.com/nocobase/nocobase/pull/6231)) by @2013xile
- **[工作流：操作前事件]** 修复响应消息节点的错误消息不显示的问题 ([#277](https://github.com/nocobase/pro-plugins/pull/277)) by @mytharcher

* **[client]** 修复逐个上传文件后之前的文件消失的问题 ([#6260](https://github.com/nocobase/nocobase/pull/6260)) by @mytharcher
* **[client]** 修复对多的关系字段子表单禁用允许多选时显示从已有数据选择配置项 ([#6167](https://github.com/nocobase/nocobase/pull/6167)) by @katherinehhh
* **[auth]** 更新客户端认证中间件逻辑避免 token 并发更新失败 ([#6135](https://github.com/nocobase/nocobase/pull/6135)) by @sheldon66
* **[WEB 客户端]**

  * 升级后，路由权限异常 ([#6177](https://github.com/nocobase/nocobase/pull/6177)) by @zhangzhonghe
  * 去除页面默认 tab 标题 ([#6178](https://github.com/nocobase/nocobase/pull/6178)) by @zhangzhonghe
* **[数据源管理]** 使用 loginWithJti 更新认证相关的测试用例，避免报错 ([#6175](https://github.com/nocobase/nocobase/pull/6175)) by @sheldon66
* **[多应用管理器]** 只有随主应用一同启动的子应用才随主应用升级 ([#6133](https://github.com/nocobase/nocobase/pull/6133)) by @chenos
* **[用户认证]** 更新 Token 签发表和 token 策略表的迁移规则 ([#6107](https://github.com/nocobase/nocobase/pull/6107)) by @sheldon66
* **[工作流]** 修复传入 DatePicker 组件的值参数类型 ([#6039](https://github.com/nocobase/nocobase/pull/6039)) by @mytharcher

---

NocoBase 是一个极易扩展的开源无代码开发平台。完全掌控，无限扩展，助力你的开发团队快速响应变化，显著降低成本，不必投入几年时间和数百万资金研发，只需要花几分钟部署 NocoBase。

**[访问 NocoBase 官网](https://www.nocobase.com/cn)**

您可以在官网申请 Demo 演示，体验站点将在 1 分钟内创建完毕自动发送到您的邮箱。

**访问 NocoBase [GitHub](https://github.com/nocobase/nocobase) 和 [Gitee](https://gitee.com/nocobase/nocobase)**

下载 NocoBase 源码并安装。支持 Docker 安装、create-nocobase-app 安装和 Git 源码安装。

**[官方文档](https://docs-cn.nocobase.com/)持续更新中**
