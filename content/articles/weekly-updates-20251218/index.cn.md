汇总一周产品更新日志，最新发布可以[前往我们的博客查看](https://www.nocobase.com/cn/blog/timeline)。

**NocoBase 目前更新包括的版本更新包括三个分支：`main` ，`next`和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

`main` ：截止目前最稳定的版本，推荐安装此版本。

`next`：包含即将发布的新功能，经过初步测试的版本，可能存在部分已知或未知问题。主要面向测试用户，用于收集反馈和进一步优化功能。适合愿意提前体验新功能并提供反馈的测试用户。

`develop`：开发中的版本，包含最新的功能代码，可能尚未完成或存在较多不稳定因素，主要用于内部开发和快速迭代。适合对产品功能前沿发展感兴趣的技术用户，但可能存在较多问题或不完整功能，不建议在生产环境中使用。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.27](https://www.nocobase.com/cn/blog/v1.9.27)

*发布时间：2025-12-17*

### 🚀 优化

- **[server]** 优化因应用实例不存在导致获取应用维护状态消息异常的容错机制 ([#8196](https://github.com/nocobase/nocobase/pull/8196)) by @2013xile
- **[错误处理器]** SQL 语法错误时，不对外暴露数据库原始提示，避免暴露数据库类型 ([#8195](https://github.com/nocobase/nocobase/pull/8195)) by @2013xile
- **[工作流]** 支持在工作流的复制（版本）过程中，使用已复制的工作流中使用旧的配置信息来生成新的配置 ([#8165](https://github.com/nocobase/nocobase/pull/8165)) by @mytharcher

### 🐛 修复

- **[工作流]** 修复手动执行时，选择数据组件的加载列表展示不全的问题 ([#8187](https://github.com/nocobase/nocobase/pull/8187)) by @mytharcher
- **[数据表：连接外部数据（FDW）]** 修复连接大写表名表时的触发器报错 by @2013xile
- **[工作流：审批]** 修复无关的审批待办任务被错误的修改状态为“未处理”的问题 by @mytharcher

### [v1.9.26](https://www.nocobase.com/cn/blog/v1.9.26)

*发布时间：2025-12-16*

### 🚀 优化

- **[acl]** 支持 `acl.registerSnippet` 接口合并权限片段的配置 ([#8155](https://github.com/nocobase/nocobase/pull/8155)) by @mytharcher
- **[权限控制]** 不允许给用户设置 root 角色 ([#8180](https://github.com/nocobase/nocobase/pull/8180)) by @2013xile

### 🐛 修复

- **[授权设置]**

  - 修复 plugin-license ts 构建异常 ([#8183](https://github.com/nocobase/nocobase/pull/8183)) by @jiannx
  - 授权优化，添加提示信息 ([#7993](https://github.com/nocobase/nocobase/pull/7993)) by @jiannx
- **[文件管理器]** 修复预览 OSS 中的 `.txt` 文件时，中文内容显示为乱码的问题 ([#8161](https://github.com/nocobase/nocobase/pull/8161)) by @mytharcher
- **[操作：导入记录]** 同步等待导入后触发的 `afterCreate` 事件完成 ([#8158](https://github.com/nocobase/nocobase/pull/8158)) by @2013xile
- **[数据表：连接外部数据（FDW）]** 修复大写表名表加载失败的问题 by @2013xile
- **[数据源：外部 SQL Server]** 修复 `encrypt` 和 `trustServerCertificate` 选项不可用的问题 by @2013xile

### [v1.9.25](https://www.nocobase.com/cn/blog/v1.9.25)

*发布时间：2025-12-12*

### 🚀 优化

- **[工作流]**
  - 为执行器的准备阶段增加容错逻辑，避免数据缺失造成的流程挂起 ([#8156](https://github.com/nocobase/nocobase/pull/8156)) by @mytharcher
  - 对工作流画布的关系数据使用懒加载，以提升性能 ([#8142](https://github.com/nocobase/nocobase/pull/8142)) by @mytharcher

### 🐛 修复

- **[acl]** 修复 `acl.can` API 当角色是 `root` 是返回 `null` 的问题 ([#8150](https://github.com/nocobase/nocobase/pull/8150)) by @mytharcher
- **[工作流：人工处理节点]** 修复人工待办列表使用了错误的列表 API 的问题 ([#8144](https://github.com/nocobase/nocobase/pull/8144)) by @mytharcher
- **[HTTP 请求加密]** 统一 qs 数组解析格式为 brackets by @chenos
- **[工作流：审批]** 修复工作流删除后取消执行计划时报错的问题 by @mytharcher
- **[迁移管理]** 修复迁移时数据中的换行符丢失问题 by @cgyrock

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.55](https://www.nocobase.com/cn/blog/v2.0.0-alpha.55)

*发布时间：2025-12-17*

### 🚀 优化

- **[server]** 优化因应用实例不存在导致获取应用维护状态消息异常的容错机制 ([#8196](https://github.com/nocobase/nocobase/pull/8196)) by @2013xile
- **[区块：列表]** 补充 Table、List、Grid Card 区块的 Link 按钮配置 ([#8194](https://github.com/nocobase/nocobase/pull/8194)) by @katherinehhh

### 🐛 修复

- **[client]** 修复筛选表单中勾选框选择“否”仍按“是”筛选的问题。 ([#8170](https://github.com/nocobase/nocobase/pull/8170)) by @gchust
- **[迁移管理]** 修复用户输入的迁移描述丢失问题，并使用当前时间作为默认迁移描述 by @cgyrock

### [v2.0.0-alpha.54](https://www.nocobase.com/cn/blog/v2.0.0-alpha.54)

*发布时间：2025-12-17*

### 🎉 新特性

- **[client]** 创建数据表时可以更改预设 id 字段类型 ([#8129](https://github.com/nocobase/nocobase/pull/8129)) by @cgyrock

### 🚀 优化

- **[client]**

  - 调整表格列宽配置方式改为选项选择 ([#8188](https://github.com/nocobase/nocobase/pull/8188)) by @katherinehhh
  - 优化数据选择器样式并设置 maxTagCount ([#8175](https://github.com/nocobase/nocobase/pull/8175)) by @katherinehhh
  - 配置项优化（区块、字段、操作） ([#8141](https://github.com/nocobase/nocobase/pull/8141)) by @katherinehhh
- **[错误处理器]** SQL 语法错误时，不对外暴露数据库原始提示，避免暴露数据库类型 ([#8195](https://github.com/nocobase/nocobase/pull/8195)) by @2013xile
- **[区块：地图]** 地图字段显示模式为文本时支持超出省略设置 ([#8189](https://github.com/nocobase/nocobase/pull/8189)) by @katherinehhh
- **[工作流]** 支持在工作流的复制（版本）过程中，使用已复制的工作流中使用旧的配置信息来生成新的配置 ([#8165](https://github.com/nocobase/nocobase/pull/8165)) by @mytharcher
- **[权限控制]** 不允许给用户设置 root 角色 ([#8180](https://github.com/nocobase/nocobase/pull/8180)) by @2013xile

### 🐛 修复

- **[client]**

  - 修复角色拥有新建权限时新建表单中的提交按钮未显示问题 ([#8190](https://github.com/nocobase/nocobase/pull/8190)) by @katherinehhh
  - 修复子表格/子表单从已有数据选择时，未选中项提交导致数据被清空的问题 ([#8172](https://github.com/nocobase/nocobase/pull/8172)) by @katherinehhh
  - 修复新增表单配置中出现数据范围设置的问题 ([#8176](https://github.com/nocobase/nocobase/pull/8176)) by @katherinehhh
  - 标签页的事件流无法保存 ([#8168](https://github.com/nocobase/nocobase/pull/8168)) by @chenos
  - 修复标签页隐藏后仍占用间距的问题 ([#8167](https://github.com/nocobase/nocobase/pull/8167)) by @chenos
  - 修复关系选择记录器中已选项被错误过滤的问题 ([#8151](https://github.com/nocobase/nocobase/pull/8151)) by @katherinehhh
  - 修复表单中 tableoid 字段渲染错误的问题 ([#8177](https://github.com/nocobase/nocobase/pull/8177)) by @katherinehhh
- **[server]**

  - 更新 license-kit 至最新版本 ([#8173](https://github.com/nocobase/nocobase/pull/8173)) by @jiannx
  - 支持外部数据源使用 Snowflake ID  (53 bits) 类型字段 ([#8185](https://github.com/nocobase/nocobase/pull/8185)) by @2013xile
- **[区块：地图]** 修复菜单切换后地图缩略等级显示不正确的问题 ([#8193](https://github.com/nocobase/nocobase/pull/8193)) by @katherinehhh
- **[工作流]** 修复手动执行时，选择数据组件的加载列表展示不全的问题 ([#8187](https://github.com/nocobase/nocobase/pull/8187)) by @mytharcher
- **[数据可视化]** 修复图表 SQL 模式选择外部数据源的问题；<br/>修复图表区块请求时展示 loading 的问题；<br/> 修复初始空图表取消配置回滚后报错的问题； ([#8169](https://github.com/nocobase/nocobase/pull/8169)) by @heziqiang
- **[AI 员工]** 修复 AI 对话记录文本不换行的问题 ([#8096](https://github.com/nocobase/nocobase/pull/8096)) by @heziqiang
- **[授权设置]**

  - 修复 plugin-license ts 构建异常 ([#8183](https://github.com/nocobase/nocobase/pull/8183)) by @jiannx
  - 授权优化，添加提示信息 ([#7993](https://github.com/nocobase/nocobase/pull/7993)) by @jiannx
- **[文件管理器]** 修复预览 OSS 中的 `.txt` 文件时，中文内容显示为乱码的问题 ([#8161](https://github.com/nocobase/nocobase/pull/8161)) by @mytharcher
- **[数据源：外部 SQL Server]** 修复 `encrypt` 和 `trustServerCertificate` 选项不可用的问题 by @2013xile
- **[数据表：连接外部数据（FDW）]** 修复大写表名表加载失败的问题 by @2013xile
- **[工作流：审批]** 修复无关的审批待办任务被错误的修改状态为“未处理”的问题 by @mytharcher

### [v2.0.0-alpha.53](https://www.nocobase.com/cn/blog/v2.0.0-alpha.53)

*发布时间：2025-12-12*

### 🚀 优化

- **[acl]** 支持 `acl.registerSnippet` 接口合并权限片段的配置 ([#8155](https://github.com/nocobase/nocobase/pull/8155)) by @mytharcher
- **[client]** 百分比字段支持数字格式化设置 ([#8123](https://github.com/nocobase/nocobase/pull/8123)) by @katherinehhh
- **[flow-engine]** 支持动态隐藏配置菜单 ([#7924](https://github.com/nocobase/nocobase/pull/7924)) by @gchust
- **[区块：网格卡片]** 优化网格卡片区块样式，使布局更紧凑 ([#8152](https://github.com/nocobase/nocobase/pull/8152)) by @katherinehhh
- **[AI 员工]** 内置 AI 员工提示词支持编辑。<br/>优化 Nathan (AI 员工) 的系统提示词。<br/>修复了服务端读取静态文件的问题。 ([#8097](https://github.com/nocobase/nocobase/pull/8097)) by @heziqiang
- **[工作流]**

  - 为执行器的准备阶段增加容错逻辑，避免数据缺失造成的流程挂起 ([#8156](https://github.com/nocobase/nocobase/pull/8156)) by @mytharcher
  - 对工作流画布的关系数据使用懒加载，以提升性能 ([#8142](https://github.com/nocobase/nocobase/pull/8142)) by @mytharcher
- **[数据表字段：Markdown(Vditor)]** 调整 Markdown 字段在阅读态下默认不解析变量 ([#8145](https://github.com/nocobase/nocobase/pull/8145)) by @katherinehhh

### 🐛 修复

- **[flow-engine]** 修复附件下载错误问题 ([#8154](https://github.com/nocobase/nocobase/pull/8154)) by @katherinehhh
- **[client]**

  - 修复关系字段下拉在存在 options 字段时显示为灰色不可选的问题 ([#8153](https://github.com/nocobase/nocobase/pull/8153)) by @katherinehhh
  - 修复筛选表单里单选字段使用多选操作符时输入中文会清空已有的选项的问题。 ([#8140](https://github.com/nocobase/nocobase/pull/8140)) by @gchust
  - 修复切换标签字段会造成弹窗配置丢失的问题。 ([#8136](https://github.com/nocobase/nocobase/pull/8136)) by @gchust
- **[acl]** 修复 `acl.can` API 当角色是 `root` 是返回 `null` 的问题 ([#8150](https://github.com/nocobase/nocobase/pull/8150)) by @mytharcher
- **[database]** 查询多目标键（联合唯一键）表时，`filterByTk` 参数支持传入数组 ([#7986](https://github.com/nocobase/nocobase/pull/7986)) by @chenos
- **[操作：导入记录]** 同步等待导入后触发的 `afterCreate` 事件完成 ([#8158](https://github.com/nocobase/nocobase/pull/8158)) by @2013xile
- **[数据表字段：自动编码]** 提升 sequence 字段插件处理repair命令时的健壮性 ([#8139](https://github.com/nocobase/nocobase/pull/8139)) by @cgyrock
- **[工作流：人工处理节点]** 修复人工待办列表使用了错误的列表 API 的问题 ([#8144](https://github.com/nocobase/nocobase/pull/8144)) by @mytharcher
- **[HTTP 请求加密]** 统一 qs 数组解析格式为 brackets by @chenos
- **[工作流：审批]** 修复工作流删除后取消执行计划时报错的问题 by @mytharcher
- **[迁移管理]** 修复迁移时数据中的换行符丢失问题 by @cgyrock
