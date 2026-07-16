这是一次**围绕 V2 体验**的重要升级。这个版本带来了 **多工作区**、**新移动端**、**新评论区块**，同时继续提升 AI 知识库和工作流能力。对正在使用 V2 的团队来说，更值得关注的是全新的 `/v/` 分支——它会作为面向 V2 的独立前端入口，承接后续的功能演进。

## 新特性

### 新增 `/v/` 分支

`/v/` 是全新的独立前端入口，并且会独立构建。2.0 版本里我们对前端做了非常大的重构，当时为了兼容性，我们还保留了对 V1 模块、页面等的兼容。而 `/v/` 分支则会完全移除 V1 的历史遗留内容，无法再创建或者渲染 V1 的页面和区块，只保留面向 V2 的能力，同时 `/v/` 分支在性能方面做了较大优化，这个分支将会是 NocoBase 团队后续主要迭代的分支。

> 我们建议，生产环境如果全部是以 v2 Page 为主的用户，可以考虑开始使用 `/v/` 分支，后续的一些新功能迭代将能直接使用；
>
> 如果是以 v2 Page 为主，但是有少部分 v1 Page 的用户，可以考虑先将 v1 Page 迁移到 v2 Page 之后，再考虑使用 `/v/` 分支；
>
> 如果是以 v1 Page 为主的用户，则不建议直接切换到 `/v/` 分支。我们建议你们先将当前 v1 Page 迁移到 v2 Page 之后，再切换到 `/v/` 分支。

通常只要在原有的路径前面加上 `/v/` 前缀，即可进入 `/v/` 分支。

比如：

```
# 原本的路径
https://nocobase.example.com/admin/1xl0epqn6q3

# v 分支路径
https://nocobase.example.com/v/admin/1xl0epqn6q3
```

#### 设置应用的默认入口

你可以通过环境变量 `APP_CLIENT_ENTRY_MODE` 控制应用入口模式：

* `legacy-default`：`/` 和 `/v/` 都可以访问，默认入口是 `/`
* `modern-default`：`/` 和 `/v/` 都可以访问，默认入口是 `/v/`
* `modern-only`：只能访问 `/v/`

#### `/v/` 分支当前情况

`/v/` 分支是个渐进式迁移的分支，进入 `/v/` 分支后，将会有几个明显的变化：

1. 通过 Page V1 创建过的页面，在 `/v/` 分支里将不再展示。而通过 Page V2 创建的页面，在 `/v/` 分支里还能正常展示。
2. 只适配了 `client-v1` 的插件，在 `/v/` 分支里将不再加载。`/v/` 分支只会加载适配了 `client-v2` 的插件。具体可以参考[客户端插件开发文档](https://docs.nocobase.com/cn/plugin-development/client/)。

目前，NocoBase 内置的大部分插件，已在这个版本里进行了 client-v2 的适配和迁移，因此大部分功能是能直接使用的（还有少数一些未迁移的插件，我们会在持续迁移）。不过有些插件提供的能力，后续只会在 `/v/` 分支进行更新和迭代。具体如下：

* 不支持在线添加和更新插件
* 插件列表不再显示废弃插件和仅支持 1.x 的插件
* 不再支持新增 Page V1
* 公开表单会区分 v1 和 v2，`/v/` 分支不显示 v1 版本的公开表单
* 审批工作流如果要在 `/v/` 分支使用，需要重新配置相关 UI
* 新移动端只支持 `/v/` 分支
* 多工作区只支持 `/v/` 分支
* App supervisor 中子应用的 Display 配置已移除，可以改用工作区
* 「AI 员工 / 数据源」标签页已移除
* 移除了评论表、日历表、表达式表、外部数据表
* 工作流人工节点暂时还不支持 `/v/` 分支
* 暂时还不支持给菜单添加徽标数

可以结合生产环境的实际情况进行 `/v/` 分支的迁移。

### 多工作区（仅 `/v/` 分支支持）

工作区（Portal）用于在同一个应用内提供多个访问入口。每个工作区都可以拥有独立的页面、菜单、导航结构、布局和权限配置。

![](https://static-docs.nocobase.com/2026-07-10-08-06-15.png)

参考文档：

* [多工作区](https://docs.nocobase.com/cn/multi-app/multi-portal/)

### 新移动端（仅 `/v/` 分支支持）

新移动端提供了全新的 `/v/mobile` 入口，与此同时，工作区也支持新增移动端布局的工作区。

![](https://static-docs.nocobase.com/2026-07-10-08-04-59.png)

参考文档：

- [移动端布局](https://docs.nocobase.com/cn/interface-builder/ui-layout/mobile)

* [多工作区](https://docs.nocobase.com/cn/multi-app/multi-portal/)

### 新评论区块

新评论区块不再局限于主数据源的评论表，不是关系区块也可以使用。

![](https://static-docs.nocobase.com/Comments-07-01-2026_12_03_PM%20(1).png)

参考文档：

* [评论区块](https://docs.nocobase.com/cn/interface-builder/blocks/data-blocks/comment)

### AI 知识库优化

这个版本继续优化了 AI 知识库相关能力。

![](https://static-docs.nocobase.com/20260617003505.png)

参考文档：

* [AI 知识库](https://docs.nocobase.com/cn/ai-employees/knowledge-base/knowledge-base/)

### 工作流：数据库事务节点

工作流新增了数据库事务节点。

![](https://static-docs.nocobase.com/20260610205505.png)

参考文档：

* [数据库事务节点](https://docs.nocobase.com/cn/workflow/nodes/transaction)

## 以下插件不再支持 V2（已废弃但尚未移除）

有一部分插件实际上在更早之前就已废弃，其中部分目前仍可使用，但会在 V3 中彻底移除。


| 插件                                          | 替代品                                  | 备注                |
| --------------------------------------------- | --------------------------------------- | ------------------- |
| `@nocobase/plugin-audit-logs`                 | `@nocobase/plugin-audit-logger`         | 自 1.0 起废弃的功能 |
| `@nocobase/plugin-backup-restore`             | `@nocobase/plugin-backups`              | 自 1.0 起废弃的功能 |
| `@nocobase/plugin-block-multi-step-form`      | JS Block                                | 自 2.0 起废弃的功能 |
| `@nocobase/plugin-charts`                     | `@nocobase/plugin-data-visualization`   | 自 1.0 起废弃的功能 |
| `@nocobase/plugin-collection-fdw`             | 从数据库同步                            | 自 2.2 起废弃的功能 |
| `@nocobase/plugin-comments`                   | `@nocobase/plugin-block-comment`        | 自 2.2 起废弃的功能 |
| `@nocobase/plugin-custom-variables`           | 事件流                                  | 自 2.2 起废弃的功能 |
| `@nocobase/plugin-data-visualization-echarts` | `@nocobase/plugin-data-visualization`   | 自 2.0 起废弃的功能 |
| `@nocobase/plugin-disable-pm-add`             | 无                                      | 自 2.2 起废弃的功能 |
| `@nocobase/plugin-field-component-mask`       | RunJS                                   | 自 2.0 起废弃的功能 |
| `@nocobase/plugin-graph-collection-manager`   | 无                                      | 自 2.2 起废弃的功能 |
| `@nocobase/plugin-mobile-client`              | `@nocobase/plugin-ui-layout`            | 自 2.0 起废弃的功能 |
| `@nocobase/plugin-mobile`                     | `@nocobase/plugin-ui-layout`            | 自 2.0 起废弃的功能 |
| `@nocobase/plugin-mock-collections`           | AI 搭建                                 | 自 2.0 起废弃的功能 |
| `@nocobase/plugin-multi-app-manager`          | `@nocobase/plugin-app-supervisor`       | 自 2.0 起废弃的功能 |
| `@nocobase/plugin-multi-app-share-collection` | 无                                      | 自 1.0 起废弃的功能 |
| `@nocobase/plugin-notifications`              | `@nocobase/plugin-notification-manager` | 自 1.0 起废弃的功能 |
| `@nocobase/plugin-snapshot-field`             | 无                                      | 自 1.0 起废弃的功能 |
