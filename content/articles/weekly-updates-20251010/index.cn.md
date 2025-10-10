汇总一周产品更新日志，最新发布可以[前往我们的博客查看](https://www.nocobase.com/cn/blog/timeline)。

**NocoBase 目前更新包括的版本更新包括三个分支：`main` ，`next`和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

`main` ：截止目前最稳定的版本，推荐安装此版本。

`next`：包含即将发布的新功能，经过初步测试的版本，可能存在部分已知或未知问题。主要面向测试用户，用于收集反馈和进一步优化功能。适合愿意提前体验新功能并提供反馈的测试用户。

`develop`：开发中的版本，包含最新的功能代码，可能尚未完成或存在较多不稳定因素，主要用于内部开发和快速迭代。适合对产品功能前沿发展感兴趣的技术用户，但可能存在较多问题或不完整功能，不建议在生产环境中使用。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.27](https://www.nocobase.com/cn/blog/v1.8.27)

*发布时间：2025-10-02*

### 🚀 优化

- **[client]** 支持预览图片时旋转图片 ([#7523](https://github.com/nocobase/nocobase/pull/7523)) by @mytharcher
- **[工作流]** 将调度相关逻辑拆分为独立的调度器 ([#7535](https://github.com/nocobase/nocobase/pull/7535)) by @mytharcher

### 🐛 修复

- **[client]** 修复左侧菜单栏子菜单不能正确高亮的问题 ([#7520](https://github.com/nocobase/nocobase/pull/7520)) by @duannyuuu
- **[工作流：循环节点]** 修复了循环节点条件未满足时仍错误继续到下一项的问题 ([#7521](https://github.com/nocobase/nocobase/pull/7521)) by @mytharcher
- **[工作流]**

  - 修复由于队列处理不当导致的工作流重复执行问题 ([#7533](https://github.com/nocobase/nocobase/pull/7533)) by @mytharcher
  - 修复绑定工作流配置中加载关系字段上下文的工作流列表条件错误的问题 ([#7516](https://github.com/nocobase/nocobase/pull/7516)) by @mytharcher
  - 修复基于日期字段的定时任务到期后不触发的问题 ([#7524](https://github.com/nocobase/nocobase/pull/7524)) by @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.11](https://www.nocobase.com/cn/blog/v1.9.0-beta.11)

*发布时间：2025-10-09*

### 🚀 优化

* **[server]** 为应用增加优雅停机的生命周期处理 ([#7536](https://github.com/nocobase/nocobase/pull/7536)) by @mytharcher
* **[工作流：循环节点]** 支持通过环境变量限制循环节点的最大循环次数 ([#7543](https://github.com/nocobase/nocobase/pull/7543)) by @mytharcher
* **[工作流]** 支持通过环境变量限制一个工作流中的最大节点数 ([#7542](https://github.com/nocobase/nocobase/pull/7542)) by @mytharcher
* **[工作流：审批]** 为自定义审批区块的详情弹窗增加打印按钮 by @mytharcher

### 🐛 修复

* **[邮件管理]** 重新授权异常 by @jiannx

### [v1.9.0-beta.10](https://www.nocobase.com/cn/blog/v1.9.0-beta.10)

*发布时间：2025-10-09*

### 🐛 修复

* **[client]** 修复 AssignedField 组件未实现动态属性导致的新增、更新节点上传文件错误问题 ([#7556](https://github.com/nocobase/nocobase/pull/7556)) by @mytharcher
* **[公开表单]** 修复公开表单中的文件字段上传规则不正确的问题 ([#7553](https://github.com/nocobase/nocobase/pull/7553)) by @mytharcher

### [v1.9.0-beta.9](https://www.nocobase.com/cn/blog/v1.9.0-beta.9)

*发布时间：2025-09-30*

### 🎉 新特性

* **[client]**
  * 表格区块支持添加“列设置”按钮，可以配置表格列的顺序和显隐 ([#7204](https://github.com/nocobase/nocobase/pull/7204)) by @kerwin612
  * 支持字段验证规则 ([#7297](https://github.com/nocobase/nocobase/pull/7297)) by @aaaaaajie
* **[数据源：主数据库]**
  * 主数据源支持读表功能 ([#7238](https://github.com/nocobase/nocobase/pull/7238)) by @aaaaaajie
  * 支持主数据源显示插件定义的表。 ([#7187](https://github.com/nocobase/nocobase/pull/7187)) by @aaaaaajie

### 🚀 优化

* **[client]** 支持预览图片时旋转图片 ([#7523](https://github.com/nocobase/nocobase/pull/7523)) by @mytharcher
* **[snowflake-id]** 将主键为自增 ID 且不具备唯一标识的系统表的 ID 修改为 53 位的类雪花算法 ID ([#7465](https://github.com/nocobase/nocobase/pull/7465)) by @2013xile
* **[工作流]** 将调度相关逻辑拆分为独立的调度器 ([#7535](https://github.com/nocobase/nocobase/pull/7535)) by @mytharcher
* **[RabbitMQ 消息队列适配器]** 优化 RabbitMQ 连接处理和消息处理逻辑 by @sdp-ncd
* **[邮件管理]**
  * 支持分批同步 by @jiannx
  * 富文本支持图片大小调整 by @jiannx

### 🐛 修复

* **[client]**
  * 修复“列设置”按钮会加载弹窗中的表格列的问题 ([#7385](https://github.com/nocobase/nocobase/pull/7385)) by @kerwin612
  * 修复左侧菜单栏子菜单不能正确高亮的问题 ([#7520](https://github.com/nocobase/nocobase/pull/7520)) by @duannyuuu
* **[工作流]**
  * 修复由于队列处理不当导致的工作流重复执行问题 ([#7533](https://github.com/nocobase/nocobase/pull/7533)) by @mytharcher
  * 修复绑定工作流配置中加载关系字段上下文的工作流列表条件错误的问题 ([#7516](https://github.com/nocobase/nocobase/pull/7516)) by @mytharcher
  * 修复基于日期字段的定时任务到期后不触发的问题 ([#7524](https://github.com/nocobase/nocobase/pull/7524)) by @mytharcher
* **[工作流：循环节点]** 修复了循环节点条件未满足时仍错误继续到下一项的问题 ([#7521](https://github.com/nocobase/nocobase/pull/7521)) by @mytharcher
* **[邮件管理]**
  * 邮件主题乱码 by @jiannx
  * 主题乱码 by @jiannx
  * 富文本支持软换行 by @jiannx
  * 支持多人相同邮件 by @jiannx
  * 邮件消息表格性能优化 by @jiannx
  * 选择行后，支持设置已读未读 by @jiannx
  * 添加rawId字段，用于性能优化 by @jiannx
  * html中ref属性导致渲染异常 by @jiannx
  * 子邮件内容无法被筛选 by @jiannx
  * 支持重新同步 by @jiannx
  * 手动区分转发和回复 by @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.5](https://www.nocobase.com/cn/blog/v2.0.0-alpha.5)

*发布时间：2025-10-10*

### 🐛 修复

- **[server]** 主键迁移脚本报错 ([#7563](https://github.com/nocobase/nocobase/pull/7563)) by @2013xile
- **[client]**

  - 修复提交表单后不刷新数据的问题 ([#7560](https://github.com/nocobase/nocobase/pull/7560)) by @zhangzhonghe
  - 修复 AssignedField 组件未实现动态属性导致的新增、更新节点上传文件错误问题 ([#7556](https://github.com/nocobase/nocobase/pull/7556)) by @mytharcher
- **[日历]** 修复日历区块数据表设置唯一标识后详情数据查询错误问题 ([#7562](https://github.com/nocobase/nocobase/pull/7562)) by @katherinehhh
- **[区块：模板（已废弃）]** 修复了打开或关闭弹窗时会触发多余区块模板请求的问题 ([#7561](https://github.com/nocobase/nocobase/pull/7561)) by @gchust
- **[公开表单]** 修复公开表单中的文件字段上传规则不正确的问题 ([#7553](https://github.com/nocobase/nocobase/pull/7553)) by @mytharcher
- **[多应用管理器（已废弃）]** 修复多应用数据迁移前端口校验 ([#7540](https://github.com/nocobase/nocobase/pull/7540)) by @jiannx

### [v2.0.0-alpha.4](https://www.nocobase.com/cn/blog/v2.0.0-alpha.4)

*发布时间：2025-10-05*

### 🚀 优化

* **[flow-engine]** 优化拖拽功能 ([#7526](https://github.com/nocobase/nocobase/pull/7526)) by @zhangzhonghe
* **[工作流：循环节点]** 支持通过环境变量限制循环节点的最大循环次数 ([#7543](https://github.com/nocobase/nocobase/pull/7543)) by @mytharcher
* **[工作流]** 支持通过环境变量限制一个工作流中的最大节点数 ([#7542](https://github.com/nocobase/nocobase/pull/7542)) by @mytharcher
* **[工作流：审批]** 为自定义审批区块的详情弹窗增加打印按钮 by @mytharcher

### 🐛 修复

* **[client]** 修复了代码编辑器中 “运行” 功能无法正常工作的问题，现在用户可以正确执行代码。 ([#7547](https://github.com/nocobase/nocobase/pull/7547)) by @gchust
* **[AI 员工]** 修复 AI 员工权限配置页报错 ([#7548](https://github.com/nocobase/nocobase/pull/7548)) by @2013xile
* **[工作流]** 修复配置绑定工作流按钮中添加工作流点击后卡死的问题 ([#7541](https://github.com/nocobase/nocobase/pull/7541)) by @mytharcher
* **[邮件管理]** 重新授权异常 by @jiannx

### [v1.9.0-alpha.17](https://www.nocobase.com/cn/blog/v1.9.0-alpha.17)

*发布时间：2025-09-30*

### 🚀 优化

* **[工作流]** 将调度相关逻辑拆分为独立的调度器 ([#7535](https://github.com/nocobase/nocobase/pull/7535)) by @mytharcher

### 🐛 修复

* **[工作流]**
  * 修复由于队列处理不当导致的工作流重复执行问题 ([#7533](https://github.com/nocobase/nocobase/pull/7533)) by @mytharcher
  * 修复基于日期字段的定时任务到期后不触发的问题 ([#7524](https://github.com/nocobase/nocobase/pull/7524)) by @mytharcher

### [v2.0.0-alpha.1](https://www.nocobase.com/cn/blog/v2.0.0-alpha.1)

*发布时间：2025-09-30*

### 🚀 优化

- **[server]** 为应用增加优雅停机的生命周期处理 ([#7536](https://github.com/nocobase/nocobase/pull/7536)) by @mytharcher
