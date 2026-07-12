这是一次**围绕 V2 体验**的重要升级。这个版本带来了 **多工作区**、**新移动端**、**新评论区块**，同时继续补齐 AI 知识库和工作流能力。对正在使用 V2 的团队来说，更值得关注的是全新的 `/v/` 分支——它会作为面向 V2 的独立前端入口，承接后续的功能演进。

## 新特性

### 多工作区

仅 v 分支支持

![](https://static-docs.nocobase.com/2026-07-10-08-06-15.png)

### 新移动端

仅 v 分支支持

![](https://static-docs.nocobase.com/2026-07-10-08-04-59.png)

### 新评论区块

新评论区块将不再局限于主数据源的评论表

![](https://static-docs.nocobase.com/Comments-07-01-2026_12_03_PM%20(1).png)

详细用法见：

- [评论区块](https://docs.nocobase.com/cn/interface-builder/blocks/data-blocks/comment)

### AI 知识库优化

这个版本继续优化了 AI 知识库相关能力

![](https://static-docs.nocobase.com/20260617003505.png)

详细用法见：

- [AI 知识库](https://docs.nocobase.com/cn/ai-employees/knowledge-base/knowledge-base/)

### 工作流：数据库事务节点

工作流新增了数据库事务节点

![](https://static-docs.nocobase.com/20260610205505.png)

详细用法见：

- [数据库事务节点](https://docs.nocobase.com/cn/workflow/nodes/transaction)

## 新增的 `/v/` 分支

`/v/` 是全新的独立前端入口，并且会独立构建。这个分支会完全移除 V1 的历史遗留内容，只保留面向 V2 的能力。

如果你正在规划升级路径，这一节最值得重点看。后续很多新能力都会优先落在 `/v/` 分支上。

### 设置应用的默认入口

你可以通过环境变量 `APP_CLIENT_ENTRY_MODE` 控制应用入口模式：

- `legacy-default`：`/` 和 `/v/` 都可以访问，默认入口是 `/`
- `modern-default`：`/` 和 `/v/` 都可以访问，默认入口是 `/v/`
- `modern-only`：只能访问 `/v/`

### `/v/` 分支当前情况

目前 `/v/` 分支有这些限制和变化：

- 插件列表不再显示废弃插件和仅支持 1.x 的插件
- 不再支持新增 Page V1
- 公开表单会区分 v1 和 v2，`/v/` 分支不显示 v1 版本的公开表单
- 审批工作流如果要在 `/v/` 分支使用，需要重新配置相关 UI
- 新移动端只支持 `/v/` 分支
- 多工作区只支持 `/v/` 分支
- App supervisor 中子应用的 Display 配置已移除，可以改用工作区
- 「AI 员工 / 数据源」标签页已移除
- 移除了评论表、日历表、表达式表、外部数据表
- 工作流人工节点暂时还不支持 `/v/` 分支
- 暂时还不支持给菜单添加徽标数

### 以下插件不再支持 V2

- `@nocobase/plugin-audit-logs`
- `@nocobase/plugin-backup-restore`
- `@nocobase/plugin-block-multi-step-form`
- `@nocobase/plugin-block-tree`
- `@nocobase/plugin-charts`
- `@nocobase/plugin-collection-fdw`
- `@nocobase/plugin-comments`
- `@nocobase/plugin-custom-variables`
- `@nocobase/plugin-data-visualization-echarts`
- `@nocobase/plugin-disable-pm-add`
- `@nocobase/plugin-field-component-mask`
- `@nocobase/plugin-graph-collection-manager`
- `@nocobase/plugin-mobile-client`
- `@nocobase/plugin-mobile`
- `@nocobase/plugin-mock-collections`
- `@nocobase/plugin-multi-app-manager`
- `@nocobase/plugin-multi-app-share-collection`
- `@nocobase/plugin-notifications`
- `@nocobase/plugin-snapshot-field`
