### 🚀 优化

- **[client]** 去除表格的 Formily 组件，以提高切换表格分页时的性能 ([#5738](https://github.com/nocobase/nocobase/pull/5738)) by @zhangzhonghe

### 🐛 修复

- **[client]**
  - 修复在子表单中添加字段后，不显示字段的问题 ([#5827](https://github.com/nocobase/nocobase/pull/5827)) by @zhangzhonghe

  - 修复在详情区块中，更改关系字段的值，不会立即刷新的问题 ([#5826](https://github.com/nocobase/nocobase/pull/5826)) by @zhangzhonghe

  - 修复首次开启“启用链接”后，点击链接打不开弹窗的问题 ([#5812](https://github.com/nocobase/nocobase/pull/5812)) by @zhangzhonghe

  - 关闭弹窗时，防止触发多次 API 请求 ([#5804](https://github.com/nocobase/nocobase/pull/5804)) by @zhangzhonghe

  - 修复在移动端登录后，会跳转到桌面端页面的问题 ([#5805](https://github.com/nocobase/nocobase/pull/5805)) by @zhangzhonghe

  - 修复操作配置按钮未左对齐的问题 ([#5798](https://github.com/nocobase/nocobase/pull/5798)) by @katherinehhh

- **[build]** 修复插件构建后前端 js 文件错误缓存的问题 ([#5801](https://github.com/nocobase/nocobase/pull/5801)) by @gchust

