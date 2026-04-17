汇总一周产品更新日志，最新发布可以[前往我们的博客查看](https://www.nocobase.com/cn/blog/timeline)。

**NocoBase 目前更新包括的版本更新包括三个分支：`main` ，`next`和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

`main` ：截止目前最稳定的版本，推荐安装此版本。

`next`：包含即将发布的新功能，经过初步测试的版本，可能存在部分已知或未知问题。主要面向测试用户，用于收集反馈和进一步优化功能。适合愿意提前体验新功能并提供反馈的测试用户。

`develop`：开发中的版本，包含最新的功能代码，可能尚未完成或存在较多不稳定因素，主要用于内部开发和快速迭代。适合对产品功能前沿发展感兴趣的技术用户，但可能存在较多问题或不完整功能，不建议在生产环境中使用。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.31](https://www.nocobase.com/cn/blog/v2.0.31)

*发布日期：2026-04-01*

### 🚀 优化

- **[AI 员工]** 优化 deepseek 处理不支持的文件类型时的提示 ([#9003](https://github.com/nocobase/nocobase/pull/9003)) by @cgyrock
- **[工作流]** 调整启用开关尺寸为小尺寸 ([#9010](https://github.com/nocobase/nocobase/pull/9010)) by @mytharcher

### 🐛 修复

- **[client]** 修复表格中关联字段的文案首次渲染未正确显示 ([#9007](https://github.com/nocobase/nocobase/pull/9007)) by @jiannx
- **[flow-engine]** 修复弹窗中配置菜单被裁剪的问题 ([#9005](https://github.com/nocobase/nocobase/pull/9005)) by @gchust
- **[通知：站内信]** 修复站内信消息操作的白名单处理，避非本人免越权操作 ([#9001](https://github.com/nocobase/nocobase/pull/9001)) by @mytharcher
- **[AI 员工]** 修复使用千问大模型时联网搜索行为异常的问题 ([#9012](https://github.com/nocobase/nocobase/pull/9012)) by @cgyrock

### [v2.0.30](https://www.nocobase.com/cn/blog/v2.0.30)

*发布日期：2026-03-30*

### 🚀 优化

- **[工作流：JavaScript 节点]** 将 `isolated-vm` 添加为 JavaScript 节点的默认执行引擎 ([#8973](https://github.com/nocobase/nocobase/pull/8973)) by @mytharcher
  参考文档：[JavaScript 节点](https://docs.nocobase.com/cn/workflow/nodes/javascript)

### 🐛 修复

- **[client]** 修复多级弹窗时表单数据修改后关闭弹窗二次确认消息不正确的问题。 ([#8944](https://github.com/nocobase/nocobase/pull/8944)) by @gchust
- **[工作流：SQL 节点]** 修复 SQL 节点安全问题 ([#8989](https://github.com/nocobase/nocobase/pull/8989)) by @mytharcher
- **[AI 员工]** AI 会话接口增加所有权校验 ([#8993](https://github.com/nocobase/nocobase/pull/8993)) by @cgyrock
- **[工作流：审批]** 修复历史迁移脚本版本限制，以避免在新版本部署后启动报错的问题 by @mytharcher

### [v2.0.29](https://www.nocobase.com/cn/blog/v2.0.29)

*发布日期：2026-03-30*

### 🚀 优化

- **[undefined]** 通过静默解压 LibreOffice 和 Oracle Instant Client, 减少服务器启动时的冗余日志 ([#8984](https://github.com/nocobase/nocobase/pull/8984)) by @Rishabh1925

### 🐛 修复

- **[client]** 修复变量表达式包含空格时名称无法正常显示的问题 ([#8988](https://github.com/nocobase/nocobase/pull/8988)) by @mytharcher
- **[flow-engine]** 修复配置态 UI 组件宽度太小时无法选中菜单的问题。 ([#8954](https://github.com/nocobase/nocobase/pull/8954)) by @gchust
- **[数据可视化]** 图表在使用带变量筛选条件时，首次渲染无法正确解析变量值 ([#8964](https://github.com/nocobase/nocobase/pull/8964)) by @2013xile

### [v2.0.28](https://www.nocobase.com/cn/blog/v2.0.28)

*发布日期：2026-03-27*

### 🐛 修复

- **[操作：导入记录]** 修复开启空间插件后导入失败 ([#8968](https://github.com/nocobase/nocobase/pull/8968)) by @jiannx
- **[数据可视化]** 修复开启空间插件后，root 角色图表数据统计异常 ([#8969](https://github.com/nocobase/nocobase/pull/8969)) by @jiannx
- **[工作流：JavaScript 节点]** 修复代码执行安全问题 ([#8967](https://github.com/nocobase/nocobase/pull/8967)) by @mytharcher
- **[AI 员工]** 调整 AI 对话中工具卡片组件之间的间隙 ([#8965](https://github.com/nocobase/nocobase/pull/8965)) by @cgyrock
- **[操作：导出记录]** 限制导入和导出配置多层关联字段 ([#8893](https://github.com/nocobase/nocobase/pull/8893)) by @jiannx
- **[操作：导入记录 Pro]** 限制导入和导出配置多层关联字段 by @jiannx

### [v2.0.27](https://www.nocobase.com/cn/blog/v2.0.27)

*发布日期：2026-03-26*

### 🚀 优化

- **[工作流]** 为每页数量参数增加变量支持 ([#8951](https://github.com/nocobase/nocobase/pull/8951)) by @mytharcher
- **[工作流：子流程]** 为防止工作流遇到异常时卡住增加防御性逻辑 by @mytharcher

### 🐛 修复

- **[client]** 修复弹窗内树表添加子节点异常 ([#8872](https://github.com/nocobase/nocobase/pull/8872)) by @jiannx
- **[前端流引擎]** 移除从 uiSchema 表复制的遗留事件，避免触发调用后报错 ([#8957](https://github.com/nocobase/nocobase/pull/8957)) by @mytharcher
- **[用户认证]** 修复 acl 支持自定义 state 筛选参数 ([#8918](https://github.com/nocobase/nocobase/pull/8918)) by @jiannx
- **[邮件管理]** 修复使用模板时覆盖了签名 by @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.13](https://www.nocobase.com/cn/blog/v2.1.0-alpha.13)

*发布日期：2026-03-27*

### 🎉 新特性

- **[client]** 事件流添加 JS 变量 ([#8938](https://github.com/nocobase/nocobase/pull/8938)) by @jiannx

### 🚀 优化

- **[client]** 支持通过 runjs 设置字段样式 ([#8933](https://github.com/nocobase/nocobase/pull/8933)) by @jiannx
- **[flow-engine]** 增强页面搭建相关的 API 的 schema 验证。 ([#8881](https://github.com/nocobase/nocobase/pull/8881)) by @gchust
- **[工作流：操作前事件]** 为触发器和节点增加验证规则 ([#8971](https://github.com/nocobase/nocobase/pull/8971)) by @mytharcher
- **[工作流]** 为每页数量参数增加变量支持 ([#8951](https://github.com/nocobase/nocobase/pull/8951)) by @mytharcher
- **[工作流：Webhook 触发器]** 为创建触发器和节点的 API 增加验证处理 by @mytharcher
- **[工作流：子流程]**

  - 为新增节点 API 增加验证处理 by @mytharcher
  - 为防止工作流遇到异常时卡住增加防御性逻辑 by @mytharcher
- **[工作流：审批]** 为触发器和节点 API 增加验证处理 by @mytharcher

### 🐛 修复

- **[client]** 修复弹窗内树表添加子节点异常 ([#8872](https://github.com/nocobase/nocobase/pull/8872)) by @jiannx
- **[操作：导出记录]** 限制导入和导出配置多层关联字段 ([#8893](https://github.com/nocobase/nocobase/pull/8893)) by @jiannx
- **[数据可视化]** 修复开启空间插件后，root 角色图表数据统计异常 ([#8969](https://github.com/nocobase/nocobase/pull/8969)) by @jiannx
- **[操作：导入记录]** 修复开启空间插件后导入失败 ([#8968](https://github.com/nocobase/nocobase/pull/8968)) by @jiannx
- **[工作流：JavaScript 节点]** 修复代码执行安全问题 ([#8967](https://github.com/nocobase/nocobase/pull/8967)) by @mytharcher
- **[AI 员工]** 调整 AI 对话中工具卡片组件之间的间隙 ([#8965](https://github.com/nocobase/nocobase/pull/8965)) by @cgyrock
- **[前端流引擎]** 移除从 uiSchema 表复制的遗留事件，避免触发调用后报错 ([#8957](https://github.com/nocobase/nocobase/pull/8957)) by @mytharcher
- **[用户认证]** 修复 acl 支持自定义 state 筛选参数 ([#8918](https://github.com/nocobase/nocobase/pull/8918)) by @jiannx
- **[操作：导入记录 Pro]** 限制导入和导出配置多层关联字段 by @jiannx
- **[邮件管理]** 修复使用模板时覆盖了签名 by @jiannx
