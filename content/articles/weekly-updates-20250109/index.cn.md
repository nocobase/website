汇总一周产品更新日志，最新发布可以[前往我们的博客查看](https://www.nocobase.com/cn/blog/tags/release-notes)。

**NocoBase 目前更新包括的版本更新包括三个分支：`main` ，`next`和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

`main` ：截止目前最稳定的版本，推荐安装此版本。

`next`：包含即将发布的新功能，经过初步测试的版本，可能存在部分已知或未知问题。主要面向测试用户,用于收集反馈和进一步优化功能。适合愿意提前体验新功能并提供反馈的测试用户。

`develop`：开发中的版本，包含最新的功能代码，可能尚未完成或存在较多不稳定因素，主要用于内部开发和快速迭代。适合对产品功能前沿发展感兴趣的技术用户，但可能存在较多问题或不完整功能，不建议在生产环境中使用。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.4.18](https://www.nocobase.com/cn/blog/v1.4.18)

*发布时间：2025-01-06*

#### 🚀 优化

- **[工作流：测试工具包]** 修复测试表中日期字段的精度 ([#5983](https://github.com/nocobase/nocobase/pull/5983)) by @mytharcher

#### 🐛 修复

- **[client]**

  - 修复 数据区块在子页面中设置全高时出现滚动条 ([#5989](https://github.com/nocobase/nocobase/pull/5989)) by @katherinehhh
  - 修复 表格操作列按钮隐藏时没有左对齐 ([#5987](https://github.com/nocobase/nocobase/pull/5987)) by @katherinehhh
  - 修复 数据表管理 无法同时删除系统字段和普通字段 ([#5988](https://github.com/nocobase/nocobase/pull/5988)) by @katherinehhh
  - 修复「URL 查询参数」变量在移动端使用无效的问题 ([#5968](https://github.com/nocobase/nocobase/pull/5968)) by @Cyx649312038
- **[server]** 修复还原备份时可能出现的应用崩溃问题 ([#5981](https://github.com/nocobase/nocobase/pull/5981)) by @gchust
- **[移动端]** 修复移动端底部按钮被遮挡的问题 ([#5991](https://github.com/nocobase/nocobase/pull/5991)) by @zhangzhonghe
- **[数据可视化]** 修复在子页面的图表中使用“上级弹窗变量”时，刷新页面后变量失效的问题 ([#5984](https://github.com/nocobase/nocobase/pull/5984)) by @2013xile
- **[区块：看板]** 修复看板未加载数据表的父表字段 ([#5985](https://github.com/nocobase/nocobase/pull/5985)) by @katherinehhh

### [v1.4.19](https://www.nocobase.com/cn/blog/v1.4.19)

*发布时间：2025-01-06*

#### 🐛 修复

- **[client]** 修 复 筛选表单/筛选操作中日期范围选择器设置 showTime=true 时未显示时间 ([#5994](https://github.com/nocobase/nocobase/pull/5994)) by @katherinehhh

### [v1.4.20](https://www.nocobase.com/cn/blog/v1.4.20)

*发布时间：2025-01-09*

#### 🎉 新特性

- **[client]** 添加 app.getHref() 方法 ([#6019](https://github.com/nocobase/nocobase/pull/6019)) by @chenos

#### 🚀 优化

- **[client]**

  - 支持绑定工作流时进行排序 ([#6017](https://github.com/nocobase/nocobase/pull/6017)) by @mytharcher
  - 将运算引擎的说明文档链接修改为指向文档站 ([#6021](https://github.com/nocobase/nocobase/pull/6021)) by @mytharcher
  - 下拉多选组件支持 maxTagCount: 'responsive' ([#6007](https://github.com/nocobase/nocobase/pull/6007)) by @katherinehhh
  - 筛选区块中时间范围的结束时分秒默认到 23:59:59 ([#6012](https://github.com/nocobase/nocobase/pull/6012)) by @katherinehhh
- **[操作：批量编辑]** 批量编辑中提交按钮移除字段赋值和联动规则配置项 ([#6008](https://github.com/nocobase/nocobase/pull/6008)) by @katherinehhh

#### 🐛 修复

- **[client]**

  - 修复 富文本字段设置必填后，填写数据删除后，必填无效 ([#6006](https://github.com/nocobase/nocobase/pull/6006)) by @katherinehhh
  - 修复 操作列按钮隐藏时没有左对齐的问题 ([#6014](https://github.com/nocobase/nocobase/pull/6014)) by @katherinehhh
  - 修复 在 REST API 配置页面点击 Collections 标签导致 Create Collections 按钮异常的问题 ([#5992](https://github.com/nocobase/nocobase/pull/5992)) by @katherinehhh
  - 修复一对多关联的 targetKey 无法选择 NanoID 字段 ([#5999](https://github.com/nocobase/nocobase/pull/5999)) by @katherinehhh
  - 修复紧凑模式下配置按钮错位问题 ([#6001](https://github.com/nocobase/nocobase/pull/6001)) by @katherinehhh
  - 修复列表组件样式 ([#5998](https://github.com/nocobase/nocobase/pull/5998)) by @mytharcher
  - 修复客户端请求中携带的 headers 被覆盖的问题 ([#6009](https://github.com/nocobase/nocobase/pull/6009)) by @2013xile
  - 修复外键、目标数据表标识字段 和源数据表标识字段 不支持中文检索的问题 ([#5997](https://github.com/nocobase/nocobase/pull/5997)) by @katherinehhh
- **[操作：导入记录]** 修复无法导入使用不同 target key 的多对多关联的问题 ([#6024](https://github.com/nocobase/nocobase/pull/6024)) by @chareice
- **[区块：地图]** 详情区块中的地图字段，应显示地图 ([#6010](https://github.com/nocobase/nocobase/pull/6010)) by @katherinehhh
- **[嵌入 NocoBase]** Embed 的 token 与 auth 存在冲突 by @chenos

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### v1.5.0-beta.20

*发布时间：2024-12-31*

#### 🎉 新特性

- **[[导入 Pro](https://docs-cn.nocobase.com/handbook/action-import-pro)]** 增强数据导入能力，支持异步导入，支持百万行记录导入，支持重复数据识别和处理、数据更新和工作流触发等特性。
- **[[导出 Pro](https://docs-cn.nocobase.com/handbook/action-export-pro)]** 增强数据导出能力，支持异步导出，支持导出百万行记录，支持导出附件。

### [v1.5.0-beta.22](https://www.nocobase.com/cn/blog/v1.5.0-beta.22)

*发布时间：2025-01-04*

#### 🐛 修复

- **[client]** 修复在 IOS 中，空的子表格会显示一行空数据的问题 ([#5990](https://github.com/nocobase/nocobase/pull/5990)) by @zhangzhonghe

### [v1.5.0-beta.26](https://www.nocobase.com/cn/blog/v1.5.0-beta.26)

*发布时间：2025-01-08*

#### 🐛 修复

- **[client]** 修复表格行无法拖拽排序的问题 ([#6013](https://github.com/nocobase/nocobase/pull/6013)) by @zhangzhonghe

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.8](https://www.nocobase.com/cn/blog/v1.6.0-alpha.8)

*发布时间：2025-01-02*

#### 🎉 新特性

- **[工作流：人工处理节点]** 为所有类型的工作流待办添加固定的全局入口 ([#5858](https://github.com/nocobase/nocobase/pull/5858)) by @mytharcher
- **[密码策略]** 新增插件：密码策略，用于为所有用户设置密码规则和登录锁定策略 by @2013xile
  参考文档：[密码策略和用户锁定](https://docs-cn.nocobase.com/handbook/password-policy)

#### 🚀 优化

- **[client]** 给插件管理器增加“安全性”筛选关键字 ([#5977](https://github.com/nocobase/nocobase/pull/5977)) by @2013xile
- **[工作流：自定义操作事件]** 调整手动执行工作流的 API by @mytharcher

#### 🐛 修复

- **[工作流]** 修复 `WorkflowVariableWrapper` 组件中值变更失效问题 ([#5964](https://github.com/nocobase/nocobase/pull/5964)) by @mytharcher

### [v1.6.0-alpha.9](https://www.nocobase.com/cn/blog/v1.6.0-alpha.9)

*发布时间：2025-01-06*

#### 🚀 优化

- **[移动端]** 移动端表格中显示当前页码 ([#5946](https://github.com/nocobase/nocobase/pull/5946)) by @katherinehhh
- **[文件管理器]** 支持其他存储插件 ([#5930](https://github.com/nocobase/nocobase/pull/5930)) by @jiannx

### [v1.6.0-alpha.10](https://www.nocobase.com/cn/blog/v1.6.0-alpha.10)

*发布时间：2025-01-08*

#### 🎉 新特性

- **[环境变量]** 支持配置动态的环境变量和密钥 ([#5966](https://github.com/nocobase/nocobase/pull/5966)) by @katherinehhh

#### 🚀 优化

- **[client]** 图标选择器支持更多图标 ([#5996](https://github.com/nocobase/nocobase/pull/5996)) by @katherinehhh
- **[数据表字段：附件（URL）]** 过滤掉基于plugin-file-storage-s3-pro关联的文件表 by @jiannx

#### 🐛 修复

- **[数据表字段：附件（URL）]** 修复组件中已变更的 API 调用 by @mytharcher

---

NocoBase 是一个极易扩展的开源无代码开发平台。完全掌控，无限扩展，助力你的开发团队快速响应变化，显著降低成本，不必投入几年时间和数百万资金研发，只需要花几分钟部署 NocoBase。

**[访问 NocoBase 官网](https://www.nocobase.com/cn)**

您可以在官网申请 Demo 演示，体验站点将在 1 分钟内创建完毕自动发送到您的邮箱。

**访问 NocoBase [GitHub](https://github.com/nocobase/nocobase) 和 [Gitee](https://gitee.com/nocobase/nocobase)**

下载 NocoBase 源码并安装。支持 Docker 安装、create-nocobase-app 安装和 Git 源码安装。

**[官方文档](https://docs-cn.nocobase.com/)持续更新中**
