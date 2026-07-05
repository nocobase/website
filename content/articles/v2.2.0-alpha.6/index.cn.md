### 🚀 优化

- **[cli]** 重构 CLI 的 setup 启动流程以复用 `nb app start`，统一 API base path 的重定向行为，持久化 env 的共享代理默认配置，并在 Docker 代理端口变化时自动重建容器。 ([#9997](https://github.com/nocobase/nocobase/pull/9997)) by @chenos

