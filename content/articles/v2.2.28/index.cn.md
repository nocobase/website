### 🐛 修复

- **[app]** 修复开发模式下 `APP_PUBLIC_PATH` 不为 `/` 时 `APP_CLIENT_ENTRY_MODE` 入口跳转失效的问题。 ([#10955](https://github.com/nocobase/nocobase/pull/10955)) by @Molunerfinn

- **[evaluators]** 升级 mathjs，修复工作流计算节点的数学表达式沙箱逃逸漏洞。 ([#10984](https://github.com/nocobase/nocobase/pull/10984)) by @mytharcher

- **[server]** 修复插件依赖兼容性检查对 axios 1.20.x 误报不兼容的问题。 ([#11023](https://github.com/nocobase/nocobase/pull/11023)) by @hongboji

- **[前端流引擎]** 修复非管理员角色下 Markdown 中的 Liquid 变量未解析的问题。 ([#11007](https://github.com/nocobase/nocobase/pull/11007)) by @gchust

- **[UI 布局]** 修复 V2 路由权限勾选状态异常，以及保存权限时导致 V1 已有权限丢失的问题。 ([#10957](https://github.com/nocobase/nocobase/pull/10957)) by @katherinehhh

- **[工作流]** 修复工作流嵌套循环中，内层循环的局部变量无法选择循环对象下字段的问题。 ([#10942](https://github.com/nocobase/nocobase/pull/10942)) by @mytharcher

