### 🎉 新特性

- **[区块：网格卡片]** 区块支持高度设置 ([#8583](https://github.com/nocobase/nocobase/pull/8583)) by @katherinehhh

- **[操作：批量编辑]** 批量编辑2.0 ([#8526](https://github.com/nocobase/nocobase/pull/8526)) by @jiannx

### 🚀 优化

- **[client]**
  - 表格2.0支持拖拽排序 ([#8540](https://github.com/nocobase/nocobase/pull/8540)) by @jiannx

  - 将字段赋值和默认值相关配置重构为表单级别配置。 ([#8596](https://github.com/nocobase/nocobase/pull/8596)) by @chenos

- **[本地化]** 自动创建i18n缺失的词条 ([#8588](https://github.com/nocobase/nocobase/pull/8588)) by @jiannx

### 🐛 修复

- **[client]**
  - 修复表单关系字段组件中标题字段使用外键字段时下拉列表数据展示异常的问题 ([#8619](https://github.com/nocobase/nocobase/pull/8619)) by @katherinehhh

  - 修复编辑表单中关系附件字段清空后提交保存无效的问题 ([#8616](https://github.com/nocobase/nocobase/pull/8616)) by @katherinehhh

  - 修复编辑表单关系字段从可编辑切换到只读模式时字段组件可选项未实时刷新的问题 ([#8611](https://github.com/nocobase/nocobase/pull/8611)) by @katherinehhh

  - 修复 JS column 代码编辑器里点击 run 按钮后表格列不重新的问题。 ([#8608](https://github.com/nocobase/nocobase/pull/8608)) by @gchust

  - 修复编辑表单关系字段数据选择器已选数据修改后无法恢复的问题 ([#8610](https://github.com/nocobase/nocobase/pull/8610)) by @katherinehhh

- **[文件管理器]** 修复表单中文件类型字段禁用后仍可打开选择弹窗的问题 ([#8617](https://github.com/nocobase/nocobase/pull/8617)) by @katherinehhh

- **[数据可视化：ECharts]** 修复 ECharts 拼写错误 by @heziqiang

- **[工作流：审批]**
  - 修复“我的申请”详情弹窗中字段值丢失的问题 by @mytharcher

  - 修复保存前模式下手动执行报错的问题 by @mytharcher

