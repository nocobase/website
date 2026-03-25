### 🎉 新特性

- **[client]** 新增 JS item 操作 ([#8911](https://github.com/nocobase/nocobase/pull/8911)) by @jiannx

- **[AI 员工]** AI 员工增加 SKILLS 能力 ([#8797](https://github.com/nocobase/nocobase/pull/8797)) by @cgyrock

- **[数据源管理]** 支持按需加载 MCP 工具 ([#8936](https://github.com/nocobase/nocobase/pull/8936)) by @2013xile

### 🚀 优化

- **[flow-engine]** 增强页面搭建相关的api的schema验证。 ([#8881](https://github.com/nocobase/nocobase/pull/8881)) by @gchust

- **[client]** 优化表单按钮的水平布局 ([#8869](https://github.com/nocobase/nocobase/pull/8869)) by @jiannx

- **[app]** 为 client-v1 增加基于 Rsbuild 的开发工作流，并保持本地插件开发与当前 `/v2/` 环境兼容 ([#8902](https://github.com/nocobase/nocobase/pull/8902)) by @Molunerfinn

- **[数据表字段：中国行政区划]** 中国行政区划字段 2.0 ([#8831](https://github.com/nocobase/nocobase/pull/8831)) by @jiannx

- **[工作流]** 为所以触发器和节点增加验证规则 ([#8930](https://github.com/nocobase/nocobase/pull/8930)) by @mytharcher

- **[工作流：审批]** 修复加载审批处理记录列表时由于 JSON 字段造成的性能问题 by @mytharcher

### 🐛 修复

- **[flow-engine]** 表单字段删除时同步状态到字段配置 ([#8857](https://github.com/nocobase/nocobase/pull/8857)) by @jiannx

- **[resourcer]** 修复外部数据源不能正确加载的问题 ([#8929](https://github.com/nocobase/nocobase/pull/8929)) by @2013xile

- **[database]** 当追加关系数据参数有误时，使用警告类型的日志并跳过该字段，避免报错导致无法执行 ([#8923](https://github.com/nocobase/nocobase/pull/8923)) by @mytharcher

- **[server]** 将 Pub-Sub 关闭的时机改为 `beforeStop`，以避免数据库关闭后仍进行了消息发送和处理 ([#8934](https://github.com/nocobase/nocobase/pull/8934)) by @mytharcher

- **[自定义变量]** 公开表单提交数据后报 No permissions ([#8942](https://github.com/nocobase/nocobase/pull/8942)) by @chenos

- **[AI 员工]** 修复 core 包中 ai 模块无法通过的测试用例 ([#8941](https://github.com/nocobase/nocobase/pull/8941)) by @cgyrock

- **[本地化]** 无权限时不应调用 localizationTexts:missing 接口 ([#8903](https://github.com/nocobase/nocobase/pull/8903)) by @chenos

- **[操作：导入记录 Pro]** 修复“触发工作流”选项不选时仍然触发工作流的问题 by @mytharcher

- **[数据源：外部 Oracle]** 修复 Oracle 数据源加载报错的问题 by @2013xile

- **[工作流：审批]** 修复 v2 审批表单回退按钮的翻译、节点选择和回退目标问题 by @zhangzhonghe

