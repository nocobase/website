汇总一周产品更新日志，最新发布可以[前往我们的博客查看](https://www.nocobase.com/cn/blog/timeline)。

**NocoBase 目前更新包括的版本更新包括三个分支：`main` ，`next`和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

`main` ：截止目前最稳定的版本，推荐安装此版本。

`next`：包含即将发布的新功能，经过初步测试的版本，可能存在部分已知或未知问题。主要面向测试用户,用于收集反馈和进一步优化功能。适合愿意提前体验新功能并提供反馈的测试用户。

`develop`：开发中的版本，包含最新的功能代码，可能尚未完成或存在较多不稳定因素，主要用于内部开发和快速迭代。适合对产品功能前沿发展感兴趣的技术用户，但可能存在较多问题或不完整功能，不建议在生产环境中使用。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.16](https://www.nocobase.com/cn/blog/v1.6.16)

*发布时间：2025-04-03*

#### 🐛 修复

- **[client]**

  - 表单字段设置不可编辑不起作用 ([#6610](https://github.com/nocobase/nocobase/pull/6610)) by @katherinehhh
  - 表单字段标题因冒号导致的截断问题 ([#6599](https://github.com/nocobase/nocobase/pull/6599)) by @katherinehhh
- **[database]** 删除一对多记录时，同时传递 `filter` 和 `filterByTk` 参数，`filter` 包含关系字段时，`filterByTk` 参数失效 ([#6606](https://github.com/nocobase/nocobase/pull/6606)) by @2013xile

### [v1.6.17](https://www.nocobase.com/cn/blog/v1.6.17)

*发布时间：2025-04-09*

#### 🚀 优化

- **[utils]** 为 dayjs 包增加时长扩展 ([#6630](https://github.com/nocobase/nocobase/pull/6630)) by @mytharcher
- **[client]**

  - 支持筛选组件中对字段进行搜索 ([#6627](https://github.com/nocobase/nocobase/pull/6627)) by @mytharcher
  - 为 `Input` 和 `Variable.TextArea` 组件增加 `trim` API ([#6624](https://github.com/nocobase/nocobase/pull/6624)) by @mytharcher
- **[错误处理器]** 在 AppError 组件中支持自定义标题。 ([#6409](https://github.com/nocobase/nocobase/pull/6409)) by @sheldon66
- **[IP 限制]** 更新 IP 限制消息内容。 by @sheldon66
- **[文件存储：S3 (Pro)]** 支持存储引擎的配置中使用全局变量 by @mytharcher

#### 🐛 修复

- **[client]**

  - 联动规则条件设置为任意且无条件内容时属性设置不生效 ([#6628](https://github.com/nocobase/nocobase/pull/6628)) by @katherinehhh
  - 树表使用甘特图区块时数据显示异常 ([#6617](https://github.com/nocobase/nocobase/pull/6617)) by @katherinehhh
  - 筛选表单中的关系字段在刷新页面后，由于没有携带 x-data-source 而报错 ([#6619](https://github.com/nocobase/nocobase/pull/6619)) by @zhangzhonghe
  - 链接中中文参数变量值解析失败 ([#6618](https://github.com/nocobase/nocobase/pull/6618)) by @katherinehhh
- **[用户]** 用户个人资料表单 schema 的解析问题 ([#6635](https://github.com/nocobase/nocobase/pull/6635)) by @2013xile
- **[移动端]** 下拉单选字段在移动端设置筛选符为包含时组件未支持多选 ([#6629](https://github.com/nocobase/nocobase/pull/6629)) by @katherinehhh
- **[操作：导出记录]** 筛选数据后切换分页再导出时筛选参数丢失 ([#6633](https://github.com/nocobase/nocobase/pull/6633)) by @katherinehhh
- **[邮件管理]** 邮件管理权限无法查看邮件列表 by @jiannx
- **[文件存储：S3 (Pro)]** 当用户上传 logo 失败时提示错误（设置为默认存储的 S3 Pro） by @mytharcher
- **[工作流：审批]** 修复更新时间在迁移后变化 by @mytharcher
- **[迁移管理]** 部分服务器环境下迁移日志创建日期显示不正确 by @gchust

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.14](https://www.nocobase.com/cn/blog/v1.7.0-beta.14)

*发布时间：2025-04-09*

#### 🎉 新特性

- **[UI schema 存储服务]** 新增UISchema 本地化模块，支持schema 中标题、描述自定义翻译 ([#6574](https://github.com/nocobase/nocobase/pull/6574)) by @chenos

#### 🚀 优化

- **[utils]** 为 dayjs 包增加时长扩展 ([#6630](https://github.com/nocobase/nocobase/pull/6630)) by @mytharcher
- **[client]**

  - 支持筛选组件中对字段进行搜索 ([#6627](https://github.com/nocobase/nocobase/pull/6627)) by @mytharcher
  - 为 `Input` 和 `Variable.TextArea` 组件增加 `trim` API ([#6624](https://github.com/nocobase/nocobase/pull/6624)) by @mytharcher
- **[工作流]** 优化执行记录写入逻辑 ([#6613](https://github.com/nocobase/nocobase/pull/6613)) by @mytharcher
- **[错误处理器]** 在 AppError 组件中支持自定义标题。 ([#6409](https://github.com/nocobase/nocobase/pull/6409)) by @sheldon66
- **[IP 限制]** 更新 IP 限制消息内容。 by @sheldon66
- **[文件存储：S3 (Pro)]** 支持存储引擎的配置中使用全局变量 by @mytharcher

#### 🐛 修复

- **[client]**

  - 筛选表单中的关系字段在刷新页面后，由于没有携带 x-data-source 而报错 ([#6619](https://github.com/nocobase/nocobase/pull/6619)) by @zhangzhonghe
  - 树表使用甘特图区块时数据显示异常 ([#6617](https://github.com/nocobase/nocobase/pull/6617)) by @katherinehhh
  - 区块模板配置页面标题与菜单存在空白区域 ([#6625](https://github.com/nocobase/nocobase/pull/6625)) by @gchust
  - 联动规则条件设置为任意且无条件内容时属性设置不生效 ([#6628](https://github.com/nocobase/nocobase/pull/6628)) by @katherinehhh
  - 表单字段设置不可编辑不起作用 ([#6610](https://github.com/nocobase/nocobase/pull/6610)) by @katherinehhh
  - 链接中中文参数变量值解析失败 ([#6618](https://github.com/nocobase/nocobase/pull/6618)) by @katherinehhh
  - 表单字段标题因冒号导致的截断问题 ([#6599](https://github.com/nocobase/nocobase/pull/6599)) by @katherinehhh
- **[操作：导出记录]** 筛选数据后切换分页再导出时筛选参数丢失 ([#6633](https://github.com/nocobase/nocobase/pull/6633)) by @katherinehhh
- **[用户]** 用户个人资料表单 schema 的解析问题 ([#6635](https://github.com/nocobase/nocobase/pull/6635)) by @2013xile
- **[移动端]** 下拉单选字段在移动端设置筛选符为包含时组件未支持多选 ([#6629](https://github.com/nocobase/nocobase/pull/6629)) by @katherinehhh
- **[权限控制]** 纠正角色并集计算逻辑 ([#6605](https://github.com/nocobase/nocobase/pull/6605)) by @aaaaaajie
- **[区块：模板]** 模板创建区块后，模板和区块修改删除同一个字段可能会造成渲染错误 ([#6626](https://github.com/nocobase/nocobase/pull/6626)) by @gchust
- **[邮件管理]**

  - 修复next调用缺少await by @jiannx
  - 邮件管理权限无法查看邮件列表 by @jiannx
- **[文件存储：S3 (Pro)]**

  - 修复next调用缺少await by @jiannx
  - 当用户上传 logo 失败时提示错误（设置为默认存储的 S3 Pro） by @mytharcher
- **[工作流：审批]** 修复更新时间在迁移后变化 by @mytharcher
- **[迁移管理]** 部分服务器环境下迁移日志创建日期显示不正确 by @gchust


---

NocoBase 是一个极易扩展的开源无代码开发平台。完全掌控，无限扩展，助力你的开发团队快速响应变化，显著降低成本，不必投入几年时间和数百万资金研发，只需要花几分钟部署 NocoBase。

**[访问 NocoBase 官网](https://www.nocobase.com/cn)**

您可以在官网申请 Demo 演示，体验站点将在 1 分钟内创建完毕自动发送到您的邮箱。

**访问 NocoBase [GitHub](https://github.com/nocobase/nocobase) 和 [Gitee](https://gitee.com/nocobase/nocobase)**

下载 NocoBase 源码并安装。支持 Docker 安装、create-nocobase-app 安装和 Git 源码安装。

**[官方文档](https://docs-cn.nocobase.com/)持续更新中**
