### 🚀 优化

- **[区块：树]** 树筛选区块现已支持配置默认排序。 ([#10339](https://github.com/nocobase/nocobase/pull/10339)) by @jiannx

### 🐛 修复

- **[client-v2]**
  - 修复筛选表单在 UI 编辑模式下自动刷新数据的问题 ([#10356](https://github.com/nocobase/nocobase/pull/10356)) by @zhangzhonghe

  - v2 筛选表单中的树形关系字段默认使用级联选择 ([#10357](https://github.com/nocobase/nocobase/pull/10357)) by @zhangzhonghe

  - 修复移动端单选关联字段再次点击已选记录后无法清空的问题 ([#10346](https://github.com/nocobase/nocobase/pull/10346)) by @zhangzhonghe

  - 修复筛选表单无法直接添加中国行政区字段的问题 ([#10333](https://github.com/nocobase/nocobase/pull/10333)) by @zhangzhonghe

  - 修复表单字段联动规则操作中错误列出 JS item 的问题 ([#10363](https://github.com/nocobase/nocobase/pull/10363)) by @gchust

- **[工作流：JSON 计算]** 修复 JSON 查询任务丢失结构化解析错误并显示 `[object Object]` 的问题 ([#10344](https://github.com/nocobase/nocobase/pull/10344)) by @mytharcher

- **[操作：导出记录]**
  - 修复 Export V2 中调整关系字段后拖拽排序导致页面崩溃的问题。 ([#10335](https://github.com/nocobase/nocobase/pull/10335)) by @katherinehhh

  - 修复按多个关系字段筛选后表格导出报错的问题 ([#10342](https://github.com/nocobase/nocobase/pull/10342)) by @zhangzhonghe

- **[区块：看板]** 修复重新打开看板卡片详情抽屉后已配置内容丢失的问题 ([#10334](https://github.com/nocobase/nocobase/pull/10334)) by @jiannx

- **[文件管理器]** 修复在文件之间切换时视频预览内容不更新的问题 ([#10345](https://github.com/nocobase/nocobase/pull/10345)) by @mytharcher

- **[操作：导入记录 Pro]**
  - 修复异步导入的记录未关联当前空间的问题 by @jiannx

  - 优化导入结果统计文案，明确区分新增记录数与更新记录数 by @mytharcher

- **[工作流：审批]**
  - 修复审批详情中子表格列宽与发起表单不一致的问题 by @zhangzhonghe

  - 为 Client V2 相关审批区块增加数据范围筛选 by @zhangzhonghe

