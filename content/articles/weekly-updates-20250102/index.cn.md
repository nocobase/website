汇总一周产品更新日志，最新发布可以[前往我们的博客查看](https://www.nocobase.com/cn/blog/tags/release-notes)。

**NocoBase 目前更新包括的版本更新包括三个分支：`main` ，`next`和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

`main` ：截止目前最稳定的版本，推荐安装此版本。

`next`：包含即将发布的新功能，经过初步测试的版本，可能存在部分已知或未知问题。主要面向测试用户,用于收集反馈和进一步优化功能。适合愿意提前体验新功能并提供反馈的测试用户。

`develop`：开发中的版本，包含最新的功能代码，可能尚未完成或存在较多不稳定因素，主要用于内部开发和快速迭代。适合对产品功能前沿发展感兴趣的技术用户，但可能存在较多问题或不完整功能，不建议在生产环境中使用。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.4.16](https://www.nocobase.com/cn/blog/v1.4.16)

*发布时间：2024-12-26*

#### 🐛 修复

- **[client]** 修复时间戳字段精度转换问题 ([#5931](https://github.com/nocobase/nocobase/pull/5931)) by @chenos
- **[操作：复制记录]** 修复详情和表单区块中，一对一关系字段未显示配置的关系表字段 ([#5921](https://github.com/nocobase/nocobase/pull/5921)) by @katherinehhh
- **[备份管理器]** 修复 mysqldump 版本小于8时备份失败的问题 by @gchust

### [v1.4.17](https://www.nocobase.com/cn/blog/v1.4.17)

*发布时间：2024-12-31*

#### 🎉 新特性

- **[client]** 支持多对多（数组）字段使用“表格中选中的记录”变量 ([#5974](https://github.com/nocobase/nocobase/pull/5974)) by @2013xile

#### 🚀 优化

- **[数据源：主数据库]** 新增名称冲突校验，防止用户创建与系统 Collection 同名的 Collection ([#5962](https://github.com/nocobase/nocobase/pull/5962)) by @chareice
- **[工作流]** 避免日期范围变量在除了筛选组件中被误用 ([#5954](https://github.com/nocobase/nocobase/pull/5954)) by @mytharcher

#### 🐛 修复

- **[database]**

  - 修复 filterByTk 带 filter 参数无法删除数据的问题 ([#5976](https://github.com/nocobase/nocobase/pull/5976)) by @chareice
  - repository 的 firstOrCreate 和 updateOrCreate 方法缺失 context ([#5973](https://github.com/nocobase/nocobase/pull/5973)) by @chenos
- **[client]**

  - 修复表单中添加对一关系字段时控制台报错 ([#5975](https://github.com/nocobase/nocobase/pull/5975)) by @katherinehhh
  - 修复 子表格中通过多对一字段赋值时，删除行记录后再次选择数据未成功赋值的问题 ([#5958](https://github.com/nocobase/nocobase/pull/5958)) by @katherinehhh
  - 修复因数据包含 children 命名的字段，而导致表格区块报错的问题 ([#5951](https://github.com/nocobase/nocobase/pull/5951)) by @zhangzhonghe
- **[数据源：主数据库]** 修复旧版 unixTimestamp 字段的支持问题 ([#5967](https://github.com/nocobase/nocobase/pull/5967)) by @chareice
- **[工作流]** 修复关系字段子详情区块在人工节点界面配置中报错 ([#5953](https://github.com/nocobase/nocobase/pull/5953)) by @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.5.0-beta.18](https://www.nocobase.com/cn/blog/v1.5.0-beta.18)

*发布时间：2024-12-27*

#### 🐛 修复

- **[client]**

  - 修复在第三方插件中，表格单元格的显示不符合预期的问题 ([#5934](https://github.com/nocobase/nocobase/pull/5934)) by @zhangzhonghe
  - 修复区块模板管理页面中，删除按钮被禁用的问题 ([#5922](https://github.com/nocobase/nocobase/pull/5922)) by @zhangzhonghe
- **[验证码]** 修复在验证码配置页面，打开编辑弹窗，弹窗中的表单不显示值的问题 ([#5949](https://github.com/nocobase/nocobase/pull/5949)) by @chenos
- **[工作流：自定义操作事件]**

  - 修复 SQLite 下的测试用例 by @mytharcher
  - 修复自定义操作事件的测试用例 by @mytharcher
- **[工作流：操作前事件]** 修复请求拦截器的测试用例 by @mytharcher

### [v1.5.0-beta.19](https://www.nocobase.com/cn/blog/v1.5.0-beta.19)

*发布时间：2024-12-31*

#### 🐛 修复

- **[client]**

  - 修复 筛选表单/筛选操作中日期范围选择器设置 showTime=true 时未显示时间 ([#5956](https://github.com/nocobase/nocobase/pull/5956)) by @katherinehhh
  - 修复点击关系字段无法打开弹窗的问题 ([#5972](https://github.com/nocobase/nocobase/pull/5972)) by @zhangzhonghe
- **[工作流：响应消息]** 修复错误的参数名 by @mytharcher

### v1.5.0-beta.20

*发布时间：2024-12-31*

#### 🎉 新特性

- **[[导入 Pro](https://docs-cn.nocobase.com/handbook/action-import-pro)]** 增强数据导入能力，支持异步导入，支持百万行记录导入，支持重复数据识别和处理、数据更新和工作流触发等特性。
- **[[导出 Pro](https://docs-cn.nocobase.com/handbook/action-export-pro)]** 增强数据导出能力，支持异步导出，支持导出百万行记录，支持导出附件。


---

NocoBase 是一个极易扩展的开源无代码开发平台。完全掌控，无限扩展，助力你的开发团队快速响应变化，显著降低成本，不必投入几年时间和数百万资金研发，只需要花几分钟部署 NocoBase。

**[访问 NocoBase 官网](https://www.nocobase.com/cn)**

您可以在官网申请 Demo 演示，体验站点将在 1 分钟内创建完毕自动发送到您的邮箱。

**访问 NocoBase [GitHub](https://github.com/nocobase/nocobase) 和 [Gitee](https://gitee.com/nocobase/nocobase)**

下载 NocoBase 源码并安装。支持 Docker 安装、create-nocobase-app 安装和 Git 源码安装。

**[官方文档](https://docs-cn.nocobase.com/)持续更新中**
