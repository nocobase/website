汇总一周产品更新日志，最新发布可以[前往我们的博客查看](https://www.nocobase.com/cn/blog/tags/release-notes)。

**NocoBase 目前更新包括的版本更新包括三个分支：`main` ，`next`和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

`main` ：截止目前最稳定的版本，推荐安装此版本。

`next`：包含即将发布的新功能，经过初步测试的版本，可能存在部分已知或未知问题。主要面向测试用户,用于收集反馈和进一步优化功能。适合愿意提前体验新功能并提供反馈的测试用户。

`develop`：开发中的版本，包含最新的功能代码，可能尚未完成或存在较多不稳定因素，主要用于内部开发和快速迭代。适合对产品功能前沿发展感兴趣的技术用户，但可能存在较多问题或不完整功能，不建议在生产环境中使用。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.4.3](https://www.nocobase.com/cn/blog/v1.4.3)

*发布时间：2024-12-05*

#### 🚀 优化

- **[test]** 支持测试用例中登录方法包含角色名称 ([#5794](https://github.com/nocobase/nocobase/pull/5794)) by @mytharcher
- **[通知：站内信]** 更新站内信详情链接的标题 ([#5742](https://github.com/nocobase/nocobase/pull/5742)) by @sheldon66

#### 🐛 修复

- **[client]**
  - 修复无角色用户登录报错后，点击“登录其他账号”按钮时，token未清除的问题 ([#5790](https://github.com/nocobase/nocobase/pull/5790)) by @2013xile
  - 静默请求时丢失请求头信息 ([#5795](https://github.com/nocobase/nocobase/pull/5795)) by @chenos
  - 用户无角色时页面空白 ([#5797](https://github.com/nocobase/nocobase/pull/5797)) by @chenos
  - 修复紧凑主题下子表格 size 为 small 时出现滚动条 ([#5796](https://github.com/nocobase/nocobase/pull/5796)) by @katherinehhh

### [v1.4.4](https://www.nocobase.com/cn/blog/v1.4.4)

*发布时间：2024-12-08*

#### 🐛 修复

- **[client]**

  - 修复表格区块中外部数据源字段列表没有显示 ([#5825](https://github.com/nocobase/nocobase/pull/5825)) by @katherinehhh
  - 修复表单配置字段继承字段的显示问题 ([#5822](https://github.com/nocobase/nocobase/pull/5822)) by @katherinehhh
  - 修复表继承缺陷：字段列表未显示继承表字段且在数据表中无法重写继承字段 ([#5800](https://github.com/nocobase/nocobase/pull/5800)) by @katherinehhh
- **[数据可视化]** 修复在 MySQL 中格式化带时区的日期字段的问题 ([#5829](https://github.com/nocobase/nocobase/pull/5829)) by @2013xile
- **[工作流]**

  - 修复由于事务引起的外部数据源数据表同步事件触发错误 ([#5818](https://github.com/nocobase/nocobase/pull/5818)) by @mytharcher
  - 修复定时任务时间字段配置中缺少的日期类型 ([#5816](https://github.com/nocobase/nocobase/pull/5816)) by @mytharcher
- **[数据表字段：多对多 (数组)]** 修复更新对一关联表中多对多（数组）字段不生效的问题 ([#5820](https://github.com/nocobase/nocobase/pull/5820)) by @2013xile
- **[日历]**

  - 修复日历点击空白日期时报错的问题 ([#5803](https://github.com/nocobase/nocobase/pull/5803)) by @katherinehhh
  - 修复关闭通过“日历区块”打开的弹窗，导致所有弹窗都关闭的问题 ([#5793](https://github.com/nocobase/nocobase/pull/5793)) by @zhangzhonghe
- **[公开表单]** 修复子应用中公开表 QC code 扫码打开路径不正确 ([#5799](https://github.com/nocobase/nocobase/pull/5799)) by @katherinehhh

### [v1.4.5](https://www.nocobase.com/cn/blog/v1.4.5)

*发布时间：2024-12-08*

#### 🐛 修复

- **[权限控制]** 用户角色不对时刷新页面 ([#5821](https://github.com/nocobase/nocobase/pull/5821)) by @chenos

### [v1.4.6](https://www.nocobase.com/cn/blog/v1.4.6)

*发布时间：2024-12-08*

#### 🐛 修复

- **[操作：导入记录]** 修复关联表格导入的问题 ([#5833](https://github.com/nocobase/nocobase/pull/5833)) by @chareice
- **[权限控制]** 修复 ACL 中使用 fields 查询关系的问题 ([#5832](https://github.com/nocobase/nocobase/pull/5832)) by @chareice

### [v1.4.7](https://www.nocobase.com/cn/blog/v1.4.7)

*发布时间：2024-12-09*

#### 🐛 修复

- **[移动端]** 修复移动端背景色问题，导致看起来区块之间没有间隙 ([#5809](https://github.com/nocobase/nocobase/pull/5809)) by @katherinehhh

### [v1.4.8](https://www.nocobase.com/cn/blog/v1.4.8)

*发布时间：2024-12-10*

#### 🐛 修复

- **[client]**

  - 修复 关系字段 record picker 中配置的筛选表单出现数据模板缺陷 ([#5837](https://github.com/nocobase/nocobase/pull/5837)) by @katherinehhh
  - 修复 Markdown string template 关系变量没有按需加载的问题（外部数据源） ([#5791](https://github.com/nocobase/nocobase/pull/5791)) by @katherinehhh
- **[用户数据同步]** 同步数据时跳过不支持的数据类型，而不是直接报错。 ([#5835](https://github.com/nocobase/nocobase/pull/5835)) by @chenzhizdt
- **[备份管理器]**

  - 修复备份文件较大时下载窗口弹出过慢的问题 by @gchust
  - 修复备份还原子应用时会引起所有应用重启的问题 by @gchust

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.5.0-beta.2](https://www.nocobase.com/cn/blog/v1.5.0-beta.2)

*发布时间：2024-12-06*

#### 🚀 优化

- **[client]** 优化 useMenuSearch 递归逻辑，提升性能 ([#5784](https://github.com/nocobase/nocobase/pull/5784)) by @katherinehhh
- **[公开表单]** 操作面板、公开表单组件优化适配移动端 ([#5788](https://github.com/nocobase/nocobase/pull/5788)) by @katherinehhh

### [v1.5.0-beta.3](https://www.nocobase.com/cn/blog/v1.5.0-beta.3)

*发布时间：2024-12-10*

#### 🎉 新特性

- **[client]** 支持子表格的添加和选择按钮配置文字、图标和类型 ([#5778](https://github.com/nocobase/nocobase/pull/5778)) by @katherinehhh
- **[日历]** 日历插件添加事项打开模式 ([#5808](https://github.com/nocobase/nocobase/pull/5808)) by @Cyx649312038

### [v1.5.0-beta.4](https://www.nocobase.com/cn/blog/v1.5.0-beta.4)

*发布时间：2024-12-11*

#### 🐛 修复

- **[移动端]** 修复 移动端子页面日期组件未适配为移动端组件 ([#5859](https://github.com/nocobase/nocobase/pull/5859)) by @katherinehhh

### [v1.5.0-beta.6](https://www.nocobase.com/cn/blog/v1.5.0-beta.6)

*发布时间：2024-12-11*

#### 🚀 优化

- **[client]** 去除表格行的骨架屏组件 ([#5751](https://github.com/nocobase/nocobase/pull/5751)) by @zhangzhonghe

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.3](https://www.nocobase.com/cn/blog/v1.6.0-alpha.3)

*发布时间：2024-12-09*

#### 🚀 优化

- **[client]** 去除表格的 Formily 组件，以提高切换表格分页时的性能 ([#5738](https://github.com/nocobase/nocobase/pull/5738)) by @zhangzhonghe

#### 🐛 修复

- **[client]**

  - 修复在子表单中添加字段后，不显示字段的问题 ([#5827](https://github.com/nocobase/nocobase/pull/5827)) by @zhangzhonghe
  - 修复在详情区块中，更改关系字段的值，不会立即刷新的问题 ([#5826](https://github.com/nocobase/nocobase/pull/5826)) by @zhangzhonghe
  - 修复首次开启“启用链接”后，点击链接打不开弹窗的问题 ([#5812](https://github.com/nocobase/nocobase/pull/5812)) by @zhangzhonghe
  - 关闭弹窗时，防止触发多次 API 请求 ([#5804](https://github.com/nocobase/nocobase/pull/5804)) by @zhangzhonghe
  - 修复在移动端登录后，会跳转到桌面端页面的问题 ([#5805](https://github.com/nocobase/nocobase/pull/5805)) by @zhangzhonghe
  - 修复操作配置按钮未左对齐的问题 ([#5798](https://github.com/nocobase/nocobase/pull/5798)) by @katherinehhh
- **[build]** 修复插件构建后前端 js 文件错误缓存的问题 ([#5801](https://github.com/nocobase/nocobase/pull/5801)) by @gchust

---

NocoBase 是一个极易扩展的开源无代码开发平台。完全掌控，无限扩展，助力你的开发团队快速响应变化，显著降低成本，不必投入几年时间和数百万资金研发，只需要花几分钟部署 NocoBase。

**[访问 NocoBase 官网](https://www.nocobase.com/cn)**

您可以在官网申请 Demo 演示，体验站点将在 1 分钟内创建完毕自动发送到您的邮箱。

**访问 NocoBase [GitHub](https://github.com/nocobase/nocobase) 和 [Gitee](https://gitee.com/nocobase/nocobase)**

下载 NocoBase 源码并安装。支持 Docker 安装、create-nocobase-app 安装和 Git 源码安装。

**[官方文档](https://docs-cn.nocobase.com/)持续更新中**
