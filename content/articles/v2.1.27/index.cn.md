### 🚀 优化

- **[client-v2]** 在系统设置的可选语言中增加缅甸语（`my-MM`）。 ([#10131](https://github.com/nocobase/nocobase/pull/10131)) by @hongboji

### 🐛 修复

- **[resourcer]** 修复操作前事件与审批保存前模式同时使用时，操作前事件可能未触发的问题。 ([#10119](https://github.com/nocobase/nocobase/pull/10119)) by @mytharcher

- **[flow-engine]** 修复移动端弹窗超出屏幕并遮住关闭按钮的问题 ([#10118](https://github.com/nocobase/nocobase/pull/10118)) by @zhangzhonghe

- **[client-v2]**
  - 修复页面开启标签页后立即改名可能导致路由状态不一致的问题 ([#10117](https://github.com/nocobase/nocobase/pull/10117)) by @zhangzhonghe

  - 修复可能导致审批页面无法加载的报错问题 ([#10116](https://github.com/nocobase/nocobase/pull/10116)) by @zhangzhonghe

- **[utils]** 确保服务端对外请求的重定向目标同样遵循 `SERVER_REQUEST_WHITELIST` 白名单 ([#10109](https://github.com/nocobase/nocobase/pull/10109)) by @mytharcher
参考文档：[环境变量](https://docs.nocobase.com/cn/get-started/installation/env#server_request_whitelist)
- **[工作流：审批]** 修复提交审批提示信息覆盖操作前事件消息的问题 by @mytharcher

