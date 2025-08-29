### 🚀 优化

- **[工作流]** 调整工作流变量接口，支持预置额外变量列表 ([#7439](https://github.com/nocobase/nocobase/pull/7439)) by @mytharcher

- **[工作流：审批]**
  - 支持在自定义通知中使用审批相关变量 by @mytharcher

  - 支持结束节点终止流程后，变更审批状态 by @mytharcher

### 🐛 修复

- **[client]**
  - 修复在某些场景下，移动端数据选择器弹窗编辑记录时出错的问题 ([#7444](https://github.com/nocobase/nocobase/pull/7444)) by @zhangzhonghe

  - 子表格中附件字段必填校验不生效的问题 ([#7431](https://github.com/nocobase/nocobase/pull/7431)) by @katherinehhh

  - 修复附件 URL 字段的 URL 中包含查询参数时图标展示不正确的问题 ([#7432](https://github.com/nocobase/nocobase/pull/7432)) by @mytharcher

- **[database]**
  - 修复了站内消息加载更多时出现的 MySQL 语法错误。 ([#7438](https://github.com/nocobase/nocobase/pull/7438)) by @aaaaaajie

  - 修复导出 Number 类型字段时的精度问题 ([#7421](https://github.com/nocobase/nocobase/pull/7421)) by @aaaaaajie

- **[undefined]** 修复 MySQL 外部数据源中仅按日期字段筛选数据不正确的问题 ([#7422](https://github.com/nocobase/nocobase/pull/7422)) by @aaaaaajie

- **[操作：导入记录]** 修复了当表的主键为单行文本时导入失败的问题 ([#7416](https://github.com/nocobase/nocobase/pull/7416)) by @aaaaaajie

- **[工作流]**
  - 补全自动删除工作流的执行状态选项 ([#7436](https://github.com/nocobase/nocobase/pull/7436)) by @mytharcher

  - 修复待办中心移动端菜单相关问题 ([#7419](https://github.com/nocobase/nocobase/pull/7419)) by @mytharcher

- **[操作：导入记录 Pro]** 修复在 xlsx 导入中使用字符串主键时更新结果不符合预期的问题。 by @aaaaaajie

