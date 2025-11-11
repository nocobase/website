### 🚀 优化

- **[client]**

  - 新增页面版本到 flow engine 上下文里 ([#7826](https://github.com/nocobase/nocobase/pull/7826)) by @gchust
  - 优化 markdown 编辑器 ([#7793](https://github.com/nocobase/nocobase/pull/7793)) by @katherinehhh
  - 2.0 区块适配 tableoid 字段 ([#7809](https://github.com/nocobase/nocobase/pull/7809)) by @katherinehhh
- **[数据可视化]** 更新图表提示栏和事件代码模板注释 ([#7814](https://github.com/nocobase/nocobase/pull/7814)) by @heziqiang
- **[权限控制]** 优化关系字段关联操作的权限控制逻辑 ([#7800](https://github.com/nocobase/nocobase/pull/7800)) by @2013xile
- **[认证：OIDC]** 增加请求超时时间 by @2013xile

### 🐛 修复

- **[server]** 修复消息队列在启用服务拆分模式后，工作进程发消息导致报错的问题 ([#7797](https://github.com/nocobase/nocobase/pull/7797)) by @mytharcher
- **[client]**

  - 当前数据表变量不应该可以从筛选组件的变量选择器中被选择 ([#7818](https://github.com/nocobase/nocobase/pull/7818)) by @gchust
  - 修复筛选表单关系字段报错 “value.replace is not a function” ([#7824](https://github.com/nocobase/nocobase/pull/7824)) by @zhangzhonghe
  - 修复 onChange 回调传参错误 ([#7807](https://github.com/nocobase/nocobase/pull/7807)) by @zhangzhonghe
- **[flow-engine]** 修复事件流修改后需要刷新页面才会生效的问题。 ([#7811](https://github.com/nocobase/nocobase/pull/7811)) by @gchust
- **[工作流]** 修复服务拆分模式下，工作流插件不处于服务模式时仍然消费队列的问题 ([#7820](https://github.com/nocobase/nocobase/pull/7820)) by @mytharcher
- **[工作流：审批]** 修复重查关系数据时未屏蔽主表字段的问题 by @mytharcher
- **[邮件管理]** 修复 outlook 内敛图片和同步问题 by @jiannx
