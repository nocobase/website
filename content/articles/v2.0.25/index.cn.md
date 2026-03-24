### 🚀 优化

- **[工作流：审批]** 修复加载审批处理记录列表时由于 JSON 字段造成的性能问题 by @mytharcher

### 🐛 修复

- **[server]** 将 Pub-Sub 关闭的时机改为 `beforeStop`，以避免数据库关闭后仍进行了消息发送和处理 ([#8934](https://github.com/nocobase/nocobase/pull/8934)) by @mytharcher

- **[本地化]** 无权限时不应调用 localizationTexts:missing 接口 ([#8903](https://github.com/nocobase/nocobase/pull/8903)) by @chenos

- **[数据源：外部 Oracle]** 修复 Oracle 数据源加载报错的问题 by @2013xile

