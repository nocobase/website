### 🚀 优化

- **[server]** 优化加载本地化资源的方法，避免阻塞事件循环 ([#7653](https://github.com/nocobase/nocobase/pull/7653)) by @2013xile

- **[cache]** 避免因 clone 布隆过滤器造成的性能损耗 ([#7652](https://github.com/nocobase/nocobase/pull/7652)) by @2013xile

- **[操作：导入记录]** 改进了在未找到表头时的错误提示信息 ([#7656](https://github.com/nocobase/nocobase/pull/7656)) by @mytharcher

### 🐛 修复

- **[client]**
  - 修复筛选区块中日期字段清除时报错的问题 ([#7632](https://github.com/nocobase/nocobase/pull/7632)) by @katherinehhh

  - 修复字段标题换行截断单词的问题 ([#7647](https://github.com/nocobase/nocobase/pull/7647)) by @katherinehhh

  - 修复编辑弹窗中子表格默认值失效的问题 ([#7631](https://github.com/nocobase/nocobase/pull/7631)) by @katherinehhh

- **[数据表字段：中国行政区划]** 城市和县区相同时，无法导入数据 ([#7673](https://github.com/nocobase/nocobase/pull/7673)) by @2013xile

- **[工作流]**
  - 修复开启分支的节点删除后，保留的分支内部第一个节点的 key 被改为新值的问题 ([#7665](https://github.com/nocobase/nocobase/pull/7665)) by @mytharcher

  - 修复应用停止时日志报错的问题 ([#7639](https://github.com/nocobase/nocobase/pull/7639)) by @mytharcher

- **[文件管理器]** 修复 `.msg` 文件无法正常上传的问题 ([#7662](https://github.com/nocobase/nocobase/pull/7662)) by @mytharcher

- **[数据源：主数据库]** 修复创建反向关系字段后，多节点未同步元数据的问题 ([#7628](https://github.com/nocobase/nocobase/pull/7628)) by @mytharcher

- **[工作流：审批]**
  - 修复审批完成通知中的状态文本的翻译问题，当用户未设置语言偏好时使用系统配置的默认语言进行翻译 by @mytharcher

  - 修复加签后待办数字未更新的问题 by @mytharcher

