### 🚀 优化

- **[undefined]** 将根目录包的许可证元数据更正为 Apache-2.0，并将 Node.js 最低版本提升至 22 ([#10448](https://github.com/nocobase/nocobase/pull/10448)) by @hongboji

- **[迁移管理]** 迁移列表中的文件大小改为易读的二进制单位，不再显示原始字节数 by @hongboji

- **[钉钉]** 钉钉 ActionCard 按钮链接支持配置为通过外部浏览器打开。 by @chenzhizdt

### 🐛 修复

- **[utils]** 防止通过 API 写入并在展示或编辑模式触发的富文本存储型 XSS。 ([#10425](https://github.com/nocobase/nocobase/pull/10425)) by @katherinehhh

- **[database]** 修复 SQL Server 字符串筛选无法匹配字面方括号及其他 `LIKE` 通配符的问题 ([#10436](https://github.com/nocobase/nocobase/pull/10436)) by @hongboji

- **[文件管理器]**
  - 修复 v2 文件表新建和编辑表单中缺少文件存储器选择项的问题。 ([#10439](https://github.com/nocobase/nocobase/pull/10439)) by @katherinehhh

  - 修复 AI 员工工作流节点无法访问 NocoBase 永久文件 URL，以及内部文件被不必要复制到 AI 存储的问题。 ([#10408](https://github.com/nocobase/nocobase/pull/10408)) by @cgyrock

- **[数据表字段：Markdown(Vditor)]** 恢复 V2 Markdown Vditor 字段的表格操作。 ([#10438](https://github.com/nocobase/nocobase/pull/10438)) by @katherinehhh

- **[AI 员工]** 修复包含图表的业务分析报告无法打开的问题。 ([#10440](https://github.com/nocobase/nocobase/pull/10440)) by @cgyrock

- **[文件存储：S3 (Pro)]** 修复 S3 Pro 备份文件超过 5 MB 时分片上传失败的问题。 by @mytharcher

