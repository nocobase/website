### 🚀 优化

- **[acl]** 支持 `acl.registerSnippet` 接口合并权限片段的配置 ([#8155](https://github.com/nocobase/nocobase/pull/8155)) by @mytharcher

- **[权限控制]** 不允许给用户设置 root 角色 ([#8180](https://github.com/nocobase/nocobase/pull/8180)) by @2013xile

### 🐛 修复

- **[授权设置]**
  - 修复 plugin-license ts构建异常 ([#8183](https://github.com/nocobase/nocobase/pull/8183)) by @jiannx

  - 授权优化，添加提示信息 ([#7993](https://github.com/nocobase/nocobase/pull/7993)) by @jiannx

- **[文件管理器]** 修复预览 OSS 中的 `.txt` 文件时，中文内容显示为乱码的问题 ([#8161](https://github.com/nocobase/nocobase/pull/8161)) by @mytharcher

- **[操作：导入记录]** 同步等待导入后触发的 `afterCreate` 事件完成 ([#8158](https://github.com/nocobase/nocobase/pull/8158)) by @2013xile

- **[数据表：连接外部数据（FDW）]** 修复大写表名表加载失败的问题 by @2013xile

- **[数据源：外部 SQL Server]** 修复 `encrypt` 和 `trustServerCertificate` 选项不可用的问题 by @2013xile

