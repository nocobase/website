### 🚀 优化

- **[undefined]**
  - V3 工作流入口文件统一使用 v3- 前缀，并明确跨分支同步检查规则。 ([#10590](https://github.com/nocobase/nocobase/pull/10590)) by @Molunerfinn

  - 新增 NocoBase 3 独立分支工作流的手动 Actions 入口。 ([#10587](https://github.com/nocobase/nocobase/pull/10587)) by @Molunerfinn

### 🐛 修复

- **[database]** 修复 PostgreSQL 下无主键约束的表按多对多等关系字段筛选并按主表字段排序时报 GROUP BY 错误的问题 ([#10582](https://github.com/nocobase/nocobase/pull/10582)) by @cgyrock

- **[client]** 修复 UI 编辑模式下浏览器窗口缩小再恢复后区块设置不显示的问题 ([#10583](https://github.com/nocobase/nocobase/pull/10583)) by @zhangzhonghe

- **[client-v2]**
  - 修复空 JS 区块关闭卡片后无法在界面配置模式下重新打开区块设置的问题。 ([#10563](https://github.com/nocobase/nocobase/pull/10563)) by @gchust

  - 修复空 JS 操作项因宽度为零而无法在界面配置模式下打开设置的问题。 ([#10573](https://github.com/nocobase/nocobase/pull/10573)) by @gchust

- **[undefined]** 保留 NocoBase 3 迁入独立分支后的 PostgreSQL 和 MySQL 定时检查。 ([#10589](https://github.com/nocobase/nocobase/pull/10589)) by @Molunerfinn

- **[文件管理器]** 修复主应用和子应用中附件直传丢失字段参数、以及自定义文件表忽略字段存储器配置，导致附件回退到默认存储器的问题。 ([#10577](https://github.com/nocobase/nocobase/pull/10577)) by @mytharcher

- **[工作流：聚合查询节点]** 修复工作流聚合节点配置关系数据后再次打开时聚合字段消失的问题，并减少关系字段回显时的不必要遍历。 ([#10578](https://github.com/nocobase/nocobase/pull/10578)) by @mytharcher

- **[UI 模板]** 修复删除 UI 模板后，内部模板表出现在添加区块的数据表选项中的问题。 ([#10561](https://github.com/nocobase/nocobase/pull/10561)) by @gchust

- **[数据表字段：多对多 (数组)]** 修复在 v2 数据源管理中新建的关系字段无法在区块中配置的问题 ([#10581](https://github.com/nocobase/nocobase/pull/10581)) by @zhangzhonghe

- **[UI 布局]** 修复新版客户端操作和按钮的弹窗设置缺少弹窗模板选项的问题。 ([#10574](https://github.com/nocobase/nocobase/pull/10574)) by @gchust

- **[通知：电子邮件]** 将 nodemailer、hono、moment 升级至已修复版本。 ([#10569](https://github.com/nocobase/nocobase/pull/10569)) by @2013xile

