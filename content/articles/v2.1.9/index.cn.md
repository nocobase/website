### 🚀 优化

- **[client-v2]** 表单值配置新增覆盖值选项。 ([#9578](https://github.com/nocobase/nocobase/pull/9578)) by @gchust

### 🐛 修复

- **[client-v2]**
  - 修复自定义操作工作流触发按钮将自定义上下文 JSON 放到额外的 `values` 层级或作为序列化字符串提交的问题。 ([#9815](https://github.com/nocobase/nocobase/pull/9815)) by @mytharcher

  - 修复配置固定值或者默认值为关系字段值时不生效的问题。 ([#9820](https://github.com/nocobase/nocobase/pull/9820)) by @gchust

- **[auth]** 登录状态响应不再包含加密密码数据 ([#9836](https://github.com/nocobase/nocobase/pull/9836)) by @2013xile

- **[app]** 避免在推断插件 public path 时使用无关的 currentScript ([#9839](https://github.com/nocobase/nocobase/pull/9839)) by @chenos

- **[UI 模板]** 修复 ctx.openview 默认上下文不正确的问题。 ([#9811](https://github.com/nocobase/nocobase/pull/9811)) by @gchust

