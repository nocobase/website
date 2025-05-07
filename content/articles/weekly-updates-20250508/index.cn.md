汇总一周产品更新日志，最新发布可以[前往我们的博客查看](https://www.nocobase.com/cn/blog/timeline)。

**NocoBase 目前更新包括的版本更新包括三个分支：`main` ，`next`和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

`main` ：截止目前最稳定的版本，推荐安装此版本。

`next`：包含即将发布的新功能，经过初步测试的版本，可能存在部分已知或未知问题。主要面向测试用户,用于收集反馈和进一步优化功能。适合愿意提前体验新功能并提供反馈的测试用户。

`develop`：开发中的版本，包含最新的功能代码，可能尚未完成或存在较多不稳定因素，主要用于内部开发和快速迭代。适合对产品功能前沿发展感兴趣的技术用户，但可能存在较多问题或不完整功能，不建议在生产环境中使用。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.23](https://www.nocobase.com/cn/blog/v1.6.23)

*发布时间：2025-04-23*


## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.27](https://www.nocobase.com/cn/blog/v1.7.0-beta.27)

*发布时间：2025-05-04*

#### 🎉 新特性

- **[client]** 支持二次确认中使用变量 ([#6787](https://github.com/nocobase/nocobase/pull/6787)) by @katherinehhh
- **[模板打印]**

  - 文档模板支持动态图片和条形码渲染功能。 by @sheldon66
  - 新增：模板打印中 Option 字段支持 `{ label, value }` 结构的下拉选项。 by @sheldon66
- **[区块：树]** 树结构的筛选区块支持区块联动规则 by @katherinehhh
- **[数据可视化：EChrats]** 条形图支持“y轴反向”设置 by @2013xile

#### 🚀 优化

- **[client]** 优化子表格添加按钮样式，并将分页器与按钮排列在同一行 ([#6790](https://github.com/nocobase/nocobase/pull/6790)) by @katherinehhh
- **[文件管理器]** 增加 OSS 存储引擎的超时时间配置项，且默认为 10 分钟 ([#6795](https://github.com/nocobase/nocobase/pull/6795)) by @mytharcher
- **[密码策略]** 默认密码过期时间修改为不过期 by @2013xile

#### 🐛 修复

- **[database]**

  - 修复测试用例 ([#6811](https://github.com/nocobase/nocobase/pull/6811)) by @mytharcher
  - 避免文本类型输入数据不是字符串时的报错 ([#6797](https://github.com/nocobase/nocobase/pull/6797)) by @mytharcher
- **[client]**

  - 变量选择时，若需要异步加载，则会丢失最后选中的菜单 ([#6802](https://github.com/nocobase/nocobase/pull/6802)) by @gchust
  - 修复无法在筛选表单中选择一对多字段的子字段作为筛选项的问题 ([#6809](https://github.com/nocobase/nocobase/pull/6809)) by @zhangzhonghe
  - 子表格中子表单（弹窗）无法配置联动规则的 ([#6803](https://github.com/nocobase/nocobase/pull/6803)) by @katherinehhh
  - 表单字段验证规则违反时错误信息多次显示 ([#6805](https://github.com/nocobase/nocobase/pull/6805)) by @katherinehhh
  - 关系字段，在显示关系表下的字段数据时不提交数据 ([#6798](https://github.com/nocobase/nocobase/pull/6798)) by @katherinehhh
  - missing field property settings in field linkage rules for subform (popup) in subtable ([#6800](https://github.com/nocobase/nocobase/pull/6800)) by @katherinehhh
- **[用户认证]** 不允许修改认证器标识 ([#6808](https://github.com/nocobase/nocobase/pull/6808)) by @2013xile
- **[操作：自定义请求]** 自定义请求成功后返回信息设置为变量未正确显示 ([#6793](https://github.com/nocobase/nocobase/pull/6793)) by @katherinehhh

### [v1.7.0-beta.28](https://www.nocobase.com/cn/blog/v1.7.0-beta.28)

*发布时间：2025-05-06*

#### 🚀 优化

- **[client]** RichText组件支持modules和formats参数 ([#6807](https://github.com/nocobase/nocobase/pull/6807)) by @jiannx

#### 🐛 修复

- **[验证]** 修复升级脚本的问题 ([#6820](https://github.com/nocobase/nocobase/pull/6820)) by @2013xile
- **[工作流：自定义操作事件]** 触发工作流按钮联动规则不正常 by @katherinehhh

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.7.0-alpha.12](https://www.nocobase.com/cn/blog/v1.7.0-alpha.12)

*发布时间：2025-04-24*


---

NocoBase 是一个极易扩展的开源无代码开发平台。完全掌控，无限扩展，助力你的开发团队快速响应变化，显著降低成本，不必投入几年时间和数百万资金研发，只需要花几分钟部署 NocoBase。

**[访问 NocoBase 官网](https://www.nocobase.com/cn)**

您可以在官网申请 Demo 演示，体验站点将在 1 分钟内创建完毕自动发送到您的邮箱。

**访问 NocoBase [GitHub](https://github.com/nocobase/nocobase) 和 [Gitee](https://gitee.com/nocobase/nocobase)**

下载 NocoBase 源码并安装。支持 Docker 安装、create-nocobase-app 安装和 Git 源码安装。

**[官方文档](https://docs-cn.nocobase.com/)持续更新中**
