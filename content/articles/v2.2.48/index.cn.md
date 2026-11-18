### 🐛 修复

- **[client-v2]** 修复侧边栏折叠按钮遮挡导航面板链接的问题。 ([#11546](https://github.com/nocobase/nocobase/pull/11546))

- **[工作流：循环节点]** 修复配置顶层循环的循环条件时无法选择局部变量的问题。 ([#11583](https://github.com/nocobase/nocobase/pull/11583))

- **[区块：模板（已废弃）]** 保存旧版区块模板布局现在需要「允许配置界面」权限。 ([#11538](https://github.com/nocobase/nocobase/pull/11538))

- **[备份管理器]** PostgreSQL 备份由更高主版本的 pg_dump 创建时，使用低版本 pg_restore 还原会在修改数据库前被拒绝。 ([#11585](https://github.com/nocobase/nocobase/pull/11585))

- **[工作流]** 修复 V1 工作流编辑器中配置循环内的 Webhook 响应等节点时报错的问题。 ([#11581](https://github.com/nocobase/nocobase/pull/11581))

- **[多空间]** 修复从当前空间的记录打开图片或文件预览时出现 404 的问题。

