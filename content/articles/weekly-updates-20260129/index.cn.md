汇总一周产品更新日志，最新发布可以[前往我们的博客查看](https://www.nocobase.com/cn/blog/timeline)。

**NocoBase 目前更新包括的版本更新包括三个分支：`main` ，`next`和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

`main` ：截止目前最稳定的版本，推荐安装此版本。

`next`：包含即将发布的新功能，经过初步测试的版本，可能存在部分已知或未知问题。主要面向测试用户，用于收集反馈和进一步优化功能。适合愿意提前体验新功能并提供反馈的测试用户。

`develop`：开发中的版本，包含最新的功能代码，可能尚未完成或存在较多不稳定因素，主要用于内部开发和快速迭代。适合对产品功能前沿发展感兴趣的技术用户，但可能存在较多问题或不完整功能，不建议在生产环境中使用。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.40](https://www.nocobase.com/cn/blog/v1.9.40)

*发布时间：2026-01-25*

### 🚀 优化

- **[Office 文件预览]** 支持更多文件类型在微软在线预览工具中预览 ([#8500](https://github.com/nocobase/nocobase/pull/8500)) by @mytharcher

### 🐛 修复

- **[client]**

  - 修复 nanoid 字段在表单提交后不重新生成数据的问题 ([#8491](https://github.com/nocobase/nocobase/pull/8491)) by @katherinehhh
  - 修复级联组件必填校验重复提示的问题 ([#8476](https://github.com/nocobase/nocobase/pull/8476)) by @katherinehhh
- **[database]**

  - 修复数据表重载后使用 `empty` 操作符筛选报错的问题 ([#8496](https://github.com/nocobase/nocobase/pull/8496)) by @2013xile
  - 修复嵌套关联的深度更新问题 ([#8492](https://github.com/nocobase/nocobase/pull/8492)) by @chenos
- **[文件管理器]** 修复上传文件时请求中的文件名被重复解码产生的乱码问题 ([#8481](https://github.com/nocobase/nocobase/pull/8481)) by @mytharcher
- **[数据源：主数据库]** 修复在多对多关系表格区块中删除数据时，未遵循关系字段 `onDelete: 'restrict'` 约束的问题 ([#8493](https://github.com/nocobase/nocobase/pull/8493)) by @2013xile
- **[区块：iframe]** 修复 Iframe 添加聚合变量报错的问题 ([#8482](https://github.com/nocobase/nocobase/pull/8482)) by @zhangzhonghe
- **[工作流：Webhook 触发器]** 修复未配置请求体解析时触发器数据中该数据缺失的问题 by @mytharcher
- **[模板打印]** 复了联合角色时打印按钮权限逻辑错误 by @jiannx
- **[工作流：审批]**

  - 修复并发提交导致流程被重复恢复执行的问题 by @mytharcher
  - 修复分支模式的审批未能正确退回至指定节点的问题 by @mytharcher
- **[迁移管理]** 修复迁移异常后打印异常对象所包含 SQL 过大容易卡死进程的问题 by @cgyrock

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.0.0-beta.17](https://www.nocobase.com/cn/blog/v2.0.0-beta.17)

*发布时间：2026-01-29*

### 🐛 修复

- **[client]** 修复筛选相关的已知问题 ([#8514](https://github.com/nocobase/nocobase/pull/8514)) by @zhangzhonghe
- **[AI 员工]** 修复构建后系统无法启动问题 ([#8523](https://github.com/nocobase/nocobase/pull/8523)) by @cgyrock
- **[AI: 知识库]** 修复构建后系统无法启动问题 by @cgyrock

### [v2.0.0-beta.16](https://www.nocobase.com/cn/blog/v2.0.0-beta.16)

*发布时间：2026-01-27*

### 🎉 新特性

- **[client]** 新增子表格（弹窗编辑）字段组件 ([#8280](https://github.com/nocobase/nocobase/pull/8280)) by @katherinehhh
- **[工作流]** 为移动节点增加 API ([#8507](https://github.com/nocobase/nocobase/pull/8507)) by @mytharcher

### 🚀 优化

- **[client]**

  - 修复单元格更新导致表格整体重渲染 ([#8349](https://github.com/nocobase/nocobase/pull/8349)) by @katherinehhh
  - 改进对多子表单默认包含一个对象，无需点击 Add New，未填写时不创建记录 ([#8458](https://github.com/nocobase/nocobase/pull/8458)) by @katherinehhh
- **[文件管理器]** 为文件管理器增加可扩展的预览组件 ([#8501](https://github.com/nocobase/nocobase/pull/8501)) by @mytharcher
- **[工作流]** 修改工作流子页面的路由路径，将工作流页面都统一在 `/admin/settings/workflow` 路径之下 ([#8519](https://github.com/nocobase/nocobase/pull/8519)) by @mytharcher

### 🐛 修复

- **[client]**

  - 修复筛选区块日期带时间时时间格式重复的问题 ([#8506](https://github.com/nocobase/nocobase/pull/8506)) by @zhangzhonghe
  - 修复多层级对多字段子表单字段联动规则无法使用表单变量赋值的问题。 ([#8518](https://github.com/nocobase/nocobase/pull/8518)) by @gchust
  - 修复多级弹窗及跨区块数据变更后不刷新问题。 ([#8471](https://github.com/nocobase/nocobase/pull/8471)) by @gchust
  - 修复编辑表单中配置阅读态子详情数据不能正常显示问题 ([#8469](https://github.com/nocobase/nocobase/pull/8469)) by @katherinehhh
  - 修复targetKey 可选字段的处理逻辑 ([#8333](https://github.com/nocobase/nocobase/pull/8333)) by @katherinehhh
  - 修复编辑态子表格中关系字段 Select 的 filter 参数错误问题 ([#8335](https://github.com/nocobase/nocobase/pull/8335)) by @katherinehhh
- **[flow-engine]** 修复外部数据源 filterTargetKey 为单元素数组时 FilterByTK 处理错误 ([#8522](https://github.com/nocobase/nocobase/pull/8522)) by @katherinehhh
- **[AI 员工]** 修复 AI 建模与数据源管理模块中可选字段配置不一致的问题 ([#8488](https://github.com/nocobase/nocobase/pull/8488)) by @cgyrock
- **[邮件管理]** 选中文本时正文不折叠。修复附件下载失败 by @jiannx

### [v2.0.0-beta.15](https://www.nocobase.com/cn/blog/v2.0.0-beta.15)

*发布时间：2026-01-25*

### 🚀 优化

- **[Office 文件预览]** 支持更多文件类型在微软在线预览工具中预览 ([#8500](https://github.com/nocobase/nocobase/pull/8500)) by @mytharcher

### 🐛 修复

- **[database]** 修复数据表重载后使用 `empty` 操作符筛选报错的问题 ([#8496](https://github.com/nocobase/nocobase/pull/8496)) by @2013xile
- **[模板打印]** 复了联合角色时打印按钮权限逻辑错误 by @jiannx
- **[工作流：审批]** 修复 1.x 审批记录弹窗报错的问题 by @mytharcher
- **[迁移管理]** 修复迁移异常后打印异常对象所包含sql过大容易卡死进程的问题 by @cgyrock

### [v2.0.0-beta.14](https://www.nocobase.com/cn/blog/v2.0.0-beta.14)

*发布时间：2026-01-23*

### 🎉 新特性

- **[AI 员工]** AI 对话支持复制粘贴文件 ([#8487](https://github.com/nocobase/nocobase/pull/8487)) by @heziqiang

### 🚀 优化

- **[client]**

  - 改进对多子表单默认包含一个对象，无需点击 Add New，未填写时不创建记录 ([#8473](https://github.com/nocobase/nocobase/pull/8473)) by @katherinehhh
  - 改进子表格中附件字段的上传与编辑按钮，引导用户点击上传 ([#8474](https://github.com/nocobase/nocobase/pull/8474)) by @katherinehhh
- **[flow-engine]** 优化 runjs 的 ctx.libs, 使其支持按需加载，并新增 lodash, math, formula 预定义库。 ([#8468](https://github.com/nocobase/nocobase/pull/8468)) by @gchust
- **[错误处理器]** 避免 SQL 引用错误直接暴露 ([#8464](https://github.com/nocobase/nocobase/pull/8464)) by @2013xile
- **[工作流：审批]** 增加对 API 的访问控制，以避免通过 API 越权操作数据 by @mytharcher

### 🐛 修复

- **[client]**

  - 修复富文本编辑器的弹出层被遮挡的问题 ([#8443](https://github.com/nocobase/nocobase/pull/8443)) by @zhangzhonghe
  - 修复筛选区块日期带时间时时间格式重复的问题 ([#8484](https://github.com/nocobase/nocobase/pull/8484)) by @zhangzhonghe
  - 修复 nanoid 字段在表单提交后不重新生成数据的问题 ([#8491](https://github.com/nocobase/nocobase/pull/8491)) by @katherinehhh
  - 修复级联组件必填校验重复提示的问题 ([#8476](https://github.com/nocobase/nocobase/pull/8476)) by @katherinehhh
  - filter列表去重 ([#8431](https://github.com/nocobase/nocobase/pull/8431)) by @jiannx
  - 修复在 Chrome 144 版本中不显示配置菜单的问题 ([#8470](https://github.com/nocobase/nocobase/pull/8470)) by @zhangzhonghe
- **[database]**

  - 修复嵌套关联的深度更新问题 ([#8492](https://github.com/nocobase/nocobase/pull/8492)) by @chenos
- **[server]** 修复通用依赖中 `mathjs` 包的版本 ([#8475](https://github.com/nocobase/nocobase/pull/8475)) by @mytharcher
- **[flow-engine]** 修复内嵌弹窗页面连续打开联动规则配置和事件流配置后关闭弹窗报错的问题。 ([#8368](https://github.com/nocobase/nocobase/pull/8368)) by @gchust
- **[数据源：主数据库]** 修复在多对多关系表格区块中删除数据时，未遵循关系字段 `onDelete: 'restrict'` 约束的问题 ([#8493](https://github.com/nocobase/nocobase/pull/8493)) by @2013xile
- **[异步任务管理器]** 修复异步导入触发的工作流事件延迟执行的问题 ([#8478](https://github.com/nocobase/nocobase/pull/8478)) by @mytharcher
- **[区块：iframe]** 修复 Iframe 添加聚合变量报错的问题 ([#8482](https://github.com/nocobase/nocobase/pull/8482)) by @zhangzhonghe
- **[UI 模板]** 修复引用模板区块无法通过事件流设置数据范围的问题。 ([#8472](https://github.com/nocobase/nocobase/pull/8472)) by @gchust
- **[文件管理器]** 修复上传文件时请求中的文件名被重复解码产生的乱码问题 ([#8481](https://github.com/nocobase/nocobase/pull/8481)) by @mytharcher
- **[操作：导入记录 Pro]** 修复异步导入触发的工作流事件延迟执行的问题 by @mytharcher
- **[工作流：Webhook 触发器]** 修复未配置请求体解析时触发器数据中该数据缺失的问题 by @mytharcher
- **[模板打印]** 模板打印的配置模板弹窗移除底部按钮 by @katherinehhh
- **[工作流：审批]**

  - 修复分支模式的审批未能正确退回至指定节点的问题 by @mytharcher
  - 修复并发提交导致流程被重复恢复执行的问题 by @mytharcher
  - 修复审批任务卡片字段不显示的问题 by @zhangzhonghe

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.68](https://www.nocobase.com/cn/blog/v2.0.0-alpha.68)

*发布时间：2026-01-27*

### 🎉 新特性

- **[工作流]** 为移动节点增加 API ([#8507](https://github.com/nocobase/nocobase/pull/8507)) by @mytharcher

### [v2.0.0-alpha.67](https://www.nocobase.com/cn/blog/v2.0.0-alpha.67)

*发布时间：2026-01-26*

### 🎉 新特性

- **[server]** 重构应用监管器以适配不同场景下的多应用管理需求 ([#8043](https://github.com/nocobase/nocobase/pull/8043)) by @2013xile
- **[client]** 新增子表格（弹窗编辑）字段组件 ([#8280](https://github.com/nocobase/nocobase/pull/8280)) by @katherinehhh
- **[AI 员工]** AI 对话支持复制粘贴文件 ([#8487](https://github.com/nocobase/nocobase/pull/8487)) by @heziqiang

### 🚀 优化

- **[client]**

  - 改进子表格中附件字段的上传与编辑按钮，引导用户点击上传 ([#8474](https://github.com/nocobase/nocobase/pull/8474)) by @katherinehhh
  - 改进对多子表单默认包含一个对象，无需点击 Add New，未填写时不创建记录 ([#8473](https://github.com/nocobase/nocobase/pull/8473)) by @katherinehhh
  - 改进对多子表单默认包含一个对象，无需点击 Add New，未填写时不创建记录 ([#8458](https://github.com/nocobase/nocobase/pull/8458)) by @katherinehhh
- **[flow-engine]** 优化 runjs 的 ctx.libs, 使其支持按需加载，并新增 lodash, math, formula 预定义库。 ([#8468](https://github.com/nocobase/nocobase/pull/8468)) by @gchust
- **[server]** 支持配置跨域 Origin 白名单 ([#8454](https://github.com/nocobase/nocobase/pull/8454)) by @2013xile
- **[文件管理器]** 为文件管理器增加可扩展的预览组件 ([#8501](https://github.com/nocobase/nocobase/pull/8501)) by @mytharcher
- **[Office 文件预览]** 支持更多文件类型在微软在线预览工具中预览 ([#8500](https://github.com/nocobase/nocobase/pull/8500)) by @mytharcher
- **[错误处理器]** 避免 SQL 引用错误直接暴露 ([#8464](https://github.com/nocobase/nocobase/pull/8464)) by @2013xile
- **[操作：导出记录]** 改进导出按钮数据范围：优先按选中记录，其次按前端筛选范围 ([#8442](https://github.com/nocobase/nocobase/pull/8442)) by @katherinehhh
- **[操作：导出记录 Pro]** 改进导出按钮数据范围：优先按选中记录，其次按前端筛选范围 by @katherinehhh
- **[工作流：审批]** 增加对 API 的访问控制，以避免通过 API 越权操作数据 by @mytharcher

### 🐛 修复

- **[client]**

  - 修复筛选区块日期带时间时时间格式重复的问题 ([#8506](https://github.com/nocobase/nocobase/pull/8506)) by @zhangzhonghe
  - 修复筛选区块日期带时间时时间格式重复的问题 ([#8484](https://github.com/nocobase/nocobase/pull/8484)) by @zhangzhonghe
  - 修复 nanoid 字段在表单提交后不重新生成数据的问题 ([#8491](https://github.com/nocobase/nocobase/pull/8491)) by @katherinehhh
  - 修复富文本编辑器的弹出层被遮挡的问题 ([#8443](https://github.com/nocobase/nocobase/pull/8443)) by @zhangzhonghe
  - filter列表去重 ([#8431](https://github.com/nocobase/nocobase/pull/8431)) by @jiannx
  - 修复级联组件必填校验重复提示的问题 ([#8476](https://github.com/nocobase/nocobase/pull/8476)) by @katherinehhh
  - 修复在 Chrome 144 版本中不显示配置菜单的问题 ([#8470](https://github.com/nocobase/nocobase/pull/8470)) by @zhangzhonghe
  - 修复编辑表单中配置阅读态子详情数据不能正常显示问题 ([#8469](https://github.com/nocobase/nocobase/pull/8469)) by @katherinehhh
  - 修复自定义变量弹窗被遮挡的问题 ([#8463](https://github.com/nocobase/nocobase/pull/8463)) by @zhangzhonghe
  - 修复数据表字段分组排序设置不生效问题 ([#8453](https://github.com/nocobase/nocobase/pull/8453)) by @katherinehhh
  - 修复表格“列设置”按钮无效的问题 ([#8441](https://github.com/nocobase/nocobase/pull/8441)) by @zhangzhonghe
  - 修复关系文件快速编辑，选择文件的弹窗层级错误，无法保存弹窗配置的问题。 ([#8446](https://github.com/nocobase/nocobase/pull/8446)) by @gchust
  - 修复数据表图形界面编辑数据表报错问题 ([#8451](https://github.com/nocobase/nocobase/pull/8451)) by @katherinehhh
- **[database]**

  - 修复数据表重载后使用 `empty` 操作符筛选报错的问题 ([#8496](https://github.com/nocobase/nocobase/pull/8496)) by @2013xile
  - 修复嵌套关联的深度更新问题 ([#8492](https://github.com/nocobase/nocobase/pull/8492)) by @chenos
- **[server]** 修复通用依赖中 `mathjs` 包的版本 ([#8475](https://github.com/nocobase/nocobase/pull/8475)) by @mytharcher
- **[flow-engine]**

  - 修复内嵌弹窗页面连续打开联动规则配置和事件流配置后关闭弹窗报错的问题。 ([#8368](https://github.com/nocobase/nocobase/pull/8368)) by @gchust
  - 修复能够重复点击配置菜单打开多个配置弹窗的问题。 ([#8448](https://github.com/nocobase/nocobase/pull/8448)) by @gchust
  - 修复 runjs 相关代码在运行前变量就被解析的问题。 ([#8445](https://github.com/nocobase/nocobase/pull/8445)) by @gchust
  - 修复数据选择器快速新增弹窗中无法选择弹窗变量的问题。 ([#8450](https://github.com/nocobase/nocobase/pull/8450)) by @gchust
- **[AI 员工]** 修复 AI 建模与数据源管理模块中可选字段配置不一致的问题 ([#8488](https://github.com/nocobase/nocobase/pull/8488)) by @cgyrock
- **[数据源：主数据库]** 修复在多对多关系表格区块中删除数据时，未遵循关系字段 `onDelete: 'restrict'` 约束的问题 ([#8493](https://github.com/nocobase/nocobase/pull/8493)) by @2013xile
- **[区块：iframe]** 修复 Iframe 添加聚合变量报错的问题 ([#8482](https://github.com/nocobase/nocobase/pull/8482)) by @zhangzhonghe
- **[异步任务管理器]** 修复异步导入触发的工作流事件延迟执行的问题 ([#8478](https://github.com/nocobase/nocobase/pull/8478)) by @mytharcher
- **[文件管理器]** 修复上传文件时请求中的文件名被重复解码产生的乱码问题 ([#8481](https://github.com/nocobase/nocobase/pull/8481)) by @mytharcher
- **[UI 模板]** 修复引用模板区块无法通过事件流设置数据范围的问题。 ([#8472](https://github.com/nocobase/nocobase/pull/8472)) by @gchust
- **[移动端（已废弃）]** 弃用移动端插件（2.0 后将使用 ui-layout 插件代替） ([#8456](https://github.com/nocobase/nocobase/pull/8456)) by @chenos
- **[操作：导入记录 Pro]** 修复异步导入触发的工作流事件延迟执行的问题 by @mytharcher
- **[工作流：Webhook 触发器]** 修复未配置请求体解析时触发器数据中该数据缺失的问题 by @mytharcher
- **[模板打印]**

  - 复了联合角色时打印按钮权限逻辑错误 by @jiannx
  - 模板打印的配置模板弹窗移除底部按钮 by @katherinehhh
- **[工作流：审批]**

  - 修复审批任务卡片字段不显示的问题 by @zhangzhonghe
  - 修复分支模式的审批未能正确退回至指定节点的问题 by @mytharcher
  - 修复并发提交导致流程被重复恢复执行的问题 by @mytharcher
  - 修复 1.x 审批记录弹窗报错的问题 by @mytharcher
- **[邮件管理]**

  - 修复邮箱配置弹窗被遮挡的问题 by @zhangzhonghe
  - 修复多个用户间相同邮箱邮件问题，性能优化 by @jiannx
- **[迁移管理]** 修复迁移异常后打印异常对象所包含 SQL 过大容易卡死进程的问题 by @cgyrock
