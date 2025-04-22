汇总一周产品更新日志，最新发布可以[前往我们的博客查看](https://www.nocobase.com/cn/blog/tags/release-notes)。

**NocoBase 目前更新包括的版本更新包括三个分支：`main` ，`next`和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

`main` ：截止目前最稳定的版本，推荐安装此版本。

`next`：包含即将发布的新功能，经过初步测试的版本，可能存在部分已知或未知问题。主要面向测试用户,用于收集反馈和进一步优化功能。适合愿意提前体验新功能并提供反馈的测试用户。

`develop`：开发中的版本，包含最新的功能代码，可能尚未完成或存在较多不稳定因素，主要用于内部开发和快速迭代。适合对产品功能前沿发展感兴趣的技术用户，但可能存在较多问题或不完整功能，不建议在生产环境中使用。

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

## [v1.3.52](https://www.nocobase.com/cn/blog/v1.3.52)

*发布时间：2024-11-21*

### 🚀 优化

- **[工作流]**

  - 去除工作流查询节点的分页条数限制 ([#5694](https://github.com/nocobase/nocobase/pull/5694)) by @mytharcher
  - 关闭工作流与执行计划之间的级联删除选项 ([#5666](https://github.com/nocobase/nocobase/pull/5666)) by @mytharcher
- **[数据源：REST API]** 优化 REST API 插件相关文案 by @katherinehhh

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

## [v1.4.0-beta.2](https://www.nocobase.com/cn/blog/v1.4.0-beta.2)

*发布时间：2024-11-21*

### 🐛 修复

- **[build]** 将客户端构建工具由 `rspack` 暂时回退回 `vite`, 修复 `create-nocobase-app` 命令安装后 `yarn dev` 报错的问题 ([#5697](https://github.com/nocobase/nocobase/pull/5697)) by @gchust
- **[client]** 修复 列数少时右固定列未正确对齐到右边 ([#5690](https://github.com/nocobase/nocobase/pull/5690)) by @katherinehhh
- **[移动端]** 修复在移动端配置页，字段赋值的弹窗被遮挡的问题 ([#5701](https://github.com/nocobase/nocobase/pull/5701)) by @zhangzhonghe

## [v1.4.0-beta.3](https://www.nocobase.com/cn/blog/v1.4.0-beta.3)

*发布时间：2024-11-21*

### 🐛 修复

- **[client]**

  - 调整 外部数据源视图前端移除从数据库同步按钮 ([#5696](https://github.com/nocobase/nocobase/pull/5696)) by @katherinehhh
  - 对模板变量组件中非字符串的变量值进行容错 ([#5704](https://github.com/nocobase/nocobase/pull/5704)) by @mytharcher
- **[日历]** 修复 日历区块开始日期和结束日期跨月后不显示事件 ([#5699](https://github.com/nocobase/nocobase/pull/5699)) by @katherinehhh

## [v1.4.0-beta.5](https://www.nocobase.com/cn/blog/v1.4.0-beta.5)

*发布时间：2024-11-24*

### 🐛 修复

- **[client]**
  - 修复横排布局下关系字段label 宽度异常问题 ([#5709](https://github.com/nocobase/nocobase/pull/5709)) by @katherinehhh
  - 修复 多层子表单下嵌套子表格，关系数据联动异常问题 ([#5710](https://github.com/nocobase/nocobase/pull/5710)) by @katherinehhh
  - 修复横排布局下关系字段label 宽度异常问题 ([#5709](https://github.com/nocobase/nocobase/pull/5709)) by @katherinehhh

## [v1.4.0-beta.6](https://www.nocobase.com/cn/blog/v1.4.0-beta.6)

*发布时间：2024-11-26*

### 🚀 优化

- **[client]** 支持在界面上批量激活插件 ([#5730](https://github.com/nocobase/nocobase/pull/5730)) by @chenos

### 🐛 修复

- **[client]** 修复表单横排模式下子表格的 label 宽度的问题 ([#5719](https://github.com/nocobase/nocobase/pull/5719)) by @katherinehhh

## [v1.4.0-beta.7](https://www.nocobase.com/cn/blog/v1.4.0-beta.7)

*发布时间：2024-11-27*

### 🎉 新特性

- **[用户认证]** 支持在注册表单中添加更多用户表的字段 ([#5741](https://github.com/nocobase/nocobase/pull/5741)) by @2013xile

### 🐛 修复

- **[client]** 修复已选择选项的标签在第一次渲染时未被加载的问题。 ([#5736](https://github.com/nocobase/nocobase/pull/5736)) by @sheldon66

## [v1.4.0-beta.8](https://www.nocobase.com/cn/blog/v1.4.0-beta.8)

*发布时间：2024-11-27*

### 🐛 修复

- **[通知：站内信]** 移除站内信消息标题字符串截取逻辑。 ([#5728](https://github.com/nocobase/nocobase/pull/5728)) by @sheldon66

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

## [v1.5.0-alpha.5](https://www.nocobase.com/cn/blog/v1.5.0-alpha.5)

*发布时间：2024-11-23*

### 🐛 修复

- **[build]** 修复 `create-nocobase-app` 后执行 `yarn dev` 报错的问题 ([#5708](https://github.com/nocobase/nocobase/pull/5708)) by @gchust

---

NocoBase 是一个极易扩展的开源无代码开发平台。完全掌控，无限扩展，助力你的开发团队快速响应变化，显著降低成本，不必投入几年时间和数百万资金研发，只需要花几分钟部署 NocoBase。

**[访问 NocoBase 官网](https://www.nocobase.com/cn)**

您可以在官网申请 Demo 演示，体验站点将在 1 分钟内创建完毕自动发送到您的邮箱。

**访问 NocoBase [GitHub](https://github.com/nocobase/nocobase) 和 [Gitee](https://gitee.com/nocobase/nocobase)**

下载 NocoBase 源码并安装。支持 Docker 安装、create-nocobase-app 安装和 Git 源码安装。

**[官方文档](https://docs-cn.nocobase.com/)持续更新中**
