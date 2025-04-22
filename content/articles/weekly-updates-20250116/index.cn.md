汇总一周产品更新日志，最新发布可以[前往我们的博客查看](https://www.nocobase.com/cn/blog/tags/release-notes)。

**NocoBase 目前更新包括的版本更新包括三个分支：`main` ，`next`和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

`main` ：截止目前最稳定的版本，推荐安装此版本。

`next`：包含即将发布的新功能，经过初步测试的版本，可能存在部分已知或未知问题。主要面向测试用户,用于收集反馈和进一步优化功能。适合愿意提前体验新功能并提供反馈的测试用户。

`develop`：开发中的版本，包含最新的功能代码，可能尚未完成或存在较多不稳定因素，主要用于内部开发和快速迭代。适合对产品功能前沿发展感兴趣的技术用户，但可能存在较多问题或不完整功能，不建议在生产环境中使用。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.4.21](https://www.nocobase.com/cn/blog/v1.4.21)

*发布时间：2025-01-10*

#### 🚀 优化

- **[client]** 详情区块联动规则支持隐藏并保留值 ([#6031](https://github.com/nocobase/nocobase/pull/6031)) by @katherinehhh

#### 🐛 修复

- **[client]**

  - 修复 icon 文件路径未加 public path 的问题 ([#6034](https://github.com/nocobase/nocobase/pull/6034)) by @chenos
  - 修复在表单联动规则中，如果依赖了子表格中的字段值，而导致的联动规则失效的问题 ([#5876](https://github.com/nocobase/nocobase/pull/5876)) by @zhangzhonghe
  - 修复子详情中的“当前记录”变量的字段不正确的问题 ([#6030](https://github.com/nocobase/nocobase/pull/6030)) by @zhangzhonghe
- **[备份管理器]** 修复环境变量 API_BASE_PATH 不为 /api 时下载备份失败的问题 by @gchust

### [v1.4.22](https://www.nocobase.com/cn/blog/v1.4.22)

*发布时间：2025-01-11*

#### 🚀 优化

- **[evaluators]** 升级 formula.js 库的版本至 4.4.9 ([#6037](https://github.com/nocobase/nocobase/pull/6037)) by @mytharcher
- **[工作流]** 修复工作流插件的日志 API ([#6036](https://github.com/nocobase/nocobase/pull/6036)) by @mytharcher

#### 🐛 修复

- **[工作流]** 为避免重复触发增加防御性逻辑 ([#6022](https://github.com/nocobase/nocobase/pull/6022)) by @mytharcher

### [v1.4.23](https://www.nocobase.com/cn/blog/v1.4.23)

*发布时间：2025-01-13*

#### 🐛 修复

- **[client]** 修复在表格中固定操作列不生效的问题 ([#6048](https://github.com/nocobase/nocobase/pull/6048)) by @zhangzhonghe
- **[用户]** 在用户管理中给用户设置密码的时候关闭浏览器自动填充 ([#6041](https://github.com/nocobase/nocobase/pull/6041)) by @2013xile
- **[工作流]** 修复基于数据表字段的定时任务在启动后不执行的问题 ([#6042](https://github.com/nocobase/nocobase/pull/6042)) by @mytharcher

### [v1.4.24](https://www.nocobase.com/cn/blog/v1.4.24)

*发布时间：2025-01-14*

#### 🚀 优化

- **[client]** 日期选择器组件输入框只读 ([#6061](https://github.com/nocobase/nocobase/pull/6061)) by @Cyx649312038

#### 🐛 修复

- **[client]**

  - 修复表格区块加载时误加载弹窗区块中的关系字段 ([#6060](https://github.com/nocobase/nocobase/pull/6060)) by @katherinehhh
  - 去掉详情区块中子表格右侧空隙 ([#6049](https://github.com/nocobase/nocobase/pull/6049)) by @katherinehhh
  - 整数字段在阅读模式下设置的格式也会影响编辑模式 ([#6050](https://github.com/nocobase/nocobase/pull/6050)) by @katherinehhh
  - 修复 表格样式问题，调整表头单元格样式 ([#6052](https://github.com/nocobase/nocobase/pull/6052)) by @katherinehhh
- **[database]** 修复排序字段从主键初始化问题 ([#6059](https://github.com/nocobase/nocobase/pull/6059)) by @chareice
- **[数据可视化]** 在图表查询中使用聚合函数且没有设置维度的时候去除 `LIMIT` 语句 ([#6062](https://github.com/nocobase/nocobase/pull/6062)) by @2013xile
- **[备份管理器]** 修复用户仅登录子应用后无法下载备份文件的问题 by @gchust

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.5.0-beta.27](https://www.nocobase.com/cn/blog/v1.5.0-beta.27)

*发布时间：2025-01-10*

#### 🚀 优化

- **[client]** Associate按钮去掉联动规则设置项 ([#6016](https://github.com/nocobase/nocobase/pull/6016)) by @katherinehhh

#### 🐛 修复

- **[client]**
  - 修复在表单联动规则中，如果依赖了子表格中的字段值，而导致的联动规则失效的问题 ([#5876](https://github.com/nocobase/nocobase/pull/5876)) by @zhangzhonghe
  - 认证检查请求完成后才继续渲染页面 ([#6020](https://github.com/nocobase/nocobase/pull/6020)) by @2013xile

### [v1.5.0-beta.28](https://www.nocobase.com/cn/blog/v1.5.0-beta.28)

*发布时间：2025-01-14*

#### 🐛 修复

- **[client]**
  - 修复工作流人工节点的表单按钮的字段赋值无效的问题 ([#6054](https://github.com/nocobase/nocobase/pull/6054)) by @zhangzhonghe
  - 修复 字段启用连接的弹窗中缺少当前弹窗变量 ([#6045](https://github.com/nocobase/nocobase/pull/6045)) by @katherinehhh

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.11](https://www.nocobase.com/cn/blog/v1.6.0-alpha.11)

*发布时间：2025-01-09*

#### 🎉 新特性

- **[client]** 新增 附件字段支持设置是否显示文件名 ([#5995](https://github.com/nocobase/nocobase/pull/5995)) by @katherinehhh

### [v1.6.0-alpha.13](https://www.nocobase.com/cn/blog/v1.6.0-alpha.13)

*发布时间：2025-01-14*

#### 🚀 优化

- **[工作流：JSON 计算]** 将 JSON 解析节点名称改为 JSON 计算 by @mytharcher

#### 🐛 修复

- **[工作流]** 修复传入 DatePicker 组件的值参数类型 ([#6039](https://github.com/nocobase/nocobase/pull/6039)) by @mytharcher

---

NocoBase 是一个极易扩展的开源无代码开发平台。完全掌控，无限扩展，助力你的开发团队快速响应变化，显著降低成本，不必投入几年时间和数百万资金研发，只需要花几分钟部署 NocoBase。

**[访问 NocoBase 官网](https://www.nocobase.com/cn)**

您可以在官网申请 Demo 演示，体验站点将在 1 分钟内创建完毕自动发送到您的邮箱。

**访问 NocoBase [GitHub](https://github.com/nocobase/nocobase) 和 [Gitee](https://gitee.com/nocobase/nocobase)**

下载 NocoBase 源码并安装。支持 Docker 安装、create-nocobase-app 安装和 Git 源码安装。

**[官方文档](https://docs-cn.nocobase.com/)持续更新中**
