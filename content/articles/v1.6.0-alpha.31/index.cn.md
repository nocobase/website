### 🎉 新特性

- **[client]** 兼容历史按钮配置按钮权限 ([#6376](https://github.com/nocobase/nocobase/pull/6376)) by @katherinehhh

- **[工作流：响应消息]** 支持响应消息在操作后事件中使用 by @mytharcher

### 🚀 优化

- **[认证：API 密钥]** 为 API key 验证增加 token 配置测试用例。 ([#6361](https://github.com/nocobase/nocobase/pull/6361)) by @sheldon66

- **[工作流：人工处理节点]** 调整工作流待办中心界面 ([#6272](https://github.com/nocobase/nocobase/pull/6272)) by @mytharcher

### 🐛 修复

- **[server]** `yarn start` 启动服务器后前端缓存未刷新 ([#6394](https://github.com/nocobase/nocobase/pull/6394)) by @gchust

- **[client]**
  - FormDrawer 缺失主题上下文 ([#6403](https://github.com/nocobase/nocobase/pull/6403)) by @katherinehhh

  - 使用“$anyOf”操作符时，联动规则无效 ([#6400](https://github.com/nocobase/nocobase/pull/6400)) by @zhangzhonghe

- **[auth]** 用户不存在时返回 401 错误并更新本地化信息。 ([#6381](https://github.com/nocobase/nocobase/pull/6381)) by @sheldon66

- **[区块：模板]** 页面数据区块另存为模板菜单不显示 ([#6398](https://github.com/nocobase/nocobase/pull/6398)) by @gchust

- **[工作流：人工处理节点]** 避免唯一键冲突 ([#6407](https://github.com/nocobase/nocobase/pull/6407)) by @mytharcher

- **[数据源管理]** 外部数据源点击字段编辑报错 ([#6402](https://github.com/nocobase/nocobase/pull/6402)) by @katherinehhh

- **[主题编辑器]** 主题连续切换多次后切换失败的问题 ([#6387](https://github.com/nocobase/nocobase/pull/6387)) by @katherinehhh

- **[WEB 客户端]** 切换角色后页面显示空白 ([#6388](https://github.com/nocobase/nocobase/pull/6388)) by @aaaaaajie

- **[工作流：审批]**
  - 避免错误的审批人配置导致查询出全部用户 by @mytharcher

  - 修复加签时的顺序参数 by @mytharcher

- **[企业微信]** 修复登录提示链接和钉钉登录错误 by @chenzhizdt

