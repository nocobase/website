汇总一周产品更新日志，最新发布可以[前往我们的博客查看](https://www.nocobase.com/cn/blog/timeline)。

**NocoBase 目前更新包括的版本更新包括三个分支：`main` ，`next`和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

`main` ：截止目前最稳定的版本，推荐安装此版本。

`next`：包含即将发布的新功能，经过初步测试的版本，可能存在部分已知或未知问题。主要面向测试用户，用于收集反馈和进一步优化功能。适合愿意提前体验新功能并提供反馈的测试用户。

`develop`：开发中的版本，包含最新的功能代码，可能尚未完成或存在较多不稳定因素，主要用于内部开发和快速迭代。适合对产品功能前沿发展感兴趣的技术用户，但可能存在较多问题或不完整功能，不建议在生产环境中使用。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.39](https://www.nocobase.com/cn/blog/v1.9.39)

*发布时间：2026-01-21*

### 🐛 修复

- **[server]** 修复通用依赖中 `mathjs` 包的版本 ([#8475](https://github.com/nocobase/nocobase/pull/8475)) by @mytharcher
- **[client]** 修复在 Chrome 144 版本中不显示配置菜单的问题 ([#8470](https://github.com/nocobase/nocobase/pull/8470)) by @zhangzhonghe
- **[异步任务管理器]** 修复异步导入触发的工作流事件延迟执行的问题 ([#8478](https://github.com/nocobase/nocobase/pull/8478)) by @mytharcher
- **[操作：导入记录 Pro]** 修复异步导入触发的工作流事件延迟执行的问题 by @mytharcher

### [v1.9.38](https://www.nocobase.com/cn/blog/v1.9.38)

*发布时间：2026-01-20*

### 🚀 优化

- **[server]** 支持配置跨域 Origin 白名单 ([#8454](https://github.com/nocobase/nocobase/pull/8454)) by @2013xile
- **[错误处理器]** 避免 SQL 引用错误直接暴露 ([#8464](https://github.com/nocobase/nocobase/pull/8464)) by @2013xile

### 🐛 修复

- **[client]**

  - 修复数据表字段分组排序设置不生效问题 ([#8453](https://github.com/nocobase/nocobase/pull/8453)) by @katherinehhh
  - 修复数据表图形界面编辑数据表报错问题 ([#8451](https://github.com/nocobase/nocobase/pull/8451)) by @katherinehhh
  - 修复表格“列设置”按钮无效的问题 ([#8441](https://github.com/nocobase/nocobase/pull/8441)) by @zhangzhonghe
  - 修复表格行按钮的联动规则会影响弹窗表单按钮状态的问题 ([#8434](https://github.com/nocobase/nocobase/pull/8434)) by @zhangzhonghe
- **[移动端（已废弃）]** 弃用移动端插件（2.0 后将使用 ui-layout 插件代替） ([#8456](https://github.com/nocobase/nocobase/pull/8456)) by @chenos

### [v1.9.37](https://www.nocobase.com/cn/blog/v1.9.37)

*发布时间：2026-01-15*

### 🚀 优化

- **[evaluators]** 升级 math.js 包的版本以支持更多函数 ([#8411](https://github.com/nocobase/nocobase/pull/8411)) by @mytharcher
- **[通知：站内信]** 修复当发送站内信至大量用户时的性能问题 ([#8402](https://github.com/nocobase/nocobase/pull/8402)) by @mytharcher

### 🐛 修复

- **[client]**

  - 修复新建表单中级联组件成功提交数据后，级联组件数据未清空 ([#8403](https://github.com/nocobase/nocobase/pull/8403)) by @katherinehhh
  - 为操作按钮的 schema 增加容错，避免点击后页面崩溃 ([#8420](https://github.com/nocobase/nocobase/pull/8420)) by @mytharcher
  - 修复提交按钮同时设置二次确认和跳过必填校验时跳过必填校验不生效的问题 ([#8400](https://github.com/nocobase/nocobase/pull/8400)) by @katherinehhh
- **[数据表字段：多对多 (数组)]** 修复关联查询时 append 的二级关联表是多对多（数组）时报错的问题 ([#8406](https://github.com/nocobase/nocobase/pull/8406)) by @cgyrock
- **[工作流]** 修复复制工作流之后节点配置中的界面配置 ID 未被更新的问题 ([#8396](https://github.com/nocobase/nocobase/pull/8396)) by @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.0.0-beta.13](https://www.nocobase.com/cn/blog/v2.0.0-beta.13)

*发布时间：2026-01-19*

### 🚀 优化

- **[server]** 支持配置跨域 Origin 白名单 ([#8454](https://github.com/nocobase/nocobase/pull/8454)) by @2013xile
- **[操作：导出记录]** 改进导出按钮数据范围：优先按选中记录，其次按前端筛选范围 ([#8442](https://github.com/nocobase/nocobase/pull/8442)) by @katherinehhh
- **[操作：导出记录 Pro]** 改进导出按钮数据范围：优先按选中记录，其次按前端筛选范围 by @katherinehhh

### 🐛 修复

- **[client]**

  - 修复自定义变量弹窗被遮挡的问题 ([#8463](https://github.com/nocobase/nocobase/pull/8463)) by @zhangzhonghe
  - 修复数据表图形界面编辑数据表报错问题 ([#8451](https://github.com/nocobase/nocobase/pull/8451)) by @katherinehhh
  - 修复数据表字段分组排序设置不生效问题 ([#8453](https://github.com/nocobase/nocobase/pull/8453)) by @katherinehhh
  - 修复快捷便捷弹窗高度超出页面高度的问题 ([#8437](https://github.com/nocobase/nocobase/pull/8437)) by @zhangzhonghe
  - 修复表格行按钮的联动规则会影响弹窗表单按钮状态的问题 ([#8434](https://github.com/nocobase/nocobase/pull/8434)) by @zhangzhonghe
  - 修复切换分页时表格区块操作列状态污染的问题。 ([#8438](https://github.com/nocobase/nocobase/pull/8438)) by @gchust
  - 修复表格“列设置”按钮无效的问题 ([#8441](https://github.com/nocobase/nocobase/pull/8441)) by @zhangzhonghe
  - 修复关系文件快速编辑，选择文件的弹窗层级错误，无法保存弹窗配置的问题。 ([#8446](https://github.com/nocobase/nocobase/pull/8446)) by @gchust
- **[flow-engine]**

  - 修复 runjs 相关代码在运行前变量就被解析的问题。 ([#8445](https://github.com/nocobase/nocobase/pull/8445)) by @gchust
  - 修复数据选择器快速新增弹窗中无法选择弹窗变量的问题。 ([#8450](https://github.com/nocobase/nocobase/pull/8450)) by @gchust
  - 修复能够重复点击配置菜单打开多个配置弹窗的问题。 ([#8448](https://github.com/nocobase/nocobase/pull/8448)) by @gchust
- **[移动端（已废弃）]** 弃用移动端插件（2.0 后将使用 ui-layout 插件代替） ([#8456](https://github.com/nocobase/nocobase/pull/8456)) by @chenos
- **[前端流引擎]** 修复无法正确解析包含中划线字符的变量的问题。 ([#8432](https://github.com/nocobase/nocobase/pull/8432)) by @gchust
- **[邮件管理]** 修复邮箱配置弹窗被遮挡的问题 by @zhangzhonghe

### [v2.0.0-beta.12](https://www.nocobase.com/cn/blog/v2.0.0-beta.12)

*发布时间：2026-01-16*

### 🚀 优化

- **[前端流引擎]** 支持解析当前表单变量中未添加到编辑表单中的字段的值。 ([#8436](https://github.com/nocobase/nocobase/pull/8436)) by @gchust

### 🐛 修复

- **[flow-engine]** 修复点击按钮打开弹窗时动态事件流里的步骤会执行两次的问题。 ([#8435](https://github.com/nocobase/nocobase/pull/8435)) by @gchust
- **[模板打印]** 2.0版本里显示空间字段 by @jiannx

### [v2.0.0-beta.11](https://www.nocobase.com/cn/blog/v2.0.0-beta.11)

*发布时间：2026-01-15*

### 🚀 优化

- **[evaluators]** 升级 math.js 包的版本以支持更多函数 ([#8411](https://github.com/nocobase/nocobase/pull/8411)) by @mytharcher
- **[client]** 富文本编辑器支持字体大小调整，图片大小调整，软换行 ([#8401](https://github.com/nocobase/nocobase/pull/8401)) by @jiannx
- **[AI 员工]** 将工作流调用的结果改为从 `execution.output` 中获得，明确使用流程输出节点以获得稳定的结果 ([#8423](https://github.com/nocobase/nocobase/pull/8423)) by @mytharcher

### 🐛 修复

- **[client]**

  - 为操作按钮的 schema 增加容错，避免点击后页面崩溃 ([#8420](https://github.com/nocobase/nocobase/pull/8420)) by @mytharcher
  - 修复表单关系字段标题设置附件 URL 后，再设置为其他字段时，标题设置项消失问题 ([#8418](https://github.com/nocobase/nocobase/pull/8418)) by @katherinehhh
  - 修复新增表单中关系字段设置阅读模式，切换标题字段不生效问题 ([#8413](https://github.com/nocobase/nocobase/pull/8413)) by @katherinehhh
- **[前端流引擎]** 修复 filterByTk 为数组时变量解析不正确的问题。 ([#8412](https://github.com/nocobase/nocobase/pull/8412)) by @gchust
- **[模板打印]** 支持空间字段 by @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.66](https://www.nocobase.com/cn/blog/v2.0.0-alpha.66)

*发布时间：2026-01-16*

### 🐛 修复

- **[前端流引擎]** 修复无法正确解析包含中划线字符的变量的问题。 ([#8432](https://github.com/nocobase/nocobase/pull/8432)) by @gchust

### [v2.0.0-alpha.65](https://www.nocobase.com/cn/blog/v2.0.0-alpha.65)

*发布时间：2026-01-16*

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
  - 修复表单关系字段标题设置附件 URL 后，再设置为其他字段时，标题设置项消失问题 ([#8418](https://github.com/nocobase/nocobase/pull/8418)) by @katherinehhh
  - 修复提交按钮同时设置二次确认和跳过必填校验时跳过必填校验不生效的问题 ([#8400](https://github.com/nocobase/nocobase/pull/8400)) by @katherinehhh
  - 修复网格卡片区块设置 layout 无冒号不生效问题 ([#8399](https://github.com/nocobase/nocobase/pull/8399)) by @katherinehhh
  - 修复新建表单中级联组件成功提交数据后，级联组件数据未清空 ([#8403](https://github.com/nocobase/nocobase/pull/8403)) by @katherinehhh
  - 修复表单中数字输入汉字时没有阻止赋值问题 ([#8397](https://github.com/nocobase/nocobase/pull/8397)) by @katherinehhh
  - 修复关系关联文件表中对一关系字段选择文件弹窗右下角出现提交按钮问题 ([#8398](https://github.com/nocobase/nocobase/pull/8398)) by @katherinehhh
  - 修复 targetKey 可选字段的处理逻辑 ([#8333](https://github.com/nocobase/nocobase/pull/8333)) by @katherinehhh
- **[flow-engine]** 修复点击按钮打开弹窗时动态事件流里的步骤会执行两次的问题。 ([#8435](https://github.com/nocobase/nocobase/pull/8435)) by @gchust
- **[前端流引擎]** 修复 filterByTk 为数组时变量解析不正确的问题。 ([#8412](https://github.com/nocobase/nocobase/pull/8412)) by @gchust
- **[文件管理器]** 修复上传至 S3 存储引擎的文件 URL 生成错误的问题 ([#8392](https://github.com/nocobase/nocobase/pull/8392)) by @mytharcher
- **[数据表字段：多对多 (数组)]** 修复关联查询时 append 的二级关联表是多对多（数组）时报错的问题 ([#8406](https://github.com/nocobase/nocobase/pull/8406)) by @cgyrock
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
  - 2.0 版本里显示空间字段 by @jiannx
- **[文件存储：S3 (Pro)]** 修复文件重命名模式不起作用的问题 by @mytharcher
- **[工作流：审批]**

  - 修复错误的参数导致的加载数据错误问题 by @mytharcher
  - 修复由于缺失 `ValueBlock.Result` 组件注入导致的值区块内容不展示的问题 by @mytharcher
- **[邮件管理]**

  - 修复会话链 by @jiannx
  - add filters to the management by @jiannx
