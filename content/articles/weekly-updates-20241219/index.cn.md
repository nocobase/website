汇总一周产品更新日志，最新发布可以[前往我们的博客查看](https://www.nocobase.com/cn/blog/tags/release-notes)。

**NocoBase 目前更新包括的版本更新包括三个分支：`main` ，`next`和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

`main` ：截止目前最稳定的版本，推荐安装此版本。

`next`：包含即将发布的新功能，经过初步测试的版本，可能存在部分已知或未知问题。主要面向测试用户,用于收集反馈和进一步优化功能。适合愿意提前体验新功能并提供反馈的测试用户。

`develop`：开发中的版本，包含最新的功能代码，可能尚未完成或存在较多不稳定因素，主要用于内部开发和快速迭代。适合对产品功能前沿发展感兴趣的技术用户，但可能存在较多问题或不完整功能，不建议在生产环境中使用。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.4.9](https://www.nocobase.com/cn/blog/v1.4.9)

*发布时间：2024-12-12*

#### 🐛 修复

- **[sdk]** 移除默认 locale ([#5867](https://github.com/nocobase/nocobase/pull/5867)) by @chenos
- **[client]**

  - 修复数据范围中，选择嵌套的关系字段变量，变量值为空的问题 ([#5866](https://github.com/nocobase/nocobase/pull/5866)) by @zhangzhonghe
  - 修复 列数少时右固定列滚动条出现 ([#5864](https://github.com/nocobase/nocobase/pull/5864)) by @katherinehhh
  - 修复筛选组件样式错位问题 ([#5851](https://github.com/nocobase/nocobase/pull/5851)) by @mytharcher
- **[备份管理器]** 修复自定义域名的子应用下载备份文件失败的问题 by @gchust

### [v1.4.10](https://www.nocobase.com/cn/blog/v1.4.10)

*发布时间：2024-12-12*

#### 🎉 新特性

- **[操作：自定义请求]** 支持在自定义请求按钮中使用“当前表单”变量 ([#5871](https://github.com/nocobase/nocobase/pull/5871)) by @zhangzhonghe

#### 🚀 优化

- **[数据可视化]** 支持在图表的查询配置中使用外键 ([#5869](https://github.com/nocobase/nocobase/pull/5869)) by @2013xile

#### 🐛 修复

- **[client]** 修复关联文件表，使用数据选择器时在配置模式下显示文件表区块，非配置模式下未显示的问题 ([#5874](https://github.com/nocobase/nocobase/pull/5874)) by @katherinehhh
- **[权限控制]** 修复配置权限之后复制记录相关问题 ([#5839](https://github.com/nocobase/nocobase/pull/5839)) by @chareice
- **[工作流]** 修复自动删除执行记录时事务超时的问题 ([#5870](https://github.com/nocobase/nocobase/pull/5870)) by @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.5.0-beta.7](https://www.nocobase.com/cn/blog/v1.5.0-beta.7)

*发布时间：2024-12-13*

#### 🚀 优化

- **[用户认证]** 优化获取审计操作的 metadata 的逻辑 ([#5814](https://github.com/nocobase/nocobase/pull/5814)) by @chenzhizdt

#### 🐛 修复

- **[数据可视化]** 修复图表区块的初始高度 ([#5879](https://github.com/nocobase/nocobase/pull/5879)) by @2013xile
- **[工作流]** 修复手动执行未启用工作流在异步节点报错的问题 ([#5877](https://github.com/nocobase/nocobase/pull/5877)) by @mytharcher

### [v1.5.0-beta.9](https://www.nocobase.com/cn/blog/v1.5.0-beta.9)

*发布时间：2024-12-15*

#### 🎉 新特性

- **[移动端]** 移动端增加全局开关控制所有返回按钮（默认开启） ([#5868](https://github.com/nocobase/nocobase/pull/5868)) by @katherinehhh

#### 🐛 修复

- **[用户数据同步]** 修复同步和任务按钮的显示问题。 ([#5896](https://github.com/nocobase/nocobase/pull/5896)) by @2013xile

### [v1.5.0-beta.10](https://www.nocobase.com/cn/blog/v1.5.0-beta.10)

*发布时间：2024-12-18*

#### 🚀 优化

- **[移动端]** 优化移动端日期和时间、日期范围选择组件交互体验 ([#5863](https://github.com/nocobase/nocobase/pull/5863)) by @katherinehhh

#### 🐛 修复

- **[数据源：主数据库]** 修复筛选表单中的系统字段无法编辑的问题 ([#5885](https://github.com/nocobase/nocobase/pull/5885)) by @zhangzhonghe

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.5](https://www.nocobase.com/cn/blog/v1.6.0-alpha.5)

*发布时间：2024-12-11*

#### 🐛 修复

- **[client]**

  - 修复切换页面后，浏览器标签名称未更新的问题 ([#5857](https://github.com/nocobase/nocobase/pull/5857)) by @zhangzhonghe
  - 修复在数据源管理页面刷新页面后，会跳转到首页的问题 ([#5855](https://github.com/nocobase/nocobase/pull/5855)) by @zhangzhonghe
  - 修复子表格翻页后，数据不变的问题 ([#5856](https://github.com/nocobase/nocobase/pull/5856)) by @zhangzhonghe
  - 修复用户管理表格中，不显示角色数据的问题 ([#5846](https://github.com/nocobase/nocobase/pull/5846)) by @zhangzhonghe
  - 修复在引用模板中的关系字段，有时会不显示数据的问题 ([#5848](https://github.com/nocobase/nocobase/pull/5848)) by @zhangzhonghe
  - 修复添加“自定义请求”按钮后，不会立即显示的问题 ([#5845](https://github.com/nocobase/nocobase/pull/5845)) by @zhangzhonghe
  - 避免已隐藏的页面影响其它页面的交互 ([#5836](https://github.com/nocobase/nocobase/pull/5836)) by @zhangzhonghe
  - 修复在弹窗中增加区块后，再次打开不显示区块的问题 ([#5838](https://github.com/nocobase/nocobase/pull/5838)) by @zhangzhonghe
- **[server]** 为 ACL 设置默认的可用操作 ([#5847](https://github.com/nocobase/nocobase/pull/5847)) by @chenos

---

NocoBase 是一个极易扩展的开源无代码开发平台。完全掌控，无限扩展，助力你的开发团队快速响应变化，显著降低成本，不必投入几年时间和数百万资金研发，只需要花几分钟部署 NocoBase。

**[访问 NocoBase 官网](https://www.nocobase.com/cn)**

您可以在官网申请 Demo 演示，体验站点将在 1 分钟内创建完毕自动发送到您的邮箱。

**访问 NocoBase [GitHub](https://github.com/nocobase/nocobase) 和 [Gitee](https://gitee.com/nocobase/nocobase)**

下载 NocoBase 源码并安装。支持 Docker 安装、create-nocobase-app 安装和 Git 源码安装。

**[官方文档](https://docs-cn.nocobase.com/)持续更新中**
