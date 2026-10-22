### 🐛 修复

- **[cli-v1]** 修复全新生产环境安装时，NocoBase CLI 因缺少 chokidar 模块而初始化失败的问题。 ([#11083](https://github.com/nocobase/nocobase/pull/11083)) by @cgyrock

- **[evaluators]** 升级 mathjs，修复工作流计算节点的数学表达式沙箱逃逸漏洞。 ([#10984](https://github.com/nocobase/nocobase/pull/10984)) by @mytharcher

- **[server]** 修复插件依赖兼容性检查对 axios 1.20.x 误报不兼容的问题。 ([#11023](https://github.com/nocobase/nocobase/pull/11023)) by @hongboji

- **[client-v2]**
  - 修复 v2 移动端表单联动规则禁用关联字段时样式不正确的问题。 ([#11036](https://github.com/nocobase/nocobase/pull/11036)) by @katherinehhh

  - 修复 v2 筛选表单中编码字段与其他字段垂直对齐不一致的问题。 ([#11044](https://github.com/nocobase/nocobase/pull/11044)) by @katherinehhh

  - 修复 v2（移动端）通过链接操作跳转后，右滑/浏览器返回直接退出而非逐级返回的问题 ([#10963](https://github.com/nocobase/nocobase/pull/10963)) by @katherinehhh

- **[app]** 修复开发模式下 `APP_PUBLIC_PATH` 不为 `/` 时 `APP_CLIENT_ENTRY_MODE` 入口跳转失效的问题。 ([#10955](https://github.com/nocobase/nocobase/pull/10955)) by @Molunerfinn

- **[undefined]** 文档站点地图不再收录 canonical 指向其他页面的跨模块重复页面。 ([#10954](https://github.com/nocobase/nocobase/pull/10954)) by @Molunerfinn

- **[前端流引擎]** 修复非管理员角色下 Markdown 中的 Liquid 变量未解析的问题。 ([#11007](https://github.com/nocobase/nocobase/pull/11007)) by @gchust

- **[工作流]** 修复工作流嵌套循环中，内层循环的局部变量无法选择循环对象下字段的问题。 ([#10942](https://github.com/nocobase/nocobase/pull/10942)) by @mytharcher

- **[UI 布局]**
  - 修复 V2 路由权限勾选状态异常，以及保存权限时导致 V1 已有权限丢失的问题。 ([#10957](https://github.com/nocobase/nocobase/pull/10957)) by @katherinehhh

  - 修复移动端从菜单隐藏的页面无法通过链接打开的问题 ([#10641](https://github.com/nocobase/nocobase/pull/10641)) by @zhangzhonghe

- **[区块：树]** 修复 v2 树区块操作按钮在浏览器刷新后消失的问题。 ([#11038](https://github.com/nocobase/nocobase/pull/11038)) by @katherinehhh

