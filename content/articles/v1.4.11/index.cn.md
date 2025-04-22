### 🚀 优化

- **[client]** 使更多的组件支持“省略超出长度的内容” 配置项 ([#5888](https://github.com/nocobase/nocobase/pull/5888)) by @zhangzhonghe

- **[database]** 关系 repository 支持 firstOrCreate & updateOrCreate ([#5894](https://github.com/nocobase/nocobase/pull/5894)) by @chareice

### 🐛 修复

- **[client]**
  - 修复 外部数据源区块的复制操作请求模版没有 x-data-source 参数 ([#5882](https://github.com/nocobase/nocobase/pull/5882)) by @katherinehhh

  - 修复 插件中的表格出现横向滚动条 ([#5899](https://github.com/nocobase/nocobase/pull/5899)) by @katherinehhh

  - 修复关系字段的下拉选项中，有时会出现多余的 “N/A” 选项的问题 ([#5878](https://github.com/nocobase/nocobase/pull/5878)) by @zhangzhonghe

  - 修复 PG 视图创建错误，解决跨 schema 选择问题 ([#5881](https://github.com/nocobase/nocobase/pull/5881)) by @katherinehhh

  - 修复：表单区块分组在水平布局下样式异常 ([#5884](https://github.com/nocobase/nocobase/pull/5884)) by @katherinehhh

- **[用户]**
  - 修复用户管理中添加或修改用户后表单没有被重置的问题 。 ([#5875](https://github.com/nocobase/nocobase/pull/5875)) by @2013xile

  - 修复用户管理页面翻页或修改分页数量后，编辑用户资料并提交，分页设置会被重置的问题。 ([#5893](https://github.com/nocobase/nocobase/pull/5893)) by @2013xile

- **[数据源管理]** 修复外部数据源 Collection 的筛选问题 ([#5890](https://github.com/nocobase/nocobase/pull/5890)) by @chareice

- **[公开表单]** 修复全局切换主题导致公开表单预览页主题被影响的问题 ([#5883](https://github.com/nocobase/nocobase/pull/5883)) by @katherinehhh

