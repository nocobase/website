### 🎉 新特性

- **[Portal 管理]** 支持配置应用级默认 Portal，并从 Modern Client 根入口路由至默认 Portal。 ([#10225](https://github.com/nocobase/nocobase/pull/10225)) by @katherinehhh
参考文档：[默认 Portal 方案](https://nocobase.feishu.cn/wiki/Nkk9weM93iMhB1kF8XWcMOdlnwb)
- **[AI 员工]** 支持从 LLM 服务 CLI 命令跳转到 UI，并在创建服务时预选提供商。 ([#10210](https://github.com/nocobase/nocobase/pull/10210)) by @cgyrock

- **[AI: 知识库]** 支持从 CLI 命令跳转到向量数据库创建和编辑 UI，并在新建时预选提供商。 by @cgyrock

- **[多空间]** 新增默认空间配置，新建用户会自动加入所选默认空间。 by @jiannx

### 🚀 优化

- **[undefined]** 新增多语言 AI 员工插件开发指南，介绍 Tool、Skill、内置 AI 员工和前端交互的定义与组合方式 ([#10226](https://github.com/nocobase/nocobase/pull/10226)) by @cgyrock
参考文档：[AI 员工插件开发](https://github.com/nocobase/nocobase/blob/docs/add-custom-ai-employee-skill/docs/docs/cn/ai-employees/dev/ai-employee/index.md)
- **[Portal 管理]** 门户卡片改为按构建方式分组的行式布局，设置中心页头去掉通栏白底，开关、提示条和 API 文档页统一到中性主题 ([#10233](https://github.com/nocobase/nocobase/pull/10233)) by @Albert-mah

- **[AI: 知识库]**
  - 统一向量数据库列表与其他设置表格的卡片样式 by @cgyrock

  - 优化知识库详情页，新增面包屑和 Tab 分区，并改进内容区域的响应式布局。 by @cgyrock

### 🐛 修复

- **[server]** 移除将旧版 Admin 知识库详情地址强制跳转到 Settings 应用的过时重定向。 ([#10232](https://github.com/nocobase/nocobase/pull/10232)) by @cgyrock

- **[client-v2]**
  - 更改设置搜索快捷键，避免与版本控制快捷键冲突 ([#10222](https://github.com/nocobase/nocobase/pull/10222)) by @zhangzhonghe

  - 修复看板列快捷创建记录时未继承所选分组值的问题 ([#10215](https://github.com/nocobase/nocobase/pull/10215)) by @jiannx

  - 修复 OAuth 设备确认页面显示设置中心顶部导航的问题 ([#10228](https://github.com/nocobase/nocobase/pull/10228)) by @zhangzhonghe

  - 修复无权限角色访问设置中心时提示不明确及菜单闪现的问题 ([#10219](https://github.com/nocobase/nocobase/pull/10219)) by @zhangzhonghe

- **[UI 布局]** 修复桌面页面在窄屏下误用移动端样式的问题 ([#10229](https://github.com/nocobase/nocobase/pull/10229)) by @zhangzhonghe

- **[区块：甘特图]** 修复甘特图短任务条未使用记录自定义颜色的问题 ([#10217](https://github.com/nocobase/nocobase/pull/10217)) by @jiannx

- **[AI 员工]**
  - 修复 AI 插件 client-v2 设置页面中 Settings 标签未翻译的问题 ([#10234](https://github.com/nocobase/nocobase/pull/10234)) by @cgyrock

  - 修复未保存更改确认弹窗与当前主题不一致的问题 ([#10223](https://github.com/nocobase/nocobase/pull/10223)) by @zhangzhonghe

- **[区块：树]** 修复 Tree 区块搜索无匹配业务字段记录时仍显示占位节点的问题 ([#10218](https://github.com/nocobase/nocobase/pull/10218)) by @jiannx

- **[Portal 管理]** 阻止创建或更新为重复的门户名称，并返回本地化的冲突提示。 ([#10231](https://github.com/nocobase/nocobase/pull/10231)) by @katherinehhh

- **[AI: 知识库]** 修复知识库详情页导航，并统一 Admin 与 Settings 中命中测试页面的宽度。 by @cgyrock

