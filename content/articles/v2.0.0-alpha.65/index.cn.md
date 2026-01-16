### 🎉 新特性

- **[test]** 为默认任务管理器添加进程级并发控制 ([#8343](https://github.com/nocobase/nocobase/pull/8343)) by @cgyrock

### 🚀 优化

- **[client]**
  - 富文本编辑器支持字体大小调整，图片大小调整，软换行 ([#8401](https://github.com/nocobase/nocobase/pull/8401)) by @jiannx

  - 支持事件流指定执行时机。 ([#8340](https://github.com/nocobase/nocobase/pull/8340)) by @gchust

  - 通过改为使用 webkit 原生 CSS 展示文本省略号，优化插件管理器列表渲染性能 ([#8391](https://github.com/nocobase/nocobase/pull/8391)) by @mytharcher

- **[evaluators]** 升级 math.js 包的版本以支持更多函数 ([#8411](https://github.com/nocobase/nocobase/pull/8411)) by @mytharcher

- **[cli]** 支持通过环境变量配置 CDN 基础地址 ([#8384](https://github.com/nocobase/nocobase/pull/8384)) by @chenos

- **[flow-engine]** GridModel 新增 `rowOrder` 字段以确保行顺序的一致性 ([#8371](https://github.com/nocobase/nocobase/pull/8371)) by @zhangzhonghe

- **[前端流引擎]** 支持解析当前表单变量中未添加到编辑表单中的字段的值。 ([#8436](https://github.com/nocobase/nocobase/pull/8436)) by @gchust

- **[AI 员工]**
  - 优化 AI 员工主入口按钮 ([#8414](https://github.com/nocobase/nocobase/pull/8414)) by @heziqiang

  - 将工作流调用的结果改为从 `execution.output` 中获得，明确使用流程输出节点以获得稳定的结果 ([#8423](https://github.com/nocobase/nocobase/pull/8423)) by @mytharcher

  - 隐藏入口列表中的构建类 AI 员工；<br/> 优化 LLM 接入流程；<br/> 更新 Gemini-3 模型相关文档。 ([#8409](https://github.com/nocobase/nocobase/pull/8409)) by @heziqiang

  - 支持 Anthropic 和 Claude-4.5 ([#8389](https://github.com/nocobase/nocobase/pull/8389)) by @heziqiang

- **[通知：站内信]** 修复当发送站内信至大量用户时的性能问题 ([#8402](https://github.com/nocobase/nocobase/pull/8402)) by @mytharcher

### 🐛 修复

- **[client]**
  - 修复快捷便捷弹窗高度超出页面高度的问题 ([#8437](https://github.com/nocobase/nocobase/pull/8437)) by @zhangzhonghe

  - 修复表格行按钮的联动规则会影响弹窗表单按钮状态的问题 ([#8434](https://github.com/nocobase/nocobase/pull/8434)) by @zhangzhonghe

  - 修复切换分页时表格区块操作列状态污染的问题。 ([#8438](https://github.com/nocobase/nocobase/pull/8438)) by @gchust

  - 为操作按钮的 schema 增加容错，避免点击后页面崩溃 ([#8420](https://github.com/nocobase/nocobase/pull/8420)) by @mytharcher

  - 修复新增表单中关系字段设置阅读模式，切换标题字段不生效问题 ([#8413](https://github.com/nocobase/nocobase/pull/8413)) by @katherinehhh

  - input number component does not display value ([#8410](https://github.com/nocobase/nocobase/pull/8410)) by @chenos

  - 修复表单关系字段标题设置附件URL后，再设置为其他字段时，标题设置项消失问题 ([#8418](https://github.com/nocobase/nocobase/pull/8418)) by @katherinehhh

  - 修复提交按钮同时设置二次确认和跳过必填校验时跳过必填校验不生效的问题 ([#8400](https://github.com/nocobase/nocobase/pull/8400)) by @katherinehhh

  - 修复网格卡片区块设置layout无冒号不生效问题 ([#8399](https://github.com/nocobase/nocobase/pull/8399)) by @katherinehhh

  - 修复新建表单中级联组件成功提交数据后，级联组件数据未清空 ([#8403](https://github.com/nocobase/nocobase/pull/8403)) by @katherinehhh

  - 修复表单中数字输入汉字时没有阻止赋值问题 ([#8397](https://github.com/nocobase/nocobase/pull/8397)) by @katherinehhh

  - 修复关系关联文件表中对一关系字段选择文件弹窗右下角出现提交按钮问题 ([#8398](https://github.com/nocobase/nocobase/pull/8398)) by @katherinehhh

  - 修复targetKey 可选字段的处理逻辑 ([#8333](https://github.com/nocobase/nocobase/pull/8333)) by @katherinehhh

- **[flow-engine]** 修复点击按钮打开弹窗时动态事件流里的步骤会执行两次的问题。 ([#8435](https://github.com/nocobase/nocobase/pull/8435)) by @gchust

- **[前端流引擎]** 修复 filterByTk 为数组时变量解析不正确的问题。 ([#8412](https://github.com/nocobase/nocobase/pull/8412)) by @gchust

- **[文件管理器]** 修复上传至 S3 存储引擎的文件 URL 生成错误的问题 ([#8392](https://github.com/nocobase/nocobase/pull/8392)) by @mytharcher

- **[数据表字段：多对多 (数组)]** 修复关联查询时append的二级关联表是多对多（数组）时报错的问题 ([#8406](https://github.com/nocobase/nocobase/pull/8406)) by @cgyrock

- **[工作流]**
  - 修复复制工作流之后节点配置中的界面配置 ID 未被更新的问题 ([#8396](https://github.com/nocobase/nocobase/pull/8396)) by @mytharcher

  - 为节点执行记录的 Snowflake ID 加入实例 ID 配置，以避免集群下 ID 冲突问题 ([#8382](https://github.com/nocobase/nocobase/pull/8382)) by @mytharcher

- **[区块：模板（已废弃）]** 修复无法进入继承模板(v1)的编辑页面的问题。 ([#8376](https://github.com/nocobase/nocobase/pull/8376)) by @gchust

- **[数据源：REST API]** 为请求上下文增加容错，避免方法不存在时的报错 by @mytharcher

- **[多空间]**
  - 关联数据添加时关联空间 by @jiannx

  - 空间选择器颜色跟着主题 by @jiannx

- **[模板打印]**
  - 修复配置模板弹窗被遮挡的问题 by @zhangzhonghe

  - 支持空间字段 by @jiannx

  - 2.0版本里显示空间字段 by @jiannx

- **[文件存储：S3 (Pro)]** 修复文件重命名模式不起作用的问题 by @mytharcher

- **[工作流：审批]**
  - 修复错误的参数导致的加载数据错误问题 by @mytharcher

  - 修复由于缺失 `ValueBlock.Result` 组件注入导致的值区块内容不展示的问题 by @mytharcher

- **[邮件管理]**
  - 修复会话链 by @jiannx

  - add filters to the management by @jiannx

