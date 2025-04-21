### 🚀 优化

- **[client]**
  - 导出必要的 hook ([#5702](https://github.com/nocobase/nocobase/pull/5702)) by @mytharcher

  - 中国行政区字段插件从内置插件中移除 ([#5693](https://github.com/nocobase/nocobase/pull/5693)) by @katherinehhh

- **[工作流：操作前事件]** 移除拦截器的警告日志 by @mytharcher

### 🐛 修复

- **[cli]** Daemon 模式不删除 sock 文件 ([#5750](https://github.com/nocobase/nocobase/pull/5750)) by @chenos

- **[client]**
  - 修复多个关系字段关联同一张表时，设置关系表字段时互相影响的问题 ([#5744](https://github.com/nocobase/nocobase/pull/5744)) by @katherinehhh

  - 修复 子表格勾选框内容未对齐问题 ([#5735](https://github.com/nocobase/nocobase/pull/5735)) by @katherinehhh

  - 修复 数据选择器未显示外键字段 ([#5734](https://github.com/nocobase/nocobase/pull/5734)) by @katherinehhh

  - 改进 子表格中验证信息的反馈显示方式 ([#5700](https://github.com/nocobase/nocobase/pull/5700)) by @katherinehhh

- **[server]** 按依赖顺序加载插件 ([#5706](https://github.com/nocobase/nocobase/pull/5706)) by @chenos

- **[区块：地图]** 修复 Google Map 切换缩放等级时报错的问题 ([#5722](https://github.com/nocobase/nocobase/pull/5722)) by @katherinehhh

- **[数据源：主数据库]** 修复视图 Collection 字段获取原始字段名的问题 ([#5729](https://github.com/nocobase/nocobase/pull/5729)) by @chareice

- **[文件管理器]** 当 Endpoint 不为空时，forcePathStyle 为 true ([#5712](https://github.com/nocobase/nocobase/pull/5712)) by @chenos

