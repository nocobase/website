### 🚀 优化

- **[acl]** 支持 `acl.registerSnippet` 接口合并权限片段的配置 ([#8155](https://github.com/nocobase/nocobase/pull/8155)) by @mytharcher
- **[client]** 百分比字段支持数字格式化设置 ([#8123](https://github.com/nocobase/nocobase/pull/8123)) by @katherinehhh
- **[flow-engine]** 支持动态隐藏配置菜单 ([#7924](https://github.com/nocobase/nocobase/pull/7924)) by @gchust
- **[区块：网格卡片]** 优化网格卡片区块样式，使布局更紧凑 ([#8152](https://github.com/nocobase/nocobase/pull/8152)) by @katherinehhh
- **[AI 员工]** 内置 AI 员工提示词支持编辑。<br/>优化 Nathan (AI 员工) 的系统提示词。<br/>修复了服务端读取静态文件的问题。 ([#8097](https://github.com/nocobase/nocobase/pull/8097)) by @heziqiang
- **[工作流]**

  - 为执行器的准备阶段增加容错逻辑，避免数据缺失造成的流程挂起 ([#8156](https://github.com/nocobase/nocobase/pull/8156)) by @mytharcher
  - 对工作流画布的关系数据使用懒加载，以提升性能 ([#8142](https://github.com/nocobase/nocobase/pull/8142)) by @mytharcher
- **[数据表字段：Markdown(Vditor)]** 调整Markdown 字段在阅读态下默认不解析变量 ([#8145](https://github.com/nocobase/nocobase/pull/8145)) by @katherinehhh

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
