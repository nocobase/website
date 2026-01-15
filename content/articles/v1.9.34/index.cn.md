### 🚀 优化

- **[权限控制]** 完善修改嵌套关系字段时的权限判断逻辑 ([#7856](https://github.com/nocobase/nocobase/pull/7856)) by @2013xile

### 🐛 修复

- **[client]**

  - 修复表单区块中外部数据源关系表的关系字段未加载数据的问题 ([#8356](https://github.com/nocobase/nocobase/pull/8356)) by @katherinehhh
  - 修复 `FilterAction` 组件中关系字段展示不对的问题 ([#8295](https://github.com/nocobase/nocobase/pull/8295)) by @mytharcher
- **[logger]** 修复打印系统日志时额外错误信息被丢弃的问题 ([#8367](https://github.com/nocobase/nocobase/pull/8367)) by @cgyrock
- **[工作流：循环节点]** 修复条件分支中失败的节点无法将状态传递到上层分支导致的流程错误问题 ([#8360](https://github.com/nocobase/nocobase/pull/8360)) by @mytharcher
- **[数据源：主数据库]** 视图表元数据需要携带原始字段信息 ([#8337](https://github.com/nocobase/nocobase/pull/8337)) by @2013xile
- **[工作流]**

  - 修复工作流抄送节点的详情区块联动规则不生效的问题 ([#8381](https://github.com/nocobase/nocobase/pull/8381)) by @zhangzhonghe
  - 为节点执行记录的 Snowflake ID 加入实例 ID 配置，以避免集群下 ID 冲突问题 ([#8382](https://github.com/nocobase/nocobase/pull/8382)) by @mytharcher
  - 修复工作流删除后执行计划页面崩溃的问题 ([#8361](https://github.com/nocobase/nocobase/pull/8361)) by @mytharcher
- **[操作：导入记录]** 修复异步导入 xlsx 文件触发唯一约束异常时错误信息不正确的问题 ([#8342](https://github.com/nocobase/nocobase/pull/8342)) by @cgyrock
- **[权限控制]**

  - 允许关系字段使用目标键进行关联 ([#8352](https://github.com/nocobase/nocobase/pull/8352)) by @2013xile
  - 修复处理关系字段权限时获取数据源不正确的问题 ([#8370](https://github.com/nocobase/nocobase/pull/8370)) by @2013xile
- **[数据源：REST API]** 为请求上下文增加容错，避免方法不存在时的报错 by @mytharcher
- **[操作：导出记录 Pro]** 修复主应用未启用导入/导出专业版插件时，子应用执行异步导入/导出任务报错问题 by @cgyrock
- **[工作流：审批]** 修复筛选字段在待办中心无法正常使用的问题 by @mytharcher
