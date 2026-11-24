### 🚀 优化

- **[client-v2]** 缩小了移动端横向详情区块的字段间距。 ([#11644](https://github.com/nocobase/nocobase/pull/11644))

- **[undefined]** NocoBase Docker 镜像中的内置 Nginx 已升级至 1.30.7。 ([#11620](https://github.com/nocobase/nocobase/pull/11620))

- **[AI 员工]**
  - 隐藏 AI 员工配置页的「数据源」标签和对话框上下文菜单中的「数据源」选项。 ([#11621](https://github.com/nocobase/nocobase/pull/11621))

  - AI 员工对话遇到多层包装的 RangeError 时，服务端日志可显示底层调用栈，方便定位问题。 ([#11640](https://github.com/nocobase/nocobase/pull/11640))

### 🐛 修复

- **[client-v2]**
  - 修复现代页面先以浏览模式打开，再开启 UI Editor 添加区块后，刷新时区块消失的问题。 ([#11672](https://github.com/nocobase/nocobase/pull/11672))

  - 缩小了手机窄屏下详情区块和网格卡片中横向只读字段的间距，多行文本也更紧凑。 ([#11673](https://github.com/nocobase/nocobase/pull/11673))

  - 修复一对多区块中，目标表配置多个记录唯一标识字段时删除记录失败的问题，包含 v1 和 v2 批量删除。 ([#11423](https://github.com/nocobase/nocobase/pull/11423))

  - 修复侧边栏折叠按钮遮挡导航面板链接的问题。 ([#11546](https://github.com/nocobase/nocobase/pull/11546))

- **[cli]** `nb api resource list` 现支持通过 `--space <名称>` 查询指定空间的记录。 ([#11599](https://github.com/nocobase/nocobase/pull/11599))
参考文档：[资源列表](https://github.com/nocobase/nocobase/pull/11615)
- **[client]** 在旧版 iframe 的 HTML 编辑框中新建聚合变量后，可以直接在当前弹窗内选择并插入。 ([#11607](https://github.com/nocobase/nocobase/pull/11607))

- **[错误处理器]** 保存记录或关联数据时，重复值和非空字段提示会在原文前显示所属数据表的标题。 ([#11638](https://github.com/nocobase/nocobase/pull/11638))

- **[自定义变量]** 修复配置徽章聚合变量时，多行文本筛选条件无法输入内容的问题。 ([#11688](https://github.com/nocobase/nocobase/pull/11688))

- **[文件管理器]**
  - 展开文件的存储器关联时，保留文件规则、访问地址等普通字段，隐藏存储引擎选项和服务端请求设置。 ([#11611](https://github.com/nocobase/nocobase/pull/11611))

  - 修复刷新外部数据源或读取带有其他关联的记录时可能报错的问题。 ([#11698](https://github.com/nocobase/nocobase/pull/11698))

- **[表单草稿]**
  - 浏览器无法打开草稿库时，表单会提示本次无法保存草稿，用户仍可正常填写并提交。 ([#11625](https://github.com/nocobase/nocobase/pull/11625))

  - 浏览器读取或保存本地草稿失败时，仍可正常打开、填写和提交表单。 ([#11671](https://github.com/nocobase/nocobase/pull/11671))

- **[UI 模板]** 创建、编辑、删除界面模板及访问模板引用记录需要模板管理权限。登录用户仍可读取模板。 ([#11537](https://github.com/nocobase/nocobase/pull/11537))

- **[通知：站内信]** 修复在移动端收件箱打开渠道时可能显示其他渠道消息的问题。 ([#11662](https://github.com/nocobase/nocobase/pull/11662))

- **[公开表单]** 公开表单现在只接受提交到其配置的数据源和数据表的数据。 ([#11536](https://github.com/nocobase/nocobase/pull/11536))

- **[AI 员工]** 修复登录页和双因素验证页提前请求 AI 员工列表及未读数的问题。 ([#11691](https://github.com/nocobase/nocobase/pull/11691))

- **[工作流]** 修复 V1 工作流编辑器中配置循环内的 Webhook 响应等节点时报错的问题。 ([#11581](https://github.com/nocobase/nocobase/pull/11581))

- **[数据源：主数据库]** 修复从主数据库加载的表无法同步字段的问题，并保留物理表名带配置前缀时已有字段的元数据 ([#11327](https://github.com/nocobase/nocobase/pull/11327))

- **[工作流：循环节点]** 修复配置顶层循环的循环条件时无法选择局部变量的问题。 ([#11583](https://github.com/nocobase/nocobase/pull/11583))

- **[通知管理]** 工作流提供无效的用户接收人配置时，通知会停止发送，并在发送日志中提示如何更正。 ([#11680](https://github.com/nocobase/nocobase/pull/11680))

- **[区块：模板（已废弃）]** 保存旧版区块模板布局现在需要「允许配置界面」权限。 ([#11538](https://github.com/nocobase/nocobase/pull/11538))

- **[备份管理器]** PostgreSQL 备份由更高主版本的 pg_dump 创建时，使用低版本 pg_restore 还原会在修改数据库前被拒绝。 ([#11585](https://github.com/nocobase/nocobase/pull/11585))

- **[多空间]** 修复从当前空间的记录打开图片或文件预览时出现 404 的问题。

- **[数据源：REST API]**
  - 修复 REST API 数据源插件生成 TypeScript 声明文件时导致发布构建失败的问题。

  - 修复 REST API 数据表字段清空后重新提取可能无法保存、已有字段的显示名称修改可能丢失的问题。

- **[数据源：外部 SQL Server]** SQL Server 外部数据源现在只列出 dbo 架构下的表和视图。

- **[迁移管理]**
  - PostgreSQL 迁移包现在会排除无关序列，目标库缺少其他表使用的 schema 时也能还原所选表。

  - 修复 PostgreSQL 迁移时多行字段中以 `--` 开头的行丢失、换行符改变或导出的数据无法恢复的问题。

- **[数据源：外部 Oracle]** Oracle Thin 现在按配置的 Schema 列出数据表，标记已选但不可用的历史表，并在新提交的表不可用时提示错误。

