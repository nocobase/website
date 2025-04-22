### 🎉 新特性

- **[client]** 支持在表单、详情区块添加分组 ([#5498](https://github.com/nocobase/nocobase/pull/5498)) by @katherinehhh

- **[日历]** 日历插件添加默认视图选择、日历插件国际化配置添加月 周的配置转换 ([#5487](https://github.com/nocobase/nocobase/pull/5487)) by @Cyx649312038

- **[数据源：人大金仓（KingbaseES）]** 支持使用 Kingbase 数据库作为主、外部数据源（pg模式） by @chareice
参考文档：[数据源 - 人大金仓（KingbaseES）](https://docs-cn.nocobase.com/handbook/data-source-kingbase)
### 🚀 优化

- **[database]** 支持插件的静态加载逻辑 ([#5466](https://github.com/nocobase/nocobase/pull/5466)) by @chareice

- **[client]** 提升表格区块的渲染性能（首次渲染时间降低约 50%） ([#5438](https://github.com/nocobase/nocobase/pull/5438)) by @zhangzhonghe

- **[移动端]** 移动端支持表单筛选区块 ([#5482](https://github.com/nocobase/nocobase/pull/5482)) by @katherinehhh

- **[备份管理器]**
  - 更新 `备份本地存储文件` 配置默认值为true by @gchust

  - 还原操作失败时会自动恢复还原前的数据库数据 by @gchust

### 🐛 修复

- **[server]** 应用安装后未触发 app 的 afterLoad 事件 ([#5506](https://github.com/nocobase/nocobase/pull/5506)) by @chenos

- **[公开表单]** 公开表单注册acl  snippet ([#5505](https://github.com/nocobase/nocobase/pull/5505)) by @katherinehhh

- **[备份管理器]** 修复当子应用数据库使用不同schema时，执行子应用还原操作会致使主应用崩溃的问题 by @gchust

