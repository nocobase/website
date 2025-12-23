汇总一周产品更新日志，最新发布可以[前往我们的博客查看](https://www.nocobase.com/cn/blog/timeline)。

**NocoBase 目前更新包括的版本更新包括三个分支：`main` ，`next`和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

`main` ：截止目前最稳定的版本，推荐安装此版本。

`next`：包含即将发布的新功能，经过初步测试的版本，可能存在部分已知或未知问题。主要面向测试用户，用于收集反馈和进一步优化功能。适合愿意提前体验新功能并提供反馈的测试用户。

`develop`：开发中的版本，包含最新的功能代码，可能尚未完成或存在较多不稳定因素，主要用于内部开发和快速迭代。适合对产品功能前沿发展感兴趣的技术用户，但可能存在较多问题或不完整功能，不建议在生产环境中使用。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.24](https://www.nocobase.com/cn/blog/v1.9.24)

*发布时间：2025-12-09*

### 🐛 修复

- **[client]** 修复 `RemoteSelect` 组件当值为空时错误的加载选项记录的问题 ([#8137](https://github.com/nocobase/nocobase/pull/8137)) by @mytharcher
- **[数据表字段：自动编码]** 提升 sequence 字段插件处理 repair 命令时的健壮性 ([#8139](https://github.com/nocobase/nocobase/pull/8139)) by @cgyrock
- **[通知：电子邮件]** 修复邮件通知连接限制 ([#8119](https://github.com/nocobase/nocobase/pull/8119)) by @jiannx

### [v1.9.23](https://www.nocobase.com/cn/blog/v1.9.23)

*发布时间：2025-12-09*

### 🚀 优化

- **[auth]** 修复 [CVE-2025-13877](https://www.cve.org/CVERecord?id=CVE-2025-13877) ([#8128](https://github.com/nocobase/nocobase/pull/8128)) by @2013xile
- **[操作：导入记录]** 支持导入字段支持选择 ID ([#8132](https://github.com/nocobase/nocobase/pull/8132)) by @katherinehhh

### 🐛 修复

- **[server]** 修复了导入数据后已触发的工作流未添加到处理队列的问题，确保工作流在导入后能够正常运行 ([#8121](https://github.com/nocobase/nocobase/pull/8121)) by @mytharcher

### [v1.9.21](https://www.nocobase.com/cn/blog/v1.9.21)

*发布时间：2025-12-07*

### 🚀 优化

- **[审计日志]** 更新唯一标识字段为 `text` 类型，避免批量编辑时记录标识长度超出的问题 by @2013xile

### 🐛 修复

- **[工作流：审批]** 修复权限范围中包含变量时加载相关审批无数据的问题 by @mytharcher

### [v1.9.20](https://www.nocobase.com/cn/blog/v1.9.20)

*发布时间：2025-12-05*

### 🎉 新特性

- **[数据表字段：自动编码]** 数据迁移后自动更新'自动编码'字段 ([#8063](https://github.com/nocobase/nocobase/pull/8063)) by @cgyrock

### 🚀 优化

- **[迁移管理]** 数据迁移后自动更新'自动编码'字段 by @cgyrock

### 🐛 修复

- **[工作流]** 修复执行记录画布中节点被删除后导致的报错 ([#8090](https://github.com/nocobase/nocobase/pull/8090)) by @mytharcher
- **[工作流：审批]** 修复在仅角色并集模式下加载相关审批报错和无数据的问题 by @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.18](https://www.nocobase.com/cn/blog/v1.9.0-beta.18)

*发布时间：2025-12-09*

### 🎉 新特性

- **[数据表字段：自动编码]** 数据迁移后自动更新'自动编码'字段 ([#8063](https://github.com/nocobase/nocobase/pull/8063)) by @cgyrock
- **[数据源：REST API]** 在 restful api 数据源配置中新增`接口错误信息转换`配置项 by @cgyrock
- **[认证：OIDC]** 支持选项 当用户未登录时自动跳转到 SSO 登录页 by @heziqiang

### 🚀 优化

- **[auth]** 修复 [CVE-2025-13877](https://www.cve.org/CVERecord?id=CVE-2025-13877) ([#8128](https://github.com/nocobase/nocobase/pull/8128)) by @2013xile
- **[client]**

  - 优化 Select 组件，鼠标悬停时显示被折叠的已选中选项 ([#8029](https://github.com/nocobase/nocobase/pull/8029)) by @katherinehhh
  - 优化子表格字段的必填校验提示信息样式 ([#8001](https://github.com/nocobase/nocobase/pull/8001)) by @katherinehhh
  - 为更新记录和删除记录操作按钮添加加载状态，以避免重复请求 ([#7964](https://github.com/nocobase/nocobase/pull/7964)) by @mytharcher
  - 对消息内容的变量使用三重括号，以免变量被 Handlerbars 转义 ([#7972](https://github.com/nocobase/nocobase/pull/7972)) by @mytharcher
- **[操作：导入记录]** 支持导入字段支持选择 ID ([#8132](https://github.com/nocobase/nocobase/pull/8132)) by @katherinehhh
- **[工作流]** 为 UserSelect 组件增加主数据源上下文，以提供一个更通用的组件，可以在其他地方使用 ([#8010](https://github.com/nocobase/nocobase/pull/8010)) by @mytharcher
- **[数据表字段：Markdown(Vditor)]** 调整 Vditor 全屏时内容宽度 ([#7974](https://github.com/nocobase/nocobase/pull/7974)) by @katherinehhh
- **[异步任务管理器]** 优化异步任务的错误信息，任务失败时将明确提示具体的错误原因 ([#7796](https://github.com/nocobase/nocobase/pull/7796)) by @mytharcher
- **[操作：导入记录 Pro]** 优化异步任务的错误信息，任务失败时将明确提示具体的错误原因 by @mytharcher
- **[工作流：审批]**

  - 修复审批人选择组件，仅允许用户表的主外键可选 by @mytharcher
  - 使用通用组件以减少重复代码 by @mytharcher
  - 在手动执行（或子流程调用）时，同时支持传入整行数据或仅主键，避免触发器数据中的数据一致性问题 by @mytharcher
  - 减少打开审批弹窗时加载的关联数据，以提供更好的性能表现 by @mytharcher
- **[审计日志]** 更新唯一标识字段为 `text` 类型，避免批量编辑时记录标识长度超出的问题 by @2013xile
- **[迁移管理]** 数据迁移后自动更新'自动编码'字段 by @cgyrock

### 🐛 修复

- **[server]** 修复了导入数据后已触发的工作流未添加到处理队列的问题，确保工作流在导入后能够正常运行 ([#8121](https://github.com/nocobase/nocobase/pull/8121)) by @mytharcher
- **[acl]** 修复外部数据源的权限数据范围使用了当前用户相关变量时， ACL meta 信息获取不正确的问题 ([#8013](https://github.com/nocobase/nocobase/pull/8013)) by @2013xile
- **[client]**

  - 修复 Variable.Input 组件的懒加载问题，该问题会导致变量选项菜单不正常的重渲染 ([#8009](https://github.com/nocobase/nocobase/pull/8009)) by @mytharcher
  - 修复关系树表表格区块添加子记录时报错的问题 ([#7989](https://github.com/nocobase/nocobase/pull/7989)) by @katherinehhh
  - 修复联动规则下拉选择框闪烁的问题 ([#8018](https://github.com/nocobase/nocobase/pull/8018)) by @zhangzhonghe
  - 避免打开字段默认值配置时的报错 ([#7997](https://github.com/nocobase/nocobase/pull/7997)) by @mytharcher
  - 修复使用 Iframe 时，导致路由异常的问题 ([#7957](https://github.com/nocobase/nocobase/pull/7957)) by @zhangzhonghe
  - 修复 下拉列表组件在非对象值回显时没有正确显示label 问题 ([#7975](https://github.com/nocobase/nocobase/pull/7975)) by @katherinehhh
- **[database]** 修复：移除 time 字段转换中的 UTC 处理，避免因时区导致的纯时间值偏移 ([#7812](https://github.com/nocobase/nocobase/pull/7812)) by @ChimingLiu
- **[操作：导入记录]**

  - 导入的字段和导入权限设置的字段不匹配 ([#8075](https://github.com/nocobase/nocobase/pull/8075)) by @2013xile
  - 修复导入时如果字段包含 `null` 值报错的问题 ([#8037](https://github.com/nocobase/nocobase/pull/8037)) by @mytharcher
  - 修复树表导入数据报错问题 ([#7976](https://github.com/nocobase/nocobase/pull/7976)) by @cgyrock
- **[工作流]**

  - 修复执行历史页面中当节点上的执行记录不存在时的报错 ([#8066](https://github.com/nocobase/nocobase/pull/8066)) by @mytharcher
  - 修复执行记录画布中节点被删除后导致的报错 ([#8090](https://github.com/nocobase/nocobase/pull/8090)) by @mytharcher
  - 修复发送消息之前队列已关闭的问题 ([#8003](https://github.com/nocobase/nocobase/pull/8003)) by @mytharcher
  - 修复停止服务前，已创建的执行计划未发送到队列的问题 ([#7981](https://github.com/nocobase/nocobase/pull/7981)) by @mytharcher
  - 修复部分工作流待办菜单不显示的问题 ([#7980](https://github.com/nocobase/nocobase/pull/7980)) by @mytharcher
  - 修复点击默认进入的待办列表中的任务跳转到错误页面的问题 ([#7983](https://github.com/nocobase/nocobase/pull/7983)) by @mytharcher
  - 修复由于 provider 误用导致待办总数不展示的问题 ([#7968](https://github.com/nocobase/nocobase/pull/7968)) by @mytharcher
- **[多应用管理器]** 设置日志级别，子应用不生效 ([#8045](https://github.com/nocobase/nocobase/pull/8045)) by @2013xile
- **[权限控制]** 给外部数据源添加数据表关联操作的权限判断中间件 ([#8062](https://github.com/nocobase/nocobase/pull/8062)) by @2013xile
- **[数据表字段：多对多 (数组)]** 修复子表格中多对多数组关系字段数据无法更新问题 ([#7998](https://github.com/nocobase/nocobase/pull/7998)) by @cgyrock
- **[主题编辑器]** 移动端支持切换主题 ([#8046](https://github.com/nocobase/nocobase/pull/8046)) by @zhangzhonghe
- **[数据可视化]**

  - 外部数据源表的筛选字段的配置项不能显示特有属性 ([#7982](https://github.com/nocobase/nocobase/pull/7982)) by @2013xile
  - 解决图表数据查询不支持 ACL 数据范围的问题 ([#7915](https://github.com/nocobase/nocobase/pull/7915)) by @2013xile
- **[数据表：树]** 修复因树表父字段获取不正确导致路径表更新失败的问题 ([#8000](https://github.com/nocobase/nocobase/pull/8000)) by @2013xile
- **[工作流：人工处理节点]** 修复人工待办任务统计数字不对的问题 ([#7984](https://github.com/nocobase/nocobase/pull/7984)) by @mytharcher
- **[异步任务管理器]** 为 `asyncTasks` 数据表增加迁移规则，避免异步任务记录被迁移 ([#7950](https://github.com/nocobase/nocobase/pull/7950)) by @mytharcher
- **[数据源管理]** 修复外部数据源修改密码后系统内无法更新密码的问题 ([#7977](https://github.com/nocobase/nocobase/pull/7977)) by @cgyrock
- **[部门]** 修复部门插件中的部门用户关联字段无法编辑的问题 ([#7462](https://github.com/nocobase/nocobase/pull/7462)) by @heziqiang
- **[工作流：子流程]** 修复选择工作流组件在工作流列表超过 200 个之后展示不正常的问题 by @mytharcher
- **[工作流：审批]**

  - 修复语言文件 by @mytharcher
  - 修复退回分支中无法使用审批节点结果中的审批记录数据的问题 by @mytharcher
  - 修复权限范围中包含变量时加载相关审批无数据的问题 by @mytharcher
  - 修复由于 `RemoteSelect` 组件变更导致的加载 `approvalRecords.reassignee` 资源的权限问题 by @mytharcher
  - 修复审批详情弹窗在刷新页面后打印按钮无法工作的问题 by @mytharcher
  - 为避免添加索引时重复数据的错误，增加迁移脚本 by @mytharcher
  - 修复分支模式和顺序会签时流程处理错误的问题 by @mytharcher
  - 修复用户带评论提交审批后在节点结果中评论为空的问题 by @mytharcher
  - 修复用户在撤回重新提交后，工作流上下文中缺少申请人数据的问题 by @mytharcher
  - 修复在数据详情弹窗中加载相关审批时的权限报错 by @mytharcher
  - 修复审批人弹窗不显示标题的问题 by @zhangzhonghe
  - 修复在仅角色并集模式下加载相关审批报错和无数据的问题 by @mytharcher
  - 修复加载审批列表时内存溢出的问题 by @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.52](https://www.nocobase.com/cn/blog/v2.0.0-alpha.52)

*发布时间：2025-12-07*

### 🎉 新特性

- **[client]** 为对多子表单增加允许添加数据、选择已有数据及解除关联的设置项支持 ([#8099](https://github.com/nocobase/nocobase/pull/8099)) by @katherinehhh
- **[数据源：REST API]** 在 restful api 数据源配置中新增`接口错误信息转换`配置项 by @cgyrock

### 🚀 优化

- **[auth]** 修复 [CVE-2025-13877](https://www.cve.org/CVERecord?id=CVE-2025-13877) ([#8128](https://github.com/nocobase/nocobase/pull/8128)) by @2013xile
- **[操作：导入记录]**

  - 导入配置字段支持选择 ID ([#8133](https://github.com/nocobase/nocobase/pull/8133)) by @katherinehhh
  - 支持导入字段支持选择 ID ([#8132](https://github.com/nocobase/nocobase/pull/8132)) by @katherinehhh
- **[工作流：审批]** 调整获取单个审批单据的 API，并简化代码 by @mytharcher

### 🐛 修复

- **[client]**

  - 修复关系字段选择被子字段 disabled 字段限制的问题 ([#8131](https://github.com/nocobase/nocobase/pull/8131)) by @katherinehhh
  - 修复 `RemoteSelect` 组件当值为空时错误的加载选项记录的问题 ([#8137](https://github.com/nocobase/nocobase/pull/8137)) by @mytharcher
  - 修复日期筛选字段选“过去”或者“未来”选项时 UI 组件宽度不一致问题。 ([#8130](https://github.com/nocobase/nocobase/pull/8130)) by @gchust
  - 修复筛选表单字段默认标签无法正确多语言翻译的问题。 ([#8135](https://github.com/nocobase/nocobase/pull/8135)) by @gchust
  - 修复 JS block 区块标题描述样式与其它区块样式不一致的问题。 ([#8115](https://github.com/nocobase/nocobase/pull/8115)) by @gchust
  - 修复子表单中嵌套子表格无数据的问题 ([#8117](https://github.com/nocobase/nocobase/pull/8117)) by @katherinehhh
  - 修复多行文本不换行问题 ([#8122](https://github.com/nocobase/nocobase/pull/8122)) by @katherinehhh
  - 修复筛选表单中关系字段可选数据不正确的问题。 ([#8109](https://github.com/nocobase/nocobase/pull/8109)) by @gchust
  - 修复操作符为包含任何一个和不包含任何一个时可选项字段筛选没有列出所有可选项的问题。 ([#8118](https://github.com/nocobase/nocobase/pull/8118)) by @gchust
  - 修复筛选表单中自定义字段配置无法正确回填及部分配置不生效的问题。 ([#8106](https://github.com/nocobase/nocobase/pull/8106)) by @gchust
  - 修复筛选操作中介于时间筛选值清空后再次触发筛选会报错的问题。 ([#8110](https://github.com/nocobase/nocobase/pull/8110)) by @gchust
  - 修复筛选操作中的 number 字段值未被正确回填的问题。 ([#8104](https://github.com/nocobase/nocobase/pull/8104)) by @gchust
  - 修复筛选表单中部分字段操作符无法正确筛选数据的问题。 ([#8100](https://github.com/nocobase/nocobase/pull/8100)) by @gchust
  - 修复 Checkbox 字段筛选不起作用的问题。 ([#8103](https://github.com/nocobase/nocobase/pull/8103)) by @gchust
- **[flow-engine]**

  - 修复 integer 类型作为可选项时未正确转换的问题 ([#8138](https://github.com/nocobase/nocobase/pull/8138)) by @chenos
  - 修复 toggleable 子模型菜单未指定 useModel 时无法切换的问题，自动从 createModelOptions.use 推断 ([#8105](https://github.com/nocobase/nocobase/pull/8105)) by @zhangzhonghe
- **[server]** 修复了导入数据后已触发的工作流未添加到处理队列的问题，确保工作流在导入后能够正常运行 ([#8121](https://github.com/nocobase/nocobase/pull/8121)) by @mytharcher
- **[通知：电子邮件]** 修复邮件通知连接限制 ([#8119](https://github.com/nocobase/nocobase/pull/8119)) by @jiannx
- **[数据表字段：公式]** 修复筛选操作和筛选表单中公式字段无法输入值的问题。 ([#8102](https://github.com/nocobase/nocobase/pull/8102)) by @gchust
- **[多空间]** 修复在系统表中创建其他字段 by @jiannx

### [v2.0.0-alpha.51](https://www.nocobase.com/cn/blog/v2.0.0-alpha.51)

*发布时间：2025-12-07*

### 🎉 新特性

- **[client]**

  - 支持在主题编辑器中自定义全局样式 ([#7960](https://github.com/nocobase/nocobase/pull/7960)) by @ljmiaoo
  - 支持在详情区块中配置默认排序规则 ([#8070](https://github.com/nocobase/nocobase/pull/8070)) by @katherinehhh
  - 支持设置数字字段的数据类型，可选项包括 double、float 和 decimal ([#8058](https://github.com/nocobase/nocobase/pull/8058)) by @chenos
- **[数据表字段：自动编码]** 数据迁移后自动更新'自动编码'字段 ([#8063](https://github.com/nocobase/nocobase/pull/8063)) by @cgyrock

### 🚀 优化

- **[client]**

  - 修复子表格删除行后跳至最后分页的问题，并支持列级验证规则配置 ([#8094](https://github.com/nocobase/nocobase/pull/8094)) by @katherinehhh
  - 调整编辑态子表格中大字段的展示 ([#8078](https://github.com/nocobase/nocobase/pull/8078)) by @katherinehhh
  - JSON 字段内容超出时支持省略显示 ([#8067](https://github.com/nocobase/nocobase/pull/8067)) by @katherinehhh
- **[flow-engine]**

  - 为 FlowModelRenderer 添加 useCache 选项 ([#8072](https://github.com/nocobase/nocobase/pull/8072)) by @zhangzhonghe
  - 新增 `removeModelWithSubModels` 方法，用于递归移除模型及其子模型 ([#8064](https://github.com/nocobase/nocobase/pull/8064)) by @zhangzhonghe
- **[区块：网格卡片]** 网格卡片新增一页显示的行数配置，移除 pageSize 配置，改为自动计算 pageSize ([#8055](https://github.com/nocobase/nocobase/pull/8055)) by @katherinehhh
- **[审计日志]** 更新唯一标识字段为 `text` 类型，避免批量编辑时记录标识长度超出的问题 by @2013xile
- **[迁移管理]** 数据迁移后自动更新'自动编码'字段 by @cgyrock

### 🐛 修复

- **[client]**

  - 修复移除区块后筛选区块里已经配置的该区块的字段未删除的问题。 ([#8098](https://github.com/nocobase/nocobase/pull/8098)) by @gchust
  - 修复按钮隐藏后在非配置模式下出现多余间距的问题 ([#8092](https://github.com/nocobase/nocobase/pull/8092)) by @katherinehhh
  - 修复无法修改筛选表单中的重制按钮文字的问题。 ([#8089](https://github.com/nocobase/nocobase/pull/8089)) by @gchust
  - 修复字段筛选操作符为\$in / \$notIn时字段输入框不支持多个输入值的问题。 ([#8081](https://github.com/nocobase/nocobase/pull/8081)) by @gchust
  - 修复添加数据区块后不会自动出现在筛选表单的字段菜单中的问题。 ([#8085](https://github.com/nocobase/nocobase/pull/8085)) by @gchust
  - 筛选表单中的关系字段的配置菜单不应该显示快捷创建。 ([#8083](https://github.com/nocobase/nocobase/pull/8083)) by @gchust
  - 修复列表区块中关系子表格数据错误的问题 ([#8082](https://github.com/nocobase/nocobase/pull/8082)) by @katherinehhh
  - 修复数据表中设置的数值字段验证规则，在表单中未生效的问题 ([#8025](https://github.com/nocobase/nocobase/pull/8025)) by @katherinehhh
  - 修复筛选表单中的字段被字段后端验证规则限制的问题。 ([#8074](https://github.com/nocobase/nocobase/pull/8074)) by @gchust
  - 修复 json 字段快捷编辑报错 ([#8059](https://github.com/nocobase/nocobase/pull/8059)) by @katherinehhh
  - 修复子表格中大字段编辑回显异常问题 ([#8069](https://github.com/nocobase/nocobase/pull/8069)) by @katherinehhh
  - 修复对多关系下拉组件在关闭允许多选时快捷新增报错的问题 ([#8034](https://github.com/nocobase/nocobase/pull/8034)) by @katherinehhh
  - json 字段提交时应为对象 ([#8057](https://github.com/nocobase/nocobase/pull/8057)) by @katherinehhh
  - 修复无法使用回车按键触发筛选操作的问题。 ([#8056](https://github.com/nocobase/nocobase/pull/8056)) by @gchust
- **[flow-engine]**

  - 修复切换字段组件后旧组件的配置项还会显示在菜单里的问题。 ([#8095](https://github.com/nocobase/nocobase/pull/8095)) by @gchust
  - 将 useEffect 移至 FlowModelRenderer 中的条件返回之前 ([#8088](https://github.com/nocobase/nocobase/pull/8088)) by @zhangzhonghe
  - 修复筛选操作字段里出现不支持筛选的关系字段的问题。 ([#8086](https://github.com/nocobase/nocobase/pull/8086)) by @gchust
- **[acl]** 修复 acl.allow 被提前执行的问题 ([#8065](https://github.com/nocobase/nocobase/pull/8065)) by @chenos
- **[文件管理器]**

  - 修复List 区块、Grid card 区块中子详情数据展示错误问题 ([#8087](https://github.com/nocobase/nocobase/pull/8087)) by @katherinehhh
  - 修复阅读态子表格中 Attachment 字段数据未正常加载问题 ([#8073](https://github.com/nocobase/nocobase/pull/8073)) by @katherinehhh
- **[工作流]**

  - 修复执行记录画布中节点被删除后导致的报错 ([#8090](https://github.com/nocobase/nocobase/pull/8090)) by @mytharcher
  - 修复执行历史页面中当节点上的执行记录不存在时的报错 ([#8066](https://github.com/nocobase/nocobase/pull/8066)) by @mytharcher
- **[数据表字段：公式]** 修复无法将公式字段添加到筛选表单的问题。 ([#8071](https://github.com/nocobase/nocobase/pull/8071)) by @gchust
- **[区块：操作面板]** 优化操作面板 List 布局间距 ([#8084](https://github.com/nocobase/nocobase/pull/8084)) by @katherinehhh
- **[AI 员工]**

  - 修复 AI 添加数据源角色名称未被编译的问题 ([#8076](https://github.com/nocobase/nocobase/pull/8076)) by @heziqiang
  - 修复部分当前记录字段无法展示在变量选择列表里的问题。 ([#8053](https://github.com/nocobase/nocobase/pull/8053)) by @gchust
- **[操作：导入记录]** 导入的字段和导入权限设置的字段不匹配 ([#8075](https://github.com/nocobase/nocobase/pull/8075)) by @2013xile
- **[权限控制]** 给外部数据源添加数据表关联操作的权限判断中间件 ([#8062](https://github.com/nocobase/nocobase/pull/8062)) by @2013xile
- **[工作流：审批]**

  - 修复权限范围中包含变量时加载相关审批无数据的问题 by @mytharcher
  - 修复审批人提交表单中已填写的内容消失的问题 by @mytharcher
  - 修复在数据详情弹窗中加载相关审批时的权限报错 by @mytharcher
  - 修复分支模式和顺序会签时流程处理错误的问题 by @mytharcher
  - 修复加载审批列表时内存溢出的问题 by @mytharcher
  - 修复退回分支中无法使用审批节点结果中的审批记录数据的问题 by @mytharcher
  - 修复审批人弹窗不显示标题的问题 by @zhangzhonghe
  - 修复在仅角色并集模式下加载相关审批报错和无数据的问题 by @mytharcher
- **[邮件管理]**

  - 对异常数据进行兜底处理 by @jiannx
  - 不同步 Gmail 的定时状态 by @jiannx
