### 🎉 新特性

- **[app]** Client V2 设置现在会在独立的 `/settings` 页面中打开，Client V1 保持不变 ([#10187](https://github.com/nocobase/nocobase/pull/10187)) by @zhangzhonghe

- **[Portal 管理]** 设置中心默认进入 Portal 画廊，导航改为顶栏分组 + 左栏嵌套，整体配色改为中性灰白 ([#10196](https://github.com/nocobase/nocobase/pull/10196)) by @Albert-mah

- **[权限控制]** <!-- [标题](link) --> ([#10193](https://github.com/nocobase/nocobase/pull/10193)) by @2013xile

- **[AI 员工]** 新增可嵌入页面的 AI 聊天框区块，支持会话作用域、AI 员工任务和共享聊天运行时。 ([#10125](https://github.com/nocobase/nocobase/pull/10125)) by @cgyrock

### 🚀 优化

- **[undefined]** 文档网站搜索列表优化：搜索结果按文档区分组并显示分组标题与路径，更相关的页面排序靠前，插件元信息页排到最后。 ([#10185](https://github.com/nocobase/nocobase/pull/10185)) by @Molunerfinn

- **[用户认证]** <!-- [标题](link) --> ([#10207](https://github.com/nocobase/nocobase/pull/10207)) by @2013xile

- **[AI 员工]**
  - 简化 AI 知识库向量配置 ([#10178](https://github.com/nocobase/nocobase/pull/10178)) by @cgyrock

  - 改进 AI 员工在配置校验、数据权限、记录上下文、附件、工作流任务、会话恢复及代码编辑器生命周期方面的可靠性。 ([#10162](https://github.com/nocobase/nocobase/pull/10162)) by @cgyrock

- **[工作流]** 待办中心现可按工作流筛选和快速导航，并展示各工作流的待办数量 ([#10173](https://github.com/nocobase/nocobase/pull/10173)) by @mytharcher

- **[认证：SAML 2.0]**
  - <!-- [标题](link) --> by @2013xile

  - <!-- [标题](link) --> by @2013xile

- **[认证：CAS]** <!-- [标题](link) --> by @2013xile

- **[AI: 知识库]** 现在可以直接为每个 AI 知识库配置向量数据库和 Embedding 设置 by @cgyrock

- **[认证：OIDC]**
  - <!-- [标题](link) --> by @2013xile

  - <!-- [标题](link) --> by @2013xile

  - <!-- [标题](link) --> by @2013xile

- **[工作流：审批]** 审批申请和审批待办现可按工作流筛选，并展示各工作流的待办数量 by @mytharcher

- **[企业微信]**
  - <!-- [标题](link) --> by @2013xile

  - <!-- [标题](link) --> by @2013xile

  - <!-- [标题](link) --> by @2013xile

- **[钉钉]**
  - <!-- [标题](link) --> by @2013xile

  - <!-- [标题](link) --> by @2013xile

  - <!-- [标题](link) --> by @2013xile

- **[认证：LDAP]**
  - <!-- [标题](link) --> by @2013xile

  - <!-- [标题](link) --> by @2013xile

### 🐛 修复

- **[client-v2]**
  - 修复 v2 表单重载后 JSON 字段保存校验报错。 ([#10206](https://github.com/nocobase/nocobase/pull/10206)) by @katherinehhh

  - 修复表格操作按钮的联动规则被禁用或删除后，按钮仍保持禁用状态的问题。 ([#10186](https://github.com/nocobase/nocobase/pull/10186)) by @hongboji

- **[cli]**
  - 修复提取前端静态资源部署后 Settings 页面无法加载的问题 ([#10205](https://github.com/nocobase/nocobase/pull/10205)) by @zhangzhonghe

  - <!-- [标题](link) --> ([#10198](https://github.com/nocobase/nocobase/pull/10198)) by @2013xile

- **[Portal 管理]** 修复类型为空的 Portal 无法在 Client V2 中显示的问题 ([#10212](https://github.com/nocobase/nocobase/pull/10212)) by @zhangzhonghe

- **[工作流]**
  - 修复工作流执行在单次保存大量作业记录时可能阻塞的问题 ([#10204](https://github.com/nocobase/nocobase/pull/10204)) by @mytharcher

  - 修复工作流画布版本下拉框无法显示超过前 20 个版本的问题。 ([#10190](https://github.com/nocobase/nocobase/pull/10190)) by @mytharcher

- **[备份管理器]** 校验最大备份保留数量并显示保存错误。 ([#10189](https://github.com/nocobase/nocobase/pull/10189)) by @katherinehhh

- **[AI 员工]** AI 员工聊天现在会在上传前校验附件数量和附件总大小 ([#10195](https://github.com/nocobase/nocobase/pull/10195)) by @cgyrock

- **[数据源管理]** v2 数据源管理中的关系字段目标表和目标键支持搜索。 ([#10194](https://github.com/nocobase/nocobase/pull/10194)) by @katherinehhh

- **[数据表字段：Markdown(Vditor)]**
  - 修复 Markdown Vditor 上传测试断言和 Mock 隔离。 ([#10200](https://github.com/nocobase/nocobase/pull/10200)) by @katherinehhh

  - 修复 Markdown Vditor 永久 URL 上传测试覆盖。 ([#10202](https://github.com/nocobase/nocobase/pull/10202)) by @katherinehhh

- **[变量和密钥]** 修复 v2「变量和密钥」设置页提交同名变量时没有错误提示的问题。 ([#10181](https://github.com/nocobase/nocobase/pull/10181)) by @katherinehhh

- **[版本控制]** 修复进入版本控制设置后快捷键失效的问题，并优化快捷键预览、保存、重置和离页恢复行为 by @cgyrock

- **[迁移管理]** 修复重复提交导致创建多个迁移版本的问题，并优化 v2 迁移日志及执行过程抽屉的展示。 by @katherinehhh

