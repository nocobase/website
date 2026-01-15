### 🚀 优化

- **[evaluators]** 升级 math.js 包的版本以支持更多函数 ([#8411](https://github.com/nocobase/nocobase/pull/8411)) by @mytharcher

- **[client]** 富文本编辑器支持字体大小调整，图片大小调整，软换行 ([#8401](https://github.com/nocobase/nocobase/pull/8401)) by @jiannx

- **[AI 员工]** 将工作流调用的结果改为从 `execution.output` 中获得，明确使用流程输出节点以获得稳定的结果 ([#8423](https://github.com/nocobase/nocobase/pull/8423)) by @mytharcher

### 🐛 修复

- **[client]**
  - 为操作按钮的 schema 增加容错，避免点击后页面崩溃 ([#8420](https://github.com/nocobase/nocobase/pull/8420)) by @mytharcher

  - 修复表单关系字段标题设置附件URL后，再设置为其他字段时，标题设置项消失问题 ([#8418](https://github.com/nocobase/nocobase/pull/8418)) by @katherinehhh

  - 修复新增表单中关系字段设置阅读模式，切换标题字段不生效问题 ([#8413](https://github.com/nocobase/nocobase/pull/8413)) by @katherinehhh

- **[前端流引擎]** 修复 filterByTk 为数组时变量解析不正确的问题。 ([#8412](https://github.com/nocobase/nocobase/pull/8412)) by @gchust

- **[模板打印]** 支持空间字段 by @jiannx

