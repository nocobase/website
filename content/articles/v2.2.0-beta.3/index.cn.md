### 🎉 新特性

- **[工作流：邮件发送节点]** 为工作流邮件节点新增附件发送能力。 ([#9724](https://github.com/nocobase/nocobase/pull/9724)) by @mytharcher

- **[工作流]** 新增工作流数据库事务作用域支持。 ([#9742](https://github.com/nocobase/nocobase/pull/9742)) by @mytharcher
参考文档：[数据库事务](docs/docs/cn/workflow/nodes/transaction.md)
- **[工作流：数据库事务节点]** 新增数据库事务工作流节点插件。 by @mytharcher

### 🚀 优化

- **[client-v2]** 表单子表格关系字段列数据范围支持当前项变量。 ([#9444](https://github.com/nocobase/nocobase/pull/9444)) by @gchust

- **[undefined]** 将版本控制插件的中文文档名称统一为「版本控制」。 ([#9776](https://github.com/nocobase/nocobase/pull/9776)) by @cgyrock

- **[文件管理器]** 为文件管理器的 PDF 预览增加可选择文本支持，适用于包含内嵌文本的 PDF。 ([#9781](https://github.com/nocobase/nocobase/pull/9781)) by @mytharcher

- **[用户]** 优化用户和权限 v2 页面布局及部门树行为。 ([#9780](https://github.com/nocobase/nocobase/pull/9780)) by @jiannx

- **[操作：批量编辑]** 优化 v2 操作插件加载方式，并保持已迁移操作按钮的顺序稳定。 ([#9778](https://github.com/nocobase/nocobase/pull/9778)) by @katherinehhh

- **[版本控制]** 将版本控制插件的中文显示名称改为「版本控制」。 by @cgyrock

### 🐛 修复

- **[cli-v1]** 修复 create-nocobase-app 创建的项目从 2.0 升级到 2.1 运行 yarn dev 报错的问题。 ([#9775](https://github.com/nocobase/nocobase/pull/9775)) by @Molunerfinn

- **[flow-engine]** 修复 v2 单行文本和多行文本字段中的越南语和中文输入法输入问题。 ([#9764](https://github.com/nocobase/nocobase/pull/9764)) by @katherinehhh

- **[client-v2]** 修复迁移进度未显示专用进度视图的问题 ([#9761](https://github.com/nocobase/nocobase/pull/9761)) by @2013xile

- **[server]** 修复 `pm:enable` 中不安全插件名处理，避免插件解析过程导致本地文件包含风险。 ([#9701](https://github.com/nocobase/nocobase/pull/9701)) by @mytharcher

- **[异步任务管理器]** 修复异步任务文件下载时 `filterByTk` 缺失导致数据库查询报错的问题。 ([#9705](https://github.com/nocobase/nocobase/pull/9705)) by @mytharcher

- **[文件管理器]** 修复 pdf.js worker 模块加载异常导致 PDF 预览失败的问题。 ([#9779](https://github.com/nocobase/nocobase/pull/9779)) by @mytharcher

- **[区块：看板]** 修复非编辑态打开日历、甘特图和看板区块时意外持久化隐藏弹窗操作并重复发送删除请求的问题。 ([#9772](https://github.com/nocobase/nocobase/pull/9772)) by @jiannx

- **[操作：导出记录 Pro]** 改进 v2 导入/导出 Pro 的处理模式设置和提示说明。 by @katherinehhh

- **[多空间]** 修复空间管理员没有用户邮箱字段权限时添加空间用户报无权限的问题。 by @jiannx

- **[迁移管理]** 修复导入大型迁移数据文件时可能失败的问题 by @2013xile

- **[模板打印]** 在模板打印开始前拒绝不支持的模板文件类型 by @2013xile

