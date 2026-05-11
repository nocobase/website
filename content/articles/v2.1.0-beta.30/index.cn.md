### 🎉 新特性

- **[client]**
  - 页面菜单项支持配置联动规则 ([#9304](https://github.com/nocobase/nocobase/pull/9304)) by @zhangzhonghe

  - v2 增加当前用户语言变量 ([#9405](https://github.com/nocobase/nocobase/pull/9405)) by @katherinehhh

### 🚀 优化

- **[client-v2]** v2 布局中过滤掉 v1 的菜单，只显示 v2 菜单 ([#9427](https://github.com/nocobase/nocobase/pull/9427)) by @zhangzhonghe

- **[undefined]** nb cli 支持 session 级 current env ([#9415](https://github.com/nocobase/nocobase/pull/9415)) by @chenos

- **[AI 员工]** AI 员工支持多个会话并行处理 ([#9344](https://github.com/nocobase/nocobase/pull/9344)) by @cgyrock

- **[部门]** 优化部门列表样式，增加图标并调整间距 ([#9435](https://github.com/nocobase/nocobase/pull/9435)) by @katherinehhh

### 🐛 修复

- **[build]** 修复 v1 client 构建在引用其他插件 `/client-v2` 入口时报错的问题。 ([#9436](https://github.com/nocobase/nocobase/pull/9436)) by @Molunerfinn

- **[client]**
  - 修复 v2 子表格中的对多关系字段组件列表出现子表格组件的问题 ([#9438](https://github.com/nocobase/nocobase/pull/9438)) by @katherinehhh

  - 修复操作按钮联动规则偶现不生效的问题。 ([#9430](https://github.com/nocobase/nocobase/pull/9430)) by @gchust

- **[可视化数据表管理]** 修复 Graphical interface 自动布局报错 “to do update action, filter or filterByTk is required” ([#9421](https://github.com/nocobase/nocobase/pull/9421)) by @katherinehhh

- **[区块：树]** 优化树筛选区块设置，并修复不支持的关联记录入口、标题字段缺失提示以及关闭搜索后的重置行为。 ([#9426](https://github.com/nocobase/nocobase/pull/9426)) by @jiannx

