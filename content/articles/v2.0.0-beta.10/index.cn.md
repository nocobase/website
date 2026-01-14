### 🚀 优化

- **[client]** 支持事件流指定执行时机。 ([#8340](https://github.com/nocobase/nocobase/pull/8340)) by @gchust
- **[AI 员工]**

  - 优化 AI 员工主入口按钮 ([#8414](https://github.com/nocobase/nocobase/pull/8414)) by @heziqiang
  - 隐藏入口列表中的构建类 AI 员工；<br/> 优化 LLM 接入流程；<br/> 更新 Gemini-3 模型相关文档。 ([#8409](https://github.com/nocobase/nocobase/pull/8409)) by @heziqiang
- **[通知：站内信]** 修复当发送站内信至大量用户时的性能问题 ([#8402](https://github.com/nocobase/nocobase/pull/8402)) by @mytharcher

### 🐛 修复

- **[client]**

  - input number component does not display value ([#8410](https://github.com/nocobase/nocobase/pull/8410)) by @chenos
  - 修复新建表单中级联组件成功提交数据后，级联组件数据未清空 ([#8403](https://github.com/nocobase/nocobase/pull/8403)) by @katherinehhh
  - 修复提交按钮同时设置二次确认和跳过必填校验时跳过必填校验不生效的问题 ([#8400](https://github.com/nocobase/nocobase/pull/8400)) by @katherinehhh
  - 修复关系关联文件表中对一关系字段选择文件弹窗右下角出现提交按钮问题 ([#8398](https://github.com/nocobase/nocobase/pull/8398)) by @katherinehhh
  - 修复网格卡片区块设置 layout 无冒号不生效问题 ([#8399](https://github.com/nocobase/nocobase/pull/8399)) by @katherinehhh
  - 修复表单中数字输入汉字时没有阻止赋值问题 ([#8397](https://github.com/nocobase/nocobase/pull/8397)) by @katherinehhh
- **[数据表字段：多对多 (数组)]** 修复关联查询时 append 的二级关联表是多对多（数组）时报错的问题 ([#8406](https://github.com/nocobase/nocobase/pull/8406)) by @cgyrock
- **[多空间]**

  - 关联数据添加时关联空间 by @jiannx
  - 空间选择器颜色跟着主题 by @jiannx
