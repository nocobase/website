汇总一周产品更新日志，最新发布可以[前往我们的博客查看](https://www.nocobase.com/cn/blog/tags/release-notes)。

**NocoBase 目前更新包括的版本更新包括三个分支：`main` ，`next`和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

`main` ：截止目前最稳定的版本，推荐安装此版本。

`next`：包含即将发布的新功能，经过初步测试的版本，可能存在部分已知或未知问题。主要面向测试用户,用于收集反馈和进一步优化功能。适合愿意提前体验新功能并提供反馈的测试用户。

`develop`：开发中的版本，包含最新的功能代码，可能尚未完成或存在较多不稳定因素，主要用于内部开发和快速迭代。适合对产品功能前沿发展感兴趣的技术用户，但可能存在较多问题或不完整功能，不建议在生产环境中使用。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.4.11](https://www.nocobase.com/cn/blog/v1.4.11)

*发布时间：2024-12-18*

#### 🚀 优化

- **[client]** 使更多的组件支持“省略超出长度的内容” 配置项 ([#5888](https://github.com/nocobase/nocobase/pull/5888)) by @zhangzhonghe
- **[database]** 关系 repository 支持 firstOrCreate & updateOrCreate ([#5894](https://github.com/nocobase/nocobase/pull/5894)) by @chareice

#### 🐛 修复

- **[client]**

  - 修复 外部数据源区块的复制操作请求模版没有 x-data-source 参数 ([#5882](https://github.com/nocobase/nocobase/pull/5882)) by @katherinehhh
  - 修复 插件中的表格出现横向滚动条 ([#5899](https://github.com/nocobase/nocobase/pull/5899)) by @katherinehhh
  - 修复关系字段的下拉选项中，有时会出现多余的 “N/A” 选项的问题 ([#5878](https://github.com/nocobase/nocobase/pull/5878)) by @zhangzhonghe
  - 修复 PG 视图创建错误，解决跨 schema 选择问题 ([#5881](https://github.com/nocobase/nocobase/pull/5881)) by @katherinehhh
  - 修复：表单区块分组在水平布局下样式异常 ([#5884](https://github.com/nocobase/nocobase/pull/5884)) by @katherinehhh
- **[用户]**

  - 修复用户管理中添加或修改用户后表单没有被重置的问题 。 ([#5875](https://github.com/nocobase/nocobase/pull/5875)) by @2013xile
  - 修复用户管理页面翻页或修改分页数量后，编辑用户资料并提交，分页设置会被重置的问题。 ([#5893](https://github.com/nocobase/nocobase/pull/5893)) by @2013xile
- **[数据源管理]** 修复外部数据源 Collection 的筛选问题 ([#5890](https://github.com/nocobase/nocobase/pull/5890)) by @chareice
- **[公开表单]** 修复全局切换主题导致公开表单预览页主题被影响的问题 ([#5883](https://github.com/nocobase/nocobase/pull/5883)) by @katherinehhh

### [v1.4.13](https://www.nocobase.com/cn/blog/v1.4.13)

*发布时间：2024-12-19*

#### 🚀 优化

- **[数据表: SQL]** 禁止在 SQL 中使用危险关键字和函数。 ([#5913](https://github.com/nocobase/nocobase/pull/5913)) by @2013xile
- **[主题编辑器]** 优化用户资料编辑和密码修改的 API 校验逻辑 ([#5912](https://github.com/nocobase/nocobase/pull/5912)) by @2013xile

#### 🐛 修复

- **[数据源：主数据库]** 修复外键加载问题 ([#5903](https://github.com/nocobase/nocobase/pull/5903)) by @chareice
- **[数据表: SQL]** 修复 SQL 数据表更新后字段消失的问题。 ([#5909](https://github.com/nocobase/nocobase/pull/5909)) by @chareice
- **[备份管理器]** 修复 Windows 平台备份还原失败的问题 by @gchust

### [v1.4.14](https://www.nocobase.com/cn/blog/v1.4.14)

*发布时间：2024-12-21*

#### 🐛 修复

- **[数据可视化]** 修复在图表查询中使用嵌套的多对多关系进行过滤时的报错。 ([#5917](https://github.com/nocobase/nocobase/pull/5917)) by @2013xile
- **[工作流：聚合查询节点]** 修复由于事务造成的统计节点结果错误问题 ([#5916](https://github.com/nocobase/nocobase/pull/5916)) by @mytharcher

### [v1.4.15](https://www.nocobase.com/cn/blog/v1.4.15)

*发布时间：2024-12-25*

#### 🐛 修复

- **[server]** 激活插件时未自动建表 ([#5939](https://github.com/nocobase/nocobase/pull/5939)) by @chenos
- **[client]** 修复 联动规则中属性字段搜索无法匹配正确数据 ([#5925](https://github.com/nocobase/nocobase/pull/5925)) by @katherinehhh
- **[工作流]**

  - 修复定时任务使用无时区字段存在错误的问题 ([#5938](https://github.com/nocobase/nocobase/pull/5938)) by @mytharcher
  - 修复日期范围变量翻译 ([#5919](https://github.com/nocobase/nocobase/pull/5919)) by @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.5.0-beta.13](https://www.nocobase.com/cn/blog/v1.5.0-beta.13)

*发布时间：2024-12-21*

#### 🚀 优化

- **[数据可视化]** 图表查询增加 offset 参数 ([#5911](https://github.com/nocobase/nocobase/pull/5911)) by @Albert-mah

### [v1.5.0-beta.14](https://www.nocobase.com/cn/blog/v1.5.0-beta.14)

*发布时间：2024-12-21*

#### 🐛 修复

- **[数据可视化]** 修复在图表查询中使用嵌套的多对多关系进行过滤时的报错。 ([#5917](https://github.com/nocobase/nocobase/pull/5917)) by @2013xile
- **[工作流：聚合查询节点]** 修复由于事务造成的统计节点结果错误问题 ([#5916](https://github.com/nocobase/nocobase/pull/5916)) by @mytharcher

### [v1.5.0-beta.15](https://www.nocobase.com/cn/blog/v1.5.0-beta.15)

*发布时间：2024-12-23*

#### 🎉 新特性

- **[client]** 日期字段组件添加日期限定范围 ([#5852](https://github.com/nocobase/nocobase/pull/5852)) by @Cyx649312038

### [v1.5.0-beta.16](https://www.nocobase.com/cn/blog/v1.5.0-beta.16)

*发布时间：2024-12-24*

#### 🐛 修复

- **[build]** 修复设置环境变量 `APP_PUBLIC_PATH` 后无法加载的问题 ([#5924](https://github.com/nocobase/nocobase/pull/5924)) by @gchust

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.6](https://www.nocobase.com/cn/blog/v1.6.0-alpha.6)

*发布时间：2024-12-19*

#### 🎉 新特性

- **[client]** 支持在对多关系字段的子表单中选择已有数据 ([#5849](https://github.com/nocobase/nocobase/pull/5849)) by @katherinehhh

### [v1.6.0-alpha.7](https://www.nocobase.com/cn/blog/v1.6.0-alpha.7)

*发布时间：2024-12-25*

#### 🎉 新特性

- **[用户]** 支持配置用户个人资料的表单，以及用户管理中创建和编辑的表单。 ([#5698](https://github.com/nocobase/nocobase/pull/5698)) by @2013xile

---

NocoBase 是一个极易扩展的开源无代码开发平台。完全掌控，无限扩展，助力你的开发团队快速响应变化，显著降低成本，不必投入几年时间和数百万资金研发，只需要花几分钟部署 NocoBase。

**[访问 NocoBase 官网](https://www.nocobase.com/cn)**

您可以在官网申请 Demo 演示，体验站点将在 1 分钟内创建完毕自动发送到您的邮箱。

**访问 NocoBase [GitHub](https://github.com/nocobase/nocobase) 和 [Gitee](https://gitee.com/nocobase/nocobase)**

下载 NocoBase 源码并安装。支持 Docker 安装、create-nocobase-app 安装和 Git 源码安装。

**[官方文档](https://docs-cn.nocobase.com/)持续更新中**
