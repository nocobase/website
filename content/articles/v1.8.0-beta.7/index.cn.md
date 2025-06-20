### 🎉 新特性

- **[文本复制]** 支持一键复制文本字段内容 ([#6954](https://github.com/nocobase/nocobase/pull/6954)) by @zhangzhonghe

### 🐛 修复

- **[server]** Cannot read properties of undefined (reading 'setMaaintainingMessage') ([#7064](https://github.com/nocobase/nocobase/pull/7064)) by @chenos

- **[client]**
  - 关系字段数据选择器提交后未清空选中数据 ([#7067](https://github.com/nocobase/nocobase/pull/7067)) by @katherinehhh

  - 创建反向关系字段后，编辑关系字段设置项“在目标数据表里创建反向关系字段”未勾选 ([#6914](https://github.com/nocobase/nocobase/pull/6914)) by @aaaaaajie

- **[权限控制]** 修复了在没有默认角色时无法进入应用的问题 ([#7059](https://github.com/nocobase/nocobase/pull/7059)) by @aaaaaajie

- **[工作流：循环节点]** 修复循环分支在条件未满足时仍然执行的问题 ([#7063](https://github.com/nocobase/nocobase/pull/7063)) by @mytharcher

- **[数据源管理]** 修改权限的数据范围后，相关角色同步生效 ([#7065](https://github.com/nocobase/nocobase/pull/7065)) by @aaaaaajie

- **[工作流：自定义操作事件]** 修复操作成功后配置中的重定向链接变量未解析的问题 by @mytharcher

- **[工作流：审批]**
  - 修复触发器变量中按类型过滤的缺陷 by @mytharcher

  - 修复待办统计在执行计划取消后未更新的问题 by @mytharcher

