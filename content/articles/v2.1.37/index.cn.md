### 🎉 新特性

- **[client-v2]** 为 V2 字段值编辑器新增 Date 变量，并支持非日期字段的格式化输出。 ([#10289](https://github.com/nocobase/nocobase/pull/10289)) by @katherinehhh

### 🐛 修复

- **[client-v2]**

  - 修复 v2 弹窗编辑子表格的新增和编辑弹窗中缺失或取值不正确的 `Current popup` 上级记录变量。 ([#10292](https://github.com/nocobase/nocobase/pull/10292)) by @katherinehhh
  - 修复子表格关系字段赋值时上级项变量解析到错误层级的问题。 ([#10249](https://github.com/nocobase/nocobase/pull/10249)) by @gchust
  - 修复移动端选择列表取消按钮语言不一致的问题 ([#10297](https://github.com/nocobase/nocobase/pull/10297)) by @zhangzhonghe
- **[data-source-manager]** 修复从数据库同步字段后公式字段变为数字字段的问题 ([#10303](https://github.com/nocobase/nocobase/pull/10303)) by @2013xile
- **[database]** 修复应用重启后迁移包遗漏多对多中间表数据的问题 ([#10306](https://github.com/nocobase/nocobase/pull/10306)) by @cgyrock
- **[备份管理器]** 修复异步导出任务触发重复自动备份的问题 ([#10300](https://github.com/nocobase/nocobase/pull/10300)) by @gchust
- **[AI 员工]** AI 员工操作现已支持在 v2 表单中通过联动规则控制显示和隐藏。 ([#10298](https://github.com/nocobase/nocobase/pull/10298)) by @jiannx
- **[数据源：外部 NocoBase]** 修复 AI 工作流无法读取外部 NocoBase 文件表和附件字段文件的问题 by @2013xile
- **[迁移管理]** 修复应用重启后的多对多中间表迁移数据问题，并将迁移规则归类为系统数据 by @cgyrock
- **[工作流：审批]** 修复审批意见使用 RunJS 时默认值不生效的问题 by @zhangzhonghe
- **[应用监管器]** 修复创建应用时数据库名称、schema 或数据表前缀可使用非英文字母开头或非法字符的问题。 by @hongboji
