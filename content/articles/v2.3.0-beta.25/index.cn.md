### 🐛 修复

- **[client-v2]**
  - 修复一对多区块中，目标表配置多个记录唯一标识字段时删除记录失败的问题，包含 v1 和 v2 批量删除。 ([#11423](https://github.com/nocobase/nocobase/pull/11423))

  - 修复侧边栏折叠按钮遮挡导航面板链接的问题。 ([#11546](https://github.com/nocobase/nocobase/pull/11546))

- **[UI 模板]** 创建、编辑、删除界面模板及访问模板引用记录需要模板管理权限。登录用户仍可读取模板。 ([#11537](https://github.com/nocobase/nocobase/pull/11537))

- **[区块：模板（已废弃）]** 保存旧版区块模板布局现在需要「允许配置界面」权限。 ([#11538](https://github.com/nocobase/nocobase/pull/11538))

- **[工作流：循环节点]** 修复配置顶层循环的循环条件时无法选择局部变量的问题。 ([#11583](https://github.com/nocobase/nocobase/pull/11583))

- **[备份管理器]** PostgreSQL 备份由更高主版本的 pg_dump 创建时，使用低版本 pg_restore 还原会在修改数据库前被拒绝。 ([#11585](https://github.com/nocobase/nocobase/pull/11585))

- **[数据源：主数据库]** 修复从主数据库加载的表无法同步字段的问题，并保留物理表名带配置前缀时已有字段的元数据 ([#11327](https://github.com/nocobase/nocobase/pull/11327))

- **[工作流]** 修复 V1 工作流编辑器中配置循环内的 Webhook 响应等节点时报错的问题。 ([#11581](https://github.com/nocobase/nocobase/pull/11581))

- **[公开表单]** 公开表单现在只接受提交到其配置的数据源和数据表的数据。 ([#11536](https://github.com/nocobase/nocobase/pull/11536))

- **[多空间]** 修复从当前空间的记录打开图片或文件预览时出现 404 的问题。

- **[迁移管理]** 修复 PostgreSQL 迁移时多行字段中以 `--` 开头的行丢失、换行符改变或导出的数据无法恢复的问题。

- **[数据源：外部 Oracle]** Oracle Thin 现在按配置的 Schema 列出数据表，标记已选但不可用的历史表，并在新提交的表不可用时提示错误。

