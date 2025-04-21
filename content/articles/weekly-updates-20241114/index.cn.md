汇总一周产品更新日志，最新发布可以[前往我们的博客查看](https://www.nocobase.com/cn/blog/tags/release-notes)。

NocoBase 目前更新包括两个分支：`main` 和 `next` 。

`main` ：截止目前最稳定的版本，推荐安装此版本。

`next`：内测版，包含一些未发布的新特性，这个版本可能还不完全稳定，适用于开发者或测试人员，用于提前体验新功能或进行兼容性测试。

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

## [v1.3.45-beta](https://www.nocobase.com/cn/blog/v1.3.45-beta)

*发布时间：2024-11-06*

### 🐛 修复

- **[client]** 表格中关系表字段权限为该关系字段的权限 ([#5569](https://github.com/nocobase/nocobase/pull/5569)) by @katherinehhh
- **[操作：导出记录]** 修复导出过程中的多语言问题 ([#5591](https://github.com/nocobase/nocobase/pull/5591)) by @chareice
- **[操作：导入记录]** 修复无法导入多对一关联的问题 ([#5417](https://github.com/nocobase/nocobase/pull/5417)) by @chareice

## [v1.3.47-beta](https://www.nocobase.com/cn/blog/v1.3.47-beta)

*发布时间：2024-11-08*

### 🚀 优化

- **[用户认证]** 优化登录、注册的错误提示 ([#5612](https://github.com/nocobase/nocobase/pull/5612)) by @2013xile

### 🐛 修复

- **[client]**

  - 修复子表格中的默认值问题 ([#5607](https://github.com/nocobase/nocobase/pull/5607)) by @zhangzhonghe
  - 修复 关系字段标题字段为string 类型时应支持模糊查询 ([#5611](https://github.com/nocobase/nocobase/pull/5611)) by @katherinehhh
- **[用户认证]** 修复用户使用非密码认证器登录时无法修改密码的问题 ([#5609](https://github.com/nocobase/nocobase/pull/5609)) by @2013xile

## [v1.3.48-beta](https://www.nocobase.com/cn/blog/v1.3.48-beta)

*发布时间：2024-11-11*

### 🚀 优化

- **[client]** 支持隐藏菜单项 ([#5624](https://github.com/nocobase/nocobase/pull/5624)) by @chenos
- **[server]** 增加 DB_SQL_BENCHMARK 环境变量 ([#5615](https://github.com/nocobase/nocobase/pull/5615)) by @chareice

### 🐛 修复

- **[client]** 支持一对多关系使用文件表 ([#5619](https://github.com/nocobase/nocobase/pull/5619)) by @mytharcher
- **[操作：导入记录]** 修复无法通过 id 字段导入多对多关联数据的问题 ([#5623](https://github.com/nocobase/nocobase/pull/5623)) by @chareice

## [v1.3.49-beta](https://www.nocobase.com/cn/blog/v1.3.49-beta)

*发布时间：2024-11-13*

### 🚀 优化

- **[client]** 一对一字段和多对多（数组）字段支持选择文件表 ([#5637](https://github.com/nocobase/nocobase/pull/5637)) by @mytharcher
- **[evaluators]** 将运算节点的默认计算引擎更换为 Formula.js ([#5626](https://github.com/nocobase/nocobase/pull/5626)) by @mytharcher

### 🐛 修复

- **[client]** 修复筛选按钮重置后标题恢复为默认名称的问题 ([#5635](https://github.com/nocobase/nocobase/pull/5635)) by @katherinehhh
- **[操作：导入记录]** 修复无法通过 id 字段导入多对多关联数据的问题 ([#5623](https://github.com/nocobase/nocobase/pull/5623)) by @chareice

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

## [v1.4.0-alpha.6](https://www.nocobase.com/cn/blog/v1.4.0-alpha.6)

*发布时间：2024-11-07*

### 🎉 新特性

- **[client]** 支持隐藏表格列的配置项 ([#5597](https://github.com/nocobase/nocobase/pull/5597)) by @zhangzhonghe

### 🚀 优化

- **[数据源管理]** 数据表分类放到主数据源里去加载，从全局移除 ([#5602](https://github.com/nocobase/nocobase/pull/5602)) by @katherinehhh
- **[通知管理]** 将消息结构更新为包含接收者的通知日志数据 ([#5603](https://github.com/nocobase/nocobase/pull/5603)) by @sheldon66

### 🐛 修复

- **[client]** 列少时表格在非配置模式下出现滚动条 ([#5599](https://github.com/nocobase/nocobase/pull/5599)) by @katherinehhh
- **[操作：导入记录]** 修复日期字段的导入问题 ([#5606](https://github.com/nocobase/nocobase/pull/5606)) by @chareice

## [v1.4.0-alpha.7](https://www.nocobase.com/cn/blog/v1.4.0-alpha.7)

*发布时间：2024-11-11*

### 🎉 新特性

- **[client]** 为变量表达式输入组件增加定界符配置项 ([#5620](https://github.com/nocobase/nocobase/pull/5620)) by @mytharcher
- **[工作流]** 创建可分支节点时允许将下方节点移入新分支 ([#5570](https://github.com/nocobase/nocobase/pull/5570)) by @mytharcher

### 🚀 优化

- **[client]**

  - 优化保存方式字段列表，去除关系字段和Duplicate标识 ([#5616](https://github.com/nocobase/nocobase/pull/5616)) by @katherinehhh
  - 在 `Collection` 类中支持 `getFilterTargetKey()` 方法 ([#5617](https://github.com/nocobase/nocobase/pull/5617)) by @mytharcher
- **[数据源：主数据库]** 重新实现 collections:list 接口以提升性能 ([#5610](https://github.com/nocobase/nocobase/pull/5610)) by @chareice
- **[通知管理]** 优化通知渠道管理UI ([#5621](https://github.com/nocobase/nocobase/pull/5621)) by @sheldon66

## [v1.4.0-alpha.8](https://www.nocobase.com/cn/blog/v1.4.0-alpha.8)

*发布时间：2024-11-11*

### 🎉 新特性

- **[企业微信]**
  - 支持在企微浏览器中访问应用页面时自动登录 by @chenzhizdt
  - 支持在通知消息中使用 Markdown 和文本通知型的模板卡片 by @chenzhizdt

---

NocoBase 是一个极易扩展的开源无代码开发平台。完全掌控，无限扩展，助力你的开发团队快速响应变化，显著降低成本，不必投入几年时间和数百万资金研发，只需要花几分钟部署 NocoBase。

**[访问 NocoBase 官网](https://www.nocobase.com/cn)**

您可以在官网申请 Demo 演示，体验站点将在 1 分钟内创建完毕自动发送到您的邮箱。

**访问 NocoBase [GitHub](https://github.com/nocobase/nocobase) 和 [Gitee](https://gitee.com/nocobase/nocobase)**

下载 NocoBase 源码并安装。支持 Docker 安装、create-nocobase-app 安装和 Git 源码安装。

**[官方文档](https://docs-cn.nocobase.com/)持续更新中**
