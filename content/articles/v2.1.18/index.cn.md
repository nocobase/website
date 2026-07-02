### 🚀 优化

- **[cli]** 支持手动生成 Nginx/Caddy 代理配置，允许 Docker 部署不内置 Nginx 运行，并统一代理与 CDN 相关的运行时配置。 ([#9943](https://github.com/nocobase/nocobase/pull/9943)) by @chenos

- **[undefined]** 调整外部存储 PDF 预览的安全说明。 ([#9901](https://github.com/nocobase/nocobase/pull/9901)) by @mytharcher
参考文档：[文件预览](https://github.com/nocobase/nocobase/blob/docs/file-preview-security/docs/docs/cn/file-manager/file-preview/index.md)
- **[utils]** 当未配置 `SERVER_REQUEST_WHITELIST` 且服务端对外请求目标存在 SSRF 风险时，新增日志警告。 ([#9966](https://github.com/nocobase/nocobase/pull/9966)) by @mytharcher
参考文档：[环境变量](https://docs.nocobase.com/cn/get-started/installation/env), [全局环境变量](https://docs.nocobase.com/cn/api/app/env)
- **[AI: 知识库]** 为知识库文档上传增加 ZIP 文件名编码选项，避免使用非 UTF-8 编码创建的 ZIP 压缩包中文件名出现乱码。 by @cgyrock

### 🐛 修复

- **[client-v2]** 修复路由子页面刷新后空白或间距异常的问题 ([#9961](https://github.com/nocobase/nocobase/pull/9961)) by @zhangzhonghe

- **[工作流]** 减少并发队列处理时工作流调度器不必要的数据库拉取重试。 ([#9953](https://github.com/nocobase/nocobase/pull/9953)) by @mytharcher

- **[操作：导出记录]** 修复 XLSX 导出中文本类字段值以公式字符开头时，打开 Excel 后可能被当作公式执行的问题。 ([#9973](https://github.com/nocobase/nocobase/pull/9973)) by @mytharcher

- **[AI 员工]** 修复清空自定义 Base URL 后，LLM 提供商无法回退到默认 Base URL 的问题。 ([#9958](https://github.com/nocobase/nocobase/pull/9958)) by @cgyrock

- **[数据源：外部 NocoBase]** 修复外部 NocoBase 数据源中附件字段上传和更新异常的问题 by @2013xile

