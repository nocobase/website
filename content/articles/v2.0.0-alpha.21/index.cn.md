### 🚀 优化

- **[cache]** 避免因 clone 布隆过滤器造成的性能损耗 ([#7652](https://github.com/nocobase/nocobase/pull/7652)) by @2013xile
- **[server]** 优化加载本地化资源的方法，避免阻塞事件循环 ([#7653](https://github.com/nocobase/nocobase/pull/7653)) by @2013xile
- **[操作：导入记录]** 改进了在未找到表头时的错误提示信息 ([#7656](https://github.com/nocobase/nocobase/pull/7656)) by @mytharcher

### 🐛 修复

- **[client]** 修复字段标题换行截断单词的问题 ([#7647](https://github.com/nocobase/nocobase/pull/7647)) by @katherinehhh
- **[数据可视化]** 修复图表 SQL 查询中的变量自动解析问题 ([#7642](https://github.com/nocobase/nocobase/pull/7642)) by @heziqiang
- **[工作流]** 修复应用停止时日志报错的问题 ([#7639](https://github.com/nocobase/nocobase/pull/7639)) by @mytharcher
