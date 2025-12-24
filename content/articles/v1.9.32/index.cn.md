### 🎉 新特性

- **[工作流]** 为工作流增加新的系统变量，包括“应用实例 ID”和“生成雪花 ID” ([#8223](https://github.com/nocobase/nocobase/pull/8223)) by @mytharcher

### 🐛 修复

- **[client]** 修复展示关联字段懒加载时因无限循环导致的栈溢出问题 ([#8262](https://github.com/nocobase/nocobase/pull/8262)) by @zhangzhonghe

- **[操作：导入记录]** 修复导入操作遇到错误时，消息中的行索引总是显示为 1 的问题 ([#8244](https://github.com/nocobase/nocobase/pull/8244)) by @mytharcher

- **[工作流：人工处理节点]** 修复取消已删除工作流的执行计划时报错的问题 ([#8258](https://github.com/nocobase/nocobase/pull/8258)) by @mytharcher

- **[数据表字段：自动编码]** 修复运行 field-sequence 插件的 repair 命令时遇到当前环境不存在的 collection 时报错的问题 ([#8251](https://github.com/nocobase/nocobase/pull/8251)) by @cgyrock

- **[操作：导入记录 Pro]** 修复导入的重复字段检查逻辑，唯一字段为 null 时将报错 by @mytharcher

- **[工作流：审批]** 修复重复回滚同一事务的问题 by @mytharcher

