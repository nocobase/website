### 🎉 新特性

- **[多应用管理器]** 支持为子应用配置独立的认证密钥 ([#7197](https://github.com/nocobase/nocobase/pull/7197)) by @mytharcher

- **[工作流：抄送]** 工作流新增抄送节点 ([#7201](https://github.com/nocobase/nocobase/pull/7201)) by @mytharcher

### 🚀 优化

- **[通知：站内信]** 优化移动端消息页面的字体大小 ([#7199](https://github.com/nocobase/nocobase/pull/7199)) by @zhangzhonghe

- **[认证：钉钉]** 支持配置回调 URL 协议和端口号 by @2013xile

### 🐛 修复

- **[通知：站内信]** 修复字符串格式的大整型时间戳导致的 dayjs 问题 ([#7196](https://github.com/nocobase/nocobase/pull/7196)) by @mytharcher

- **[工作流：审批]**
  - 避免用户不存在时的报错 by @mytharcher

  - 重新加载审批记录上的关系数据 by @mytharcher

  - 迁移脚本中更新 UI schema 时加入 `try/catch` by @mytharcher

