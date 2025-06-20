### 🎉 新特性

- **[文本复制]** 支持一键复制文本字段内容 ([#6954](https://github.com/nocobase/nocobase/pull/6954)) by @zhangzhonghe

- **[邮件管理]** 支持邮件删除 by @jiannx

### 🚀 优化

- **[client]**
  - checkbox 字段联动条件判断支持 "为空”和“不为空” ([#7073](https://github.com/nocobase/nocobase/pull/7073)) by @katherinehhh

  - Logo 容器宽度根据内容类型自适应（图片固定 168px，文本自动宽度） ([#7075](https://github.com/nocobase/nocobase/pull/7075)) by @Cyx649312038

- **[异步任务管理器]** 优化导出创建任务响应慢 ([#7078](https://github.com/nocobase/nocobase/pull/7078)) by @aaaaaajie

- **[工作流：审批]** 为转签、加签的人员选择列表增加额外字段显示的配置项 by @mytharcher

### 🐛 修复

- **[client]**
  - 修复金额字段组件从掩码改为数字后小数点丢失的问题 ([#7077](https://github.com/nocobase/nocobase/pull/7077)) by @katherinehhh

  - 修复子表格中 Markdown（Vditor）字段组件渲染不正确的问题 ([#7074](https://github.com/nocobase/nocobase/pull/7074)) by @katherinehhh

  - 创建反向关系字段后，编辑关系字段设置项“在目标数据表里创建反向关系字段”未勾选 ([#6914](https://github.com/nocobase/nocobase/pull/6914)) by @aaaaaajie

  - 关系字段数据选择器提交后未清空选中数据 ([#7067](https://github.com/nocobase/nocobase/pull/7067)) by @katherinehhh

- **[server]** Cannot read properties of undefined (reading 'setMaaintainingMessage') ([#7064](https://github.com/nocobase/nocobase/pull/7064)) by @chenos

- **[权限控制]** 修复了在没有默认角色时无法进入应用的问题 ([#7059](https://github.com/nocobase/nocobase/pull/7059)) by @aaaaaajie

- **[数据源管理]** 修改权限的数据范围后，相关角色同步生效 ([#7065](https://github.com/nocobase/nocobase/pull/7065)) by @aaaaaajie

- **[工作流：循环节点]** 修复循环分支在条件未满足时仍然执行的问题 ([#7063](https://github.com/nocobase/nocobase/pull/7063)) by @mytharcher

- **[工作流：自定义操作事件]** 修复操作成功后配置中的重定向链接变量未解析的问题 by @mytharcher

- **[工作流：审批]** 修复待办统计在执行计划取消后未更新的问题 by @mytharcher

- **[邮件管理]** 邮件删除失败 by @jiannx

- **[备份管理器]** windows 平台下，还原 MySQL 应用时提示无法识别的命令错误 by @gchust

