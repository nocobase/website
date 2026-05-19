### 🚀 优化

- **[client]** v1 和 v2 应用共用条件判断能力 ([#9522](https://github.com/nocobase/nocobase/pull/9522)) by @zhangzhonghe

- **[本地化]** 优化 Lina 本地化翻译任务，支持翻译范围、参考语言配置和快捷编辑 ([#9521](https://github.com/nocobase/nocobase/pull/9521)) by @2013xile

- **[工作流：审批]** 相关审批现在以时间线卡片展示 by @zhangzhonghe

### 🐛 修复

- **[undefined]** 对齐 Nginx 配置路径 ([#9528](https://github.com/nocobase/nocobase/pull/9528)) by @chenos

- **[cli-v1]** 修复 create-nocobase-app 项目的开发启动问题，复用已发布应用壳并支持本地插件开发。 ([#9471](https://github.com/nocobase/nocobase/pull/9471)) by @Molunerfinn

- **[client]**
  - 修复菜单徽章值为 0 时仍显示小红点的问题 ([#9491](https://github.com/nocobase/nocobase/pull/9491)) by @zhangzhonghe

  - 修复筛选表单无法使用当前表单变量的问题 ([#9474](https://github.com/nocobase/nocobase/pull/9474)) by @zhangzhonghe

- **[用户认证]** 修复 WebSocket 鉴权 token 关联到未加载或缺失的 authType 时,服务进程崩溃的问题。 ([#9514](https://github.com/nocobase/nocobase/pull/9514)) by @Molunerfinn

- **[日历]**
  - 修复日历展开更多日程时显示不全的问题 ([#9492](https://github.com/nocobase/nocobase/pull/9492)) by @zhangzhonghe

  - 修复日历更多事项面板中事项 hover 时未显示手型光标的问题 ([#9519](https://github.com/nocobase/nocobase/pull/9519)) by @jiannx

- **[授权设置]** 解决依赖软链接问题 ([#9518](https://github.com/nocobase/nocobase/pull/9518)) by @chenos

