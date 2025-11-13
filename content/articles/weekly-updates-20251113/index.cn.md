汇总一周产品更新日志，最新发布可以[前往我们的博客查看](https://www.nocobase.com/cn/blog/timeline)。

**NocoBase 目前更新包括的版本更新包括三个分支：`main` ，`next`和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

`main` ：截止目前最稳定的版本，推荐安装此版本。

`next`：包含即将发布的新功能，经过初步测试的版本，可能存在部分已知或未知问题。主要面向测试用户，用于收集反馈和进一步优化功能。适合愿意提前体验新功能并提供反馈的测试用户。

`develop`：开发中的版本，包含最新的功能代码，可能尚未完成或存在较多不稳定因素，主要用于内部开发和快速迭代。适合对产品功能前沿发展感兴趣的技术用户，但可能存在较多问题或不完整功能，不建议在生产环境中使用。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.6](https://www.nocobase.com/cn/blog/v1.9.6)

*发布时间：2025-11-12*

### 🐛 修复

- **[client]** 修复拖拽引用模板后再删除引用模板而导致的复制模板不显示的问题 ([#7847](https://github.com/nocobase/nocobase/pull/7847)) by @zhangzhonghe
- **[utils]** 为 intersect 策略增加对象类型支持 ([#7840](https://github.com/nocobase/nocobase/pull/7840)) by @chenos
- **[数据可视化：EChrats]** 修复 ECharts 选项配置 labelType 不生效的问题 by @heziqiang
- **[邮件管理]** 没有时间戳的情况下同步微软邮件已读状态 by @jiannx

### [v1.9.5](https://www.nocobase.com/cn/blog/v1.9.5)

*发布时间：2025-11-10*

### 🐛 修复

- **[工作流：审批]** 修复重查关系数据时未屏蔽主表字段的问题 by @mytharcher
- **[邮件管理]** 修复 outlook 内敛图片和同步问题 by @jiannx

### [v1.9.4](https://www.nocobase.com/cn/blog/v1.9.4)

*发布时间：2025-11-10*

### 🚀 优化

- **[权限控制]** 优化关系字段关联操作的权限控制逻辑 ([#7800](https://github.com/nocobase/nocobase/pull/7800)) by @2013xile
- **[工作流：JavaScript 节点]** 修复传递到执行环境中的上层函数导致的安全漏洞，避免通过利用漏洞访问上层执行环境的问题 by @mytharcher
- **[认证：OIDC]** 增加请求超时时间 by @2013xile

### 🐛 修复

- **[server]** 修复消息队列在启用服务拆分模式后，工作进程发消息导致报错的问题 ([#7797](https://github.com/nocobase/nocobase/pull/7797)) by @mytharcher
- **[client]** 修复详情区块简单分页出现空数据下一页的问题 ([#7784](https://github.com/nocobase/nocobase/pull/7784)) by @katherinehhh
- **[工作流]**

  - 为工作流的日志增加 `workflowId` 的数据标识 ([#7789](https://github.com/nocobase/nocobase/pull/7789)) by @mytharcher
  - 修复服务拆分模式下，工作流插件不处于服务模式时仍然消费队列的问题 ([#7820](https://github.com/nocobase/nocobase/pull/7820)) by @mytharcher
- **[用户]** 字段名为 snake_case 风格时，索引字段重置不正确的问题 ([#7785](https://github.com/nocobase/nocobase/pull/7785)) by @2013xile
- **[工作流：自定义变量节点]** 修复变量节点缺失 config 时报错的问题 by @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.38](https://www.nocobase.com/cn/blog/v2.0.0-alpha.38)

*发布时间：2025-11-12*

### 🎉 新特性

- **[client]** 支持表格列操作的拖动 ([#7842](https://github.com/nocobase/nocobase/pull/7842)) by @zhangzhonghe
- **[数据可视化]** 新增图表 SQL 数据源 ([#7830](https://github.com/nocobase/nocobase/pull/7830)) by @heziqiang

### 🚀 优化

- **[client]** 在 RunJS 脚本上下文中新增对 Day.js 库的支持，便于进行日期和时间的操作。 ([#7841](https://github.com/nocobase/nocobase/pull/7841)) by @gchust

### 🐛 修复

- **[utils]**

  - 修复筛选按钮报错 “Invalid filter item type”  ([#7838](https://github.com/nocobase/nocobase/pull/7838)) by @zhangzhonghe
  - 为 intersect 策略增加对象类型支持 ([#7840](https://github.com/nocobase/nocobase/pull/7840)) by @chenos
  - 修复事件流报 “Unrecognized operation” 的错误 ([#7835](https://github.com/nocobase/nocobase/pull/7835)) by @zhangzhonghe
- **[client]**

  - 修复了表格中行记录数据更新后，行操作按钮的联动规则未重新执行的问题，现在在数据变更时联动规则能够正确重新应用。 ([#7832](https://github.com/nocobase/nocobase/pull/7832)) by @gchust
  - 修复代码编辑器中预览代码时如果使用了 jsx 语法会报错的问题 ([#7836](https://github.com/nocobase/nocobase/pull/7836)) by @gchust
- **[undefined]** 修复暗黑模式下的插件文档首页样式不正确的问题。 ([#7839](https://github.com/nocobase/nocobase/pull/7839)) by @gchust
- **[文件管理器]** 修复表格区块配置字段相关缺陷 ([#7843](https://github.com/nocobase/nocobase/pull/7843)) by @katherinehhh
- **[AI 员工]** 在 v1 页面隐藏 AI 员工对话按钮 ([#7829](https://github.com/nocobase/nocobase/pull/7829)) by @cgyrock
- **[数据可视化：EChrats]** 修复 ECharts 选项配置 labelType 不生效的问题 by @heziqiang
- **[邮件管理]**

  - 修复草稿问题 by @jiannx
  - 没有时间戳的情况下同步微软邮件已读状态 by @jiannx

### [v2.0.0-alpha.37](https://www.nocobase.com/cn/blog/v2.0.0-alpha.37)

*发布时间：2025-11-11*

### 🚀 优化

- **[client]**

  - 新增页面版本到 flow engine 上下文里 ([#7826](https://github.com/nocobase/nocobase/pull/7826)) by @gchust
  - 优化 markdown 编辑器 ([#7793](https://github.com/nocobase/nocobase/pull/7793)) by @katherinehhh
  - 2.0 区块适配 tableoid 字段 ([#7809](https://github.com/nocobase/nocobase/pull/7809)) by @katherinehhh
- **[数据可视化]** 更新图表提示栏和事件代码模板注释 ([#7814](https://github.com/nocobase/nocobase/pull/7814)) by @heziqiang
- **[权限控制]** 优化关系字段关联操作的权限控制逻辑 ([#7800](https://github.com/nocobase/nocobase/pull/7800)) by @2013xile
- **[认证：OIDC]** 增加请求超时时间 by @2013xile

### 🐛 修复

- **[server]** 修复消息队列在启用服务拆分模式后，工作进程发消息导致报错的问题 ([#7797](https://github.com/nocobase/nocobase/pull/7797)) by @mytharcher
- **[client]**

  - 当前数据表变量不应该可以从筛选组件的变量选择器中被选择 ([#7818](https://github.com/nocobase/nocobase/pull/7818)) by @gchust
  - 修复筛选表单关系字段报错 “value.replace is not a function” ([#7824](https://github.com/nocobase/nocobase/pull/7824)) by @zhangzhonghe
  - 修复 onChange 回调传参错误 ([#7807](https://github.com/nocobase/nocobase/pull/7807)) by @zhangzhonghe
- **[flow-engine]** 修复事件流修改后需要刷新页面才会生效的问题。 ([#7811](https://github.com/nocobase/nocobase/pull/7811)) by @gchust
- **[工作流]** 修复服务拆分模式下，工作流插件不处于服务模式时仍然消费队列的问题 ([#7820](https://github.com/nocobase/nocobase/pull/7820)) by @mytharcher
- **[工作流：审批]** 修复重查关系数据时未屏蔽主表字段的问题 by @mytharcher
- **[邮件管理]** 修复 outlook 内敛图片和同步问题 by @jiannx

### [v2.0.0-alpha.36](https://www.nocobase.com/cn/blog/v2.0.0-alpha.36)

*发布时间：2025-11-10*

### 🚀 优化

- **[flow-engine]** 优化页面标签的工具栏样式 ([#7795](https://github.com/nocobase/nocobase/pull/7795)) by @zhangzhonghe

### 🐛 修复

- **[flow-engine]**

  - 修复了子表单关系字段通过用户界面修改后，其变量无法正确解析的问题。 ([#7799](https://github.com/nocobase/nocobase/pull/7799)) by @gchust
  - 多主键记录编辑表单报错 ([#7798](https://github.com/nocobase/nocobase/pull/7798)) by @gchust
  - 修复了“打开视图”操作的部分配置未正常应用的问题，现在所有相关配置均能按预期正常运行。 ([#7790](https://github.com/nocobase/nocobase/pull/7790)) by @gchust
- **[client]**

  - 修复数据表选择器字段无法正确选择数据的问题 ([#7794](https://github.com/nocobase/nocobase/pull/7794)) by @katherinehhh
  - 表格区块操作列无法被隐藏 ([#7804](https://github.com/nocobase/nocobase/pull/7804)) by @gchust
  - 支持在 AI 员工指令里选择整个变量对象 ([#7791](https://github.com/nocobase/nocobase/pull/7791)) by @gchust
- **[用户]** 字段名为 snake_case 风格时，索引字段重置不正确的问题 ([#7785](https://github.com/nocobase/nocobase/pull/7785)) by @2013xile

### [v2.0.0-alpha.35](https://www.nocobase.com/cn/blog/v2.0.0-alpha.35)

*发布时间：2025-11-06*

### 🚀 优化

- **[flow-engine]** 支持延迟操作 flow model ([#7786](https://github.com/nocobase/nocobase/pull/7786)) by @gchust
- **[工作流：JavaScript 节点]** 修复传递到执行环境中的上层函数导致的安全漏洞，避免通过利用漏洞访问上层执行环境的问题 by @mytharcher

### 🐛 修复

- **[client]**

  - 修复详情区块简单分页出现空数据下一页的问题 ([#7784](https://github.com/nocobase/nocobase/pull/7784)) by @katherinehhh
  - 修复表格操作列和 jsColumn 列宽度设置不生效问题 ([#7777](https://github.com/nocobase/nocobase/pull/7777)) by @katherinehhh
  - 页面的事件流设置页面区块数据范围不生效 ([#7788](https://github.com/nocobase/nocobase/pull/7788)) by @gchust
- **[工作流]** 为工作流的日志增加 `workflowId` 的数据标识 ([#7789](https://github.com/nocobase/nocobase/pull/7789)) by @mytharcher
- **[工作流：自定义变量节点]** 修复变量节点缺失 config 时报错的问题 by @mytharcher
- **[邮件管理]** mailMessages 添加索引 by @jiannx
