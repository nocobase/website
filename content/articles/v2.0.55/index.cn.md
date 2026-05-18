### 🚀 优化

- **[AI 员工]** 新增向量库写入校验：检测到同名数据表时弹出提示，避免误操作覆盖 ([#9497](https://github.com/nocobase/nocobase/pull/9497)) by @cgyrock

- **[AI: 知识库]** 新增向量库写入校验：检测到同名数据表时弹出提示，避免误操作覆盖 by @cgyrock

### 🐛 修复

- **[client]**
  - 修复无法在操作按钮事件流中解析当前弹窗记录变量的问题。 ([#9495](https://github.com/nocobase/nocobase/pull/9495)) by @gchust

  - 修复表单提交时子表单里的 js field 值没有被正确设置的问题。 ([#9496](https://github.com/nocobase/nocobase/pull/9496)) by @gchust

- **[文件管理器]** 修复文件管理器 `tx-cos` 上传后缺少文件大小元数据的问题。 ([#9499](https://github.com/nocobase/nocobase/pull/9499)) by @mytharcher

- **[数据源：主数据库]** 修复同步字段后，字段选项会写入 schema 的问题 ([#9505](https://github.com/nocobase/nocobase/pull/9505)) by @2013xile

- **[WEB 客户端]** 删除菜单时移除内部区块数据。 ([#9459](https://github.com/nocobase/nocobase/pull/9459)) by @gchust

- **[AI 员工]** 修复 AI 员工读取 OSS 存储文件报错问题 ([#9493](https://github.com/nocobase/nocobase/pull/9493)) by @cgyrock

- **[操作：导入记录]** 修复导入日期类字段后展示错误的时间的问题 ([#9463](https://github.com/nocobase/nocobase/pull/9463)) by @mytharcher

- **[操作：导出记录 Pro]** 修复导出附件 URL 字段提供的附件时的报错 by @mytharcher

- **[操作：导入记录 Pro]** 修复专业版 xlsx 导入的时区处理问题 by @mytharcher

