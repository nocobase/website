汇总一周产品更新日志，最新发布可以[前往我们的博客查看](https://www.nocobase.com/cn/blog/tags/release-notes)。

**NocoBase 目前更新包括的版本更新包括三个分支：`main` ，`next`和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

`main` ：截止目前最稳定的版本，推荐安装此版本。

`next`：包含即将发布的新功能，经过初步测试的版本，可能存在部分已知或未知问题。主要面向测试用户,用于收集反馈和进一步优化功能。适合愿意提前体验新功能并提供反馈的测试用户。

`develop`：开发中的版本，包含最新的功能代码，可能尚未完成或存在较多不稳定因素，主要用于内部开发和快速迭代。适合对产品功能前沿发展感兴趣的技术用户，但可能存在较多问题或不完整功能，不建议在生产环境中使用。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.4.25](https://www.nocobase.com/cn/blog/v1.4.25)

*发布时间：2025-01-16*

#### 🚀 优化

- **[client]** 改进文件存储扩展 ([#6071](https://github.com/nocobase/nocobase/pull/6071)) by @chenos
- **[工作流]** 修复定时任务重复配置字段组件的问题 ([#6067](https://github.com/nocobase/nocobase/pull/6067)) by @mytharcher

#### 🐛 修复

- **[移动端]** 修复移动端底部按钮被遮挡的问题 ([#6068](https://github.com/nocobase/nocobase/pull/6068)) by @zhangzhonghe
- **[工作流：自定义操作事件]** 修复自定义操作事件中对数据的查询请求 by @mytharcher
- **[备份管理器]** 修复 collection-fdw 插件未开启时可能出现的备份报错 by @gchust
- **[部门]** 修复部门表无法触发自定义工作流的问题 by @mytharcher

### [v1.4.26](https://www.nocobase.com/cn/blog/v1.4.26)

*发布时间：2025-01-16*

#### 🚀 优化

- **[client]** 支持给 SQL 数据表添加描述 ([#6081](https://github.com/nocobase/nocobase/pull/6081)) by @2013xile
- **[resourcer]** 支持 API 请求中传入空对象作为 values 的值 ([#6070](https://github.com/nocobase/nocobase/pull/6070)) by @mytharcher

#### 🐛 修复

- **[本地化]** 译文为空时，点击“删除译文按钮”不请求接口 ([#6078](https://github.com/nocobase/nocobase/pull/6078)) by @2013xile

### [v1.4.27](https://www.nocobase.com/cn/blog/v1.4.27)

*发布时间：2025-01-18*

#### 🐛 修复

- **[client]** 修复在嵌入页面中，弹窗中的区块数据为空的问题 ([#6086](https://github.com/nocobase/nocobase/pull/6086)) by @zhangzhonghe
- **[工作流]** 修复在准备阶段的调度未能执行的问题 ([#6087](https://github.com/nocobase/nocobase/pull/6087)) by @mytharcher

### [v1.4.28](https://www.nocobase.com/cn/blog/v1.4.28)

*发布时间：2025-01-21*

#### 🐛 修复

- **[client]** 关系字段设置的默认值没有更新 ([#6103](https://github.com/nocobase/nocobase/pull/6103)) by @chenos
- **[操作：批量编辑]** 移除批量编辑表单中的表单数据模板配置项 ([#6098](https://github.com/nocobase/nocobase/pull/6098)) by @katherinehhh
- **[验证码]** 修复提供商 ID 可以被修改的问题 ([#6097](https://github.com/nocobase/nocobase/pull/6097)) by @mytharcher

### [v1.4.29](https://www.nocobase.com/cn/blog/v1.4.29)

*发布时间：2025-01-21*

#### 🎉 新特性

- **[区块：操作面板]** 支持配置移动端操作面板每行显示的图标数量 ([#6106](https://github.com/nocobase/nocobase/pull/6106)) by @katherinehhh

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.5.0-beta.29](https://www.nocobase.com/cn/blog/v1.5.0-beta.29)

*发布时间：2025-01-16*

#### 🚀 优化

- **[备份管理器]** 优化还原失败时的错误消息 by @gchust

### [v1.5.0-beta.30](https://www.nocobase.com/cn/blog/v1.5.0-beta.30)

*发布时间：2025-01-16*

#### 🐛 修复

- **[client]** 修复 Easy-reading 模式的关系字段默认值不生效的问题 ([#6066](https://github.com/nocobase/nocobase/pull/6066)) by @zhangzhonghe

### [v1.5.0-beta.31](https://www.nocobase.com/cn/blog/v1.5.0-beta.31)

*发布时间：2025-01-17*

#### 🐛 修复

- **[用户数据同步]** 修复同步任务列表中“重试”按钮不显示的问题 ([#6079](https://github.com/nocobase/nocobase/pull/6079)) by @2013xile

### [v1.5.0-beta.32](https://www.nocobase.com/cn/blog/v1.5.0-beta.32)

*发布时间：2025-01-17*

#### 🚀 优化

- **[工作流]** 将部分 API 调整为更合理的名称 ([#6082](https://github.com/nocobase/nocobase/pull/6082)) by @mytharcher

### [v1.5.0-beta.33](https://www.nocobase.com/cn/blog/v1.5.0-beta.33)

*发布时间：2025-01-21*

#### 🎉 新特性

- **[工作流]** 对工作流增加堆栈限制的配置项 ([#6077](https://github.com/nocobase/nocobase/pull/6077)) by @citlalinda

#### 🚀 优化

- **[工作流：循环节点]** 修复工作流画布的样式问题 ([#6095](https://github.com/nocobase/nocobase/pull/6095)) by @mytharcher
- **[文件管理器]** 支持其他存储插件 ([#6096](https://github.com/nocobase/nocobase/pull/6096)) by @jiannx
  参考文档：[文件存储：S3 (Pro)](https://docs-cn.nocobase.com/handbook/file-manager/storage/s3-pro)
- **[工作流：测试工具包]** 调整工作流画布样式，使内容更紧凑 ([#6088](https://github.com/nocobase/nocobase/pull/6088)) by @mytharcher
- **[工作流：JSON 解析节点]** 为节点增加类型图标 by @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.15](https://www.nocobase.com/cn/blog/v1.6.0-alpha.15)

*发布时间：2025-01-19*

#### 🎉 新特性

- **[client]** 支持为区块设置描述 ([#6015](https://github.com/nocobase/nocobase/pull/6015)) by @katherinehhh
- **[用户认证]** 支持token安全配置。 ([#5948](https://github.com/nocobase/nocobase/pull/5948)) by @sheldon66
  参考文档：[Token 安全策略](https://docs-cn.nocobase.com/handbook/token-policy)
- **[工作流：人工处理节点]** 增加人工节点待办表格的任务名称列 ([#6051](https://github.com/nocobase/nocobase/pull/6051)) by @mytharcher

#### 🚀 优化

- **[工作流：自定义操作事件]** 调整手动执行工作流的 API by @mytharcher

### [v1.6.0-alpha.16](https://www.nocobase.com/cn/blog/v1.6.0-alpha.16)

*发布时间：2025-01-19*

#### 🎉 新特性

- **[区块：操作面板]** 支持配置移动端操作面板每行显示的图标数量 ([#6046](https://github.com/nocobase/nocobase/pull/6046)) by @katherinehhh

---

NocoBase 是一个极易扩展的开源无代码开发平台。完全掌控，无限扩展，助力你的开发团队快速响应变化，显著降低成本，不必投入几年时间和数百万资金研发，只需要花几分钟部署 NocoBase。

**[访问 NocoBase 官网](https://www.nocobase.com/cn)**

您可以在官网申请 Demo 演示，体验站点将在 1 分钟内创建完毕自动发送到您的邮箱。

**访问 NocoBase [GitHub](https://github.com/nocobase/nocobase) 和 [Gitee](https://gitee.com/nocobase/nocobase)**

下载 NocoBase 源码并安装。支持 Docker 安装、create-nocobase-app 安装和 Git 源码安装。

**[官方文档](https://docs-cn.nocobase.com/)持续更新中**
