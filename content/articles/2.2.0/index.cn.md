NocoBase 2.2 是一次**围绕 V2 体验与文件访问安全**的重要升级。本次正式版带来了全新的 `/v/` 独立前端入口、多工作区、新移动端和新评论区块，并升级了文件访问机制，继续完善 AI 知识库、工作流以及核心插件的 V2 适配。

如果你的应用已经主要使用 V2 页面，2.2 将提供更完整、更轻量的 V2 使用体验；如果仍以 V1 页面为主，建议先完成页面和插件迁移，再切换到新的 `/v/` 入口。

## 新特性

### 新增 `/v/` 独立前端入口

`/v/` 是全新的独立前端入口，并且会独立构建。2.0 版本里我们对前端做了非常大的重构，当时为了兼容性，我们还保留了对 V1 模块、页面等的兼容。而 `/v/` 分支则会完全移除 V1 的历史遗留内容，无法再创建或者渲染 V1 的页面和区块，只保留面向 V2 的能力。同时，`/v/` 分支在性能方面做了较大优化，这个分支将会是 NocoBase 团队后续主要迭代的分支。

> 如果生产环境已经全部以 V2 页面为主，可以考虑开始使用 `/v/` 入口。
>
> 如果应用以 V2 页面为主、但仍有少量 V1 页面，建议先将这些页面迁移到 V2。
>
> 如果应用仍以 V1 页面为主，不建议直接切换到 `/v/`。请先完成页面和相关插件的迁移。

通常只需在原有路径前加上 `/v/` 前缀即可进入新入口：

```text
# 原路径
https://nocobase.example.com/admin/1xl0epqn6q3

# V2 独立入口
https://nocobase.example.com/v/admin/1xl0epqn6q3
```

#### 设置应用的默认入口

可以通过环境变量 `APP_CLIENT_ENTRY_MODE` 控制应用入口模式：

- `legacy-default`：`/` 和 `/v/` 均可访问，默认入口为 `/`
- `modern-default`：`/` 和 `/v/` 均可访问，默认入口为 `/v/`
- `modern-only`：仅允许访问 `/v/`

#### `/v/` 分支当前情况

`/v/` 分支是个渐进式迁移的分支，进入 `/v/` 分支后，将会有几个明显的变化：

1. 通过 Page V1 创建过的页面，在 `/v/` 分支里将不再展示。而通过 Page V2 创建的页面，在 `/v/` 分支里还能正常展示。
2. 只适配了 `client-v1` 的插件，在 `/v/` 分支里将不再加载。`/v/` 分支只会加载适配了 `client-v2` 的插件。具体可以参考[客户端插件开发文档](https://docs.nocobase.com/cn/plugin-development/client/)。

目前，NocoBase 内置的大部分插件，已在这个版本里进行了 client-v2 的适配和迁移，因此大部分功能是能直接使用的（还有少数一些未迁移的插件，我们会持续迁移）。不过有些插件提供的能力，后续只会在 `/v/` 分支进行更新和迭代。具体如下：

- 插件列表不再显示废弃插件和仅支持 1.x 的插件
- 不再支持新增 Page V1
- 公开表单会区分 V1 和 V2，`/v/` 分支不显示 V1 版本的公开表单
- 审批工作流如果要在 `/v/` 分支使用，需要重新配置相关 UI
- 新移动端只支持 `/v/` 分支
- 多工作区只支持 `/v/` 分支
- App supervisor 中子应用的 Display 配置已移除，可以改用工作区
- 「AI 员工 / 数据源」标签页已移除
- 移除了评论表、日历表、表达式表、外部数据表
- 工作流人工节点暂时还不支持 `/v/` 分支
- 暂时还不支持给菜单添加徽标数

可以结合生产环境的实际情况进行 `/v/` 分支的迁移。

相关文档：

- [客户端插件开发](https://docs.nocobase.com/cn/plugin-development/client/)

### 文件访问机制升级：稳定 URL、权限校验与部署调整

2.2 对 NocoBase 管理的文件访问机制进行了重要升级。默认情况下，附件和文件不再直接把本地存储路径、对象存储地址或预签名地址作为业务 URL 返回，而是使用稳定的 NocoBase URL：

```text
/files/<app>/<dataSource>/<collection>/<id><extname>
```

例如：

```text
/files/main/main/attachments/42.pdf
```

如果配置了 `APP_PUBLIC_PATH=/nocobase`，地址会自动带上对应子路径：

```text
/nocobase/files/main/main/attachments/42.pdf
```

访问稳定 URL 时，请求会先进入 NocoBase。NocoBase 根据当前用户、角色以及目标附件表或文件表的查看权限和数据范围完成检查，验证通过后，再通过 `302` 跳转到存储引擎生成的实际地址。

```text
稳定 URL → NocoBase 身份与权限检查 → 302 → 本地或对象存储实际地址
```

这让业务内容与具体存储地址分离。调整 bucket、CDN 域名、签名策略或缩略图规则时，业务字段中使用的稳定 URL 通常不需要随之修改。附件上传、图片展示、文件预览和下载的日常操作方式基本不变。

#### 文件 URL 与公开访问可以独立配置

文件存储引擎默认推荐使用 **NocoBase URL**，让文件访问遵循 NocoBase 的角色和数据权限。对于确实需要直接提供存储地址或公开访问的场景，2.2 也提供了独立配置：

- **原始 URL**：直接返回存储引擎地址，不经过 NocoBase 权限检查
- **允许公开访问**：仍返回 NocoBase URL，但访问时不检查文件记录权限

![](https://static-docs.nocobase.com/20260723221234.png)

选择原始 URL 或允许公开访问都会扩大文件的可访问范围，应结合实际业务谨慎配置。保存设置后，同一存储引擎下已有文件和新文件的接口返回方式都会随配置变化，但不会移动或重新上传文件。

#### 升级前需要检查部署配置

`/files/` 是需要经过 NocoBase 鉴权的应用路由，不能作为静态目录处理，也不能落入前端 SPA 的回退规则。使用当前版本 NocoBase CLI 生成的 Nginx 或 Caddy 配置时会自动包含相关规则；如果自行维护反向代理，需要确认：

- `/files/` 会转发到 NocoBase，并位于 SPA 回退规则之前
- 配置 `APP_PUBLIC_PATH` 时，同时转发子路径下的 `/files/`，并保留根路径 `/files/` 的兼容规则
- 不缓存稳定 URL 返回的 `302 Location`
- 页面跨源访问 API 时，将页面来源加入 `CORS_ORIGIN_WHITELIST`
- 集群和多副本统一升级，避免 `/files/` 请求进入旧版本节点
- 使用外部 NocoBase 数据源时，先升级消费方实例和相关插件，再升级被消费实例

> **注意：** 历史 Markdown、富文本和业务字段中已保存的 `/storage/uploads/...`、CDN 或对象存储地址不会被自动改写。新版本运行后，新上传文件和新编辑内容可能已经保存 `/files/...` 地址，而旧版本无法识别该路由。对回滚要求较高的环境，应在开放写入前保留数据库快照，并提前验证反向代理配置。

#### 安全边界

稳定 URL 提供访问前的权限检查，但文件内容不会持续经过 NocoBase 代理。权限验证通过后，浏览器仍会看到最终存储地址。如果最终地址来自公开 bucket、公开 CDN 或开放的本地静态目录，获得实际地址的人仍可能绕过 NocoBase。

对于合同、证件和内部资料等敏感文件，建议使用私有存储、短期签名 URL、CDN 鉴权等存储侧访问控制。Office 在线预览场景会在用户权限检查通过后签发绑定当前文件的短期临时 URL；该地址默认有效 10 分钟，不能作为长期分享链接保存或传播。

相关文档：

- [文件管理器：稳定 URL](https://docs.nocobase.com/cn/file-manager/stable-url)
- [文件存储引擎与访问控制](https://docs.nocobase.com/cn/file-manager/storage/)
- [环境变量](https://docs.nocobase.com/cn/get-started/installation/env)
- [生产环境部署](https://docs.nocobase.com/cn/get-started/deployment/production)
- [Nginx 反向代理](https://docs.nocobase.com/cn/nocobase-cli/production/reverse-proxy/nginx)
- [Caddy 反向代理](https://docs.nocobase.com/cn/nocobase-cli/production/reverse-proxy/caddy)

### 多工作区（仅 `/v/` 入口支持）

工作区（Portal）用于在同一个应用内提供多个访问入口。每个工作区可以拥有独立的页面、菜单、导航结构、布局和权限配置。该能力由专业版及以上版本提供。

例如，一个零售管理系统可以同时提供：

```text
零售管理系统

├─ 总部工作区
├─ 门店工作区
├─ 经销商工作区
└─ 移动工作区
```

总部员工关注：

- 商品管理
- 库存管理
- 数据分析

门店员工关注：

- 收银
- 库存盘点
- 订单处理

经销商关注：

- 采购
- 对账
- 发货状态

虽然使用的是同一个系统，但不同角色并不需要看到相同的菜单和页面，多工作区正是用来解决这一问题的。

2.2 还进一步完善了应用与工作区入口的配置能力，方便用户在不同业务入口之间切换。

![](https://static-docs.nocobase.com/2026-07-10-08-06-15.png)

相关文档：

- [多工作区](https://docs.nocobase.com/cn/multi-app/multi-portal/)

### 新移动端（仅 `/v/` 入口支持）

新移动端提供 `/v/mobile` 入口，工作区也可以使用移动端布局。

移动端与桌面端共享数据源和业务数据，但菜单、路由和页面内容可以分别配置。这样可以根据手机端的实际使用方式重新组织页面，并使用更适合移动设备的底部标签栏作为一级导航。

2.2 正式版继续完善了移动端标签栏、半窗滚动、嵌入页面和权限控制等交互，使数据录入、查询、审批和任务处理更加稳定。

![](https://static-docs.nocobase.com/2026-07-10-08-04-59.png)

相关文档：

- [移动端布局](https://docs.nocobase.com/cn/interface-builder/ui-layout/mobile)

### 新评论区块

新评论区块不再局限于主数据源的评论表，也不再要求作为关系区块使用。你可以在任务、文章、工单、客户等记录的详情页或弹窗中添加评论区块，让用户围绕当前记录查看、回复和新增评论。

![](https://static-docs.nocobase.com/Comments-07-01-2026_12_02_PM.png)

相关文档：

- [评论区块](https://docs.nocobase.com/cn/interface-builder/blocks/data-blocks/comment)

### AI 知识库增强

AI 知识库已完成 client-v2 迁移，并进一步完善知识库和向量存储的配置能力：

- 工作流创建知识库文档时，支持按文档 key 覆盖已有文档
- 支持配置和管理向量数据库
- 为外部知识库和外部向量存储扩展提供配置入口，开发者可以通过插件接入 NocoBase 尚未内置支持的向量数据库或第三方检索服务

![](https://static-docs.nocobase.com/20260728222404.png)

相关文档：

- [AI 知识库](https://docs.nocobase.com/cn/ai-employees/knowledge-base/knowledge-base/)
- [向量数据库](https://docs.nocobase.com/cn/ai-employees/knowledge-base/vector-database)
- [External 知识库插件](https://docs.nocobase.com/cn/ai-employees/knowledge-base/dev/external-knowledge-base)

### 工作流：数据库事务节点

工作流新增数据库事务节点，用于将一组数据库操作放在同一个事务中执行。它适合需要保证多步数据处理“全部成功或全部回滚”的场景，例如创建订单后扣减库存、写入订单明细并更新状态。

![](https://static-docs.nocobase.com/20260610205505.png)

相关文档：

- [数据库事务节点](https://docs.nocobase.com/cn/workflow/nodes/transaction)

## V2 适配与体验完善

除了上述新特性，2.2 正式版还继续迁移和完善了一批常用功能的 V2 界面与交互：

- 用户、部门和权限设置
- 用户数据同步
- 钉钉认证、同步与通知设置
- 企业微信认证、同步与通知设置
- 邮件管理
- 表单草稿
- 公开表单
- 备份管理
- 数据源管理
- 翻译测试工具

同时，本次版本修复了移动端、嵌入页面、子应用 SSO、打印、导出和工作区访问等场景中的一批问题，进一步提升 V2 入口的稳定性和一致性。

相关文档：

- [用户数据同步](https://docs.nocobase.com/cn/users-permissions/sync/)
- [从钉钉同步用户数据](https://docs.nocobase.com/cn/users-permissions/sync/sources/dingtalk)
- [从企业微信同步用户数据](https://docs.nocobase.com/cn/users-permissions/sync/sources/wecom)

## 以下插件不再支持 V2（已废弃但尚未移除）

有一部分插件实际上在更早之前就已废弃，其中部分目前仍可使用，但会在 V3 中彻底移除。


| 插件                                          | 替代品                                  | 备注                |
| --------------------------------------------- | --------------------------------------- | ------------------- |
| `@nocobase/plugin-audit-logs`                 | `@nocobase/plugin-audit-logger`         | 自 1.0 起废弃的功能 |
| `@nocobase/plugin-backup-restore`             | `@nocobase/plugin-backups`              | 自 1.0 起废弃的功能 |
| `@nocobase/plugin-block-multi-step-form`      | JS Block                                | 自 2.0 起废弃的功能 |
| `@nocobase/plugin-charts`                     | `@nocobase/plugin-data-visualization`   | 自 2.0 起废弃的功能 |
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
