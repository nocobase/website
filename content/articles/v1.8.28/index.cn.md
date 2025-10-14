### 🚀 优化

- **[client]** 在前端使用 `mime` 包检测文件的 MIME 类型，以获得更准确的类型数据 ([#7551](https://github.com/nocobase/nocobase/pull/7551)) by @mytharcher

- **[工作流]**
  - 支持通过环境变量限制一个工作流中的最大节点数 ([#7542](https://github.com/nocobase/nocobase/pull/7542)) by @mytharcher

  - 删除节点时增加“保留分支”选项 ([#7571](https://github.com/nocobase/nocobase/pull/7571)) by @mytharcher

- **[工作流：循环节点]** 支持通过环境变量限制循环节点的最大循环次数 ([#7543](https://github.com/nocobase/nocobase/pull/7543)) by @mytharcher

- **[工作流：审批]** 为自定义审批区块的详情弹窗增加打印按钮 by @mytharcher

### 🐛 修复

- **[client]**
  - 修复预览图片同时旋转和缩放显示不正常的问题 ([#7573](https://github.com/nocobase/nocobase/pull/7573)) by @mytharcher

  - 修复 AssignedField 组件未实现动态属性导致的新增、更新节点上传文件错误问题 ([#7556](https://github.com/nocobase/nocobase/pull/7556)) by @mytharcher

- **[公开表单]** 修复公开表单中的文件字段上传规则不正确的问题 ([#7553](https://github.com/nocobase/nocobase/pull/7553)) by @mytharcher

- **[日历]** 修复日历区块数据表设置唯一标识后详情数据查询错误问题 ([#7562](https://github.com/nocobase/nocobase/pull/7562)) by @katherinehhh

- **[认证：LDAP]** 修复含非 ASCII（UTF-8）DN 的 AD 登录失败问题 by @2013xile

