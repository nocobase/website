### 🚀 优化

- **[权限控制]** 完善修改嵌套关系字段时的权限判断逻辑 ([#7856](https://github.com/nocobase/nocobase/pull/7856)) by @2013xile

### 🐛 修复

- **[client]**

  - 修复targetKey 可选字段的处理逻辑 ([#8333](https://github.com/nocobase/nocobase/pull/8333)) by @katherinehhh
  - 修复 `FilterAction` 组件中关系字段展示不对的问题 ([#8295](https://github.com/nocobase/nocobase/pull/8295)) by @mytharcher
  - 修复编辑态子表格中关系字段 Select 的 filter 参数错误问题 ([#8335](https://github.com/nocobase/nocobase/pull/8335)) by @katherinehhh
- **[flow-engine]** 修复多次打开弹窗可能出现的状态污染问题。 ([#8327](https://github.com/nocobase/nocobase/pull/8327)) by @gchust
- **[database]** 修复对象类型的 `appends` 参数处理，并且提升参数解析的 `arrayLimit` 上限 ([#8328](https://github.com/nocobase/nocobase/pull/8328)) by @mytharcher
- **[操作：导入记录]** 修复异步导入 xlsx 文件触发唯一约束异常时错误信息不正确的问题 ([#8342](https://github.com/nocobase/nocobase/pull/8342)) by @cgyrock
- **[数据源：主数据库]** 视图表元数据需要携带原始字段信息 ([#8337](https://github.com/nocobase/nocobase/pull/8337)) by @2013xile
- **[操作：导出记录 Pro]** 修复主应用未启用导入/导出专业版插件时，子应用执行异步导入/导出任务报错问题 by @cgyrock
- **[工作流：审批]** 修复筛选字段在待办中心无法正常使用的问题 by @mytharcher
- **[邮件管理]** 显示回复全部按钮和数据范围支持筛选子邮件 by @jiannx
