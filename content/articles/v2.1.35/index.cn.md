### 🚀 优化

- **[工作流：HTTP 请求节点]** 修复不稳定的测试用例 ([#10246](https://github.com/nocobase/nocobase/pull/10246)) by @mytharcher

- **[操作：批量更新]** v2 更新记录和批量更新操作支持配置提交成功后的提示、关闭和跳转行为。 ([#10278](https://github.com/nocobase/nocobase/pull/10278)) by @katherinehhh

- **[操作：导出记录]** v2 导入和导出按钮的字段配置支持检索。 ([#10261](https://github.com/nocobase/nocobase/pull/10261)) by @katherinehhh

- **[操作：导出记录 Pro]** v2 导入 Pro 和导出 Pro 按钮的字段配置支持检索。 by @katherinehhh

### 🐛 修复

- **[client-v2]** 修复 v2 JS 列事件流触发条件中缺少“当前记录”变量的问题。 ([#10279](https://github.com/nocobase/nocobase/pull/10279)) by @katherinehhh

- **[database]** 修复 MSSQL 中筛选多值关系并按主集合字段排序分页时查询报错的问题 ([#10224](https://github.com/nocobase/nocobase/pull/10224)) by @cgyrock

- **[data-source-manager]** 修复外部数据源数据表同步后已移除的数据表仍残留在数据库管理器中的问题 ([#10209](https://github.com/nocobase/nocobase/pull/10209)) by @cgyrock

- **[工作流：JavaScript 节点]** 修复 JavaScript 工作流节点在脚本返回或异步工作流超时后 Worker 不退出的问题 ([#10241](https://github.com/nocobase/nocobase/pull/10241)) by @mytharcher

- **[数据表字段：自动编码]** 修复数据迁移后多条记录共用最新创建时间时自动编号可能重复的问题 ([#10239](https://github.com/nocobase/nocobase/pull/10239)) by @mytharcher

- **[数据源：外部 SQL Server]** 不适用——仅新增回归测试覆盖 by @cgyrock

- **[AI: 知识库]** 修复 PGVector 知识库搜索占用无用 PostgreSQL 连接，以及不同向量表重复创建连接池的问题。 by @cgyrock

- **[数据源：外部 MySQL]** 修复外部数据库数据源新增表后，之前已选择的表从运行时集合中消失的问题。 by @cgyrock

- **[工作流：审批]**
  - 修复审批发起详情中子表格字段内容不显示的问题 by @zhangzhonghe

  - 支持为审批意见配置默认值 by @zhangzhonghe

