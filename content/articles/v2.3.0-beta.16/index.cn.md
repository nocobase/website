### 🐛 修复

- **[app]** 修复开发模式下 `APP_PUBLIC_PATH` 不为 `/` 时 `APP_CLIENT_ENTRY_MODE` 入口跳转失效的问题。 ([#10955](https://github.com/nocobase/nocobase/pull/10955)) by @Molunerfinn

- **[server]**
  - 修复应用 reload 后雪花主键重复的问题 ([#10911](https://github.com/nocobase/nocobase/pull/10911)) by @2013xile

  - 修复插件依赖兼容性检查对 axios 1.20.x 误报不兼容的问题。 ([#11023](https://github.com/nocobase/nocobase/pull/11023)) by @hongboji

- **[client-v2]** 修复 v2（移动端）通过链接操作跳转后，右滑/浏览器返回直接退出而非逐级返回的问题 ([#10963](https://github.com/nocobase/nocobase/pull/10963)) by @katherinehhh

- **[evaluators]** 升级 mathjs，修复工作流计算节点的数学表达式沙箱逃逸漏洞。 ([#10984](https://github.com/nocobase/nocobase/pull/10984)) by @mytharcher

- **[数据源管理]** 修复 v2 关系字段配置中外键无法手动输入的问题，支持输入新名称或选择已有字段。 ([#10915](https://github.com/nocobase/nocobase/pull/10915)) by @katherinehhh

- **[工作流]**
  - 修复工作流嵌套循环中，内层循环的局部变量无法选择循环对象下字段的问题。 ([#10942](https://github.com/nocobase/nocobase/pull/10942)) by @mytharcher

  - 修复 KingBase 将启用状态和执行次数返回为字符串时，工作流启用状态及是否已执行的判断错误。 ([#10888](https://github.com/nocobase/nocobase/pull/10888)) by @mytharcher

- **[前端流引擎]** 修复非管理员角色下 Markdown 中的 Liquid 变量未解析的问题。 ([#11007](https://github.com/nocobase/nocobase/pull/11007)) by @gchust

- **[UI 布局]** 修复 V2 路由权限勾选状态异常，以及保存权限时导致 V1 已有权限丢失的问题。 ([#10957](https://github.com/nocobase/nocobase/pull/10957)) by @katherinehhh

