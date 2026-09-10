### 🚀 优化

- **[utils]** 新增环境变量，支持禁止服务端直接请求或重定向到纯 IP 地址 ([#10490](https://github.com/nocobase/nocobase/pull/10490)) by @2013xile

- **[client-v2]** 提升 V2 表单在 iOS 上的二维码扫码可靠性。 ([#10456](https://github.com/nocobase/nocobase/pull/10456)) by @katherinehhh

### 🐛 修复

- **[client-v2]** 在工作流新增、更新节点的字段赋值中隐藏服务端不支持的内置日期变量。 ([#10442](https://github.com/nocobase/nocobase/pull/10442)) by @mytharcher

- **[server]** 修复子应用部署环境不可用时错误显示准备中的问题 ([#10485](https://github.com/nocobase/nocobase/pull/10485)) by @2013xile

- **[工作流：延时节点]** 修复延时节点的时长变量校验，并在变量解析结果无效时直接报错，避免异常等待。 ([#10469](https://github.com/nocobase/nocobase/pull/10469)) by @mytharcher

- **[应用监管器]** 修复滚动更新或切换部署环境后子应用无法访问的问题 by @2013xile

