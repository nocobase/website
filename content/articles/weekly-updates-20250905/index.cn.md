汇总一周产品更新日志，最新发布可以[前往我们的博客查看](https://www.nocobase.com/cn/blog/timeline)。

**NocoBase 目前更新包括的版本更新包括三个分支：`main` ，`next`和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

`main` ：截止目前最稳定的版本，推荐安装此版本。

`next`：包含即将发布的新功能，经过初步测试的版本，可能存在部分已知或未知问题。主要面向测试用户，用于收集反馈和进一步优化功能。适合愿意提前体验新功能并提供反馈的测试用户。

`develop`：开发中的版本，包含最新的功能代码，可能尚未完成或存在较多不稳定因素，主要用于内部开发和快速迭代。适合对产品功能前沿发展感兴趣的技术用户，但可能存在较多问题或不完整功能，不建议在生产环境中使用。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.23](https://www.nocobase.com/cn/blog/v1.8.23)

*发布时间：2025-09-03*

#### 🚀 优化

- **[database]** 优化了 list API 的统计条数查询，减少资源占用。 ([#7453](https://github.com/nocobase/nocobase/pull/7453)) by @aaaaaajie
- **[通知：站内信]** 支持站内信配置消息提示的自动关闭等待时间 ([#7472](https://github.com/nocobase/nocobase/pull/7472)) by @mytharcher
- **[工作流：通知节点]** 支持通知节点测试执行 ([#7470](https://github.com/nocobase/nocobase/pull/7470)) by @mytharcher

#### 🐛 修复

- **[client]**

  - 修复编辑表单区块中，阅读态关系字段在切换为标签组件时渲染失败的问题 ([#7468](https://github.com/nocobase/nocobase/pull/7468)) by @katherinehhh
  - 修复选定日期为最小允许日期时时间选择限制无效的问题 ([#7461](https://github.com/nocobase/nocobase/pull/7461)) by @katherinehhh
- **[移动端]** 修复移动端不含时区的日期字段未正确显示时分秒 ([#7473](https://github.com/nocobase/nocobase/pull/7473)) by @katherinehhh
- **[公开表单]** 修复公开表单字段配置变量作为默认值时未生效的问题 ([#7467](https://github.com/nocobase/nocobase/pull/7467)) by @katherinehhh
- **[操作：导入记录]** 修复导入xlsx重复数据时报错行数显示错误 ([#7440](https://github.com/nocobase/nocobase/pull/7440)) by @aaaaaajie
- **[数据表：树]** 在删除树表之后移除和该表有关的数据库事件 ([#7459](https://github.com/nocobase/nocobase/pull/7459)) by @2013xile
- **[工作流：自定义操作事件]** 修复自定义操作事件初始化后不能直接手动执行的问题 by @mytharcher
- **[工作流：子流程]** 修复子流程重复恢复执行的问题 by @mytharcher
- **[工作流：审批]** 对非当前审批人，不展示流程表格中的对应查看按钮 by @mytharcher
