汇总一周产品更新日志，最新发布可前往[我们的博客](https://www.nocobase.com/cn/blog/timeline)查看。

**NocoBase 目前更新包括三个分支：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

`main`：截至目前最稳定的版本，推荐安装此版本。

`next`：包含即将发布的新功能，经过初步测试的版本，可能存在部分已知或未知问题。主要面向测试用户，用于收集反馈和进一步优化功能。适合愿意提前体验新功能并提供反馈的测试用户。

`develop`：开发中的版本，包含最新的功能代码，可能尚未完成或存在较多不稳定因素，主要用于内部开发和快速迭代。适合对产品功能前沿发展感兴趣的技术用户，但可能存在较多问题或不完整功能，不建议在生产环境中使用。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### v2.2.6

*发布日期: 2026-09-02*

### 🚀 优化

- **[迁移管理]** 迁移列表中的文件大小改为易读的二进制单位，不再显示原始字节数 by @hongboji

### 🐛 修复

- **[utils]** 防止通过 API 写入并在展示或编辑模式触发的富文本存储型 XSS。 ([#10425](https://github.com/nocobase/nocobase/pull/10425)) by @katherinehhh
- **[database]** 修复 SQL Server 字符串筛选无法匹配字面方括号及其他 `LIKE` 通配符的问题 ([#10436](https://github.com/nocobase/nocobase/pull/10436)) by @hongboji
- **[数据表字段：Markdown(Vditor)]** 恢复 V2 Markdown Vditor 字段的表格操作。 ([#10438](https://github.com/nocobase/nocobase/pull/10438)) by @katherinehhh
- **[文件管理器]** 修复 v2 文件表新建和编辑表单中缺少文件存储器选择项的问题。 ([#10439](https://github.com/nocobase/nocobase/pull/10439)) by @katherinehhh
- **[文件存储：S3 (Pro)]** 修复 S3 Pro 备份文件超过 5 MB 时分片上传失败的问题。 by @mytharcher

### v2.2.5

*发布日期: 2026-08-31*

### 🐛 修复

- **[工作流]**

  - 优化工作流待办中心移动端详情处理：使用全宽抽屉并适配审批内容布局。 ([#10428](https://github.com/nocobase/nocobase/pull/10428)) by @mytharcher
  - 为工作流任务状态和 ID 添加联合索引，优化待处理任务的恢复查询。 ([#10427](https://github.com/nocobase/nocobase/pull/10427)) by @mytharcher
  - 修复定时任务（静态模式）在「结束于」之后仍会多执行一次的问题 ([#10411](https://github.com/nocobase/nocobase/pull/10411)) by @Tespera
- **[通知管理]** 修复工作流用户接收人变量显示“Variable parsing failed”的问题，并统一各工作流节点的用户选择组件。 ([#10432](https://github.com/nocobase/nocobase/pull/10432)) by @mytharcher
- **[工作流：审批]**

  - 优化审批任务详情及远程表单在移动端窄屏下的布局。 by @mytharcher
  - 修复审批人变量显示“Variable parsing failed”的问题，并复用工作流公共用户选择组件。 by @mytharcher

### v2.2.4

*发布日期: 2026-08-28*

### 🐛 修复

- **[AI: 知识库]** 修复 Root 用户使用 AI 员工时被错误提示没有知识库访问权限的问题 by @hongboji
- **[工作流：审批]** 修复 v1 工作流页面中子流程节点选择审批工作流时不显示触发器变量表单的问题。 by @mytharcher
- **[钉钉]** 修复 v1 客户端中钉钉 Stream 模式同步源无法提交的问题。 by @chenzhizdt


## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### v2.3.0-beta.6

*发布日期: 2026-08-31*

### 🐛 修复

- **[工作流]**

  - 为工作流任务状态和 ID 添加联合索引，优化待处理任务的恢复查询。 ([#10427](https://github.com/nocobase/nocobase/pull/10427)) by @mytharcher
  - 修复定时任务（静态模式）在「结束于」之后仍会多执行一次的问题 ([#10411](https://github.com/nocobase/nocobase/pull/10411)) by @Tespera
  - 优化工作流待办中心移动端详情处理：使用全宽抽屉并适配审批内容布局。 ([#10428](https://github.com/nocobase/nocobase/pull/10428)) by @mytharcher
- **[通知管理]** 修复工作流用户接收人变量显示“Variable parsing failed”的问题，并统一各工作流节点的用户选择组件。 ([#10432](https://github.com/nocobase/nocobase/pull/10432)) by @mytharcher
- **[工作流：审批]**

  - 修复审批人变量显示“Variable parsing failed”的问题，并复用工作流公共用户选择组件。 by @mytharcher
  - 优化审批任务详情及远程表单在移动端窄屏下的布局。 by @mytharcher
- **[钉钉]** 修复 v1 客户端中钉钉 Stream 模式同步源无法提交的问题。 by @chenzhizdt

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### v2.4.0-alpha.3

*发布日期: 2026-09-02*

### 🚀 优化

- **[AI 员工]** 移除持久化的 AI 上下文数据源设置和选择器，同时保留直接查询数据源的能力。 ([#10450](https://github.com/nocobase/nocobase/pull/10450)) by @cgyrock

### v2.4.0-alpha.2

*发布日期: 2026-09-02*

### 🚀 优化

- **[undefined]** 将根目录包的许可证元数据更正为 Apache-2.0，并将 Node.js 最低版本提升至 22 ([#10448](https://github.com/nocobase/nocobase/pull/10448)) by @hongboji
- **[钉钉]** 钉钉 ActionCard 按钮链接支持配置为通过外部浏览器打开。 by @chenzhizdt

### 🐛 修复

- **[文件管理器]** 修复 AI 员工工作流节点无法访问 NocoBase 永久文件 URL，以及内部文件被不必要复制到 AI 存储的问题。 ([#10408](https://github.com/nocobase/nocobase/pull/10408)) by @cgyrock
- **[AI 员工]** 修复包含图表的业务分析报告无法打开的问题。 ([#10440](https://github.com/nocobase/nocobase/pull/10440)) by @cgyrock

### v2.4.0-alpha.1

*发布日期: 2026-09-02*

### 🚀 优化

- **[迁移管理]** 迁移列表中的文件大小改为易读的二进制单位，不再显示原始字节数 by @hongboji

### 🐛 修复

- **[database]** 修复 SQL Server 字符串筛选无法匹配字面方括号及其他 `LIKE` 通配符的问题 ([#10436](https://github.com/nocobase/nocobase/pull/10436)) by @hongboji
- **[utils]** 防止通过 API 写入并在展示或编辑模式触发的富文本存储型 XSS。 ([#10425](https://github.com/nocobase/nocobase/pull/10425)) by @katherinehhh
- **[数据表字段：Markdown(Vditor)]** 恢复 V2 Markdown Vditor 字段的表格操作。 ([#10438](https://github.com/nocobase/nocobase/pull/10438)) by @katherinehhh
- **[文件管理器]** 修复 v2 文件表新建和编辑表单中缺少文件存储器选择项的问题。 ([#10439](https://github.com/nocobase/nocobase/pull/10439)) by @katherinehhh
- **[文件存储：S3 (Pro)]** 修复 S3 Pro 备份文件超过 5 MB 时分片上传失败的问题。 by @mytharcher
