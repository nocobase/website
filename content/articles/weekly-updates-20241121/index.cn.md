汇总一周产品更新日志，最新发布可以[前往我们的博客查看](https://www.nocobase.com/cn/blog/tags/release-notes)。

**本周我们对版本发布进行了调整，之后的版本更新包括三个分支：`main` ，`next`和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

`main` ：截止目前最稳定的版本，推荐安装此版本。

`next`：包含即将发布的新功能，经过初步测试的版本，可能存在部分已知或未知问题。主要面向测试用户,用于收集反馈和进一步优化功能。适合愿意提前体验新功能并提供反馈的测试用户。

`develop`：开发中的版本，包含最新的功能代码，可能尚未完成或存在较多不稳定因素，主要用于内部开发和快速迭代。适合对产品功能前沿发展感兴趣的技术用户，但可能存在较多问题或不完整功能，不建议在生产环境中使用。

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

## [v1.3.50-beta](https://www.nocobase.com/cn/blog/v1.3.50-beta)

*发布时间：2024-11-14*

### 🐛 修复

- **[client]** 修复联动规则标题编辑时无法清空的问题 ([#5644](https://github.com/nocobase/nocobase/pull/5644)) by @katherinehhh
- **[评论]** 修复评论区块设置数据范围不生效问题 by @katherinehhh

## [v1.3.51](https://www.nocobase.com/cn/blog/v1.3.51)

*发布时间：2024-11-19*

### 🐛 修复

- **[client]**

  - 修复 字段权限判断被关系字段上下文影响 ([#5672](https://github.com/nocobase/nocobase/pull/5672)) by @katherinehhh
  - 修复 联动规则赋空值保存后变为静态值空 ([#5667](https://github.com/nocobase/nocobase/pull/5667)) by @katherinehhh
- **[数据表字段：多对多 (数组)]** 修复在获取含有多对多（数组）字段的关联表记录时报错的问题 ([#5661](https://github.com/nocobase/nocobase/pull/5661)) by @2013xile
- **[区块：甘特图]** 修复甘特图添加区块时模板列表为日历区块的模板 ([#5673](https://github.com/nocobase/nocobase/pull/5673)) by @katherinehhh
- **[数据可视化]** 修复双轴图中数据转换没有对 tooltip 生效的问题 ([#5649](https://github.com/nocobase/nocobase/pull/5649)) by @2013xile

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

## [v1.4.0-alpha.9](https://www.nocobase.com/cn/blog/v1.4.0-alpha.9)

*发布时间：2024-11-14*

### 🎉 新特性

- **[用户认证]** 支持配置注册表单的用户名和邮箱字段 ([#5639](https://github.com/nocobase/nocobase/pull/5639)) by @2013xile
- **[工作流]** 数据表事件支持联合主键 ([#5627](https://github.com/nocobase/nocobase/pull/5627)) by @mytharcher

### 🚀 优化

- **[client]** 表格column 默认宽度调整为100 ([#5625](https://github.com/nocobase/nocobase/pull/5625)) by @katherinehhh
- **[通知管理]** 把站内信图标更换为铃铛 ([#5638](https://github.com/nocobase/nocobase/pull/5638)) by @sheldon66
- **[区块：操作面板]** 操作面板区块支持区块高度设置 ([#5628](https://github.com/nocobase/nocobase/pull/5628)) by @katherinehhh
- **[移动端]** 移动端样式优化，减少字段间隙，使字段展示更紧凑 ([#5605](https://github.com/nocobase/nocobase/pull/5605)) by @katherinehhh

### 🐛 修复

- **[build]** 修复含有 .less 文件的插件会构建失败的问题 ([#5646](https://github.com/nocobase/nocobase/pull/5646)) by @gchust
- **[client]** 修复 表格右固定列未贴边问题 ([#5636](https://github.com/nocobase/nocobase/pull/5636)) by @katherinehhh
- **[工作流：循环节点]** 修复循环节点条件检查的问题 ([#5634](https://github.com/nocobase/nocobase/pull/5634)) by @mytharcher
- **[通知管理]** 修复通知发送 API 中未编译模板的问题 ([#5630](https://github.com/nocobase/nocobase/pull/5630)) by @mytharcher

## [v1.4.0-alpha.10](https://www.nocobase.com/cn/blog/v1.4.0-alpha.10)

*发布时间：2024-11-14*

### 🚀 优化

- **[client]** 调整部分前端内核的接口，并修复警告 ([#5651](https://github.com/nocobase/nocobase/pull/5651)) by @mytharcher
- **[移动端]** 移动端插件：替换部分组件为移动端组件 ([#5590](https://github.com/nocobase/nocobase/pull/5590)) by @katherinehhh

## [v1.4.0-alpha.11](https://www.nocobase.com/cn/blog/v1.4.0-alpha.11)

*发布时间：2024-11-15*

### 🐛 修复

- **[client]** 撤回对按钮打开尺寸传参的修改 ([#5656](https://github.com/nocobase/nocobase/pull/5656)) by @mytharcher

## [v1.4.0-alpha.12](https://www.nocobase.com/cn/blog/v1.4.0-alpha.12)

*发布时间：2024-11-16*

### 🐛 修复

- **[client]**

  - 修复当文件或特定属性为空时文件类型匹配的报错 ([#5659](https://github.com/nocobase/nocobase/pull/5659)) by @mytharcher
  - 修复 子表格数据删除之后 表格分页条数未同步变化 ([#5648](https://github.com/nocobase/nocobase/pull/5648)) by @katherinehhh
- **[工作流]** 修复创建非分支条件节点后，之后的节点消失的问题 ([#5658](https://github.com/nocobase/nocobase/pull/5658)) by @mytharcher
- **[移动端]** 修复关系字段使用超长文本作为标题时的样式问题 ([#5655](https://github.com/nocobase/nocobase/pull/5655)) by @katherinehhh
- **[工作流：自定义操作事件]** 修复 附件URL字段在外部数据源中使用时报错的问题 by @katherinehhh

## [v1.4.0-alpha.13](https://www.nocobase.com/cn/blog/v1.4.0-alpha.13)

*发布时间：2024-11-16*

### 🐛 修复

- **[移动端]** 移动端配置态的时候 select 还是使用桌面组件& 修复日期组件使用变量作为默认值时报错 ([#5662](https://github.com/nocobase/nocobase/pull/5662)) by @katherinehhh

## [v1.4.0-alpha.14](https://www.nocobase.com/cn/blog/v1.4.0-alpha.14)

*发布时间：2024-11-17*

### 🐛 修复

- **[移动端]** 修复字段赋值支持变量值为 0 ([#5663](https://github.com/nocobase/nocobase/pull/5663)) by @katherinehhh

## [v1.4.0-alpha.16](https://www.nocobase.com/cn/blog/v1.4.0-alpha.16)

*发布时间：2024-11-18*

### 🐛 修复

- **[build]** 修复当系统中存在已经构建过的插件时，运行 yarn dev 报错的问题 ([#5671](https://github.com/nocobase/nocobase/pull/5671)) by @gchust
- **[移动端]** 修复：移动端配置子表格仅允许选择已有数据时样式异常 ([#5670](https://github.com/nocobase/nocobase/pull/5670)) by @katherinehhh

## [v1.4.0-alpha.17](https://www.nocobase.com/cn/blog/v1.4.0-alpha.17)

*发布时间：2024-11-19*

### 🚀 优化

- **[工作流]** 支持在前端扩展工作流的系统变量 ([#5676](https://github.com/nocobase/nocobase/pull/5676)) by @mytharcher

### 🐛 修复

- **[client]** 修复 字段权限判断被关系字段上下文影响 ([#5672](https://github.com/nocobase/nocobase/pull/5672)) by @katherinehhh
- **[区块：甘特图]** 修复甘特图添加区块时模板列表为日历区块的模板 ([#5673](https://github.com/nocobase/nocobase/pull/5673)) by @katherinehhh
- **[日历]** 修复日历区块中日期字段选项缺失无时区和含时区字段 ([#5674](https://github.com/nocobase/nocobase/pull/5674)) by @katherinehhh

## [v1.4.0-beta.1](https://www.nocobase.com/cn/blog/v1.4.0-beta.1)

*发布时间：2024-11-19*

### 🚀 优化

- **[移动端]** `Tabs.TabPane` 组件支持用于控制是否渲染的动态属性 `hidden` ([#5687](https://github.com/nocobase/nocobase/pull/5687)) by @zhangzhonghe

### 🐛 修复

- **[client]**
  - 修复 筛选按钮筛选日期字段切换运算符后输入日期提交被清空的问题 ([#5684](https://github.com/nocobase/nocobase/pull/5684)) by @katherinehhh
  - 修复联动规则中使用日期变量作为条件判断不生效 ([#5675](https://github.com/nocobase/nocobase/pull/5675)) by @katherinehhh

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

## [v1.5.0-alpha.1](https://www.nocobase.com/cn/blog/v1.5.0-alpha.1)

*发布时间：2024-11-19*

### 🎉 新特性

- **[Redis 发布订阅适配器]** 添加基于 Redis 的同步适配器插件 by @mytharcher

---

NocoBase 是一个极易扩展的开源无代码开发平台。完全掌控，无限扩展，助力你的开发团队快速响应变化，显著降低成本，不必投入几年时间和数百万资金研发，只需要花几分钟部署 NocoBase。

**[访问 NocoBase 官网](https://www.nocobase.com/cn)**

您可以在官网申请 Demo 演示，体验站点将在 1 分钟内创建完毕自动发送到您的邮箱。

**访问 NocoBase [GitHub](https://github.com/nocobase/nocobase) 和 [Gitee](https://gitee.com/nocobase/nocobase)**

下载 NocoBase 源码并安装。支持 Docker 安装、create-nocobase-app 安装和 Git 源码安装。

**[官方文档](https://docs-cn.nocobase.com/)持续更新中**
