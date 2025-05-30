### 🎉 新特性

- **[undefined]**
  - 新增 gitpod 的支持，可以一键启动开发环境 ([#6922](https://github.com/nocobase/nocobase/pull/6922)) by @kerwin612

### 🚀 优化

- **[client]**
  - 优化表单 Tab 键的交互 ([#6942](https://github.com/nocobase/nocobase/pull/6942)) by @kerwin612
  - 菜单链接支持配置是否在新窗口打开 ([#6918](https://github.com/nocobase/nocobase/pull/6918)) by @katherinehhh
  - 弹出二次确认对话框之前先验证字段必填项 ([#6931](https://github.com/nocobase/nocobase/pull/6931)) by @katherinehhh

### 🐛 修复

- **[client]**

  - 关系字段下拉请求数据未分页，调整为按 200 条分页 ([#6950](https://github.com/nocobase/nocobase/pull/6950)) by @katherinehhh
  - 修复拖拽表格行时高亮位置不正确的问题 ([#6952](https://github.com/nocobase/nocobase/pull/6952)) by @chenos
  - 区块拖拽调整宽度失效 ([#6944](https://github.com/nocobase/nocobase/pull/6944)) by @chenos
  - 字段赋值组件多语言不生效 ([#6945](https://github.com/nocobase/nocobase/pull/6945)) by @katherinehhh
  - 报错信息无法正确被复制 ([#6908](https://github.com/nocobase/nocobase/pull/6908)) by @kerwin612
- **[数据表字段：Markdown(Vditor)]** 修复 markdown-vditor 组件缩放后宽度异常 ([#6946](https://github.com/nocobase/nocobase/pull/6946)) by @katherinehhh
- **[工作流：审批]** 修复翻译内容 by @mytharcher
