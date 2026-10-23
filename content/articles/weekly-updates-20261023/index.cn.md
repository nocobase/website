汇总一周产品更新日志，最新发布可前往[我们的博客](https://www.nocobase.com/cn/blog/timeline)查看。

**NocoBase 目前更新包括三个分支：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

`main`：截至目前最稳定的版本，推荐安装此版本。

`next`：包含即将发布的新功能，经过初步测试的版本，可能存在部分已知或未知问题。主要面向测试用户，用于收集反馈和进一步优化功能。适合愿意提前体验新功能并提供反馈的测试用户。

`develop`：开发中的版本，包含最新的功能代码，可能尚未完成或存在较多不稳定因素，主要用于内部开发和快速迭代。适合对产品功能前沿发展感兴趣的技术用户，但可能存在较多问题或不完整功能，不建议在生产环境中使用。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### v2.2.31

*发布日期: 2026-10-22*

### 🚀 优化

- **[server]** 支持应用运行期间重新绑定雪花 workerId。 ([#11076](https://github.com/nocobase/nocobase/pull/11076)) by @2013xile
- **[工作流]** 优化工作流执行详情性能：首屏仅加载各节点最新 Job，节点执行记录按需游标分页加载，并精简列表字段。 ([#11094](https://github.com/nocobase/nocobase/pull/11094)) by @mytharcher

### 🐛 修复

- **[AI 员工]**
  - 修复 Qwen/DashScope Endpoint 的向量响应编码兼容问题，避免文档与查询向量维度不一致。此前受影响的知识库需重新向量化。 ([#11074](https://github.com/nocobase/nocobase/pull/11074)) by @cgyrock
  - 修复了 AI 员工按钮被联动规则隐藏后，开启页面配置时页面卡死的问题 ([#11100](https://github.com/nocobase/nocobase/pull/11100)) by @hongboji
    参考文档：[flow-model.md](https://github.com/nocobase/nocobase/blob/fix/plugin-ai-hidden-ai-employee-freeze/packages/core/client/docs/zh-CN/api/flow-engine/flow-model.md#L176-L181)

### v2.2.30

*发布日期: 2026-10-22*

### 🐛 修复

- **[cli-v1]** 修复全新生产环境安装时，NocoBase CLI 因缺少 chokidar 模块而初始化失败的问题。 ([#11083](https://github.com/nocobase/nocobase/pull/11083)) by @cgyrock

### v2.2.29

*发布日期: 2026-10-21*

### 🐛 修复

- **[client-v2]**
  - 修复 v2 筛选表单中编码字段与其他字段垂直对齐不一致的问题。 ([#11044](https://github.com/nocobase/nocobase/pull/11044)) by @katherinehhh
  - 修复 v2 移动端表单联动规则禁用关联字段时样式不正确的问题。 ([#11036](https://github.com/nocobase/nocobase/pull/11036)) by @katherinehhh
- **[UI 布局]** 修复移动端从菜单隐藏的页面无法通过链接打开的问题 ([#10641](https://github.com/nocobase/nocobase/pull/10641)) by @zhangzhonghe
- **[区块：树]** 修复 v2 树区块操作按钮在浏览器刷新后消失的问题。 ([#11038](https://github.com/nocobase/nocobase/pull/11038)) by @katherinehhh

### v2.2.28

*发布日期: 2026-10-19*

### 🐛 修复

- **[app]** 修复开发模式下 `APP_PUBLIC_PATH` 不为 `/` 时 `APP_CLIENT_ENTRY_MODE` 入口跳转失效的问题。 ([#10955](https://github.com/nocobase/nocobase/pull/10955)) by @Molunerfinn
- **[evaluators]** 升级 mathjs，修复工作流计算节点的数学表达式沙箱逃逸漏洞。 ([#10984](https://github.com/nocobase/nocobase/pull/10984)) by @mytharcher
- **[server]** 修复插件依赖兼容性检查对 axios 1.20.x 误报不兼容的问题。 ([#11023](https://github.com/nocobase/nocobase/pull/11023)) by @hongboji
- **[前端流引擎]** 修复非管理员角色下 Markdown 中的 Liquid 变量未解析的问题。 ([#11007](https://github.com/nocobase/nocobase/pull/11007)) by @gchust
- **[UI 布局]** 修复 V2 路由权限勾选状态异常，以及保存权限时导致 V1 已有权限丢失的问题。 ([#10957](https://github.com/nocobase/nocobase/pull/10957)) by @katherinehhh
- **[工作流]** 修复工作流嵌套循环中，内层循环的局部变量无法选择循环对象下字段的问题。 ([#10942](https://github.com/nocobase/nocobase/pull/10942)) by @mytharcher

### v2.2.27

*发布日期: 2026-10-16*

### 🐛 修复

- **[client-v2]** 修复 v2（移动端）通过链接操作跳转后，右滑/浏览器返回直接退出而非逐级返回的问题 ([#10963](https://github.com/nocobase/nocobase/pull/10963)) by @katherinehhh

### v2.2.26

*发布日期: 2026-10-15*

### 🐛 修复

- **[server]** 修复应用 reload 后雪花主键重复的问题 ([#10911](https://github.com/nocobase/nocobase/pull/10911)) by @2013xile
- **[工作流]** 修复 KingBase 将启用状态和执行次数返回为字符串时，工作流启用状态及是否已执行的判断错误。 ([#10888](https://github.com/nocobase/nocobase/pull/10888)) by @mytharcher
- **[数据源管理]** 修复 v2 关系字段配置中外键无法手动输入的问题，支持输入新名称或选择已有字段。 ([#10915](https://github.com/nocobase/nocobase/pull/10915)) by @katherinehhh

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### v2.3.0-beta.18

*发布日期: 2026-10-22*

### 🐛 修复

- **[cli-v1]** 修复全新生产环境安装时，NocoBase CLI 因缺少 chokidar 模块而初始化失败的问题。 ([#11083](https://github.com/nocobase/nocobase/pull/11083)) by @cgyrock

### v2.3.0-beta.17

*发布日期: 2026-10-21*

### 🐛 修复

- **[client-v2]**
  - 修复 v2 筛选表单中编码字段与其他字段垂直对齐不一致的问题。 ([#11044](https://github.com/nocobase/nocobase/pull/11044)) by @katherinehhh
  - 修复 v2 移动端表单联动规则禁用关联字段时样式不正确的问题。 ([#11036](https://github.com/nocobase/nocobase/pull/11036)) by @katherinehhh
- **[区块：树]** 修复 v2 树区块操作按钮在浏览器刷新后消失的问题。 ([#11038](https://github.com/nocobase/nocobase/pull/11038)) by @katherinehhh
- **[UI 布局]** 修复移动端从菜单隐藏的页面无法通过链接打开的问题 ([#10641](https://github.com/nocobase/nocobase/pull/10641)) by @zhangzhonghe

### v2.3.0-beta.16

*发布日期: 2026-10-19*

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

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### v2.4.0-alpha.12

*发布日期: 2026-10-22*

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

### v2.4.0-alpha.11

*发布日期: 2026-10-16*

### 🐛 修复

- **[server]**

  - 修复应用 reload 后雪花主键重复的问题 ([#10911](https://github.com/nocobase/nocobase/pull/10911)) by @2013xile
  - 修复网关对请求中应用名称的校验与状态隔离。 ([#10548](https://github.com/nocobase/nocobase/pull/10548)) by @2013xile
- **[client-v2]** 修复 v2 审批表单子表格中附件无法预览及编辑弹层被遮挡的问题。 ([#10586](https://github.com/nocobase/nocobase/pull/10586)) by @mytharcher
- **[数据源管理]** 修复 v2 关系字段配置中外键无法手动输入的问题，支持输入新名称或选择已有字段。 ([#10915](https://github.com/nocobase/nocobase/pull/10915)) by @katherinehhh
- **[工作流]** 修复 KingBase 将启用状态和执行次数返回为字符串时，工作流启用状态及是否已执行的判断错误。 ([#10888](https://github.com/nocobase/nocobase/pull/10888)) by @mytharcher
- **[AI 员工]** AI 对话现在会在 OpenAI 两种 API 模式下传递稳定的会话级提示词缓存键，便于兼容网关保持渠道亲和。 ([#10788](https://github.com/nocobase/nocobase/pull/10788)) by @cgyrock
-
