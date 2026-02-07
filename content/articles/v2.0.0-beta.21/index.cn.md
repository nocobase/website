### 🎉 新特性

- **[client]** 支持在表单中配置关系字段的字段 ([#8578](https://github.com/nocobase/nocobase/pull/8578)) by @katherinehhh

- **[操作：复制记录]** 新增2.0 复制操作 ([#8580](https://github.com/nocobase/nocobase/pull/8580)) by @katherinehhh

- **[工作流]** 在工作流画布上支持复制粘贴节点和拖拽移动节点的位置 ([#8559](https://github.com/nocobase/nocobase/pull/8559)) by @mytharcher

### 🚀 优化

- **[flow-engine]** 优化 JS model 代码编辑器相关的自动补全和提示。 ([#8575](https://github.com/nocobase/nocobase/pull/8575)) by @gchust

- **[工作流：审批]** 移除对 JS Field 的支持 by @zhangzhonghe

### 🐛 修复

- **[client]**
  - 修复非配置模式时可能出现 "read hidden" 渲染报错。 ([#8591](https://github.com/nocobase/nocobase/pull/8591)) by @gchust

  - 修复编辑表单中子表格(行内编辑)设为只读后切换阅读态子表格时仍保留编辑态列字段的问题 ([#8589](https://github.com/nocobase/nocobase/pull/8589)) by @katherinehhh

- **[前端流引擎]** 修复使用区块模板时如果使用复制模式会导致弹窗打开后为空的问题。 ([#8581](https://github.com/nocobase/nocobase/pull/8581)) by @gchust

- **[区块：地图]** 修复地图区块出现两个「保存为模版」配置项问题 ([#8584](https://github.com/nocobase/nocobase/pull/8584)) by @katherinehhh

