### 🚀 优化

- **[cli]**
  - 改进 Docker CLI 安装体验，支持配置默认的 NocoBase 镜像仓库和变体，修复代理与 `no-nginx` 镜像端口兼容性，并补充 Docker Nginx/Caddy 安装文档。 ([#9972](https://github.com/nocobase/nocobase/pull/9972)) by @chenos

  - 重构 CLI 的 setup 启动流程以复用 `nb app start`，统一 API base path 的重定向行为，持久化 env 的共享代理默认配置，并在 Docker 代理端口变化时自动重建容器。 ([#9997](https://github.com/nocobase/nocobase/pull/9997)) by @chenos

### 🐛 修复

- **[client-v2]**
  - 修复生产环境下 Vditor 静态资源加载路径，改为基于实际生效的 webpack public path 解析插件 CDN 路径。 ([#10008](https://github.com/nocobase/nocobase/pull/10008)) by @chenos

  - 修复切换页面时可能出现无法利用快捷编辑切换下拉选项的问题。 ([#10007](https://github.com/nocobase/nocobase/pull/10007)) by @gchust

- **[flow-engine]** 修复切换配置模式时弹窗内部配置不一致的问题。 ([#10005](https://github.com/nocobase/nocobase/pull/10005)) by @gchust

- **[文件管理器]** 上传文件时拒绝未被存储 MIME type 规则显式允许的主动内容文件名。 ([#9994](https://github.com/nocobase/nocobase/pull/9994)) by @mytharcher
参考文档：[本地存储](docs/docs/cn/file-manager/storage/local.md), [安全指南](docs/docs/cn/security/guide.md)
- **[数据源：外部 MariaDB]** 修复 MySQL、MSSQL 和 MariaDB 外部数据源设置中 Add all collections 无法切换的问题。 by @katherinehhh

