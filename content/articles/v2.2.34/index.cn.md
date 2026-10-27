### 🚀 优化

- **[钉钉]** 修复文件式安装插件后钉钉 Stream 模式启动失败；全量同步接口调用量降低约 90%；同步撞钉钉调用总量配额时在失败消息中显示配额重置时间 by @chenzhizdt

### 🐛 修复

- **[AI 员工]** 为 OpenAI Responses 服务增加可选的“无状态请求”模式，用于规避网关跨 Azure OpenAI 资源路由时的响应条目错误。 ([#11183](https://github.com/nocobase/nocobase/pull/11183)) by @cgyrock

- **[飞书 / Lark]** 修复配置 `APP_PUBLIC_PATH` 后飞书 OAuth 回调地址缺少前缀导致授权失败；修复 v2 客户端自动登录不触发及回跳 404 by @chenzhizdt

