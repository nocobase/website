汇总一周产品更新日志，最新发布可以[前往我们的博客查看](https://www.nocobase.com/cn/blog/timeline)。

**NocoBase 目前更新包括的版本更新包括三个分支：`main` ，`next`和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

`main` ：截止目前最稳定的版本，推荐安装此版本。

`next`：包含即将发布的新功能，经过初步测试的版本，可能存在部分已知或未知问题。主要面向测试用户，用于收集反馈和进一步优化功能。适合愿意提前体验新功能并提供反馈的测试用户。

`develop`：开发中的版本，包含最新的功能代码，可能尚未完成或存在较多不稳定因素，主要用于内部开发和快速迭代。适合对产品功能前沿发展感兴趣的技术用户，但可能存在较多问题或不完整功能，不建议在生产环境中使用。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.46](https://www.nocobase.com/cn/blog/v1.9.46)

*发布时间：2026-02-11*

### 🐛 修复

- **[client]** 修复编辑表单关系字段从可编辑切换到只读模式时字段组件可选项未实时刷新的问题 ([#8611](https://github.com/nocobase/nocobase/pull/8611)) by @katherinehhh
- **[数据可视化：ECharts]** 修复 ECharts 拼写错误 by @heziqiang
- **[工作流：审批]**

  - 修复“我的申请”详情弹窗中字段值丢失的问题 by @mytharcher
  - 修复保存前模式下手动执行报错的问题 by @mytharcher

### [v1.9.45](https://www.nocobase.com/cn/blog/v1.9.45)

*发布时间：2026-02-09*

### 🐛 修复

- **[字段组件：掩码]** 修复掩码字段配置弹窗里面无法正确加载全部用户角色的问题。 by @gchust
- **[工作流：审批]** 修复加载详情数据时使用了错误的 id 参数 by @mytharcher

### [v1.9.44](https://www.nocobase.com/cn/blog/v1.9.44)

*发布时间：2026-02-08*

### 🎉 新特性

- **[工作流：审批]** 为审批相关 API 增加权限控制 by @mytharcher

### [v1.9.43](https://www.nocobase.com/cn/blog/v1.9.43)

*发布时间：2026-02-06*

### 🎉 新特性

- **[认证：钉钉]** 支持通过 `unionId` 绑定用户 by @2013xile

### 🚀 优化

- **[数据表字段：Markdown(Vditor)]** 新增默认编辑模式配置项，支持在组件设置中选择初始编辑状态 ([#8408](https://github.com/nocobase/nocobase/pull/8408)) by @Cyx649312038

### 🐛 修复

- **[操作：导入记录]** 修复导入操作的安全隐患 ([#8544](https://github.com/nocobase/nocobase/pull/8544)) by @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.0.0-beta.23](https://www.nocobase.com/cn/blog/v2.0.0-beta.23)

*发布时间：2026-02-12*

### 🎉 新特性

- **[区块：网格卡片]** 区块支持高度设置 ([#8583](https://github.com/nocobase/nocobase/pull/8583)) by @katherinehhh
- **[操作：批量编辑]** 批量编辑 2.0 ([#8526](https://github.com/nocobase/nocobase/pull/8526)) by @jiannx

### 🚀 优化

- **[client]**

  - 表格 2.0 支持拖拽排序 ([#8540](https://github.com/nocobase/nocobase/pull/8540)) by @jiannx
  - 将字段赋值和默认值相关配置重构为表单级别配置。 ([#8596](https://github.com/nocobase/nocobase/pull/8596)) by @chenos
- **[本地化]** 自动创建 i18n 缺失的词条 ([#8588](https://github.com/nocobase/nocobase/pull/8588)) by @jiannx

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

### [v2.0.0-beta.22](https://www.nocobase.com/cn/blog/v2.0.0-beta.22)

*发布时间：2026-02-10*

### 🎉 新特性

- **[client]** 支持在页面、页面标签、弹窗、弹窗标签配置浏览器页签标题 ([#8590](https://github.com/nocobase/nocobase/pull/8590)) by @zhangzhonghe
- **[工作流：审批]** 为审批相关 API 增加权限控制 by @mytharcher

### 🚀 优化

- **[client]** 筛选表单关系字段使用独立的字段 model ([#8511](https://github.com/nocobase/nocobase/pull/8511)) by @zhangzhonghe
- **[工作流：抄送]** 重构工作流抄送插件以支持 FlowModel 架构，兼容 v1/v2 配置 ([#8405](https://github.com/nocobase/nocobase/pull/8405)) by @zhangzhonghe

### 🐛 修复

- **[flow-engine]**

  - 修复 JS block 区块中无法创建 Blob 对象的问题。 ([#8603](https://github.com/nocobase/nocobase/pull/8603)) by @gchust
  - 修复 JS Models 里面的 "ctx.sql" 执行时上下文不正确的问题。 ([#8602](https://github.com/nocobase/nocobase/pull/8602)) by @gchust
- **[字段组件：掩码]** 修复掩码字段配置弹窗里面无法正确加载全部用户角色的问题。 by @gchust
- **[工作流：审批]** 修复加载详情数据时使用了错误的 id 参数 by @mytharcher

### [v2.0.0-beta.21](https://www.nocobase.com/cn/blog/v2.0.0-beta.21)

*发布时间：2026-02-07*

### 🎉 新特性

- **[client]** 支持在表单中配置关系字段的字段 ([#8578](https://github.com/nocobase/nocobase/pull/8578)) by @katherinehhh
- **[操作：复制记录]** 新增 2.0 复制操作 ([#8580](https://github.com/nocobase/nocobase/pull/8580)) by @katherinehhh
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

### [v2.0.0-beta.20](https://www.nocobase.com/cn/blog/v2.0.0-beta.20)

*发布时间：2026-02-05*

### 🎉 新特性

- **[client]** 支持配置数据加载方式 ([#8551](https://github.com/nocobase/nocobase/pull/8551)) by @zhangzhonghe

### 🐛 修复

- **[flow-engine]** 修复子表格（弹窗编辑）中配置 createModelOptions 后列操作删除失效的问题 ([#8576](https://github.com/nocobase/nocobase/pull/8576)) by @katherinehhh
- **[邮件管理]**

  - 管理页面添加筛选 by @jiannx
  - 修复多个用户间相同邮箱邮件问题，性能优化 by @jiannx
  - 修复会话链 by @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.71](https://www.nocobase.com/cn/blog/v2.0.0-alpha.71)

*发布时间：2026-02-10*

### 🎉 新特性

- **[client]**

  - 支持在页面、页面标签、弹窗、弹窗标签配置浏览器页签标题 ([#8590](https://github.com/nocobase/nocobase/pull/8590)) by @zhangzhonghe
  - 支持在表单中配置关系字段的字段 ([#8578](https://github.com/nocobase/nocobase/pull/8578)) by @katherinehhh
- **[区块：网格卡片]** 区块支持高度设置 ([#8583](https://github.com/nocobase/nocobase/pull/8583)) by @katherinehhh
- **[操作：复制记录]** 新增 2.0 复制操作 ([#8580](https://github.com/nocobase/nocobase/pull/8580)) by @katherinehhh
- **[工作流：审批]** 为审批相关 API 增加权限控制 by @mytharcher

### 🚀 优化

- **[client]** 筛选表单关系字段使用独立的字段 model ([#8511](https://github.com/nocobase/nocobase/pull/8511)) by @zhangzhonghe
- **[工作流：抄送]** 重构工作流抄送插件以支持 FlowModel 架构，兼容 v1/v2 配置 ([#8405](https://github.com/nocobase/nocobase/pull/8405)) by @zhangzhonghe

### 🐛 修复

- **[flow-engine]**

  - 修复 JS Models 里面的 "ctx.sql" 执行时上下文不正确的问题。 ([#8602](https://github.com/nocobase/nocobase/pull/8602)) by @gchust
  - 修复 JS block 区块中无法创建 Blob 对象的问题。 ([#8603](https://github.com/nocobase/nocobase/pull/8603)) by @gchust
- **[client]**

  - 修复 JS column 代码编辑器里点击 run 按钮后表格列不重新的问题。 ([#8608](https://github.com/nocobase/nocobase/pull/8608)) by @gchust
  - 修复非配置模式时可能出现 "read hidden" 渲染报错。 ([#8591](https://github.com/nocobase/nocobase/pull/8591)) by @gchust
  - 修复编辑表单中子表格(行内编辑)设为只读后切换阅读态子表格时仍保留编辑态列字段的问题 ([#8589](https://github.com/nocobase/nocobase/pull/8589)) by @katherinehhh
- **[前端流引擎]** 修复使用区块模板时如果使用复制模式会导致弹窗打开后为空的问题。 ([#8581](https://github.com/nocobase/nocobase/pull/8581)) by @gchust
- **[字段组件：掩码]** 修复掩码字段配置弹窗里面无法正确加载全部用户角色的问题。 by @gchust
- **[工作流：审批]** 修复加载详情数据时使用了错误的 id 参数 by @mytharcher

### [v2.0.0-alpha.70](https://www.nocobase.com/cn/blog/v2.0.0-alpha.70)

*发布时间：2026-02-06*

### 🎉 新特性

- **[工作流]** 在工作流画布上支持复制粘贴节点和拖拽移动节点的位置 ([#8559](https://github.com/nocobase/nocobase/pull/8559)) by @mytharcher

### 🚀 优化

- **[工作流：审批]** 移除对 JS Field 的支持 by @zhangzhonghe

### 🐛 修复

- **[区块：地图]** 修复地图区块出现两个「保存为模版」配置项问题 ([#8584](https://github.com/nocobase/nocobase/pull/8584)) by @katherinehhh

### [v2.0.0-alpha.69](https://www.nocobase.com/cn/blog/v2.0.0-alpha.69)

*发布时间：2026-02-05*

### 🎉 新特性

- **[client]** 支持配置数据加载方式 ([#8551](https://github.com/nocobase/nocobase/pull/8551)) by @zhangzhonghe
- **[flow-engine]** 支持配置 ESM_CDN_BASE_URL 环境变量 ([#8529](https://github.com/nocobase/nocobase/pull/8529)) by @chenos
- **[认证：钉钉]** 支持通过 `unionId` 绑定用户 by @2013xile

### 🚀 优化

- **[flow-engine]** 优化 JS model 代码编辑器相关的自动补全和提示。 ([#8575](https://github.com/nocobase/nocobase/pull/8575)) by @gchust
- **[client]**

  - 行内编辑子表格列宽配置方式调整为下拉选择 ([#8561](https://github.com/nocobase/nocobase/pull/8561)) by @katherinehhh
  - `ResourceActionProvider` 支持禁用多余的默认 `appends` 参数 ([#8527](https://github.com/nocobase/nocobase/pull/8527)) by @2013xile
- **[acl]** acl 添加 generalFixedParams 方法 ([#8363](https://github.com/nocobase/nocobase/pull/8363)) by @jiannx
- **[数据表字段：Markdown(Vditor)]** 新增默认编辑模式配置项，支持在组件设置中选择初始编辑状态 ([#8408](https://github.com/nocobase/nocobase/pull/8408)) by @Cyx649312038
- **[工作流]** 修改工作流子页面的路由路径，将工作流页面都统一在 `/admin/settings/workflow` 路径之下 ([#8519](https://github.com/nocobase/nocobase/pull/8519)) by @mytharcher
- **[AI: 知识库]** 优化构建产物，缩小 AI 知识库插件的包体积 by @cgyrock
- **[多空间]** 多空间权限控制接入 acl by @jiannx
- **[认证：钉钉]** 默认使用 `userid` 关联用户，并保持已有认证器使用手机号的兼容性 by @2013xile

### 🐛 修复

- **[client]**

  - 修复开启树表格后需刷新页面才能添加「添加子记录」操作的问题 ([#8574](https://github.com/nocobase/nocobase/pull/8574)) by @katherinehhh
  - 修复 Grid 布局中存在占位的问题 ([#8535](https://github.com/nocobase/nocobase/pull/8535)) by @zhangzhonghe
  - 修复子表格行内编辑时列宽缩小时未实时更新，多行文本字段列宽变宽后输入框未随列宽自适应的问题 ([#8573](https://github.com/nocobase/nocobase/pull/8573)) by @katherinehhh
  - 修复编辑表单中通过关系字段选择器的快速新增按钮添加数据时会将表单中的数据覆盖的问题。 ([#8567](https://github.com/nocobase/nocobase/pull/8567)) by @gchust
  - 非树结构表隐藏表格区块 属性里的「启用树表格」和「默认展开所有行」 ([#8566](https://github.com/nocobase/nocobase/pull/8566)) by @katherinehhh
  - 修复添加操作弹窗不应该出现表格（添加）菜单的问题。 ([#8562](https://github.com/nocobase/nocobase/pull/8562)) by @gchust
  - 修复 nanoid 字段新增表单提交后未重新生成默认值的问题 ([#8538](https://github.com/nocobase/nocobase/pull/8538)) by @katherinehhh
  - 修复事件流刷新跨弹窗目标区块时不生效的问题。 ([#8541](https://github.com/nocobase/nocobase/pull/8541)) by @gchust
  - 修复筛选相关的已知问题 ([#8514](https://github.com/nocobase/nocobase/pull/8514)) by @zhangzhonghe
  - 修复表单提交后数据区块会重复刷新的问题。 ([#8531](https://github.com/nocobase/nocobase/pull/8531)) by @gchust
  - 修复首次打开弹窗后关闭弹窗导致页面数据错误刷新问题。 ([#8548](https://github.com/nocobase/nocobase/pull/8548)) by @gchust
  - 修复多层级对多字段子表单字段联动规则无法使用表单变量赋值的问题。 ([#8518](https://github.com/nocobase/nocobase/pull/8518)) by @gchust
  - 修复级联组件在设置默认值时数据显示异常的问题 ([#8537](https://github.com/nocobase/nocobase/pull/8537)) by @katherinehhh
  - 修复多级弹窗及跨区块数据变更后不刷新问题。 ([#8471](https://github.com/nocobase/nocobase/pull/8471)) by @gchust
- **[flow-engine]**

  - 修复子表格（弹窗编辑）中配置 createModelOptions 后列操作删除失效的问题 ([#8576](https://github.com/nocobase/nocobase/pull/8576)) by @katherinehhh
  - 修复切换页面后再次打开弹窗提交表单后不刷新的问题。 ([#8554](https://github.com/nocobase/nocobase/pull/8554)) by @gchust
  - 修复 JS block 中部分第三方库无法被正确引入的问题。 ([#8545](https://github.com/nocobase/nocobase/pull/8545)) by @gchust
  - 修复 runjs 在模块解析阶段对部分 ESM 库误判为 AMD 模块，导致加载逻辑错误的问题。 ([#8536](https://github.com/nocobase/nocobase/pull/8536)) by @gchust
  - 修复外部数据源 filterTargetKey 为单元素数组时 FilterByTK 处理错误 ([#8522](https://github.com/nocobase/nocobase/pull/8522)) by @katherinehhh
  - 修复子表格（弹窗编辑）中配置 createModelOptions 后列操作删除失效的问题 ([#8560](https://github.com/nocobase/nocobase/pull/8560)) by @katherinehhh
- **[数据表字段：附件（URL）]** 修复编辑表单中附件 URL 字段配置显示文件名不生效的问题 ([#8571](https://github.com/nocobase/nocobase/pull/8571)) by @katherinehhh
- **[AI 员工]**

  - 修复 LLM 节点发送消息失败的问题 ([#8569](https://github.com/nocobase/nocobase/pull/8569)) by @2013xile
  - 修复构建后系统无法启动问题 ([#8523](https://github.com/nocobase/nocobase/pull/8523)) by @cgyrock
  - 修复 AI 建模时自动调用工具时出现的异常 ([#8532](https://github.com/nocobase/nocobase/pull/8532)) by @cgyrock
- **[UI 模板]** 修复将关系字段新增记录表单弹窗保存为模板后再次打开并提交表单时报错的问题。 ([#8564](https://github.com/nocobase/nocobase/pull/8564)) by @gchust
- **[操作：导入记录]** 修复导入操作的安全隐患 ([#8544](https://github.com/nocobase/nocobase/pull/8544)) by @mytharcher
- **[文件管理器]** 加固本地存储引擎的文件路径处理，以避免访问到上传目录以外的位置 ([#8539](https://github.com/nocobase/nocobase/pull/8539)) by @mytharcher
- **[工作流]** 为选择表记录的组件增加容错，以避免表被删除后组件报错 ([#8528](https://github.com/nocobase/nocobase/pull/8528)) by @mytharcher
- **[工作流：自定义操作事件]** 修复触发自定义操作工作流时参数和载荷数据不正确的问题 by @mytharcher
- **[多空间]**

  - 空间字段删除 read-pretty 属性 by @jiannx
  - 添加迁移脚本移除空间字段中 x-ready-pretty by @jiannx
- **[AI: 知识库]** 修复构建后系统无法启动问题 by @cgyrock
- **[操作：导入记录 Pro]** 修复导入结果的统计数字和消息翻译 by @mytharcher
- **[工作流：子流程]** 修复工作流链接的路由路径 by @mytharcher
- **[模板打印]** 修复模板打印按钮模板配置页字段列表显示异常的问题 by @katherinehhh
- **[工作流：审批]**

  - 修复列表 API 加载时由于追加 JSON 字段导致的性能问题（MySQL） by @mytharcher
  - 为删除的工作流增加容错，避免待办列表加载报错 by @mytharcher
  - 修复已有人员范围的工作流禁用后，对用户增加角色时的报错问题 by @mytharcher
- **[邮件管理]** 选中文本时正文不折叠。修复附件下载失败 by @jiannx
- **[企业微信]** 修复用户缺少手机号时不能自动注册的问题 by @2013xile
