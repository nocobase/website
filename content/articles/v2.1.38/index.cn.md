### 🚀 优化

- **[undefined]** 明确 JavaScript Worker 的默认并发行为，以及需要配置并发上限的场景 ([#10317](https://github.com/nocobase/nocobase/pull/10317)) by @mytharcher
参考文档：[JavaScript 节点](https://docs.nocobase.com/cn/workflow/nodes/javascript)
- **[工作流：JavaScript 节点]** JavaScript 工作流节点现在会队列化异步 Worker 执行，并限制单进程 Worker 并发以降低资源峰值。 ([#10280](https://github.com/nocobase/nocobase/pull/10280)) by @mytharcher

### 🐛 修复

- **[前端流引擎]**
  - 修复自定义非 Sequelize 数据源中弹窗记录变量和关联区块无法正确解析的问题 ([#10272](https://github.com/nocobase/nocobase/pull/10272)) by @gchust

  - 修复表单字段值变量解析不正确的问题 ([#10319](https://github.com/nocobase/nocobase/pull/10319)) by @gchust

- **[文件管理器]** 修复跨域图片预览后，因浏览器缓存缺少 CORS 响应头导致文件下载失败的问题 ([#10313](https://github.com/nocobase/nocobase/pull/10313)) by @mytharcher
参考文档：[文件预览](https://github.com/nocobase/nocobase/blob/fix/file-manager-download-cors-cache/docs/docs/cn/file-manager/file-preview/index.md) / [阿里云 OSS](https://github.com/nocobase/nocobase/blob/fix/file-manager-download-cors-cache/docs/docs/cn/file-manager/storage/aliyun-oss.md)
